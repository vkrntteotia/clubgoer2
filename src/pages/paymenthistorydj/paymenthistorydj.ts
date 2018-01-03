import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { EventsdjPage } from '../eventsdj/eventsdj';
/**
 * Generated class for the PaymenthistorydjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymenthistorydj',
  templateUrl: 'paymenthistorydj.html',
})
export class PaymenthistorydjPage {
  public pastevntid;
  public payhistdata;
  public totalpay;
  public Loader = this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,
    private payPal: PayPal,
    private alertCtrl: AlertController) {
      this.pastevntid = navParams.get("eventid");
      this.getpayhistory(this.pastevntid);
  }

  getpayhistory(eventid){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    let Loader = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    Loader.present().then(() => {
      var data = {
        eventid: eventid,
        djid: Userid,
        requestype: 1,
            }
      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/paymenthist', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          console.log(data);
          if (data.isSucess == "true") {
            this.payhistdata = data.data;
            this.totalpay=0;
            for(let dat of this.payhistdata) {
              if(dat.ClubgoerRequest.refund_status==0){
                  this.totalpay = parseInt(this.totalpay)+parseInt(dat.ClubgoerRequest.djshare);
                }
              }
          } else {
            this.payhistdata = [];
            this.totalpay=0;
          }
        })
    });
  }

  ionViewDidEnter() {
    if (window.navigator.onLine == true) {
    } else {
      this.Loader.dismissAll();
      let alert = this.alertCtrl.create({
        title: 'Network connection',
        subTitle: 'Something went wrong check your internet connection',
        buttons:['ok']
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 3500);
    }
  }

  refundnow(clubgoerqstid,money,song,artist,adminemail)
  {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
      let options = new RequestOptions({ headers: headers });
      //var userdata = JSON.parse(localStorage.getItem("USER_DATA"));
      var data = {
          id : clubgoerqstid,
          //sub_id : this.subscriv.id
        }
        var description = song+", "+artist;
      var Serialized = this.serializeObj(data);
      this.payPal.init({
        PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
        PayPalEnvironmentSandbox: 'AUQH6SoDJmAlXBpqHMZYv-TJPr5CVCpCqfbMCkLqKsQZBUdL1DIyIDcTqqx5jC4Y6F9UEzcVhM_kAZWO'
  }).then(() => {
    // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
    this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
      // Only needed if you get an "Internal Service Error" after PayPal login!
      //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
    })).then(() => {
      let payment = new PayPalPayment(money, 'USD', description, 'sale');
      this.payPal.renderSinglePaymentUI(payment).then(() => {
        this.http.post(this.appsetting.myGlobalVar + 'subscriptions/refund', Serialized, options).map(res => res.json()).subscribe(response => {
          if(response.isSucess=="true"){
            this.payhistdata = response.data;
            this.totalpay=0;
            for(let dat of this.payhistdata) {
              if(dat.ClubgoerRequest.refund_status==0){
                  this.totalpay = parseInt(this.totalpay)+parseInt(dat.ClubgoerRequest.djshare);
                }
              }
              let alertr = this.alertCtrl.create({
                  title: 'Subscribed',
                  subTitle: response.msg,
                  buttons:['ok']
                });
                  alertr.present();
              setTimeout(()=>alertr.dismiss(),3500);
          } else {
              let alert = this.alertCtrl.create({
                  title: 'Subscribed',
                  subTitle: response.msg,
                  buttons:['ok']
                });
                  alert.present();
              setTimeout(()=>alert.dismiss(),3500);
          }
      });
      }, () => {
        // Error or render dialog closed without being successful
      });
    }, () => {
      // Error in configuration
    });
  }, () => {
    // Error in initialization, maybe PayPal isn't supported or something else
  });
  }
  
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymenthistorydjPage');
  }

}
