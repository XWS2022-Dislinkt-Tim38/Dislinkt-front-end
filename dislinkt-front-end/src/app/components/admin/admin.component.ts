import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  testAdmin(): void{

    this.userService.testAdmin().subscribe(response => {
      if(response)
        alert("Successfully reached API as Admin")     
    }, error => {
        alert("You are not authorized to see this page")
    })
  }
}
