import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, AlertController, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Appsetting } from '../../providers/appsetting';
import { EventsdjPage } from '../eventsdj/eventsdj';
import { EditprofiledjPage } from '../editprofiledj/editprofiledj';
import { SubscribedjPage } from '../subscribedj/subscribedj';
/**
 * Generated class for the EditeventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editevent',
  templateUrl: 'editevent.html',
})
export class EditeventPage {
  public userdata; event_id; editevnt;
  public taggel = true;
  public imgTosend: any;
  public srcImage: any;
  public data = {};
  public minyear: any;
  public maxyear: any;
  public logo;
  public Loader = this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public platform: Platform,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public appsetting: Appsetting,
    private alertCtrl: AlertController) {
    this.editevnt = navParams.get("evntiid");
    this.getevent(this.editevnt);

    var d = new Date();
    var mm = ("0" + (d.getMonth() + 1)).slice(-2);
    var day = ("0" + (d.getDate())).slice(-2);
    //this.minyear = d.getFullYear()+"-"+mm+"-"+d.getDate();
    this.minyear = d.getFullYear() + "-" + mm + "-" + day;
    this.maxyear = d.getFullYear() + "-" + mm + "-" + day;
    //this.logo = JSON.parse(localStorage.getItem("USER_DATA")).logo;
    //if(this.logo==null){
    this.logo = "assets/img/sbg.png";
      //}
      // console.log(JSON.parse(localStorage.getItem("USER_DATA")).paypal_email);
  }

getevent(evid){ 
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  let options = new RequestOptions({ headers: headers });
  var data = {
    event_id:evid 
  }
  var Serialized = this.serializeObj(data);
  this.http.post(this.appsetting.myGlobalVar + 'events/getevent', Serialized, options).map(res => res.json()).subscribe(response => {
    
    this.srcImage = response.data.Event.image;  
    this.imgTosend = response.data.Event.image;

     this.data = {
      'venuename' : response.data.Event.venue_name,
       'venueaddress': response.data.Event.venue_address,
      'eventname': response.data.Event.event_name,
      'eventstartdt': response.data.Event.event_date,  //start date
      'eventenddt': response.data.Event.start_event ,  //end date
      'eventsarttm': response.data.Event.event_time,  //start time
      'eventendtm' : response.data.Event.scheduled_start_time ,  //end time
      'img' : response.data.Event.image,
      'minplay': response.data.TipOptionPrice.playnow,
      'mingrnt': response.data.TipOptionPrice.guareteedplay,
   'minpossi':   response.data.TipOptionPrice.possiblyplay
  
    };
    
  });
}
toggleDetails(taggel) {
    if (taggel) {
      this.taggel = false;
    } else {
      this.taggel = true;
    }
  }

  editeventnow(editeven) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
    var imgsend = this.imgTosend;
    var dj_code = JSON.parse(localStorage.getItem("USER_DATA")).paypal_email;
    var subscribedj = JSON.parse(localStorage.getItem("USER_DATA")).subscription_status;

    if (editeven.value.eventstartdt == editeven.value.eventenddt) {

      if (editeven.value.eventsarttm > editeven.value.eventendtm) {
        this.Loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Time ',
          subTitle: 'Please enter appropriate time.',
          buttons: ['ok']
        });
        alert.present();
        return false;
      }    
    }
    if (subscribedj == 0) {
      let alert = this.alertCtrl.create({
        title: 'Edit event',
        subTitle: 'Please subscribe first',
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 3500);
      this.Loader.dismiss();
      this.navCtrl.push(SubscribedjPage);
    }
    else if (dj_code == null) {
      let alert = this.alertCtrl.create({
        title: 'PayPal Account',
        subTitle: 'To edit an event, please add your PayPal email address first.',
        buttons: ['ok']
      });
      alert.present();
      //setTimeout(()=>alert.dismiss(),3500);
      this.Loader.dismiss();
      this.navCtrl.push(EditprofiledjPage);

    // } else if (imgsend == undefined) {
    //   let alert = this.alertCtrl.create({
    //     title: 'Add event',
    //     subTitle: 'Please select image first',
    //   });
    //   alert.present();
    //   setTimeout(() => alert.dismiss(), 3500);
    //   this.Loader.dismiss();
    }
    else if (editeven.value.minplay < 2 || editeven.value.mingrnt < 2 || editeven.value.minpossi < 2) {
      let alert = this.alertCtrl.create({
        title: 'Edit event',
        subTitle: 'Please enter tip amount greater than 1',
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 3500);
      this.Loader.dismiss();
    }
    else {
      this.Loader.present()
      // this.Loader.present();
      var data = {
        userid: user_id,
        event_id: this.editevnt,
        venue_name: editeven.value.venuename,
        venue_addr: editeven.value.venueaddress,
        event_name: editeven.value.eventname,
        event_start_date: editeven.value.eventstartdt,
        event_end_date: editeven.value.eventenddt,
        event_start_time: editeven.value.eventsarttm,
        event_end_time: editeven.value.eventendtm,
        play_now_amt: editeven.value.minplay,
        guaranteed_play: editeven.value.mingrnt,
        possibly_play: editeven.value.minpossi,
        image: imgsend,
        role: 'dj'
      }

      var Serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/editevent', Serialized, options).map(res => res.json()).subscribe(response => {

        this.Loader.dismiss()
        if (response.status == 0) {
          this.Loader.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Edit event',
            subTitle: response.msg,
          });
          alert.present();
          setTimeout(() => alert.dismiss(), 2500);
          this.navCtrl.push(EventsdjPage);
        } else {
          this.Loader.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Edit event',
            subTitle: response.msg,
          });
          alert.present();
          setTimeout(() => alert.dismiss(), 2500);
        }
      })
    }
  }

  updateDueDate(curdt) {
    this.maxyear = curdt;
    this.data['eventenddt'] = curdt;
  }

  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");

  }
 private takePicture(sourceType){
    //this.srcImage='';

    this.imgTosend='';
    const options: CameraOptions = {
      quality: 8,
      sourceType: sourceType,
      allowEdit: true,
      targetWidth: 600,
      targetHeight: 600,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false
    }
    
    this.camera.getPicture(options).then((imageUri) => {
      //this.srcImage = 'data:image/jpeg;base64,' + imageUri;
      this.srcImage = '';
      this.imgTosend = imageUri;
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
      let options = new RequestOptions({ headers: headers });
      var data = {
        event_id: this.editevnt,
        img: imageUri
      }
      var Serialized = this.serializeObj(data);
      var Loading = this.loadingCtrl.create({
        content: 'Please wait...',
      });
      Loading.present().then(() => {
        this.http.post(this.appsetting.myGlobalVar + 'events/saveimage', Serialized, options).map(res => res.json()).subscribe(response => {
          Loading.dismiss();
         
          if (response.status == "true") {
          this.srcImage = this.appsetting.editGlobalevntimg + response.data;
          }
        })
      })
    }, (err) => {
     //alert(JSON.stringify(err));
    });
  }
  CameraAction() {
    let actionsheet = this.actionSheetCtrl.create({
      title: "Choose Album",
      buttons: [{
        text: 'Camera',
        handler: () => {
              this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Gallery',
        handler: () => {
              this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
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
      setTimeout(() => alert.dismiss(), 3500);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditeventPage');
  }

}
