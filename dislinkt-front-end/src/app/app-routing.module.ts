import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';

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
  {path: "password-recovery", component: PasswordRecoveryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
