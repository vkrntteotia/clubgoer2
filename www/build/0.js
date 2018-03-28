webpackJsonp([0],{

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenthistorydjPageModule", function() { return PaymenthistorydjPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymenthistorydj__ = __webpack_require__(809);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymenthistorydjPageModule = (function () {
    function PaymenthistorydjPageModule() {
    }
    return PaymenthistorydjPageModule;
}());
PaymenthistorydjPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__paymenthistorydj__["a" /* PaymenthistorydjPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paymenthistorydj__["a" /* PaymenthistorydjPage */]),
        ],
    })
], PaymenthistorydjPageModule);

//# sourceMappingURL=paymenthistorydj.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymenthistorydjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PaymenthistorydjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymenthistorydjPage = (function () {
    function PaymenthistorydjPage(navCtrl, navParams, http, appsetting, loadingCtrl, payPal, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.payPal = payPal;
        this.alertCtrl = alertCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.pastevntid = navParams.get("eventid");
        this.getpayhistory(this.pastevntid);
    }
    PaymenthistorydjPage.prototype.getpayhistory = function (eventid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        Loader.present().then(function () {
            var data = {
                eventid: eventid,
                djid: Userid,
                requestype: 1,
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/paymenthist', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    _this.payhistdata = data.data;
                    _this.totalpay = 0;
                    for (var _i = 0, _a = _this.payhistdata; _i < _a.length; _i++) {
                        var dat = _a[_i];
                        if (dat.ClubgoerRequest.refund_status == 0) {
                            _this.totalpay = parseInt(_this.totalpay) + parseInt(dat.ClubgoerRequest.djshare);
                        }
                    }
                }
                else {
                    _this.payhistdata = [];
                    _this.totalpay = 0;
                }
            });
        });
    };
    PaymenthistorydjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismissAll();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 3500);
        }
    };
    PaymenthistorydjPage.prototype.refundnow = function (clubgoerqstid, money, song, artist, adminemail) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //var userdata = JSON.parse(localStorage.getItem("USER_DATA"));
        var data = {
            id: clubgoerqstid,
        };
        var description = song + ", " + artist;
        var Serialized = this.serializeObj(data);
        this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'Af3HzSUz5a2jlbLEK1bJqLYRekJEGam9p0kdR7Pqn5WdPqvHWQ2D5BOkdbnjX7RS6AOF5KkxOMm_Kv9k'
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                var payment = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["c" /* PayPalPayment */](money, 'USD', description, 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function () {
                    _this.http.post(_this.appsetting.myGlobalVar + 'subscriptions/refund', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        if (response.isSucess == "true") {
                            _this.payhistdata = response.data;
                            _this.totalpay = 0;
                            for (var _i = 0, _a = _this.payhistdata; _i < _a.length; _i++) {
                                var dat = _a[_i];
                                if (dat.ClubgoerRequest.refund_status == 0) {
                                    _this.totalpay = parseInt(_this.totalpay) + parseInt(dat.ClubgoerRequest.djshare);
                                }
                            }
                            var alertr_1 = _this.alertCtrl.create({
                                title: 'Subscribed',
                                subTitle: response.msg,
                                buttons: ['ok']
                            });
                            alertr_1.present();
                            setTimeout(function () { return alertr_1.dismiss(); }, 3500);
                        }
                        else {
                            var alert_2 = _this.alertCtrl.create({
                                title: 'Subscribed',
                                subTitle: response.msg,
                                buttons: ['ok']
                            });
                            alert_2.present();
                            setTimeout(function () { return alert_2.dismiss(); }, 3500);
                        }
                    });
                }, function () {
                    // Error or render dialog closed without being successful
                });
            }, function () {
                // Error in configuration
            });
        }, function () {
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    };
    PaymenthistorydjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    PaymenthistorydjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymenthistorydjPage');
    };
    return PaymenthistorydjPage;
}());
PaymenthistorydjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-paymenthistorydj',template:/*ion-inline-start:"/Volumes/D/Vikki/clubgoer2/src/pages/paymenthistorydj--/paymenthistorydj.html"*/'<!--\n  Generated template for the PaymenthistorydjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>Payment History</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<div class="past">\n		<ion-list>\n	      <ion-item *ngFor="let pay of payhistdata; let i = index">\n	        	<div class="right-sec">\n	        		<button [ngStyle]="{\'background-color\': pay?.ClubgoerRequest.buttoncolor}" *ngIf="pay?.ClubgoerRequest.buttoncol" ion-button (click)="refundnow(pay?.ClubgoerRequest.id,pay?.ClubgoerRequest.djshare,pay?.ClubgoerRequest.songname,pay?.ClubgoerRequest.artist_name,pay?.ClubgoerRequest.adminemail)">Refund</button> \n							<button [ngStyle]="{\'background-color\': pay?.ClubgoerRequest.buttoncolor}" ion-button *ngIf="!pay?.ClubgoerRequest.buttoncol">Refunded</button> \n							<p>${{pay?.ClubgoerRequest.djshare}}</p>\n	        	</div>\n	        	<h2>{{pay?.Clubgoer.complete_name}}</h2>\n	        	<h3>{{pay?.Event.event_name}}</h3>\n	        	<p>{{pay?.ClubgoerRequest.songname}} ,{{pay?.ClubgoerRequest.artist_name}} </p>\n	      </ion-item>\n	  </ion-list>\n	</div>\n\n	<div class="total" *ngIf="totalpay>0">\n		<h2>Total Received</h2>\n		<h3>${{totalpay}}</h3>\n	</div>\n\n	<div class="unshow" *ngIf="payhistdata?.length == 0">\n		<h3> No payment available</h3>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/Vikki/clubgoer2/src/pages/paymenthistorydj--/paymenthistorydj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["a" /* PayPal */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], PaymenthistorydjPage);

//# sourceMappingURL=paymenthistorydj.js.map

/***/ })

});
//# sourceMappingURL=0.js.map