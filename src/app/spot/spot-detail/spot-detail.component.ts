import { Component, OnInit, Input } from '@angular/core';
import { SpotService } from '../../services/spot.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-spot-detail',
  templateUrl: './spot-detail.component.html',
  styleUrls: ['./spot-detail.component.css']
})
export class SpotDetailComponent implements OnInit {

  @Input() spot: any = []

  constructor(
    private spotService: SpotService, 
    private route: ActivatedRoute,
    private toastr: ToastrService, 
    private router: Router
    ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    this.spotService.getSpotById(Number(id)).subscribe((data: any[]) => {
      this.spot = data
      console.log(data)
    })
  }

  delete(id: any) {
    this.spotService.deleteSpot(id).subscribe(data => {
      console.log(data);
    });
    this.toastr.success(`Le spot ${this.spot.name} à bien été supprimé`, 'Suppression');
    setTimeout(() => { this.router.navigate([`/spots`]) }, 400);
  }

}
