import { Component, OnInit } from '@angular/core';
import { AddQuestionsService } from '../add-questions.service';
import { SearchStudentComponent } from '../search-student/search-student.component';
import { User } from '../user';


@Component({
  selector: 'app-admin-search-output',
  templateUrl: './admin-search-output.component.html',
  styleUrls: ['./admin-search-output.component.css']
})
export class AdminSearchOutputComponent implements OnInit {

  constructor(private searchStud:AddQuestionsService) { }

  users:User[];
  courseName:string;
  level:number;
  score:number;
  temp:any;

  //make 3 vars tech marsk level
  //get these 3 from localStorage
  //put these in ngOninit()
  //type of observable in service is  Reports[] 
  //ngFor(report in reports )
  

  ngOnInit(){

    this.courseName=localStorage.getItem("courseName");
    this.level=+localStorage.getItem("level");
    this.score=+localStorage.getItem("score");
    this.searchStud.searchStudent(this.score,this.courseName,this.level).subscribe(
      data=>{
        console.log(data);
        this.temp=data;
      }
    );
  }
}
