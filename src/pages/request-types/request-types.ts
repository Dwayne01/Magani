import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { RequestPage } from '../request/request';
import { StoreRequestListPage } from '../store-request-list/store-request-list';
/*
/*
  Generated class for the RequestTypes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-request-types',
  templateUrl: 'request-types.html'
})
export class RequestTypesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private app: App) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestTypesPage');
  }




     requestCart (event) {

      this.app.getRootNav().push(StoreRequestListPage);
    }

    requestPescription (event) {

      this.app.getRootNav().push(RequestPage);
    }
}
