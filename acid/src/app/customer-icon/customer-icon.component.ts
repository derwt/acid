import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'customer-icon',
  templateUrl: './customer-icon.component.html',
  styleUrls: ['./customer-icon.component.css']
})
export class CustomerIconComponent implements OnInit {

  @Input() private iconType: string;
  options: string[];
  iconTitles: string[];
  iconTitle: string;

  constructor() { }

  ngOnInit() {
    this.options = [
      'cid', 'phone', 'city','address', 'cross', 
      'note', 'name', 'email', 'ordered', 'created' ];
    this.iconTitles = [
      'perm_identity', 'phone', 'location_city', 'location_on', 'map', 
      'description', 'person_pin', 'email', 'access_time', 'create' ];
    this.setIconTitle(this.iconType);
  }

  setIconTitle(type: string) {
    this.iconTitle = this.iconTitles[this.options.indexOf(type)];
  }

}
