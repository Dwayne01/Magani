import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { SuccessfulPage } from '../successful/successful';

/*
  Generated class for the AddDrug page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-drug',
  templateUrl: 'add-drug.html'
})
export class AddDrugPage {

  constructor(public navCtrl:  NavController, private app: App) {}

   successful (event) {

      this.app.getRootNav().push(SuccessfulPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDrugPage');
  }

}
