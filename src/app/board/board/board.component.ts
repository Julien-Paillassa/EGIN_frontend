import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() board: any = []

  constructor(private boardService: BoardService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    //const id = this.route.snapshot.paramMap.get('id');

    // this.boardService.apiGetBoardById(Number(id)).subscribe((board: any[]) => {
    //   this.board = board
    //   console.log(board)
    // })

    this.boardService.getBoardById(1).subscribe((board: any[]) => {
      this.board = board
      console.log(board)
    })
  }

}
