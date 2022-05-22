import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
      private route: ActivatedRoute
  ) {
    
   }

  ngOnInit(): void {   

     /* this.forgotPasswordService.checkIfExpired(this.tokenId).subscribe(response=>
        {
          console.log(response);
           this.isExpired = response;
           console.log(this.isExpired);
           if(this.isExpired)
              alert('Token expired')
        });
      */ 
       /*
       this.route.queryParams.subscribe(params => {
          this.tokenId = params['tokenId'];
          this.forgotPasswordService.checkIfExpired(this.tokenId).subscribe(response => {
            this.isExpired = response;
            console.log(this.isExpired)
            if(!this.isExpired)
              alert('Token is valid')
          }, error => {
            alert('Token Expireed');
          })
       });
        */
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
      //var passwordRecoveryObj = JSON.stringify(passwordRecovery)
     // console.log(JSON.stringify(passwordRecovery));
      console.log(passwordRecovery);
      this.forgotPasswordService.changePassword(passwordRecovery).subscribe(
        response => {
          console.log(response);
      });
      
    }else{
      console.log('Failed',this.passwordRecoveryForm.invalid);
      alert('Invalid input. Try again');
      return;
    }

  }
}