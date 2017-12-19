import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ActionSheetController,Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EventsdjPage } from '../eventsdj/eventsdj';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/**
 * Generated class for the EditprofiledjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofiledj',
  templateUrl: 'editprofiledj.html',
})

export class EditprofiledjPage {
  public data={};
  srcImage: any; imgTosend: any;
  profileImage: any; sendProfile: any;
  public Loading = this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
     public events: Events
  ) {
    
  }

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
        //this.data = response.data.User;
        if(response.data.User.audiourl=="null"){
          response.data.User.audiourl="";
        }
        if(response.data.User.djcode=="null"){
          response.data.User.djcode="";
        }
        if(response.data.User.biography=="null"){
          response.data.User.biography="";
        }
        if(response.data.User.paypal_email== "null" || response.data.User.paypal_email == "undefined"){
          response.data.User.paypal_email="";
        }
        if(response.data.User.complete_name=="null"){
          response.data.User.complete_name="";
        }
        if (response.data.User.email == "null") {
          response.data.User.email = "";
        }
        this.data={
          'audiourl' : response.data.User.audiourl,
          'djcode': response.data.User.djcode,
          'biography' : response.data.User.biography,
          'paypal_email' : response.data.User.paypal_email,
          'complete_name' : response.data.User.complete_name,
         
        };
        this.profileImage = response.data.User.image;
        this.srcImage = response.data.User.logo;
      } else {
        let alert = this.alertCtrl.create({
          title: 'Edit Profile',
          subTitle: response.msg,
          buttons:['ok']
           });
        alert.present();
        setTimeout(() => alert.dismiss(), 3500);
      }
    })
  }
  isReadonly() {
    return this.isReadonly;   //return true/false 
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
    
  CameraAction() {
    let actionsheet = this.actionSheetCtrl.create({
      title: "Choose Album",
      buttons: [{
        text: 'Camera',
        handler: () => {
          const options: CameraOptions = {
            quality: 8,
            sourceType: 1,
            allowEdit: true,
            targetWidth: 600,
            targetHeight: 600,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageUri) => {
            this.profileImage='';
            this.profileImage = 'data:image/jpeg;base64,' + imageUri;
            let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            let options = new RequestOptions({ headers: headers });
            var data = {
              id: JSON.parse(localStorage.getItem('USER_DATA')).id,
              img: imageUri
            }
            var Serialized = this.serializeObj(data);
            var Loading = this.loadingCtrl.create({
              content: 'Please wait...',
            });
            Loading.present().then(() => {
              this.http.post(this.appsetting.myGlobalVar + 'users/saveimage', Serialized, options).map(res => res.json()).subscribe(response => {
                Loading.dismiss();
               
                if (response.status == "true") {
                this.profileImage = response.data.User.image;
                }
              })
            })
          }, (err) => {
            alert(JSON.stringify(err));
            console.log(err);
          });
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          const options: CameraOptions = {
            quality: 8,
            sourceType: 0,
            allowEdit: true,
            targetWidth: 600,
            targetHeight: 600,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageData) => {
            this.profileImage='';
             this.profileImage = 'data:image/jpeg;base64,' + imageData;
            let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            let options = new RequestOptions({ headers: headers });
            var data = {
              id: JSON.parse(localStorage.getItem('USER_DATA')).id,
              img: imageData
            }
            var Serialized = this.serializeObj(data);
            var Loading = this.loadingCtrl.create({
              content: 'Please wait...',
            });
            Loading.present().then(() => {
              this.http.post(this.appsetting.myGlobalVar + 'users/saveimage', Serialized, options).map(res => res.json()).subscribe(response => {
                Loading.dismiss();
                if (response.status == "true") {
                  localStorage.setItem('USER_DATA',JSON.stringify(response.data.User))
                  this.events.publish('role', 'dj');
                  this.profileImage = response.data.User.image;
                }

              })
            })
          }, (err) => {
            alert(JSON.stringify(err));
          });
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    actionsheet.present();
  }

  updateProfile(profile) {
    console.log(profile.value);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    
    var data = {
      userid: JSON.parse(localStorage.getItem('USER_DATA')).id,
      completename: profile.value.complete_name,
      biography: profile.value.biography,
      paypal_id: profile.value.paypal_email,
      music_url: profile.value.audiourl,
    }
    var Serialized = this.serializeObj(data);
    console.log(Serialized);
    var Loading = this.loadingCtrl.create({
      content: 'Please wait...',
    });
    // Loading.present().then(() => {
      this.http.post(this.appsetting.myGlobalVar + 'users/edit_profile', Serialized, options)
      .map(res => res.json())
      .subscribe(response => {
        console.log(response);
        
        Loading.dismiss();
        if (response.status == 0) {
          let alert = this.alertCtrl.create({
            title: 'Edit Profile',
            subTitle: response.msg,
            buttons:['ok']
          });
          alert.present();
          localStorage.setItem('USER_DATA',JSON.stringify(response.user));
          this.events.publish('role', 'dj');
          this.navCtrl.push(EventsdjPage);
          setTimeout(() => alert.dismiss(), 3500);
        } else {
          let alert = this.alertCtrl.create({
            title: 'Edit Profile',
            subTitle: response.msg,
            buttons:['ok']
          });
          alert.present();
          setTimeout(() => alert.dismiss(), 3500);
        }
      })
    //});
  }

  uploadlogo() {
    let actionsheet = this.actionSheetCtrl.create({
      title: "Choose Album",
      buttons: [{
        text: 'Camera',
        handler: () => {
          const options: CameraOptions = {
            quality: 8,
            sourceType: 1,
            allowEdit: true,
            targetWidth: 600,
            targetHeight: 600,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageUri) => {
            this.srcImage='';
            this.srcImage = 'data:image/jpeg;base64,' + imageUri;
            let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            let options = new RequestOptions({ headers: headers });
            var data = {
              id: JSON.parse(localStorage.getItem('USER_DATA')).id,
              img: imageUri
            }
            var Serialized = this.serializeObj(data);
            var Loading = this.loadingCtrl.create({
              content: 'Please wait...',
            });
            Loading.present().then(() => {
              this.http.post(this.appsetting.myGlobalVar + 'users/uploadlogo', Serialized, options).map(res => res.json()).subscribe(response => {
              Loading.dismiss();
              this.srcImage = response.data.User.logo;
              })
            })
          }, (err) => {
           // alert(JSON.stringify(err));
            console.log(err);
          });
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          const options: CameraOptions = {
            quality: 20,
            sourceType: 0,
            allowEdit: true,
            targetWidth: 600,
            targetHeight: 600,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageData) => {
            this.srcImage='';
             this.srcImage = 'data:image/jpeg;base64,' + imageData;
            let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            let options = new RequestOptions({ headers: headers });
            var data = {
              id: JSON.parse(localStorage.getItem('USER_DATA')).id,
              img: imageData
            }
            var Serialized = this.serializeObj(data);
            var Loading = this.loadingCtrl.create({
              content: 'Please wait...',
            });
            Loading.present().then(() => {
              this.http.post(this.appsetting.myGlobalVar + 'users/uploadlogo', Serialized, options).map(res => res.json()).subscribe(response => {
                Loading.dismiss();
                this.srcImage = response.data.User.logo;
              })
            })


          }, (err) => {
           // alert(JSON.stringify(err));
          });
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    actionsheet.present();
  }

  ionViewCanEnter(){
    this.getuser();
  }

  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofiledjPage');
  }

}
