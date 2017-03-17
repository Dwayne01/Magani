import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from 'ionic-native';

/*
  Generated class for the ViewRequest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-request',
  templateUrl: 'view-request.html'
})
export class ViewRequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  
  public callStaff () {
      CallNumber.callNumber('08073114366', true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRequestPage');
  }

}
