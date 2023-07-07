import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
flaguser:boolean=false;
flagdoctor:boolean=false;
flagadmin:boolean=false;

constructor(){
  if(localStorage.getItem("role")=="doctor")
  {
    this.flagdoctor=true;
  }
  if(localStorage.getItem("role")=="User")
  {
    this.flaguser=true;
  }
  if(localStorage.getItem("role")=="Admin"){
    this.flagadmin=true;
    this.flagdoctor=true;
    this.flaguser=true;
  }
}
}
