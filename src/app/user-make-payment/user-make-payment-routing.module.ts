import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyDataComponent } from './components/buy-data/buy-data.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataUsageComponent } from './components/data-usage/data-usage.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'buy',
    component:BuyDataComponent
  },
  {
    path:'usage',
    component:DataUsageComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMakePaymentRoutingModule { }
