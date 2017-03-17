import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AdminHomePage } from '../admin-home/admin-home';
import { TabsPage } from '../tabs/tabs';
/*
  Generated class for the Successful page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-successful',
  templateUrl: 'successful.html'
})
export class SuccessfulPage {

  constructor(public navCtrl:  NavController, private app: App) {}


     adminHome (event) {

      this.app.getRootNav().push(TabsPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessfulPage');
  }

}
