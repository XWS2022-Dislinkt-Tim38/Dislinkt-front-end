import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user';
import { UserProfile } from 'src/app/model/userProfile';
import { RegistrationService } from 'src/app/service/registration.service';

/*export class User{
  constructor(
    public username: string,
    public email: string,
    public password: string
  ){}
}
*/

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
  //dateOfBirth: string = '';
  //gender: string = '';
  //biography: string = '';

  //profile = new UserProfile();

  user= new UserModel();

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

  regSuccess:boolean = false;

  ngOnInit(): void {
    this.regSuccess = false;
  }

  
  register(): void {
    
    if (this.registerForm.valid && (this.password === this.confirmPassword)) {
        console.log('Works');

        var registration = {
          username: this.username,
          email: this.email,
          password: this.password,
          firstName: this.firstname,
          lastName: this.lastname,
          phoneNumber: this.phoneNumber,
          address: this.address,
          gender: 'male',
          dateOfBirth: new Date(),
          profile: {
            biography: '',
            skills: ['none'],
            interests: ['none'],
            education: [{
              institutionType: 'none',
              institutionName: 'none',
              title: 'none',
              startDate: new Date(),
              endDate: new Date()
            }],
            experience: [{
              companyName: 'none',
              city: 'none',
              jobTitle: 'none',
              startDate: new Date(),
              endDate: new Date()
            }]

          }
        }
        console.log(registration);
        this.registrationService.addUser(registration).subscribe(response => {
          this.regSuccess = true;
          alert("Confirmation email sent!")
          window.location.href="http://localhost:4200/login"
        });
      
    }else{
      console.log('Failed',this.registerForm.invalid);
      alert('Invalid input. Try again');
      return;
    }
  }


}
