import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './Course';
import { EnrollDto } from './EnrollDto';
import { Enrollment } from './Enrollment';
import { MakeReport } from './MakeReport';
import { Report } from './Report';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpclient:HttpClient) { }

  findCourseIdByCourseName(courseName:string):Observable<number>{
    //console.log("course name");
    return this.httpclient.get<number>("http://localhost:9090/courseIdByName?courseName="+courseName);
  }

  makeEnroll(enrollDto:EnrollDto):Observable<Enrollment>{
    return this.httpclient.post<Enrollment>("http://localhost:9090/makeEnroll",enrollDto);
  }

  getEnrollmentByStudentId(studentId:number):Observable<Enrollment>{
    return this.httpclient.get<Enrollment>("http://localhost:9090/getenrollbystudentId?studentId="+studentId);
  }

  makeReport(makereport:MakeReport):Observable<any>{
    return this.httpclient.post<any>("http://localhost:9090/makeReport",makereport);
  }

  incrLevel(studentId:number,examId:number):Observable<any>{
    return this.httpclient.get<any>("http://localhost:9090/compLevelIncr?studentId="+studentId+"&examId="+examId);
  }

  getEnrollByStudentCourse(studentId:number,courseId:number):Observable<any>{
    console.log("received");
    return this.httpclient.get<any>("http://localhost:9090/getenrollbystudentcourse?studentId="+studentId+"&courseId="+courseId);
  }
}

