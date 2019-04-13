import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchSpotsInDeliveryComponent } from './lunch-spots-in-delivery.component';

describe('LunchSpotsInDeliveryComponent', () => {
  let component: LunchSpotsInDeliveryComponent;
  let fixture: ComponentFixture<LunchSpotsInDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchSpotsInDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchSpotsInDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
