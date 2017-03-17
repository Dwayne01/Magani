import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
//import { TabsPage } from '../ps/tabs/tabs';
import { AddDrugPage } from '../add-drug/add-drug';
import { RequestPage } from '../request/request';
import { LoginPage } from '../login/login';
import { MessagesPage } from '../messages/messages';
import { AdminHealthTipsPage } from '../admin-health-tips/admin-health-tips';
import { AdminSearchPage } from '../admin-search/admin-search';

/*
  Generated class for the AdminHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html'
})
export class AdminHomePage {

  constructor(public navCtrl:  NavController, private app: App) {}

   healthTip (event) {

      this.app.getRootNav().push(AdminHealthTipsPage);
    }

  messages (event) {

      this.app.getRootNav().push(MessagesPage);
    }

   addDrug (event) {

  		this.app.getRootNav().push(AddDrugPage);
  	}

     request (event) {

      this.app.getRootNav().push(RequestPage);
    }

    login (event) {
      this.app.getRootNav().push(LoginPage);
    }

    searchDrug() {
      this.app.getRootNav().push(AdminSearchPage);
    }

}
