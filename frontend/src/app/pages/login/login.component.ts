import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthStorageService } from 'src/app/core/services/auth/auth-storage.service';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !:FormGroup ;
  eyeIcon = 'visibility_off';
  type = 'password';
  isText = false;

  constructor(
    private authService :AuthenticationService,
    private authStorageService :AuthStorageService,
    private router :Router,
    private toast : ToastrService,
    ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    })
  }

  hideShowPassword(){
    this.isText =!this.isText
    this.type = this.isText ?'text':'password';
    this.eyeIcon = this.isText ?'visibility': 'visibility_off';
  }

  onSignup(){
    this.router.navigate(['signup'])
  }
  
onLogin(){
if(this.loginForm.valid){
  this.authService.login(this.loginForm.value).subscribe({
    next:
      (res)=>{
       this.authStorageService.storeToken(res.token) 
       this.authStorageService.storeRole(res.user.role)
       this.authStorageService.storeUserName(res.user.username)
      //  res.user.role==='admin'?this.router.navigate(['admin']):this.router.navigate(['home'])
       switch(res.user.role){
        case 'admin': this.router.navigate(['admin']);
        break;
        case 'student' :this.router.navigate(['home']);
        break;
        case 'professor' :this.router.navigate(['professor'])
       }
       this.toast.success(`Welcome back, ${this.loginForm.controls['username'].value}!`)
      },
    error:
      (err) =>{
        this.toast.error(err.error.message)
      }
  })
}else{
   this.toast.warning('You should fill in all fields.')
}
}
}