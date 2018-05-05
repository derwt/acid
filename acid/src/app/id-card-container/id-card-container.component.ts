import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CUSTOMERS } from '../CUSTOMERS';

@Component({
  selector: 'app-id-card-container',
  templateUrl: './id-card-container.component.html',
  styleUrls: ['./id-card-container.component.css']
})
export class IdCardContainerComponent implements OnInit {

  customers: Customer[];
  selected: Customer;

  constructor() { }

  ngOnInit() {
    this.customers = CUSTOMERS; // TODO: Pass in Customers from service call
  }

  select(customer: Customer) {
    this.selected = customer;
  }

  deselect() {
    this.selected = null;
  }

  // TODO: remove after testing. Used to show selected customer
  generateArray(object) {
    return Object.keys(object).map(function (key) {
      return [key + ' ', object[key]];
    });
  }

}
