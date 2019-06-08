import { Component, ViewChild } from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss']
})
export class OrdersPage {

  @ViewChild(IonSlides) slides: IonSlides;

  segment = "";
  index = 0;
  data: Array<any> = [];
  sponsored: Array<any> = [];
  products: any;
  product_data_1: Array<any> = [];
  product_data_2: Array<any> = [];
  product_data_3: Array<any> = [];
  product_data_4: Array<any> = [];
  product_data_5: Array<any> = [];
  slideOpts = {
    effect: "flip"
  };

  menuTabs: any = [];
  cartItems: number = 0;

  constructor(
    private menuCtrl: MenuController,
    private router: Router,
  ) {
    this.getTabs();
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, "start");
    this.menuCtrl.enable(true, "end");
  }

  getTabs() {
    let tabs = [{
      name: 'Tab1',
      value: 'TabValue1'
    },
    {
      name: 'Tab2',
      value: 'TabValue2'
    },
    {
      name: 'Tab3',
      value: 'TabValue3'
    }];
    this.menuTabs = tabs;
    this.segment = tabs[0].name;
  }

  seg(event) {
    this.segment = event.detail.value;
  }

  drag() {
    let distanceToScroll = 0;
    for (let index in this.menuTabs) {
      if (parseInt(index) < this.index) {
        distanceToScroll =
          distanceToScroll +
          document.getElementById("seg_" + index).offsetWidth +
          24;
      }
    }
    document.getElementById("dag").scrollLeft = distanceToScroll;
  }

  preventDefault(e) {
    e.preventDefault();
  }

  async change() {
    if (this.products && this.products.length) {
      this.products.length = 0;
    }
    await this.slides.getActiveIndex().then(data => (this.index = data));
    this.segment = this.menuTabs[this.index].name;
    let tagId = this.menuTabs[this.index].id;
    this.getProductData(tagId);
    this.drag();
  }

  getProductData(tagId) {
    console.log(tagId);
  }

  side_open() {
    this.menuCtrl.toggle("end");
  }

  navigateToCart(name){
    this.router.navigate(['/tabs/cart']);
  }

  update(i) {
    this.slides.slideTo(i);
  }
}
