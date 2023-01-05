
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardService } from '../../../services/board.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() boards: any;

  boards$: Observable<string[]>;

  constructor(private boardService: BoardService) {
    this.boards$ = this.boardService.getAllBoards();
  }

  ngOnInit(): void {
  }

}
