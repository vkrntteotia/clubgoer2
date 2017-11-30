import { Component, Pipe } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,LoadingController,ToastController } from 'ionic-angular';
import { SongrequestsPage } from '../songrequests/songrequests';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Appsetting } from '../../providers/appsetting';

import * as moment from 'moment'

/**
 * Generated class for the EntercodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entercode',
  templateUrl: 'entercode.html',
})

@Pipe({
  name: 'dateFormatPipe',
})
export class EntercodePage {
   public data='';
   constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public http:Http,
   public appsetting: Appsetting,
   public loadingCtrl:LoadingController,
   public toastCtrl:ToastController,
   private alertCtrl: AlertController,
  ) {
  
}
  public Loading=this.loadingCtrl.create({
    content: 'Please wait...'
  });
 serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
      return result.join("&");
  }
 pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
 entercode(form){
  let headers = new Headers();
headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
let options= new RequestOptions({ headers: headers });
var User = JSON.parse(localStorage.getItem("USER_DATA"));
var userid = User.id;
var d = new Date();
var mm = ("0" + (d.getMonth() + 1)).slice(-2);
var day = ("0" + (d.getDate())).slice(-2);

var date = d.getFullYear()+"-"+mm+"-"+day;
  
    this.Loading.present();
    var data = {
        userid: userid,
      	djcode: form.value.code,
        date: date
    }
console.log(data);
console.log("vikki");
var Serialized = this.serializeObj(data);

this.http.post(this.appsetting.myGlobalVar + 'events/entercode', Serialized, options).map(res=>res.json()).subscribe(data=>{
this.Loading.dismiss();
if(data.isSucess == "true"){
  // console.log("vikrantDjcode");
  // console.log(data);
  // console.log("data Success");
   this.showConfirm(data.data);
}else{
    let alert = this.alertCtrl.create({
    title: 'Dj Confirmation',
    subTitle: data.msg,
  });
  alert.present();
   setTimeout(()=>alert.dismiss(),1500);
}
   })
}

showConfirm(event) {
  console.log(event.Event.event_date);
  let d = new Date(event.Event.event_date)
  console.log(moment(d).format('DD/MM/YYYY'));
  var dateformat = moment(d).format('MM/DD/YYYY');
 // this.dateformat
    let confirm = this.alertCtrl.create({
      title: 'Dj Confirmation',
      message: 'This is for the ' + dateformat + ', '+event.Event.event_name+', '+event.Dj.complete_name,
      buttons: [
        {
          text: 'Yes',
          cssClass: 'ion-button alertDanger round',
          handler: () => {
            this.navCtrl.push(SongrequestsPage, {
                eventid: event.Event.id,
                djid:event.Dj.id
              })
           // console.log('Disagree clicked');
          }
        },
        {
          text: 'Cancel',
          cssClass: 'alertDanger',
          handler: () => {
           // console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

ionViewDidEnter() {
    if (window.navigator.onLine == true) {
    } else {
      this.Loading.dismiss();
       let alert = this.alertCtrl.create({
        title: 'Network connection',
        subTitle: 'Something went wrong check your internet connection',
        });
       alert.present();
        setTimeout(()=>alert.dismiss(),1500);
      }
    }

}
