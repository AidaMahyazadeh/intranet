import { Component, OnInit } from '@angular/core';
import ICourse from 'src/app/core/models/course.model';
import { CoursesListService } from 'src/app/core/services/admin/courses-list.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit{
  displayedColumns=['id','name', 'author','image','description','duration','delete']
  courses !:ICourse[];

  constructor(private coursesListService:CoursesListService){}
  
  ngOnInit() {
    this.coursesListService.getAllCourses().subscribe(
      res=>this.courses=res
    )
  }
  
  onDelete(id:number){
    this.courses= this.courses.filter(course=>course.id!=id)
  }
}
