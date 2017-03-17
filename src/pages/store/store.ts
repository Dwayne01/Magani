import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { DrugService} from '../../providers/drugs';
import { AppGlobals } from '../../app/global';



/*
  Generated class for the Store page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class StorePage {
	public drugs: Array<any>;
  public bufferData: Array<any>;
  public cartItems: Array<any>;
  public showSearch: any = false;
  public searchTerm: string = '';
  
  constructor(public apg: AppGlobals, public navCtrl: NavController, private app: App, public loadingCtrl: LoadingController, public drugService: DrugService) {
    this.drugs = [];
    this.cartItems =[];
    
  }

  ionViewDidLoad() { 
        this.getDrugs(); 
  }

  ionViewDidEnter() {
    this.apg.something.subscribe((value)=> {this.cartItems = value;});

    this.drugs.forEach ((some)=>{
      if (this.cartItems.indexOf(some.id) > -1 ) {
        return some.added = true;
      }
    });
    
  }

  ionViewWillLeave () {
    this.apg.setSomethingValue(this.cartItems);
  }
  
  public addToCart (stuff) {
  		stuff.added = !stuff.added;
  		
  		if ( stuff.added === true) {
  			this.cartItems.push(stuff.id);
  		} else {
  			let x: number = this.cartItems.indexOf(stuff.id);
  			this.cartItems.splice(x, 1);
  		}  		
  }

  public goToCheckOut (event) {
     
     let transferItem: Array<any>;

     transferItem = this.drugs.filter( (item) => {
       return this.cartItems.indexOf(item.id) > -1;
     });

     transferItem.forEach( (item) => {
       return item.qtyCount = 1;
     });

     this.app.getRootNav().push(CartPage, {transfer : transferItem});
    }

  public getDrugs () {

      let loading = this.loadingCtrl.create({
        content: "Loading Store"
      });
      loading.present();

      this.drugService.getDrugs()
        .subscribe(
          data => {
            loading.dismiss();
            this.bufferData = data; this.drugs = this.bufferData; console.log(this.bufferData);},
          error => {
            loading.dismiss();
        });
  }
  public setFilteredItems() {

        
        this.drugs = this.filterItems(this.searchTerm);
 
  }

  public filterItems(searchTerm){
        
        return this.bufferData.filter((item) => {

            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
 
    }

  public showSearch1() {
    this.searchTerm = '';
    this.setFilteredItems();
    this.showSearch = false;

  }

  
}


