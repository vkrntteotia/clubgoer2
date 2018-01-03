import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,AlertController } from 'ionic-angular';
import {Http,RequestOptions,Headers} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import {LoadingController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {SongrequestsPage} from '../songrequests/songrequests';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the PayinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payinfo',
  templateUrl: 'payinfo.html',
})
export class PayinfoPage {
  public data = {}; minyear;maxyear;setbit;pdata;video;
  public Loading=this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public appsetting: Appsetting,
   public http:Http,
   public Cmn: CommonProvider,
   public loadingCtrl:LoadingController,
   public toastCtrl:ToastController,
   private alertCtrl: AlertController,
   private iab: InAppBrowser
  ) {
    var d = new Date();
    this.minyear = d.getFullYear();
    this.maxyear = this.minyear+20;
    this.data={'relationship':2};
    this.setbit=0;
    this.pdata = navParams.get("postdata");
   //console.log(this.pdata);
   // this.checkpayinfo(this.pdata.userid);
  }
//   checkpayinfo(userid){
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
//     let options= new RequestOptions({ headers: headers });
//       var data ={
//             userid:userid
//           }
//  var Serialized = this.serializeObj(data);
//         this.http.post(this.appsetting.myGlobalVar + 'users/checkpayinfo', Serialized, options).map(res=>res.json()).subscribe(response=>{
//      this.Loading.dismiss(); 
//               if(response.isSuccess == true){
//                 if(response.data!=null){
//                 this.data={'relationship':1,
//                            'name':response.data.name,
//                            'cardnum':response.data.cardnumber,
//                            'monyear':response.data.expiry,
//                            'cvv':response.data.cvv};
//                 }
//               }else{
//                   let alert = this.alertCtrl.create({
//                   title: 'Edit payment info',
//                   subTitle: response.msg,
//                 });
//                 alert.present();
//                 setTimeout(()=>alert.dismiss(),1500);
//               }
//     })
//   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayinfoPage');
  }
  ionViewCanEnter(){
    clearInterval(this.appsetting.interval);
  }
  setbitnow(bitnow){ 
    var width = 400;
    var height = 550;
    var left = 0;
    var top = 0;

    var serialized_data = this.Cmn.serializeObj(this.pdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let option = new RequestOptions({ headers: headers });

      if (window.outerWidth) {
          left = Math.round((window.outerWidth - width) / 2) + window.screenX;
          top = Math.round((window.outerHeight - height) / 2) + window.screenY;
      } else if (window.screen.width) {
          left = Math.round((window.screen.width - width) / 2);
          top = Math.round((window.screen.height - height) / 2);
      }

var target = "_blank";    
var options = 'top=' + top + ', left=' + left + ', width=' + width + ', height=' + height + ', location=0, status=0, toolbar=0, menubar=0, resizable=0, scrollbars=1';

    //this.setbit=bitnow;
    //var target = "_blank";    
    var tmp="";
    var tmpr="";
    //var options = "location=no,hidden=no";
    var browser = this.iab.create('http://vikrant.crystalbiltech.com/paypal-adaptive/chained-payment/proccess.php?data='+encodeURIComponent(JSON.stringify(this.pdata)),target,options);
    browser.on('loadstart').subscribe((e) => {
        var redirect_uri = e.url.split('code=');
        var redirect_url = e.url.split('execution=e3s1');
        var redirect_rrl = e.url.split('execution=e4s1');
        var redirect_trl = e.url.split('execution=e2s1');
        var redirect_yrl = e.url.split('closewindow');
        var redirect_prl = e.url.split('execution=e2s2&_eventId_submit');
        if(redirect_trl.length>1){
          tmp = redirect_trl[0];
        }
        if(redirect_yrl.length>1){
          tmpr = redirect_yrl[0];
        }
        if(redirect_prl.length>1){
          tmp = "";
          tmpr = "";
        }
        if (redirect_uri[0] == 'https://vikrant.crystalbiltech.com/?') {
        //  alert('code--->' + code);
          browser.close();
          this.http.post(this.appsetting.myGlobalVar + 'users/sendnotif', serialized_data, option).map(res => res.json()).subscribe(response => {
            this.Loading.dismiss();
            if (response.status == true) {
              let alert = this.alertCtrl.create({
                title: 'Request',
                subTitle: "Your Request has been submitted",
                buttons:[{
                  text: 'Ok',
                  role: 'submit',
                  handler: () => {
                    console.log('Cancel clicked');
                    this.navCtrl.push(SongrequestsPage, {
                      eventid: this.pdata.eventid,
                      djid:this.pdata.djid
                    });
                  }
                }]
                });
                alert.present();
                //setTimeout(()=>alert.dismiss(),3500);
            } else {
              this.navCtrl.push(HomePage);
              let alert = this.alertCtrl.create({
                title: 'Payment info',
                subTitle: "Something went wrong",
                buttons:['ok']
                });
                alert.present();
                setTimeout(()=>alert.dismiss(),3500);
            }
          })
        } 
        else if(tmp == 'https://www.sandbox.paypal.com/webapps/adaptivepayment/flow/corepay?' && tmpr == "https://www.sandbox.paypal.com/webapps/adaptivepayment/flow/"){
                  browser.close();
                  let alert = this.alertCtrl.create({
                    title: 'Request',
                    subTitle: "Your Request has been submitted",
                    buttons:[{
                      text: 'Ok',
                      role: 'submit',
                      handler: () => {
                        console.log('Cancel clicked');
                        this.navCtrl.push(SongrequestsPage, {
                          eventid: this.pdata.eventid,
                          djid:this.pdata.djid
                        });
                      }
                    }]
                    });
                    alert.present();
                    //setTimeout(()=>alert.dismiss(),3500);
          }
        else if(redirect_url[0] == 'https://www.sandbox.paypal.com/webapps/adaptivepayment/flow/closewindow?'){
            browser.close();
            this.http.post(this.appsetting.myGlobalVar + 'users/sendnotif', serialized_data, option).map(res => res.json()).subscribe(response => {
              this.Loading.dismiss();
              if (response.status == "true") {
                //this.navCtrl.push(HomePage);
                
                let alert = this.alertCtrl.create({
                  title: 'Request',
                  subTitle: "Your Request has been submitted",
                  buttons:[{
                    text: 'Ok',
                    role: 'submit',
                    handler: () => {
                      console.log('Cancel clicked');
                      this.navCtrl.push(SongrequestsPage, {
                        eventid: this.pdata.eventid,
                        djid:this.pdata.djid
                      });
                    }
                  }]
                  });
                  alert.present();
                  //setTimeout(()=>alert.dismiss(),3500);
              } else {
                this.navCtrl.push(HomePage);
                let alert = this.alertCtrl.create({
                  title: 'Payment info',
                  subTitle: "something went wrong",
                  buttons:['ok']
                  });
                  alert.present();
                  setTimeout(()=>alert.dismiss(),3500);  
              }
            })
        } else if(redirect_rrl[0] == 'https://www.sandbox.paypal.com/webapps/adaptivepayment/flow/closewindow?'){
          browser.close();
          //this.navCtrl.push(HomePage);
          let alert = this.alertCtrl.create({
            title: 'Request',
            subTitle: "Your Request has been submitted",
            buttons:[{
              text: 'Ok',
              role: 'submit',
              handler: () => {
                console.log('Cancel clicked');
                this.navCtrl.push(SongrequestsPage, {
                  eventid: this.pdata.eventid,
                  djid:this.pdata.djid
                });
              }
            }]
            });
            alert.present();
           // setTimeout(()=>alert.dismiss(),3500);
       } 
      }, err => {
       // alert('done err');
        //console.log("InAppBrowser loadstart Event Error: " + err);
       // alert(err)
      });
      browser.on("exit").subscribe((e) => {
       // alert('exit fucntion'); 
        this.navCtrl.push(SongrequestsPage, {
          eventid: this.pdata.eventid,
          djid:this.pdata.djid
        });
      },
      err => {
          console.log("InAppBrowser loadstart Event Error: " + err);
      });
    }

paynow(payinfo){
  // this.Loading.present();
  //var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
  // let headers = new Headers();
  // headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
  // let options= new RequestOptions({ headers: headers });
// if(payinfo.value.relationship==undefined){
//           let alert = this.alertCtrl.create({
//                 title: 'Edit payment info',
//                 subTitle: "Please select payment method"
//                 });
//                 alert.present();
//                 setTimeout(()=>alert.dismiss(),1500);
//                   this.Loading.dismiss();
// } else{
// var data ={
//     id:user_id,
//     cardnum:payinfo.value.cardnum,
//     monyear:payinfo.value.monyear,
//     name:payinfo.value.name,
//     method:payinfo.value.relationship,
//     cvv:payinfo.value.cvv
//   }
//  }
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
       setTimeout(()=>alert.dismiss(),2500);
      }
    }
serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
}
