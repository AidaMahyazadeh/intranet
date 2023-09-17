import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

import { AdminComponent } from './admin.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CourselistComponent } from './courselist/courselist.component';
import { ProfessorsComponent } from './professors/professors.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { NewProfessorComponent } from './new-professor/new-professor.component';
import { ModifyDetailProfessorComponent } from './modify-detail-professor/modify-detail-professor.component';






@NgModule({
  declarations: [
    AdminComponent,
    UserlistComponent,
    CourselistComponent,
    ProfessorsComponent,
    SidebarComponent,
    NewProfessorComponent,
    ModifyDetailProfessorComponent
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class AdminModule { }
