(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/algo-runner/algo-runner.module": [
		"./src/app/modules/algo-runner/algo-runner.module.ts"
	],
	"./modules/dashboard-v2-copy/dashboard-v2.module": [
		"./src/app/modules/dashboard-v2-copy/dashboard-v2.module.ts",
		"modules-dashboard-v2-copy-dashboard-v2-module"
	],
	"./modules/dashboard-v2/dashboard-v2.module": [
		"./src/app/modules/dashboard-v2/dashboard-v2.module.ts"
	],
	"./modules/statistics/statistics.module": [
		"./src/app/modules/algo-runner/modules/statistics/statistics.module.ts",
		"modules-statistics-statistics-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'algorithm',
        loadChildren: './modules/algo-runner/algo-runner.module#AlgoRunnerModule'
    },
    {
        path: '',
        loadChildren: './modules/dashboard-v2/dashboard-v2.module#DashboardModule'
    },
    {
        path: 'batchmates/:name',
        loadChildren: './modules/dashboard-v2-copy/dashboard-v2.module#DashboardModule#MainComponent'
    },
    {
        path: 'batchmates',
        loadChildren: './modules/dashboard-v2-copy/dashboard-v2.module#DashboardModule#MainComponent'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-dashboard-header></app-dashboard-header> -->\n<router-outlet></router-outlet>\n<!-- <app-header></app-header>\n<div class=\"row main-body\">\n    <div class=\"col-2 p-0\">\n        <app-sidebar (eventClicked)=\"childEventClicked($event)\"></app-sidebar>\n    </div>\n    <div class=\"col-10 p-0\">\n        <app-graph-visualizer [event]=\"clickedEvent\"></app-graph-visualizer>\n    </div>\n</div> -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-body {\n  height: 89%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYm9keSB7XG4gICAgaGVpZ2h0OiA4OSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'network-visualizer';
    }
    AppComponent.prototype.childEventClicked = function (event) {
        this.clickedEvent = event;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_shell_shell_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/shell/shell.module */ "./src/app/modules/shell/shell.module.ts");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _modules_core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_custom_material_components_snackbar_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/custom-material/components/snackbar/snackbar/snackbar.component */ "./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.ts");
/* harmony import */ var _modules_redux_redux_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/redux/redux.module */ "./src/app/modules/redux/redux.module.ts");
/* harmony import */ var _modules_dashboard_v2_dashboard_v2_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/dashboard-v2/dashboard-v2.module */ "./src/app/modules/dashboard-v2/dashboard-v2.module.ts");











// import redux for state management


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _modules_custom_material_components_snackbar_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__["SnackbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _modules_redux_redux_module__WEBPACK_IMPORTED_MODULE_11__["ReduxModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_7__["SuiModule"],
                _modules_shell_shell_module__WEBPACK_IMPORTED_MODULE_5__["ShellModule"],
                _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _modules_core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _modules_dashboard_v2_dashboard_v2_module__WEBPACK_IMPORTED_MODULE_12__["DashboardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/algo-runner-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/algo-runner/algo-runner-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AlgoRunnerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoRunnerRoutingModule", function() { return AlgoRunnerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_costing_modal_costing_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/costing-modal/costing-modal.component */ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/modules/algo-runner/components/main/main.component.ts");





var routes = [
    {
        path: 'costing',
        component: _components_costing_modal_costing_modal_component__WEBPACK_IMPORTED_MODULE_3__["CostingModalComponent"]
    },
    {
        path: 'statistics',
        loadChildren: './modules/statistics/statistics.module#StatisticsModule'
    },
    {
        path: '',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
    }
];
var AlgoRunnerRoutingModule = /** @class */ (function () {
    function AlgoRunnerRoutingModule() {
    }
    AlgoRunnerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AlgoRunnerRoutingModule);
    return AlgoRunnerRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/algo-runner.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/algo-runner/algo-runner.module.ts ***!
  \***********************************************************/
/*! exports provided: AlgoRunnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoRunnerModule", function() { return AlgoRunnerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _algo_runner_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algo-runner-routing.module */ "./src/app/modules/algo-runner/algo-runner-routing.module.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/modules/algo-runner/components/main/main.component.ts");
/* harmony import */ var _components_costing_modal_costing_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/costing-modal/costing-modal.component */ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/modules/algo-runner/components/toolbar/toolbar.component.ts");
/* harmony import */ var _services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/toolbar-shared-service/toolbar-shared.service */ "./src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service.ts");
/* harmony import */ var ng2_semantic_ui_dist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-semantic-ui/dist */ "./node_modules/ng2-semantic-ui/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_modal_row_renderer_modal_row_renderer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modal-row-renderer/modal-row-renderer.component */ "./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.ts");












var AlgoRunnerModule = /** @class */ (function () {
    function AlgoRunnerModule() {
    }
    AlgoRunnerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _components_costing_modal_costing_modal_component__WEBPACK_IMPORTED_MODULE_5__["CostingModalComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"], _components_modal_row_renderer_modal_row_renderer_component__WEBPACK_IMPORTED_MODULE_11__["ModalRowRendererComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ng2_semantic_ui_dist__WEBPACK_IMPORTED_MODULE_8__["SuiModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeaheadModule"],
                ng2_semantic_ui_dist__WEBPACK_IMPORTED_MODULE_8__["SuiSelectModule"],
                _algo_runner_routing_module__WEBPACK_IMPORTED_MODULE_3__["AlgoRunnerRoutingModule"]
            ],
            exports: [_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"]],
            providers: [_services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_7__["ToolbarSharedService"]]
        })
    ], AlgoRunnerModule);
    return AlgoRunnerModule;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title align-center\" id=\"exampleModalCenterTitle\">Add Property Cost</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <ng-container *ngFor=\"let key of modalDisplayRows\">\n            <algo-runner-modal-row-renderer [labelName]=\"key\" [labelDropDown]=\"modalDisplayObject[key]\" (selectedDropDown)=\"onSelect($event)\"></algo-runner-modal-row-renderer>\n          </ng-container>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-item {\n  width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9jb21wb25lbnRzL2Nvc3RpbmctbW9kYWwvY29zdGluZy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9jb21wb25lbnRzL2Nvc3RpbmctbW9kYWwvY29zdGluZy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1pdGVtIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CostingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostingModalComponent", function() { return CostingModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var CostingModalComponent = /** @class */ (function () {
    function CostingModalComponent() {
        this.nodeTypesArray = [];
        this.nodePropertiesArray = [];
        this.relationTypesArray = [];
        this.modalDisplayObject = {};
        this.modalDisplayRows = [];
    }
    /**
     * Sets modal data
     * @description The function will update the modal info if sent by the parent
     */
    CostingModalComponent.prototype.setModalData = function () {
        var _this = this;
        if (this.modalData.hasOwnProperty('nodes') && this.modalData.nodes.hasOwnProperty('types')) {
            this.modalDisplayObject['Node Type'] = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.modalData.nodes['types']);
        }
        if (this.modalData.hasOwnProperty('nodes') && this.modalData.nodes.hasOwnProperty('properties')) {
            // this.nodePropertiesArray = _.cloneDeep(this.modalData.nodes['properties']);
            this.modalDisplayObject['Node Properties'] = this.extractProperties(this.modalData.nodes['properties']);
        }
        if (this.modalData.hasOwnProperty('relations') && this.modalData.nodes.hasOwnProperty('types')) {
            this.modalDisplayObject['Relation Type'] = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.modalData.nodes['types']);
        }
        this.modalDisplayObject['Relation Direction'] = ['In', 'Out', 'Both'];
        Object.keys(this.modalDisplayObject).forEach(function (key) { return _this.modalDisplayRows.push(key); });
        this.modalDisplayRows = lodash__WEBPACK_IMPORTED_MODULE_2__["uniq"](this.modalDisplayRows);
    };
    CostingModalComponent.prototype.ngOnInit = function () {
    };
    CostingModalComponent.prototype.extractProperties = function (arrayOfObjects) {
        if (arrayOfObjects && arrayOfObjects.constructor === Object) {
            return Object.keys(arrayOfObjects);
        }
        else {
            return [];
        }
    };
    CostingModalComponent.prototype.ngOnChanges = function (changes) {
        if (changes.modalData.currentValue !== changes.modalData.previousValue) {
            // to be called only when the the modalData variable has been updated
            this.setModalData();
        }
    };
    CostingModalComponent.prototype.selectedDropDown = function (event) {
        console.log('selected dropdown details', event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CostingModalComponent.prototype, "modalData", void 0);
    CostingModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'algo-runner-costing-modal',
            template: __webpack_require__(/*! ./costing-modal.component.html */ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.html"),
            styles: [__webpack_require__(/*! ./costing-modal.component.scss */ "./src/app/modules/algo-runner/components/costing-modal/costing-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CostingModalComponent);
    return CostingModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/components/main/main.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/main/main.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/algo-runner/components/main/main.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/main/main.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/main/main.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/main/main.component.ts ***!
  \***********************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'algo-runner-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/modules/algo-runner/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/modules/algo-runner/components/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <label for=\"typeahead-basic\" class=\"costingKey\">{{labelName}}</label>\n    <input \n    id=\"typeahead-basic\" type=\"text\" \n    class=\"form-control DropdownContainer\" (ngModelChange)=\"onDropdownChange($event)\" \n    [ngbTypeahead]=\"search\"\n    (focus)=\"focus$.next($event.target.value)\"\n    #instance=\"ngbTypeahead\"\n    />\n</div>"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  display: flex;\n  width: 100%;\n  margin: 10px 0; }\n\n.costingKey, .DropdownContainer {\n  flex: 1; }\n\n.costingKey {\n  padding-left: 15px; }\n\n.DropdownContainer {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9jb21wb25lbnRzL21vZGFsLXJvdy1yZW5kZXJlci9tb2RhbC1yb3ctcmVuZGVyZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxPQUFPLEVBQUE7O0FBR1g7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FsZ28tcnVubmVyL2NvbXBvbmVudHMvbW9kYWwtcm93LXJlbmRlcmVyL21vZGFsLXJvdy1yZW5kZXJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5jb3N0aW5nS2V5LCAuRHJvcGRvd25Db250YWluZXIge1xuICAgIGZsZXg6IDE7XG59XG5cbi5jb3N0aW5nS2V5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5Ecm9wZG93bkNvbnRhaW5lciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ModalRowRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRowRendererComponent", function() { return ModalRowRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





var ModalRowRendererComponent = /** @class */ (function () {
    function ModalRowRendererComponent() {
        var _this = this;
        this.labelName = null;
        this.labelDropDown = null;
        this.dependentOn = null;
        this.selectedDropDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["merge"])(_this.focus$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.labelDropDown
                : _this.labelDropDown.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10); }));
        };
    }
    ModalRowRendererComponent.prototype.ngOnInit = function () {
    };
    ModalRowRendererComponent.prototype.onDropdownChange = function (event, label) {
        if (label === void 0) { label = ''; }
        // send the selected value out
        console.log({ key: this.labelName, value: event.target.value });
        this.selectedDropDown.emit({ key: label, value: event.target.value });
    };
    ModalRowRendererComponent.prototype.clickEvents = function ($event, typeaheadInstance) {
        if (typeaheadInstance.isPopupOpen()) {
            this.click$.next($event.target.value);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalRowRendererComponent.prototype, "labelName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ModalRowRendererComponent.prototype, "labelDropDown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalRowRendererComponent.prototype, "dependentOn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalRowRendererComponent.prototype, "selectedDropDown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instance'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"])
    ], ModalRowRendererComponent.prototype, "instance", void 0);
    ModalRowRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'algo-runner-modal-row-renderer',
            template: __webpack_require__(/*! ./modal-row-renderer.component.html */ "./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.html"),
            styles: [__webpack_require__(/*! ./modal-row-renderer.component.scss */ "./src/app/modules/algo-runner/components/modal-row-renderer/modal-row-renderer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalRowRendererComponent);
    return ModalRowRendererComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/components/toolbar/toolbar.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/toolbar/toolbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Toolbar contains the statistics and costing buttons-->\n<button class=\"circularBtn\" (click)=\"openCostingModal()\"><i class=\"fas fa-dollar-sign\"></i></button>\n<button class=\"circularBtn\" (click)=\"initiateStatistics()\"><i class=\"fas fa-chart-bar\"></i></button>\n\n<!--costing modal to open only when user clicks on costing-->\n<algo-runner-costing-modal [modalData]=\"nodeRelDataObject\"></algo-runner-costing-modal>"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/toolbar/toolbar.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/toolbar/toolbar.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-right: 14px; }\n\n.circularBtn {\n  font-size: 1.5rem;\n  width: 44px;\n  border-radius: 50%;\n  height: 42px;\n  border: 0;\n  box-shadow: 2px 9px 17px -1px #cccccc; }\n\n.circularBtn:active {\n  box-shadow: none;\n  transition: .5s; }\n\n.circularBtn:focus {\n  outline: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBR1QscUNBQW9ELEVBQUE7O0FBR3hEO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FsZ28tcnVubmVyL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQgOiAxNHB4O1xufVxuXG4uY2lyY3VsYXJCdG4ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcbn1cblxuLmNpcmN1bGFyQnRuOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5jaXJjdWxhckJ0bjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/algo-runner/components/toolbar/toolbar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/algo-runner/components/toolbar/toolbar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/toolbar-shared-service/toolbar-shared.service */ "./src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service.ts");
/* harmony import */ var _modules_statistics_services_statistical_analysis_result_statistical_analysis_result_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/statistics/services/statistical-analysis-result/statistical-analysis-result.service */ "./src/app/modules/algo-runner/modules/statistics/services/statistical-analysis-result/statistical-analysis-result.service.ts");






var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(router, toolbarShrdSrvc, statisticalAnalysisResult) {
        this.router = router;
        this.toolbarShrdSrvc = toolbarShrdSrvc;
        this.statisticalAnalysisResult = statisticalAnalysisResult;
        this.nodeRelDataObject = {};
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.toolbarShrdSrvc.nodeRelationsDetailsEvent.subscribe(function (NRData) {
            console.log('recieved in the toolbar component', NRData);
        }, function (err) {
            console.log(err);
        });
        $('#exampleModalCenter').on('hidden.bs.modal', function (hiddenEvent) {
            console.log('costing modal hidden');
        });
        // retrieve the nodeRelation details via static variable
        this.nodeRelDataObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.toolbarShrdSrvc.nodeRelationDetailsData);
    };
    /**
     * Opens costing modal
     * @description To open the bootstrap modal assigned for costing modal
     */
    ToolbarComponent.prototype.openCostingModal = function () {
        $(function () {
            $('#exampleModalCenter').modal('show');
        });
    };
    /**
     * Initiates statistics
     * @description To redirect to the /statistics/home page where statistics workflow will start
     */
    ToolbarComponent.prototype.initiateStatistics = function () {
        this.statisticalAnalysisResult.renderAnalysisResult(false);
        this.router.navigate(['/statistics', 'home']);
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'algo-runner-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/modules/algo-runner/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/modules/algo-runner/components/toolbar/toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarSharedService"],
            _modules_statistics_services_statistical_analysis_result_statistical_analysis_result_service__WEBPACK_IMPORTED_MODULE_5__["StatisticalAnalysisResultService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/services/statistical-analysis-result/statistical-analysis-result.service.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/services/statistical-analysis-result/statistical-analysis-result.service.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: StatisticalAnalysisResultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticalAnalysisResultService", function() { return StatisticalAnalysisResultService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var StatisticalAnalysisResultService = /** @class */ (function () {
    function StatisticalAnalysisResultService() {
        this.flag = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.flag$ = this.flag.asObservable();
    }
    StatisticalAnalysisResultService.prototype.renderAnalysisResult = function (flagValue) {
        this.flag.next(flagValue);
    };
    StatisticalAnalysisResultService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatisticalAnalysisResultService);
    return StatisticalAnalysisResultService;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: ToolbarSharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarSharedService", function() { return ToolbarSharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ToolbarSharedService = /** @class */ (function () {
    function ToolbarSharedService() {
        this.sidebarFilterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sidebarFiltersEvent = this.sidebarFilterSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        this.nodeRelationDetailsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.nodeRelationsDetailsEvent = this.nodeRelationDetailsSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        this.nodeRelationDetailsVar = {};
    }
    /**
     * Sends recent filters
     * @description To send the filter object selected by the user in the sidebar
     * @param recentFilterData
     */
    ToolbarSharedService.prototype.sendRecentFilters = function (recentFilterData) {
        console.log('Sending side bar filters data as ', recentFilterData);
        this.sidebarFilterSubject.next(recentFilterData);
    };
    /**
     * Sends node relation details
     * @param nodeRelationObject
     */
    ToolbarSharedService.prototype.sendNodeRelationDetails = function (nodeRelationObject) {
        console.log('Sending node and relations details', nodeRelationObject);
        this.nodeRelationDetailsSubject.next(nodeRelationObject);
    };
    /**
     * Sends node relation details static
     * @param nodeRelationObject
     */
    ToolbarSharedService.prototype.sendNodeRelationDetailsStatic = function (nodeRelationObject) {
        console.log('Sending node and relations details', nodeRelationObject);
        this.nodeRelationDetailsVar = nodeRelationObject;
    };
    Object.defineProperty(ToolbarSharedService.prototype, "nodeRelationDetailsData", {
        /**
         * Gets node relation details data
         * @description Getter function to return nodeRelationDetailsVar set by sidebar
         */
        get: function () {
            return this.nodeRelationDetailsVar;
        },
        enumerable: true,
        configurable: true
    });
    ToolbarSharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarSharedService);
    return ToolbarSharedService;
}());



/***/ }),

/***/ "./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"graph-container\" id=\"graphViewer\">\n    \n</div>"

/***/ }),

/***/ "./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".graph-container {\n  background: #F5F5F5;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9jb3JlL2NvbXBvbmVudHMvZ3JhcGgtdmlzdWFsaXplci9ncmFwaC12aXN1YWxpemVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb21wb25lbnRzL2dyYXBoLXZpc3VhbGl6ZXIvZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFwaC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GraphVisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphVisualizerComponent", function() { return GraphVisualizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/graph-data-service/graph-data.service */ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var GraphVisualizerComponent = /** @class */ (function () {
    function GraphVisualizerComponent(graphService) {
        this.graphService = graphService;
        this.graphData = {};
        this.graphOptions = {
            physics: false,
            edges: {
                smooth: {
                    type: 'continuous',
                    forceDirection: 'none'
                }
            },
            nodes: {
                shape: 'dot',
                scaling: {
                    customScalingFunction: function (min, max, total, value) {
                        return value / total;
                    },
                    min: 5,
                    max: 150
                }
            }
        };
    }
    GraphVisualizerComponent.prototype.ngOnInit = function () {
        this.displayInitialGraph();
    };
    GraphVisualizerComponent.prototype.displayInitialGraph = function () {
        var _this = this;
        this.graphService.getInitialData().subscribe(function (result) {
            console.log('recieved data from graph service', result);
            // set data for vis
            if (result.hasOwnProperty('seperateNodes')) {
                _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](result['seperateNodes']);
            }
            if (result.hasOwnProperty('seperateEdges')) {
                _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](result['seperateEdges']);
            }
            console.log('graphData :', _this.graphData);
            // display data
            var container = document.getElementById('graphViewer');
            _this.network = new vis__WEBPACK_IMPORTED_MODULE_3__["Network"](container, _this.graphData, _this.graphOptions);
        }, function (err) {
            console.error('An error occured while retrieving initial graph data', err);
            _this.graphData = {};
        });
    };
    GraphVisualizerComponent.prototype.ngOnChanges = function (changes) {
        console.log("graph", this.event);
        this.changeNodeColor();
    };
    GraphVisualizerComponent.prototype.changeNodeColor = function () {
        var _this = this;
        var previousData = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this.graphData);
        if (!!this.graphData["nodes"]) {
            var temgraph = this.graphData["nodes"].map(function (node) {
                if (_this.event == node.type[0]) {
                    node["color"] = "#FFCC99";
                }
                else {
                    node["color"] = "#95BFF8";
                    return node;
                }
                return node;
            });
            previousData.nodes.clear();
            previousData.nodes = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](temgraph));
            this.graphData = previousData;
            this.reinitializeGraph();
            console.log(this.graphData);
        }
    };
    GraphVisualizerComponent.prototype.reinitializeGraph = function () {
        var container = document.getElementById('graphViewer');
        this.network.setData(this.graphData);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GraphVisualizerComponent.prototype, "event", void 0);
    GraphVisualizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph-visualizer',
            template: __webpack_require__(/*! ./graph-visualizer.component.html */ "./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.html"),
            styles: [__webpack_require__(/*! ./graph-visualizer.component.scss */ "./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"]])
    ], GraphVisualizerComponent);
    return GraphVisualizerComponent;
}());



/***/ }),

/***/ "./src/app/modules/core/core-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/core/core-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/core/core.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/modules/core/core-routing.module.ts");
/* harmony import */ var _components_graph_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/graph-visualizer/graph-visualizer.component */ "./src/app/modules/core/components/graph-visualizer/graph-visualizer.component.ts");
/* harmony import */ var _services_interceptors_core_interceptor_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/interceptors/core-interceptor/core.service */ "./src/app/modules/core/services/interceptors/core-interceptor/core.service.ts");
/* harmony import */ var _redux_services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/services/core-filter-service/core-filter.service */ "./src/app/modules/redux/services/core-filter-service/core-filter.service.ts");






// interceptors


var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_graph_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_5__["GraphVisualizerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_4__["CoreRoutingModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_interceptors_core_interceptor_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"], multi: true },
                _redux_services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_7__["CoreFilterService"]
            ],
            exports: [_components_graph_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_5__["GraphVisualizerComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/core/services/graph-data-service/graph-data.service.ts ***!
  \********************************************************************************/
/*! exports provided: GraphDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphDataService", function() { return GraphDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _public_public_http_public_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/public-http/public-http.service */ "./src/app/modules/core/services/public/public-http/public-http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);







var GraphDataService = /** @class */ (function () {
    function GraphDataService(publicHttp) {
        this.publicHttp = publicHttp;
    }
    GraphDataService.prototype.getInitialData = function () {
        // const url = 'http://localhost:3050/api/initialdata';
        var url = '/api/initialdata';
        return this.publicHttp.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (!!data) {
                return data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
            }
        }));
    };
    GraphDataService.prototype.getSearchData = function (body) {
        // const url = 'http://localhost:3050/api/graph/data';
        var url = '/api/graph/data';
        return this.publicHttp.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (!!data) {
                return data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
            }
        }));
    };
    // getNodeLabelData(): Observable<any> {
    //   // const url = 'http://localhost:3050/api/graph/labeldata';
    //   const url = '/api/graph/labeldata';
    //   return this.publicHttp.get(url).pipe(map(data => {
    //     if (!!data) {
    //       return data;
    //     } else {
    //       return of({});
    //     }
    //   }));
    // }
    GraphDataService.prototype.getInitialDataV2 = function () {
        // const url = 'http://localhost:3050/api/initialdatav2';
        var url = '/api/initialdatav2';
        return this.publicHttp.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (!!data) {
                return data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
            }
        }));
    };
    GraphDataService.prototype.getInitialDataV3 = function () {
        // const url = 'http://localhost:3050/api/initialdatav3';
        var url = '/api/initialdatav3';
        return this.publicHttp.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (!!data) {
                return data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
            }
        }));
    };
    GraphDataService.prototype.getSearchDataV2 = function (body) {
        // const url = 'http://localhost:3050/api/graph/datav2';
        var url = '/api/graph/datav2';
        return this.publicHttp.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (!!data) {
                return data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
            }
        }));
    };
    GraphDataService.prototype.createNewNode = function (nodeData) {
        var url = '/api/graph/node/create';
        // tslint:disable-next-line: max-line-length
        if (nodeData.hasOwnProperty('id') && nodeData.hasOwnProperty('type') && nodeData.hasOwnProperty('properties') && nodeData.properties.hasOwnProperty('Name')) {
            // initial conditions are okay, now send the creation request
            return this.publicHttp.post(url, nodeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (!!data) {
                    return data;
                }
                else {
                    return { response: 'empty' };
                }
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Invalid data provided');
        }
    };
    GraphDataService.prototype.updateNode = function (nodeData) {
        var url = '/api/graph/node/update';
        // tslint:disable-next-line: max-line-length
        if (nodeData.hasOwnProperty('id') && nodeData.hasOwnProperty('type') && nodeData.hasOwnProperty('properties') && nodeData.properties.hasOwnProperty('Name')) {
            // initial conditions are okay, now send the creation request
            return this.publicHttp.post(url, nodeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (!!data) {
                    return data;
                }
                else {
                    return { response: 'empty' };
                }
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Invalid data provided');
        }
    };
    GraphDataService.prototype.updateRelation = function (relationData) {
        var url = '/api/graph/relation/update';
        if (relationData.hasOwnProperty('id') && relationData.hasOwnProperty('type')) {
            return this.publicHttp.post(url, relationData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (!!data) {
                    return data;
                }
                else {
                    return { response: 'empty' };
                }
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Incomplete data provided');
        }
    };
    GraphDataService.prototype.createNewRelation = function (relationData) {
        var url = '/api/graph/relation/create';
        if (relationData.hasOwnProperty('type') && relationData.hasOwnProperty('to') && relationData.hasOwnProperty('from')) {
            // data is okay now prepare to send
            return this.publicHttp.post(url, relationData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (!!data) {
                    return data;
                }
                else {
                    return { response: 'empty' };
                }
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Invalid data provided');
        }
    };
    GraphDataService.prototype.getGraphRelations = function () {
        var url = '/api/graph/relations';
        return this.publicHttp.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    GraphDataService.prototype.getNodeNames = function () {
        return this.getInitialDataV2().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var nodeNames = [];
            if (data.hasOwnProperty('seperateNodes')) {
                var newData = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](data['seperateNodes']);
                newData.forEach(function (element) {
                    nodeNames.push(element['label']);
                    return element['label'];
                });
            }
            return nodeNames;
        }));
    };
    GraphDataService.prototype.deleteNode = function (nodeData) {
        var url = '/api/graph/node/delete';
        if (nodeData.hasOwnProperty('id') && nodeData.hasOwnProperty('relations')) {
            // data is okay now prepare to send
            return this.publicHttp.post(url, nodeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (!!data) {
                    return data;
                }
                else {
                    return { response: 'empty' };
                }
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Invalid data provided');
        }
    };
    GraphDataService.prototype.deleteRelation = function (relationIDData) {
        var url = '/api/graph/relation/delete';
        if (relationIDData.hasOwnProperty('id')) {
            // data is okay now prepare to send
            return this.publicHttp.post(url, relationIDData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (!!data) {
                    return data;
                }
                else {
                    return { response: 'empty' };
                }
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Invalid data provided');
        }
    };
    GraphDataService.prototype.getGraphProperties = function () {
        var url = '/api/graph/properties';
        return this.publicHttp.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (!!data) {
                return data;
            }
            else {
                return { response: 'empty' };
            }
        }, function (err) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: 'Error while reading graph properties' });
            console.error(err);
        }));
    };
    GraphDataService.prototype.restoreData = function (restoreData) {
        if (restoreData.constructor === Object && restoreData.hasOwnProperty('nodes') || restoreData.hasOwnProperty('relations')) {
            // check for datatypes of nodes and relations
            if (!Array.isArray(restoreData['nodes']) || !Array.isArray(restoreData['relations'])) {
                console.error('Either nodes or relations key in not an Array in restoreData');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ err: 'restoreData is incompatible' });
            }
            else {
                // data is okay, send it to the server
                var url = '/api/graph/data/restore';
                var requestBody = {
                    nodes: restoreData['nodes'],
                    relations: restoreData['relations']
                };
                // send it
                return this.publicHttp.post(url, requestBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                    if (!!data) {
                        return data;
                    }
                    else {
                        return { response: 'empty' };
                    }
                }));
            }
        }
        else {
            console.error('Invalid restorData object from client');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ err: 'restoreData is invalid' });
        }
    };
    GraphDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_public_public_http_public_http_service__WEBPACK_IMPORTED_MODULE_4__["PublicHttpService"]])
    ], GraphDataService);
    return GraphDataService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/graph-export-service/graph-export.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/core/services/graph-export-service/graph-export.service.ts ***!
  \************************************************************************************/
/*! exports provided: GraphExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphExportService", function() { return GraphExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _public_public_http_public_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/public-http/public-http.service */ "./src/app/modules/core/services/public/public-http/public-http.service.ts");





var GraphExportService = /** @class */ (function () {
    function GraphExportService(publicHttp) {
        this.publicHttp = publicHttp;
    }
    GraphExportService.prototype.getExportFormat = function (format) {
        var _this = this;
        /**
         * The main purpose of this function is to get the export data in the specified format
         * Currently supports only csv and excel formats
         */
        if (format) {
            var url = "/file/graph/export/" + format;
            try {
                return this.publicHttp.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                    if (!!data) {
                        var convertedData = _this.convertFileDataToBlob(data);
                        return convertedData;
                    }
                    else {
                        console.warn('did not recieve any data when retrieving export');
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
                    }
                }));
            }
            catch (e) {
                var convertedData = this.convertFileDataToBlob(e['text']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(convertedData);
            }
        }
    };
    // utility function to convert raw data into blob
    GraphExportService.prototype.convertFileDataToBlob = function (rawData) {
        try {
            var data = rawData['data'];
            var blob = new Blob([data], { type: 'data:application/vnd.ms-excel' });
            var downloadUrl = URL.createObjectURL(blob);
            var fileName = "networks.csv";
            return { data: blob, url: downloadUrl, fileName: fileName };
        }
        catch (err) {
            // handle any error occured during blob creation
            console.error('An error occured while creating a blob for xport functionality');
            return { data: null, url: null, fileName: null };
        }
    };
    GraphExportService.prototype.initiateDownload = function (elementType, data) {
        if (data === void 0) { data = {}; }
        if (!!elementType) {
            var element = document.createElement(elementType);
            element.href = data['url'];
            element.download = "" + data['fileName'];
            return element;
        }
        else {
            return null;
        }
    };
    GraphExportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_public_public_http_public_http_service__WEBPACK_IMPORTED_MODULE_4__["PublicHttpService"]])
    ], GraphExportService);
    return GraphExportService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/interceptors/core-interceptor/core.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/core/services/interceptors/core-interceptor/core.service.ts ***!
  \*************************************************************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_graph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared-graph.service */ "./src/app/modules/core/services/shared-graph.service.ts");


// import sharedService so that we can access the toggle response

var CoreService = /** @class */ (function () {
    function CoreService(sharedService) {
        var _this = this;
        this.sharedService = sharedService;
        this.showDeletedData = false;
        this.sharedService.showDeletedData.subscribe(function (toggle) {
            _this.setDeletedDataToggle(toggle);
        }, function (error) {
            console.warn('An error occured while subscribing to the toggle event in core interceptor', error);
        });
    }
    CoreService.prototype.intercept = function (req, next) {
        // update the body with an added parameter to fetch deleted data or not
        console.log('setting show deleted for req ---> ', req.url + ' to ' + this.showDeletedData);
        if (req.method === 'POST') {
            var request = req.clone({ body: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, req.body, { showDeleted: this.showDeletedData }) });
            return next.handle(request);
        }
        else if (req.method === 'GET' && req.url.split('/').indexOf('config') <= 0) {
            var request = req.clone({ url: req.url + ("?deleted=" + this.showDeletedData) });
            console.log('new get request created is ', request);
            return next.handle(request);
        }
        return next.handle(req);
    };
    // handler to set deleted toggler
    CoreService.prototype.setDeletedDataToggle = function (toggle) {
        if (toggle !== null && (toggle.toString() === 'true' || toggle.toString() === 'false')) {
            // if the toggle variable is  only true and false and nothing else
            this.showDeletedData = toggle;
            // console.log('recieved toggle in core interceptor', toggle);
        }
        else {
            // set to false by default
            this.showDeletedData = false;
        }
    };
    CoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_graph_service__WEBPACK_IMPORTED_MODULE_2__["SharedGraphService"]])
    ], CoreService);
    return CoreService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/public/public-http/public-http.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/core/services/public/public-http/public-http.service.ts ***!
  \*********************************************************************************/
/*! exports provided: PublicHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicHttpService", function() { return PublicHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var PublicHttpService = /** @class */ (function () {
    function PublicHttpService(http) {
        this.http = http;
    }
    PublicHttpService.prototype.get = function (url, httpOptions) {
        if (httpOptions === void 0) { httpOptions = {}; }
        var requestUrl = !!url ? url : null;
        // if(httpOptions.hasOwnProperty('user-token') && httpOptions.hasOwnProperty('contentType')){
        if (_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]) {
            httpOptions = {
                'Access-Control-Allow-Origin': httpOptions['Access-Control-Allow-Origin']
            };
        }
        if (!!requestUrl) {
            return this.http.get(requestUrl, httpOptions);
        }
        else {
            console.error('No url provided for get request');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('No url provided');
        }
    };
    PublicHttpService.prototype.post = function (url, body) {
        var requestUrl = !!url ? url : null;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        if (!!requestUrl) {
            return this.http.post(requestUrl, body, httpOptions);
        }
        else {
            console.error('No url provided for post request');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('No url provided');
        }
    };
    PublicHttpService.prototype.patch = function () {
        // no implementation yet
    };
    PublicHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PublicHttpService);
    return PublicHttpService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/shared-graph.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/core/services/shared-graph.service.ts ***!
  \***************************************************************/
/*! exports provided: SharedGraphService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedGraphService", function() { return SharedGraphService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SharedGraphService = /** @class */ (function () {
    function SharedGraphService() {
        this.nodeDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.connectedNodeDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.getNodeByIDs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.showDeletedData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.totalNodesProperties = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.totalRelationsProperties = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.processedData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.nodeTypes2 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.restoreConnectedNodesData = false;
        this.relationTypeOptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.relationsData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    SharedGraphService.prototype.setGraphData = function (graphdata) {
        this.graphData = graphdata;
    };
    SharedGraphService.prototype.getGraphData = function () {
        return this.graphData;
    };
    SharedGraphService.prototype.getNodeDetails = function (nodeIDs, forRestore) {
        if (forRestore === void 0) { forRestore = false; }
        this.restoreConnectedNodesData = forRestore ? true : false;
        this.getNodeByIDs.next(nodeIDs);
    };
    SharedGraphService.prototype.sendNodeDetails = function (nodeDetailsArray) {
        if (this.restoreConnectedNodesData) {
            this.connectedNodeDetails.next(nodeDetailsArray);
        }
        else {
            this.nodeDetails.next(nodeDetailsArray);
        }
        this.restoreConnectedNodesData = false;
    };
    // function to send the deleted toggle info whenever needed
    SharedGraphService.prototype.sendToogleStatus = function (status) {
        console.log('sending new status for toggle ', status);
        this.showDeletedData.next(status);
    };
    // to set node and relation properties
    SharedGraphService.prototype.setNodeProperties = function (nodeProperties) {
        this.totalNodesProperties.next(nodeProperties);
    };
    SharedGraphService.prototype.setRelationProperties = function (relProperties) {
        this.totalRelationsProperties.next(relProperties);
    };
    // to set processedData and nodeTypes2
    SharedGraphService.prototype.setProcessedData = function (proData) {
        this.processedData.next(proData);
    };
    SharedGraphService.prototype.setNodeTypes2 = function (nodeTypes) {
        this.nodeTypes2.next(nodeTypes);
    };
    // set relationTypeOptions and relationsData
    SharedGraphService.prototype.setRelationTypeOptions = function (relTypeOptions) {
        this.relationTypeOptions.next(relTypeOptions);
    };
    SharedGraphService.prototype.setRelationsData = function (relData) {
        this.relationsData.next(relData);
    };
    SharedGraphService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedGraphService);
    return SharedGraphService;
}());



/***/ }),

/***/ "./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  snackbar works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3VzdG9tLW1hdGVyaWFsL2NvbXBvbmVudHMvc25hY2tiYXIvc25hY2tiYXIvc25hY2tiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent() {
    }
    SnackbarComponent.prototype.ngOnInit = function () {
    };
    SnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(/*! ./snackbar.component.html */ "./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.scss */ "./src/app/modules/custom-material/components/snackbar/snackbar/snackbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/custom-material/custom-material/custom-material.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/custom-material/custom-material/custom-material.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_material_core_material_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/material-core/material.service */ "./src/app/modules/custom-material/services/material-core/material.service.ts");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/config/config.service */ "./src/app/modules/custom-material/services/config/config.service.ts");









var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            providers: [_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_7__["MaterialService"], _services_config_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"]
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/modules/custom-material/services/config/config.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/custom-material/services/config/config.service.ts ***!
  \***************************************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ConfigService = /** @class */ (function () {
    function ConfigService(localService) {
        this.localService = localService;
        this.configObj = {};
        this.DEFAULT_MATERIAL_CONFIG_FILENAME = 'material.json';
        this.DEFAULT_MATERIAL_CONFIG_URL = '/config/get';
        this.getRemoteConfig();
    }
    ConfigService.prototype.getRemoteConfig = function () {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('fileName', this.DEFAULT_MATERIAL_CONFIG_FILENAME);
        return this.localService.get(this.DEFAULT_MATERIAL_CONFIG_URL, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
            if (config.constructor === Object) {
                _this.configObj = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](config);
                return true;
            }
            else {
                console.log('did not recieve proper format of config in config-service');
                return false;
            }
        }));
    };
    ConfigService.prototype.getConfig = function (configName) {
        var _this = this;
        if (configName === void 0) { configName = null; }
        console.log('called getConfig');
        // read the config name
        if (!!configName) {
            if (!Object.keys(this.configObj).length) {
                return this.getRemoteConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
                    if (!!config) {
                        console.log('config name updated to  ', _this.configObj);
                        return _this.configObj[configName];
                    }
                    else {
                        return null;
                    }
                }));
            }
            else {
                console.log('already have config variable, using it', this.configObj);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.configObj[configName]);
            }
        }
        else {
            console.warn("Unable to load config " + configName + " inside Custom Material Module, returning empty");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/modules/custom-material/services/material-core/material.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/custom-material/services/material-core/material.service.ts ***!
  \************************************************************************************/
/*! exports provided: MaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialService", function() { return MaterialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config/config.service */ "./src/app/modules/custom-material/services/config/config.service.ts");




var MaterialService = /** @class */ (function () {
    function MaterialService(sb, configSrvc) {
        var _this = this;
        this.sb = sb;
        this.configSrvc = configSrvc;
        this.DEAFAULT_SNACKBAR_CONFIG = null;
        this.snackBar = {
            notify: this.notify
        };
        this.configSrvc.getConfig('DEFAULT_SNACKBAR_CONFIG').subscribe(function (newConfig) {
            _this.DEAFAULT_SNACKBAR_CONFIG = newConfig;
        }, function (err) {
            console.log('error while reading new config in material', err);
        });
    }
    MaterialService.prototype.notify = function (notificationObj) {
        var processedData = this.processNotificationObject(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, notificationObj, { default_class: 'bg-black' }));
        this.sb.open(processedData['message'], processedData['action'], processedData['config']);
    };
    MaterialService.prototype.success = function (notificationObj) {
        var processedData = this.processNotificationObject(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, notificationObj, { default_class: 'bg-success' }));
        this.sb.open(processedData['message'], processedData['action'], processedData['config']);
    };
    MaterialService.prototype.error = function (notificationObj) {
        var processedData = this.processNotificationObject(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, notificationObj, { default_class: 'bg-error' }));
        this.sb.open(processedData['message'], processedData['action'], processedData['config']);
    };
    MaterialService.prototype.warn = function (notificationObj) {
        var processedData = this.processNotificationObject(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, notificationObj, { default_class: 'bg-warn', horizontalPosition: 'right' }));
        this.sb.open(processedData['message'], processedData['action'], processedData['config']);
    };
    MaterialService.prototype.processNotificationObject = function (JSONObj) {
        var processedObj = {};
        processedObj['message'] = (JSONObj.hasOwnProperty('message') && JSONObj['message'].length) ? JSONObj['message'] : this.DEAFAULT_SNACKBAR_CONFIG['default_text'];
        processedObj['action'] = (JSONObj.hasOwnProperty('action') && JSONObj['action'].length) ? JSONObj['action'] : this.DEAFAULT_SNACKBAR_CONFIG['default_action'];
        processedObj['config'] = {};
        processedObj['config']['duration'] = JSONObj.hasOwnProperty('duration') ? JSONObj['duration'] : this.DEAFAULT_SNACKBAR_CONFIG['duration'];
        processedObj['config']['verticalPosition'] = (JSONObj.hasOwnProperty('position') && JSONObj['position'].length) ? JSONObj['position'] : this.DEAFAULT_SNACKBAR_CONFIG['verticalPosition'];
        processedObj['config']['panelClass'] = (JSONObj.hasOwnProperty('default_class') && JSONObj['default_class'].length) ? JSONObj['default_class'] : this.DEAFAULT_SNACKBAR_CONFIG['default_class'];
        processedObj['config']['direction'] = JSONObj.hasOwnProperty('direction') ? JSONObj['direction'] : this.DEAFAULT_SNACKBAR_CONFIG['default_direction'];
        return processedObj;
    };
    MaterialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], MaterialService);
    return MaterialService;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"panel\">\n        <p class=\"panelTitle\">Legend</p>\n        <div class=\"panelbody\" *ngIf=\"showDropDown\">\n            <ul class=\"panelList\" type=\"none\">\n                <ng-container *ngFor=\"let item of colorData\">\n                    <li class=\"item\" [ngStyle]=\"{color: item.color}\"><span class=\"circle\" [ngStyle]=\"{background: item.color}\"></span>{{item?.name}}</li>\n                </ng-container>\n            </ul>\n        </div>\n        <div class=\"dropDown\" (click)=\"toggleDropdown()\">\n            <i class=\"fas fa-chevron-up\" *ngIf=\"showDropDown\"></i>\n            <i class=\"fas fa-chevron-down\" *ngIf=\"!showDropDown\"></i>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: transparent;\n  position: absolute;\n  right: 0;\n  padding-right: 20px;\n  padding-top: 20px;\n  z-index: 5; }\n\n.panel {\n  background-color: white;\n  border-radius: 10px;\n  width: 150px;\n  margin: auto;\n  margin-right: 0; }\n\n.panelTitle,\n.panelbody {\n  padding: 10px 5px;\n  max-height: 65vh;\n  overflow-y: auto; }\n\n.panelbody::-webkit-scrollbar {\n  width: 2px; }\n\n.panelTitle {\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: center; }\n\n.panelList {\n  padding-left: 14px; }\n\n.item {\n  word-wrap: break;\n  line-height: 2; }\n\n.circle {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%;\n  margin-right: 8px; }\n\n.dropDown {\n  cursor: pointer; }\n\n.dropDown i {\n    display: block;\n    text-align: center;\n    font-size: 20px;\n    padding-bottom: 8px; }\n\n.display-ok {\n  display: block; }\n\n.no-display {\n  display: none; }\n\n.bg-red {\n  background-color: red !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9jb2xvci1wYW5lbC9jb2xvci1wYW5lbC9jb2xvci1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHbkI7O0VBRUksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFHUSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUIsRUFBQTs7QUFJM0I7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9jb2xvci1wYW5lbC9jb2xvci1wYW5lbC9jb2xvci1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB6LWluZGV4OiA1O1xufVxuXG4ucGFuZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5wYW5lbFRpdGxlLFxuLnBhbmVsYm9keSB7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgbWF4LWhlaWdodDogNjV2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucGFuZWxib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDJweDtcbn1cblxuLnBhbmVsVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhbmVsTGlzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xufVxuXG4uaXRlbSB7XG4gICAgd29yZC13cmFwOiBicmVhaztcbiAgICBsaW5lLWhlaWdodDogMjtcbn1cblxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5kcm9wRG93biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgfVxufVxuXG4uZGlzcGxheS1vayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uby1kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYmctcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ColorPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPanelComponent", function() { return ColorPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/colorService/color-service.service */ "./src/app/modules/dashboard-v2/services/colorService/color-service.service.ts");
/* harmony import */ var _core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/services/shared-graph.service */ "./src/app/modules/core/services/shared-graph.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var ColorPanelComponent = /** @class */ (function () {
    function ColorPanelComponent(colorSrvc, sharedGraphSrvc) {
        this.colorSrvc = colorSrvc;
        this.sharedGraphSrvc = sharedGraphSrvc;
        this.colorObject = undefined;
        this.showDeletedData = false;
        this.objectKeys = [];
        this.colorData = [];
        this.showDropDown = true;
    }
    ColorPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get color panel details
        this.colorSrvc.colorObj$.subscribe(function (data) {
            _this.colorObject = data;
            // console.log('color object is ', this.colorObject);
            _this.objectKeys = Object.keys(_this.colorObject['defaultColor']);
            _this.processColors(_this.objectKeys, _this.colorObject['defaultColor']);
            // console.log('processed color data is ', this.colorData);
        });
        // to monitor toggle status
        this.sharedGraphSrvc.showDeletedData.subscribe(function (toggle) {
            // console.log('recieved toggle', toggle);
            if (toggle !== null && (toggle.toString() === 'true' || toggle.toString() === 'false')) {
                // if the toggle variable is  only true and false and nothing else
                _this.showDeletedData = toggle;
            }
            else {
                // set to false by default
                _this.showDeletedData = false;
            }
            _this.addDeleteColor();
        });
    };
    ColorPanelComponent.prototype.processColors = function (keyArray, colorObj) {
        var _this = this;
        this.colorData = [];
        if (!!keyArray.length || !!Object.keys(colorObj).length) {
            // both have the data , kindly process
            keyArray.map(function (key) {
                // for each key create a new object which has item name and item color
                _this.colorData.push({ name: key, color: colorObj[key] });
            });
        }
        else {
            console.log('empty key Array or colorObj in color panel');
            return [];
        }
    };
    ColorPanelComponent.prototype.addDeleteColor = function () {
        // add new color for deleted node
        if (this.showDeletedData) {
            if (lodash__WEBPACK_IMPORTED_MODULE_4__["some"](this.colorData, { name: "Deleted", color: "#C0C0C0" })) {
            }
            else {
                this.colorData.push({ name: "Deleted", color: "#C0C0C0" });
            }
        }
        else {
            lodash__WEBPACK_IMPORTED_MODULE_4__["remove"](this.colorData, { name: "Deleted", color: "#C0C0C0" });
        }
    };
    ColorPanelComponent.prototype.toggleDropdown = function () {
        this.showDropDown = !this.showDropDown;
    };
    ColorPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-panel',
            template: __webpack_require__(/*! ./color-panel.component.html */ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.html"),
            styles: [__webpack_require__(/*! ./color-panel.component.scss */ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_2__["ColorServiceService"],
            _core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_3__["SharedGraphService"]])
    ], ColorPanelComponent);
    return ColorPanelComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pr-0\">\n    <!-- <div class=\"btn-group nodes\">\n        <button type=\"button\" (click)=\"createNode()\" data-toggle=\"modal\" data-target=\"#createNodeModal\" class=\"circularBtn\" aria-expanded=\"false\">\n      <img src=\"./../../../../../assets/create_nodes.svg\">\n    </button>\n    </div> -->\n    <div class=\"btn-group relationships\">\n        <button type=\"button\" (click)=\"createRelation()\" data-toggle=\"modal\" data-target=\"#createRelationModal\" class=\"circularBtn\" aria-expanded=\"false\">\n            <img src=\"./../../../../../assets/create_relations.svg\">\n    </button>\n    </div>\n    <!-- <div class=\"btn-group algorithms\">\n        <algo-runner-toolbar></algo-runner-toolbar>\n    </div> -->\n</div>\n<!--modal template to show when node is to be created-->\n<div class=\"modal fade\" id=\"createNodeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"NodeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"NodeModalLabel\" *ngIf=\"popupConfig.createNodePopup === true\">Create Element</h5>\n                <h5 class=\"modal-title\" id=\"NodeModalLabel\" *ngIf=\"popupConfig.editNodePopup === true\">Element Details</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"modalItem\">\n                    <p class=\"sectionName\">\n                        {{TYPE_TEXT}}\n                    </p>\n                    <span class=\"inputSpan\">\n                        <ng-container *ngIf=\"selectedType !== ADD_NEW_LABEL\">\n                                <sui-select class=\"selection\"\n                                [(ngModel)]=\"selectedType\"\n                                (ngModelChange)=\"updateProperties($event)\"\n                                [options]=\"typeOptions\"\n                                [isSearchable]=\"true\"\n                                [isDisabled]=\"disabledBox\"\n                                #select>\n                        <sui-select-option *ngFor=\"let option of select.filteredOptions\"\n                                           [value]=\"option\">\n                        </sui-select-option>\n                                  </sui-select>\n                        </ng-container>\n                        <ng-container *ngIf=\"selectedType === ADD_NEW_LABEL\">\n                            <div class=\"ui input typeTextBox\">\n                                    <span>\n                                            <app-color-picker [elWidth]=\"'50px'\" [elDefault]=\"'#96C1FA'\"\n                                        (selectedColorCode)=\"selectedColorForNewType($event)\"\n                                        ></app-color-picker>\n                                        </span>\n                    <input type=\"text\" placeholder=\"Enter Type...\" id=\"id_newLabelNode\">\n                </div>\n\n                </ng-container>\n                </span>\n            </div>\n            <div class=\"modalItem\" *ngIf=\"labelProperties?.length > 0 && selectedType?.length > 0\">\n                <h5 class=\"propertyLabel\">\n                    Properties <span class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"toolTipText\"></span>\n                </h5>\n                <!--container to display pre exisiting properties-->\n                <ng-container *ngFor=\"let data of labelProperties\">\n                    <div class=\"modalItem\">\n                        <p class=\"sectionName\">{{data}}</p>\n                        <span class=\"inputSpan\">\n                                <ng-container *ngIf = \"data === 'Name'\">\n                                    <div class=\"ui corner labeled input normalTextBox\">\n                                        <input type=\"text\" placeholder=\"Enter Name...\" id=\"id_{{data}}\" [(ngModel)] = \"selectedPropertiesObject[data]\" (ngModelChange)=\"updateSelectedOption($event, data)\" [disabled]=\"restoreOptions === true\">\n                                        <div class=\"ui corner label\">\n                                            <i class=\"asterisk icon\"></i>\n                                        </div>\n                                    </div>\n                                </ng-container>\n                                <ng-container *ngIf=\"data !== 'Name'\">\n                                    <sui-select class=\"selection\" *ngIf=\"!availablePropertyList[data]?.enableNewProperty\"\n                                    [options]=\"availablePropertyList[data]['list']\" [(ngModel)]=\"selectedPropertiesObject[data]\"\n                                    (ngModelChange)=\"updateSelectedOption($event, data)\" [isSearchable]=\"true\"\n                                    [isDisabled]=\"restoreOptions\" #Propertyselect>\n                                        <sui-select-option *ngFor=\"let option of Propertyselect.filteredOptions\" [value]=\"option\"></sui-select-option>\n                                    </sui-select>\n                                    <div class=\"ui corner labeled input normalTextBox\" *ngIf=\"availablePropertyList[data]?.enableNewProperty\">\n                                        <input type=\"text\" placeholder=\"Enter New Property...\" id=\"id_{{data}}\" [(ngModel)]=\"selectedPropertiesObject[data]\" (ngModelChange)=\"updateSelectedOption($event, data)\" (keyup)=\"updateNewPropertyValue($event,data)\">\n                                        <div class=\"ui corner label\">\n                                            <i class=\"asterisk icon\"></i>\n                                        </div>\n                                    </div>\n                                </ng-container>\n                            </span>\n                        <span class=\"supportIcons\" *ngIf=\"(data?.length > 0) && data !== 'Name' && !availablePropertyList[data]?.enableNewProperty && !restoreOptions\" (click)=\"deleteProperty(data)\"><i class=\"far fa-trash-alt\"></i></span>\n                        <span class=\"supportIcons\" *ngIf=\"(data?.length > 0) && data !== 'Name' && availablePropertyList[data]?.enableNewProperty && !restoreOptions\" (click)=\"availablePropertyList[data].enableNewProperty = false\"><i class=\"far fa-times-circle\" style=\"color: red;\"></i></span>\n                        <span class=\"supportIcons nameKey\" *ngIf=\"(data?.length > 0) && data === 'Name' && !restoreOptions\"> \n                                <i class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"right\" [title]=\"'Name is mandatory and cannot be deleted'\"></i>\n                            </span>\n                    </div>\n                </ng-container>\n                <!--container to display pre exisiting properties end-->\n\n                <!--Template to add a new property-->\n\n                <ng-container *ngIf=\"enableNewTemplate\">\n                    <form id=\"NewPropertyGroup\">\n                        <div class=\"modalItem\">\n                            <div class=\"ui divider\"></div>\n                            <p class=\"sectionName\">Property Name</p>\n                            <span class=\"inputSpan newTemplate\">\n                                    <div class=\"ui input focus\">\n                                        <input type=\"text\" placeholder=\"Property Value\" id=\"propertyKey\">\n                                    </div>\n                                </span>\n                            <span class=\"supportIcons customDelete\" (click)=\"enableNewTemplate = false\"><i class=\"far fa-trash-alt\"></i></span>\n                            <br>\n                            <div class=\"ui divider\"></div>\n                        </div>\n                    </form>\n                </ng-container>\n                <!--Template to add a new property ends-->\n            </div>\n            <a class=\"newLink\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_LABEL && !enableNewTemplate && !restoreOptions\" (click)=\"addNewProperty('node')\">Add New Property</a>\n            <a class=\"newLink\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_LABEL && enableNewTemplate && !restoreOptions\" (click)=\"saveNewProperty('node')\">Save Property</a>\n        </div>\n        <div class=\"modal-footer\" *ngIf=\"selectedType !== ADD_NEW_LABEL\">\n            <button type=\"button\" class=\"btn btn-danger deleteBtn\" *ngIf=\"popupConfig.editNodePopup === true && !restoreOptions\" style=\"color: white;\" (click)=\"activateDelete('deleteModal', 'node')\">Delete</button>\n            <a class=\"mailBtn\" *ngIf=\"popupConfig.editNodePopup === true\">Send Mail</a>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"color: red;\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitModal()\" *ngIf=\"popupConfig.createNodePopup === true && !restoreOptions\" [disabled]=\"(selectedType?.length <= 0) || (!selectedPropertiesObject['Name'])\">Create</button>\n            <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitModal('edit')\" *ngIf=\"popupConfig.editNodePopup === true && !restoreOptions\" [disabled]=\"(selectedType?.length <= 0) || (!selectedPropertiesObject['Name'])\" id=\"edit_btn\">Update</button>\n            <button type=\"button\" id=\"restoreBtn\" class=\"btn btn-info restoreBtn\" *ngIf=\"(popupConfig.editNodePopup === true || editNodePopup === true) && restoreOptions\" style=\"color: white;\" (click)=\"restoreData('node')\">Restore </button>\n        </div>\n        <div class=\"modal-footer\" *ngIf=\"selectedType === ADD_NEW_LABEL\">\n            <button type=\"button\" class=\"btn btn-primary create\" id=\"edit_btn\" (click)=\"addNewLabel('node')\">Add Label</button>\n        </div>\n    </div>\n</div>\n</div>\n<!--modal node create end-->\n\n\n<!--modal relationship start-->\n<div class=\"modal fade\" id=\"createRelationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"RelModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"RelModalLabel\" *ngIf=\"createRelationPopup == true\">Create Relationship</h5>\n                <h5 class=\"modal-title\" id=\"RelModalLabel\" *ngIf=\"editRelationPopup == true\">Relationship Details</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"modalItem\">\n                    <!-- <p class=\"sectionName\">\n                        {{TYPE_TEXT}}\n                    </p> -->\n                    <!-- <span class=\"inputSpan\">\n                        <ng-container *ngIf=\"selectedType !== ADD_NEW_TYPE\">\n                                <sui-select class=\"selection\"\n                                [(ngModel)]=\"selectedType\"\n                                (ngModelChange)=\"updateRelProperties($event)\"\n                                [options]=\"relationTypeOptions\"\n                                [isSearchable]=\"true\"\n                                [isDisabled]=\"disabledBox\"\n                                #selectRelationBox>\n                        <sui-select-option *ngFor=\"let option of selectRelationBox.filteredOptions\"\n                                           [value]=\"option\">\n                        </sui-select-option>\n                    </sui-select>\n                        </ng-container> -->\n                        <!-- <ng-container *ngIf=\"selectedType === ADD_NEW_TYPE\">\n                            <div class=\"ui input typeTextBox\"><input type=\"text\" placeholder=\"Enter Type...\" id=\"id_newLabelRelation\"></div>\n                    </ng-container> -->\n                    <!-- </span> -->\n                </div>\n                <!-- <div class=\"modalItem\">\n                    <h5 class=\"propertyLabel\">\n                        Properties <span class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"toolTipText\"></span>\n                    </h5> -->\n\n\n                    <!-- <ng-container *ngFor=\"let data of typeProperties\">\n                        <div class=\"modalItem\">\n                            <p class=\"sectionName\">{{data}}</p>\n                            <span class=\"inputSpan\">\n                                <ng-container *ngIf=\"data !== 'Name'\">\n                                    <sui-select class=\"selection\" *ngIf=\"!availablePropertyList[data]?.enableNewProperty\"\n                                     [options]=\"availablePropertyList[data]['list']\" [(ngModel)]=\"selectedPropertiesObject[data]\"\n                                     (ngModelChange)=\"updateSelectedOption($event, data)\" [isSearchable]=\"true\"\n                                     [isDisabled]=\"restoreOptions\" #PropertyRelselect>\n                                        <sui-select-option *ngFor=\"let option of PropertyRelselect.filteredOptions\" [value]=\"option\"></sui-select-option>\n                                    </sui-select>\n                                    <div class=\"ui corner labeled input normalTextBox\" *ngIf=\"availablePropertyList[data]?.enableNewProperty\">\n                                        <input type=\"text\" placeholder=\"Enter New Property...\" id=\"id_{{data}}\" [(ngModel)]=\"selectedPropertiesObject[data]\" (ngModelChange)=\"updateSelectedOption($event, data)\" (keyup)=\"updateNewPropertyValue($event,data)\">\n                                        <div class=\"ui corner label\">\n                                            <i class=\"asterisk icon\"></i>\n                                        </div>\n                                    </div>\n                                </ng-container> -->\n                                <!-- <input type=\"text\" id=\"id_{{data}}\"> -->\n                            <!-- </span>\n                            <span class=\"supportIcons\" *ngIf=\"(data?.length > 0) && data !== 'Name' && !availablePropertyList[data]?.enableNewProperty && !restoreOptions\" (click)=\"deleteProperty(data, 'relation')\"><i class=\"far fa-trash-alt\"></i></span>\n                            <span class=\"supportIcons\" *ngIf=\"(data?.length > 0) && data !== 'Name' && availablePropertyList[data]?.enableNewProperty && !restoreOptions\" (click)=\"availablePropertyList[data].enableNewProperty = false\"><i class=\"far fa-times-circle\" style=\"color: red;\"></i></span>\n                            <span class=\"supportIcons nameKey\" *ngIf=\"(data?.length > 0) && data === 'Name' && !restoreOptions\">\n                                <i class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"right\" [title]=\"'Name is mandatory and cannot be deleted'\" ></i>\n                            </span> -->\n                        <!-- </div> -->\n                    <!-- </ng-container> -->\n                <!-- </div> -->\n                <!-- <form id=\"NewPropertyGroupRel\" *ngIf=\"enableNewTemplate\">\n                    <div class=\"modalItem\">\n                        <div class=\"ui divider\"></div>\n                        <p class=\"sectionName\">Property Name</p>\n                        <span class=\"inputSpan newTemplate\">\n                                        <div class=\"ui input focus\">\n                                            <input type=\"text\" placeholder=\"Property Name\" id=\"propertyKeyRel\">\n                                        </div>\n                                    </span>\n                        <span class=\"supportIcons customDelete\" (click)=\"enableNewTemplate = false\"><i class=\"far fa-trash-alt\"></i></span>\n                        <br/>\n                        <div class=\"ui divider lower\"></div>\n                    </div>\n                </form> -->\n\n\n                <!-- <div class=\"modalItem buttonContainer\">\n                    <a class=\"newLink2\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_TYPE && !enableNewTemplate && !restoreOptions\" (click)=\"addNewProperty('relation')\">Add New Property</a>\n                    <a class=\"newLink2\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_TYPE && enableNewTemplate && !restoreOptions\" (click)=\"saveNewProperty('relation')\">Save Property</a>\n                </div> -->\n\n                <div class=\"relationScope\">\n                    <div class=\"modalItem\">\n                        <!-- <h5 class=\"propertyLabel\">\n                            Connection <span class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"toolTipText\"></span>\n                        </h5> -->\n                        <p class=\"sectionName\">From</p>\n                        <span class=\"inputSpan\">\n                            <sui-select class=\"selection\"\n                                [(ngModel)]=\"selectedNodeNameSource\"\n                                (ngModelChange)=\"updateList('to',[selectedNodeNameSource])\"\n                                [optionsLookup]=\"optionLookUp\"\n                                labelField=\"key\"\n                                valueField=\"key\"\n                                [isSearchable]=\"true\"\n                                [isDisabled]=\"disabledFromBox\"\n                                #NodeFromName>\n                                <sui-select-option *ngFor=\"let option of NodeFromName.filteredOptions\"\n                                    [value]=\"option\">\n                                </sui-select-option>\n                            </sui-select>\n                        </span>\n                        <span class=\"inputSpan\" *ngIf=\"disabledFromBox\">\n                            <div class=\"ui corner labeled input normalTextBox\">\n                                <input type=\"text\" [(ngModel)] = \"selectedNodeNameSource\" (ngModelChange)=\"updateSelectedOption($event, data)\" [disabled]=\"restoreOptions || disabledFromBox\">\n                            </div>\n                        </span>\n                    </div>\n                    <div class=\"modalItem\">\n                        <p class=\"sectionName\">To</p>\n                        <span class=\"inputSpan\">\n                            <sui-select class=\"selection\"\n                                [(ngModel)]=\"selectedNodeNameTarget\"\n                                (ngModelChange)=\"updateList('from',[selectedNodeNameTarget])\"\n                                [optionsLookup]=\"optionLookUp2\"\n                                labelField=\"key\"\n                                valueField=\"key\"\n                                [isSearchable]=\"true\"\n                                [isDisabled]=\"disabledToBox\"\n                                #NodeToName>\n                                <sui-select-option *ngFor=\"let option of NodeToName.filteredOptions\"\n                                    [value]=\"option\">\n                                </sui-select-option>\n                            </sui-select> \n                        </span>\n                        <span class=\"inputSpan\" *ngIf=\"disabledToBox\">\n                            <div class=\"ui corner labeled input normalTextBox\">\n                                <input type=\"text\" [(ngModel)] = \"selectedNodeNameTarget\" (ngModelChange)=\"updateSelectedOption($event, data)\" [disabled]=\"restoreOptions || disabledToBox\">\n                            </div>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\" *ngIf=\"selectedType !== ADD_NEW_TYPE\">\n                <button type=\"button\" class=\"btn btn-danger deleteBtn left\" *ngIf=\"(popupConfig.editRelationPopup === true || editRelationPopup === true) && !restoreOptions\" style=\"color: white;\" (click)=\"activateDelete('deleteModal', 'relation')\">Delete</button>\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"color: red;\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitRelModal()\" *ngIf=\"(popupConfig.createRelationPopup === true || createRelationPopup === true) && !restoreOptions\" [disabled]=\"selectedNodeNameTarget?.length <= 0 || selectedNodeNameSource?.length <= 0\">Create</button>\n                <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitRelModal('edit')\" *ngIf=\"(popupConfig.editRelationPopup === true || editRelationPopup === true) && !restoreOptions\" [disabled]=\"selectedType?.length <= 0 || selectedNodeNameTarget?.length <= 0 || selectedNodeNameSource?.length <= 0\"\n                    id=\"edit_btn\">Update</button>\n                <button type=\"button\" id=\"restoreBtn\" class=\"btn btn-info restoreBtn\" *ngIf=\"(popupConfig.editRelationPopup === true || editRelationPopup === true) && restoreOptions\" style=\"color: white;\" (click)=\"restoreData('relation')\">Restore </button>\n\n            </div>\n            <div class=\"modal-footer\" *ngIf=\"selectedType === ADD_NEW_TYPE\">\n                <button type=\"button\" class=\"btn btn-primary create\" id=\"edit_btn\" (click)=\"addNewLabel('relation')\">Add Type</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!--modal relationship end-->\n\n<!-- Delete modal -->\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"deleteModalTitle\">Delete</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n            </div>\n            <div class=\"modal-body\">\n                <b class=\"modal-text\" style=\"font-size: 17px; font-weight:500;\">Are you sure you want to delete this {{deleteContext}} ?</b>\n                <h6 *ngIf=\"deleteContext === 'node'\" style=\"font-size: 14px; padding-top: 15px; font-weight: 400;\">[NOTE] : Deleting a node will also delete the relationships connected with the node. <span style=\"color: red;\">Proceed with caution</span></h6>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn ui-button-text later\" data-dismiss=\"modal\">Maybe Later</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"submitDelete(deleteContext)\" id=\"del_btn\">Delete</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!--Delete modal end-->\n\n<!--create new relationship after node modal-->\n<div class=\"modal fade\" id=\"RelAfterNodeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"RelAfterNode\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"RelAfterNodeModalTitle\">New Relation</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n            </div>\n            <div class=\"modal-body\">\n                <b class=\"modal-text\" style=\"font-size: 17px; font-weight:300;\">Do you wish to create a new relationship with respect to <span style=\"font-weight: 500;\">{{newNodeName}}</span> ?</b>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-target=\"RelAfterNodeModal\" data-dismiss=\"modal\" style=\"color: red;\">Not Now</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"promptRelation()\" id=\"rel_yes_btn\" data-dismiss=\"modal\">Yes</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!--create new relationship after node modal end-->"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid .btn-group {\n  margin-right: 20px; }\n  .container-fluid .btn-group button {\n    border-radius: 50%;\n    background: #e4e4e4;\n    color: #000;\n    box-shadow: 2px 9px 17px -1px #cccccc; }\n  .container-fluid .btn-group button:active {\n    box-shadow: none;\n    transition: 0.5s; }\n  .btn-group:active {\n  outline: none;\n  text-decoration: none; }\n  .createLink,\n.editLink,\n.deleteLink {\n  text-decoration: none;\n  font-size: 12px; }\n  .dropdown-menu .dropdown-item {\n  cursor: pointer; }\n  .dropdown-menu .dropdown-item span {\n    margin-right: 8px; }\n  .dropdown-menu .dropdown-item:active {\n  background-color: white; }\n  .dropdown-menu .create:hover {\n  color: blue; }\n  .dropdown-menu .edit:hover {\n  color: green; }\n  .dropdown-menu .delete:hover {\n  color: red; }\n  /* .modal-header {\n    background: #5f5f5f;\n    color: white;\n    border-color: #5f5f5f;\n    button.close {\n        color: white;\n    }\n} */\n  ::ng-deep .modalItem {\n  padding: 10px; }\n  ::ng-deep .modalItem .fa-info-circle {\n    font-size: 14px;\n    cursor: pointer; }\n  ::ng-deep .modalItem.buttonContainer {\n  position: relative; }\n  ::ng-deep .sectionName {\n  display: inline-block;\n  margin: 0;\n  max-width: 50%; }\n  ::ng-deep .inputSpan {\n  position: absolute;\n  left: 50%; }\n  ::ng-deep .inputSpan input {\n    border: 1px solid #acacac;\n    outline: none; }\n  ::ng-deep .propertyLabel {\n  padding-top: 13px;\n  padding-bottom: 13px;\n  text-align: center; }\n  ::ng-deep .supportIcons {\n  position: absolute;\n  right: 6%;\n  cursor: pointer;\n  cursor: pointer;\n  color: red; }\n  ::ng-deep .supportIcons.customDelete {\n  font-size: 20px; }\n  input#propertyKey {\n  height: 30px; }\n  ::ng-deep .newLink {\n  float: right;\n  padding: 5px 7px; }\n  .newLink2 {\n  position: absolute;\n  right: 0;\n  top: 12px;\n  padding: 5px 7px; }\n  .lower {\n  margin-top: 30px; }\n  .newLink:hover,\n.newLink2:hover {\n  background-color: #5f5f5f;\n  color: white !important;\n  transition: .5s;\n  cursor: pointer;\n  border-radius: 5px; }\n  .newTemplate {\n  max-width: 35% !important; }\n  .newTemplate div {\n    max-width: 100%; }\n  i.fas.fa-info-circle {\n  color: black !important; }\n  input[disabled=\"true\"] {\n  cursor: not-allowed; }\n  button:disabled {\n  cursor: not-allowed;\n  pointer-events: all !important; }\n  .deleteBtn,\n.mailBtn,\n.restoreBtn {\n  cursor: pointer !important; }\n  .later {\n  text-decoration: none;\n  cursor: pointer; }\n  .later:hover {\n  background-color: #5f5f5f;\n  color: white; }\n  .mailBtn,\n.left {\n  margin-right: auto; }\n  .mailBtn {\n  padding: 5px 8px; }\n  .mailBtn:hover {\n  transition: 0.5s;\n  background: #e4e4e4;\n  border-radius: .25rem;\n  color: #000;\n  box-shadow: 2px 9px 17px -1px #cccccc; }\n  .mailBtn:active {\n  box-shadow: none;\n  transition: .5s; }\n  ::ng-deep .newPropertyGroup {\n  width: 100%;\n  display: block;\n  background: #cccccc; }\n  ::ng-deep .normalTextBox {\n  max-width: 14em; }\n  ::ng-deep .typeTextBox {\n  max-width: 20em; }\n  .typeTextBox input {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n  .ui.input.typeTextBox {\n  width: 14em; }\n  #id_newLabelNode {\n  padding-left: 3px; }\n  .circularBtn {\n  font-size: 1.5rem;\n  width: 40px;\n  padding-left: 0px;\n  border-radius: 50%;\n  height: 40px;\n  border: 0;\n  box-shadow: 2px 9px 17px -1px #cccccc; }\n  .circularBtn img {\n    width: 40px; }\n  .circularBtn:active {\n  box-shadow: none;\n  transition: .5s; }\n  .circularBtn:focus {\n  outline: 0; }\n  .algorithms {\n  padding-right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9jcmVhdGUtbm9kZXMvY3JlYXRlLW5vZGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2NyZWF0ZS1ub2Rlcy9jcmVhdGUtbm9kZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTtFQUR0QjtJQUdRLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUdYLHFDQUFvRCxFQUFBO0VBUjVEO0lBV1EsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0VBSXhCO0VBQ0ksYUFBYTtFQUNiLHFCQUFxQixFQUFBO0VBR3pCOzs7RUFHSSxxQkFBcUI7RUFDckIsZUFBZSxFQUFBO0VBR25CO0VBRVEsZUFBZSxFQUFBO0VBRnZCO0lBSVksaUJBQWlCLEVBQUE7RUFKN0I7RUFRUSx1QkFBdUIsRUFBQTtFQVIvQjtFQVdRLFdBQVcsRUFBQTtFQVhuQjtFQWNRLFlBQVksRUFBQTtFQWRwQjtFQWlCUSxVQUFVLEVBQUE7RUFJbEI7Ozs7Ozs7R0NGRztFRFdIO0VBQ0ksYUFBYSxFQUFBO0VBRGpCO0lBR1EsZUFBZTtJQUNmLGVBQWUsRUFBQTtFQUl2QjtFQUNJLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0kscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxjQUFjLEVBQUE7RUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBO0VBRmI7SUFJUSx5QkFBeUI7SUFDekIsYUFBYSxFQUFBO0VBSXJCO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVLEVBQUE7RUFHZDtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksZ0JBQWdCLEVBQUE7RUFHcEI7O0VBRUkseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0kseUJBQXlCLEVBQUE7RUFEN0I7SUFHUSxlQUFlLEVBQUE7RUFJdkI7RUFDSSx1QkFBdUIsRUFBQTtFQUczQjtFQUNJLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBO0VBR2xDOzs7RUFHSSwwQkFBMEIsRUFBQTtFQUc5QjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7RUFHbkI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0VBR2hCOztFQUVJLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gscUNBQXFDLEVBQUE7RUFHekM7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0VBR25CO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLDRCQUE0QjtFQUM1Qix5QkFBeUIsRUFBQTtFQUc3QjtFQUNJLFdBQVcsRUFBQTtFQUdmO0VBQ0ksaUJBQWlCLEVBQUE7RUFHckI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFHVCxxQ0FBb0QsRUFBQTtFQVR4RDtJQVdRLFdBQVcsRUFBQTtFQUluQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7RUFHbkI7RUFDSSxVQUFVLEVBQUE7RUFHZDtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9jcmVhdGUtbm9kZXMvY3JlYXRlLW5vZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCAuYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XG4gICAgfVxuICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIH1cbn1cblxuLmJ0bi1ncm91cDphY3RpdmUge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY3JlYXRlTGluayxcbi5lZGl0TGluayxcbi5kZWxldGVMaW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5jcmVhdGU6aG92ZXIge1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICB9XG4gICAgLmVkaXQ6aG92ZXIge1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgfVxuICAgIC5kZWxldGU6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cbn1cblxuLyogLm1vZGFsLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjNWY1ZjVmO1xuICAgIGJ1dHRvbi5jbG9zZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59ICovXG5cbjo6bmctZGVlcCAubW9kYWxJdGVtIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC5mYS1pbmZvLWNpcmNsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuOjpuZy1kZWVwIC5tb2RhbEl0ZW0uYnV0dG9uQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbjo6bmctZGVlcCAuc2VjdGlvbk5hbWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbjo6bmctZGVlcCAuaW5wdXRTcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIGlucHV0IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FjYWNhYztcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG59XG5cbjo6bmctZGVlcCAucHJvcGVydHlMYWJlbCB7XG4gICAgcGFkZGluZy10b3A6IDEzcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Om5nLWRlZXAgLnN1cHBvcnRJY29ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA2JTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbjo6bmctZGVlcCAuc3VwcG9ydEljb25zLmN1c3RvbURlbGV0ZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pbnB1dCNwcm9wZXJ0eUtleSB7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG46Om5nLWRlZXAgLm5ld0xpbmsge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xufVxuXG4ubmV3TGluazIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEycHg7XG4gICAgcGFkZGluZzogNXB4IDdweDtcbn1cblxuLmxvd2VyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubmV3TGluazpob3Zlcixcbi5uZXdMaW5rMjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWY1ZjtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5ld1RlbXBsYXRlIHtcbiAgICBtYXgtd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xuICAgIGRpdiB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbmkuZmFzLmZhLWluZm8tY2lyY2xlIHtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuaW5wdXRbZGlzYWJsZWQ9XCJ0cnVlXCJdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbCAhaW1wb3J0YW50O1xufVxuXG4uZGVsZXRlQnRuLFxuLm1haWxCdG4sXG4ucmVzdG9yZUJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5sYXRlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhdGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haWxCdG4sXG4ubGVmdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubWFpbEJ0biB7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbn1cblxuLm1haWxCdG46aG92ZXIge1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggI2NjY2NjYztcbn1cblxuLm1haWxCdG46YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHRyYW5zaXRpb246IC41cztcbn1cblxuOjpuZy1kZWVwIC5uZXdQcm9wZXJ0eUdyb3VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xufVxuXG46Om5nLWRlZXAgLm5vcm1hbFRleHRCb3gge1xuICAgIG1heC13aWR0aDogMTRlbTtcbn1cblxuOjpuZy1kZWVwIC50eXBlVGV4dEJveCB7XG4gICAgbWF4LXdpZHRoOiAyMGVtO1xufVxuXG4udHlwZVRleHRCb3ggaW5wdXQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbn1cblxuLnVpLmlucHV0LnR5cGVUZXh0Qm94IHtcbiAgICB3aWR0aDogMTRlbTtcbn1cblxuI2lkX25ld0xhYmVsTm9kZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG5cbi5jaXJjdWxhckJ0biB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcbiAgICBib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cbn1cblxuLmNpcmN1bGFyQnRuOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5jaXJjdWxhckJ0bjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLmFsZ29yaXRobXMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59IiwiLmNvbnRhaW5lci1mbHVpZCAuYnRuLWdyb3VwIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XG4gIC5jb250YWluZXItZmx1aWQgLmJ0bi1ncm91cCBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggI2NjY2NjYztcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4ICNjY2NjY2M7XG4gICAgYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggI2NjY2NjYzsgfVxuICAuY29udGFpbmVyLWZsdWlkIC5idG4tZ3JvdXAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzOyB9XG5cbi5idG4tZ3JvdXA6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5jcmVhdGVMaW5rLFxuLmVkaXRMaW5rLFxuLmRlbGV0ZUxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuXG4uZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxuXG4uZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4uZHJvcGRvd24tbWVudSAuY3JlYXRlOmhvdmVyIHtcbiAgY29sb3I6IGJsdWU7IH1cblxuLmRyb3Bkb3duLW1lbnUgLmVkaXQ6aG92ZXIge1xuICBjb2xvcjogZ3JlZW47IH1cblxuLmRyb3Bkb3duLW1lbnUgLmRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiByZWQ7IH1cblxuLyogLm1vZGFsLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjNWY1ZjVmO1xuICAgIGJ1dHRvbi5jbG9zZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59ICovXG46Om5nLWRlZXAgLm1vZGFsSXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cbiAgOjpuZy1kZWVwIC5tb2RhbEl0ZW0gLmZhLWluZm8tY2lyY2xlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbjo6bmctZGVlcCAubW9kYWxJdGVtLmJ1dHRvbkNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG46Om5nLWRlZXAgLnNlY3Rpb25OYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIG1heC13aWR0aDogNTAlOyB9XG5cbjo6bmctZGVlcCAuaW5wdXRTcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7IH1cbiAgOjpuZy1kZWVwIC5pbnB1dFNwYW4gaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhY2FjYWM7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuXG46Om5nLWRlZXAgLnByb3BlcnR5TGFiZWwge1xuICBwYWRkaW5nLXRvcDogMTNweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG46Om5nLWRlZXAgLnN1cHBvcnRJY29ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDYlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHJlZDsgfVxuXG46Om5nLWRlZXAgLnN1cHBvcnRJY29ucy5jdXN0b21EZWxldGUge1xuICBmb250LXNpemU6IDIwcHg7IH1cblxuaW5wdXQjcHJvcGVydHlLZXkge1xuICBoZWlnaHQ6IDMwcHg7IH1cblxuOjpuZy1kZWVwIC5uZXdMaW5rIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHggN3B4OyB9XG5cbi5uZXdMaW5rMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTJweDtcbiAgcGFkZGluZzogNXB4IDdweDsgfVxuXG4ubG93ZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4OyB9XG5cbi5uZXdMaW5rOmhvdmVyLFxuLm5ld0xpbmsyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWY1ZjtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cblxuLm5ld1RlbXBsYXRlIHtcbiAgbWF4LXdpZHRoOiAzNSUgIWltcG9ydGFudDsgfVxuICAubmV3VGVtcGxhdGUgZGl2IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cblxuaS5mYXMuZmEtaW5mby1jaXJjbGUge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgfVxuXG5pbnB1dFtkaXNhYmxlZD1cInRydWVcIl0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDsgfVxuXG4uZGVsZXRlQnRuLFxuLm1haWxCdG4sXG4ucmVzdG9yZUJ0biB7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50OyB9XG5cbi5sYXRlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5sYXRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4ubWFpbEJ0bixcbi5sZWZ0IHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XG5cbi5tYWlsQnRuIHtcbiAgcGFkZGluZzogNXB4IDhweDsgfVxuXG4ubWFpbEJ0bjpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgY29sb3I6ICMwMDA7XG4gIGJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4ICNjY2NjY2M7IH1cblxuLm1haWxCdG46YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNpdGlvbjogLjVzOyB9XG5cbjo6bmctZGVlcCAubmV3UHJvcGVydHlHcm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2NjY2NjYzsgfVxuXG46Om5nLWRlZXAgLm5vcm1hbFRleHRCb3gge1xuICBtYXgtd2lkdGg6IDE0ZW07IH1cblxuOjpuZy1kZWVwIC50eXBlVGV4dEJveCB7XG4gIG1heC13aWR0aDogMjBlbTsgfVxuXG4udHlwZVRleHRCb3ggaW5wdXQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwOyB9XG5cbi51aS5pbnB1dC50eXBlVGV4dEJveCB7XG4gIHdpZHRoOiAxNGVtOyB9XG5cbiNpZF9uZXdMYWJlbE5vZGUge1xuICBwYWRkaW5nLWxlZnQ6IDNweDsgfVxuXG4uY2lyY3VsYXJCdG4ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgd2lkdGg6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4ICNjY2NjY2M7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggI2NjY2NjYztcbiAgYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggI2NjY2NjYzsgfVxuICAuY2lyY3VsYXJCdG4gaW1nIHtcbiAgICB3aWR0aDogNDBweDsgfVxuXG4uY2lyY3VsYXJCdG46YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNpdGlvbjogLjVzOyB9XG5cbi5jaXJjdWxhckJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7IH1cblxuLmFsZ29yaXRobXMge1xuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateNodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNodesComponent", function() { return CreateNodesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/search-service/search.service */ "./src/app/modules/shared/services/search-service/search.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/core/services/graph-data-service/graph-data.service */ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts");
/* harmony import */ var _core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/shared-graph.service */ "./src/app/modules/core/services/shared-graph.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_material_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../custom-material/services/material-core/material.service */ "./src/app/modules/custom-material/services/material-core/material.service.ts");








var CreateNodesComponent = /** @class */ (function () {
    function CreateNodesComponent(SharedSrvc, graphSrvc, sharedGraphSrvc, fb, snackbar) {
        var _this = this;
        this.SharedSrvc = SharedSrvc;
        this.graphSrvc = graphSrvc;
        this.sharedGraphSrvc = sharedGraphSrvc;
        this.fb = fb;
        this.snackbar = snackbar;
        // Output variables for event emitters to parent components
        this.nodeBtnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edgeBtnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cleanData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.restoreEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nodeTypes = [];
        this.newNodeCreated = null;
        this.restoredDataResponse = null;
        // constants
        this.TYPE_TEXT = 'Type';
        this.ADD_NEW_LABEL = 'Add New Label';
        this.ADD_NEW_TYPE = 'Add New Type';
        this.ADD_NEW_PROPERTY = 'Add New Property';
        this.toolTipText = '';
        this.deleteContext = 'node';
        this.newNodeName = 'Not Available';
        this.newTypeColor = null;
        // object to handle modals
        this.popupConfig = {
            createNodePopup: false,
            editNodePopup: false,
            deleteNodePopup: false,
            createRelationPopup: false,
            editRelationPopup: false,
            deleteRelationPopup: false
        };
        // modal specific variables
        this.createNodePopup = false;
        this.editNodePopup = false;
        this.deleteNodePopup = false;
        this.createRelationPopup = false;
        this.editRelationPopup = false;
        this.deleteRelationPopup = false;
        this.restoreOptions = false;
        this.disabledBox = false;
        this.enableNewTemplate = false;
        this.clickedNodeID = null;
        this.clickedRelationID = null;
        this.disabledFromBox = false;
        this.disabledToBox = false;
        this.relationSourceNode = null;
        this.relationTargetNode = null;
        this.nodeTypes2 = [];
        this.selectedType = [];
        this.typeOptions = [];
        this.labelProperties = [];
        this.relationTypeOptions = [];
        this.typeProperties = [];
        this.toNames = [];
        this.fromNames = [];
        this.editNodeConfig = {};
        this.deleteNodeConfig = {};
        this.totalNodesProperties = {};
        this.totalRelationsProperties = {};
        this.availablePropertyList = {};
        this.selectedPropertiesObject = {};
        this.showDeletedData = false;
        this.totalName = [];
        // private variables to be used by the class
        this.allowedRestoreEvents = ['node', 'relation'];
        // to set dropdown of from and to 
        this.optionLookUp = function (query, initial) {
            // to change lookup option according to search 
            if (!!query && query.length > 0) {
                var regex_1;
                try {
                    regex_1 = new RegExp(query, "i");
                }
                catch (e) {
                    regex_1 = query;
                }
                return new Promise(function (resolve) {
                    return setTimeout(function () { return resolve(_this.totalName.filter(function (item) { return item.key.match(regex_1); })); }, 500);
                });
            }
            else {
                // to set initial dropdown
                return Promise.resolve([{ key: 'Sumit' }]);
            }
        };
        this.optionLookUp2 = function (query, initial) {
            // to change lookup option according to search 
            if (!!query && query.length > 0) {
                var regex_2;
                try {
                    regex_2 = new RegExp(query, "i");
                }
                catch (e) {
                    regex_2 = query;
                }
                return new Promise(function (resolve) {
                    return setTimeout(function () { return resolve(_this.totalName.filter(function (item) { return item.key.match(regex_2); })); }, 500);
                });
            }
            else {
                // to set initial dropdown
                _this.totalName.filter(function (nameObject) {
                    return nameObject.key !== 'Sumit';
                });
                return Promise.resolve(_this.totalName);
            }
        };
    }
    CreateNodesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toolTipText = 'The Properties section can be left blank to set a default Node';
        $('.toolTipText').tooltip();
        // to set total node and relation properties
        this.sharedGraphSrvc.totalNodesProperties.subscribe(function (data) {
            if (data) {
                _this.totalNodesProperties = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](data);
                _this.totalName = _this.totalNodesProperties['name'];
                // to change format for lookup option
                _this.totalName = _this.totalName.map(function (name) {
                    return { key: name };
                });
            }
        });
        this.sharedGraphSrvc.totalRelationsProperties.subscribe(function (data) {
            _this.totalRelationsProperties = data;
        });
        // to set processedData and nodeTypes2
        this.sharedGraphSrvc.processedData.subscribe(function (data) {
            _this.processedData = data;
        });
        this.sharedGraphSrvc.nodeTypes2.subscribe(function (data) {
            _this.nodeTypes2 = data;
        });
        this.sharedGraphSrvc.relationTypeOptions.subscribe(function (data) {
            _this.relationTypeOptions = ['CONNECTED_TO'];
        });
        this.sharedGraphSrvc.relationsData.subscribe(function (data) {
            _this.relationsData = data;
        });
        this.sharedGraphSrvc.showDeletedData.subscribe(function (toggle) {
            if (toggle !== null && (toggle.toString() === 'true' || toggle.toString() === 'false')) {
                // if the toggle variable is  only true and false and nothing else
                _this.showDeletedData = toggle;
                // console.log('recieved toggle in create nodes', toggle);
            }
            else {
                // set to false by default
                _this.showDeletedData = false;
            }
        }, function (err) {
            // set to false by default
            console.error('An error occured while subscribing to the toggle for deleted data', err);
            _this.showDeletedData = false;
        });
    };
    CreateNodesComponent.prototype.createNode = function () {
        this.popupConfig.createNodePopup = true;
        this.createNodePopup = true;
        this.disabledBox = false;
        this.enableNewTemplate = false;
        var index = this.nodeTypes2.indexOf(this.ADD_NEW_LABEL);
        if (index < 0) {
            var newOptions = this.nodeTypes2;
            newOptions = this.pushOnTop(this.ADD_NEW_LABEL, newOptions);
            this.typeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](newOptions);
        }
        // add the option to add a new label on top
    };
    CreateNodesComponent.prototype.pushOnTop = function (valueToAdd, ArrayToUse, index) {
        if (valueToAdd === void 0) { valueToAdd = 'null'; }
        if (index === void 0) { index = 0; }
        // this function will push the given value in the array at specified index, default for 0
        if (ArrayToUse.length <= 0) {
            return [];
        }
        if (valueToAdd === 'null' && ArrayToUse.length > 0) {
            return ArrayToUse;
        }
        if (valueToAdd !== 'null' && ArrayToUse.length >= 0) {
            ArrayToUse.splice(index, 0, valueToAdd);
            return ArrayToUse;
        }
    };
    CreateNodesComponent.prototype.editNode = function () {
        this.disabledBox = true;
        // this will send the edit event and then the app will wait for the node click event sent back to this component
        this.nodeBtnEvent.emit({ type: 'click', action: 'edit' });
    };
    CreateNodesComponent.prototype.createRelation = function () {
        this.setAllToFalse('relation');
        this.popupConfig.createRelationPopup = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](true);
        this.createRelationPopup = true;
        this.enableNewTemplate = false;
        this.disabledBox = false;
        var extractedTypes = this.relationTypeOptions;
        // add the new type option on top
        var index = extractedTypes.indexOf(this.ADD_NEW_TYPE);
        // if(index < 0){
        //   extractedTypes = this.pushOnTop(this.ADD_NEW_TYPE, extractedTypes);
        // }
        // pass it into the options for dropdown
        this.relationTypeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](extractedTypes);
        return true;
        console.log('variables values are ', this.popupConfig.createRelationPopup + ' ' + this.createRelationPopup);
    };
    CreateNodesComponent.prototype.editRelation = function () {
        this.edgeBtnEvent.emit({ type: 'click', action: 'edit' });
    };
    CreateNodesComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.hideDelModal === true) {
            // hide the delete modal
            this.hideModal('deleteModal');
            this.hideModal('createNodeModal');
            this.hideModal('createRelationModal');
            this.editData = null;
            this.editRelData = null;
        }
        $('#RelAfterNodeModal').on('hidden.bs.modal', function (e) {
            _this.newNodeCreated = null;
            _this.newNodeName = null;
            // this.createNodePopup = false;
            _this.editNodePopup = false;
            _this.editRelationPopup = false;
            _this.deleteNodePopup = false;
            _this.deleteRelationPopup = false;
            _this.setAllToFalse('node');
            _this.cleanData.emit('afterCreateNode');
        });
        $('#createNodeModal').on('hidden.bs.modal', function (e) {
            // this event will reset the popupConfig object so that everytime correct data is accessed
            _this.setAllToFalse('node');
            _this.createNodePopup = false;
            _this.createRelationPopup = false;
            _this.editNodePopup = false;
            _this.editRelationPopup = false;
            _this.deleteNodePopup = false;
            _this.deleteRelationPopup = false;
            _this.editData = null;
            // clear the selected color
            _this.newTypeColor = null;
            _this.cleanData.emit('node');
        });
        $('#createRelationModal').on('hidden.bs.modal', function (e) {
            // this event will reset the popupConfig object so that everytime correct data is accessed
            _this.setAllToFalse('relation');
            _this.createNodePopup = false;
            // this.createRelationPopup = false;
            _this.editNodePopup = false;
            _this.editRelationPopup = false;
            _this.deleteNodePopup = false;
            _this.deleteRelationPopup = false;
            _this.cleanData.emit('relation');
            _this.fromNames = [];
            _this.toNames = [];
        });
        if ((!!this.editData && !!this.editData.length) || (!!this.editData && !!Object.keys(this.editData).length)) {
            this.disabledBox = true;
            // store the data in internal variable and clear this
            var editNodeData = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.editData);
            this.editData = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](null);
            // console.log('edit data recieved is ', editNodeData);
            this.editNodeConfig = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]({
                properties: editNodeData['properties'],
                type: editNodeData['type'][0],
                id: editNodeData['id']
            });
            this.clickedNodeID = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.editNodeConfig['id']);
            // console.log('editNodeConfig is ', this.editNodeConfig);
            this.selectedType = null;
            // check if the node is already deleted or not, if yes, simply don't let the user to update it
            // tslint:disable-next-line: max-line-length
            if (this.editNodeConfig['properties'].hasOwnProperty('deleted') &&
                (this.editNodeConfig['properties']['deleted'] === 'true' || this.editNodeConfig['properties']['deleted'] === true)) {
                // make changes so that user cannot update the node but rather restore it
                console.log('recieved node is deleted type');
                // let responseBool = true;
                window.setTimeout(function () {
                    _this.restoreOptions = true;
                }, 0);
            }
            else {
                window.setTimeout(function () {
                    _this.restoreOptions = false;
                }, 0);
                console.log('restore options is false for this node');
            }
            this.typeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.nodeTypes2);
            this.selectedType = this.editNodeConfig['type'];
            // trigger update properties to show data before hand
            this.updateProperties(this.selectedType, this.editNodeConfig);
            var prefilledInfo = this.recreatePrefilledData(editNodeData['properties']);
            if (!!prefilledInfo) {
                // console.log('recieved some prefilled info ', prefilledInfo);
                // set the data into the modal
                this.prefillData('createNodeModal', prefilledInfo, this.editNodeConfig['id']);
            }
            else {
                // will allow the modal to be visible anyway
                console.error('An error occured while prefilling the data, did not recieve anyhting');
            }
        }
        else if ((!!this.editRelData && !!this.editRelData.length) || (!!this.editRelData && !!Object.keys(this.editRelData).length)) {
            // execute this portion if edit relationship is triggred
            this.popupConfig.editRelationPopup = true;
            this.editRelationPopup = true;
            console.log('recieved edit relation data is ', this.editRelData);
            this.disabledBox = true;
            var editRelConfig = {
                id: this.editRelData['id'],
                type: this.editRelData['type'],
                properties: this.editRelData['properties'],
                from: this.editRelData['from'],
                to: this.editRelData['to']
            };
            this.clickedRelationID = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](editRelConfig['id']);
            // tslint:disable-next-line: max-line-length
            if (editRelConfig['properties'].hasOwnProperty('deleted') &&
                (editRelConfig['properties']['deleted'] === 'true' || editRelConfig['properties']['deleted'] === true)) {
                // make changes so that user cannot update the node but rather restore it
                console.log('recieved relation is deleted type');
                var responseBool = true;
                this.restoreOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](responseBool);
            }
            else {
                var responseBool = false;
                this.restoreOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](responseBool);
            }
            console.log('fetched relationship types successfully');
            // once types are loaded, set a default type which is the type of selected relation
            // relationTypeOptions are already set
            this.selectedType = editRelConfig['type'];
            this.updateRelProperties(this.selectedType, editRelConfig);
            var prefilledRelInfo = this.recreatePrefilledData(editRelConfig['properties']);
            // disable the from and to boxes
            this.disabledFromBox = true;
            this.disabledToBox = true;
            this.prefillData('createRelationModal', prefilledRelInfo, editRelConfig['id'], 'relation');
            // prefill the connected nodes names for the selected relationship modal
            this.prefillConnectedNodes(editRelConfig);
            this.sharedGraphSrvc.nodeDetails.subscribe(function (nodeDetailsArray) {
                // this variable will have arrays of nodes in same sequesnce the ids were sent
                console.log('recieved connected node information', nodeDetailsArray);
                _this.selectedNodeNameSource = nodeDetailsArray[0]['label'] || '';
                _this.selectedNodeNameTarget = nodeDetailsArray[1]['label'] || '';
            });
            // open the edit modal
            this.disabledBox = true;
            this.showModal('createRelationModal');
        }
        // detect if a new node is entered into the graph, prompt user to create a relationship
        if (!!this.newNodeCreated && Object.keys(this.newNodeCreated).length) {
            // new node has been created, prompt the user
            // Do you wish to create a new relationship with respect to {{node_name}} ?
            if (this.newNodeCreated.hasOwnProperty('created') && this.newNodeCreated['created']) {
                if (this.newNodeCreated.hasOwnProperty('node')) {
                    this.newNodeName = this.newNodeCreated['node']['label'] || 'Not Available';
                    // enable the prompt
                    this.setAllToFalse('node');
                    this.setAllToFalse('relation');
                    this.showModal('RelAfterNodeModal');
                }
            }
        }
        // detect if nodes / relationships have been restored successfully
        console.log('restored recieved options are ', this.restoredDataResponse);
        if (!!this.restoredDataResponse && Object.keys(this.restoredDataResponse).length) {
            console.log('Recieved restored information as ', this.restoredDataResponse);
            if (this.restoredDataResponse.hasOwnProperty('nodes') &&
                Array.isArray(this.restoredDataResponse['nodes']) &&
                this.restoredDataResponse['nodes'].length > 0) {
                // hide the node modal
                this.hideModal('createNodeModal');
                this.cleanData.emit('node');
                this.cleanData.emit('relation');
                this.cleanData.emit('restore');
            }
            if (this.restoredDataResponse.hasOwnProperty('relations') &&
                Array.isArray(this.restoredDataResponse['relations']) &&
                this.restoredDataResponse['relations'].length > 0) {
                // hide the node modal
                this.hideModal('createRelationModal');
            }
            window.setTimeout(function () {
                _this.restoreOptions = false;
            }, 0);
            // clean all the events
            this.cleanData.emit('restore');
            this.cleanData.emit('node');
            this.cleanData.emit('relation');
        }
    };
    CreateNodesComponent.prototype.prefillConnectedNodes = function (RelationData) {
        if (RelationData.hasOwnProperty('from') && RelationData.hasOwnProperty('to')) {
            var nodeIDs = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]([RelationData['from'], RelationData['to']]);
            this.fetchNodeNameFromID(nodeIDs);
        }
    };
    CreateNodesComponent.prototype.fetchNodeNameFromID = function (nodeIDArray, isRestore) {
        if (isRestore === void 0) { isRestore = false; }
        // this function will send the node id to the graph visualilzer which has all the information of the nodes
        // the graph visualizer will fetch the node details using the provided node id and send the details back here
        if (!!nodeIDArray.length) {
            console.log('asking for details of ', nodeIDArray);
            this.sharedGraphSrvc.getNodeDetails(nodeIDArray, isRestore);
        }
        else {
            console.warn('nodeID was not valid while sending event to read node details');
        }
    };
    CreateNodesComponent.prototype.prefillData = function (modalID, dataToFill, IDToSupply, type) {
        var _this = this;
        if (type === void 0) { type = 'node'; }
        if (!modalID) {
            console.warn('cannot prefill data as modal id is not supplied');
        }
        else {
            // both are supplied, time to prefill the modal
            if ($("#" + modalID).length) {
                if (type === 'node') {
                    this.popupConfig.editNodePopup = true;
                    this.editNodePopup = true;
                }
                else if (type === 'relation') {
                    this.popupConfig.editRelationPopup = true;
                    this.editRelationPopup = true;
                }
                this.showModal(modalID);
                // found the modal
                $("#" + modalID).on('shown.bs.modal', function (event) {
                    _this.selectedPropertiesObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](dataToFill);
                    // capture the modal text boxes once it is visible
                    /* $(`#${modalID} :text`).each(function() {
                      let key = $(this).attr('id') || null;
                      if (!!dataToFill) {
                        if (Object.keys(dataToFill).indexOf(key) > -1) {
                          // assign this text box a prefilled value from dataToFill
                          $(`[id='${key}']`).val(dataToFill[key]);
                          // disable the Name box since it is unique fot the database
                          /* if (key === 'id_Name') {
                            $(`[id='${key}']`).attr('disabled', 'disabled');
                          }
                        }
                      }
                    }); */
                    // add id of the node to the modal
                    if (!_this.restoreOptions) {
                        _this.addAttribute('edit_btn', type + "_id", IDToSupply);
                    }
                    else {
                        _this.addAttribute('restoreBtn', type + "_id", IDToSupply);
                    }
                });
            }
            else {
                console.warn('did not find any element with provided ID');
            }
        }
    };
    CreateNodesComponent.prototype.addAttribute = function (elementID, attributeKey, attributeValue) {
        $("[id='" + elementID + "']").attr(attributeKey, attributeValue);
    };
    CreateNodesComponent.prototype.recreatePrefilledData = function (prefilledData) {
        // main purpose is to attach id_ to the object keys so that it can be used to find elements in the modal
        if (Object.keys(prefilledData).length > 0) {
            // iterate on the keys and rename them
            // let prefilledObj = {};
            /* Object.keys(prefilledData).forEach(key => {
              // let newKey = `id_${key}`;
      
              prefilledObj[newKey] = prefilledData[key];
            }); */
            return prefilledData;
        }
        else {
            return null;
        }
    };
    CreateNodesComponent.prototype.showModal = function (modalID) {
        $("#" + modalID).modal('show');
    };
    CreateNodesComponent.prototype.hideModal = function (modalID) {
        $("#" + modalID).modal('hide');
    };
    CreateNodesComponent.prototype.setAllToFalse = function (setFor) {
        var _this = this;
        Object.keys(this.popupConfig).forEach(function (key) {
            if (_this.popupConfig[key]) {
                _this.popupConfig[key] = false;
            }
        });
        // reset common properties
        this.selectedType = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]([]);
        this.disabledBox = false;
        this.enableNewTemplate = false;
        if (setFor === 'node') {
            this.createNodePopup = false;
            this.editNodePopup = false;
            this.labelProperties = [];
            this.availablePropertyList = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]({});
            this.deleteNodePopup = false;
            this.selectedPropertiesObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]({});
        }
        else if (setFor === 'relation') {
            this.disabledFromBox = false;
            this.disabledToBox = false;
            this.selectedNodeNameSource = null;
            this.selectedNodeNameTarget = null;
            this.typeProperties = [];
            this.createRelationPopup = false;
            this.editRelationPopup = false;
            this.deleteRelationPopup = false;
        }
    };
    CreateNodesComponent.prototype.submitModal = function (type) {
        if (type === void 0) { type = 'create'; }
        var nodeData = {
            id: null,
            properties: {},
            type: null
        };
        nodeData.type = [this.selectedType];
        /* $('#createNodeModal :text').each(function () {
          let key = $(this).attr('id') || null;
          let value = $(this).val() || null;
          nodeData.properties[key] = value;
        }); */
        console.log('properties object on submit is  ', this.selectedPropertiesObject);
        // pass the captured data into the object and move ahead
        nodeData.properties = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.selectedPropertiesObject);
        // Add the selected color to this new type, if selected
        nodeData.properties = this.addNewColorInProperties(nodeData.properties);
        try {
            nodeData = this.validateNodeData(nodeData);
            // hide the modal once the data is created properly
            $('#createNodeModal').modal('hide');
            if (type === 'create') {
                this.insertIntoPropertyList(nodeData.properties);
                this.nodeBtnEvent.emit({ type: 'click', action: 'create', data: nodeData });
                this.popupConfig.createNodePopup = false;
                this.createNodePopup = false;
                this.setAllToFalse('node');
            }
            else if (type === 'edit') {
                // add the updated properties if any, to the availablePropertyList for future use
                this.insertIntoPropertyList(nodeData.properties);
                this.nodeBtnEvent.emit({ type: 'click', action: 'edit', data: nodeData, process: 'complete' });
                this.popupConfig.editNodePopup = false;
                this.editNodePopup = false;
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    CreateNodesComponent.prototype.addNewColorInProperties = function (properties) {
        if (this.newTypeColor) {
            // user selected a color code
            properties['color'] = this.newTypeColor;
        }
        return properties;
    };
    CreateNodesComponent.prototype.submitRelModal = function (type) {
        if (type === void 0) { type = 'create'; }
        var nodeData = null;
        var relationData = null;
        var sourceNode = null;
        var targetNode = null;
        if (type === 'create') {
            nodeData = {
                Name: null
            };
            sourceNode = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](nodeData);
            targetNode = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](nodeData);
            sourceNode.Name = this.selectedNodeNameSource;
            targetNode.Name = this.selectedNodeNameTarget;
        }
        relationData = {
            type: null,
            properties: {}
        };
        relationData.type = ['CONNECTED_TO'];
        var date = new Date().toDateString();
        // extract properties from modal if entered
        /* $('#createRelationModal :text').each(function() {
          let key = $(this).attr('id') || null;
          let value = $(this).val() || null;
          relationData.properties[key] = value;
          }); */
        console.log('properties object on submit rel is  ', this.selectedPropertiesObject);
        relationData.properties = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.selectedPropertiesObject);
        relationData.properties = { date: date };
        try {
            relationData = this.validateRelationData(relationData);
            console.log('relationship created is ', relationData);
            // add the source and target nodes of this relation
            if (type === 'create') {
                relationData['from'] = sourceNode.Name;
                relationData['to'] = targetNode.Name;
            }
            relationData['id'] = relationData['id'];
            this.insertIntoPropertyList(relationData.properties);
            this.edgeBtnEvent.emit({ type: 'click', action: "" + type, data: relationData });
            // hide the modal once the data is created properly
            $('#createRelationModal').modal('hide');
        }
        catch (e) {
            console.log(e);
        }
        // clear from to data
        this.fromNames = [];
        this.fromNames = [];
    };
    CreateNodesComponent.prototype.insertIntoPropertyList = function (propertiesToUpdate) {
        var _this = this;
        // the  purpose of this function is to update the global availablePropertyList
        if (Object.keys(propertiesToUpdate).length > 0) {
            Object.keys(propertiesToUpdate).forEach(function (property) {
                /* if (Object.keys(this.availablePropertyList).indexOf(property) > -1) {
                  debugger;
                  let propertyList = this.availablePropertyList[property]['list'];
                  if (propertyList.indexOf(propertiesToUpdate[property]) <= -1) {
                    // will enter here if the property Name is already present but the new value not present
                    this.availablePropertyList[property]['list'].push(propertiesToUpdate[property]);
        
                  } else {
                    let sol = propertiesToUpdate[property];
                  }
                } */
                if (Object.keys(_this.totalNodesProperties).indexOf(property) > -1) {
                    var propertyList = _this.totalNodesProperties[property];
                    if (propertyList.indexOf(propertiesToUpdate[property]) <= -1) {
                        _this.totalNodesProperties[property].push(propertiesToUpdate[property]);
                    }
                }
                else {
                    _this.totalNodesProperties[property] = [];
                    _this.totalNodesProperties[property].push(propertiesToUpdate[property]);
                }
                if (Object.keys(_this.totalRelationsProperties).indexOf(property) > -1) {
                    var propertyList = _this.totalRelationsProperties[property];
                    if (propertyList.indexOf(propertiesToUpdate[property]) <= -1) {
                        _this.totalRelationsProperties[property].push(propertiesToUpdate[property]);
                    }
                }
                else {
                    _this.totalRelationsProperties[property] = [];
                    _this.totalRelationsProperties[property].push(propertiesToUpdate[property]);
                }
            });
            // this.availablePropertyList = _.cloneDeep(this.availablePropertyList);
        }
    };
    CreateNodesComponent.prototype.validateNodeData = function (nodeObj) {
        if (Object.keys(nodeObj).length > 0) {
            if (nodeObj.hasOwnProperty('type') && nodeObj.type.length > 0) {
                if (nodeObj.hasOwnProperty('properties') && Object.keys(nodeObj.properties).length > 0) {
                    return this.cleanNodeData(nodeObj);
                }
                else {
                    throw new Error('Cannot create a node with no Name');
                }
            }
            else {
                throw new Error('Cannot create a node with no Type');
            }
        }
        else {
            throw new Error('Cannot create a node with no details');
        }
    };
    CreateNodesComponent.prototype.validateRelationData = function (relationObj) {
        if (Object.keys(relationObj).length > 0) {
            if (relationObj.hasOwnProperty('type') && relationObj.type.length > 0) {
                if (relationObj.hasOwnProperty('properties') && Object.keys(relationObj.properties).length > 0) {
                    return this.cleanRelationshipData(relationObj);
                }
                else {
                    // user did not specify any properties, its okay
                }
            }
            else {
                throw new Error('Cannot create a relation with no Type');
            }
        }
        else {
            throw new Error('cannot create a relation with no details');
        }
    };
    CreateNodesComponent.prototype.generateID = function () {
        // this function generates a new id for a the node which will be unique, currently deprecated
        return Math.floor(Date.now() + Math.random());
    };
    CreateNodesComponent.prototype.processData = function (data) {
        if (data.length > 0) {
            var tempData_1 = [];
            data.forEach(function (label) {
                tempData_1.push({ type: label._fields[1], properties: label._fields[0] });
            });
            return tempData_1;
        }
        else
            return [];
    };
    CreateNodesComponent.prototype.extractLabels = function (data) {
        var _this = this;
        this.nodeTypes2 = [];
        data.forEach(function (label) {
            _this.nodeTypes2.push(label.type[0]);
        });
        // console.log('types are ', this.nodeTypes2);
    };
    CreateNodesComponent.prototype.updateProperties = function (event, editProperties) {
        if (editProperties === void 0) { editProperties = null; }
        // fetch the properties of selected label and display it in the dropdown
        // console.log(event)
        if (event === this.ADD_NEW_LABEL) {
            this.TYPE_TEXT = 'New Type';
            console.log('user wants to add a new label');
        }
        else {
            this.TYPE_TEXT = 'Type';
            if (!editProperties || !editProperties.hasOwnProperty('properties')) {
                editProperties = null;
                this.selectedPropertiesObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]({});
            }
            else {
                editProperties = editProperties['properties'];
            }
            this.labelProperties = this.getProperties([event], editProperties);
        }
    };
    CreateNodesComponent.prototype.updateRelProperties = function (event, relProperties) {
        if (relProperties === void 0) { relProperties = null; }
        // fetch the properties of selected type and display it in the dropdown
        if (!relProperties || !relProperties.hasOwnProperty('properties')) {
            relProperties = null;
            this.selectedPropertiesObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"]({});
        }
        else {
            relProperties = relProperties['properties'];
        }
        this.typeProperties = this.getRelProperties([event], relProperties);
    };
    CreateNodesComponent.prototype.getProperties = function (labelName, editProperties) {
        var _this = this;
        if (editProperties === void 0) { editProperties = null; }
        if (labelName.length > 0) {
            var fetchedProperties_1 = [];
            // if properties are supplied, use them else fetch from the processed data
            if (!!editProperties) {
                Object.keys(editProperties).forEach(function (property) {
                    if (property !== 'Type') {
                        fetchedProperties_1.push(property);
                    }
                });
            }
            else {
                this.processedData.forEach(function (labelObj) {
                    if (labelObj.type[0] === labelName[0]) {
                        fetchedProperties_1 = labelObj.properties;
                    }
                });
                // if fetched properties is empty, means this is a new Type the user has selected
                // Add 2 properties to this TYPE : Name and deleted with deleted = false by default
                if (!fetchedProperties_1.length) {
                    fetchedProperties_1.push('Name');
                    fetchedProperties_1.push('deleted');
                }
            }
            // put Name property in the first position
            fetchedProperties_1.forEach(function (property, index) {
                if (property === 'Name' && index !== 0) {
                    fetchedProperties_1 = _this.swap(fetchedProperties_1, index, 0);
                }
            });
            // before sending back, set the available property list for each property
            this.setPropertyList(fetchedProperties_1);
            return fetchedProperties_1.filter(function (ele) {
                return (ele !== 'deleted' && ele !== 'color');
            });
        }
        else {
            return [];
        }
    };
    CreateNodesComponent.prototype.getRelProperties = function (relType, relProperties) {
        var _this = this;
        if (relProperties === void 0) { relProperties = null; }
        if (relType.length > 0) {
            var fetchedProperties_2 = [];
            if (!!relProperties) {
                Object.keys(relProperties).forEach(function (property) {
                    if (property !== 'Type') {
                        fetchedProperties_2.push(property);
                    }
                });
            }
            else {
                this.relationsData.forEach(function (Obj) {
                    if (Obj.type === relType[0]) {
                        fetchedProperties_2 = Obj['properties'];
                    }
                });
                if (!fetchedProperties_2.length) {
                    fetchedProperties_2.push('deleted');
                }
            }
            fetchedProperties_2.forEach(function (property, index) {
                if (property === 'Name' && index !== 0) {
                    fetchedProperties_2 = _this.swap(fetchedProperties_2, index, 0);
                }
            });
            // before sending back, set the available property list for each property
            this.setPropertyList(fetchedProperties_2);
            return fetchedProperties_2.filter(function (el) {
                return el !== 'deleted';
            });
        }
        else {
            return [];
        }
    };
    CreateNodesComponent.prototype.setPropertyList = function (propertyKeyList) {
        var _this = this;
        // this function will keep updating the global allPropertyList whenever new set of properties are recieved
        try {
            propertyKeyList.forEach(function (propertyName, index) {
                if (!Object.keys(_this.availablePropertyList).length) {
                    // this is the first entry
                    _this.availablePropertyList[propertyName] = { list: [], enableNewProperty: false };
                    _this.availablePropertyList[propertyName]['list'] = _this.getcollectedProperties(propertyName);
                }
                else {
                    // update the key
                    if (Object.keys(_this.availablePropertyList).indexOf(propertyName) > -1) {
                        _this.availablePropertyList[propertyName]['list'] = _this.getcollectedProperties(propertyName);
                    }
                    else {
                        _this.availablePropertyList[propertyName] = { list: [], enableNewProperty: false };
                        _this.availablePropertyList[propertyName]['list'] = _this.getcollectedProperties(propertyName);
                    }
                }
                // tslint:disable-next-line: max-line-length
                _this.availablePropertyList[propertyName]['list'] = _this.pushOnTop(_this.ADD_NEW_PROPERTY, _this.availablePropertyList[propertyName]['list']);
            });
            // now add a default key of 'Add new Property' in each list
            // once the objectis prepared, create another object to store the info of selected value
            this.initiatePropertiesValues();
        }
        catch (e) {
            console.warn('Illegal propertyKeyList array supplied in setPropertyList', e);
            this.availablePropertyList = {};
        }
    };
    CreateNodesComponent.prototype.initiatePropertiesValues = function () {
        var _this = this;
        Object.keys(this.availablePropertyList).forEach(function (key) {
            _this.selectedPropertiesObject[key] = '';
        });
        // remove the deleted key if present
        if (Object.keys(this.selectedPropertiesObject).indexOf('deleted') > -1) {
            delete this.selectedPropertiesObject['deleted'];
        }
        console.log('propertyObject looks like ', this.selectedPropertiesObject);
    };
    CreateNodesComponent.prototype.getcollectedProperties = function (propertyName) {
        if (!propertyName) {
            return [];
        }
        var combinedPropertyList = [];
        // find the collected property values of given propertyName from totalNodeProperties and totalRelationProperties and fill it
        if (Object.keys(this.totalNodesProperties).indexOf(propertyName) > -1) {
            combinedPropertyList.push.apply(combinedPropertyList, this.totalNodesProperties[propertyName]);
        }
        if (Object.keys(this.totalRelationsProperties).indexOf(propertyName) > -1) {
            combinedPropertyList.push.apply(combinedPropertyList, this.totalRelationsProperties[propertyName]);
        }
        // make them unique and order by alphabets
        combinedPropertyList = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](combinedPropertyList);
        combinedPropertyList = lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](combinedPropertyList);
        return combinedPropertyList;
    };
    CreateNodesComponent.prototype.swap = function (ArrayForSwapping, swapFromIndex, swapToIndex) {
        var temp = ArrayForSwapping[swapFromIndex];
        ArrayForSwapping[swapFromIndex] = ArrayForSwapping[swapToIndex];
        ArrayForSwapping[swapToIndex] = temp;
        return ArrayForSwapping;
    };
    CreateNodesComponent.prototype.removeDirtyData = function (dataObj) {
        var newPropertyObject = {};
        Object.keys(dataObj.properties).forEach(function (property) {
            if (property !== null && property !== undefined) {
                // remove the id_ prefix in the key
                property = property.split('id_')[0];
                newPropertyObject[property] = dataObj.properties[property];
                if (!newPropertyObject[property]) {
                    newPropertyObject[property] = 'not available';
                }
            }
        });
        // remove all undefined keys
        if (newPropertyObject.hasOwnProperty('undefined')) {
            delete newPropertyObject['undefined'];
        }
        if (newPropertyObject.hasOwnProperty('Type')) {
            delete newPropertyObject['Type'];
        }
        return newPropertyObject;
    };
    CreateNodesComponent.prototype.cleanNodeData = function (nodeObj) {
        var newPropertyObject = {};
        // remove any null properties
        newPropertyObject = this.removeDirtyData(nodeObj);
        // assign it back to the original data
        nodeObj.properties = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](newPropertyObject);
        console.log('new properties are ', nodeObj);
        // assign a unique id to the node
        nodeObj['id'] = this.generateID();
        if (this.popupConfig.editNodePopup === true) {
            // assign the node id
            this.disabledBox = true;
            var nodeID = !isNaN($("#edit_btn").attr('node_id')) ? $("#edit_btn").attr('node_id') : null;
            console.log('node id is ', nodeID);
            nodeObj['id'] = nodeID;
        }
        // get the type array removed
        nodeObj['type'] = nodeObj['type'][0];
        return nodeObj;
    };
    CreateNodesComponent.prototype.cleanRelationshipData = function (relation) {
        var relationshipProperties = {};
        // remove any null properties
        relationshipProperties = this.removeDirtyData(relation);
        relation.properties = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](relationshipProperties);
        if (this.popupConfig.editRelationPopup === true) {
            // assign the node id
            this.disabledBox = true;
            var relationID = !isNaN($("#edit_btn").attr('relation_id')) ? $("#edit_btn").attr('relation_id') : null;
            console.log('relation id is ', relationID);
            relation['id'] = relationID;
        }
        relation['type'] = relation['type'][0];
        return relation;
    };
    /* updateRelProperties(event, relProperties = null) {
   // fetch the properties of selected type and display it in the dropdown
    if (!relProperties || !relProperties.hasOwnProperty('properties')) {
      relProperties = null;
    } else {
      relProperties = relProperties['properties'];
    }
    this.typeProperties =  this.getRelProperties([event], relProperties);
      // trigger an api to get all the names of the nodes in the graph
    this.graphSrvc.getNodeLabelData().subscribe(response => {
      let temname = [];
      if (response && response.length > 0) {
        response.forEach(data => {
          let keyName = Object.keys(data)[0];
          if(keyName === "Name"){
              temname = data['Name'];
            }
          });
        this.fromNames = _.cloneDeep(temname);
        this.toNames = _.cloneDeep(temname);
        }
      }, error => {
        console.log(error);
        this.fromNames = [];
        this.toNames = [];
      });
    } */
    /* getRelProperties(relType: Array<string>, relProperties = null): any {
      if (relType.length > 0) {
        let fetchedProperties = [];
        if (!!relProperties) {
          Object.keys(relProperties).forEach(property => {
            if (property !== 'Type') {
              fetchedProperties.push(property);
            }
          });
        }
        else {
          this.relationsData.forEach(Obj => {
            if (Obj.type === relType[0]) {
              fetchedProperties = Obj['properties'];
              return fetchedProperties;
            }
          });
        }
        return fetchedProperties.filter(el => {
          return el !== 'deleted';
        });
      } else {
        return [];
      }
    } */
    /* submitRelModal(type = 'create') {
      let nodeData = null;
      let relationData = null;
      let sourceNode = null;
      let targetNode = null;
  
      if (type === 'create') {
        nodeData = {
          Name: null
        };
        sourceNode = _.cloneDeep(nodeData);
        targetNode = _.cloneDeep(nodeData);
        sourceNode.Name = this.selectedNodeNameSource;
        targetNode.Name = this.selectedNodeNameTarget;
      }
  
      relationData = {
        type: null,
        properties: {}
      };
  
      relationData.type = [this.selectedType];
  
  
      // extract properties from modal if entered
      $('#createRelationModal :text').each(function() {
        let key = $(this).attr('id') || null;
        let value = $(this).val() || null;
        relationData.properties[key] = value;
        });
  
      try {
        relationData = this.validateRelationData(relationData);
        console.log('relationship created is ', relationData);
        // add the source and target nodes of this relation
        if (type === 'create') {
          relationData['from'] = sourceNode.Name;
          relationData['to'] = targetNode.Name;
        }
        const relationID = !isNaN($(`#edit_btn`).attr('relation_id')) ? $(`#edit_btn`).attr('relation_id') : null;
        relationData['id'] = relationID;
        this.edgeBtnEvent.emit({ type: 'click', action: `${type}`, data: relationData });
        // hide the modal once the data is created properly
        $('#createRelationModal').modal('hide');
      }
      catch (e) {
        console.log(e);
      }
    } */
    CreateNodesComponent.prototype.updateList = function (key, name) {
        if (name.length > 0) {
            var ans = '';
            // if name is selected from source, remove it from target and vice versa
            if (key == 'from') {
                ans = lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this.fromNames, function (val) {
                    return val === name[0];
                });
                if (ans) {
                    this.fromNames = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.fromNames);
                }
            }
            else if (key == 'to') {
                ans = lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this.toNames, function (val) {
                    return val === name[0];
                });
                if (ans) {
                    this.toNames = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.toNames);
                }
            }
            else {
                // nothing
            }
        }
    };
    CreateNodesComponent.prototype.activateDelete = function (deleteModalID, triggeredBy) {
        var id = null;
        // first get the information of the modal which is trying to trigger the delete modal, then show the delete modal
        this.deleteContext = triggeredBy;
        // hide the respective node or relation modal before showing delete modal
        if (triggeredBy === 'node') {
            this.hideModal('createNodeModal');
        }
        if (triggeredBy === 'relation') {
            this.hideModal('createRelationModal');
        }
        $("#" + deleteModalID).modal('show');
        // get the id of the node/relation triggering delete
        if (triggeredBy === 'node') {
            id = this.clickedNodeID;
        }
        else if (triggeredBy === 'relation') {
            id = this.clickedRelationID;
        }
        // add the id of node/relation on the delete button for later reference
        this.addAttribute('del_btn', triggeredBy + "_id", id);
    };
    CreateNodesComponent.prototype.submitDelete = function (deleteContext) {
        console.log('delete ', deleteContext);
        // get the id of node/relation  to delete
        var selectedID = $("#del_btn").attr(deleteContext + "_id");
        if (deleteContext === 'node') {
            this.nodeBtnEvent.emit({ type: 'click', action: 'delete', data: { id: selectedID } });
        }
        else if (deleteContext === 'relation') {
            this.edgeBtnEvent.emit({ type: 'click', action: 'delete', data: { id: selectedID } });
        }
        else {
            // nothing
        }
        this.hideModal('deleteModal');
    };
    CreateNodesComponent.prototype.addNewProperty = function () {
        console.log('add new property');
        this.enableNewTemplate = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](true);
    };
    CreateNodesComponent.prototype.deleteProperty = function (propertyName, modalType) {
        var _this = this;
        if (modalType === void 0) { modalType = 'node'; }
        if (!!propertyName) {
            // find the property in the labelProperties array and if present, simply remove it
            if (modalType === 'node') {
                this.labelProperties.filter(function (property, index) {
                    if (property === propertyName) {
                        console.log('found ', property + ' at ' + index);
                        _this.updateSelectedPropertiesObject(property, 'delete');
                        return _this.labelProperties.splice(index, 1);
                    }
                });
            }
            else if (modalType === 'relation') {
                this.typeProperties.filter(function (property, index) {
                    if (property === propertyName) {
                        console.log('found ', property + ' at ' + index);
                        _this.updateSelectedPropertiesObject(property, 'delete');
                        return _this.typeProperties.splice(index, 1);
                    }
                });
            }
        }
    };
    CreateNodesComponent.prototype.saveNewProperty = function (modalType) {
        var modalConfig = {
            node: 0,
            relation: 1
        };
        console.log('adding new property in ', modalType);
        var newPropertyForm = (modalType === 'node') ? $("#NewPropertyGroup :text") : $("#NewPropertyGroupRel :text");
        var propertyKey = null;
        // let propertyValue = null;
        if (newPropertyForm.length) {
            propertyKey = $("[id='" + $(newPropertyForm[0]).attr('id') + "']").val();
            // propertyValue  = $(`[id='${$(newPropertyForm[1]).attr('id')}']`).val();
            if (!propertyKey) {
                alert('Cannot add a property without a Name');
            }
            else {
                /* if (!propertyValue) {
                  propertyValue = "null";
                } */
                // console.log(propertyKey + '  ' + propertyValue);
                if (modalType === 'node') {
                    this.labelProperties.push(propertyKey);
                    this.labelProperties = lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](this.labelProperties);
                    this.addNewPropertyToAvailablePropterties(propertyKey, this.ADD_NEW_PROPERTY);
                    // this.appendNewElement({name: propertyKey});
                    this.enableNewTemplate = false;
                }
                else if (modalType === 'relation') {
                    this.typeProperties.push(propertyKey);
                    this.typeProperties = lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](this.typeProperties);
                    this.enableNewTemplate = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](false);
                    this.addNewPropertyToAvailablePropterties(propertyKey, this.ADD_NEW_PROPERTY);
                }
                this.updateSelectedPropertiesObject(propertyKey, 'add');
            }
        }
        // clear the property box
        $('#propertyKey').val('');
        $('#propertyKeyRel').val('');
    };
    CreateNodesComponent.prototype.addNewPropertyToAvailablePropterties = function (propertyName, defaultTextToAdd) {
        if (defaultTextToAdd === void 0) { defaultTextToAdd = ''; }
        // add the new property name in the availablePropertiesList if not exisits and add a default value of ADD_NEW_PROPERTY
        if (Object.keys(this.availablePropertyList).indexOf(propertyName) <= -1) {
            // it is a new property
            this.availablePropertyList[propertyName] = { list: [], enableNewProperty: false };
            if (defaultTextToAdd) {
                this.availablePropertyList[propertyName]['list'] = [defaultTextToAdd];
            }
        }
    };
    CreateNodesComponent.prototype.removeNewPropertyFromAvailableProperties = function (propertyName) {
        if (Object.keys(this.availablePropertyList).indexOf(propertyName) > -1) {
            // property found, simlpy delete the property
        }
    };
    CreateNodesComponent.prototype.updateSelectedPropertiesObject = function (key, action) {
        if (action === void 0) { action = 'add'; }
        // add / delete the provided key from selectedPropertiesObject
        if (action === 'add') {
            if (Object.keys(this.selectedPropertiesObject).indexOf(key) <= -1) {
                this.selectedPropertiesObject[key] = "";
                this.selectedPropertiesObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.selectedPropertiesObject);
            }
        }
        else if (action === 'delete') {
            if (Object.keys(this.selectedPropertiesObject).indexOf(key) > -1) {
                delete this.selectedPropertiesObject[key];
                this.selectedPropertiesObject = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.selectedPropertiesObject);
            }
        }
    };
    // getPropertyValues() {
    //   // get the label information from the graph and then seperate different keys and their already filled options
    //   this.graphSrvc.getNodeLabelData().pipe(map(data => {
    //     if (!data.length) {
    //       return of({});
    //     }
    //     // recieveing some data, filter out the name and labels key and send the rest
    //     console.log('label data is ', data);
    //     return of(data);
    //   }));
    // }
    CreateNodesComponent.prototype.promptRelation = function () {
        // call create relation procedure
        this.hideModal('RelAfterNode');
        this.showModal('createRelationModal');
        this.createRelation();
    };
    CreateNodesComponent.prototype.addNewLabel = function (labelFor) {
        if (labelFor === void 0) { labelFor = null; }
        var val = null;
        if (labelFor === 'node') {
            val = $("#id_newLabelNode").val();
            if (!!val) {
                // push it in the typeOptions
                var newTypes = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.typeOptions);
                newTypes = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.pushOnTop(val, newTypes, 1));
                newTypes = lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](newTypes);
                this.typeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](newTypes);
            }
        }
        else if (labelFor === 'relation') {
            val = $("#id_newLabelRelation").val();
            if (!!val) {
                var newTypesRel = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.relationTypeOptions);
                newTypesRel = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.pushOnTop(val, newTypesRel, 1));
                newTypesRel = lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](newTypesRel);
                this.relationTypeOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](newTypesRel);
            }
        }
        console.log(val);
        this.selectedType = null;
    };
    CreateNodesComponent.prototype.updateSelectedOption = function (propertValueEvent, propertyKey) {
        console.log("property is  " + propertyKey + " and value is " + this.selectedPropertiesObject[propertyKey]);
        if (!!propertyKey && this.selectedPropertiesObject[propertyKey] === this.ADD_NEW_PROPERTY) {
            console.log('selected NEW PROPERTY for ', propertyKey);
            this.availablePropertyList[propertyKey]['enableNewProperty'] = true;
        }
    };
    CreateNodesComponent.prototype.hasList = function (data) {
        // check whether provided data is present in the availablePropertyList and return accordingly
        if (!!data) {
            if (Object.keys(this.availablePropertyList).indexOf(data) > -1) {
                console.log('will display dropdown for ', data);
                return true;
            }
            else {
                console.log('will display text box for ', data);
                return false;
            }
        }
        else {
            return false;
        }
    };
    CreateNodesComponent.prototype.appendNewElement = function (elementDetails) {
        var newPropertyEl = "<div class=\"modalItem\" id=\"newPropertiesContainer_" + elementDetails['name'] + "\">\n    <p class=\"sectionName\">" + elementDetails['name'] + "</p>\n    <span class=\"inputSpan\">\n        <div class=\"ui corner labeled input normalTextBox\">\n            <input type=\"text\" placeholder=\"Enter Value...\" id=\"id_" + elementDetails['name'] + "\" \n            [(ngModel)] = \"selectedPropertiesObject['" + elementDetails['name'] + "']\" \n            (ngModelChange)=\"updateSelectedOption($event, '" + elementDetails['name'] + "')\">\n        </div>\n    </span>\n    <span class=\"supportIcons\" (click)=\"deleteProperty('" + elementDetails['name'] + "')\"><i class=\"far fa-trash-alt\"></i></span>\n</div>";
        // add this element into provided div class
        $(".newPropertyGroup").append(newPropertyEl);
    };
    CreateNodesComponent.prototype.updateNewPropertyValue = function (keyupEvent, data) {
        if (keyupEvent.key === 'Enter') {
            // push the new value entered into the propertyValues list
            if (!!data) {
                // tslint:disable-next-line: max-line-length
                this.availablePropertyList[data]['list'] = this.pushOnTop(this.selectedPropertiesObject[data], this.availablePropertyList[data]['list'], 1);
                this.availablePropertyList[data]['enableNewProperty'] = false;
            }
        }
    };
    CreateNodesComponent.prototype.restoreData = function (restoreType) {
        // fetch the id of element requested to restore
        var clickedElementID = this.getAttribute('restoreBtn', restoreType + "_id");
        clickedElementID = isNaN(clickedElementID) ? null : parseInt(clickedElementID, 10);
        // now send the data to restore the element
        if ((clickedElementID !== null && clickedElementID !== undefined) && this.allowedRestoreEvents.indexOf(restoreType) > -1) {
            // emit data for node restore
            this.restoreEvent.emit({ type: restoreType, data: { id: clickedElementID } });
        }
        else {
            // tslint:disable-next-line: max-line-length
            console.error('An error occured while restoring the data, either clickedElementID is not valid or the event type is not of node/relation');
        }
    };
    CreateNodesComponent.prototype.getAttribute = function (elementID, attributeKey) {
        return $("#" + elementID).attr("" + attributeKey);
    };
    CreateNodesComponent.prototype.ngDoCheck = function () {
        // resetting the value so that it stays updated anytime needed, temporary bug fix for restoredOptions variable not setting properly
        this.restoreOptions = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.restoreOptions);
    };
    CreateNodesComponent.prototype.selectedColorForNewType = function (event) {
        console.log('event from parent ', event);
        this.newTypeColor = event;
        if (Object.keys(this.totalNodesProperties).indexOf('color') > -1 && this.totalNodesProperties['color'].indexOf(event) > -1) {
            // the color is already used
            this.snackbar.warn({ message: 'This color is already used, select another one !' });
        }
        else {
            console.log('This is the new color');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "nodeBtnEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "edgeBtnEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "cleanData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "restoreEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "editData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "editRelData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "hideDelModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CreateNodesComponent.prototype, "nodeTypes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "newNodeCreated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNodesComponent.prototype, "restoredDataResponse", void 0);
    CreateNodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-nodes',
            template: __webpack_require__(/*! ./create-nodes.component.html */ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.html"),
            styles: [__webpack_require__(/*! ./create-nodes.component.scss */ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_4__["GraphDataService"],
            _core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_5__["SharedGraphService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _custom_material_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_7__["MaterialService"]])
    ], CreateNodesComponent);
    return CreateNodesComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-3\">\n    <div class=\"headerWrapper\">\n        <div class=\"row\">\n            <div class=\"col-3 logo left-logo\">\n                <img (click)=\"redirectToHome()\" src=\"assets/societal-logo.png\" />\n            </div>\n            <div class=\"col-9 rightToolbar\">\n                <div class=\"dropdown\">\n                    <div class=\"profilePic\">\n                        <p>Hi Rishabh</p>\n                        <img src=\"./../../../../../assets/round_profile.jpg\" />\n                    </div>\n                    <div class=\"dropdown-content\">\n                        <a href=\"/profile\">PROFILE</a>\n                        <a href=\"/settings\">SETTINGS</a>\n                        <a href=\"/logout\">LOGOUT</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerWrapper {\n  height: 10vh;\n  background: #fff; }\n\n.container-fluid {\n  background: #fff; }\n\n.rightToolbar {\n  height: 100%;\n  float: right;\n  width: 30%; }\n\n.login-button {\n  border-radius: 20px;\n  font-size: 14px;\n  line-height: 2;\n  min-width: 90px;\n  float: right;\n  background: #5f5f5f;\n  border: none;\n  text-decoration: none; }\n\n.login-button:active:focus {\n  background: #5f5f5e; }\n\n.login-button:hover {\n  box-shadow: 2px 7px 18px 1px rgba(95, 95, 95, 0.76);\n  transition: 0.7s; }\n\n.dropdown {\n  position: relative;\n  float: right;\n  z-index: 10; }\n\n.dropdown:hover .dropdown-content {\n  display: block;\n  transition: 0.5s; }\n\n.dropdown-content:hover {\n  display: block;\n  transition: 1s; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: white;\n  padding: 0;\n  min-height: 120px;\n  min-width: 220px;\n  right: 1px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  z-index: 1; }\n\n.dropdown-content a {\n    padding: 20px 10px;\n    display: block;\n    text-decoration: none;\n    color: grey;\n    font-weight: 400; }\n\n.dropdown-content a:hover {\n    background-color: #5f5f5f;\n    color: white;\n    transition: 0.7s;\n    border-radius: 5px; }\n\n.profilePic {\n  margin-right: 30px;\n  border-radius: 50%;\n  display: -webkit-box;\n  /* img:hover {\n        width: 80px;\n        height: 80px;\n        transition: 0.5s;\n    } */ }\n\n.profilePic img {\n    cursor: pointer;\n    width: 70px;\n    height: 70px; }\n\n.profilePic p {\n    margin-top: 30px;\n    margin-right: 20px;\n    cursor: pointer; }\n\n.profileDetails {\n  position: absolute;\n  background: whitesmoke;\n  color: black;\n  display: inline;\n  min-width: 100px; }\n\n.left-logo img {\n  cursor: pointer;\n  max-height: 10vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9kYXNoYm9hcmQtdjItaGVhZGVyL2Rhc2hib2FyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvZGFzaGJvYXJkLXYyLWhlYWRlci9kYXNoYm9hcmQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdkO0VBQ0ksbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG1EQUFtRDtFQUNuRCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVksRUFBQTs7QUFHaEI7RUFFUSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUVoQixVQUFVO0VBQ1YsK0NBQStDO0VBYy9DLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBeEJkO0lBV1Esa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQWZ4QjtJQWtCUSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTs7QUFNMUI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQU1wQjs7OztPQ2hCRyxFRG9CQzs7QUFiUjtJQUtRLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQVBwQjtJQWVRLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBOztBQUl2QjtFQUNJLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFFUSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2Rhc2hib2FyZC12Mi1oZWFkZXIvZGFzaGJvYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJXcmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnJpZ2h0VG9vbGJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMzAlO1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxvZ2luLWJ1dHRvbjphY3RpdmU6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWU7XG59XG5cbi5sb2dpbi1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDJweCA3cHggMThweCAxcHggcmdiYSg5NSwgOTUsIDk1LCAwLjc2KTtcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuXG4uZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgei1pbmRleCA6IDEwO1xufVxuXG4uZHJvcGRvd246aG92ZXIge1xuICAgIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgfVxufVxuXG4uZHJvcGRvd24tY29udGVudDpob3ZlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMXM7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgIG1pbi13aWR0aDogMjIwcHg7XG4gICAgLy8gdG9wOiA4NnB4O1xuICAgIHJpZ2h0OiAxcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIGE6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5wcm9maWxlUGljIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGltZyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICB9XG4gICAgLyogaW1nOmhvdmVyIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB9ICovXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLnByb2ZpbGVEZXRhaWxzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi5sZWZ0LWxvZ28ge1xuICAgIGltZyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWF4LWhlaWdodDogMTB2aDtcbiAgICB9XG59IiwiLmhlYWRlcldyYXBwZXIge1xuICBoZWlnaHQ6IDEwdmg7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cblxuLnJpZ2h0VG9vbGJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMzAlOyB9XG5cbi5sb2dpbi1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBtaW4td2lkdGg6IDkwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuLmxvZ2luLWJ1dHRvbjphY3RpdmU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVlOyB9XG5cbi5sb2dpbi1idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggN3B4IDE4cHggMXB4IHJnYmEoOTUsIDk1LCA5NSwgMC43Nik7XG4gIHRyYW5zaXRpb246IDAuN3M7IH1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHotaW5kZXg6IDEwOyB9XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjVzOyB9XG5cbi5kcm9wZG93bi1jb250ZW50OmhvdmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDFzOyB9XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogMTIwcHg7XG4gIG1pbi13aWR0aDogMjIwcHg7XG4gIHJpZ2h0OiAxcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHotaW5kZXg6IDE7IH1cbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LXdlaWdodDogNDAwOyB9XG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDAuN3M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG5cbi5wcm9maWxlUGljIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAvKiBpbWc6aG92ZXIge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIH0gKi8gfVxuICAucHJvZmlsZVBpYyBpbWcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7IH1cbiAgLnByb2ZpbGVQaWMgcCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5wcm9maWxlRGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1pbi13aWR0aDogMTAwcHg7IH1cblxuLmxlZnQtbG9nbyBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC1oZWlnaHQ6IDEwdmg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DashboardHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHeaderComponent", function() { return DashboardHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardHeaderComponent = /** @class */ (function () {
    function DashboardHeaderComponent(router) {
        this.router = router;
    }
    DashboardHeaderComponent.prototype.ngOnInit = function () {
    };
    DashboardHeaderComponent.prototype.redirectToHome = function () {
        this.router.navigate(['']);
    };
    DashboardHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-header',
            template: __webpack_require__(/*! ./dashboard-header.component.html */ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-header.component.scss */ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardHeaderComponent);
    return DashboardHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper sidebar-wrapper\">\n    <div class=\"sidebarBody p-0\">\n        <div class=\"sidebarBodyTitle\">\n            <p>Filter By</p>\n        </div>\n        <div class=\"sidebarElements\" *ngIf=\"totalAtrributeOptions?.length > 0\">\n            <div class=\"item-container\">\n                <div class=\"item\" *ngFor=\"let attributeOptions of totalAtrributeOptions; let i = index\">\n                    <div *ngIf=\"attributeOptions\">\n                        <span class=\"\">\n\n                        </span>\n                        <a class=\"item-text hoverable capitalize\" (click)=\"networkElementClick(attributeOptions['attribute']);attributeOptions['rotate'] = !attributeOptions['rotate']\" data-toggle=\"collapse\" href=\"#collapseExample{{i}}\" role=\"button\" [attr.aria-expanded]=\"attributeOptions['rotate']\"\n                            [attr.aria-controls]=\"'collapseExample'+i\" [ngClass]=\"{'rotate': attributeOptions['rotate'], 'no-rotate': !attributeOptions['rotate']}\">{{attributeOptions['attribute']}}\n                            <span class=\"ele-count count-org\">{{attributeOptions['options'].length}}</span>\n                        </a>\n                        <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" [attr.href]=\"'#collapseExample'+i\" role=\"button\" [attr.aria-expanded]=\"attributeOptions?.rotate\" [attr.aria-controls]=\"'collapseExample'+i\" (click)=\"attributeOptions['rotate'] = !attributeOptions['rotate']\"\n                            [ngClass]=\"{'rotate': attributeOptions?.rotate, 'no-rotate': !attributeOptions?.rotate}\">\n                        </span>\n                        <div class=\"collapse\" [ngClass]=\"{'show-drop': attributeOptions?.rotate, 'hide-drop': !attributeOptions?.rotate}\">\n                            <sui-multi-select [(ngModel)]=\"selectedAttributeOptions[attributeOptions['attribute']]\" [options]=\"attributeOptions['options']\" [maxSelected]=\"15\"  #totalAtrributeOptions>\n                                <div class=\"ui icon search input\">\n                                    <i class=\"search icon\"></i>\n                                    <input suiSelectSearch type=\"text\" placeholder=\"Search {{attributeOptions['attribute']}}...\">\n                                </div>\n                                <div class=\"scrolling menu\">\n                                    <sui-select-option *ngFor=\"let o of totalAtrributeOptions.filteredOptions\" [value]=\"o\"></sui-select-option>\n                                </div>\n                            </sui-multi-select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"btn-container d-flex justify-content-around\">\n            <div class=\"searchBtnWrapper btn-sidebar\">\n                <button class=\"btn btn-default btn-md searchBtn\" (click)=\"resetGraph()\">Reset</button>\n            </div>\n            <div class=\"searchBtnWrapper btn-sidebar\">\n                <button class=\"btn btn-default btn-md searchBtn\" (click)=\"hitSearchGraph()\">Apply</button>\n            </div>\n\n        </div>\n        <!-- <div class=\"searchBtnWrapper btn-sidebar\">\n            <button class=\"btn btn-default btn-md searchBtn\" (click)=\"noderelationSearchGraph()\">Apply Both</button>\n        </div> -->\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Kanit&display=swap\");\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5; }\n::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5; }\n::-webkit-scrollbar-thumb {\n  background-color: #5f5f5f; }\n.margin-top-75 {\n  margin-top: 75px; }\n.sidebar-wrapper {\n  position: absolute;\n  left: 0;\n  overflow-y: auto;\n  z-index: 1;\n  width: 20%;\n  height: 90vh;\n  background: #fff; }\n.logo {\n  text-align: center; }\n.logo img {\n  cursor: pointer; }\n.sidebarBodyTitle {\n  font-family: 'Kanit', sans-serif;\n  font-size: 18px;\n  text-align: center; }\n.sidebarBodyTitle p {\n    padding: 0 10px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    background: transparent;\n    color: #5f5f5f;\n    font-weight: bold;\n    border-radius: 5px;\n    transition: 1s;\n    text-align: left; }\n.sidebarElements {\n  width: 100%;\n  padding: 25px 0; }\n.item {\n  font-size: 16px;\n  width: 100%;\n  padding: 0; }\n.item span {\n    margin-right: 20px; }\n.hoverable:hover {\n  font-size: 18px;\n  transition: 0.5s; }\n.item-container {\n  height: 40vh;\n  overflow-y: auto; }\n.item-container::-webkit-scrollbar {\n  display: none; }\n.item,\n.item span {\n  min-height: 50px;\n  line-height: 2.7; }\n.item-text {\n  cursor: pointer;\n  text-decoration: none;\n  color: #000; }\n.fa-chevron-right {\n  float: right;\n  cursor: pointer; }\n.rotate {\n  transform: rotate(90deg); }\n.no-rotate {\n  transform: rotate(0deg); }\n.click-pink {\n  color: pink; }\n.hide {\n  display: none; }\n.show {\n  display: block; }\n.show-drop {\n  transition: all linear 0.5s;\n  display: block; }\n.hide-drop {\n  display: none; }\n.ui.teal.left.pointing.label {\n  background: #5f5f5f !important; }\n.searchBtnWrapper {\n  font-family: 'Kanit', sans-serif;\n  font-size: 18px;\n  text-align: center;\n  position: relative;\n  margin-bottom: 20px;\n  bottom: 0;\n  width: 100%; }\n.searchBtnWrapper button {\n    background: #e4e4e4;\n    color: #000;\n    min-width: 100px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); }\n.searchBtnWrapper button:active {\n    box-shadow: none;\n    transition: 0.5s; }\n.btn-sidebar {\n  display: inline; }\n.btn-container {\n  margin-bottom: 25px; }\n.rel-tabs-container {\n  display: inline-block; }\n.rel-tab p {\n  word-break: break-all;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: bold;\n  font-size: 15px;\n  background-color: #F5F5F5;\n  color: #30333a;\n  margin: 4px;\n  padding: 3px 7px;\n  border-radius: 3px; }\n.ele-count {\n  border-radius: 50%;\n  padding: 8px;\n  margin-left: 10px;\n  text-align: center;\n  display: inline; }\n.wrapper hr {\n  margin-bottom: 2em;\n  margin-top: 0.15em; }\n.rel-tabs-container .selected {\n  box-shadow: -4px 4px 17px -8px rgba(0, 0, 0, 0.75); }\n.count-org {\n  background-color: #F5F5F5; }\n.count-person {\n  background-color: #F5F5F5; }\n.count-department {\n  background-color: #F5F5F5; }\nspan.ele-count.count-org {\n  padding: 9px 11px 9px 11px; }\n.c_ff4444 {\n  background-color: '#ff4444'; }\n.c_ffbb33 {\n  background-color: '#ffbb33'; }\n.c_00C851 {\n  background-color: '#00C851'; }\n.c_33b5e5 {\n  background-color: '#33b5e5'; }\n.c_CC0000 {\n  background-color: '#CC0000'; }\n.c_FF8800 {\n  background-color: '#FF8800'; }\n.c_007E33 {\n  background-color: '#007E33'; }\n.c_0099CC {\n  background-color: '#0099CC'; }\n.c_9933CC {\n  background-color: '#9933CC'; }\n.c_0d47a1 {\n  background-color: '#0d47a1'; }\n.c_2BBBAD {\n  background-color: '#2BBBAD'; }\n.c_c51162 {\n  background-color: '#c51162'; }\n.spanWrapper {\n  font-family: 'Kanit', sans-serif;\n  font-weight: bold;\n  max-width: 135px; }\n@media screen and (max-width: 1100px) {\n  .sidebar-wrapper {\n    width: 25%; } }\n.capitalize {\n  text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9kYXNoYm9hcmQtdjItc2lkZWJhci9kYXNoYm9hcmQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RUFBWTtBQUNaO0VBRUksNENBQTRDO0VBQzVDLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksVUFBVTtFQUNWLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLGtCQUFrQjtFQUNsQixPQUFPO0VBR1AsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7QUFJdEI7RUFHUSxlQUFlLEVBQUE7QUFJdkI7RUFDSSxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0FBSHRCO0lBTVEsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxpQkFBaUI7SUFFakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtBQUl4QjtFQUNJLFdBQVc7RUFDWCxlQUFlLEVBQUE7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVUsRUFBQTtBQUhkO0lBT1Esa0JBQWtCLEVBQUE7QUFJMUI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxhQUFhLEVBQUE7QUFHakI7O0VBRUksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7QUFHZjtFQUNJLFlBQVk7RUFDWixlQUFlLEVBQUE7QUFHbkI7RUFDSSx3QkFBd0IsRUFBQTtBQUk1QjtFQUNJLHVCQUF1QixFQUFBO0FBSTNCO0VBQ0ksV0FBVyxFQUFBO0FBR2Y7RUFDSSxhQUFhLEVBQUE7QUFHakI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFFSSwyQkFBMkI7RUFDM0IsY0FBYyxFQUFBO0FBR2xCO0VBQ0ksYUFBYSxFQUFBO0FBR2pCO0VBQ0ksOEJBQThCLEVBQUE7QUFHbEM7RUFDSSxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxXQUFXLEVBQUE7QUFQZjtJQVVRLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLCtDQUErQyxFQUFBO0FBYnZEO0lBZ0JRLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQUl4QjtFQUNJLGVBQWUsRUFBQTtBQUduQjtFQUNJLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0kscUJBQXFCLEVBQUE7QUFHekI7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDJEQUEyRDtFQUMzRCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBR3RCO0VBRUksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUd0QjtFQUdJLGtEQUFrRCxFQUFBO0FBR3REO0VBQ0kseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksMEJBQTBCLEVBQUE7QUFHOUI7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSwyQkFDSixFQUFBO0FBRUE7RUFDSSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0FBSXBCO0VBQ0k7SUFDSSxVQUFVLEVBQUEsRUFDYjtBQUdMO0VBQ0ksMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2Rhc2hib2FyZC12Mi1zaWRlYmFyL2Rhc2hib2FyZC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYW5pdCZkaXNwbGF5PXN3YXAnKTtcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmO1xufVxuXG4ubWFyZ2luLXRvcC03NSB7XG4gICAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgLy8gd2lkdGg6IDIzJTtcbiAgICAvLyBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubG9nbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ubG9nbyB7XG4gICAgaW1nIHtcbiAgICAgICAgLy8gd2lkdGg6IDcwJTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLnNpZGViYXJCb2R5VGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICAgIC8vIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAvLyBib3gtc2hhZG93OiAycHggN3B4IDE4cHggMXB4IHJnYmEoOTUsIDk1LCA5NSwgMC43Nik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMXM7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufVxuXG4uc2lkZWJhckVsZW1lbnRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyNXB4IDA7XG59XG5cbi5pdGVtIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICAvLyBoZWlnaHQ6IDIwJTtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGU6aG92ZXIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uaXRlbS1jb250YWluZXIge1xuICAgIGhlaWdodDogNDB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uaXRlbS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaXRlbSxcbi5pdGVtIHNwYW4ge1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIuNztcbn1cblxuLml0ZW0tdGV4dCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmZhLWNoZXZyb24tcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3RhdGUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAvLyB0cmFuc2l0aW9uOiAuOHM7XG59XG5cbi5uby1yb3RhdGUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC8vIHRyYW5zaXRpb246IC44cztcbn1cblxuLmNsaWNrLXBpbmsge1xuICAgIGNvbG9yOiBwaW5rO1xufVxuXG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2hvdy1kcm9wIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuNXM7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oaWRlLWRyb3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi51aS50ZWFsLmxlZnQucG9pbnRpbmcubGFiZWwge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWYgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaEJ0bldyYXBwZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIH1cbn1cblxuLmJ0bi1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5idG4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ucmVsLXRhYnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yZWwtdGFiIHAge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICBjb2xvcjogcmdiKDQ4LCA1MSwgNTgpO1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHBhZGRpbmc6IDNweCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uZWxlLWNvdW50IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLndyYXBwZXIgaHIge1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjE1ZW07XG59XG5cbi5yZWwtdGFicy1jb250YWluZXIgLnNlbGVjdGVkIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC00cHggNHB4IDE3cHggLThweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogLTRweCA0cHggMTdweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgYm94LXNoYWRvdzogLTRweCA0cHggMTdweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5jb3VudC1vcmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jb3VudC1wZXJzb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jb3VudC1kZXBhcnRtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG5zcGFuLmVsZS1jb3VudC5jb3VudC1vcmcge1xuICAgIHBhZGRpbmc6IDlweCAxMXB4IDlweCAxMXB4O1xufVxuXG4uY19mZjQ0NDQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjZmY0NDQ0J1xufVxuXG4uY19mZmJiMzMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjZmZiYjMzJ1xufVxuXG4uY18wMEM4NTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMDBDODUxJ1xufVxuXG4uY18zM2I1ZTUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMzNiNWU1J1xufVxuXG4uY19DQzAwMDAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjQ0MwMDAwJ1xufVxuXG4uY19GRjg4MDAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjRkY4ODAwJ1xufVxuXG4uY18wMDdFMzMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMDA3RTMzJ1xufVxuXG4uY18wMDk5Q0Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMDA5OUNDJ1xufVxuXG4uY185OTMzQ0Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjOTkzM0NDJ1xufVxuXG4uY18wZDQ3YTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMGQ0N2ExJ1xufVxuXG4uY18yQkJCQUQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMkJCQkFEJ1xufVxuXG4uY19jNTExNjIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjYzUxMTYyJ1xufVxuXG4uc3BhbldyYXBwZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1heC13aWR0aDogMTM1cHg7XG59XG5cbi8vIGFuIGF0dGVtcHQgdG8gbWFrZSBpdCBhIGJpdCByZXNwb25zaXZlXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAnMTEwMHB4Jykge1xuICAgIC5zaWRlYmFyLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgIH1cbn1cblxuLmNhcGl0YWxpemUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DashboardSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSidebarComponent", function() { return DashboardSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/services/graph-data-service/graph-data.service */ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts");
/* harmony import */ var src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/core/services/shared-graph.service */ "./src/app/modules/core/services/shared-graph.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_modules_shared_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/services/search-service/search.service */ "./src/app/modules/shared/services/search-service/search.service.ts");
/* harmony import */ var src_app_modules_algo_runner_services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service */ "./src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service.ts");









var DashboardSidebarComponent = /** @class */ (function () {
    function DashboardSidebarComponent(graphDataService, sharedGraphData, searchService, toolbarShrdSrvc) {
        this.graphDataService = graphDataService;
        this.sharedGraphData = sharedGraphData;
        this.searchService = searchService;
        this.toolbarShrdSrvc = toolbarShrdSrvc;
        // tslint:disable-next-line: no-input-rename
        this.nodeLimitOnEnter = null;
        this.showDisabled = false;
        this.defaultColor = {
            Trainer: 'c_ff4444',
            Skill: 'c_ffbb33',
            Government: 'c_00C851',
            'Impact Investor': 'c_33b5e5',
            'International Agency': 'c_CC0000',
            Media: 'c_FF8800',
            'NGO/CBO': 'c_007E33',
            People: 'c_0099CC',
            Philanthropy: 'c_9933CC',
            Platform: 'c_0d47a1',
            'Private Sector': 'c_2BBBAD',
            'Research Institute': 'c_c51162'
        };
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nodeTypesEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.relationOptions = [];
        this.selectedRelationship = [];
        this.selectedRelation = [];
        this.selectedAttributeOptions = [];
        this.selectedGraph = [];
        this.graphData = {};
        this.relstatus = false;
        this.edgesNewObject = [];
        this.nodesNewObject = [];
        this.graphInitData = [];
        this.totalNodesProperties = {};
        this.totalRelationsProperties = {};
        this.nodeTypes2 = [];
        this.relationTypeOptions = [];
        this.totalAtrributeOptions = [];
        // Query to fetch all labels
        this.queryObj = {
            raw: true,
            query: "MATCH (p) WHERE p:Trainer OR p:Skill WITH DISTINCT keys(p) AS keys,p\n     with DISTINCT labels(p) as label,keys \n     UNWIND keys AS keyslisting WITH DISTINCT keyslisting AS allfields,label\n     RETURN collect(allfields),label"
        };
        this.nodeRelationsDetailsObject = { nodes: {}, relations: {} };
    }
    ;
    DashboardSidebarComponent.prototype.ngOnInit = function () {
        this.getGraph();
    };
    DashboardSidebarComponent.prototype.ngOnChanges = function () {
        // update all dropdown when new node is created
        // get the createdEvent
        if (this.newNodeCreated) {
            var nodeData = this.newNodeCreated['event'].split('_');
            var nodeEvent = this.newNodeCreated['event'].split('_')[0];
            if (nodeEvent === 'NodeEvent') {
                if (nodeData[1] === 'restore') {
                    this.updateSidebar(nodeData[2]);
                }
                else {
                    this.getGraph();
                    this.newNodeCreated = '';
                }
            }
        }
        // detect if the user hit enter while entering the nodelimit value
        if (!!this.nodeLimitOnEnter && !isNaN(this.nodeLimitOnEnter)) {
            // user pressed entered after filling a valid number
            console.log('enter detected after ', this.nodeLimitOnEnter);
            this.searchGraph();
        }
    };
    /**
     * Updates node relation details object
     * @description This function updates the global nodeRelationDetails object and send it to algo runner for further use
     * @param detailsObj
     */
    // tslint:disable-next-line: max-line-length
    DashboardSidebarComponent.prototype.updateNodeRelationDetailsObject = function (detailsObj) {
        if (detailsObj.hasOwnProperty('nodeTypes')) {
            this.nodeRelationsDetailsObject.nodes['types'] = detailsObj.nodeTypes;
        }
        if (detailsObj.hasOwnProperty('relationTypes')) {
            this.nodeRelationsDetailsObject.relations['types'] = detailsObj.relationTypes;
        }
        if (detailsObj.hasOwnProperty('nodeProperties')) {
            this.nodeRelationsDetailsObject.nodes['properties'] = detailsObj.nodeProperties;
        }
        if (detailsObj.hasOwnProperty('relationProperties')) {
            this.nodeRelationsDetailsObject.relations['properties'] = detailsObj.relationProperties;
        }
        // send it to algo runner
        this.toolbarShrdSrvc.sendNodeRelationDetails(this.nodeRelationsDetailsObject);
        this.toolbarShrdSrvc.sendNodeRelationDetailsStatic(this.nodeRelationsDetailsObject);
    };
    // set all data in sidebar dropdown
    DashboardSidebarComponent.prototype.getGraph = function () {
        var _this = this;
        this.totalAtrributeOptions = [];
        // fetch the properties of all the nodes and relationships
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([this.graphDataService.getGraphProperties(), this.getNodeTypes()]).subscribe(function (results) {
            _this.updateNodeRelationDetailsObject({
                nodeTypes: results[1],
                nodeProperties: results[0]['nodes'],
                relationProperties: results[0]['relations']
            });
            // results[0] is our character
            // results[1] is our character homeworld
            if (results[0].hasOwnProperty('nodes')) {
                // push name to top
                _this.setNodeProperties(results[0]);
                // let index = this.totalAtrributeOptions.findIndex(obj => obj['attribute'] === "name")
                // this.totalAtrributeOptions = _.cloneDeep(this.swap(this.totalAtrributeOptions, index, 0));
            }
            if (results[1].length > 0) {
                // push type to second position
                _this.setTypes(results[1]);
                // let index = this.totalAtrributeOptions.findIndex((obj) =>  {
                //   if(!!obj) {
                //     return obj['attribute'] === "Type"
                //   }
                //   return false;
                // });
                // this.totalAtrributeOptions = _.cloneDeep(this.swap(this.totalAtrributeOptions, index, 1));
            }
        }, function (err) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])({ error: 'Error while reading graph properties' });
            console.error(err);
        });
        this.getRelationTypes().subscribe(function (response) {
            // this.graphInitData.push(data);
            _this.relationOptions = _this.relationTypeOptions;
            _this.updateNodeRelationDetailsObject({ relationTypes: _this.relationTypeOptions });
        });
    };
    DashboardSidebarComponent.prototype.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    /**
     * Search graph
     * @description The function gets called whenever the apply filter on attributes is needed
     */
    DashboardSidebarComponent.prototype.searchGraph = function () {
        var _this = this;
        var requestBody;
        this.selectedGraph = [];
        if (this.selectedAttributeOptions) {
            Object.keys(this.selectedAttributeOptions).forEach(function (selectedKey) {
                if (_this.selectedAttributeOptions[selectedKey].length > 0) {
                    _this.selectedGraph.push({ type: selectedKey, value: _this.selectedAttributeOptions[selectedKey] });
                }
            });
            if (this.selectedGraph.length > 0) {
                requestBody = { nodes: this.selectedGraph };
            }
            else {
                // if no selected element
                requestBody = {};
            }
        }
        return requestBody;
    };
    // Method gives new edgesArray with related node ids
    DashboardSidebarComponent.prototype.getRelatedNodeIdArrayFromEdges = function (selectedNodeId) {
        if (this.graphInitData.length > 0) {
            // console.log('rel',this.relationOptions);
            var temArray_1 = [];
            this.graphInitData[0]['seperateEdges'].filter(function (edge) {
                if (selectedNodeId === edge.from) {
                    temArray_1.push(edge.to);
                }
                else if (selectedNodeId === edge.to) {
                    temArray_1.push(edge.from);
                }
            });
            temArray_1 = temArray_1.filter(this.onlyUnique);
            return temArray_1;
        }
    };
    // Method gives selected node id
    DashboardSidebarComponent.prototype.getSelectedNodeId = function (nodeName) {
        var temId;
        if (this.graphInitData.length > 0) {
            this.graphInitData[0]['seperateNodes'].filter(function (node) {
                if (nodeName === node.label) {
                    temId = node.id;
                }
            });
            return temId;
        }
    };
    DashboardSidebarComponent.prototype.resetGraph = function () {
        this.getGraph();
        this.selectedAttributeOptions = [];
        this.selectedRelation = [];
        if (this.preSelectedRel) {
            var element = document.getElementById(this.preSelectedRel);
            element.classList.remove('selected');
        }
        var obj = { event: 'reset' };
        this.eventClicked.emit(obj);
    };
    DashboardSidebarComponent.prototype.relationclickEvent = function (selectedRelation) {
        var element;
        if (this.preSelectedRel) {
            element = document.getElementById(this.preSelectedRel);
            element.classList.remove('selected');
        }
        element = document.getElementById(selectedRelation);
        element.classList.add('selected');
        this.selectedRelationship = [];
        this.relstatus = !this.relstatus;
        this.selectedRelationship.push({ type: selectedRelation });
        var requestBody = { nodes: [], edges: this.selectedRelationship };
        console.log("re", requestBody);
        this.sharedGraphData.setGraphData(requestBody);
        var obj = { event: 'search' };
        this.eventClicked.emit(obj);
        this.preSelectedRel = selectedRelation;
    };
    // return all nodes with selected relation
    DashboardSidebarComponent.prototype.relationSearchGraph = function () {
        var _this = this;
        var requestBody;
        if (this.selectedRelation.length > 0) {
            this.selectedRelationship = [];
            this.selectedRelation.map(function (rel) {
                _this.selectedRelationship.push({ type: rel });
            });
            requestBody = { nodes: [], edges: this.selectedRelationship };
        }
        else {
            // if no selected element
            requestBody = {};
        }
        return requestBody;
    };
    DashboardSidebarComponent.prototype.networkElementClick = function (element) { };
    //
    DashboardSidebarComponent.prototype.NodeLimitToggleHandler = function (event) {
        try {
            if (event.constructor === Object) {
                this.showDisabled = event['isOn'];
            }
        }
        catch (e) {
            this.showDisabled = false;
        }
        this.sharedGraphData.sendToogleStatus(this.showDisabled);
    };
    DashboardSidebarComponent.prototype.extractLabels = function (data) {
        var _this = this;
        this.nodeTypes2 = [];
        data.forEach(function (label) {
            _this.nodeTypes2.push(label.type[0]);
        });
        // console.log('types are ', this.nodeTypes2);
    };
    DashboardSidebarComponent.prototype.getNodeTypes = function () {
        var _this = this;
        return this.searchService.runQuery(this.queryObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            console.log('recieved label data from service ', data);
            _this.processedData = _this.processData(data);
            // extract types from the array
            _this.extractLabels(_this.processedData);
            // this.typeOptions = _.cloneDeep(this.nodeTypes2);
            return _this.nodeTypes2;
        }));
    };
    DashboardSidebarComponent.prototype.processData = function (data) {
        if (data.length > 0) {
            var tempData_1 = [];
            data.forEach(function (label) {
                tempData_1.push({ type: label._fields[1], properties: label._fields[0] });
            });
            return tempData_1;
        }
        else {
            return [];
        }
    };
    DashboardSidebarComponent.prototype.getRelationTypes = function () {
        var _this = this;
        return this.graphDataService.getGraphRelations().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            _this.relationsData = _this.filterRelationsData(response);
            var extractedTypes = _this.extractTypes(_this.relationsData);
            // pass it into the options for dropdown
            _this.relationTypeOptions = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](extractedTypes);
            _this.sharedGraphData.setRelationTypeOptions(_this.relationTypeOptions);
            _this.sharedGraphData.setRelationsData(_this.relationsData);
            return true;
        }, function (err) {
            console.error('An error occured while fetching relations ', err);
            throw Error();
        }));
    };
    DashboardSidebarComponent.prototype.filterRelationsData = function (response) {
        var filteredObjectArray = [];
        filteredObjectArray.push(response[0]);
        response.splice(0, 1);
        // clear relations response as there are duplicates inside
        // steps to clear, process each relation type
        // find all the keys which are of this type and collect its properties into a unique array of objects
        var i = 0;
        var _loop_1 = function () {
            if (response.length === 0) {
                i = 1;
            }
            else {
                var matched_1 = false;
                filteredObjectArray.forEach(function (firstObj) {
                    var _a;
                    if (firstObj.type === response[i].type) {
                        matched_1 = true;
                        (_a = firstObj['properties']).push.apply(_a, response[i].properties);
                    }
                });
                if (matched_1) {
                    response.splice(i, 1);
                    i = 0;
                }
                else {
                    filteredObjectArray.push(response[i]);
                    response.splice(i, 1);
                }
            }
        };
        while (i <= response.length) {
            _loop_1();
        }
        // make the properties of each type as unique
        filteredObjectArray.map(function (typeObj) {
            typeObj['properties'] = lodash__WEBPACK_IMPORTED_MODULE_6__["uniq"](typeObj['properties']);
            return typeObj;
        });
        console.log('final fetched types for relation is ', filteredObjectArray);
        return filteredObjectArray;
    };
    DashboardSidebarComponent.prototype.extractTypes = function (ObjectArray) {
        var typesArray = [];
        ObjectArray.forEach(function (obj) {
            typesArray.push(obj['type']);
        });
        return typesArray;
    };
    DashboardSidebarComponent.prototype.swap = function (ArrayForSwapping, swapFromIndex, swapToIndex) {
        var temArrayForSwapping = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](ArrayForSwapping);
        var temp = temArrayForSwapping[swapFromIndex];
        temArrayForSwapping[swapFromIndex] = temArrayForSwapping[swapToIndex];
        temArrayForSwapping[swapToIndex] = temp;
        return temArrayForSwapping;
    };
    DashboardSidebarComponent.prototype.updateSidebar = function (nodeData) {
        if (nodeData) {
            var index = this.totalAtrributeOptions.findIndex(function (obj) { return obj['attribute'] === 'Name'; });
            this.totalAtrributeOptions[index]['options'].push(nodeData);
        }
    };
    // check for rotate object
    DashboardSidebarComponent.prototype.checkRotate = function () {
        var _this = this;
        // check for selected value so the dropdown should not close on refresh
        if (this.selectedAttributeOptions) {
            Object.keys(this.selectedAttributeOptions).forEach(function (selectedKey) {
                if (_this.selectedAttributeOptions[selectedKey].length > 0) {
                    _this.totalAtrributeOptions = _this.totalAtrributeOptions.filter(function (attr) {
                        if (attr && attr['attribute'] === selectedKey) {
                            attr['rotate'] = true;
                            return attr;
                        }
                        else {
                            return attr;
                        }
                    });
                }
            });
        }
    };
    // for node properties
    DashboardSidebarComponent.prototype.setNodeProperties = function (response) {
        var _this = this;
        if (response.hasOwnProperty('nodes')) {
            this.totalNodesProperties = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](response['nodes']);
            this.sharedGraphData.setNodeProperties(this.totalNodesProperties);
            if (this.totalNodesProperties) {
                Object.keys(this.totalNodesProperties).forEach(function (keyName) {
                    if (keyName !== 'deleted' && keyName !== 'color' && keyName !== 'name' && keyName !== 'type'
                        && keyName !== 'class' && keyName !== 'date' && keyName !== 'course' && keyName !== 'id'
                        && keyName !== 'trainer' && keyName !== 'tag') {
                        _this.totalAtrributeOptions.push({ attribute: keyName, options: _this.totalNodesProperties[keyName], rotate: false });
                    }
                });
            }
            if (response.hasOwnProperty('relations')) {
                this.totalRelationsProperties = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](response['relations']);
                this.sharedGraphData.setRelationProperties(this.totalRelationsProperties);
            }
            console.log(this.totalNodesProperties, this.totalRelationsProperties);
        }
        this.checkRotate();
    };
    // for types
    DashboardSidebarComponent.prototype.setTypes = function (response) {
        if (response) {
            this.sharedGraphData.setProcessedData(this.processedData);
            this.sharedGraphData.setNodeTypes2(this.nodeTypes2);
            // this.typeOptions = this.nodeTypes2;
            // this.totalAtrributeOptions.push({ attribute: 'Type', options: this.nodeTypes2, rotate: false });
            this.checkRotate();
            return true;
        }
    };
    /**
     * Hits search graph
     * @description The function is a common function which will gather the selected filters from the sidebar and send it furthur
     */
    DashboardSidebarComponent.prototype.hitSearchGraph = function () {
        var selectedAttributes = this.searchGraph();
        var selectedRelations = this.relationSearchGraph();
        console.log('search graph and relation search graph has returned the following ');
        console.log(selectedAttributes);
        console.log(selectedRelations);
        // join both the request bodies into one and send it for search
        var RequestBody = Object.assign({}, selectedRelations, selectedAttributes);
        this.sharedGraphData.setGraphData(RequestBody);
        // send the click event to reload the graph
        var obj = { event: 'search' };
        this.eventClicked.emit(obj);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DashboardSidebarComponent.prototype, "newNodeCreated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('nodeLimitEnterEvent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardSidebarComponent.prototype, "nodeLimitOnEnter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardSidebarComponent.prototype, "eventClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardSidebarComponent.prototype, "nodeTypesEvent", void 0);
    DashboardSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-sidebar',
            template: __webpack_require__(/*! ./dashboard-sidebar.component.html */ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-sidebar.component.scss */ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"], src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_3__["SharedGraphService"],
            src_app_modules_shared_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"], src_app_modules_algo_runner_services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_8__["ToolbarSharedService"]])
    ], DashboardSidebarComponent);
    return DashboardSidebarComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid export-btn\">\n    <button (click)=\"exportAsCsv('csv')\" class=\"circularBtn\"><i class=\"fas fa-download\"></i></button>\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".export-btn button {\n  background: #e4e4e4;\n  color: #000;\n  box-shadow: -4px 4px 14px -9px rgba(0, 0, 0, 0.75); }\n\n.export-btn button:active {\n  box-shadow: none;\n  transition: 0.5s; }\n\n.circularBtn {\n  font-size: 1.5rem;\n  width: 40px;\n  border-radius: 50%;\n  height: 40px;\n  border: 0;\n  box-shadow: 2px 9px 17px -1px #cccccc; }\n\n.circularBtn:active {\n  box-shadow: none;\n  transition: .5s; }\n\n.circularBtn:focus {\n  outline: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9ncmFwaC1leHBvcnRlci9ncmFwaC1leHBvcnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLG1CQUFtQjtFQUNuQixXQUFXO0VBR1gsa0RBQWtELEVBQUE7O0FBTjFEO0VBU1EsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBR1QscUNBQW9ELEVBQUE7O0FBR3hEO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi9jb21wb25lbnRzL2dyYXBoLWV4cG9ydGVyL2dyYXBoLWV4cG9ydGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cG9ydC1idG4ge1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC00cHggNHB4IDE0cHggLTlweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IC00cHggNHB4IDE0cHggLTlweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICBib3gtc2hhZG93OiAtNHB4IDRweCAxNHB4IC05cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICB9XG4gICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgfVxufVxuXG4uY2lyY3VsYXJCdG4ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcbn1cblxuLmNpcmN1bGFyQnRuOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5jaXJjdWxhckJ0bjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.ts ***!
  \********************************************************************************************/
/*! exports provided: GraphExporterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphExporterComponent", function() { return GraphExporterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_services_graph_export_service_graph_export_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/services/graph-export-service/graph-export.service */ "./src/app/modules/core/services/graph-export-service/graph-export.service.ts");
/* harmony import */ var src_app_modules_shared_services_export_service_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/export-service/excel.service */ "./src/app/modules/shared/services/export-service/excel.service.ts");




var GraphExporterComponent = /** @class */ (function () {
    function GraphExporterComponent(fileService, excelService) {
        this.fileService = fileService;
        this.excelService = excelService;
    }
    GraphExporterComponent.prototype.ngOnInit = function () {
    };
    GraphExporterComponent.prototype.exportAsCsv = function (format) {
        var _this = this;
        this.fileService.getExportFormat(format)
            .subscribe(function (fileData) {
            var element = _this.fileService.initiateDownload('a', fileData);
            // initiate download
            element.click();
        }, function (error) {
            //check for ok and status
            if (error.ok === false && error.status === 200) {
                var element = _this.fileService.initiateDownload('a', error['text']);
                // initiate download
                element.click();
            }
            else {
                console.error('An error occured while getting file content from the service ', error);
            }
        });
    };
    GraphExporterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph-exporter',
            template: __webpack_require__(/*! ./graph-exporter.component.html */ "./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.html"),
            styles: [__webpack_require__(/*! ./graph-exporter.component.scss */ "./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_graph_export_service_graph_export_service__WEBPACK_IMPORTED_MODULE_2__["GraphExportService"], src_app_modules_shared_services_export_service_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
    ], GraphExporterComponent);
    return GraphExporterComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-global-loader *ngIf=\"loader\"></app-global-loader>\n<app-color-panel *ngIf=\"!loader\"></app-color-panel>\n<div class=\"wrapper-countlimit\" *ngIf=\"!loader\">\n    <div class=\"selected-count\">{{selectedCount}} Experts Found</div>\n    <div class=\"float-right-toolbar\">\n        <div class=\"creationToolbar\">\n            <app-create-nodes [nodeTypes]=\"totalTypesArray\" \n            [editData]=\"editNodeData\" [editRelData]=\"editRelationData\" \n            [hideDelModal]=\"hideDelModal\" (nodeBtnEvent)=\"nodeEventCapture($event)\" \n            (edgeBtnEvent)=\"edgeEventCapture($event)\" [newNodeCreated]=\"promptRelationCreateAfterNode\"\n            (cleanData)=\"cleanPropertyBindingData($event)\" (restoreEvent)=\"initRestoreData($event)\"\n            [restoredDataResponse]=\"restoredData\"></app-create-nodes>\n        </div>\n        <!-- graph exporter -->\n    </div>\n</div>\n<div class=\"graph-container\" id=\"graphViewer\">\n</div>\n<ng-template *ngIf=\"showlimiterror\" let-popup #popupTemplate>\n    <div class=\"header\">Rating</div>\n    <div class=\"content\">\n        <sui-rating class=\"star\" (click)=\"popup.close()\"></sui-rating>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".graph-container {\n  background: #F5F5F5;\n  height: 80vh;\n  width: 80%;\n  float: right; }\n\n.selected-count {\n  background: #F5F5F5;\n  word-break: break-all;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  color: #30333a;\n  border-radius: 3px;\n  padding: 1em;\n  float: left; }\n\n.wrapper-countlimit {\n  width: 80%;\n  float: right; }\n\n.nodeLimit {\n  max-width: 200px;\n  top: 50px;\n  float: left;\n  border-radius: 3px;\n  padding: 1em;\n  background: #F5F5F5;\n  outline: none; }\n\n.float-right-toolbar {\n  display: inline-flex;\n  width: 63%;\n  justify-content: flex-end; }\n\n.creationToolbar {\n  display: inline;\n  top: 50px;\n  padding: 1em;\n  outline: none; }\n\n.export {\n  margin-top: 15px; }\n\n.nodeLimit input {\n  width: 35%;\n  border: 0.3px solid #000;\n  padding: 5px;\n  border-radius: 2px; }\n\n.nodeLimit:focus {\n  outline: none; }\n\n.nodelimit-head {\n  display: inline;\n  margin-right: 3px; }\n\n@media screen and (max-width: 1100px) {\n  .graph-container,\n  .selected-count {\n    width: 75%; } }\n\n.card-body {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9ncmFwaC12Mi12aXN1YWxpemVyL2dyYXBoLXZpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsMkRBQTJEO0VBQzNELGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLHlCQUF5QixFQUFBOztBQUk3QjtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJOztJQUVJLFVBQVUsRUFBQSxFQUNiOztBQUVMO0VBQ0ksVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjIvY29tcG9uZW50cy9ncmFwaC12Mi12aXN1YWxpemVyL2dyYXBoLXZpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JhcGgtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgIGhlaWdodDogODB2aDtcbiAgICB3aWR0aDogODAlO1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLnNlbGVjdGVkLWNvdW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMzMDMzM2E7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLndyYXBwZXItY291bnRsaW1pdCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5ub2RlTGltaXQge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgdG9wOiA1MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZmxvYXQtcmlnaHQtdG9vbGJhciB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgd2lkdGg6IDYzJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5cbi5jcmVhdGlvblRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB0b3A6IDUwcHg7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5leHBvcnQge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5ub2RlTGltaXQgaW5wdXQge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgYm9yZGVyOiAwLjNweCBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5ub2RlTGltaXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5ub2RlbGltaXQtaGVhZCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAnMTEwMHB4Jykge1xuICAgIC5ncmFwaC1jb250YWluZXIsXG4gICAgLnNlbGVjdGVkLWNvdW50IHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG59XG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: GraphVisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphVisualizerComponent", function() { return GraphVisualizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/services/graph-data-service/graph-data.service */ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/core/services/shared-graph.service */ "./src/app/modules/core/services/shared-graph.service.ts");
/* harmony import */ var _custom_material_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../custom-material/services/material-core/material.service */ "./src/app/modules/custom-material/services/material-core/material.service.ts");
/* harmony import */ var _services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/colorService/color-service.service */ "./src/app/modules/dashboard-v2/services/colorService/color-service.service.ts");
/* harmony import */ var src_app_modules_algo_runner_services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service */ "./src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service.ts");
/* harmony import */ var src_app_modules_redux_services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/redux/services/core-filter-service/core-filter.service */ "./src/app/modules/redux/services/core-filter-service/core-filter.service.ts");










var GraphVisualizerComponent = /** @class */ (function () {
    function GraphVisualizerComponent(graphService, sharedGraphService, snackBar, colorService, algoRunnerShrdSrvc, CoreFilterSrvc, ref) {
        this.graphService = graphService;
        this.sharedGraphService = sharedGraphService;
        this.snackBar = snackBar;
        this.colorService = colorService;
        this.algoRunnerShrdSrvc = algoRunnerShrdSrvc;
        this.CoreFilterSrvc = CoreFilterSrvc;
        this.ref = ref;
        this.totalTypesArray = [];
        this.newNodeCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nodeLimitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.NODE_CREATE_TEXT_SUCCESS = 'Node has been created successfully !';
        this.NODE_CREATE_TEXT_ERROR = 'An error occured while creating a new node !';
        this.NODE_CREATE_TEXT_ERROR_VIS = 'An error occured while displaying the new node !';
        this.NODE_UPDATE_TEXT_SUCCESS = 'Node has been updated successfully !';
        this.NODE_UPDATE_TEXT_ERROR = 'An error occured while updating the node !';
        this.NODE_UPDATE_TEXT_ERROR_VIS = 'An error occured while displaying updated node in the graph !';
        this.NODE_DELETE_TEXT_SUCCESS = 'Node has been deleted successfully !';
        this.NODE_DELETE_TEXT_ERROR = 'An error occured while deleting the Node !';
        this.RELATION_CREATE_TEXT_SUCCESS = 'New Relationship created successfully !';
        this.RELATION_CREATE_TEXT_ERROR = 'An error occured while creating new relationship !';
        this.RELATION_CREATE_TEXT_ERROR_VIS = 'An error occured while displaying the new relationship in graph !';
        this.RELATION_UPDATE_TEXT_SUCCESS = 'Relationship has been updated successfully !';
        this.RELATION_UPDATE_TEXT_ERROR = 'An error occured while upating the relationship !';
        this.RELATION_DELETE_TEXT_SUCCESS = 'Relationship has been deleted successfully !';
        this.RELATION_DELETE_TEXT_ERROR = 'An error occured while deleting the relationship from the database !';
        this.DATA_RESTORE_TEXT_SUCCESS = 'Data has been restored successfully !';
        this.DATA_RESTORE_TEXT_ERROR = 'An error occured while restoring the data !';
        this.showDeletedData = null;
        this.promptRelationCreateAfterNode = null;
        this.requestedNodeDetails = null;
        this.graphData = {};
        this.errorMessage = '';
        this.loader = true;
        this.defaultNodeLimit = 149;
        this.nodeLimit = 149;
        this.emptyNodeLimit = 179;
        this.tick = 0;
        this.colorConfig = {};
        this.editNodeData = null;
        this.editRelationData = null;
        this.restoredData = null;
        this.networkInstance = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hideDelModal = false;
        // graph options to change the visualization configuration of visjs
        this.graphOptions = {
            physics: false,
            interaction: {
                navigationButtons: true
            },
            edges: {
                smooth: {
                    type: 'dynamic'
                }
            },
            nodes: {
                shape: 'dot',
                scaling: {
                    customScalingFunction: function (min, max, total, value) {
                        return value / total;
                    },
                    min: 5,
                    max: 150
                }
            }
        };
        this.allGraphData = {};
        this.filteredGraphData = {};
        // Variable to send the graph data and filtered query object to algo runner for future use
        this.algoRunnerData = {};
    }
    GraphVisualizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = true;
        this.displayInitialGraph();
        this.sharedGraphService.getNodeByIDs.subscribe(function (nodeIDArray) {
            // recieved array IDs
            console.log('recieved array ID for processing ', nodeIDArray);
            var nodesByIDs = _this.getNodeDetails(nodeIDArray);
            console.log('processed data now is  ', nodesByIDs);
            _this.sharedGraphService.sendNodeDetails(nodesByIDs);
        }, function (err) { });
        // subscribe to showDeletedData so that appropriate data can be fetched
        this.sharedGraphService.showDeletedData.subscribe(function (toggle) {
            if (toggle !== null && (toggle.toString() === 'true' || toggle.toString() === 'false')) {
                _this.loader = true;
                // if the toggle variable is  only true and false and nothing else
                _this.showDeletedData = toggle;
                // console.log('recieved toggle', toggle);
            }
            else {
                // set to false by default
                _this.showDeletedData = false;
            }
            if (_this.showDeletedData) {
                _this.showAllData();
            }
            else {
                if (_this.allGraphData.hasOwnProperty('nodes')) {
                    _this.showFilteredData();
                }
            }
        }, function (err) {
            // set to false by default
            console.error('An error occured while subscribing to the toggle for deleted data', err);
            _this.showDeletedData = false;
            _this.displayInitialGraph();
        });
        this.colorService.colorObj$.subscribe(function (response) {
            _this.colorConfig = response;
        });
    };
    GraphVisualizerComponent.prototype.displayInitialGraph = function () {
        var _this = this;
        this.graphService.getInitialDataV2().subscribe(function (result) {
            console.log('recieved data from graph service', result);
            // set data for vis
            if (result.hasOwnProperty('seperateNodes')) {
                // set color config using nodes color properties
                _this.updateColorConfigObject(result);
                // add colors to nodes
                result = _this.addColors(result);
                // store all data without any filter
                _this.allGraphData['nodes'] = result['seperateNodes'];
                _this.allGraphData['edges'] = result['seperateEdges'];
                // to update filtered data
                _this.setFilteredData(_this.showDeletedData);
                // check for show deleted toggel
                if (_this.showDeletedData) {
                    // show all data
                    _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.allGraphData['nodes']);
                }
                else {
                    // show filtered data
                    _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.filteredGraphData['nodes']);
                }
                _this.selectedCount = _this.graphData['nodes'].length;
            }
            if (result.hasOwnProperty('seperateEdges')) {
                // check for show deleted toggel
                if (_this.showDeletedData) {
                    _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.allGraphData['edges']);
                }
                else {
                    // show filtered data
                    _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.filteredGraphData['edges']);
                }
            }
            // console.log('graphData :', this.graphData);
            // display data
            var container = document.getElementById('graphViewer');
            _this.loader = false;
            _this.network = new vis__WEBPACK_IMPORTED_MODULE_3__["Network"](container, _this.graphData, _this.graphOptions);
            // add data to redux store
            var dataForAlgoRunner = {
                completeGraph: _this.allGraphData,
                deletedGraph: _this.filteredGraphData,
                propjectedGraph: _this.graphData
            };
            var requestBody = _this.sharedGraphService.getGraphData() || {};
            _this.updateAlgoRunnerObject(dataForAlgoRunner);
            _this.CoreFilterSrvc.updateAppliedFiltersData({ request: requestBody, data: dataForAlgoRunner });
            // activating double click event for editing node or relationship
            console.log('registering double click');
            _this.network.on('doubleClick', function (event) {
                _this.hideDelModal = false;
                console.log('double click');
                _this.doubleClickHandler(event);
            });
        }, function (err) {
            console.error('An error occured while retrieving initial graph data', err);
            _this.loader = true;
            _this.graphData = {};
        });
        // activate double click event for editing a node or a relationship
    };
    GraphVisualizerComponent.prototype.ngOnChanges = function (changes) {
        if (this.event) {
            var searchEvent = this.event['event'];
            if (searchEvent === 'search' || searchEvent === 'reset') {
                this.event = searchEvent;
                this.changeNodeColor();
            }
        }
    };
    GraphVisualizerComponent.prototype.changeNodeColor = function () {
        var _this = this;
        if (this.event === 'search') {
            this.loader = true;
            this.showGraphData();
        }
        else if (this.event === 'reset') {
            this.loader = true;
            this.nodeLimit = this.defaultNodeLimit;
            this.displayInitialGraph();
        }
        else {
            var previousData = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this.graphData);
            // tslint:disable-next-line: no-string-literal
            if (!!this.graphData['nodes']) {
                var temgraph = this.graphData['nodes'].map(function (node) {
                    if (_this.event === node.type[0]) {
                        // node.color = this.colorConfig.defaultColor[node.type[0]];
                    }
                    else {
                        // node.color='#95BFF8';
                        return node;
                    }
                    return node;
                });
                previousData.nodes.clear();
                previousData.nodes = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](temgraph));
                this.graphData = previousData;
                this.reinitializeGraph();
            }
        }
    };
    GraphVisualizerComponent.prototype.reinitializeGraph = function () {
        var _this = this;
        var container = document.getElementById('graphViewer');
        this.network.setData(this.graphData);
        this.network.on('doubleClick', function (event) {
            _this.hideDelModal = false;
            _this.doubleClickHandler(event);
        });
    };
    GraphVisualizerComponent.prototype.showGraphData = function () {
        var _this = this;
        this.loader = true;
        var requestBody = this.sharedGraphService.getGraphData();
        // check for node limit
        if (this.nodeLimit === "") {
            requestBody["limit"] = this.emptyNodeLimit;
        }
        else if (!isNaN(this.nodeLimit)) {
            requestBody["limit"] = this.nodeLimit;
        }
        else {
            requestBody["limit"] = this.defaultNodeLimit;
        }
        // send the data to algo runner for future use
        this.updateAlgoRunnerObject({ nodeFilter: requestBody });
        this.graphService.getSearchDataV2(requestBody).subscribe(function (result) {
            // console.log('recieved data from graph service', result);
            // set data for vis
            if (result.hasOwnProperty('seperateNodes')) {
                result = _this.addColors(result);
                //this.graphData['nodes'] = new DataSet(result['seperateNodes']);
                // store all data without any filter
                // this.allGraphData['nodes'] = new DataSet(result['seperateNodes']); 
                _this.allGraphData['nodes'] = result['seperateNodes'];
                _this.allGraphData['edges'] = result['seperateEdges'];
                // to update filtered data
                _this.setFilteredData();
                //check for show deleted 
                if (_this.showDeletedData) {
                    // show all data
                    _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.allGraphData['nodes']);
                }
                else {
                    // remove deleted data
                    _this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.filteredGraphData['nodes']);
                }
                _this.selectedCount = _this.graphData['nodes'].length;
            }
            if (result.hasOwnProperty('seperateEdges')) {
                if (_this.showDeletedData) {
                    _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.allGraphData['edges']);
                }
                else {
                    _this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](_this.filteredGraphData['edges']);
                }
            }
            // console.log('graphData :', this.graphData);
            // display data
            // send the data to algo runner for future use
            var dataForAlgoRunner = {
                completeGraph: _this.allGraphData,
                deletedGraph: _this.filteredGraphData,
                propjectedGraph: _this.graphData
            };
            _this.updateAlgoRunnerObject(dataForAlgoRunner);
            // update the redux store with this data
            _this.CoreFilterSrvc.updateAppliedFiltersData({ request: requestBody, data: dataForAlgoRunner });
            var container = document.getElementById('graphViewer');
            _this.network = new vis__WEBPACK_IMPORTED_MODULE_3__["Network"](container, _this.graphData, _this.graphOptions);
            _this.network.on('doubleClick', function (event) {
                _this.hideDelModal = false;
                _this.doubleClickHandler(event);
            });
            _this.loader = false;
        }, function (err) {
            console.error('An error occured while retrieving initial graph data', err);
            _this.loader = true;
            _this.graphData = {};
        });
    };
    /**
     * Updates algo runner object
     * @description It is used to update the global algo runner object at various times the apply/reset/showDeleted buttons are used
     * @param newObject
     */
    GraphVisualizerComponent.prototype.updateAlgoRunnerObject = function (newObject) {
        if (newObject.hasOwnProperty('completeGraph')) {
            this.algoRunnerData.completeGraph = newObject.completeGraph;
        }
        if (newObject.hasOwnProperty('deletedGraph')) {
            this.algoRunnerData.deletedGraph = newObject.deletedGraph;
        }
        if (newObject.hasOwnProperty('nodeFilter')) {
            this.algoRunnerData.nodeFilter = newObject.nodeFilter;
        }
        if (newObject.hasOwnProperty('relationFilter')) {
            this.algoRunnerData.relationFilter = newObject.relationFilter;
        }
        if (newObject.hasOwnProperty('propjectedGraph')) {
            this.algoRunnerData.propjectedGraph = newObject.propjectedGraph;
        }
        // send the final prepared object
        this.algoRunnerShrdSrvc.sendRecentFilters(this.algoRunnerData);
    };
    GraphVisualizerComponent.prototype.updateColorConfigObject = function (resultObj) {
        var _this = this;
        var temColorObj = {};
        resultObj['seperateNodes'].forEach(function (node) {
            if (node.hasOwnProperty('type') && node.type.length > 0 && node.hasOwnProperty('properties')) {
                if (!temColorObj[node.type[0]]) {
                    if (node['properties']['color']) {
                        temColorObj[node.type[0]] = node['properties']['color'];
                    }
                    else {
                        temColorObj[node.type[0]] = _this.colorConfig['defaultColor'][node.type[0]];
                    }
                }
                else {
                    if (node.type[0] === 'Trainer' && node.label === 'Sumit') {
                        node.type[0] = 'You';
                        temColorObj['You'] = _this.colorConfig['defaultColor']['Spot'];
                    }
                }
            }
        });
        this.colorService.updateDefaultColor(temColorObj);
    };
    GraphVisualizerComponent.prototype.addColors = function (resultObj) {
        var _this = this;
        // if the user opted for deleted data, simply set deleted default color to all the nodes
        resultObj['seperateNodes'].forEach(function (node) {
            if (node.hasOwnProperty('type') && node.type.length > 0) {
                if (node['properties']['deleted'] === "true" || node['properties']['deleted'] === true) {
                    node['color'] = _this.colorConfig['deletedColor']['colorCode'];
                }
                else {
                    // if the node has a color property, assign that else assign the defaults one
                    node = _this.shiftColorKey(node);
                    if (!node.hasOwnProperty('color')) {
                        node['color'] = _this.colorConfig['defaultColor'][node.type[0]];
                    }
                }
                // node['color'] = this.showDeletedData ? this.colorConfig.deletedColor.colorCode : this.colorConfig.defaultColor[node.type[0]];
                // // temporary fix, add exception for societal platform
                // if (node.label === 'Societal Platform Team') {
                //   node['color'] = this.colorConfig.defaultColor[node.type[0]];
                // }
            }
        });
        // if the user opted for deleted data, simply set deleted default color to all the edges
        resultObj['seperateEdges'].forEach(function (edge) {
            if (edge.hasOwnProperty('type') && edge.type.length > 0) {
                if (edge['properties']['deleted'] === "true" || edge['properties']['deleted'] === true) {
                    edge['color']['color'] = _this.colorConfig['deletedColor']['colorCode'];
                    edge['color']['highlight'] = _this.colorConfig['deletedColor']['highlightColorCode'];
                }
                else {
                    // edge['color'] = this.colorConfig.defaultColor[edge.type[0]];
                }
            }
        });
        // console.log(nodeObj);
        return resultObj;
    };
    GraphVisualizerComponent.prototype.addColorProperty = function (node) {
        if (node.hasOwnProperty('type') && node.type.length > 0 && node.hasOwnProperty('properties')) {
            if (node['properties'].hasOwnProperty('color') && node['properties']['color'] === 'not available') {
                var index = void 0;
                var nodeType = void 0;
                nodeType = node.type;
                if (this.colorConfig['defaultColor'][nodeType]) {
                    node['properties']['color'] = this.colorConfig['defaultColor'][nodeType];
                }
            }
        }
        return node;
    };
    GraphVisualizerComponent.prototype.limitChange = function (limit, popup) {
        if (limit === "") {
            this.errorMessage = 'Only valid numbers allowed';
            popup.open();
            window.setTimeout(function () {
                popup.close();
            }, 3000);
        }
        else if (!isNaN(limit)) {
            this.nodeLimit = parseInt(limit);
        }
        else {
            this.errorMessage = 'Only valid numbers allowed';
            popup.open();
            window.setTimeout(function () {
                popup.close();
            }, 3000);
        }
    };
    GraphVisualizerComponent.prototype.sendLimit = function (event, nodeLimit) {
        if (event['key'] === 'Enter') {
            this.nodeLimitEvent.emit(this.nodeLimit);
        }
        else {
            this.nodeLimitEvent.emit(null);
        }
    };
    GraphVisualizerComponent.prototype.nodeEventCapture = function (event) {
        var _this = this;
        if (Object.keys(event).length > 0) {
            if (event.action === 'create') {
                // handle the functionaluty of creating a node
                this.network.once('click', function (clickEvent) {
                    console.log(clickEvent);
                    // user should be able to fire an event onlyonce per dropdown click
                    if (clickEvent.nodes.length > 0 || clickEvent.edges.length > 0) {
                        // obviously a node cannot be created over another node or edge
                        alert('please click on an empty space to create a node');
                    }
                    else {
                        // user clicked on a good place to  create a node
                        // console.log(this.graphData);
                        if (event.data.properties['color'] === 'not available') {
                            event.data = _this.addColorProperty(event.data);
                        }
                        else {
                            _this.colorService.insertIntoDefaultColor({ type: event.data.type, color: event.data.properties.color });
                        }
                        var newNodeData_1 = {
                            id: event.data.id,
                            label: event.data.properties.Name,
                            type: [event.data.type],
                            properties: event.data.properties
                        };
                        // let newNodeForVis = _.cloneDeep(newNodeData);
                        // make a request to create a node, if it succeedes only then show in the graph
                        _this.graphService.createNewNode(newNodeData_1).subscribe(function (response) {
                            //update sidebar dropdown
                            _this.newNodeCreated.emit({ event: "NodeEvent_create" + response['seperateNodes'][0].id });
                            // add additional data for vis layout
                            // newNodeForVis = this.addData(newNodeForVis, clickEvent, event);
                            try {
                                var visNode = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](_this.addData(response['seperateNodes'][0], clickEvent, event));
                                // to remove deleted key from tooltip
                                // Add the color to the newly created node
                                visNode['color'] = newNodeData_1.properties['color'];
                                visNode['title'] = _this.stringifyProperties(visNode);
                                // add the new node to the vis
                                _this.graphData['nodes'].add([visNode]);
                                // to update all data array while a new node is created
                                var eleObj = {
                                    element: 'nodes',
                                    event: "create",
                                    data: response['seperateNodes'][0]
                                };
                                _this.updateGraphArray(eleObj);
                                // emit the createNodes component that a node has been put into the graph, prompt user to create a relation
                                // send the data of new node for relationPrompt
                                // notify user
                                _this.snackBar.success({ message: _this.NODE_CREATE_TEXT_SUCCESS });
                                _this.promptRelationCreateAfterNode = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"]({ created: true, node: visNode });
                            }
                            catch (addErr) {
                                console.error('Error while adding the data node to vis ', addErr['message']);
                                _this.snackBar.error({ message: _this.NODE_CREATE_TEXT_ERROR_VIS });
                            }
                        }, function (error) {
                            console.error('An error occured while creating node in  database ', error);
                            _this.snackBar.error({ message: _this.NODE_CREATE_TEXT_ERROR });
                        });
                    }
                });
            }
            else if (event.action === 'edit' && !event.hasOwnProperty('process')) {
                // handle the functionality of editing the node
                console.log('Node edit is being clicked');
                this.network.once('click', function (clickEvent) {
                    console.log(clickEvent);
                    var clickedNode = _this.graphData['nodes'].get(clickEvent.nodes);
                    // if there are multiple nodes one above another, always select the top most one
                    if (clickedNode.length > 0) {
                        clickedNode = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](clickedNode[0]);
                    }
                    console.log('clicked Node is ', clickedNode);
                    _this.startEditProcess(clickedNode);
                });
            }
            else if (event.action === 'edit' && event.hasOwnProperty('process') && event.process === 'complete') {
                // this will be invoked when the user has clicked on edit feature and submitted the form with new data
                console.log('edit event captured with new data', event.data);
                // the process is to first create a node for data base update
                // once the node is updated , use the updated node from the database to update in the visJS
                var newNodeData = {
                    id: event.data.id,
                    label: event.data.properties.Name,
                    type: [event.data.type],
                    properties: event.data.properties
                };
                this.graphService.updateNode(newNodeData).subscribe(function (response) {
                    console.log('response from update node ', response);
                    try {
                        var updatedNode = response['seperateNodes'][0];
                        // logic to update node in vis data set
                        var visNode = _this.graphData['nodes'].get(updatedNode['id']);
                        // update everything except color and id
                        if ([visNode].length == 1) {
                            visNode['properties'] = updatedNode['properties'];
                            visNode['label'] = updatedNode['label'];
                            visNode['title'] = updatedNode['title'];
                            visNode['type'] = updatedNode['type'];
                            console.log('update node details are ', visNode);
                            // node was present, simply update it now
                            if (_this.showDeletedData) {
                                _this.graphData['nodes'].update(visNode);
                            }
                            else {
                                var tem = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](visNode);
                                tem['title'] = _this.stringifyProperties(tem);
                                _this.graphData['nodes'].update(tem);
                            }
                            // update all+filtered graph array
                            var eleObj = {
                                element: 'nodes',
                                event: "edit",
                                data: visNode
                            };
                            _this.updateGraphArray(eleObj);
                            //update sidebar dropdown
                            _this.newNodeCreated.emit({ event: 'NodeEvent_update' + response['seperateNodes'][0].id });
                        }
                        console.log(visNode);
                        _this.snackBar.success({ message: _this.NODE_UPDATE_TEXT_SUCCESS });
                    }
                    catch (updateErr) {
                        // any error encountered while updating the node in vis js
                        console.error('Error while upating the data node to vis ', updateErr['message']);
                        _this.snackBar.error({ message: _this.NODE_UPDATE_TEXT_ERROR_VIS });
                    }
                }, function (err) {
                    console.error('An error occured while updating node in database ', err);
                    _this.snackBar.error({ message: _this.NODE_UPDATE_TEXT_ERROR });
                });
            }
            else if (event.action === 'delete') {
                var nodeID = event.data.id;
                // get the list of relation ids which are connected to this node
                var connectedEdgeIDs = this.network.getConnectedEdges(nodeID);
                // hit the delete node api
                var requestOption = {
                    id: nodeID,
                    relations: connectedEdgeIDs
                };
                this.graphService.deleteNode(requestOption).subscribe(function (response) {
                    // remove the node in vis graph and connected edges, if any
                    var removedNode = response['seperateNodes'];
                    if (response['seperateEdges'].length > 0) {
                        var removedEdges = response['seperateEdges'];
                        // update the edges
                        removedEdges.map(function (removed) {
                            // update all+filtered graph array
                            var eleObj = {
                                element: 'edges',
                                event: "delete",
                                data: removed
                            };
                            _this.updateGraphArray(eleObj);
                        });
                        if (_this.showDeletedData) {
                            _this.graphData['edges'].update(removedEdges);
                        }
                        else {
                            _this.graphData['edges'].remove(removedEdges);
                        }
                    }
                    // update all+filtered array
                    var eleObj = {
                        element: 'nodes',
                        event: "delete",
                        data: response['seperateNodes'][0]
                    };
                    _this.updateGraphArray(eleObj);
                    // update the node in vis
                    removedNode[0]['color'] = _this.colorConfig['deletedColor']['colorCode'];
                    if (_this.showDeletedData) {
                        _this.graphData['nodes'].update(removedNode);
                    }
                    else {
                        _this.graphData['nodes'].remove(removedNode);
                    }
                    _this.hideDelModal = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](true);
                    //update sidebar dropdown
                    _this.newNodeCreated.emit({ event: 'NodeEvent_delete' + response['seperateNodes'][0].id });
                    _this.snackBar.success({ message: _this.NODE_DELETE_TEXT_SUCCESS });
                }, function (err) {
                    console.error('An error occured while reading response for node delete ', err);
                    _this.snackBar.error({ message: _this.NODE_DELETE_TEXT_ERROR });
                });
            }
            else {
                // invalid click event
                console.error('An invalid click event retrieved ', event);
            }
        }
    };
    GraphVisualizerComponent.prototype.edgeEventCapture = function (event) {
        var _this = this;
        if (Object.keys(event).length > 0) {
            if (event.action === 'create') {
                // handle the functionaluty of creating a node
                var newRelationData = {
                    type: [event.data.type],
                    properties: event.data.properties,
                    from: event.data.from,
                    to: event.data.to
                };
                // make a request to create a node, if it succeedes only then show in the graph
                this.graphService.createNewRelation(newRelationData).subscribe(function (response) {
                    console.log(response);
                    try {
                        var visRelation = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](response['seperateEdges'][0]);
                        // to remove deleted key from tooltip
                        _this.newNodeCreated.emit({ event: "NodeEvent_create" + response['seperateEdges'][0] });
                        visRelation['title'] = _this.stringifyProperties(visRelation);
                        // add the new node to the vis
                        // first get the edge, if it is already present, simply update it else add it
                        var isAlreadyPresent = _this.graphData['edges'].get(visRelation['id']);
                        var eleObj = {
                            element: 'edges',
                            event: "edit",
                            data: response['seperateEdges'][0]
                        };
                        if (isAlreadyPresent !== null) {
                            //update it 
                            _this.graphData['edges'].update([visRelation]);
                            // update edge in allgraphdata and filtered data array
                            _this.updateGraphArray(eleObj);
                        }
                        else {
                            _this.graphData['edges'].add([visRelation]);
                            // add new edge to allgraphdata and filtered data array
                            eleObj.event = "create";
                            _this.updateGraphArray(eleObj);
                        }
                        _this.snackBar.success({ message: _this.RELATION_CREATE_TEXT_SUCCESS });
                    }
                    catch (addErr) {
                        console.log('Error while adding the data relation to vis ', addErr['message']);
                        _this.snackBar.error({ message: _this.RELATION_CREATE_TEXT_ERROR_VIS });
                    }
                }, function (error) {
                    console.log('error while reading new relation data from service ', error);
                    _this.snackBar.error({ message: _this.RELATION_CREATE_TEXT_ERROR });
                });
            }
            else if (event.action === 'edit') {
                // capture the details of the relationship clicked by the user, clean it if needed and send for use
                // hit the update relation service and updae it in visJS too
                var relationData = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](event.data);
                if (relationData.hasOwnProperty('id') && relationData.hasOwnProperty('type')) {
                    // object has atleast id and type key, move ahead
                    this.graphService.updateRelation(relationData).subscribe(function (response) {
                        var newRelation = response['seperateEdges'][0];
                        _this.updateRelationinVIS(newRelation);
                        _this.snackBar.success({ message: _this.RELATION_UPDATE_TEXT_SUCCESS });
                    }, function (err) {
                        console.error('An error occured while reading the updated relation data', err);
                        _this.snackBar.error({ message: _this.RELATION_UPDATE_TEXT_ERROR });
                    });
                }
            }
            else if (event.action === 'delete') {
                // handle the functionality of deleting the node
                var relationID = null;
                // capture the relation id and send delete request
                if (event.data.hasOwnProperty('id')) {
                    relationID = event.data.id;
                    // create the delete request
                    var requestObj = {
                        id: relationID
                    };
                    this.graphService.deleteRelation(requestObj).subscribe(function (response) {
                        console.log('recieved some response', response['seperateEdges']);
                        // once database relation is deleted, remove it from visGraph also
                        var deletedRel = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](response['seperateEdges']);
                        // update all+filtered graph array
                        var eleObj = {
                            element: 'edges',
                            event: "delete",
                            data: response['seperateEdges']
                        };
                        _this.updateGraphArray(eleObj);
                        if (_this.showDeletedData) {
                            deletedRel['color']['color'] = _this.colorConfig['deletedColor']['colorCode'];
                            deletedRel['color']['highlight'] = _this.colorConfig['deletedColor']['highlightColorCode'];
                            _this.graphData['edges'].update([deletedRel]);
                        }
                        else {
                            _this.graphData['edges'].remove([deletedRel]);
                        }
                        _this.hideDelModal = true;
                        _this.snackBar.success({ message: _this.RELATION_DELETE_TEXT_SUCCESS });
                    }, function (err) {
                        console.error('An error occured while reading response for relation delete ', err);
                        _this.snackBar.error({ message: _this.RELATION_DELETE_TEXT_ERROR });
                    });
                }
                else {
                    console.warn('did not recieve the id of relation for deletion in edgeEventCapture');
                }
            }
            else {
                // invalid click event
                console.error('An invalid click event retrieved ', event);
            }
        }
    };
    GraphVisualizerComponent.prototype.updateNodesInVis = function (nodesArray) {
        var _this = this;
        // update the nodes in the data set
        if (Array.isArray(nodesArray)) {
            nodesArray.forEach(function (node) {
                var oldNodeID = node['id'];
                var oldNode = _this.graphData['nodes'].get(oldNodeID);
                // update the old node with new node
                if (!!oldNode) {
                    oldNode['properties'] = node['properties'];
                    oldNode = _this.addNodeColor(node);
                    // update all+filtered graph array
                    var eleObj = {
                        element: 'nodes',
                        event: "restore",
                        data: oldNode
                    };
                    _this.updateGraphArray(eleObj);
                    // update sidebar name
                    _this.newNodeCreated.emit({ event: "NodeEvent_restore_" + node['label'] });
                    // set it back in VISJS
                    _this.graphData['nodes'].update(oldNode);
                    console.log('updated node ', oldNode);
                }
                else {
                    console.error("Provided node " + oldNode + " is not present in VisGraph for restoration");
                }
            });
        }
        else {
            console.error('Non array provided in updateNodesInVis');
        }
    };
    GraphVisualizerComponent.prototype.updateRelationinVIS = function (relation) {
        var oldRelationID = relation['id'];
        var oldRelation = this.graphData['edges'].get(oldRelationID);
        console.log('old relation is  ', oldRelation);
        if (this.showDeletedData) {
            this.graphData['edges'].update([relation]);
        }
        else {
            var tem = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](relation);
            tem['title'] = this.stringifyProperties(tem);
            this.graphData['edges'].update([tem]);
        }
        // update all+filtered graph array
        var eleObj = {
            element: "edges",
            event: "edit",
            data: relation
        };
        this.updateGraphArray(eleObj);
    };
    GraphVisualizerComponent.prototype.updateRelationsInVis = function (relationArray) {
        var _this = this;
        // update the relations present in the dataset
        if (Array.isArray(relationArray)) {
            relationArray.forEach(function (relation) {
                var oldRelationID = relation['id'];
                var oldRelation = _this.graphData['edges'].get(oldRelationID);
                // update the old node with new node
                if (!!oldRelation) {
                    oldRelation['properties'] = relation['properties'];
                    oldRelation['title'] = relation['title'];
                    oldRelation['color']['color'] = _this.colorConfig['restoreColor']['colorCode'];
                    oldRelation['color']['highlight'] = _this.colorConfig['restoreColor']['highlightColorCode'];
                    // set it back in VisJS
                    _this.graphData['edges'].update(oldRelation);
                    // update all+filtered graph array
                    var eleObj = {
                        element: 'edges',
                        event: "restore",
                        data: oldRelation
                    };
                    _this.updateGraphArray(eleObj);
                    console.log('updated relation ', oldRelation);
                }
                else {
                    console.error("Provided relation " + oldRelation + " is not present in VisGraph for restoration");
                }
            });
        }
        else {
            console.error('Non array provided in updateNodesInVis');
        }
    };
    // to change key in tooltip
    GraphVisualizerComponent.prototype.stringifyProperties = function (propertyObject) {
        if (propertyObject.constructor === Object) {
            var finalString_1 = '';
            if (propertyObject['properties'].hasOwnProperty('deleted')) {
                Object.keys(propertyObject['properties']).filter(function (key) {
                    if (key !== 'deleted' && key !== 'color' && key !== 'Type' && key !== 'skill' && key !== 'tag') {
                        finalString_1 += "<strong>" + key + " :</strong> " + propertyObject['properties'][key] + " <br>";
                    }
                });
            }
            return finalString_1;
        }
        else {
            return propertyObject['title'];
        }
    };
    GraphVisualizerComponent.prototype.addData = function (node, clickEvent, event) {
        node['x'] = clickEvent.pointer.canvas.x;
        node['y'] = clickEvent.pointer.canvas.y;
        node['color'] = this.colorConfig['defaultColor'][event.data.type];
        return node;
    };
    GraphVisualizerComponent.prototype.addNodeColor = function (node) {
        var colorCode = this.colorConfig['defaultColor'][node.type[0]] || null;
        if (colorCode) {
            node['color'] = colorCode;
            return node;
        }
        else {
            node = this.shiftColorKey(node);
            if (!node['properties'].hasOwnProperty('color')) {
                console.warn('Error while adding color to the node ', node['label']);
            }
            return node;
        }
    };
    GraphVisualizerComponent.prototype.startEditProcess = function (clickedData, typeProcess) {
        if (typeProcess === void 0) { typeProcess = 'node'; }
        // to extract relevant information and send it back to the edit modal
        console.log(clickedData);
        if (typeProcess === 'node') {
            this.editRelationData = null;
            this.editNodeData = clickedData;
        }
        else if (typeProcess === 'edge') {
            this.editNodeData = null;
            this.editRelationData = clickedData;
        }
    };
    GraphVisualizerComponent.prototype.getNodeDetails = function (nodeIDs) {
        var _this = this;
        // process node IDs and send back
        var changedNodeIDs = nodeIDs.map(function (nodeID) {
            return _this.graphData['nodes'].get(nodeID);
        });
        return changedNodeIDs;
    };
    GraphVisualizerComponent.prototype.doubleClickHandler = function (event) {
        // if nodes array exists, it is a node edit event else it is edge edit event
        if (!!event.nodes.length) {
            // emit node edit event data
            var clickedNode = this.graphData['nodes'].get(event.nodes);
            // if there are multiple nodes one above another, always select the top most one
            if (clickedNode.length > 0) {
                clickedNode = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](clickedNode[0]);
            }
            console.log('clicked Node is ', clickedNode);
            this.startEditProcess(clickedNode);
        }
        else if (!!event.edges.length) {
            // emit edge edit event data
            if (event.nodes.length > 0) {
                // user clicked on node despite selecting 'edit edge' feature
                alert('Please click on an edge not a node');
            }
            else {
                var clickedEdge = this.graphData['edges'].get(event.edges[0]);
                // if there are multiple nodes one above another, always select the top most one
                if ([clickedEdge].length > 0) {
                    clickedEdge = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"]([clickedEdge][0]);
                }
                console.log('clicked Edge is ', clickedEdge);
                // emit data for edge
                this.startEditProcess(clickedEdge, 'edge');
            }
        }
    };
    // to filter data from alldata array and store it to new array  
    GraphVisualizerComponent.prototype.setFilteredData = function (isDeletedToggle) {
        var _this = this;
        if (isDeletedToggle === void 0) { isDeletedToggle = false; }
        this.filteredGraphData['nodes'] = [];
        this.filteredGraphData['edges'] = [];
        this.allGraphData['nodes'].filter(function (node) {
            if (node['properties']['deleted'] === "false" || node['properties']['deleted'] === false) {
                var tem = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](node);
                if (isDeletedToggle) {
                    delete tem['color'];
                }
                tem['title'] = _this.stringifyProperties(tem);
                _this.filteredGraphData['nodes'].push(tem);
            }
        });
        this.allGraphData['edges'].filter(function (edge) {
            if (edge['properties']['deleted'] === "false" || edge['properties']['deleted'] === false) {
                var tem = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](edge);
                tem['title'] = _this.stringifyProperties(tem);
                _this.filteredGraphData['edges'].push(tem);
            }
        });
    };
    // to show all data
    GraphVisualizerComponent.prototype.showAllData = function () {
        // create dataset for all data 
        this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](this.allGraphData['nodes']);
        this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](this.allGraphData['edges']);
        // to count graph element
        this.selectedCount = this.graphData['nodes'].length;
        // display data
        this.reinitializeGraph();
        this.loader = false;
    };
    // to show filtered data
    GraphVisualizerComponent.prototype.showFilteredData = function () {
        // create dataset for filtered graph data
        this.graphData['nodes'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](this.filteredGraphData['nodes']);
        this.graphData['edges'] = new vis__WEBPACK_IMPORTED_MODULE_3__["DataSet"](this.filteredGraphData['edges']);
        // to count graph element
        this.selectedCount = this.graphData['nodes'].length;
        // display data
        this.reinitializeGraph();
        this.loader = false;
    };
    GraphVisualizerComponent.prototype.cleanPropertyBindingData = function (cleanType) {
        if (this.editNodeData !== null || this.editRelationData !== null ||
            this.promptRelationCreateAfterNode !== null || this.restoredData !== null) {
            console.log('cleaning data for ', cleanType);
            if (!!cleanType) {
                if (cleanType === 'node') {
                    this.editNodeData = null;
                }
                else if (cleanType === 'relation') {
                    this.editRelationData = null;
                }
                else if (cleanType === 'afterCreateNode') {
                    this.promptRelationCreateAfterNode = null;
                }
                else if (cleanType === 'restore') {
                    this.restoredData = null;
                }
                else {
                    // nothing
                }
            }
        }
    };
    GraphVisualizerComponent.prototype.initRestoreData = function (restoreDataObj) {
        var _this = this;
        // this.loader = true;
        if (Object.keys(restoreDataObj).length > 0 && restoreDataObj.hasOwnProperty('type') && restoreDataObj.hasOwnProperty('data')) {
            var requestBodyObj = { nodes: [], relations: [] };
            if (restoreDataObj['type'] === 'node_relation') {
                // the data key should have both node and relation key with id array key inside them
                if (Object.keys(restoreDataObj['data']).length > 0 && Object.keys(restoreDataObj['data']).length <= 2) {
                    if (restoreDataObj['data'].hasOwnProperty('node') &&
                        restoreDataObj['data']['node'].hasOwnProperty('id') &&
                        Array.isArray(restoreDataObj['data']['node']['id'])) {
                        requestBodyObj.nodes = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](restoreDataObj['data']['node']['id']);
                    }
                    else {
                        // the data object does not have valid node key or id key
                        console.error('the data object does not have valid node key or id key for initRestoreData');
                    }
                    if (restoreDataObj['data'].hasOwnProperty('relation') &&
                        restoreDataObj['data']['relation'].hasOwnProperty('id') &&
                        Array.isArray(restoreDataObj['data']['relation']['id'])) {
                        requestBodyObj.nodes = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](restoreDataObj['data']['relation']['id']);
                    }
                    else {
                        // the data object does not have valid relation key or id key
                        console.error('the data object does not have valid relation key or id key for relation in initRestoreData');
                    }
                }
                else {
                    // providing irrelevant number of keys to the api in the data object
                    console.error('irrelevant number of keys to the api in the data object in initRestoreData');
                }
            }
            else {
                if (restoreDataObj['type'] === 'node' && restoreDataObj['data'].hasOwnProperty('id')) {
                    requestBodyObj.nodes = [restoreDataObj['data']['id']];
                }
                if (restoreDataObj['type'] === 'relation' && restoreDataObj['data'].hasOwnProperty('id')) {
                    requestBodyObj.relations = [restoreDataObj['data']['id']];
                }
            }
            // requestBody has been prepared
            console.log('final request body is ', requestBodyObj);
            this.graphService.restoreData(requestBodyObj).subscribe(function (response) {
                // once the response if okay, send back the confirmation to the create nodes
                var finalData = {
                    nodes: response['seperateNodes'],
                    relations: response['seperateEdges']
                };
                // update the nodes / relations in the visJS graph also and finally tell the modal to go away
                var processedResponse = _this.updateRestoreDataInVis(finalData);
                if (processedResponse.constructor === Boolean && processedResponse) {
                    // this will be executed when a node has been restored
                    _this.restoredData = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](finalData);
                }
                else {
                    _this.restoredData = null;
                    _this.loader = false;
                }
                _this.snackBar.success({ message: _this.DATA_RESTORE_TEXT_SUCCESS });
            }, function (error) {
                console.error('An error occured while restoring the data from the API');
                console.log(error);
                _this.loader = false;
                _this.snackBar.error({ message: _this.DATA_RESTORE_TEXT_ERROR });
            });
        }
        else {
            console.error('Did not recieve any valid object data for restore');
            this.loader = false;
        }
    };
    GraphVisualizerComponent.prototype.updateRestoreDataInVis = function (restoredDataObj) {
        try {
            if (restoredDataObj.hasOwnProperty('nodes') && !!restoredDataObj['nodes'] && restoredDataObj['nodes'].length > 0) {
                this.updateNodesInVis(restoredDataObj['nodes']);
            }
            if (restoredDataObj.hasOwnProperty('relations') && !!restoredDataObj['relations'] && restoredDataObj['relations'].length > 0) {
                this.updateRelationsInVis(restoredDataObj['relations']);
            }
            return true;
        }
        catch (e) {
            console.error('An error occured while updating visJS in updateRestoreDataInVis function ', e);
            return false;
        }
        // the purpose of the function is to update the nodes / relations in VisJS dataSet
    };
    // to update allGraphData and filteredGraphData
    GraphVisualizerComponent.prototype.updateGraphArray = function (obj) {
        try {
            if (obj.hasOwnProperty('event') && obj.event === 'create') {
                // verify if color property is present and add it as is
                obj.data = this.shiftColorKey(obj.data);
                this.insertIntoAllGraphArray(obj);
                this.insertIntoFilteredGraphArray(obj);
                this.tick++;
                this.ref.detectChanges();
            }
            else if (obj.hasOwnProperty('event') && obj.event === 'edit' || obj.event === 'delete' || obj.event === 'restore') {
                this.updateAllGraphArray(obj);
                this.updateFilteredGraphArray(obj);
            }
        }
        catch (e) {
            console.log("Method : updateGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
        }
    };
    // update allgraphdata array
    GraphVisualizerComponent.prototype.updateAllGraphArray = function (obj) {
        try {
            if (obj.hasOwnProperty('data')) {
                var index = void 0;
                // update in all graph data array
                if (obj.hasOwnProperty('element') && obj.element === 'nodes') {
                    // for node
                    if (obj.hasOwnProperty('event') && obj.event === 'delete') {
                        obj.data['color'] = this.colorConfig['deletedColor']['colorCode'];
                    }
                    index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.allGraphData[obj.element], { label: obj.data['label'] });
                }
                else if (obj.hasOwnProperty('element') && obj.element === 'edges') {
                    // for edge
                    if (obj.hasOwnProperty('event') && obj.event === 'delete') {
                        obj.data['color']['color'] = this.colorConfig['deletedColor']['colorCode'];
                        obj.data['color']['highlight'] = this.colorConfig['deletedColor']['highlightColorCode'];
                    }
                    index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.allGraphData[obj.element], { id: obj.data['id'] });
                }
                if (index >= 0) {
                    // update in array
                    this.allGraphData[obj.element][index] = obj.data;
                }
            }
        }
        catch (e) {
            console.log("Method : updateAllGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
        }
    };
    // update filteredgrapdata garray
    GraphVisualizerComponent.prototype.updateFilteredGraphArray = function (obj) {
        try {
            if (obj.hasOwnProperty('data')) {
                var index = void 0;
                // update in all graph data array
                if (obj.hasOwnProperty('element') && obj.element === 'nodes') {
                    index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.filteredGraphData[obj.element], { label: obj.data['label'] });
                }
                else if (obj.hasOwnProperty('element') && obj.element === 'edges') {
                    // remove deleted edge from filtered data array
                    index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.filteredGraphData[obj.element], { id: obj.data['id'] });
                }
                if (index >= 0) {
                    if (obj.hasOwnProperty('event') && obj.event === 'delete') {
                        this.filteredGraphData[obj.element].splice(index, 1);
                    }
                    else if (obj.hasOwnProperty('event') && obj.event === 'edit') {
                        // update filterd graph data
                        var tem = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](obj.data);
                        tem['title'] = this.stringifyProperties(tem);
                        this.filteredGraphData[obj.element][index] = tem;
                    }
                }
                else if (obj.hasOwnProperty('event') && obj.event === 'restore') {
                    this.insertIntoFilteredGraphArray(obj);
                }
            }
        }
        catch (e) {
            console.log("Method : updateFilteredGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
        }
    };
    // insert into allgraphdata array
    GraphVisualizerComponent.prototype.insertIntoAllGraphArray = function (obj) {
        try {
            if (obj.hasOwnProperty('data') && obj.hasOwnProperty('element')) {
                this.allGraphData[obj.element].push(obj.data);
            }
        }
        catch (e) {
            console.log("Method : insertIntoAllGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
        }
    };
    GraphVisualizerComponent.prototype.shiftColorKey = function (elementObject, previousObject) {
        if (previousObject === void 0) { previousObject = null; }
        // To add a new color key in the root level if color is present in properties key
        if (elementObject.hasOwnProperty('properties') && elementObject['properties'].hasOwnProperty('color')) {
            elementObject['color'] = elementObject['properties']['color'];
            return elementObject;
        }
        else if (previousObject !== null) {
            return previousObject;
        }
        else {
            return elementObject;
        }
    };
    // insert into filtered graph array
    GraphVisualizerComponent.prototype.insertIntoFilteredGraphArray = function (obj) {
        try {
            if (obj.hasOwnProperty('data') && obj.hasOwnProperty('element')) {
                var tem = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](obj.data);
                tem['title'] = this.stringifyProperties(tem);
                this.filteredGraphData[obj.element].push(tem);
            }
        }
        catch (e) {
            console.log("Method : insertIntoFilteredGraphArray", "Component : GraphVisualizerComponent", "Error : ", e);
        }
    };
    GraphVisualizerComponent.prototype.updateSelectedOption = function (propertValueEvent, propertyKey) {
        // console.log(`property is  ${propertyKey} and value is ${this.selectedPropertiesObject[propertyKey]}`);
        // if (!!propertyKey && this.selectedPropertiesObject[propertyKey] === this.ADD_NEW_PROPERTY) {
        //   console.log('selected NEW PROPERTY for ', propertyKey);
        //   this.availablePropertyList[propertyKey]['enableNewProperty'] = true;
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "totalTypesArray", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "newNodeCreated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "nodeLimitEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "networkInstance", void 0);
    GraphVisualizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph-visualizer',
            template: __webpack_require__(/*! ./graph-visualizer.component.html */ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.html"),
            styles: [__webpack_require__(/*! ./graph-visualizer.component.scss */ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"],
            src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_5__["SharedGraphService"],
            _custom_material_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_6__["MaterialService"],
            _services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_7__["ColorServiceService"], src_app_modules_algo_runner_services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_8__["ToolbarSharedService"],
            src_app_modules_redux_services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_9__["CoreFilterService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], GraphVisualizerComponent);
    return GraphVisualizerComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/main-v2/main.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/main-v2/main.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard-sidebar (eventClicked)=\"childEventClicked($event)\" (nodeTypesEvent)=\"sendTypes($event)\" [newNodeCreated]=\"newNodeCreated\" [nodeLimitEnterEvent] = \"nodeLimitValue\"></app-dashboard-sidebar>\n<app-graph-visualizer (newNodeCreated)=\"childEventClicked2($event)\" [event]=\"clickedEvent\" (nodeLimitEvent)=\"sendLimitToSidebar($event)\" [totalTypesArray]=\"totalTypesArray\"></app-graph-visualizer>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/main-v2/main.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/main-v2/main.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyL2NvbXBvbmVudHMvbWFpbi12Mi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2/components/main-v2/main.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/components/main-v2/main.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.totalTypesArray = [];
        this.nodeLimitValue = null;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.childEventClicked = function (event) {
        this.clickedEvent = event;
    };
    MainComponent.prototype.childEventClicked2 = function (event) {
        this.newNodeCreated = event;
    };
    MainComponent.prototype.sendTypes = function (event) {
        if (!!event && event.length > 0) {
            this.totalTypesArray = event;
        }
    };
    MainComponent.prototype.sendLimitToSidebar = function (event) {
        // this  function is responsible to send the nodeLimit value to the sidebar so that apply function can be clicked
        if (!isNaN(event)) {
            this.nodeLimitValue = event;
        }
        else {
            console.log('nodelimit is not a number');
            this.nodeLimitValue = null;
        }
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/modules/dashboard-v2/components/main-v2/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/modules/dashboard-v2/components/main-v2/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/dashboard-v2-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/dashboard-v2-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardV2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardV2RoutingModule", function() { return DashboardV2RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-v2/main.component */ "./src/app/modules/dashboard-v2/components/main-v2/main.component.ts");




var routes = [
    { path: "", component: _components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], data: { title: "dashboard" } }
];
var DashboardV2RoutingModule = /** @class */ (function () {
    function DashboardV2RoutingModule() {
    }
    DashboardV2RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardV2RoutingModule);
    return DashboardV2RoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/dashboard-v2.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/dashboard-v2.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_v2_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-v2-routing.module */ "./src/app/modules/dashboard-v2/dashboard-v2-routing.module.ts");
/* harmony import */ var _components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-v2/main.component */ "./src/app/modules/dashboard-v2/components/main-v2/main.component.ts");
/* harmony import */ var _components_graph_v2_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/graph-v2-visualizer/graph-visualizer.component */ "./src/app/modules/dashboard-v2/components/graph-v2-visualizer/graph-visualizer.component.ts");
/* harmony import */ var _components_dashboard_v2_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard-v2-sidebar/dashboard-sidebar.component */ "./src/app/modules/dashboard-v2/components/dashboard-v2-sidebar/dashboard-sidebar.component.ts");
/* harmony import */ var _components_dashboard_v2_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard-v2-header/dashboard-header.component */ "./src/app/modules/dashboard-v2/components/dashboard-v2-header/dashboard-header.component.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _algo_runner_algo_runner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../algo-runner/algo-runner.module */ "./src/app/modules/algo-runner/algo-runner.module.ts");
/* harmony import */ var _components_color_panel_color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/color-panel/color-panel/color-panel.component */ "./src/app/modules/dashboard-v2/components/color-panel/color-panel/color-panel.component.ts");
/* harmony import */ var _components_create_nodes_create_nodes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/create-nodes/create-nodes.component */ "./src/app/modules/dashboard-v2/components/create-nodes/create-nodes.component.ts");
/* harmony import */ var _components_graph_exporter_graph_exporter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/graph-exporter/graph-exporter.component */ "./src/app/modules/dashboard-v2/components/graph-exporter/graph-exporter.component.ts");
/* harmony import */ var _custom_material_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../custom-material/custom-material/custom-material.module */ "./src/app/modules/custom-material/custom-material/custom-material.module.ts");
/* harmony import */ var _custom_material_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../custom-material/services/material-core/material.service */ "./src/app/modules/custom-material/services/material-core/material.service.ts");
















// Material design components from custom Material module


var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _components_graph_v2_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_6__["GraphVisualizerComponent"], _components_dashboard_v2_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["DashboardSidebarComponent"], _components_dashboard_v2_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_8__["DashboardHeaderComponent"],
                _components_color_panel_color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_12__["ColorPanelComponent"], _components_create_nodes_create_nodes_component__WEBPACK_IMPORTED_MODULE_13__["CreateNodesComponent"], _components_graph_exporter_graph_exporter_component__WEBPACK_IMPORTED_MODULE_14__["GraphExporterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_9__["SuiSelectModule"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_9__["SuiModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _custom_material_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_15__["CustomMaterialModule"],
                _dashboard_v2_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardV2RoutingModule"],
                _algo_runner_algo_runner_module__WEBPACK_IMPORTED_MODULE_11__["AlgoRunnerModule"]
            ],
            exports: [
                _components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _components_dashboard_v2_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_8__["DashboardHeaderComponent"],
                _components_dashboard_v2_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["DashboardSidebarComponent"], _components_color_panel_color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_12__["ColorPanelComponent"],
                _components_graph_exporter_graph_exporter_component__WEBPACK_IMPORTED_MODULE_14__["GraphExporterComponent"], _components_graph_v2_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_6__["GraphVisualizerComponent"],
                _components_create_nodes_create_nodes_component__WEBPACK_IMPORTED_MODULE_13__["CreateNodesComponent"], _components_dashboard_v2_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_8__["DashboardHeaderComponent"]
            ],
            providers: [_custom_material_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_16__["MaterialService"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2/services/colorService/color-service.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2/services/colorService/color-service.service.ts ***!
  \*************************************************************************************/
/*! exports provided: ColorServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorServiceService", function() { return ColorServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ColorServiceService = /** @class */ (function () {
    function ColorServiceService() {
        this.colorConfig = {
            defaultColor: {
                // Academia: '#ff4444',
                Skill: '#FF8800',
                Trainer: '#33b5e5',
                Spot: '#0d47a1',
            },
            selectedColor: {
            // Academia: '#ff4444',
            // Consulting: '#ffbb33',
            // Government: '#00C851',
            // 'Impact Investor': '#33b5e5',
            // 'International Agency': '#CC0000',
            // Media: '#FF8800',
            // 'NGO/CBO': '#007E33',
            // People: '#0099CC',
            // Philanthropy: '#9933CC',
            // Platform: '#0d47a1',
            // 'Private Sector': '#2BBBAD',
            // 'Research Institute': '#c51162'
            },
            deletedColor: {
                colorCode: '#C0C0C0',
                highlightColorCode: '#9a9a9a'
            },
            restoreColor: {
                colorCode: '#96C1FA',
                highlightColorCode: '#249BFC'
            },
            initialColor: {
                colorCode: '#96C1FA'
            }
        };
        this.colorObj$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.colorConfig);
    }
    ColorServiceService.prototype.updateDefaultColor = function (data) {
        this.colorConfig.defaultColor = data;
        this.colorObj$.next(this.colorConfig);
    };
    ColorServiceService.prototype.insertIntoDefaultColor = function (data) {
        if (!this.colorConfig.defaultColor[data['type']]) {
            this.colorConfig.defaultColor[data['type']] = data['color'];
            this.colorObj$.next(this.colorConfig);
        }
    };
    ColorServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorServiceService);
    return ColorServiceService;
}());



/***/ }),

/***/ "./src/app/modules/redux/actions/actions.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/redux/actions/actions.ts ***!
  \**************************************************/
/*! exports provided: AppliedFiltersActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appliedFilters_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appliedFilters_actions */ "./src/app/modules/redux/actions/appliedFilters_actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "AppliedFiltersActions", function() { return _appliedFilters_actions__WEBPACK_IMPORTED_MODULE_0__; });




/***/ }),

/***/ "./src/app/modules/redux/actions/appliedFilters_actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/redux/actions/appliedFilters_actions.ts ***!
  \*****************************************************************/
/*! exports provided: ADD_APPLIED_FILTERS_DATA, REMOVE_APPLIED_FILTERS_DATA, CLEAR_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_APPLIED_FILTERS_DATA", function() { return ADD_APPLIED_FILTERS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_APPLIED_FILTERS_DATA", function() { return REMOVE_APPLIED_FILTERS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_STORE", function() { return CLEAR_STORE; });
var ADD_APPLIED_FILTERS_DATA = 'ADD_APPLIED_FILTERS_DATA';
var REMOVE_APPLIED_FILTERS_DATA = 'REMOVE_APPLIED_FILTERS_DATA';
var CLEAR_STORE = 'CLEAR_STORE';


/***/ }),

/***/ "./src/app/modules/redux/redux.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/redux/redux.module.ts ***!
  \***********************************************/
/*! exports provided: ReduxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxModule", function() { return ReduxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/app/modules/redux/store.ts");
/* harmony import */ var _services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/core-filter-service/core-filter.service */ "./src/app/modules/redux/services/core-filter-service/core-filter.service.ts");






var ReduxModule = /** @class */ (function () {
    function ReduxModule(ngRedux) {
        try {
            ngRedux.configureStore(_store__WEBPACK_IMPORTED_MODULE_4__["rootReducer"], _store__WEBPACK_IMPORTED_MODULE_4__["INITIAL_STATE"]);
            console.log('%c Redux store successfully activated', 'color: green; font-weight: bold;');
        }
        catch (e) {
            console.log('%c An error occured while registering the redux store in the redux module ', 'color: red; font-weight: bold;');
            console.log(e);
        }
    }
    ReduxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgReduxModule"]
            ],
            providers: [_services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_5__["CoreFilterService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"]])
    ], ReduxModule);
    return ReduxModule;
}());



/***/ }),

/***/ "./src/app/modules/redux/services/applied_filters_service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/redux/services/applied_filters_service.ts ***!
  \*******************************************************************/
/*! exports provided: updateObject, addFilteredDataAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateObject", function() { return updateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFilteredDataAction", function() { return addFilteredDataAction; });
/**
 * Updates object
 * @param oldObject the previous state
 * @param newValues the new values to update the state
 * @returns  new Object with updated values
 * @description This function is a basic utility function to mutate and return the existing object with new values
 */
function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
}
/**
 * Adds filtered data action
 * @param state the previous state
 * @param action current action object
 * @returns  newState
 * @description The function accepts the current state in the store and the action to perform (to add the new AppliedFilters Object)
 */
function addFilteredDataAction(state, action) {
    console.log('inside addFilteredDataAction', action, state);
    // let newState = state;
    var newState = {
        appliedFilters: {
            requestBody: {},
            filteredData: {}
        },
        lastUpdated: null
    };
    newState.appliedFilters = action.payload;
    // add the current time
    newState.lastUpdated = new Date();
    console.log('returning final state as ', newState);
    return newState;
}


/***/ }),

/***/ "./src/app/modules/redux/services/core-filter-service/core-filter.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/redux/services/core-filter-service/core-filter.service.ts ***!
  \***********************************************************************************/
/*! exports provided: CoreFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreFilterService", function() { return CoreFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../actions/actions */ "./src/app/modules/redux/actions/actions.ts");




var CoreFilterService = /** @class */ (function () {
    function CoreFilterService(ngRedux) {
        this.ngRedux = ngRedux;
    }
    CoreFilterService.prototype.updateAppliedFiltersData = function (newData) {
        // store the response data in the redux store
        var reduxObject = {
            type: _actions_actions__WEBPACK_IMPORTED_MODULE_3__["AppliedFiltersActions"].ADD_APPLIED_FILTERS_DATA,
            payload: {
                requestBody: {},
                filteredData: {}
            }
        };
        if (newData.hasOwnProperty('request')) {
            reduxObject.payload.requestBody = newData.request;
        }
        if (newData.hasOwnProperty('data')) {
            reduxObject.payload.filteredData = newData.data;
        }
        this.ngRedux.dispatch(reduxObject);
    };
    CoreFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], CoreFilterService);
    return CoreFilterService;
}());



/***/ }),

/***/ "./src/app/modules/redux/store.ts":
/*!****************************************!*\
  !*** ./src/app/modules/redux/store.ts ***!
  \****************************************/
/*! exports provided: rootReducer, INITIAL_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/actions */ "./src/app/modules/redux/actions/actions.ts");
/* harmony import */ var _services_applied_filters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/applied_filters_service */ "./src/app/modules/redux/services/applied_filters_service.ts");


/**
 * Root reducer
 * @param state previous state of the store
 * @param action action to perform
 * @returns  new state
 * @description The Root Reducer is the one which will handle all the Action declarations.
 * This is the only reducer which will store the initial state. The purpose of the root reducer is
 * to recieve the action and pass it to the respective action handler / sub reducer
 */
function rootReducer(state, action) {
    if (typeof action.type === 'string') {
        switch (action.type) {
            case _actions_actions__WEBPACK_IMPORTED_MODULE_0__["AppliedFiltersActions"].ADD_APPLIED_FILTERS_DATA:
                return _services_applied_filters_service__WEBPACK_IMPORTED_MODULE_1__["addFilteredDataAction"](state, action);
            case _actions_actions__WEBPACK_IMPORTED_MODULE_0__["AppliedFiltersActions"].CLEAR_STORE:
                var emptyObject = {
                    appliedFilters: {
                        requestBody: {},
                        filteredData: []
                    },
                    lastUpdated: null
                };
                return _services_applied_filters_service__WEBPACK_IMPORTED_MODULE_1__["updateObject"](state, emptyObject);
        }
    }
    else {
        console.log('%c Type of action provided is not string', 'color: red; font-weight: bold;');
    }
    return state;
}
var INITIAL_STATE = {
    appliedFilters: {
        requestBody: {},
        filteredData: []
    },
    lastUpdated: null
};


/***/ }),

/***/ "./src/app/modules/shared/component/color-picker/color-picker.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/component/color-picker/color-picker.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input [(colorPicker)]=\"newTypeColor\" \n[style.background]=\"newTypeColor\" [cpPosition]=\"left\" \nid=\"newTypeColor\" [cpFallbackColor]=\"newTypeColor\"\n[cpOKButton]=\"true\" [cpOKButtonText]=\"'Select'\"\n(colorPickerSelect)=\"selectedColor($event)\"/>\n"

/***/ }),

/***/ "./src/app/modules/shared/component/color-picker/color-picker.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/component/color-picker/color-picker.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#newTypeColor {\n  max-width: 50px;\n  cursor: pointer;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n::ng-deep .cp-ok-button-class {\n  background: #318ce0;\n  min-width: 65px;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  line-height: 2em; }\n\ninput#newTypeColor {\n  color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50L2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQiw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxtQkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50L2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmV3VHlwZUNvbG9yIHtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG46Om5nLWRlZXAgLmNwLW9rLWJ1dHRvbi1jbGFzcyB7XG4gICAgYmFja2dyb3VuZDogcmdiKDQ5LCAxNDAsIDIyNCk7XG4gICAgbWluLXdpZHRoOiA2NXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG59XG5cbmlucHV0I25ld1R5cGVDb2xvciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shared/component/color-picker/color-picker.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/shared/component/color-picker/color-picker.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent() {
        // Private variables for component
        // public default = '#36cc95';
        this.default = '#96C1FA';
        // Input variables from parent
        this.elDefault = null;
        this.elWidth = '50px';
        // Output from the component to parent
        this.selectedColorCode = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.default);
    }
    ColorPickerComponent.prototype.ngOnInit = function () {
    };
    ColorPickerComponent.prototype.ngOnChanges = function () {
        this.newTypeColor = this.elDefault || this.default;
    };
    ColorPickerComponent.prototype.selectedColor = function (SelectedColorEvent) {
        if (SelectedColorEvent.length) {
            console.log('user selected newcolor code', SelectedColorEvent);
            this.selectedColorCode.next(SelectedColorEvent);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ColorPickerComponent.prototype, "elDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ColorPickerComponent.prototype, "elWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ColorPickerComponent.prototype, "selectedColorCode", void 0);
    ColorPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-picker',
            template: __webpack_require__(/*! ./color-picker.component.html */ "./src/app/modules/shared/component/color-picker/color-picker.component.html"),
            styles: [__webpack_require__(/*! ./color-picker.component.scss */ "./src/app/modules/shared/component/color-picker/color-picker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorPickerComponent);
    return ColorPickerComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"loader\">\n        <img src=\"./../../../../../../assets/bars_loader.svg\">\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n  margin: auto;\n  display: table;\n  vertical-align: middle;\n  z-index: 9999; }\n\n.loader {\n  width: 100%;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  align-self: center;\n  justify-content: center; }\n\n.loader img {\n    width: 80px;\n    height: 80px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50L2dsb2JhbC1sb2FkZXIvZ2xvYmFsLWxvYWRlci9nbG9iYWwtbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBWTtFQUNaLFlBQWE7RUFDYixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixZQUFXO0VBQ1gsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixhQUFhLEVBQUE7O0FBSWpCO0VBQ0ksV0FBWTtFQUtaLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QixFQUFBOztBQVozQjtJQUdRLFdBQVc7SUFDZixZQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnQvZ2xvYmFsLWxvYWRlci9nbG9iYWwtbG9hZGVyL2dsb2JhbC1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgd2lkdGggOiAxMDAlO1xuICAgIGhlaWdodCA6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB6LWluZGV4OiA5OTk5O1xuXG59XG5cbi5sb2FkZXIge1xuICAgIHdpZHRoIDogMTAwJTtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQgOiA4MHB4O1xuICAgIH1cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: GlobalLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalLoaderComponent", function() { return GlobalLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalLoaderComponent = /** @class */ (function () {
    function GlobalLoaderComponent() {
    }
    GlobalLoaderComponent.prototype.ngOnInit = function () {
    };
    GlobalLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-global-loader',
            template: __webpack_require__(/*! ./global-loader.component.html */ "./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.html"),
            styles: [__webpack_require__(/*! ./global-loader.component.scss */ "./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalLoaderComponent);
    return GlobalLoaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/component/sidebar/sidebar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/component/sidebar/sidebar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n    <div class=\"sidebar-header dr-menu\">\n        <h2 class=\"dr-label\">Network Elements</h2>\n    </div>\n    <!------------------Org---------------------->\n    <div class=\"side\">\n        <nav class=\"dr-menu\">\n            <div class=\"dr-trigger\"><span class=\"fas fa-globe-asia\"></span><a class=\"dr-label\" (click)=\"networkElementClick('Organisation')\">Organisation</a>\n                <sui-multi-select [(ngModel)]=\"selectedOrg\" [options]=\"orgOptions\" [maxSelected]=\"5\" #organisation>\n                    <div class=\"ui icon search input\">\n                        <i class=\"search icon\"></i>\n                        <input suiSelectSearch type=\"text\" placeholder=\"Search organisations...\">\n                    </div>\n                    <div class=\"divider\"></div>\n                    <div class=\"header\">\n                        <i class=\"list icon\"></i> Options\n                    </div>\n                    <div class=\"scrolling menu\">\n                        <sui-select-option *ngFor=\"let o of organisation.filteredOptions\" [value]=\"o\"></sui-select-option>\n                    </div>\n                </sui-multi-select>\n            </div>\n        </nav>\n    </div>\n    <!------------------Org---------------------->\n    <!------------------Department---------------------->\n    <div class=\"side\">\n        <nav class=\"dr-menu\">\n            <div class=\"dr-trigger\"><span class=\"fa fa-linode\"></span><a class=\"dr-label\" (click)=\"networkElementClick('Department')\">Department</a>\n                <sui-multi-select [(ngModel)]=\"selectedDepartment\" [options]=\"departmentOptions\" [maxSelected]=\"5\" #department>\n                    <div class=\"ui icon search input\">\n                        <i class=\"search icon\"></i>\n                        <input suiSelectSearch type=\"text\" placeholder=\"Search department...\">\n                    </div>\n                    <div class=\"divider\"></div>\n                    <div class=\"header\">\n                        <i class=\"list icon\"></i> Options\n                    </div>\n                    <div class=\"scrolling menu\">\n                        <sui-select-option *ngFor=\"let o of department.filteredOptions\" [value]=\"o\"></sui-select-option>\n                    </div>\n                </sui-multi-select>\n            </div>\n        </nav>\n    </div>\n    <!------------------Department---------------------->\n    <!------------------Person---------------------->\n    <div class=\"side\">\n        <nav class=\"dr-menu\">\n            <div class=\"dr-trigger\"><span class=\"fa fa-user-o\"></span><a class=\"dr-label\" (click)=\"networkElementClick('Person')\">Person</a>\n                <sui-multi-select [(ngModel)]=\"selectedPerson\" [options]=\"personOptions\" [maxSelected]=\"5\" #person>\n                    <div class=\"ui icon search input\">\n                        <i class=\"search icon\"></i>\n                        <input suiSelectSearch type=\"text\" placeholder=\"Search person...\">\n                    </div>\n                    <div class=\"divider\"></div>\n                    <div class=\"header\">\n                        <i class=\"list icon\"></i> Options\n                    </div>\n                    <div class=\"scrolling menu\">\n                        <sui-select-option *ngFor=\"let o of person.filteredOptions\" [value]=\"o\"></sui-select-option>\n                    </div>\n                </sui-multi-select>\n            </div>\n        </nav>\n    </div>\n    <!------------------Person---------------------->\n    <!------------------Relationship type---------------------->\n    <div class=\"side\">\n        <nav class=\"dr-menu\">\n            <div class=\"dr-trigger\"><span class=\"fas fa-code-branch\"></span><a class=\"dr-label\" (click)=\"networkElementClick('Relationship')\">Relationships</a>\n                <sui-multi-select [(ngModel)]=\"selectedRelation\" [options]=\"relationOptions\" [maxSelected]=\"5\" #relation>\n                    <div class=\"ui icon search input\">\n                        <i class=\"search icon\"></i>\n                        <input suiSelectSearch type=\"text\" placeholder=\"Search relations...\">\n                    </div>\n                    <div class=\"divider\"></div>\n                    <div class=\"header\">\n                        <i class=\"list icon\"></i> Options\n                    </div>\n                    <div class=\"scrolling menu\">\n                        <sui-select-option *ngFor=\"let o of relation.filteredOptions\" [value]=\"o\"></sui-select-option>\n                    </div>\n                </sui-multi-select>\n            </div>\n        </nav>\n    </div>\n    <!------------------Relationship type---------------------->\n    <!------------------Search---------------------->\n    <div class=\"search-btn\">\n        <button class=\"btn search-graph\" (click)=\"searchGraph()\">Search Graph</button>\n    </div>\n    <div class=\"reload-btn\">\n        <button class=\"btn search-graph\" (click)=\"networkElementClick('Reload')\">Reload</button>\n    </div>\n    <!------------------Search---------------------->\n\n\n</div>"

/***/ }),

/***/ "./src/app/modules/shared/component/sidebar/sidebar.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/component/sidebar/sidebar.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'icomoon';\n  src: url('icomoon.eot');\n  src: url('icomoon.eot?#iefix') format(\"embedded-opentype\"), url('icomoon.woff') format(\"woff\"), url('icomoon.ttf') format(\"truetype\"), url('icomoon.svg#icomoon') format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.sidebar {\n  background: #C0C0C0;\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.side {\n  float: left;\n  min-width: 320px;\n  min-height: 140px; }\n\n.dr-menu {\n  width: 100%;\n  max-width: 400px;\n  min-width: 300px;\n  position: relative;\n  font-size: 1.3em;\n  line-height: 2.5;\n  font-weight: 400;\n  color: #fff;\n  padding-top: 2em;\n  padding-bottom: 45px; }\n\n.dr-menu > div {\n  cursor: pointer;\n  position: absolute;\n  width: 100%; }\n\n.dr-menu > div .dr-icon {\n  top: 0;\n  left: 0;\n  position: absolute;\n  font-size: 150%;\n  line-height: 1.6;\n  padding: 0 10px;\n  transition: all 0.2s ease; }\n\n.dr-menu.dr-menu-open > div .dr-icon {\n  color: #fff;\n  left: 100%;\n  transform: translateX(-100%); }\n\n.dr-menu > div .dr-icon:after {\n  content: \"\\e008\";\n  position: absolute;\n  font-size: 50%;\n  line-height: 3.25;\n  left: -10%;\n  opacity: 0; }\n\n.dr-menu.dr-menu-open > div .dr-icon:after {\n  opacity: 1; }\n\n.dr-menu > div .dr-label {\n  padding-left: 1em;\n  position: relative;\n  display: inline-block;\n  color: #fff;\n  font-size: 0.9em;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  line-height: 2.75;\n  transition: all 0.2s ease; }\n\nspan.fas {\n  margin-left: 2em; }\n\nspan.fa {\n  margin-left: 2em; }\n\n.dr-menu.dr-menu-open > div .dr-label {\n  transform: translateY(-90%); }\n\n.dr-menu ul {\n  padding: 0;\n  margin: 0 3em 0 0;\n  list-style: none;\n  opacity: 0;\n  position: relative;\n  z-index: 0;\n  pointer-events: none;\n  transition: opacity 0s linear 205ms; }\n\n.dr-menu.dr-menu-open ul {\n  opacity: 1;\n  z-index: 200;\n  pointer-events: auto;\n  transition: opacity 0s linear 0s; }\n\n.dr-menu ul li {\n  display: block;\n  margin: 0 0 5px 0;\n  opacity: 0;\n  transition: opacity 0.3s ease; }\n\n.dr-menu.dr-menu-open ul li {\n  opacity: 1; }\n\n.dr-menu.dr-menu-open ul li:nth-child(2) {\n  transition-delay: 35ms; }\n\n.dr-menu.dr-menu-open ul li:nth-child(3) {\n  transition-delay: 70ms; }\n\n.dr-menu.dr-menu-open ul li:nth-child(4) {\n  transition-delay: 105ms; }\n\n.dr-menu.dr-menu-open ul li:nth-child(5) {\n  transition-delay: 140ms; }\n\n.dr-menu.dr-menu-open ul li:nth-child(6) {\n  transition-delay: 175ms; }\n\n.dr-menu.dr-menu-open ul li:nth-child(7) {\n  transition-delay: 205ms; }\n\n.dr-menu ul li a {\n  display: inline-block;\n  padding: 0 20px;\n  color: #C0C0C0; }\n\n.dr-menu ul li a:hover {\n  color: #000; }\n\n.dr-icon:before,\n.dr-icon:after {\n  position: relative;\n  font-family: 'icomoon';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased; }\n\n.ui.multiple.dropdown {\n  padding: .22619048em 0em .22619048em 0em; }\n\n.search-btn {\n  position: relative;\n  width: 300px;\n  height: 50px; }\n\n.search-graph {\n  background: #C0C0C0;\n  border: 2px solid #fff;\n  color: #fff;\n  margin-top: 100px;\n  margin-left: 50px; }\n\n.dropdown.icon {\n  padding-right: 20px !important; }\n\n.sidebar-header h2 {\n  margin-left: 20px; }\n\n.divider {\n  width: 100%;\n  color: #fff; }\n\n.hr {\n  color: #fff;\n  width: 100%; }\n\n.reload-btn {\n  width: 300px;\n  height: 50px;\n  margin-left: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQjtFQUN0Qix1QkFBbUQ7RUFDbkQsK0tBQStSO0VBQy9SLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksTUFBTTtFQUNOLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBR2YseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFJViw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBR2pCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUlJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9CQUFvQjtFQUdwQixtQ0FBbUMsRUFBQTs7QUFHdkM7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG9CQUFvQjtFQUdwQixnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFVBQVU7RUFHViw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFHSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFHSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFHSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFHSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFHSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFHSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7O0VBRUksa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1DQUFtQyxFQUFBOztBQUd2QztFQUNJLHdDQUF3QyxFQUFBOztBQUc1QztFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdoQjtFQUNJLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdpY29tb29uJztcbiAgICBzcmM6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2ljb21vb24uZW90Jyk7XG4gICAgc3JjOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9pY29tb29uLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2ljb21vb24ud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9pY29tb29uLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvaWNvbW9vbi5zdmcjaWNvbW9vbicpIGZvcm1hdCgnc3ZnJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiAjQzBDMEMwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaWRlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDE0MHB4O1xufVxuXG4uZHItbWVudSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xufVxuXG4uZHItbWVudT5kaXYge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5kci1tZW51PmRpdiAuZHItaWNvbiB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5kci1tZW51LmRyLW1lbnUtb3Blbj5kaXYgLmRyLWljb24ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xufVxuXG4uZHItbWVudT5kaXYgLmRyLWljb246YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxlMDA4XCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiAzLjI1O1xuICAgIGxlZnQ6IC0xMCU7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmRyLW1lbnUuZHItbWVudS1vcGVuPmRpdiAuZHItaWNvbjphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmRyLW1lbnU+ZGl2IC5kci1sYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjc1O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuc3Bhbi5mYXMge1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG59XG5cbnNwYW4uZmEge1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG59XG5cbi5kci1tZW51LmRyLW1lbnUtb3Blbj5kaXYgLmRyLWxhYmVsIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOTAlKTtcbn1cblxuLmRyLW1lbnUgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIDNlbSAwIDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwcyBsaW5lYXIgMjA1bXM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDBzIGxpbmVhciAyMDVtcztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDBzIGxpbmVhciAyMDVtcztcbn1cblxuLmRyLW1lbnUuZHItbWVudS1vcGVuIHVsIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDIwMDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMHMgbGluZWFyIDBzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwcyBsaW5lYXIgMHM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwcyBsaW5lYXIgMHM7XG59XG5cbi5kci1tZW51IHVsIGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgMCA1cHggMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuLmRyLW1lbnUuZHItbWVudS1vcGVuIHVsIGxpIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uZHItbWVudS5kci1tZW51LW9wZW4gdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDM1bXM7XG4gICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAzNW1zO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDM1bXM7XG59XG5cbi5kci1tZW51LmRyLW1lbnUtb3BlbiB1bCBsaTpudGgtY2hpbGQoMykge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogNzBtcztcbiAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDcwbXM7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogNzBtcztcbn1cblxuLmRyLW1lbnUuZHItbWVudS1vcGVuIHVsIGxpOm50aC1jaGlsZCg0KSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxMDVtcztcbiAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDEwNW1zO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDEwNW1zO1xufVxuXG4uZHItbWVudS5kci1tZW51LW9wZW4gdWwgbGk6bnRoLWNoaWxkKDUpIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDE0MG1zO1xuICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMTQwbXM7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMTQwbXM7XG59XG5cbi5kci1tZW51LmRyLW1lbnUtb3BlbiB1bCBsaTpudGgtY2hpbGQoNikge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMTc1bXM7XG4gICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAxNzVtcztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxNzVtcztcbn1cblxuLmRyLW1lbnUuZHItbWVudS1vcGVuIHVsIGxpOm50aC1jaGlsZCg3KSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAyMDVtcztcbiAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDIwNW1zO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDIwNW1zO1xufVxuXG4uZHItbWVudSB1bCBsaSBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGNvbG9yOiAjQzBDMEMwO1xufVxuXG4uZHItbWVudSB1bCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmRyLWljb246YmVmb3JlLFxuLmRyLWljb246YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LWZhbWlseTogJ2ljb21vb24nO1xuICAgIHNwZWFrOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4udWkubXVsdGlwbGUuZHJvcGRvd24ge1xuICAgIHBhZGRpbmc6IC4yMjYxOTA0OGVtIDBlbSAuMjI2MTkwNDhlbSAwZW07XG59XG5cbi5zZWFyY2gtYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLnNlYXJjaC1ncmFwaCB7XG4gICAgYmFja2dyb3VuZDogI0MwQzBDMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uZHJvcGRvd24uaWNvbiB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uc2lkZWJhci1oZWFkZXIgaDIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZGl2aWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5ociB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZWxvYWQtYnRuIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/component/sidebar/sidebar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shared/component/sidebar/sidebar.component.ts ***!
  \***********************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/graph-data-service/graph-data.service */ "./src/app/modules/core/services/graph-data-service/graph-data.service.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(graphDataService) {
        this.graphDataService = graphDataService;
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.orgOptions = [];
        this.relationOptions = [];
        this.departmentOptions = [];
        this.personOptions = [];
        this.selectedOrg = [];
        this.selectedRelation = [];
        this.selectedDepartment = [];
        this.selectedPerson = [];
        this.selectedRelationship = [];
        this.selectedGraph = [];
        this.searchGraphData = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.getGraph();
    };
    SidebarComponent.prototype.networkElementClick = function (element) {
        if (element) {
            this.eventClicked.emit(element);
        }
    };
    SidebarComponent.prototype.getGraph = function () {
        var _this = this;
        this.graphDataService.getInitialData().subscribe(function (data) {
            var temorg = [];
            var temdep = [];
            var temper = [];
            if (data && data['seperateNodes'] && data['seperateEdges']) {
                data['seperateNodes'].filter(function (node) {
                    if (node.type[0] === "Organisation") {
                        temorg.push(node.label);
                    }
                    else if (node.type[0] === "Department") {
                        temdep.push(node.label);
                    }
                    else if (node.type[0] === "Person") {
                        temper.push(node.label);
                    }
                });
                data['seperateEdges'].filter(function (edge) {
                    _this.relationOptions.push(edge.label);
                });
            }
            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
            }
            _this.relationOptions = _this.relationOptions.filter(onlyUnique);
            _this.orgOptions = temorg;
            _this.departmentOptions = temdep;
            _this.personOptions = temper;
        });
    };
    SidebarComponent.prototype.searchGraph = function () {
        var _this = this;
        this.selectedGraph.push({ type: "Organisation", value: this.selectedOrg });
        this.selectedGraph.push({ type: "Department", value: this.selectedDepartment });
        this.selectedGraph.push({ type: "Person", value: this.selectedPerson });
        this.selectedRelation.filter(function (rel) {
            _this.selectedRelationship.push({ type: rel, value: [] });
        });
        this.searchGraphData.push({ nodes: this.selectedGraph, edges: this.selectedRelationship });
        console.log('or', this.searchGraphData);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarComponent.prototype, "eventClicked", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/modules/shared/component/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/modules/shared/component/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toggleWrapper\">\n  <label class=\"switch\">\n    <input type=\"checkbox\" (change)=\"toggleEventHandler($event)\">\n    <span class=\"slider round\"></span>\n  </label>\n</div>"

/***/ }),

/***/ "./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toggleWrapper {\n  text-align: center;\n  width: 50%;\n  margin: auto;\n  height: 20%; }\n\n.switch {\n  position: relative;\n  display: block;\n  top: 8px;\n  width: 50px;\n  height: 30px; }\n\n.slider {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: pointer;\n  background: white;\n  border: 2px solid black;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  transition: .5s; }\n\n.slider:before {\n  position: absolute;\n  left: 0;\n  content: \"\";\n  top: 4.5px;\n  bottom: 3px;\n  background-color: black;\n  transition: .5s; }\n\n.switch input {\n  display: none; }\n\ninput:checked + .slider {\n  background-color: black; }\n\ninput:checked + .slider:before {\n  transform: translateX(27px) rotateZ(45deg);\n  background-color: white; }\n\n.slider.round {\n  border-radius: 35px; }\n\n.slider.round:before {\n  width: 43%;\n  height: 43%;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  transform: rotateZ(-45deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50L3RvZ2dsZS1zd2l0Y2gvdG9nZ2xlLXN3aXRjaC90b2dnbGUtc3dpdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQW1CO0VBQ25CLFVBQVc7RUFDWCxZQUFhO0VBQ2IsV0FBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQW1CO0VBQ25CLGNBQWU7RUFDZixRQUFRO0VBQ1IsV0FBWTtFQUNaLFlBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFtQjtFQUNuQixNQUFRO0VBQ1IsUUFBUztFQUNULFNBQVU7RUFDVixPQUFRO0VBQ1IsZUFBZ0I7RUFDaEIsaUJBQWtCO0VBQ2xCLHVCQUF3QjtFQUN4QiwwQ0FBd0M7RUFDeEMsZUFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBbUI7RUFDbkIsT0FBUTtFQUNSLFdBQVk7RUFDWixVQUFXO0VBQ1gsV0FBWTtFQUNaLHVCQUF3QjtFQUN4QixlQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWMsRUFBQTs7QUFHaEI7RUFDRSx1QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSwwQ0FBMkM7RUFDM0MsdUJBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsbUJBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsVUFBVztFQUNYLFdBQVk7RUFDWiw0QkFBNkI7RUFDN0IsNkJBQThCO0VBQzlCLDBCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50L3RvZ2dsZS1zd2l0Y2gvdG9nZ2xlLXN3aXRjaC90b2dnbGUtc3dpdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZ2dsZVdyYXBwZXIge1xuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XG4gICAgd2lkdGggOiA1MCU7XG4gICAgbWFyZ2luIDogYXV0bztcbiAgICBoZWlnaHQgOiAyMCU7XG4gIH1cbiAgXG4gIC5zd2l0Y2gge1xuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XG4gICAgZGlzcGxheSA6IGJsb2NrO1xuICAgIHRvcDogOHB4O1xuICAgIHdpZHRoIDogNTBweDtcbiAgICBoZWlnaHQgOiAzMHB4O1xuICB9XG4gIFxuICAuc2xpZGVyIHtcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIHRvcCA6IDAgOyBcbiAgICByaWdodCA6IDA7IFxuICAgIGJvdHRvbSA6IDA7IFxuICAgIGxlZnQgOiAwO1xuICAgIGN1cnNvciA6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZCA6IHdoaXRlO1xuICAgIGJvcmRlciA6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3gtc2hhZG93IDogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIHRyYW5zaXRpb24gOiAuNXM7XG4gIH1cbiAgXG4gIC5zbGlkZXI6YmVmb3JlIHtcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIGxlZnQgOiAwO1xuICAgIGNvbnRlbnQgOiBcIlwiO1xuICAgIHRvcCA6IDQuNXB4O1xuICAgIGJvdHRvbSA6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogYmxhY2s7XG4gICAgdHJhbnNpdGlvbiA6IC41cztcbiAgfVxuICBcbiAgLnN3aXRjaCBpbnB1dCB7XG4gICAgZGlzcGxheSA6IG5vbmU7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogYmxhY2s7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtIDogdHJhbnNsYXRlWCgyN3B4KSByb3RhdGVaKDQ1ZGVnKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogd2hpdGU7XG4gIH1cbiAgXG4gIC5zbGlkZXIucm91bmQge1xuICAgIGJvcmRlci1yYWRpdXMgOiAzNXB4O1xuICB9XG4gIFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgd2lkdGggOiA0MyU7XG4gICAgaGVpZ2h0IDogNDMlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXMgOiA1MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzIDogNTBweDtcbiAgICB0cmFuc2Zvcm0gOiByb3RhdGVaKC00NWRlZyk7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ToggleSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSwitchComponent", function() { return ToggleSwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToggleSwitchComponent = /** @class */ (function () {
    function ToggleSwitchComponent() {
        this.toggleOn = false;
        this.toggleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](null);
    }
    ToggleSwitchComponent.prototype.ngOnInit = function () {
    };
    ToggleSwitchComponent.prototype.toggleEventHandler = function (event) {
        this.toggleOn = !this.toggleOn;
        this.toggleEvent.emit({ type: 'toggle', isOn: this.toggleOn });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToggleSwitchComponent.prototype, "toggleEvent", void 0);
    ToggleSwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toggle-switch',
            template: __webpack_require__(/*! ./toggle-switch.component.html */ "./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.html"),
            styles: [__webpack_require__(/*! ./toggle-switch.component.scss */ "./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToggleSwitchComponent);
    return ToggleSwitchComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/services/export-service/excel.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/services/export-service/excel.service.ts ***!
  \*************************************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_modules_core_services_public_public_http_public_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/core/services/public/public-http/public-http.service */ "./src/app/modules/core/services/public/public-http/public-http.service.ts");




var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService(publicHttp) {
        this.publicHttp = publicHttp;
    }
    // public exportAsExcelFile(){
    //   let request = {
    //     url: "http://localhost:9000/v1/data/read",
    //     httpOptions :{
    //         // "user-token": token['user-token'],
    //          "contentType": 'text/csv',
    //         "Access-Control-Allow-Origin" : true
    //        }
    //   }
    //   this.publicHttp.get(request.url, request.httpOptions).subscribe((response:any) => {
    //     let blob = new Blob([response], { type: 'data:text/csv' });
    //     let downloadUrl = URL.createObjectURL(blob);
    //     let a = document.createElement("a");
    //     a.href = downloadUrl;
    //     let d = new Date();
    //     a.download = "GraphData_"+d.getTime();+".csv";
    //     document.body.appendChild(a);
    //     a.click();
    //   },err =>{
    //     if(err.status === 200 && err.ok == false){
    //       let blob = new Blob(err.text, { type: 'data:text/csv' });
    //     let downloadUrl = URL.createObjectURL(blob);
    //     let a = document.createElement("a");
    //     a.href = downloadUrl;
    //     let d = new Date();
    //     a.download = "GraphData_"+d.getTime()+".xlsx";
    //     document.body.appendChild(a);
    //     a.click();
    //     }
    //     else {console.log("else",err)}
    //   })
    // }
    ExcelService.prototype.exportAsExcelFile = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            var settings = {
                url: "http://localhost:9000/v1/data/read",
                type: 'GET',
                headers: {},
                contentType: 'application/json; charset=utf-8',
            };
            jquery__WEBPACK_IMPORTED_MODULE_2__["ajax"](settings)
                .done(function (response) {
                console.log('hello', response);
                var blob = new Blob([response], { type: 'data:application/vnd.ms-excel' });
                var downloadUrl = URL.createObjectURL(blob);
                var a = document.createElement("a");
                a.href = downloadUrl;
                a.download = "Database.xlsx";
                document.body.appendChild(a);
                a.click();
            }).fail(function (error) {
                console.log('error recieved is ', error);
            });
        });
    };
    ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_public_public_http_public_http_service__WEBPACK_IMPORTED_MODULE_3__["PublicHttpService"]])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/modules/shared/services/search-service/search.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/shared/services/search-service/search.service.ts ***!
  \**************************************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.runQuery = function (request) {
        var url = '/api/search/neo4j';
        var token = 'DDCE5DBC3AA826EA295F963113B4F';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Database_Authorization: token
            })
        };
        return this.http.post(url, request, httpOptions);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/shared-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var SharedRoutingModule = /** @class */ (function () {
    function SharedRoutingModule() {
    }
    SharedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SharedRoutingModule);
    return SharedRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-routing.module */ "./src/app/modules/shared/shared-routing.module.ts");
/* harmony import */ var _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/sidebar/sidebar.component */ "./src/app/modules/shared/component/sidebar/sidebar.component.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _component_global_loader_global_loader_global_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/global-loader/global-loader/global-loader.component */ "./src/app/modules/shared/component/global-loader/global-loader/global-loader.component.ts");
/* harmony import */ var _component_toggle_switch_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/toggle-switch/toggle-switch/toggle-switch.component */ "./src/app/modules/shared/component/toggle-switch/toggle-switch/toggle-switch.component.ts");
/* harmony import */ var _component_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/color-picker/color-picker.component */ "./src/app/modules/shared/component/color-picker/color-picker.component.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");












var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _component_global_loader_global_loader_global_loader_component__WEBPACK_IMPORTED_MODULE_8__["GlobalLoaderComponent"],
                _component_toggle_switch_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_9__["ToggleSwitchComponent"],
                _component_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_10__["ColorPickerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharedRoutingModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["SuiSelectModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__["ColorPickerModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["SuiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"]
            ],
            exports: [
                _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _component_global_loader_global_loader_global_loader_component__WEBPACK_IMPORTED_MODULE_8__["GlobalLoaderComponent"],
                _component_toggle_switch_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_9__["ToggleSwitchComponent"],
                _component_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_10__["ColorPickerComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/modules/shell/component/footer/footer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shell/component/footer/footer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"subscribe\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3 class=\"subscribe-title\">Subscribe Newsletter</h3>\n                <form role=\"form\" class=\"subscribe-form\">\n                    <div class=\"input-group\">\n                        <input type=\"email\" class=\"form-control\" id=\"mc-email\" placeholder=\"Enter E-mail...\">\n                        <span class=\"input-group-btn\">\n                <button class=\"btn btn-main btn-lg\" type=\"submit\">Subscribe!</button>\n              </span>\n                    </div>\n                </form>\n                <div class=\"subscribe-result\"></div>\n                <p class=\"subscribe-or\">or</p>\n                <ul class=\"subscribe-social\">\n                    <li><a href=\"#\" class=\"social twitter\"><i class=\"fa fa-twitter\"></i> Follow</a></li>\n                    <li><a href=\"#\" class=\"social facebook\"><i class=\"fa fa-facebook\"></i> Like</a></li>\n                    <li><a href=\"#\" class=\"social rss\"><i class=\"fa fa-rss\"></i> RSS</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/modules/shell/component/footer/footer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shell/component/footer/footer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subscribe {\n  padding: 120px 0;\n  background-image: url('footer.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-color: #000;\n  position: relative; }\n\n.subscribe .subscribe-title {\n  text-align: center;\n  color: #fff;\n  margin-bottom: 50px;\n  font-size: 32px;\n  text-transform: uppercase;\n  font-weight: 300; }\n\n.subscribe .subscribe-or {\n  font-family: \"Oswald\";\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n  padding: 30px 0;\n  margin: 0;\n  text-transform: uppercase; }\n\n.subscribe .subscribe-social {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center; }\n\n.subscribe .subscribe-social li {\n  padding: 0;\n  margin: 0;\n  margin-right: 5px;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1; }\n\n.subscribe-form {\n  max-width: 500px;\n  margin: 0 auto; }\n\n.subscribe-form .form-control {\n  border-radius: 30px 2px 2px 30px !important;\n  padding: 14px 20px 14px 30px !important; }\n\na.social {\n  font-family: \"Oswald\";\n  letter-spacing: 1px;\n  display: inline-block;\n  background-color: #4ecdc4;\n  color: #fff;\n  padding: 8px 20px 8px 65px;\n  border-radius: 50px;\n  position: relative;\n  overflow: hidden;\n  transition: background-color 0.3s, text-indent 0.3s, padding 0.3s; }\n\na.social i {\n  display: block;\n  background-color: #31ada4;\n  width: 50px;\n  height: 42px;\n  line-height: 42px;\n  font-size: 17px;\n  border-radius: 50px 0 0 50px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  text-indent: 10px;\n  transition: text-indent 0.3s; }\n\na.social:hover {\n  background-color: #31ada4;\n  text-indent: -10px;\n  padding: 8px 30px 8px 65px; }\n\na.social:hover i {\n  text-indent: 29px; }\n\na.social.twitter {\n  background-color: #2daae1; }\n\na.social.twitter i {\n  background-color: #1a87b7; }\n\na.social.twitter:hover {\n  background-color: #1a87b7; }\n\na.social.facebook {\n  background-color: #3c5b9b; }\n\na.social.facebook i {\n  background-color: #2b416f; }\n\na.social.facebook:hover {\n  background-color: #2b416f; }\n\na.social.rss {\n  background-color: #fca73a; }\n\na.social.rss i {\n  background-color: #f58b04; }\n\na.social.rss:hover {\n  background-color: #f58b04; }\n\n.btn-main-o {\n  color: #4ecdc4;\n  border-color: #4ecdc4;\n  background-color: transparent; }\n\n.btn-main-o:hover {\n  color: #fff;\n  background-color: #4ecdc4;\n  border-color: #4ecdc4; }\n\n.btn-main {\n  color: #fff;\n  background-color: #4ecdc4;\n  border-color: #4ecdc4; }\n\n.btn-main:hover,\n.btn-main:focus,\n.btn-main:active {\n  background-color: #33b5ac;\n  border-color: #33b5ac;\n  color: #fff; }\n\n.btn-main:hover,\n.btn-main:focus,\n.btn-main:active {\n  background-color: #33b5ac;\n  border-color: #33b5ac;\n  color: #fff; }\n\n.btn.btn-lg {\n  padding: 10px 35px;\n  letter-spacing: 2px;\n  font-size: 21px; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n  height: 53px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9zaGVsbC9jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixtQ0FBdUQ7RUFDdkQsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixTQUFTO0VBQ1QseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksVUFBVTtFQUNWLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIscUJBQXFCO0dBQ3JCLGVBQWdCO0dBQ2hCLE9BQVEsRUFBQTs7QUFHWjtFQUNJLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksMkNBQTJDO0VBQzNDLHVDQUF1QyxFQUFBOztBQUczQztFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBRWhCLGlFQUFpRSxFQUFBOztBQUdyRTtFQUNJLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixpQkFBaUI7RUFFakIsNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUIsRUFBQTs7QUFHekI7OztFQUdJLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQUdmOzs7RUFHSSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUdwQjs7O0VBR0ksbUJBQW1CLEVBQUE7O0FBR3ZCOztFQUVJLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHdkI7OztFQUdJLG1CQUFtQjtFQUNuQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoZWxsL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnNjcmliZSB7XG4gICAgcGFkZGluZzogMTIwcHggMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2Zvb3Rlci5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3Vic2NyaWJlIC5zdWJzY3JpYmUtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5zdWJzY3JpYmUgLnN1YnNjcmliZS1vciB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdWJzY3JpYmUgLnN1YnNjcmliZS1zb2NpYWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3Vic2NyaWJlIC5zdWJzY3JpYmUtc29jaWFsIGxpIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgKmRpc3BsYXk6IGlubGluZTtcbiAgICAqem9vbTogMTtcbn1cblxuLnN1YnNjcmliZS1mb3JtIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc3Vic2NyaWJlLWZvcm0gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAycHggMnB4IDMwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHggMTRweCAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmEuc29jaWFsIHtcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGRcIjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGVjZGM0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDhweCAyMHB4IDhweCA2NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIHRleHQtaW5kZW50IDAuM3MsIHBhZGRpbmcgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIHRleHQtaW5kZW50IDAuM3MsIHBhZGRpbmcgMC4zcztcbn1cblxuYS5zb2NpYWwgaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxYWRhNDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdGV4dC1pbmRlbnQgMC4zcztcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LWluZGVudCAwLjNzO1xufVxuXG5hLnNvY2lhbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxYWRhNDtcbiAgICB0ZXh0LWluZGVudDogLTEwcHg7XG4gICAgcGFkZGluZzogOHB4IDMwcHggOHB4IDY1cHg7XG59XG5cbmEuc29jaWFsOmhvdmVyIGkge1xuICAgIHRleHQtaW5kZW50OiAyOXB4O1xufVxuXG5hLnNvY2lhbC50d2l0dGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRhYWUxO1xufVxuXG5hLnNvY2lhbC50d2l0dGVyIGkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTg3Yjc7XG59XG5cbmEuc29jaWFsLnR3aXR0ZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTg3Yjc7XG59XG5cbmEuc29jaWFsLmZhY2Vib29rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M1YjliO1xufVxuXG5hLnNvY2lhbC5mYWNlYm9vayBpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI0MTZmO1xufVxuXG5hLnNvY2lhbC5mYWNlYm9vazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiNDE2Zjtcbn1cblxuYS5zb2NpYWwucnNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNhNzNhO1xufVxuXG5hLnNvY2lhbC5yc3MgaSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OGIwNDtcbn1cblxuYS5zb2NpYWwucnNzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU4YjA0O1xufVxuXG4uYnRuLW1haW4tbyB7XG4gICAgY29sb3I6ICM0ZWNkYzQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjNGVjZGM0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLW1haW4tbzpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlY2RjNDtcbiAgICBib3JkZXItY29sb3I6ICM0ZWNkYzQ7XG59XG5cbi5idG4tbWFpbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlY2RjNDtcbiAgICBib3JkZXItY29sb3I6ICM0ZWNkYzQ7XG59XG5cbi5idG4tbWFpbjpob3Zlcixcbi5idG4tbWFpbjpmb2N1cyxcbi5idG4tbWFpbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzM2I1YWM7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzNiNWFjO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLW1haW46aG92ZXIsXG4uYnRuLW1haW46Zm9jdXMsXG4uYnRuLW1haW46YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNiNWFjO1xuICAgIGJvcmRlci1jb2xvcjogIzMzYjVhYztcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi5idG4tbGcge1xuICAgIHBhZGRpbmc6IDEwcHggMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cblxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pbnB1dC1ncm91cC1hZGRvbixcbi5pbnB1dC1ncm91cC1idG4sXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlucHV0LWdyb3VwLWFkZG9uLFxuLmlucHV0LWdyb3VwLWJ0biB7XG4gICAgd2lkdGg6IDElO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmlucHV0LWdyb3VwLWJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaW5wdXQtZ3JvdXAtYWRkb24sXG4uaW5wdXQtZ3JvdXAtYnRuLFxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgaGVpZ2h0OiA1M3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shell/component/footer/footer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/shell/component/footer/footer.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/modules/shell/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/modules/shell/component/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/modules/shell/component/header/header.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shell/component/header/header.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"st-navbar\">\n    <nav class=\"navbar navbar-default navbar-fixed-top clearfix\" role=\"navigation\">\n\n        <a href=\"#\"><img src=\"../../../../../assets/societal-logo.png\" alt=\"\" class=\"img-responsive\"></a>\n\n\n\n        <ul class=\"nav navbar-right\">\n            <!-- <li class=\"active\"><a href=\"#home\">Home</a></li>\n                <li><a href=\"#about\">About</a></li>\n                <li><a href=\"#contact\">Contact Us</a></li> -->\n        </ul>\n        <!-- Brand and toggle get grouped for better mobile display -->\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse main-nav\" id=\"sept-main-nav\">\n\n        </div>\n        <!-- /.navbar-collapse -->\n\n    </nav>\n</header>"

/***/ }),

/***/ "./src/app/modules/shell/component/header/header.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shell/component/header/header.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\n  background: #fff;\n  border-width: 0;\n  margin-bottom: 0 !important;\n  height: 102px;\n  transition: background-color 0.3s, height 0.3s;\n  border-bottom: 2px solid #898787; }\n\nimg {\n  height: 90px;\n  margin-left: 10%; }\n\n.st-navbar-mini .navbar-default {\n  background-color: rgba(40, 40, 40, 0.95);\n  height: 60px; }\n\n.st-navbar-mini .navbar-default .navbar-brand {\n  padding: 15px 15px; }\n\n.st-navbar-mini .navbar-default .navbar-brand img {\n  height: 30px; }\n\n.st-navbar-mini .navbar-default .navbar-nav > li.active > a,\n.st-navbar-mini .navbar-default .navbar-nav > li.active a:hover,\n.st-navbar-mini .navbar-default .navbar-nav > li.active a:focus,\n.st-navbar-mini .navbar-default .navbar-nav > li.active a:active {\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.navbar-brand {\n  height: auto;\n  transition: padding 0.3s; }\n\n.navbar-brand img {\n  height: 80px;\n  width: 180px;\n  margin-left: -300px;\n  transition: height 0.3s; }\n\n.nav > li > a {\n  font-family: \"Oswald\";\n  font-size: 15px;\n  font-weight: 300;\n  letter-spacing: 1px;\n  padding-left: 20px;\n  padding-right: 20px;\n  color: #565656;\n  transition: color 0.3s, background-color 0.3s, padding 0.3s; }\n\n.navbar-nav > li > a:hover,\n.navbar-nav > li > a:focus,\n.navbar-nav > li > a:active {\n  color: #4ecdc4;\n  outline-width: 0; }\n\n.navbar-nav > li.active > a,\n.navbar-nav > li.active a:hover,\n.navbar-nav > li.active a:focus,\n.navbar-nav > li.active a:active {\n  color: #4ecdc4; }\n\n.navbar-default .navbar-nav > li > a {\n  color: #fff; }\n\n.navbar-default .navbar-nav > li.active > a,\n.navbar-default .navbar-nav > li.active a:hover,\n.navbar-default .navbar-nav > li.active a:focus,\n.navbar-default .navbar-nav > li.active a:active {\n  color: #4ecdc4;\n  background-color: rgba(0, 0, 0, 0); }\n\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #4ecdc4; }\n\n@media (min-width: 768px) {\n  .navbar-nav > li > a {\n    padding-top: 41px;\n    padding-bottom: 41px; }\n  .st-navbar-mini .navbar-default .navbar-nav > li > a {\n    padding-top: 20px;\n    padding-bottom: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9zaGVsbC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGFBQWE7RUFFYiw4Q0FBOEM7RUFDOUMsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHdDQUF3QztFQUN4QyxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjs7OztFQUlJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLFlBQVk7RUFFWix3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUVuQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBRWQsMkRBQTJELEVBQUE7O0FBRy9EOzs7RUFHSSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR3BCOzs7O0VBSUksY0FBYyxFQUFBOztBQUdsQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjs7OztFQUlJLGNBQWM7RUFDZCxrQ0FBa0MsRUFBQTs7QUFHdEM7O0VBRUksY0FBYyxFQUFBOztBQUdsQjtFQUNJO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQixFQUFBO0VBRXhCO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQixFQUFBLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGVsbC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItZGVmYXVsdCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAycHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGhlaWdodCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgaGVpZ2h0IDAuM3M7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4OTg3ODc7XG59XG5cbmltZyB7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5zdC1uYXZiYXItbWluaSAubmF2YmFyLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDQwLCA0MCwgMC45NSk7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uc3QtbmF2YmFyLW1pbmkgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcbn1cblxuLnN0LW5hdmJhci1taW5pIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kIGltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uc3QtbmF2YmFyLW1pbmkgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpLmFjdGl2ZT5hLFxuLnN0LW5hdmJhci1taW5pIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saS5hY3RpdmUgYTpob3Zlcixcbi5zdC1uYXZiYXItbWluaSAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGkuYWN0aXZlIGE6Zm9jdXMsXG4uc3QtbmF2YmFyLW1pbmkgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpLmFjdGl2ZSBhOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBwYWRkaW5nIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjNzO1xufVxuXG4ubmF2YmFyLWJyYW5kIGltZyB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBtYXJnaW4tbGVmdDogLTMwMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3M7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3M7XG59XG5cbi5uYXY+bGk+YSB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBjb2xvcjogIzU2NTY1NjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcywgcGFkZGluZyAwLjNzO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcywgcGFkZGluZyAwLjNzO1xufVxuXG4ubmF2YmFyLW5hdj5saT5hOmhvdmVyLFxuLm5hdmJhci1uYXY+bGk+YTpmb2N1cyxcbi5uYXZiYXItbmF2PmxpPmE6YWN0aXZlIHtcbiAgICBjb2xvcjogIzRlY2RjNDtcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xufVxuXG4ubmF2YmFyLW5hdj5saS5hY3RpdmU+YSxcbi5uYXZiYXItbmF2PmxpLmFjdGl2ZSBhOmhvdmVyLFxuLm5hdmJhci1uYXY+bGkuYWN0aXZlIGE6Zm9jdXMsXG4ubmF2YmFyLW5hdj5saS5hY3RpdmUgYTphY3RpdmUge1xuICAgIGNvbG9yOiAjNGVjZGM0O1xufVxuXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGk+YSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saS5hY3RpdmU+YSxcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saS5hY3RpdmUgYTpob3Zlcixcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saS5hY3RpdmUgYTpmb2N1cyxcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saS5hY3RpdmUgYTphY3RpdmUge1xuICAgIGNvbG9yOiAjNGVjZGM0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saT5hOmhvdmVyLFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpPmE6Zm9jdXMge1xuICAgIGNvbG9yOiAjNGVjZGM0O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAubmF2YmFyLW5hdj5saT5hIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQxcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MXB4O1xuICAgIH1cbiAgICAuc3QtbmF2YmFyLW1pbmkgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpPmEge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shell/component/header/header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/shell/component/header/header.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/modules/shell/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/shell/component/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/shell/shell.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/shell/shell.module.ts ***!
  \***********************************************/
/*! exports provided: ShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModule", function() { return ShellModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/modules/shell/component/footer/footer.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/modules/shell/component/header/header.component.ts");





var ShellModule = /** @class */ (function () {
    function ShellModule() {
    }
    ShellModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
            ],
        })
    ], ShellModule);
    return ShellModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aditya/project/network_vizualizer_d3/network-visualizer/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map