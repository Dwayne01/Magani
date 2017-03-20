import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
//import { TabsPage } from '../ps/tabs/tabs';
import { AddDrugPage } from '../add-drug/add-drug';
import { RequestTypesPage } from '../request-types/request-types';
import { LoginPage } from '../login/login';
import { MessagesPage } from '../messages/messages';
import { AdminHealthTipsListPage } from '../admin-health-tips-list/admin-health-tips-list';
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

      this.app.getRootNav().push(AdminHealthTipsListPage);
    }

  messages (event) {

      this.app.getRootNav().push(MessagesPage);
    }

   addDrug (event) {

  		this.app.getRootNav().push(AddDrugPage);
  	}

     request (event) {

      this.app.getRootNav().push(RequestTypesPage);
    }

    login (event) {
      this.app.getRootNav().push(LoginPage);
    }

    searchDrug() {
      this.app.getRootNav().push(AdminSearchPage);
    }

}
