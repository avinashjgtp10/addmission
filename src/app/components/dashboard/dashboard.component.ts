import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { from } from 'rxjs';
import { DataTablesModule } from 'angular-datatables';
import { CRUDAPIService } from "../../services/crud-api.service"


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  studentData:[];
  constructor(public route:ActivatedRoute, public api:CRUDAPIService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.api.getStudentData().subscribe((data:any)=>{
      console.log(data)
      this.studentData=data.data;
    })
  }



}
