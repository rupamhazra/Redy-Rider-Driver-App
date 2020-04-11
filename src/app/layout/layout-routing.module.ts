import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPage } from './layout.page';
const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      { path: 'home', loadChildren: './home/home.module#HomePageModule' },
      { path: 'myaccount', loadChildren: './myaccount/myaccount.module#MyaccountPageModule' },
      { path: 'route-stoppage-modal', loadChildren: './office-pool-car-service/route-stoppage-modal/route-stoppage-modal.module#RouteStoppageModalPageModule' },
    ]
  },




















];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
