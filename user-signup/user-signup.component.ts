import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent  {

  user:User=new User();

  // user:User=new User('','','','','');
  
  constructor(private regService:RegisterService, private router:Router) { }


  register():void{
    console.log("register called");
    this.regService.registerUser(this.user).subscribe(
      userPersisted=>{
        console.log(userPersisted);
        this.router.navigate(['/userLogin']);
      }
    );
  }

  // register(registerForm:NgForm){
  //   if(registerForm.valid){
  //     console.log(this.user)
  //     alert('Successfully Registered');
  //   }
  //   else{
  //     alert("Enter valid input");
  //   }
  // }
}

