import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import { Loginuser } from './loginuser'
import { Loginadmin } from './loginadmin';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private httpclient:HttpClient) { }

  registerUser(user:User):Observable<User>{
    console.log("reached");
    return this.httpclient.post<User>("http://localhost:9090/registerstudent",user);
  }

  isValidUser(loginUser:Loginuser):Observable<User>{
    console.log("reached");
    return this.httpclient.post<User>("http://localhost:9090/loginstudent",loginUser);
  }

  isValidAdmin(loginAdmin:Loginadmin):Observable<User>{
    console.log("reached");
    return this.httpclient.post<User>("http://localhost:9090/loginadmin",loginAdmin);
  }


}
