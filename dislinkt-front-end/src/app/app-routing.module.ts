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

const routes: Routes = [

  {path: "", component: HomeComponent },
  {path: "login",
   component: LoginComponent,
  /* children: [
     {path: "forgot-password", component: ForgotPasswordComponent}
   ]
*/
  },
  {path: "registration", component: RegistrationComponent },
  {path: "forgot-password", component: ForgotPasswordComponent},
  {path: "password-recovery", component: PasswordRecoveryComponent},
  
  {
    path: "admin", component: AdminComponent,
    canActivate: [LoggedInGuard, HasRoleGuard],
    data: {
      role: 'ADMIN'
    }
  },

  {
    path: "user", component: UserProfileComponent,
    canActivate: [LoggedInGuard, HasRoleGuard],
    data: {
      role: 'USER'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
