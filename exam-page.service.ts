import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './Question';


@Injectable({
  providedIn: 'root'
})
export class ExamPageService {

  constructor( private httpclient:HttpClient) {}


  showQuestion(courseId:number, level:number):Observable<Question[]>{
    console.log("show question");
    return this.httpclient.get<Question[]>("http://localhost:9090/viewbycourselevel?courseId="+courseId+"&level="+level);
  }

  

  //http://localhost:9090/getenrollbystudentcourse?studentId=1046&courseId=141

}
