import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookingHistoryDetailsPage } from './booking-history-details.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from "../../../core/components/components.module";

const routes: Routes = [
  {
    path: '',
    component: BookingHistoryDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    ComponentsModule
  ],
  declarations: [BookingHistoryDetailsPage]
})
export class BookingHistoryDetailsPageModule { }
