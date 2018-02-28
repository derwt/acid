import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerService } from './customer.service';
import { IdCardComponent } from './id-card/id-card.component';
import { CustomerIconComponent } from './customer-icon/customer-icon.component';

import { PhonePipe } from '../pipes/phone.pipe';
import { IdCardContainerComponent } from './id-card-container/id-card-container.component';

@NgModule({
  declarations: [
    AppComponent,
    IdCardComponent,
    CustomerIconComponent,
    PhonePipe,
    IdCardContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
