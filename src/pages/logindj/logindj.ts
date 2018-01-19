import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, Events } from 'ionic-angular';
import { SignupdjPage } from '../signupdj/signupdj';
import 'rxjs/add/operator/map';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ForgotPage } from '../forgot/forgot';
import { NgZone } from '@angular/core';
import { SubscribedjPage } from '../subscribedj/subscribedj';
import { EventsdjPage } from '../eventsdj/eventsdj';
import { Appsetting } from '../../providers/appsetting';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { SignindjPage } from '../signindj/signindj';
import { Firebase } from '@ionic-native/firebase';

/**
 * Generated class for the LogindjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logindj',
  templateUrl: 'logindj.html',
})
export class LogindjPage {
  public scrollAmount = 44;
  public token;
  public data = {}; id; username; password; classval;
  public profilepicface: any;
  public facebook_data: any;
  public Loading = this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private fb: Facebook,
    public Cmn: CommonProvider,
    public variable: VariableProvider,
    private alertCtrl: AlertController,
    public events: Events,
    private firebase: Firebase,
    public zone: NgZone
  ) {
    if (localStorage.getItem("usernamedj") != null && localStorage.getItem("passworddj") != null) {
      this.username = localStorage.getItem("usernamedj");
      this.data = {
        email: localStorage.getItem("usernamedj"),
        password: localStorage.getItem("passworddj"),
        checkbx: true
      }
    } else {
      this.data = {
        email: "",
        password: "",
        checkbx: true
      }
    }
        this.classval = 'headerbg';
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
      setTimeout(() => alert.dismiss(), 3500);
    }
  }
  
  scrollHandler(event) {
    console.log(`ScrollEvent: ${event}`)
   // console.log(JSON.stringify(event.scrollTop));
    console.log(event.scrollTop);
    this.zone.run(()=>{
      if(event.scrollTop == 0){
        this.classval = 'headerbg';
      }else{
         this.classval = 'headerbg1';
      }
      console.log('hello')
      
      // since scrollAmount is data-binded,
      // the update needs to happen in zone
      this.scrollAmount++
    })
  }

  login(form) {
  //  this.firebase.onTokenRefresh().subscribe(
  //    token => {
  //      console.log(`The new token is ${token}`);
  //      this.token = token;
 if (form.value.checkbx == true) {
      localStorage.setItem("usernamedj", form.value.email);
      localStorage.setItem("passworddj", form.value.password);
    } else {
      localStorage.removeItem("usernamedj");
      localStorage.removeItem("passworddj");
    }
  
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });

    var data = {
      email: form.value.email,
      password: form.value.password,
      token : this.token
    }

    var Serialized = this.serializeObj(data);
    var Loading = this.loadingCtrl.create({
        content: 'Please wait...',
      });
      Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'users/logindj', Serialized, options).map(res => res.json()).subscribe(response => {
      Loading.dismiss();
      if (response.status == true) {
        this.Loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Logged in',
          subTitle: response.msg,
          cssClass: 'newpop'
        });
        alert.present();
        setTimeout(() => alert.dismiss(), 1500);
        localStorage.removeItem("fblogin");
        localStorage.setItem("USER_DATA", JSON.stringify(response.user));
        this.appsetting.profile = response.user;
        this.events.publish('role', 'dj');
        if(response.user.subscription_paymant_status!=1){
            this.navCtrl.push(SubscribedjPage);
        } else {
          this.navCtrl.push(EventsdjPage);
        }
        
      } else {
        this.Loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Login',
          subTitle: response.msg,
          buttons:['ok']
        });
        alert.present();
        setTimeout(() => alert.dismiss(), 3500);
      }
    })
      })
    //})
  }

  fblogin() {
    var d = new Date();
    var mm = ("0" + (d.getMonth() + 1)).slice(-2);
    var day = ("0" + (d.getDate())).slice(-2);
    var minutes = d.getMinutes();
    var hour = d.getHours();
    var datime = d.getFullYear()+"-"+mm+"-"+day+" "+hour+":"+minutes+":00";

    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        this.fb.api('me/?fields=id,email,last_name,first_name', ["public_profile", "email"])
          .then((result) => {
            this.firebase.onTokenRefresh().subscribe(
              token => {
                //console.log(`The new token is ${token}`);
                this.token = token;
            this.profilepicface = "https://graph.facebook.com/" + result.id + "/picture?type=large";
            localStorage.setItem('facebook_pic', this.profilepicface);
            localStorage.setItem('facebook_login', JSON.stringify(result));
            this.facebook_data = localStorage.getItem('facebook_login');
            var url: string = this.variable.baseUrl + 'users/Djfblogin';
            var signindata = {
              email: result.email,
              fb_id: result.id,
              name: result.first_name + " " + result.last_name,
              img: this.profilepicface,
              role: "dj",
              token:this.token,
              datime:datime
            }
            var serialized_data = this.Cmn.serializeObj(signindata);
            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            let options = new RequestOptions({ headers: headers });
            var Loading = this.loadingCtrl.create({
            content: 'Please wait...',
          });
          Loading.present().then(() => {
            this.http.post(url, serialized_data, options)
              .map(res => res.json())
              .subscribe(resolve => {
              Loading.dismiss();
              this.Loading.dismiss();
                if (resolve.isSucess == "true") {
                  
                  localStorage.setItem('userid', resolve.data.User.id);
                  localStorage.setItem("USER_DATA", JSON.stringify(resolve.data.User));
                  this.appsetting.profile = resolve.data.User;
                  localStorage.setItem('fblogin', 'fbloginfrm');

                  let alert = this.alertCtrl.create({
                    title: 'Logged in',
                    subTitle: resolve.msg,
                    buttons:['ok']
                  });
                  alert.present();
                  setTimeout(() => alert.dismiss(), 2500);
                  this.events.publish('role', 'dj');
                  if(resolve.data.User.subscription_paymant_status!=1){
                    this.navCtrl.push(SubscribedjPage);
                } else {
                    this.navCtrl.push(EventsdjPage);
                }
                } else {
                  let alert = this.alertCtrl.create({
                    title: 'Login',
                    subTitle: resolve.msg,
                    buttons:['ok']
                  });
                  alert.present();
                  setTimeout(() => alert.dismiss(), 2500);
                 
                }
              })
          })
        })
          }).catch(d => {
           // Loading.dismiss();
           console.log("vikki");
           console.log(d);
          })

      })
      .catch(e => {
        console.log("ranju");
        console.log(e);
       // Loading.dismiss();
      });
  }

  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }

  signupPage() {
    this.navCtrl.push(SignupdjPage);
  }
  forgotPage() {
    this.navCtrl.push(ForgotPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogindjPage');
  }
  setBackButtonAction(){
    //Write here wherever you wanna do
    this.navCtrl.push(SignindjPage,{bit:'back'});
  }
}

