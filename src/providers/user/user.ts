import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../../models/user.model';

@Injectable()
export class UserProvider {

  public me: User;

  constructor(
    public http: HttpClient
  ) {
    console.log('Hello UserProvider');
  }

  setUser(data) {
    this.me = User.build(data);
  } 

}
