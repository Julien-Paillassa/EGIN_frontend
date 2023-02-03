import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../user/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User[] = []

  nameUser: string = ''

  constructor(
    private boardService: BoardService,
    private jwtHelper: JwtHelperService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('jwt') != null) {
      const token = this.jwtHelper.decodeToken(localStorage.getItem('jwt') || '{}');
      //console.log(token)
    }
    
    if (localStorage.getItem('currentUser') != null) {
    //console.log(localStorage.getItem('jwt'))
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}')
    console.log(this.currentUser)
    }
  }

    

}
