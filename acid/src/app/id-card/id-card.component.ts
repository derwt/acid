import { Component, Input, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { IconPreferences } from '../icon.preferences';

import { CUSTOMERS } from '../CUSTOMERS';

@Component({
  selector: 'id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css']
})

export class IdCardComponent implements OnInit {

  @Input() private searchType: string;

  customer: Customer;

  accountIconTitle: string;
  iconPreferences: string[];
  
  constructor() { }

  ngOnInit() {
    this.customer = CUSTOMERS[0]; // TODO: Hook in actual customer instead of test data
    this.setAccountIconTitle(this.customer.type);
    this.iconPreferences = IconPreferences;
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
