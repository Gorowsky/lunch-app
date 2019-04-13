import { Component, OnInit } from '@angular/core';
import { LunchSpot } from 'src/app/model/lunch-spots';
import { LunchApiService } from 'src/app/services/lunch-api.service';
import { map } from 'rxjs/operators';
import LunchStatus = LunchSpot.Status;

@Component({
  selector: 'app-lunch-spots-in-delivery',
  templateUrl: './lunch-spots-in-delivery.component.html',
  host: { 'class': 'flex-adjust-height' }
})
export class LunchSpotsInDeliveryComponent implements OnInit {

  public lunchSpots: Array<LunchSpot.Single> = []

  constructor(
    private lunchApiService: LunchApiService
  ) { }

  ngOnInit() {
    this.lunchApiService.getLunchSpots()
      .pipe(map(lunchSpotsData => lunchSpotsData.lunchSpots))
      .subscribe(lunchSpots => {
        this.lunchSpots = lunchSpots
          .filter(lunchSpot => lunchSpot.status === LunchStatus.UNDELIVERED)
      });
  }

}
