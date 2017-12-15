import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events} from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Appsetting } from '../../providers/appsetting';
//import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
//import { EventsdjPage } from '../eventsdj/eventsdj';
import { TermsdjsubsPage } from '../termsdjsubs/termsdjsubs';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AddCardPage } from '../add-card/add-card';
// import { LogindjPage } from '../logindj/logindj';
/**
 * Generated class for the SubscribedjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-subscribedjupdate',
  templateUrl: 'subscribedjupdate.html',
})
export class SubscribedjupdatePage {
  public subscriv;
  public data = {};
  public Loading = this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public events: Events,
    public appsetting: Appsetting,
    public http: Http,
    public loadingCtrl: LoadingController,
    //private payPal: PayPal,
    private alertCtrl: AlertController,
    public iab: InAppBrowser
    ) {
     this.events.publish('role', 'dj');
     this.data = {
      checkbx:true,
    }
     this.subscribeplan();
  }

  subscribeplan(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var userdata = JSON.parse(localStorage.getItem("USER_DATA"));
    var data = {
        role : userdata.role,
      }
    var Serialized = this.serializeObj(data);
    this.http.post(this.appsetting.myGlobalVar + 'subscriptions/getSubscription', Serialized, options).map(res => res.json()).subscribe(response => {
        if(response.isSuccess=="true"){
            this.subscriv=response.data;
        }
    });
  }

  // setBackButtonAction(){
  //   //Write here wherever you wanna do
  //   localStorage.removeItem("USER_DATA");
  //   this.navCtrl.push(LogindjPage);
  // }

  subscribe(chkbx){
    if(chkbx == false){
      let alertr = this.alertCtrl.create({
        title: '',
        subTitle: "Please accept the terms & conditions",
        buttons:['ok']        
      });
        alertr.present();
    setTimeout(()=>alertr.dismiss(),3500);
    }else{
        this.navCtrl.push(AddCardPage,{'amount':this.subscriv.monthly_rate});
    }
}


  terms(){
    this.navCtrl.push(TermsdjsubsPage);
  }
  
  serializeObj(obj) {
    var result = [];
      for (var property in obj)
        result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribedjPage');
  }
  ionViewDidEnter() {
    if (window.navigator.onLine == true) {
    } else {
      this.Loading.dismissAll();
      let alert = this.alertCtrl.create({
        title: 'Network connection',
        subTitle: 'Something went wrong check your internet connection',
        buttons:['ok']
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 2500);
    }
  }

}
