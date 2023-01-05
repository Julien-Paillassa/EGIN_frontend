import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {

  @Input() board: any = []

  constructor(private boardService: BoardService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

     this.boardService.getBoardById(Number(id)).subscribe((board: any[]) => {
       this.board = board
       console.log(board)
     })
  }

  delete(id: any) {
    this.boardService.deleteBoard(id).subscribe(data => {
      console.log(data);
    });
  }

}
