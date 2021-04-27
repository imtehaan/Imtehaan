
import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './Question';

@Injectable({
  providedIn: 'root'
})
export class ReQuestionService {

  constructor(private httpClient:HttpClient) { }

  getQuestionByCourseIdandLevel(courseId:number,lvl:number):Observable<Question[]>{
  return this.httpClient.get<Question[]>('http://localhost:9090/viewbycourselevel?courseId='+courseId+'&level='+lvl)
  }


  delete(id:number){
   return this.httpClient.delete('http://localhost:9090/removeQues?questionId='+id);
  }
}
