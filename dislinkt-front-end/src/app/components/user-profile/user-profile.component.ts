import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  testUser(): void{

    this.userService.testUser().subscribe(response => {
      if(response)
        alert("Successfully reached API as User")     
    }, error => {
        alert("You are not authorized to see this page")
    })
  }

}
