import { Component, OnInit } from '@angular/core';
import { SignupService } from '../service/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit{
  public users:any;
  public pdfview! :FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:SignupService,private http:HttpClient, private router:Router){ 
    this.pdfview = this.formBuilder.group({
      patientName: ['', Validators.required],
      patientEmail: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      problem: ['', Validators.required],
      slot: ['', Validators.required]
    });
   }
  ngOnInit(): void {
   
  
  }
  public AddNewUser(): void
  {
    this.authService.submitPassengerDetails (this.pdfview.value)
    .subscribe(result =>{
     console.log( "Your account created successfully. Now you can go and book your tickets.");
    },
    error => {
      console.log("An error occurred while submitting the form: ", error);
      // Handle the error here
    });
  }
}
