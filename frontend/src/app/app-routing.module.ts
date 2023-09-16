import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminAuthGuard } from './core/services/guards/admin-auth.guard';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {path : '', redirectTo :'login',pathMatch:'full'}, 
  {path: 'login',component:LoginComponent},
  {path :'signup',component :SignupComponent},
  {path : 'home' ,component :HomeComponent},
  {path :'admin',canActivate :[adminAuthGuard] ,loadChildren:()=>import('./admin/admin.module').then(module=>module.AdminModule)},
  {
    path :'courses',loadChildren :()=>import('./courses/courses.module').then(module=>module.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
