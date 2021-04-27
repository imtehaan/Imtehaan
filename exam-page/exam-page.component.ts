import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { ExamPageService } from '../exam-page.service';
import { Question } from '../Question';
import { Subscription, timer } from 'rxjs';
import { MakeReport } from '../MakeReport';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit,OnDestroy  {

  correctOption:any [] = [];
  chooseOption:any [] = [];
  currentOption:any;
  countDown: Subscription;
  counter = 1800;
  tick = 1000;
  compLevel:number;
  courseId:number;

  // constructor(){}
  ngOnInit(){
    //this.displayClick(0);
    //console.log("Exam called");
    this.compLevel=1+Number(localStorage.getItem("compLevel"));
    console.log(this.compLevel);
    this.courseId=Number(localStorage.getItem("courseId"));
    this.examPageService.showQuestion(this.courseId,this.compLevel).subscribe(
      questPersisted=>{
        //this.displayClick(0);
        //console.log(questPersisted);
        this.questions=questPersisted;
        console.log(questPersisted);
        this.displayClick(0);
        for(var i in questPersisted){
          //this.correctOption[i]=questPersisted["correctOption"];
          this.correctOption[i]=questPersisted[i].correctOption;
         // [0].correctOption
        }
        //console.log(this.correctOption);
        //this.router.navigate(['/examPage']);
      }
    );
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
  }

  questions:Question[]=[];
  i:number=0;
  question:Question=new Question();
  constructor(private router: Router, public examPageService: ExamPageService, private courseService:CourseService) { }
  displayNumber:number;
  count=0;
  makereport:MakeReport=new MakeReport;
  currentQs:number;


  review(){
    this.questions[this.currentQs].review=!(this.questions[this.currentQs].review);
  }

  displayClick(num:number){
    this.currentQs=num;
    this.displayNumber=num;
    this.question=this.questions[num];

  }

  nextQs(currentOption, correctOption){
    //console.log(currentOption, correctOption);
    //console.log("Index of : ",this.questions.indexOf(questionId));
    this.chooseOption[this.displayNumber]=this.currentOption;
    this.displayClick(this.displayNumber+1);
    if(this.currentQs<9){
      this.currentQs++;
    }
    if(currentOption==correctOption){
      this.count=this.count+10;
    }
    // for(var j=0;j<10;j++){
    //   if(this.correctOption[j]==this.chooseOption[j]){
    //     console.log(this.chooseOption[j]);
    //     this.count=this.count+2;
    //   }
    // }
    //console.log("Next button called");
    this.currentOption="";
    this.i++;
    console.log(this.questions[this.i].questionText+" "+this.questions[this.i].option1+" "+this.questions[this.i].option2+" "+this.questions[this.i].option3);
  }

  result(currentOption,correctOption){
    // console.log(this.correctOption);
    // console.log(this.chooseOption);
    //alert("Your marks is"+this.count.toString());
    //console.log(this.currentOption,this.correctOption);
    if(currentOption==correctOption){
      this.count=this.count+10;
    }
    //console.log(this.count);
    //console.log(this.questions);
    if(this.count>=70){
      this.makereport.status="Pass";
    }
    else{
      this.makereport.status="Fail";
    }
    this.makereport.examId=this.questions[0].exam.examId;
    console.log(this.questions[0].exam);
    this.makereport.studentId=Number(localStorage.getItem("studentId"));
    console.log(Number(localStorage.getItem("studentId")));
    this.makereport.score=this.count;
    this.courseService.makeReport(this.makereport).subscribe(
      reportPersisted=>{
        console.log(reportPersisted);
        localStorage.setItem("report",JSON.stringify(reportPersisted));
      }
    )
    this.router.navigate(['/result']).then(()=>window.location.reload());
    
  }





  // displayClick(num:number){
  //   this.displayNumber=num; 
  //   const question=document.getElementById(num.toString())
  //   question.classList.add("selected");
  //   for(let i=1;i<6;i++){
  //     if(i==this.displayNumber){
        
  //     }else{
  //       document.getElementById(i.toString()).classList.remove("selected");
  //     }
  //   }
    
  // }

  ngOnDestroy() {
    this.countDown = null;
  }

}

@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value % 3600) / 60);
    return (
      ("00" + hours).slice(-2) +
      ":" +
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}