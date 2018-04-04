import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  country: string;
  state: string;
  postal_code: string;
  locality: string;
  street: string;
  number: string;
  gender: string;
  birthdate: string;
  mail: string;
  firstname: string;
  lastname: string;
  nickname: string;
  email: string;
  password: string;
  password_confirmation: string;

  check: boolean;


  constructor(
    public userProv: UserProvider,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUp() {
    if(!this.country) {
      console.log(this.country, this.check);
      this.check = false;
      return
    }
    if(!this.state) {
      this.check = false;
      return
    }
    if(!this.postal_code) {
      this.check = false;
      return
    }
    if(!this.locality) {
      this.check = false;
      return
    }
    if(!this.street) {
      this.check = false;
      return
    }
    if(!this.number) {
      this.check = false;
      return
    }
    if(!this.gender) {
      this.check = false;
      return
    }
    if(!this.birthdate) {
      this.check = false;
      return
    }
    if(!this.mail) {
      this.check = false;
      return
    }
    if(!this.firstname) {
      this.check = false;
      return
    }
    if(!this.lastname) {
      this.check = false;
      return
    }
    if(!this.firstname) {
      this.check = false;
      return
    }
    if(!this.nickname) {
      this.check = false;
      return
    }
    if(!this.password) {
      this.check = false;
      return
    }
    if(!this.password_confirmation) {
      this.check = false;
      return
    }
    if(this.password==this.password_confirmation){
      this.check = false;
      return
    }

    this.check = true;

    let me = {
      firstname: this.firstname,
      lastname: this.lastname,
      nickname: this.nickname,
      password: this.password,
      password_confirmation: this.password_confirmation,
      mail: this.mail,
      birthdate: this.birthdate,
      gender: this.gender,
      address: {
        number: this.number,
        street: this.street,
        locality: {
          name: this.locality,
          postal_code: this.postal_code
        },
        state: {
          name: this.state
        },
        country: {
          name: this.country
        }
      }
    };

    this.userProv.setUser(me);
  }


}
