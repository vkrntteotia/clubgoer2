webpackJsonp([3],{

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeventdjnewPageModule", function() { return AddeventdjnewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addeventdjnew__ = __webpack_require__(806);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddeventdjnewPageModule = (function () {
    function AddeventdjnewPageModule() {
    }
    return AddeventdjnewPageModule;
}());
AddeventdjnewPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__addeventdjnew__["a" /* AddeventdjnewPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addeventdjnew__["a" /* AddeventdjnewPage */]),
        ],
    })
], AddeventdjnewPageModule);

//# sourceMappingURL=addeventdjnew.module.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddeventdjnewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editprofiledj_editprofiledj__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AddeventdjnewPage = (function () {
    function AddeventdjnewPage(navCtrl, navParams, platform, http, transfer, file, filePath, camera, actionSheetCtrl, loadingCtrl, toastCtrl, appsetting, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.http = http;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.appsetting = appsetting;
        this.alertCtrl = alertCtrl;
        this.taggel = true;
        this.data = {};
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
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
        //  console.log(JSON.parse(localStorage.getItem("USER_DATA")).paypal_email);
    }
    AddeventdjnewPage.prototype.toggleDetails = function (taggel) {
        if (taggel) {
            this.taggel = false;
        }
        else {
            this.taggel = true;
        }
    };
    AddeventdjnewPage.prototype.uploadImage = function (url) {
        var _this = this;
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
            params: { 'fileName': filename }
        };
        var fileTransfer = this.transfer.create();
        this.Loader.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            console.log(data);
            if (url == _this.appsetting.myGlobalVar + 'events/uploadeventimgnow') {
                //this.Loader.dismissAll();
                _this.Loader.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                //this.presentToast('Image succesful uploaded.');
            }
            else {
                _this.Loader.dismissAll();
                _this.Loader.dismiss();
                _this.srcImage = _this.appsetting.showGlobalurl + _this.newFileName;
                //this.presentToast('Image succesful uploaded.');
            }
        }, function (err) {
            _this.Loader.dismissAll();
            _this.presentToast('Error while uploading file.');
        });
    };
    AddeventdjnewPage.prototype.addeventnow = function (addevent) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var imgsend = this.newFileName;
        var dt = new Date();
        var montn = ("0" + (dt.getMonth() + 1)).slice(-2);
        var daynw = ("0" + (dt.getDate())).slice(-2);
        var curdat = dt.getFullYear() + "-" + montn + "-" + daynw;
        //var seconds = dt.getSeconds();
        var minutes = dt.getMinutes();
        var hour = dt.getHours();
        var timetocheck = dt.getFullYear() + "-" + montn + "-" + daynw + " " + hour + ":" + minutes;
        var paypl_emil = JSON.parse(localStorage.getItem("USER_DATA")).paypal_email;
        var dj_code = JSON.parse(localStorage.getItem("USER_DATA")).djcode;
        var subscribedj = JSON.parse(localStorage.getItem("USER_DATA")).subscription_paymant_status;
        if (addevent.value.eventstartdt == addevent.value.eventenddt) {
            if (addevent.value.eventsarttm > addevent.value.eventendtm) {
                this.Loader.dismiss();
                var alert_1 = this.alertCtrl.create({
                    title: 'Time ',
                    subTitle: 'Please enter appropriate time.',
                    buttons: ['ok']
                });
                alert_1.present();
                return false;
            }
        }
        if (subscribedj == 0) {
            var alert_2 = this.alertCtrl.create({
                title: 'Add event',
                subTitle: 'Please subscribe first',
                buttons: ['ok']
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 3500);
            this.Loader.dismiss();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__["a" /* SubscribedjPage */]);
        }
        else if (dj_code == null || dj_code == "" || dj_code == undefined) {
            var alert_3 = this.alertCtrl.create({
                title: 'PayPal Account',
                subTitle: 'To add an event, please add your Djcode first.',
                buttons: ['ok']
            });
            alert_3.present();
            //setTimeout(()=>alert.dismiss(),3500);
            this.Loader.dismiss();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editprofiledj_editprofiledj__["a" /* EditprofiledjPage */]);
        }
        else if (paypl_emil == null || paypl_emil == "" || paypl_emil == undefined) {
            var alert_4 = this.alertCtrl.create({
                title: 'PayPal Account',
                subTitle: 'To add an event, please add your PayPal email address first.',
                buttons: ['ok']
            });
            alert_4.present();
            //setTimeout(()=>alert.dismiss(),3500);
            this.Loader.dismiss();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editprofiledj_editprofiledj__["a" /* EditprofiledjPage */]);
        }
        else if (imgsend == undefined) {
            var alert_5 = this.alertCtrl.create({
                title: 'Add event',
                subTitle: 'Please select image first',
                buttons: ['ok']
            });
            alert_5.present();
            setTimeout(function () { return alert_5.dismiss(); }, 3500);
            this.Loader.dismiss();
        }
        else if (addevent.value.minplay < 2 || addevent.value.mingrnt < 2 || addevent.value.minpossi < 2) {
            var alert_6 = this.alertCtrl.create({
                title: 'Add event',
                subTitle: 'Please enter tip amount greater than 1',
                buttons: ['ok']
            });
            alert_6.present();
            setTimeout(function () { return alert_6.dismiss(); }, 3500);
            this.Loader.dismiss();
        }
        else {
            this.Loader.present();
            var data = {
                user_id: user_id,
                venue_name: addevent.value.venuename,
                venue_addr: addevent.value.venueaddress,
                event_name: addevent.value.eventname,
                event_start_date: addevent.value.eventstartdt,
                event_end_date: addevent.value.eventenddt,
                event_start_time: addevent.value.eventsarttm,
                event_end_time: addevent.value.eventendtm,
                play_now_amt: addevent.value.minplay,
                guaranteed_play: addevent.value.mingrnt,
                possibly_play: addevent.value.minpossi,
                image: imgsend,
                curdate: curdat,
                checktime: timetocheck,
                role: 'dj'
            };
            var Serialized = this.serializeObj(data);
            this.http.post(this.appsetting.myGlobalVar + 'events/addevent', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                _this.Loader.dismiss();
                if (response.status == 0) {
                    var alert_7 = _this.alertCtrl.create({
                        title: 'Add event',
                        subTitle: response.msg,
                        buttons: ['ok']
                    });
                    alert_7.present();
                    setTimeout(function () { return alert_7.dismiss(); }, 2500);
                    _this.uploadImage(_this.appsetting.myGlobalVar + 'events/uploadeventimgnow');
                }
                else {
                    _this.Loader.dismiss();
                    var alert_8 = _this.alertCtrl.create({
                        title: 'Add event',
                        subTitle: response.msg,
                        buttons: ['ok']
                    });
                    alert_8.present();
                    setTimeout(function () { return alert_8.dismiss(); }, 2500);
                }
            });
        }
    };
    AddeventdjnewPage.prototype.updateDueDate = function (curdt) {
        this.maxyear = curdt;
        this.data['eventenddt'] = curdt;
    };
    AddeventdjnewPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AddeventdjnewPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        //this.srcImage='';
        this.imgTosend = '';
        var options = {
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
        };
        this.camera.getPicture(options).then(function (imageUri) {
            //this.srcImage = 'data:image/jpeg;base64,' + imageUri;
            _this.imgTosend = imageUri;
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imageUri)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imageUri.substring(imageUri.lastIndexOf('/') + 1, imageUri.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                _this.currentName = imageUri.substr(imageUri.lastIndexOf('/') + 1);
                var correctPath = imageUri.substr(0, imageUri.lastIndexOf('/') + 1);
                console.log("currentName");
                console.log(_this.currentName);
                console.log("correctPath");
                console.log(correctPath);
                _this.copyFileToLocalDir(correctPath, _this.currentName, _this.createFileName());
            }
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    // Create a new name for the image
    AddeventdjnewPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime();
        this.newFileName = n + ".jpg";
        return this.newFileName;
    };
    // Copy the image to a local folder
    AddeventdjnewPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            //this.srcImage = newFileName;
            _this.uploadImage(_this.appsetting.myGlobalVar + 'events/uploadeventimg');
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    AddeventdjnewPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    AddeventdjnewPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    AddeventdjnewPage.prototype.CameraActionadd = function () {
        var _this = this;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }]
        });
        actionsheet.present();
    };
    AddeventdjnewPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_9 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_9.present();
            setTimeout(function () { return alert_9.dismiss(); }, 1500);
        }
    };
    AddeventdjnewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddeventdjPage');
    };
    return AddeventdjnewPage;
}());
AddeventdjnewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addeventdjnew',template:/*ion-inline-start:"/Volumes/D/Vikki/clubgoer2/src/pages/addeventdjnew--/addeventdjnew.html"*/'<!--\n  Generated template for the AddeventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		<ion-navbar color="black">\n			<ion-title>Add Event</ion-title>\n	    	 <ion-buttons end class="rbutton">\n		        <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n		     </ion-buttons>\n		</ion-navbar>\n	</ion-header>\n	\n	\n	<ion-content>\n		<div class="imgsec">\n			<img [src]="logo">\n		</div>\n		<div class="form-sec">\n			<ion-grid>\n				<ion-row>\n					<ion-col>\n						\n						<form #addeventForm="ngForm" class="event-form">\n							<ion-col col-12>\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="text" placeholder="Venue name" [(ngModel)]="data.venuename" name="venuename" #venuename=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="venuename.errors && (venuename.dirty || venuename.touched)">\n											   <div [hidden]="!venuename.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n							</ion-col>\n								\n								<ion-col col-12>\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="text" placeholder="Venue address" [(ngModel)]="data.venueaddress" name="venueaddress" #venueaddress=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="venueaddress.errors && (venueaddress.dirty || venueaddress.touched)">\n											   <div [hidden]="!venueaddress.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n								<ion-col col-12>\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="text" placeholder="Event name" [(ngModel)]="data.eventname" name="eventname" #eventname=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventname.errors && (eventname.dirty || eventname.touched)">\n											   <div [hidden]="!eventname.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n								 <div class="colm">\n						<ion-col col-12>\n								<ion-row>\n							<ion-col col-6>\n									<ion-list>\n										<ion-item>\n												\n												<ion-datetime min="{{minyear}}" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY" [(ngModel)]="data.eventstartdt" (ngModelChange)="updateDueDate($event)" name="eventstartdt" placeholder="Event start date" #eventstartdt=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventstartdt.errors && (eventstartdt.dirty || eventstartdt.touched)">\n											   <div [hidden]="!eventstartdt.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n	\n							<ion-col col-6>\n									<ion-list>\n										<ion-item>\n												<ion-datetime min="{{maxyear}}" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY"  placeholder="Event end date" [(ngModel)]="data.eventenddt" name="eventenddt" #eventenddt=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventenddt.errors && (eventenddt.dirty || eventenddt.touched)">\n											   <div [hidden]="!eventenddt.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n							</ion-row>\n						</ion-col>\n					</div>\n						<div class="colm>">\n						<ion-col col-12>\n							<ion-row>\n							<ion-col col-6 class="padding0lft">\n									<ion-list>\n										<ion-item>\n												<ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Event start time" [(ngModel)]="data.eventsarttm" name="eventsarttm" #eventsarttm=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventsarttm.errors && (eventsarttm.dirty || eventsarttm.touched)">\n											   <div [hidden]="!eventsarttm.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n							<ion-col col-6 class="padding0rgt">\n									<ion-list>\n										<ion-item>\n												<ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Event end time" [(ngModel)]="data.eventendtm" name="eventendtm" #eventendtm=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventendtm.errors && (eventendtm.dirty || eventendtm.touched)">\n											   <div [hidden]="!eventendtm.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n						</ion-row>\n						</ion-col>\n					</div>\n					<ion-col col-12>\n						<ion-row>\n							<div class="tip" (click)="toggleDetails(taggel)">\n								<h3>Setup Tip Amounts</h3>\n								<button class="abc" ion-button icon-right>\n									<ion-icon name="arrow-down"></ion-icon>\n								</button>\n							</div>\n						</ion-row>\n					</ion-col>\n					<ion-col col-12 *ngIf="taggel">\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="tel" placeholder="Minimum amount for Play Now" min="2" [(ngModel)]="data.minplay" name="minplay" #minplay=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="minplay.errors && (minplay.dirty || minplay.touched)">\n											   <div [hidden]="!minplay.errors.required" >\n													 Field is required\n											   </div>\n												<div [hidden]="!minplay.errors.min" >\n													Minimum amount should be 2 \n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n							 \n								<ion-col col-12 *ngIf="taggel">\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="tel" placeholder="Minimum amount for Guaranteed Play" min="2" [(ngModel)]="data.mingrnt" name="mingrnt" #mingrnt=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="mingrnt.errors && (mingrnt.dirty || mingrnt.touched)">\n											   <div [hidden]="!mingrnt.errors.required" >\n												 Field is required\n												</div>\n												<div [hidden]="!mingrnt.errors.min" >\n													Minimum amount should be 2 \n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n								<ion-col col-12 *ngIf="taggel">\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="tel" placeholder="Minimum amount for Possibly Play" min="2" [(ngModel)]="data.minpossi" name="minpossi" #minpossi=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="minpossi.errors && (minpossi.dirty || minpossi.touched)">\n											   <div [hidden]="!minpossi.errors.required" >\n													 Field is required\n											   </div>\n											   <div [hidden]="!minpossi.errors.min" >\n													Minimum amount should be 2 \n											   </div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n							\n						<ion-col col-12>\n							<ion-row>\n								<div *ngIf="srcImage" class="upload_imgouter">\n									<img [src]="srcImage"/>\n								</div>  \n								<!-- <ion-label  class="alert alert-danger" color="danger">\n									<div *ngIf="img.errors && (img.dirty || img.touched)">\n										   <div [hidden]="!img.errors.required" >\n											 Field is required\n										</div>\n									</div>\n								</ion-label> -->\n								\n										<input (click)="CameraActionadd()" type="button" value="Upload Image" class="upladbtn">  \n							\n								\n							</ion-row>\n						</ion-col>\n						\n						<ion-col col-12>\n							<ion-row>\n								<div class="bottombtn">\n									<button ion-button type="submit" [disabled]="!addeventForm.form.valid"  (click)="addeventnow(addeventForm)">Save</button>\n								</div>\n							</ion-row>\n						</ion-col>\n					</form>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	\n	</ion-content>\n	\n	'/*ion-inline-end:"/Volumes/D/Vikki/clubgoer2/src/pages/addeventdjnew--/addeventdjnew.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AddeventdjnewPage);

//# sourceMappingURL=addeventdjnew.js.map

/***/ })

});
//# sourceMappingURL=3.js.map