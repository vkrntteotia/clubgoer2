import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LogindjPage } from '../logindj/logindj';
import { SignupPage } from '../signup/signup';
import 'rxjs/add/operator/map';
import {LoadingController,ToastController} from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
public data = '';

public Loading=this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor( public navCtrl: NavController,
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
        setTimeout(()=>alert.dismiss(),1500);
      }
    }
forgot(form){
  this.Loading.present();
  let headers = new Headers();
  headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
  let options= new RequestOptions({ headers: headers });
  var data ={
    username:form.value.email,
    }
  var Serialized = this.serializeObj(data);
  this.http.post(this.appsetting.myGlobalVar + 'users/forgetpwd', Serialized, options).map(res=>res.json()).subscribe(response=>{
      this.Loading.dismiss();
        if(response.isSucess == "true"){
            let alert = this.alertCtrl.create({
            title: 'Forget password',
            subTitle: response.msg,
            buttons:['ok']
        });
          alert.present();
           setTimeout(()=>alert.dismiss(),1500);
           if(response.usrrole=="dj"){
            this.navCtrl.push(LogindjPage);
           }else{
            this.navCtrl.push(LoginPage);
           }
        }else{
            let alert = this.alertCtrl.create({
            title: 'Forget password',
            subTitle: response.msg,
            buttons:['ok']
          });
          alert.present();
           setTimeout(()=>alert.dismiss(),1500);
        }
    })
}



 serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  signinPage(){
    this.navCtrl.push(LoginPage);
  }
  signupPage(){
    this.navCtrl.push(SignupPage);
  }

}
