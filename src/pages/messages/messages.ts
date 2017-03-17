import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { MessageViewPage } from '../message-view/message-view';

/*
  Generated class for the Messages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private app: App) {}


 message (event){
  this.app.getRootNav().push(MessageViewPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

}
