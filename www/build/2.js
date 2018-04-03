webpackJsonp([2],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionPageModule", function() { return CompetitionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__competition__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CompetitionPageModule = /** @class */ (function () {
    function CompetitionPageModule() {
    }
    CompetitionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__competition__["a" /* CompetitionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__competition__["a" /* CompetitionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__["a" /* MenuModule */]
            ],
        })
    ], CompetitionPageModule);
    return CompetitionPageModule;
}());

//# sourceMappingURL=competition.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MenuComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MenuComponent */]]
        })
    ], MenuModule);
    return MenuModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.primary_links = document.querySelectorAll('.primary-link');
        this.secondary_links = document.querySelectorAll('.secondary-link');
        this.nav_link_container = document.querySelectorAll('.nav-link-container');
    };
    MenuComponent.prototype.toAbout = function () {
        this.navCtrl.push('AboutPage');
    };
    MenuComponent.prototype.toHome = function () {
        this.navCtrl.push('HomePage');
    };
    MenuComponent.prototype.toCompetition = function () {
        this.navCtrl.push('CompetitionPage');
    };
    MenuComponent.prototype.toSwissGames = function () {
        this.navCtrl.push('SwissGamesPage');
    };
    MenuComponent.prototype.openMenu = function () {
        for (var i = 0; i < this.nav_link_container.length; i++) {
            this.nav_link_container[i].style.left = '0px';
        }
        for (var i = 0; i < this.primary_links.length; i++) {
            this.primary_links[i].classList.add('primary-style');
        }
        for (var i = 0; i < this.secondary_links.length; i++) {
            this.secondary_links[i].classList.add('secondary-style');
        }
    };
    MenuComponent.prototype.animateCloseLink = function () {
        for (var i = 0; i < this.nav_link_container.length; i++) {
            this.nav_link_container[i].style.left = '101vw';
        }
        for (var i = 0; i < this.primary_links.length; i++) {
            this.primary_links[i].classList.remove('primary-style');
        }
        for (var i = 0; i < this.secondary_links.length; i++) {
            this.secondary_links[i].classList.remove('secondary-style');
        }
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menu',template:/*ion-inline-start:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/components/menu/menu.html"*/'<div class="container-sponsor">\n  <img src="assets/sponsors.png" alt="Logo of sponsors Bity, pro helvetia and swiss esports federation" class="sponsors-logo" />\n</div>\n\n<nav id="mobile-menu">\n  <div>\n    <img (click)="toHome()" src="assets/smgl_logo-ladder.svg" alt="Logo SMGL" class="logo mobile-logo" />\n  </div>\n  <div id="button-mobile-menu" (click)="openMenu()">\n    <div id="burger-menu"></div>\n  </div>\n  <div class="nav-link-container">\n    <div class="close-menu" (click)="animateCloseLink()"></div>\n    <p class="primary-link delayed-two" (click)="toAbout()">More about us</p>\n    <p class="primary-link delayed-two" (click)="toCompetition()">The competition</p>\n    <p class="primary-link delayed-three" (click)="toSwissGames()">Swiss Games</p>\n  </div>\n</nav>\n'/*ion-inline-end:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/components/menu/menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompetitionPage = /** @class */ (function () {
    function CompetitionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CompetitionPage.prototype.ionViewDidLoad = function () {
    };
    CompetitionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-competition',template:/*ion-inline-start:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/pages/competition/competition.html"*/'<menu></menu>\n\n<ion-content>\n\n  <section class="landing">\n    <h1><span class="parallelogram"></span>The Competition</h1>\n    <h2>A Swiss tour on Swiss games</h2>\n  </section>\n  \n  <section class="sponsors">\n    <h2>Plan A</h2>\n    <p class="descr" style="font-size: 20px;">\n  Sign up  <ion-icon name="md-arrow-round-forward"></ion-icon> Download the game <ion-icon name="md-arrow-round-forward"></ion-icon> Train with friends <ion-icon name="md-arrow-round-forward"></ion-icon> Come at Majors & Minors events <ion-icon name="md-arrow-round-forward"></ion-icon> Kick ass <ion-icon name="md-arrow-round-forward"></ion-icon> Qualify <ion-icon name="md-arrow-round-forward"></ion-icon> Come at the Finals <ion-icon name="md-arrow-round-forward"></ion-icon> Kick ass again <ion-icon name="md-arrow-round-forward"></ion-icon> Be famous forever.   </p>\n\n    <h2>Plan B</h2>\n    <p class="descr" style="font-size: 20px;">\n  Sign up  <ion-icon name="md-arrow-round-forward"></ion-icon> Download the game <ion-icon name="md-arrow-round-forward"></ion-icon> Have fun <ion-icon name="md-arrow-round-forward"></ion-icon> Come at Majors & Minors events <ion-icon name="md-arrow-round-forward"></ion-icon> Have fun again <ion-icon name="md-arrow-round-forward"></ion-icon> Lose <ion-icon name="md-arrow-round-forward"></ion-icon> Come at the Finals <ion-icon name="md-arrow-round-forward"></ion-icon> Have fun watching better players kiking each other ass.  </p>\n    <h2 style="font-size: 50px; margin-bottom: 5px;">Win 1 Bitcoin !</h2>\n    <p class="descr" style="text-align: center; margin-top: 0px; margin-bottom: 30px;">Sponsored by Bity</p>\n\n    <h2>How do I win points ?</h2>\n    <p class="descr" style="margin-bottom: 0px; text-align: center;">Join us at several Minors and Majors !</p>\n    <p class="descr" style="margin-top: 10px; text-align: center;">If you’re late, you can also win a direct qualification for the Finals during Majors ;) </p>\n\n    <h2 style="font-size: 30px;">Minors:</h2>\n\n    <h2 style="text-align: left; margin-top: 30px;">April</h2>\n    <div class="container-event">\n      <p class="date">14.04</p>\n      <p class="event"> G4 & Geneva E-Sport (GE)</p>\n    </div>\n    <div class="container-event">\n      <p class="date">22.04</p>\n      <p class="event">eParadize (ZH)</p>\n    </div>\n\n    <h2 style="text-align: left; margin-top: 30px;">May</h2>\n    <div class="container-event">\n      <p class="date">05.05</p>\n      <p class="event">Chablais LAN (VS)</p>\n    </div>\n    <div class="container-event">\n      <p class="date">20.05</p>\n      <p class="event">eevent & Hardread (TG)</p>\n    </div>\n\n    <p class="descr" style="margin-top: 30px; text-align: center;">At least 6 others Minors will be announced later !\n    If you are willing to organize a Minor with your association/event, contact us !</p>\n\n    <h2 style="font-size: 30px;">Majors:</h2>\n\n    <h2 style="text-align: left; margin-top: 30px;">August</h2>\n    <div class="container-event">\n      <p class="date">26.08</p>\n      <p class="event">Numerik Games (VD) September</p>\n    </div>\n\n    <h2 style="text-align: left; margin-top: 30px;">September</h2>\n    <div class="container-event">\n      <p class="date">15.09</p>\n      <p class="event">Zurich Game Show (ZH) October</p>\n    </div>\n\n    <h2 style="text-align: left; margin-top: 30px;">October</h2>\n    <div class="container-event">\n      <p class="date">13.10</p>\n      <p class="event">HeroFest / SwitzerLAN (BE)</p>\n    </div>\n\n    <p class="descr" style="text-align: center;"><a href="http://smgl.ch/rules/2018" target="_blank">Check the rules !</a></p>\n\n    <p class="descr">Join us and get your early access to RETIMED (final release for 2019 !).</p>\n\n    <h2>What’s included in the subscription ? </h2>\n    <p class="descr">Registered participants have the right to :\n  </p>\n    <ul>\n      <li>A Beta Steam key for the latest version of the game RETIMED</li>\n      <li>Free participation to every Minor and Major, within the limits of the available slots.</li>\n      <li>Priority over punctual participants when registering for Minors and Majors.</li>\n      <li>Integration of the player’s profile in the global ranking</li>\n      <li>Invitation to the Grand Final for the best of them.</li>\n    </ul>\n\n    <h2>Registered participants do not have the right to:</h2>\n    <ul>\n      <li>A free entrance to the event hosting the Minors and the Majors. They are required to pay the costs relative to the events hosting the Minors and the Majors (Visitor entry fee)</li>\n      <li style="margin-bottom: 50px;">Systematic technical support in the event of a set-up error. Support is available within the availability of the studio only.</li>\n    </ul>\n  </section>\n\n</ion-content> '/*ion-inline-end:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/pages/competition/competition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CompetitionPage);
    return CompetitionPage;
}());

//# sourceMappingURL=competition.js.map

/***/ })

});
//# sourceMappingURL=2.js.map