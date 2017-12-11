import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController,LoadingController,Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LogindjPage } from '../logindj/logindj';
import { SignindjPage } from '../signindj/signindj';
import 'rxjs/add/operator/map';
import { NgZone } from '@angular/core';
import { Appsetting } from '../../providers/appsetting';
import { SubscribedjPage } from '../subscribedj/subscribedj';
import { Firebase } from '@ionic-native/firebase';

/**
 * Generated class for the SignupdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupdj',
  templateUrl: 'signupdj.html',
})
export class SignupdjPage {
  public scrollAmount = 44;classval;token;
  public data = ''; id;
  public Loading = this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appsetting: Appsetting,
    public http: Http,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public events: Events,
    public zone: NgZone,
    private firebase: Firebase
  ) {
    this.ionViewDidEnter();
        if (localStorage.getItem("USER_DATA")) {
          this.navCtrl.push(SubscribedjPage);
    }

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
  
 setBackButtonAction(){
      //Write here wherever you wanna do
      this.navCtrl.push(SignindjPage);
   }

  public register(signup) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    if (signup.value.password.indexOf(' ') >= 0 || signup.value.email.indexOf(' ') >= 0) {
      let alert = this.alertCtrl.create({
        title: 'Sign Up',
        subTitle: "Space not allowed",
        buttons:['ok']
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 1500);
    }
    else if(signup.value.name.replace(/ /g,'')==""){
      let alert = this.alertCtrl.create({
        title: 'Sign Up',
        subTitle: "Space not allowed in name",
      });
      alert.present();
      setTimeout(()=>alert.dismiss(),3500);
    } else if(signup.value.name.indexOf(' ') == 0){
      let alert = this.alertCtrl.create({
       title: 'Signup',
        subTitle: "Space not allowed in name",
        buttons:['ok']
      });
    alert.present();
    setTimeout(()=>alert.dismiss(),3500);
    } 
   else if (signup.value.password == signup.value.cpassword) {
    this.firebase.onTokenRefresh().subscribe(
      token => {
        console.log(`The new token is ${token}`);
        this.token = token;
        console.log('onTokenRefresh->', this.token);  
    this.Loading.present();
      var data = {
        name: signup.value.name,
        email: signup.value.email,
        password: signup.value.password,
        role: 'dj',
        token: this.token
      }
      var Serialized = this.serializeObj(data);
      var Loading = this.loadingCtrl.create({
        content: 'Please wait...',
      });
      Loading.present().then(() => {
      this.http.post(this.appsetting.myGlobalVar + 'users/registration', Serialized, options).map(res => res.json()).subscribe(response => {
         Loading.dismiss();
         console.log(response);
        if (response.isSuccess == true) {
          this.Loading.dismiss();
          this.events.publish('role', 'dj');
          localStorage.setItem("USER_DATA", JSON.stringify(response.user_data));
          let alert = this.alertCtrl.create({
            title: 'Sign Up',
            subTitle: response.msg,
            buttons:['ok']
          });
          alert.present();
        //  setTimeout(() => alert.dismiss(), 4500);
          this.navCtrl.push(SubscribedjPage);
        } else {
          this.Loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Signup',
            subTitle: response.msg,
            buttons:['ok']
                    });
          alert.present();
          //setTimeout(() => alert.dismiss(), 4500);
        }
      })
    })
  })
    } else {
      let alert = this.alertCtrl.create({
        title: 'Signup',
        subTitle: 'Password did not match',
        buttons:['ok']
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 2500);
    }
  }
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupdjPage');
  }

  signinPage() {
    this.navCtrl.push(LogindjPage);
  }

}
