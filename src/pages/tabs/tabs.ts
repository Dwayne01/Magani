import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Keyboard } from 'ionic-native';
import { HomePage } from '../home/home';
import { ReminderPage } from '../reminder/reminder';
import { StorePage } from '../store/store';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = StorePage; 
  tab3Root: any = ReminderPage;

  constructor(platform: Platform) {
  	platform.ready().then(() => {
            Keyboard.onKeyboardShow().subscribe(() => {
                document.body.classList.add('keyboard-is-open');
            });

            Keyboard.onKeyboardHide().subscribe(() => {
                document.body.classList.remove('keyboard-is-open');
            });
});
  }

  
}
