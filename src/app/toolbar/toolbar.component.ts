import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  signedIn = false


  constructor(private authService: AuthService) { }


  ngOnInit(): void {
 }

    isSignedAsAdmin(){
      return this.authService.isSignedAsAdmin()
     }

     isSignedAsUser(){
      return this.authService.isSignedAsUser()
     }
 
     isSigned(){
      return this.authService.isSigned()
     }

}
