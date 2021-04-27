import { Course } from "./Course";
import { User } from "./user";

export class Enrollment{
    enrollmentId:number;
    compLevel:number;

    user:User;
    course:Course;
}