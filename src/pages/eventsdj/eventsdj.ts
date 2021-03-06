import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController,LoadingController } from 'ionic-angular';
import {AddeventdjnewPage} from '../addeventdjnew/addeventdjnew';
import {ManageeventsdjPage} from '../manageeventsdj/manageeventsdj';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { EditprofiledjPage} from '../editprofiledj/editprofiledj';
//import { MembershipdetaildjPage } from '../membershipdetaildj/membershipdetaildj';
/**
 * Generated class for the EventsdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-eventsdj',
  templateUrl: 'eventsdj.html',
})
export class EventsdjPage {
  profile;

  public Loader=this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });

  constructor(
    public navCtrl: NavController,
    public appsetting: Appsetting, 
    public events: Events,
    public http: Http, 
    public navParams: NavParams, 
    public loadingCtrl:LoadingController,
    private alertCtrl: AlertController
  ) {
      
    if (localStorage.getItem("USER_DATA")!=null) { 
      this.profile = JSON.parse(localStorage.getItem("USER_DATA"));
      if(this.profile.role == 'dj'){
        this.events.publish('role','dj');
      }else{
        this.events.publish('role','clubgoer');
      }
    }
  }

  public Loading=this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });

  getuser() {
    this.Loading.present();
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var data = {
      userid: JSON.parse(localStorage.getItem('USER_DATA')).id
    }
    var Serialized = this.serializeObj(data);
    this.http.post(this.appsetting.myGlobalVar + 'users/getuserbyid', Serialized, options).map(res => res.json()).subscribe(response => {
      this.Loading.dismiss();
      if (response.isSucess == "true") {
        localStorage.setItem("USER_DATA", JSON.stringify(response.data.User));
        this.events.publish('role', 'dj'); 
      }
    })
  }

  ionViewDidEnter() {
    if (window.navigator.onLine == true) {
      this.getuser();
    } else {
      this.Loader.dismiss();
       let alert = this.alertCtrl.create({
        title: 'Network connection',
        subTitle: 'Something went wrong check your internet connection',
        buttons:['ok']
        });
       alert.present();
        setTimeout(()=>alert.dismiss(),1500);
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsdjPage');
    clearInterval(this.appsetting.interval);
  }

  addEvent(){
    this.Loader.present();
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var data = {
      userid: JSON.parse(localStorage.getItem('USER_DATA')).id
    } 
    var Serialized = this.serializeObj(data);
    this.http.post(this.appsetting.myGlobalVar + 'users/getuserbyid', Serialized, options).map(res => res.json()).subscribe(response => {
      this.Loader.dismiss();
      if(response.isSucess=="true"){
    if(response.data.User.paypal_email == undefined || response.data.User.paypal_email==null || response.data.User.paypal_email=="null" ||response.data.User.paypal_email == "undefined"  ){
      let alert = this.alertCtrl.create({
        title: 'PayPal Account ',
        subTitle: 'To add an event, please add your PayPal email address first',
        buttons:['ok']
      });
      alert.present();
      setTimeout(()=>alert.dismiss(),3500);
      this.navCtrl.push(EditprofiledjPage);
    }
    // else if(response.data.User.subscription_status==0||response.data.User.subscription_status=="0"){
      
    //   let alert = this.alertCtrl.create({
    //     title: 'Subscription plan',
    //     subTitle: 'To add an event, please buy Subscription plan',
    //     buttons:['ok']
    //   });
    //   alert.present();
    //   setTimeout(()=>alert.dismiss(),3500);
    //   this.navCtrl.push(MembershipdetaildjPage);
    // }
    else{
      this.navCtrl.push(AddeventdjnewPage);
    }
  } else{
    
    //this.navCtrl.push(AddeventdjnewPage);
  }
  })
   }
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ManageEvent(){
    this.navCtrl.push(ManageeventsdjPage);
  }

}
