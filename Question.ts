import { Exam } from "./exam";

export class Question{
    questionId:number;
    questionText: String;
    option1: String;
    option2: String;
    option3: String;
    correctOption: String;
    exam:Exam;
    review:boolean=false;

}