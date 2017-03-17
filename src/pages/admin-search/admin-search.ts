import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { DrugService} from '../../providers/drugs';


@Component({
  selector: 'page-admin-search',
  templateUrl: 'admin-search.html'
})
export class AdminSearchPage {

	public searchTerm: string = '';
	public drugs: Array<any>;
	public items: Array<any>;

  
  constructor(public navCtrl: NavController, private app: App, public drugService: DrugService) {
    
  	this.items = [];

  	
  }

  ionViewDidLoad() {
 
        this.getDrugs();
 
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

  public editDrug () {}
  


 
}