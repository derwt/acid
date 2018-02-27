import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardContainerComponent } from './id-card-container.component';

describe('IdCardContainerComponent', () => {
  let component: IdCardContainerComponent;
  let fixture: ComponentFixture<IdCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
