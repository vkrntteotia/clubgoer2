import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the VariableProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class VariableProvider {

 public baseUrl: string="http://priyank.crystalbiltech.com/dj/api/";
  // public SIGNUP_API="users/registration"; 
  public SIGNIN_API="users/fblogin"; 

  constructor(public http: Http) {
    console.log('Hello VariableProvider Provider');
  }

}
