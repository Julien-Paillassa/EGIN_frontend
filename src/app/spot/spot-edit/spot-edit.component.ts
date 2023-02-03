import { Component, OnInit, Input } from '@angular/core';
import { SpotService } from '../../services/spot.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-spot-edit',
  templateUrl: './spot-edit.component.html',
  styleUrls: ['./spot-edit.component.css']
})
export class SpotEditComponent implements OnInit {

  @Input() spot: any = [];

  spotForm = new FormGroup({
    name: new FormControl(''),
    coordinate: new FormControl(''),
    codePostal: new FormControl(''),
    description: new FormControl(''),
  });

  spotId: any = this.route.snapshot.paramMap.get('id');

  constructor(
    private spotService: SpotService, 
    private route: ActivatedRoute,
    private toastr: ToastrService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.spotService.getSpotById(Number(this.spotId)).subscribe((data: any[]) => {
      this.spot = data
      console.log(data)
    })

    setTimeout(() => {
      this.spotForm.setValue({
        name: this.spot.name,
        coordinate: this.spot.coordinate,
        codePostal: this.spot.codePostal,
        description: this.spot.description,
      });
    }, 400);
  }

    onSubmit() {
      this.spot = this.spotForm.value;
      this.spotService.updateSpot(this.spot, this.spotId).subscribe((response: any) => {
        console.log(response);
      });
      this.toastr.success(`Le spot ${this.spot.name} à bien été édité`, 'Edition');
    setTimeout(() => { this.router.navigate([`/spots/${this.spotId}`]) }, 400);
    }

}
