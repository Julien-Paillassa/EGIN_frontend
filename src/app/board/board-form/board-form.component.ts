import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private boardService: BoardService,
    private toastr: ToastrService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.board = this.boardForm.value;
    this.boardService.addBoard(this.board).subscribe((response: any) => {
      console.log(response); 
    });
    this.toastr.success(`La board ${this.board.name} à bien été créée`, 'Création');
    setTimeout(() => { this.router.navigate([`/boards`]) }, 400);
  }
}
