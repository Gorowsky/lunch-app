import { Component, Input } from '@angular/core';
import { LunchSpot } from 'src/app/model/lunch-spots';
import LunchStatus = LunchSpot.Status;

@Component({
  selector: 'app-lunch-spot-list',
  templateUrl: './lunch-spot-list.component.html',
  styleUrls: ['./lunch-spot-list.component.scss']
})
export class LunchSpotListComponent {

  @Input() lunchSpots: Array<LunchSpot.Single>
  private lunchStatusMap: Map<string, LunchStatus> = new Map()
    .set(LunchStatus.DELIVERED, "delivered")
    .set(LunchStatus.UNDELIVERED, "in-delivery");

  constructor() { }

  mapToLunchStatusClass(status: LunchStatus): string {
    return this.lunchStatusMap.get(status);
  }

}
