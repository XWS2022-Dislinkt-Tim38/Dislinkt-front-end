import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {

  constructor(private router: Router, private postService: PostService, private datePipe: DatePipe, private authService: AuthenticationService) { }

  userId: string = this.authService.loggedUser?.idUser
  posts: PostModel[] = [];
  isDisabled: boolean = true;
  isRemovable: boolean = false;
  search: string = "";

  ngOnInit(): void {
    this.getOwnerPosts();
  }

  redirectToAddPost(){
    this.router.navigate(['addPost']);
  }

  getOwnerPosts() {
    this.postService.getOwnerPosts(this.userId).subscribe((publicPosts: PostModel[]) => {

      publicPosts.forEach(post => {
        post.datePostedString = this.datePipe.transform(post.datePosted, 'dd/MM/yyyy') || ''
        post.dateEditedString = this.datePipe.transform(post.dateEdited, 'dd/MM/yyyy') || ''
      });

      this.posts = publicPosts;
    })
  }

  changeViewToEditable(post: PostModel) {
    this.isRemovable = false;
    if (this.isDisabled) {
      this.isDisabled = false;
    }
    else {
      this.isDisabled = true;
    }
  }

  changeViewToRemovable() {
    this.isDisabled = true;
    this.isRemovable = true;
  }

  updatePost(post: PostModel) {
    this.postService.updatePost(post).subscribe();
    this.isDisabled = true;
    alert("Post is sucessfully updated.");
  }

  deletePost(postId: String) {
    this.postService.deletePost(postId).subscribe();
    this.isDisabled = true;
    this.isRemovable = false;
    alert("Post is sucessfully deleted.");
    this.getOwnerPosts();
  }

  searchPosts(event: any) {
    if(this.search.length === 0 || this.search === null || this.search === undefined){
      this.getOwnerPosts();
    }
    this.postService.getSearchedPosts(this.userId, this.search).subscribe((publicPosts: PostModel[]) => {
      publicPosts.forEach(post => {
        post.datePostedString = this.datePipe.transform(post.datePosted, 'dd/MM/yyyy') || ''
        post.dateEditedString = this.datePipe.transform(post.dateEdited, 'dd/MM/yyyy') || ''
      });
      this.posts = publicPosts;
    })
  }
}
