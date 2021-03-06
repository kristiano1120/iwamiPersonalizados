"use strict";
(self["webpackChunkiwamiPerzonalizados"] = self["webpackChunkiwamiPerzonalizados"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/nav-bar/nav-bar.component */ 1501);
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/footer/footer.component */ 202);
/* harmony import */ var _componentes_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/contacto/contacto.component */ 6920);
/* harmony import */ var _componentes_whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/whatsapp/whatsapp.component */ 8747);
/* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/home/home.component */ 5418);
/* harmony import */ var _componentes_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/nosotros/nosotros.component */ 4330);
/* harmony import */ var _componentes_productos_productos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/productos/productos.component */ 6957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);










const routes = [
    { path: 'nav', component: _componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent },
    { path: 'home', component: _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent },
    { path: 'nosotros', component: _componentes_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_5__.NosotrosComponent },
    { path: 'productos', component: _componentes_productos_productos_component__WEBPACK_IMPORTED_MODULE_6__.ProductosComponent },
    { path: 'contacto', component: _componentes_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_2__.ContactoComponent },
    { path: 'whatsapp', component: _componentes_whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_3__.WhatsappComponent },
    { path: 'footer', component: _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/nav-bar/nav-bar.component */ 1501);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/footer/footer.component */ 202);




class AppComponent {
    constructor() {
        this.title = 'Iwami Personalizados';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 19, vars: 0, consts: [["lang", "en"], ["charset", "utf-8"], ["href", "/"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "icon", "type", "image/x-icon", "href", "favico.ico"], ["rel", "preconnect", "href", "https://fonts.googleapis.com"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", ""], ["href", "https://fonts.googleapis.com/css2?family=Montserrat&display=swap", "rel", "stylesheet"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", "crossorigin", "anonymous"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "IwamiPerzonalizados");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "base", 2)(6, "meta", 3)(7, "link", 4)(8, "link", 5)(9, "link", 6)(10, "link", 7)(11, "link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "body")(13, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    } }, directives: [_componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/nav-bar/nav-bar.component */ 1501);
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/footer/footer.component */ 202);
/* harmony import */ var _componentes_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/contacto/contacto.component */ 6920);
/* harmony import */ var _componentes_whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/whatsapp/whatsapp.component */ 8747);
/* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/home/home.component */ 5418);
/* harmony import */ var _componentes_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/nosotros/nosotros.component */ 4330);
/* harmony import */ var _componentes_productos_productos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/productos/productos.component */ 6957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);











class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__.NavBarComponent, _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _componentes_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_4__.ContactoComponent, _componentes_whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_5__.WhatsappComponent, _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _componentes_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_7__.NosotrosComponent, _componentes_productos_productos_component__WEBPACK_IMPORTED_MODULE_8__.ProductosComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 6920:
/*!************************************************************!*\
  !*** ./src/app/componentes/contacto/contacto.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactoComponent": () => (/* binding */ ContactoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ContactoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactoComponent.??fac = function ContactoComponent_Factory(t) { return new (t || ContactoComponent)(); };
ContactoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactoComponent, selectors: [["app-contacto"]], decls: 0, vars: 0, template: function ContactoComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0by5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 202:
/*!********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 18, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "footer-content"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "body")(8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Ac\u00E1 van los datos, esto es una pruieba del footer como se ver\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } }, styles: ["hr[_ngcontent-%COMP%]{\r\n    width: 95%;    \r\n    margin: 20px auto;\r\n    height: 2PX;\r\n    color: black;\r\n}\r\n\r\n.footer-content[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHJ7XHJcbiAgICB3aWR0aDogOTUlOyAgICBcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyUFg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mb290ZXItY29udGVudHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5418:
/*!****************************************************!*\
  !*** ./src/app/componentes/home/home.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container-home"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "body")(8, "header", 4)(9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Bienvenido al mundo Iwami");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero aperiam error ad numquam, itaque minima incidunt quisquam unde consequatur porro ducimus magnam necessitatibus, minus, a aliquam in ut facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero aperiam error ad numquam, itaque minima incidunt quisquam unde consequatur porro ducimus magnam necessitatibus, minus, a aliquam in ut facere! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } }, styles: [".container-home[_ngcontent-%COMP%]{\r\n    height: 800px;\r\n    width: 95%;\r\n    margin: auto;\r\n    background-image: url('fondo2.webp');\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    margin: 20px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLG9DQUE2RDtJQUM3RCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0FBQ2hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaG9tZXtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlbmVzL2ZvbmRvMi53ZWJwXCIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMXtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5we1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1501:
/*!**********************************************************!*\
  !*** ./src/app/componentes/nav-bar/nav-bar.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


const _c0 = function () { return ["home"]; };
const _c1 = function () { return ["nosotros"]; };
const _c2 = function () { return ["productos"]; };
const _c3 = function () { return ["contacto"]; };
class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.??fac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 18, vars: 8, consts: [[1, "nav-container"], [1, "navbar-main"], ["src", "../../../assets/imagenes//iwami1png.png", "alt", "...", 1, "iwamiIcon"], [1, "navbar-menu"], ["routerLinkActive", "active", "aria-current", "page", 3, "routerLink"], ["routerLinkActive", "active", 3, "routerLink"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, ""]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 3)(4, "li")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li")(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li")(11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li")(14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["*[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.nav-container[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    margin: auto;\r\n    margin-top: 20px;    \r\n}\r\n\r\n.navbar-main[_ngcontent-%COMP%]{\r\n    color: black;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 60px;\r\n    padding: 20px 0;\r\n    \r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n.iwamiIcon[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    height: 70px;\r\n}\r\n\r\n.navbar-menu[_ngcontent-%COMP%]{\r\n    flex: 1;\r\n    margin-left: 20px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: black;\r\n    font-size: x-large;\r\n    text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n    color: rgb(221, 187, 74);\r\n    \r\n    border-radius: 5px;\r\n    \r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    display: flex;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n    margin: 15PX 0;\r\n    height: 2PX;\r\n    color: rgb(0, 0, 0);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixpREFBaUQ7SUFDakQscUZBQXFGO0lBQ3JGLDZFQUE2RTtBQUNqRjs7QUFFQSxtQkFBbUI7O0FBQ25CO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5uYXYtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7ICAgIFxyXG59XHJcblxyXG4ubmF2YmFyLW1haW57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCAyMDQsIDY5LCAwLjg5Nyk7ICovXHJcbiAgICAvKiAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAxMiUpOyAqL1xyXG4gICAgLyogYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiKDAgMCAwIC8gMTYlKSwgMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDEyJSk7ICovXHJcbn1cclxuXHJcbi8qLS1OQVYgQkFSIE1FTlUtLSovXHJcbi5pd2FtaUljb257XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItbWVudXtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlcntcclxuICAgIGNvbG9yOiByZ2IoMjIxLCAxODcsIDc0KTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDI0OSwgMjUwKTsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qIHBhZGRpbmc6IDVweDsgICAqL1xyXG59XHJcblxyXG51bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5saXtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcblxyXG5ocntcclxuICAgIG1hcmdpbjogMTVQWCAwO1xyXG4gICAgaGVpZ2h0OiAyUFg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 4330:
/*!************************************************************!*\
  !*** ./src/app/componentes/nosotros/nosotros.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NosotrosComponent": () => (/* binding */ NosotrosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NosotrosComponent {
    constructor() { }
    ngOnInit() {
    }
}
NosotrosComponent.??fac = function NosotrosComponent_Factory(t) { return new (t || NosotrosComponent)(); };
NosotrosComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NosotrosComponent, selectors: [["app-nosotros"]], decls: 27, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "we-content"], [1, ""]], template: function NosotrosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "body")(8, "div", 4)(9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Nuestra historia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Somos una empresa nacida y ubicada en Sabaneta, Antioquia. Justo al sur del Valle de Aburra surge esta necesidad de plasmar las ideas de nuestros clientes es sus prendas de vestir. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " todo inici\u00F3m en el a\u00F1o 2018, cuando con solo tres personas y muchas ganas de salir adelante se fund\u00F3 esta peque\u00F1a compa\u00F1\u00EDa que hoy dedica todo su esfuerzo y capacidad productiva a hacer de tus prendas de vestir todo un universo de sentimietos y sensaciones que queremos expresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ullam animi odit, ipsa, veritatis omnis nam quisquam sed nemo non doloremque, autem ab eligendi officiis! Repellendus eius consectetur iure magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis nemo voluptatibus exercitationem ratione, perferendis delectus consequatur hic facilis ducimus ipsa odio vero expedita praesentium ipsum vitae ad. Est, libero. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ullam animi odit, ipsa, veritatis omnis nam quisquam sed nemo non doloremque, autem ab eligendi officiis! Repellendus eius consectetur iure magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis nemo voluptatibus exercitationem ratione, perferendis delectus consequatur hic facilis ducimus ipsa odio vero expedita praesentium ipsum vitae ad. Est, libero. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ullam animi odit, ipsa, veritatis omnis nam quisquam sed nemo non doloremque, autem ab eligendi officiis! Repellendus eius consectetur iure magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis nemo voluptatibus exercitationem ratione, perferendis delectus consequatur hic facilis ducimus ipsa odio vero expedita praesentium ipsum vitae ad. Est, libero. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ullam animi odit, ipsa, veritatis omnis nam quisquam sed nemo non doloremque, autem ab eligendi officiis! Repellendus eius consectetur iure magnam? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ullam animi odit, ipsa, veritatis omnis nam quisquam sed nemo non doloremque, autem ab eligendi officiis! Repellendus eius consectetur iure magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet laborum quibusdam ipsum facere dolorem dolores officiis? Laborum et, porro hic nobis ipsam repellat temporibus eius sit quod? Laboriosam, consequatur..50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Misi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Visi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Mega");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } }, styles: [".we-content[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    margin: 50px auto 50px 60px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: x-large;\r\n    font-weight: 500;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vc290cm9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJub3NvdHJvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlLWNvbnRlbnR7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gNTBweCA2MHB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6957:
/*!**************************************************************!*\
  !*** ./src/app/componentes/productos/productos.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosComponent": () => (/* binding */ ProductosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class ProductosComponent {
    // fotos = [];
    constructor() {
        // this.fotos = ["../../../assets/imagenes/vestido15.jpeg",];
    }
    ngOnInit() {
    }
}
ProductosComponent.??fac = function ProductosComponent_Factory(t) { return new (t || ProductosComponent)(); };
ProductosComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductosComponent, selectors: [["app-productos"]], decls: 169, vars: 0, consts: [[1, "card-container"], ["routerLink", "", 1, "card"], [1, "card-body"], ["src", "../../../assets/imagenes/vestido2.jpeg", "alt", "...", 1, "card-img"], [1, "card-title"], [1, "card-text"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "discount"], [1, "list-group-item", "price"], ["href", "#", 1, "card-link"], [1, "card"], ["src", "../../../assets/imagenes/vestido3.jpeg", "alt", "...", 1, "card-img"], ["src", "../../../assets/imagenes/lonetas.jpeg", "alt", "...", 1, "card-img"], ["src", "../../../assets/imagenes/vestido5.jpeg", "alt", "...", 1, "card-img"], ["src", "../../../assets/imagenes/pijama.jpeg", "alt", "...", 1, "card-img"], ["src", "../../../assets/imagenes/vestido7.jpeg", "alt", "...", 1, "card-img"], ["src", "../../../assets/imagenes/vestido8.jpeg", "alt", "...", 1, "card-img"], ["src", "../../../assets/imagenes/vestido9.jpeg", "alt", "...", 1, "card-img"]], template: function ProductosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3)(4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Producto 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Dise\u00F1o exclusivo, tela sat\u00EDn, sublimado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul", 6)(10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Nueva Colecci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 7)(13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "-20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "$ 80.000 COP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 2)(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Vista r\u00E1pida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Comprar ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 11)(23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 12)(25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Producto 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Dise\u00F1o exclusivo, tela sat\u00EDn, sublimado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "ul", 6)(31, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Nueva Colecci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li", 7)(34, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "-20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "$ 80.000 COP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 2)(39, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Vista r\u00E1pida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Comprar ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 11)(44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "img", 13)(46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Producto 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Dise\u00F1o exclusivo, tela sat\u00EDn, sublimado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "ul", 6)(52, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Nueva Colecci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li", 7)(55, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "-20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "$ 80.000 COP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 2)(60, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Vista r\u00E1pida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Comprar ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 11)(65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "img", 14)(67, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Producto 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Dise\u00F1o exclusivo, tela sat\u00EDn, sublimado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "ul", 6)(73, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Nueva Colecci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "li", 7)(76, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "-20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "$ 80.000 COP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 2)(81, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Vista r\u00E1pida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Comprar ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 11)(86, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "img", 15)(88, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Producto 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Dise\u00F1o exclusivo, tela sat\u00EDn, sublimado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "ul", 6)(94, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Nueva Colecci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "li", 7)(97, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "-20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "$ 80.000 COP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 2)(102, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Vista r\u00E1pida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Comprar ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 11)(107, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "img", 16)(109, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Producto 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Dise\u00F1o exclusivo, tela sat\u00EDn, sublimado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "ul", 6)(115, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Nueva Colecci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "li", 7)(118, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "-20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "$ 80.000 COP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 2)(123, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Vista r\u00E1pida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Comprar ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 11)(128, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "img", 17)(130, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Producto 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Dise\u00F1o exclusivo, tela sat\u00EDn, sublimado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "ul", 6)(136, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Nueva Colecci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "li", 7)(139, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "-20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "$ 80.000 COP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 2)(144, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Vista r\u00E1pida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Comprar ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 11)(149, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "img", 18)(151, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Producto 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Dise\u00F1o exclusivo, tela sat\u00EDn, sublimado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "ul", 6)(157, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Nueva Colecci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "li", 7)(160, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "-20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "$ 80.000 COP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 2)(165, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Vista r\u00E1pida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Comprar ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: [".card-container[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    margin: 20px auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.04);\r\n    position: relative;\r\n    cursor: pointer;\r\n    z-index: 1000;\r\n    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);\r\n}\r\n\r\n.card-img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 550px;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%]{\r\n    font-size: x-large;\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    color: black;\r\n    font-size: x-large;\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%]:hover{\r\n    color: rgb(221, 187, 74);\r\n    transform: scale(2px);\r\n}\r\n\r\n.discount[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    color: white;\r\n    margin: 3px;\r\n    width: max-content;\r\n    padding: 2px 5px;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    font-size: x-large;    \r\n}\r\n\r\n.price[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: x-large;   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGNBQVM7SUFBVCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUVBQXVFO0FBQzNFOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoicHJvZHVjdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG59XHJcblxyXG4uY2FyZC1pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXRleHR7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5jYXJkLWxpbmt7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLmNhcmQtbGluazpob3ZlcntcclxuICAgIGNvbG9yOiByZ2IoMjIxLCAxODcsIDc0KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMnB4KTtcclxufVxyXG5cclxuLmRpc2NvdW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7ICAgIFxyXG59XHJcblxyXG4ucHJpY2V7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTsgICBcclxufSJdfQ== */"] });


/***/ }),

/***/ 8747:
/*!************************************************************!*\
  !*** ./src/app/componentes/whatsapp/whatsapp.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatsappComponent": () => (/* binding */ WhatsappComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class WhatsappComponent {
    constructor() { }
    ngOnInit() {
    }
}
WhatsappComponent.??fac = function WhatsappComponent_Factory(t) { return new (t || WhatsappComponent)(); };
WhatsappComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WhatsappComponent, selectors: [["app-whatsapp"]], decls: 5, vars: 0, consts: [["data-settings", "{\"telephone\":\"573143679940\",\"mobile_only\":false,\"button_delay\":0,\"whatsapp_web\":true,\"qr\":false,\"message_views\":2,\"message_delay\":0,\"message_badge\":false,\"message_send\":\"Hola Iwami, deseo m\u00E1s informaci\u00F3n \uD83D\uDC49 https://iwamipersonalizados.com\",\"gads\":\"\",\"message_hash\":\"\"}", 1, "joinchat", "joinchat--right", "joinchat--show", "joinchat--noanim", "joinchat--btn", "joinchat--tooltip"], [1, "joinchat__button"], [1, "joinchat__button__open"], ["src", "../assets/icons/Whatsapp-Icon-Whatsapp-Logo.png", "alt", "25px", "href", "https://iwamipersonalizados.com/", 1, "iwamiIcon"], ["href", "https://iwamipersonalizados.com/"]], template: function WhatsappComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aGF0c2FwcC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map