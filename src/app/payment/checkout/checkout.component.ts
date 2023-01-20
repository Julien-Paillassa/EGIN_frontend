import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input() board: any = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {    
  }


  public getCheckout() {
    return this.http.post(`${environment.apiUrl}/create-checkout-session/${this.board.id}`, {})
    .subscribe((checkoutSession: any) => {
      console.log(checkoutSession)
      window.location.href = checkoutSession.url
    })
  }
}
