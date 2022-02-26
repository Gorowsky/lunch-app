import { Component, OnInit } from '@angular/core';
import { LunchApiService } from 'src/app/services/lunch-api.service';
import { map, tap } from 'rxjs/operators';
import { LunchSpot } from 'src/app/model/lunch-spots';
import LunchStatus = LunchSpot.Status;

@Component({
  selector: 'app-lunch-spots-delivered',
  templateUrl: './lunch-spots-delivered.component.html',
  styleUrls: ['../../theme/lunch-spots.scss']
})
export class LunchSpotsDeliveredComponent implements OnInit {

  public lunchSpots: Array<LunchSpot.Single> = []

  constructor(
    private lunchApiService: LunchApiService
  ) { }

  ngOnInit() {
    this.lunchApiService.getLunchSpots()
      .pipe(
        map(({ lunchSpots }) => lunchSpots),
        tap(lunchSpots => {
          this.lunchSpots = lunchSpots
            .filter(({ status }) => status === LunchStatus.DELIVERED);
        })
      )
      .subscribe();
  }

}
