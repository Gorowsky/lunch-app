import { Component, Input } from '@angular/core';
import { NavLink } from 'src/app/model/nav-links';

@Component({
  selector: 'app-lunch-spots-nav',
  templateUrl: './lunch-spots-nav.component.html',
  styleUrls: ['./lunch-spots-nav.component.scss']
})
export class LunchSpotsNavComponent {

  @Input() navLinks: Array<NavLink> = []

  constructor() { }

}
