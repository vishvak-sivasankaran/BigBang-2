import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{
  public doctors: any;
  constructor(private http:HttpClient,private signupservice:SignupService){}
ngOnInit(): void {
  this.getAppointment();
}

// Inside your component class
markAsDone(doctor: any) {
  doctor.isDone = !doctor.isDone;
}

private getAppointment(): void {
  this.signupservice.getAllPatient().subscribe(result => {
    this.doctors = result;
    console.log(this.doctors);
  })
}
}
