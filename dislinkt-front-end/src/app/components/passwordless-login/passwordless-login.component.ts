import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-passwordless-login',
  templateUrl: './passwordless-login.component.html',
  styleUrls: ['./passwordless-login.component.scss']
})
export class PasswordlessLoginComponent implements OnInit {

  tokenId: string = ""
  constructor(private authService: AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        this.tokenId = params['tokenId'];
        console.log(this.tokenId)
        this.authService.passwordlessLogin(this.tokenId).subscribe(response => {
          alert("Successfully logged in!")
        }, error => {
          alert("Token Expired!")
        })
      },
    );
  }

}
