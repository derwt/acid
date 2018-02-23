import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';

@Component({
  selector: 'id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css']
})

export class IdCardComponent implements OnInit {

  customer: Customer = {
    cid: 100,
    phone: [6501234444, 1112223333],
    city: "BL",
    address: "2700 Yosemite Drive",
    cross: "Ralston Ave",
    ordered: 10000002,
    created: 902900500000
  };

  constructor() { }

  ngOnInit() {
  }

}
