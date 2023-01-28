import { Component, OnInit} from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { SignInComponent } from '../sign-in/sign-in.component';
import IUser from 'src/app/model/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor(
    public SignInComponent:SignInComponent
  ) {}
  fullName =new FormControl('',[
    Validators.required,
    Validators.minLength(3)
  ])
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)
  ])
  showAlert = false
  alertMsg = "Please wait ! Your Account is Created "
  alertColor = 'blue' 
createUser = new FormGroup({
fullName:this.fullName,
email:this.email,
password:this.password
})
async user(){
  this.showAlert = true,
  this.alertMsg = "Please wait ! Your Account is Created "
  this.alertColor = 'blue'
 

try {
 let a = await (this.createUser .value as IUser)
 console.log(a)
   } catch (e) {
     console.error(e)
     this.alertMsg = 'An unexpected error occure . Please try again'
     this.alertColor = 'red'
     return
   }
   this.alertMsg = 'Your Accounr is created succesfully'
   this.alertColor = 'blue'
  
 }
 signIn(){

  console.log("ikl")
 }

  ngOnInit(): void {
    
  }

}
