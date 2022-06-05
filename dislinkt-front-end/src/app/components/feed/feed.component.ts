import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PostService } from 'src/app/service/post.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private postService: PostService, private userService: UserService, private datePipe: DatePipe, private authService: AuthenticationService) { }

  userId: string = this.authService.loggedUser?.idUser
  posts: PostModel[] = []
  follow: string = "FOLLOWING"

  ngOnInit(): void {
    this.getFeed();
  }

  getFeed() {
    this.postService.getFeed(this.userId).subscribe((publicPosts: PostModel[]) => {

      publicPosts.forEach(post => {
        post.datePostedString = this.datePipe.transform(post.datePosted, 'dd/MM/yyyy') || ''
        post.dateEditedString = this.datePipe.transform(post.dateEdited, 'dd/MM/yyyy') || ''
      });

      this.posts = publicPosts;
    })
  }

  getUser() {
    this.userService.getUser(this.userId).subscribe((response) => {
    });
  }

  unfollowProfile(ownerId: string) {
    if (this.follow === "FOLLOWING") {
      this.follow = "FOLLOW"
      this.userService.unfollowUser(this.userId, ownerId).subscribe();
      alert("You unfollow user "+ownerId);
      this.getFeed();
    }
  }

}
