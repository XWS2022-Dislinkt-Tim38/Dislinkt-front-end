import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

export class User{
  constructor(
    public username: string,
    public password: string
  ){}
}

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
    private loginService: LoginService
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
      this.loginService.createAuthenticationToken(login).subscribe();
    }
  
  }
}
