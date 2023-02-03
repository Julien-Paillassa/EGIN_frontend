import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css']
})
export class BoardEditComponent implements OnInit {

  @Input() board: any = []

  boardForm = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    size: new FormControl(''),
    volume: new FormControl(''),
    description: new FormControl(''),
    dimension: new FormControl(''),
  });

  boardId: any = this.route.snapshot.paramMap.get('id');

  constructor(
    private boardService: BoardService, 
    private route: ActivatedRoute, 
    private toastr: ToastrService, 
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
      this.boardService.getBoardById(Number(this.boardId)).subscribe((board: any[]) => {
        this.board = board
        console.log(board)
      })

      setTimeout(() => {
        this.boardForm.setValue({
          name: this.board.name,
          brand: this.board.brand,
          size: this.board.size,
          volume: this.board.volume,
          description: this.board.description,
          dimension: this.board.dimension,
        });
      }, 500);

      
  }

  onSubmit() {
    this.board = this.boardForm.value;
    this.boardService.updateBoard(this.board, this.boardId).subscribe((response: any) => {
      console.log(response);
    });
    this.toastr.success(`La board ${this.board.name} à bien été édité`, 'Edition');
    setTimeout(() => { this.location.back(); }, 400);

  }
}
