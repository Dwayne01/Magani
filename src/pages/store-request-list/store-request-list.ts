import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { StoreRequestViewPage } from '../store-request-view/store-request-view';

/*
  Generated class for the StoreRequestList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-store-request-list',
  templateUrl: 'store-request-list.html'
})
export class StoreRequestListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreRequestListPage');
  }


  openPage (event){
  this.app.getRootNav().push(StoreRequestViewPage);
  }

}
