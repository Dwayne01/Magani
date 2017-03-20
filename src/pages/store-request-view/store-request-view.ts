import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

/*
  Generated class for the StoreRequestView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-store-request-view',
  templateUrl: 'store-request-view.html'
})
export class StoreRequestViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private app: App) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreRequestViewPage');
  }

}
