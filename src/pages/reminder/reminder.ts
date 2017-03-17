import { Component } from '@angular/core';
import { AddReminderPage } from '../add-reminder/add-reminder';
import { NavController, App } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LocalNotifications} from 'ionic-native';

@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html'
})



 
export class ReminderPage {

	calendarEvents: Array<any> ;	

  constructor(public navCtrl: NavController, private app: App, public modalCtrl: ModalController, public navParams: NavParams, public storage: Storage) {
  		this.calendarEvents =[]

  		
    }

    ionViewDidEnter() {
    	this.storage.ready().then(() => {
  				// this.storage.clear();
				this.storage.get('reminder').then((value) => {
					if (value) {
						this.calendarEvents = JSON.parse(value);
					}
										
					console.log ("Events from storage" + this.calendarEvents);
					
				}).catch((err) => {
						console.log(" Error reading storage");
						this.calendarEvents = [];
					});
				});

    }

    addReminder(){
 
	this.navCtrl.push(AddReminderPage);
 
  }
	deleteReminder (drug) { 
		let tempArray: Array<any> = this.calendarEvents;
		let x: number = this.calendarEvents.findIndex(y => y===drug);		
		if ( x > -1) {
			tempArray.splice(x,1);
			LocalNotifications.cancel(drug.id)
				.then(() => {
					alert("Deleted successfully");
					this.storage.set('reminder', JSON.stringify(tempArray))
						.then(() => {this.calendarEvents = tempArray; console.log ("successfully deleted" + this.calendarEvents)})
						.catch((err) => {console.log("error deleting data");});
				})
				.catch((err) => {//this.calendarEvents = tempArray; 
					console.log ("Didn.t work but deleted" + err);
					alert("This is the delete error: " + err);
				});
				
			
		}

	}
 
}
