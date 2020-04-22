import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CRUDAPIService {

  constructor(private http:HttpClient) { }
  saveAdmissionForm(data:any){
    
   // return this.http.post("https://localhost:3000/users/createUser",data)
    return this.http.post("https://iti-backend.herokuapp.com/users/createUser",data)
  }
}
