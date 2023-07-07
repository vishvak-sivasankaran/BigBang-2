import { HttpClient } from "@angular/common/http";
import { registerModel } from "../register/model/register.model";
import { UserDTOModel } from "../register/model/userDTO.model";
import {Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class SignupService{
private patientUrl="https://localhost:7187/api/Patient";
private doctorUrl="https://localhost:7187/api/Users/filteringdoctors";
    constructor(private httpClient:HttpClient)
    {

    }
    private formDetailsSubject = new BehaviorSubject<any>(null);
    formDetails$ = this.formDetailsSubject.asObservable();
  
    setFormDetails(details: any) {
      this.formDetailsSubject.next(details);
    }
    signup(register:registerModel){
        console.log("register in servive")
        return this.httpClient.post("https://localhost:7187/api/User/Register",register);
    }

    userLogin(userDTO:UserDTOModel){
        return this.httpClient.post("https://localhost:7187/api/User/Login",userDTO);
    }
    public submitPassengerDetails(book:any):Observable<any>{
        return this.httpClient.post(this.patientUrl,book);
    }
    public getAllDoctors():Observable<any>{
        return this.httpClient.get(this.doctorUrl);
    }
    public getAllPatient():Observable<any>{
        return this.httpClient.get(this.patientUrl);
    }
}