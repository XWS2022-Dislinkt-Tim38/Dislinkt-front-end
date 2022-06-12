import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/model/user';
import { UserProfile } from 'src/app/model/userProfile';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';


export interface UserTokenModel{
  role:any;
  sub: any;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  username: string = '';
  gender: string = '';
  address: string = '';
  email: string = '';
  phoneNumber: string = '';
  dateOfBirth: string = '';
  isPublic: boolean = false;
  following: Number[] = [];
  followers: Number[] = [];

  biography?: string = '';
  skills : string[] = [];
  interests: string[] =[];

  profile = new UserProfile();

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
    dateOfBirth: new FormControl(),
    isPublic: new FormControl(),
    biography: new FormControl()
  });
  
  constructor(private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit(): void {

      if(this.authService.isLoggedIn$){
        this.userInfo = JSON.parse(atob(this.authService.token.split('.')[1])) as UserTokenModel;
      }
      
      
      this.userService.getUserByUsername(this.userInfo?.sub).subscribe((response)  => {
          console.log(response);
          this.following = response.following;
          this.followers = response.followers;
          this.user = response;
          this.profile = response.profile;
      });
     
  }

  testUser(): void{

    this.userService.testUser().subscribe(response => {
      if(response)
        alert("Successfully reached API as User")     
    }, error => {
        alert("You are not authorized to see this page")
    })
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
          console.log(user)
          console.log(user.profile.biography);

    });
  }

}
