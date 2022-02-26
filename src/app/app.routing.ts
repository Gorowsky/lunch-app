import { RouterModule, Routes } from '@angular/router';
import { LunchSpotsDeliveredComponent } from './components/lunch-spots-delivered/lunch-spots-delivered.component';
import { LunchSpotsInDeliveryComponent } from './components/lunch-spots-in-delivery/lunch-spots-in-delivery.component';

const ROUTES: Routes = [
  { 
    path: '',
    children: [
      { path: '', redirectTo: 'delivered', pathMatch: 'full' },    
      { path: 'delivered', component: LunchSpotsDeliveredComponent }, 
      { path: 'in-delivery', component: LunchSpotsInDeliveryComponent }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(ROUTES);