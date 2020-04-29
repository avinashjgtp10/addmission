import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './COMPONENT/STUD-REGISTRATION/student-registration/student-registration.component'
// import { from } from 'rxjs';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgxLoadingModule } from 'ngx-loading';
import { CRUDAPIService } from "./services/crud-api.service";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component' 
import { DateConvertPipe } from './pipe/date-convert.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    DateConvertPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxLoadingModule.forRoot({}),
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule
  ],
  providers: [CRUDAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
