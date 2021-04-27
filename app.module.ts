import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ExamPageComponent, FormatTimePipe } from './exam-page/exam-page.component';
import { AdminSearchOutputComponent } from './admin-search-output/admin-search-output.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { HeaderComponent } from './header/header.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginfailedComponent } from './loginfailed/loginfailed.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { from } from 'rxjs';
import { ResultComponent } from './result/result.component';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    InstructionPageComponent,
    AddQuestionComponent,
    ExamPageComponent,
    AdminSearchOutputComponent,
    SearchStudentComponent,
    HeaderComponent,
    ResetPwdComponent,
    UserSignupComponent,
    UserLoginComponent,
    LoginfailedComponent,
    LoginsuccessComponent,
    AdminLoginComponent,
    FormatTimePipe,
    ResultComponent,
    RemoveQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
