import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/service/forgot-password.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  newPassword: string = '';
  confirmPassword: string = '';
  tokenId: string = '';
  isExpired: boolean = false;

  passwordRecoveryForm = new FormGroup({
    newPassword:  new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(
      private forgotPasswordService: ForgotPasswordService,
      private route: ActivatedRoute,
      private router: Router
  ) {
    
   }

  ngOnInit(): void {   
  }

  public get token(){
    return this.route.snapshot.paramMap.get('id')
  }

  changePassword(): void {

    if (this.passwordRecoveryForm.valid && (this.newPassword === this.confirmPassword)) {

        console.log('Works');
        var passwordRecovery = {
        
          tokenId: this.route.snapshot.paramMap.get('id'),
          newPassword: this.newPassword
       }
      console.log(passwordRecovery);
      this.forgotPasswordService.changePassword(passwordRecovery).subscribe(
        {
          error: () => 
          {
            alert("Token used or expired")
            this.router.navigate(['/'])
          },
          next: () => 
          {
            alert("Successfully changed password")
            this.router.navigate(['/login'])
          }
        }
      );
      
    }else{
      console.log('Failed',this.passwordRecoveryForm.invalid);
      alert('Invalid input. Try again');
      return;
    }

  }
}