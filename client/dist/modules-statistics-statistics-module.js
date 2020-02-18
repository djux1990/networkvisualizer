(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-statistics-statistics-module"],{

/***/ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"data.length\" >\n  <li *ngFor=\"let item of data;let i=index\" >\n    <p [ngClass]=\"{'highlight' : selectedIndex === i || (firstVisit && i === 0)}\" (click)=\"emitData(item,i)\">{{i+1}}. {{item}}</p>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none; }\n\nli {\n  padding-top: 30px;\n  height: 7rem;\n  font-size: 1.6rem; }\n\np {\n  cursor: pointer;\n  color: #7F7F7F; }\n\n.highlight {\n  font-weight: bold; }\n\n@media only screen and (max-width: 1100px) {\n  li {\n    font-size: 1.3rem;\n    height: 5rem; } }\n\n@media only screen and (max-width: 850px) {\n  li {\n    height: 4rem;\n    font-size: 1.1rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9hbGdvLWxpc3QvYWxnby1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUVRLGlCQUFpQixFQUFBOztBQUd6QjtFQUNJO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVksRUFBQSxFQUNmOztBQUVIO0VBQ0U7SUFDSSxZQUFZO0lBQ1osaUJBQWlCLEVBQUEsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FsZ28tcnVubmVyL21vZHVsZXMvc3RhdGlzdGljcy9jb21wb25lbnRzL2FsZ28tbGlzdC9hbGdvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxubGl7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgaGVpZ2h0OiA3cmVtO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xufVxucCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjN0Y3RjdGO1xufVxuLmhpZ2hsaWdodHtcbiAgICBcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgIGxpe1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgbGl7XG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AlgoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoListComponent", function() { return AlgoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_statistical_analysis_result_statistical_analysis_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/statistical-analysis-result/statistical-analysis-result.service */ "./src/app/modules/algo-runner/modules/statistics/services/statistical-analysis-result/statistical-analysis-result.service.ts");



var AlgoListComponent = /** @class */ (function () {
    function AlgoListComponent(statisticalAnalysisResult) {
        this.statisticalAnalysisResult = statisticalAnalysisResult;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AlgoListComponent.prototype.ngOnInit = function () {
        console.log('List of algos', this.data);
    };
    // Emitting the name of algo selected
    AlgoListComponent.prototype.emitData = function (data, index) {
        this.statisticalAnalysisResult.renderAnalysisResult(false);
        this.firstVisit = false;
        this.selectedIndex = index;
        this.clicked.emit(data);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlgoListComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AlgoListComponent.prototype, "firstVisit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlgoListComponent.prototype, "clicked", void 0);
    AlgoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-algo-list',
            template: __webpack_require__(/*! ./algo-list.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.html"),
            styles: [__webpack_require__(/*! ./algo-list.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_statistical_analysis_result_statistical_analysis_result_service__WEBPACK_IMPORTED_MODULE_2__["StatisticalAnalysisResultService"]])
    ], AlgoListComponent);
    return AlgoListComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/analysis-result/analysis-result.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/analysis-result/analysis-result.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<statistic-result-visualizer></statistic-result-visualizer>\n<hr>\n<statistic-initial-graph></statistic-initial-graph>"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/analysis-result/analysis-result.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/analysis-result/analysis-result.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvYW5hbHlzaXMtcmVzdWx0L2FuYWx5c2lzLXJlc3VsdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/analysis-result/analysis-result.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/analysis-result/analysis-result.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AnalysisResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisResultComponent", function() { return AnalysisResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnalysisResultComponent = /** @class */ (function () {
    function AnalysisResultComponent() {
    }
    AnalysisResultComponent.prototype.ngOnInit = function () {
    };
    AnalysisResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'statistic-analysis-result',
            template: __webpack_require__(/*! ./analysis-result.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/analysis-result/analysis-result.component.html"),
            styles: [__webpack_require__(/*! ./analysis-result.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/analysis-result/analysis-result.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnalysisResultComponent);
    return AnalysisResultComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<algo-runner-statistical-toolbar></algo-runner-statistical-toolbar>\n<hr>\n<div *ngIf=\"!flag\">\n   <algo-runner-statistical-content [data]=\"selectedAlgo\"></algo-runner-statistical-content>\n<hr>\n   <algo-runner-statistical-form [selectedAlgorithm]=\"selectedAlgo\" [dropdownData]=\"processedData\"></algo-runner-statistical-form>\n</div>\n<div *ngIf=\"flag\">\n    <statistic-analysis-result></statistic-analysis-result>\n</div>"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvZGV0YWlscy1wYWdlL2RldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_modules_algo_runner_services_statistic_sidebar_data_service_statistic_sidebar_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service */ "./src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service.ts");
/* harmony import */ var _services_statistical_form_utility_statistical_form_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/statistical-form-utility/statistical-form-utility.service */ "./src/app/modules/algo-runner/modules/statistics/services/statistical-form-utility/statistical-form-utility.service.ts");
/* harmony import */ var _services_statistical_analysis_result_statistical_analysis_result_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/statistical-analysis-result/statistical-analysis-result.service */ "./src/app/modules/algo-runner/modules/statistics/services/statistical-analysis-result/statistical-analysis-result.service.ts");




// tslint:disable-next-line: max-line-length



var DetailsPageComponent = /** @class */ (function () {
    function DetailsPageComponent(activatedRoute, statisticSideBarData, statiscticalUtilitySrvc, statisticalAnalysisResult) {
        this.activatedRoute = activatedRoute;
        this.statisticSideBarData = statisticSideBarData;
        this.statiscticalUtilitySrvc = statiscticalUtilitySrvc;
        this.statisticalAnalysisResult = statisticalAnalysisResult;
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (p) { return p.id; })).subscribe(function (data) {
            _this.initializeData(data);
        });
        this.statisticalAnalysisResult.flag$.subscribe(function (data) { return _this.flag = data; });
    };
    /**
     * Initializes data
     * @param data Algo name from route
     * @description selects a particular algo object from the list of all algorithms
     */
    DetailsPageComponent.prototype.initializeData = function (data) {
        var _this = this;
        this.statisticSideBarData.algoList$.subscribe(function (list) {
            // process the data accordingly
            _this.processedData = _this.statiscticalUtilitySrvc.processData(list);
            if (data === undefined) {
                _this.selectedAlgo = list[0];
            }
            else {
                list.forEach(function (item) {
                    if (data === (item.title.replace(/\s/g, '')).toLowerCase()) {
                        _this.selectedAlgo = item;
                    }
                });
            }
        });
    };
    DetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'algo-runner-details-page',
            template: __webpack_require__(/*! ./details-page.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.html"),
            styles: [__webpack_require__(/*! ./details-page.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_modules_algo_runner_services_statistic_sidebar_data_service_statistic_sidebar_data_service__WEBPACK_IMPORTED_MODULE_4__["StatisticSidebarDataService"],
            _services_statistical_form_utility_statistical_form_utility_service__WEBPACK_IMPORTED_MODULE_5__["StatisticalFormUtilityService"],
            _services_statistical_analysis_result_statistical_analysis_result_service__WEBPACK_IMPORTED_MODULE_6__["StatisticalAnalysisResultService"]])
    ], DetailsPageComponent);
    return DetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/generic-dropdown/generic-dropdown.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/generic-dropdown/generic-dropdown.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown-container\" [formGroup]=\"formgroup\">\n  <div class=\"dropdown-label\">\n    <h4 class=\"label\">{{data?.label}}</h4>\n  </div>\n  <div class=\"dropdown-value\">\n      <sui-select class=\"selection\" [ngClass]=\"{'error': !isValid}\"\n      [formControlName]=\"data.label\"\n      (ngModelChange)=\"emitSelectedValue($event, data.label)\"\n      [options]=\"data.value\"\n      [isSearchable]=\"true\"\n      [isDisabled]=\"false\"\n      #dropdownSelect>\n<sui-select-option *ngFor=\"let option of dropdownSelect.filteredOptions\"\n                 [value]=\"option\">\n</sui-select-option>\n</sui-select>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/generic-dropdown/generic-dropdown.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/generic-dropdown/generic-dropdown.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-container {\n  width: 100%;\n  display: flex;\n  margin: 10px; }\n  .dropdown-container .dropdown-label, .dropdown-container .dropdown-value {\n    flex: 1; }\n  .dropdown-label {\n  max-width: 300px;\n  text-align: left; }\n  .dropdown-label .label {\n    height: 100%;\n    line-height: 1.7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9nZW5lcmljLWRyb3Bkb3duL2dlbmVyaWMtZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVksRUFBQTtFQUhoQjtJQUtRLE9BQU8sRUFBQTtFQUlmO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsWUFBWTtJQUNaLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9nZW5lcmljLWRyb3Bkb3duL2dlbmVyaWMtZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICAuZHJvcGRvd24tbGFiZWwsIC5kcm9wZG93bi12YWx1ZSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxufVxuXG4uZHJvcGRvd24tbGFiZWwge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAubGFiZWwge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/generic-dropdown/generic-dropdown.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/generic-dropdown/generic-dropdown.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: GenericDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericDropdownComponent", function() { return GenericDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var GenericDropdownComponent = /** @class */ (function () {
    function GenericDropdownComponent() {
        this.clickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GenericDropdownComponent.prototype.ngOnInit = function () {
    };
    GenericDropdownComponent.prototype.ngOnChanges = function () {
        // detect if the component has recieved any data
        this.data = this.dropdownData;
        console.log('recieved data in the dropdown ', this.data);
    };
    GenericDropdownComponent.prototype.emitSelectedValue = function (event, key) {
        if (event) {
            var val = {};
            val[key] = event;
            this.clickedEvent.emit(val);
        }
    };
    Object.defineProperty(GenericDropdownComponent.prototype, "isValid", {
        get: function () {
            return this.formgroup.controls[this.data['label']].valid;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenericDropdownComponent.prototype, "dropdownData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], GenericDropdownComponent.prototype, "formgroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenericDropdownComponent.prototype, "clickedEvent", void 0);
    GenericDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'statistics-generic-dropdown',
            template: __webpack_require__(/*! ./generic-dropdown.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/generic-dropdown/generic-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./generic-dropdown.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/generic-dropdown/generic-dropdown.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GenericDropdownComponent);
    return GenericDropdownComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/generic-form/generic-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/generic-form/generic-form.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n    <div class=\"form-wrapper\">\n      <form (ngSubmit)=\"null\" [formGroup]=\"form\">\n          <ng-container *ngFor=\"let data of formData\">\n              <statistics-generic-dropdown [dropdownData]=\"data\" [formgroup]=\"form\"></statistics-generic-dropdown>\n            </ng-container>\n      </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/generic-form/generic-form.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/generic-form/generic-form.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  min-width: 100%; }\n  .form-container .form-wrapper {\n    width: 90%;\n    margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9nZW5lcmljLWZvcm0vZ2VuZXJpYy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBO0VBRG5CO0lBR1EsVUFBVTtJQUNWLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvZ2VuZXJpYy1mb3JtL2dlbmVyaWMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIC5mb3JtLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/generic-form/generic-form.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/generic-form/generic-form.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: GenericFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericFormComponent", function() { return GenericFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_statistics_form_creator_statistics_form_creator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/statistics-form-creator/statistics-form-creator.service */ "./src/app/modules/algo-runner/modules/statistics/services/statistics-form-creator/statistics-form-creator.service.ts");
/* harmony import */ var _services_statistical_form_utility_statistical_form_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/statistical-form-utility/statistical-form-utility.service */ "./src/app/modules/algo-runner/modules/statistics/services/statistical-form-utility/statistical-form-utility.service.ts");

// tslint:disable: max-line-length




var GenericFormComponent = /** @class */ (function () {
    function GenericFormComponent(formSrvc, statFormUtilitySrvc) {
        this.formSrvc = formSrvc;
        this.statFormUtilitySrvc = statFormUtilitySrvc;
        this.selectedFormDataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sendFormToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GenericFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // read the form details provided
        this.formDataSubject.subscribe(function (response) { return _this.processForm(response); });
        this.statFormUtilitySrvc.collectGenericFormData.subscribe(function (res) {
            if (res !== null) {
                // collect the form data whatever it is
                _this.collectFormData();
            }
        });
    };
    GenericFormComponent.prototype.collectFormData = function () {
        var collectedForm = this.form.value;
        this.selectedFormDataEvent.emit(collectedForm);
    };
    /**
     * Process form
     * @param formData the parameter should contain data for the form
     * @description The purpose of the function is to create proper form data to render in the formsModule
     */
    GenericFormComponent.prototype.processForm = function (formData) {
        console.log('response from process form is ', formData);
        if (this.validateFormData(formData)) {
            this.prepareFormElements(formData);
        }
    };
    /**
     * Validates form data
     * @param dataToValidate
     * @description The function will valiate the form data on the following parameters
     * 1. The object contains selectedAlgoFormDetails key of object type
     * 2. it must have a key named fields of Array datatype
     *
     * @returns true if form data is validated, false otherwise
     */
    GenericFormComponent.prototype.validateFormData = function (dataToValidate) {
        var isValidated = false;
        if (!!dataToValidate && dataToValidate.constructor === Object) {
            if (dataToValidate.hasOwnProperty('selectedAlgoFormDetails') && dataToValidate.selectedAlgoFormDetails && dataToValidate.selectedAlgoFormDetails.constructor === Object) {
                if (Object.keys(dataToValidate.selectedAlgoFormDetails).length) {
                    if (dataToValidate.selectedAlgoFormDetails.hasOwnProperty('fields') && dataToValidate.selectedAlgoFormDetails.fields && Array.isArray(dataToValidate.selectedAlgoFormDetails.fields) && dataToValidate.selectedAlgoFormDetails.fields.length > 0) {
                        isValidated = true;
                    }
                }
            }
        }
        return isValidated;
    };
    /**
     * Prepares form elements
     * @param dataObject
     * @description The function will prepare form elements
     */
    GenericFormComponent.prototype.prepareFormElements = function (dataObject) {
        var _this = this;
        var algoFormDetails = dataObject.selectedAlgoFormDetails;
        var dropdownArrayData = dataObject.dropdownData;
        this.formData = this.formSrvc.prepareDataForForm(algoFormDetails, dropdownArrayData);
        this.form = this.formSrvc.createFormControls(this.formData);
        console.log('form controls are ', this.dynamicFormControl);
        console.log('new form data is ', this.formData);
        // track for form changes
        this.form.valueChanges.subscribe(function (changedValue) {
            console.log('detected form change', changedValue);
            _this.sendFormToParent.emit(_this.form);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenericFormComponent.prototype, "selectedFormDataEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"])
    ], GenericFormComponent.prototype, "formDataSubject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenericFormComponent.prototype, "sendFormToParent", void 0);
    GenericFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'statistics-generic-form',
            template: __webpack_require__(/*! ./generic-form.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/generic-form/generic-form.component.html"),
            styles: [__webpack_require__(/*! ./generic-form.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/generic-form/generic-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_statistics_form_creator_statistics_form_creator_service__WEBPACK_IMPORTED_MODULE_3__["StatisticsFormCreatorService"], _services_statistical_form_utility_statistical_form_utility_service__WEBPACK_IMPORTED_MODULE_4__["StatisticalFormUtilityService"]])
    ], GenericFormComponent);
    return GenericFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/initial-graph/initial-graph.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/initial-graph/initial-graph.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  initial-graph works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/initial-graph/initial-graph.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/initial-graph/initial-graph.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvaW5pdGlhbC1ncmFwaC9pbml0aWFsLWdyYXBoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/initial-graph/initial-graph.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/initial-graph/initial-graph.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: InitialGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialGraphComponent", function() { return InitialGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InitialGraphComponent = /** @class */ (function () {
    function InitialGraphComponent() {
    }
    InitialGraphComponent.prototype.ngOnInit = function () {
    };
    InitialGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'statistic-initial-graph',
            template: __webpack_require__(/*! ./initial-graph.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/initial-graph/initial-graph.component.html"),
            styles: [__webpack_require__(/*! ./initial-graph.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/initial-graph/initial-graph.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InitialGraphComponent);
    return InitialGraphComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/main/main.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sideBar\"><app-statistic-sidebar></app-statistic-sidebar></div>\n<div class=\"algoDetails\"><router-outlet name='Details'></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/main/main.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".algoDetails {\n  width: 80%;\n  float: right; }\n\n@media only screen and (max-width: 1100px) {\n  .algoDetails {\n    width: 75%; } }\n\n@media only screen and (max-width: 850px) {\n  .algoDetails {\n    min-width: 69%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUVoQjtFQUNJO0lBQ0UsVUFBVSxFQUFBLEVBQ1g7O0FBRUg7RUFDRTtJQUNFLGNBQWMsRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxnb0RldGFpbHN7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgIC5hbGdvRGV0YWlscyB7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgLmFsZ29EZXRhaWxzIHtcbiAgICAgIG1pbi13aWR0aDogNjklO1xuICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/main/main.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");



var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
        this.appliedFilters.subscribe(function (res) {
            console.log('inside the new route ', res);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainComponent.prototype, "appliedFilters", void 0);
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'algo-runner-statistics-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/priority-card/priority-card.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/priority-card/priority-card.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"priority-card-container\">\n  This is priority card container\n</div>"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/priority-card/priority-card.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/priority-card/priority-card.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".priority-card-container {\n  margin-top: 30px;\n  margin: auto;\n  width: 500px;\n  height: 200px;\n  overflow-y: auto;\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9wcmlvcml0eS1jYXJkL3ByaW9yaXR5LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNEVBQTRFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FsZ28tcnVubmVyL21vZHVsZXMvc3RhdGlzdGljcy9jb21wb25lbnRzL3ByaW9yaXR5LWNhcmQvcHJpb3JpdHktY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmlvcml0eS1jYXJkLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW46YXV0bztcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIC8vIGJveC1zaGFkb3c6IDlweCA4cHggMjRweCAtMTJweCByZ2JhKDAsMCwwLDAuNzUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/priority-card/priority-card.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/priority-card/priority-card.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: PriorityCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorityCardComponent", function() { return PriorityCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PriorityCardComponent = /** @class */ (function () {
    function PriorityCardComponent() {
        this.updatedPriorityEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PriorityCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PriorityCardComponent.prototype, "updatedPriorityEvent", void 0);
    PriorityCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'statistical-priority-card',
            template: __webpack_require__(/*! ./priority-card.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/priority-card/priority-card.component.html"),
            styles: [__webpack_require__(/*! ./priority-card.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/priority-card/priority-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PriorityCardComponent);
    return PriorityCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/result-visualizer/result-visualizer.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/result-visualizer/result-visualizer.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"result-visualizer\"><p>\n  result-visualizer works!\n</p>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/result-visualizer/result-visualizer.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/result-visualizer/result-visualizer.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result-visualizer {\n  height: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9yZXN1bHQtdmlzdWFsaXplci9yZXN1bHQtdmlzdWFsaXplci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvcmVzdWx0LXZpc3VhbGl6ZXIvcmVzdWx0LXZpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0LXZpc3VhbGl6ZXJ7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/result-visualizer/result-visualizer.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/result-visualizer/result-visualizer.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ResultVisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultVisualizerComponent", function() { return ResultVisualizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultVisualizerComponent = /** @class */ (function () {
    function ResultVisualizerComponent() {
    }
    ResultVisualizerComponent.prototype.ngOnInit = function () {
    };
    ResultVisualizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'statistic-result-visualizer',
            template: __webpack_require__(/*! ./result-visualizer.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/result-visualizer/result-visualizer.component.html"),
            styles: [__webpack_require__(/*! ./result-visualizer.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/result-visualizer/result-visualizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultVisualizerComponent);
    return ResultVisualizerComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"circularBtn\" (click)=\"routeToFilters()\"><i class=\"fas fa-filter\"></i></button>"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circularBtn {\n  font-size: 1.6rem;\n  width: 44px;\n  margin-right: 14px;\n  border-radius: 50%;\n  height: 43px;\n  border: 0;\n  box-shadow: 2px 9px 17px -1px #cccccc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9yb3V0ZS1idXR0b24vcm91dGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBR1QscUNBQW9ELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FsZ28tcnVubmVyL21vZHVsZXMvc3RhdGlzdGljcy9jb21wb25lbnRzL3JvdXRlLWJ1dHRvbi9yb3V0ZS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY3VsYXJCdG4ge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIGJvcmRlcjogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xuICAgIGJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RouteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteButtonComponent", function() { return RouteButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_statistical_analysis_result_statistical_analysis_result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/statistical-analysis-result/statistical-analysis-result.service */ "./src/app/modules/algo-runner/modules/statistics/services/statistical-analysis-result/statistical-analysis-result.service.ts");




var RouteButtonComponent = /** @class */ (function () {
    function RouteButtonComponent(router, statisticalAnalysisResult) {
        this.router = router;
        this.statisticalAnalysisResult = statisticalAnalysisResult;
    }
    RouteButtonComponent.prototype.ngOnInit = function () {
    };
    /**
     * Routes to filters
     * @description navigate to home page
     */
    RouteButtonComponent.prototype.routeToFilters = function () {
        this.statisticalAnalysisResult.renderAnalysisResult(false);
        this.router.navigate(['']);
    };
    RouteButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'statistics-route-button',
            template: __webpack_require__(/*! ./route-button.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.html"),
            styles: [__webpack_require__(/*! ./route-button.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_statistical_analysis_result_statistical_analysis_result_service__WEBPACK_IMPORTED_MODULE_3__["StatisticalAnalysisResultService"]])
    ], RouteButtonComponent);
    return RouteButtonComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"statistic-sidebar\">\n <div class=\"statistic-sidebar-header\">\n   <p class=\"statistic-sidebar-heading\">Statistics</p>\n </div>\n <div class=\"statistic-sidebar-algos\">\n  <app-algo-list [data]=\"sideBarAlgoData\" (clicked)=\"viewDetail($event)\" [firstVisit]=\"true\"></app-algo-list>\n </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statistic-sidebar {\n  position: absolute;\n  top: 13%;\n  left: 0;\n  overflow-y: auto;\n  z-index: 1;\n  width: 20%;\n  height: 90vh;\n  background: #fff; }\n\n.statistic-sidebar-header {\n  background-color: #808080; }\n\n.statistic-sidebar-heading {\n  text-align: center;\n  font-weight: bold;\n  font-size: 2rem;\n  padding-top: 1.5rem;\n  color: white;\n  height: 10vh; }\n\n@media only screen and (max-width: 1100px) {\n  .statistic-sidebar {\n    min-width: 25%; }\n  .statistic-sidebar-heading {\n    font-size: 1.5rem; } }\n\n@media only screen and (max-width: 850px) {\n  .statistic-sidebar {\n    min-width: 31%; }\n  .statistic-sidebar-heading {\n    font-size: 1.3rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9zdGF0aXN0aWMtc2lkZWJhci9zdGF0aXN0aWMtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFFaEI7RUFDSTtJQUNFLGNBQWMsRUFBQTtFQUVoQjtJQUNJLGlCQUFpQixFQUFBLEVBQ3BCOztBQUVIO0VBQ0U7SUFDRSxjQUFjLEVBQUE7RUFHaEI7SUFDSSxpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvc3RhdGlzdGljLXNpZGViYXIvc3RhdGlzdGljLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdGlzdGljLXNpZGViYXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTMlO1xuICAgIGxlZnQ6IDA7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5zdGF0aXN0aWMtc2lkZWJhci1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcbn1cbi5zdGF0aXN0aWMtc2lkZWJhci1oZWFkaW5ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMHZoO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAuc3RhdGlzdGljLXNpZGViYXIge1xuICAgICAgbWluLXdpZHRoOiAyNSU7XG4gICAgfVxuICAgIC5zdGF0aXN0aWMtc2lkZWJhci1oZWFkaW5ne1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAgIC5zdGF0aXN0aWMtc2lkZWJhciB7XG4gICAgICBtaW4td2lkdGg6IDMxJTtcbiAgICB9XG4gICAgXG4gICAgLnN0YXRpc3RpYy1zaWRlYmFyLWhlYWRpbmd7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: StatisticSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticSidebarComponent", function() { return StatisticSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_algo_runner_services_statistic_sidebar_data_service_statistic_sidebar_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service */ "./src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


// tslint:disable-next-line:max-line-length


var StatisticSidebarComponent = /** @class */ (function () {
    function StatisticSidebarComponent(statisticSidebarData, router, activatedRoute) {
        this.statisticSidebarData = statisticSidebarData;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sideBarAlgoData = [];
    }
    StatisticSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieving list of algorithms
        this.statisticSidebarData.algoList$.subscribe(function (data) {
            data.forEach(function (element) {
                var title = element.title;
                _this.sideBarAlgoData.push(title);
            });
        });
    };
    /**
     * Views detail
     * @param data name of selected algo
     * @description route to details page component
     */
    StatisticSidebarComponent.prototype.viewDetail = function (data) {
        this.selectedAlgoName = (data.replace(/\s/g, '')).toLowerCase();
        this.router.navigate([{ outlets: { Details: ['', this.selectedAlgoName] } }], { relativeTo: this.activatedRoute });
    };
    StatisticSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistic-sidebar',
            template: __webpack_require__(/*! ./statistic-sidebar.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./statistic-sidebar.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_algo_runner_services_statistic_sidebar_data_service_statistic_sidebar_data_service__WEBPACK_IMPORTED_MODULE_2__["StatisticSidebarDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StatisticSidebarComponent);
    return StatisticSidebarComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(data?.description && data?.imageUrl) ;else ComingSoon\" class=\"statisticalDetails\">\n    <div class=\"staticData\">\n        <h1>\n            {{data?.title}}\n        </h1>\n        <div class=\"staticText\" [innerHTML]=\"data?.description\"></div>\n    </div>\n    <div class=\"sampleImg\">\n        <h1>\n            Sample Output\n        </h1>\n        <div class=\"imgContainer\">\n            <img [src]=\"data?.imageUrl\" style=\"height: auto;width:100%\">\n        </div>\n    </div>\n</div>\n<ng-template  #ComingSoon>\n        <div class=\"statisticalDetails\">\n                <p>Coming Soon!</p>\n            </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statisticalDetails {\n  height: 429px; }\n\n.staticData {\n  position: absolute;\n  width: 46%; }\n\n::ng-deep .staticText p {\n  font-size: 1.5rem;\n  color: #7F7F7F; }\n\n.sampleImg {\n  float: right;\n  width: 42%; }\n\n.staticText {\n  padding: 1.5rem; }\n\nh1 {\n  padding-left: 1.375rem; }\n\n.staticText {\n  height: 300px;\n  overflow-y: auto; }\n\n.imgContainer {\n  float: right;\n  margin-right: 35px; }\n\np {\n  text-align: center;\n  font-size: 5rem;\n  color: #7F7F7F;\n  padding-top: 8%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9zdGF0aXN0aWNhbC1jb250ZW50L3N0YXRpc3RpY2FsLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFFZDtFQUVRLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0MsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUVuQjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvc3RhdGlzdGljYWwtY29udGVudC9zdGF0aXN0aWNhbC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRpc3RpY2FsRGV0YWlsc3tcbiAgICBoZWlnaHQ6IDQyOXB4O1xufVxuLnN0YXRpY0RhdGF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0NiU7XG59XG46Om5nLWRlZXAgLnN0YXRpY1RleHR7XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBjb2xvcjogIzdGN0Y3RjtcbiAgICB9XG59XG5cbi5zYW1wbGVJbWd7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiA0MiU7XG59XG4uc3RhdGljVGV4dHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG59XG5oMXtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMzc1cmVtO1xufVxuLnN0YXRpY1RleHR7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmltZ0NvbnRhaW5lcntcbiBmbG9hdDogcmlnaHQ7XG4gbWFyZ2luLXJpZ2h0OiAzNXB4OyAgIFxufVxucHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGNvbG9yOiAjN0Y3RjdGO1xuICAgIHBhZGRpbmctdG9wOiA4JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: StatisticalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticalContentComponent", function() { return StatisticalContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_algo_runner_services_statistic_sidebar_data_service_statistic_sidebar_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service */ "./src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service.ts");


// tslint:disable-next-line: max-line-length

var StatisticalContentComponent = /** @class */ (function () {
    function StatisticalContentComponent(statisticSideBarData) {
        this.statisticSideBarData = statisticSideBarData;
    }
    StatisticalContentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatisticalContentComponent.prototype, "data", void 0);
    StatisticalContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'algo-runner-statistical-content',
            template: __webpack_require__(/*! ./statistical-content.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.html"),
            styles: [__webpack_require__(/*! ./statistical-content.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_algo_runner_services_statistic_sidebar_data_service_statistic_sidebar_data_service__WEBPACK_IMPORTED_MODULE_2__["StatisticSidebarDataService"]])
    ], StatisticalContentComponent);
    return StatisticalContentComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"showInputTemplate === 'loading'\">\n  <div class=\"loadingTemplate\">\n    <h3>Loading...!!!</h3>\n  </div>\n</ng-container>\n\n<!--Template will be visible if form data is present for it-->\n    <div *ngIf=\"showInputTemplate === true\" class=\"form-input-container\">\n        <h3 class=\"form-name\">Input Data</h3>\n        <div class=\"form-data-container\">\n            <div class=\"main-form-section\">\n              <!--To display the left section of the section-->\n              <statistics-generic-form (selectedFormDataEvent)=\"storeSelectedFormData($event)\" [formDataSubject]=\"formDetails$\" (sendFormToParent)=\"checkForm($event)\"></statistics-generic-form>\n            </div>\n            <div class=\"sub-form-section\">\n              <ng-container *ngIf=\"renderDetails?.showPriorityCard\">\n                  <statistical-priority-card (updatedPriorityEvent)=\"storeUpdatedPriority($event)\"></statistical-priority-card>\n              </ng-container>\n          </div>\n        </div>\n        <div class=\"button-container\">\n          <button id=\"submitInputDataBtn\" *ngIf=\"genericFormValid\" class=\"btn btn-primary btn-lg\" (click)=\"compileAndAnalze()\" >Run</button>\n          <button id=\"submitInputDataBtn\" *ngIf=\"!genericFormValid\" class=\"btn btn-primary btn-lg FormError not-allowed\">Run</button>        \n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-data-container {\n  display: flex; }\n  .form-data-container .main-form-section, .form-data-container .sub-form-section {\n    flex: 1;\n    min-height: 200px; }\n  .form-input-container .form-name {\n  width: 100%;\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-align: center; }\n  .FormError {\n  background-color: lightgrey !important;\n  outline-color: lightgrey !important;\n  border-color: lightgrey !important; }\n  .not-allowed {\n  cursor: not-allowed !important; }\n  .button-container {\n  text-align: center; }\n  .button-container #submitInputDataBtn {\n    width: 120px;\n    height: 80%;\n    background-color: #6DB5F4;\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n    outline-color: #6DB5F4;\n    border-color: #6DB5F4;\n    z-index: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9zdGF0aXN0aWNhbC1mb3JtL3N0YXRpc3RpY2FsLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7RUFEakI7SUFHUSxPQUFPO0lBQ1AsaUJBQWlCLEVBQUE7RUFJekI7RUFFUSxXQUFXO0VBQ1gsU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUFJMUI7RUFDSSxzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGtDQUFrQyxFQUFBO0VBR3RDO0VBQWMsOEJBQThCLEVBQUE7RUFFNUM7RUFDSSxrQkFBa0IsRUFBQTtFQUR0QjtJQUlRLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9zdGF0aXN0aWNhbC1mb3JtL3N0YXRpc3RpY2FsLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1kYXRhLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAubWFpbi1mb3JtLXNlY3Rpb24sIC5zdWItZm9ybS1zZWN0aW9uIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgfVxufVxuXG4uZm9ybS1pbnB1dC1jb250YWluZXIge1xuICAgIC5mb3JtLW5hbWUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5Gb3JtRXJyb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmUtY29sb3I6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmV5ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3QtYWxsb3dlZCB7Y3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O31cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICNzdWJtaXRJbnB1dERhdGFCdG4ge1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkRCNUY0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG91dGxpbmUtY29sb3I6ICM2REI1RjQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzZEQjVGNDtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: StatisticalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticalFormComponent", function() { return StatisticalFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_statistical_form_utility_statistical_form_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/statistical-form-utility/statistical-form-utility.service */ "./src/app/modules/algo-runner/modules/statistics/services/statistical-form-utility/statistical-form-utility.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_statistical_analysis_result_statistical_analysis_result_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/statistical-analysis-result/statistical-analysis-result.service */ "./src/app/modules/algo-runner/modules/statistics/services/statistical-analysis-result/statistical-analysis-result.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

// tslint:disable: no-string-literal





var StatisticalFormComponent = /** @class */ (function () {
    function StatisticalFormComponent(statiscticalUtilitySrvc, statisticalAnalysisResult, router, activatedRoute) {
        this.statiscticalUtilitySrvc = statiscticalUtilitySrvc;
        this.statisticalAnalysisResult = statisticalAnalysisResult;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.GENERIC_FORM = 'generic-form';
        this.PRIORITY_FORM = 'priority-form';
        this.algoName = '';
        this.genericFormValid = false;
        // observable to send data to the form component
        this.formDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.showInputTemplate = 'loading';
    }
    StatisticalFormComponent.prototype.ngOnInit = function () {
    };
    StatisticalFormComponent.prototype.initiateForm = function (formDataToUse) {
        // set whether priority card is needed to display or not
        this.renderDetails = this.statiscticalUtilitySrvc.prepareRenderInformation(formDataToUse);
        // send the formDetails of current algo and dropdown data to the form component
        var formObject = {
            selectedAlgoFormDetails: formDataToUse,
            dropdownData: this.dropdownData
        };
        this.formDetails$.next(formObject);
    };
    StatisticalFormComponent.prototype.ngOnChanges = function () {
        if (!!this.selectedAlgorithm && this.selectedAlgorithm.constructor === Object) {
            this.collectedAnalysisFormData = { genericData: {}, priorityData: {} };
            // recieved a new form object
            this.formDetails = this.selectedAlgorithm['algo_form'];
            this.algoName = this.selectedAlgorithm['title'];
            if (this.formDetails.constructor === Object && Object.keys(this.formDetails).length > 0) {
                this.initiateForm(this.formDetails);
                this.showInputTemplate = true;
            }
            else {
                this.showInputTemplate = false;
            }
        }
    };
    StatisticalFormComponent.prototype.storeSelectedFormData = function (event) {
        console.log('event from generic form data ', event);
        this.collectData(event, this.GENERIC_FORM);
    };
    StatisticalFormComponent.prototype.storeUpdatedPriority = function (event) {
        console.log('event from priority card', event);
        this.collectData(event, this.PRIORITY_FORM);
    };
    StatisticalFormComponent.prototype.compileAndAnalze = function () {
        console.log('compiling and anlyzing result');
        this.statisticalAnalysisResult.renderAnalysisResult(true);
        this.statiscticalUtilitySrvc.initiateFormRetrieveProcess();
    };
    StatisticalFormComponent.prototype.collectData = function (eventObject, collectFrom) {
        if (collectFrom === this.GENERIC_FORM) {
            this.collectedAnalysisFormData.genericData = eventObject;
        }
        else if (collectFrom === this.PRIORITY_FORM) {
            this.collectedAnalysisFormData.priorityData = eventObject;
        }
        this.collectedAnalysisFormData['title'] = this.algoName;
        console.log('collected data from both forms is ', this.collectedAnalysisFormData);
    };
    StatisticalFormComponent.prototype.checkForm = function (genericFormElement) {
        console.log('recieved in the grand parent ', genericFormElement, genericFormElement.valid);
        this.genericFormValid = genericFormElement.valid;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatisticalFormComponent.prototype, "selectedAlgorithm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatisticalFormComponent.prototype, "dropdownData", void 0);
    StatisticalFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'algo-runner-statistical-form',
            template: __webpack_require__(/*! ./statistical-form.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.html"),
            styles: [__webpack_require__(/*! ./statistical-form.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_statistical_form_utility_statistical_form_utility_service__WEBPACK_IMPORTED_MODULE_2__["StatisticalFormUtilityService"],
            _services_statistical_analysis_result_statistical_analysis_result_service__WEBPACK_IMPORTED_MODULE_4__["StatisticalAnalysisResultService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], StatisticalFormComponent);
    return StatisticalFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbarbuttons\">\n    <div style=\"float: right\">\n        <div class=\"routeBtn\">\n            <statistics-route-button></statistics-route-button>\n        </div>\n        <div class=\"statisticalToolBar\">\n\n            <algo-runner-toolbar></algo-runner-toolbar>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarbuttons {\n  height: 70px;\n  margin-right: 2%;\n  padding-top: 18px; }\n\n.routeBtn, .statisticalToolBar {\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9hbGdvLXJ1bm5lci9tb2R1bGVzL3N0YXRpc3RpY3MvY29tcG9uZW50cy9zdGF0aXN0aWNhbC10b29sYmFyL3N0YXRpc3RpY2FsLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNDLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxnby1ydW5uZXIvbW9kdWxlcy9zdGF0aXN0aWNzL2NvbXBvbmVudHMvc3RhdGlzdGljYWwtdG9vbGJhci9zdGF0aXN0aWNhbC10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXJidXR0b25ze1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xufVxuLnJvdXRlQnRuLC5zdGF0aXN0aWNhbFRvb2xCYXJ7XG4gZmxvYXQ6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: StatisticalToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticalToolbarComponent", function() { return StatisticalToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatisticalToolbarComponent = /** @class */ (function () {
    function StatisticalToolbarComponent() {
    }
    StatisticalToolbarComponent.prototype.ngOnInit = function () {
    };
    StatisticalToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'algo-runner-statistical-toolbar',
            template: __webpack_require__(/*! ./statistical-toolbar.component.html */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./statistical-toolbar.component.scss */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatisticalToolbarComponent);
    return StatisticalToolbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/services/statistical-form-utility/statistical-form-utility.service.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/services/statistical-form-utility/statistical-form-utility.service.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: StatisticalFormUtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticalFormUtilityService", function() { return StatisticalFormUtilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// tslint:disable: no-string-literal





var StatisticalFormUtilityService = /** @class */ (function () {
    function StatisticalFormUtilityService(redux) {
        this.redux = redux;
        this.NODE_CATEGORY = 'nodes';
        this.RELATION_CATEGORY = 'edges';
        this.DIRECTION_CATEGORY = 'direction';
        this.DEFAULT_DIRECTION_VALUES = ['In', 'Out', 'Both'];
        // Form variables to work with generic and priority forms
        this.collectGenericFormData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.collectPriorityFormData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    StatisticalFormUtilityService.prototype.prepareRenderInformation = function (formDataToUse) {
        var renderInfoObject = {};
        if (!!formDataToUse && formDataToUse.constructor === Object && Object.keys(formDataToUse).length > 0) {
            renderInfoObject['showPriorityCard'] = (formDataToUse.hasOwnProperty('priority_card') && formDataToUse.priority_card) ? true : false;
        }
        else {
            // if either the data provided is null / empty / invalid type, set defaults
            renderInfoObject['showPriorityCard'] = false;
            renderInfoObject['priorityDependency'] = false;
        }
        return renderInfoObject;
    };
    /**
     * Process data
     * @param dataToProcess The algorithm data from which useful information is to accessed
     */
    StatisticalFormUtilityService.prototype.processData = function (dataToProcess) {
        var _this = this;
        var ALLOWED_TYPES = {
            dropdown: [],
            default: []
        };
        var processedData = {};
        if (dataToProcess && Array.isArray(dataToProcess) && dataToProcess.length > 0) {
            dataToProcess.forEach(function (algo) {
                if (algo.hasOwnProperty('algo_form') && algo.algo_form.constructor === Object && Object.keys(algo.algo_form).length > 0) {
                    if (algo.algo_form.hasOwnProperty('fields') && Array.isArray(algo.algo_form.fields) && algo.algo_form.fields.length > 0) {
                        processedData = _this.extractkeys(processedData, algo.algo_form.fields, ALLOWED_TYPES);
                    }
                    // also check for alternate property fields to include
                    // tslint:disable-next-line: max-line-length
                    if (algo.algo_form.hasOwnProperty('alternate_priority_values') && algo.algo_form.alternate_priority_values.constructor === Object && Object.keys(algo.algo_form.alternate_priority_values).length > 0) {
                        // tslint:disable-next-line: max-line-length
                        if (algo.algo_form.alternate_priority_values.hasOwnProperty('fields') && Array.isArray(algo.algo_form.alternate_priority_values.fields) && algo.algo_form.alternate_priority_values.fields.length > 0) {
                            processedData = _this.extractkeys(processedData, algo.algo_form.alternate_priority_values.fields, ALLOWED_TYPES);
                        }
                    }
                }
            });
            console.log(' pre final processed data is ', processedData);
            // now assign values from the previous data to respective keys in proccessedData
            processedData = this.assignData(processedData);
            console.log('final processed data is ', processedData);
            return processedData;
        }
        else {
            // data is invalid
            return {};
        }
    };
    StatisticalFormUtilityService.prototype.extractkeys = function (variableToUse, dataToUse, allowedTypes) {
        dataToUse.forEach(function (field) {
            if (field.hasOwnProperty('key') && field.key.length > 0) {
                if (field.hasOwnProperty('type') && field.type.length > 0) {
                    // tslint:disable-next-line: max-line-length
                    variableToUse[field.key] = {
                        type: Object.keys(allowedTypes).indexOf(field.type) > -1 ? allowedTypes[field.type] : allowedTypes['default'],
                        code: field.hasOwnProperty('code') ? field.code : null,
                        search: field.hasOwnProperty('search') ? field.search : null
                    };
                }
            }
        });
        return variableToUse;
    };
    StatisticalFormUtilityService.prototype.assignData = function (objectToUse) {
        var _this = this;
        console.log();
        var objectToProcess = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](objectToUse);
        // the function will fetch the data from redux store and assign appropriate values
        var reduxState = this.redux.getState().appliedFilters;
        console.log('state accessed inside the form utility is ', reduxState);
        // tslint:disable-next-line: max-line-length
        if (!!reduxState && reduxState.hasOwnProperty('filteredData') && reduxState.filteredData.constructor === Object) {
            // steps to assign values
            var objectEntries = Object.entries(objectToUse);
            var entryName_1;
            var extractedKeys_1;
            objectEntries.forEach(function (entry) {
                entryName_1 = entry[0];
                var labelValue = entry[1];
                var labelCateogy = labelValue['code'];
                // check if the label is for nodes or edges
                if (labelCateogy.toLowerCase() === _this.NODE_CATEGORY) {
                    extractedKeys_1 = _this.collect(_this.NODE_CATEGORY, labelValue['search'], reduxState.filteredData);
                }
                else if (labelCateogy.toLowerCase() === _this.RELATION_CATEGORY) {
                    extractedKeys_1 = _this.collect(_this.RELATION_CATEGORY, labelValue['search'], reduxState.filteredData);
                }
                else if (labelCateogy.toLowerCase() === _this.DIRECTION_CATEGORY) {
                    // populate dropdown keys manually
                    extractedKeys_1 = _this.DEFAULT_DIRECTION_VALUES;
                }
                // assign the respective extracted key to its associated label
                objectToProcess[entryName_1] = extractedKeys_1;
            });
        }
        else {
            // no data available
            return objectToProcess;
        }
        return objectToProcess;
    };
    StatisticalFormUtilityService.prototype.collect = function (objectName, keyToUse, prefilteredData) {
        // get the selected object based on objectName
        var selectedObject = prefilteredData['completeGraph'][objectName];
        if (selectedObject) {
            var collectedList_1 = [];
            selectedObject.forEach(function (entry) {
                if (entry.hasOwnProperty(keyToUse)) {
                    // if the selected key is an object, then push the array of keys
                    if (entry[keyToUse].constructor === Object) {
                        Object.keys(entry[keyToUse]).forEach(function (key) { return collectedList_1.push(key); });
                    }
                    else if (typeof entry[keyToUse] === 'string' || typeof entry[keyToUse] === 'number') {
                        // if the selected property is a string/nuber, simply push it
                        collectedList_1.push(entry[keyToUse]);
                    }
                }
                else if (entry) {
                    // if the key does not exist on the root, it must exist inside properties
                    if (entry.hasOwnProperty('properties')) {
                        if (entry.properties.hasOwnProperty(keyToUse)) {
                            // if the selected key is an object, then push the array of keys
                            if (entry.properties[keyToUse].constructor === Object) {
                                Object.keys(entry.properties[keyToUse]).forEach(function (key) { return collectedList_1.push(key); });
                            }
                            else if (typeof entry.properties[keyToUse] === 'string' || typeof entry.properties[keyToUse] === 'number') {
                                // if the selected property is a string/nuber, simply push it
                                collectedList_1.push(entry.properties[keyToUse]);
                            }
                        }
                    }
                }
            });
            console.log('collected list is ', collectedList_1);
            // make sure the list is unique
            collectedList_1 = lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](collectedList_1);
            return collectedList_1;
        }
        else {
            return [];
        }
    };
    StatisticalFormUtilityService.prototype.initiateFormRetrieveProcess = function () {
        // call a function inside generic form and priority form to send back collective form data to the Run Button
        this.collectGenericFormData.next({ event: 'collect' });
        this.collectPriorityFormData.next({ event: 'collect' });
    };
    StatisticalFormUtilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], StatisticalFormUtilityService);
    return StatisticalFormUtilityService;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/services/statistics-form-creator/statistics-form-creator.service.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/services/statistics-form-creator/statistics-form-creator.service.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: StatisticsFormCreatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsFormCreatorService", function() { return StatisticsFormCreatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var StatisticsFormCreatorService = /** @class */ (function () {
    function StatisticsFormCreatorService() {
    }
    StatisticsFormCreatorService.prototype.prepareDataForForm = function (data, ArrayData) {
        var _this = this;
        // extract the fields
        var formData = [];
        data.fields.forEach(function (field) {
            return formData.push({ label: field.key, type: field.type, value: _this.fetchValueArray(ArrayData, field.key) });
        });
        return formData;
    };
    StatisticsFormCreatorService.prototype.fetchValueArray = function (ArrayDataObject, keyName) {
        var fetchedValueArray = [];
        Object.keys(ArrayDataObject).forEach(function (key) {
            if (key === keyName) {
                fetchedValueArray = ArrayDataObject[key];
            }
        });
        return fetchedValueArray;
    };
    StatisticsFormCreatorService.prototype.createFormControls = function (formData) {
        var formControls = {};
        formData.forEach(function (element) {
            if (element.type === 'dropdown') {
                formControls[element.label] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            }
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](formControls);
    };
    StatisticsFormCreatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatisticsFormCreatorService);
    return StatisticsFormCreatorService;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/statistics-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/statistics-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: StatisticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsRoutingModule", function() { return StatisticsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.ts");
/* harmony import */ var _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/details-page/details-page.component */ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.ts");





var routes = [
    {
        path: 'home',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            {
                path: '',
                component: _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_4__["DetailsPageComponent"],
                outlet: 'Details'
            },
            {
                path: '/:id',
                component: _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_4__["DetailsPageComponent"],
                outlet: 'Details'
            }
        ]
    }
];
var StatisticsRoutingModule = /** @class */ (function () {
    function StatisticsRoutingModule() {
    }
    StatisticsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StatisticsRoutingModule);
    return StatisticsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/modules/statistics/statistics.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/algo-runner/modules/statistics/statistics.module.ts ***!
  \*****************************************************************************/
/*! exports provided: StatisticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsModule", function() { return StatisticsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _statistics_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistics-routing.module */ "./src/app/modules/algo-runner/modules/statistics/statistics-routing.module.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/modules/algo-runner/modules/statistics/components/main/main.component.ts");
/* harmony import */ var _components_statistic_sidebar_statistic_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/statistic-sidebar/statistic-sidebar.component */ "./src/app/modules/algo-runner/modules/statistics/components/statistic-sidebar/statistic-sidebar.component.ts");
/* harmony import */ var _components_algo_list_algo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/algo-list/algo-list.component */ "./src/app/modules/algo-runner/modules/statistics/components/algo-list/algo-list.component.ts");
/* harmony import */ var _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/details-page/details-page.component */ "./src/app/modules/algo-runner/modules/statistics/components/details-page/details-page.component.ts");
/* harmony import */ var _components_statistical_toolbar_statistical_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/statistical-toolbar/statistical-toolbar.component */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-toolbar/statistical-toolbar.component.ts");
/* harmony import */ var _components_statistical_content_statistical_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/statistical-content/statistical-content.component */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-content/statistical-content.component.ts");
/* harmony import */ var _components_statistical_form_statistical_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/statistical-form/statistical-form.component */ "./src/app/modules/algo-runner/modules/statistics/components/statistical-form/statistical-form.component.ts");
/* harmony import */ var _algo_runner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../algo-runner.module */ "./src/app/modules/algo-runner/algo-runner.module.ts");
/* harmony import */ var _components_route_button_route_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/route-button/route-button.component */ "./src/app/modules/algo-runner/modules/statistics/components/route-button/route-button.component.ts");
/* harmony import */ var _components_priority_card_priority_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/priority-card/priority-card.component */ "./src/app/modules/algo-runner/modules/statistics/components/priority-card/priority-card.component.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_generic_form_generic_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/generic-form/generic-form.component */ "./src/app/modules/algo-runner/modules/statistics/components/generic-form/generic-form.component.ts");
/* harmony import */ var _components_analysis_result_analysis_result_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/analysis-result/analysis-result.component */ "./src/app/modules/algo-runner/modules/statistics/components/analysis-result/analysis-result.component.ts");
/* harmony import */ var _components_initial_graph_initial_graph_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/initial-graph/initial-graph.component */ "./src/app/modules/algo-runner/modules/statistics/components/initial-graph/initial-graph.component.ts");
/* harmony import */ var _components_result_visualizer_result_visualizer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/result-visualizer/result-visualizer.component */ "./src/app/modules/algo-runner/modules/statistics/components/result-visualizer/result-visualizer.component.ts");
/* harmony import */ var _components_generic_dropdown_generic_dropdown_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/generic-dropdown/generic-dropdown.component */ "./src/app/modules/algo-runner/modules/statistics/components/generic-dropdown/generic-dropdown.component.ts");





















var StatisticsModule = /** @class */ (function () {
    function StatisticsModule() {
    }
    StatisticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _components_statistic_sidebar_statistic_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["StatisticSidebarComponent"], _components_algo_list_algo_list_component__WEBPACK_IMPORTED_MODULE_6__["AlgoListComponent"], _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_7__["DetailsPageComponent"], _components_statistical_toolbar_statistical_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["StatisticalToolbarComponent"],
                _components_statistical_content_statistical_content_component__WEBPACK_IMPORTED_MODULE_9__["StatisticalContentComponent"], _components_statistical_form_statistical_form_component__WEBPACK_IMPORTED_MODULE_10__["StatisticalFormComponent"], _components_route_button_route_button_component__WEBPACK_IMPORTED_MODULE_12__["RouteButtonComponent"],
                _components_priority_card_priority_card_component__WEBPACK_IMPORTED_MODULE_13__["PriorityCardComponent"], _components_generic_form_generic_form_component__WEBPACK_IMPORTED_MODULE_16__["GenericFormComponent"], _components_analysis_result_analysis_result_component__WEBPACK_IMPORTED_MODULE_17__["AnalysisResultComponent"],
                _components_initial_graph_initial_graph_component__WEBPACK_IMPORTED_MODULE_18__["InitialGraphComponent"], _components_result_visualizer_result_visualizer_component__WEBPACK_IMPORTED_MODULE_19__["ResultVisualizerComponent"], _components_generic_dropdown_generic_dropdown_component__WEBPACK_IMPORTED_MODULE_20__["GenericDropdownComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _statistics_routing_module__WEBPACK_IMPORTED_MODULE_3__["StatisticsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_14__["SuiModule"],
                _algo_runner_module__WEBPACK_IMPORTED_MODULE_11__["AlgoRunnerModule"]
            ],
            exports: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]]
        })
    ], StatisticsModule);
    return StatisticsModule;
}());



/***/ }),

/***/ "./src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/algo-runner/services/statistic-sidebar-data-service/statistic-sidebar-data.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: StatisticSidebarDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticSidebarDataService", function() { return StatisticSidebarDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var StatisticSidebarDataService = /** @class */ (function () {
    function StatisticSidebarDataService() {
        this.algoList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.algoList$ = this.algoList.asObservable();
        this.listOfAlgo = [{
                title: 'Shortest Path',
                description: "<p>The Shortest Path algorithm calculates the shortest (weighted)\npath between a pair of nodes. In this category, Dijkstra\u2019s algorithm is the most well known.</p>\n <p>This algorithm can help us to find directions between two physical locations with the lowest travel cost.</p>",
                imageUrl: "../../../../../assets/shortest_path.png",
                algo_form: {
                    priority_card: true,
                    priority_dependency: {
                        fields: [
                            {
                                key: 'Relationship Property',
                                type: 'dropdown',
                                search: 'properties',
                                code: 'nodes'
                            }
                        ]
                    },
                    fields: [
                        {
                            key: 'Source Node',
                            type: 'dropdown',
                            search: 'label',
                            code: 'nodes'
                        },
                        {
                            key: 'Target Node',
                            type: 'dropdown',
                            search: 'label',
                            code: 'nodes'
                        },
                        {
                            key: 'Relationship Type',
                            type: 'dropdown',
                            search: 'type',
                            code: 'edges'
                        },
                        {
                            key: 'Relationship Property',
                            type: 'dropdown',
                            search: 'properties',
                            code: 'edges'
                        }
                    ]
                }
            },
            { title: 'Top Connected Node', description: "<p>Top Connected Node measures the number of incoming and outgoing\nrelationships from a node.</p>\n<p>The Top Connected Node algorithm can help us find popular nodes in a graph.</p>\n<p>Degree centrality is an important component of any attempt to determine the most\nimportant people on a social network. For example, in BrandWatch\u2019s most influential men and\n women on Twitter 2017 the top 5 people in each category have over 40m followers each.</p>\n<p>Weighted degree centrality has been used to help separate fraudsters from legitimate users of an\nonline auction. The weighted centrality for fraudsters is significantly higher because they tend to\n collude with each other to artificially increase the price of items. Read more in Two Step graph-based semi-supervised\n  Learning for Online Auction Fraud Detection</p>\n<p></p>",
                imageUrl: "../../../../../assets/top_connected_node.png",
                algo_form: {
                    priority_card: false,
                    alternate_priority_values: {
                        fields: [
                            {
                                key: 'Direction',
                                type: 'dropdown',
                                search: 'direction',
                                code: 'direction'
                            }
                        ]
                    },
                    fields: [
                        {
                            key: 'Relationship Type',
                            type: 'dropdown',
                            search: 'type',
                            code: 'edges'
                        }
                    ]
                } },
            { title: 'Top Interacting Node', description: "",
                imageUrl: "",
                algo_form: {} },
            { title: 'Network Sentiments', description: "",
                imageUrl: "",
                algo_form: {} },
            { title: 'Recommended Skills', description: "",
                imageUrl: "",
                algo_form: {} },
            { title: 'Recommended Nodes', description: "",
                imageUrl: "",
                algo_form: {} },
            { title: 'Nodes Centrality', description: "",
                imageUrl: "",
                algo_form: {} }
        ];
        this.algoList.next(this.listOfAlgo);
    }
    /**
     * Gets algorithm details
     * @param algoName The name of the algorithm whose data is needed
     * @returns the selected algorithm or empty object otherwise
     */
    StatisticSidebarDataService.prototype.getAlgoDetailsByName = function (algoName) {
        // to find the algo_formDetails object of specified algoName
        if (!!algoName) {
            var fetchedData = this.listOfAlgo.find(function (algoObject) { return algoObject.title === algoName; });
            if (fetchedData.hasOwnProperty('algo_form') && fetchedData.algo_form.constructor === Object) {
                // everything is ok
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(fetchedData);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
        }
        else {
            console.warn('No Data recieved in the algoName to retrieve algo_form details');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
        }
    };
    StatisticSidebarDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatisticSidebarDataService);
    return StatisticSidebarDataService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-statistics-statistics-module.js.map