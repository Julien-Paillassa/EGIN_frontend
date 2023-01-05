import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Board } from '../../board/board';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css']
})
export class BoardEditComponent implements OnInit {

  board: any = [];

  boardForm = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    size: new FormControl(''),
    volume: new FormControl(''),
    description: new FormControl(''),
    dimension: new FormControl(''),
  });

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.board = this.boardForm.value;
    this.boardService.updateBoard(this.board, this.board.id).subscribe((response: any) => {
      console.log(response); 
    });
  }

}
