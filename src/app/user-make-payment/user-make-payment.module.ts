import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMakePaymentRoutingModule } from './user-make-payment-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BuyDataComponent } from './components/buy-data/buy-data.component';
import { DataUsageComponent } from './components/data-usage/data-usage.component';
import { ModalComponentComponent } from './components/modal-component/modal-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardComponent,
    BuyDataComponent,
    DataUsageComponent,
    ModalComponentComponent
  ],
  imports: [
    CommonModule,
    UserMakePaymentRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class UserMakePaymentModule { }
