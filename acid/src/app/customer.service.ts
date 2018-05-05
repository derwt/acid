import { Injectable } from '@angular/core';
import { MongoClient } from 'mongodb';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
// import Customer = require('../schemas/customer');

const URL = 'mongodb://localhost:27017/avantiCD';

@Injectable()
export class CustomerService {

  constructor() { }

  // getCustomer(): Observable<null> {
  //   return of(null);
  // }

}
