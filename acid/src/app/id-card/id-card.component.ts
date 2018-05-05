import { Component, Input, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { IconPreferences } from '../icon.preferences';
import { COLORS } from '../colors';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css']
})

export class IdCardComponent implements OnInit {

  @Input() searchType: string;
  @Input() customer: Customer;

  accountIconTitle: string;
  iconPreferences: string[];

  maxIcons: number;
  headerColor: string;

  outline;
  hover: boolean;

  constructor() { }

  ngOnInit() {
    this.setAccountIconTitle(this.customer.type);
    this.iconPreferences = IconPreferences;
    this.maxIcons = 4;
    this.headerColor = COLORS.MEDIUM.red;
    this.outline = {
      color: COLORS.ACCENT.blue,
      width: '3px'
    };
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

  filterIcons() {
    return this.iconPreferences.filter(property => this.customer[property]).slice(0, this.maxIcons);
  }

}
