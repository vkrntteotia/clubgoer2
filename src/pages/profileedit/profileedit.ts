import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,LoadingController,Events } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { ProfilePage } from '../profile/profile';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the ProfileeditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profileedit',
  templateUrl: 'profileedit.html',
})
export class ProfileeditPage {
  public data = {};countrys;id;user_id;profile;srcImage;
  public imgTosend;
    
  constructor(public navCtrl: NavController,
   public navParams: NavParams, 
   public http: Http,
   public appsetting: Appsetting,
   private camera: Camera,
   public actionSheetCtrl: ActionSheetController,
   public loadingCtrl: LoadingController,
   public events: Events,
   public toastCtrl:ToastController,
   private alertCtrl: AlertController
   ) {
    // this.countrylist()
     this.getdata()
  }
  public Loader = this.loadingCtrl.create({
		content: 'Please wait...',
    dismissOnPageChange: true
	});
  getdata(){
    this.Loader.present();
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers }); 
		var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
    var postdata = {
      userid:user_id
    };
    console.log(postdata)
    var serialized = this.serializeObj(postdata);
    this.http.post(this.appsetting.myGlobalVar + 'users/getuserbyid', serialized, options).map(res => res.json()).subscribe(response => {
      this.Loader.dismiss();
      console.log(response);
      if(response.data){
           this.data = response.data.User;
           this.srcImage = response.data.User.image;
        }
      })
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
               this.srcImage = 'data:image/jpeg;base64,' + imageUri;
              this.imgTosend = imageUri;
            }, (err) => {
              //alert(JSON.stringify(err));
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
               this.srcImage = 'data:image/jpeg;base64,' + imageData;
               this.imgTosend = imageData;
            }, (err) => {
              //alert(JSON.stringify(err));
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

  changeimage() {
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
    this.Loader.present();
		var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
		var postdata = {
			id: user_id,
			img: this.imgTosend
    };
    
		var serialized = this.serializeObj(postdata);
		this.http.post(this.appsetting.myGlobalVar + 'users/saveimage', serialized, options).map(res => res.json()).subscribe(data => {

      if (data.status == "true") {
        this.Loader.dismiss();
        this.appsetting.profile=data.data.user;
        let alert = this.alertCtrl.create({
            title: 'Edit profile',
            subTitle: data.msg,
            buttons:['ok']
        });
        alert.present();
        setTimeout(()=>alert.dismiss(),3500);
      } else {
        this.Loader.dismiss();
         let alert = this.alertCtrl.create({
            title: 'Edit profile',
            subTitle: data.msg,
            buttons:['ok']
        });
        alert.present();
        setTimeout(()=>alert.dismiss(),3500);
      }
		})
	}

  editprofile(edit) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    let Loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Loader.present().then(() => {
      var data = {
        first_name: edit.value.fname,
        audiourl: edit.value.audiourl,
        videourl: edit.value.videourl,
        id: Userid,
        img: this.imgTosend
            }

      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'users/editprofile', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          if (data.isSucess == "true") {
            // alert("Profile is updated")
            this.appsetting.profile = data.data.User;
            localStorage.removeItem('USER_DATA');
            localStorage.setItem('USER_DATA',JSON.stringify(data.data.User));
            this.events.publish('role', 'clubgoer');
            // let alert = this.alertCtrl.create({
            //   title: 'Edit profile',
            //   subTitle: data.msg,
            // });
            // alert.present();
            // setTimeout(()=>alert.dismiss(),2500);
            this.navCtrl.push(ProfilePage);
          } else {
            let alert = this.alertCtrl.create({
              title: 'Edit profile',
              subTitle: data.msg,
              buttons:['ok']
            });
            alert.present();
            setTimeout(()=>alert.dismiss(),3500);
          }
        })
    });
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
       setTimeout(()=>alert.dismiss(),3500);
      }
  }
 serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
}
