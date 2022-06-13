import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule} from '@angular/material/menu'
import { MatListModule } from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthInterceptorProvider} from './auth.interceptor';
import { MatCardModule} from '@angular/material/card';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PasswordlessLoginComponent } from './components/passwordless-login/passwordless-login.component';
import { PostsPublicComponent } from './components/posts-public/posts-public.component'
import { DatePipe } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { AddPostComponent } from './components/add-post/add-post.component'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    PasswordRecoveryComponent,
    ForgotPasswordComponent,
    UserProfileComponent,
    PasswordlessLoginComponent,
    PostsPublicComponent,
    FeedComponent,
    MyPostsComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [AuthInterceptorProvider, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
