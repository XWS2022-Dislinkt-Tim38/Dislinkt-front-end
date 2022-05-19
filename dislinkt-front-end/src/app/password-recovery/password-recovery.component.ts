import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  password: string = '';
  newPassword: string = '';


  passwordRecoveryForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
    newPassword:  new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: confirmPasswordValidator});

  constructor() { }

  ngOnInit(): void {
  }

  changePassword(): void {
   // if (this.passwordRecoveryForm.invalid) {
   //   return;
  //  }else{
      console.log('Works');
      var passwords = {
        password: this.password,
        newPassword: this.newPassword
      }
      console.log(passwords);
  //  }
  }

}

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const newPassword = control.get('newPassword');
  const confirmPassword = control.get('confirmPassword');

  return newPassword && confirmPassword && newPassword.value === confirmPassword.value ? { confirmPassword: true } : { confirmPassword: false };
};
