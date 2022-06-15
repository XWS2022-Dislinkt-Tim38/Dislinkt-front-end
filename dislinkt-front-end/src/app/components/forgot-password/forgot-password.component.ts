import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/service/forgot-password.service';
import { environment } from 'src/environments/environment';

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
    private forgotPasswordService: ForgotPasswordService,
    private router: Router
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
        {
          next: () => 
          {
            alert("A password recovery e-mail has been sent to this address")
            this.router.navigate(['/'])
            
          }
        }
        
      );
    }
  }

}
