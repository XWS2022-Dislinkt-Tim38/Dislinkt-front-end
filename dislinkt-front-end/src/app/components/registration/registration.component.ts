import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})


export class RegistrationComponent implements OnInit {

  hide1 = true;
  hide2 = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor() { }

  ngOnInit(): void {
    
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  signUp(): void {
    console.log("Test Sign Up")
  }
  

}
