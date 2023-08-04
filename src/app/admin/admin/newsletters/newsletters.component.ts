import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Newsletter } from 'src/app/home/home/newstletter/dto/newsletter';
import { NewsletterService } from 'src/app/home/home/newstletter/newsletter.service';

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.css']
})
export class NewslettersComponent implements OnInit {
  newsletter$: Observable<Array<Newsletter>>;

  displayedColumns: string[] = [
    'id',
    'email',
    'active',
    'created',
   
  ];

  constructor(private newsletterService: NewsletterService) { }

  ngOnInit() {
    this.newsletter$ = this.newsletterService.getAllNewsletters()
  }

}
