import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CRUDAPIService } from "../../services/crud-api.service"
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    public api:CRUDAPIService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f(){return this.loginForm.controls}
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    console.log(this.f)
    let payload={
      "email":this.f.username.value,
      "password":this.f.password.value
    }
    this.api.userLogin(payload).subscribe((data:any)=>{
      console.log(data)
      if(data.status === "success"){
        this.router.navigate(["/dashboard"],{queryParams:{id:data.data.id}});
        
      }else{
        this.loading = false;
        alert("wrong")
      }
    })
}


}
