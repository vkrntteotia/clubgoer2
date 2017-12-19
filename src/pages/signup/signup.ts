import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,Events } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/map';
import { NgZone } from '@angular/core';
import {LoadingController} from 'ionic-angular';
import { Appsetting } from '../../providers/appsetting';
import { SignindjPage } from '../signindj/signindj';
import { Firebase } from '@ionic-native/firebase';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
public data='';id;token;
public scrollAmount = 44;classval;
public Loading=this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public appsetting: Appsetting,
   public http:Http,
   public loadingCtrl:LoadingController,
   public toastCtrl:ToastController,
   private alertCtrl: AlertController,
    public events: Events,
    public zone: NgZone,
    private firebase: Firebase
   ) {
    this.classval = 'headerbg';
     if(localStorage.getItem("USER_DATA")!=null){
         this.navCtrl.push(HomePage);
    }
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
    setBackButtonAction(){
      
      //Write here wherever you wanna do
      this.navCtrl.push(SignindjPage);
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

 public register(signup){
  
let headers = new Headers();
headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
let options= new RequestOptions({ headers: headers });
 if (signup.value.password.indexOf(' ') >= 0 || signup.value.email.indexOf(' ') >= 0) {
    let alert = this.alertCtrl.create({
            title: 'Signup',
            subTitle: "Space not allowed",
            buttons:['ok']
      });
          alert.present();
          setTimeout(()=>alert.dismiss(),2500);   
  } else if(signup.value.name.replace(/ /g,'')==""){
      let alert = this.alertCtrl.create({
        title: 'Signup',
        subTitle: "Space not allowed in name",
        buttons:['ok']
      });
    alert.present();
    setTimeout(()=>alert.dismiss(),2500);
  } else if(signup.value.name.indexOf(' ') == 0){
    let alert = this.alertCtrl.create({
      title: 'Signup',
      subTitle: "Space not allowed in name",
      buttons:['ok']
    });
  alert.present();
  setTimeout(()=>alert.dismiss(),2500);
  } else if(signup.value.password == signup.value.cpassword){
    this.firebase.onTokenRefresh().subscribe(
      token => {
        console.log(`The new token is ${token}`);
        this.token = token;
       this.Loading.present();
    var data ={
      name:signup.value.name,
      email:signup.value.email,
      password:signup.value.password,
      role:'clubgoer',
      token:this.token
    }
    var Serialized = this.serializeObj(data);
      //console.log(data);
    this.http.post(this.appsetting.myGlobalVar + 'users/registration', Serialized, options).map(res=>res.json()).subscribe(response=>{
      console.log(response);
    this.Loading.dismiss();
    if(response.isSuccess == true){
       this.events.publish('role', 'clubgoer');
      localStorage.setItem("USER_DATA", JSON.stringify(response.user_data));
    let alert = this.alertCtrl.create({
            title: 'Sign Up',
            subTitle: response.msg,
            buttons:['ok']
      });
          alert.present();
          //setTimeout(()=>alert.dismiss(),1500);
    this.navCtrl.push(HomePage);
}else{
              
      let alert = this.alertCtrl.create({
        
            title: 'Sign Up',
            subTitle: response.msg,
            buttons:['ok']
      });
          alert.present();
          //setTimeout(()=>alert.dismiss(),1500);
          
}
    })
  })
  }else{
     let alert = this.alertCtrl.create({
            title: 'Signup',
            subTitle: 'Password did not match',
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

signinPage(){
  this.navCtrl.push(LoginPage);
}
}

