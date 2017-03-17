import { Component } from '@angular/core';

import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, private app: App) {}

    contactPage (event) {
      this.app.getRootNav().push(LoginPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
