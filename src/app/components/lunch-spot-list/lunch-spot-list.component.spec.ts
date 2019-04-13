import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchSpotListComponent } from './lunch-spot-list.component';

describe('LunchSpotListComponent', () => {
  let component: LunchSpotListComponent;
  let fixture: ComponentFixture<LunchSpotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchSpotListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchSpotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
