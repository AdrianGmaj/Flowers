import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInFormComponent } from './sign-in/sign-in-form/sign-in-form.component';
import { SignUpLinkComponent } from './sign-in/sign-up-link/sign-up-link.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { HisotryComponent } from './user-account/hisotry/hisotry.component';


@NgModule({
  declarations: [SignInComponent, SignUpComponent, SignInFormComponent,SignUpLinkComponent, UserAccountComponent, HisotryComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
   
  ]
})
export class AuthModule { }
