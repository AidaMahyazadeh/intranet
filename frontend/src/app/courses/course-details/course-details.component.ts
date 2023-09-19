import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import ICourse from 'src/app/core/models/course.model';
import { AdminAuthStorageService } from 'src/app/core/services/admin/admin-auth-storage.service';
import { UsersListService } from 'src/app/core/services/admin/users-list.service';
import { AuthStorageService } from 'src/app/core/services/auth/auth-storage.service';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  subscription !:Subscription;
  selectedCourse !:ICourse;
  id !:number;
  enrolledIn = false;
  constructor(
    private courseService:CoursesService,
    private activatedRoute :ActivatedRoute,
    private router :Router,
    private authStorageService:AuthStorageService,
    private adminAuthStoragrService :AdminAuthStorageService
    ){}


    ngOnInit(): void {
      // this.activatedRoute.params.subscribe((params :Params)=>{
      //   this.id = params['id']
      // })

      // this.subscription= this.courseService.getCourseById(this.id).subscribe(
      //   res =>{
      //     this.selectedCourse= res
      //   }
      // )
      this.selectedCourse=this.activatedRoute.snapshot.data['courseDetails']
      this.existedEnrolledCourse(this.selectedCourse.id)
    }
    
   existedEnrolledCourse(courseId:number){
   this.enrolledIn= this.authStorageService.existedEnrolledCourse(courseId) ? true : false;
   } 

    enrollInTheCourse(course:ICourse){
      this.authStorageService.storeEnrolledCourse(course)
      let userDetail = this.authStorageService.getAllUserDetail()
      this.adminAuthStoragrService.updateExistedUsers(userDetail.username,[course])
      this.enrolledIn=true
    }

    backToAllCourses(){
      this.router.navigate(['courses'])
     }

     ngOnDestroy(): void {
      // this.subscription.unsubscribe()
    }
}
