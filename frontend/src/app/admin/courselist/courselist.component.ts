import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import ICourse from 'src/app/core/models/course.model';
import { CoursesListService } from 'src/app/core/services/admin/courses-list.service';
import { ModifyCoursesComponent } from './modify-courses/modify-courses.component';


@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit{
  // displayedColumns=['id','name', 'author','image','description','duration','delete']
  courses !:ICourse[];
  selectedCourse !:ICourse;

  constructor(
    private coursesListService:CoursesListService,
    private dialog :MatDialog
    ){}
  
  ngOnInit() {
    this.coursesListService.getAllCourses().subscribe(
      res=>this.courses=res
    )
  }

  getCourseById(courseId:number){
   return this.selectedCourse=this.courses.find(course=>course.id==courseId)!
  }
  
  onDelete(id:number){
    this.courses= this.courses.filter(course=>course.id!=id)
  }

  openDialog(){
  //  const dialogRef= this.dialog.open()
  }

  openModify(id:number){
    this.getCourseById(id)
    const dialogRef= this.dialog.open(ModifyCoursesComponent,{
      height:'100%'
    })
    dialogRef.componentInstance.selectedCourse=this.selectedCourse
  }
}
