webpackJsonp([1],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__["a" /* MenuModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.openPopup = function () {
        var alert = this.alertCtrl.create({
            title: 'SOON!',
            message: 'Sign up will be soon available! Stay tuned to don\'t miss it!',
            buttons: [
                {
                    text: 'Can\'t wait!',
                    role: 'cancel',
                    handler: function () {
                        console.log('I\'ll kick somme ass!');
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/pages/home/home.html"*/'<menu></menu>\n\n<ion-content>\n  <section class="landing home-landing">\n    <h1 style="color: white;" class="txt-shadow">Swiss Made</h1>\n    <img class="games-league" src="assets/games-league.svg" alt="GAMES LEAGUE">\n    <h2 class="specialH2 txt-shadow big-h2" style="color: white;">A Swiss tour</h2>\n    <h2 class="specialH2 txt-shadow big-h2" style="color: white;">on Swiss games</h2>\n\n    <div class="container-cta">\n      <img class="sun-burst" src="assets/sun-burst.svg" alt="sun burst">\n      <button class="cta" (click)="openPopup()">Sign up</button>\n    </div>\n  </section>\n\n  <section class="content-video">\n    \n    <iframe class="cta-video" src="https://www.youtube.com/embed/1cX0zk-mQgc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n\n  </section>\n\n  <section class="content-read">\n    <p class="big-txt">A new competition for <span class="red-txt">HARDCORE gamers</span>, <span class="red-txt">families</span> and happy <span class="red-txt">new players&nbsp;</span>!  </p>\n  </section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=1.js.map