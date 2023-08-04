import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AddNewsletterResponse } from './dto/add-newsletter-response';
import { Observable } from 'rxjs';
import { AddNewsletterRequest } from './dto/add-newsletter-request';
import { Newsletter } from './dto/newsletter';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http: HttpClient,
    private auth: AuthService) { }

addNewsletter(request: AddNewsletterRequest):Observable<AddNewsletterResponse>{
  return this.http.post<AddNewsletterResponse>('/api/newsletter', request)
}

getAllNewsletters():Observable<Array<Newsletter>>{
  return this.http.get<Array<Newsletter>>('/api/newsletter', this.auth.getAuthOptions())
}
  }
