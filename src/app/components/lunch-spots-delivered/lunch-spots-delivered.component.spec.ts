import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchSpotsDeliveredComponent } from './lunch-spots-delivered.component';

describe('LunchSpotsDeliveredComponent', () => {
  let component: LunchSpotsDeliveredComponent;
  let fixture: ComponentFixture<LunchSpotsDeliveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchSpotsDeliveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchSpotsDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
