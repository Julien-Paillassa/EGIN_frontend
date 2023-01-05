import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Board } from '../../board/board';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.css']
})
export class BoardFormComponent implements OnInit {

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
    this.boardService.addBoard(this.board).subscribe((response: any) => {
      console.log(response); 
    });
  }
}
