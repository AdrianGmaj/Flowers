import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatchPassword } from '../validators/match-password';
import { UniqueEmail } from '../validators/unique-email';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  SignUpForm = new FormGroup({
    email: new FormControl('',
      [Validators.required,
      Validators.email,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      // [this.uniqueEmail.validate])
      
    password: new FormControl('',
      [Validators.required]),
      passwordConfirmation: new FormControl('',
      [Validators.required]),


  }, { validators: [this.matchPassword.validate] })

  constructor(
    private matchPassword: MatchPassword,
    private uniqueEmail: UniqueEmail,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
 this.authService.signUp(this.SignUpForm.getRawValue())
 .subscribe(response =>{
  if(response.success){
   this.router.navigateByUrl('sign-in')
  }
 })
}}
