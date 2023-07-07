import { Component, OnInit, ViewChild } from '@angular/core';
import { LoggedInUserModel } from './model/loggedinuser.model';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
// import validation from '../helper/validation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('register_form') registerForm: NgForm;
  showError: boolean = false;
  registration_status = false;
  registration_statusdoc = false;
  showSpecialization: boolean = false;

  public signup_form!:FormGroup;

   register!:any;

  loggedInUser:LoggedInUserModel;

  constructor(private router :Router , private signupService : SignupService, private fb:FormBuilder)
  {
    // this.register = new registerModel();
    this.register =
    {
      name:"",
      email:"",
      role: "",
      password: "",
      hashKey: "",
      passwordClear: ""
      
    }
    
    this.loggedInUser=new LoggedInUserModel();

  }

ngOnInit() {
  this.signup_form = this.fb.group({
    username:['', Validators.required]
  })
}
  // onPost()
  // {
  //   if (this.registerForm.valid)
  //   {
  //     this.signupService.signup(this.register).subscribe(data=>{
  //       console.log("register in component")
  //       this.loggedInUser = data as LoggedInUserModel;
  //       console.log(this.loggedInUser);
        
  //       localStorage.setItem("token",this.loggedInUser.token);
  //       localStorage.setItem("email",this.loggedInUser.email);
  //       localStorage.setItem("role",this.loggedInUser.role);
  //       this.registration_status = true;
  //       setTimeout(() => {
  //         this.router.navigate(['login']);
  //       }, 3000);
  //       // alert(`\t ........Registration successfull........
  //       //   \n your user id is : ${this.loggedInUser.id} and your password is first 4 letters of your name + your birth date and month `);
        
  //     },
  //     err=>{
  //       console.log(err)
  //     });
  //   }
  //   else 
  //   {
  //     this.showError = true; // Show the error message
  //   }

    
  //   }
  
  onPost(){
    if(this.register.role === 'doctor'){
      this.signupService.setFormDetails(this.register);
      this.registration_statusdoc = true;
    }
    else{
      this.signupService.signup(this.register).subscribe(data=>{
              console.log("register in component")
              this.loggedInUser = data as LoggedInUserModel;
              console.log(this.loggedInUser);
              
              localStorage.setItem("token",this.loggedInUser.token);
              localStorage.setItem("email",this.loggedInUser.email);
              localStorage.setItem("role",this.loggedInUser.role);
              this.registration_status = true;
              setTimeout(() => {
                this.router.navigate(['login']);
              }, 3000);
              // alert(`\t ........Registration successfull........
              //   \n your user id is : ${this.loggedInUser.id} and your password is first 4 letters of your name + your birth date and month `);
              
            },
            err=>{
              console.log(err)
            });
    }
  }

  login_here()
  {
    this.router.navigateByUrl('login');
  }
  onRoleChange() {
    if (this.register && this.register.role === 'doctor') {
      this.showSpecialization = true;
    } else {
      this.showSpecialization = false;
      if (this.register) {
        this.register.specialization = ''; // Reset specialization value
      }
    }
  }
}


export class registerModel
{

         name:string="";
         email:string="";
         role: string="";
         password: string="";
         hashKey: string="";
         passwordClear: string=""

}

