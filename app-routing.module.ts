import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSearchOutputComponent } from './admin-search-output/admin-search-output.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { ResultComponent } from './result/result.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {
    path:'', component: HomePageComponent
  },
  {
    path:'home', component: HomePageComponent
  },
  {
    path:'adminDash', component: AdminDashboardComponent
  },
  {
    path:'userDash', component: UserDashboardComponent
  },
  {
    path:'examPage', component: ExamPageComponent
  },
  {
    path:'instruction', component: InstructionPageComponent
  },
  {
    path:'addQuestion', component: AddQuestionComponent
  },
  {
    path:'adminSearchOutput', component: AdminSearchOutputComponent
  },
  {
    path:'searchStudent', component:SearchStudentComponent
  },
  {
    path:'userLogin', component:UserLoginComponent
  },
  {
    path:'userSignup', component:UserSignupComponent
  },
  {
    path:'reset', component:ResetPwdComponent
  },
  {
    path:'adminLogin', component:AdminLoginComponent
  },
  {
    path:'result', component:ResultComponent
  },
  {
    path:'removeQues', component:RemoveQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents= [
  HomePageComponent, AdminDashboardComponent,AddQuestionComponent,UserDashboardComponent,ExamPageComponent,InstructionPageComponent,AdminSearchOutputComponent,SearchStudentComponent,UserLoginComponent,UserSignupComponent,ResetPwdComponent,AdminLoginComponent,ResultComponent,RemoveQuestionComponent
]
