import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {

  @Input() board: any = []
  isAdmin: boolean = false;

  constructor(
    private boardService: BoardService, 
    private route: ActivatedRoute,
    private toastr: ToastrService, 
    private router: Router,
    private jwtHelper: JwtHelperService
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    this.boardService.getBoardById(Number(id)).subscribe((data: any[]) => {
      this.board = data
    })
    if (localStorage.getItem('jwt') != null) {
      const token = this.jwtHelper.decodeToken(localStorage.getItem('jwt') || '{}');
      console.log(token)

      if (token.roles.includes('ROLE_ADMIN')) {
        this.isAdmin = true;
      }
    }


    
  }

  delete(id: any) {
    this.boardService.deleteBoard(id).subscribe(data => {
      console.log(data);
    });
    this.toastr.success(`La board ${this.board.name} à bien été supprimé`, 'Suppression');
    setTimeout(() => { this.router.navigate([`/boards`]) }, 400);

  }

}
