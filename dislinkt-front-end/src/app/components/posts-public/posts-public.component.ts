import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { DatePipe } from '@angular/common'
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-posts-public',
  templateUrl: './posts-public.component.html',
  styleUrls: ['./posts-public.component.scss']
})
export class PostsPublicComponent implements OnInit {

  userId: string = this.authService.loggedUser?.idUser
  posts: PostModel[] = []
  following: string[] = []

  constructor(private userService: UserService, private authService: AuthenticationService, private postService: PostService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getUser();
    this.getAllPublicPosts()
  }

  getAllPublicPosts() {
    this.postService.getAllPublicPosts().subscribe((publicPosts: PostModel[]) => {

      publicPosts.forEach(post => {
        post.datePostedString = this.datePipe.transform(post.datePosted, 'dd/MM/yyyy') || ''
        post.dateEditedString = this.datePipe.transform(post.dateEdited, 'dd/MM/yyyy') || ''
      });
      this.posts = publicPosts;
      for (let post of this.posts) {
        if(this.checkFollow(post.ownerId)){
          this.setProfileFollowFlag(post)
        }
        else {
          this.setProfileUnfollowFlag(post);
        }
      }
    })
  }

  getUser() {
    this.userService.getUser(this.userId).subscribe((response) => {
      this.following = response.following;
    });
  }

  setProfileFollowFlag(post: PostModel){
    post.followFlag = "FOLLOWING"
  }
  setProfileUnfollowFlag(post: PostModel){
    post.followFlag = "FOLLOW"
  }

  checkFollow(ownerId: string): boolean{
    for(let f of this.following){
      if(f.includes(ownerId)){
        return true;
      }
    }
    return false;
  }

  followProfile(post: PostModel) {
    if (post.followFlag === "FOLLOWING") {
      this.userService.unfollowUser(this.userId, post.ownerId).subscribe();
      alert("You unfollow user " + post.ownerId);
    }
    else {
      this.userService.followUser(this.userId, post.ownerId).subscribe();
  
      alert("You follow user " + post.ownerId);
    }
  }

}
