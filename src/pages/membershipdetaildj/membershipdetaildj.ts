import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
//import { LogindjPage } from '../logindj/logindj';
import { SubscribedjupdatePage } from '../subscribedjupdate/subscribedjupdate';
import { EventsdjPage } from '../eventsdj/eventsdj';
/**
 * Generated class for the MembershipdetaildjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-membershipdetaildj',
  templateUrl: 'membershipdetaildj.html',
})
export class MembershipdetaildjPage {
  public subscrip;
  public Loader=this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
      
  }

  getsubsdata(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    let Loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Loader.present().then(() => {
      var data = {
        userid: userid,
            }
      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'users/getsubscription', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          //console.log(data);
          Loader.dismiss();
          if (data.isSucess == "true") {
            this.subscrip=data.data;
          } else {
            let alertr = this.alertCtrl.create({
              //title: 'Requests',
              subTitle: 'Membership cancelled',
              buttons:['ok']
            });
              alertr.present();
          setTimeout(()=>alertr.dismiss(),3500);
          }
        })
    });
  }
  
  updatememb(){
    this.navCtrl.push(SubscribedjupdatePage);     
  }

  cancelmembr(){
        let confirm = this.alertCtrl.create({
        title: "Please confirm",
      subTitle : 'Do you want cancel your Membership?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.cancel1();
              return true;
            }
          },
          {
            text: 'No',
            handler: () => {
              confirm.dismiss();
              return false;

            }
          }
        ]
      });
      confirm.present();
    }

cancel1(){

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    console.log(JSON.parse(localStorage.getItem("USER_DATA")));
    var userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    var subscription_id = JSON.parse(localStorage.getItem("USER_DATA")).subscription_id;
    let Loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Loader.present().then(() => {
      var data = {
        userid: userid,
        subscriptionid:subscription_id
            }
            
      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'subscriptions/stripecancel', serialized, options)
        .map(res => res.json())
        .subscribe(response => {
          Loader.dismiss();
          if (response.isSuccess == "true") {
            this.subscrip = response.data;
            localStorage.removeItem("USER_DATA");
            localStorage.setItem("USER_DATA", JSON.stringify(response.data.User));
                let alert = this.alertCtrl.create({
                  title: 'Subscription',
                  subTitle: response.msg,
                  buttons:['ok']
                });
                alert.present();
                
                setTimeout(() => alert.dismiss(), 3500);
                this.navCtrl.push(EventsdjPage);
          } else {
                let alertr = this.alertCtrl.create({
                  title: 'Subscription',
                  subTitle: response.msg,
                  buttons:['ok']
                });
                alertr.present();
                setTimeout(() => alertr.dismiss(), 3500);
          }
        })
    });
  }
  updatemembr() {
    let alertr = this.alertCtrl.create({
      subTitle: 'Your plan not yet expired !',
      buttons:['ok']
    });
    alertr.present();
    setTimeout(() => alertr.dismiss(), 3500);
    
  }

  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
  }
  ionViewCanEnter(){
    this.getsubsdata();
      clearInterval(this.appsetting.interval);
 
  }
  ionViewDidEnter() {
    if (window.navigator.onLine == true) {
    } else {
      this.Loader.dismiss();
       let alert = this.alertCtrl.create({
        title: 'Network connection',
        subTitle: 'Something went wrong check your internet connection',
        buttons:['ok']
        });
       alert.present();
        setTimeout(()=>alert.dismiss(),2500);
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembershipdetaildjPage');
  }

}
