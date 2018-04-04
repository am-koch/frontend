webpackJsonp([1],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__["a" /* MenuModule */]
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

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

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = /** @class */ (function () {
    function SignupPage(userProv, navCtrl, navParams) {
        this.userProv = userProv;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signUp = function () {
        if (!this.country) {
            console.log(this.country, this.check);
            this.check = false;
            return;
        }
        if (!this.state) {
            this.check = false;
            return;
        }
        if (!this.postal_code) {
            this.check = false;
            return;
        }
        if (!this.locality) {
            this.check = false;
            return;
        }
        if (!this.street) {
            this.check = false;
            return;
        }
        if (!this.number) {
            this.check = false;
            return;
        }
        if (!this.gender) {
            this.check = false;
            return;
        }
        if (!this.birthdate) {
            this.check = false;
            return;
        }
        if (!this.mail) {
            this.check = false;
            return;
        }
        if (!this.firstname) {
            this.check = false;
            return;
        }
        if (!this.lastname) {
            this.check = false;
            return;
        }
        if (!this.firstname) {
            this.check = false;
            return;
        }
        if (!this.nickname) {
            this.check = false;
            return;
        }
        if (!this.password) {
            this.check = false;
            return;
        }
        if (!this.password_confirmation) {
            this.check = false;
            return;
        }
        if (this.password == this.password_confirmation) {
            this.check = false;
            return;
        }
        this.check = true;
        var me = {
            firstname: this.firstname,
            lastname: this.lastname,
            nickname: this.nickname,
            password: this.password,
            password_confirmation: this.password_confirmation,
            mail: this.mail,
            birthdate: this.birthdate,
            gender: this.gender,
            address: {
                number: this.number,
                street: this.street,
                locality: {
                    name: this.locality,
                    postal_code: this.postal_code
                },
                state: {
                    name: this.state
                },
                country: {
                    name: this.country
                }
            }
        };
        this.userProv.setUser(me);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/pages/signup/signup.html"*/'<menu></menu>\n\n<ion-content>\n    <div class="somethingWentWrong" *ngIf="!this.check">Something went wrong with the informations provided.</div>\n\n    <ion-input [(ngModel)]=\'lastname\' placeholder=\'Lastname\'></ion-input>\n    <ion-input [(ngModel)]=\'firstname\' placeholder=\'Firstname\'></ion-input>\n    <ion-input [(ngModel)]=\'nickname\' placeholder=\'Pseudo\'></ion-input>\n    <ion-input [(ngModel)]=\'mail\' placeholder=\'Email\'></ion-input>\n    <ion-input [(ngModel)]=\'password\' type=\'password\' placeholder=\'Password\'></ion-input>\n    <ion-input [(ngModel)]=\'password_confirmation\' type=\'password\' placeholder=\'Confirm password\'></ion-input>\n    <div class="available" *ngIf="password==password_confirmation">Passwords match</div>\n    <div class="notAvailable" *ngIf="password!=password_confirmation">Passwords don\'t match</div>\n    <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="birthdate"></ion-datetime>\n    <ion-select [(ngModel)]="gender">\n        <ion-option value="Female">Female</ion-option>\n        <ion-option value="Male">Male</ion-option>\n    </ion-select>   \n    <ion-input [(ngModel)]=\'street\' placeholder=\'Street\'></ion-input>\n    <ion-input [(ngModel)]=\'number\' placeholder=\'Street number\'></ion-input>\n    <ion-input [(ngModel)]=\'locality\' placeholder=\'City\'></ion-input>\n    <ion-input [(ngModel)]=\'postal_code\' placeholder=\'ZIP\'></ion-input>\n    <ion-input [(ngModel)]=\'state\' placeholder=\'State\'></ion-input>\n    <ion-input [(ngModel)]=\'country\' placeholder=\'Country\'></ion-input>\n\n    <button (click)="signUp()" ion-button color="light" class="signup">Sign up</button>\n</ion-content>\n'/*ion-inline-end:"/Users/sebastienmartin/Documents/SMGL/WEB/web-smgl/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=1.js.map