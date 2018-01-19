webpackJsonp([55],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageeventsdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pasteventdj_pasteventdj__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__omniaclubeventdj_omniaclubeventdj__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editevent_editevent__ = __webpack_require__(183);
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
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.segments = "team";
    }
    ManageeventsdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManageeventsdjPage');
    };
    ManageeventsdjPage.prototype.manageevent = function () {
        var _this = this;
        var d = new Date();
        var mm = ("0" + (d.getMonth() + 1)).slice(-2);
        var day = ("0" + (d.getDate())).slice(-2);
        var date = d.getFullYear() + "-" + mm + "-" + day;
        var minutes = d.getMinutes();
        var hour = d.getHours();
        var datime = d.getFullYear() + "-" + mm + "-" + day + " " + hour + ":" + minutes + ":00";
        var tmnow = hour + ":" + minutes + ":00";
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
                date: date,
                dattim: datime,
                tmnow: tmnow
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/manageevent', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.status == true) {
                    _this.pastevnt = data.pastevent;
                    _this.upevnt = data.upevent;
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
            eventird: eventid
        });
    };
    ManageeventsdjPage.prototype.ionViewCanEnter = function () {
        this.manageevent();
    };
    ManageeventsdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
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
        selector: 'page-manageeventsdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/manageeventsdj/manageeventsdj.html"*/'<!--\n  Generated template for the ManageeventsdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="black">\n        <ion-title>Manage Events</ion-title>\n        <div class="logo">\n            <img src="assets/img/rlogo.png">\n        </div>\n    </ion-navbar>\n    <ion-toolbar class="tabing">\n        <ion-segment style="padding:5px;" color="red" full [(ngModel)]="segments">\n\n            <ion-segment-button class="segment-button segment-activated" value="team" ng-reflect-value="sale" aria-pressed="true"> Upcoming Events </ion-segment-button>\n\n            <ion-segment-button value="reserve"> Past Events </ion-segment-button>\n\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content style="background: #f2f2f2;">\n    <div [ngSwitch]="segments">\n        <div class="past">\n            <ion-list *ngSwitchCase="\'team\'">\n                <ion-item *ngFor="let u of upevnt; let k = index">\n                    <div class="edit"> <button ion-button (click)="editEvent(u?.Event.id)" style="background: #b00101;"> Edit </button></div>\n                    <div class="brdr" (click)="omniaclubevent(u?.Event.id,u?.Event.event_name)">\n                        <div class="date-sec blue">\n                            <h2>{{u?.Event.Day}}</h2>\n                            <h1>{{u?.Event.Month}}</h1>\n                        </div>\n                        <h3>{{u?.Event.event_name}}</h3>\n                        <p>{{u?.Event.venue_address}}</p>\n                        <p *ngIf="u?.Event.active!=1"> Start now</p>\n                    </div>\n\n                </ion-item>\n\n                <div class="unshow" *ngIf="upevnt?.length == 0">\n                    <h3>Upcoming events unavailable</h3>\n                </div>\n            </ion-list>\n        </div>\n\n        <div class="past">\n            <ion-list *ngSwitchCase="\'reserve\'">\n                <ion-item *ngFor="let p of pastevnt; let i = index" (click)="pastevent(p?.Event.id)">\n                    <div class="brdr">\n                        <div class="date-sec blue">\n                            <h2>{{p?.Event.Day}}</h2>\n                            <h1>{{p?.Event.Month}}</h1>\n                        </div>\n                        <h3>{{p?.Event.event_name}}</h3>\n                        <p>{{p?.Event.venue_address}}</p>\n                    </div>\n                </ion-item>\n                <div class="unshow" *ngIf="pastevnt?.length == 0">\n                    <h3>Past events unavailable</h3>\n                </div>\n            </ion-list>\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/manageeventsdj/manageeventsdj.html"*/,
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

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameofeventsdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playnowlistdj_playnowlistdj__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topqueuedj_topqueuedj__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gauranteedj_gauranteedj__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__possiblydj_possiblydj__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shoutoutdj_shoutoutdj__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__voting_voting__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { VoteupdjPage } from '../voteupdj/voteupdj';


/**
 * Generated class for the NameofeventsdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NameofeventsdjPage = (function () {
    function NameofeventsdjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        // this.eventname = navParams.get("eventname");
        // if (this.eventname == undefined) {
        //   this.eventname = "Dj's Event";
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.setbit = false;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        // } else {
        //   this.playnow = 0;
        //   this.gauranteedplay = 0;
        //   this.possiblyplay = 0;
        //   this.topqueue = 0;
        //   this.voteup = 0;
        //   this.eventidd = 0;
        //   this.shoutoutdj = 0;
        // } 
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
        // let Loader = this.loadingCtrl.create({
        //   content: 'Please wait...'
        // });
        var d = new Date();
        var mm = ("0" + (d.getMonth() + 1)).slice(-2);
        var day = ("0" + (d.getDate())).slice(-2);
        var date = d.getFullYear() + "-" + mm + "-" + day;
        var minutes = d.getMinutes();
        var hour = d.getHours();
        var datime = d.getFullYear() + "-" + mm + "-" + day + " " + hour + ":" + minutes + ":00";
        var tmnow = hour + ":" + minutes + ":00";
        //Loader.present().then(() => {
        var data = {
            djid: Userid,
            date: date,
            dattim: datime,
            tmnow: tmnow
        };
        console.log(data);
        var serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'events/requestcount', serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // Loader.dismiss();
            console.log(data);
            if (data.isSucess == "true") {
                _this.playnow = data.playnow;
                _this.gauranteedplay = data.gauranteedplay;
                _this.possiblyplay = data.possiblyplay;
                _this.topqueue = data.topqueue;
                _this.voteup = data.voteup;
                _this.eventidd = data.eventid;
                _this.shoutoutdj = data.shoutout;
                _this.eventname = data.eventname;
                if (data.msg == "vikki") {
                    if (data.msgg == '' || data.msgg == undefined || data.msgg == "undefined") {
                        data.msgg = "No events available";
                    }
                    var alert_1 = _this.alertCtrl.create({
                        subTitle: data.msgg,
                        buttons: ['ok']
                    });
                    if (_this.setbit == false) {
                        alert_1.present();
                    }
                    setTimeout(function () {
                        alert_1.dismiss();
                        _this.setbit = true;
                    }, 2500);
                }
            }
            else {
            }
            // })
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__voting_voting__["a" /* VotingPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__voting_voting__["a" /* VotingPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
    };
    NameofeventsdjPage.prototype.shoutout = function (eventid) {
        if (this.eventname == undefined) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__shoutoutdj_shoutoutdj__["a" /* ShoutoutdjPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__shoutoutdj_shoutoutdj__["a" /* ShoutoutdjPage */], {
                eventid: eventid,
                eventname: this.eventname
            });
        }
    };
    NameofeventsdjPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        console.log('can enter');
        this.requestinfo();
        /********** Code to refresh page after 1 second **************/
        this.appsetting.interval = setInterval(function () {
            _this.requestinfo();
        }, 5000);
        /***** end **********/
    };
    NameofeventsdjPage.prototype.ionViewDidEnter = function () {
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
    return NameofeventsdjPage;
}());
NameofeventsdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-nameofeventsdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/nameofeventsdj/nameofeventsdj.html"*/'<!--\n  Generated template for the NameofeventsdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="black">\n        <button ion-button menuToggle>\n					<ion-icon style="color:#fff;" name="menu"></ion-icon>\n			</button>\n        <ion-title>{{eventname}}</ion-title>\n        <div class="logo">\n            <img src="assets/img/rlogo.png">\n        </div>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content style="color:#878787;" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n    </ion-refresher>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-6>\n                <div class="colm" (click)="play(eventidd)">\n                    <img src="assets/img/playbg.png">\n                    <h6>Play Now</h6>\n                    <div class="cricle">\n                        <p>{{playnow}}</p>\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col col-6>\n                <div class="colm" (click)="topque(eventidd)">\n                    <img src="assets/img/topbg.png">\n                    <h6 class="">Top Queue </h6>\n                    <div class="cricle">\n                        <p>{{topqueue}}</p>\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="grntply(eventidd)">\n                <div class="colm">\n                    <img src="assets/img/guarbg.png">\n                    <h6 class="">GUARANTEED PLAY</h6>\n                    <div class="cricle">\n                        <p>{{gauranteedplay}}</p>\n                    </div>\n                </div>\n            </ion-col>\n\n            <ion-col col-6 (click)="possply(eventidd)">\n                <div class="colm">\n                    <img src="assets/img/possbg.png">\n                    <h6 class="">Possibly Play</h6>\n                    <div class="cricle">\n                        <p>{{possiblyplay}}</p>\n                    </div>\n                </div>\n            </ion-col>\n\n           <!-- <ion-col col-12 (click)="voteupnow(eventidd)">\n                <div class="colm">\n                    <img src="assets/img/votbg.png">\n                    <h6 class="">Voteup Requests</h6>\n                    <div class="cricle">\n                        <p>{{voteup}}</p>\n                    </div>\n                </div>\n            </ion-col>  -->\n            \n            <ion-col col-12 (click)="shoutout(eventidd)">\n                <div class="colm">\n                    <img src="assets/img/votbg.png">\n                    <h6 class="">Shoutouts Requests</h6>\n                    <div class="cricle">\n                        <p>{{shoutoutdj}}</p>\n                    </div>\n                </div>\n            </ion-col>\n\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/nameofeventsdj/nameofeventsdj.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _f || Object])
], NameofeventsdjPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=nameofeventsdj.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsdjsubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subscribedj_subscribedj__ = __webpack_require__(46);
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
            content: 'Please wait...',
            dismissOnPageChange: true
        });
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
    TermsdjsubsPage.prototype.ionViewCanEnter = function () {
        this.getterms();
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
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
    };
    return TermsdjsubsPage;
}());
TermsdjsubsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-termsdjsubs',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/termsdjsubs/termsdjsubs.html"*/'<!--\n  Generated template for the TermsPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="black">\n    <ion-title>{{terms?.title}}</ion-title>\n    <button (click)="setBackButtonAction()"ion-button="bar-button">\n        <span class="button-inner"><ion-icon class="back-button-icon icon icon-ios back-button-icon-ios ion-ios-arrow-back" role="img" aria-label="arrow back"></ion-icon>\n        <span class="back-button-text back-button-text-ios" style="transform: translateX(0px);"></span></span>\n        <div class="button-effect"></div>\n    </button>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<!-- <ion-content padding style="background:#373737;">\n  <div class="termsdj">\n <p> {{terms?.description}}</p>\n  </div>\n</ion-content> -->\n<ion-content padding>\n    <div class="main">\n     <h3>Terms & Conditions</h3>\n     <p>{{terms?.description}}</p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/termsdjsubs/termsdjsubs.html"*/,
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

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__ = __webpack_require__(388);
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






/**
 * Generated class for the AddCardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddCardPage = (function () {
    function AddCardPage(navCtrl, navParams, http, appsetting, stripe, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.stripe = stripe;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.card = [];
    }
    AddCardPage.prototype.add_card = function (formdata) {
        var _this = this;
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        console.log(formdata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var email = JSON.parse(localStorage.getItem("USER_DATA")).email;
        this.stripe.setPublishableKey('pk_test_gGw0nKJtPn2n9zGD1JuR7iV6');
        var card = {
            number: formdata.value.cardnumber,
            expMonth: formdata.value.month,
            expYear: formdata.value.year,
            cvc: formdata.value.cvc,
            name: formdata.value.username,
            address_line1: formdata.value.address,
            address_city: formdata.value.city,
            address_state: formdata.value.state,
            postal_code: formdata.value.zip
        };
        console.log(card);
        this.stripe.createCardToken(card)
            .then(function (token) {
            //  console.log(token.id);
            //  alert('success');
            //  alert(token.id);
            var data = {
                email: email,
                price: _this.navParams.get('amount'),
                token: token.id,
                userid: user_id
            };
            var Serialized = _this.serializeObj(data);
            var Loading = _this.loadingCtrl.create({
                content: 'Please wait...',
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'subscriptions/stripe', Serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    // console.log(response);
                    Loading.dismiss();
                    //alert(JSON.stringify(response));
                    if (response.isSuccess == 'true') {
                        //alert('Subscribed thank you! Enjoy your features');
                        localStorage.removeItem("USER_DATA");
                        localStorage.setItem("USER_DATA", JSON.stringify(response.data));
                        var alertr_1 = _this.alertCtrl.create({
                            title: 'Subscription',
                            subTitle: 'Subscribed Successfully! Enjoy your features',
                            buttons: ['ok']
                        });
                        alertr_1.present();
                        setTimeout(function () { return alertr_1.dismiss(); }, 2500);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                    }
                    else {
                        //alert('Something went wrong!');
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Subscription',
                            subTitle: 'Something went wrong',
                            buttons: ['ok']
                        });
                        alert_1.present();
                        setTimeout(function () { return alert_1.dismiss(); }, 2500);
                    }
                });
            });
        })
            .catch(function (error) {
            console.error(error);
            alert(JSON.stringify(error));
        });
    };
    AddCardPage.prototype.cardFormat = function (number) {
        console.log('hero');
        console.log(number);
        if (number.length == 4) {
            this.card.cardnumber = number + '-';
        }
        else if (number.length == 9) {
            this.card.cardnumber = number + '-';
        }
        else if (number.length == 14) {
            this.card.cardnumber = number + '-';
        }
    };
    AddCardPage.prototype.dateFormat = function (date) {
        console.log(date);
        if (date.length == 2) {
            this.card.mmyy = date + '/';
        }
    };
    AddCardPage.prototype.contactFormat = function (number) {
        console.log(number);
        if (number.length == 3) {
            this.card.contact = number + '-';
        }
        else if (number.length == 7) {
            this.card.contact = number + '-';
        }
    };
    AddCardPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AddCardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCardPage');
    };
    return AddCardPage;
}());
AddCardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-card',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/add-card/add-card.html"*/'<!--\n  Generated template for the AddCardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="black">\n    <ion-title>Add Card</ion-title>\n       <ion-buttons end class="rbutton">\n          <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n       </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <ion-list style="margin-bottom:0px;" class="list_cnt">\n    <ion-item>\n        <h5 style="padding: 0 0 0 5px;" class="addpaytitle">Card Details (powered by Stripe):</h5>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="custom_accordion" style="margin-bottom:5px;">\n    <ion-grid>\n    <form #cardForm="ngForm" >\n      <ion-row class="process">\n\n        <ion-col col-12>\n              <ion-item>\n                <ion-input type="text" placeholder="Name" [(ngModel)]=\'card.username\' pattern="[a-zA-Z][a-zA-Z ]+" required name="username" #username=\'ngModel\'></ion-input>\n              </ion-item>\n           \n            <div *ngIf="username.errors && (username.dirty || username.touched)" class="alert alert-danger leftpadding">\n              <div [hidden]="!username.errors.required" class="alert alert-danger">\n                Name is required\n              </div>\n              <div [hidden]="!username.errors.pattern" class="alert alert-danger">\n                Invalid name\n              </div>\n            </div>       \n        </ion-col>\n\n        <ion-col col-12>\n          <ion-item>\n            <ion-input type="tel" [(ngModel)]=\'card.cardnumber\' name=\'cardnumber\' minlength=\'16\' maxlength=\'16\' required #cardnumber=\'ngModel\' placeholder="Enter card number"></ion-input>\n          </ion-item>\n         <div *ngIf="cardnumber.errors && (cardnumber.dirty || cardnumber.touched)" class="alert alert-danger leftpadding">\n            <div [hidden]="!cardnumber.errors.required" class="alert alert-danger">\n                  Card number is required\n            </div>\n            <div [hidden]="!cardnumber.errors.minlength" class="alert alert-danger">\n                  16 digits required\n            </div>\n         </div>\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-item>\n             <!-- <ion-label>Date</ion-label> -->\n            <ion-input type="tel" [(ngModel)]=\'card.month\' placeholder="Expiry month" maxlength=\'12\' required name=\'month\' #month=\'ngModel\'></ion-input>\n          </ion-item>\n        \n          <div *ngIf="month.errors && (month.dirty || month.touched)" class="alert alert-danger leftpadding">\n            <div [hidden]="!month.errors.required" class="alert alert-danger">\n              This field is required\n            </div>\n            <div [hidden]="!month.errors.maxlength" class="alert alert-danger">\n                This field is required\n            </div>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n            <ion-item>\n               <!-- <ion-label>Date</ion-label> -->\n              <ion-input type="tel" [(ngModel)]=\'card.year\' placeholder="Expiry year" required name=\'year\' #year=\'ngModel\'></ion-input>\n            </ion-item>\n          \n            <div *ngIf="year.errors && (year.dirty || year.touched)" class="alert alert-danger leftpadding">\n              <div [hidden]="!year.errors.required" class="alert alert-danger">\n                This field is required\n              </div>\n            </div>\n        </ion-col>\n\n        <ion-col col-12>\n          <ion-item>\n            <ion-input type="tel" [(ngModel)]=\'card.cvc\' minlength="3" maxlength="3" placeholder="CVC" pattern=\'[(0-9)]+\' required name=\'cvc\' #cvc=\'ngModel\'></ion-input>\n          </ion-item>\n        </ion-col>\n        <div *ngIf="cvc.errors && (cvc.dirty || cvc.touched)" class="alert alert-danger">\n            <div [hidden]="!cvc.errors.required" class="alert alert-danger">\n              CVC is required\n            </div>\n            <div [hidden]="!cvc.errors.pattern" class="alert alert-danger">\n               Invalid CVC\n            </div>\n        </div>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <h5 class="addpaytitle">Billing Address:</h5>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n         <ion-row class="process">\n         \n          <ion-col col-12>\n            <ion-item>\n              <ion-input type="text" placeholder="Address" [(ngModel)]=\'card.address\' required name="address" #address=\'ngModel\'></ion-input>\n            </ion-item>\n          \n          <div *ngIf="address.errors && (address.dirty || address.touched)" class="alert alert-danger leftpadding">\n              <div [hidden]="!address.errors.required" class="alert alert-danger">\n                Address is required\n              </div>\n          </div>\n            </ion-col>\n    \n          <ion-col col-6>\n                  <ion-item>\n                    <ion-input type="text" placeholder="City" [(ngModel)]=\'card.city\' required name="city" #city=\'ngModel\'></ion-input>\n                  </ion-item>\n                  <div *ngIf="city.errors && (city.dirty || city.touched)" class="alert alert-danger">\n                      <div [hidden]="!city.errors.required" class="alert alert-danger">\n                        City is required\n                      </div>\n                  </div>\n          </ion-col>\n    \n          <ion-col col-6 >\n            <ion-item>\n              <ion-input type="text" placeholder="State" [(ngModel)]=\'card.state\' required name="state" #state=\'ngModel\'></ion-input>\n            </ion-item>\n          \n              <div *ngIf="state.errors && (state.dirty || state.touched)" class="alert alert-danger leftpadding">\n                  <div [hidden]="!state.errors.required" class="alert alert-danger">\n                    State is required\n                  </div>\n              </div>\n          </ion-col>\n    \n           <ion-col col-6>\n              <ion-item>\n                <ion-input type="number" placeholder="Zip Code" [(ngModel)]=\'card.zip\' maxlength="6" required pattern=\'[0-9]+\' name="zip" #zip=\'ngModel\'></ion-input>\n              </ion-item>\n            \n            <div *ngIf="zip.errors && (zip.dirty || zip.touched)" class="alert alert-danger">\n              <div [hidden]="!zip.errors.required" class="alert alert-danger">\n                Zip is required\n              </div>\n              <div [hidden]="!zip.errors.pattern" class="alert alert-danger">\n                Invalid zipcode\n              </div>\n                <div [hidden]="!zip.errors.maxlength" class="alert alert-danger">\n                    Only 6 digit valid\n                </div>\n            </div>\n            </ion-col>\n    \n        </ion-row>\n       <ion-item>\n          <button class="custom_btn" color="red" type="submit" [disabled]=\'!cardForm.valid\' ion-button full round (click)="add_card(cardForm);">MAKE PAYMENT</button>\n              <!-- <button class="btn_globle" color="red" style="height: 49px; width: 100%; margin: 0px auto; float:none;" type="submit" [disabled]=\'!cardForm.valid\' (click)="add_card(cardForm);">MAKE PAYMENT</button> -->\n       </ion-item>\n        </form>\n        </ion-grid>\n  </ion-list>\n\n<!-- <ion-item class="radio_item">\n    <ion-label class="set">Set as default payment method</ion-label>\n    <ion-checkbox color="dark"  [(ngModel)]="default" value=\'default\' default (ionChange)="setDefault(default)"></ion-checkbox>\n  </ion-item> -->\n</ion-content>\n\n<!--<ion-footer class="send">\n  <a ion-button full (click)="cardPage();">SAVE</a>\n</ion-footer>-->\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/add-card/add-card.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__["a" /* Stripe */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], AddCardPage);

//# sourceMappingURL=add-card.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariableProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
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
        this.baseUrl = "http://vikrant.crystalbiltech.com/dj/api/";
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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribedjupdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__termsdjsubs_termsdjsubs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_card_add_card__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
//import { EventsdjPage } from '../eventsdj/eventsdj';



// import { LogindjPage } from '../logindj/logindj';
/**
 * Generated class for the SubscribedjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SubscribedjupdatePage = (function () {
    function SubscribedjupdatePage(navCtrl, navParams, events, appsetting, http, loadingCtrl, 
        //private payPal: PayPal,
        alertCtrl, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.data = {};
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_card_add_card__["a" /* AddCardPage */], { 'amount': this.subscriv.monthly_rate });
        }
    };
    SubscribedjupdatePage.prototype.terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__termsdjsubs_termsdjsubs__["a" /* TermsdjsubsPage */]);
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
    SubscribedjupdatePage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismissAll();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
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
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], SubscribedjupdatePage);

//# sourceMappingURL=subscribedjupdate.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntercodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__songrequests_songrequests__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
        var minutes = d.getMinutes();
        var hour = d.getHours();
        var datime = d.getFullYear() + "-" + mm + "-" + day + " " + hour + ":" + minutes + ":00";
        var tmnow = hour + ":" + minutes + ":00";
        this.Loading.present();
        var data = {
            userid: userid,
            djcode: form.value.code,
            date: date,
            dattim: datime,
            tmnow: tmnow
        };
        var Serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'events/entercode', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.Loading.dismiss();
            if (data.isSucess == "true") {
                if (data.data.Event == undefined) {
                    _this.showConfirm(data.data[0]);
                }
                else {
                    _this.showConfirm(data.data);
                }
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Dj Confirmation',
                    subTitle: data.msg,
                    buttons: ['ok']
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 3500);
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
                buttons: ['ok']
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
        selector: 'page-entercode',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/entercode/entercode.html"*/'<!--\n  Generated template for the EntercodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>Dj Code</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><ion-icon><img width="15px" src="assets/img/rlogo.png"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n  <div class="djcode_outer">\n  <div class="logo"><img src="assets/img/logofull.png"></div>\n<div class="form_sec">\n<form #codeForm="ngForm" (ngSubmit)="entercode(codeForm)" novalidate>\n  <ion-list>\n  <ion-item>\n    <ion-input type="text" placeholder="Enter Code" [(ngModel)]="data.code"  name=\'code\' required #code="ngModel"></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="code.errors && (code.dirty || code.touched)">\n        <div [hidden]="!code.errors.required" >\n         Dj code is required\n        </div>\n    </div>\n  </ion-label>\n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" color="yellow" [disabled]="!codeForm.form.valid" type="submit" style="text-transform: uppercase;" ion-button>Submit</button>\n</div>\n</form>\n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/entercode/entercode.html"*/,
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

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsongplayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payinfo_payinfo__ = __webpack_require__(95);
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
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.flag = false;
        this.djid = navParams.get("djid");
        this.eventid = navParams.get("eventid");
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
                buttons: ['ok']
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 3500);
        }
        else {
            if (form.value.tipamt != "") {
                if (parseInt(form.value.tipamt) < this.minprice) {
                    var alert_5 = this.alertCtrl.create({
                        title: 'Request a song',
                        subTitle: 'Tip amount should be greater than minimum tip',
                        buttons: ['ok']
                    });
                    alert_5.present();
                    setTimeout(function () { return alert_5.dismiss(); }, 3500);
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
            console.log(data.data);
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
                    buttons: ['ok']
                });
                alert_6.present();
                setTimeout(function () { return alert_6.dismiss(); }, 3500);
            }
        });
    };
    RequestsongplayPage.prototype.ionViewCanEnter = function () {
        this.showreqtype();
    };
    RequestsongplayPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_7 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_7.present();
            setTimeout(function () { return alert_7.dismiss(); }, 3500);
        }
    };
    RequestsongplayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestsongplayPage');
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
        var d = new Date();
        var mm = ("0" + (d.getMonth() + 1)).slice(-2);
        var day = ("0" + (d.getDate())).slice(-2);
        var minutes = d.getMinutes();
        var hour = d.getHours();
        var datime = d.getFullYear() + "-" + mm + "-" + day + " " + "00" + ":" + "00" + ":00";
        var postdata = {
            userid: userid,
            djid: this.djid,
            eventid: this.eventid,
            datime: datime
        };
        this.Loading.present();
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
                    buttons: ['ok']
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 2500);
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
                    buttons: ['ok']
                });
                alert_2.present();
                setTimeout(function () { return alert_2.dismiss(); }, 3500);
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Voteup Request',
                    subTitle: data.msg,
                    buttons: ['ok']
                });
                alert_3.present();
                setTimeout(function () { return alert_3.dismiss(); }, 3500);
            }
        });
    };
    VoteupPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismissAll();
            var alert_4 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 2500);
        }
    };
    return VoteupPage;
}());
VoteupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-voteup',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/voteup/voteup.html"*/'<!--\n  Generated template for the VoteupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		<ion-navbar color="black">\n			<ion-title>Voteup Request</ion-title>\n	    	 <ion-buttons end class="rbutton">\n		        <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n		     </ion-buttons>\n		</ion-navbar>\n	</ion-header>\n<!-- <ion-header>\n\n  <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Voteup Request</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n  <div class="voteup">\n    <ion-list no-lines>\n      <ion-item *ngFor="let request of requests; let i = index">\n        <h2>{{request?.ClubgoerRequest.songname}}</h2>\n        <p>{{request?.TipOption.name}}</p>\n        <ion-note item-end="" class="note note-ios"> \n          <button color="light" clear small ion-button icon-left  (click)="likeusrrequest(request?.ClubgoerRequest.id,request?.ClubgoerRequest.like,i)">\n            {{request?.RequestLike.length}}\n            <ion-icon *ngIf="request?.ClubgoerRequest.like>0" color="yellow" style="font-size:13px; padding-left:8px;" name="thumbs-up"></ion-icon>\n            <ion-icon *ngIf="request?.ClubgoerRequest.like==0" color="yellow" style="font-size:13px; padding-left:8px;" name="thumbs-down"></ion-icon>\n          </button> \n        </ion-note>\n        <ion-note item-end="" class="note time">${{request?.ClubgoerRequest.tip_amount}}</ion-note>\n      </ion-item>\n      <div class="unshow" *ngIf="requests?.length == 0">\n          <h3>No request available</h3>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/voteup/voteup.html"*/,
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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoutoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payinfo_payinfo__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(39);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
        var _this = this;
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
        if (form.value.tipamt == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'Shoutout',
                subTitle: 'Please fill the tip amount',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 3500);
        }
        else if (form.value.tipamt == 0) {
            var serialized = this.serializeObj(postdata);
            this.http.post(this.appsetting.myGlobalVar + 'users/shoutoutmake', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.Loading.dismiss();
                if (data.isSucess == "true") {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Shoutout',
                        subTitle: data.msg,
                        buttons: ['ok']
                    });
                    alert_2.present();
                    setTimeout(function () { return alert_2.dismiss(); }, 3500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Shoutout',
                        subTitle: data.msg,
                        buttons: ['ok']
                    });
                    alert_3.present();
                    setTimeout(function () { return alert_3.dismiss(); }, 3500);
                }
            });
        }
        else if (form.value.tipamt < 2 || form.value.tipamt == '') {
            var alert_4 = this.alertCtrl.create({
                title: 'Shoutout',
                subTitle: 'Tip amount should be greater than 1',
                buttons: ['ok']
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 3500);
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
            var alert_5 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_5.present();
            setTimeout(function () { return alert_5.dismiss(); }, 2500);
        }
    };
    return ShoutoutPage;
}());
ShoutoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shoutout',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/shoutout/shoutout.html"*/'<!--\n  Generated template for the ShoutoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Shout Out</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n  <div class="shoutout_outer">\n  <div class="logo"><img src="assets/img/logofull.png"></div>\n<div class="form_sec">\n  <form #shoutoutForm="ngForm" novalidate > \n  <div class="form_secinn">\n  <ion-list>\n\n <ion-item>\n    <ion-input type="text" [(ngModel)]="data.name" name="name"  placeholder="Name" #name=\'ngModel\' required></ion-input>\n </ion-item>\n <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="name.errors && (name.dirty || name.touched)">\n       <div [hidden]="!name.errors.required" >\n         Field is required\n        </div>\n    </div>\n </ion-label>\n  <ion-item>\n    <ion-input type="text" placeholder="Shoutout Type" [(ngModel)]="data.shouttype" name="shouttype" #shouttype=\'ngModel\' required></ion-input>\n  </ion-item>\n  <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="shouttype.errors && (shouttype.dirty || shouttype.touched)">\n       <div [hidden]="!shouttype.errors.required" >\n         Field is required\n        </div>\n    </div>\n  </ion-label>\n  <ion-item>\n    <ion-input type="tel" placeholder="Tip Amount" pattern="[0-9]+" [(ngModel)]="data.tipamt" name="tipamt" #tipamt=\'ngModel\' required></ion-input>\n  </ion-item>\n  <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="tipamt.errors && (tipamt.dirty || tipamt.touched)">\n       <div [hidden]="!tipamt.errors.required" >\n              Field is required\n        </div>\n        <div [hidden]="!tipamt.errors.pattern" >\n              Only number allowed\n        </div>\n    </div>\n  </ion-label>\n  \n</ion-list>\n</div>\n<div class="centerbutton">\n   <button class="custom_btn" (click)="shoutout(shoutoutForm)" [disabled]="!shoutoutForm.form.valid" color="yellow" style="text-transform: uppercase;" ion-button round>Request Shout Out</button>\n</div>\n</form>\n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/shoutout/shoutout.html"*/,
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

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DjsdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(41);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
                if (data.data.User.audiourl == null || data.data.User.audiourl == "null" || data.data.User.audiourl == undefined || data.data.User.audiourl == "") {
                    _this.videoUrl = null;
                }
                else {
                    if (data.data.User.audiourl.search("mixcloud") != -1) {
                        _this.videoUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(data.data.User.audiourl);
                    }
                    else {
                        _this.utube = data.data.User.audiourl.replace("watch?v=", "embed/");
                        _this.videoUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.utube);
                    }
                }
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Dj Details',
                    subTitle: data.msg,
                    buttons: ['ok']
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 3500);
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
                buttons: ['ok']
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 3500);
        }
    };
    return DjsdetailsPage;
}());
DjsdetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-djsdetails',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/djsdetails/djsdetails.html"*/'<!--\n  Generated template for the DjsdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="black">\n        <ion-title>Dj\'s Details</ion-title>\n        <ion-buttons end class="rbutton">\n            <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="djs_bg">\n    <div class="djdetails_sec">\n        <div class="full_img">\n            <img *ngIf="djs?.User.image" [src]="djs?.User.image">\n        </div>\n    </div>\n    <div class="padding titletxt">\n        <p style="font-size: 17px;"><span>Name: </span>{{djs?.User.complete_name}}</p>\n        <p style="font-size: 17px;"><span>E-mail: </span>{{djs?.User.email}}</p>\n        <p style="font-size: 17px;"><span>Dj Code: </span>{{djs?.User.djcode}}</p>\n        <p style="font-size: 17px;" *ngIf="djs?.User.biography"><span>Dj Biography : </span>{{djs?.User.biography}}</p>\n        <iframe *ngIf="videoUrl!=null" width="100%" height="315" [src]="videoUrl" frameborder="0" align="middle"></iframe>\n    </div>\n    <h4 style="    color: #fff;\n    text-align: center;\n    font-size: 19px; margin: 28px 0 0 0;">Upcoming Events</h4>\n    <div class="productscroll">\n\n        <ion-scroll scrollX="true" *ngIf="djs?.Event">\n            <div class="event_box" *ngIf="djs?.Event?.length == 0">\n                <h3 style="color: #fff;">No events available</h3>\n            </div>\n            <div class="event_box" *ngFor="let dj of djs?.Event">\n                <h5 style="font-size: 17px;">{{dj?.event_name}}</h5>\n                <div class="imageboxed">\n                    <img [src]="dj?.image">\n                </div>\n             \n\n                <ion-item>\n                            <ion-label>\n                                    Venue Name:\n                            </ion-label>\n                            <div item-content>\n                                    {{dj?.venue_name}}\n                            </div>\n                          </ion-item>\n            \n                          <ion-item>\n                                <ion-label>\n                                        Event Date/Time:\n                                </ion-label>\n                                <div item-content>\n                                        {{dj?.event_date+" "+dj?.event_time}}\n                                </div>\n                              </ion-item>\n            \n            \n                          <!-- <ion-item>\n                                <ion-label>\n                                        TO\n                                </ion-label>\n                                <div item-content>\n                                        {{dj?.start_event+" "+dj?.scheduled_start_time}}\n                                </div>\n                          </ion-item> -->\n                </div>\n        </ion-scroll>\n       \n    \n    \n\n\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/djsdetails/djsdetails.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _h || Object])
], DjsdetailsPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=djsdetails.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DjslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__djsdetails_djsdetails__ = __webpack_require__(166);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
                    buttons: ['ok']
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 3500);
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
                buttons: ['ok']
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 3500);
        }
    };
    return DjslistPage;
}());
DjslistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-djslist',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/djslist/djslist.html"*/'<!--\n  Generated template for the DjslistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Dj\'s List</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n<ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content style="color:#878787;" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n</ion-refresher>\n  <div class="djslist">\n    <div class="imagebox" *ngFor="let dj of djs;">\n      <span (click)="djdetailsPage(dj.User.id)">\n      <img src="{{dj.User.image}}">\n      <div class="overlay"></div>\n      <h3>{{dj.User.complete_name}}</h3>\n      </span>\n    </div>\n    <div class="unshow" *ngIf="djs?.length == 0">\n      <h3> No Dj\'s available</h3>\n     </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/djslist/djslist.html"*/,
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
    TermsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getterms();
        console.log('refreshed');
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    TermsPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    TermsPage.prototype.ionViewCanEnter = function () {
        this.getterms();
    };
    TermsPage.prototype.ionViewDidEnter = function () {
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
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
    };
    return TermsPage;
}());
TermsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/terms/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#fff;" name="menu"></ion-icon>\n    </button>\n    <ion-title>{{terms?.title}}</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content style="color:#878787;" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n    </ion-refresher>\n    <div class="main">\n     <h3>Terms & Conditions</h3>\n     <p>{{terms?.description}}</p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/terms/terms.html"*/,
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.getterms();
    }
    PrivacyPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getterms();
        console.log('refreshed');
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
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
            this.Loader.dismissAll();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
    };
    return PrivacyPage;
}());
PrivacyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-privacy',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/privacy/privacy.html"*/'<!--\n  Generated template for the PrivacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#fff;" name="menu"></ion-icon>\n    </button>\n    <ion-title>{{terms?.title}}</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content style="color:#878787;" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n    </ion-refresher>\n    <div class="main">\n     <h3>Privacy Policy</h3>\n     <p>{{terms?.description}}</p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/privacy/privacy.html"*/,
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

/***/ 170:
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
        var curdat = montn + "-" + daynw + "-" + dt.getFullYear(); // dt.getFullYear()+"-"+montn+"-"+daynw;
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
        selector: 'page-addeventdjnew',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/addeventdjnew/addeventdjnew.html"*/'<!--\n  Generated template for the AddeventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		<ion-navbar color="black">\n			<ion-title>Add Event</ion-title>\n	    	 <ion-buttons end class="rbutton">\n		        <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n		     </ion-buttons>\n		</ion-navbar>\n	</ion-header>\n	\n	\n	<ion-content>\n		<div class="imgsec">\n			<img [src]="logo">\n		</div>\n		<div class="form-sec">\n			<ion-grid>\n				<ion-row>\n					<ion-col>\n						\n						<form #addeventForm="ngForm" class="event-form">\n							<ion-col col-12>\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="text" placeholder="Venue name" [(ngModel)]="data.venuename" name="venuename" #venuename=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="venuename.errors && (venuename.dirty || venuename.touched)">\n											   <div [hidden]="!venuename.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n							</ion-col>\n								\n								<ion-col col-12>\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="text" placeholder="Venue address" [(ngModel)]="data.venueaddress" name="venueaddress" #venueaddress=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="venueaddress.errors && (venueaddress.dirty || venueaddress.touched)">\n											   <div [hidden]="!venueaddress.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n								<ion-col col-12>\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="text" placeholder="Event name" [(ngModel)]="data.eventname" name="eventname" #eventname=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventname.errors && (eventname.dirty || eventname.touched)">\n											   <div [hidden]="!eventname.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n								 <div class="colm">\n						<ion-col col-12>\n								<ion-row>\n							<ion-col col-6>\n									<ion-list>\n										<ion-item>\n												\n												<ion-datetime min="{{minyear}}" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY" [(ngModel)]="data.eventstartdt" (ngModelChange)="updateDueDate($event)" name="eventstartdt" placeholder="Event start date" #eventstartdt=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventstartdt.errors && (eventstartdt.dirty || eventstartdt.touched)">\n											   <div [hidden]="!eventstartdt.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n	\n							<ion-col col-6>\n									<ion-list>\n										<ion-item>\n												<ion-datetime min="{{maxyear}}" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY"  placeholder="Event end date" [(ngModel)]="data.eventenddt" name="eventenddt" #eventenddt=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventenddt.errors && (eventenddt.dirty || eventenddt.touched)">\n											   <div [hidden]="!eventenddt.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n							</ion-row>\n						</ion-col>\n					</div>\n						<div class="colm>">\n						<ion-col col-12>\n							<ion-row>\n							<ion-col col-6 class="padding0lft">\n									<ion-list>\n										<ion-item>\n												<ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Event start time" [(ngModel)]="data.eventsarttm" name="eventsarttm" #eventsarttm=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventsarttm.errors && (eventsarttm.dirty || eventsarttm.touched)">\n											   <div [hidden]="!eventsarttm.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n							<ion-col col-6 class="padding0rgt">\n									<ion-list>\n										<ion-item>\n												<ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Event end time" [(ngModel)]="data.eventendtm" name="eventendtm" #eventendtm=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventendtm.errors && (eventendtm.dirty || eventendtm.touched)">\n											   <div [hidden]="!eventendtm.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n						</ion-row>\n						</ion-col>\n					</div>\n					<ion-col col-12>\n						<ion-row>\n							<div class="tip" (click)="toggleDetails(taggel)">\n								<h3>Setup Tip Amounts</h3>\n								<button class="abc" ion-button icon-right>\n									<ion-icon name="arrow-down"></ion-icon>\n								</button>\n							</div>\n						</ion-row>\n					</ion-col>\n					<ion-col col-12 *ngIf="taggel">\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="tel" placeholder="Minimum amount for Play Now" min="2" [(ngModel)]="data.minplay" name="minplay" #minplay=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="minplay.errors && (minplay.dirty || minplay.touched)">\n											   <div [hidden]="!minplay.errors.required" >\n													 Field is required\n											   </div>\n												<div [hidden]="!minplay.errors.min" >\n													Minimum amount should be 2 \n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n							 \n								<ion-col col-12 *ngIf="taggel">\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="tel" placeholder="Minimum amount for Guaranteed Play" min="2" [(ngModel)]="data.mingrnt" name="mingrnt" #mingrnt=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="mingrnt.errors && (mingrnt.dirty || mingrnt.touched)">\n											   <div [hidden]="!mingrnt.errors.required" >\n												 Field is required\n												</div>\n												<div [hidden]="!mingrnt.errors.min" >\n													Minimum amount should be 2 \n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n								<ion-col col-12 *ngIf="taggel">\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="tel" placeholder="Minimum amount for Possibly Play" min="2" [(ngModel)]="data.minpossi" name="minpossi" #minpossi=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="minpossi.errors && (minpossi.dirty || minpossi.touched)">\n											   <div [hidden]="!minpossi.errors.required" >\n													 Field is required\n											   </div>\n											   <div [hidden]="!minpossi.errors.min" >\n													Minimum amount should be 2 \n											   </div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n							\n						<ion-col col-12>\n							<ion-row>\n								<div *ngIf="srcImage" class="upload_imgouter">\n									<img [src]="srcImage"/>\n								</div>  \n								<!-- <ion-label  class="alert alert-danger" color="danger">\n									<div *ngIf="img.errors && (img.dirty || img.touched)">\n										   <div [hidden]="!img.errors.required" >\n											 Field is required\n										</div>\n									</div>\n								</ion-label> -->\n								\n										<input (click)="CameraActionadd()" type="button" value="Upload Image" class="upladbtn">  \n							\n								\n							</ion-row>\n						</ion-col>\n						\n						<ion-col col-12>\n							<ion-row>\n								<div class="bottombtn">\n									<button ion-button type="submit" [disabled]="!addeventForm.form.valid"  (click)="addeventnow(addeventForm)">Save</button>\n								</div>\n							</ion-row>\n						</ion-col>\n					</form>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	\n	</ion-content>\n	\n	'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/addeventdjnew/addeventdjnew.html"*/,
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

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasteventdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymenthistorydj_paymenthistorydj__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requesthistorydj_requesthistorydj__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.pastevntid = navParams.get("eventird");
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
                    _this.playnow = data.data[0][0].TipOption.price;
                    _this.grntplay = data.data[0][1].TipOption.price;
                    _this.possibly = data.data[0][2].TipOption.price;
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
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
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
        selector: 'page-pasteventdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/pasteventdj/pasteventdj.html"*/'<!--\n  Generated template for the PasteventdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		\n			<ion-navbar color="black">\n				<ion-title>{{pastevntdata?.Event.event_name}}</ion-title>\n				<div class="logo">\n						\n					<img src="assets/img/rlogo.png">\n				</div>\n			</ion-navbar>\n		\n		</ion-header>\n		\n		\n		<ion-content>\n			<div class="imgsec">\n					<img *ngIf="pastevntdata?.Event.image" [src]="pastevntdata?.Event.image">\n				<!-- <img src="assets/img/sbg.png"> -->\n			</div>\n			<div class="content-sec" padding>\n				<h1>{{pastevntdata?.Event.venue_name}}</h1>\n				<div class="content-text">\n					<h3>{{pastevntdata?.Event.event_name}}</h3>\n					<p>{{pastevntdata?.Event.event_date | date:\'MM-dd-yyyy\' }} to {{pastevntdata?.Event.start_event | date:\'MM-dd-yyyy\' }}</p>\n					<p>{{pastevntdata?.Event.event_time}} to {{pastevntdata?.Event.scheduled_start_time}}</p>\n				</div>\n				<div class="content-text">\n					<h3>Tip Amounts</h3>\n					<p>Play Now \n						<span *ngIf="pastevntdata?.TipOptionPrice.playnow!=null">${{pastevntdata?.TipOptionPrice.playnow}}</span>\n						<span *ngIf="pastevntdata?.TipOptionPrice.playnow==null">${{playnow}}</span>\n					</p>\n					<p>Guaranteed Play  \n							<span *ngIf="pastevntdata?.TipOptionPrice.guareteedplay!=null">${{pastevntdata?.TipOptionPrice.guareteedplay}}</span>\n							<span *ngIf="pastevntdata?.TipOptionPrice.guareteedplay==null">${{grntplay}}</span>\n					</p>\n					<p>Possibly Play  \n							<span *ngIf="pastevntdata?.TipOptionPrice.possiblyplay!=null">${{pastevntdata?.TipOptionPrice.possiblyplay}}</span>\n							<span *ngIf="pastevntdata?.TipOptionPrice.possiblyplay==null">${{possibly}}</span>\n					</p>\n				</div>\n				<div class="bottom-sec">\n					<h3>Address</h3>\n					<p>{{pastevntdata?.Event.venue_address}}</p>\n				</div>\n				<div class="btn-sec">\n					<div class="top-btn">\n						<h3>Request History</h3>\n						<button ion-button (click)="reqhs(pastevntdata?.Event.id)">View</button>\n					</div>\n		\n					<div class="bottom-btn">\n						<h3>Payment History</h3>\n						<button ion-button (click)="payhs(pastevntdata?.Event.id)">View</button>\n					</div>\n				</div>\n		\n			</div>\n				</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/pasteventdj/pasteventdj.html"*/,
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

/***/ 172:
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
            amt: money
            //sub_id : this.subscriv.id
        };
        var description = song + ", " + artist;
        var Serialized = this.serializeObj(data);
        this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'AUQH6SoDJmAlXBpqHMZYv-TJPr5CVCpCqfbMCkLqKsQZBUdL1DIyIDcTqqx5jC4Y6F9UEzcVhM_kAZWO'
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                var payment = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["c" /* PayPalPayment */](money, 'USD', description, 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function () {
                    _this.Loader.present();
                    _this.http.post(_this.appsetting.myGlobalVar + 'subscriptions/refund', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        _this.Loader.dismiss();
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
        selector: 'page-paymenthistorydj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/paymenthistorydj/paymenthistorydj.html"*/'<!--\n  Generated template for the PaymenthistorydjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>Payment History</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<div class="past">\n		<ion-list>\n	      <ion-item *ngFor="let pay of payhistdata; let i = index">\n	        	<div class="right-sec" *ngIf="pay?.ClubgoerRequest.request_type==1">\n							<span *ngIf="pay?.ClubgoerRequest.top_queue_accept==0">\n								<button [ngStyle]="{\'background-color\': pay?.ClubgoerRequest.buttoncolor}" *ngIf="pay?.ClubgoerRequest.buttoncol" ion-button (click)="refundnow(pay?.ClubgoerRequest.id,pay?.ClubgoerRequest.djshare,pay?.ClubgoerRequest.songname,pay?.ClubgoerRequest.artist_name,pay?.ClubgoerRequest.senderemail)">Refund</button> \n								<button [ngStyle]="{\'background-color\': pay?.ClubgoerRequest.buttoncolor}" ion-button *ngIf="!pay?.ClubgoerRequest.buttoncol">Refunded</button> \n							</span>\n							<span *ngIf="pay?.ClubgoerRequest.top_queue_accept==1">\n									<button [ngStyle]="{\'background-color\': \'rgb(50, 128, 0)\'}" ion-button>Accepted</button> \n							</span>\n							<p>${{pay?.ClubgoerRequest.djshare}}</p>\n	        	</div>\n						<div class="right-sec" *ngIf="pay?.ClubgoerRequest.request_type==3">\n							<span *ngIf="pay?.ClubgoerRequest.top_queue==0">\n	        			<button [ngStyle]="{\'background-color\': pay?.ClubgoerRequest.buttoncolor}" *ngIf="pay?.ClubgoerRequest.buttoncol" ion-button (click)="refundnow(pay?.ClubgoerRequest.id,pay?.ClubgoerRequest.djshare,pay?.ClubgoerRequest.shoutout_name,pay?.ClubgoerRequest.shoutout_type,pay?.ClubgoerRequest.senderemail)">Refund</button> \n								<button [ngStyle]="{\'background-color\': pay?.ClubgoerRequest.buttoncolor}" ion-button *ngIf="!pay?.ClubgoerRequest.buttoncol">Refunded</button> \n							</span>\n							<span *ngIf="pay?.ClubgoerRequest.top_queue==1">\n									<button [ngStyle]="{\'background-color\': \'rgb(50, 128, 0)\'}" ion-button>Accepted</button> \n							</span>\n							<p>${{pay?.ClubgoerRequest.djshare}}</p>\n	        	</div>\n	        	<h2>{{pay?.Clubgoer.complete_name}}</h2>\n	        	<h3>{{pay?.Event.event_name}}</h3>\n	        	<p *ngIf="pay?.ClubgoerRequest.request_type==1">{{pay?.ClubgoerRequest.songname}} ,{{pay?.ClubgoerRequest.artist_name}} </p>\n						<p *ngIf="pay?.ClubgoerRequest.request_type==3">{{pay?.ClubgoerRequest.shoutout_type}} ,{{pay?.ClubgoerRequest.shoutout_name}} </p>\n	      </ion-item>\n	  </ion-list>\n	</div>\n\n	<div class="total" *ngIf="totalpay>0">\n		<h2>Total Received</h2>\n		<h3>${{totalpay}}</h3>\n	</div>\n\n	<div class="unshow" *ngIf="payhistdata?.length == 0">\n		<h3> No payment available</h3>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/paymenthistorydj/paymenthistorydj.html"*/,
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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesthistorydjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
    function RequesthistorydjPage(navCtrl, navParams, http, appsetting, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
                console.log(data);
                if (data.isSucess == "true") {
                    _this.reqhistdata = data.data;
                    console.log(data);
                    console.log("pastevent");
                }
                else {
                    _this.reqhistdata = [];
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
    RequesthistorydjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 3500);
        }
    };
    RequesthistorydjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequesthistorydjPage');
    };
    return RequesthistorydjPage;
}());
RequesthistorydjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-requesthistorydj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/requesthistorydj/requesthistorydj.html"*/'<!--\n  Generated template for the RequesthistorydjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>Request History</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n <div class="past">\n	<ion-list>\n      <ion-item *ngFor="let req of reqhistdata; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n          </div>\n          <div class="right-sec" *ngIf="req?.ClubgoerRequest.request_type==1">\n            <h3>Song request : {{req?.TipOption.name}}</h3>\n            <h2>Song name : {{req?.ClubgoerRequest.songname}} </h2>\n            <p>Artist name : {{req?.ClubgoerRequest.artist_name}}</p>\n          </div>\n          <div class="right-sec" *ngIf="req?.ClubgoerRequest.request_type==3">\n              <h3>Shoutout</h3>\n              <h2>Shoutout type : {{req?.ClubgoerRequest.shoutout_type}} </h2>\n              <p>Shoutout name : {{req?.ClubgoerRequest.shoutout_name}}</p>\n          </div>\n            <p>Requested By : {{req?.Clubgoer.complete_name}}</p>\n          \n      </ion-item>\n      <div class="unshow" *ngIf="reqhistdata?.length == 0">\n        <h3>No data available</h3>\n      </div>\n    </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/requesthistorydj/requesthistorydj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], RequesthistorydjPage);

//# sourceMappingURL=requesthistorydj.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OmniaclubeventdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manageeventsdj_manageeventsdj__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nameofeventsdj_nameofeventsdj__ = __webpack_require__(104);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
                    _this.upevntdata = data.data;
                    _this.playnow = data.data[0][0].TipOption.price;
                    _this.grntplay = data.data[0][1].TipOption.price;
                    _this.possibly = data.data[0][2].TipOption.price;
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
                buttons: ['ok']
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
                        subTitle: data.msg,
                        buttons: ['ok']
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
                        subTitle: data.msg,
                        buttons: ['ok']
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
        selector: 'page-omniaclubeventdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/omniaclubeventdj/omniaclubeventdj.html"*/'<!--\n  Generated template for the OmniaclubeventdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		\n			<ion-navbar color="black">\n				<ion-title>{{upevntdata?.Event.event_name}}</ion-title>\n				<div class="logo">\n					<img src="assets/img/rlogo.png">\n				</div>\n			</ion-navbar>\n		\n		</ion-header>\n		\n		\n		<ion-content>\n			<div class="imgsec" *ngIf="upevntdata?.Event.image">\n				<!-- <img src="assets/img/sbg.png"> -->\n				<img [src]="upevntdata?.Event.image">\n			</div>\n			<div class="content-sec" padding>\n				<h1>{{upevntdata?.Event.venue_name}}</h1>\n				<div class="content-text">\n					<h3>{{upevntdata?.Event.event_name}}</h3>\n					<p>{{upevntdata?.Event.event_date | date:\'MM-dd-yyyy\'}} to {{upevntdata?.Event.start_event | date:\'MM-dd-yyyy\'}}</p>\n					<p>{{upevntdata?.Event?.event_time}} to {{upevntdata?.Event?.scheduled_start_time}} </p>\n				</div>\n				<div class="content-text">\n					<h3>Tip Amounts</h3>\n					<p>Play Now\n							<span *ngIf="upevntdata?.TipOptionPrice.playnow!=null">${{upevntdata?.TipOptionPrice.playnow}}</span>\n							<span *ngIf="upevntdata?.TipOptionPrice.playnow==null">${{playnow}}</span>\n						</p>\n					<p>Guaranteed Play  \n								<span *ngIf="upevntdata?.TipOptionPrice.guareteedplay!=null">${{upevntdata?.TipOptionPrice.guareteedplay}}</span>\n								<span *ngIf="upevntdata?.TipOptionPrice.guareteedplay==null">${{grntplay}}</span>\n						</p>\n					<p>Possibly Play  \n								<span *ngIf="upevntdata?.TipOptionPrice.possiblyplay!=null">${{upevntdata?.TipOptionPrice.possiblyplay}}</span>\n								<span *ngIf="upevntdata?.TipOptionPrice.possiblyplay==null">${{possibly}}</span>\n						</p>\n				</div>\n				<div class="bottom-sec">\n					<h3>Address</h3>\n					<p>{{upevntdata?.Event.venue_address}}\n					</p>\n				</div>\n				<div class="btn-sec">\n					<button ion-button (click)="deletevnt(upevntdata?.Event.id)">Delete Event</button>\n					<button ion-button (click)="startevent(upevntdata?.Event.id,upevntdata?.Event.event_name)" [ngStyle]="{\'background-color\': buttonColor}" *ngIf="upevntdata?.Event.active!=1">Start Event</button>\n					<button ion-button [ngStyle]="{\'background-color\': buttonColor}" *ngIf="upevntdata?.Event.active==1">Event started</button>\n				</div>\n		\n			</div>\n		\n		</ion-content>\n		'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/omniaclubeventdj/omniaclubeventdj.html"*/,
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

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaynowlistdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.eventid = navParams.get("eventid");
        this.eventname = navParams.get("eventname");
        //alert(this.eventid);
        if (this.eventname == undefined) {
            this.eventname = "Dj Admin Event";
        }
    }
    PlaynowlistdjPage.prototype.ionViewCanEnter = function () {
        this.playnowlist();
        clearInterval(this.appsetting.interval);
    };
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
                        buttons: ['ok']
                    });
                    alertr_1.present();
                    setTimeout(function () { return alertr_1.dismiss(); }, 3500);
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
                        buttons: ['ok']
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 3500);
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
            this.Loader.dismissAll();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
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
        selector: 'page-playnowlistdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/playnowlistdj/playnowlistdj.html"*/'<!--\n  Generated template for the PlaynowlistdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>{{eventname}}</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="past">\n	<ion-list>\n      <ion-item *ngFor="let play of playnowreq; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3>{{play?.ClubgoerRequest.songname}} </h3>\n        	<p>{{play?.ClubgoerRequest.artist_name}}</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        			<img src="assets/img/playimg.png" style="height: 30px;\n					width: 26px;" *ngIf="play?.ClubgoerRequest.topque">\n					<img src="assets/img/playnow.png" style="    height: 30px;\n					width: 26px;" (click)="playimg(play?.ClubgoerRequest.id,play?.Event.id)" *ngIf="!play?.ClubgoerRequest.topque">\n					<img src="assets/img/cross.png" style="height: 30px;\n					width: 26px;" (click)="cross(play?.ClubgoerRequest.id,play?.Event.id)">\n        		</div>\n        	</div>\n	  </ion-item>\n	  <div class="unshow" *ngIf="playnowreq?.length == 0">\n			<h3>No request available</h3>\n	  </div>\n		\n   	 \n      <!-- <ion-item>\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3> Kanzee Ft Emzzy E </h3>\n        	<p>artist name</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        		<img src="assets/img/playimg.png">\n        		<img src="assets/img/cross.png">\n        	</div>\n        	</div>\n			</ion-item>\n			<ion-item>\n				<div class="img-sec">\n					<img src="assets/img/headphn.png">\n				</div>\n				<h3> Kanzee Ft Emzzy E </h3>\n				<p>artist name</p>\n				<div class="img-right">\n					<div class="imgmain">\n					<img src="assets/img/playimg.png">\n					<img src="assets/img/cross.png">\n				</div>\n				</div>\n		</ion-item>\n		<ion-item>\n			<div class="img-sec">\n				<img src="assets/img/headphn.png">\n			</div>\n			<h3> Kanzee Ft Emzzy E </h3>\n			<p>artist name</p>\n			<div class="img-right">\n				<div class="imgmain">\n				<img src="assets/img/playimg.png">\n				<img src="assets/img/cross.png">\n			</div>\n			</div>\n	</ion-item>\n	<ion-item>\n		<div class="img-sec">\n			<img src="assets/img/headphn.png">\n		</div>\n		<h3> Kanzee Ft Emzzy E </h3>\n		<p>artist name</p>\n		<div class="img-right">\n			<div class="imgmain">\n			<img src="assets/img/playimg.png">\n			<img src="assets/img/cross.png">\n		</div>\n		</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item> -->\n  </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/playnowlistdj/playnowlistdj.html"*/,
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

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopqueuedjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.eventid = navParams.get("eventid");
        this.eventname = navParams.get("eventname");
        if (this.eventname == undefined) {
            this.eventname = "Dj Admin Event";
        }
    }
    TopqueuedjPage.prototype.ionViewCanEnter = function () {
        this.playnowlist();
    };
    TopqueuedjPage.prototype.playnowlist = function () {
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
            _this.http.post(_this.appsetting.myGlobalVar + 'events/topquereqdj', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    var alertr_1 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                        buttons: ['ok']
                    });
                    alertr_1.present();
                    setTimeout(function () { return alertr_1.dismiss(); }, 3500);
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
            _this.http.post(_this.appsetting.myGlobalVar + 'events/toprequeststatus', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    var alertr_2 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                        buttons: ['ok']
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 3500);
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
    TopqueuedjPage.prototype.ionViewDidEnter = function () {
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
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
    };
    TopqueuedjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TopqueuedjPage');
        clearInterval(this.appsetting.interval);
    };
    return TopqueuedjPage;
}());
TopqueuedjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-topqueuedj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/topqueuedj/topqueuedj.html"*/'<!--\n  Generated template for the PlaynowlistdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>{{eventname}}</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="past">\n	<ion-list>\n      <ion-item *ngFor="let play of playtopreq; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3>{{play?.ClubgoerRequest.songname}} </h3>\n        	<p>{{play?.ClubgoerRequest.artist_name}}</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        			<img src="assets/img/playnow.png" style="height: 30px;\n					width: 26px;"  *ngIf="play?.ClubgoerRequest.topque == false">\n					 <img src="assets/img/playnow.png" style="height: 30px;\n					 width: 26px;" (click)="playimg(play?.ClubgoerRequest.id,play?.Event.id)" *ngIf="play?.ClubgoerRequest.topque == true">\n					 <img src="assets/img/cross.png" style="height: 30px;\n					 width: 26px;" (click)="cross(play?.ClubgoerRequest.id,play?.Event.id)">\n        		</div>\n        	</div>\n	  </ion-item> \n	   <div class="unshow" *ngIf="playtopreq?.length == 0">\n		<h3>No request available</h3>\n		</div>\n   	  \n      <!-- <ion-item>\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3> Kanzee Ft Emzzy E </h3>\n        	<p>artist name</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        		<img src="assets/img/playimg.png">\n        		<img src="assets/img/cross.png">\n        	</div>\n        	</div>\n			</ion-item>\n			<ion-item>\n				<div class="img-sec">\n					<img src="assets/img/headphn.png">\n				</div>\n				<h3> Kanzee Ft Emzzy E </h3>\n				<p>artist name</p>\n				<div class="img-right">\n					<div class="imgmain">\n					<img src="assets/img/playimg.png">\n					<img src="assets/img/cross.png">\n				</div>\n				</div>\n		</ion-item>\n		<ion-item>\n			<div class="img-sec">\n				<img src="assets/img/headphn.png">\n			</div>\n			<h3> Kanzee Ft Emzzy E </h3>\n			<p>artist name</p>\n			<div class="img-right">\n				<div class="imgmain">\n				<img src="assets/img/playimg.png">\n				<img src="assets/img/cross.png">\n			</div>\n			</div>\n	</ion-item>\n	<ion-item>\n		<div class="img-sec">\n			<img src="assets/img/headphn.png">\n		</div>\n		<h3> Kanzee Ft Emzzy E </h3>\n		<p>artist name</p>\n		<div class="img-right">\n			<div class="imgmain">\n			<img src="assets/img/playimg.png">\n			<img src="assets/img/cross.png">\n		</div>\n		</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item> -->\n  </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/topqueuedj/topqueuedj.html"*/,
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

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GauranteedjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.eventid = navParams.get("eventid");
        this.eventname = navParams.get("eventname");
        //   alert(this.eventid);
        // alert(this.eventname);
        if (this.eventname == undefined) {
            this.eventname = "Dj Admin Event";
        }
        this.playnowlist();
        clearInterval(this.appsetting.interval);
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
                        buttons: ['ok']
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
                buttons: ['ok']
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
                        buttons: ['ok']
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
        selector: 'page-gauranteedj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/gauranteedj/gauranteedj.html"*/'<!--\n  Generated template for the PlaynowlistdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>{{eventname}}</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n	<div class="past">\n	<ion-list>\n      <ion-item *ngFor="let play of playtopreq; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3>{{play?.ClubgoerRequest.songname}} </h3>\n        	<p>{{play?.ClubgoerRequest.artist_name}}</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        			<img src="assets/img/playnow.png" style="height: 30px;\n					width: 26px;" *ngIf="play?.ClubgoerRequest.topque">\n					<img src="assets/img/playnow.png" style="height: 30px;\n					width: 26px;" (click)="playimg(play?.ClubgoerRequest.id,play?.Event.id)" *ngIf="!play?.ClubgoerRequest.topque"> \n					<img src="assets/img/cross.png" style="height: 30px;\n					width: 26px;" (click)="cross(play?.ClubgoerRequest.id,play?.Event.id)">\n        		</div>\n        	</div>\n	  </ion-item>\n	    <div class="unshow" *ngIf="playtopreq?.length == 0">\n		 <h3> No request available</h3>\n		 </div>\n   	  \n      <!-- <ion-item>\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3> Kanzee Ft Emzzy E </h3>\n        	<p>artist name</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        		<img src="assets/img/playimg.png">\n        		<img src="assets/img/cross.png">\n        	</div>\n        	</div>\n			</ion-item>\n			<ion-item>\n				<div class="img-sec">\n					<img src="assets/img/headphn.png">\n				</div>\n				<h3> Kanzee Ft Emzzy E </h3>\n				<p>artist name</p>\n				<div class="img-right">\n					<div class="imgmain">\n					<img src="assets/img/playimg.png">\n					<img src="assets/img/cross.png">\n				</div>\n				</div>\n		</ion-item>\n		<ion-item>\n			<div class="img-sec">\n				<img src="assets/img/headphn.png">\n			</div>\n			<h3> Kanzee Ft Emzzy E </h3>\n			<p>artist name</p>\n			<div class="img-right">\n				<div class="imgmain">\n				<img src="assets/img/playimg.png">\n				<img src="assets/img/cross.png">\n			</div>\n			</div>\n	</ion-item>\n	<ion-item>\n		<div class="img-sec">\n			<img src="assets/img/headphn.png">\n		</div>\n		<h3> Kanzee Ft Emzzy E </h3>\n		<p>artist name</p>\n		<div class="img-right">\n			<div class="imgmain">\n			<img src="assets/img/playimg.png">\n			<img src="assets/img/cross.png">\n		</div>\n		</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item> -->\n  </ion-list>\n</div>\n</ion-content>\n\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/gauranteedj/gauranteedj.html"*/,
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

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossiblydjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.eventid = navParams.get("eventid");
        this.eventname = navParams.get("eventname");
        if (this.eventname == undefined) {
            this.eventname = "Dj Admin Event";
        }
    }
    PossiblydjPage.prototype.ionViewCanEnter = function () {
        this.playnowlist();
    };
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
                        buttons: ['ok']
                    });
                    alertr_1.present();
                    setTimeout(function () { return alertr_1.dismiss(); }, 3500);
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
                        buttons: ['ok']
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 3500);
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
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
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
        selector: 'page-possiblydj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/possiblydj/possiblydj.html"*/'<!--\n  Generated template for the PlaynowlistdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>{{eventname}}</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="past">\n	<ion-list>\n      <ion-item *ngFor="let play of playtopreq; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3>{{play?.ClubgoerRequest.songname}} </h3>\n        	<p>{{play?.ClubgoerRequest.artist_name}}</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        			<img src="assets/img/playnow.png" style="height: 30px;\n					width: 26px;" *ngIf="play?.ClubgoerRequest.topque">\n					 <img src="assets/img/playnow.png" style="height: 30px;\n					 width: 26px;" (click)="playimg(play?.ClubgoerRequest.id,play?.Event.id)" *ngIf="!play?.ClubgoerRequest.topque"> \n					<img src="assets/img/cross.png" style="height: 30px;\n					width: 26px;" (click)="cross(play?.ClubgoerRequest.id,play?.Event.id)">\n        		</div>\n        	</div>\n	  </ion-item>\n       <div class ="unshow" *ngIf="playtopreq?.length == 0">\n			<h3> No request available</h3>\n			</div>\n	   \n		<!--	<ion-item>\n				<div class="img-sec">\n					<img src="assets/img/headphn.png">\n				</div>\n				<h3> Kanzee Ft Emzzy E </h3>\n				<p>artist name</p>\n				<div class="img-right">\n					<div class="imgmain">\n					<img src="assets/img/playimg.png">\n					<img src="assets/img/cross.png">\n				</div>\n				</div>\n		</ion-item>\n		<ion-item>\n			<div class="img-sec">\n				<img src="assets/img/headphn.png">\n			</div>\n			<h3> Kanzee Ft Emzzy E </h3>\n			<p>artist name</p>\n			<div class="img-right">\n				<div class="imgmain">\n				<img src="assets/img/playimg.png">\n				<img src="assets/img/cross.png">\n			</div>\n			</div>\n	</ion-item>\n	<ion-item>\n		<div class="img-sec">\n			<img src="assets/img/headphn.png">\n		</div>\n		<h3> Kanzee Ft Emzzy E </h3>\n		<p>artist name</p>\n		<div class="img-right">\n			<div class="imgmain">\n			<img src="assets/img/playimg.png">\n			<img src="assets/img/cross.png">\n		</div>\n		</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item>\n<ion-item>\n	<div class="img-sec">\n		<img src="assets/img/headphn.png">\n	</div>\n	<h3> Kanzee Ft Emzzy E </h3>\n	<p>artist name</p>\n	<div class="img-right">\n		<div class="imgmain">\n		<img src="assets/img/playimg.png">\n		<img src="assets/img/cross.png">\n	</div>\n	</div>\n</ion-item> -->\n  </ion-list>\n</div>\n</ion-content>\n\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/possiblydj/possiblydj.html"*/,
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

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoutoutdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
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
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        Loader.present().then(function () {
            var data = {
                djid: Userid,
                eventid: _this.eventid
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/getshoutouts', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.isSucess == "true") {
                    _this.shoutreq = data.data;
                }
                else {
                    _this.shoutreq = [];
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
                id: Userid,
                reqoption: 3
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/shouttopquereq', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                Loader.dismiss();
                if (data.isSucess == "true") {
                    var alertr_1 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                        buttons: ['ok']
                    });
                    alertr_1.present();
                    setTimeout(function () { return alertr_1.dismiss(); }, 3500);
                    _this.shoutreq = data.data;
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
                id: Userid,
                reqopt: 3
            };
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/shoutrequeststatus', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    var alertr_2 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                        buttons: ['ok']
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 3500);
                    _this.shoutreq = data.data;
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
    ShoutoutdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismissAll();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
    };
    ShoutoutdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoutoutDjPage');
    };
    ShoutoutdjPage.prototype.ionViewCanEnter = function () {
        clearInterval(this.appsetting.interval);
    };
    return ShoutoutdjPage;
}());
ShoutoutdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shoutoutdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/shoutoutdj/shoutoutdj.html"*/'<!--\n  Generated template for the PlaynowlistdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <ion-title>{{eventname}}</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<div class="past">\n	<ion-list>\n      <ion-item *ngFor="let shout of shoutreq; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3>{{shout?.ClubgoerRequest.shoutout_type}} </h3>\n        	<p>{{shout?.ClubgoerRequest.shoutout_name}}</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        			<img src="assets/img/playimg.png" style="height: 30px;\n							width: 26px;" *ngIf="shout?.ClubgoerRequest.topque">\n					<img src="assets/img/playnow.png" style="height: 30px;\n					width: 26px;" (click)="playimg(shout?.ClubgoerRequest.id,shout?.Event.id)" *ngIf="!shout?.ClubgoerRequest.topque">\n					<img src="assets/img/cross.png" style="height: 30px;\n					width: 26px;" (click)="cross(shout?.ClubgoerRequest.id,shout?.Event.id)">\n        		</div>\n        	</div>\n	  </ion-item>\n	   <div class="unshow" *ngIf="shoutreq?.length == 0">\n		  <h3> No request available</h3>\n	   </div>\n  </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/shoutoutdj/shoutoutdj.html"*/,
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

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventsdj_eventsdj__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voteupdj_voteupdj__ = __webpack_require__(182);
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
 * Generated class for the VotingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VotingPage = (function () {
    function VotingPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.extra = [1];
        this.gg = 0;
        this.data = {};
        this.songs = [];
        this.songname = [];
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.eventid = navParams.get("eventid");
        this.eventname = navParams.get("eventname");
    }
    VotingPage.prototype.seerequests = function (eventtid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__voteupdj_voteupdj__["a" /* VoteupdjPage */], {
            eventrid: eventtid
        });
    };
    VotingPage.prototype.addsong = function (data) {
        //var jj = this;
        this.extra.push(this.extra.length + 1);
        // var bd ={
        //   'songname':data.value['songname'+this.gg],
        //   'artist':data.value['artist'+this.gg]
        //   };
        // this.songs.push(bd);
        this.gg++;
    };
    VotingPage.prototype.send = function (songdata) {
        var _this = this;
        var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        if (this.gg == 0) {
            var bd = {
                'songname': songdata.value['songname' + this.gg],
                'artist': songdata.value['artist' + this.gg],
                'eventid': this.eventid,
                'djid': Userid
            };
            this.songs.push(bd);
        }
        else if (this.gg > 0) {
            if (this.gg + 1 != this.songs.length) {
                this.songs = [];
                for (var i = 0; i <= this.gg; i++) {
                    var bd = {
                        'songname': songdata.value['songname' + i],
                        'artist': songdata.value['artist' + i],
                        'eventid': this.eventid,
                        'djid': Userid
                    };
                    this.songs.push(bd);
                }
            }
        }
        var sendata = {
            songs: this.songs
        };
        if (this.eventid == 0) {
            var alertr_1 = this.alertCtrl.create({
                title: 'Voteup request',
                subTitle: 'There is no current event to add voteup request',
                buttons: ['ok']
            });
            alertr_1.present();
            setTimeout(function () { return alertr_1.dismiss(); }, 3500);
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json; charset=utf-8');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.Loader.present();
            this.http.post(this.appsetting.myGlobalVar + 'events/addvoteupreq', JSON.stringify(sendata), options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.Loader.dismiss();
                if (data.isSucess == "true") {
                    var alertr_2 = _this.alertCtrl.create({
                        title: 'Voteup request',
                        subTitle: data.msg,
                        buttons: ['ok']
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 3500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                }
                else {
                    var alertr_3 = _this.alertCtrl.create({
                        title: 'Voteup request',
                        subTitle: data.msg,
                        buttons: ['ok']
                    });
                    alertr_3.present();
                    setTimeout(function () { return alertr_3.dismiss(); }, 3500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                }
            });
        }
    };
    VotingPage.prototype.ionViewDidEnter = function () {
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
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
    };
    VotingPage.prototype.ionViewDidLoad = function () {
        console.log('loaded voting');
    };
    return VotingPage;
}());
VotingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-voting',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/voting/voting.html"*/'<!--\n  Generated template for the VotingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		<ion-navbar color="black">\n			<ion-title>Voting</ion-title>\n	    	 <ion-buttons end class="rbutton">\n		        <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n		     </ion-buttons>\n		</ion-navbar>\n	</ion-header>\n  \n  <ion-content padding>\n    <div class="content-text">\n      <h1 style="font-size:14px; height: 30px;">Songs For Voting</h1>\n      </div>\n      <div class="content-sec">\n      <div class="song">\n      <form class="form-sec" #votesong="ngForm" novalidate>\n        <ion-list *ngFor="let ext of extra; let i = index">\n             <ion-grid>\n              <ion-row>\n               <ion-col col-6 class="left">\n            <ion-item>\n              <ion-label stacked>Song Name</ion-label>\n              <ion-input type="text" [(ngModel)]="i.songname" name=\'songname{{i}}\' required></ion-input>\n            </ion-item>\n            <!-- <ion-label  class="alert alert-danger" color="danger">\n                <div *ngIf="songname{{i}}.errors && (songname{{i}}.dirty || songname{{i}}.touched)" >\n                  <div [hidden]="!songname{{i}}.errors.required" >\n                    Song name is required\n                  </div>\n                </div>\n            </ion-label> -->\n          </ion-col>\n          <ion-col col-6 class="right">\n            <ion-item>\n              <ion-label stacked>Artist</ion-label>\n                 <ion-input type="text" [(ngModel)]="i.artist" name="artist{{i}}" required></ion-input>\n            </ion-item>\n            <!-- <ion-label  class="alert alert-danger" color="danger">\n                <div *ngIf="artist{{i}}.errors && (artist{{i}}.dirty || artist{{i}}.touched)" >\n                  <div [hidden]="!artist{{i}}.errors.required" >\n                    Artist name is required\n                  </div>\n                </div>\n            </ion-label> -->\n          </ion-col>\n       \n            </ion-row>\n           \n          </ion-grid>\n         \n        </ion-list>\n        <div class="plusbtn">\n            <button ion-fab mini (click)="addsong(votesong)"><ion-icon name="add"></ion-icon></button>\n           </div>\n           <div class="add">\n         <button ion-button full color="theme-header" [disabled]="!votesong.form.valid" (click)="send(votesong)">Add </button>\n        </div>\n        </form>\n        <div class="see">\n       <button ion-button full color="theme-header" (click)="seerequests(eventid)">See requests </button>\n      </div>\n      </div>\n         </div>\n        </ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/voting/voting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], VotingPage);

//# sourceMappingURL=voting.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteupdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.eventid = navParams.get("eventrid");
        this.getvoteuprequest(this.eventid);
    }
    VoteupdjPage.prototype.getvoteuprequest = function (evid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            eventid: evid
        };
        var serialized = this.serializeObj(data);
        //this.Loader.present();
        this.http.post(this.appsetting.myGlobalVar + 'events/getvoteupreq', serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.Loader.dismiss();
            if (data.isSucess == "true") {
                _this.playnowreq = data.data;
            }
            else {
                _this.playnowreq = [];
                var alertr_1 = _this.alertCtrl.create({
                    title: 'Voteup requests',
                    subTitle: data.msg,
                    buttons: ['ok']
                });
                alertr_1.present();
                setTimeout(function () { return alertr_1.dismiss(); }, 3500);
            }
        });
    };
    VoteupdjPage.prototype.addtolist = function (addsong) {
        var data = {
            name: addsong.value.name,
            artist: addsong.value.artist
        };
        this.songs = data;
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
                    var alertr_2 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                        buttons: ['ok']
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 3500);
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
                    var alertr_3 = _this.alertCtrl.create({
                        title: 'Requests',
                        subTitle: data.msg,
                        buttons: ['ok']
                    });
                    alertr_3.present();
                    setTimeout(function () { return alertr_3.dismiss(); }, 3500);
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
    VoteupdjPage.prototype.ionViewDidEnter = function () {
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
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
    };
    VoteupdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaynowlistdjPage');
    };
    return VoteupdjPage;
}());
VoteupdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-voteupdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/voteupdj/voteupdj.html"*/'<!--\n  Generated template for the PlaynowlistdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	\n	  <ion-navbar color="black">\n		<ion-title>Voting requests</ion-title>\n		<div class="logo">\n			<img src="assets/img/rlogo.png">\n		</div>\n	  </ion-navbar>\n	\n	</ion-header>\n	\n	\n	<ion-content padding>\n		<div class="past">\n		<ion-list>\n		  <ion-item *ngFor="let play of playnowreq; let i = index">\n				<div class="img-sec">\n					<img src="assets/img/headphn.png">\n				</div>\n				<h3 style="\n				width:  100%;\n				float:  left;\n				padding: 0;\n		">Song name : {{play?.ClubgoerRequest.songname}} </h3>\n				<p>Artist name : {{play?.ClubgoerRequest.artist_name}}</p>\n				<p>Votes : {{play?.ClubgoerRequest.likes}}</p>\n				<!-- <div class="img-right">\n					<div class="imgmain"> -->\n						<!-- <img src="assets/img/playimg.png" *ngIf="play?.ClubgoerRequest.topque">\n						<img src="assets/img/playnow.png" (click)="playimg(play?.ClubgoerRequest.id,play?.Event.id)" *ngIf="!play?.ClubgoerRequest.topque">\n						<img src="assets/img/cross.png" (click)="cross(play?.ClubgoerRequest.id,play?.Event.id)"> -->\n					<!-- </div>\n				</div> -->\n		  </ion-item>\n		   <div class="unshow" *ngIf="playnowreq?.length == 0">\n			  <h3> No request available</h3>\n		   </div>\n	  </ion-list>\n	</div>\n	</ion-content>\n	'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/voteupdj/voteupdj.html"*/,
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

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editprofiledj_editprofiledj__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__ = __webpack_require__(46);
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
    function EditeventPage(navCtrl, navParams, http, platform, camera, actionSheetCtrl, loadingCtrl, toastCtrl, appsetting, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.platform = platform;
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
            _this.srcImage = response.data.Event.image;
            _this.imgTosend = response.data.Event.image;
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
    EditeventPage.prototype.editeventnow = function (editeven) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var imgsend = this.imgTosend;
        var dj_code = JSON.parse(localStorage.getItem("USER_DATA")).paypal_email;
        var subscribedj = JSON.parse(localStorage.getItem("USER_DATA")).subscription_status;
        if (editeven.value.eventstartdt == editeven.value.eventenddt) {
            if (editeven.value.eventsarttm > editeven.value.eventendtm) {
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
                title: 'Edit event',
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
                subTitle: 'To edit an event, please add your PayPal email address first.',
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
        else if (editeven.value.minplay < 2 || editeven.value.mingrnt < 2 || editeven.value.minpossi < 2) {
            var alert_4 = this.alertCtrl.create({
                title: 'Edit event',
                subTitle: 'Please enter tip amount greater than 1',
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 3500);
            this.Loader.dismiss();
        }
        else {
            this.Loader.present();
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
            };
            var Serialized = this.serializeObj(data);
            this.http.post(this.appsetting.myGlobalVar + 'events/editevent', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                _this.Loader.dismiss();
                if (response.status == 0) {
                    _this.Loader.dismiss();
                    var alert_5 = _this.alertCtrl.create({
                        title: 'Edit event',
                        subTitle: response.msg,
                    });
                    alert_5.present();
                    setTimeout(function () { return alert_5.dismiss(); }, 2500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                }
                else {
                    _this.Loader.dismiss();
                    var alert_6 = _this.alertCtrl.create({
                        title: 'Edit event',
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
    EditeventPage.prototype.takePicture = function (sourceType) {
        //this.srcImage='';
        var _this = this;
        this.imgTosend = '';
        var options = {
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
        };
        this.camera.getPicture(options).then(function (imageUri) {
            //this.srcImage = 'data:image/jpeg;base64,' + imageUri;
            _this.srcImage = '';
            _this.imgTosend = imageUri;
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data = {
                event_id: _this.editevnt,
                img: imageUri
            };
            var Serialized = _this.serializeObj(data);
            var Loading = _this.loadingCtrl.create({
                content: 'Please wait...',
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'events/saveimage', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    Loading.dismiss();
                    if (response.status == "true") {
                        _this.srcImage = _this.appsetting.editGlobalevntimg + response.data;
                    }
                });
            });
        }, function (err) {
            //alert(JSON.stringify(err));
        });
    };
    EditeventPage.prototype.CameraAction = function () {
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
    EditeventPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_7 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_7.present();
            setTimeout(function () { return alert_7.dismiss(); }, 3500);
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
        selector: 'page-editevent',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/editevent/editevent.html"*/'<!--\n  Generated template for the EditeventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="black">\n        <ion-title>Edit Event</ion-title>\n        <div class="logo">\n            <img src="assets/img/rlogo.png">\n        </div>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div class="imgsec">\n        <img [src]="logo">\n    </div>\n    <div class="form-sec">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <form #editeventForm="ngForm" class="event-form">\n                        <ion-col col-12>\n                            <ion-row>\n                                <ion-list>\n                                    <ion-item>\n                                        <ion-input type="text" placeholder="Venue name" [(ngModel)]="data.venuename" name="venuename" #venuename=\'ngModel\' required></ion-input>\n                                    </ion-item>\n                                    <ion-label class="alert alert-danger" color="danger">\n                                        <div *ngIf="venuename.errors && (venuename.dirty || venuename.touched)">\n                                            <div [hidden]="!venuename.errors.required">\n                                                Field is required\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-list>\n                            </ion-row>\n                        </ion-col>\n\n                        <ion-col col-12>\n                            <ion-row>\n                                <ion-list>\n                                    <ion-item>\n                                        <ion-input type="text" placeholder="Venue address" [(ngModel)]="data.venueaddress" name="venueaddress" #venueaddress=\'ngModel\' required></ion-input>\n                                    </ion-item>\n                                    <ion-label class="alert alert-danger" color="danger">\n                                        <div *ngIf="venueaddress.errors && (venueaddress.dirty || venueaddress.touched)">\n                                            <div [hidden]="!venueaddress.errors.required">\n                                                Field is required\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-list>\n                            </ion-row>\n                        </ion-col>\n                        <ion-col col-12>\n                            <ion-row>\n                                <ion-list>\n                                    <ion-item>\n                                        <ion-input type="text" placeholder="Event name" [(ngModel)]="data.eventname" name="eventname" #eventname=\'ngModel\' required></ion-input>\n                                    </ion-item>\n                                    <ion-label class="alert alert-danger" color="danger">\n                                        <div *ngIf="eventname.errors && (eventname.dirty || eventname.touched)">\n                                            <div [hidden]="!eventname.errors.required">\n                                                Field is required\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-list>\n                            </ion-row>\n                        </ion-col>\n                        <div class="colm">\n                            <ion-col col-12>\n                                <ion-row>\n                                    <ion-col col-6>\n                                        <ion-list>\n                                            <ion-item>\n\n                                                <ion-datetime min="{{minyear}}" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY" [(ngModel)]="data.eventstartdt" (ngModelChange)="updateDueDate($event)" name="eventstartdt" placeholder="Event start date" #eventstartdt=\'ngModel\' required></ion-datetime>\n                                            </ion-item>\n                                            <ion-label class="alert alert-danger" color="danger">\n                                                <div *ngIf="eventstartdt.errors && (eventstartdt.dirty || eventstartdt.touched)">\n                                                    <div [hidden]="!eventstartdt.errors.required">\n                                                        Field is required\n                                                    </div>\n                                                </div>\n                                            </ion-label>\n                                        </ion-list>\n                                    </ion-col>\n\n                                    <ion-col col-6>\n                                        <ion-list>\n                                            <ion-item>\n                                                <ion-datetime min="{{maxyear}}" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY" placeholder="Event end date" [(ngModel)]="data.eventenddt" name="eventenddt" #eventenddt=\'ngModel\' required></ion-datetime>\n                                            </ion-item>\n                                            <ion-label class="alert alert-danger" color="danger">\n                                                <div *ngIf="eventenddt.errors && (eventenddt.dirty || eventenddt.touched)">\n                                                    <div [hidden]="!eventenddt.errors.required">\n                                                        Field is required\n                                                    </div>\n                                                </div>\n                                            </ion-label>\n                                        </ion-list>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-col>\n                        </div>\n                        <div class="colm>">\n                            <ion-col col-12>\n                                <ion-row>\n                                    <ion-col col-6 class="padding0lft">\n                                        <ion-list>\n                                            <ion-item>\n                                                <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Event start time" [(ngModel)]="data.eventsarttm" name="eventsarttm" #eventsarttm=\'ngModel\' required></ion-datetime>\n                                            </ion-item>\n                                            <ion-label class="alert alert-danger" color="danger">\n                                                <div *ngIf="eventsarttm.errors && (eventsarttm.dirty || eventsarttm.touched)">\n                                                    <div [hidden]="!eventsarttm.errors.required">\n                                                        Field is required\n                                                    </div>\n                                                </div>\n                                            </ion-label>\n                                        </ion-list>\n                                    </ion-col>\n                                    <ion-col col-6 class="padding0rgt">\n                                        <ion-list>\n                                            <ion-item>\n                                                <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Event end time" [(ngModel)]="data.eventendtm" name="eventendtm" #eventendtm=\'ngModel\' required></ion-datetime>\n                                            </ion-item>\n                                            <ion-label class="alert alert-danger" color="danger">\n                                                <div *ngIf="eventendtm.errors && (eventendtm.dirty || eventendtm.touched)">\n                                                    <div [hidden]="!eventendtm.errors.required">\n                                                        Field is required\n                                                    </div>\n                                                </div>\n                                            </ion-label>\n                                        </ion-list>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-col>\n                        </div>\n                        <ion-col col-12>\n                            <ion-row>\n                                <div class="tip" (click)="toggleDetails(taggel)">\n                                    <h3>Setup Tip Amounts</h3>\n                                    <button class="abc" ion-button icon-right>\n									<ion-icon name="arrow-down"></ion-icon>\n								</button>\n                                </div>\n                            </ion-row>\n                        </ion-col>\n                        <ion-col col-12 *ngIf="taggel">\n                            <ion-row>\n                                <ion-list>\n                                    <ion-item>\n                                        <ion-input type="tel" placeholder="Minimum amount for Play Now" min="2" [(ngModel)]="data.minplay" name="minplay" #minplay=\'ngModel\' required></ion-input>\n                                    </ion-item>\n                                    <ion-label class="alert alert-danger" color="danger">\n                                        <div *ngIf="minplay.errors && (minplay.dirty || minplay.touched)">\n                                            <div [hidden]="!minplay.errors.required">\n                                                Field is required\n                                            </div>\n                                            <div [hidden]="!minplay.errors.min">\n                                                Minimum amount should be 2\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-list>\n                            </ion-row>\n                        </ion-col>\n\n                        <ion-col col-12 *ngIf="taggel">\n                            <ion-row>\n                                <ion-list>\n                                    <ion-item>\n                                        <ion-input type="tel" placeholder="Minimum amount for Guaranteed Play" min="2" [(ngModel)]="data.mingrnt" name="mingrnt" #mingrnt=\'ngModel\' required></ion-input>\n                                    </ion-item>\n                                    <ion-label class="alert alert-danger" color="danger">\n                                        <div *ngIf="mingrnt.errors && (mingrnt.dirty || mingrnt.touched)">\n                                            <div [hidden]="!mingrnt.errors.required">\n                                                Field is required\n                                            </div>\n                                            <div [hidden]="!mingrnt.errors.min">\n                                                Minimum amount should be 2\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-list>\n                            </ion-row>\n                        </ion-col>\n                        <ion-col col-12 *ngIf="taggel">\n                            <ion-row>\n                                <ion-list>\n                                    <ion-item>\n                                        <ion-input type="tel" placeholder="Minimum amount for Possibly Play" min="2" [(ngModel)]="data.minpossi" name="minpossi" #minpossi=\'ngModel\' required></ion-input>\n                                    </ion-item>\n                                    <ion-label class="alert alert-danger" color="danger">\n                                        <div *ngIf="minpossi.errors && (minpossi.dirty || minpossi.touched)">\n                                            <div [hidden]="!minpossi.errors.required">\n                                                Field is required\n                                            </div>\n                                            <div [hidden]="!minpossi.errors.min">\n                                                Minimum amount should be 2\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-list>\n                            </ion-row>\n                        </ion-col>\n\n                        <ion-col col-12>\n                            <ion-row>\n                                <div *ngIf="srcImage" class="upload_imgouter">\n                                    <img [src]="srcImage">\n                                </div>\n                                <!-- <ion-label  class="alert alert-danger" color="danger">\n									<div *ngIf="img.errors && (img.dirty || img.touched)">\n										   <div [hidden]="!img.errors.required" >\n											 Field is required\n										</div>\n									</div>\n								</ion-label> -->\n                                <div class="uploads">\n                                    <input (click)="CameraAction()" type="button" value="Upload Image" class="upladbtnw">\n                                </div>\n                            </ion-row>\n                        </ion-col>\n\n                        <ion-col col-12>\n                            <ion-row>\n                                <div class="bottombtn">\n                                    <button ion-button type="submit" [disabled]="!editeventForm.form.valid" (click)="editeventnow(editeventForm)">Save</button>\n                                </div>\n                            </ion-row>\n                        </ion-col>\n                    </form>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/editevent/editevent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], EditeventPage);

//# sourceMappingURL=editevent.js.map

/***/ }),

/***/ 184:
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
                    _this.subscrip = response.data;
                    localStorage.removeItem("USER_DATA");
                    localStorage.setItem("USER_DATA", JSON.stringify(response.data.User));
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
        clearInterval(this.appsetting.interval);
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
        selector: 'page-membershipdetaildj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/membershipdetaildj/membershipdetaildj.html"*/'<!--\n  Generated template for the MembershipdetaildjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color="black">\n        <button ion-button menuToggle>\n				  <ion-icon style="color:#fff;" name="menu"></ion-icon>\n				</button>\n        <ion-title>Membership Detail</ion-title>\n        <div class="logo">\n            <img src="assets/img/rlogo.png">\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding style="background: #f2f2f2;">\n    <!-- <div class="content-sec card"> -->\n    <ion-card class="card_sec">\n\n        <ion-card-header>\n            <h1 *ngIf="subscrip?.User?.subscription_status==1">Amount Paid</h1>\n        </ion-card-header>\n        <ion-card-content class="cardbody">\n            <div class="pay">\n                <span *ngIf="subscrip?.User?.subscription_rate">${{subscrip?.User?.subscription_rate}}</span>\n                <span *ngIf="!subscrip?.User?.subscription_rate">$30</span>\n            </div>\n\n            <h2>Subscription</h2>\n            <h3 style="border-right:1px solid #ccc;" *ngIf="subscrip?.User?.subscription_start_date">Start Date : {{subscrip?.User?.subscription_start_date | date:\'MM-dd-yyyy \'}}</h3>\n            <h3 *ngIf="subscrip?.User?.subscription_end_date">End Date : {{subscrip?.User?.subscription_end_date | date:\'MM-dd-yyyy\'}}</h3>\n            <h3 *ngIf="!subscrip?.User?.subscription_start_date">Not started yet</h3>\n            <p class="valid">Valid for <span>One Month (Recurring)</span></p>\n\n        </ion-card-content>\n        <div class="btnsec">\n            <!-- <button ion-button color="dark" (click)="updatemembr()" *ngIf="subscrip?.User?.subscription_status==1">Update Billing Information</button> -->\n            <button ion-button color="red" (click)="updatememb()" *ngIf="subscrip?.User?.subscription_status==0">Buy Membership</button>\n            <button ion-button color="red" (click)="cancelmembr()" *ngIf="subscrip?.User?.subscription_status==1">Cancel membership</button>\n        </div>\n    </ion-card>\n    <!-- </div> -->\n\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/membershipdetaildj/membershipdetaildj.html"*/,
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

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 3500);
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
                buttons: ['ok']
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 3500);
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
                        buttons: ['ok']
                    });
                    alert_3.present();
                    setTimeout(function () { return alert_3.dismiss(); }, 3500);
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
                        buttons: ['ok']
                    });
                    alert_4.present();
                    setTimeout(function () { return alert_4.dismiss(); }, 3500);
                }
            });
        }
        else {
            var alert_5 = this.alertCtrl.create({
                title: 'Change password',
                subTitle: 'Password do not match',
                buttons: ['ok']
            });
            alert_5.present();
            setTimeout(function () { return alert_5.dismiss(); }, 3500);
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
    ChangepasswordPage.prototype.ionViewCanEnter = function () {
        clearInterval(this.appsetting.interval);
    };
    return ChangepasswordPage;
}());
ChangepasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-changepassword',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/changepassword/changepassword.html"*/'<ion-header class="headerbg">\n\n  <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Change Password</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="margintop" padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n<div class="login_outer">\n  <div class="logo"><img src="assets/img/logofull.png"></div>\n<div class="form_sec">\n<form #changeForm="ngForm" (ngSubmit)="changepass(changeForm)" novalidate>\n  <ion-list>\n  <ion-item>\n    <ion-input type="password" minlength="5" placeholder="Enter your Old Password" [(ngModel)]="data.password"  name=\'password\' required #password="ngModel"></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="password.errors && (password.dirty || password.touched)">\n        <div [hidden]="!password.errors.required" >\n         Password is required\n        </div>\n    </div>\n    <div *ngIf="password.errors && (password.dirty || password.touched)" >\n       <div [hidden]="!password.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n   </ion-label>\n  <ion-item>\n    <ion-input type="password" minlength="5" placeholder="Enter your New Password" [(ngModel)]="data.newpassword" name=\'newpassword\' required #newpassword="ngModel" ></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)">\n       <div [hidden]="!newpassword.errors.required" >\n         Password is required\n        </div>\n    </div>\n    <div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)" >\n       <div [hidden]="!newpassword.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n  </ion-label>\n\n  <ion-item>\n    <ion-input type="password" minlength="5" placeholder="Confirm Password" [(ngModel)]="data.conpassword" name=\'conpassword\' required #conpassword="ngModel"></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="conpassword.errors && (conpassword.dirty || conpassword.touched)">\n       <div [hidden]="!conpassword.errors.required" >\n         Password is required\n        </div>\n    </div>\n    <div *ngIf="conpassword.errors && (conpassword.dirty || conpassword.touched)" >\n       <div [hidden]="!conpassword.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n   </ion-label>\n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" color="yellow" [disabled]="!changeForm.form.valid" style="text-transform: uppercase;" ion-button round>Submit</button>\n</div>\n</form>\n</div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/changepassword/changepassword.html"*/,
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

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionhstrydjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
    function TransactionhstrydjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
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
    TransactionhstrydjPage.prototype.paidinfo = function () {
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
    TransactionhstrydjPage.prototype.ionViewCanEnter = function () {
        this.paidinfo();
    };
    TransactionhstrydjPage.prototype.ionViewDidEnter = function () {
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
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
    };
    TransactionhstrydjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionhstrydjPage');
    };
    return TransactionhstrydjPage;
}());
TransactionhstrydjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-transactionhstrydj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/transactionhstrydj/transactionhstrydj.html"*/'<!--\n  Generated template for the TransactionhstrydjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		<ion-toolbar color="black">\n				<button ion-button menuToggle>\n				  <ion-icon style="color:#fff;" name="menu"></ion-icon>\n				</button>\n				<ion-title>Transaction History</ion-title>\n				<div class="logo">\n					<img src="assets/img/rlogo.png">\n				</div>\n			</ion-toolbar>\n  <!-- <ion-navbar color="theme-header">\n    <ion-title>Transaction History</ion-title>\n    <div class="logo">\n    	<img src="../assets/img/rlogo.png">\n    </div>\n  </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content padding>     	\n	<div class="content-sec" *ngFor="let thist of transachistdata; let i = index">\n		<div class="top-sec">\n			<h2>{{thist?.Clubgoer.complete_name}}</h2>\n			<h3>{{thist?.Event.event_name}}</h3>\n			<h3 *ngIf="thist?.ClubgoerRequest.shoutout_name">Paid for shoutout</h3>\n			<h3 *ngIf="thist?.ClubgoerRequest.songname">Paid for song request</h3>\n			<p *ngIf="thist?.TipOption.name">{{thist?.TipOption.name}}</p>\n			<p *ngIf="thist?.ClubgoerRequest.songname">Songname : {{thist?.ClubgoerRequest.songname}}</p>\n			<p *ngIf="thist?.ClubgoerRequest.songname">Artistname : {{thist?.ClubgoerRequest.artist_name}}</p>\n			<p *ngIf="thist?.ClubgoerRequest.shoutout_name">Shoutout type : {{thist?.ClubgoerRequest.shoutout_type}}</p>\n			<p *ngIf="thist?.ClubgoerRequest.shoutout_name">Shoutout name : {{thist?.ClubgoerRequest.shoutout_name}}</p>\n			<div class="right">\n				<p>${{thist?.ClubgoerRequest.total}}</p>\n			</div>\n		</div>\n		<div class="bottom-sec">\n			<p>Total payment</p>\n			<h2>You Received</h2>\n			<div class="right">\n				<p>${{thist?.ClubgoerRequest.total}}</p>\n				<h2>${{thist?.ClubgoerRequest.djshare}}</h2>\n			</div>\n		</div>\n	</div>\n	<div class="unshow" *ngIf="transachistdata?.length == 0">\n		  <h3> No transaction available</h3>\n	</div>\n	\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/transactionhstrydj/transactionhstrydj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], TransactionhstrydjPage);

//# sourceMappingURL=transactionhstrydj.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.gethelp();
    }
    HelpdjPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.gethelp();
        console.log('refreshed');
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
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
    HelpdjPage.prototype.ionViewCanEnter = function () {
        clearInterval(this.appsetting.interval);
    };
    return HelpdjPage;
}());
HelpdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-helpdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/helpdj/helpdj.html"*/'<!--\n  Generated template for the HelpdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="black">\n        <button ion-button menuToggle>\n            <ion-icon style="color:#fff;" name="menu"></ion-icon>\n          </button>\n        <ion-title style="padding-right: 22% !important;">{{help?.title}}</ion-title>\n        <div class="logo">\n          <img src="assets/img/rlogo.png">\n        </div>\n      </ion-navbar>\n\n</ion-header>\n\n\n\n    <ion-content padding>\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n            <ion-refresher-content style="color:#878787;" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n        </ion-refresher>\n        <div class="main">\n         <h3>Help</h3>\n         <p>{{help?.description}}</p>\n        </div>\n   </ion-content>\n       \n\n\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/helpdj/helpdj.html"*/,
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

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepassworddjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logindj_logindj__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 3500);
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
                buttons: ['ok']
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 3500);
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
                        buttons: ['ok']
                    });
                    alert_3.present();
                    setTimeout(function () { return alert_3.dismiss(); }, 3500);
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
                        buttons: ['ok']
                    });
                    alert_4.present();
                    setTimeout(function () { return alert_4.dismiss(); }, 3500);
                }
            });
        }
        else {
            var alert_5 = this.alertCtrl.create({
                title: 'Change password',
                subTitle: 'Password do not match',
                buttons: ['ok']
            });
            alert_5.present();
            setTimeout(function () { return alert_5.dismiss(); }, 3500);
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
    ChangepassworddjPage.prototype.ionViewCanEnter = function () {
        clearInterval(this.appsetting.interval);
    };
    return ChangepassworddjPage;
}());
ChangepassworddjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-changepassworddj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/changepassworddj/changepassworddj.html"*/'<ion-header>\n    <ion-toolbar color="black">\n       <button ion-button menuToggle>\n         <ion-icon style="color:#fff;" name="menu"></ion-icon>\n       </button>\n       <ion-title>Change Password</ion-title>\n       <ion-buttons end class="rbutton">\n          <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n       </ion-buttons>\n   </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="margintop" padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n<div class="login_outer">\n  <div class="logo"><img src="assets/img/logofull.png"></div>\n<div class="form_sec">\n<form #changeForm="ngForm" (ngSubmit)="changepass(changeForm)" novalidate>\n  <ion-list>\n  <ion-item>\n    <ion-input type="password" minlength="5" placeholder="Enter your Old Password" [(ngModel)]="data.password"  name=\'password\' required #password="ngModel"></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="password.errors && (password.dirty || password.touched)">\n        <div [hidden]="!password.errors.required" >\n         Password is required\n        </div>\n    </div>\n    <div *ngIf="password.errors && (password.dirty || password.touched)" >\n       <div [hidden]="!password.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n   </ion-label>\n  <ion-item>\n    <ion-input type="password" minlength="5" placeholder="Enter your New Password" [(ngModel)]="data.newpassword" name=\'newpassword\' required #newpassword="ngModel" ></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)">\n       <div [hidden]="!newpassword.errors.required" >\n         Password is required\n        </div>\n    </div>\n    <div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)" >\n       <div [hidden]="!newpassword.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n  </ion-label>\n\n  <ion-item>\n    <ion-input type="password" minlength="5" placeholder="Confirm Password" [(ngModel)]="data.conpassword" name=\'conpassword\' required #conpassword="ngModel"></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="conpassword.errors && (conpassword.dirty || conpassword.touched)">\n       <div [hidden]="!conpassword.errors.required" >\n         Password is required\n        </div>\n    </div>\n    <div *ngIf="conpassword.errors && (conpassword.dirty || conpassword.touched)" >\n       <div [hidden]="!conpassword.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n   </ion-label>\n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" color="red" [disabled]="!changeForm.form.valid" style="text-transform: uppercase;" ion-button round>Submit</button>\n</div>\n</form>\n</div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/changepassworddj/changepassworddj.html"*/,
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

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
        });
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
    TermsdjPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getterms();
        console.log('refreshed');
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
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
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
    };
    TermsdjPage.prototype.ionViewCanEnter = function () {
        clearInterval(this.appsetting.interval);
        this.getterms();
    };
    return TermsdjPage;
}());
TermsdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-termsdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/termsdj/termsdj.html"*/'<!--\n  Generated template for the TermsPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#fff;" name="menu"></ion-icon>\n    </button>\n    <ion-title>{{terms?.title}}</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<!-- <ion-content padding style="background:#373737;">\n  <div class="termsdj">\n <p> {{terms?.description}}</p>\n  </div>\n</ion-content> -->\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content style="color:#878787;" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n    </ion-refresher>\n    <div class="main">\n     <h3>Terms & Conditions</h3>\n     <p>{{terms?.description}}</p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/termsdj/termsdj.html"*/,
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

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
var NotificationdjPage = (function () {
    function NotificationdjPage(navCtrl, navParams, http, appsetting, loadingCtrl, alertCtrl) {
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
    NotificationdjPage.prototype.notifreq = function () {
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
                djid: Userid,
            };
            console.log(data);
            console.log("vikki");
            var serialized = _this.serializeObj(data);
            _this.http.post(_this.appsetting.myGlobalVar + 'events/getnotifications', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.isSucess == "true") {
                    _this.shoutreq = data.data;
                }
                else {
                    _this.shoutreq = [];
                }
            });
        });
    };
    NotificationdjPage.prototype.ionViewDidEnter = function () {
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
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
    };
    // playimg(id,idd){
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    //     var options = new RequestOptions({ headers: headers });
    //     var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    //     let Loader = this.loadingCtrl.create({
    //       content: 'Please wait...'
    //     });
    //     Loader.present().then(() => {
    //       var data = {
    //         reqid: id,
    //         eventid:idd,
    //         id:Userid,
    //         reqoption:3
    //       }
    //       var serialized = this.serializeObj(data);
    //       this.http.post(this.appsetting.myGlobalVar + 'events/votetopquereq', serialized, options)
    //         .map(res => res.json())
    //         .subscribe(data => {
    //           Loader.dismiss();
    //           if (data.isSucess == "true") {
    //             let alertr = this.alertCtrl.create({
    //                 title: 'Requests',
    //                 subTitle: data.msg,
    //               });
    //                 alertr.present();
    //             setTimeout(()=>alertr.dismiss(),1500);
    //             this.shoutreq=data.data;
    //             //this.navCtrl.push(EventsdjPage);
    //           } else {
    //           }
    //         })
    //     });
    // }
    // cross(id,idd){
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    //     var options = new RequestOptions({ headers: headers });
    //     var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    //     let Loader = this.loadingCtrl.create({
    //       content: 'Please wait...'
    //     });
    //     Loader.present().then(() => {
    //       var data = {
    //         reqid: id,
    //         eventid:idd,
    //         id:Userid,
    //         reqopt:3
    //             }
    //       var serialized = this.serializeObj(data);
    //       this.http.post(this.appsetting.myGlobalVar + 'events/shoutrequeststatus', serialized, options)
    //         .map(res => res.json())
    //         .subscribe(data => {
    //           Loader.dismiss();
    //           console.log(data);
    //           if (data.isSucess == "true") {
    //             let alertr = this.alertCtrl.create({
    //                 title: 'Requests',
    //                 subTitle: data.msg,
    //               });
    //                 alertr.present();
    //             setTimeout(()=>alertr.dismiss(),1500);
    //             this.shoutreq=data.data;
    //             //this.navCtrl.push(EventsdjPage);
    //           } else {
    //           }
    //         })
    //     });
    // }
    NotificationdjPage.prototype.ionViewCanEnter = function () {
        this.notifreq();
    };
    NotificationdjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    NotificationdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoutoutDjPage');
    };
    return NotificationdjPage;
}());
NotificationdjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notificationdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/notificationdj/notificationdj.html"*/'<!--\n  Generated template for the PlaynowlistdjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n      <button ion-button menuToggle>\n            <ion-icon style="color:#fff;" name="menu"></ion-icon>\n      </button>\n    <ion-title>Notifications</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<div class="past">\n	<ion-list>\n      <ion-item *ngFor="let shout of shoutreq; let i = index">\n        	<div class="img-sec">\n        		<img src="assets/img/headphn.png">\n        	</div>\n        	<h3>{{shout?.SendNotification.title}} </h3>\n        	<p>{{shout?.SendNotification.message}}</p>\n        	<div class="img-right">\n        		<div class="imgmain">\n        		<!--	<img src="assets/img/playimg.png" *ngIf="shout?.ClubgoerRequest.topque">\n					 <img src="assets/img/playnow.png" (click)="playimg(shout?.ClubgoerRequest.id,shout?.Event.id)" *ngIf="!shout?.ClubgoerRequest.topque">\n					<img src="assets/img/cross.png" (click)="cross(shout?.ClubgoerRequest.id,shout?.Event.id)">\n        	-->	</div> \n        	</div>\n	  </ion-item>\n	   <div class="unshow" *ngIf="shoutreq?.length == 0">\n		  <h3> No notification available</h3>\n	   </div>\n  </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/notificationdj/notificationdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], NotificationdjPage);

//# sourceMappingURL=notificationdj.js.map

/***/ }),

/***/ 201:
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
webpackEmptyAsyncContext.id = 201;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-card/add-card.module": [
		783,
		54
	],
	"../pages/addeventdj/addeventdj.module": [
		801,
		53
	],
	"../pages/addeventdjnew--/addeventdjnew.module": [
		802,
		3
	],
	"../pages/addeventdjnew/addeventdjnew.module": [
		767,
		52
	],
	"../pages/changepassword/changepassword.module": [
		793,
		51
	],
	"../pages/changepassworddj/changepassworddj.module": [
		796,
		50
	],
	"../pages/djsdetails/djsdetails.module": [
		760,
		49
	],
	"../pages/djslist/djslist.module": [
		761,
		48
	],
	"../pages/editevent/editevent.module": [
		780,
		47
	],
	"../pages/editprofiledj/editprofiledj.module": [
		766,
		46
	],
	"../pages/entercode/entercode.module": [
		758,
		45
	],
	"../pages/eventsdj/eventsdj.module": [
		786,
		44
	],
	"../pages/forgot/forgot.module": [
		765,
		43
	],
	"../pages/gauranteedj/gauranteedj.module": [
		773,
		42
	],
	"../pages/helpdj/helpdj.module": [
		795,
		41
	],
	"../pages/historicalrequests/historicalrequests.module": [
		759,
		40
	],
	"../pages/intro/intro.module": [
		803,
		2
	],
	"../pages/login/login.module": [
		792,
		39
	],
	"../pages/logindj/logindj.module": [
		788,
		38
	],
	"../pages/manageeventsdj/manageeventsdj.module": [
		781,
		37
	],
	"../pages/membershipdetaildj--/membershipdetaildj.module": [
		804,
		1
	],
	"../pages/membershipdetaildj/membershipdetaildj.module": [
		785,
		36
	],
	"../pages/nameofeventsdj/nameofeventsdj.module": [
		778,
		35
	],
	"../pages/notificationdj/notificationdj.module": [
		798,
		34
	],
	"../pages/omniaclubeventdj/omniaclubeventdj.module": [
		779,
		33
	],
	"../pages/pasteventdj/pasteventdj.module": [
		770,
		32
	],
	"../pages/payinfo/payinfo.module": [
		753,
		31
	],
	"../pages/paymenthistorydj--/paymenthistorydj.module": [
		805,
		0
	],
	"../pages/paymenthistorydj/paymenthistorydj.module": [
		768,
		30
	],
	"../pages/paymentinfo/paymentinfo.module": [
		800,
		29
	],
	"../pages/playnowlistdj/playnowlistdj.module": [
		771,
		28
	],
	"../pages/possiblydj/possiblydj.module": [
		774,
		27
	],
	"../pages/privacy/privacy.module": [
		763,
		26
	],
	"../pages/profile/profile.module": [
		751,
		25
	],
	"../pages/profileedit/profileedit.module": [
		752,
		24
	],
	"../pages/requesthistorydj/requesthistorydj.module": [
		769,
		23
	],
	"../pages/requestsongplay/requestsongplay.module": [
		754,
		22
	],
	"../pages/settings/settings.module": [
		799,
		21
	],
	"../pages/shoutout/shoutout.module": [
		756,
		20
	],
	"../pages/shoutoutdj/shoutoutdj.module": [
		775,
		19
	],
	"../pages/signindj/signindj.module": [
		790,
		18
	],
	"../pages/signup/signup.module": [
		791,
		17
	],
	"../pages/signupdj/signupdj.module": [
		789,
		16
	],
	"../pages/songrequests/songrequests.module": [
		757,
		15
	],
	"../pages/subscribedj/subscribedj.module": [
		787,
		14
	],
	"../pages/subscribedjupdate/subscribedjupdate.module": [
		784,
		13
	],
	"../pages/terms/terms.module": [
		762,
		12
	],
	"../pages/termsdj/termsdj.module": [
		797,
		11
	],
	"../pages/termsdjsubs/termsdjsubs.module": [
		782,
		10
	],
	"../pages/topqueuedj/topqueuedj.module": [
		772,
		9
	],
	"../pages/transactionhstrydj/transactionhstrydj.module": [
		794,
		8
	],
	"../pages/votelike/votelike.module": [
		764,
		7
	],
	"../pages/voteup/voteup.module": [
		755,
		6
	],
	"../pages/voteupdj/voteupdj.module": [
		776,
		5
	],
	"../pages/voting/voting.module": [
		777,
		4
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
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addeventdjnew_addeventdjnew__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manageeventsdj_manageeventsdj__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editprofiledj_editprofiledj__ = __webpack_require__(50);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    EventsdjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsdjPage');
        clearInterval(this.appsetting.interval);
    };
    EventsdjPage.prototype.addEvent = function () {
        var _this = this;
        this.Loader.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            userid: JSON.parse(localStorage.getItem('USER_DATA')).id
        };
        var Serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'users/getuserbyid', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.Loader.dismiss();
            if (response.isSucess == "true") {
                if (response.data.User.paypal_email == undefined || response.data.User.paypal_email == null || response.data.User.paypal_email == "null" || response.data.User.paypal_email == "undefined") {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'PayPal Account ',
                        subTitle: 'To add an event, please add your PayPal email address first',
                        buttons: ['ok']
                    });
                    alert_2.present();
                    setTimeout(function () { return alert_2.dismiss(); }, 3500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editprofiledj_editprofiledj__["a" /* EditprofiledjPage */]);
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addeventdjnew_addeventdjnew__["a" /* AddeventdjnewPage */]);
                }
            }
            else {
                //this.navCtrl.push(AddeventdjnewPage);
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
        selector: 'page-eventsdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/eventsdj/eventsdj.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#fff;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Event</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n</ion-toolbar>\n</ion-header>\n\n<ion-content padding style="background-image: url(assets/img/loginbg.jpg); background-size: cover; background-position: center; top:0;">\n	<div class="content-sec">\n		<ion-grid>\n			<ion-row>\n				<div class="img-top">\n					<img src="assets/img/logofull.png">\n				</div>\n			</ion-row>\n		</ion-grid>\n	</div>\n	<div class="btnsec">\n		<ion-grid>\n			<ion-row>\n				<div class="top-btn">\n					<button ion-button (click)="addEvent()">Add Event</button>\n				</div>\n				<div class="bottom-btn">\n					<button ion-button (click)="ManageEvent()">Manage Events</button>\n				</div>\n			</ion-row>\n		</ion-grid>\n	</div>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/eventsdj/eventsdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], EventsdjPage);

//# sourceMappingURL=eventsdj.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profileedit_profileedit__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entercode_entercode__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historicalrequests_historicalrequests__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(81);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
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
        selector: 'page-home',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n  <div class="homemain">\n    <div class="logo"><img src="assets/img/logofull.png"></div>\n    <div class="home_list">\n    <ion-item no-lines item-right>\n      <button (click)="entercodePage()"  ion-button secondary color="" block>Enter Dj Code <ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-item>\n    <ion-item no-lines>\n      <button  (click)="editprofile()" ion-button secondary  block>Edit Profile <ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-item>\n    <ion-item no-lines>\n      <button (click)="historicalrequestsPage()" ion-button secondary  block>Historical Requests <ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-item>\n  </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotelikePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
        var d = new Date();
        var mm = ("0" + (d.getMonth() + 1)).slice(-2);
        var day = ("0" + (d.getDate())).slice(-2);
        var datime = d.getFullYear() + "-" + mm + "-" + day + " " + "00" + ":" + "00" + ":00";
        var postdata = {
            userid: userid,
            datime: datime
        };
        //console.log(postdata);
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'users/userrequestslike', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.Loading.dismiss();
            //console.log(data);
            if (data.isSucess == "true") {
                _this.requests = data.data;
            }
            else {
                _this.requests = [];
                var alert_1 = _this.alertCtrl.create({
                    title: 'Dj Details',
                    subTitle: data.msg,
                    buttons: ['ok']
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
                    buttons: ['ok']
                });
                alert_2.present();
                setTimeout(function () { return alert_2.dismiss(); }, 3500);
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Voteup Request',
                    subTitle: data.msg,
                });
                alert_3.present();
                setTimeout(function () { return alert_3.dismiss(); }, 3500);
            }
        });
    };
    VotelikePage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismissAll();
            var alert_4 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 2500);
        }
    };
    return VotelikePage;
}());
VotelikePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-votelike',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/votelike/votelike.html"*/'<!--\n  Generated template for the VoteupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Voteup Request</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n  <div class="voteup">\n    <ion-list no-lines>\n      <ion-item *ngFor="let request of requests; let i = index">\n        <h2>{{request?.ClubgoerRequest.songname}}</h2>\n        <p>{{request?.TipOption.name}}</p>\n        <ion-note item-end="" class="note note-ios"> \n          <button color="light" clear small ion-button icon-left>\n            {{request?.RequestLike.length}}\n            <ion-icon *ngIf="request?.ClubgoerRequest.like>0" color="yellow" style="font-size:13px; padding-left:8px;" name="thumbs-up"></ion-icon>\n            <ion-icon *ngIf="request?.ClubgoerRequest.like==0" color="yellow" style="font-size:13px; padding-left:8px;" name="thumbs-down"></ion-icon>\n          </button> \n        </ion-note>\n        <ion-note item-end="" class="note time">{{request?.ClubgoerRequest.tip_amount}}</ion-note>\n      </ion-item>\n      <div class="unshow" *ngIf="requests?.length == 0">\n          <h3 style="color:white;">No request available</h3>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/votelike/votelike.html"*/,
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

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(39);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
                subTitle: "Please select payment method",
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 3500);
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
                        buttons: ['ok']
                    });
                    alert_2.present();
                    setTimeout(function () { return alert_2.dismiss(); }, 3500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Edit payment info',
                        subTitle: response.msg,
                        buttons: ['ok']
                    });
                    alert_3.present();
                    setTimeout(function () { return alert_3.dismiss(); }, 3500);
                }
            });
        }
    };
    PaymentinfoPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismissAll();
            var alert_4 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 3500);
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

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddeventdjPage; });
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












var AddeventdjPage = (function () {
    function AddeventdjPage(navCtrl, navParams, platform, http, transfer, file, filePath, camera, actionSheetCtrl, loadingCtrl, toastCtrl, appsetting, alertCtrl) {
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
    AddeventdjPage.prototype.toggleDetails = function (taggel) {
        if (taggel) {
            this.taggel = false;
        }
        else {
            this.taggel = true;
        }
    };
    AddeventdjPage.prototype.uploadImage = function (url) {
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
    AddeventdjPage.prototype.addeventnow = function (addevent) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var dt = new Date();
        var montn = ("0" + (dt.getMonth() + 1)).slice(-2);
        var daynw = ("0" + (dt.getDate())).slice(-2);
        this.curdat = dt.getFullYear() + "-" + montn + "-" + daynw;
        var seconds = dt.getSeconds();
        var minutes = dt.getMinutes();
        var hour = dt.getHours();
        var timetocheck = dt.getFullYear() + "-" + montn + "-" + daynw + " " + hour + ":" + minutes + ":" + seconds;
        var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
        var imgsend = this.newFileName;
        var paypl_emil = JSON.parse(localStorage.getItem("USER_DATA")).paypal_email;
        //var dj_code = JSON.parse(localStorage.getItem("USER_DATA")).djcode;
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
        else if (paypl_emil == null || paypl_emil == "" || paypl_emil == undefined) {
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
                curdate: this.curdat,
                checktime: timetocheck,
                role: 'dj'
            };
            alert("alert");
            alert(JSON.stringify(data));
            alert("vikki");
            var Serialized = this.serializeObj(data);
            this.http.post(this.appsetting.myGlobalVar + 'events/addevent', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                _this.Loader.dismiss();
                if (response.status == 0) {
                    var alert_6 = _this.alertCtrl.create({
                        title: 'Add event',
                        subTitle: response.msg,
                    });
                    alert_6.present();
                    setTimeout(function () { return alert_6.dismiss(); }, 2500);
                    _this.uploadImage(_this.appsetting.myGlobalVar + 'events/uploadeventimgnow');
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
    AddeventdjPage.prototype.takePicture = function (sourceType) {
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
            //alert(JSON.stringify(err));
        });
    };
    // Create a new name for the image
    AddeventdjPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime();
        this.newFileName = n + ".jpg";
        return this.newFileName;
    };
    // Copy the image to a local folder
    AddeventdjPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            //this.srcImage = newFileName;
            _this.uploadImage(_this.appsetting.myGlobalVar + 'events/uploadeventimg');
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    AddeventdjPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    AddeventdjPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    AddeventdjPage.prototype.CameraActionadd = function () {
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
    AddeventdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loader.dismiss();
            var alert_8 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
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
        selector: 'page-addeventdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/addeventdj/addeventdj.html"*/'<!--\n  Generated template for the AddeventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		<ion-navbar color="black">\n			<ion-title>Add Event</ion-title>\n	    	 <ion-buttons end class="rbutton">\n		        <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n		     </ion-buttons>\n		</ion-navbar>\n	</ion-header>\n	\n	\n	<ion-content>\n		<div class="imgsec">\n			<img [src]="logo">\n		</div>\n		<div class="form-sec">\n			<ion-grid>\n				<ion-row>\n					<ion-col>\n						\n						<form #addeventForm="ngForm" class="event-form">\n							<ion-col col-12>\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="text" placeholder="Venue name" [(ngModel)]="data.venuename" name="venuename" #venuename=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="venuename.errors && (venuename.dirty || venuename.touched)">\n											   <div [hidden]="!venuename.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n							</ion-col>\n								\n								<ion-col col-12>\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="text" placeholder="Venue address" [(ngModel)]="data.venueaddress" name="venueaddress" #venueaddress=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="venueaddress.errors && (venueaddress.dirty || venueaddress.touched)">\n											   <div [hidden]="!venueaddress.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n								<ion-col col-12>\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="text" placeholder="Event name" [(ngModel)]="data.eventname" name="eventname" #eventname=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventname.errors && (eventname.dirty || eventname.touched)">\n											   <div [hidden]="!eventname.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n								 <div class="colm">\n						<ion-col col-12>\n								<ion-row>\n							<ion-col col-6>\n									<ion-list>\n										<ion-item>\n												\n												<ion-datetime min="{{minyear}}" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY" [(ngModel)]="data.eventstartdt" (ngModelChange)="updateDueDate($event)" name="eventstartdt" placeholder="Event start date" #eventstartdt=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventstartdt.errors && (eventstartdt.dirty || eventstartdt.touched)">\n											   <div [hidden]="!eventstartdt.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n	\n							<ion-col col-6>\n									<ion-list>\n										<ion-item>\n												<ion-datetime min="{{maxyear}}" pickerFormat="MM/DD/YYYY" displayFormat="MM/DD/YYYY"  placeholder="Event end date" [(ngModel)]="data.eventenddt" name="eventenddt" #eventenddt=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventenddt.errors && (eventenddt.dirty || eventenddt.touched)">\n											   <div [hidden]="!eventenddt.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n							</ion-row>\n						</ion-col>\n					</div>\n						<div class="colm>">\n						<ion-col col-12>\n							<ion-row>\n							<ion-col col-6 class="padding0lft">\n									<ion-list>\n										<ion-item>\n												<ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Event start time" [(ngModel)]="data.eventsarttm" name="eventsarttm" #eventsarttm=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventsarttm.errors && (eventsarttm.dirty || eventsarttm.touched)">\n											   <div [hidden]="!eventsarttm.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n							<ion-col col-6 class="padding0rgt">\n									<ion-list>\n										<ion-item>\n												<ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Event end time" [(ngModel)]="data.eventendtm" name="eventendtm" #eventendtm=\'ngModel\' required></ion-datetime>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="eventendtm.errors && (eventendtm.dirty || eventendtm.touched)">\n											   <div [hidden]="!eventendtm.errors.required" >\n												 Field is required\n												</div>\n											</div>\n										</ion-label>\n									 </ion-list>\n							</ion-col>\n						</ion-row>\n						</ion-col>\n					</div>\n					<ion-col col-12>\n						<ion-row>\n							<div class="tip" (click)="toggleDetails(taggel)">\n								<h3>Setup Tip Amounts</h3>\n								<button class="abc" ion-button icon-right>\n									<ion-icon name="arrow-down"></ion-icon>\n								</button>\n							</div>\n						</ion-row>\n					</ion-col>\n					<ion-col col-12 *ngIf="taggel">\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="tel" placeholder="Minimum amount for Play Now" min="2" [(ngModel)]="data.minplay" name="minplay" #minplay=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="minplay.errors && (minplay.dirty || minplay.touched)">\n											   <div [hidden]="!minplay.errors.required" >\n													 Field is required\n											   </div>\n												<div [hidden]="!minplay.errors.min" >\n													Minimum amount should be 2 \n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n							 \n								<ion-col col-12 *ngIf="taggel">\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="tel" placeholder="Minimum amount for Guaranteed Play" min="2" [(ngModel)]="data.mingrnt" name="mingrnt" #mingrnt=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="mingrnt.errors && (mingrnt.dirty || mingrnt.touched)">\n											   <div [hidden]="!mingrnt.errors.required" >\n												 Field is required\n												</div>\n												<div [hidden]="!mingrnt.errors.min" >\n													Minimum amount should be 2 \n												</div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n								<ion-col col-12 *ngIf="taggel">\n								<ion-row>\n									<ion-list>\n										<ion-item>\n											<ion-input type="tel" placeholder="Minimum amount for Possibly Play" min="2" [(ngModel)]="data.minpossi" name="minpossi" #minpossi=\'ngModel\' required></ion-input>\n										</ion-item>\n										<ion-label  class="alert alert-danger" color="danger">\n											<div *ngIf="minpossi.errors && (minpossi.dirty || minpossi.touched)">\n											   <div [hidden]="!minpossi.errors.required" >\n													 Field is required\n											   </div>\n											   <div [hidden]="!minpossi.errors.min" >\n													Minimum amount should be 2 \n											   </div>\n											</div>\n										</ion-label>\n									</ion-list>\n								</ion-row>\n								</ion-col>\n							\n						<ion-col col-12>\n							<ion-row>\n								<div *ngIf="srcImage" class="upload_imgouter">\n									<img [src]="srcImage"/>\n								</div>  \n								<!-- <ion-label  class="alert alert-danger" color="danger">\n									<div *ngIf="img.errors && (img.dirty || img.touched)">\n										   <div [hidden]="!img.errors.required" >\n											 Field is required\n										</div>\n									</div>\n								</ion-label> -->\n								<div class="file-upload">\n										<!-- <label for="upload" class="file-upload__label">Upload Image <span> <ion-icon name="camera"></ion-icon></span></label> -->\n										<!-- <button class="file-upload__input" ion-button full (click)="CameraAction()" style="background:none;"></button> -->\n										<label for="upload" class="file-upload__label">Upload Image <span> <ion-icon name="camera"></ion-icon></span></label>\n										<input id="upload" class="file-upload__input" (click)="CameraActionadd()" type="button" name="file-upload">  \n								</div>\n								\n							</ion-row>\n						</ion-col>\n						\n						<ion-col col-12>\n							<ion-row>\n								<div class="bottombtn">\n									<button ion-button type="submit" [disabled]="!addeventForm.form.valid"  (click)="addeventnow(addeventForm)">Save</button>\n								</div>\n							</ion-row>\n						</ion-col>\n					</form>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	\n	</ion-content>\n	\n	'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/addeventdj/addeventdj.html"*/,
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
], AddeventdjPage);

//# sourceMappingURL=addeventdj.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(438);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_djsdetails_djsdetails__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_votelike_votelike__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_changepassword_changepassword__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_transfer__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profileedit_profileedit__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_streaming_media__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_entercode_entercode__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_historicalrequests_historicalrequests__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_requestsongplay_requestsongplay__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_shoutout_shoutout__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_voteup_voteup__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_privacy_privacy__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_paymentinfo_paymentinfo__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_payinfo_payinfo__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_djslist_djslist__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_songrequests_songrequests__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_in_app_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_signupdj_signupdj__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_logindj_logindj__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_editprofiledj_editprofiledj__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_nameofeventsdj_nameofeventsdj__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_paymenthistorydj_paymenthistorydj__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_requesthistorydj_requesthistorydj__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_helpdj_helpdj__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_editevent_editevent__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_addeventdjnew_addeventdjnew__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_termsdj_termsdj__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_signindj_signindj__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_changepassworddj_changepassworddj__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_eventsdj_eventsdj__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_playnowlistdj_playnowlistdj__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_addeventdj_addeventdj__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_notificationdj_notificationdj__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_subscribedj_subscribedj__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_voting_voting__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_omniaclubeventdj_omniaclubeventdj__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_pasteventdj_pasteventdj__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_manageeventsdj_manageeventsdj__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_topqueuedj_topqueuedj__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_gauranteedj_gauranteedj__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_termsdjsubs_termsdjsubs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_possiblydj_possiblydj__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_voteupdj_voteupdj__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_shoutoutdj_shoutoutdj__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_subscribedjupdate_subscribedjupdate__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_transactionhstrydj_transactionhstrydj__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_paypal__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ionic_native_status_bar__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_membershipdetaildj_membershipdetaildj__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_splash_screen__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ionic_native_facebook__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__providers_variable_variable__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__providers_common_common__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__ionic_native_firebase__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__ionic_native_stripe__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_add_card_add_card__ = __webpack_require__(106);
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
            __WEBPACK_IMPORTED_MODULE_58__pages_shoutoutdj_shoutoutdj__["a" /* ShoutoutdjPage */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_notificationdj_notificationdj__["a" /* NotificationdjPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_changepassworddj_changepassworddj__["a" /* ChangepassworddjPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_djsdetails_djsdetails__["a" /* DjsdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_profileedit_profileedit__["a" /* ProfileeditPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_entercode_entercode__["a" /* EntercodePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_payinfo_payinfo__["a" /* PayinfoPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_votelike_votelike__["a" /* VotelikePage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_voting_voting__["a" /* VotingPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_gauranteedj_gauranteedj__["a" /* GauranteedjPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_historicalrequests_historicalrequests__["a" /* HistoricalrequestsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_requestsongplay_requestsongplay__["a" /* RequestsongplayPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_shoutout_shoutout__["a" /* ShoutoutPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_voteup_voteup__["a" /* VoteupPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_paymentinfo_paymentinfo__["a" /* PaymentinfoPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_djslist_djslist__["a" /* DjslistPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_addeventdjnew_addeventdjnew__["a" /* AddeventdjnewPage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_termsdjsubs_termsdjsubs__["a" /* TermsdjsubsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_privacy_privacy__["a" /* PrivacyPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_possiblydj_possiblydj__["a" /* PossiblydjPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_termsdj_termsdj__["a" /* TermsdjPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_songrequests_songrequests__["a" /* SongrequestsPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_signindj_signindj__["a" /* SignindjPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_eventsdj_eventsdj__["a" /* EventsdjPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_addeventdj_addeventdj__["a" /* AddeventdjPage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_topqueuedj_topqueuedj__["a" /* TopqueuedjPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_subscribedj_subscribedj__["a" /* SubscribedjPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_omniaclubeventdj_omniaclubeventdj__["a" /* OmniaclubeventdjPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_pasteventdj_pasteventdj__["a" /* PasteventdjPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_manageeventsdj_manageeventsdj__["a" /* ManageeventsdjPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_signupdj_signupdj__["a" /* SignupdjPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_logindj_logindj__["a" /* LogindjPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_editprofiledj_editprofiledj__["a" /* EditprofiledjPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_nameofeventsdj_nameofeventsdj__["a" /* NameofeventsdjPage */],
            __WEBPACK_IMPORTED_MODULE_60__pages_transactionhstrydj_transactionhstrydj__["a" /* TransactionhstrydjPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_playnowlistdj_playnowlistdj__["a" /* PlaynowlistdjPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_helpdj_helpdj__["a" /* HelpdjPage */],
            __WEBPACK_IMPORTED_MODULE_59__pages_subscribedjupdate_subscribedjupdate__["a" /* SubscribedjupdatePage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_requesthistorydj_requesthistorydj__["a" /* RequesthistorydjPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_paymenthistorydj_paymenthistorydj__["a" /* PaymenthistorydjPage */],
            __WEBPACK_IMPORTED_MODULE_63__pages_membershipdetaildj_membershipdetaildj__["a" /* MembershipdetaildjPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_voteupdj_voteupdj__["a" /* VoteupdjPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_editevent_editevent__["a" /* EditeventPage */],
            __WEBPACK_IMPORTED_MODULE_72__pages_add_card_add_card__["a" /* AddCardPage */]
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
                    { loadChildren: '../pages/addeventdjnew/addeventdjnew.module#AddeventdjnewPageModule', name: 'AddeventdjnewPage', segment: 'addeventdjnew', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/paymenthistorydj/paymenthistorydj.module#PaymenthistorydjPageModule', name: 'PaymenthistorydjPage', segment: 'paymenthistorydj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/requesthistorydj/requesthistorydj.module#RequesthistorydjPageModule', name: 'RequesthistorydjPage', segment: 'requesthistorydj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pasteventdj/pasteventdj.module#PasteventdjPageModule', name: 'PasteventdjPage', segment: 'pasteventdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playnowlistdj/playnowlistdj.module#PlaynowlistdjPageModule', name: 'PlaynowlistdjPage', segment: 'playnowlistdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/topqueuedj/topqueuedj.module#TopqueuedjPageModule', name: 'TopqueuedjPage', segment: 'topqueuedj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/gauranteedj/gauranteedj.module#GauranteedjPageModule', name: 'GauranteedjPage', segment: 'gauranteedj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/possiblydj/possiblydj.module#PossiblydjPageModule', name: 'PossiblydjPage', segment: 'possiblydj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shoutoutdj/shoutoutdj.module#ShoutoutdjPageModule', name: 'ShoutoutdjPage', segment: 'shoutoutdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/voteupdj/voteupdj.module#VoteupdjPageModule', name: 'VoteupdjPage', segment: 'voteupdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/voting/voting.module#VotingPageModule', name: 'VotingPage', segment: 'voting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nameofeventsdj/nameofeventsdj.module#NameofeventsdjPageModule', name: 'NameofeventsdjPage', segment: 'nameofeventsdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/omniaclubeventdj/omniaclubeventdj.module#OmniaclubeventdjPageModule', name: 'OmniaclubeventdjPage', segment: 'omniaclubeventdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editevent/editevent.module#EditeventPageModule', name: 'EditeventPage', segment: 'editevent', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/manageeventsdj/manageeventsdj.module#ManageeventsdjPageModule', name: 'ManageeventsdjPage', segment: 'manageeventsdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termsdjsubs/termsdjsubs.module#TermsdjsubsPageModule', name: 'TermsdjsubsPage', segment: 'termsdjsubs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-card/add-card.module#AddCardPageModule', name: 'AddCardPage', segment: 'add-card', priority: 'low', defaultHistory: [] },
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
                    { loadChildren: '../pages/notificationdj/notificationdj.module#NotificationdjPageModule', name: 'NotificationdjPage', segment: 'notificationdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/paymentinfo/paymentinfo.module#PaymentinfoPageModule', name: 'PaymentinfoPage', segment: 'paymentinfo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addeventdj/addeventdj.module#AddeventdjPageModule', name: 'AddeventdjPage', segment: 'addeventdj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addeventdjnew--/addeventdjnew.module#AddeventdjnewPageModule', name: 'AddeventdjnewPage', segment: 'addeventdjnew', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/membershipdetaildj--/membershipdetaildj.module#MembershipdetaildjPageModule', name: 'MembershipdetaildjPage', segment: 'membershipdetaildj', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/paymenthistorydj--/paymenthistorydj.module#PaymenthistorydjPageModule', name: 'PaymenthistorydjPage', segment: 'paymenthistorydj', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_changepassworddj_changepassworddj__["a" /* ChangepassworddjPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_editevent_editevent__["a" /* EditeventPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_payinfo_payinfo__["a" /* PayinfoPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_djsdetails_djsdetails__["a" /* DjsdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_profileedit_profileedit__["a" /* ProfileeditPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_termsdj_termsdj__["a" /* TermsdjPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_entercode_entercode__["a" /* EntercodePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_votelike_votelike__["a" /* VotelikePage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_voting_voting__["a" /* VotingPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_addeventdjnew_addeventdjnew__["a" /* AddeventdjnewPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_notificationdj_notificationdj__["a" /* NotificationdjPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_historicalrequests_historicalrequests__["a" /* HistoricalrequestsPage */],
            __WEBPACK_IMPORTED_MODULE_63__pages_membershipdetaildj_membershipdetaildj__["a" /* MembershipdetaildjPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_requestsongplay_requestsongplay__["a" /* RequestsongplayPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_shoutout_shoutout__["a" /* ShoutoutPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_voteup_voteup__["a" /* VoteupPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_possiblydj_possiblydj__["a" /* PossiblydjPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_gauranteedj_gauranteedj__["a" /* GauranteedjPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_paymentinfo_paymentinfo__["a" /* PaymentinfoPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_privacy_privacy__["a" /* PrivacyPage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_topqueuedj_topqueuedj__["a" /* TopqueuedjPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_djslist_djslist__["a" /* DjslistPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_songrequests_songrequests__["a" /* SongrequestsPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_signindj_signindj__["a" /* SignindjPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_eventsdj_eventsdj__["a" /* EventsdjPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_addeventdj_addeventdj__["a" /* AddeventdjPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_subscribedj_subscribedj__["a" /* SubscribedjPage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_termsdjsubs_termsdjsubs__["a" /* TermsdjsubsPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_omniaclubeventdj_omniaclubeventdj__["a" /* OmniaclubeventdjPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_pasteventdj_pasteventdj__["a" /* PasteventdjPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_manageeventsdj_manageeventsdj__["a" /* ManageeventsdjPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_signupdj_signupdj__["a" /* SignupdjPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_logindj_logindj__["a" /* LogindjPage */],
            __WEBPACK_IMPORTED_MODULE_59__pages_subscribedjupdate_subscribedjupdate__["a" /* SubscribedjupdatePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_editprofiledj_editprofiledj__["a" /* EditprofiledjPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_nameofeventsdj_nameofeventsdj__["a" /* NameofeventsdjPage */],
            __WEBPACK_IMPORTED_MODULE_60__pages_transactionhstrydj_transactionhstrydj__["a" /* TransactionhstrydjPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_playnowlistdj_playnowlistdj__["a" /* PlaynowlistdjPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_helpdj_helpdj__["a" /* HelpdjPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_voteupdj_voteupdj__["a" /* VoteupdjPage */],
            __WEBPACK_IMPORTED_MODULE_58__pages_shoutoutdj_shoutoutdj__["a" /* ShoutoutdjPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_requesthistorydj_requesthistorydj__["a" /* RequesthistorydjPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_paymenthistorydj_paymenthistorydj__["a" /* PaymenthistorydjPage */],
            __WEBPACK_IMPORTED_MODULE_72__pages_add_card_add_card__["a" /* AddCardPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_70__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_65__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_64__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_62__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_66__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_67__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_61__ionic_native_paypal__["a" /* PayPal */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_68__providers_variable_variable__["a" /* VariableProvider */],
            __WEBPACK_IMPORTED_MODULE_69__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_71__ionic_native_stripe__["a" /* Stripe */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribedjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventsdj_eventsdj__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__termsdjsubs_termsdjsubs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_card_add_card__ = __webpack_require__(106);
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
    function SubscribedjPage(navCtrl, navParams, events, appsetting, http, loadingCtrl, alertCtrl, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventsdj_eventsdj__["a" /* EventsdjPage */]);
    };
    SubscribedjPage.prototype.subscribe = function (chkbx, amt) {
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__add_card_add_card__["a" /* AddCardPage */], { 'amount': amt });
        }
    };
    SubscribedjPage.prototype.terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__termsdjsubs_termsdjsubs__["a" /* TermsdjsubsPage */]);
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
        selector: 'page-subscribedj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/subscribedj/subscribedj.html"*/'<!--\n  Generated template for the SubscribedjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="black">\n		<ion-title>Subscription Plan</ion-title>\n		<button (click)="setBackButtonAction()"ion-button="bar-button">\n        <span class="button-inner"><ion-icon class="back-button-icon icon icon-ios back-button-icon-ios ion-ios-arrow-back" role="img" aria-label="arrow back"></ion-icon>\n        <span class="back-button-text back-button-text-ios" style="transform: translateX(0px);"></span></span>\n        <div class="button-effect"></div>\n    </button>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n</ion-navbar>\n</ion-header>\n<ion-content padding>\n		<div class="content-sec">\n			<ion-grid>\n				<ion-row>\n					<ion-col>\n						<div class="top-sec">\n							<h4>{{subscriv?.plan_name}}</h4>\n							<p>{{subscriv?.description}}</p>\n						</div>\n						<div class="bottom-sec">\n							<h1>${{subscriv?.monthly_rate}}</h1>\n							<p>Recurring</p>\n							<h1 class="term">\n								<span>\n									<ion-checkbox color="dark" checked="true" [(ngModel)]="data.checkbx" name="checkbx" #checkbx=\'ngModel\'></ion-checkbox>\n								</span>\n							I accept the <a style="text-decoration: underline;" button (click)="terms()" clear item-right>terms and conditions.</a>\n							</h1>\n\n							<!-- <ion-item class="remember" style="border:none; width: 50%; float: left;">\n								<ion-label style="color:#000;">I accept the terms and conditions.</ion-label>\n								<ion-checkbox color="secondary" checked="true" [(ngModel)]="data.checkbx" name="checkbx" #checkbx=\'ngModel\'></ion-checkbox>\n							</ion-item> -->\n							<button ion-button (click)="subscribe(data.checkbx,subscriv?.monthly_rate)">Subscribe</button>\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	</ion-content>	\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/subscribedj/subscribedj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], SubscribedjPage);

//# sourceMappingURL=subscribedj.js.map

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 248,
	"./af.js": 248,
	"./ar": 249,
	"./ar-dz": 250,
	"./ar-dz.js": 250,
	"./ar-kw": 251,
	"./ar-kw.js": 251,
	"./ar-ly": 252,
	"./ar-ly.js": 252,
	"./ar-ma": 253,
	"./ar-ma.js": 253,
	"./ar-sa": 254,
	"./ar-sa.js": 254,
	"./ar-tn": 255,
	"./ar-tn.js": 255,
	"./ar.js": 249,
	"./az": 256,
	"./az.js": 256,
	"./be": 257,
	"./be.js": 257,
	"./bg": 258,
	"./bg.js": 258,
	"./bm": 259,
	"./bm.js": 259,
	"./bn": 260,
	"./bn.js": 260,
	"./bo": 261,
	"./bo.js": 261,
	"./br": 262,
	"./br.js": 262,
	"./bs": 263,
	"./bs.js": 263,
	"./ca": 264,
	"./ca.js": 264,
	"./cs": 265,
	"./cs.js": 265,
	"./cv": 266,
	"./cv.js": 266,
	"./cy": 267,
	"./cy.js": 267,
	"./da": 268,
	"./da.js": 268,
	"./de": 269,
	"./de-at": 270,
	"./de-at.js": 270,
	"./de-ch": 271,
	"./de-ch.js": 271,
	"./de.js": 269,
	"./dv": 272,
	"./dv.js": 272,
	"./el": 273,
	"./el.js": 273,
	"./en-au": 274,
	"./en-au.js": 274,
	"./en-ca": 275,
	"./en-ca.js": 275,
	"./en-gb": 276,
	"./en-gb.js": 276,
	"./en-ie": 277,
	"./en-ie.js": 277,
	"./en-nz": 278,
	"./en-nz.js": 278,
	"./eo": 279,
	"./eo.js": 279,
	"./es": 280,
	"./es-do": 281,
	"./es-do.js": 281,
	"./es-us": 282,
	"./es-us.js": 282,
	"./es.js": 280,
	"./et": 283,
	"./et.js": 283,
	"./eu": 284,
	"./eu.js": 284,
	"./fa": 285,
	"./fa.js": 285,
	"./fi": 286,
	"./fi.js": 286,
	"./fo": 287,
	"./fo.js": 287,
	"./fr": 288,
	"./fr-ca": 289,
	"./fr-ca.js": 289,
	"./fr-ch": 290,
	"./fr-ch.js": 290,
	"./fr.js": 288,
	"./fy": 291,
	"./fy.js": 291,
	"./gd": 292,
	"./gd.js": 292,
	"./gl": 293,
	"./gl.js": 293,
	"./gom-latn": 294,
	"./gom-latn.js": 294,
	"./gu": 295,
	"./gu.js": 295,
	"./he": 296,
	"./he.js": 296,
	"./hi": 297,
	"./hi.js": 297,
	"./hr": 298,
	"./hr.js": 298,
	"./hu": 299,
	"./hu.js": 299,
	"./hy-am": 300,
	"./hy-am.js": 300,
	"./id": 301,
	"./id.js": 301,
	"./is": 302,
	"./is.js": 302,
	"./it": 303,
	"./it.js": 303,
	"./ja": 304,
	"./ja.js": 304,
	"./jv": 305,
	"./jv.js": 305,
	"./ka": 306,
	"./ka.js": 306,
	"./kk": 307,
	"./kk.js": 307,
	"./km": 308,
	"./km.js": 308,
	"./kn": 309,
	"./kn.js": 309,
	"./ko": 310,
	"./ko.js": 310,
	"./ky": 311,
	"./ky.js": 311,
	"./lb": 312,
	"./lb.js": 312,
	"./lo": 313,
	"./lo.js": 313,
	"./lt": 314,
	"./lt.js": 314,
	"./lv": 315,
	"./lv.js": 315,
	"./me": 316,
	"./me.js": 316,
	"./mi": 317,
	"./mi.js": 317,
	"./mk": 318,
	"./mk.js": 318,
	"./ml": 319,
	"./ml.js": 319,
	"./mr": 320,
	"./mr.js": 320,
	"./ms": 321,
	"./ms-my": 322,
	"./ms-my.js": 322,
	"./ms.js": 321,
	"./my": 323,
	"./my.js": 323,
	"./nb": 324,
	"./nb.js": 324,
	"./ne": 325,
	"./ne.js": 325,
	"./nl": 326,
	"./nl-be": 327,
	"./nl-be.js": 327,
	"./nl.js": 326,
	"./nn": 328,
	"./nn.js": 328,
	"./pa-in": 329,
	"./pa-in.js": 329,
	"./pl": 330,
	"./pl.js": 330,
	"./pt": 331,
	"./pt-br": 332,
	"./pt-br.js": 332,
	"./pt.js": 331,
	"./ro": 333,
	"./ro.js": 333,
	"./ru": 334,
	"./ru.js": 334,
	"./sd": 335,
	"./sd.js": 335,
	"./se": 336,
	"./se.js": 336,
	"./si": 337,
	"./si.js": 337,
	"./sk": 338,
	"./sk.js": 338,
	"./sl": 339,
	"./sl.js": 339,
	"./sq": 340,
	"./sq.js": 340,
	"./sr": 341,
	"./sr-cyrl": 342,
	"./sr-cyrl.js": 342,
	"./sr.js": 341,
	"./ss": 343,
	"./ss.js": 343,
	"./sv": 344,
	"./sv.js": 344,
	"./sw": 345,
	"./sw.js": 345,
	"./ta": 346,
	"./ta.js": 346,
	"./te": 347,
	"./te.js": 347,
	"./tet": 348,
	"./tet.js": 348,
	"./th": 349,
	"./th.js": 349,
	"./tl-ph": 350,
	"./tl-ph.js": 350,
	"./tlh": 351,
	"./tlh.js": 351,
	"./tr": 352,
	"./tr.js": 352,
	"./tzl": 353,
	"./tzl.js": 353,
	"./tzm": 354,
	"./tzm-latn": 355,
	"./tzm-latn.js": 355,
	"./tzm.js": 354,
	"./uk": 356,
	"./uk.js": 356,
	"./ur": 357,
	"./ur.js": 357,
	"./uz": 358,
	"./uz-latn": 359,
	"./uz-latn.js": 359,
	"./uz.js": 358,
	"./vi": 360,
	"./vi.js": 360,
	"./x-pseudo": 361,
	"./x-pseudo.js": 361,
	"./yo": 362,
	"./yo.js": 362,
	"./zh-cn": 363,
	"./zh-cn.js": 363,
	"./zh-hk": 364,
	"./zh-hk.js": 364,
	"./zh-tw": 365,
	"./zh-tw.js": 365
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
webpackContext.id = 465;

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofiledjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
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
            content: 'Please wait...',
            dismissOnPageChange: true
        });
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
                    buttons: ['ok']
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 3500);
            }
        });
    };
    EditprofiledjPage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    EditprofiledjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_2 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 3500);
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
                            _this.profileImage = '';
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
                                        localStorage.setItem("USER_DATA", JSON.stringify(response.data.User));
                                        _this.appsetting.profile = response.data.User;
                                        _this.events.publish('role', 'dj');
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
                            _this.profileImage = '';
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
            paypal_id: profile.value.paypal_email,
            music_url: profile.value.audiourl,
        };
        var Serialized = this.serializeObj(data);
        console.log(Serialized);
        var Loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        // Loading.present().then(() => {
        this.http.post(this.appsetting.myGlobalVar + 'users/edit_profile', Serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            Loading.dismiss();
            if (response.status == 0) {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Edit Profile',
                    subTitle: response.msg,
                    buttons: ['ok']
                });
                alert_3.present();
                localStorage.setItem('USER_DATA', JSON.stringify(response.user));
                _this.events.publish('role', 'dj');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                setTimeout(function () { return alert_3.dismiss(); }, 3500);
            }
            else {
                var alert_4 = _this.alertCtrl.create({
                    title: 'Edit Profile',
                    subTitle: response.msg,
                    buttons: ['ok']
                });
                alert_4.present();
                setTimeout(function () { return alert_4.dismiss(); }, 3500);
            }
        });
        //});
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
                            _this.srcImage = '';
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
                            _this.srcImage = '';
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
    EditprofiledjPage.prototype.ionViewCanEnter = function () {
        this.getuser();
        clearInterval(this.appsetting.interval);
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
        selector: 'page-editprofiledj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/editprofiledj/editprofiledj.html"*/'<!--\n  Generated template for the EditprofiledjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#fff;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n   </ion-buttons>\n</ion-toolbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="head-sec">\n		<div class="image" (click)="CameraAction()">\n			<img  *ngIf="profileImage" [src]="profileImage">\n		</div>\n		<div class="edit-image">\n				<ion-icon ios="md-create" md="md-create"></ion-icon>\n				\n		</div>\n	</div>\n	<div class="form-sec">			\n		<form #profileForm="ngForm" class="event-form">\n			<ion-col col-12>\n				<ion-row>\n					<ion-list>\n					  <ion-item>\n					    <ion-input type="text" placeholder="Username" [(ngModel)]="data.complete_name" name="complete_name" #complete_name="ngModel" required></ion-input>\n						</ion-item>\n						<ion-label  class="alert alert-danger" color="danger">\n								<div *ngIf="complete_name.errors && (complete_name.dirty || complete_name.touched)">\n								 <div [hidden]="!complete_name.errors.required" >\n								 Field is required\n								</div>\n							</div>\n						</ion-label>\n					  <ion-item>\n							  <button class="abc" ion-button full (click)="uploadlogo()" style="background:none;">Add logo</button>\n					  </ion-item>\n					  <ion-item>\n					    <div class="img-sec" *ngIf="srcImage">\n					    	<img [src]="srcImage">\n					    </div>\n							 <div class="img-sec" *ngIf="srcImage == null">\n					    	<img src="assets/img/djlogo.png">\n					    </div>\n					  </ion-item>\n					  <ion-item>\n					    <ion-input type="text" placeholder="Biography" [(ngModel)]="data.biography" name="biography" #biography="ngModel" ></ion-input>\n						</ion-item>\n						<!-- <ion-label  class="alert alert-danger" color="danger">\n								<div *ngIf="biography.errors && (biography.dirty || biography.touched)">\n								 <div [hidden]="!biography.errors.required" >\n								 Field is required\n								</div>\n							</div>\n						</ion-label> -->\n						<div class="djcode">\n					  <ion-item >\n					    <ion-input type="text" placeholder="Dj code here" [(ngModel)]="data.djcode" name="djcode" #djcode="ngModel" [readonly]="isReadonly()" disabled></ion-input>\n						</ion-item>\n					</div>\n						<!-- <ion-label  class="alert alert-danger" color="danger">\n								<div *ngIf="djcode.errors && (djcode.dirty || djcode.touched)">\n								 <div [hidden]="!djcode.errors.required" >\n								 Field is required\n								</div>\n							</div>\n						</ion-label> -->\n					  <ion-item>\n					    <ion-input type="text" placeholder="Enter Music URL" [(ngModel)]="data.audiourl" name="audiourl" #audiourl="ngModel" ></ion-input>\n						</ion-item>\n						<!-- <ion-label  class="alert alert-danger" color="danger">\n								<div *ngIf="audiourl.errors && (audiourl.dirty || audiourl.touched)">\n								 <div [hidden]="!audiourl.errors.required" >\n								 Field is required\n								</div>\n							</div>\n						</ion-label> -->\n					  <!--<ion-item>\n					    <ion-input type="text" placeholder="Change Password"></ion-input>\n					  </ion-item>-->\n					  <ion-item>\n					    <ion-input type="text" placeholder="Enter your paypal id" pattern=\'^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' [(ngModel)]="data.paypal_email" name="paypal_email" #paypal_email="ngModel" ></ion-input>\n						</ion-item>\n						<!-- <ion-label  class="alert alert-danger" color="danger">\n								<div *ngIf="paypal_email.errors && (paypal_email.dirty || paypal_email.touched)">\n								 <div [hidden]="!paypal_email.errors.required" >\n									 			Field is required\n								</div>\n								<div [hidden]="!paypal_email.errors.pattern" >\n												Pattern not matched\n								</div>\n							</div>\n						</ion-label> -->\n						<!-- <ion-item>\n					    <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=https://www.mixcloud.com/StuffYouShouldKnow/how-the-seven-wonders-of-the-ancient-world-works-part-ii/" frameborder="0" ></iframe>\n						</ion-item> -->\n					</ion-list>\n				</ion-row>\n		    </ion-col>\n					<div class="btn-sec"><button ion-button type="submit" [disabled]="!profileForm.form.valid"  (click)="updateProfile(profileForm)">Save</button></div>\n		</form>\n		</div>\n	\n	\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/editprofiledj/editprofiledj.html"*/,
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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignindjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupdj_signupdj__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(81);
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
    function SignindjPage(navCtrl, navParams, statusBar, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        console.log(this.navParams.get('back'));
        statusBar.hide();
        this.statusBar.overlaysWebView(true);
    }
    SignindjPage.prototype.signup_dj = function () {
        localStorage.setItem('role', 'dj');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signupdj_signupdj__["a" /* SignupdjPage */]);
        //this.video.pause();
    };
    SignindjPage.prototype.signup_clubgoer = function () {
        localStorage.setItem('role', 'clubgoer');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
        //this.video.pause();
    };
    SignindjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismissAll();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
    };
    return SignindjPage;
}());
SignindjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signindj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/signindj/signindj.html"*/'<!--\n  Generated template for the SignindjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Sign in</ion-title>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content swipeBackEnabled="false" class="hme">\n	<div class="content-sec">\n		<div class="btn-sec">\n				<button ion-button (click)="signup_clubgoer()">Get Started</button>\n				<h5>Ready to earn? <span (click)="signup_dj()">Sign up/in as a Dj</span></h5>\n		</div>\n	</div>\n	<div class="videoimage">\n		<img src="assets/video/djvideos.gif" />\n	</div>\n			\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/signindj/signindj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], SignindjPage);

//# sourceMappingURL=signindj.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_forgot__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_common__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_variable_variable__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signindj_signindj__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_firebase__ = __webpack_require__(54);
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
    function LoginPage(navCtrl, navParams, http, appsetting, loadingCtrl, toastCtrl, fb, Cmn, variable, alertCtrl, events, firebase, zone) {
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
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
        //  this.firebase.onTokenRefresh().subscribe(
        //  token => {
        //    console.log(`The new token is ${token}`);
        //    this.token = token;
        var data = {
            email: form.value.email,
            password: form.value.password,
            token: this.token
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
                    subTitle: response.msg,
                    buttons: ['ok']
                });
                alert_3.present();
                setTimeout(function () { return alert_3.dismiss(); }, 3500);
            }
            // })
        });
    };
    LoginPage.prototype.fblogin = function () {
        var _this = this;
        // alert("fblogin");
        var d = new Date();
        var mm = ("0" + (d.getMonth() + 1)).slice(-2);
        var day = ("0" + (d.getDate())).slice(-2);
        var minutes = d.getMinutes();
        var hour = d.getHours();
        var datime = d.getFullYear() + "-" + mm + "-" + day + " " + hour + ":" + minutes + ":00";
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            _this.fb.api('me/?fields=id,email,last_name,first_name', ["public_profile", "email"])
                .then(function (result) {
                _this.firebase.onTokenRefresh().subscribe(function (token) {
                    //console.log(`The new token is ${token}`);
                    _this.token = token;
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
                        role: "clubgoer",
                        token: _this.token,
                        datime: datime
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
                                subTitle: resolve.msg,
                                buttons: ['ok']
                            });
                            alert_4.present();
                            setTimeout(function () { return alert_4.dismiss(); }, 3500);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                        }
                        else {
                            // alert("error");
                            // alert(JSON.stringify(resolve));
                            var alert_5 = _this.alertCtrl.create({
                                title: 'Login',
                                subTitle: resolve.msg,
                                buttons: ['ok']
                            });
                            alert_5.present();
                            setTimeout(function () { return alert_5.dismiss(); }, 3500);
                            _this.Loading.dismiss();
                        }
                        // this.userinfo.profilepicture ='data:image/jpeg;base64,' + imageUri;;
                    });
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
        selector: 'page-login',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="{{classval}}">\n\n  <ion-navbar color="dark">\n    <ion-title>Sign In</ion-title>\n    <button (click)="setBackButtonAction()"ion-button="bar-button">\n      <span class="button-inner"><ion-icon class="back-button-icon icon icon-ios back-button-icon-ios ion-ios-arrow-back" role="img" aria-label="arrow back"></ion-icon>\n      <span class="back-button-text back-button-text-ios" style="transform: translateX(0px);"></span></span>\n      <div class="button-effect"></div>\n    </button>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="margintop" padding style="background: url(assets/img/bgdrk.png); background-size:cover;"  (ionScroll)="scrollHandler($event)">\n<div class="login_outer">\n  <div class="logo"><img src="assets/img/logofull.png"></div>\n<div class="form_sec">\n  <form #loginForm="ngForm" (ngSubmit)="login(loginForm)" novalidate>\n  <ion-list>\n  <ion-item>\n    <ion-input type="email" [(ngModel)]="data.email" name="email" placeholder="Email Address" #email=\'ngModel\' pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' required></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="email.errors && (email.dirty || email.touched)" >\n        <div [hidden]="!email.errors.required" >\n         Email is required\n        </div>\n        <div [hidden]="!email.errors.pattern" >\n         Invalid email\n        </div>\n        </div>\n  </ion-label>\n  <ion-item>\n    <ion-input type="password" placeholder="Password" [(ngModel)]="data.password" name="password" #password=\'ngModel\' required></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="password.errors && (password.dirty || password.touched)">\n       <div [hidden]="!password.errors.required" >\n         Password is required\n        </div>\n    </div>\n  </ion-label>\n  <ion-item class="remember" style="border:none; width: 50%; float: left;">\n      <ion-label style="color:#fff;">Remember</ion-label>\n      <ion-checkbox color="secondary" checked="true" [(ngModel)]="data.checkbx" name="checkbx" #checkbx=\'ngModel\'></ion-checkbox>\n  </ion-item>\n  <ion-item class="remember" style="border:none; width: 50%; float: left;">\n      <ion-label style="color:#fff; margin-right: 0; text-align: right;" (click)="forgotPage()">Forget Password ?</ion-label>\n  </ion-item>\n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" color="yellow" type="submit" [disabled]="!loginForm.form.valid" style="text-transform: uppercase;" ion-button round>sign in</button>\n</div>\n  </form>\n\n<div class="centerbutton">\n  <h4 style="color:#fff;font-size: 14px;margin: 5px 0;">OR</h4>\n</div>\n<div class="centerbutton">\n   <button class="fbbutton" ion-button clear (click)="fblogin()"><img width="230px" src="assets/img/fb.png"></button>\n</div>\n<div class="centerbutton" style="color:#fff;">Don’t have an account?</div>\n<div (click)="signupPage()" class="centerbutton" style="color:#fff; text-transform:uppercase; text-decoration:underline; margin-top:8px;">Sign up</div>\n<!--<div class="centerbutton" style="color:#fff; margin-top: 10vh;">Skip</div>-->\n</div>\n</div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/login/login.html"*/,
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
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_firebase__["a" /* Firebase */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogindjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signupdj_signupdj__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__eventsdj_eventsdj__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_common__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_variable_variable__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signindj_signindj__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__ = __webpack_require__(54);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
        this.classval = 'headerbg';
    }
    LogindjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 3500);
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
        //  this.firebase.onTokenRefresh().subscribe(
        //    token => {
        //      console.log(`The new token is ${token}`);
        //      this.token = token;
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
        var Serialized = this.serializeObj(data);
        var Loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'users/logindj', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                Loading.dismiss();
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
                    if (response.user.subscription_paymant_status != 1) {
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
                        subTitle: response.msg,
                        buttons: ['ok']
                    });
                    alert_3.present();
                    setTimeout(function () { return alert_3.dismiss(); }, 3500);
                }
            });
        });
        //})
    };
    LogindjPage.prototype.fblogin = function () {
        var _this = this;
        var d = new Date();
        var mm = ("0" + (d.getMonth() + 1)).slice(-2);
        var day = ("0" + (d.getDate())).slice(-2);
        var minutes = d.getMinutes();
        var hour = d.getHours();
        var datime = d.getFullYear() + "-" + mm + "-" + day + " " + hour + ":" + minutes + ":00";
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            _this.fb.api('me/?fields=id,email,last_name,first_name', ["public_profile", "email"])
                .then(function (result) {
                _this.firebase.onTokenRefresh().subscribe(function (token) {
                    //console.log(`The new token is ${token}`);
                    _this.token = token;
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
                        role: "dj",
                        token: _this.token,
                        datime: datime
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
                                    subTitle: resolve.msg,
                                    buttons: ['ok']
                                });
                                alert_4.present();
                                setTimeout(function () { return alert_4.dismiss(); }, 2500);
                                _this.events.publish('role', 'dj');
                                if (resolve.data.User.subscription_paymant_status != 1) {
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
                                    buttons: ['ok']
                                });
                                alert_5.present();
                                setTimeout(function () { return alert_5.dismiss(); }, 2500);
                            }
                        });
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
        selector: 'page-logindj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/logindj/logindj.html"*/'<!--\n  Generated template for the LogindjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="{{classval}}">\n    <ion-navbar color="dark">\n      <ion-title>Sign In Dj</ion-title>\n      <button (click)="setBackButtonAction()" ion-button="bar-button">\n        <span class="button-inner"><ion-icon class="back-button-icon icon icon-ios back-button-icon-ios ion-ios-arrow-back" role="img" aria-label="arrow back"></ion-icon>\n        <span class="back-button-text back-button-text-ios" style="transform: translateX(0px);"></span></span>\n        <div class="button-effect"></div>\n      </button>\n      <ion-buttons end class="rbutton">\n        <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n      </ion-buttons>\n    </ion-navbar>\n  \n</ion-header>\n<ion-content class="margintop" padding style="background:url(assets/img/bgdrk.png); background-size:cover;"  (ionScroll)="scrollHandler($event)">\n  <div class="login_outer">\n  <div class="logo"><img src="assets/img/logofull.png"></div>\n<div class="form_sec">\n  <form #loginForm="ngForm" (ngSubmit)="login(loginForm)" novalidate>\n  <ion-list>\n  <ion-item>\n    <ion-input type="email" [(ngModel)]="data.email" name="email" placeholder="Email Address" #email=\'ngModel\' pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' required></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="email.errors && (email.dirty || email.touched)" >\n        <div [hidden]="!email.errors.required" >\n         Email is required\n        </div>\n        <div [hidden]="!email.errors.pattern" >\n         Invalid email\n        </div>\n        </div>\n  </ion-label>\n  <ion-item>\n    <ion-input type="password" placeholder="Password" [(ngModel)]="data.password" name="password" #password=\'ngModel\' required></ion-input>\n  </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="password.errors && (password.dirty || password.touched)">\n       <div [hidden]="!password.errors.required" >\n         Password is required\n        </div>\n    </div>\n  </ion-label>\n  <ion-item class="remember" style="border:none; width: 50%; float: left;">\n      <ion-label style="color:#fff;">Remember</ion-label>\n      <ion-checkbox color="secondary" checked="true" [(ngModel)]="data.checkbx" name="checkbx" #checkbx=\'ngModel\'></ion-checkbox>\n  </ion-item>\n  <ion-item class="remember" style="border:none; width: 50%; float: left;">\n      <ion-label style="color:#fff; margin-right: 0; text-align: right;" (click)="forgotPage()">Forget Password ?</ion-label>\n  </ion-item>\n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" color="red" type="submit" [disabled]="!loginForm.form.valid" style="text-transform: uppercase;" ion-button round>sign in</button>\n</div>\n  </form>\n\n<div class="centerbutton">\n  <h4 style="color:#fff;font-size: 14px;margin: 5px 0;">OR</h4>\n</div>\n<div class="centerbutton">\n   <button class="fbbutton" ion-button clear (click)="fblogin()"><img width="230px" src="assets/img/fb.png"></button>\n</div>\n<div class="centerbutton" style="color:#fff;">Don’t have an account?</div>\n<div (click)="signupPage()" class="centerbutton" style="color:#fff; text-transform:uppercase; text-decoration:underline; margin-top:8px;">Sign up</div>\n\n<!--<div class="centerbutton" style="color:#fff; margin-top: 10vh;">Skip</div>-->\n</div>\n\n</div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/logindj/logindj.html"*/,
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

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signindj_signindj__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__ = __webpack_require__(54);
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
    function SignupPage(navCtrl, navParams, appsetting, http, loadingCtrl, toastCtrl, alertCtrl, events, zone, firebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.zone = zone;
        this.firebase = firebase;
        this.data = '';
        this.scrollAmount = 44;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.classval = 'headerbg';
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
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
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
                buttons: ['ok']
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 2500);
        }
        else if (signup.value.name.replace(/ /g, '') == "") {
            var alert_3 = this.alertCtrl.create({
                title: 'Signup',
                subTitle: "Space not allowed in name",
                buttons: ['ok']
            });
            alert_3.present();
            setTimeout(function () { return alert_3.dismiss(); }, 2500);
        }
        else if (signup.value.name.indexOf(' ') == 0) {
            var alert_4 = this.alertCtrl.create({
                title: 'Signup',
                subTitle: "Space not allowed in name",
                buttons: ['ok']
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 2500);
        }
        else if (signup.value.password == signup.value.cpassword) {
            this.firebase.onTokenRefresh().subscribe(function (token) {
                console.log("The new token is " + token);
                _this.token = token;
                _this.Loading.present();
                var data = {
                    name: signup.value.name,
                    email: signup.value.email,
                    password: signup.value.password,
                    role: 'clubgoer',
                    token: _this.token
                };
                var Serialized = _this.serializeObj(data);
                //console.log(data);
                _this.http.post(_this.appsetting.myGlobalVar + 'users/registration', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
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
            });
        }
        else {
            var alert_7 = this.alertCtrl.create({
                title: 'Signup',
                subTitle: 'Password did not match',
                buttons: ['ok']
            });
            alert_7.present();
            setTimeout(function () { return alert_7.dismiss(); }, 2500);
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
        selector: 'page-signup',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="{{classval}}">\n\n  <ion-navbar align-title="center" color="dark" style="background: none;">\n    <ion-title align-title="center">Sign Up</ion-title>\n    <button (click)="setBackButtonAction()"ion-button="bar-button">\n      <span class="button-inner"><ion-icon class="back-button-icon icon icon-ios back-button-icon-ios ion-ios-arrow-back" role="img" aria-label="arrow back"></ion-icon>\n      <span class="back-button-text back-button-text-ios" style="transform: translateX(0px);"></span></span>\n      <div class="button-effect"></div>\n    </button>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="margintop" padding style="background: url(assets/img/loginbg.jpg); background-size:cover;" (ionScroll)="scrollHandler($event)">\n<div class="login_outer">\n  <div class="logo"><img src="assets/img/logofull.png"></div>\n<div class="form_sec">\n  <form #signupForm="ngForm" novalidate > \n  <ion-list>\n\n  <ion-item>\n    <ion-input type="text" [(ngModel)]="data.name" name="name"  placeholder="Name" #name=\'ngModel\' pattern=\'[a-zA-Z ]+\' required></ion-input>\n  </ion-item>\n  <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="name.errors && (name.dirty || name.touched)">\n       <div [hidden]="!name.errors.required" >\n         Field is required\n        </div>\n    </div>\n  </ion-label>\n      <ion-item>\n          <ion-input type="email" [(ngModel)]="data.email" name="email" placeholder="Email Address"   #email=\'ngModel\' required pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' required  ></ion-input>\n      </ion-item>\n      <ion-label  class="alert alert-danger" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)" >\n              <div [hidden]="!email.errors.required" >\n                Email is required\n                </div>\n                <div [hidden]="!email.errors.pattern" >\n                Invalid email\n                </div>\n            </div>\n      </ion-label>\n\n<ion-item>\n          <ion-input type="password" minlength="5" [(ngModel)]="data.password" name="password" placeholder="Password" #password=\'ngModel\' required ></ion-input>\n        </ion-item>\n     <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="password.errors && (password.dirty || password.touched)">\n        <div [hidden]="!password.errors.required" >\n         Password is required\n        </div>\n    </div>\n     <div *ngIf="password.errors && (password.dirty || password.touched)" >\n       <div [hidden]="!password.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n   </ion-label>\n\n   <ion-item>\n          <ion-input type="password" minlength="5" [(ngModel)]="data.cpassword" name="cpassword" placeholder="Confirm Password" #cpassword=\'ngModel\' required></ion-input>\n        </ion-item>\n  <ion-label class="alert alert-danger" color="danger">\n    <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)" >\n       <div [hidden]="!cpassword.errors.required" >\n         Confirm password is required\n        </div>\n    </div>\n    <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)" >\n       <div [hidden]="!cpassword.errors.minlength" >\n          Minimum length 5 character \n        </div>\n    </div>\n    </ion-label>\n  \n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" (click)="register(signupForm)" [disabled]="!signupForm.form.valid" color="yellow" style="text-transform: uppercase;" ion-button round>sign Up</button>\n</div>\n  </form>\n<div class="centerbutton account">Have an account?</div>\n<div class="centerbutton signin" (click)="signinPage()">Sign In</div>\n<!--<div class="centerbutton" style="color:#fff; margin-top: 10vh;">Skip</div>-->\n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__["a" /* Firebase */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NotificationModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_djslist_djslist__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_terms_terms__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_privacy_privacy__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_historicalrequests_historicalrequests__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_changepassword_changepassword__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_transactionhstrydj_transactionhstrydj__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_helpdj_helpdj__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_logindj_logindj__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_membershipdetaildj_membershipdetaildj__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_changepassworddj_changepassworddj__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signindj_signindj__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_eventsdj_eventsdj__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_editprofiledj_editprofiledj__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_nameofeventsdj_nameofeventsdj__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_termsdj_termsdj__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_firebase__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_notificationdj_notificationdj__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { ShoutoutdjPage } from '../pages/shoutoutdj/shoutoutdj';HistoricalshoutoutsPage















// import {StatusBar} from '@ionic-native/status-bar';
var NotificationModel = (function () {
    function NotificationModel() {
    }
    return NotificationModel;
}());

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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_18__pages_signindj_signindj__["a" /* SignindjPage */];
        platform.ready().then(function () {
            statusBar.overlaysWebView(true);
            statusBar.hide();
            _this.firebase.grantPermission(); // for push notifications
            if (_this.platform.is('cordova')) {
                // Initialize push notification feature
                //alert("hiiii"+this.platform)
                if (_this.platform.is('android')) {
                    //alert("android"+this.platform)
                    _this.initializeFireBaseAndroid();
                }
                else {
                    //	alert("ios"+this.platform)
                    _this.initializeFireBaseIos();
                }
                //this.platform.is('android') ? this.initializeFireBaseAndroid() : this.initializeFireBaseIos();
            }
            else {
                //	alert(this.platform)
                console.log('Push notifications are not enabled since this is not a real device');
            }
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
                        //{ title: 'Voteup Request', component: VotelikePage, icon: 'voteup' },
                        { title: 'Djs List', component: __WEBPACK_IMPORTED_MODULE_6__pages_djslist_djslist__["a" /* DjslistPage */], icon: 'djs' },
                        { title: 'Historical Requests', component: __WEBPACK_IMPORTED_MODULE_10__pages_historicalrequests_historicalrequests__["a" /* HistoricalrequestsPage */], icon: 'historical' },
                        { title: 'Terms and Conditions', component: __WEBPACK_IMPORTED_MODULE_7__pages_terms_terms__["a" /* TermsPage */], icon: 'terms' },
                        { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_8__pages_privacy_privacy__["a" /* PrivacyPage */], icon: 'privacy' },
                        { title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_11__pages_changepassword_changepassword__["a" /* ChangepasswordPage */], icon: 'historical' },
                        //{ title: 'Payment Info', component: PaymentinfoPage, icon: 'terms' },
                        { title: 'Sign Out', component: null, icon: 'logout' },
                    ];
                    _this.menuCtrl.enable(true, 'clubgoer');
                }
                else {
                    _this.role = "dj";
                    _this.djmenu = [
                        { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_19__pages_eventsdj_eventsdj__["a" /* EventsdjPage */], icon: 'eve' },
                        { title: 'Edit Profile', component: __WEBPACK_IMPORTED_MODULE_20__pages_editprofiledj_editprofiledj__["a" /* EditprofiledjPage */], icon: 'edi' },
                        { title: 'Transaction History', component: __WEBPACK_IMPORTED_MODULE_12__pages_transactionhstrydj_transactionhstrydj__["a" /* TransactionhstrydjPage */], icon: 'tra' },
                        { title: 'Requests', component: __WEBPACK_IMPORTED_MODULE_21__pages_nameofeventsdj_nameofeventsdj__["a" /* NameofeventsdjPage */], icon: 'req' },
                        { title: 'Terms and Conditions', component: __WEBPACK_IMPORTED_MODULE_22__pages_termsdj_termsdj__["a" /* TermsdjPage */], icon: 'ter' },
                        { title: 'Billing', component: __WEBPACK_IMPORTED_MODULE_16__pages_membershipdetaildj_membershipdetaildj__["a" /* MembershipdetaildjPage */], icon: 'logo-usd' },
                        { title: 'Notifications', component: __WEBPACK_IMPORTED_MODULE_24__pages_notificationdj_notificationdj__["a" /* NotificationdjPage */], icon: 'notifications' },
                        { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_13__pages_helpdj_helpdj__["a" /* HelpdjPage */], icon: 'hel' },
                    ];
                    if (localStorage.getItem("fblogin") == null) {
                        _this.djmenu.push({ title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_17__pages_changepassworddj_changepassworddj__["a" /* ChangepassworddjPage */], icon: 'historical' });
                    }
                    _this.djmenu.push({ title: 'Sign Out', component: null, icon: 'log' });
                    _this.menuCtrl.enable(true, 'dj');
                }
            }
        });
    }
    MyApp.prototype.initializeFireBaseAndroid = function () {
        var _this = this;
        return this.firebase.getToken()
            .catch(function (error) { return console.error('Error getting token', error); })
            .then(function (token) {
            console.log("The token is " + token);
            Promise.all([
                _this.firebase.subscribe('firebase-app'),
                _this.firebase.subscribe('android'),
                _this.firebase.subscribe('userid-1') // Subscribe using the user id (hardcoded in this example)
            ]).then(function (result) {
                if (result[0])
                    console.log("Subscribed to FirebaseDemo");
                if (result[1])
                    console.log("Subscribed to Android");
                if (result[2])
                    console.log("Subscribed as User");
                _this.subscribeToPushNotificationEvents();
            });
        });
    };
    MyApp.prototype.initializeFireBaseIos = function () {
        var _this = this;
        return this.firebase.grantPermission()
            .catch(function (error) { return console.error('Error getting permission', error); })
            .then(function () {
            _this.firebase.getToken()
                .catch(function (error) { return console.error('Error getting token', error); })
                .then(function (token) {
                console.log("The token is " + token);
                Promise.all([
                    _this.firebase.subscribe('firebase-app'),
                    _this.firebase.subscribe('ios'),
                    _this.firebase.subscribe('userid-2')
                ]).then(function (result) {
                    if (result[0])
                        console.log("Subscribed to FirebaseDemo");
                    if (result[1])
                        console.log("Subscribed to iOS");
                    if (result[2])
                        console.log("Subscribed as User");
                    _this.subscribeToPushNotificationEvents();
                });
            });
        });
    };
    MyApp.prototype.saveToken = function (token) {
        console.log('Sending token to the server...');
        return Promise.resolve(true);
    };
    MyApp.prototype.subscribeToPushNotificationEvents = function () {
        var _this = this;
        //	alert("hello everyone");
        // Handle token refresh
        this.firebase.onTokenRefresh().subscribe(function (token) {
            console.log("The new token is " + token);
            _this.saveToken(token);
        }, function (error) {
            console.error('Error refreshing token', error);
        });
        this.firebase.onNotificationOpen().subscribe(function (notification) {
            //	alert('alert - > ' + JSON.stringify(notification))
            if (notification.tap) {
                // alert('Tapped');
                _this.user = localStorage.getItem("USER_DATA");
                // alert(this.user);
                // alert(JSON.stringify(this.user));
                if (_this.user == undefined || _this.user == null) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_logindj_logindj__["a" /* LogindjPage */]);
                }
                else {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_24__pages_notificationdj_notificationdj__["a" /* NotificationdjPage */], { message: notification }); //this.nav.setRoot(this.pages2.SchedulePage);
                }
                console.log("Received in background");
            }
            else {
                // alert('Not Tapped');
                console.log("Received in foreground");
            }
            ;
            // !notification.tap
            // 	? console.log('The user was using the app when the notification arrived...')
            // 	: console.log('The app was closed when the notification arrived...')
            var toast = _this.toastCtrl.create({
                message: '' + notification.title + ': ' + notification.body,
                duration: 3000,
                position: "top",
                cssClass: "notification",
            });
            // let notificationAlert = this.alertCtrl.create({
            // 	title: '<center>' + notification.title + '</center>',
            // 	message: notification.body,
            // 	buttons: [{
            // 		text: 'Ignore',
            // 		role: 'cancel'
            // 	}, {
            // 		text: 'View',
            // 		handler: () => {
            // 			//TODO: Your logic here
            // 			this.user = localStorage.getItem('USERID');
            // 			//alert('user' + this.user)
            // 			if (this.user == undefined || this.user == null) {
            // 				this.nav.push(SigninPage);
            // 			} else {
            // 				this.nav.push(TabsPage, { message: notification }); //this.nav.setRoot(this.pages2.SchedulePage);
            // 			}
            // 		}
            // 	}]
            // });
            if (notification.title != undefined) {
                toast.present();
            }
        }, function (error) {
            console.error('Error getting the notification', error);
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //  this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_18__pages_signindj_signindj__["a" /* SignindjPage */];
            if (localStorage.getItem('role') != null) {
                if (localStorage.getItem('role') == 'clubgoer') {
                    _this.rootPage = localStorage.getItem("USER_DATA") != null ? __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] : __WEBPACK_IMPORTED_MODULE_18__pages_signindj_signindj__["a" /* SignindjPage */];
                }
                else {
                    _this.rootPage = localStorage.getItem("USER_DATA") != null ? __WEBPACK_IMPORTED_MODULE_19__pages_eventsdj_eventsdj__["a" /* EventsdjPage */] : __WEBPACK_IMPORTED_MODULE_18__pages_signindj_signindj__["a" /* SignindjPage */];
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
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_logindj_logindj__["a" /* LogindjPage */]);
            }
            else {
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */]);
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
        __WEBPACK_IMPORTED_MODULE_23__ionic_native_firebase__["a" /* Firebase */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_9__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
                buttons: ['ok']
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

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appsetting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
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
        this.myGlobalVar = 'http://vikrant.crystalbiltech.com/dj/api/'; //shop/shippingaddress
        this.showGlobalurl = "http://vikrant.crystalbiltech.com/dj/img/eventdd/";
        this.editGlobalevntimg = "http://vikrant.crystalbiltech.com/dj/img/editeventimg/";
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

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
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

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profileedit_profileedit__ = __webpack_require__(94);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 3500);
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
                buttons: ['ok']
            });
            alert_2.present();
            setTimeout(function () { return alert_2.dismiss(); }, 3500);
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
                buttons: ['ok']
            });
            alert_3.present();
            setTimeout(function () { return alert_3.dismiss(); }, 2500);
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

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileeditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(93);
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
    function ProfileeditPage(navCtrl, navParams, http, appsetting, camera, actionSheetCtrl, loadingCtrl, events, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
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
                    buttons: ['ok']
                });
                alert_1.present();
                setTimeout(function () { return alert_1.dismiss(); }, 3500);
            }
            else {
                _this.Loader.dismiss();
                var alert_2 = _this.alertCtrl.create({
                    title: 'Edit profile',
                    subTitle: data.msg,
                    buttons: ['ok']
                });
                alert_2.present();
                setTimeout(function () { return alert_2.dismiss(); }, 3500);
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
                    localStorage.removeItem('USER_DATA');
                    localStorage.setItem('USER_DATA', JSON.stringify(data.data.User));
                    _this.events.publish('role', 'clubgoer');
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
                        buttons: ['ok']
                    });
                    alert_3.present();
                    setTimeout(function () { return alert_3.dismiss(); }, 3500);
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
                buttons: ['ok']
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 3500);
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
        selector: 'page-profileedit',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/profileedit/profileedit.html"*/'<!--\n  Generated template for the ProfileeditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="black">\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons end>\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content style="background:#212121;">\n<ion-card style="background: rgba(255,255,255,0.1);">\n  <ion-card-content>\n    <div class="profilepic">\n    <div class="userpro">\n      <img [src]="srcImage">\n    </div>\n    <div class="editbtn">\n      <button color="light" clear ion-button icon-only (click)="CameraAction()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </div>\n  </div>\n  </ion-card-content>\n</ion-card>\n\n<ion-card style="background: rgba(255,255,255,0.1);">\n  <ion-card-content>\n    <div class="editpro_form">\n      <form  #editForm="ngForm" >\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="data.complete_name" name=\'fname\' #fname="ngModel"  pattern="[a-zA-Z ]*" value="fname" placeholder=" Name" required></ion-input>\n      </ion-item>\n      <ion-label  class="alert alert-danger" color="danger">\n          <div *ngIf="fname.errors && (fname.dirty || fname.touched)">\n            <div [hidden]="!fname.errors.required" >\n                Field is required\n            </div>\n          </div>\n      </ion-label>\n      <!-- <ion-item>\n        <ion-input type="url" [(ngModel)]="data.audiourl" name=\'audiourl\' #audiourl="ngModel" value="audiourl" placeholder=" Audio URL" pattern="(http|https)?://.+" required></ion-input>\n      </ion-item>\n        <ion-label  class="alert alert-danger" color="danger">\n          <div *ngIf="audiourl.errors && (audiourl.dirty || audiourl.touched)">\n            <div [hidden]="!audiourl.errors.required" >\n                Field is required\n            </div>\n            <div [hidden]="!audiourl.errors.pattern">\n                Must be a valid URL!\n            </div>\n          </div>\n        </ion-label>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="data.videourl" name=\'videourl\' #videourl="ngModel" value="videourl" placeholder=" Video URL" pattern="(http|https)?://.+" required></ion-input>\n      </ion-item>\n        <ion-label  class="alert alert-danger" color="danger">\n          <div *ngIf="videourl.errors && (videourl.dirty || videourl.touched)">\n            <div [hidden]="!videourl.errors.required" >\n                Field is required\n            </div>\n            <div [hidden]="!videourl.errors.pattern">\n                Must be a valid URL!\n            </div>\n          </div>\n        </ion-label> -->\n      <ion-item>\n        <button type="submit" [disabled]="!editForm.form.valid" (click)="editprofile(editForm)"  style="text-transform: uppercase;" ion-button  full>Save</button>\n      </ion-item>\n    </ion-list>\n      </form>\n    </div>\n  </ion-card-content>\n</ion-card>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/profileedit/profileedit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ProfileeditPage);

//# sourceMappingURL=profileedit.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__songrequests_songrequests__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(83);
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
    function PayinfoPage(navCtrl, navParams, appsetting, http, Cmn, loadingCtrl, toastCtrl, alertCtrl, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.Cmn = Cmn;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.data = {};
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
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
    PayinfoPage.prototype.ionViewCanEnter = function () {
        clearInterval(this.appsetting.interval);
    };
    PayinfoPage.prototype.setbitnow = function (bitnow) {
        var _this = this;
        var width = 400;
        var height = 550;
        var left = 0;
        var top = 0;
        var serialized_data = this.Cmn.serializeObj(this.pdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (window.outerWidth) {
            left = Math.round((window.outerWidth - width) / 2) + window.screenX;
            top = Math.round((window.outerHeight - height) / 2) + window.screenY;
        }
        else if (window.screen.width) {
            left = Math.round((window.screen.width - width) / 2);
            top = Math.round((window.screen.height - height) / 2);
        }
        var target = "_blank";
        var options = 'top=' + top + ', left=' + left + ', width=' + width + ', height=' + height + ', location=0, status=0, toolbar=0, menubar=0, resizable=0, scrollbars=1';
        //this.setbit=bitnow;
        //var target = "_blank";    
        var tmp = "";
        var tmpr = "";
        //var options = "location=no,hidden=no";
        var browser = this.iab.create('http://vikrant.crystalbiltech.com/paypal-adaptive/chained-payment/proccess.php?data=' + encodeURIComponent(JSON.stringify(this.pdata)), target, options);
        browser.on('loadstart').subscribe(function (e) {
            var redirect_uri = e.url.split('code=');
            var redirect_url = e.url.split('execution=e3s1');
            var redirect_rrl = e.url.split('execution=e4s1');
            var redirect_trl = e.url.split('execution=e2s1');
            var redirect_yrl = e.url.split('closewindow');
            var redirect_prl = e.url.split('execution=e2s2&_eventId_submit');
            if (redirect_trl.length > 1) {
                tmp = redirect_trl[0];
            }
            if (redirect_yrl.length > 1) {
                tmpr = redirect_yrl[0];
            }
            if (redirect_prl.length > 1) {
                tmp = "";
                tmpr = "";
            }
            if (redirect_uri[0] == 'https://vikrant.crystalbiltech.com/?') {
                //  alert('code--->' + code);
                browser.close();
                _this.http.post(_this.appsetting.myGlobalVar + 'users/sendnotif', serialized_data, option).map(function (res) { return res.json(); }).subscribe(function (response) {
                    _this.Loading.dismiss();
                    if (response.status == true) {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Request',
                            subTitle: "Your Request has been submitted",
                            buttons: [{
                                    text: 'Ok',
                                    role: 'submit',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__songrequests_songrequests__["a" /* SongrequestsPage */], {
                                            eventid: _this.pdata.eventid,
                                            djid: _this.pdata.djid
                                        });
                                    }
                                }]
                        });
                        alert_1.present();
                        //setTimeout(()=>alert.dismiss(),3500);
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Payment info',
                            subTitle: "Something went wrong",
                            buttons: ['ok']
                        });
                        alert_2.present();
                        setTimeout(function () { return alert_2.dismiss(); }, 3500);
                    }
                });
            }
            else if (tmp == 'https://www.sandbox.paypal.com/webapps/adaptivepayment/flow/corepay?' && tmpr == "https://www.sandbox.paypal.com/webapps/adaptivepayment/flow/") {
                browser.close();
                var alert_3 = _this.alertCtrl.create({
                    title: 'Request',
                    subTitle: "Your Request has been submitted",
                    buttons: [{
                            text: 'Ok',
                            role: 'submit',
                            handler: function () {
                                console.log('Cancel clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__songrequests_songrequests__["a" /* SongrequestsPage */], {
                                    eventid: _this.pdata.eventid,
                                    djid: _this.pdata.djid
                                });
                            }
                        }]
                });
                alert_3.present();
                //setTimeout(()=>alert.dismiss(),3500);
            }
            else if (redirect_url[0] == 'https://www.sandbox.paypal.com/webapps/adaptivepayment/flow/closewindow?') {
                browser.close();
                _this.http.post(_this.appsetting.myGlobalVar + 'users/sendnotif', serialized_data, option).map(function (res) { return res.json(); }).subscribe(function (response) {
                    _this.Loading.dismiss();
                    if (response.status == "true") {
                        //this.navCtrl.push(HomePage);
                        var alert_4 = _this.alertCtrl.create({
                            title: 'Request',
                            subTitle: "Your Request has been submitted",
                            buttons: [{
                                    text: 'Ok',
                                    role: 'submit',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__songrequests_songrequests__["a" /* SongrequestsPage */], {
                                            eventid: _this.pdata.eventid,
                                            djid: _this.pdata.djid
                                        });
                                    }
                                }]
                        });
                        alert_4.present();
                        //setTimeout(()=>alert.dismiss(),3500);
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        var alert_5 = _this.alertCtrl.create({
                            title: 'Payment info',
                            subTitle: "something went wrong",
                            buttons: ['ok']
                        });
                        alert_5.present();
                        setTimeout(function () { return alert_5.dismiss(); }, 3500);
                    }
                });
            }
            else if (redirect_rrl[0] == 'https://www.sandbox.paypal.com/webapps/adaptivepayment/flow/closewindow?') {
                browser.close();
                //this.navCtrl.push(HomePage);
                var alert_6 = _this.alertCtrl.create({
                    title: 'Request',
                    subTitle: "Your Request has been submitted",
                    buttons: [{
                            text: 'Ok',
                            role: 'submit',
                            handler: function () {
                                console.log('Cancel clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__songrequests_songrequests__["a" /* SongrequestsPage */], {
                                    eventid: _this.pdata.eventid,
                                    djid: _this.pdata.djid
                                });
                            }
                        }]
                });
                alert_6.present();
                // setTimeout(()=>alert.dismiss(),3500);
            }
        }, function (err) {
            // alert('done err');
            //console.log("InAppBrowser loadstart Event Error: " + err);
            // alert(err)
        });
        browser.on("exit").subscribe(function (e) {
            // alert('exit fucntion'); 
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__songrequests_songrequests__["a" /* SongrequestsPage */], {
                eventid: _this.pdata.eventid,
                djid: _this.pdata.djid
            });
        }, function (err) {
            console.log("InAppBrowser loadstart Event Error: " + err);
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
            var alert_7 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_7.present();
            setTimeout(function () { return alert_7.dismiss(); }, 2500);
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
        selector: 'page-payinfo',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/payinfo/payinfo.html"*/'<!--\n  Generated template for the PaymentinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Payment Info</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#f2f2f2;">\n  <div class="paymentinfo">\n    <form #payinfoForm="ngForm" novalidate >\n    <div class="selectpayment">\n      <h4 class="selettitle" (click)="setbitnow(2)"> \n        Payment Method\n        <figure><img width="150px" src="assets/img/paypal.png"></figure>\n        <span class="cardtitle">PayPal</span>\n      </h4>\n    </div>\n\n    <div class="creditcard" *ngIf="setbit">\n      <h4 class="selettitle">Credit Card Info</h4>\n      <ion-list>\n          <ion-item>\n            <ion-label stacked>name on card</ion-label>\n            <ion-input type="text" [(ngModel)]="data.name" name="name"  placeholder="Name" #name=\'ngModel\' pattern=\'[a-zA-Z]+\' placeholder="John Henry Doe"></ion-input>\n          </ion-item>\n          <ion-label  class="alert alert-danger" color="danger">\n          <div *ngIf="name.errors && (name.dirty || name.touched)">\n            <div [hidden]="!name.errors.required" >\n                Field is required\n            </div>\n          </div>\n        </ion-label>\n          <ion-item>\n            <ion-label stacked>card number</ion-label>\n            <ion-input type="number" placeholder="1234-5678-9012-3456" [(ngModel)]="data.cardnum" name="cardnum" #cardnum=\'ngModel\' required></ion-input>\n          </ion-item>\n          <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="cardnum.errors && (cardnum.dirty || cardnum.touched)">\n          <div [hidden]="!cardnum.errors.required" >\n              Field is required\n          </div>\n        </div>\n          </ion-label>\n\n          <ion-item style="float:left; width:68%; margin-right:2%;">\n            <ion-label stacked>expiration Date</ion-label>\n            <ion-datetime style="color:#fff;" min="{{minyear}}" max="{{maxyear}}" displayFormat="MM/YYYY" placeholder="MM/YYYY"  [(ngModel)]="data.monyear" name="monyear"  #monyear=\'ngModel\' required></ion-datetime>\n          </ion-item>\n          <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="monyear.errors && (monyear.dirty || monyear.touched)">\n       <div [hidden]="!monyear.errors.required" >\n         Field is required\n        </div>\n        </div>\n          </ion-label>\n          <ion-item style="float:left; width:30%; padding-left:0;">\n            <ion-label stacked>Cvv</ion-label>\n            <ion-input type="number" placeholder="xxx" [(ngModel)]="data.cvv" name="cvv" #cvv=\'ngModel\' required></ion-input>\n          </ion-item>\n          <ion-label  class="alert alert-danger" color="danger">\n              <div *ngIf="cvv.errors && (cvv.dirty || cvv.touched)">\n                <div [hidden]="!cvv.errors.required" >\n                      Field is required\n                </div>\n                <div [hidden]="!cvv.errors.pattern" >\n                      Invalid cvv\n                </div>\n              </div>\n          </ion-label>\n      </ion-list>\n      <div class="centerbutton">\n              <button class="custom_btn" (click)="paynow(payinfoForm)" [disabled]="!payinfoForm.form.valid" color="yellow" type="submit" style="text-transform: uppercase;" ion-button round>Submit</button>\n      </div>\n    </div>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/payinfo/payinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], PayinfoPage);

//# sourceMappingURL=payinfo.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongrequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requestsongplay_requestsongplay__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voteup_voteup__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shoutout_shoutout__ = __webpack_require__(165);
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
    function SongrequestsPage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.djid = navParams.get("djid");
        this.eventid = navParams.get("eventid");
    }
    SongrequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SongrequestsPage');
    };
    SongrequestsPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
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
        selector: 'page-songrequests',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/songrequests/songrequests.html"*/'<!--\n  Generated template for the SongrequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-toolbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Requests</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n\n  <div class="homemain">\n    <div class="logo"><img src="assets/img/logo.png"></div>\n    <div class="home_list">\n    <ion-item no-lines item-right>\n      <button (click)="requestsongplayPage()" ion-button secondary color="" class="gredient" block>Request a Song<ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-item>\n    <!-- <ion-item no-lines>\n      <button (click)="voteupPage()" ion-button secondary class="gredient" block>Vote Up Requests<ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-item> -->\n    <ion-item no-lines>\n      <button (click)="shoutoutPage()" ion-button secondary class="gredient" block>Request Shout Out <ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-item>\n  </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/songrequests/songrequests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], SongrequestsPage);

//# sourceMappingURL=songrequests.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalrequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
                buttons: ['ok']
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
        selector: 'page-historicalrequests',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/historicalrequests/historicalrequests.html"*/'<!--\n  Generated template for the HistoricalrequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="black">\n    <button ion-button menuToggle>\n      <ion-icon style="color:#ffae00;" name="menu"></ion-icon>\n    </button>\n    <ion-title>Historical Requests</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><ion-icon><img width="15px" src="assets/img/rlogo.png"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n  \n  <ion-list-header class="listhader" style="margin-top:10px;">\n    <div class="left_items">Request Name</div>\n    <div class="right_items">Amount Paid</div>\n  </ion-list-header>\n</ion-header>\n\n\n<ion-content style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n<ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content style="color:#878787;" pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n</ion-refresher>\n<div class="historicalrequests">\n  <ion-list no-lines>\n    <ion-item color="black" *ngFor="let request of requests;">\n      <div class="list_head" *ngIf="request?.ClubgoerRequest?.request_type==1">\n        <h2>{{request?.ClubgoerRequest.songname}}</h2>\n        <ion-note item-end="" class="note"> {{request?.ClubgoerRequest.pay_paypal ? "Paid" : "Not paid"}} <span>${{request.ClubgoerRequest.tip_amount}}</span></ion-note>\n      </div>\n      <div class="list_head" *ngIf="request?.ClubgoerRequest?.request_type==3">\n        <h2>{{request?.ClubgoerRequest.shoutout_name}}</h2>\n        <ion-note item-end="" class="note"> {{request?.ClubgoerRequest.pay_paypal ? "Paid" : "Not paid"}} <span>${{request.ClubgoerRequest.tip_amount}}</span></ion-note>\n      </div>\n      <div class="itembottom" *ngIf="request?.ClubgoerRequest?.request_type==1">\n        <p>Artist name <button class="playnow" clear>{{request?.ClubgoerRequest.artist_name}}</button></p>\n        <p>Requested Type <button class="playnow" clear>{{request?.TipOption.name}}</button></p>\n      </div>\n      <div class="itembottom" *ngIf="request?.ClubgoerRequest?.request_type==3">\n        <p>Shoutout name <button class="playnow" clear>{{request?.ClubgoerRequest?.shoutout_type}}</button></p>\n        <p>Requested Type <button class="playnow" clear>Shoutout</button></p>\n      </div>\n    </ion-item>\n    <div class="unshow" *ngIf="requests?.length == 0">\n      <h3>No history available</h3>\n  </div>\n  </ion-list>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/historicalrequests/historicalrequests.html"*/,
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

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logindj_logindj__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__ = __webpack_require__(8);
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
            content: 'Please wait...',
            dismissOnPageChange: true
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
                buttons: ['ok']
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
                    buttons: ['ok']
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
                    buttons: ['ok']
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
        selector: 'page-forgot',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/forgot/forgot.html"*/'<ion-header class="headerbg">\n\n  <ion-navbar color="black">\n    <ion-title>Forget Password</ion-title>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="margintop" padding style="background: url(assets/img/loginbg.jpg); background-size:cover;">\n<div class="login_outer">\n  <div class="logo"><img src="assets/img/logofull.png"></div>\n<div class="form_sec">\n<form #forgotForm="ngForm" (ngSubmit)="forgot(forgotForm)" novalidate>\n  <ion-list>\n  <ion-item>\n    <ion-input type="email" [(ngModel)]="data.email" name="email" placeholder="Email Address" #email=\'ngModel\' pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' required></ion-input>\n        </ion-item>\n        <ion-label class="alert alert-danger" color="danger">\n        <div *ngIf="email.errors && (email.dirty || email.touched)" >\n        <div [hidden]="!email.errors.required" >\n         Email is required\n        </div>\n        <div [hidden]="!email.errors.pattern" >\n         Invalid email\n        </div>\n        </div>\n       </ion-label>\n</ion-list>\n<div class="centerbutton">\n   <button class="custom_btn" color="red" style="text-transform: uppercase;" type="submit" [disabled]="!forgotForm.form.valid" ion-button >Submit</button>\n</div>\n</form>\n\n\n\n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/forgot/forgot.html"*/,
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

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupdjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logindj_logindj__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signindj_signindj__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__ = __webpack_require__(54);
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
    function SignupdjPage(navCtrl, navParams, appsetting, http, loadingCtrl, toastCtrl, alertCtrl, events, zone, firebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.zone = zone;
        this.firebase = firebase;
        this.scrollAmount = 44;
        this.data = '';
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.ionViewDidEnter();
        this.classval = 'headerbg';
        if (localStorage.getItem("USER_DATA")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__subscribedj_subscribedj__["a" /* SubscribedjPage */]);
        }
    }
    SignupdjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismissAll();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
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
                buttons: ['ok']
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
            setTimeout(function () { return alert_3.dismiss(); }, 3500);
        }
        else if (signup.value.name.indexOf(' ') == 0) {
            var alert_4 = this.alertCtrl.create({
                title: 'Signup',
                subTitle: "Space not allowed in name",
                buttons: ['ok']
            });
            alert_4.present();
            setTimeout(function () { return alert_4.dismiss(); }, 3500);
        }
        else if (signup.value.password == signup.value.cpassword) {
            this.firebase.onTokenRefresh().subscribe(function (token) {
                console.log("The new token is " + token);
                _this.token = token;
                console.log('onTokenRefresh->', _this.token);
                _this.Loading.present();
                var data = {
                    name: signup.value.name,
                    email: signup.value.email,
                    password: signup.value.password,
                    role: 'dj',
                    token: _this.token
                };
                var Serialized = _this.serializeObj(data);
                var Loading = _this.loadingCtrl.create({
                    content: 'Please wait...',
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.myGlobalVar + 'users/registration', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        Loading.dismiss();
                        console.log(response);
                        if (response.isSuccess == true) {
                            // this.Loading.dismiss();
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
            });
        }
        else {
            var alert_7 = this.alertCtrl.create({
                title: 'Signup',
                subTitle: 'Password did not match',
                buttons: ['ok']
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
        selector: 'page-signupdj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/signupdj/signupdj.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="{{classval}}">\n\n  <ion-navbar align-title="center" color="dark" style="background: none;">\n    <ion-title align-title="center">Sign Up Dj</ion-title>\n    <button (click)="setBackButtonAction()"ion-button="bar-button">\n        <span class="button-inner"><ion-icon class="back-button-icon icon icon-ios back-button-icon-ios ion-ios-arrow-back" role="img" aria-label="arrow back"></ion-icon>\n        <span class="back-button-text back-button-text-ios" style="transform: translateX(0px);"></span></span>\n        <div class="button-effect"></div>\n      </button>\n    <ion-buttons end class="rbutton">\n      <button ion-button clear><img width="15px" src="assets/img/rlogo.png"></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="margintop" padding style="background: url(assets/img/loginbg.jpg); background-size:cover;" (ionScroll)="scrollHandler($event)">\n  <div class="login_outer">\n    <div class="logo"><img src="assets/img/logofull.png"></div>\n    <div class="form_sec">\n      <form #signupdjForm="ngForm" novalidate>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" [(ngModel)]="data.name" name="name" placeholder="Name" #name=\'ngModel\' required></ion-input>\n          </ion-item>\n          <ion-label class="alert alert-danger" color="danger">\n            <div *ngIf="name.errors && (name.dirty || name.touched)">\n              <div [hidden]="!name.errors.required">\n                Field is required\n              </div>\n            </div>\n          </ion-label>\n          <ion-item>\n            <ion-input type="email" [(ngModel)]="data.email" name="email" placeholder="Email Address" #email=\'ngModel\' required pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\'\n              required></ion-input>\n          </ion-item>\n          <ion-label class="alert alert-danger" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.required">\n                Email is required\n              </div>\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </ion-label>\n\n          <ion-item>\n            <ion-input type="password" minlength="5" [(ngModel)]="data.password" name="password" placeholder="Password" #password=\'ngModel\'\n              required></ion-input>\n          </ion-item>\n          <ion-label class="alert alert-danger" color="danger">\n            <div *ngIf="password.errors && (password.dirty || password.touched)">\n              <div [hidden]="!password.errors.required">\n                Password is required\n              </div>\n            </div>\n            <div *ngIf="password.errors && (password.dirty || password.touched)">\n              <div [hidden]="!password.errors.minlength">\n                Minimum length 5 character\n              </div>\n            </div>\n          </ion-label>\n          \n          <ion-item>\n            <ion-input type="password" minlength="5" [(ngModel)]="data.cpassword" name="cpassword" placeholder="Confirm Password" #cpassword=\'ngModel\'\n              required></ion-input>\n          </ion-item>\n          <ion-label class="alert alert-danger" color="danger">\n            <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)">\n              <div [hidden]="!cpassword.errors.required">\n                Confirm password is required\n              </div>\n            </div>\n            <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)">\n              <div [hidden]="!cpassword.errors.minlength">\n                Minimum length 5 character\n              </div>\n            </div>\n          </ion-label>\n\n        </ion-list>\n        <div class="centerbutton">\n          <button class="custom_btn" (click)="register(signupdjForm)" [disabled]="!signupdjForm.form.valid" color="red" style="text-transform: uppercase;"\n            ion-button round>sign Up</button>\n        </div>\n      </form>\n      <div class="centerbutton" style="color:#fff;">Have an account?</div>\n      <div class="centerbutton" style="color:#fff; text-transform:uppercase; text-decoration:underline; margin-top:8px;" (click)="signinPage()">Sign In</div>\n\n      <!--<div class="centerbutton" style="color:#fff; margin-top: 10vh;">Skip</div>-->\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/signupdj/signupdj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__["a" /* Firebase */]])
], SignupdjPage);

//# sourceMappingURL=signupdj.js.map

/***/ })

},[433]);
//# sourceMappingURL=main.js.map