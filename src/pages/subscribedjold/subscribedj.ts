import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events} from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Appsetting } from '../../providers/appsetting';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { EventsdjPage } from '../eventsdj/eventsdj';
import { TermsdjsubsPage } from '../termsdjsubs/termsdjsubs';
// import { LogindjPage } from '../logindj/logindj';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the SubscribedjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subscribedj',
  templateUrl: 'subscribedj.html',
})
export class SubscribedjPage {
  public subscriv;reguserid;
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
    private payPal: PayPal,
    private alertCtrl: AlertController,
    public iab: InAppBrowser
    ) {
     this.events.publish('role', 'dj');
     this.reguserid = navParams.get("usersignupid");
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

  ionViewDidEnter() {
    if (window.navigator.onLine == true) {
    } else {
      this.Loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Network connection',
        subTitle: 'Something went wrong check your internet connection',
        buttons:['ok']
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 2500);
    }
  }


  setBackButtonAction(){
    //Write here wherever you wanna do
    this.navCtrl.push(EventsdjPage);
  }

  subscribe(chkbx,amt){
    var userdat = JSON.parse(localStorage.getItem("USER_DATA"));
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    this.Loading.present();
      var data = {
        user_id: userid,
            }
      var serialized = this.serializeObj(data);
    if(chkbx==false){
           let alertr = this.alertCtrl.create({
             title: '',
             subTitle: "Please accept the terms & conditions",
             buttons:['ok']        
           });
             alertr.present();
         setTimeout(()=>alertr.dismiss(),3500);
      } else {
        var paydata={
          'amount':amt,
          'userid':userdat.id
        };
      //console.log(amt);
      var target = "_blank";    
      var option = "location=no,hidden=no";
      var browser = this.iab.create('http://vikrant.crystalbiltech.com/vikkitestrecurring/index.php?data='+encodeURIComponent(JSON.stringify(paydata)),target,option);
      //browser.close();
      browser.on('loadstart').subscribe((e) => {
        var redirect_uri = e.url.split('success.php');
        var redirect_cancel = e.url.split('cancel.php');
        if (redirect_uri[0] == "https://vikrant.crystalbiltech.com/vikkitestrecurring/") {
          browser.close();
          let alert = this.alertCtrl.create({
            title: 'Subscribed',
            subTitle: "Successfully subscribed",
            buttons:['ok']
            });
            alert.present();
            setTimeout(()=>alert.dismiss(),3500);
      this.navCtrl.push(EventsdjPage);
      }
        else if(redirect_cancel[0] == 'https://vikrant.crystalbiltech.com/vikkitestrecurring/'){
          browser.close();
              let alertr = this.alertCtrl.create({
                        title: 'Subscribed',
                        subTitle: 'Subscription not alloted',
                        buttons:['ok']
                        }); 
                        alertr.present();
                    setTimeout(()=>alertr.dismiss(),3000);
        }
      }, err => {
        //console.log("InAppBrowser loadstart Event Error: " + err);
       // alert(err)
      });
      }
//     let headers = new Headers();
//    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
//    let options = new RequestOptions({ headers: headers });
//    var userdata = JSON.parse(localStorage.getItem("USER_DATA"));
//    var data = {
//        user_id : userdata.id,
//        sub_id : this.subscriv.id
//      }
//    var Serialized = this.serializeObj(data);
//    if(chkbx==false){
//      let alertr = this.alertCtrl.create({
//        title: '',
//        subTitle: "Please accept the terms & conditions",
//        buttons:['ok']
//         
//      });
//        alertr.present();
//    setTimeout(()=>alertr.dismiss(),3500);
//    }else{
//    this.payPal.init({
//      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
//  PayPalEnvironmentSandbox: 'AUQH6SoDJmAlXBpqHMZYv-TJPr5CVCpCqfbMCkLqKsQZBUdL1DIyIDcTqqx5jC4Y6F9UEzcVhM_kAZWO'
//}).then(() => {
//  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
//  this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
//    // Only needed if you get an "Internal Service Error" after PayPal login!
//    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
//  })).then(() => {
//    let payment = new PayPalPayment(this.subscriv.monthly_rate, 'USD', 'Dj subscription', 'sale');
//    this.payPal.renderSinglePaymentUI(payment).then(() => {
//      this.http.post(this.appsetting.myGlobalVar + 'subscriptions/savesubscription', Serialized, options).map(res => res.json()).subscribe(response => {
//        if(response.isSucess=="true"){
//           
//          // alert(JSON.stringify(response.data));
//          localStorage.removeItem('USER_DATA');
//          localStorage.setItem("USER_DATA", JSON.stringify(response.data.User));
//          console.log('role',response.data.User.role);
//          // alert(response.data.User.role);
//          
//            let alertr = this.alertCtrl.create({
//                title: 'Subscribed',
//                subTitle: response.msg,
//                buttons:['ok']
//                }); 
//                alertr.present();
//            //setTimeout(()=>alertr.dismiss(),4000);
//            if(response.data.User.role == 'dj'){
//              this.events.publish('role', 'dj');
//            }else{
//              this.events.publish('role', 'clubgoer');
//            }
//            this.navCtrl.push(EventsdjPage);
//        }else{
//            let alert = this.alertCtrl.create({
//                title: 'Subscribed',
//                subTitle: response.msg,
//                buttons:['ok']
//              });
//                alert.present();
//            //setTimeout(()=>alert.dismiss(),4000);
//        }
//    });
//    }, () => {
//      // Error or render dialog closed without being successful
//    });
//  }, () => {
//    // Error in configuration
//  });
//}, () => {
//  // Error in initialization, maybe PayPal isn't supported or something else
//});
//  }
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

}
