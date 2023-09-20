import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';

import { CoursesComponent } from './courses.component';
import { SearchComponent } from './search/search.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ConfirmEnrollmentDialogComponent } from './confirm-enrollment-dialog/confirm-enrollment-dialog.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CoursesComponent,
    SearchComponent,
    CourseDetailsComponent,
    ConfirmEnrollmentDialogComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class CoursesModule { }
