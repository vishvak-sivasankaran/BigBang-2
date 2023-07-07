import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupService } from './service/signup.service';
import { AdminComponent } from './admin/admin.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { AboutComponent } from './about/about.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    AdminComponent,
    OurservicesComponent,
    AboutComponent,
    DoctorComponent,
    ReviewsComponent,
    BookingFormComponent,
    HeaderComponent,
    FooterComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
