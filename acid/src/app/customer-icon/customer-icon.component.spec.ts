import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerIconComponent } from './customer-icon.component';

describe('CustomerIconComponent', () => {
  let component: CustomerIconComponent;
  let fixture: ComponentFixture<CustomerIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
