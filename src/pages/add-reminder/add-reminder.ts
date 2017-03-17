import { Component, ViewChild } from '@angular/core';
import { NavController,  ViewController, ToastController, LoadingController, AlertController, Content } from 'ionic-angular';
import { DrugService} from '../../providers/drugs';
import * as moment from 'moment';
import { LocalNotifications } from 'ionic-native'
import { Storage } from '@ionic/storage';


/*
  Generated class for the AddReminder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-reminder',
  templateUrl: 'add-reminder.html'
})
export class AddReminderPage {
  @ViewChild(Content) content:Content;

  public title: string;
  public startDate: any;
  public endDate: any;
  public drugs: Array<any>;
  public items: Array<any>;

  minDate: string;
  timeArray: Array<any>;
  showForm: boolean;
  timeStuff: any;
  notificationArray: Array<any>;
  calendarEvents: Array<any>;

  constructor(public drugService: DrugService ,public loadingCtrl: LoadingController,public navCtrl: NavController,  public view: ViewController, public toastCtrl: ToastController, public viewCtrl: ViewController, public alertCtrl: AlertController, public storage: Storage) {
      this.title = '';
      this.drugs = [];
      this.items = [];

    this.startDate = moment(new Date()).format();
    this.endDate = moment(new Date()).format();
    this.minDate = moment(new Date()).format("YYYY");    
    this.timeStuff = moment(new Date()).format();
    this.timeArray = [];
    this.notificationArray = [];

      this.calendarEvents =[]

      this.storage.ready().then(() => {  
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

  ionViewDidLoad() {
 
        this.getDrugs();
 
  }
  public filt() {
    if (this.title) {
      this.drugs = this.filterItems(this.title);
    } else {
      this.drugs =[];
    }
        
 
  }

  public select (value) {
    this.title = value.name;
    this.drugs = [];
  }

  public filterItems(searchTerm){
        
        return this.items.filter((item) => {

            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
 
    }
  public closeOut() {
    this.drugs =[];
  }

  public getDrugs () {

      let loading = this.loadingCtrl.create({
        content: "Loading..."
      });
      loading.present();

      this.drugService.getDrugs()
        .subscribe(
          data => {
            loading.dismiss();
            this.items = data;},
          error => {
            loading.dismiss();
        });
  }

  tweet() {
    if (this.timeArray.length > 0 && this.title) {
      for( let i=0; i <= Math.abs(moment(this.startDate).diff(moment(this.endDate), 'days')); i++) {
          
          for (let x of this.timeArray) {
            this.notificationArray.push({
              id: + new Date(),
              title: 'Magani Pharmacy',
              text: `Oya take your ${this.title}`,
              at: new Date(moment(x).add(i, 'days').format())
            });
          }
      }
      console.log(this.notificationArray);
      let data = {
        title: this.title,
        startDate: this.startDate,
        endDate: this.endDate,
        timeArray: this.timeArray,
        id: this.notificationArray.map((notice)=> { return notice.id; })
      }
      console.log(data);     


      this.storage.ready().then(() => {
        LocalNotifications.schedule(this.notificationArray);
        
        this.notificationArray = [];
        let alert = this.alertCtrl.create({
        title: 'Notification Successfully Created',
        buttons: ['Ok']
        });
        alert.present();
        this.timeArray = [];

        let tempArray: Array<any> = this.calendarEvents.concat(data);
        

        console.log(JSON.stringify(tempArray)  + "From temp Array");
        
        
          this.storage.set('reminder', JSON.stringify(tempArray))
            .then(() => {this.calendarEvents = tempArray; console.log("Success set" + this.calendarEvents); this.navCtrl.pop();})
            .catch((err) => {console.log("error storing data")} );
        }).catch(()=>{});
      
     }
  }
  showForm1() {
    this.showForm = true;
    this.scrollToBottom();
  }
  scrollToBottom(){
        let dimensions = this.content.getContentDimensions();
        this.content.scrollTo(0, dimensions.scrollTop + dimensions.scrollHeight, 0);
    }
  addTime () {
    this.timeArray.push(this.timeStuff);
    this.timeStuff = moment(this.startDate).format();
   this.scrollToBottom();
    this.showForm = false;
  }

  deleteTime(sometime) {
    
    this.timeArray.splice(sometime,1);    
    this.scrollToBottom();
  }

  minte () {
    this.endDate = this.startDate;
  }

  cancel() {
    LocalNotifications.cancelAll().then(()=>{
        let alert = this.alertCtrl.create({
      title: 'Notification Cancelled',
      buttons: ['Ok']
    });
    alert.present();
    }).catch(()=>{});
    
  }




//   public saveItem(event) {
//       let options: any = {
//         firstReminderMinutes: 5,
//         recurrence: this.repeat
//       };
//       this.startDate = new Date(this.startDate);
//       this.endDate = new Date (this.endDate);

//       if (this.title) {

//             Calendar.hasReadWritePermission()
//               .then()
//               .catch(() => {Calendar.requestReadWritePermission();})
      
//             Calendar.createEventWithOptions(this.title, null, this.note, this.startDate, this.endDate, options)
//                 .then(() => {
//                       let toast = this.toastCtrl.create({
//                       message: "Event Created Successfully",
//                       duration: 3000,
//                       position: 'bottom'
//                       });
          
//                       toast.present();
                      
//                       console.log([this.title, this.note, this.repeat, this.startDate]);

          
//                       let data = {'title': this.title, 'note': this.note, 'startDate': this.startDate, 'endDate': this.endDate};
          
//                       this.viewCtrl.dismiss(data);
      
//                 })
//                 .catch((err) => {
//                   console.log("error: " + err);
//                   alert("This is the error: " + err);
//                   let data = {'title': '', 'note': '', 'startDate': this.startDate, 'endDate': this.endDate};
//                   this.viewCtrl.dismiss();
//                 });      
//       }
//   }

}