import { Component, OnInit } from '@angular/core';
import { SpotService } from '../../services/spot.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-spot-form',
  templateUrl: './spot-form.component.html',
  styleUrls: ['./spot-form.component.css']
})
export class SpotFormComponent implements OnInit {

  spot: any = [];

  spotForm = new FormGroup({
    name: new FormControl(''),
    coordinate: new FormControl(''),
    codePostal: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private spotService : SpotService,
    private toastr: ToastrService, 
    private router: Router,
    private location: Location 
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.spot = this.spotForm.value;
    this.spotService.addSpot(this.spot).subscribe((response: any) => {
      console.log(response); 
    });
    this.toastr.success(`Le spot ${this.spot.name} à bien été créée`, 'Création');
    setTimeout(() => { this.location.back(); }, 400);
  }

}
