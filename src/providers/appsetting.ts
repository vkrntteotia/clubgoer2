import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ToastController} from 'ionic-angular';

/*
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Appsetting {
  interval:any;
 myGlobalVar: string ='http://vikrant.crystalbiltech.com/dj/api/'; //shop/shippingaddress
 showGlobalurl: string="http://vikrant.crystalbiltech.com/dj/img/eventdd/";
 editGlobalevntimg: string="http://vikrant.crystalbiltech.com/dj/img/editeventimg/";
 profile: string;
  constructor(public http: Http,public toastCtrl:ToastController) {
    this.checknetwork();
  }
  public checknetwork(){
        if (window.navigator.onLine == true) {
    } else {
        let toast = this.toastCtrl.create({
      message: 'Network Connection failed',
      duration: 5000
    });
    toast.present();
    }
  }
}
