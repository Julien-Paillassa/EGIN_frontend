import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'egin_frontend';

  currentUser: string | null = '';

  isAdmin: boolean = false;

  constructor (private jwtHelper: JwtHelperService) {
    
  }

  ngOnInit() {
    if (localStorage.getItem('jwt') != null) {
      const token = this.jwtHelper.decodeToken(localStorage.getItem('jwt') || '{}');
      console.log(token)

      if (token.roles.includes('ROLE_ADMIN')) {
        this.isAdmin = true;
      }
    }

   this.currentUser = localStorage.getItem('currentUser')


  }

  
}
