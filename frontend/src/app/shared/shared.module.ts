import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
