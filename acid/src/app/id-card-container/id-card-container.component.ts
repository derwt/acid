import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CUSTOMERS } from '../CUSTOMERS';

@Component({
  selector: 'id-card-container',
  templateUrl: './id-card-container.component.html',
  styleUrls: ['./id-card-container.component.css']
})
export class IdCardContainerComponent implements OnInit {

  customers: Customer[];

  constructor() { }

  ngOnInit() {
    this.customers = CUSTOMERS;
  }

}
