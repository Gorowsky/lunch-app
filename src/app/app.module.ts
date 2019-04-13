import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LunchMatModule } from './modules/lunch-mat.module';
import { AppRoutingModule } from './app.routing';
import { LocalStorageModule } from 'angular-2-local-storage';

// Components
import { AppComponent } from './app.component';
import { LunchSpotListComponent } from './components/lunch-spot-list/lunch-spot-list.component';
import { LunchSpotsDeliveredComponent } from './components/lunch-spots-delivered/lunch-spots-delivered.component';
import { LunchSpotsInDeliveryComponent } from './components/lunch-spots-in-delivery/lunch-spots-in-delivery.component';
import { LunchSpotsNavComponent } from './components/lunch-spots-nav/lunch-spots-nav.component';

// Services
import { LunchApiService } from './services/lunch-api.service';

@NgModule({
  declarations: [
    AppComponent,
    LunchSpotListComponent,
    LunchSpotsDeliveredComponent,
    LunchSpotsInDeliveryComponent,
    LunchSpotsNavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    LunchMatModule,
    AppRoutingModule,
    LocalStorageModule.forRoot({
      prefix: 'lunch-app',
      storageType: 'sessionStorage'
    })
  ],
  providers: [
    LunchApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
