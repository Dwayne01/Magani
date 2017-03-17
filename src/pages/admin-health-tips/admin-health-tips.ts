import { Component } from '@angular/core';
import { NavController, ModalController, ViewController, App } from 'ionic-angular';

/*
  Generated class for the AdminHealthTips page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-admin-health-tips',
  templateUrl: 'admin-health-tips.html'
})
export class AdminHealthTipsPage {



   public pharMsg: string;
  public msgLength: number;
  public charRemaining: number;
  public charColor: string;

  constructor(public viewCtrl: ViewController,  private app: App) {
    this.charRemaining = 300;
    this.charColor = "secondary";
  }
		  public dismiss() {
		    this.viewCtrl.dismiss();
		  }

		  public onKey(){
		    if (this.pharMsg){
			    this.msgLength = this.pharMsg.length;
			    this.charRemaining = 300 - this.msgLength;
		  } else {
		   		 this.charRemaining = 300;
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHealthTipsPage');
  }

}
