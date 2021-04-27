import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Course';
import { CourseService } from '../course.service';
import { EnrollDto } from '../EnrollDto';
import { Enrollment } from '../Enrollment';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  course: Course = new Course();
  courseId: number;
  studentId: number;
  enrollDto: EnrollDto = new EnrollDto();
  enrollment: Enrollment;
  courses: Course[]=[];
  enrollmentByStudentId: Enrollment[]=[];
  courseName: Set<string> = new Set();
  cName:string;
  disabled:boolean[]=[false];



  constructor(private router: Router, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.studentId = Number(localStorage.getItem("studentId"));
    this.enrollDto.studentId = this.studentId;
    console.log(this.studentId);
    this.courseService.getEnrollmentByStudentId(this.studentId).subscribe(
      fetchedEnrollList => {
        //console.log(fetchedEnrollList);
        localStorage.setItem("enrollmentByStudentId", JSON.stringify(fetchedEnrollList));
        this.enrollmentByStudentId = JSON.parse(localStorage.getItem("enrollmentByStudentId"));
    console.log(this.enrollmentByStudentId);
    //console.log(this.enrollmentByStudentId);
    for (var i in this.enrollmentByStudentId) {
      console.log(this.enrollmentByStudentId[i].course.courseName);
      this.cName=this.enrollmentByStudentId[i].course.courseName;
     this.courseName.add(String(this.cName));
    //  console.log(i);
    //  console.log(this.enrollmentByStudentId[i]);     
    }
        //this.enrollmentOfStudent=fetchedEnrollList;
        if(this.courseName.has("Java")){
          this.disabled[0]=true;
        }
    
        if(this.courseName.has("DBMS")){
          this.disabled[1]=true;
        }
    
        if(this.courseName.has("Python")){
          this.disabled[2]=true;
        }
    
        if(this.courseName.has("C")){
          this.disabled[3]=true;
        }
    
        if(this.courseName.has("JavaScript")){
          this.disabled[4]=true;
        }
    
        if(this.courseName.has("Machine Learning")){
          this.disabled[5]=true;
        }
      }
    );

    

 

    console.log(this.courseName);

    //console.log(this.courseName.has("Java"));
  }
  enrDto:EnrollDto=new EnrollDto()

  goToPage(pageName: string,index:number): void {
    //this.router.navigate(['/instruction']);
    this.enrollDto.courseId = index;
    this.enrollDto.studentId= +localStorage.getItem("studentId");

  //  this.courseService.makeEnroll(this.enrDto).subscribe((data)=>{})

    // this.courseService.findCourseIdByCourseName(pageName).subscribe(
    //   fetchedCourseId => {
    //     console.log(fetchedCourseId);
    //     //this.courseId=fetchedCourseId;
    //     localStorage.setItem("courseId", fetchedCourseId.toString());

    //     //this.course=fetchedCourse;
    //   }
    //);

      this.disabled[index]=true;


   //this.enrollDto.courseId = Number(localStorage.getItem("courseId"));
    console.log(this.enrollDto.courseId);
    this.courseService.makeEnroll(this.enrollDto).subscribe(
      fetchedEnrollment => {
        this.enrollment = fetchedEnrollment;
        //this.courseName.add(this.enrollment.course.courseName);
        localStorage.setItem("fetchedEnrollment",JSON.stringify(this.enrollment));
        this.courseName.add(String(this.enrollment.course.courseName));
        console.log(this.enrollment);
        this.ngOnInit();
      }

    );
    // this.enrollment=JSON.parse(localStorage.getItem("fetchedEnrollment"));
    // this.courseName.add(this.enrollment.course.courseName);
   // window.location.reload();
  }


  takeTest(pageName: string) {
    this.courseService.findCourseIdByCourseName(pageName).subscribe(
      fetchedCourseId => {
        console.log(fetchedCourseId);
        localStorage.setItem("courseId", fetchedCourseId.toString());
      }
    );
    this.enrollDto.courseId = Number(localStorage.getItem("courseId"));
    console.log(this.enrollDto.courseId);
    this.enrollDto.studentId =Number(localStorage.getItem("studentId")) ;
    this.courseService.getEnrollByStudentCourse(this.studentId,this.enrollDto.courseId).subscribe(
      fetchedIncr => {
        console.log(fetchedIncr);
        localStorage.setItem("compLevel", fetchedIncr.compLevel.toString());
      }
    );
    this.router.navigate(['/instruction']);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/userLogin']);
  }
}
