import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,AlertController } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import {LoadingController} from 'ionic-angular';
import {HomePage} from '../home/home';
/**
 * Generated class for the PayinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymentinfo',
  templateUrl: 'paymentinfo.html',
})
export class PaymentinfoPage {
  public data = {}; minyear;maxyear;setbit;pdata;
  public Loading=this.loadingCtrl.create({
    content: 'Please wait...'
  });
  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public appsetting: Appsetting,
   public http:Http,
   public loadingCtrl:LoadingController,
   public toastCtrl:ToastController,
   private alertCtrl: AlertController
  ) {
    var d = new Date();
    this.minyear = d.getFullYear();
    this.maxyear = this.minyear+20;
    this.data={'relationship':1};
    this.setbit=1;
    this.pdata = navParams.get("postdata");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayinfoPage');
  }
  setbitnow(bitnow){
    this.setbit=bitnow;
  }
paynow(payinfo){
  this.Loading.present();
  var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
  let headers = new Headers();
headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
let options= new RequestOptions({ headers: headers });
if(payinfo.value.relationship==undefined){
          let alert = this.alertCtrl.create({
                  title: 'Edit payment info',
                  subTitle: "Please select payment method"
                });
                alert.present();
                setTimeout(()=>alert.dismiss(),1500);
          this.Loading.dismiss();
} else{
var data ={
  id:user_id,
  cardnum:payinfo.value.cardnum,
  monyear:payinfo.value.monyear,
  name:payinfo.value.name,
  method:payinfo.value.relationship,
  cvv:payinfo.value.cvv
}

 var Serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'users/editpaymentinfo', Serialized, options).map(res=>res.json()).subscribe(response=>{
     this.Loading.dismiss(); 
              if(response.isSuccess == true){
                localStorage.removeItem("USER_DATA");
                localStorage.setItem("USER_DATA", JSON.stringify(response.user));
                let alert = this.alertCtrl.create({
                  title: 'Edit payment info',
                  subTitle: response.msg,
                });
                alert.present();
                setTimeout(()=>alert.dismiss(),1500);
                this.navCtrl.push(HomePage);
              }else{
                  let alert = this.alertCtrl.create({
                  title: 'Edit payment info',
                  subTitle: response.msg,
                });
                alert.present();
                setTimeout(()=>alert.dismiss(),1500);
              }
    }) }
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
serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
}
