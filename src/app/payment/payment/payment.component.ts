import { Component, OnInit } from '@angular/core';
import {loadStripe} from '@stripe/stripe-js';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  async ngOnInit() {
    const stripe = await loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    console.log(stripe)
  }

}
