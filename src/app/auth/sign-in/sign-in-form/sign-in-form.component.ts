import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {


  SignInForm = new FormGroup({
    email: new FormControl('',
      [Validators.required,
      Validators.email,
      ],
    ),
    password: new FormControl('',
      [Validators.required]),

  })
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signIn(this.SignInForm.getRawValue())
      .subscribe({

       next: (response) => {
        if (response.success) {
          if (response.role === 1) {
            this.router.navigateByUrl('user')
          }
          else if (response.role === 2) {
            this.router.navigateByUrl('admin')
          }
        }
      },
    error: (errorResponse: HttpErrorResponse) => {
      this.SignInForm.setErrors({
        credentials: errorResponse.error.message
      })
    }
    })
  }


}
