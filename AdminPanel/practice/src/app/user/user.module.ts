import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule , FormsModule} from '@angular/forms' 
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthModalComponent } from './auth.modal/auth.modal.component';

@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent,
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    FormsModule,
    SharedModule
  ],
  exports:[
    RegisterComponent,
    SignInComponent,
    AuthModalComponent
  ]
})
export class UserModule { }
