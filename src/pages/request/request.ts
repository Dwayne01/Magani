import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ViewRequestPage } from '../view-request/view-request';
import { NavController, App } from 'ionic-angular';

/*
  Generated class for the Request page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-request',
  templateUrl: 'request.html'
})
export class RequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private app: App) {}

  openPage (event){
  this.app.getRootNav().push(ViewRequestPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

}
