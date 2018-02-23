import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerService } from './customer.service';
import { IdCardComponent } from './id-card/id-card.component';
import { CustomerIconComponent } from './customer-icon/customer-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    IdCardComponent,
    CustomerIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
