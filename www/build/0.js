webpackJsonp([0],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwissGamesPageModule", function() { return SwissGamesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swiss_games__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SwissGamesPageModule = /** @class */ (function () {
    function SwissGamesPageModule() {
    }
    SwissGamesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__swiss_games__["a" /* SwissGamesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__swiss_games__["a" /* SwissGamesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__["a" /* MenuModule */]
            ],
        })
    ], SwissGamesPageModule);
    return SwissGamesPageModule;
}());

//# sourceMappingURL=swiss-games.module.js.map

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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwissGamesPage; });
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


/**
 * Generated class for the SwissGamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SwissGamesPage = /** @class */ (function () {
    function SwissGamesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SwissGamesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SwissGamesPage');
    };
    SwissGamesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-swiss-games',template:/*ion-inline-start:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/pages/swiss-games/swiss-games.html"*/'<menu></menu>\n\n<ion-content>\n  <section class="landing">\n    <h1><span class="parallelogram"></span>Swiss Games</h1>\n    <h2>Discover our Swiss Landscape of Competitive Games !</h2>\n  </section>\n  <section class="sponsors">\n\n    <p class="descr" style="margin-bottom: 0px; text-align: justify;">\n  For this first edition, the tournament is all about the Swiss game RETIMED, made by the developer studio Maniax from Zürich. Other games/disciplines will join the tournament in future years.</p>\n  <p class="descr" style="margin-bottom: 0px; text-align: justify;">\n  If you’re a Swiss Game Dev working on competitive games, don’t hesitate to contact us ! From a short playtest to the full integration of your game in the SMGL, the sooner we meet the better it is !</p>\n\n\n  <h2 style="font-size: 30px; margin-top: 50px;">WTH IS RETIMED ??</h2>\n\n  <p class="descr" style="margin-bottom: 0px; text-align: justify;">Retimed is a local multiplayer arena shooter for 2 to 4 players. \n  When a player is in danger, time slows down in a bubble around them. This gives players enough time to react and try to dodge the deadly projectiles. \n  These time bubbles generate exciting alternations between fast-paced movements and tension-filled, slow motion moments.</p>\n\n  <iframe class="trailer" src="https://www.youtube.com/embed/N38d1Hk52jA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n\n  </section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/pages/swiss-games/swiss-games.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SwissGamesPage);
    return SwissGamesPage;
}());

//# sourceMappingURL=swiss-games.js.map

/***/ })

});
//# sourceMappingURL=0.js.map