import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { DoctorComponent } from './doctor/doctor.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {path:'book',component:BookingFormComponent},
  {path:'about',component:AboutComponent},
  {path:'doctors',component:DoctorComponent},
  {path:'register',component:RegisterComponent},
  {path:'ourservices',component:OurservicesComponent},
  {path:'login',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'admin',component:AdminComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'footer',component:FooterComponent},
  {path:'header',component:HeaderComponent},
  {path:'appointment',component:AppointmentComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
