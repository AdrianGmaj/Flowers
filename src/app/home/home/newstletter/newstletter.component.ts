import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NewsletterService } from './newsletter.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-newstletter',
  templateUrl: './newstletter.component.html',
  styleUrls: ['./newstletter.component.css']
})
export class NewstletterComponent implements OnInit {

  constructor(private newsletterService: NewsletterService) { }

  ngOnInit() {
  }
  NewsletterForm = new FormGroup({
    email: new FormControl('',
      [Validators.required,
      Validators.email,
      ])

  })

  onSubmit() {
    this.newsletterService.addNewsletter(this.NewsletterForm.getRawValue()).subscribe({
      next: response => {
        console.log('addNewsletter response', response)
        this.NewsletterForm.reset();
        this.NewsletterForm.get('email').markAsPristine();
        this.NewsletterForm.get('email').markAsUntouched();
        this.NewsletterForm.get('email').updateValueAndValidity();
      },
      error: errorResponse => {
        console.log('addNewsletter error', errorResponse.error)
      }
    })

  }
}
