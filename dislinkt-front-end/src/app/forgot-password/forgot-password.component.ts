import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email: string = '';

  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
 
  });
  constructor() { }

  ngOnInit(): void {
  }

  send(): void {
    if(this.forgotPasswordForm.invalid){
      return;
    }else{
      console.log('Works');
      console.log(this.email);
    }
  }

}
