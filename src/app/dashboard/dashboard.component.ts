import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BoardService } from '../services/board.service';
import { SpotService } from '../services/spot.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showBoards: boolean = false;
  allBoards: any[]= [];
  allSpots: any[]= [];

  constructor(
    private boardService: BoardService, 
    private spotService : SpotService,
    private toastr: ToastrService,
    private router: Router,
    private location: Location 
  ) { }

  ngOnInit(): void {
    this.boardService.getAllBoards().subscribe((allBoards: any[]) => {
      this.allBoards = allBoards;
    })

    this.spotService.getAllSpots().subscribe((allSpots: any[]) => {
      this.allSpots = allSpots;
      console.log(allSpots)
    })
  }

  deleteBoard(id: any) {
    this.boardService.deleteBoard(id).subscribe(data => {
      console.log(data);
    });
    this.toastr.success(`La board à bien été supprimé`, 'Suppression');
    setTimeout(() => { this.location.back(); }, 400);
  }

  deleteSpot(id: any) {
    this.spotService.deleteSpot(id).subscribe(data => {
      console.log(data);
    });
    this.toastr.success(`Le spot à bien été supprimé`, 'Suppression');
    setTimeout(() => { this.location.back(); }, 400);
  }

}
