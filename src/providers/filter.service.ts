import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DrugService} from '../providers/drugs';
import 'rxjs/add/operator/map';
 
@Injectable()
export class FilterService {
 
    items: Array<any>;
 
    constructor(public http: Http, public drugService: DrugService) {
 
        this.items = [];         
    }

    public getDrugs () {      

      this.drugService.getDrugs()
        .subscribe(
          data => {
            this.items = data;},
          error => {}
          );
    }
 
    public filterItems(searchTerm){
         this.getDrugs();
        return this.items.filter((item) => {

            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
 
    }
 
}