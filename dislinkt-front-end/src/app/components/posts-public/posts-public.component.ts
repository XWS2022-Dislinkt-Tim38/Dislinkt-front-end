import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-posts-public',
  templateUrl: './posts-public.component.html',
  styleUrls: ['./posts-public.component.scss']
})
export class PostsPublicComponent implements OnInit {

  posts: PostModel[] = []

  constructor(private postService: PostService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.postService.getAllPublicPosts().subscribe((publicPosts: PostModel[]) => {
      
      publicPosts.forEach(post => {
        post.datePostedString = this.datePipe.transform(post.datePosted, 'dd/MM/yyyy') || ''
        post.dateEditedString = this.datePipe.transform(post.dateEdited, 'dd/MM/yyyy') || ''
      });
      
      this.posts = publicPosts;
    })
  }

}
