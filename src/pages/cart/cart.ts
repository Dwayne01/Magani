import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuccessfulPage } from '../successful/successful';
import { AppGlobals } from '../../app/global';

/*
  Generated class for the Chart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

	public cartItems: Array<any>;  

  constructor(public navCtrl: NavController, public navParams: NavParams, apg: AppGlobals) {

    this.cartItems = this.navParams.get('transfer');
    apg.something.subscribe(value => console.log(value));
  }

  public addQty (qty) {

    return qty.qtyCount++;
  }

  public reduceQty (qty) {
    if (qty.qtyCount > 1 ){ return qty.qtyCount--;}
    
  }

  public success() {
    if (this.cartItems.length > 0) {
      this.navCtrl.setRoot(SuccessfulPage); 
    }
  }

}
