import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform,ToastController,AlertController,ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Http, Headers, RequestOptions} from '@angular/http';
import {LoadingController} from 'ionic-angular';
import { Appsetting } from '../../providers/appsetting';
import { EventsdjPage } from '../eventsdj/eventsdj';
import { EditprofiledjPage } from '../editprofiledj/editprofiledj';
import { SubscribedjPage } from '../subscribedj/subscribedj';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';

/**
 * Generated class for the AddeventdjnewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-addeventdjnew',
  templateUrl: 'addeventdjnew.html',
})
export class AddeventdjnewPage {
  public userdata;currentName;newFileName;
  public taggel=true;
  public imgTosend:any;
  public srcImage:any; 
  public data={};
  public minyear:any;
  public maxyear:any;
  public logo;
  public Loader = this.loadingCtrl.create({
		content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public platform: Platform,
    public http: Http,
    private transfer: Transfer,
    private file: File,
    private filePath: FilePath, 
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public toastCtrl:ToastController,
    public appsetting: Appsetting,
    private alertCtrl: AlertController) {
      var d = new Date(); 
      var mm = ("0" + (d.getMonth() + 1)).slice(-2);
      var day = ("0" + (d.getDate())).slice(-2);
      //this.minyear = d.getFullYear()+"-"+mm+"-"+d.getDate();
      this.minyear = d.getFullYear()+"-"+mm+"-"+day;
      this.maxyear = d.getFullYear()+"-"+mm+"-"+day;
      //this.logo = JSON.parse(localStorage.getItem("USER_DATA")).logo;
      //if(this.logo==null){
        this.logo="assets/img/sbg.png";
      //}
      //  console.log(JSON.parse(localStorage.getItem("USER_DATA")).paypal_email);
  }
  toggleDetails(taggel) {
    if (taggel) {
        this.taggel = false;
    } else {
        this.taggel = true;
    }
  }

   uploadImage(url) {
    // Destination URL
    var url = url;
   
    // File for Upload  uploadeventimg
    var targetPath = cordova.file.dataDirectory + this.newFileName;
    
    // File name only
    var filename = this.newFileName;

    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'fileName': filename}
    };
   
    const fileTransfer: TransferObject = this.transfer.create();
    this.Loader.present();
    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      console.log(data);
        if(url==this.appsetting.myGlobalVar + 'events/uploadeventimgnow'){
          //this.Loader.dismissAll();
          this.Loader.dismiss();
          this.navCtrl.push(EventsdjPage);
          //this.presentToast('Image succesful uploaded.');
        } else{
          this.Loader.dismissAll();
          this.Loader.dismiss();
          this.srcImage = this.appsetting.showGlobalurl + this.newFileName;
          //this.presentToast('Image succesful uploaded.');
        }
      
    }, err => {
      this.Loader.dismissAll()
      this.presentToast('Error while uploading file.');
    });
  }

  addeventnow(addevent){
    let headers = new Headers();
    headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
    let options= new RequestOptions({ headers: headers });
    var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
    var imgsend = this.newFileName;
 
    var paypl_emil = JSON.parse(localStorage.getItem("USER_DATA")).paypal_email;
    var dj_code = JSON.parse(localStorage.getItem("USER_DATA")).djcode;
    var subscribedj = JSON.parse(localStorage.getItem("USER_DATA")).subscription_status;

    if (addevent.value.eventstartdt == addevent.value.eventenddt) {

      if (addevent.value.eventsarttm > addevent.value.eventendtm) {
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

    if(subscribedj==0){
      let alert = this.alertCtrl.create({
        title: 'Add event',
        subTitle: 'Please subscribe first',
        buttons:['ok']
      });
      alert.present();
      setTimeout(()=>alert.dismiss(),3500);
      this.Loader.dismiss();
      this.navCtrl.push(SubscribedjPage);
    }
    else if(dj_code==null || dj_code=="" || dj_code==undefined){
      let alert = this.alertCtrl.create({
        title: 'PayPal Account',
        subTitle: 'To add an event, please add your Djcode first.',
        buttons:['ok']
      });
      alert.present();
      //setTimeout(()=>alert.dismiss(),3500);
      this.Loader.dismiss();
      this.navCtrl.push(EditprofiledjPage);
    }  
   else if(paypl_emil==null || paypl_emil=="" || paypl_emil==undefined){
      let alert = this.alertCtrl.create({
        title: 'PayPal Account',
        subTitle: 'To add an event, please add your PayPal email address first.',
        buttons:['ok']
      });
      alert.present();
      //setTimeout(()=>alert.dismiss(),3500);
      this.Loader.dismiss();
      this.navCtrl.push(EditprofiledjPage);
    } else if(imgsend==undefined){
      let alert = this.alertCtrl.create({
        title: 'Add event',
        subTitle: 'Please select image first',
        buttons:['ok']
      });
      alert.present();
      setTimeout(()=>alert.dismiss(),3500);
      this.Loader.dismiss();
    } 
    else if(addevent.value.minplay<2 || addevent.value.mingrnt<2 || addevent.value.minpossi<2){
      let alert = this.alertCtrl.create({
        title: 'Add event',
        subTitle: 'Please enter tip amount greater than 1',
        buttons:['ok']
      });
      alert.present();
      setTimeout(()=>alert.dismiss(),3500);
      this.Loader.dismiss();
    }
    else {
      this.Loader.present();
      var data = {
        user_id:user_id,
        venue_name:addevent.value.venuename,
        venue_addr:addevent.value.venueaddress,
        event_name:addevent.value.eventname,
        event_start_date : addevent.value.eventstartdt,
        event_end_date : addevent.value.eventenddt,
        event_start_time : addevent.value.eventsarttm,
        event_end_time : addevent.value.eventendtm,
        play_now_amt : addevent.value.minplay,
        guaranteed_play : addevent.value.mingrnt,
        possibly_play : addevent.value.minpossi,      
        image : imgsend,
        role : 'dj'
      }
    
    var Serialized = this.serializeObj(data);
    this.http.post(this.appsetting.myGlobalVar + 'events/addevent', Serialized, options).map(res=>res.json()).subscribe(response=>{
      this.Loader.dismiss();
      if (response.status == 0) {
        let alert = this.alertCtrl.create({
          title: 'Add event',
          subTitle: response.msg,
          buttons:['ok']
        });
        alert.present();
        setTimeout(()=>alert.dismiss(),2500);
        this.uploadImage(this.appsetting.myGlobalVar + 'events/uploadeventimgnow');
      } else {
        this.Loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Add event',
          subTitle: response.msg,
          buttons:['ok']
        });
        alert.present();
        setTimeout(()=>alert.dismiss(),2500);
      }
   })
  }
  }

  updateDueDate(curdt){
    this.maxyear=curdt;
    this.data['eventenddt']=curdt;
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
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false
    }
    
    this.camera.getPicture(options).then((imageUri) => {
      //this.srcImage = 'data:image/jpeg;base64,' + imageUri;
      this.imgTosend = imageUri;
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imageUri)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imageUri.substring(imageUri.lastIndexOf('/') + 1, imageUri.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        this.currentName = imageUri.substr(imageUri.lastIndexOf('/') + 1);
        var correctPath = imageUri.substr(0, imageUri.lastIndexOf('/') + 1);
        console.log("currentName");console.log(this.currentName);
        console.log("correctPath");console.log(correctPath);
        this.copyFileToLocalDir(correctPath, this.currentName, this.createFileName());
      }
    }, (err) => {
     alert(JSON.stringify(err));
    });
  }
  
  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
    n = d.getTime();
    this.newFileName =  n + ".jpg";
    return this.newFileName;
  }
   
  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      //this.srcImage = newFileName;
      this.uploadImage(this.appsetting.myGlobalVar + 'events/uploadeventimg');
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }
   
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
   
  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
 CameraActionadd() {
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
      setTimeout(()=>alert.dismiss(),1500);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeventdjPage');
  }

}
