import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'cybercode',
      //   pathMatch: 'full',
      // },
    
      {
        path: 'cybercode',
        loadChildren: () => import('../app/user-make-payment/user-make-payment.module').then(m => m.UserMakePaymentModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
