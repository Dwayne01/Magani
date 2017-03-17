import { Component } from '@angular/core';
import { RegisterPage } from '../register/register';
import { NavController, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { AdminHomePage } from '../admin-home/admin-home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


 
  constructor(public navCtrl: NavController, private app: App) {
  }

   registerPage (event) {
     this.navCtrl.setRoot(RegisterPage);
    }

   enterAdmin (event) {
   	 this.navCtrl.setRoot(AdminHomePage);
   }

   goToHome() {
      this.navCtrl.setRoot(TabsPage); 
   }

}
