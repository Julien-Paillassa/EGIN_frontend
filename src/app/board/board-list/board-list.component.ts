import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  allBoards: any[]= [];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getAllBoards().subscribe((allBoards: any[]) => {
      this.allBoards = allBoards;
      console.log(allBoards)
    })
  }

}
