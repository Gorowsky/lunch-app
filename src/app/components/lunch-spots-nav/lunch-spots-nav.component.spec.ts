import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchSpotsNavComponent } from './lunch-spots-nav.component';

describe('LunchSpotsNavComponent', () => {
  let component: LunchSpotsNavComponent;
  let fixture: ComponentFixture<LunchSpotsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchSpotsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchSpotsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
