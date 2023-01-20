import { Component, OnInit } from '@angular/core';
import { SpotService } from '../../services/spot.service';

@Component({
  selector: 'app-spot-list',
  templateUrl: './spot-list.component.html',
  styleUrls: ['./spot-list.component.css']
})
export class SpotListComponent implements OnInit {

  allSpots: any[]= [];

  constructor(private spotService : SpotService) { }

  ngOnInit() {
    this.spotService.getAllSpots().subscribe((allSpots: any[]) => {
      this.allSpots = allSpots;
      console.log(allSpots)
    })
  }

}
