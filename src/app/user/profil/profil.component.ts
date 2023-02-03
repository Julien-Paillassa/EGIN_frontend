import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user: any = []

  userInfos: any = []

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private toastr: ToastrService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.user = 'Laird Hamilton' 

    // this.userService.getUserInfos(this.user).subscribe((data: any[]) => {
    //   this.userInfos = data
    //   console.log(data)
    // })
  }

}
