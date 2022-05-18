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
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.loginForm.invalid){
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
