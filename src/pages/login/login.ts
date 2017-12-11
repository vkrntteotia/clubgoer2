import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController,AlertController,Events  } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import {NgZone } from '@angular/core';
import 'rxjs/add/operator/map';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ForgotPage } from '../forgot/forgot';
import { Appsetting } from '../../providers/appsetting';
import { CommonProvider } from '../../providers/common/common';
import { VariableProvider } from '../../providers/variable/variable';
import { SignindjPage } from '../signindj/signindj';
import { Firebase } from '@ionic-native/firebase';

/**
 * Generated class for the SigninPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public scrollAmount = 44;token;
  public data = {}; id; username;password;classval;
  public profilepicface:any;
  public facebook_data:any;
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
    if(localStorage.getItem("username")!=null && localStorage.getItem("password")!=null){
       this.username=localStorage.getItem("username");
        this.data = {
          email: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
          checkbx:true
        }
      } else{
        this.data = {
          email: "",
          password: "",
          checkbx:true
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
       setTimeout(()=>alert.dismiss(),2500);
      }
    }
    
  login(form) {
  
    if(form.value.checkbx==true){
      localStorage.setItem("username",form.value.email);
      localStorage.setItem("password",form.value.password);
    }else{
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
      this.Loading.present();
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
      let options = new RequestOptions({ headers: headers });
    this.firebase.onTokenRefresh().subscribe(
    token => {
      console.log(`The new token is ${token}`);
      this.token = token;
      var data = {
        email: form.value.email,
        password: form.value.password,
        token : this.token
      }
      var Serialized = this.serializeObj(data);
      
      this.http.post(this.appsetting.myGlobalVar + 'users/login', Serialized, options).map(res => res.json()).subscribe(response => {
        this.Loading.dismiss();
        if (response.status == true) {
            let alert = this.alertCtrl.create({
              title: 'Logged in',
              subTitle: response.msg,
              cssClass:'newpop'
          });
            alert.present();
            setTimeout(()=>alert.dismiss(),1500);
          localStorage.removeItem("fblogin");
          localStorage.setItem("USER_DATA", JSON.stringify(response.user));
          this.appsetting.profile = response.user;
          this.events.publish('role', 'clubgoer');
          this.navCtrl.push(HomePage);
        } else {
            let alert = this.alertCtrl.create({
              title: 'Login',
              subTitle: response.msg,
              buttons:['ok']
         });
            alert.present();
            setTimeout(()=>alert.dismiss(),3500);
      }
    })
    })
  }

fblogin(){
// alert("fblogin");
this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => {
this.fb.api('me/?fields=id,email,last_name,first_name', ["public_profile", "email"])

.then((result)=>{
  this.Loading.present();
  this.profilepicface="https://graph.facebook.com/"+result.id+"/picture?type=large";
  localStorage.setItem('facebook_pic', this.profilepicface);
  localStorage.setItem('facebook_login', JSON.stringify(result));
      this.facebook_data = localStorage.getItem('facebook_login');
      var url:string = this.variable.baseUrl + this.variable.SIGNIN_API;
          var signindata={
              email:result.email,
              fb_id:result.id,
              name:result.first_name+" "+result.last_name,
              img:this.profilepicface,
              role:"clubgoer"
          }
   // alert(JSON.stringify(signindata));
      var serialized_data = this.Cmn.serializeObj(signindata);

          let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
          let options = new RequestOptions({ headers: headers });
           this.http.post(url, serialized_data, options)
          .map(res => res.json())
            .subscribe(resolve => {
            if(resolve.isSucess=="true"){
              this.Loading.dismiss();
                // alert("vikki");
                // alert(JSON.stringify(resolve.data));
              localStorage.setItem('userid', resolve.data.User.id);
                localStorage.setItem("USER_DATA", JSON.stringify(resolve.data.User));
                this.appsetting.profile = resolve.data.User;
              localStorage.setItem('fblogin','fbloginfrm');
              this.events.publish('role', 'clubgoer');
                let alert = this.alertCtrl.create({
                    title: 'Logged in',
                    subTitle: resolve.msg,
                    buttons:['ok']
              });
              alert.present();
              setTimeout(()=>alert.dismiss(),3500);
      this.navCtrl.push(HomePage);
   } else{
    // alert("error");
    // alert(JSON.stringify(resolve));
     let alert = this.alertCtrl.create({
          title: 'Login',
          subTitle: resolve.msg,
          buttons:['ok']
      });
      alert.present();
      setTimeout(()=>alert.dismiss(),3500);
     this.Loading.dismiss();
   }
   // this.userinfo.profilepicture ='data:image/jpeg;base64,' + imageUri;;
 })
}).catch(d=>{
   //  alert(JSON.stringify(d))
    this.Loading.dismiss();
})


  })
  .catch(e => {
  // alert(JSON.stringify(e))
  // alert("catch now");
  this.Loading.dismiss();
  });
}

  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
   // console.log('ionViewDidLoad SigninPage');
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

  signupPage() {
    this.navCtrl.push(SignupPage);
  }
  forgotPage() {
    this.navCtrl.push(ForgotPage);
  }

  // tabPage() {
  //   this.navCtrl.push(TabsPage);
  // }
  setBackButtonAction(){
    //Write here wherever you wanna do
    this.navCtrl.push(SignindjPage);
  }
}

