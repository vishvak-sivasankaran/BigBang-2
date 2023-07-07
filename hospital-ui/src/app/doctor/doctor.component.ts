import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  public doctors: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private signupService: SignupService) { }
  ngOnInit(): void {
    this.getDoctors();
  }

  private getDoctors(): void {
    this.signupService.getAllDoctors().subscribe(result => {
      this.doctors = result;
      console.log(this.doctors);
    })
  }

}
