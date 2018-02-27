import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../customer';


@Component({
  selector: 'customer-icon',
  templateUrl: './customer-icon.component.html',
  styleUrls: ['./customer-icon.component.css']
})
export class CustomerIconComponent implements OnInit {

  @Input() private iconType: string;
  @Input() private customer: Customer;

  iconTitle: string;

  options: string[];
  iconTitles: string[];

  isPhoneIcon: boolean;

  constructor() { }

  ngOnInit() {
    this.options = [
      'cid', 'phone', 'city', 'address', 'cross',
      'note', 'name', 'email', 'ordered', 'created'];
    this.iconTitles = [
      'perm_identity', 'phone', 'location_city', 'location_on', 'map',
      'description', 'person_pin', 'email', 'access_time', 'create'];
    this.setIconTitle(this.iconType);
    this.isPhoneIcon = this.iconType == 'phone';
  }

  setIconTitle(type: string) {
    this.iconTitle = this.iconTitles[this.options.indexOf(type)];
  }

  public getPhonePosition() {
    switch (this.customer.phone.length) {
      case 1:
        return 'translate(-15px, 11%)';
      case 2:
        return 'translate(-15px, 47%)';
      case 3:
        return 'translate(-15px, 65%)';
      case 4:
        return 'translate(-15px, 79px)';
      case 5:
        return 'translate(-15px, 76%)';
      default:
        break;
    }
  }

}
