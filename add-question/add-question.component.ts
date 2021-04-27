import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AddQuestionsService } from '../add-questions.service';
import { Question} from '../Question';
 
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
 
  constructor(private addQuestion:AddQuestionsService) {
    
  }
  courseId:number;
  courseLevel:number;
 
  question:Question = new Question();
 
  questionText:string;
  opt1:string;
  opt2:string;
  opt3:string;
  corrop:string;
 
  addquestion(myForm:NgForm){
    this.question.questionText= this.questionText;
    this.question.option1= this.opt1;
    this.question.option2= this.opt2;
    this.question.option3= this.opt3;
    this.question.correctOption= this.corrop;
    console.log(this.question);
    console.log(this.courseId);
    console.log(this.courseLevel);
    this.addQuestion.addquestion(this.question,this.courseId,this.courseLevel).subscribe(
      fetchedQuestion=>{
        console.log(fetchedQuestion);
      }
    );
    myForm.reset();
 
  }
 
}
