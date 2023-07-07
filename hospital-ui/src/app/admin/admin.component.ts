import { Component,OnInit } from '@angular/core';
import { SignupService } from '../service/signup.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formDetails:any;
  showFormDetails=true;
  ngOnInit() {
    this.signupService.formDetails$.subscribe(details => {
      this.formDetails = details;
      this.showFormDetails = !!this.formDetails;
    });
  }
constructor(private signupService: SignupService,private http:HttpClient){}

approveForm() {
   
  this.http.post<any>('https://localhost:7187/api/User/Register', this.formDetails)
    .subscribe(response => {
      console.log(response);

      this.signupService.setFormDetails(null);
      this.showFormDetails = false;
    }, error => {
      console.error(error);
    });
}
 declineForm() {
  this.signupService.setFormDetails(null);
  this.showFormDetails = false;
}
}
