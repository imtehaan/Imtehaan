import { Component, OnInit } from '@angular/core';
import { Question } from '../Question';
import { ReQuestionService } from '../requestion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-remove-question',
  templateUrl: './remove-question.component.html',
  styleUrls: ['./remove-question.component.css']
})
export class RemoveQuestionComponent implements OnInit {
    courseId:number;
    courseLevel:number;
  constructor(private requestion:ReQuestionService) { }

  questions:Question[]=[]
  ngOnInit(): void {
   
  }

  getQuestions(){
      this.courseId;
      this.courseLevel;
    this.requestion.getQuestionByCourseIdandLevel(this.courseId,this.courseLevel).subscribe(data=>{
      this.questions = data;
    })
  }

  delete(qId:number){
    this.requestion.delete(qId).subscribe(data=>{
        this.getQuestions();
    });
  
  }
}

