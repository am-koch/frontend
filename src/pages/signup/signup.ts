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
    this.check = true;
  }

  signUp() {
    console.log('Enter')
    if(!this.country) {
      console.log(this.country, 'country');
      this.check = false;
      return
    }
    if(!this.state) {
      console.log('state')
      this.check = false;
      return
    }
    if(!this.postal_code) {
            console.log('state')

      this.check = false;
      return
    }
    if(!this.locality) {
            console.log('state')

      this.check = false;
      return
    }
    if(!this.street) {
            console.log('state')

      this.check = false;
      return
    }
    if(!this.number) {
            console.log('state')

      this.check = false;
      return
    }
    if(!this.gender) {
            console.log('state')

      this.check = false;
      return
    }
    if(!this.birthdate) {
            console.log('state')

      this.check = false;
      return
    }
    if(!this.mail) {
            console.log('state')

      this.check = false;
      return
    }
    if(!this.firstname) {
            console.log('state')

      this.check = false;
      return
    }
    if(!this.lastname) {
            console.log('state')

      this.check = false;
      return
    }
    if(!this.firstname) {
            console.log('state')

      this.check = false;
      return
    }
    if(!this.nickname) {
            console.log('state')

      this.check = false;
      return
    }
    if(!this.password) {
            console.log('state')

      this.check = false;
      return
    }
    if(!this.password_confirmation) {
            console.log('state')

      this.check = false;
      return
    }
    if(this.password!=this.password_confirmation){
            console.log('password not the same')

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
