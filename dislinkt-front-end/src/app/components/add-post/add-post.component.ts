
import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private postService: PostService, private authService: AuthenticationService) { }

  userId: string = this.authService.loggedUser?.idUser;
  username: string = "";
  post: PostModel = new PostModel();
  imageUrl: string = "";

  ngOnInit(): void {
    this.getUser();
  }

  cancel() {
    this.router.navigate(['myPosts']);
  }

  addImage(event: any) {
    this.post.image = "/assets/img/" + this.imageUrl.substring(12);
  }

  createPost() {
    if (this.post.content === undefined || this.post.content.length === 0
      || this.post.title === undefined || this.post.title.length === 0
      || this.post.link === undefined || this.post.link.length === 0
      || this.post.image === undefined || this.post.image.length === 0
    ) {
      alert("Some fields are empty");
    }
    else {
      this.post.username = this.username;
      this.post.ownerId = this.userId;
      this.post.datePosted = new Date();
      this.post.dateEdited = new Date();
      this.postService.addPost(this.post).subscribe( (response) => {
        alert("Post is successfully created.");
        this.router.navigate(['myPosts']);
      })
    }
  }

  getUser() {
    this.userService.getUser(this.userId).subscribe((response) => {
      this.username = response.username;
    });
  }

}
