import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';
import { UserTokenModel } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  username: string = '';
  gender: string = '';
  address: string = '';
  email: string = '';
  phoneNumber: string = '';
  dateOfBirth: string = '';


  userInfo?: UserTokenModel
  user= new UserModel();

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName:  new FormControl('', Validators.required),
    username:  new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    gender: new FormControl(),
    dateOfBirth: new FormControl()
  });
  
  constructor(private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn$){
      this.userInfo = JSON.parse(atob(this.authService.token.split('.')[1])) as UserTokenModel;
    }
    
    this.userService.getUserByUsername(this.userInfo?.sub).subscribe((user: UserModel)  => {
        this.user = user;
    });
  }

  testAdmin(): void{

    this.userService.testAdmin().subscribe(response => {
      if(response)
        alert("Successfully reached API as Admin")     
    }, error => {
        alert("You are not authorized to see this page")
    })
  }

  save(): void {
    this.userService.updateUser(this.user).subscribe((user: UserModel) =>{
          this.user = user;
    });
  }
}
