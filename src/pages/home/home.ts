import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public navParams: NavParams
    ) {
  }

  openSignup() {
    this.navCtrl.push('SignupPage');
  }

  openPopup() {
      let alert = this.alertCtrl.create({
      title: 'SOON!',
      message: 'Sign-ups will soon be available! Stay tuned and don\'t miss it!',
      buttons: [
        {
          text: 'Can\'t wait!',
          role: 'cancel',
          handler: () => {
            console.log('I\'ll kick somme ass!');
          }
        }
      ]
    });
    alert.present();
  }

}
