import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../../models/user.model';

import { ApiProvider } from '../api/api';

@Injectable()
export class UserProvider {

  public me: User;

  constructor(
    public api: ApiProvider
  ) {
  }

  setUser(data) {
    console.log(data);
    this.me = User.build(data);
    console.log(this.me);
    this.api.post('users', data).subscribe(res => {
      console.log(res);
    });
  } 

}
