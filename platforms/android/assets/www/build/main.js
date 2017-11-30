webpackJsonp([48],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Http, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var CommonProvider = (function () {
    function CommonProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        console.log('Hello CommonProvider Provider');
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
    }
    /* serialise form*/
    CommonProvider.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return CommonProvider;
}());
CommonProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]])
], CommonProvider);

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariableProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the VariableProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var VariableProvider = (function () {
    function VariableProvider(http) {
        this.http = http;
        this.baseUrl = "http://priyank.crystalbiltech.com/dj/api/";
        // public SIGNUP_API="users/registration"; 
        this.SIGNIN_API = "users/fblogin";
        console.log('Hello VariableProvider Provider');
    }
    return VariableProvider;
}());
VariableProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], VariableProvider);

//# sourceMappingURL=variable.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntercodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__songrequests_songrequests__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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
 * Generated class for the EntercodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EntercodePage = (function () {
    function EntercodePage(navCtrl, navParams, http, appsetting, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.data = '';
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }
    EntercodePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EntercodePage.prototype.pad = function (d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    };
    EntercodePage.prototype.entercode = function (form) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var User = JSON.parse(localStorage.getItem("USER_DATA"));
        var userid = User.id;
        var d = new Date();
        var mm = ("0" + (d.getMonth() + 1)).slice(-2);
        var day = ("0" + (d.getDate())).slice(-2);
        var date = d.getFullYear() + "-" + mm + "-" + day;
        this.Loading.present();
        var data = {
            userid: userid,
            djcode: form.value.code,
            date: date
        };
        console.log(data);
        console.log("vikki");
        var Serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'events/entercode', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.Loading.dismiss();
            if (data.isSucess == "true") {
                // console.log("vikrantDjcode");
                // console.log(data);
                // console.log("data Success");
                _this.showConfirm(data.data);
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Dj Confirmation',
                    subTitle: data.msg,
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 1500);
            }
        });
    };
    EntercodePage.prototype.showConfirm = function (event) {
        var _this = this;
        console.log(event.Event.event_date);
        var d = new Date(event.Event.event_date);
        console.log(__WEBPACK_IMPORTED_MODULE_6_moment__(d).format('DD/MM/YYYY'));
        var dateformat = __WEBPACK_IMPORTED_MODULE_6_moment__(d).format('MM/DD/YYYY');
        // this.dateformat
        var confirm = this.alertCtrl.create({
            title: 'Dj Confirmation',
            message: 'This is for the ' + dateformat + ', ' + event.Event.event_name + ', ' + event.Dj.complete_name,
            buttons: [
                {
                    text: 'Yes',
                    cssClass: 'ion-button alertDanger round',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__songrequests_songrequests__["a" /* SongrequestsPage */], {
                            eventid: event.Event.id,
                            djid: event.Dj.id
                        });
                        // console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Cancel',
                    cssClass: 'alertDanger',
                    handler: function () {
                        // console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    EntercodePage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_2 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 1500);
        }
    };
    return EntercodePage;
}());
EntercodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-entercode',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/entercode/entercode.html"*/'<!--\n  Generated template for the EntercodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>Dj Code</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><ion-icon><img width="15px" src="assets/img/rlogo.png"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n  <div class="djcode_outer">\n  <div class="logo"><img src="assets/img/logo.png"></div>\n<div class="form_sec">\n<form #codeForm="ngForm" (ngSubmit)="entercode(codeForm)" novalidate>\n  <ion-list>\n  <ion-item>\n    <ion-input type="text" placeholder="Enter Code" [(ngModel)]="data.code"  name=\'code\' required #code="ngModel"></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="code.errors && (code.dirty || code.touched)">\n        <div [hidden]="!code.errors.required" >\n         Dj code is required\n        </div>\n    </div>\n  </ion-label>\n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" color="yellow" [disabled]="!codeForm.form.valid" type="submit" style="text-transform: uppercase;" ion-button>Submit</button>\n</div>\n</form>\n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/entercode/entercode.html"*/,
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'dateFormatPipe',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], EntercodePage);

//# sourceMappingURL=entercode.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongrequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requestsongplay_requestsongplay__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voteup_voteup__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shoutout_shoutout__ = __webpack_require__(132);
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
 * Generated class for the SongrequestsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SongrequestsPage = (function () {
    function SongrequestsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.djid = navParams.get("djid");
        this.eventid = navParams.get("eventid");
    }
    SongrequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SongrequestsPage');
    };
    SongrequestsPage.prototype.voteupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__voteup_voteup__["a" /* VoteupPage */], {
            eventid: this.eventid,
            djid: this.djid
        });
    };
    SongrequestsPage.prototype.requestsongplayPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__requestsongplay_requestsongplay__["a" /* RequestsongplayPage */], {
            eventid: this.eventid,
            djid: this.djid
        });
    };
    SongrequestsPage.prototype.shoutoutPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__shoutout_shoutout__["a" /* ShoutoutPage */], {
            eventid: this.eventid,
            djid: this.djid
        });
    };
    return SongrequestsPage;
}());
SongrequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-songrequests',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/songrequests/songrequests.html"*/'<!--\n  Generated template for the SongrequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Requests</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n\n  <div class="homemain">\n    <div class="logo"><img src="assets/img/logo.png"></div>\n    <div class="home_list">\n    <ion-item no-lines item-right>\n      <button (click)="requestsongplayPage()" ion-button secondary color="" class="gredient" block>Request a Song<ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-item>\n    <ion-item no-lines>\n      <button (click)="voteupPage()" ion-button secondary class="gredient" block>Vote Up Requests<ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-item>\n    <ion-item no-lines>\n      <button (click)="shoutoutPage()" ion-button secondary class="gredient" block>Request Shout Out <ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-item>\n  </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/songrequests/songrequests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], SongrequestsPage);

//# sourceMappingURL=songrequests.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsongplayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payinfo_payinfo__ = __webpack_require__(67);
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
 * Generated class for the RequestsongplayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RequestsongplayPage = (function () {
    function RequestsongplayPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.flag = false;
        this.djid = navParams.get("djid");
        this.eventid = navParams.get("eventid");
        this.showreqtype();
    }
    RequestsongplayPage.prototype.setflag = function (i) {
        this.flag = true;
        if (this.requestp != null) {
            // console.log(this.testn);
            if (this.testn == false) {
                if (i == 0) {
                    this.minprice = this.requestp.TipOptionPrice.playnow;
                }
                else if (i == 1) {
                    this.minprice = this.requestp.TipOptionPrice.guareteedplay;
                }
                else if (i == 2) {
                    this.minprice = this.requestp.TipOptionPrice.possiblyplay;
                }
            }
            else {
                if (i == 0) {
                    this.minprice = this.requestp[0].TipOption.price;
                }
                else if (i == 1) {
                    this.minprice = this.requestp[1].TipOption.price;
                }
                else if (i == 2) {
                    this.minprice = this.requestp[2].TipOption.price;
                }
            }
        }
    };
    RequestsongplayPage.prototype.setAlert = function (i) {
        if (i == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Play Now Info.',
                subTitle: 'Lorem ipsum dolor sit amet.',
                buttons: ['ok']
            });
            alert_1.present();
        }
        if (i == 1) {
            var alert_2 = this.alertCtrl.create({
                title: 'Guaranteed Info.',
                subTitle: 'Lorem ipsum dolor sit amet.',
                buttons: ['ok']
            });
            alert_2.present();
        }
        if (i == 2) {
            var alert_3 = this.alertCtrl.create({
                title: 'Possibly Play Info.',
                subTitle: 'Lorem ipsum dolor sit amet.',
                buttons: ['ok']
            });
            alert_3.present();
        }
        //setTimeout(()=>alert.dismiss(),3500);
    };
    RequestsongplayPage.prototype.requestsong = function (form) {
        // console.log(form.value);
        // console.log("Hello");
        // console.log(this.minprice);
        if (form.value.requeststype == undefined) {
            var alert_4 = this.alertCtrl.create({
                title: 'Request a song',
                subTitle: 'Please select request option',
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 1500);
        }
        else {
            if (form.value.tipamt != "") {
                if (parseInt(form.value.tipamt) < this.minprice) {
                    var alert_5 = this.alertCtrl.create({
                        title: 'Request a song',
                        subTitle: 'Tip amount should be greater than minimum tip',
                    });
                    alert_5.present();
                    setTimeout(function () { return alert_5.dismiss(); }, 1500);
                    return false;
                }
            }
            var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
            if (form.value.tipamt == undefined) {
                this.price = this.minprice;
            }
            else if (parseInt(form.value.tipamt) <= this.minprice || parseInt(form.value.tipamt) == NaN) {
                this.price = this.minprice;
            }
            else {
                this.price = form.value.tipamt;
            }
            var postdata = {
                userid: user_id,
                djid: this.djid,
                eventid: this.eventid,
                artistname: form.value.artistname,
                songname: form.value.name,
                requestype: 1,
                requestsoption: form.value.requeststype,
                price: this.price
            };
            console.log(postdata);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__payinfo_payinfo__["a" /* PayinfoPage */], {
                postdata: postdata
            });
        }
    };
    RequestsongplayPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    RequestsongplayPage.prototype.showreqtype = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var postdata = {
            userid: user_id,
            djid: this.djid,
            eventid: this.eventid
        };
        this.Loading.present();
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'tipOptions/showreqtype', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.Loading.dismiss();
            if (data.isSucess == "true") {
                _this.request = data.data;
                if (data.data2.length != undefined) {
                    _this.requestp = data.data;
                    _this.testn = true;
                }
                else {
                    _this.requestp = data.data2;
                    _this.testn = false;
                }
            }
            else {
                var alert_6 = _this.alertCtrl.create({
                    title: 'Request a song',
                    subTitle: data.msg,
                });
                alert_6.present();
                setTimeout(function () { return alert_6.dismiss(); }, 1500);
            }
        });
    };
    RequestsongplayPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_7 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection'
            });
            alert_7.present();
            setTimeout(function () { return alert_7.dismiss(); }, 1500);
        }
    };
    RequestsongplayPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad RequestsongplayPage');
    };
    return RequestsongplayPage;
}());
RequestsongplayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-requestsongplay',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/requestsongplay/requestsongplay.html"*/'<!--\n  Generated template for the RequestsongplayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Requests a Song</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content style="background:#242424;">\n  <h4 class="reqsong_title">Request a Song!</h4>\n  <form #requestsongForm="ngForm" novalidate > \n  <div class="req_song">\n    <ion-list>\n      <ion-item>\n        <ion-input placeholder="Enter Song Name" [(ngModel)]="data.name" name="name" #name=\'ngModel\' required></ion-input>\n      </ion-item>\n      <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="name.errors && (name.dirty || name.touched)">\n          <div [hidden]="!name.errors.required" >\n              Field is required\n          </div>\n        </div>\n      </ion-label>\n      <ion-item>\n      <ion-input placeholder="Enter Artist Name" [(ngModel)]="data.artistname" name="artistname" #artistname=\'ngModel\' required></ion-input>\n      </ion-item>\n      <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="artistname.errors && (artistname.dirty || artistname.touched)">\n          <div [hidden]="!artistname.errors.required">\n              Field is required\n          </div>\n        </div>\n      </ion-label>\n    </ion-list>\n  </div>\n\n <div class="select_radio">\n    <ion-list no-lines radio-group [(ngModel)]="requeststype" name="requeststype">\n      <ion-item *ngFor="let req of request; let i = index">\n        <ion-label>{{req?.TipOption.name}}</ion-label>\n        <ion-radio item-left value="{{req?.TipOption.id}}" (click)="setflag(i)"></ion-radio>\n          <ion-icon ios="ios-alert" md="ios-alert" class="alertbullet" color="black" item-right name="information-circle" (click)="setAlert(i)"></ion-icon>\n      </ion-item>\n    </ion-list>\n    <ion-item style="background:#000;" [hidden]="!flag">\n        <ion-input style="padding-left:58px;" type="tel" pattern="[0-9]+" placeholder="Enter Tip Amount" [(ngModel)]="data.tipamt" name="tipamt" #tipamt=\'ngModel\'></ion-input>\n        <ion-label class="minprice" >(Min ${{minprice}})</ion-label>\n    </ion-item>\n    <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="tipamt.errors && (tipamt.dirty || tipamt.touched)">\n          <div [hidden]="!tipamt.errors.pattern" >\n              Only number allowed\n          </div>\n        </div>\n      </ion-label>\n    <div class="centerbutton2">\n      <button class="custom_btn" (click)="requestsong(requestsongForm)" [disabled]="!requestsongForm.form.valid"  color="yellow" type="submit" style="text-transform: uppercase;" ion-button round>REQUEST AND TIP NOW</button>\n    </div>\n  </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/requestsongplay/requestsongplay.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], RequestsongplayPage);

//# sourceMappingURL=requestsongplay.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the VoteupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VoteupPage = (function () {
    function VoteupPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.djid = navParams.get("djid");
        this.eventid = navParams.get("eventid");
        this.userrequests();
    }
    VoteupPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    VoteupPage.prototype.userrequests = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var User = JSON.parse(localStorage.getItem("USER_DATA"));
        var userid = User.id;
        var postdata = {
            userid: userid,
            djid: this.djid,
            eventid: this.eventid
        };
        this.Loading.present();
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/userrequests', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.Loading.dismiss();
            if (data.isSucess == "true") {
                _this.requests = data.data;
                console.log(_this.requests);
                console.log("vikki");
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Dj Details',
                    subTitle: data.msg,
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 1500);
            }
        });
    };
    VoteupPage.prototype.likeusrrequest = function (id, likem, index) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var User = JSON.parse(localStorage.getItem("USER_DATA"));
        var userid = User.id;
        this.Loading.present();
        var postdata = {
            userid: userid,
            djid: this.djid,
            requestid: id,
            eventid: this.eventid,
            like: likem
        };
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/likeusrrequest', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.Loading.dismiss();
            if (data.isSucess == "true") {
                //this.requests=data.data;
                _this.requests[index].ClubgoerRequest.like = data.like;
                if (data.msg == "Unliked successfully") {
                    _this.requests[index].RequestLike.length--;
                }
                else {
                    _this.requests[index].RequestLike.length++;
                }
                var alert_2 = _this.alertCtrl.create({
                    title: 'Voteup Request',
                    subTitle: data.msg,
                });
                alert_2.present();
                setTimeout(function () { return alert_2.dismiss(); }, 1500);
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Voteup Request',
                    subTitle: data.msg,
                });
                alert_3.present();
                setTimeout(function () { return alert_3.dismiss(); }, 1500);
            }
        });
    };
    VoteupPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_4 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 1500);
        }
    };
    return VoteupPage;
}());
VoteupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-voteup',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/voteup/voteup.html"*/'<!--\n  Generated template for the VoteupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Voteup Request</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n  <div class="voteup">\n    <ion-list no-lines>\n      <ion-item *ngFor="let request of requests; let i = index">\n        <h2>{{request?.ClubgoerRequest.songname}}</h2>\n        <p>{{request?.TipOption.name}}</p>\n        <ion-note item-end="" class="note note-ios"> \n          <button color="light" clear small ion-button icon-left  (click)="likeusrrequest(request?.ClubgoerRequest.id,request?.ClubgoerRequest.like,i)">\n            {{request?.RequestLike.length}}\n            <ion-icon *ngIf="request?.ClubgoerRequest.like>0" color="yellow" style="font-size:13px; padding-left:8px;" name="thumbs-up"></ion-icon>\n            <ion-icon *ngIf="request?.ClubgoerRequest.like==0" color="yellow" style="font-size:13px; padding-left:8px;" name="thumbs-down"></ion-icon>\n          </button> \n        </ion-note>\n        <ion-note item-end="" class="note time">${{request?.ClubgoerRequest.tip_amount}}</ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/voteup/voteup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], VoteupPage);

//# sourceMappingURL=voteup.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoutoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payinfo_payinfo__ = __webpack_require__(67);
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
 * Generated class for the ShoutoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShoutoutPage = (function () {
    function ShoutoutPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.djid = navParams.get("djid");
        this.eventid = navParams.get("eventid");
    }
    ShoutoutPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ShoutoutPage.prototype.shoutout = function (form) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var User = JSON.parse(localStorage.getItem("USER_DATA"));
        var userid = User.id;
        var postdata = {
            userid: userid,
            djid: this.djid,
            eventid: this.eventid,
            name: form.value.name,
            type: form.value.shouttype,
            requestype: 3,
            price: parseInt(form.value.tipamt)
        };
        // if(form.value.tipamt=='')
        // {
        //   let alert = this.alertCtrl.create({
        //             title: 'Shoutout',
        //             subTitle: 'Please fill the tip amount',
        //           });
        //             alert.present();
        //         setTimeout(()=>alert.dismiss(),1500);
        // }else if(form.value.tipamt==0){
        // var serialized = this.serializeObj(postdata);
        // this.http.post(this.appsetting.myGlobalVar + 'users/shoutoutmake', serialized, options).map(res => res.json()).subscribe(data => {
        // 	this.Loading.dismiss();
        //   if(data.isSucess == "true"){
        //          let alert = this.alertCtrl.create({
        //             title: 'Shoutout',
        //             subTitle: data.msg,
        //           });
        //             alert.present();
        //         setTimeout(()=>alert.dismiss(),1500);
        //         this.navCtrl.push(HomePage);
        //   }else{
        //         let alert = this.alertCtrl.create({
        //             title: 'Shoutout',
        //             subTitle: data.msg,
        //           });
        //             alert.present();
        //         setTimeout(()=>alert.dismiss(),1500);
        //   }
        // })
        // }
        // else
        if (form.value.tipamt < 2 || form.value.tipamt == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'Shoutout',
                subTitle: 'Tip amount should be greater than 1',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__payinfo_payinfo__["a" /* PayinfoPage */], {
                postdata: postdata
            });
        }
    };
    ShoutoutPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_2 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 1500);
        }
    };
    return ShoutoutPage;
}());
ShoutoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shoutout',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/shoutout/shoutout.html"*/'<!--\n  Generated template for the ShoutoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Shout Out</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n  <div class="shoutout_outer">\n  <div class="logo"><img src="assets/img/logo.png"></div>\n<div class="form_sec">\n  <form #shoutoutForm="ngForm" novalidate > \n  <div class="form_secinn">\n  <ion-list>\n\n <ion-item>\n    <ion-input type="text" [(ngModel)]="data.name" name="name"  placeholder="Name" #name=\'ngModel\' required></ion-input>\n </ion-item>\n <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="name.errors && (name.dirty || name.touched)">\n       <div [hidden]="!name.errors.required" >\n         Field is required\n        </div>\n    </div>\n </ion-label>\n  <ion-item>\n    <ion-input type="text" placeholder="Shoutout Type" [(ngModel)]="data.shouttype" name="shouttype" #shouttype=\'ngModel\' required></ion-input>\n  </ion-item>\n  <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="shouttype.errors && (shouttype.dirty || shouttype.touched)">\n       <div [hidden]="!shouttype.errors.required" >\n         Field is required\n        </div>\n    </div>\n  </ion-label>\n  <ion-item>\n    <ion-input type="tel" placeholder="Tip Amount" pattern="[0-9]+" [(ngModel)]="data.tipamt" name="tipamt" #tipamt=\'ngModel\' required></ion-input>\n  </ion-item>\n  <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="tipamt.errors && (tipamt.dirty || tipamt.touched)">\n       <div [hidden]="!tipamt.errors.required" >\n              Field is required\n        </div>\n        <div [hidden]="!tipamt.errors.pattern" >\n              Only number allowed\n        </div>\n    </div>\n  </ion-label>\n  \n</ion-list>\n</div>\n<div class="centerbutton">\n   <button class="custom_btn" (click)="shoutout(shoutoutForm)" [disabled]="!shoutoutForm.form.valid" color="yellow" style="text-transform: uppercase;" ion-button round>Request Shout Out</button>\n</div>\n</form>\n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/shoutout/shoutout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ShoutoutPage);

//# sourceMappingURL=shoutout.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DjsdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(26);
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
 * Generated class for the DjsdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DjsdetailsPage = (function () {
    function DjsdetailsPage(navCtrl, navParams, http, app, appsetting, loadingCtrl, alertCtrl, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.sanitizer = sanitizer;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.djid = navParams.get("djid");
        this.showdjsdetail(this.djid);
    }
    DjsdetailsPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    DjsdetailsPage.prototype.showdjsdetail = function (djid) {
        var _this = this;
        this.Loading.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            userid: djid
        };
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/djdetails', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.Loading.dismiss();
            if (data.isSucess == "true") {
                _this.djs = data.data;
                console.log(data);
                //alert(JSON.stringify(data));
                console.log("result");
                console.log(_this.djs);
                if (data.data.User.audiourl == null || data.data.User.audiourl == undefined) {
                }
                else {
                    _this.utube = data.data.User.audiourl.replace("watch?v=", "embed/");
                    _this.videoUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.utube);
                }
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Dj Details',
                    subTitle: data.msg,
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 1500);
            }
        });
    };
    DjsdetailsPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_2 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 1500);
        }
    };
    return DjsdetailsPage;
}());
DjsdetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-djsdetails',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/djsdetails/djsdetails.html"*/'<!--\n  Generated template for the DjsdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="black">\n        <ion-title>Dj\'s Details</ion-title>\n        <ion-buttons end class="rbutton">\n            <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="djs_bg">\n    <div class="djdetails_sec">\n        <div class="full_img">\n            <img [src]="djs?.User.image">\n        </div>\n    </div>\n    <div class="padding titletxt">\n        <p style="font-size: 17px;"><span>Name : </span>{{djs?.User.complete_name}}</p>\n        <p style="font-size: 17px;"><span>E-mail : </span>{{djs?.User.email}}</p>\n        <p style="font-size: 17px;"><span>Dj Code : </span>{{djs?.User.djcode}}</p>\n        <p style="font-size: 17px;" *ngIf="djs?.User.biography"><span>Dj Biography : </span>{{djs?.User.biography}}</p>\n\n        <iframe *ngIf="videoUrl" width="320" height="315" [src]="videoUrl" frameborder="0"></iframe>\n    </div>\n    <h4>Upcoming Events</h4>\n    <div class="productscroll">\n\n        <ion-scroll scrollX="true" *ngIf="djs?.Event">\n            <div class="event_box" *ngIf="djs?.Event?.length == 0">\n                <h3 style="color: #fff;">No events available</h3>\n            </div>\n            <div class="event_box" *ngFor="let dj of djs?.Event">\n                <h5 style="font-size: 17px;">{{dj?.event_name}}</h5>\n                <div class="imageboxed">\n                    <img [src]="dj?.image">\n                </div>\n                <p style="font-size: 17px;">Venue name : {{dj?.venue_name}} <br>\n                    <!-- Event day : Sunday <br> -->\n                    Event time : &nbsp;&nbsp;&nbsp;&nbsp; {{dj?.event_date+" "+dj?.event_time | date:\'MM-dd-yyyy HH:mm a\'}} <br>&nbsp;&nbsp;&nbsp;&nbsp;to <br>{{dj?.start_event+" "+dj?.scheduled_start_time | date:\'MM-dd-yyyy HH:mm a\'}}</p>\n            </div>\n        </ion-scroll>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/djsdetails/djsdetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
], DjsdetailsPage);

//# sourceMappingURL=djsdetails.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DjslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__djsdetails_djsdetails__ = __webpack_require__(133);
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
 * Generated class for the DjslistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DjslistPage = (function () {
    function DjslistPage(navCtrl, navParams, http, app, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.showdjslist();
    }
    DjslistPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.showdjslist();
        console.log('refreshed');
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    DjslistPage.prototype.showdjslist = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var postdata = {
            userid: user_id
        };
        this.Loading.present();
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/showalldjs', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.Loading.dismiss();
            if (data.isSucess == "true") {
                _this.djs = data.data;
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Dj List',
                    subTitle: data.msg,
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 1500);
            }
        });
    };
    DjslistPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    DjslistPage.prototype.djdetailsPage = function (djid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__djsdetails_djsdetails__["a" /* DjsdetailsPage */], {
            djid: djid
        });
    };
    DjslistPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_2 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 1500);
        }
    };
    return DjslistPage;
}());
DjslistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-djslist',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/djslist/djslist.html"*/'<!--\n  Generated template for the DjslistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Dj\'s List</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n<ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content style="color:#878787;" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n</ion-refresher>\n  <div class="djslist">\n    <div class="imagebox" *ngFor="let dj of djs;">\n      <span (click)="djdetailsPage(dj.User.id)">\n      <img src="{{dj.User.image}}">\n      <div class="overlay"></div>\n      <h3>{{dj.User.complete_name}}</h3>\n      </span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/djslist/djslist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], DjslistPage);

//# sourceMappingURL=djslist.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the TermsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TermsPage = (function () {
    function TermsPage(navCtrl, navParams, http, appsetting, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }
    TermsPage.prototype.getterms = function () {
        var _this = this;
        this.Loader.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var postdata = {
            userid: user_id,
            position: "terms"
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/gettermclubgoer', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.Loader.dismiss();
            if (response.isSucess == "true") {
                _this.terms = response.data.Staticpage;
                console.log(response.data.Staticpage);
            }
            else {
                _this.terms = [];
            }
        });
    };
    TermsPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    TermsPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection'
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    return TermsPage;
}());
TermsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/terms/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#fff;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Terms & Conditions</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n    <div class="main">\n     <h3>Terms & Conditions</h3>\n     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>\n     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more .</p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/terms/terms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the PrivacyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PrivacyPage = (function () {
    function PrivacyPage(navCtrl, navParams, http, appsetting, actionSheetCtrl, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.getterms();
    }
    PrivacyPage.prototype.getterms = function () {
        var _this = this;
        this.Loader.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var postdata = {
            userid: user_id,
            position: "privacy"
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/getterms', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.Loader.dismiss();
            if (response.isSucess == "true") {
                _this.terms = response.data.Staticpage;
                console.log(response.data.Staticpage);
            }
            else {
                _this.terms = [];
            }
        });
    };
    PrivacyPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    PrivacyPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection'
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    return PrivacyPage;
}());
PrivacyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-privacy',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/privacy/privacy.html"*/'<!--\n  Generated template for the PrivacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#fff;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Privacy Policy</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n    <div class="main">\n     <h3>Privacy Policy</h3>\n     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>\n     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more .</p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/privacy/privacy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], PrivacyPage);

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotelikePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the VoteupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VotelikePage = (function () {
    function VotelikePage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.djid = navParams.get("djid");
        this.eventid = navParams.get("eventid");
        this.userrequests();
    }
    VotelikePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    VotelikePage.prototype.userrequests = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.Loading.present();
        var User = JSON.parse(localStorage.getItem("USER_DATA"));
        var userid = User.id;
        var postdata = {
            userid: userid
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/userrequestslike', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.Loading.dismiss();
            if (data.isSucess == "true") {
                _this.requests = data.data;
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Dj Details',
                    subTitle: data.msg,
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 1500);
            }
        });
    };
    VotelikePage.prototype.likeusrrequest = function (id, likem, index) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var User = JSON.parse(localStorage.getItem("USER_DATA"));
        var userid = User.id;
        var postdata = {
            userid: userid,
            djid: this.djid,
            requestid: id,
            eventid: this.eventid,
            like: likem
        };
        this.Loading.present();
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/likeusrrequest', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.Loading.dismiss();
            if (data.isSucess == "true") {
                //this.requests=data.data;
                _this.requests[index].ClubgoerRequest.like = data.like;
                if (data.msg == "Unliked successfully") {
                    _this.requests[index].RequestLike.length--;
                }
                else {
                    _this.requests[index].RequestLike.length++;
                }
                var alert_2 = _this.alertCtrl.create({
                    title: 'Voteup Request',
                    subTitle: data.msg,
                });
                alert_2.present();
                setTimeout(function () { return alert_2.dismiss(); }, 1500);
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Voteup Request',
                    subTitle: data.msg,
                });
                alert_3.present();
                setTimeout(function () { return alert_3.dismiss(); }, 1500);
            }
        });
    };
    VotelikePage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_4 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 1500);
        }
    };
    return VotelikePage;
}());
VotelikePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-votelike',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/votelike/votelike.html"*/'<!--\n  Generated template for the VoteupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Voteup Request</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n  <div class="voteup">\n    <ion-list no-lines>\n      <ion-item *ngFor="let request of requests; let i = index">\n        <h2>{{request?.ClubgoerRequest.songname}}</h2>\n        <p>{{request?.TipOption.name}}</p>\n        <ion-note item-end="" class="note note-ios"> \n          <button color="light" clear small ion-button icon-left>\n            {{request?.RequestLike.length}}\n            <ion-icon *ngIf="request?.ClubgoerRequest.like>0" color="yellow" style="font-size:13px; padding-left:8px;" name="thumbs-up"></ion-icon>\n            <ion-icon *ngIf="request?.ClubgoerRequest.like==0" color="yellow" style="font-size:13px; padding-left:8px;" name="thumbs-down"></ion-icon>\n          </button> \n        </ion-note>\n        <ion-note item-end="" class="note time">${{request?.ClubgoerRequest.tip_amount}}</ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/votelike/votelike.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], VotelikePage);

//# sourceMappingURL=votelike.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddeventdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editprofiledj_editprofiledj__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__ = __webpack_require__(36);
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
 * Generated class for the AddeventdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddeventdjPage = (function () {
    function AddeventdjPage(navCtrl, navParams, http, camera, actionSheetCtrl, loadingCtrl, toastCtrl, appsetting, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.appsetting = appsetting;
        this.alertCtrl = alertCtrl;
        this.taggel = true;
        this.data = {};
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
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
        // console.log(JSON.parse(localStorage.getItem("USER_DATA")).paypal_email);
    }
    AddeventdjPage.prototype.toggleDetails = function (taggel) {
        if (taggel) {
            this.taggel = false;
        }
        else {
            this.taggel = true;
        }
    };
    AddeventdjPage.prototype.addeventnow = function (addevent) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var imgsend = this.imgTosend;
        var dj_code = JSON.parse(localStorage.getItem("USER_DATA")).paypal_email;
        var subscribedj = JSON.parse(localStorage.getItem("USER_DATA")).subscription_status;
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
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 3500);
            this.Loader.dismiss();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__["a" /* SubscribedjPage */]);
        }
        else if (dj_code == null) {
            var alert_3 = this.alertCtrl.create({
                title: 'PayPal Account',
                subTitle: 'To add an event, please add your PayPal email address first.',
                buttons: ['ok']
            });
            alert_3.present();
            //setTimeout(()=>alert.dismiss(),3500);
            this.Loader.dismiss();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editprofiledj_editprofiledj__["a" /* EditprofiledjPage */]);
        }
        else if (imgsend == undefined) {
            var alert_4 = this.alertCtrl.create({
                title: 'Add event',
                subTitle: 'Please select image first',
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 3500);
            this.Loader.dismiss();
        }
        else if (addevent.value.minplay < 2 || addevent.value.mingrnt < 2 || addevent.value.minpossi < 2) {
            var alert_5 = this.alertCtrl.create({
                title: 'Add event',
                subTitle: 'Please enter tip amount greater than 1',
            });
            alert_5.present();
            setTimeout(function () { return alert_5.dismiss(); }, 3500);
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
                role: 'dj'
            };
            var Serialized = this.serializeObj(data);
            this.http.post(this.appsetting.myGlobalVar + 'events/addevent', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                if (response.status == 0) {
                    _this.Loader.dismiss();
                    var alert_6 = _this.alertCtrl.create({
                        title: 'Add event',
                        subTitle: response.msg,
                    });
                    alert_6.present();
                    setTimeout(function () { return alert_6.dismiss(); }, 2500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                }
                else {
                    _this.Loader.dismiss();
                    var alert_7 = _this.alertCtrl.create({
                        title: 'Add event',
                        subTitle: response.msg,
                    });
                    alert_7.present();
                    setTimeout(function () { return alert_7.dismiss(); }, 2500);
                }
            });
        }
    };
    AddeventdjPage.prototype.updateDueDate = function (curdt) {
        this.maxyear = curdt;
        this.data['eventenddt'] = curdt;
    };
    AddeventdjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AddeventdjPage.prototype.CameraAction = function () {
        var _this = this;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        var options = {
                            quality: 8,
                            sourceType: 1,
                            allowEdit: true,
                            targetWidth: 600,
                            targetHeight: 600,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageUri) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                            _this.imgTosend = imageUri;
                        }, function (err) {
                            alert(JSON.stringify(err));
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        var options = {
                            quality: 8,
                            sourceType: 0,
                            allowEdit: true,
                            targetWidth: 600,
                            targetHeight: 600,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            _this.imgTosend = imageData;
                        }, function (err) {
                            alert(JSON.stringify(err));
                        });
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
    AddeventdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_8 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_8.present();
            setTimeout(function () { return alert_8.dismiss(); }, 1500);
        }
    };
    AddeventdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddeventdjPage');
    };
    return AddeventdjPage;
}());
AddeventdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addeventdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/addeventdj/addeventdj.html"*/'<!--\n  Generated template for the AddeventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		<ion-navbar color="black">\n			<ion-title>Add Event</ion-title>\n	    	 <ion-buttons end class="rbutton">\n		        <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n		     </ion-buttons>\n		</ion-navbar>\n	</ion-header>\n	\n	\n	<ion-content>\n		<div class="imgsec">\n			<img [src]="logo">\n		</div>\n		<div class="form-sec">\n			<ion-grid>\n				<ion-row>\n					<ion-col>\n						\n						<form #addeventForm="ngForm" class="event-form">\n							<ion-col col-12>\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="text" placeholder="Venue name" [(ngModel)]="data.venuename" name="venuename" #venuename=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="venuename.errors && (venuename.dirty || venuename.touched)">\n											   <div [hidden]="!venuename.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n							</ion-col>\n								\n								<ion-col col-12>\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="text" placeholder="Venue address" [(ngModel)]="data.venueaddress" name="venueaddress" #venueaddress=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="venueaddress.errors && (venueaddress.dirty || venueaddress.touched)">\n											   <div [hidden]="!venueaddress.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n								<ion-col col-12>\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="text" placeholder="Event name" [(ngModel)]="data.eventname" name="eventname" #eventname=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventname.errors && (eventname.dirty || eventname.touched)">\n											   <div [hidden]="!eventname.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n								 <div class="colm">\n						<ion-col col-12>\n								<ion-row>\n							<ion-col col-6>\n									<ion-list>\n										<ion-item>\n												\n												<ion-datetime min="{{minyear}}" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY" [(ngModel)]="data.eventstartdt" (ngModelChange)="updateDueDate($event)" name="eventstartdt" placeholder="Event start date" #eventstartdt=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventstartdt.errors && (eventstartdt.dirty || eventstartdt.touched)">\n											   <div [hidden]="!eventstartdt.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n	\n							<ion-col col-6>\n									<ion-list>\n										<ion-item>\n												<ion-datetime min="{{maxyear}}" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY"  placeholder="Event end date" [(ngModel)]="data.eventenddt" name="eventenddt" #eventenddt=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventenddt.errors && (eventenddt.dirty || eventenddt.touched)">\n											   <div [hidden]="!eventenddt.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n							</ion-row>\n						</ion-col>\n					</div>\n						<div class="colm>">\n						<ion-col col-12>\n							<ion-row>\n							<ion-col col-6 class="padding0lft">\n									<ion-list>\n										<ion-item>\n												<ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Event start time" [(ngModel)]="data.eventsarttm" name="eventsarttm" #eventsarttm=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventsarttm.errors && (eventsarttm.dirty || eventsarttm.touched)">\n											   <div [hidden]="!eventsarttm.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n							<ion-col col-6 class="padding0rgt">\n									<ion-list>\n										<ion-item>\n												<ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Event end time" [(ngModel)]="data.eventendtm" name="eventendtm" #eventendtm=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventendtm.errors && (eventendtm.dirty || eventendtm.touched)">\n											   <div [hidden]="!eventendtm.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n						</ion-row>\n						</ion-col>\n					</div>\n					<ion-col col-12>\n						<ion-row>\n							<div class="tip" (click)="toggleDetails(taggel)">\n								<h3>Setup Tip Amounts</h3>\n								<button class="abc" ion-button icon-right>\n									<ion-icon name="arrow-down"></ion-icon>\n								</button>\n							</div>\n						</ion-row>\n					</ion-col>\n					<ion-col col-12 *ngIf="taggel">\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="tel" placeholder="Minimum amount for Play Now" min="2" [(ngModel)]="data.minplay" name="minplay" #minplay=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="minplay.errors && (minplay.dirty || minplay.touched)">\n											   <div [hidden]="!minplay.errors.required" >\n													 Field is required\n											   </div>\n												<div [hidden]="!minplay.errors.min" >\n													Minimum amount should be 2 \n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n							 \n								<ion-col col-12 *ngIf="taggel">\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="tel" placeholder="Minimum amount for Guaranteed Play" min="2" [(ngModel)]="data.mingrnt" name="mingrnt" #mingrnt=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="mingrnt.errors && (mingrnt.dirty || mingrnt.touched)">\n											   <div [hidden]="!mingrnt.errors.required" >\n												 Field is required\n												</div>\n												<div [hidden]="!mingrnt.errors.min" >\n													Minimum amount should be 2 \n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n								<ion-col col-12 *ngIf="taggel">\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="tel" placeholder="Minimum amount for Possibly Play" min="2" [(ngModel)]="data.minpossi" name="minpossi" #minpossi=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="minpossi.errors && (minpossi.dirty || minpossi.touched)">\n											   <div [hidden]="!minpossi.errors.required" >\n													 Field is required\n											   </div>\n											   <div [hidden]="!minpossi.errors.min" >\n													Minimum amount should be 2 \n											   </div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n							\n						<ion-col col-12>\n							<ion-row>\n								<div *ngIf="srcImage" class="upload_imgouter">\n									<img [src]="srcImage" [(ngModel)]="data.img" name="img" #img=\'ngModel\'/>\n								</div>\n								<!-- <ion-label  class="alert alert-danger" color="danger">\n									<div *ngIf="img.errors && (img.dirty || img.touched)">\n										   <div [hidden]="!img.errors.required" >\n											 Field is required\n										</div>\n									</div>\n								</ion-label> -->\n								<div class="file-upload">\n										<!-- <label for="upload" class="file-upload__label">Upload Image <span> <ion-icon name="camera"></ion-icon></span></label> -->\n										<!-- <button class="file-upload__input" ion-button full (click)="CameraAction()" style="background:none;"></button> -->\n										<label for="upload" class="file-upload__label">Upload Image <span> <ion-icon name="camera"></ion-icon></span></label>\n										<input id="upload" class="file-upload__input" (click)="CameraAction()" type="button" name="file-upload">  \n								</div>\n								\n							</ion-row>\n						</ion-col>\n						\n						<ion-col col-12>\n							<ion-row>\n								<div class="bottombtn">\n									<button ion-button type="submit" [disabled]="!addeventForm.form.valid"  (click)="addeventnow(addeventForm)">Save</button>\n								</div>\n							</ion-row>\n						</ion-col>\n					</form>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	\n	</ion-content>\n	\n	'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/addeventdj/addeventdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AddeventdjPage);

//# sourceMappingURL=addeventdj.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasteventdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymenthistorydj_paymenthistorydj__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requesthistorydj_requesthistorydj__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the PasteventdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PasteventdjPage = (function () {
    function PasteventdjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.pastevntid = navParams.get("eventid");
        this.pastevent(this.pastevntid);
    }
    PasteventdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasteventdjPage');
    };
    PasteventdjPage.prototype.pastevent = function (eventidd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                eventid: eventidd,
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/eventdetail', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.isSucess == "true") {
                    _this.pastevntdata = data.data;
                }
                else {
                }
            });
        });
    };
    PasteventdjPage.prototype.reqhs = function (eventid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__requesthistorydj_requesthistorydj__["a" /* RequesthistorydjPage */], {
            eventid: eventid
        });
    };
    PasteventdjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    PasteventdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    PasteventdjPage.prototype.payhs = function (eventid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__paymenthistorydj_paymenthistorydj__["a" /* PaymenthistorydjPage */], {
            eventid: eventid
        });
    };
    return PasteventdjPage;
}());
PasteventdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pasteventdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/pasteventdj/pasteventdj.html"*/'<!--\n  Generated template for the PasteventdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		\n			<ion-navbar color="black">\n				<ion-title>{{pastevntdata?.Event.event_name}}</ion-title>\n				<div class="logo">\n						\n					<img src="assets/img/rlogo.png">\n				</div>\n			</ion-navbar>\n		\n		</ion-header>\n		\n		\n		<ion-content>\n			<div class="imgsec">\n					<img [src]="pastevntdata?.Event.image">\n				<!-- <img src="assets/img/sbg.png"> -->\n			</div>\n			<div class="content-sec" padding>\n				<h1>{{pastevntdata?.Event.venue_name}}</h1>\n				<div class="content-text">\n					<h3>{{pastevntdata?.Event.event_name}}</h3>\n					<p>{{pastevntdata?.Event.event_date| date:\'MM-dd-yyyy\' }}</p>\n					<p>{{pastevntdata?.Event.event_time}} to {{pastevntdata?.Event.scheduled_start_time}}</p>\n				</div>\n				<div class="content-text">\n					<h3>Tip Amounts</h3>\n					<p>Play Now ${{pastevntdata?.TipOptionPrice.playnow}}</p>\n					<p>Guaranteed Play  ${{pastevntdata?.TipOptionPrice.guareteedplay}}</p>\n					<p>Possibly Play  ${{pastevntdata?.TipOptionPrice.possiblyplay}}</p>\n				</div>\n				<div class="bottom-sec">\n					<h3>Address</h3>\n					<p>{{pastevntdata?.Event.venue_address}}</p>\n				</div>\n				<div class="btn-sec">\n					<div class="top-btn">\n						<h3>Request History</h3>\n						<button ion-button (click)="reqhs(pastevntdata?.Event.id)">View</button>\n					</div>\n		\n					<div class="bottom-btn">\n						<h3>Payment History</h3>\n						<button ion-button (click)="payhs(pastevntdata?.Event.id)">View</button>\n					</div>\n				</div>\n		\n			</div>\n				</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/pasteventdj/pasteventdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], PasteventdjPage);

//# sourceMappingURL=pasteventdj.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymenthistorydjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__ = __webpack_require__(20);
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
            content: 'Please wait...'
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
                        _this.totalpay = parseInt(_this.totalpay) + parseInt(dat.ClubgoerRequest.djshare);
                    }
                }
                else {
                    _this.totalpay = 0;
                }
            });
        });
    };
    PaymenthistorydjPage.prototype.refundnow = function (clubgoerqstid, money, song, artist, adminemail) {
        var _this = this;
        //alert(clubgoerqstid+" "+money+" "+song+" "+artist+" "+adminemail);
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
            PayPalEnvironmentSandbox: 'AUQH6SoDJmAlXBpqHMZYv-TJPr5CVCpCqfbMCkLqKsQZBUdL1DIyIDcTqqx5jC4Y6FAUQH6SoDJmAlXBpqHMZYv-TJPr5CVCpCqfbMCkLqKsQZBUdL1DIyIDcTqqx5jC4Y9UEzcVhM_kAZWO'
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                var payment = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["c" /* PayPalPayment */](money, 'USD', description, 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function () {
                    _this.http.post(_this.appsetting.myGlobalVar + 'subscriptions/refund', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        if (response.isSucess == "true") {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                            var alertr_1 = _this.alertCtrl.create({
                                title: 'Subscribed',
                                subTitle: response.msg,
                            });
                            alertr_1.present();
                            setTimeout(function () { return alertr_1.dismiss(); }, 1500);
                        }
                        else {
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Subscribed',
                                subTitle: response.msg,
                            });
                            alert_1.present();
                            setTimeout(function () { return alert_1.dismiss(); }, 1500);
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
        selector: 'page-paymenthistorydj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/paymenthistorydj/paymenthistorydj.html"*/'<!--\n  Generated template for the PaymenthistorydjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>Payment History</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<div class="past">\n		<ion-list>\n	      <ion-item *ngFor="let pay of payhistdata; let i = index">\n	        	<div class="right-sec">\n	        		<button [ngStyle]="{\'background-color\': pay?.ClubgoerRequest.buttoncolor}" *ngIf="pay?.ClubgoerRequest.buttoncol" ion-button (click)="refundnow(pay?.ClubgoerRequest.id,pay?.ClubgoerRequest.djshare,pay?.ClubgoerRequest.songname,pay?.ClubgoerRequest.artist_name,pay?.ClubgoerRequest.adminemail)">Refund</button> \n							<button [ngStyle]="{\'background-color\': pay?.ClubgoerRequest.buttoncolor}" ion-button *ngIf="!pay?.ClubgoerRequest.buttoncol">Refund</button> \n							<p>${{pay?.ClubgoerRequest.djshare}}</p>\n	        	</div>\n	        	<h2>{{pay?.Clubgoer.complete_name}}</h2>\n	        	<h3>{{pay?.Event.event_name}}</h3>\n	        	<p>{{pay?.ClubgoerRequest.songname}} ,{{pay?.ClubgoerRequest.artist_name}} </p>\n	      </ion-item>\n	  </ion-list>\n	</div>\n	<div class="total" ng-if="\'totalpay>0\'">\n		<h2>Total Received</h2>\n		<h3>${{totalpay}}</h3>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/paymenthistorydj/paymenthistorydj.html"*/,
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

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesthistorydjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the RequesthistorydjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RequesthistorydjPage = (function () {
    function RequesthistorydjPage(navCtrl, navParams, http, appsetting, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.pastevntid = navParams.get("eventid");
        this.getreqhistory(this.pastevntid);
    }
    RequesthistorydjPage.prototype.getreqhistory = function (pastevntid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                eventid: pastevntid,
                djid: Userid,
                requestype: 1,
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/requesthist', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.isSucess == "true") {
                    _this.reqhistdata = data.data;
                    console.log(data);
                    console.log("pastevent");
                }
                else {
                }
            });
        });
    };
    RequesthistorydjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    RequesthistorydjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequesthistorydjPage');
    };
    return RequesthistorydjPage;
}());
RequesthistorydjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-requesthistorydj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/requesthistorydj/requesthistorydj.html"*/'<!--\n  Generated template for the RequesthistorydjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>Request History</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n <div class="past">\n	<ion-list>\n      <ion-item *ngFor="let req of reqhistdata; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3> {{req?.ClubgoerRequest.songname}} </h3>\n        	<p>{{req?.ClubgoerRequest.artist_name}}</p>\n        	<p>Requested By : {{req?.Clubgoer.complete_name}}</p>\n      </ion-item>\n      <div class="unshow" *ngIf="reqhistdata?.ClubgoerRequest?.length == 0">\n        <h3>No request available</h3>\n      </div>\n    </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/requesthistorydj/requesthistorydj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], RequesthistorydjPage);

//# sourceMappingURL=requesthistorydj.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OmniaclubeventdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manageeventsdj_manageeventsdj__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nameofeventsdj_nameofeventsdj__ = __webpack_require__(72);
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
 * Generated class for the OmniaclubeventdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OmniaclubeventdjPage = (function () {
    function OmniaclubeventdjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.buttonColor = '#b00101';
        this.upevntid = navParams.get("evntid");
        this.upevent(this.upevntid);
    }
    OmniaclubeventdjPage.prototype.upevent = function (eventidd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                eventid: eventidd,
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/eventdetail', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    console.log(data);
                    _this.upevntdata = data.data;
                    if (data.data.Event.active == 1) {
                        _this.buttonColor = "#328000";
                    }
                    console.log("upcoming event");
                }
                else {
                }
            });
        });
    };
    OmniaclubeventdjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    OmniaclubeventdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    OmniaclubeventdjPage.prototype.deletevnt = function (eventid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                eventid: eventid,
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/eventdelete', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.isSucess == "true") {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Manage event',
                        subTitle: data.msg
                    });
                    alert_2.present();
                    setTimeout(function () { return alert_2.dismiss(); }, 1500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__manageeventsdj_manageeventsdj__["a" /* ManageeventsdjPage */]);
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Manage event',
                        subTitle: data.msg
                    });
                    alert_3.present();
                    setTimeout(function () { return alert_3.dismiss(); }, 1500);
                }
            });
        });
    };
    OmniaclubeventdjPage.prototype.startevent = function (eventid, eventname) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                eventid: eventid,
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/eventstart', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.isSucess == "true") {
                    _this.buttonColor = "#328000";
                    var alert_4 = _this.alertCtrl.create({
                        title: 'Manage event',
                        subTitle: data.msg
                    });
                    alert_4.present();
                    setTimeout(function () { return alert_4.dismiss(); }, 2500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__nameofeventsdj_nameofeventsdj__["a" /* NameofeventsdjPage */], {
                        eventname: eventname
                    });
                }
                else {
                    var alert_5 = _this.alertCtrl.create({
                        title: 'Manage event',
                        subTitle: data.msg
                    });
                    alert_5.present();
                    setTimeout(function () { return alert_5.dismiss(); }, 2500);
                }
            });
        });
    };
    OmniaclubeventdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OmniaclubeventdjPage');
    };
    return OmniaclubeventdjPage;
}());
OmniaclubeventdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-omniaclubeventdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/omniaclubeventdj/omniaclubeventdj.html"*/'<!--\n  Generated template for the OmniaclubeventdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		\n			<ion-navbar color="black">\n				<ion-title>{{upevntdata?.Event.event_name}}</ion-title>\n				<div class="logo">\n					<img src="assets/img/rlogo.png">\n				</div>\n			</ion-navbar>\n		\n		</ion-header>\n		\n		\n		<ion-content>\n			<div class="imgsec" *ngIf="upevntdata?.Event.image">\n				<!-- <img src="assets/img/sbg.png"> -->\n				<img [src]="upevntdata?.Event.image">\n			</div>\n			<div class="content-sec" padding>\n				<h1>{{upevntdata?.Event.venue_name}}</h1>\n				<div class="content-text">\n					<h3>{{upevntdata?.Event.event_name}}</h3>\n					<p>{{upevntdata?.Event.event_date | date:\'MM-dd-yyyy\'}}</p>\n					<p>{{upevntdata?.Event.event_time}} to {{upevntdata?.Event.scheduled_start_time}} </p>\n				</div>\n				<div class="content-text">\n					<h3>Tip Amounts</h3>\n					<p>Play Now ${{upevntdata?.TipOptionPrice.playnow}}</p>\n					<p>Guaranteed Play ${{upevntdata?.TipOptionPrice.guareteedplay}}</p>\n					<p>Possibly Play ${{upevntdata?.TipOptionPrice.possiblyplay}}</p>\n				</div>\n				<div class="bottom-sec">\n					<h3>Address</h3>\n					<p>{{upevntdata?.Event.venue_address}}\n					</p>\n				</div>\n				<div class="btn-sec">\n					<button ion-button (click)="deletevnt(upevntdata?.Event.id)">Delete Event</button>\n					<button ion-button (click)="startevent(upevntdata?.Event.id,upevntdata?.Event.event_name)" [ngStyle]="{\'background-color\': buttonColor}" *ngIf="upevntdata?.Event.active!=1">Start Event</button>\n					<button ion-button [ngStyle]="{\'background-color\': buttonColor}" *ngIf="upevntdata?.Event.active==1">Event started</button>\n				</div>\n		\n			</div>\n		\n		</ion-content>\n		'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/omniaclubeventdj/omniaclubeventdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], OmniaclubeventdjPage);

//# sourceMappingURL=omniaclubeventdj.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaynowlistdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { EventsdjPage } from '../eventsdj/eventsdj';
/**
 * Generated class for the PlaynowlistdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PlaynowlistdjPage = (function () {
    function PlaynowlistdjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.eventid = navParams.get("eventid");
        this.eventname = navParams.get("eventname");
        //alert(this.eventid);
        if (this.eventname == undefined) {
            this.eventname = "Dj Admin Event";
        }
        this.playnowlist();
    }
    PlaynowlistdjPage.prototype.playnowlist = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                djid: Userid,
                eventid: _this.eventid,
                reqopt: 1
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/playnow', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    _this.playnowreq = data.data;
                }
                else {
                }
            });
        });
    };
    PlaynowlistdjPage.prototype.playimg = function (id, idd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                reqid: id,
                eventid: idd,
                id: Userid,
                reqoption: 1
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/topquereq', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    var alertr_1 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                    });
                    alertr_1.present();
                    setTimeout(function () { return alertr_1.dismiss(); }, 1500);
                    _this.playnowreq = data.data;
                    //this.navCtrl.push(EventsdjPage);
                }
                else {
                }
            });
        });
    };
    PlaynowlistdjPage.prototype.cross = function (id, idd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                reqid: id,
                eventid: idd,
                id: Userid,
                reqoption: 1
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/requeststatus', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    var alertr_2 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 1500);
                    _this.playnowreq = data.data;
                    //this.navCtrl.push(EventsdjPage);
                }
                else {
                }
            });
        });
    };
    PlaynowlistdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    PlaynowlistdjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    PlaynowlistdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaynowlistdjPage');
    };
    return PlaynowlistdjPage;
}());
PlaynowlistdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-playnowlistdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/playnowlistdj/playnowlistdj.html"*/'<!--\n  Generated template for the PlaynowlistdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>{{eventname}}</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="past">\n	<ion-list>\n      <ion-item *ngFor="let play of playnowreq; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3>{{play?.ClubgoerRequest.songname}} </h3>\n        	<p>{{play?.ClubgoerRequest.artist_name}}</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        			<img src="assets/img/playimg.png" *ngIf="play?.ClubgoerRequest.topque">\n					<img src="assets/img/playnow.png" (click)="playimg(play?.ClubgoerRequest.id,play?.Event.id)" *ngIf="!play?.ClubgoerRequest.topque">\n					<img src="assets/img/cross.png" (click)="cross(play?.ClubgoerRequest.id,play?.Event.id)">\n        		</div>\n        	</div>\n	  </ion-item>\n	  <div class="unshow" *ngIf="playnowreq?.length == 0">\n			<h3>No request available</h3>\n	  </div>\n		\n   	 \n      <!-- <ion-item>\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3> Kanzee Ft Emzzy E </h3>\n        	<p>artist name</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        		<img src="assets/img/playimg.png">\n        		<img src="assets/img/cross.png">\n        	</div>\n        	</div>\n			</ion-item>\n			<ion-item>\n				<div class="img-sec">\n					<img src="assets/img/headphn.png">\n				</div>\n				<h3> Kanzee Ft Emzzy E </h3>\n				<p>artist name</p>\n				<div class="img-right">\n					<div class="imgmain">\n					<img src="assets/img/playimg.png">\n					<img src="assets/img/cross.png">\n				</div>\n				</div>\n		</ion-item>\n		<ion-item>\n			<div class="img-sec">\n				<img src="assets/img/headphn.png">\n			</div>\n			<h3> Kanzee Ft Emzzy E </h3>\n			<p>artist name</p>\n			<div class="img-right">\n				<div class="imgmain">\n				<img src="assets/img/playimg.png">\n				<img src="assets/img/cross.png">\n			</div>\n			</div>\n	</ion-item>\n	<ion-item>\n		<div class="img-sec">\n			<img src="assets/img/headphn.png">\n		</div>\n		<h3> Kanzee Ft Emzzy E </h3>\n		<p>artist name</p>\n		<div class="img-right">\n			<div class="imgmain">\n			<img src="assets/img/playimg.png">\n			<img src="assets/img/cross.png">\n		</div>\n		</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item> -->\n  </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/playnowlistdj/playnowlistdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], PlaynowlistdjPage);

//# sourceMappingURL=playnowlistdj.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopqueuedjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the TopqueuedjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TopqueuedjPage = (function () {
    function TopqueuedjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.eventid = navParams.get("eventid");
        this.eventname = navParams.get("eventname");
        if (this.eventname == undefined) {
            this.eventname = "Dj Admin Event";
        }
        this.playnowlist();
    }
    TopqueuedjPage.prototype.playnowlist = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                djid: Userid,
                eventid: _this.eventid
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/alltopqueuelist', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    _this.playtopreq = data.data;
                }
                else {
                }
            });
        });
    };
    TopqueuedjPage.prototype.playimg = function (id, idd) {
        var _this = this;
        alert(id + " " + idd);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                reqid: id,
                eventid: idd,
                id: Userid
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/topquereq', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    var alertr_1 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                    });
                    alertr_1.present();
                    setTimeout(function () { return alertr_1.dismiss(); }, 1500);
                    _this.playtopreq = data.data;
                    //this.navCtrl.push(EventsdjPage);
                }
                else {
                }
            });
        });
    };
    TopqueuedjPage.prototype.cross = function (id, idd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                reqid: id,
                eventid: idd,
                id: Userid
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/requesttopstatus', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    var alertr_2 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 1500);
                    _this.playtopreq = data.data;
                    //this.navCtrl.push(EventsdjPage);
                }
                else {
                }
            });
        });
    };
    TopqueuedjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    TopqueuedjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaynowlistdjPage');
    };
    return TopqueuedjPage;
}());
TopqueuedjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-topqueuedj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/topqueuedj/topqueuedj.html"*/'<!--\n  Generated template for the PlaynowlistdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>{{eventname}}</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="past">\n	<ion-list>\n      <ion-item *ngFor="let play of playtopreq; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3>{{play?.ClubgoerRequest.songname}} </h3>\n        	<p>{{play?.ClubgoerRequest.artist_name}}</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        			<img src="assets/img/playnow.png" *ngIf="play?.ClubgoerRequest.topque">\n					 <img src="assets/img/playnow.png" (click)="playimg(play?.ClubgoerRequest.id,play?.Event.id)" *ngIf="!play?.ClubgoerRequest.topque"> -->\n					 <img src="assets/img/cross.png" (click)="cross(play?.ClubgoerRequest.id,play?.Event.id)">\n        		</div>\n        	</div>\n	  </ion-item> \n	   <div class="unshow" *ngIf="playtopreq?.length == 0">\n		<h3>No request available</h3>\n		</div>\n   	  \n      <!-- <ion-item>\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3> Kanzee Ft Emzzy E </h3>\n        	<p>artist name</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        		<img src="assets/img/playimg.png">\n        		<img src="assets/img/cross.png">\n        	</div>\n        	</div>\n			</ion-item>\n			<ion-item>\n				<div class="img-sec">\n					<img src="assets/img/headphn.png">\n				</div>\n				<h3> Kanzee Ft Emzzy E </h3>\n				<p>artist name</p>\n				<div class="img-right">\n					<div class="imgmain">\n					<img src="assets/img/playimg.png">\n					<img src="assets/img/cross.png">\n				</div>\n				</div>\n		</ion-item>\n		<ion-item>\n			<div class="img-sec">\n				<img src="assets/img/headphn.png">\n			</div>\n			<h3> Kanzee Ft Emzzy E </h3>\n			<p>artist name</p>\n			<div class="img-right">\n				<div class="imgmain">\n				<img src="assets/img/playimg.png">\n				<img src="assets/img/cross.png">\n			</div>\n			</div>\n	</ion-item>\n	<ion-item>\n		<div class="img-sec">\n			<img src="assets/img/headphn.png">\n		</div>\n		<h3> Kanzee Ft Emzzy E </h3>\n		<p>artist name</p>\n		<div class="img-right">\n			<div class="imgmain">\n			<img src="assets/img/playimg.png">\n			<img src="assets/img/cross.png">\n		</div>\n		</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item> -->\n  </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/topqueuedj/topqueuedj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], TopqueuedjPage);

//# sourceMappingURL=topqueuedj.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GauranteedjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the GauranteedjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GauranteedjPage = (function () {
    function GauranteedjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.eventid = navParams.get("eventid");
        this.eventname = navParams.get("eventname");
        //   alert(this.eventid);
        // alert(this.eventname);
        if (this.eventname == undefined) {
            this.eventname = "Dj Admin Event";
        }
        this.playnowlist();
    }
    GauranteedjPage.prototype.playnowlist = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                djid: Userid,
                eventid: _this.eventid,
                reqopt: 2
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/gauranteedplay', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    _this.playtopreq = data.data;
                    console.log(_this.playtopreq);
                }
                else {
                }
            });
        });
    };
    GauranteedjPage.prototype.playimg = function (id, idd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                reqid: id,
                eventid: idd,
                id: Userid,
                reqoption: 2
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/topquereq', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    var alertr_1 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                    });
                    alertr_1.present();
                    setTimeout(function () { return alertr_1.dismiss(); }, 1500);
                    _this.playtopreq = data.data;
                    //this.navCtrl.push(EventsdjPage);
                }
                else {
                }
            });
        });
    };
    GauranteedjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    GauranteedjPage.prototype.cross = function (id, idd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                reqid: id,
                eventid: idd,
                id: Userid,
                reqoption: 2
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/requesttopstatus', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    var alertr_2 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 1500);
                    _this.playtopreq = data.data;
                    //this.navCtrl.push(EventsdjPage);
                }
                else {
                }
            });
        });
    };
    GauranteedjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    GauranteedjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaynowlistdjPage');
    };
    return GauranteedjPage;
}());
GauranteedjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-gauranteedj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/gauranteedj/gauranteedj.html"*/'<!--\n  Generated template for the PlaynowlistdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>{{eventname}}</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n	<div class="past">\n	<ion-list>\n      <ion-item *ngFor="let play of playtopreq; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3>{{play?.ClubgoerRequest.songname}} </h3>\n        	<p>{{play?.ClubgoerRequest.artist_name}}</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        			<img src="assets/img/playnow.png" *ngIf="play?.ClubgoerRequest.topque">\n					<img src="assets/img/playnow.png" (click)="playimg(play?.ClubgoerRequest.id,play?.Event.id)" *ngIf="!play?.ClubgoerRequest.topque"> \n					<img src="assets/img/cross.png" (click)="cross(play?.ClubgoerRequest.id,play?.Event.id)">\n        		</div>\n        	</div>\n	  </ion-item>\n	    <div class="unshow" *ngIf="playtopreq?.length == 0">\n		 <h3> No request available</h3>\n		 </div>\n   	  \n      <!-- <ion-item>\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3> Kanzee Ft Emzzy E </h3>\n        	<p>artist name</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        		<img src="assets/img/playimg.png">\n        		<img src="assets/img/cross.png">\n        	</div>\n        	</div>\n			</ion-item>\n			<ion-item>\n				<div class="img-sec">\n					<img src="assets/img/headphn.png">\n				</div>\n				<h3> Kanzee Ft Emzzy E </h3>\n				<p>artist name</p>\n				<div class="img-right">\n					<div class="imgmain">\n					<img src="assets/img/playimg.png">\n					<img src="assets/img/cross.png">\n				</div>\n				</div>\n		</ion-item>\n		<ion-item>\n			<div class="img-sec">\n				<img src="assets/img/headphn.png">\n			</div>\n			<h3> Kanzee Ft Emzzy E </h3>\n			<p>artist name</p>\n			<div class="img-right">\n				<div class="imgmain">\n				<img src="assets/img/playimg.png">\n				<img src="assets/img/cross.png">\n			</div>\n			</div>\n	</ion-item>\n	<ion-item>\n		<div class="img-sec">\n			<img src="assets/img/headphn.png">\n		</div>\n		<h3> Kanzee Ft Emzzy E </h3>\n		<p>artist name</p>\n		<div class="img-right">\n			<div class="imgmain">\n			<img src="assets/img/playimg.png">\n			<img src="assets/img/cross.png">\n		</div>\n		</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item> -->\n  </ion-list>\n</div>\n</ion-content>\n\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/gauranteedj/gauranteedj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], GauranteedjPage);

//# sourceMappingURL=gauranteedj.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossiblydjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the PossiblydjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PossiblydjPage = (function () {
    function PossiblydjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.eventid = navParams.get("eventid");
        this.eventname = navParams.get("eventname");
        if (this.eventname == undefined) {
            this.eventname = "Dj Admin Event";
        }
        this.playnowlist();
    }
    PossiblydjPage.prototype.playnowlist = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                djid: Userid,
                eventid: _this.eventid,
                reqopt: 3
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/possiblyplay', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    _this.playtopreq = data.data;
                    console.log(_this.playtopreq);
                    console.log("vikrantHello");
                }
                else {
                }
            });
        });
    };
    PossiblydjPage.prototype.playimg = function (id, idd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                reqid: id,
                eventid: idd,
                id: Userid,
                reqoption: 3
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/topquereq', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    var alertr_1 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                    });
                    alertr_1.present();
                    setTimeout(function () { return alertr_1.dismiss(); }, 1500);
                    _this.playtopreq = data.data;
                    //this.navCtrl.push(EventsdjPage);
                }
                else {
                }
            });
        });
    };
    PossiblydjPage.prototype.cross = function (id, idd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                reqid: id,
                eventid: idd,
                id: Userid,
                reqoption: 3
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/requesttopstatus', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    var alertr_2 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 1500);
                    _this.playtopreq = data.data;
                    //this.navCtrl.push(EventsdjPage);
                }
                else {
                }
            });
        });
    };
    PossiblydjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    PossiblydjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    PossiblydjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaynowlistdjPage');
    };
    return PossiblydjPage;
}());
PossiblydjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-possiblydj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/possiblydj/possiblydj.html"*/'<!--\n  Generated template for the PlaynowlistdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>{{eventname}}</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="past">\n	<ion-list>\n      <ion-item *ngFor="let play of playtopreq; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3>{{play?.ClubgoerRequest.songname}} </h3>\n        	<p>{{play?.ClubgoerRequest.artist_name}}</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        			<img src="assets/img/playnow.png" *ngIf="play?.ClubgoerRequest.topque">\n					 <img src="assets/img/playnow.png" (click)="playimg(play?.ClubgoerRequest.id,play?.Event.id)" *ngIf="!play?.ClubgoerRequest.topque"> \n					<img src="assets/img/cross.png" (click)="cross(play?.ClubgoerRequest.id,play?.Event.id)">\n        		</div>\n        	</div>\n	  </ion-item>\n       <div class ="unshow" *ngIf="playtopreq?.length == 0">\n			<h3> No request available</h3>\n			</div>\n	   \n		<!--	<ion-item>\n				<div class="img-sec">\n					<img src="assets/img/headphn.png">\n				</div>\n				<h3> Kanzee Ft Emzzy E </h3>\n				<p>artist name</p>\n				<div class="img-right">\n					<div class="imgmain">\n					<img src="assets/img/playimg.png">\n					<img src="assets/img/cross.png">\n				</div>\n				</div>\n		</ion-item>\n		<ion-item>\n			<div class="img-sec">\n				<img src="assets/img/headphn.png">\n			</div>\n			<h3> Kanzee Ft Emzzy E </h3>\n			<p>artist name</p>\n			<div class="img-right">\n				<div class="imgmain">\n				<img src="assets/img/playimg.png">\n				<img src="assets/img/cross.png">\n			</div>\n			</div>\n	</ion-item>\n	<ion-item>\n		<div class="img-sec">\n			<img src="assets/img/headphn.png">\n		</div>\n		<h3> Kanzee Ft Emzzy E </h3>\n		<p>artist name</p>\n		<div class="img-right">\n			<div class="imgmain">\n			<img src="assets/img/playimg.png">\n			<img src="assets/img/cross.png">\n		</div>\n		</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item> -->\n  </ion-list>\n</div>\n</ion-content>\n\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/possiblydj/possiblydj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], PossiblydjPage);

//# sourceMappingURL=possiblydj.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteupdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { EventsdjPage } from '../eventsdj/eventsdj';
/**
 * Generated class for the PlaynowlistdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VoteupdjPage = (function () {
    function VoteupdjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.eventid = navParams.get("eventid");
        this.eventname = navParams.get("eventname");
        if (this.eventname == undefined) {
            this.eventname = "Dj Admin Event";
        }
        this.playnowlist();
    }
    VoteupdjPage.prototype.playnowlist = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                djid: Userid,
                eventid: _this.eventid
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/voteupreqt', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.isSucess == "true") {
                    _this.playnowreq = data.data;
                }
                else {
                    _this.playnowreq = [];
                }
            });
        });
    };
    VoteupdjPage.prototype.playimg = function (id, idd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                reqid: id,
                eventid: idd,
                id: Userid
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/Votetopquereq', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.isSucess == "true") {
                    var alertr_1 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                    });
                    alertr_1.present();
                    setTimeout(function () { return alertr_1.dismiss(); }, 1500);
                    _this.playnowreq = data.data;
                    //this.navCtrl.push(EventsdjPage);
                }
                else {
                }
            });
        });
    };
    VoteupdjPage.prototype.cross = function (id, idd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                reqid: id,
                eventid: idd,
                id: Userid
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/requeststatus', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    var alertr_2 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 1500);
                    _this.playnowreq = data.data;
                    //this.navCtrl.push(EventsdjPage);
                }
                else {
                }
            });
        });
    };
    VoteupdjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    VoteupdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaynowlistdjPage');
    };
    return VoteupdjPage;
}());
VoteupdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-voteupdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/voteupdj/voteupdj.html"*/'<!--\n  Generated template for the PlaynowlistdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>{{eventname}}</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="past">\n	<ion-list>\n      <ion-item *ngFor="let play of playnowreq; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3>{{play?.ClubgoerRequest.songname}} </h3>\n        	<p>{{play?.ClubgoerRequest.artist_name}}</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        			<img src="assets/img/playimg.png" *ngIf="play?.ClubgoerRequest.topque">\n					<img src="assets/img/playnow.png" (click)="playimg(play?.ClubgoerRequest.id,play?.Event.id)" *ngIf="!play?.ClubgoerRequest.topque">\n					<img src="assets/img/cross.png" (click)="cross(play?.ClubgoerRequest.id,play?.Event.id)">\n        		</div>\n        	</div>\n	  </ion-item>\n	   <div class="unshow" *ngIf="playnowreq?.length == 0">\n		  <h3> No request available</h3>\n	   </div>\n  </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/voteupdj/voteupdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], VoteupdjPage);

//# sourceMappingURL=voteupdj.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoutoutdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { EventsdjPage } from '../eventsdj/eventsdj';
/**
 * Generated class for the PlaynowlistdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShoutoutdjPage = (function () {
    function ShoutoutdjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.eventid = navParams.get("eventid");
        this.eventname = navParams.get("eventname");
        if (this.eventname == undefined) {
            this.eventname = "Dj Admin Event";
        }
        this.shoutoutreq();
    }
    ShoutoutdjPage.prototype.shoutoutreq = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                djid: Userid,
                eventid: _this.eventid
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/voteupreqt', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.isSucess == "true") {
                    _this.playnowreq = data.data;
                }
                else {
                    _this.playnowreq = [];
                }
            });
        });
    };
    ShoutoutdjPage.prototype.playimg = function (id, idd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                reqid: id,
                eventid: idd,
                id: Userid
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/Votetopquereq', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.isSucess == "true") {
                    var alertr_1 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                    });
                    alertr_1.present();
                    setTimeout(function () { return alertr_1.dismiss(); }, 1500);
                    _this.playnowreq = data.data;
                    //this.navCtrl.push(EventsdjPage);
                }
                else {
                }
            });
        });
    };
    ShoutoutdjPage.prototype.cross = function (id, idd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                reqid: id,
                eventid: idd,
                id: Userid
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/requeststatus', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    var alertr_2 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 1500);
                    _this.playnowreq = data.data;
                    //this.navCtrl.push(EventsdjPage);
                }
                else {
                }
            });
        });
    };
    ShoutoutdjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ShoutoutdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaynowlistdjPage');
    };
    return ShoutoutdjPage;
}());
ShoutoutdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shoutoutdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/shoutoutdj/shoutoutdj.html"*/'<!--\n  Generated template for the PlaynowlistdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>{{eventname}}</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<div class="past">\n	<ion-list>\n      <ion-item *ngFor="let play of playnowreq; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3>{{play?.ClubgoerRequest.songname}} </h3>\n        	<p>{{play?.ClubgoerRequest.artist_name}}</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        			<img src="assets/img/playimg.png" *ngIf="play?.ClubgoerRequest.topque">\n					<img src="assets/img/playnow.png" (click)="playimg(play?.ClubgoerRequest.id,play?.Event.id)" *ngIf="!play?.ClubgoerRequest.topque">\n					<img src="assets/img/cross.png" (click)="cross(play?.ClubgoerRequest.id,play?.Event.id)">\n        		</div>\n        	</div>\n	  </ion-item>\n	   <div class="unshow" *ngIf="playnowreq?.length == 0">\n		  <h3> No request available</h3>\n	   </div>\n  </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/shoutoutdj/shoutoutdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ShoutoutdjPage);

//# sourceMappingURL=shoutoutdj.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editprofiledj_editprofiledj__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__ = __webpack_require__(36);
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
 * Generated class for the EditeventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditeventPage = (function () {
    function EditeventPage(navCtrl, navParams, http, camera, actionSheetCtrl, loadingCtrl, toastCtrl, appsetting, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.appsetting = appsetting;
        this.alertCtrl = alertCtrl;
        this.taggel = true;
        this.data = {};
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
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
    EditeventPage.prototype.getevent = function (evid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            event_id: evid
        };
        var Serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'events/getevent', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response.data.Event.image);
            _this.srcImage = response.data.Event.image;
            _this.data = {
                'venuename': response.data.Event.venue_name,
                'venueaddress': response.data.Event.venue_address,
                'eventname': response.data.Event.event_name,
                'eventstartdt': response.data.Event.event_date,
                'eventenddt': response.data.Event.start_event,
                'eventsarttm': response.data.Event.event_time,
                'eventendtm': response.data.Event.scheduled_start_time,
                'img': response.data.Event.image,
                'minplay': response.data.TipOptionPrice.playnow,
                'mingrnt': response.data.TipOptionPrice.guareteedplay,
                'minpossi': response.data.TipOptionPrice.possiblyplay
            };
        });
    };
    EditeventPage.prototype.toggleDetails = function (taggel) {
        if (taggel) {
            this.taggel = false;
        }
        else {
            this.taggel = true;
        }
    };
    EditeventPage.prototype.addeventnow = function (addevent) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var imgsend = this.imgTosend;
        var dj_code = JSON.parse(localStorage.getItem("USER_DATA")).paypal_email;
        var subscribedj = JSON.parse(localStorage.getItem("USER_DATA")).subscription_status;
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
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 3500);
            this.Loader.dismiss();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__["a" /* SubscribedjPage */]);
        }
        else if (dj_code == null) {
            var alert_3 = this.alertCtrl.create({
                title: 'PayPal Account',
                subTitle: 'To add an event, please add your PayPal email address first.',
                buttons: ['ok']
            });
            alert_3.present();
            //setTimeout(()=>alert.dismiss(),3500);
            this.Loader.dismiss();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editprofiledj_editprofiledj__["a" /* EditprofiledjPage */]);
            // } else if (imgsend == undefined) {
            //   let alert = this.alertCtrl.create({
            //     title: 'Add event',
            //     subTitle: 'Please select image first',
            //   });
            //   alert.present();
            //   setTimeout(() => alert.dismiss(), 3500);
            //   this.Loader.dismiss();
        }
        else if (addevent.value.minplay < 2 || addevent.value.mingrnt < 2 || addevent.value.minpossi < 2) {
            var alert_4 = this.alertCtrl.create({
                title: 'Add event',
                subTitle: 'Please enter tip amount greater than 1',
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 3500);
            this.Loader.dismiss();
        }
        else {
            alert("load");
            // this.Loader.present();
            var data = {
                event_id: this.event_id,
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
                role: 'dj'
            };
            var Serialized = this.serializeObj(data);
            this.http.post(this.appsetting.myGlobalVar + 'events/editevent', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                alert(JSON.stringify(response));
                if (response.status == 0) {
                    _this.Loader.dismiss();
                    var alert_5 = _this.alertCtrl.create({
                        title: 'Add event',
                        subTitle: response.msg,
                    });
                    alert_5.present();
                    setTimeout(function () { return alert_5.dismiss(); }, 2500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                }
                else {
                    _this.Loader.dismiss();
                    var alert_6 = _this.alertCtrl.create({
                        title: 'Add event',
                        subTitle: response.msg,
                    });
                    alert_6.present();
                    setTimeout(function () { return alert_6.dismiss(); }, 2500);
                }
            });
        }
    };
    EditeventPage.prototype.updateDueDate = function (curdt) {
        this.maxyear = curdt;
        this.data['eventenddt'] = curdt;
    };
    EditeventPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditeventPage.prototype.CameraAction = function () {
        var _this = this;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        var options = {
                            quality: 8,
                            sourceType: 1,
                            allowEdit: true,
                            targetWidth: 600,
                            targetHeight: 600,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageUri) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                            _this.imgTosend = imageUri;
                        }, function (err) {
                            alert(JSON.stringify(err));
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        var options = {
                            quality: 8,
                            sourceType: 0,
                            allowEdit: true,
                            targetWidth: 600,
                            targetHeight: 600,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            _this.imgTosend = imageData;
                        }, function (err) {
                            alert(JSON.stringify(err));
                        });
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
    EditeventPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_7 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_7.present();
            setTimeout(function () { return alert_7.dismiss(); }, 1500);
        }
    };
    EditeventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditeventPage');
    };
    return EditeventPage;
}());
EditeventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editevent',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/editevent/editevent.html"*/'<!--\n  Generated template for the EditeventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="black">\n        <ion-title>Edit Event</ion-title>\n        <div class="logo">\n            <img src="assets/img/rlogo.png">\n        </div>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div class="imgsec">\n        <img [src]="logo">\n    </div>\n    <div class="form-sec">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <form #addeventForm="ngForm" class="event-form">\n                        <ion-col col-12>\n                            <ion-row>\n                                <ion-list>\n                                    <ion-item>\n                                        <ion-input type="text" placeholder="Venue name" [(ngModel)]="data.venuename" name="venuename" #venuename=\'ngModel\' required></ion-input>\n                                    </ion-item>\n                                    <ion-label class="alert alert-danger" color="danger">\n                                        <div *ngIf="venuename.errors && (venuename.dirty || venuename.touched)">\n                                            <div [hidden]="!venuename.errors.required">\n                                                Field is required\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-list>\n                            </ion-row>\n                        </ion-col>\n\n                        <ion-col col-12>\n                            <ion-row>\n                                <ion-list>\n                                    <ion-item>\n                                        <ion-input type="text" placeholder="Venue address" [(ngModel)]="data.venueaddress" name="venueaddress" #venueaddress=\'ngModel\' required></ion-input>\n                                    </ion-item>\n                                    <ion-label class="alert alert-danger" color="danger">\n                                        <div *ngIf="venueaddress.errors && (venueaddress.dirty || venueaddress.touched)">\n                                            <div [hidden]="!venueaddress.errors.required">\n                                                Field is required\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-list>\n                            </ion-row>\n                        </ion-col>\n                        <ion-col col-12>\n                            <ion-row>\n                                <ion-list>\n                                    <ion-item>\n                                        <ion-input type="text" placeholder="Event name" [(ngModel)]="data.eventname" name="eventname" #eventname=\'ngModel\' required></ion-input>\n                                    </ion-item>\n                                    <ion-label class="alert alert-danger" color="danger">\n                                        <div *ngIf="eventname.errors && (eventname.dirty || eventname.touched)">\n                                            <div [hidden]="!eventname.errors.required">\n                                                Field is required\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-list>\n                            </ion-row>\n                        </ion-col>\n                        <div class="colm">\n                            <ion-col col-12>\n                                <ion-row>\n                                    <ion-col col-6>\n                                        <ion-list>\n                                            <ion-item>\n\n                                                <ion-datetime min="{{minyear}}" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY" [(ngModel)]="data.eventstartdt" (ngModelChange)="updateDueDate($event)" name="eventstartdt" placeholder="Event start date" #eventstartdt=\'ngModel\' required></ion-datetime>\n                                            </ion-item>\n                                            <ion-label class="alert alert-danger" color="danger">\n                                                <div *ngIf="eventstartdt.errors && (eventstartdt.dirty || eventstartdt.touched)">\n                                                    <div [hidden]="!eventstartdt.errors.required">\n                                                        Field is required\n                                                    </div>\n                                                </div>\n                                            </ion-label>\n                                        </ion-list>\n                                    </ion-col>\n\n                                    <ion-col col-6>\n                                        <ion-list>\n                                            <ion-item>\n                                                <ion-datetime min="{{maxyear}}" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY" placeholder="Event end date" [(ngModel)]="data.eventenddt" name="eventenddt" #eventenddt=\'ngModel\' required></ion-datetime>\n                                            </ion-item>\n                                            <ion-label class="alert alert-danger" color="danger">\n                                                <div *ngIf="eventenddt.errors && (eventenddt.dirty || eventenddt.touched)">\n                                                    <div [hidden]="!eventenddt.errors.required">\n                                                        Field is required\n                                                    </div>\n                                                </div>\n                                            </ion-label>\n                                        </ion-list>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-col>\n                        </div>\n                        <div class="colm>">\n                            <ion-col col-12>\n                                <ion-row>\n                                    <ion-col col-6 class="padding0lft">\n                                        <ion-list>\n                                            <ion-item>\n                                                <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Event start time" [(ngModel)]="data.eventsarttm" name="eventsarttm" #eventsarttm=\'ngModel\' required></ion-datetime>\n                                            </ion-item>\n                                            <ion-label class="alert alert-danger" color="danger">\n                                                <div *ngIf="eventsarttm.errors && (eventsarttm.dirty || eventsarttm.touched)">\n                                                    <div [hidden]="!eventsarttm.errors.required">\n                                                        Field is required\n                                                    </div>\n                                                </div>\n                                            </ion-label>\n                                        </ion-list>\n                                    </ion-col>\n                                    <ion-col col-6 class="padding0rgt">\n                                        <ion-list>\n                                            <ion-item>\n                                                <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Event end time" [(ngModel)]="data.eventendtm" name="eventendtm" #eventendtm=\'ngModel\' required></ion-datetime>\n                                            </ion-item>\n                                            <ion-label class="alert alert-danger" color="danger">\n                                                <div *ngIf="eventendtm.errors && (eventendtm.dirty || eventendtm.touched)">\n                                                    <div [hidden]="!eventendtm.errors.required">\n                                                        Field is required\n                                                    </div>\n                                                </div>\n                                            </ion-label>\n                                        </ion-list>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-col>\n                        </div>\n                        <ion-col col-12>\n                            <ion-row>\n                                <div class="tip" (click)="toggleDetails(taggel)">\n                                    <h3>Setup Tip Amounts</h3>\n                                    <button class="abc" ion-button icon-right>\n									<ion-icon name="arrow-down"></ion-icon>\n								</button>\n                                </div>\n                            </ion-row>\n                        </ion-col>\n                        <ion-col col-12 *ngIf="taggel">\n                            <ion-row>\n                                <ion-list>\n                                    <ion-item>\n                                        <ion-input type="tel" placeholder="Minimum amount for Play Now" min="2" [(ngModel)]="data.minplay" name="minplay" #minplay=\'ngModel\' required></ion-input>\n                                    </ion-item>\n                                    <ion-label class="alert alert-danger" color="danger">\n                                        <div *ngIf="minplay.errors && (minplay.dirty || minplay.touched)">\n                                            <div [hidden]="!minplay.errors.required">\n                                                Field is required\n                                            </div>\n                                            <div [hidden]="!minplay.errors.min">\n                                                Minimum amount should be 2\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-list>\n                            </ion-row>\n                        </ion-col>\n\n                        <ion-col col-12 *ngIf="taggel">\n                            <ion-row>\n                                <ion-list>\n                                    <ion-item>\n                                        <ion-input type="tel" placeholder="Minimum amount for Guaranteed Play" min="2" [(ngModel)]="data.mingrnt" name="mingrnt" #mingrnt=\'ngModel\' required></ion-input>\n                                    </ion-item>\n                                    <ion-label class="alert alert-danger" color="danger">\n                                        <div *ngIf="mingrnt.errors && (mingrnt.dirty || mingrnt.touched)">\n                                            <div [hidden]="!mingrnt.errors.required">\n                                                Field is required\n                                            </div>\n                                            <div [hidden]="!mingrnt.errors.min">\n                                                Minimum amount should be 2\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-list>\n                            </ion-row>\n                        </ion-col>\n                        <ion-col col-12 *ngIf="taggel">\n                            <ion-row>\n                                <ion-list>\n                                    <ion-item>\n                                        <ion-input type="tel" placeholder="Minimum amount for Possibly Play" min="2" [(ngModel)]="data.minpossi" name="minpossi" #minpossi=\'ngModel\' required></ion-input>\n                                    </ion-item>\n                                    <ion-label class="alert alert-danger" color="danger">\n                                        <div *ngIf="minpossi.errors && (minpossi.dirty || minpossi.touched)">\n                                            <div [hidden]="!minpossi.errors.required">\n                                                Field is required\n                                            </div>\n                                            <div [hidden]="!minpossi.errors.min">\n                                                Minimum amount should be 2\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-list>\n                            </ion-row>\n                        </ion-col>\n\n                        <ion-col col-12>\n                            <ion-row>\n                                <div *ngIf="srcImage" class="upload_imgouter">\n                                    <img [src]="srcImage" [(ngModel)]="data.img" name="img" #img=\'ngModel\'>\n                                </div>\n                                <!-- <ion-label  class="alert alert-danger" color="danger">\n									<div *ngIf="img.errors && (img.dirty || img.touched)">\n										   <div [hidden]="!img.errors.required" >\n											 Field is required\n										</div>\n									</div>\n								</ion-label> -->\n                                <div class="file-upload">\n                                    <!-- <label for="upload" class="file-upload__label">Upload Image <span> <ion-icon name="camera"></ion-icon></span></label> -->\n                                    <!-- <button class="file-upload__input" ion-button full (click)="CameraAction()" style="background:none;"></button> -->\n                                    <label for="upload" class="file-upload__label">Upload Image <span> <ion-icon name="camera"></ion-icon></span></label>\n                                    <input id="upload" class="file-upload__input" (click)="CameraAction()" type="button" name="file-upload">\n                                </div>\n\n                            </ion-row>\n                        </ion-col>\n\n                        <ion-col col-12>\n                            <ion-row>\n                                <div class="bottombtn">\n                                    <button ion-button type="submit" [disabled]="!addeventForm.form.valid" (click)="addeventnow(addeventForm)">Save</button>\n                                </div>\n                            </ion-row>\n                        </ion-col>\n                    </form>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/editevent/editevent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], EditeventPage);

//# sourceMappingURL=editevent.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribedjupdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__termsdjsubs_termsdjsubs__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { LogindjPage } from '../logindj/logindj';
/**
 * Generated class for the SubscribedjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SubscribedjupdatePage = (function () {
    function SubscribedjupdatePage(navCtrl, navParams, events, appsetting, http, loadingCtrl, payPal, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.payPal = payPal;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.events.publish('role', 'dj');
        this.data = {
            checkbx: true,
        };
        this.subscribeplan();
    }
    SubscribedjupdatePage.prototype.subscribeplan = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userdata = JSON.parse(localStorage.getItem("USER_DATA"));
        var data = {
            role: userdata.role,
        };
        var Serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'subscriptions/getSubscription', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            if (response.isSuccess == "true") {
                _this.subscriv = response.data;
            }
        });
    };
    // setBackButtonAction(){
    //   //Write here wherever you wanna do
    //   localStorage.removeItem("USER_DATA");
    //   this.navCtrl.push(LogindjPage);
    // }
    SubscribedjupdatePage.prototype.subscribe = function (chkbx) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userdata = JSON.parse(localStorage.getItem("USER_DATA"));
        var data = {
            user_id: userdata.id,
            sub_id: this.subscriv.id
        };
        var Serialized = this.serializeObj(data);
        if (chkbx == false) {
            var alertr_1 = this.alertCtrl.create({
                title: '',
                subTitle: "Please accept the terms & conditions",
            });
            alertr_1.present();
            setTimeout(function () { return alertr_1.dismiss(); }, 2500);
        }
        else {
            this.payPal.init({
                PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
                PayPalEnvironmentSandbox: 'AUQH6SoDJmAlXBpqHMZYv-TJPr5CVCpCqfbMCkLqKsQZBUdL1DIyIDcTqqx5jC4Y6F9UEzcVhM_kAZWO'
            }).then(function () {
                // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                    var payment = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["c" /* PayPalPayment */](_this.subscriv.monthly_rate, 'USD', 'Dj subscription', 'sale');
                    _this.payPal.renderSinglePaymentUI(payment).then(function () {
                        _this.http.post(_this.appsetting.myGlobalVar + 'subscriptions/savesubscription', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            if (response.isSucess == "true") {
                                localStorage.removeItem('USER_DATA');
                                localStorage.setItem("USER_DATA", JSON.stringify(response.data.User));
                                // alert(response.data.User.role);
                                var alertr = _this.alertCtrl.create({
                                    title: 'Subscribed',
                                    subTitle: response.msg,
                                    buttons: ['ok']
                                });
                                alertr.present();
                                //setTimeout(()=>alertr.dismiss(),4500);
                                if (response.data.User.role == 'dj') {
                                    _this.events.publish('role', 'dj');
                                }
                                else {
                                    _this.events.publish('role', 'clubgoer');
                                }
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                            }
                            else {
                                var alert_1 = _this.alertCtrl.create({
                                    title: 'Subscribed',
                                    subTitle: response.msg,
                                    buttons: ['ok']
                                });
                                alert_1.present();
                                // setTimeout(()=>alert.dismiss(),4500);
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
        }
    };
    SubscribedjupdatePage.prototype.terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__termsdjsubs_termsdjsubs__["a" /* TermsdjsubsPage */]);
    };
    SubscribedjupdatePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SubscribedjupdatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubscribedjPage');
    };
    return SubscribedjupdatePage;
}());
SubscribedjupdatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subscribedjupdate',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/subscribedjupdate/subscribedjupdate.html"*/'<!--\n  Generated template for the SubscribedjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="black">\n		<ion-title>Subscription Plan</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n</ion-navbar>\n</ion-header>\n<ion-content padding>\n		<div class="content-sec">\n			<ion-grid>\n				<ion-row>\n					<ion-col>\n						<div class="top-sec">\n							<h4>{{subscriv?.plan_name}}</h4>\n							<p>{{subscriv?.description}}</p>\n						</div>\n						<div class="bottom-sec">\n							<h1>${{subscriv?.monthly_rate}}</h1>\n							<p>Recurring</p>\n							<h1 class="term">\n								<span>\n								<ion-checkbox color="dark" checked="true" [(ngModel)]="data.checkbx" name="checkbx" #checkbx=\'ngModel\'></ion-checkbox>\n							</span>\n							I accept the <a style="text-decoration: underline;" button (click)="terms()" clear item-right>terms and conditions.</a>\n							</h1>\n\n							<!-- <ion-item class="remember" style="border:none; width: 50%; float: left;">\n								<ion-label style="color:#000;">I accept the terms and conditions.</ion-label>\n								<ion-checkbox color="secondary" checked="true" [(ngModel)]="data.checkbx" name="checkbx" #checkbx=\'ngModel\'></ion-checkbox>\n							</ion-item> -->\n							<button ion-button (click)="subscribe(data.checkbx)">Subscribe</button>\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	</ion-content>	\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/subscribedjupdate/subscribedjupdate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["a" /* PayPal */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], SubscribedjupdatePage);

//# sourceMappingURL=subscribedjupdate.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the ChangepasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, navParams, http, appsetting, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.data = '';
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }
    ChangepasswordPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    ChangepasswordPage.prototype.changepass = function (form) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var User = JSON.parse(localStorage.getItem("USER_DATA"));
        var email = User.id;
        if (form.value.newpassword.indexOf(' ') >= 0) {
            var alert_2 = this.alertCtrl.create({
                title: 'Change password',
                subTitle: 'Space not allowed',
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 1500);
        }
        else if (form.value.newpassword == form.value.conpassword) {
            this.Loading.present();
            var data = {
                email: email,
                old_password: form.value.password,
                new_password: form.value.newpassword
            };
            console.log(data);
            var Serialized = this.serializeObj(data);
            console.log(data);
            this.http.post(this.appsetting.myGlobalVar + 'users/changepassword', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.Loading.dismiss();
                if (data.isSucess == "true") {
                    localStorage.removeItem("password");
                    localStorage.setItem("password", form.value.newpassword);
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Change password',
                        subTitle: data.msg,
                    });
                    alert_3.present();
                    setTimeout(function () { return alert_3.dismiss(); }, 1500);
                    //localStorage.clear();
                    localStorage.removeItem("fblogin");
                    localStorage.removeItem("USER_DATA");
                    localStorage.removeItem("facebook_pic");
                    localStorage.removeItem("facebook_login");
                    localStorage.removeItem("userid");
                    localStorage.removeItem("fblogin");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                }
                else {
                    var alert_4 = _this.alertCtrl.create({
                        title: 'Change password',
                        subTitle: data.msg,
                    });
                    alert_4.present();
                    setTimeout(function () { return alert_4.dismiss(); }, 1500);
                }
            });
        }
        else {
            var alert_5 = this.alertCtrl.create({
                title: 'Change password',
                subTitle: 'Password do not match',
            });
            alert_5.present();
            setTimeout(function () { return alert_5.dismiss(); }, 1500);
        }
    };
    ChangepasswordPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ChangepasswordPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    return ChangepasswordPage;
}());
ChangepasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-changepassword',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/changepassword/changepassword.html"*/'<ion-header class="headerbg">\n\n  <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Change Password</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="margintop" padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n<div class="login_outer">\n  <div class="logo"><img src="assets/img/logo.png"></div>\n<div class="form_sec">\n<form #changeForm="ngForm" (ngSubmit)="changepass(changeForm)" novalidate>\n  <ion-list>\n  <ion-item>\n    <ion-input type="password" minlength="5" placeholder="Enter your Old Password" [(ngModel)]="data.password"  name=\'password\' required #password="ngModel"></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="password.errors && (password.dirty || password.touched)">\n        <div [hidden]="!password.errors.required" >\n         Password is required\n        </div>\n    </div>\n    <div *ngIf="password.errors && (password.dirty || password.touched)" >\n       <div [hidden]="!password.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n   </ion-label>\n  <ion-item>\n    <ion-input type="password" minlength="5" placeholder="Enter your New Password" [(ngModel)]="data.newpassword" name=\'newpassword\' required #newpassword="ngModel" ></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)">\n       <div [hidden]="!newpassword.errors.required" >\n         Password is required\n        </div>\n    </div>\n    <div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)" >\n       <div [hidden]="!newpassword.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n  </ion-label>\n\n  <ion-item>\n    <ion-input type="password" minlength="5" placeholder="Confirm Password" [(ngModel)]="data.conpassword" name=\'conpassword\' required #conpassword="ngModel"></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="conpassword.errors && (conpassword.dirty || conpassword.touched)">\n       <div [hidden]="!conpassword.errors.required" >\n         Password is required\n        </div>\n    </div>\n    <div *ngIf="conpassword.errors && (conpassword.dirty || conpassword.touched)" >\n       <div [hidden]="!conpassword.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n   </ion-label>\n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" color="yellow" [disabled]="!changeForm.form.valid" style="text-transform: uppercase;" ion-button round>Submit</button>\n</div>\n</form>\n</div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/changepassword/changepassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ChangepasswordPage);

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionhstrydjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the TransactionhstrydjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TransactionhstrydjPage = (function () {
    function TransactionhstrydjPage(navCtrl, navParams, http, appsetting, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.paidinfo();
    }
    TransactionhstrydjPage.prototype.paidinfo = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                djid: Userid,
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/getpaymantdata', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                console.log("Transaction history");
                if (data.isSucess == "true") {
                    _this.transachistdata = data.data;
                }
                else {
                    _this.transachistdata = "";
                }
            });
        });
    };
    TransactionhstrydjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    TransactionhstrydjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionhstrydjPage');
    };
    return TransactionhstrydjPage;
}());
TransactionhstrydjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-transactionhstrydj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/transactionhstrydj/transactionhstrydj.html"*/'<!--\n  Generated template for the TransactionhstrydjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		<ion-toolbar color="black">\n				<button ion-button menuToggle>\n				  <ion-icon style="color:#fff;" name="menu"></ion-icon>\n				</button>\n				<ion-title>Transaction History</ion-title>\n				<div class="logo">\n					<img src="assets/img/rlogo.png">\n				</div>\n			</ion-toolbar>\n  <!-- <ion-navbar color="theme-header">\n    <ion-title>Transaction History</ion-title>\n    <div class="logo">\n    	<img src="../assets/img/rlogo.png">\n    </div>\n  </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content padding>     	\n	<div class="content-sec" *ngFor="let thist of transachistdata; let i = index">\n		<div class="top-sec">\n			<h2>{{thist?.Clubgoer.complete_name}}</h2>\n			<h3>{{thist?.Event.event_name}}</h3>\n			<p>{{thist?.ClubgoerRequest.songname}} ,{{thist?.ClubgoerRequest.songname}}</p>\n			<div class="right">\n				<p>${{thist?.ClubgoerRequest.total}}</p>\n			</div>\n		</div>\n		<div class="bottom-sec">\n			<p>Total payment</p>\n			<h2>You Received</h2>\n			<div class="right">\n				<p>${{thist?.ClubgoerRequest.total}}</p>\n				<h2>${{thist?.ClubgoerRequest.djshare}}</h2>\n			</div>\n		</div>\n	</div>\n	<div class="unshow" *ngIf="transachistdata?.length == 0">\n		  <h3> No transaction available</h3>\n	</div>\n	\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/transactionhstrydj/transactionhstrydj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], TransactionhstrydjPage);

//# sourceMappingURL=transactionhstrydj.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the HelpdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HelpdjPage = (function () {
    function HelpdjPage(navCtrl, navParams, http, appsetting, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.gethelp();
    }
    HelpdjPage.prototype.gethelp = function () {
        var _this = this;
        this.Loader.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var postdata = {
            userid: user_id,
            position: "help"
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/gethelpdj', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.Loader.dismiss();
            if (response.isSucess == "true") {
                _this.help = response.data.Staticpage;
                console.log(response.data.Staticpage);
            }
            else {
                _this.help = [];
            }
        });
    };
    HelpdjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    HelpdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection'
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    return HelpdjPage;
}());
HelpdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-helpdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/helpdj/helpdj.html"*/'<!--\n  Generated template for the HelpdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="black">\n        <button ion-button menuToggle>\n            <ion-icon style="color:#fff;" name="menu"></ion-icon>\n          </button>\n        <ion-title>Help</ion-title>\n        <div class="logo">\n          <img src="assets/img/rlogo.png">\n        </div>\n      </ion-navbar>\n\n</ion-header>\n\n\n\n    <ion-content padding>\n        <div class="main">\n         <h3>Help</h3>\n         <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>\n         <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more .</p>\n        </div>\n   </ion-content>\n       \n\n\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/helpdj/helpdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], HelpdjPage);

//# sourceMappingURL=helpdj.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepassworddjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logindj_logindj__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the ChangepasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChangepassworddjPage = (function () {
    function ChangepassworddjPage(navCtrl, navParams, http, appsetting, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.data = '';
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }
    ChangepassworddjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    ChangepassworddjPage.prototype.changepass = function (form) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var User = JSON.parse(localStorage.getItem("USER_DATA"));
        var email = User.id;
        if (form.value.newpassword.indexOf(' ') >= 0) {
            var alert_2 = this.alertCtrl.create({
                title: 'Change password',
                subTitle: 'Space not allowed',
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 1500);
        }
        else if (form.value.newpassword == form.value.conpassword) {
            this.Loading.present();
            var data = {
                email: email,
                old_password: form.value.password,
                new_password: form.value.newpassword
            };
            console.log(data);
            var Serialized = this.serializeObj(data);
            console.log(data);
            this.http.post(this.appsetting.myGlobalVar + 'users/changepassword', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.Loading.dismiss();
                if (data.isSucess == "true") {
                    localStorage.removeItem("password");
                    localStorage.setItem("password", form.value.newpassword);
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Change password',
                        subTitle: data.msg,
                    });
                    alert_3.present();
                    setTimeout(function () { return alert_3.dismiss(); }, 1500);
                    //localStorage.clear();
                    localStorage.removeItem("fblogin");
                    localStorage.removeItem("USER_DATA");
                    localStorage.removeItem("facebook_pic");
                    localStorage.removeItem("facebook_login");
                    localStorage.removeItem("userid");
                    localStorage.removeItem("fblogin");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__logindj_logindj__["a" /* LogindjPage */]);
                }
                else {
                    var alert_4 = _this.alertCtrl.create({
                        title: 'Change password',
                        subTitle: data.msg,
                    });
                    alert_4.present();
                    setTimeout(function () { return alert_4.dismiss(); }, 1500);
                }
            });
        }
        else {
            var alert_5 = this.alertCtrl.create({
                title: 'Change password',
                subTitle: 'Password do not match',
            });
            alert_5.present();
            setTimeout(function () { return alert_5.dismiss(); }, 1500);
        }
    };
    ChangepassworddjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ChangepassworddjPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    return ChangepassworddjPage;
}());
ChangepassworddjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-changepassworddj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/changepassworddj/changepassworddj.html"*/'<ion-header>\n    <ion-toolbar color="black">\n       <button ion-button menuToggle>\n         <ion-icon style="color:#fff;" name="menu"></ion-icon>\n       </button>\n       <ion-title>Change Password</ion-title>\n       <ion-buttons end class="rbutton">\n          <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n       </ion-buttons>\n   </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="margintop" padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n<div class="login_outer">\n  <div class="logo"><img src="assets/img/logo.png"></div>\n<div class="form_sec">\n<form #changeForm="ngForm" (ngSubmit)="changepass(changeForm)" novalidate>\n  <ion-list>\n  <ion-item>\n    <ion-input type="password" minlength="5" placeholder="Enter your Old Password" [(ngModel)]="data.password"  name=\'password\' required #password="ngModel"></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="password.errors && (password.dirty || password.touched)">\n        <div [hidden]="!password.errors.required" >\n         Password is required\n        </div>\n    </div>\n    <div *ngIf="password.errors && (password.dirty || password.touched)" >\n       <div [hidden]="!password.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n   </ion-label>\n  <ion-item>\n    <ion-input type="password" minlength="5" placeholder="Enter your New Password" [(ngModel)]="data.newpassword" name=\'newpassword\' required #newpassword="ngModel" ></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)">\n       <div [hidden]="!newpassword.errors.required" >\n         Password is required\n        </div>\n    </div>\n    <div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)" >\n       <div [hidden]="!newpassword.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n  </ion-label>\n\n  <ion-item>\n    <ion-input type="password" minlength="5" placeholder="Confirm Password" [(ngModel)]="data.conpassword" name=\'conpassword\' required #conpassword="ngModel"></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="conpassword.errors && (conpassword.dirty || conpassword.touched)">\n       <div [hidden]="!conpassword.errors.required" >\n         Password is required\n        </div>\n    </div>\n    <div *ngIf="conpassword.errors && (conpassword.dirty || conpassword.touched)" >\n       <div [hidden]="!conpassword.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n   </ion-label>\n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" color="red" [disabled]="!changeForm.form.valid" style="text-transform: uppercase;" ion-button round>Submit</button>\n</div>\n</form>\n</div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/changepassworddj/changepassworddj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ChangepassworddjPage);

//# sourceMappingURL=changepassworddj.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the TermsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TermsdjPage = (function () {
    function TermsdjPage(navCtrl, navParams, http, appsetting, actionSheetCtrl, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.getterms();
    }
    TermsdjPage.prototype.getterms = function () {
        var _this = this;
        this.Loader.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var postdata = {
            userid: user_id,
            position: "terms"
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/getterms', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.Loader.dismiss();
            if (response.isSucess == "true") {
                _this.terms = response.data.Staticpage;
                console.log(response.data.Staticpage);
            }
            else {
                _this.terms = [];
            }
        });
    };
    TermsdjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    TermsdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection'
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    return TermsdjPage;
}());
TermsdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-termsdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/termsdj/termsdj.html"*/'<!--\n  Generated template for the TermsPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#fff;" name="menu"></ion-icon>\n    </button>\n    <ion-title>{{terms?.title}}</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<!-- <ion-content padding style="background:#373737;">\n  <div class="termsdj">\n <p> {{terms?.description}}</p>\n  </div>\n</ion-content> -->\n<ion-content padding>\n    <div class="main">\n     <h3>Terms & Conditions</h3>\n     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>\n     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more .</p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/termsdj/termsdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], TermsdjPage);

//# sourceMappingURL=termsdj.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addeventdj_addeventdj__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manageeventsdj_manageeventsdj__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editprofiledj_editprofiledj__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__membershipdetaildj_membershipdetaildj__ = __webpack_require__(73);
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
 * Generated class for the EventsdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EventsdjPage = (function () {
    function EventsdjPage(navCtrl, appsetting, events, http, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.appsetting = appsetting;
        this.events = events;
        this.http = http;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (localStorage.getItem("USER_DATA") != null) {
            this.profile = JSON.parse(localStorage.getItem("USER_DATA"));
            if (this.profile.role == 'dj') {
                this.events.publish('role', 'dj');
            }
            else {
                this.events.publish('role', 'clubgoer');
            }
        }
    }
    EventsdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    EventsdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsdjPage');
    };
    EventsdjPage.prototype.addEvent = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            userid: JSON.parse(localStorage.getItem('USER_DATA')).id
        };
        var Serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'users/getuserbyid', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            console.log(response.data.User.subscription_status);
            if (response.data.User.paypal_email == undefined || response.data.User.paypal_email == null || response.data.User.paypal_email == "null" || response.data.User.paypal_email == "undefined") {
                var alert_2 = _this.alertCtrl.create({
                    title: 'PayPal Account ',
                    subTitle: 'To add an event, please add your PayPal email address first',
                    buttons: ['ok']
                });
                alert_2.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editprofiledj_editprofiledj__["a" /* EditprofiledjPage */]);
            }
            else if (response.data.User.subscription_status == 0 || response.data.User.subscription_status == "0") {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Subscription plan',
                    subTitle: 'To add an event, please buy Subscription plan',
                    buttons: ['ok']
                });
                alert_3.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__membershipdetaildj_membershipdetaildj__["a" /* MembershipdetaildjPage */]);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addeventdj_addeventdj__["a" /* AddeventdjPage */]);
            }
        });
    };
    EventsdjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EventsdjPage.prototype.ManageEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__manageeventsdj_manageeventsdj__["a" /* ManageeventsdjPage */]);
    };
    return EventsdjPage;
}());
EventsdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-eventsdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/eventsdj/eventsdj.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#fff;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Event</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n</ion-toolbar>\n</ion-header>\n\n<ion-content padding style="background-image: url(assets/img/loginbg.jpg); background-size: cover; background-position: center; top:0;">\n	<div class="content-sec">\n		<ion-grid>\n			<ion-row>\n				<div class="img-top">\n					<img src="assets/img/mainimg.png">\n				</div>\n			</ion-row>\n		</ion-grid>\n	</div>\n	<div class="btnsec">\n		<ion-grid>\n			<ion-row>\n				<div class="top-btn">\n					<button ion-button (click)="addEvent()">Add Event</button>\n				</div>\n				<div class="bottom-btn">\n					<button ion-button (click)="ManageEvent()">Manage Events</button>\n				</div>\n			</ion-row>\n		</ion-grid>\n	</div>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/eventsdj/eventsdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], EventsdjPage);

//# sourceMappingURL=eventsdj.js.map

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addeventdj/addeventdj.module": [
		457,
		47
	],
	"../pages/changepassword/changepassword.module": [
		481,
		46
	],
	"../pages/changepassworddj/changepassworddj.module": [
		484,
		45
	],
	"../pages/djsdetails/djsdetails.module": [
		450,
		44
	],
	"../pages/djslist/djslist.module": [
		451,
		43
	],
	"../pages/editevent/editevent.module": [
		469,
		42
	],
	"../pages/editprofiledj/editprofiledj.module": [
		456,
		41
	],
	"../pages/entercode/entercode.module": [
		448,
		40
	],
	"../pages/eventsdj/eventsdj.module": [
		474,
		39
	],
	"../pages/forgot/forgot.module": [
		455,
		38
	],
	"../pages/gauranteedj/gauranteedj.module": [
		463,
		37
	],
	"../pages/helpdj/helpdj.module": [
		483,
		36
	],
	"../pages/historicalrequests/historicalrequests.module": [
		449,
		35
	],
	"../pages/intro/intro.module": [
		488,
		0
	],
	"../pages/login/login.module": [
		480,
		34
	],
	"../pages/logindj/logindj.module": [
		476,
		33
	],
	"../pages/manageeventsdj/manageeventsdj.module": [
		470,
		32
	],
	"../pages/membershipdetaildj/membershipdetaildj.module": [
		473,
		31
	],
	"../pages/nameofeventsdj/nameofeventsdj.module": [
		467,
		30
	],
	"../pages/omniaclubeventdj/omniaclubeventdj.module": [
		468,
		29
	],
	"../pages/pasteventdj/pasteventdj.module": [
		460,
		28
	],
	"../pages/payinfo/payinfo.module": [
		443,
		27
	],
	"../pages/paymenthistorydj/paymenthistorydj.module": [
		458,
		26
	],
	"../pages/paymentinfo/paymentinfo.module": [
		487,
		25
	],
	"../pages/playnowlistdj/playnowlistdj.module": [
		461,
		24
	],
	"../pages/possiblydj/possiblydj.module": [
		464,
		23
	],
	"../pages/privacy/privacy.module": [
		453,
		22
	],
	"../pages/profile/profile.module": [
		441,
		21
	],
	"../pages/profileedit/profileedit.module": [
		442,
		20
	],
	"../pages/requesthistorydj/requesthistorydj.module": [
		459,
		19
	],
	"../pages/requestsongplay/requestsongplay.module": [
		444,
		18
	],
	"../pages/settings/settings.module": [
		486,
		17
	],
	"../pages/shoutout/shoutout.module": [
		446,
		16
	],
	"../pages/shoutoutdj/shoutoutdj.module": [
		466,
		15
	],
	"../pages/signindj/signindj.module": [
		478,
		14
	],
	"../pages/signup/signup.module": [
		479,
		13
	],
	"../pages/signupdj/signupdj.module": [
		477,
		12
	],
	"../pages/songrequests/songrequests.module": [
		447,
		11
	],
	"../pages/subscribedj/subscribedj.module": [
		475,
		10
	],
	"../pages/subscribedjupdate/subscribedjupdate.module": [
		472,
		9
	],
	"../pages/terms/terms.module": [
		452,
		8
	],
	"../pages/termsdj/termsdj.module": [
		485,
		7
	],
	"../pages/termsdjsubs/termsdjsubs.module": [
		471,
		6
	],
	"../pages/topqueuedj/topqueuedj.module": [
		462,
		5
	],
	"../pages/transactionhstrydj/transactionhstrydj.module": [
		482,
		4
	],
	"../pages/votelike/votelike.module": [
		454,
		3
	],
	"../pages/voteup/voteup.module": [
		445,
		2
	],
	"../pages/voteupdj/voteupdj.module": [
		465,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profileedit_profileedit__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entercode_entercode__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historicalrequests_historicalrequests__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, statusBar, loadingCtrl, events) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.events.publish('role', 'clubgoer');
    }
    HomePage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    HomePage.prototype.editprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profileedit_profileedit__["a" /* ProfileeditPage */]);
    };
    HomePage.prototype.entercodePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__entercode_entercode__["a" /* EntercodePage */]);
    };
    HomePage.prototype.historicalrequestsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__historicalrequests_historicalrequests__["a" /* HistoricalrequestsPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n  <div class="homemain">\n    <div class="logo"><img src="assets/img/logo.png"></div>\n    <div class="home_list">\n    <ion-item no-lines item-right>\n      <button (click)="entercodePage()"  ion-button secondary color="" block>Enter Dj Code <ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-item>\n    <ion-item no-lines>\n      <button  (click)="editprofile()" ion-button secondary  block>Edit Profile <ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-item>\n    <ion-item no-lines>\n      <button (click)="historicalrequestsPage()" ion-button secondary  block>Historical Requests <ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-item>\n  </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignindjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupdj_signupdj__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(59);
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
 * Generated class for the SignindjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignindjPage = (function () {
    function SignindjPage(navCtrl, navParams, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusBar = statusBar;
        console.log(this.navParams.get('back'));
        statusBar.hide();
        this.statusBar.overlaysWebView(true);
    }
    SignindjPage.prototype.playVideo = function () {
        //this.vid="http://priyank.crystalbiltech.com/dj/files/djjvideos.mp4";
        this.vid = "assets/video/djjvideos.mp4";
        this.video = document.getElementById("video-bg");
        this.video.src = this.vid;
        this.video.muted = true;
        this.video.loop = true;
        this.video.play();
    };
    SignindjPage.prototype.signup_dj = function () {
        localStorage.setItem('role', 'dj');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signupdj_signupdj__["a" /* SignupdjPage */]);
        this.video.pause();
    };
    SignindjPage.prototype.signup_clubgoer = function () {
        localStorage.setItem('role', 'clubgoer');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
        this.video.pause();
    };
    SignindjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignindjPage');
        this.playVideo();
    };
    return SignindjPage;
}());
SignindjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signindj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/signindj/signindj.html"*/'<!--\n  Generated template for the SignindjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Sign in</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n</ion-header> -->\n\n\n<ion-content swipeBackEnabled="false">\n	<div class="content-sec">\n			<div class="img-top">\n					<!-- <img src="assets/img/mainimg.png"> -->\n				</div>\n		<div class="btn-sec">\n				<button ion-button (click)="signup_clubgoer()">Get Started</button>\n				<h5>Ready to earn? <span (click)="signup_dj()">Sign up/in as a Dj</span></h5>\n		</div>\n	</div>\n\n			<video autoplay id="video-bg" poster="assets/img/videobg.jpg" webkit-playsinline playsinline loop>\n					<source src={{vid}} type="video/mp4">\n			</video>\n			\n	<!-- <div id="contentd">\n		<img src="http://priyank.crystalbiltech.com/dj/files/djlogin.gif">\n	</div> -->\n	 <!-- <div id="contentd" style="height:300px; width:100%;">\n			<video width="400" id="myVideo" class="video-js vjs-default-skin" webkit-playsinline playsinline>\n					<source src={{vid}} type="video/mp4">\n			</video>\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/signindj/signindj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]])
], SignindjPage);

//# sourceMappingURL=signindj.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribedjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__termsdjsubs_termsdjsubs__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { LogindjPage } from '../logindj/logindj';
/**
 * Generated class for the SubscribedjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SubscribedjPage = (function () {
    function SubscribedjPage(navCtrl, navParams, events, appsetting, http, loadingCtrl, payPal, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.payPal = payPal;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.events.publish('role', 'dj');
        this.data = {
            checkbx: true,
        };
        this.subscribeplan();
    }
    SubscribedjPage.prototype.subscribeplan = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userdata = JSON.parse(localStorage.getItem("USER_DATA"));
        var data = {
            role: userdata.role,
        };
        var Serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'subscriptions/getSubscription', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            if (response.isSuccess == "true") {
                _this.subscriv = response.data;
            }
        });
    };
    SubscribedjPage.prototype.setBackButtonAction = function () {
        //Write here wherever you wanna do
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
    };
    SubscribedjPage.prototype.subscribe = function (chkbx) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userdata = JSON.parse(localStorage.getItem("USER_DATA"));
        var data = {
            user_id: userdata.id,
            sub_id: this.subscriv.id
        };
        var Serialized = this.serializeObj(data);
        if (chkbx == false) {
            var alertr_1 = this.alertCtrl.create({
                title: '',
                subTitle: "Please accept the terms & conditions",
                buttons: ['ok']
            });
            alertr_1.present();
            setTimeout(function () { return alertr_1.dismiss(); }, 3500);
        }
        else {
            this.payPal.init({
                PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
                PayPalEnvironmentSandbox: 'AUQH6SoDJmAlXBpqHMZYv-TJPr5CVCpCqfbMCkLqKsQZBUdL1DIyIDcTqqx5jC4Y6F9UEzcVhM_kAZWO'
            }).then(function () {
                // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                    var payment = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["c" /* PayPalPayment */](_this.subscriv.monthly_rate, 'USD', 'Dj subscription', 'sale');
                    _this.payPal.renderSinglePaymentUI(payment).then(function () {
                        _this.http.post(_this.appsetting.myGlobalVar + 'subscriptions/savesubscription', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            if (response.isSucess == "true") {
                                // alert(JSON.stringify(response.data));
                                localStorage.removeItem('USER_DATA');
                                localStorage.setItem("USER_DATA", JSON.stringify(response.data.User));
                                console.log('role', response.data.User.role);
                                // alert(response.data.User.role);
                                var alertr = _this.alertCtrl.create({
                                    title: 'Subscribed',
                                    subTitle: response.msg,
                                    buttons: ['ok']
                                });
                                alertr.present();
                                //setTimeout(()=>alertr.dismiss(),4000);
                                if (response.data.User.role == 'dj') {
                                    _this.events.publish('role', 'dj');
                                }
                                else {
                                    _this.events.publish('role', 'clubgoer');
                                }
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                            }
                            else {
                                var alert_1 = _this.alertCtrl.create({
                                    title: 'Subscribed',
                                    subTitle: response.msg,
                                    buttons: ['ok']
                                });
                                alert_1.present();
                                //setTimeout(()=>alert.dismiss(),4000);
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
        }
    };
    SubscribedjPage.prototype.terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__termsdjsubs_termsdjsubs__["a" /* TermsdjsubsPage */]);
    };
    SubscribedjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SubscribedjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubscribedjPage');
    };
    return SubscribedjPage;
}());
SubscribedjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subscribedj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/subscribedj/subscribedj.html"*/'<!--\n  Generated template for the SubscribedjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="black">\n		<ion-title>Subscription Plan</ion-title>\n		<button (click)="setBackButtonAction()"ion-button="bar-button">\n        <span class="button-inner"><ion-icon class="back-button-icon icon icon-ios back-button-icon-ios ion-ios-arrow-back" role="img" aria-label="arrow back"></ion-icon>\n        <span class="back-button-text back-button-text-ios" style="transform: translateX(0px);"></span></span>\n        <div class="button-effect"></div>\n    </button>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n</ion-navbar>\n</ion-header>\n<ion-content padding>\n		<div class="content-sec">\n			<ion-grid>\n				<ion-row>\n					<ion-col>\n						<div class="top-sec">\n							<h4>{{subscriv?.plan_name}}</h4>\n							<p>{{subscriv?.description}}</p>\n						</div>\n						<div class="bottom-sec">\n							<h1>${{subscriv?.monthly_rate}}</h1>\n							<p>Recurring</p>\n							<h1 class="term">\n								<span>\n								<ion-checkbox color="dark" checked="true" [(ngModel)]="data.checkbx" name="checkbx" #checkbx=\'ngModel\'></ion-checkbox>\n							</span>\n							I accept the <a style="text-decoration: underline;" button (click)="terms()" clear item-right>terms and conditions.</a>\n							</h1>\n\n							<!-- <ion-item class="remember" style="border:none; width: 50%; float: left;">\n								<ion-label style="color:#000;">I accept the terms and conditions.</ion-label>\n								<ion-checkbox color="secondary" checked="true" [(ngModel)]="data.checkbx" name="checkbx" #checkbx=\'ngModel\'></ion-checkbox>\n							</ion-item> -->\n							<button ion-button (click)="subscribe(data.checkbx)">Subscribe</button>\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	</ion-content>	\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/subscribedj/subscribedj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["a" /* PayPal */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], SubscribedjPage);

//# sourceMappingURL=subscribedj.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
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
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(32);
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
 * Generated class for the PayinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentinfoPage = (function () {
    function PaymentinfoPage(navCtrl, navParams, appsetting, http, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        var d = new Date();
        this.minyear = d.getFullYear();
        this.maxyear = this.minyear + 20;
        this.data = { 'relationship': 1 };
        this.setbit = 1;
        this.pdata = navParams.get("postdata");
    }
    PaymentinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayinfoPage');
    };
    PaymentinfoPage.prototype.setbitnow = function (bitnow) {
        this.setbit = bitnow;
    };
    PaymentinfoPage.prototype.paynow = function (payinfo) {
        var _this = this;
        this.Loading.present();
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (payinfo.value.relationship == undefined) {
            var alert_1 = this.alertCtrl.create({
                title: 'Edit payment info',
                subTitle: "Please select payment method"
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
            this.Loading.dismiss();
        }
        else {
            var data = {
                id: user_id,
                cardnum: payinfo.value.cardnum,
                monyear: payinfo.value.monyear,
                name: payinfo.value.name,
                method: payinfo.value.relationship,
                cvv: payinfo.value.cvv
            };
            var Serialized = this.serializeObj(data);
            this.http.post(this.appsetting.myGlobalVar + 'users/editpaymentinfo', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                _this.Loading.dismiss();
                if (response.isSuccess == true) {
                    localStorage.removeItem("USER_DATA");
                    localStorage.setItem("USER_DATA", JSON.stringify(response.user));
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Edit payment info',
                        subTitle: response.msg,
                    });
                    alert_2.present();
                    setTimeout(function () { return alert_2.dismiss(); }, 1500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Edit payment info',
                        subTitle: response.msg,
                    });
                    alert_3.present();
                    setTimeout(function () { return alert_3.dismiss(); }, 1500);
                }
            });
        }
    };
    PaymentinfoPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_4 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 1500);
        }
    };
    PaymentinfoPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return PaymentinfoPage;
}());
PaymentinfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-paymentinfo',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/paymentinfo/paymentinfo.html"*/'<!--\n  Generated template for the PaymentinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Payment Info</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#5a5a5a;">\n  <div class="paymentinfo">\n    <form #payinfoForm="ngForm" novalidate >\n    <div class="selectpayment">\n      <h4 class="selettitle">Select Payment Method</h4>\n      <ion-list radio-group no-lines [(ngModel)]="data.relationship" name="relationship">\n        <ion-item>\n          <ion-label>\n            <img width="60px" src="assets/img/visa.png">\n            <span class="cardtitle">Credit Card</span>\n          </ion-label>\n          <ion-radio checked="true"  value="1" (click)="setbitnow(1)"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <img width="60px" src="assets/img/paypal.png">\n            <span class="cardtitle">PayPal</span>\n          </ion-label>\n          <ion-radio value="2" (click)="setbitnow(0)"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div class="creditcard" *ngIf="setbit">\n      <h4 class="selettitle">Credit Card Info</h4>\n      <ion-list>\n          <ion-item>\n            <ion-label stacked>name on card</ion-label>\n            <ion-input type="text" [(ngModel)]="data.name" name="name"  placeholder="Name" #name=\'ngModel\' pattern=\'[a-zA-Z]+\' placeholder="John Henry Doe"></ion-input>\n          </ion-item>\n          <ion-label  class="alert alert-danger" color="danger">\n          <div *ngIf="name.errors && (name.dirty || name.touched)">\n            <div [hidden]="!name.errors.required" >\n                Field is required\n            </div>\n          </div>\n        </ion-label>\n          <ion-item>\n            <ion-label stacked>card number</ion-label>\n            <ion-input type="number" placeholder="1234-5678-9012-3456" [(ngModel)]="data.cardnum" name="cardnum" #cardnum=\'ngModel\' required></ion-input>\n          </ion-item>\n          <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="cardnum.errors && (cardnum.dirty || cardnum.touched)">\n          <div [hidden]="!cardnum.errors.required" >\n              Field is required\n          </div>\n        </div>\n          </ion-label>\n\n          <ion-item style="float:left; width:68%; margin-right:2%;">\n            <ion-label stacked>expiration Date</ion-label>\n            <ion-datetime style="color:#fff;" min="{{minyear}}" max="{{maxyear}}" displayFormat="MM/YYYY" placeholder="MM/YYYY"  [(ngModel)]="data.monyear" name="monyear"  #monyear=\'ngModel\' required></ion-datetime>\n          </ion-item>\n          <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="monyear.errors && (monyear.dirty || monyear.touched)">\n       <div [hidden]="!monyear.errors.required" >\n         Field is required\n        </div>\n        </div>\n          </ion-label>\n          <ion-item style="float:left; width:30%; padding-left:0;">\n            <ion-label stacked>Cvv</ion-label>\n            <ion-input type="number" placeholder="xxx" [(ngModel)]="data.cvv" name="cvv" #cvv=\'ngModel\' required></ion-input>\n          </ion-item>\n          <ion-label  class="alert alert-danger" color="danger">\n              <div *ngIf="cvv.errors && (cvv.dirty || cvv.touched)">\n                <div [hidden]="!cvv.errors.required" >\n                      Field is required\n                </div>\n                <div [hidden]="!cvv.errors.pattern" >\n                      Invalid cvv\n                </div>\n              </div>\n          </ion-label>\n      </ion-list>\n      <div class="centerbutton">\n              <button class="custom_btn" (click)="paynow(payinfoForm)" [disabled]="!payinfoForm.form.valid" color="yellow" type="submit" style="text-transform: uppercase;" ion-button round>Submit</button>\n      </div>\n    </div>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/paymentinfo/paymentinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], PaymentinfoPage);

//# sourceMappingURL=paymentinfo.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(388);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_djsdetails_djsdetails__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_votelike_votelike__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_changepassword_changepassword__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profileedit_profileedit__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_streaming_media__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_entercode_entercode__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_historicalrequests_historicalrequests__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_requestsongplay_requestsongplay__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_shoutout_shoutout__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_settings_settings__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_voteup_voteup__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_terms_terms__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_privacy_privacy__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_paymentinfo_paymentinfo__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_payinfo_payinfo__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_djslist_djslist__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_songrequests_songrequests__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_in_app_browser__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_signupdj_signupdj__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_logindj_logindj__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_editprofiledj_editprofiledj__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_nameofeventsdj_nameofeventsdj__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_paymenthistorydj_paymenthistorydj__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_requesthistorydj_requesthistorydj__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_helpdj_helpdj__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_editevent_editevent__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_termsdj_termsdj__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_signindj_signindj__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_changepassworddj_changepassworddj__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_eventsdj_eventsdj__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_playnowlistdj_playnowlistdj__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_addeventdj_addeventdj__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_subscribedj_subscribedj__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_omniaclubeventdj_omniaclubeventdj__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_pasteventdj_pasteventdj__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_manageeventsdj_manageeventsdj__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_topqueuedj_topqueuedj__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_gauranteedj_gauranteedj__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_termsdjsubs_termsdjsubs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_possiblydj_possiblydj__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_voteupdj_voteupdj__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_shoutoutdj_shoutoutdj__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_subscribedjupdate_subscribedjupdate__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_transactionhstrydj_transactionhstrydj__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_paypal__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_status_bar__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_membershipdetaildj_membershipdetaildj__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_facebook__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_variable_variable__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__providers_common_common__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_firebase__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_52__pages_shoutoutdj_shoutoutdj__["a" /* ShoutoutdjPage */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_changepassworddj_changepassworddj__["a" /* ChangepassworddjPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_djsdetails_djsdetails__["a" /* DjsdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_profileedit_profileedit__["a" /* ProfileeditPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_entercode_entercode__["a" /* EntercodePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_payinfo_payinfo__["a" /* PayinfoPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_votelike_votelike__["a" /* VotelikePage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_gauranteedj_gauranteedj__["a" /* GauranteedjPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_historicalrequests_historicalrequests__["a" /* HistoricalrequestsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_requestsongplay_requestsongplay__["a" /* RequestsongplayPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_shoutout_shoutout__["a" /* ShoutoutPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_voteup_voteup__["a" /* VoteupPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_paymentinfo_paymentinfo__["a" /* PaymentinfoPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_djslist_djslist__["a" /* DjslistPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_termsdjsubs_termsdjsubs__["a" /* TermsdjsubsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_privacy_privacy__["a" /* PrivacyPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_possiblydj_possiblydj__["a" /* PossiblydjPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_termsdj_termsdj__["a" /* TermsdjPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_songrequests_songrequests__["a" /* SongrequestsPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_signindj_signindj__["a" /* SignindjPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_eventsdj_eventsdj__["a" /* EventsdjPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_addeventdj_addeventdj__["a" /* AddeventdjPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_topqueuedj_topqueuedj__["a" /* TopqueuedjPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_subscribedj_subscribedj__["a" /* SubscribedjPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_omniaclubeventdj_omniaclubeventdj__["a" /* OmniaclubeventdjPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_pasteventdj_pasteventdj__["a" /* PasteventdjPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_manageeventsdj_manageeventsdj__["a" /* ManageeventsdjPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_signupdj_signupdj__["a" /* SignupdjPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_logindj_logindj__["a" /* LogindjPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_editprofiledj_editprofiledj__["a" /* EditprofiledjPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_nameofeventsdj_nameofeventsdj__["a" /* NameofeventsdjPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_transactionhstrydj_transactionhstrydj__["a" /* TransactionhstrydjPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_playnowlistdj_playnowlistdj__["a" /* PlaynowlistdjPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_helpdj_helpdj__["a" /* HelpdjPage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_subscribedjupdate_subscribedjupdate__["a" /* SubscribedjupdatePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_requesthistorydj_requesthistorydj__["a" /* RequesthistorydjPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_paymenthistorydj_paymenthistorydj__["a" /* PaymenthistorydjPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_membershipdetaildj_membershipdetaildj__["a" /* MembershipdetaildjPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_voteupdj_voteupdj__["a" /* VoteupdjPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_editevent_editevent__["a" /* EditeventPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profileedit/profileedit.module#ProfileeditPageModule', name: 'ProfileeditPage', segment: 'profileedit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payinfo/payinfo.module#PayinfoPageModule', name: 'PayinfoPage', segment: 'payinfo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/requestsongplay/requestsongplay.module#RequestsongplayPageModule', name: 'RequestsongplayPage', segment: 'requestsongplay', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/voteup/voteup.module#VoteupPageModule', name: 'VoteupPage', segment: 'voteup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shoutout/shoutout.module#ShoutoutPageModule', name: 'ShoutoutPage', segment: 'shoutout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/songrequests/songrequests.module#SongrequestsPageModule', name: 'SongrequestsPage', segment: 'songrequests', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/entercode/entercode.module#EntercodePageModule', name: 'EntercodePage', segment: 'entercode', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/historicalrequests/historicalrequests.module#HistoricalrequestsPageModule', name: 'HistoricalrequestsPage', segment: 'historicalrequests', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/djsdetails/djsdetails.module#DjsdetailsPageModule', name: 'DjsdetailsPage', segment: 'djsdetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/djslist/djslist.module#DjslistPageModule', name: 'DjslistPage', segment: 'djslist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/votelike/votelike.module#VotelikePageModule', name: 'VotelikePage', segment: 'votelike', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprofiledj/editprofiledj.module#EditprofiledjPageModule', name: 'EditprofiledjPage', segment: 'editprofiledj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addeventdj/addeventdj.module#AddeventdjPageModule', name: 'AddeventdjPage', segment: 'addeventdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/paymenthistorydj/paymenthistorydj.module#PaymenthistorydjPageModule', name: 'PaymenthistorydjPage', segment: 'paymenthistorydj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/requesthistorydj/requesthistorydj.module#RequesthistorydjPageModule', name: 'RequesthistorydjPage', segment: 'requesthistorydj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pasteventdj/pasteventdj.module#PasteventdjPageModule', name: 'PasteventdjPage', segment: 'pasteventdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playnowlistdj/playnowlistdj.module#PlaynowlistdjPageModule', name: 'PlaynowlistdjPage', segment: 'playnowlistdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/topqueuedj/topqueuedj.module#TopqueuedjPageModule', name: 'TopqueuedjPage', segment: 'topqueuedj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/gauranteedj/gauranteedj.module#GauranteedjPageModule', name: 'GauranteedjPage', segment: 'gauranteedj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/possiblydj/possiblydj.module#PossiblydjPageModule', name: 'PossiblydjPage', segment: 'possiblydj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/voteupdj/voteupdj.module#VoteupdjPageModule', name: 'VoteupdjPage', segment: 'voteupdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shoutoutdj/shoutoutdj.module#ShoutoutdjPageModule', name: 'ShoutoutdjPage', segment: 'shoutoutdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nameofeventsdj/nameofeventsdj.module#NameofeventsdjPageModule', name: 'NameofeventsdjPage', segment: 'nameofeventsdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/omniaclubeventdj/omniaclubeventdj.module#OmniaclubeventdjPageModule', name: 'OmniaclubeventdjPage', segment: 'omniaclubeventdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editevent/editevent.module#EditeventPageModule', name: 'EditeventPage', segment: 'editevent', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/manageeventsdj/manageeventsdj.module#ManageeventsdjPageModule', name: 'ManageeventsdjPage', segment: 'manageeventsdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termsdjsubs/termsdjsubs.module#TermsdjsubsPageModule', name: 'TermsdjsubsPage', segment: 'termsdjsubs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/subscribedjupdate/subscribedjupdate.module#SubscribedjupdatePageModule', name: 'SubscribedjupdatePage', segment: 'subscribedjupdate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/membershipdetaildj/membershipdetaildj.module#MembershipdetaildjPageModule', name: 'MembershipdetaildjPage', segment: 'membershipdetaildj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/eventsdj/eventsdj.module#EventsdjPageModule', name: 'EventsdjPage', segment: 'eventsdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/subscribedj/subscribedj.module#SubscribedjPageModule', name: 'SubscribedjPage', segment: 'subscribedj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/logindj/logindj.module#LogindjPageModule', name: 'LogindjPage', segment: 'logindj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signupdj/signupdj.module#SignupdjPageModule', name: 'SignupdjPage', segment: 'signupdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signindj/signindj.module#SignindjPageModule', name: 'SignindjPage', segment: 'signindj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/transactionhstrydj/transactionhstrydj.module#TransactionhstrydjPageModule', name: 'TransactionhstrydjPage', segment: 'transactionhstrydj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/helpdj/helpdj.module#HelpdjPageModule', name: 'HelpdjPage', segment: 'helpdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/changepassworddj/changepassworddj.module#ChangepassworddjPageModule', name: 'ChangepassworddjPage', segment: 'changepassworddj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termsdj/termsdj.module#TermsdjPageModule', name: 'TermsdjPage', segment: 'termsdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/paymentinfo/paymentinfo.module#PaymentinfoPageModule', name: 'PaymentinfoPage', segment: 'paymentinfo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_36__pages_editevent_editevent__["a" /* EditeventPage */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_changepassworddj_changepassworddj__["a" /* ChangepassworddjPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_payinfo_payinfo__["a" /* PayinfoPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_djsdetails_djsdetails__["a" /* DjsdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_profileedit_profileedit__["a" /* ProfileeditPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_termsdj_termsdj__["a" /* TermsdjPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_entercode_entercode__["a" /* EntercodePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_votelike_votelike__["a" /* VotelikePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_historicalrequests_historicalrequests__["a" /* HistoricalrequestsPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_membershipdetaildj_membershipdetaildj__["a" /* MembershipdetaildjPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_requestsongplay_requestsongplay__["a" /* RequestsongplayPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_shoutout_shoutout__["a" /* ShoutoutPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_voteup_voteup__["a" /* VoteupPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_possiblydj_possiblydj__["a" /* PossiblydjPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_gauranteedj_gauranteedj__["a" /* GauranteedjPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_paymentinfo_paymentinfo__["a" /* PaymentinfoPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_privacy_privacy__["a" /* PrivacyPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_topqueuedj_topqueuedj__["a" /* TopqueuedjPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_djslist_djslist__["a" /* DjslistPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_songrequests_songrequests__["a" /* SongrequestsPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_signindj_signindj__["a" /* SignindjPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_eventsdj_eventsdj__["a" /* EventsdjPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_addeventdj_addeventdj__["a" /* AddeventdjPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_subscribedj_subscribedj__["a" /* SubscribedjPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_termsdjsubs_termsdjsubs__["a" /* TermsdjsubsPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_omniaclubeventdj_omniaclubeventdj__["a" /* OmniaclubeventdjPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_pasteventdj_pasteventdj__["a" /* PasteventdjPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_manageeventsdj_manageeventsdj__["a" /* ManageeventsdjPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_signupdj_signupdj__["a" /* SignupdjPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_logindj_logindj__["a" /* LogindjPage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_subscribedjupdate_subscribedjupdate__["a" /* SubscribedjupdatePage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_editprofiledj_editprofiledj__["a" /* EditprofiledjPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_nameofeventsdj_nameofeventsdj__["a" /* NameofeventsdjPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_transactionhstrydj_transactionhstrydj__["a" /* TransactionhstrydjPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_playnowlistdj_playnowlistdj__["a" /* PlaynowlistdjPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_helpdj_helpdj__["a" /* HelpdjPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_voteupdj_voteupdj__["a" /* VoteupdjPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_shoutoutdj_shoutoutdj__["a" /* ShoutoutdjPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_requesthistorydj_requesthistorydj__["a" /* RequesthistorydjPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_paymenthistorydj_paymenthistorydj__["a" /* PaymenthistorydjPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_64__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_59__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_58__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_56__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_60__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_61__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_55__ionic_native_paypal__["a" /* PayPal */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_62__providers_variable_variable__["a" /* VariableProvider */],
            __WEBPACK_IMPORTED_MODULE_63__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_streaming_media__["a" /* StreamingMedia */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_forgot__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_common__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_variable_variable__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signindj_signindj__ = __webpack_require__(35);
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
 * Generated class for the SigninPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, http, appsetting, loadingCtrl, toastCtrl, fb, Cmn, variable, alertCtrl, events, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.Cmn = Cmn;
        this.variable = variable;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.zone = zone;
        this.scrollAmount = 44;
        this.data = {};
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (localStorage.getItem("username") != null && localStorage.getItem("password") != null) {
            this.username = localStorage.getItem("username");
            this.data = {
                email: localStorage.getItem("username"),
                password: localStorage.getItem("password"),
                checkbx: true
            };
        }
        else {
            this.data = {
                email: "",
                password: "",
                checkbx: true
            };
        }
        this.classval = 'headerbg';
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    LoginPage.prototype.login = function (form) {
        var _this = this;
        if (form.value.checkbx == true) {
            localStorage.setItem("username", form.value.email);
            localStorage.setItem("password", form.value.password);
        }
        else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
        this.Loading.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            email: form.value.email,
            password: form.value.password,
        };
        var Serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'users/login', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.Loading.dismiss();
            if (response.status == true) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Logged in',
                    subTitle: response.msg,
                    cssClass: 'newpop'
                });
                alert_2.present();
                setTimeout(function () { return alert_2.dismiss(); }, 1500);
                localStorage.removeItem("fblogin");
                localStorage.setItem("USER_DATA", JSON.stringify(response.user));
                _this.appsetting.profile = response.user;
                _this.events.publish('role', 'clubgoer');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Login',
                    subTitle: response.msg
                });
                alert_3.present();
                setTimeout(function () { return alert_3.dismiss(); }, 1500);
            }
        });
    };
    LoginPage.prototype.fblogin = function () {
        var _this = this;
        // alert("fblogin");
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            _this.fb.api('me/?fields=id,email,last_name,first_name', ["public_profile", "email"])
                .then(function (result) {
                _this.Loading.present();
                _this.profilepicface = "https://graph.facebook.com/" + result.id + "/picture?type=large";
                localStorage.setItem('facebook_pic', _this.profilepicface);
                localStorage.setItem('facebook_login', JSON.stringify(result));
                _this.facebook_data = localStorage.getItem('facebook_login');
                var url = _this.variable.baseUrl + _this.variable.SIGNIN_API;
                var signindata = {
                    email: result.email,
                    fb_id: result.id,
                    name: result.first_name + " " + result.last_name,
                    img: _this.profilepicface,
                    role: "clubgoer"
                };
                // alert(JSON.stringify(signindata));
                var serialized_data = _this.Cmn.serializeObj(signindata);
                var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.post(url, serialized_data, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (resolve) {
                    if (resolve.isSucess == "true") {
                        _this.Loading.dismiss();
                        // alert("vikki");
                        // alert(JSON.stringify(resolve.data));
                        localStorage.setItem('userid', resolve.data.User.id);
                        localStorage.setItem("USER_DATA", JSON.stringify(resolve.data.User));
                        _this.appsetting.profile = resolve.data.User;
                        localStorage.setItem('fblogin', 'fbloginfrm');
                        _this.events.publish('role', 'clubgoer');
                        var alert_4 = _this.alertCtrl.create({
                            title: 'Logged in',
                            subTitle: resolve.msg
                        });
                        alert_4.present();
                        setTimeout(function () { return alert_4.dismiss(); }, 1500);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                    else {
                        // alert("error");
                        // alert(JSON.stringify(resolve));
                        var alert_5 = _this.alertCtrl.create({
                            title: 'Login',
                            subTitle: resolve.msg,
                        });
                        alert_5.present();
                        setTimeout(function () { return alert_5.dismiss(); }, 1500);
                        _this.Loading.dismiss();
                    }
                    // this.userinfo.profilepicture ='data:image/jpeg;base64,' + imageUri;;
                });
            }).catch(function (d) {
                //  alert(JSON.stringify(d))
                _this.Loading.dismiss();
            });
        })
            .catch(function (e) {
            // alert(JSON.stringify(e))
            // alert("catch now");
            _this.Loading.dismiss();
        });
    };
    LoginPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad SigninPage');
    };
    LoginPage.prototype.scrollHandler = function (event) {
        var _this = this;
        console.log("ScrollEvent: " + event);
        // console.log(JSON.stringify(event.scrollTop));
        console.log(event.scrollTop);
        this.zone.run(function () {
            if (event.scrollTop == 0) {
                _this.classval = 'headerbg';
            }
            else {
                _this.classval = 'headerbg1';
            }
            console.log('hello');
            // since scrollAmount is data-binded,
            // the update needs to happen in zone
            _this.scrollAmount++;
        });
    };
    LoginPage.prototype.signupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.forgotPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__forgot_forgot__["a" /* ForgotPage */]);
    };
    // tabPage() {
    //   this.navCtrl.push(TabsPage);
    // }
    LoginPage.prototype.setBackButtonAction = function () {
        //Write here wherever you wanna do
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__signindj_signindj__["a" /* SignindjPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="{{classval}}">\n\n  <ion-navbar color="dark">\n    <ion-title>Sign In</ion-title>\n    <button (click)="setBackButtonAction()"ion-button="bar-button">\n      <span class="button-inner"><ion-icon class="back-button-icon icon icon-ios back-button-icon-ios ion-ios-arrow-back" role="img" aria-label="arrow back"></ion-icon>\n      <span class="back-button-text back-button-text-ios" style="transform: translateX(0px);"></span></span>\n      <div class="button-effect"></div>\n    </button>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="margintop" padding style="background: url(assets/img/bgdrk.png); background-size:cover;"  (ionScroll)="scrollHandler($event)">\n<div class="login_outer">\n  <div class="logo"><img src="assets/img/logo.png"></div>\n<div class="form_sec">\n  <form #loginForm="ngForm" (ngSubmit)="login(loginForm)" novalidate>\n  <ion-list>\n  <ion-item>\n    <ion-input type="email" [(ngModel)]="data.email" name="email" placeholder="Email Address" #email=\'ngModel\' pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' required></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="email.errors && (email.dirty || email.touched)" >\n        <div [hidden]="!email.errors.required" >\n         Email is required\n        </div>\n        <div [hidden]="!email.errors.pattern" >\n         Invalid email\n        </div>\n        </div>\n  </ion-label>\n  <ion-item>\n    <ion-input type="password" placeholder="Password" [(ngModel)]="data.password" name="password" #password=\'ngModel\' required></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="password.errors && (password.dirty || password.touched)">\n       <div [hidden]="!password.errors.required" >\n         Password is required\n        </div>\n    </div>\n  </ion-label>\n  <ion-item class="remember" style="border:none; width: 50%; float: left;">\n      <ion-label style="color:#fff;">Remember</ion-label>\n      <ion-checkbox color="secondary" checked="true" [(ngModel)]="data.checkbx" name="checkbx" #checkbx=\'ngModel\'></ion-checkbox>\n  </ion-item>\n  <ion-item class="remember" style="border:none; width: 50%; float: left;">\n      <ion-label style="color:#fff; margin-right: 0; text-align: right;" (click)="forgotPage()">Forget Password ?</ion-label>\n  </ion-item>\n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" color="yellow" type="submit" [disabled]="!loginForm.form.valid" style="text-transform: uppercase;" ion-button round>sign in</button>\n</div>\n  </form>\n\n<div class="centerbutton">\n  <h4 style="color:#fff;font-size: 14px;margin: 5px 0;">OR</h4>\n</div>\n<div class="centerbutton">\n   <button ion-button clear (click)="fblogin()"><img width="230px" src="assets/img/fb.png"></button>\n</div>\n<div class="centerbutton" style="color:#fff;">Don’t have an account?</div>\n<div (click)="signupPage()" class="centerbutton" style="color:#fff; text-transform:uppercase; text-decoration:underline; margin-top:8px;">Sign up</div>\n<!--<div class="centerbutton" style="color:#fff; margin-top: 10vh;">Skip</div>-->\n</div>\n</div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_9__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_variable_variable__["a" /* VariableProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogindjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signupdj_signupdj__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__eventsdj_eventsdj__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_common__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_variable_variable__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signindj_signindj__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__ = __webpack_require__(106);
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
 * Generated class for the LogindjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LogindjPage = (function () {
    function LogindjPage(navCtrl, navParams, http, appsetting, loadingCtrl, toastCtrl, fb, Cmn, variable, alertCtrl, events, firebase, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.Cmn = Cmn;
        this.variable = variable;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.firebase = firebase;
        this.zone = zone;
        this.scrollAmount = 44;
        this.data = {};
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (localStorage.getItem("usernamedj") != null && localStorage.getItem("passworddj") != null) {
            this.username = localStorage.getItem("usernamedj");
            this.data = {
                email: localStorage.getItem("usernamedj"),
                password: localStorage.getItem("passworddj"),
                checkbx: true
            };
        }
        else {
            this.data = {
                email: "",
                password: "",
                checkbx: true
            };
        }
    }
    LogindjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    LogindjPage.prototype.scrollHandler = function (event) {
        var _this = this;
        console.log("ScrollEvent: " + event);
        // console.log(JSON.stringify(event.scrollTop));
        console.log(event.scrollTop);
        this.zone.run(function () {
            if (event.scrollTop == 0) {
                _this.classval = 'headerbg';
            }
            else {
                _this.classval = 'headerbg1';
            }
            console.log('hello');
            // since scrollAmount is data-binded,
            // the update needs to happen in zone
            _this.scrollAmount++;
        });
    };
    LogindjPage.prototype.login = function (form) {
        var _this = this;
        this.firebase.getToken().then(function (token) {
            console.log("The token is " + token);
            alert(token);
            _this.token = token;
            console.log('onToken->', _this.token);
        })
            .catch(function (error) {
            console.error('Error getting token', error);
        });
        this.firebase.onTokenRefresh().subscribe(function (token) {
            console.log("The new token is " + token);
            _this.token = token;
            console.log('onTokenRefresh->', _this.token);
        });
        if (form.value.checkbx == true) {
            localStorage.setItem("usernamedj", form.value.email);
            localStorage.setItem("passworddj", form.value.password);
        }
        else {
            localStorage.removeItem("usernamedj");
            localStorage.removeItem("passworddj");
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            email: form.value.email,
            password: form.value.password,
            token: this.token
        };
        console.log(data);
        console.log("vikrant");
        var Serialized = this.serializeObj(data);
        var Loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'users/logindj', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                Loading.dismiss();
                alert(JSON.stringify(response));
                if (response.status == true) {
                    _this.Loading.dismiss();
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Logged in',
                        subTitle: response.msg,
                        cssClass: 'newpop'
                    });
                    alert_2.present();
                    setTimeout(function () { return alert_2.dismiss(); }, 1500);
                    localStorage.removeItem("fblogin");
                    localStorage.setItem("USER_DATA", JSON.stringify(response.user));
                    _this.appsetting.profile = response.user;
                    _this.events.publish('role', 'dj');
                    if (response.user.subscription_status != 1) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__["a" /* SubscribedjPage */]);
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                    }
                }
                else {
                    _this.Loading.dismiss();
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Login',
                        subTitle: response.msg
                    });
                    alert_3.present();
                    setTimeout(function () { return alert_3.dismiss(); }, 1500);
                }
            });
        });
    };
    LogindjPage.prototype.fblogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            _this.fb.api('me/?fields=id,email,last_name,first_name', ["public_profile", "email"])
                .then(function (result) {
                console.log("result");
                console.log(result);
                _this.profilepicface = "https://graph.facebook.com/" + result.id + "/picture?type=large";
                localStorage.setItem('facebook_pic', _this.profilepicface);
                localStorage.setItem('facebook_login', JSON.stringify(result));
                _this.facebook_data = localStorage.getItem('facebook_login');
                var url = _this.variable.baseUrl + 'users/Djfblogin';
                var signindata = {
                    email: result.email,
                    fb_id: result.id,
                    name: result.first_name + " " + result.last_name,
                    img: _this.profilepicface,
                    role: "dj"
                };
                var serialized_data = _this.Cmn.serializeObj(signindata);
                var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var Loading = _this.loadingCtrl.create({
                    content: 'Please wait...',
                });
                Loading.present().then(function () {
                    _this.http.post(url, serialized_data, options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (resolve) {
                        Loading.dismiss();
                        _this.Loading.dismiss();
                        if (resolve.isSucess == "true") {
                            localStorage.setItem('userid', resolve.data.User.id);
                            localStorage.setItem("USER_DATA", JSON.stringify(resolve.data.User));
                            _this.appsetting.profile = resolve.data.User;
                            localStorage.setItem('fblogin', 'fbloginfrm');
                            var alert_4 = _this.alertCtrl.create({
                                title: 'Logged in',
                                subTitle: resolve.msg
                            });
                            alert_4.present();
                            setTimeout(function () { return alert_4.dismiss(); }, 1500);
                            _this.events.publish('role', 'dj');
                            if (resolve.data.User.subscription_status != 1) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__["a" /* SubscribedjPage */]);
                            }
                            else {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                            }
                        }
                        else {
                            var alert_5 = _this.alertCtrl.create({
                                title: 'Login',
                                subTitle: resolve.msg,
                            });
                            alert_5.present();
                            setTimeout(function () { return alert_5.dismiss(); }, 1500);
                        }
                    });
                });
            }).catch(function (d) {
                // Loading.dismiss();
                console.log("vikki");
                console.log(d);
            });
        })
            .catch(function (e) {
            console.log("ranju");
            console.log(e);
            // Loading.dismiss();
        });
    };
    LogindjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    LogindjPage.prototype.signupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signupdj_signupdj__["a" /* SignupdjPage */]);
    };
    LogindjPage.prototype.forgotPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgot_forgot__["a" /* ForgotPage */]);
    };
    LogindjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogindjPage');
    };
    LogindjPage.prototype.setBackButtonAction = function () {
        //Write here wherever you wanna do
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__signindj_signindj__["a" /* SignindjPage */], { bit: 'back' });
    };
    return LogindjPage;
}());
LogindjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-logindj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/logindj/logindj.html"*/'<!--\n  Generated template for the LogindjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="{{classval}}">\n    <ion-navbar color="dark">\n      <ion-title>Sign In</ion-title>\n      <button (click)="setBackButtonAction()" ion-button="bar-button">\n        <span class="button-inner"><ion-icon class="back-button-icon icon icon-ios back-button-icon-ios ion-ios-arrow-back" role="img" aria-label="arrow back"></ion-icon>\n        <span class="back-button-text back-button-text-ios" style="transform: translateX(0px);"></span></span>\n        <div class="button-effect"></div>\n      </button>\n      <ion-buttons end class="rbutton">\n        <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n      </ion-buttons>\n    </ion-navbar>\n  \n</ion-header>\n<ion-content class="margintop" padding style="background:url(assets/img/bgdrk.png); background-size:cover;"  (ionScroll)="scrollHandler($event)">\n  \n  <div class="login_outer">\n  <div class="logo"><img src="assets/img/logo.png"></div>\n<div class="form_sec">\n  <form #loginForm="ngForm" (ngSubmit)="login(loginForm)" novalidate>\n  <ion-list>\n  <ion-item>\n    <ion-input type="email" [(ngModel)]="data.email" name="email" placeholder="Email Address" #email=\'ngModel\' pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' required></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="email.errors && (email.dirty || email.touched)" >\n        <div [hidden]="!email.errors.required" >\n         Email is required\n        </div>\n        <div [hidden]="!email.errors.pattern" >\n         Invalid email\n        </div>\n        </div>\n  </ion-label>\n  <ion-item>\n    <ion-input type="password" placeholder="Password" [(ngModel)]="data.password" name="password" #password=\'ngModel\' required></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="password.errors && (password.dirty || password.touched)">\n       <div [hidden]="!password.errors.required" >\n         Password is required\n        </div>\n    </div>\n  </ion-label>\n  <ion-item class="remember" style="border:none; width: 50%; float: left;">\n      <ion-label style="color:#fff;">Remember</ion-label>\n      <ion-checkbox color="secondary" checked="true" [(ngModel)]="data.checkbx" name="checkbx" #checkbx=\'ngModel\'></ion-checkbox>\n  </ion-item>\n  <ion-item class="remember" style="border:none; width: 50%; float: left;">\n      <ion-label style="color:#fff; margin-right: 0; text-align: right;" (click)="forgotPage()">Forget Password ?</ion-label>\n  </ion-item>\n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" color="red" type="submit" [disabled]="!loginForm.form.valid" style="text-transform: uppercase;" ion-button round>sign in</button>\n</div>\n  </form>\n\n<div class="centerbutton">\n  <h4 style="color:#fff;font-size: 14px;margin: 5px 0;">OR</h4>\n</div>\n<div class="centerbutton">\n   <button ion-button clear (click)="fblogin()"><img width="230px" src="assets/img/fb.png"></button>\n</div>\n<div class="centerbutton" style="color:#fff;">Don’t have an account?</div>\n<div (click)="signupPage()" class="centerbutton" style="color:#fff; text-transform:uppercase; text-decoration:underline; margin-top:8px;">Sign up</div>\n\n<!--<div class="centerbutton" style="color:#fff; margin-top: 10vh;">Skip</div>-->\n</div>\n\n</div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/logindj/logindj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_9__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_10__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_11__providers_variable_variable__["a" /* VariableProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], LogindjPage);

//# sourceMappingURL=logindj.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofiledjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__ = __webpack_require__(20);
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
 * Generated class for the EditprofiledjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditprofiledjPage = (function () {
    function EditprofiledjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl, camera, actionSheetCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.data = {};
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.getuser();
    }
    EditprofiledjPage.prototype.getuser = function () {
        var _this = this;
        this.Loading.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            userid: JSON.parse(localStorage.getItem('USER_DATA')).id
        };
        var Serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'users/getuserbyid', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.Loading.dismiss();
            console.log(response);
            if (response.isSucess == "true") {
                //this.data = response.data.User;
                if (response.data.User.audiourl == "null") {
                    response.data.User.audiourl = "";
                }
                if (response.data.User.djcode == "null") {
                    response.data.User.djcode = "";
                }
                if (response.data.User.biography == "null") {
                    response.data.User.biography = "";
                }
                if (response.data.User.paypal_email == "null" || response.data.User.paypal_email == "undefined") {
                    response.data.User.paypal_email = "";
                }
                if (response.data.User.complete_name == "null") {
                    response.data.User.complete_name = "";
                }
                if (response.data.User.email == "null") {
                    response.data.User.email = "";
                }
                _this.data = {
                    'audiourl': response.data.User.audiourl,
                    'djcode': response.data.User.djcode,
                    'biography': response.data.User.biography,
                    'paypal_email': response.data.User.paypal_email,
                    'complete_name': response.data.User.complete_name,
                };
                _this.profileImage = response.data.User.image;
                _this.srcImage = response.data.User.logo;
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Edit Profile',
                    subTitle: response.msg,
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 1500);
            }
        });
    };
    EditprofiledjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_2 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 1500);
        }
    };
    EditprofiledjPage.prototype.CameraAction = function () {
        var _this = this;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        var options = {
                            quality: 8,
                            sourceType: 1,
                            allowEdit: true,
                            targetWidth: 600,
                            targetHeight: 600,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageUri) {
                            _this.profileImage = 'data:image/jpeg;base64,' + imageUri;
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                            var data = {
                                id: JSON.parse(localStorage.getItem('USER_DATA')).id,
                                img: imageUri
                            };
                            var Serialized = _this.serializeObj(data);
                            var Loading = _this.loadingCtrl.create({
                                content: 'Please wait...',
                            });
                            Loading.present().then(function () {
                                _this.http.post(_this.appsetting.myGlobalVar + 'users/saveimage', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                                    Loading.dismiss();
                                    if (response.status == "true") {
                                        _this.profileImage = response.data.User.image;
                                    }
                                });
                            });
                        }, function (err) {
                            alert(JSON.stringify(err));
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        var options = {
                            quality: 8,
                            sourceType: 0,
                            allowEdit: true,
                            targetWidth: 600,
                            targetHeight: 600,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.profileImage = 'data:image/jpeg;base64,' + imageData;
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                            var data = {
                                id: JSON.parse(localStorage.getItem('USER_DATA')).id,
                                img: imageData
                            };
                            var Serialized = _this.serializeObj(data);
                            var Loading = _this.loadingCtrl.create({
                                content: 'Please wait...',
                            });
                            Loading.present().then(function () {
                                _this.http.post(_this.appsetting.myGlobalVar + 'users/saveimage', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                                    Loading.dismiss();
                                    if (response.status == "true") {
                                        localStorage.setItem('USER_DATA', JSON.stringify(response.data.User));
                                        _this.events.publish('role', 'dj');
                                        _this.profileImage = response.data.User.image;
                                    }
                                });
                            });
                        }, function (err) {
                            alert(JSON.stringify(err));
                        });
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
    EditprofiledjPage.prototype.updateProfile = function (profile) {
        var _this = this;
        console.log(profile.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            userid: JSON.parse(localStorage.getItem('USER_DATA')).id,
            completename: profile.value.complete_name,
            biography: profile.value.biography,
            djcode: profile.value.djcode,
            paypal_id: profile.value.paypal_email,
            music_url: profile.value.audiourl,
        };
        var Serialized = this.serializeObj(data);
        var Loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'users/edit_profile', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                Loading.dismiss();
                console.log(response);
                if (response.status == 0) {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Edit Profile',
                        subTitle: response.msg,
                    });
                    alert_3.present();
                    localStorage.setItem('USER_DATA', JSON.stringify(response.user));
                    _this.events.publish('role', 'dj');
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                    setTimeout(function () { return alert_3.dismiss(); }, 1500);
                }
                else {
                    var alert_4 = _this.alertCtrl.create({
                        title: 'Edit Profile',
                        subTitle: response.msg,
                    });
                    alert_4.present();
                    setTimeout(function () { return alert_4.dismiss(); }, 1500);
                }
            });
        });
    };
    EditprofiledjPage.prototype.uploadlogo = function () {
        var _this = this;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        var options = {
                            quality: 8,
                            sourceType: 1,
                            allowEdit: true,
                            targetWidth: 600,
                            targetHeight: 600,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageUri) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                            var data = {
                                id: JSON.parse(localStorage.getItem('USER_DATA')).id,
                                img: imageUri
                            };
                            var Serialized = _this.serializeObj(data);
                            var Loading = _this.loadingCtrl.create({
                                content: 'Please wait...',
                            });
                            Loading.present().then(function () {
                                _this.http.post(_this.appsetting.myGlobalVar + 'users/uploadlogo', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                                    Loading.dismiss();
                                    _this.srcImage = response.data.User.logo;
                                });
                            });
                        }, function (err) {
                            // alert(JSON.stringify(err));
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        var options = {
                            quality: 20,
                            sourceType: 0,
                            allowEdit: true,
                            targetWidth: 600,
                            targetHeight: 600,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                            var data = {
                                id: JSON.parse(localStorage.getItem('USER_DATA')).id,
                                img: imageData
                            };
                            var Serialized = _this.serializeObj(data);
                            var Loading = _this.loadingCtrl.create({
                                content: 'Please wait...',
                            });
                            Loading.present().then(function () {
                                _this.http.post(_this.appsetting.myGlobalVar + 'users/uploadlogo', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                                    Loading.dismiss();
                                    _this.srcImage = response.data.User.logo;
                                });
                            });
                        }, function (err) {
                            // alert(JSON.stringify(err));
                        });
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
    EditprofiledjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditprofiledjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofiledjPage');
    };
    return EditprofiledjPage;
}());
EditprofiledjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editprofiledj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/editprofiledj/editprofiledj.html"*/'<!--\n  Generated template for the EditprofiledjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#fff;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n   </ion-buttons>\n</ion-toolbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="head-sec">\n		<div class="image" (click)="CameraAction()">\n			<img [src]="profileImage">\n		</div>\n		<div class="edit-image">\n				<ion-icon ios="md-create" md="md-create"></ion-icon>\n				\n		</div>\n	</div>\n	<div class="form-sec">			\n		<form #profileForm="ngForm" class="event-form">\n			<ion-col col-12>\n				<ion-row>\n					<ion-list>\n					  <ion-item>\n					    <ion-input type="text" placeholder="Username" [(ngModel)]="data.complete_name" name="complete_name" #complete_name="ngModel" required></ion-input>\n						</ion-item>\n						<ion-label  class="alert alert-danger" color="danger">\n								<div *ngIf="complete_name.errors && (complete_name.dirty || complete_name.touched)">\n								 <div [hidden]="!complete_name.errors.required" >\n								 Field is required\n								</div>\n							</div>\n						</ion-label>\n					  <ion-item>\n							  <button class="abc" ion-button full (click)="uploadlogo()" style="background:none;">Add logo</button>\n					  </ion-item>\n					  <ion-item>\n					    <div class="img-sec" *ngIf="srcImage">\n					    	<img [src]="srcImage">\n					    </div>\n							 <div class="img-sec" *ngIf="srcImage == null">\n					    	<img src="assets/img/djlogo.png">\n					    </div>\n					  </ion-item>\n					  <ion-item>\n					    <ion-input type="text" placeholder="Biography" [(ngModel)]="data.biography" name="biography" #biography="ngModel" ></ion-input>\n						</ion-item>\n						<!-- <ion-label  class="alert alert-danger" color="danger">\n								<div *ngIf="biography.errors && (biography.dirty || biography.touched)">\n								 <div [hidden]="!biography.errors.required" >\n								 Field is required\n								</div>\n							</div>\n						</ion-label> -->\n					  <ion-item>\n					    <ion-input type="text" placeholder="Dj code here" [(ngModel)]="data.djcode" name="djcode" #djcode="ngModel" ></ion-input>\n						</ion-item>\n						<!-- <ion-label  class="alert alert-danger" color="danger">\n								<div *ngIf="djcode.errors && (djcode.dirty || djcode.touched)">\n								 <div [hidden]="!djcode.errors.required" >\n								 Field is required\n								</div>\n							</div>\n						</ion-label> -->\n					  <ion-item>\n					    <ion-input type="text" placeholder="Enter Music URL" [(ngModel)]="data.audiourl" name="audiourl" #audiourl="ngModel" ></ion-input>\n						</ion-item>\n						<!-- <ion-label  class="alert alert-danger" color="danger">\n								<div *ngIf="audiourl.errors && (audiourl.dirty || audiourl.touched)">\n								 <div [hidden]="!audiourl.errors.required" >\n								 Field is required\n								</div>\n							</div>\n						</ion-label> -->\n					  <!--<ion-item>\n					    <ion-input type="text" placeholder="Change Password"></ion-input>\n					  </ion-item>-->\n					  <ion-item>\n					    <ion-input type="text" placeholder="Enter your paypal id" pattern=\'^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' [(ngModel)]="data.paypal_email" name="paypal_email" #paypal_email="ngModel" ></ion-input>\n						</ion-item>\n						<!-- <ion-label  class="alert alert-danger" color="danger">\n								<div *ngIf="paypal_email.errors && (paypal_email.dirty || paypal_email.touched)">\n								 <div [hidden]="!paypal_email.errors.required" >\n									 			Field is required\n								</div>\n								<div [hidden]="!paypal_email.errors.pattern" >\n												Pattern not matched\n								</div>\n							</div>\n						</ion-label> -->\n					</ion-list>\n				</ion-row>\n		    </ion-col>\n					<div class="btn-sec"><button ion-button type="submit" [disabled]="!profileForm.form.valid"  (click)="updateProfile(profileForm)">Save</button></div>\n		</form>\n		</div>\n	\n	\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/editprofiledj/editprofiledj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], EditprofiledjPage);

//# sourceMappingURL=editprofiledj.js.map

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 208,
	"./af.js": 208,
	"./ar": 209,
	"./ar-dz": 210,
	"./ar-dz.js": 210,
	"./ar-kw": 211,
	"./ar-kw.js": 211,
	"./ar-ly": 212,
	"./ar-ly.js": 212,
	"./ar-ma": 213,
	"./ar-ma.js": 213,
	"./ar-sa": 214,
	"./ar-sa.js": 214,
	"./ar-tn": 215,
	"./ar-tn.js": 215,
	"./ar.js": 209,
	"./az": 216,
	"./az.js": 216,
	"./be": 217,
	"./be.js": 217,
	"./bg": 218,
	"./bg.js": 218,
	"./bm": 219,
	"./bm.js": 219,
	"./bn": 220,
	"./bn.js": 220,
	"./bo": 221,
	"./bo.js": 221,
	"./br": 222,
	"./br.js": 222,
	"./bs": 223,
	"./bs.js": 223,
	"./ca": 224,
	"./ca.js": 224,
	"./cs": 225,
	"./cs.js": 225,
	"./cv": 226,
	"./cv.js": 226,
	"./cy": 227,
	"./cy.js": 227,
	"./da": 228,
	"./da.js": 228,
	"./de": 229,
	"./de-at": 230,
	"./de-at.js": 230,
	"./de-ch": 231,
	"./de-ch.js": 231,
	"./de.js": 229,
	"./dv": 232,
	"./dv.js": 232,
	"./el": 233,
	"./el.js": 233,
	"./en-au": 234,
	"./en-au.js": 234,
	"./en-ca": 235,
	"./en-ca.js": 235,
	"./en-gb": 236,
	"./en-gb.js": 236,
	"./en-ie": 237,
	"./en-ie.js": 237,
	"./en-nz": 238,
	"./en-nz.js": 238,
	"./eo": 239,
	"./eo.js": 239,
	"./es": 240,
	"./es-do": 241,
	"./es-do.js": 241,
	"./es-us": 242,
	"./es-us.js": 242,
	"./es.js": 240,
	"./et": 243,
	"./et.js": 243,
	"./eu": 244,
	"./eu.js": 244,
	"./fa": 245,
	"./fa.js": 245,
	"./fi": 246,
	"./fi.js": 246,
	"./fo": 247,
	"./fo.js": 247,
	"./fr": 248,
	"./fr-ca": 249,
	"./fr-ca.js": 249,
	"./fr-ch": 250,
	"./fr-ch.js": 250,
	"./fr.js": 248,
	"./fy": 251,
	"./fy.js": 251,
	"./gd": 252,
	"./gd.js": 252,
	"./gl": 253,
	"./gl.js": 253,
	"./gom-latn": 254,
	"./gom-latn.js": 254,
	"./gu": 255,
	"./gu.js": 255,
	"./he": 256,
	"./he.js": 256,
	"./hi": 257,
	"./hi.js": 257,
	"./hr": 258,
	"./hr.js": 258,
	"./hu": 259,
	"./hu.js": 259,
	"./hy-am": 260,
	"./hy-am.js": 260,
	"./id": 261,
	"./id.js": 261,
	"./is": 262,
	"./is.js": 262,
	"./it": 263,
	"./it.js": 263,
	"./ja": 264,
	"./ja.js": 264,
	"./jv": 265,
	"./jv.js": 265,
	"./ka": 266,
	"./ka.js": 266,
	"./kk": 267,
	"./kk.js": 267,
	"./km": 268,
	"./km.js": 268,
	"./kn": 269,
	"./kn.js": 269,
	"./ko": 270,
	"./ko.js": 270,
	"./ky": 271,
	"./ky.js": 271,
	"./lb": 272,
	"./lb.js": 272,
	"./lo": 273,
	"./lo.js": 273,
	"./lt": 274,
	"./lt.js": 274,
	"./lv": 275,
	"./lv.js": 275,
	"./me": 276,
	"./me.js": 276,
	"./mi": 277,
	"./mi.js": 277,
	"./mk": 278,
	"./mk.js": 278,
	"./ml": 279,
	"./ml.js": 279,
	"./mr": 280,
	"./mr.js": 280,
	"./ms": 281,
	"./ms-my": 282,
	"./ms-my.js": 282,
	"./ms.js": 281,
	"./my": 283,
	"./my.js": 283,
	"./nb": 284,
	"./nb.js": 284,
	"./ne": 285,
	"./ne.js": 285,
	"./nl": 286,
	"./nl-be": 287,
	"./nl-be.js": 287,
	"./nl.js": 286,
	"./nn": 288,
	"./nn.js": 288,
	"./pa-in": 289,
	"./pa-in.js": 289,
	"./pl": 290,
	"./pl.js": 290,
	"./pt": 291,
	"./pt-br": 292,
	"./pt-br.js": 292,
	"./pt.js": 291,
	"./ro": 293,
	"./ro.js": 293,
	"./ru": 294,
	"./ru.js": 294,
	"./sd": 295,
	"./sd.js": 295,
	"./se": 296,
	"./se.js": 296,
	"./si": 297,
	"./si.js": 297,
	"./sk": 298,
	"./sk.js": 298,
	"./sl": 299,
	"./sl.js": 299,
	"./sq": 300,
	"./sq.js": 300,
	"./sr": 301,
	"./sr-cyrl": 302,
	"./sr-cyrl.js": 302,
	"./sr.js": 301,
	"./ss": 303,
	"./ss.js": 303,
	"./sv": 304,
	"./sv.js": 304,
	"./sw": 305,
	"./sw.js": 305,
	"./ta": 306,
	"./ta.js": 306,
	"./te": 307,
	"./te.js": 307,
	"./tet": 308,
	"./tet.js": 308,
	"./th": 309,
	"./th.js": 309,
	"./tl-ph": 310,
	"./tl-ph.js": 310,
	"./tlh": 311,
	"./tlh.js": 311,
	"./tr": 312,
	"./tr.js": 312,
	"./tzl": 313,
	"./tzl.js": 313,
	"./tzm": 314,
	"./tzm-latn": 315,
	"./tzm-latn.js": 315,
	"./tzm.js": 314,
	"./uk": 316,
	"./uk.js": 316,
	"./ur": 317,
	"./ur.js": 317,
	"./uz": 318,
	"./uz-latn": 319,
	"./uz-latn.js": 319,
	"./uz.js": 318,
	"./vi": 320,
	"./vi.js": 320,
	"./x-pseudo": 321,
	"./x-pseudo.js": 321,
	"./yo": 322,
	"./yo.js": 322,
	"./zh-cn": 323,
	"./zh-cn.js": 323,
	"./zh-hk": 324,
	"./zh-hk.js": 324,
	"./zh-tw": 325,
	"./zh-tw.js": 325
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 420;

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_djslist_djslist__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_terms_terms__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_privacy_privacy__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_votelike_votelike__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_historicalrequests_historicalrequests__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_changepassword_changepassword__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_transactionhstrydj_transactionhstrydj__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_helpdj_helpdj__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_logindj_logindj__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_membershipdetaildj_membershipdetaildj__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_changepassworddj_changepassworddj__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signindj_signindj__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_eventsdj_eventsdj__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_editprofiledj_editprofiledj__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_nameofeventsdj_nameofeventsdj__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_termsdj_termsdj__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_firebase__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























// import {StatusBar} from '@ionic-native/status-bar';
var MyApp = (function () {
    function MyApp(platform, statusBar, firebase, splashScreen, appsetting, alertCtrl, toastCtrl, events, menuCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.firebase = firebase;
        this.splashScreen = splashScreen;
        this.appsetting = appsetting;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_19__pages_signindj_signindj__["a" /* SignindjPage */];
        platform.ready().then(function () {
            statusBar.overlaysWebView(true);
            statusBar.hide();
            //this.firebase.grantPermission();   // for push notifications
            // if (this.platform.is('cordova')) {
            // 	// Initialize push notification feature
            // 	//alert("hiiii"+this.platform)
            // 	if (this.platform.is('android')) {
            // 		//alert("android"+this.platform)
            // 		this.initializeFireBaseAndroid()
            // 	} else {
            // 		//	alert("ios"+this.platform)
            // 		this.initializeFireBaseIos();
            // 	}
            // 	//this.platform.is('android') ? this.initializeFireBaseAndroid() : this.initializeFireBaseIos();
            // } else {
            // 	//	alert(this.platform)
            // 	console.log('Push notifications are not enabled since this is not a real device');
            // }
        });
        this.initializeApp();
        this.events.subscribe('role', function (data) {
            //console.log(data);
            //this.role = data;
            if (localStorage.getItem("USER_DATA") != null) {
                _this.profile = JSON.parse(localStorage.getItem("USER_DATA"));
                console.log(_this.profile);
                if (_this.profile.role == 'clubgoer') {
                    _this.role = "clubgoer";
                    _this.pages = [
                        { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'homecustom' },
                        { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */], icon: 'profile' },
                        { title: 'Voteup Request', component: __WEBPACK_IMPORTED_MODULE_10__pages_votelike_votelike__["a" /* VotelikePage */], icon: 'voteup' },
                        { title: 'Djs List', component: __WEBPACK_IMPORTED_MODULE_6__pages_djslist_djslist__["a" /* DjslistPage */], icon: 'djs' },
                        { title: 'Historical Transactions', component: __WEBPACK_IMPORTED_MODULE_11__pages_historicalrequests_historicalrequests__["a" /* HistoricalrequestsPage */], icon: 'historical' },
                        { title: 'Terms and Conditions', component: __WEBPACK_IMPORTED_MODULE_7__pages_terms_terms__["a" /* TermsPage */], icon: 'terms' },
                        { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_8__pages_privacy_privacy__["a" /* PrivacyPage */], icon: 'privacy' },
                        { title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_12__pages_changepassword_changepassword__["a" /* ChangepasswordPage */], icon: 'historical' },
                        //{ title: 'Payment Info', component: PaymentinfoPage, icon: 'terms' },
                        { title: 'Sign Out', component: null, icon: 'logout' },
                    ];
                    _this.menuCtrl.enable(true, 'clubgoer');
                }
                else {
                    _this.role = "dj";
                    _this.djmenu = [
                        { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_20__pages_eventsdj_eventsdj__["a" /* EventsdjPage */], icon: 'eve' },
                        { title: 'Edit Profile', component: __WEBPACK_IMPORTED_MODULE_21__pages_editprofiledj_editprofiledj__["a" /* EditprofiledjPage */], icon: 'edi' },
                        { title: 'Transaction History', component: __WEBPACK_IMPORTED_MODULE_13__pages_transactionhstrydj_transactionhstrydj__["a" /* TransactionhstrydjPage */], icon: 'tra' },
                        { title: 'Requests', component: __WEBPACK_IMPORTED_MODULE_22__pages_nameofeventsdj_nameofeventsdj__["a" /* NameofeventsdjPage */], icon: 'req' },
                        { title: 'Terms and Conditions', component: __WEBPACK_IMPORTED_MODULE_23__pages_termsdj_termsdj__["a" /* TermsdjPage */], icon: 'ter' },
                        { title: 'Billing', component: __WEBPACK_IMPORTED_MODULE_17__pages_membershipdetaildj_membershipdetaildj__["a" /* MembershipdetaildjPage */], icon: 'logo-usd' },
                        { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_14__pages_helpdj_helpdj__["a" /* HelpdjPage */], icon: 'hel' },
                    ];
                    if (localStorage.getItem("fblogin") == null) {
                        _this.djmenu.push({ title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_18__pages_changepassworddj_changepassworddj__["a" /* ChangepassworddjPage */], icon: 'historical' });
                    }
                    _this.djmenu.push({ title: 'Sign Out', component: null, icon: 'log' });
                    _this.menuCtrl.enable(true, 'dj');
                }
            }
        });
    }
    // private initializeFireBaseAndroid(): Promise<any> {
    // 	return this.firebase.getToken()
    // 		.catch(error => console.error('Error getting token', error))
    // 		.then(token => {
    // 			console.log(`The token is ${token}`);
    // 			Promise.all([
    // 				this.firebase.subscribe('firebase-app'), 	// Subscribe to the entire app
    // 				this.firebase.subscribe('android'),			// Subscribe to android users topic
    // 				this.firebase.subscribe('userid-1') 		// Subscribe using the user id (hardcoded in this example)
    // 			]).then((result) => {
    // 				if (result[0]) console.log(`Subscribed to FirebaseDemo`);
    // 				if (result[1]) console.log(`Subscribed to Android`);
    // 				if (result[2]) console.log(`Subscribed as User`);
    // 				this.subscribeToPushNotificationEvents();
    // 			});
    // 		});
    // }
    // private initializeFireBaseIos(): Promise<any> {
    // 	return this.firebase.grantPermission()
    // 		.catch(error => console.error('Error getting permission', error))
    // 		.then(() => {
    // 			this.firebase.getToken()
    // 				.catch(error => console.error('Error getting token', error))
    // 				.then(token => {
    // 					console.log(`The token is ${token}`);
    // 					Promise.all([
    // 						this.firebase.subscribe('firebase-app'),
    // 						this.firebase.subscribe('ios'),
    // 						this.firebase.subscribe('userid-2')
    // 					]).then((result) => {
    // 						if (result[0]) console.log(`Subscribed to FirebaseDemo`);
    // 						if (result[1]) console.log(`Subscribed to iOS`);
    // 						if (result[2]) console.log(`Subscribed as User`);
    // 						this.subscribeToPushNotificationEvents();
    // 					});
    // 				});
    // 		})
    // }
    //   private saveToken(token: any): Promise<any> {
    // 	console.log('Sending token to the server...');
    // 	return Promise.resolve(true);
    // }
    // private subscribeToPushNotificationEvents(): void {
    //       //	alert("hello everyone");
    //       // Handle token refresh
    //       this.firebase.onTokenRefresh().subscribe(
    //         token => {
    //           console.log(`The new token is ${token}`);
    //           this.saveToken(token);
    //         },
    //         error => {
    //           console.error('Error refreshing token', error);
    //         });
    //       }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //  this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_19__pages_signindj_signindj__["a" /* SignindjPage */];
            if (localStorage.getItem('role') != null) {
                if (localStorage.getItem('role') == 'clubgoer') {
                    _this.rootPage = localStorage.getItem("USER_DATA") != null ? __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] : __WEBPACK_IMPORTED_MODULE_19__pages_signindj_signindj__["a" /* SignindjPage */];
                }
                else {
                    _this.rootPage = localStorage.getItem("USER_DATA") != null ? __WEBPACK_IMPORTED_MODULE_20__pages_eventsdj_eventsdj__["a" /* EventsdjPage */] : __WEBPACK_IMPORTED_MODULE_19__pages_signindj_signindj__["a" /* SignindjPage */];
                    //this.rootPage = (JSON.parse(localStorage.getItem("USER_DATA")).subscription_status!=1) ? SubscribedjPage : localStorage.getItem("USER_DATA") != null ? EventsdjPage : SignindjPage;
                }
            }
            if (localStorage.getItem("USER_DATA") != null) {
                _this.profile = JSON.parse(localStorage.getItem("USER_DATA"));
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component) {
            this.nav.setRoot(page.component);
            this.activePage = page;
        }
        else {
            if (localStorage.getItem('role') == "dj") {
                this.menuCtrl.enable(false, 'dj');
            }
            else {
                this.menuCtrl.enable(false, 'clubgoer');
            }
            localStorage.removeItem("fblogin");
            localStorage.removeItem("USER_DATA");
            localStorage.removeItem("facebook_pic");
            localStorage.removeItem("facebook_login");
            localStorage.removeItem("userid");
            localStorage.removeItem("fblogin");
            //localStorage.removeItem('role');
            //localStorage.clear();
            var alert_1 = this.alertCtrl.create({
                title: 'Logged out',
                subTitle: "Logged out successfully",
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1000);
            if (localStorage.getItem('role') == "dj") {
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_logindj_logindj__["a" /* LogindjPage */]);
            }
            else {
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */]);
            }
        }
    };
    MyApp.prototype.checkActivePage = function (page) {
        return page === this.activePage;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/app/app.html"*/'<ion-menu id="clubgoer" [content]="content" *ngIf="role == \'clubgoer\'">\n  <ion-header>\n    <ion-toolbar color="black">\n      <div class="usersidebar">\n        <ion-list no-lines>\n          <ion-item color="black">\n            <ion-avatar item-start>\n              <img src={{profile?.image}}>\n            </ion-avatar>\n            <h2>{{profile?.complete_name}}</h2>\n            <p>{{profile?.email}}</p>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content style="background:#000;">\n    <ion-list no-lines>\n      <button color="black" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" [class.active]="checkActivePage(p)">\n        <ion-icon name="{{p.icon}}" item-left></ion-icon>\n        {{p.title}}\n      </button>\n      \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu id="dj" [content]="content" *ngIf="role == \'dj\'" [swipeEnabled]="false">\n  <ion-header>\n    <ion-toolbar color="black">\n      <div>\n        <ion-list no-lines>\n          <ion-item color="black" class="menudjc">\n            <ion-avatar item-start class="dj">\n              <img src={{profile?.image}}>\n            </ion-avatar>\n            <h2 style="color:#fff">{{profile?.complete_name}}</h2>\n            <p>DJ</p>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content style="background:#000;font-size:14px;">\n      <div class="act"><h3 style="color:#fff; margin:0px; font-size:15px">Active</h3></div>\n    <ion-list no-lines>\n      <button color="black" menuClose ion-item *ngFor="let p of djmenu" (click)="openPage(p)" [class.active]="checkActivePage(p)" style="font-size:14px;">\n        <ion-icon name="{{p.icon}}" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_24__ionic_native_firebase__["a" /* Firebase */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_9__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1000);
        }
    };
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signindj_signindj__ = __webpack_require__(35);
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
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, appsetting, http, loadingCtrl, toastCtrl, alertCtrl, events, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.zone = zone;
        this.data = '';
        this.scrollAmount = 44;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (localStorage.getItem("USER_DATA") != null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
    }
    SignupPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    SignupPage.prototype.setBackButtonAction = function () {
        //Write here wherever you wanna do
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__signindj_signindj__["a" /* SignindjPage */]);
    };
    SignupPage.prototype.scrollHandler = function (event) {
        var _this = this;
        console.log("ScrollEvent: " + event);
        // console.log(JSON.stringify(event.scrollTop));
        console.log(event.scrollTop);
        this.zone.run(function () {
            if (event.scrollTop == 0) {
                _this.classval = 'headerbg';
            }
            else {
                _this.classval = 'headerbg1';
            }
            console.log('hello');
            // since scrollAmount is data-binded,
            // the update needs to happen in zone
            _this.scrollAmount++;
        });
    };
    SignupPage.prototype.register = function (signup) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (signup.value.password.indexOf(' ') >= 0 || signup.value.email.indexOf(' ') >= 0) {
            var alert_2 = this.alertCtrl.create({
                title: 'Signup',
                subTitle: "Space not allowed",
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 1500);
        }
        else if (signup.value.name.replace(/ /g, '') == "") {
            var alert_3 = this.alertCtrl.create({
                title: 'Signup',
                subTitle: "Space not allowed in name",
            });
            alert_3.present();
            setTimeout(function () { return alert_3.dismiss(); }, 1500);
        }
        else if (signup.value.name.indexOf(' ') == 0) {
            var alert_4 = this.alertCtrl.create({
                title: 'Signup',
                subTitle: "Space not allowed in name",
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 1500);
        }
        else if (signup.value.password == signup.value.cpassword) {
            this.Loading.present();
            var data = {
                name: signup.value.name,
                email: signup.value.email,
                password: signup.value.password,
                role: 'clubgoer'
            };
            var Serialized = this.serializeObj(data);
            //console.log(data);
            this.http.post(this.appsetting.myGlobalVar + 'users/registration', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                _this.Loading.dismiss();
                if (response.isSuccess == true) {
                    _this.events.publish('role', 'clubgoer');
                    localStorage.setItem("USER_DATA", JSON.stringify(response.user_data));
                    var alert_5 = _this.alertCtrl.create({
                        title: 'Sign Up',
                        subTitle: response.msg,
                        buttons: ['ok']
                    });
                    alert_5.present();
                    //setTimeout(()=>alert.dismiss(),1500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
                else {
                    var alert_6 = _this.alertCtrl.create({
                        title: 'Sign Up',
                        subTitle: response.msg,
                        buttons: ['ok']
                    });
                    alert_6.present();
                    //setTimeout(()=>alert.dismiss(),1500);
                }
            });
        }
        else {
            var alert_7 = this.alertCtrl.create({
                title: 'Signup',
                subTitle: 'Password did not match',
            });
            alert_7.present();
            setTimeout(function () { return alert_7.dismiss(); }, 1500);
        }
    };
    SignupPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signinPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="{{classval}}">\n\n  <ion-navbar align-title="center" color="dark" style="background: none;">\n    <ion-title align-title="center">Sign Up</ion-title>\n    <button (click)="setBackButtonAction()"ion-button="bar-button">\n      <span class="button-inner"><ion-icon class="back-button-icon icon icon-ios back-button-icon-ios ion-ios-arrow-back" role="img" aria-label="arrow back"></ion-icon>\n      <span class="back-button-text back-button-text-ios" style="transform: translateX(0px);"></span></span>\n      <div class="button-effect"></div>\n    </button>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="margintop" padding style="background: url(assets/img/loginbg.jpg); background-size:cover;" (ionScroll)="scrollHandler($event)">\n<div class="login_outer">\n  <div class="logo"><img src="assets/img/logo.png"></div>\n<div class="form_sec">\n  <form #signupForm="ngForm" novalidate > \n  <ion-list>\n\n  <ion-item>\n    <ion-input type="text" [(ngModel)]="data.name" name="name"  placeholder="Name" #name=\'ngModel\' pattern=\'[a-zA-Z ]+\' required></ion-input>\n  </ion-item>\n  <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="name.errors && (name.dirty || name.touched)">\n       <div [hidden]="!name.errors.required" >\n         Field is required\n        </div>\n    </div>\n  </ion-label>\n  <ion-item>\n          <ion-input type="email" [(ngModel)]="data.email" name="email" placeholder="Email Address"   #email=\'ngModel\' required pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' required  ></ion-input>\n        </ion-item>\n      <ion-label  class="alert alert-danger" color="danger">\n     <div *ngIf="email.errors && (email.dirty || email.touched)" >\n       <div [hidden]="!email.errors.required" >\n         Email is required\n        </div>\n        <div [hidden]="!email.errors.pattern" >\n         Invalid email\n        </div>\n     </div>\n    </ion-label>\n\n<ion-item>\n          <ion-input type="password" minlength="5" [(ngModel)]="data.password" name="password" placeholder="Password" #password=\'ngModel\' required ></ion-input>\n        </ion-item>\n     <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="password.errors && (password.dirty || password.touched)">\n        <div [hidden]="!password.errors.required" >\n         Password is required\n        </div>\n    </div>\n     <div *ngIf="password.errors && (password.dirty || password.touched)" >\n       <div [hidden]="!password.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n   </ion-label>\n\n   <ion-item>\n          <ion-input type="password" minlength="5" [(ngModel)]="data.cpassword" name="cpassword" placeholder="Confirm Password" #cpassword=\'ngModel\' required></ion-input>\n        </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)" >\n       <div [hidden]="!cpassword.errors.required" >\n         Confirm password is required\n        </div>\n    </div>\n    <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)" >\n       <div [hidden]="!cpassword.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n    </ion-label>\n  \n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" (click)="register(signupForm)" [disabled]="!signupForm.form.valid" color="yellow" style="text-transform: uppercase;" ion-button round>sign Up</button>\n</div>\n  </form>\n<div class="centerbutton" style="color:#fff;">Have an account?</div>\n<div class="centerbutton" style="color:#fff; text-transform:uppercase; text-decoration:underline; margin-top:8px;"  (click)="signinPage()">Sign In</div>\n<!--<div class="centerbutton" style="color:#fff; margin-top: 10vh;">Skip</div>-->\n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appsetting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Appsetting = (function () {
    function Appsetting(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.myGlobalVar = 'http://priyank.crystalbiltech.com/dj/api/'; //shop/shippingaddress
        this.checknetwork();
    }
    Appsetting.prototype.checknetwork = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network Connection failed',
                duration: 5000
            });
            toast.present();
        }
    };
    return Appsetting;
}());
Appsetting = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ToastController */]])
], Appsetting);

//# sourceMappingURL=appsetting.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profileedit_profileedit__ = __webpack_require__(66);
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
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, http, app, appsetting, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.profilePage();
        //this.vid="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4";
    }
    ProfilePage.prototype.playAudio = function () {
        if (this.audurl != "") {
            this.audio = new Audio(this.audurl);
            this.audio.play();
            this.video.pause();
        }
        else {
            this.video.pause();
            var alert_1 = this.alertCtrl.create({
                title: 'Play Audio',
                subTitle: 'Please enter audio link in edit profile',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    ProfilePage.prototype.playVideo = function () {
        console.log(this.vid);
        if (this.vid != "") {
            this.video = document.getElementById("myVideo");
            this.video.src = this.vid;
            this.video.play();
            //this.vid = 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4';
            this.audio.pause();
        }
        else {
            this.audio.pause();
            var alert_2 = this.alertCtrl.create({
                title: 'Play Video',
                subTitle: 'Please enter video link in edit profile',
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 1500);
        }
    };
    ProfilePage.prototype.profilePage = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var postdata = {
            userid: user_id
        };
        // this.audio.stop();  
        this.Loading.present();
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/getuserbyid', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.Loading.dismiss();
            // alert("back");
            _this.appsetting.profile = data.data.User;
            _this.vid = data.data.User.videourl;
            _this.audurl = data.data.User.audiourl;
            // this.srcImage = this.profile.image;
            // console.log(this.profile);
        });
    };
    ProfilePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.profilePage();
        console.log('refreshed');
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_3 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_3.present();
            setTimeout(function () { return alert_3.dismiss(); }, 1500);
        }
    };
    ProfilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.profileeditPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profileedit_profileedit__["a" /* ProfileeditPage */]);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <button ion-button menuToggle style="display:block !important;">\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>My Profile</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding class="" style="background:#212121;">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content style="color:#878787;" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>\n  <h1 class="profilehead">Profile View </h1>\n  <div class="profilepic">\n    <div class="userpro">\n      <img [src]="appsetting.profile?.image">\n    </div>\n    <div class="editbtn">\n      <button (click)="profileeditPage()" color="light" clear ion-button icon-only>\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </div>\n    <h1 class="profiletitle">{{appsetting.profile?.complete_name}}</h1>\n  </div>\n    <div class="address">\n      <h3 class="addresstitle">Email</h3>\n      <p>{{appsetting.profile?.email}}</p>\n    <!--<h3 class="edittitle" (click)="payinfo()">Edit  Payment Info</h3>-->\n    </div>\n    <!-- <div id="content" style="overflow:hidden; height:300px; width:100%;">\n      <video width="400" id="myVideo" class="video-js vjs-default-skin" poster="http://video-js.zencoder.com/oceans-clip.jpg" preload="auto" data-setup="{}">\n          <source src={{vid}} type="video/mp4">\n      </video>\n    </div> -->\n    <!--<video width="400" id="myVideo" >\n      <source src={{vid}} type="video/mp4">\n    </video>-->\n    <!--<audio id="myAudio" controls>\n      <source src="" type="audio/mpeg">\n      Your browser does not support the audio element.\n    </audio>-->\n  <!-- <button ion-button full (click)="playVideo()">Play Video</button>\n  <button ion-button full (click)="playAudio()">Play Audio</button> -->\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileeditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(51);
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
 * Generated class for the ProfileeditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfileeditPage = (function () {
    function ProfileeditPage(navCtrl, navParams, http, appsetting, camera, actionSheetCtrl, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        // this.countrylist()
        this.getdata();
    }
    ProfileeditPage.prototype.getdata = function () {
        var _this = this;
        this.Loader.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var postdata = {
            userid: user_id
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/getuserbyid', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.Loader.dismiss();
            console.log(response);
            if (response.data) {
                _this.data = response.data.User;
                _this.srcImage = response.data.User.image;
            }
        });
    };
    ProfileeditPage.prototype.CameraAction = function () {
        var _this = this;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        var options = {
                            quality: 8,
                            sourceType: 1,
                            allowEdit: true,
                            targetWidth: 600,
                            targetHeight: 600,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageUri) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                            _this.imgTosend = imageUri;
                        }, function (err) {
                            //alert(JSON.stringify(err));
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        var options = {
                            quality: 8,
                            sourceType: 0,
                            allowEdit: true,
                            targetWidth: 600,
                            targetHeight: 600,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            _this.imgTosend = imageData;
                        }, function (err) {
                            //alert(JSON.stringify(err));
                        });
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
    ProfileeditPage.prototype.changeimage = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.Loader.present();
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var postdata = {
            id: user_id,
            img: this.imgTosend
        };
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/saveimage', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.status == "true") {
                _this.Loader.dismiss();
                _this.appsetting.profile = data.data.user;
                var alert_1 = _this.alertCtrl.create({
                    title: 'Edit profile',
                    subTitle: data.msg,
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 2500);
            }
            else {
                _this.Loader.dismiss();
                var alert_2 = _this.alertCtrl.create({
                    title: 'Edit profile',
                    subTitle: data.msg
                });
                alert_2.present();
                setTimeout(function () { return alert_2.dismiss(); }, 2500);
            }
        });
    };
    ProfileeditPage.prototype.editprofile = function (edit) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                first_name: edit.value.fname,
                audiourl: edit.value.audiourl,
                videourl: edit.value.videourl,
                id: Userid,
                img: _this.imgTosend
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'users/editprofile', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.isSucess == "true") {
                    // alert("Profile is updated")
                    _this.appsetting.profile = data.data.User;
                    localStorage.setItem('USER_DATA', JSON.stringify(data.data.User));
                    // let alert = this.alertCtrl.create({
                    //   title: 'Edit profile',
                    //   subTitle: data.msg,
                    // });
                    // alert.present();
                    // setTimeout(()=>alert.dismiss(),2500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Edit profile',
                        subTitle: data.msg,
                    });
                    alert_3.present();
                    setTimeout(function () { return alert_3.dismiss(); }, 1500);
                }
            });
        });
    };
    ProfileeditPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_4 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 1500);
        }
    };
    ProfileeditPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return ProfileeditPage;
}());
ProfileeditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profileedit',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/profileedit/profileedit.html"*/'<!--\n  Generated template for the ProfileeditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="black">\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons end>\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#212121;">\n<ion-card style="background: rgba(255,255,255,0.1);">\n  <ion-card-content>\n    <div class="profilepic">\n    <div class="userpro">\n      <img [src]="srcImage">\n    </div>\n    <div class="editbtn">\n      <button color="light" clear ion-button icon-only (click)="CameraAction()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </div>\n  </div>\n  </ion-card-content>\n</ion-card>\n\n<ion-card style="background: rgba(255,255,255,0.1);">\n  <ion-card-content>\n    <div class="editpro_form">\n      <form  #editForm="ngForm" >\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="data.complete_name" name=\'fname\' #fname="ngModel"  pattern="[a-zA-Z ]*" value="fname" placeholder=" Name" required></ion-input>\n      </ion-item>\n      <ion-label  class="alert alert-danger" color="danger">\n          <div *ngIf="fname.errors && (fname.dirty || fname.touched)">\n            <div [hidden]="!fname.errors.required" >\n                Field is required\n            </div>\n          </div>\n      </ion-label>\n      <!-- <ion-item>\n        <ion-input type="url" [(ngModel)]="data.audiourl" name=\'audiourl\' #audiourl="ngModel" value="audiourl" placeholder=" Audio URL" pattern="(http|https)?://.+" required></ion-input>\n      </ion-item>\n        <ion-label  class="alert alert-danger" color="danger">\n          <div *ngIf="audiourl.errors && (audiourl.dirty || audiourl.touched)">\n            <div [hidden]="!audiourl.errors.required" >\n                Field is required\n            </div>\n            <div [hidden]="!audiourl.errors.pattern">\n                Must be a valid URL!\n            </div>\n          </div>\n        </ion-label>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="data.videourl" name=\'videourl\' #videourl="ngModel" value="videourl" placeholder=" Video URL" pattern="(http|https)?://.+" required></ion-input>\n      </ion-item>\n        <ion-label  class="alert alert-danger" color="danger">\n          <div *ngIf="videourl.errors && (videourl.dirty || videourl.touched)">\n            <div [hidden]="!videourl.errors.required" >\n                Field is required\n            </div>\n            <div [hidden]="!videourl.errors.pattern">\n                Must be a valid URL!\n            </div>\n          </div>\n        </ion-label> -->\n      <ion-item>\n        <button type="submit" [disabled]="!editForm.form.valid" (click)="editprofile(editForm)"  style="text-transform: uppercase;" ion-button  full>Save</button>\n      </ion-item>\n    </ion-list>\n      </form>\n    </div>\n  </ion-card-content>\n</ion-card>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/profileedit/profileedit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ProfileeditPage);

//# sourceMappingURL=profileedit.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(326);
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
 * Generated class for the PayinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PayinfoPage = (function () {
    function PayinfoPage(navCtrl, navParams, appsetting, http, loadingCtrl, toastCtrl, alertCtrl, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.data = {};
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        var d = new Date();
        this.minyear = d.getFullYear();
        this.maxyear = this.minyear + 20;
        this.data = { 'relationship': 2 };
        this.setbit = 0;
        this.pdata = navParams.get("postdata");
        //console.log(this.pdata);
        // this.checkpayinfo(this.pdata.userid);
    }
    //   checkpayinfo(userid){
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    //     let options= new RequestOptions({ headers: headers });
    //       var data ={
    //             userid:userid
    //           }
    //  var Serialized = this.serializeObj(data);
    //         this.http.post(this.appsetting.myGlobalVar + 'users/checkpayinfo', Serialized, options).map(res=>res.json()).subscribe(response=>{
    //      this.Loading.dismiss(); 
    //               if(response.isSuccess == true){
    //                 if(response.data!=null){
    //                 this.data={'relationship':1,
    //                            'name':response.data.name,
    //                            'cardnum':response.data.cardnumber,
    //                            'monyear':response.data.expiry,
    //                            'cvv':response.data.cvv};
    //                 }
    //               }else{
    //                   let alert = this.alertCtrl.create({
    //                   title: 'Edit payment info',
    //                   subTitle: response.msg,
    //                 });
    //                 alert.present();
    //                 setTimeout(()=>alert.dismiss(),1500);
    //               }
    //     })
    //   }
    PayinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayinfoPage');
    };
    PayinfoPage.prototype.setbitnow = function (bitnow) {
        var _this = this;
        //this.setbit=bitnow;
        var target = "_blank";
        var options = "location=no,hidden=no";
        var browser = this.iab.create('http://priyank.crystalbiltech.com/paypal-adaptive/chained-payment/proccess.php?data=' + encodeURIComponent(JSON.stringify(this.pdata)), target, options);
        browser.on('loadstart').subscribe(function (e) {
            //  alert(e)
            //console.log(e);
            //let url = e.url;
            //console.log(url);
            var redirect_uri = e.url.split('code=');
            //console.log(redirect_uri);
            //  alert(redirect_uri[0]);
            if (redirect_uri[0] == 'https://priyank.crystalbiltech.com/?') {
                //  alert('code--->' + code);
                browser.close();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                var alert_1 = _this.alertCtrl.create({
                    title: 'Payment info',
                    subTitle: "Payment done successfully"
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 1500);
            }
        }, function (err) {
            //console.log("InAppBrowser loadstart Event Error: " + err);
            // alert(err)
        });
    };
    PayinfoPage.prototype.paynow = function (payinfo) {
        // this.Loading.present();
        //var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        // let headers = new Headers();
        // headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
        // let options= new RequestOptions({ headers: headers });
        // if(payinfo.value.relationship==undefined){
        //           let alert = this.alertCtrl.create({
        //                 title: 'Edit payment info',
        //                 subTitle: "Please select payment method"
        //                 });
        //                 alert.present();
        //                 setTimeout(()=>alert.dismiss(),1500);
        //                   this.Loading.dismiss();
        // } else{
        // var data ={
        //     id:user_id,
        //     cardnum:payinfo.value.cardnum,
        //     monyear:payinfo.value.monyear,
        //     name:payinfo.value.name,
        //     method:payinfo.value.relationship,
        //     cvv:payinfo.value.cvv
        //   }
        //  }
    };
    PayinfoPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_2 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 1500);
        }
    };
    PayinfoPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return PayinfoPage;
}());
PayinfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payinfo',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/payinfo/payinfo.html"*/'<!--\n  Generated template for the PaymentinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Payment Info</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#f2f2f2;">\n  <div class="paymentinfo">\n    <form #payinfoForm="ngForm" novalidate >\n    <div class="selectpayment">\n      <h4 class="selettitle" (click)="setbitnow(2)"> \n        Payment Method\n        <img width="150px" src="assets/img/paypal.png">\n        <span class="cardtitle">PayPal</span>\n      </h4>\n    </div>\n\n    <div class="creditcard" *ngIf="setbit">\n      <h4 class="selettitle">Credit Card Info</h4>\n      <ion-list>\n          <ion-item>\n            <ion-label stacked>name on card</ion-label>\n            <ion-input type="text" [(ngModel)]="data.name" name="name"  placeholder="Name" #name=\'ngModel\' pattern=\'[a-zA-Z]+\' placeholder="John Henry Doe"></ion-input>\n          </ion-item>\n          <ion-label  class="alert alert-danger" color="danger">\n          <div *ngIf="name.errors && (name.dirty || name.touched)">\n            <div [hidden]="!name.errors.required" >\n                Field is required\n            </div>\n          </div>\n        </ion-label>\n          <ion-item>\n            <ion-label stacked>card number</ion-label>\n            <ion-input type="number" placeholder="1234-5678-9012-3456" [(ngModel)]="data.cardnum" name="cardnum" #cardnum=\'ngModel\' required></ion-input>\n          </ion-item>\n          <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="cardnum.errors && (cardnum.dirty || cardnum.touched)">\n          <div [hidden]="!cardnum.errors.required" >\n              Field is required\n          </div>\n        </div>\n          </ion-label>\n\n          <ion-item style="float:left; width:68%; margin-right:2%;">\n            <ion-label stacked>expiration Date</ion-label>\n            <ion-datetime style="color:#fff;" min="{{minyear}}" max="{{maxyear}}" displayFormat="MM/YYYY" placeholder="MM/YYYY"  [(ngModel)]="data.monyear" name="monyear"  #monyear=\'ngModel\' required></ion-datetime>\n          </ion-item>\n          <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="monyear.errors && (monyear.dirty || monyear.touched)">\n       <div [hidden]="!monyear.errors.required" >\n         Field is required\n        </div>\n        </div>\n          </ion-label>\n          <ion-item style="float:left; width:30%; padding-left:0;">\n            <ion-label stacked>Cvv</ion-label>\n            <ion-input type="number" placeholder="xxx" [(ngModel)]="data.cvv" name="cvv" #cvv=\'ngModel\' required></ion-input>\n          </ion-item>\n          <ion-label  class="alert alert-danger" color="danger">\n              <div *ngIf="cvv.errors && (cvv.dirty || cvv.touched)">\n                <div [hidden]="!cvv.errors.required" >\n                      Field is required\n                </div>\n                <div [hidden]="!cvv.errors.pattern" >\n                      Invalid cvv\n                </div>\n              </div>\n          </ion-label>\n      </ion-list>\n      <div class="centerbutton">\n              <button class="custom_btn" (click)="paynow(payinfoForm)" [disabled]="!payinfoForm.form.valid" color="yellow" type="submit" style="text-transform: uppercase;" ion-button round>Submit</button>\n      </div>\n    </div>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/payinfo/payinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], PayinfoPage);

//# sourceMappingURL=payinfo.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalrequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
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
 * Generated class for the HistoricalrequestsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HistoricalrequestsPage = (function () {
    function HistoricalrequestsPage(navCtrl, navParams, http, app, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.historicalrequest();
    }
    HistoricalrequestsPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    HistoricalrequestsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.historicalrequest();
        console.log('refreshed');
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HistoricalrequestsPage.prototype.historicalrequest = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var postdata = {
            userid: user_id
        };
        this.Loading.present();
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/requestbyid', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.Loading.dismiss();
            _this.requests = data;
        });
    };
    HistoricalrequestsPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return HistoricalrequestsPage;
}());
HistoricalrequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-historicalrequests',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/historicalrequests/historicalrequests.html"*/'<!--\n  Generated template for the HistoricalrequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Historical Requests</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><ion-icon><img width="15px" src="assets/img/rlogo.png"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n  \n  <ion-list-header class="listhader" style="margin-top:10px;">\n    <div class="left_items">Song Name</div>\n    <div class="right_items">Amount Paid</div>\n  </ion-list-header>\n</ion-header>\n\n\n<ion-content style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n<ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content style="color:#878787;" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>\n<div class="historicalrequests">\n  <ion-list no-lines>\n    <ion-item color="black" *ngFor="let request of requests;">\n      <div class="list_head">\n        <h2>{{request.ClubgoerRequest.songname}}</h2>\n        <ion-note item-end="" class="note"> {{request.ClubgoerRequest.pay_paypal ? "Paid" : "Not paid"}} <span>${{request.ClubgoerRequest.tip_amount}}</span></ion-note>\n      </div>\n      <div class="itembottom">\n      <p>Requested Type <button class="playnow" clear>{{request.TipOption.name}}</button></p>\n      </div>\n    </ion-item>\n    \n  </ion-list>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/historicalrequests/historicalrequests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], HistoricalrequestsPage);

//# sourceMappingURL=historicalrequests.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logindj_logindj__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ForgotPage = (function () {
    function ForgotPage(navCtrl, navParams, http, appsetting, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.data = '';
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }
    ForgotPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    ForgotPage.prototype.forgot = function (form) {
        var _this = this;
        this.Loading.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            username: form.value.email,
        };
        var Serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'users/forgetpwd', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.Loading.dismiss();
            if (response.isSucess == "true") {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Forget password',
                    subTitle: response.msg,
                });
                alert_2.present();
                setTimeout(function () { return alert_2.dismiss(); }, 1500);
                if (response.usrrole == "dj") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__logindj_logindj__["a" /* LogindjPage */]);
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                }
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Forget password',
                    subTitle: response.msg,
                });
                alert_3.present();
                setTimeout(function () { return alert_3.dismiss(); }, 1500);
            }
        });
    };
    ForgotPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    ForgotPage.prototype.signinPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgotPage.prototype.signupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/forgot/forgot.html"*/'<ion-header class="headerbg">\n\n  <ion-navbar color="black">\n    <ion-title>Forget Password</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="margintop" padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n<div class="login_outer">\n  <div class="logo"><img src="assets/img/logo.png"></div>\n<div class="form_sec">\n<form #forgotForm="ngForm" (ngSubmit)="forgot(forgotForm)" novalidate>\n  <ion-list>\n  <ion-item>\n    <ion-input type="email" [(ngModel)]="data.email" name="email" placeholder="Email Address" #email=\'ngModel\' pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' required></ion-input>\n        </ion-item>\n        <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="email.errors && (email.dirty || email.touched)" >\n        <div [hidden]="!email.errors.required" >\n         Email is required\n        </div>\n        <div [hidden]="!email.errors.pattern" >\n         Invalid email\n        </div>\n        </div>\n       </ion-label>\n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" color="red" style="text-transform: uppercase;" type="submit" [disabled]="!forgotForm.form.valid" ion-button >Submit</button>\n</div>\n</form>\n\n\n\n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/forgot/forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logindj_logindj__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signindj_signindj__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__ = __webpack_require__(36);
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
 * Generated class for the SignupdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupdjPage = (function () {
    function SignupdjPage(navCtrl, navParams, appsetting, http, loadingCtrl, toastCtrl, alertCtrl, events, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.zone = zone;
        this.scrollAmount = 44;
        this.data = '';
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.ionViewDidEnter();
        if (localStorage.getItem("USER_DATA")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__["a" /* SubscribedjPage */]);
        }
    }
    SignupdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    SignupdjPage.prototype.scrollHandler = function (event) {
        var _this = this;
        console.log("ScrollEvent: " + event);
        // console.log(JSON.stringify(event.scrollTop));
        console.log(event.scrollTop);
        this.zone.run(function () {
            if (event.scrollTop == 0) {
                _this.classval = 'headerbg';
            }
            else {
                _this.classval = 'headerbg1';
            }
            console.log('hello');
            // since scrollAmount is data-binded,
            // the update needs to happen in zone
            _this.scrollAmount++;
        });
    };
    SignupdjPage.prototype.setBackButtonAction = function () {
        //Write here wherever you wanna do
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signindj_signindj__["a" /* SignindjPage */]);
    };
    SignupdjPage.prototype.register = function (signup) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (signup.value.password.indexOf(' ') >= 0 || signup.value.email.indexOf(' ') >= 0) {
            var alert_2 = this.alertCtrl.create({
                title: 'Sign Up',
                subTitle: "Space not allowed",
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 1500);
        }
        else if (signup.value.name.replace(/ /g, '') == "") {
            var alert_3 = this.alertCtrl.create({
                title: 'Sign Up',
                subTitle: "Space not allowed in name",
            });
            alert_3.present();
            setTimeout(function () { return alert_3.dismiss(); }, 1500);
        }
        else if (signup.value.name.indexOf(' ') == 0) {
            var alert_4 = this.alertCtrl.create({
                title: 'Signup',
                subTitle: "Space not allowed in name",
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 1500);
        }
        else if (signup.value.password == signup.value.cpassword) {
            this.Loading.present();
            var data = {
                name: signup.value.name,
                email: signup.value.email,
                password: signup.value.password,
                role: 'dj'
            };
            var Serialized = this.serializeObj(data);
            var Loading = this.loadingCtrl.create({
                content: 'Please wait...',
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'users/registration', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    Loading.dismiss();
                    console.log(response);
                    if (response.isSuccess == true) {
                        _this.Loading.dismiss();
                        _this.events.publish('role', 'dj');
                        localStorage.setItem("USER_DATA", JSON.stringify(response.user_data));
                        var alert_5 = _this.alertCtrl.create({
                            title: 'Sign Up',
                            subTitle: response.msg,
                            buttons: ['ok']
                        });
                        alert_5.present();
                        //  setTimeout(() => alert.dismiss(), 4500);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__["a" /* SubscribedjPage */]);
                    }
                    else {
                        _this.Loading.dismiss();
                        var alert_6 = _this.alertCtrl.create({
                            title: 'Signup',
                            subTitle: response.msg,
                            buttons: ['ok']
                        });
                        alert_6.present();
                        //setTimeout(() => alert.dismiss(), 4500);
                    }
                });
            });
        }
        else {
            var alert_7 = this.alertCtrl.create({
                title: 'Signup',
                subTitle: 'Password did not match',
            });
            alert_7.present();
            setTimeout(function () { return alert_7.dismiss(); }, 2500);
        }
    };
    SignupdjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SignupdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupdjPage');
    };
    SignupdjPage.prototype.signinPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__logindj_logindj__["a" /* LogindjPage */]);
    };
    return SignupdjPage;
}());
SignupdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signupdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/signupdj/signupdj.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="{{classval}}">\n\n  <ion-navbar align-title="center" color="dark" style="background: none;">\n    <ion-title align-title="center">Sign Up</ion-title>\n    <button (click)="setBackButtonAction()"ion-button="bar-button">\n        <span class="button-inner"><ion-icon class="back-button-icon icon icon-ios back-button-icon-ios ion-ios-arrow-back" role="img" aria-label="arrow back"></ion-icon>\n        <span class="back-button-text back-button-text-ios" style="transform: translateX(0px);"></span></span>\n        <div class="button-effect"></div>\n      </button>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="margintop" padding style="background: url(assets/img/loginbg.jpg); background-size:cover;" (ionScroll)="scrollHandler($event)">\n  <div class="login_outer">\n    <div class="logo"><img src="assets/img/logo.png"></div>\n    <div class="form_sec">\n      <form #signupdjForm="ngForm" novalidate>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" [(ngModel)]="data.name" name="name" placeholder="Name" #name=\'ngModel\' required></ion-input>\n          </ion-item>\n          <ion-label class="alert alert-danger" color="danger">\n            <div *ngIf="name.errors && (name.dirty || name.touched)">\n              <div [hidden]="!name.errors.required">\n                Field is required\n              </div>\n            </div>\n          </ion-label>\n          <ion-item>\n            <ion-input type="email" [(ngModel)]="data.email" name="email" placeholder="Email Address" #email=\'ngModel\' required pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\'\n              required></ion-input>\n          </ion-item>\n          <ion-label class="alert alert-danger" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.required">\n                Email is required\n              </div>\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </ion-label>\n\n          <ion-item>\n            <ion-input type="password" minlength="5" [(ngModel)]="data.password" name="password" placeholder="Password" #password=\'ngModel\'\n              required></ion-input>\n          </ion-item>\n          <ion-label class="alert alert-danger" color="danger">\n            <div *ngIf="password.errors && (password.dirty || password.touched)">\n              <div [hidden]="!password.errors.required">\n                Password is required\n              </div>\n            </div>\n            <div *ngIf="password.errors && (password.dirty || password.touched)">\n              <div [hidden]="!password.errors.minlength">\n                Minimum length 5 character\n              </div>\n            </div>\n          </ion-label>\n          \n          <ion-item>\n            <ion-input type="password" minlength="5" [(ngModel)]="data.cpassword" name="cpassword" placeholder="Confirm Password" #cpassword=\'ngModel\'\n              required></ion-input>\n          </ion-item>\n          <ion-label class="alert alert-danger" color="danger">\n            <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)">\n              <div [hidden]="!cpassword.errors.required">\n                Confirm password is required\n              </div>\n            </div>\n            <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)">\n              <div [hidden]="!cpassword.errors.minlength">\n                Minimum length 5 character\n              </div>\n            </div>\n          </ion-label>\n\n        </ion-list>\n        <div class="centerbutton">\n          <button class="custom_btn" (click)="register(signupdjForm)" [disabled]="!signupdjForm.form.valid" color="red" style="text-transform: uppercase;"\n            ion-button round>sign Up</button>\n        </div>\n      </form>\n      <div class="centerbutton" style="color:#fff;">Have an account?</div>\n      <div class="centerbutton" style="color:#fff; text-transform:uppercase; text-decoration:underline; margin-top:8px;" (click)="signinPage()">Sign In</div>\n\n      <!--<div class="centerbutton" style="color:#fff; margin-top: 10vh;">Skip</div>-->\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/signupdj/signupdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], SignupdjPage);

//# sourceMappingURL=signupdj.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageeventsdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pasteventdj_pasteventdj__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__omniaclubeventdj_omniaclubeventdj__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editevent_editevent__ = __webpack_require__(149);
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
 * Generated class for the ManageeventsdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ManageeventsdjPage = (function () {
    function ManageeventsdjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.manageevent();
        this.segments = "team";
    }
    ManageeventsdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManageeventsdjPage');
    };
    ManageeventsdjPage.prototype.manageevent = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                userid: Userid,
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/manageevent', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.status == true) {
                    _this.pastevnt = data.pastevent;
                    _this.upevnt = data.upevent;
                    console.log(data);
                    console.log("vikkki");
                }
                else {
                }
            });
        });
    };
    ManageeventsdjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ManageeventsdjPage.prototype.pastevent = function (eventid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pasteventdj_pasteventdj__["a" /* PasteventdjPage */], {
            eventid: eventid
        });
    };
    ManageeventsdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    ManageeventsdjPage.prototype.editEvent = function (eventid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editevent_editevent__["a" /* EditeventPage */], {
            evntiid: eventid
        });
    };
    ManageeventsdjPage.prototype.omniaclubevent = function (eventid, eventname) {
        localStorage.setItem('name', eventname);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__omniaclubeventdj_omniaclubeventdj__["a" /* OmniaclubeventdjPage */], {
            evntid: eventid
        });
    };
    return ManageeventsdjPage;
}());
ManageeventsdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-manageeventsdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/manageeventsdj/manageeventsdj.html"*/'<!--\n  Generated template for the ManageeventsdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="black">\n        <ion-title>Manage Events</ion-title>\n        <div class="logo">\n            <img src="assets/img/rlogo.png">\n        </div>\n    </ion-navbar>\n    <ion-toolbar class="tabing">\n        <ion-segment style="padding:5px;" color="red" full [(ngModel)]="segments">\n\n            <ion-segment-button class="segment-button segment-activated" value="team" ng-reflect-value="sale" aria-pressed="true"> Upcoming Events </ion-segment-button>\n\n            <ion-segment-button value="reserve"> Past Events </ion-segment-button>\n\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content style="background: #f2f2f2;">\n    <div [ngSwitch]="segments">\n        <div class="past">\n            <ion-list *ngSwitchCase="\'team\'">\n                <ion-item *ngFor="let u of upevnt; let k = index">\n                    <div> <button ion-button (click)="editEvent(u?.Event.id)"> Edit </button></div>\n                    <div class="brdr" (click)="omniaclubevent(u?.Event.id,u?.Event.event_name)">\n                        <div class="date-sec blue">\n                            <h2>{{u?.Event.Day}}</h2>\n                            <h1>{{u?.Event.Month}}</h1>\n                        </div>\n                        <h3>{{u?.Event.event_name}}</h3>\n                        <p>{{u?.Event.venue_address}}</p>\n\n                    </div>\n\n                </ion-item>\n\n                <div class="unshow" *ngIf="upevnt?.length == 0">\n                    <h3>Upcoming events unavailable</h3>\n                </div>\n            </ion-list>\n        </div>\n\n        <div class="past">\n            <ion-list *ngSwitchCase="\'reserve\'">\n                <ion-item *ngFor="let p of pastevnt; let i = index" (click)="pastevent(p?.Event.id)">\n                    <div class="brdr">\n                        <div class="date-sec blue">\n                            <h2>{{p?.Event.Day}}</h2>\n                            <h1>{{p?.Event.Month}}</h1>\n                        </div>\n                        <h3>{{p?.Event.event_name}}</h3>\n                        <p>{{p?.Event.venue_address}}</p>\n                    </div>\n                </ion-item>\n                <div class="unshow" *ngIf="pastevnt?.length == 0">\n                    <h3>Past events unavailable</h3>\n                </div>\n\n                <!-- <ion-item (click)="pastevent()">\n      	<div class="brdr">\n        	<div class="date-sec pink">\n        		<h2>06</h2>\n        		<h1>Sep</h1>\n        	</div>\n        	<h3>Rage Against the machine</h3>\n        	<p>Event location</p>\n        </div>\n      </ion-item>\n      <ion-item (click)="pastevent()">\n      	<div class="brdr">\n        	<div class="date-sec blue">\n        		<h2>06</h2>\n        		<h1>Sep</h1>\n        	</div>\n        	<h3>Rage Against the machine</h3>\n        	<p>Event location</p>\n        </div>\n      </ion-item>\n      <ion-item (click)="pastevent()">\n      	<div class="brdr">\n        	<div class="date-sec pink">\n        		<h2>06</h2>\n        		<h1>Sep</h1>\n        	</div>\n        	<h3>Rage Against the machine</h3>\n        	<p>Event location</p>\n        </div>\n      </ion-item>\n      <ion-item (click)="pastevent()">\n      	<div class="brdr">\n        	<div class="date-sec blue">\n        		<h2>06</h2>\n        		<h1>Sep</h1>\n        	</div>\n        	<h3>Rage Against the machine</h3>\n        	<p>Event location</p>\n        </div>\n      </ion-item>\n      <ion-item (click)="pastevent()">\n      	<div class="brdr">\n        	<div class="date-sec pink">\n        		<h2>06</h2>\n        		<h1>Sep</h1>\n        	</div>\n        	<h3>Rage Against the machine</h3>\n        	<p>Event location</p>\n        </div>\n      </ion-item> -->\n            </ion-list>\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/manageeventsdj/manageeventsdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ManageeventsdjPage);

//# sourceMappingURL=manageeventsdj.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameofeventsdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playnowlistdj_playnowlistdj__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topqueuedj_topqueuedj__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gauranteedj_gauranteedj__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__possiblydj_possiblydj__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__voteupdj_voteupdj__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shoutoutdj_shoutoutdj__ = __webpack_require__(148);
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
 * Generated class for the NameofeventsdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NameofeventsdjPage = (function () {
    function NameofeventsdjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.eventname = navParams.get("eventname");
        if (this.eventname == undefined) {
            this.eventname = "Dj's Event";
            this.requestinfo();
        }
        else {
            this.playnow = 0;
            this.gauranteedplay = 0;
            this.possiblyplay = 0;
            this.topqueue = 0;
            this.voteup = 0;
            this.eventidd = 0;
            this.shoutoutdj = 0;
        }
    }
    NameofeventsdjPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.requestinfo();
        console.log('refreshed');
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    NameofeventsdjPage.prototype.requestinfo = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                djid: Userid,
            };
            console.log(data);
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/requestcount', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    _this.playnow = data.playnow;
                    _this.gauranteedplay = data.gauranteedplay;
                    _this.possiblyplay = data.possiblyplay;
                    _this.topqueue = data.topqueue;
                    _this.voteup = data.voteup;
                    _this.eventidd = data.eventid;
                    _this.shoutoutdj = data.shoutout;
                }
                else {
                }
            });
        });
    };
    NameofeventsdjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    NameofeventsdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NameofeventsdjPage');
    };
    NameofeventsdjPage.prototype.topque = function (eventid) {
        if (this.eventname == undefined) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__topqueuedj_topqueuedj__["a" /* TopqueuedjPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__topqueuedj_topqueuedj__["a" /* TopqueuedjPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
    };
    NameofeventsdjPage.prototype.play = function (eventid) {
        if (this.eventname == undefined) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__playnowlistdj_playnowlistdj__["a" /* PlaynowlistdjPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__playnowlistdj_playnowlistdj__["a" /* PlaynowlistdjPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
    };
    NameofeventsdjPage.prototype.grntply = function (eventid) {
        if (this.eventname == undefined) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__gauranteedj_gauranteedj__["a" /* GauranteedjPage */], {
                eventid: eventid,
                eventname: this.eventname,
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__gauranteedj_gauranteedj__["a" /* GauranteedjPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
    };
    NameofeventsdjPage.prototype.possply = function (eventid) {
        if (this.eventname == undefined) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__possiblydj_possiblydj__["a" /* PossiblydjPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__possiblydj_possiblydj__["a" /* PossiblydjPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
    };
    NameofeventsdjPage.prototype.voteupnow = function (eventid) {
        if (this.eventname == undefined) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__voteupdj_voteupdj__["a" /* VoteupdjPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__voteupdj_voteupdj__["a" /* VoteupdjPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
    };
    NameofeventsdjPage.prototype.shoutout = function (eventid) {
        if (this.eventname == undefined) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__shoutoutdj_shoutoutdj__["a" /* ShoutoutdjPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__shoutoutdj_shoutoutdj__["a" /* ShoutoutdjPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
    };
    NameofeventsdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    return NameofeventsdjPage;
}());
NameofeventsdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-nameofeventsdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/nameofeventsdj/nameofeventsdj.html"*/'<!--\n  Generated template for the NameofeventsdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="black">\n        <button ion-button menuToggle>\n					<ion-icon style="color:#fff;" name="menu"></ion-icon>\n			</button>\n        <ion-title>{{eventname}}</ion-title>\n        <div class="logo">\n            <img src="assets/img/rlogo.png">\n        </div>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content style="color:#878787;" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n    </ion-refresher>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-6>\n                <div class="colm" (click)="play(eventidd)">\n                    <img src="assets/img/playbg.png">\n                    <h6>Play Now</h6>\n                    <div class="cricle">\n                        <p>{{playnow}}</p>\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col col-6>\n                <div class="colm" (click)="topque(eventidd)">\n                    <img src="assets/img/topbg.png">\n                    <h6 class="">Top Queue </h6>\n                    <div class="cricle">\n                        <p>{{topqueue}}</p>\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="grntply(eventidd)">\n                <div class="colm">\n                    <img src="assets/img/guarbg.png">\n                    <h6 class="">GUARANTEED PLAY</h6>\n                    <div class="cricle">\n                        <p>{{gauranteedplay}}</p>\n                    </div>\n                </div>\n            </ion-col>\n\n            <ion-col col-6 (click)="possply(eventidd)">\n                <div class="colm">\n                    <img src="assets/img/possbg.png">\n                    <h6 class="">Possibly Play</h6>\n                    <div class="cricle">\n                        <p>{{possiblyplay}}</p>\n                    </div>\n                </div>\n            </ion-col>\n\n            <ion-col col-12 (click)="voteupnow(eventidd)">\n                <div class="colm">\n                    <img src="assets/img/votbg.png">\n                    <h6 class="">Voteup Requests</h6>\n                    <div class="cricle">\n                        <p>{{voteup}}</p>\n                    </div>\n                </div>\n            </ion-col>\n            \n            <ion-col col-12 (click)="shoutout(eventidd)">\n                <div class="colm">\n                    <img src="assets/img/votbg.png">\n                    <h6 class="">Shoutouts Requests</h6>\n                    <div class="cricle">\n                        <p>{{shoutoutdj}}</p>\n                    </div>\n                </div>\n            </ion-col>\n\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/nameofeventsdj/nameofeventsdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], NameofeventsdjPage);

//# sourceMappingURL=nameofeventsdj.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipdetaildjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subscribedjupdate_subscribedjupdate__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__ = __webpack_require__(20);
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
            content: 'Please wait...'
        });
        this.getsubsdata();
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
                console.log(data);
                Loader.dismiss();
                if (data.isSucess == "true") {
                    _this.subscrip = data.data;
                }
                else {
                    var alertr_1 = _this.alertCtrl.create({
                        //title: 'Requests',
                        subTitle: 'Membership cancelled',
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
        var userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Loader.present().then(function () {
            var data = {
                userid: userid,
            };
            console.log(data);
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'users/cancelmembership', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                //     console.log(data.response);
                // if (data.isSucess == "true") {
                //   localStorage.removeItem("fblogin");
                //   localStorage.removeItem("USER_DATA");
                //   localStorage.removeItem("facebook_pic");
                //   localStorage.removeItem("facebook_login");
                //   localStorage.removeItem("userid");
                //   localStorage.removeItem("fblogin");
                //   let alertr = this.alertCtrl.create({
                //     //title: 'Requests',
                //     subTitle: data.msg,
                //   });
                //     alertr.present();
                // setTimeout(()=>alertr.dismiss(),3500);
                // this.navCtrl.push(LogindjPage);
                // } else {
                //   let alertr = this.alertCtrl.create({
                //     //title: 'Requests',
                //     subTitle: data.msg,
                //   });
                //     alertr.present();
                // setTimeout(()=>alertr.dismiss(),3500);
                // }
            });
        });
    };
    MembershipdetaildjPage.prototype.updatemembr = function () {
        var alertr = this.alertCtrl.create({
            subTitle: 'Your plan not yet expired !',
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
    MembershipdetaildjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
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
        selector: 'page-membershipdetaildj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/membershipdetaildj/membershipdetaildj.html"*/'<!--\n  Generated template for the MembershipdetaildjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color="black">\n        <button ion-button menuToggle>\n				  <ion-icon style="color:#fff;" name="menu"></ion-icon>\n				</button>\n        <ion-title>Membership Detail</ion-title>\n        <div class="logo">\n            <img src="assets/img/rlogo.png">\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding style="background: #f2f2f2;">\n    <!-- <div class="content-sec card"> -->\n    <ion-card class="card_sec">\n\n        <ion-card-header>\n            <h1 *ngIf="subscrip?.User?.subscription_status==1">Amount Paid</h1>\n        </ion-card-header>\n        <ion-card-content class="cardbody">\n            <div class="pay">\n                <span *ngIf="subscrip?.User?.subscription_rate">${{subscrip?.User?.subscription_rate}}</span>\n                <span *ngIf="!subscrip?.User?.subscription_rate">$30</span>\n            </div>\n\n            <h2>Subscription</h2>\n            <h3 style="border-right:1px solid #ccc;" *ngIf="subscrip?.User?.subscription_start_date">Start Date : {{subscrip?.User?.subscription_start_date | date:\'MM-dd-yyyy \'}}</h3>\n            <h3 *ngIf="subscrip?.User?.subscription_end_date">End Date : {{subscrip?.User?.subscription_end_date | date:\'MM-dd-yyyy\'}}</h3>\n            <h3 *ngIf="!subscrip?.User?.subscription_start_date">Not started yet</h3>\n            <p class="valid">Valid for <span>One Month (Recurring)</span></p>\n\n        </ion-card-content>\n        <div class="btnsec">\n            <button ion-button color="dark" (click)="updatemembr()" *ngIf="subscrip?.User?.subscription_status==1">Update Billing Information</button>\n            <button ion-button color="red" (click)="updatememb()" *ngIf="subscrip?.User?.subscription_status==0">Buy Membership</button>\n            <button ion-button color="red" (click)="cancelmembr()" *ngIf="subscrip?.User?.subscription_status==1">Cancel membership</button>\n        </div>\n    </ion-card>\n    <!-- </div> -->\n\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/membershipdetaildj/membershipdetaildj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], MembershipdetaildjPage);

//# sourceMappingURL=membershipdetaildj.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsdjsubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subscribedj_subscribedj__ = __webpack_require__(36);
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
 * Generated class for the TermsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TermsdjsubsPage = (function () {
    function TermsdjsubsPage(navCtrl, navParams, http, appsetting, actionSheetCtrl, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.getterms();
    }
    TermsdjsubsPage.prototype.getterms = function () {
        var _this = this;
        this.Loader.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var postdata = {
            userid: user_id,
            position: "terms"
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/getterms', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.Loader.dismiss();
            if (response.isSucess == "true") {
                _this.terms = response.data.Staticpage;
                console.log(response.data.Staticpage);
            }
            else {
                _this.terms = [];
            }
        });
    };
    TermsdjsubsPage.prototype.setBackButtonAction = function () {
        //Write here wherever you wanna do
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__subscribedj_subscribedj__["a" /* SubscribedjPage */]);
    };
    TermsdjsubsPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    TermsdjsubsPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection'
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    return TermsdjsubsPage;
}());
TermsdjsubsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-termsdjsubs',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/termsdjsubs/termsdjsubs.html"*/'<!--\n  Generated template for the TermsPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="black">\n    <ion-title>{{terms?.title}}</ion-title>\n    <button (click)="setBackButtonAction()"ion-button="bar-button">\n        <span class="button-inner"><ion-icon class="back-button-icon icon icon-ios back-button-icon-ios ion-ios-arrow-back" role="img" aria-label="arrow back"></ion-icon>\n        <span class="back-button-text back-button-text-ios" style="transform: translateX(0px);"></span></span>\n        <div class="button-effect"></div>\n    </button>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<!-- <ion-content padding style="background:#373737;">\n  <div class="termsdj">\n <p> {{terms?.description}}</p>\n  </div>\n</ion-content> -->\n<ion-content padding>\n    <div class="main">\n     <h3>Terms & Conditions</h3>\n     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>\n     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more .</p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/termsdjsubs/termsdjsubs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], TermsdjsubsPage);

//# sourceMappingURL=termsdjsubs.js.map

/***/ })

},[369]);
//# sourceMappingURL=main.js.map