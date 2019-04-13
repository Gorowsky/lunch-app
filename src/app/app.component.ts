import { Component } from '@angular/core';
import { NavLink } from './model/nav-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navLinks: Array<NavLink> = [
    {
      label: 'Oczekujące',
      path: 'in-delivery',
      icon: 'query_builder'
    },
    {
      label: 'Dostarczone',
      path: 'delivered',
      icon: 'thumb_up'
    }
  ]
  
  constructor(
  ) { }

}
