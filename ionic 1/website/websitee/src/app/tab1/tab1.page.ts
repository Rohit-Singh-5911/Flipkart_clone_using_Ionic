import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
 

}
