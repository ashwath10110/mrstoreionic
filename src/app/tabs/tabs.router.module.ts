import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: '../login/login.module#LoginPageModule'
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'landing',
        children: [
          {
            path: '',
            loadChildren: '../landing/landing.module#LandingPageModule'
          }
        ]
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: '../products/products.module#ProductsPageModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutPageModule'
          }
        ]
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: '../contact/contact.module#ContactPageModule'
          }
        ]
      },
      {
        path: 'services',
        children: [
          {
            path: '',
            loadChildren: '../services/services.module#ServicesPageModule'
          }
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: '../orders/orders.module#OrdersPageModule'
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: '../login/login.module#LoginPageModule'
          }
        ]
      },
      {
        path: 'addresses',
        children: [
          {
            path: '',
            loadChildren: '../addresses/addresses.module#AddressesPageModule'
          }
        ]
      },
      {
        path: 'payment',
        children: [
          {
            path: '',
            loadChildren: '../payment/payment.module#PaymentPageModule'
          }
        ]
      },
      {
        path: 'order-result',
        children: [
          {
            path: '',
            loadChildren: '../order-result/order-result.module#OrderResultPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '',
            loadChildren: '../cart/cart.module#CartPageModule'
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
