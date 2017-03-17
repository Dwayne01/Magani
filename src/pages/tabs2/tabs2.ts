import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Keyboard } from 'ionic-native';
import { HomePage } from '../home/home';
import { MorePage } from '../more/more';
import { ReminderPage } from '../reminder/reminder';
import { StorePage } from '../store/store';
import { NavController, App } from 'ionic-angular';

@Component({
  templateUrl: 'tabs2.html'
})
export class TabsPage2 {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ReminderPage;
  tab3Root: any = StorePage;
  tab4Root: any = MorePage;

  constructor(navCtrl: NavController) {
  	
  }

  
}
