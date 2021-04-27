import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './Course';
import { Question } from './Question';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AddQuestionsService {

  //questions:Questions = new Questions();
  constructor(private httpclient:HttpClient) { }

  addquestion(question:Question,courseId:number,level:number):Observable<Question>{
    return this.httpclient.post<Question>("http://localhost:9090/addquestion?courseId="+courseId+"&level="+level,question);
  }

  searchStudent(score:number,courseName:string,level:number):Observable<User[]>{
    return this.httpclient.get<User[]>("http://localhost:9090/viewreportbymarkscourselevel?score="+score+"&courseName="+courseName+"&level="+level);
  }
  viewAllCourse():Observable<Course[]>{
    return this.httpclient.get<Course[]>("http://localhost:9090/viewAllCourse");
  }

}
