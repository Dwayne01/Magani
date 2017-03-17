import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdminHealthTipsPage } from '../admin-health-tips/admin-health-tips';
import { ModalController} from 'ionic-angular';
/*
  Generated class for the AdminHealthTipsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-admin-health-tips-list',
  templateUrl: 'admin-health-tips-list.html'
})
export class AdminHealthTipsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHealthTipsListPage');
  }

 addHealthTips(){
 
    let addModal = this.modalCtrl.create(AdminHealthTipsPage);
 
    addModal.onDidDismiss((item) => {
 
         
    });
 
    addModal.present();
 
  }


}
