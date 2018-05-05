import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Customer } from '../customer';
import { MEDIUM } from '../colors';

@Component({
  selector: 'app-customer-icon',
  templateUrl: './customer-icon.component.html',
  styleUrls: ['./customer-icon.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class CustomerIconComponent implements OnInit {

  @Input() iconType: string;
  @Input() customer: Customer;

  iconTitle: string;

  options: string[];
  titles: string[];
  colors: string[];

  hover: boolean;
  isPhoneIcon: boolean;

  constructor() { }

  ngOnInit() {
    this.options = [
      'cid', 'phone', 'city', 'address', 'cross',
      'note', 'name', 'email', 'ordered', 'created'];
    this.titles = [
      'perm_identity', 'phone', 'location_city', 'home', 'map',
      'description', 'person_pin', 'email', 'access_time', 'create'];
    this.colors = [
      'black', 'blue', 'orange', 'green', 'gray',
      'gray', 'red', 'purple', 'pink', 'gold'];
    this.setIconTitle(this.iconType);
    this.isPhoneIcon = this.iconType === 'phone';
  }

  setIconTitle(type: string) {
    this.iconTitle = this.titles[this.options.indexOf(type)];
  }

  getPhonePosition() {
    switch (this.customer.phone.length) {
      case 1:
        return 'translateY(11%)';
      case 2:
        return 'translateY(47%)';
      case 3:
        return 'translateY(65%)';
      case 4:
        return 'translateY(79px)';
      case 5:
        return 'translateY(76%)';
      default:
        break;
    }
  }

  getIconColor() {
    const key = this.colors[this.options.indexOf(this.iconType)];
    return MEDIUM[key];
  }

}
