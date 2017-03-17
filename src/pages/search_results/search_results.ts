import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { DrugService} from '../../providers/drugs';
import { AppGlobals } from '../../app/global';
//import { FilterService} from '../../providers/filter.service';


@Component({
  selector: 'page-about',
  templateUrl: 'search_results.html'
})
export class SearchResultsPage {

  public searchTerm: string = '';
	public drugs: Array<any>;
	public items: Array<any>;
  public cartItems: Array<any>;
  
  constructor(public apg: AppGlobals, public navCtrl: NavController, private app: App, public drugService: DrugService) {
    
  	this.items = [];
    this.cartItems = [];

  	
  }

  ionViewDidLoad() { 
        this.getDrugs(); 
  }

  ionViewDidEnter() {
    this.apg.something.subscribe((value)=> {this.cartItems = value;});
    this.items.forEach ((some)=>{
      if (this.cartItems.indexOf(some.id) > -1 ) {
        return some.added = true;
      }
    });
    
  }

  ionViewWillLeave () {
    this.apg.setSomethingValue(this.cartItems);
  }

  public getDrugs () {      

      this.drugService.getDrugs()
        .subscribe(
          data => {
            this.items = data;},
          error => {}
          );
    }

  public setFilteredItems() {
 
        this.drugs = this.filterItems(this.searchTerm);
 
  }

  public filterItems(searchTerm){
        
        return this.items.filter((item) => {

            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
 
    }
  
  public addToCart (stuff) {
  		stuff.added = !stuff.added;


  		
  		if ( stuff.added === true) {
  			this.cartItems.push(stuff.id);
  		} else {
  			let x: number = this.cartItems.indexOf(stuff.id);
  			this.cartItems.splice(x, 1);
  		}

        let b: number = this.items.findIndex(y => y.id == stuff.id);
        this.items[b].added = stuff.added ;
  		
  }

  public goToCheckOut (event) {

      
      let transferItem: Array<any>;

     transferItem = this.items.filter( (item) => {
       return this.cartItems.indexOf(item.id) > -1;
     });

     transferItem.forEach( (item) => {
       return item.qtyCount = 1;
     });

     this.app.getRootNav().push(CartPage, {transfer : transferItem});
    }

 
}
