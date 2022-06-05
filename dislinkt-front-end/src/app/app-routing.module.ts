import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HasRoleGuard } from './auth/has-role.guard';
import { LoggedInGuard } from './auth/logged-in.guard';
import { PasswordlessLoginComponent } from './components/passwordless-login/passwordless-login.component'; 
import { PostsPublicComponent } from './components/posts-public/posts-public.component';
import { FeedComponent } from './components/feed/feed.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';

const routes: Routes = [

  {path: "", component: HomeComponent },
  {
    path: "login",
    component: LoginComponent,
  },

  {
    path: "registration", 
    component: RegistrationComponent },
 
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "password-recovery/:id", 
    component: PasswordRecoveryComponent
  },
  
  {
    path: "admin", component: AdminComponent,
    canActivate: [LoggedInGuard, HasRoleGuard],
    data: {
      role: 'ADMIN'
    }
  },

  {
    path: "user", component: UserProfileComponent,
    canActivate: [LoggedInGuard],
    data: {
      role: 'USER'
    }
  },
  { 
    path: "passwordless", 
    component: PasswordlessLoginComponent
  },
  {
    path: "posts",
    component: PostsPublicComponent
  },
  {
    path: "feed",
    canActivate: [LoggedInGuard],
    component: FeedComponent
  },
  {
    path: "myPosts",
    canActivate: [LoggedInGuard],
    component: MyPostsComponent,
  },
  {
    path: "addPost",
    canActivate: [LoggedInGuard],
    component: AddPostComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
