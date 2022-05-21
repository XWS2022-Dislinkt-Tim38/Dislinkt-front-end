import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/service/forgot-password.service';

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
  constructor(
    private forgotPasswordService: ForgotPasswordService
  ) { }

  ngOnInit(): void {
  }

  send(): void {
    if(this.forgotPasswordForm.invalid){
      return;
    }else{
      console.log('Works');
      console.log(this.email);
      this.forgotPasswordService.resetPasswordRequest(this.email).subscribe(
        response => {
          console.log(response+"super");
      });
    }
  }

}
