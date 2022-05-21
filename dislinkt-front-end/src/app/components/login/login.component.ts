import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9.]{4,9}$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')])
  });

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.loginForm.invalid){
      alert('Invalid input. Try again.');
      return;
    }else{
      console.log('Works');
      var login = {
        username: this.username,
        password: this.password
        
      }
      console.log(login);
      this.authService.login(login).subscribe()
    }
  
  }
}
