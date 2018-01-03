import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {LoadingController,ToastController} from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/map';
import { Appsetting } from '../../providers/appsetting';
/**
 * Generated class for the ChangepasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
public data = '';

public Loading=this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public http:Http,
   public appsetting: Appsetting,
   public loadingCtrl:LoadingController,
   public toastCtrl:ToastController,
   private alertCtrl: AlertController
   ) {

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
        setTimeout(()=>alert.dismiss(),3500);
      }
    }
changepass(form){
 
let headers = new Headers();
headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
let options= new RequestOptions({ headers: headers });
var User = JSON.parse(localStorage.getItem("USER_DATA"));
var email = User.id;
 if (form.value.newpassword.indexOf(' ') >= 0) {
    let alert = this.alertCtrl.create({
    title: 'Change password',
    subTitle: 'Space not allowed',
    buttons:['ok']
  });
  alert.present();
   setTimeout(()=>alert.dismiss(),3500);
 }else if (form.value.newpassword == form.value.conpassword) {
    this.Loading.present();
 var data = {
        email: email,
      	old_password: form.value.password,
      	new_password: form.value.newpassword
}
 console.log(data);
var Serialized = this.serializeObj(data);
 console.log(data);
this.http.post(this.appsetting.myGlobalVar + 'users/changepassword', Serialized, options).map(res=>res.json()).subscribe(data=>{
this.Loading.dismiss();
if(data.isSucess == "true"){
  localStorage.removeItem("password");
  localStorage.setItem("password",form.value.newpassword);
    let alert = this.alertCtrl.create({
    title: 'Change password',
    subTitle: data.msg,
    buttons:['ok']
  });
  alert.present();
   setTimeout(()=>alert.dismiss(),3500);
    //localStorage.clear();
    localStorage.removeItem("fblogin");
    localStorage.removeItem("USER_DATA");
    localStorage.removeItem("facebook_pic");
    localStorage.removeItem("facebook_login");
    localStorage.removeItem("userid");
    localStorage.removeItem("fblogin");
		this.navCtrl.push(LoginPage)
   
}else{
    let alert = this.alertCtrl.create({
    title: 'Change password',
    subTitle: data.msg,
    buttons:['ok']
  });
  alert.present();
   setTimeout(()=>alert.dismiss(),3500);
}
   })
}else{
    let alert = this.alertCtrl.create({
    title: 'Change password',
    subTitle: 'Password do not match',
    buttons:['ok']
  });
  alert.present();
   setTimeout(()=>alert.dismiss(),3500);
}
}

 serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }

homePage(){
  this.navCtrl.push(HomePage);
}
ionViewCanEnter(){
  clearInterval(this.appsetting.interval);
}
}