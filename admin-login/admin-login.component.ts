import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Loginadmin } from '../loginadmin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin:Admin=new Admin();
  loginadmin:Loginadmin=new Loginadmin();
  
  constructor(private router:Router, private regService:RegisterService){}

  ngOnInit(): void {
  }

  // checkLogin(loginForm:NgForm){
  //   if(loginForm.valid){
  //     if(this.admin.adminId=="" && this.admin.adminPassword==""){
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


  loginAdmin():void{
    console.log("login called");
    this.regService.isValidAdmin(this.loginadmin).subscribe(
      isValid=>{
        console.log(isValid);
        if(isValid){
          
          //redirect to dashboard
          //sessionStorage.setItem("userId",this.loginuser.userId.toString());
          localStorage.setItem("adminId",this.loginadmin.adminId.toString());
          this.router.navigate(['/adminDash']);
        }
        else{
          this.router.navigate(['/adminLogin']);
        }
      }
    );
  }


}
