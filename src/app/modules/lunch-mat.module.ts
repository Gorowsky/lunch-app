import {NgModule} from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';

/**
 * Material components module
 */
@NgModule({
  exports: [
    CdkTableModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class LunchMatModule { }
