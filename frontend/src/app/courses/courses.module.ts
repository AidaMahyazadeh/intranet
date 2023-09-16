import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CoursesComponent } from './courses.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    CoursesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class CoursesModule { }
