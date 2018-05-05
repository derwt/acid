import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCreateEditContainerComponent } from './search-create-edit-container.component';

describe('SearchCreateEditContainerComponent', () => {
  let component: SearchCreateEditContainerComponent;
  let fixture: ComponentFixture<SearchCreateEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCreateEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCreateEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
