import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './services/user.service';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'egin_frontend';

  userInfo: User[] | null = [];

  currentUser: string | null = ''
 
  isAdmin: boolean = false;

  constructor (private jwtHelper: JwtHelperService, private userService: UserService) {
    
  }

  ngOnInit() {
    if (localStorage.getItem('jwt') != null) {
      const token = this.jwtHelper.decodeToken(localStorage.getItem('jwt') || '{}');
      console.log(token)

      if (token.roles.includes('ROLE_ADMIN')) {
        this.isAdmin = true;
      }

      this.userService.getUserInfos(token.id).subscribe((data: User[]) => {
        this.userInfo = data
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
      })

      this.currentUser = localStorage.getItem('currentUser') || '{}'
      
    } else {
      this.userInfo = null
    }

    

  }

  
}
