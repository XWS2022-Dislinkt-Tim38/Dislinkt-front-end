import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/components/registration/registration.service';

export class User{
  constructor(
    public username: string,
    public email: string,
    public password: string
  ){}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})


export class RegistrationComponent implements OnInit {

  //hide1 = true;
  //hide2 = true;
  firstname: string = '';
  lastname: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: string = '';
  address: string = '';
  confirmPassword: string = '';

  registerForm = new FormGroup({
    firstname:  new FormControl('', [Validators.required, Validators.pattern('^[A-Z][A-za-z ]{1,15}')]),
    lastname:  new FormControl('', [Validators.required, Validators.pattern('^[A-Z][A-za-z ]{1,15}')]),
    phoneNumber:  new FormControl('', [Validators.required, Validators.pattern('[0-9]{6,12}')]),
    address:  new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]{4,20}$')]),
    username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9.]{4,9}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
    confirmPassword: new FormControl('', Validators.required)
  });
  
  constructor(
      private registrationService: RegistrationService
     
  ) { }

  ngOnInit(): void {
   
  }

  

  register(): void {
    
    if (this.registerForm.valid && (this.password === this.confirmPassword)) {
        console.log('Works');

        var registration = {
          username: this.username,
          email: this.email,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname,
          phoneNumber: this.phoneNumber,
          address: this.address
        }
        console.log(registration);
        this.registrationService.addUser(registration).subscribe();
      
    }else{
      console.log('Failed',this.registerForm.invalid);
      alert('Invalid input. Try again');
      return;
    }
  }


}
