import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'location-tracking/:car_id/:driver_id/:route_timing_id/:route_master_id',
    loadChildren: './location-tracking/location-tracking.module#LocationTrackingPageModule'
  },
  { path: 'today-rides', loadChildren: './today-rides/today-rides.module#TodayRidesPageModule' },
  { path: 'myaccount-common-page/:which-page', loadChildren: './myaccount-common-page/myaccount-common-page.module#MyaccountCommonPagePageModule' },  { path: 'my-rides', loadChildren: './my-rides/my-rides.module#MyRidesPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MyaccountRoutingModule { }
