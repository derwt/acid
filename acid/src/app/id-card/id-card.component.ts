import { Component, Input, OnInit } from '@angular/core';

import { Customer } from '../customer';

@Component({
  selector: 'id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css']
})

export class IdCardComponent implements OnInit {

  @Input() private searchType: string;

  customer: Customer = {
    cid: 100,
    phone: [6501234444, 1112223333],
    city: "BL",
    address: "2700 Yosemite Drive",
    cross: "Ralston Ave",
    email: "michael@pizza.face",
    ordered: 10000002,
    created: 902900500000,
    type: 'Personal'
  };

  accountIconTitle: string;

  constructor() { }

  ngOnInit() {
    this.setAccountIconTitle(this.customer.type);
  }

  setAccountIconTitle(type: string) {
    switch (type) {
      case 'Personal':
        this.accountIconTitle = type.slice(0, -2).toLowerCase();
        break;
      case 'Business':
        this.accountIconTitle = type.toLowerCase();
        break;
      default:
        this.customer.type = 'Personal';
        this.setAccountIconTitle(this.customer.type);
        break;
    }
  }

}
