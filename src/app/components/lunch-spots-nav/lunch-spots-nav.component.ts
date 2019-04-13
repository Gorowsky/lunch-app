import { Component, Input } from '@angular/core';
import { NavLink } from 'src/app/model/nav-links';

/**
 * I made an router outlet out of tabs because
 * this way we got much more scalable solution.
 * Instead of one HOC which handles logic of
 * filtering statuses and lists them we got possibility 
 * of create different tab components which can 
 * handle their own specific logic. We can also access
 * to specific tab via url in this approach. There is also 
 * posibility of creating outer router and handle this one
 * as its child.
 */

@Component({
  selector: 'app-lunch-spots-nav',
  templateUrl: './lunch-spots-nav.component.html',
  styleUrls: ['./lunch-spots-nav.component.scss']
})
export class LunchSpotsNavComponent {

  @Input() navLinks: Array<NavLink> = []

  constructor() { }

}
