webpackJsonp([1],{

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipdetaildjPageModule", function() { return MembershipdetaildjPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__membershipdetaildj__ = __webpack_require__(808);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MembershipdetaildjPageModule = (function () {
    function MembershipdetaildjPageModule() {
    }
    return MembershipdetaildjPageModule;
}());
MembershipdetaildjPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__membershipdetaildj__["a" /* MembershipdetaildjPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__membershipdetaildj__["a" /* MembershipdetaildjPage */]),
        ],
    })
], MembershipdetaildjPageModule);

//# sourceMappingURL=membershipdetaildj.module.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipdetaildjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subscribedjupdate_subscribedjupdate__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { LogindjPage } from '../logindj/logindj';


/**
 * Generated class for the MembershipdetaildjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MembershipdetaildjPage = (function () {
    function MembershipdetaildjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
    }
    MembershipdetaildjPage.prototype.getsubsdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                userid: userid,
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'users/getsubscription', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                //console.log(data);
                Loader.dismiss();
                if (data.isSucess == "true") {
                    _this.subscrip = data.data;
                }
                else {
                    var alertr_1 = _this.alertCtrl.create({
                        //title: 'Requests',
                        subTitle: 'Membership cancelled',
                        buttons: ['ok']
                    });
                    alertr_1.present();
                    setTimeout(function () { return alertr_1.dismiss(); }, 3500);
                }
            });
        });
    };
    MembershipdetaildjPage.prototype.updatememb = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__subscribedjupdate_subscribedjupdate__["a" /* SubscribedjupdatePage */]);
    };
    MembershipdetaildjPage.prototype.cancelmembr = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Please confirm",
            subTitle: 'Do you want cancel your Membership?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.cancel1();
                        return true;
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        confirm.dismiss();
                        return false;
                    }
                }
            ]
        });
        confirm.present();
    };
    MembershipdetaildjPage.prototype.cancel1 = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(JSON.parse(localStorage.getItem("USER_DATA")));
        var userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var subscription_id = JSON.parse(localStorage.getItem("USER_DATA")).subscription_id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                userid: userid,
                subscriptionid: subscription_id
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'subscriptions/stripecancel', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                Loader.dismiss();
                if (response.isSuccess == "true") {
                    localStorage.removeItem("USER_DATA");
                    localStorage.setItem("USER_DATA", JSON.stringify(response.data));
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Subscription',
                        subTitle: response.msg,
                        buttons: ['ok']
                    });
                    alert_1.present();
                    setTimeout(function () { return alert_1.dismiss(); }, 3500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                }
                else {
                    var alertr_2 = _this.alertCtrl.create({
                        title: 'Subscription',
                        subTitle: response.msg,
                        buttons: ['ok']
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 3500);
                }
            });
        });
    };
    MembershipdetaildjPage.prototype.updatemembr = function () {
        var alertr = this.alertCtrl.create({
            subTitle: 'Your plan not yet expired !',
            buttons: ['ok']
        });
        alertr.present();
        setTimeout(function () { return alertr.dismiss(); }, 3500);
    };
    MembershipdetaildjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    MembershipdetaildjPage.prototype.ionViewCanEnter = function () {
        this.getsubsdata();
    };
    MembershipdetaildjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_2 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 2500);
        }
    };
    MembershipdetaildjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MembershipdetaildjPage');
    };
    return MembershipdetaildjPage;
}());
MembershipdetaildjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-membershipdetaildj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/membershipdetaildj--/membershipdetaildj.html"*/'<!--\n  Generated template for the MembershipdetaildjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color="black">\n        <button ion-button menuToggle>\n				  <ion-icon style="color:#fff;" name="menu"></ion-icon>\n				</button>\n        <ion-title>Membership Detail</ion-title>\n        <div class="logo">\n            <img src="assets/img/rlogo.png">\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding style="background: #f2f2f2;">\n    <!-- <div class="content-sec card"> -->\n    <ion-card class="card_sec">\n\n        <ion-card-header>\n            <h1 *ngIf="subscrip?.User?.subscription_status==1">Amount Paid</h1>\n        </ion-card-header>\n        <ion-card-content class="cardbody">\n            <div class="pay">\n                <span *ngIf="subscrip?.User?.subscription_rate">${{subscrip?.User?.subscription_rate}}</span>\n                <span *ngIf="!subscrip?.User?.subscription_rate">$30</span>\n            </div>\n\n            <h2>Subscription</h2>\n            <h3 style="border-right:1px solid #ccc;" *ngIf="subscrip?.User?.subscription_start_date">Start Date : {{subscrip?.User?.subscription_start_date | date:\'MM-dd-yyyy \'}}</h3>\n            <h3 *ngIf="subscrip?.User?.subscription_end_date">End Date : {{subscrip?.User?.subscription_end_date | date:\'MM-dd-yyyy\'}}</h3>\n            <h3 *ngIf="!subscrip?.User?.subscription_start_date">Not started yet</h3>\n            <p class="valid">Valid for <span>One Month (Recurring)</span></p>\n\n        </ion-card-content>\n        <div class="btnsec">\n            <!-- <button ion-button color="dark" (click)="updatemembr()" *ngIf="subscrip?.User?.subscription_status==1">Update Billing Information</button> -->\n            <button ion-button color="red" (click)="updatememb()" *ngIf="subscrip?.User?.subscription_status==0">Buy Membership</button>\n            <button ion-button color="red" (click)="cancelmembr()" *ngIf="subscrip?.User?.subscription_status==1">Cancel membership</button>\n        </div>\n    </ion-card>\n    <!-- </div> -->\n\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/membershipdetaildj--/membershipdetaildj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], MembershipdetaildjPage);

//# sourceMappingURL=membershipdetaildj.js.map

/***/ })

});
//# sourceMappingURL=1.js.map