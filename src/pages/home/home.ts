import { Component } from '@angular/core';
import {Slides ,NavController, ModalController, ViewController, App } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { CallNumber } from 'ionic-native';
import { SearchResultsPage } from '../search_results/search_results';
import { LoginPage } from '../login/login';
import { HealthTipsPage } from '../health-tips/health-tips';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public cameraImage: Array<any>;
  public Prescriptions: any;
  public Prescribe: string;
  public testValue: any;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private app: App) {
      this.Prescriptions = [];
      this.cameraImage = [];
}
 

 login (event) {
    this.app.getRootNav().push(LoginPage);
  }

 healthTip (event) {
this.app.getRootNav().push(HealthTipsPage);
    }


  public getCameraImage ()	{

  	Camera.getPicture({
  		quality: 75,
  		destinationType: Camera.DestinationType.DATA_URL,
  		sourceType: Camera.PictureSourceType.CAMERA,
  		allowEdit: true,
  		encodingType: Camera.EncodingType.JPEG,
  		targetWidth: 300,
  		targetHeight: 300,
  		saveToPhotoAlbum: false
  	}).then(ImageData => {
  		this.cameraImage.push("data:image/jpeg;base64," + ImageData);
  	}, Error => {
  		console.log("Error -> " + JSON.stringify(Error));
  	});

  }

  public deleteImage(image) {
      let x = this.cameraImage.indexOf(image);
      this.cameraImage.splice(x,1);
  }


 

  public callStaff () {
      CallNumber.callNumber('08073114366', true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
  }

  public addDrug(drug) {

    if (drug){
      this.Prescriptions.push({name: drug});
      this.Prescribe = "";  
    }
    
  }

  public removeDrug(drug) {

    let x: number = this.Prescriptions.findIndex(y => y.name==drug);

    if (x > -1){
      this.Prescriptions.splice(x,1);
    }
    
  }

  public pharModal() {
    let modal = this.modalCtrl.create(ModalContentPage);
    modal.present();
  }

  public goToSearch (event) {
      this.app.getRootNav().push(SearchResultsPage);
    }

     public profile (event) {
      this.app.getRootNav().push(ProfilePage);
    }  

}

@Component({
  selector: 'page-modal-content',
  template: `
    <ion-header>
  <ion-toolbar>
    <ion-title>
      Message
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content style="background-color: #feecec;">
  <img src="assets/img/ASK.jpg">
  <div text-center padding >
    <ion-textarea elastic style="background-color: #fff; border: solid 1px red; padding: 2px;" [(ngModel)]="pharMsg"   (keydown)="onKey()"></ion-textarea>
    <p style="margin-bottom:0px;" color="{{ charColor }}" text-right>{{charRemaining}}</p>
    <button ion-button round (click)="submitPharMsg()">Send</button>
  </div>

  
</ion-content>
  `
})

export class ModalContentPage {

  public pharMsg: string;
  public msgLength: number;
  public charRemaining: number;
  public charColor: string;

  constructor(public viewCtrl: ViewController,  private app: App) {
    this.charRemaining = 140;
    this.charColor = "secondary";
  }
  public dismiss() {
    this.viewCtrl.dismiss();
  }

  public onKey(){
    if (this.pharMsg){
    this.msgLength = this.pharMsg.length;
    this.charRemaining = 140 - this.msgLength;
  } else {
    this.charRemaining = 140;
  }


    if (this.charRemaining === 0) {
      this.charColor = "primary";
    } else if (this.charRemaining > 0) {
      this.charColor = "secondary";
    } else {
      this.charColor = "danger";
    }
      
  }

 
  public submitPharMsg () {
    if (this.charRemaining > -1 ) {
      this.pharMsg = "";
    }
  }
}