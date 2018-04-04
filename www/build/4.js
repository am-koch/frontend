webpackJsonp([4],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__["a" /* MenuModule */]
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu__ = __webpack_require__(283);
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
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
    MenuComponent.prototype.toSignup = function () {
        this.navCtrl.push('SignupPage');
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
            selector: 'menu',template:/*ion-inline-start:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/components/menu/menu.html"*/'<div class="container-sponsor">\n  <img src="assets/sponsors.png" alt="Logo of sponsors Bity, pro helvetia and swiss esports federation" class="sponsors-logo" />\n</div>\n\n<nav id="mobile-menu">\n  <div>\n    <img (click)="toHome()" src="assets/smgl_logo-ladder.svg" alt="Logo SMGL" class="logo mobile-logo" />\n  </div>\n  <div id="button-mobile-menu" (click)="openMenu()">\n    <div id="burger-menu"></div>\n  </div>\n  <div class="nav-link-container">\n    <div class="close-menu" (click)="animateCloseLink()"></div>\n    <p class="primary-link delayed-two" (click)="toAbout()">More about us</p>\n    <p class="primary-link delayed-two" (click)="toCompetition()">The competition</p>\n    <p class="primary-link delayed-three" (click)="toSwissGames()">Swiss Games</p>\n    <button class="signup" (click)="toSignup()">Sign Up</button>\n  </div>\n</nav>\n'/*ion-inline-end:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/components/menu/menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/pages/about/about.html"*/'<menu></menu>\n\n<ion-content>\n  <section class="landing" style="margin-top: 50px;">\n    <h1><span class="parallelogram"></span>More about us</h1>\n    <h2>Discover the team behind the project</h2>\n  </section>\n  <section class="sponsors">\n    <img class="logo-sesf" src="assets/SESF_Logo.png" alt="Logo de la SESF">\n    <p class="descr" style="margin-top: 60px;">\n      The Swiss e-Sports Federation brings together gamers, clubs and event organisers from all over Switzerland.\n    </p>\n    <p class="descr">\n      The SESF is being led by a committee. To bring the Swiss Made Games League to the top, our committee is composed of three project leaders and a dozen of talented volunteers :\n    </p>\n\n    <h2>Chairs</h2>\n    <div class="team">\n      <div class="block-member">\n        <div class="container-pic">\n          <img class="profil" src="assets/Nicolas.jpg" alt="Nicolas Pidancet">\n        </div>\n        <p class="name">Nicolas Pidancet</p>\n        <p class="role">Ambassador & Strategic Manager</p>\n      </div>\n\n      <div class="block-member">\n        <div class="container-pic">\n          <img class="profil" src="assets/Kourosh.jpg" alt="Nicolas Pidancet">\n        </div>\n        <p class="name">Kourosh Canellini</p>\n        <p class="role">Coordinator & Community Manager</p>\n      </div>\n\n      <div class="block-member">\n        <div class="container-pic">\n          <img class="profil" src="assets/tatiana.PNG" alt="Nicolas Pidancet">\n        </div>\n        <p class="name">Tatiana Ehresmann</p>\n        <p class="role">Marketing Director</p>\n      </div>\n    </div>\n\n    <h2>Dreamteam</h2>\n    <div class="team">\n      <div class="block-member">\n        <div class="container-pic">\n          <img class="profil" src="assets/Koch_Amandine.jpg" alt="Nicolas Pidancet">\n        </div>\n        <p class="name">Amandine Koch</p>\n        <p class="role">Translator</p>\n      </div>\n\n      <div class="block-member">\n        <div class="container-pic">\n          <img class="profil" src="assets/Cagatay_Ozyurt.png" alt="Nicolas Pidancet">\n        </div>\n        <p class="name">Cagatay Ozyurt</p>\n        <p class="role">Dev & Ambassador</p>\n      </div>\n\n      <div class="block-member">\n        <div class="container-pic">\n          <img class="profil" src="assets/Clément.JPG" alt="Nicolas Pidancet">\n        </div>\n        <p class="name">Clément Hampai</p>\n        <p class="role">Developer</p>\n      </div>\n\n      <div class="block-member">\n        <div class="container-pic">\n          <img class="profil" src="assets/fun-smiley.svg" alt="Nicolas Pidancet">\n        </div>\n        <p class="name">Justine Grandjean</p>\n        <p class="role">Illustrator</p>\n      </div>\n\n      <div class="block-member">\n        <div class="container-pic">\n          <img class="profil" src="assets/fun-smiley.svg" alt="Nicolas Pidancet">\n        </div>\n        <p class="name">Leo Felder</p>\n        <p class="role">Motion designer</p>\n      </div>\n\n      <div class="block-member">\n        <div class="container-pic">\n          <img class="profil" src="assets/raphael.jpg" alt="Nicolas Pidancet">\n        </div>\n        <p class="name">Raphael Rampf</p>\n        <p class="role">Ambassador & Player Panel</p>\n      </div>\n\n      <div class="block-member">\n        <div class="container-pic">\n          <img class="profil" src="assets/saskia.jpg" alt="Nicolas Pidancet">\n        </div>\n        <p class="name">Saskia Vellas</p>\n        <p class="role">Graphist</p>\n      </div>\n\n      <div class="block-member">\n        <div class="container-pic">\n          <img class="profil" src="assets/Sebastien_Martin.png" alt="Nicolas Pidancet">\n        </div>\n        <p class="name">Sébastien Martin</p>\n        <p class="role">Developer & Graphist</p>\n      </div>\n\n      <div class="block-member">\n        <div class="container-pic">\n          <img class="profil" src="assets/Stefan_Wohlgensinger.jpg" alt="Nicolas Pidancet">\n        </div>\n        <p class="name">Stefan Wohlgensigenr</p>\n        <p class="role">Ambassador & Player Panel</p>\n      </div>\n    </div>\n\n    <p class="descr">\n      And more to come ...Do you want to join the dream team? We always need more help !\n    </p>\n    <p class="descr" style="margin-bottom: 50px;">\n      You can find out more about the SESF on their Web-site: <a href="https://sesf.ch/about-the-federation/" target="_blank" rel="noopener">https://sesf.ch/about-the-federation/</a>\n    </p>\n\n  </section>\n</ion-content>\n'/*ion-inline-end:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=4.js.map