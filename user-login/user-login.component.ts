import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Loginuser } from '../loginuser';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // user:User=new User('','','','','');

  user:User=new User();
  loginuser:Loginuser=new Loginuser();

  constructor(private router:Router, private regService:RegisterService) { }

  ngOnInit(): void {
  }

  // checkLogin(loginForm:NgForm){
  //   if(loginForm.valid){
  //     if(this.user.studentName=="Saranya" && this.user.studentPassword=="lti@123"){
  //       //alert("Login Successful");
  //       this.router.navigate(['loginSuccessLink']);
  //     }
  //     else{
  //       //alert("Login failed");
  //       this.router.navigate(['loginSuccessLink']);
  //     }
  //   }
  //   else{
  //     alert("Please enter all credentials.");
  //   }
  // }

  // loginUser(loginForm:NgForm):void{
  //     if(loginForm.valid){
  //       console.log("login called");
  //       this.regService.isValidUser(this.loginuser).subscribe(
  //       isValid=>{
  //         console.log(isValid);
  //         if(isValid){
            
  //           //redirect to dashboard
  //           //sessionStorage.setItem("userId",this.loginuser.userId.toString());
  //           localStorage.setItem("studentEmail",this.loginuser.studentEmail);
            
  //           this.router.navigate(['/userDash']);
  //         }
  //         // else{
  //         //   this.router.navigate(['/userLogin']);
  //         // }
  //       }
  //     );
  //   }
  //   else{
  //     alert("Please correct credentials.");
  //     this.router.navigate(['/userLogin']);
  //   }
  // }

  loginUser(){
    this.regService.isValidUser(this.loginuser).subscribe(
      isValid=>{
        console.log(isValid);
        if(isValid.studentId==0){
          alert("Login Failed");
          this.router.navigate(['/userLogin']);
        }
        else{
          this.user=isValid;
          alert("Login Successful");
          localStorage.setItem("emailId",this.user.studentEmail);
          localStorage.setItem("studentName",this.user.studentName);
          localStorage.setItem("studentId",this.user.studentId.toString());
          this.router.navigate(['/userDash']);
        }
      }
    );
    }

  // loginUser(form:NgForm){
  //   this.regService.isValidUser(this.loginCust).subscribe(
  //           isValid=>{
  //             console.log(isValid);
  //             if(isValid!=null){
  //               this.customer=isValid;
  //               sessionStorage.setItem("custId",this.customer.custId.toString());
  //             //  localStorage.setItem("custEmail",this.loginCust.custId.toString());
  //               this.router.navigate(['/homeLink']);
      
  //             }
  //             else{
  //               this.router.navigate(['/loginLink']);
  //             }
  //           }
  //         );
      
  //       }
    
}
