import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component"
import { LoginComponent }  from "./components/login/login.component"
import { StudentRegistrationComponent } from "./COMPONENT/STUD-REGISTRATION/student-registration/student-registration.component"
  import { from } from 'rxjs';
import { DashboardComponent } from "./components/dashboard/dashboard.component"
const routes: Routes = [
{path:'',component:StudentRegistrationComponent},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
