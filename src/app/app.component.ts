import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  pages = [
    {
      title: 'Login',
      url: '/tabs/login',
      icon: 'log-in'
    },
    {
      title: 'Contact',
      url: '/tabs/contact',
      icon: 'person'
    },
    {
      title: 'Home',
      url: '/tabs/home',
      icon: 'person'
    },
    {
      title: 'Products',
      url: '/tabs/products',
      icon: 'information-circle'
    },
    {
      title: 'About',
      url: '/tabs/about',
      icon: 'information-circle'
    },
    {
      title: 'Landing',
      url: '/tabs/landing',
      icon: 'information-circle'
    },
    {
      title: 'Orders',
      url: '/tabs/orders',
      icon: 'information-circle'
    },
    {
      title: 'Addresses',
      url: '/tabs/addresses',
      icon: 'information-circle'
    },
    {
      title: 'Payment',
      url: '/tabs/payment',
      icon: 'information-circle'
    },
    {
      title: 'Order Result',
      url: '/tabs/order-result',
      icon: 'information-circle'
    },
    {
      title: 'Profile',
      url: '/tabs/profile',
      icon: 'information-circle'
    },
    {
      title: 'Cart',
      url: '/tabs/cart',
      icon: 'information-circle'
    },
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.pages.map( p => {
          return p['active'] = (event.url === p.url);
        });
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
