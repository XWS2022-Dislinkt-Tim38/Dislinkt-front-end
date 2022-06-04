import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private postService: PostService, private datePipe: DatePipe, private authService: AuthenticationService) { }

  userId: string = this.authService.loggedUser?.idUser
  posts: PostModel[] = []

  ngOnInit(): void {
    this.postService.getFeed(this.userId).subscribe((publicPosts: PostModel[]) => {
      
      publicPosts.forEach(post => {
        post.datePostedString = this.datePipe.transform(post.datePosted, 'dd/MM/yyyy') || ''
        post.dateEditedString = this.datePipe.transform(post.dateEdited, 'dd/MM/yyyy') || ''
      });
      
      this.posts = publicPosts;
    })
  }

}
