import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  pages: Array<{title:String, component: any}>;
 
  constructor(public navCtrl: NavController, private app: App) {

  this.pages =[
  	{title: 'About', component: 'AboutPage'},
  	{title: 'Help', component: 'HelpPage'}, 
  	{title: 'Settings', component: 'SettingsPage'},
  	{title: 'Signout', component: 'LoginPage'},
  ];
  }

  public openPage (e) {
    this.app.getRootNav().push(LoginPage);
  }


}
