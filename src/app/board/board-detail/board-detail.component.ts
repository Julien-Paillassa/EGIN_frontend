import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {

  @Input() board: any = []

  constructor(
    private boardService: BoardService, 
    private route: ActivatedRoute,
    private toastr: ToastrService, 
    private router: Router
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    this.boardService.getBoardById(Number(id)).subscribe((data: any[]) => {
      this.board = data
      console.log(data)
    })
  }

  delete(id: any) {
    this.boardService.deleteBoard(id).subscribe(data => {
      console.log(data);
    });
    this.toastr.success(`La board ${this.board.name} à bien été supprimé`, 'Suppression');
    setTimeout(() => { this.router.navigate([`/boards`]) }, 400);

  }

}
