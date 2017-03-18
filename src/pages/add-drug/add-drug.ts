import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { SuccessfulPage } from '../successful/successful';
import { Camera } from 'ionic-native';


/*
  Generated class for the AddDrug page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-drug',
  templateUrl: 'add-drug.html'
})
export class AddDrugPage {
  cameraImage: string ;
  name: string;
  category: string;
  strength: string;

  constructor(public navCtrl:  NavController, private app: App) {
    this.cameraImage = "assets/img/upload.jpg";
  }

  public successful (event) {

      this.app.getRootNav().push(SuccessfulPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDrugPage');
  }

  public addImage() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 235,
      targetHeight: 235      
    }).then(ImageData => {
      this.cameraImage = "data:image/jpeg;base64," + ImageData;
    }, Error => {
      console.log("Error -> " + JSON.stringify(Error));
    });

  }

}
