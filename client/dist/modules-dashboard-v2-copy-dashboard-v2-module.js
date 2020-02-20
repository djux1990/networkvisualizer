(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-v2-copy-dashboard-v2-module"],{

/***/ "./src/app/modules/dashboard-v2-copy/components/color-panel/color-panel/color-panel.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/color-panel/color-panel/color-panel.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"panel\">\n        <p class=\"panelTitle\">Legend</p>\n        <div class=\"panelbody\" *ngIf=\"showDropDown\">\n            <ul class=\"panelList\" type=\"none\">\n                <ng-container *ngFor=\"let item of colorData\">\n                    <li class=\"item\" [ngStyle]=\"{color: item.color}\"><span class=\"circle\" [ngStyle]=\"{background: item.color}\"></span>{{item?.name}}</li>\n                </ng-container>\n            </ul>\n        </div>\n        <div class=\"dropDown\" (click)=\"toggleDropdown()\">\n            <i class=\"fas fa-chevron-up\" *ngIf=\"showDropDown\"></i>\n            <i class=\"fas fa-chevron-down\" *ngIf=\"!showDropDown\"></i>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/color-panel/color-panel/color-panel.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/color-panel/color-panel/color-panel.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: transparent;\n  position: absolute;\n  right: 0;\n  padding-right: 20px;\n  padding-top: 20px;\n  z-index: 5; }\n\n.panel {\n  background-color: white;\n  border-radius: 10px;\n  width: 150px;\n  margin: auto;\n  margin-right: 0; }\n\n.panelTitle,\n.panelbody {\n  padding: 10px 5px;\n  max-height: 65vh;\n  overflow-y: auto; }\n\n.panelbody::-webkit-scrollbar {\n  width: 2px; }\n\n.panelTitle {\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: center; }\n\n.panelList {\n  padding-left: 14px; }\n\n.item {\n  word-wrap: break;\n  line-height: 2; }\n\n.circle {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%;\n  margin-right: 8px; }\n\n.dropDown {\n  cursor: pointer; }\n\n.dropDown i {\n    display: block;\n    text-align: center;\n    font-size: 20px;\n    padding-bottom: 8px; }\n\n.display-ok {\n  display: block; }\n\n.no-display {\n  display: none; }\n\n.bg-red {\n  background-color: red !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjItY29weS9jb21wb25lbnRzL2NvbG9yLXBhbmVsL2NvbG9yLXBhbmVsL2NvbG9yLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUduQjs7RUFFSSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUdRLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC12Mi1jb3B5L2NvbXBvbmVudHMvY29sb3ItcGFuZWwvY29sb3ItcGFuZWwvY29sb3ItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgei1pbmRleDogNTtcbn1cblxuLnBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ucGFuZWxUaXRsZSxcbi5wYW5lbGJvZHkge1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIG1heC1oZWlnaHQ6IDY1dmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnBhbmVsYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAycHg7XG59XG5cbi5wYW5lbFRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYW5lbExpc3Qge1xuICAgIHBhZGRpbmctbGVmdDogMTRweDtcbn1cblxuLml0ZW0ge1xuICAgIHdvcmQtd3JhcDogYnJlYWs7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbi5jaXJjbGUge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uZHJvcERvd24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIH1cbn1cblxuLmRpc3BsYXktb2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubm8tZGlzcGxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJnLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/color-panel/color-panel/color-panel.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/color-panel/color-panel/color-panel.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ColorPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPanelComponent", function() { return ColorPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/colorService/color-service.service */ "./src/app/modules/dashboard-v2-copy/services/colorService/color-service.service.ts");
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
            template: __webpack_require__(/*! ./color-panel.component.html */ "./src/app/modules/dashboard-v2-copy/components/color-panel/color-panel/color-panel.component.html"),
            styles: [__webpack_require__(/*! ./color-panel.component.scss */ "./src/app/modules/dashboard-v2-copy/components/color-panel/color-panel/color-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_2__["ColorServiceService"],
            _core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_3__["SharedGraphService"]])
    ], ColorPanelComponent);
    return ColorPanelComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/create-nodes/create-nodes.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/create-nodes/create-nodes.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pr-0\">\n    <div class=\"btn-group nodes\">\n        <button type=\"button\" (click)=\"createNode()\" data-toggle=\"modal\" data-target=\"#createNodeModal\" class=\"circularBtn\" aria-expanded=\"false\">\n      <img src=\"./../../../../../assets/create_nodes.svg\">\n    </button>\n    </div>\n    <div class=\"btn-group relationships\">\n        <button type=\"button\" (click)=\"createRelation()\" data-toggle=\"modal\" data-target=\"#createRelationModal\" class=\"circularBtn\" aria-expanded=\"false\">\n            <img src=\"./../../../../../assets/create_relations.svg\">\n    </button>\n    </div>\n    <div class=\"btn-group algorithms\">\n        <algo-runner-toolbar></algo-runner-toolbar>\n    </div>\n</div>\n<!--modal template to show when node is to be created-->\n<div class=\"modal fade\" id=\"createNodeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"NodeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"NodeModalLabel\" *ngIf=\"popupConfig.createNodePopup === true\">Create Element</h5>\n                <h5 class=\"modal-title\" id=\"NodeModalLabel\" *ngIf=\"popupConfig.editNodePopup === true\">Element Details</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"modalItem\">\n                    <p class=\"sectionName\">\n                        {{TYPE_TEXT}}\n                    </p>\n                    <span class=\"inputSpan\">\n                        <ng-container *ngIf=\"selectedType !== ADD_NEW_LABEL\">\n                                <sui-select class=\"selection\"\n                                [(ngModel)]=\"selectedType\"\n                                (ngModelChange)=\"updateProperties($event)\"\n                                [options]=\"typeOptions\"\n                                [isSearchable]=\"true\"\n                                [isDisabled]=\"disabledBox\"\n                                #select>\n                        <sui-select-option *ngFor=\"let option of select.filteredOptions\"\n                                           [value]=\"option\">\n                        </sui-select-option>\n                                  </sui-select>\n                        </ng-container>\n                        <ng-container *ngIf=\"selectedType === ADD_NEW_LABEL\">\n                            <div class=\"ui input typeTextBox\">\n                                    <span>\n                                            <app-color-picker [elWidth]=\"'50px'\" [elDefault]=\"'#96C1FA'\"\n                                        (selectedColorCode)=\"selectedColorForNewType($event)\"\n                                        ></app-color-picker>\n                                        </span>\n                    <input type=\"text\" placeholder=\"Enter Type...\" id=\"id_newLabelNode\">\n                </div>\n\n                </ng-container>\n                </span>\n            </div>\n            <div class=\"modalItem\" *ngIf=\"labelProperties?.length > 0 && selectedType?.length > 0\">\n                <h5 class=\"propertyLabel\">\n                    Properties <span class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"toolTipText\"></span>\n                </h5>\n                <!--container to display pre exisiting properties-->\n                <ng-container *ngFor=\"let data of labelProperties\">\n                    <div class=\"modalItem\">\n                        <p class=\"sectionName\">{{data}}</p>\n                        <span class=\"inputSpan\">\n                                <ng-container *ngIf = \"data === 'Name'\">\n                                    <div class=\"ui corner labeled input normalTextBox\">\n                                        <input type=\"text\" placeholder=\"Enter Name...\" id=\"id_{{data}}\" [(ngModel)] = \"selectedPropertiesObject[data]\" (ngModelChange)=\"updateSelectedOption($event, data)\" [disabled]=\"restoreOptions === true\">\n                                        <div class=\"ui corner label\">\n                                            <i class=\"asterisk icon\"></i>\n                                        </div>\n                                    </div>\n                                </ng-container>\n                                <ng-container *ngIf=\"data !== 'Name'\">\n                                    <sui-select class=\"selection\" *ngIf=\"!availablePropertyList[data]?.enableNewProperty\"\n                                    [options]=\"availablePropertyList[data]['list']\" [(ngModel)]=\"selectedPropertiesObject[data]\"\n                                    (ngModelChange)=\"updateSelectedOption($event, data)\" [isSearchable]=\"true\"\n                                    [isDisabled]=\"restoreOptions\" #Propertyselect>\n                                        <sui-select-option *ngFor=\"let option of Propertyselect.filteredOptions\" [value]=\"option\"></sui-select-option>\n                                    </sui-select>\n                                    <div class=\"ui corner labeled input normalTextBox\" *ngIf=\"availablePropertyList[data]?.enableNewProperty\">\n                                        <input type=\"text\" placeholder=\"Enter New Property...\" id=\"id_{{data}}\" [(ngModel)]=\"selectedPropertiesObject[data]\" (ngModelChange)=\"updateSelectedOption($event, data)\" (keyup)=\"updateNewPropertyValue($event,data)\">\n                                        <div class=\"ui corner label\">\n                                            <i class=\"asterisk icon\"></i>\n                                        </div>\n                                    </div>\n                                </ng-container>\n                            </span>\n                        <span class=\"supportIcons\" *ngIf=\"(data?.length > 0) && data !== 'Name' && !availablePropertyList[data]?.enableNewProperty && !restoreOptions\" (click)=\"deleteProperty(data)\"><i class=\"far fa-trash-alt\"></i></span>\n                        <span class=\"supportIcons\" *ngIf=\"(data?.length > 0) && data !== 'Name' && availablePropertyList[data]?.enableNewProperty && !restoreOptions\" (click)=\"availablePropertyList[data].enableNewProperty = false\"><i class=\"far fa-times-circle\" style=\"color: red;\"></i></span>\n                        <span class=\"supportIcons nameKey\" *ngIf=\"(data?.length > 0) && data === 'Name' && !restoreOptions\"> \n                                <i class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"right\" [title]=\"'Name is mandatory and cannot be deleted'\"></i>\n                            </span>\n                    </div>\n                </ng-container>\n                <!--container to display pre exisiting properties end-->\n\n                <!--Template to add a new property-->\n\n                <ng-container *ngIf=\"enableNewTemplate\">\n                    <form id=\"NewPropertyGroup\">\n                        <div class=\"modalItem\">\n                            <div class=\"ui divider\"></div>\n                            <p class=\"sectionName\">Property Name</p>\n                            <span class=\"inputSpan newTemplate\">\n                                    <div class=\"ui input focus\">\n                                        <input type=\"text\" placeholder=\"Property Value\" id=\"propertyKey\">\n                                    </div>\n                                </span>\n                            <span class=\"supportIcons customDelete\" (click)=\"enableNewTemplate = false\"><i class=\"far fa-trash-alt\"></i></span>\n                            <br>\n                            <div class=\"ui divider\"></div>\n                        </div>\n                    </form>\n                </ng-container>\n                <!--Template to add a new property ends-->\n            </div>\n            <a class=\"newLink\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_LABEL && !enableNewTemplate && !restoreOptions\" (click)=\"addNewProperty('node')\">Add New Property</a>\n            <a class=\"newLink\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_LABEL && enableNewTemplate && !restoreOptions\" (click)=\"saveNewProperty('node')\">Save Property</a>\n        </div>\n        <div class=\"modal-footer\" *ngIf=\"selectedType !== ADD_NEW_LABEL\">\n            <button type=\"button\" class=\"btn btn-danger deleteBtn\" *ngIf=\"popupConfig.editNodePopup === true && !restoreOptions\" style=\"color: white;\" (click)=\"activateDelete('deleteModal', 'node')\">Delete</button>\n            <a class=\"mailBtn\" *ngIf=\"popupConfig.editNodePopup === true\">Send Mail</a>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"color: red;\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitModal()\" *ngIf=\"popupConfig.createNodePopup === true && !restoreOptions\" [disabled]=\"(selectedType?.length <= 0) || (!selectedPropertiesObject['Name'])\">Create</button>\n            <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitModal('edit')\" *ngIf=\"popupConfig.editNodePopup === true && !restoreOptions\" [disabled]=\"(selectedType?.length <= 0) || (!selectedPropertiesObject['Name'])\" id=\"edit_btn\">Update</button>\n            <button type=\"button\" id=\"restoreBtn\" class=\"btn btn-info restoreBtn\" *ngIf=\"(popupConfig.editNodePopup === true || editNodePopup === true) && restoreOptions\" style=\"color: white;\" (click)=\"restoreData('node')\">Restore </button>\n        </div>\n        <div class=\"modal-footer\" *ngIf=\"selectedType === ADD_NEW_LABEL\">\n            <button type=\"button\" class=\"btn btn-primary create\" id=\"edit_btn\" (click)=\"addNewLabel('node')\">Add Label</button>\n        </div>\n    </div>\n</div>\n</div>\n<!--modal node create end-->\n\n\n<!--modal relationship start-->\n<div class=\"modal fade\" id=\"createRelationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"RelModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"RelModalLabel\" *ngIf=\"createRelationPopup == true\">Create Relationship</h5>\n                <h5 class=\"modal-title\" id=\"RelModalLabel\" *ngIf=\"editRelationPopup == true\">Relationship Details</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"modalItem\">\n                    <p class=\"sectionName\">\n                        {{TYPE_TEXT}}\n                    </p>\n                    <span class=\"inputSpan\">\n                        <ng-container *ngIf=\"selectedType !== ADD_NEW_TYPE\">\n                                <sui-select class=\"selection\"\n                                [(ngModel)]=\"selectedType\"\n                                (ngModelChange)=\"updateRelProperties($event)\"\n                                [options]=\"relationTypeOptions\"\n                                [isSearchable]=\"true\"\n                                [isDisabled]=\"disabledBox\"\n                                #selectRelationBox>\n                        <sui-select-option *ngFor=\"let option of selectRelationBox.filteredOptions\"\n                                           [value]=\"option\">\n                        </sui-select-option>\n                    </sui-select>\n                        </ng-container>\n                        <ng-container *ngIf=\"selectedType === ADD_NEW_TYPE\">\n                            <div class=\"ui input typeTextBox\"><input type=\"text\" placeholder=\"Enter Type...\" id=\"id_newLabelRelation\"></div>\n                    </ng-container>\n                    </span>\n                </div>\n                <div class=\"modalItem\" *ngIf=\"typeProperties?.length > 0 && selectedType?.length > 0\">\n                    <h5 class=\"propertyLabel\">\n                        Properties <span class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"toolTipText\"></span>\n                    </h5>\n\n\n                    <ng-container *ngFor=\"let data of typeProperties\">\n                        <div class=\"modalItem\">\n                            <p class=\"sectionName\">{{data}}</p>\n                            <span class=\"inputSpan\">\n                                <ng-container *ngIf=\"data !== 'Name'\">\n                                    <sui-select class=\"selection\" *ngIf=\"!availablePropertyList[data]?.enableNewProperty\"\n                                     [options]=\"availablePropertyList[data]['list']\" [(ngModel)]=\"selectedPropertiesObject[data]\"\n                                     (ngModelChange)=\"updateSelectedOption($event, data)\" [isSearchable]=\"true\"\n                                     [isDisabled]=\"restoreOptions\" #PropertyRelselect>\n                                        <sui-select-option *ngFor=\"let option of PropertyRelselect.filteredOptions\" [value]=\"option\"></sui-select-option>\n                                    </sui-select>\n                                    <div class=\"ui corner labeled input normalTextBox\" *ngIf=\"availablePropertyList[data]?.enableNewProperty\">\n                                        <input type=\"text\" placeholder=\"Enter New Property...\" id=\"id_{{data}}\" [(ngModel)]=\"selectedPropertiesObject[data]\" (ngModelChange)=\"updateSelectedOption($event, data)\" (keyup)=\"updateNewPropertyValue($event,data)\">\n                                        <div class=\"ui corner label\">\n                                            <i class=\"asterisk icon\"></i>\n                                        </div>\n                                    </div>\n                                </ng-container>\n                                <!-- <input type=\"text\" id=\"id_{{data}}\"> -->\n                            </span>\n                            <span class=\"supportIcons\" *ngIf=\"(data?.length > 0) && data !== 'Name' && !availablePropertyList[data]?.enableNewProperty && !restoreOptions\" (click)=\"deleteProperty(data, 'relation')\"><i class=\"far fa-trash-alt\"></i></span>\n                            <span class=\"supportIcons\" *ngIf=\"(data?.length > 0) && data !== 'Name' && availablePropertyList[data]?.enableNewProperty && !restoreOptions\" (click)=\"availablePropertyList[data].enableNewProperty = false\"><i class=\"far fa-times-circle\" style=\"color: red;\"></i></span>\n                            <span class=\"supportIcons nameKey\" *ngIf=\"(data?.length > 0) && data === 'Name' && !restoreOptions\">\n                                <i class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"right\" [title]=\"'Name is mandatory and cannot be deleted'\" ></i>\n                            </span>\n                        </div>\n                    </ng-container>\n                </div>\n                <form id=\"NewPropertyGroupRel\" *ngIf=\"enableNewTemplate\">\n                    <div class=\"modalItem\">\n                        <div class=\"ui divider\"></div>\n                        <p class=\"sectionName\">Property Name</p>\n                        <span class=\"inputSpan newTemplate\">\n                                        <div class=\"ui input focus\">\n                                            <input type=\"text\" placeholder=\"Property Name\" id=\"propertyKeyRel\">\n                                        </div>\n                                    </span>\n                        <span class=\"supportIcons customDelete\" (click)=\"enableNewTemplate = false\"><i class=\"far fa-trash-alt\"></i></span>\n                        <br/>\n                        <div class=\"ui divider lower\"></div>\n                    </div>\n                </form>\n\n\n                <div class=\"modalItem buttonContainer\">\n                    <a class=\"newLink2\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_TYPE && !enableNewTemplate && !restoreOptions\" (click)=\"addNewProperty('relation')\">Add New Property</a>\n                    <a class=\"newLink2\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_TYPE && enableNewTemplate && !restoreOptions\" (click)=\"saveNewProperty('relation')\">Save Property</a>\n                </div>\n\n                <div class=\"relationScope\" *ngIf=\"selectedType?.length > 0 && selectedType !== ADD_NEW_TYPE\">\n                    <div class=\"modalItem\">\n                        <h5 class=\"propertyLabel\">\n                            Connection <span class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"toolTipText\"></span>\n                        </h5>\n                        <p class=\"sectionName\">From</p>\n                        <span class=\"inputSpan\" *ngIf=\"!disabledFromBox\">\n                            <sui-select class=\"selection\"\n                                [(ngModel)]=\"selectedNodeNameSource\"\n                                (ngModelChange)=\"updateList('to',[selectedNodeNameSource])\"\n                                [optionsLookup]=\"optionLookUp\"\n                                labelField=\"key\"\n                                valueField=\"key\"\n                                [isSearchable]=\"true\"\n                                [isDisabled]=\"disabledFromBox\"\n                                #NodeFromName>\n                                <sui-select-option *ngFor=\"let option of NodeFromName.filteredOptions\"\n                                    [value]=\"option\">\n                                </sui-select-option>\n                            </sui-select>\n                        </span>\n                        <span class=\"inputSpan\" *ngIf=\"disabledFromBox\">\n                            <div class=\"ui corner labeled input normalTextBox\">\n                                <input type=\"text\" [(ngModel)] = \"selectedNodeNameSource\" (ngModelChange)=\"updateSelectedOption($event, data)\" [disabled]=\"restoreOptions || disabledFromBox\">\n                            </div>\n                        </span>\n                    </div>\n                    <div class=\"modalItem\">\n                        <p class=\"sectionName\">To</p>\n                        <span class=\"inputSpan\" *ngIf=\"!disabledToBox\">\n                            <sui-select class=\"selection\"\n                                [(ngModel)]=\"selectedNodeNameTarget\"\n                                (ngModelChange)=\"updateList('from',[selectedNodeNameTarget])\"\n                                [optionsLookup]=\"optionLookUp\"\n                                labelField=\"key\"\n                                valueField=\"key\"\n                                [isSearchable]=\"true\"\n                                [isDisabled]=\"disabledToBox\"\n                                #NodeToName>\n                                <sui-select-option *ngFor=\"let option of NodeToName.filteredOptions\"\n                                    [value]=\"option\">\n                                </sui-select-option>\n                            </sui-select> \n                        </span>\n                        <span class=\"inputSpan\" *ngIf=\"disabledToBox\">\n                            <div class=\"ui corner labeled input normalTextBox\">\n                                <input type=\"text\" [(ngModel)] = \"selectedNodeNameTarget\" (ngModelChange)=\"updateSelectedOption($event, data)\" [disabled]=\"restoreOptions || disabledToBox\">\n                            </div>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\" *ngIf=\"selectedType !== ADD_NEW_TYPE\">\n                <button type=\"button\" class=\"btn btn-danger deleteBtn left\" *ngIf=\"(popupConfig.editRelationPopup === true || editRelationPopup === true) && !restoreOptions\" style=\"color: white;\" (click)=\"activateDelete('deleteModal', 'relation')\">Delete</button>\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"color: red;\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitRelModal()\" *ngIf=\"(popupConfig.createRelationPopup === true || createRelationPopup === true) && !restoreOptions\" [disabled]=\"selectedType?.length <= 0 || selectedNodeNameTarget?.length <= 0 || selectedNodeNameSource?.length <= 0\">Create</button>\n                <button type=\"button\" class=\"btn btn-primary create\" (click)=\"submitRelModal('edit')\" *ngIf=\"(popupConfig.editRelationPopup === true || editRelationPopup === true) && !restoreOptions\" [disabled]=\"selectedType?.length <= 0 || selectedNodeNameTarget?.length <= 0 || selectedNodeNameSource?.length <= 0\"\n                    id=\"edit_btn\">Update</button>\n                <button type=\"button\" id=\"restoreBtn\" class=\"btn btn-info restoreBtn\" *ngIf=\"(popupConfig.editRelationPopup === true || editRelationPopup === true) && restoreOptions\" style=\"color: white;\" (click)=\"restoreData('relation')\">Restore </button>\n\n            </div>\n            <div class=\"modal-footer\" *ngIf=\"selectedType === ADD_NEW_TYPE\">\n                <button type=\"button\" class=\"btn btn-primary create\" id=\"edit_btn\" (click)=\"addNewLabel('relation')\">Add Type</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!--modal relationship end-->\n\n<!-- Delete modal -->\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"deleteModalTitle\">Delete</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n            </div>\n            <div class=\"modal-body\">\n                <b class=\"modal-text\" style=\"font-size: 17px; font-weight:500;\">Are you sure you want to delete this {{deleteContext}} ?</b>\n                <h6 *ngIf=\"deleteContext === 'node'\" style=\"font-size: 14px; padding-top: 15px; font-weight: 400;\">[NOTE] : Deleting a node will also delete the relationships connected with the node. <span style=\"color: red;\">Proceed with caution</span></h6>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn ui-button-text later\" data-dismiss=\"modal\">Maybe Later</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"submitDelete(deleteContext)\" id=\"del_btn\">Delete</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!--Delete modal end-->\n\n<!--create new relationship after node modal-->\n<div class=\"modal fade\" id=\"RelAfterNodeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"RelAfterNode\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"RelAfterNodeModalTitle\">New Relation</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n            </div>\n            <div class=\"modal-body\">\n                <b class=\"modal-text\" style=\"font-size: 17px; font-weight:300;\">Do you wish to create a new relationship with respect to <span style=\"font-weight: 500;\">{{newNodeName}}</span> ?</b>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-target=\"RelAfterNodeModal\" data-dismiss=\"modal\" style=\"color: red;\">Not Now</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"promptRelation()\" id=\"rel_yes_btn\" data-dismiss=\"modal\">Yes</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!--create new relationship after node modal end-->"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/create-nodes/create-nodes.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/create-nodes/create-nodes.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid .btn-group {\n  margin-right: 20px; }\n  .container-fluid .btn-group button {\n    border-radius: 50%;\n    background: #e4e4e4;\n    color: #000;\n    box-shadow: 2px 9px 17px -1px #cccccc; }\n  .container-fluid .btn-group button:active {\n    box-shadow: none;\n    transition: 0.5s; }\n  .btn-group:active {\n  outline: none;\n  text-decoration: none; }\n  .createLink,\n.editLink,\n.deleteLink {\n  text-decoration: none;\n  font-size: 12px; }\n  .dropdown-menu .dropdown-item {\n  cursor: pointer; }\n  .dropdown-menu .dropdown-item span {\n    margin-right: 8px; }\n  .dropdown-menu .dropdown-item:active {\n  background-color: white; }\n  .dropdown-menu .create:hover {\n  color: blue; }\n  .dropdown-menu .edit:hover {\n  color: green; }\n  .dropdown-menu .delete:hover {\n  color: red; }\n  /* .modal-header {\n    background: #5f5f5f;\n    color: white;\n    border-color: #5f5f5f;\n    button.close {\n        color: white;\n    }\n} */\n  ::ng-deep .modalItem {\n  padding: 10px; }\n  ::ng-deep .modalItem .fa-info-circle {\n    font-size: 14px;\n    cursor: pointer; }\n  ::ng-deep .modalItem.buttonContainer {\n  position: relative; }\n  ::ng-deep .sectionName {\n  display: inline-block;\n  margin: 0;\n  max-width: 50%; }\n  ::ng-deep .inputSpan {\n  position: absolute;\n  left: 50%; }\n  ::ng-deep .inputSpan input {\n    border: 1px solid #acacac;\n    outline: none; }\n  ::ng-deep .propertyLabel {\n  padding-top: 13px;\n  padding-bottom: 13px;\n  text-align: center; }\n  ::ng-deep .supportIcons {\n  position: absolute;\n  right: 6%;\n  cursor: pointer;\n  cursor: pointer;\n  color: red; }\n  ::ng-deep .supportIcons.customDelete {\n  font-size: 20px; }\n  input#propertyKey {\n  height: 30px; }\n  ::ng-deep .newLink {\n  float: right;\n  padding: 5px 7px; }\n  .newLink2 {\n  position: absolute;\n  right: 0;\n  top: 12px;\n  padding: 5px 7px; }\n  .lower {\n  margin-top: 30px; }\n  .newLink:hover,\n.newLink2:hover {\n  background-color: #5f5f5f;\n  color: white !important;\n  transition: .5s;\n  cursor: pointer;\n  border-radius: 5px; }\n  .newTemplate {\n  max-width: 35% !important; }\n  .newTemplate div {\n    max-width: 100%; }\n  i.fas.fa-info-circle {\n  color: black !important; }\n  input[disabled=\"true\"] {\n  cursor: not-allowed; }\n  button:disabled {\n  cursor: not-allowed;\n  pointer-events: all !important; }\n  .deleteBtn,\n.mailBtn,\n.restoreBtn {\n  cursor: pointer !important; }\n  .later {\n  text-decoration: none;\n  cursor: pointer; }\n  .later:hover {\n  background-color: #5f5f5f;\n  color: white; }\n  .mailBtn,\n.left {\n  margin-right: auto; }\n  .mailBtn {\n  padding: 5px 8px; }\n  .mailBtn:hover {\n  transition: 0.5s;\n  background: #e4e4e4;\n  border-radius: .25rem;\n  color: #000;\n  box-shadow: 2px 9px 17px -1px #cccccc; }\n  .mailBtn:active {\n  box-shadow: none;\n  transition: .5s; }\n  ::ng-deep .newPropertyGroup {\n  width: 100%;\n  display: block;\n  background: #cccccc; }\n  ::ng-deep .normalTextBox {\n  max-width: 14em; }\n  ::ng-deep .typeTextBox {\n  max-width: 20em; }\n  .typeTextBox input {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n  .ui.input.typeTextBox {\n  width: 14em; }\n  #id_newLabelNode {\n  padding-left: 3px; }\n  .circularBtn {\n  font-size: 1.5rem;\n  width: 40px;\n  padding-left: 0px;\n  border-radius: 50%;\n  height: 40px;\n  border: 0;\n  box-shadow: 2px 9px 17px -1px #cccccc; }\n  .circularBtn img {\n    width: 40px; }\n  .circularBtn:active {\n  box-shadow: none;\n  transition: .5s; }\n  .circularBtn:focus {\n  outline: 0; }\n  .algorithms {\n  padding-right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjItY29weS9jb21wb25lbnRzL2NyZWF0ZS1ub2Rlcy9jcmVhdGUtbm9kZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyLWNvcHkvY29tcG9uZW50cy9jcmVhdGUtbm9kZXMvY3JlYXRlLW5vZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7RUFEdEI7SUFHUSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFHWCxxQ0FBb0QsRUFBQTtFQVI1RDtJQVdRLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtFQUl4QjtFQUNJLGFBQWE7RUFDYixxQkFBcUIsRUFBQTtFQUd6Qjs7O0VBR0kscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTtFQUduQjtFQUVRLGVBQWUsRUFBQTtFQUZ2QjtJQUlZLGlCQUFpQixFQUFBO0VBSjdCO0VBUVEsdUJBQXVCLEVBQUE7RUFSL0I7RUFXUSxXQUFXLEVBQUE7RUFYbkI7RUFjUSxZQUFZLEVBQUE7RUFkcEI7RUFpQlEsVUFBVSxFQUFBO0VBSWxCOzs7Ozs7O0dDRkc7RURXSDtFQUNJLGFBQWEsRUFBQTtFQURqQjtJQUdRLGVBQWU7SUFDZixlQUFlLEVBQUE7RUFJdkI7RUFDSSxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsY0FBYyxFQUFBO0VBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTtFQUZiO0lBSVEseUJBQXlCO0lBQ3pCLGFBQWEsRUFBQTtFQUlyQjtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVSxFQUFBO0VBR2Q7RUFDSSxlQUFlLEVBQUE7RUFHbkI7RUFDSSxZQUFZLEVBQUE7RUFHaEI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCOztFQUVJLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLHlCQUF5QixFQUFBO0VBRDdCO0lBR1EsZUFBZSxFQUFBO0VBSXZCO0VBQ0ksdUJBQXVCLEVBQUE7RUFHM0I7RUFDSSxtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTtFQUdsQzs7O0VBR0ksMEJBQTBCLEVBQUE7RUFHOUI7RUFDSSxxQkFBcUI7RUFDckIsZUFBZSxFQUFBO0VBR25CO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTtFQUdoQjs7RUFFSSxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLHFDQUFxQyxFQUFBO0VBR3pDO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtFQUduQjtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSxlQUFlLEVBQUE7RUFHbkI7RUFDSSxlQUFlLEVBQUE7RUFHbkI7RUFDSSw0QkFBNEI7RUFDNUIseUJBQXlCLEVBQUE7RUFHN0I7RUFDSSxXQUFXLEVBQUE7RUFHZjtFQUNJLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBR1QscUNBQW9ELEVBQUE7RUFUeEQ7SUFXUSxXQUFXLEVBQUE7RUFJbkI7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0VBR25CO0VBQ0ksVUFBVSxFQUFBO0VBR2Q7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyLWNvcHkvY29tcG9uZW50cy9jcmVhdGUtbm9kZXMvY3JlYXRlLW5vZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCAuYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XG4gICAgfVxuICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIH1cbn1cblxuLmJ0bi1ncm91cDphY3RpdmUge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY3JlYXRlTGluayxcbi5lZGl0TGluayxcbi5kZWxldGVMaW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5jcmVhdGU6aG92ZXIge1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICB9XG4gICAgLmVkaXQ6aG92ZXIge1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgfVxuICAgIC5kZWxldGU6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cbn1cblxuLyogLm1vZGFsLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjNWY1ZjVmO1xuICAgIGJ1dHRvbi5jbG9zZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59ICovXG5cbjo6bmctZGVlcCAubW9kYWxJdGVtIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC5mYS1pbmZvLWNpcmNsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuOjpuZy1kZWVwIC5tb2RhbEl0ZW0uYnV0dG9uQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbjo6bmctZGVlcCAuc2VjdGlvbk5hbWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbjo6bmctZGVlcCAuaW5wdXRTcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIGlucHV0IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FjYWNhYztcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG59XG5cbjo6bmctZGVlcCAucHJvcGVydHlMYWJlbCB7XG4gICAgcGFkZGluZy10b3A6IDEzcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Om5nLWRlZXAgLnN1cHBvcnRJY29ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA2JTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbjo6bmctZGVlcCAuc3VwcG9ydEljb25zLmN1c3RvbURlbGV0ZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pbnB1dCNwcm9wZXJ0eUtleSB7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG46Om5nLWRlZXAgLm5ld0xpbmsge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xufVxuXG4ubmV3TGluazIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEycHg7XG4gICAgcGFkZGluZzogNXB4IDdweDtcbn1cblxuLmxvd2VyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubmV3TGluazpob3Zlcixcbi5uZXdMaW5rMjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWY1ZjtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5ld1RlbXBsYXRlIHtcbiAgICBtYXgtd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xuICAgIGRpdiB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbmkuZmFzLmZhLWluZm8tY2lyY2xlIHtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuaW5wdXRbZGlzYWJsZWQ9XCJ0cnVlXCJdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbCAhaW1wb3J0YW50O1xufVxuXG4uZGVsZXRlQnRuLFxuLm1haWxCdG4sXG4ucmVzdG9yZUJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5sYXRlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhdGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haWxCdG4sXG4ubGVmdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubWFpbEJ0biB7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbn1cblxuLm1haWxCdG46aG92ZXIge1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggI2NjY2NjYztcbn1cblxuLm1haWxCdG46YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHRyYW5zaXRpb246IC41cztcbn1cblxuOjpuZy1kZWVwIC5uZXdQcm9wZXJ0eUdyb3VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xufVxuXG46Om5nLWRlZXAgLm5vcm1hbFRleHRCb3gge1xuICAgIG1heC13aWR0aDogMTRlbTtcbn1cblxuOjpuZy1kZWVwIC50eXBlVGV4dEJveCB7XG4gICAgbWF4LXdpZHRoOiAyMGVtO1xufVxuXG4udHlwZVRleHRCb3ggaW5wdXQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbn1cblxuLnVpLmlucHV0LnR5cGVUZXh0Qm94IHtcbiAgICB3aWR0aDogMTRlbTtcbn1cblxuI2lkX25ld0xhYmVsTm9kZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG5cbi5jaXJjdWxhckJ0biB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcbiAgICBib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cbn1cblxuLmNpcmN1bGFyQnRuOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5jaXJjdWxhckJ0bjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLmFsZ29yaXRobXMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59IiwiLmNvbnRhaW5lci1mbHVpZCAuYnRuLWdyb3VwIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XG4gIC5jb250YWluZXItZmx1aWQgLmJ0bi1ncm91cCBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggI2NjY2NjYztcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4ICNjY2NjY2M7XG4gICAgYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggI2NjY2NjYzsgfVxuICAuY29udGFpbmVyLWZsdWlkIC5idG4tZ3JvdXAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzOyB9XG5cbi5idG4tZ3JvdXA6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5jcmVhdGVMaW5rLFxuLmVkaXRMaW5rLFxuLmRlbGV0ZUxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuXG4uZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxuXG4uZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4uZHJvcGRvd24tbWVudSAuY3JlYXRlOmhvdmVyIHtcbiAgY29sb3I6IGJsdWU7IH1cblxuLmRyb3Bkb3duLW1lbnUgLmVkaXQ6aG92ZXIge1xuICBjb2xvcjogZ3JlZW47IH1cblxuLmRyb3Bkb3duLW1lbnUgLmRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiByZWQ7IH1cblxuLyogLm1vZGFsLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjNWY1ZjVmO1xuICAgIGJ1dHRvbi5jbG9zZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59ICovXG46Om5nLWRlZXAgLm1vZGFsSXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cbiAgOjpuZy1kZWVwIC5tb2RhbEl0ZW0gLmZhLWluZm8tY2lyY2xlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbjo6bmctZGVlcCAubW9kYWxJdGVtLmJ1dHRvbkNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG46Om5nLWRlZXAgLnNlY3Rpb25OYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIG1heC13aWR0aDogNTAlOyB9XG5cbjo6bmctZGVlcCAuaW5wdXRTcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7IH1cbiAgOjpuZy1kZWVwIC5pbnB1dFNwYW4gaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhY2FjYWM7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuXG46Om5nLWRlZXAgLnByb3BlcnR5TGFiZWwge1xuICBwYWRkaW5nLXRvcDogMTNweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG46Om5nLWRlZXAgLnN1cHBvcnRJY29ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDYlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHJlZDsgfVxuXG46Om5nLWRlZXAgLnN1cHBvcnRJY29ucy5jdXN0b21EZWxldGUge1xuICBmb250LXNpemU6IDIwcHg7IH1cblxuaW5wdXQjcHJvcGVydHlLZXkge1xuICBoZWlnaHQ6IDMwcHg7IH1cblxuOjpuZy1kZWVwIC5uZXdMaW5rIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHggN3B4OyB9XG5cbi5uZXdMaW5rMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTJweDtcbiAgcGFkZGluZzogNXB4IDdweDsgfVxuXG4ubG93ZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4OyB9XG5cbi5uZXdMaW5rOmhvdmVyLFxuLm5ld0xpbmsyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWY1ZjtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cblxuLm5ld1RlbXBsYXRlIHtcbiAgbWF4LXdpZHRoOiAzNSUgIWltcG9ydGFudDsgfVxuICAubmV3VGVtcGxhdGUgZGl2IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cblxuaS5mYXMuZmEtaW5mby1jaXJjbGUge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgfVxuXG5pbnB1dFtkaXNhYmxlZD1cInRydWVcIl0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDsgfVxuXG4uZGVsZXRlQnRuLFxuLm1haWxCdG4sXG4ucmVzdG9yZUJ0biB7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50OyB9XG5cbi5sYXRlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5sYXRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4ubWFpbEJ0bixcbi5sZWZ0IHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XG5cbi5tYWlsQnRuIHtcbiAgcGFkZGluZzogNXB4IDhweDsgfVxuXG4ubWFpbEJ0bjpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgY29sb3I6ICMwMDA7XG4gIGJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4ICNjY2NjY2M7IH1cblxuLm1haWxCdG46YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNpdGlvbjogLjVzOyB9XG5cbjo6bmctZGVlcCAubmV3UHJvcGVydHlHcm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2NjY2NjYzsgfVxuXG46Om5nLWRlZXAgLm5vcm1hbFRleHRCb3gge1xuICBtYXgtd2lkdGg6IDE0ZW07IH1cblxuOjpuZy1kZWVwIC50eXBlVGV4dEJveCB7XG4gIG1heC13aWR0aDogMjBlbTsgfVxuXG4udHlwZVRleHRCb3ggaW5wdXQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwOyB9XG5cbi51aS5pbnB1dC50eXBlVGV4dEJveCB7XG4gIHdpZHRoOiAxNGVtOyB9XG5cbiNpZF9uZXdMYWJlbE5vZGUge1xuICBwYWRkaW5nLWxlZnQ6IDNweDsgfVxuXG4uY2lyY3VsYXJCdG4ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgd2lkdGg6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4ICNjY2NjY2M7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggI2NjY2NjYztcbiAgYm94LXNoYWRvdzogMnB4IDlweCAxN3B4IC0xcHggI2NjY2NjYzsgfVxuICAuY2lyY3VsYXJCdG4gaW1nIHtcbiAgICB3aWR0aDogNDBweDsgfVxuXG4uY2lyY3VsYXJCdG46YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNpdGlvbjogLjVzOyB9XG5cbi5jaXJjdWxhckJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7IH1cblxuLmFsZ29yaXRobXMge1xuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/create-nodes/create-nodes.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/create-nodes/create-nodes.component.ts ***!
  \*********************************************************************************************/
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
            _this.relationTypeOptions = data;
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
        if (index < 0) {
            extractedTypes = this.pushOnTop(this.ADD_NEW_TYPE, extractedTypes);
        }
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
        relationData.type = [this.selectedType];
        // extract properties from modal if entered
        /* $('#createRelationModal :text').each(function() {
          let key = $(this).attr('id') || null;
          let value = $(this).val() || null;
          relationData.properties[key] = value;
          }); */
        console.log('properties object on submit rel is  ', this.selectedPropertiesObject);
        relationData.properties = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.selectedPropertiesObject);
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
            template: __webpack_require__(/*! ./create-nodes.component.html */ "./src/app/modules/dashboard-v2-copy/components/create-nodes/create-nodes.component.html"),
            styles: [__webpack_require__(/*! ./create-nodes.component.scss */ "./src/app/modules/dashboard-v2-copy/components/create-nodes/create-nodes.component.scss")]
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

/***/ "./src/app/modules/dashboard-v2-copy/components/dashboard-v2-header/dashboard-header.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/dashboard-v2-header/dashboard-header.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-3\">\n    <div class=\"headerWrapper\">\n        <div class=\"row\">\n            <div class=\"col-3 logo left-logo\">\n                <img (click)=\"redirectToHome()\" src=\"assets/societal-logo.png\" />\n            </div>\n            <div class=\"col-9 rightToolbar\">\n                <div class=\"dropdown\">\n                    <div class=\"profilePic\">\n                        <p>Hi Rishabh</p>\n                        <img src=\"./../../../../../assets/round_profile.jpg\" />\n                    </div>\n                    <div class=\"dropdown-content\">\n                        <a href=\"/profile\">PROFILE</a>\n                        <a href=\"/settings\">SETTINGS</a>\n                        <a href=\"/logout\">LOGOUT</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/dashboard-v2-header/dashboard-header.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/dashboard-v2-header/dashboard-header.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerWrapper {\n  height: 10vh;\n  background: #fff; }\n\n.container-fluid {\n  background: #fff; }\n\n.rightToolbar {\n  height: 100%;\n  float: right;\n  width: 30%; }\n\n.login-button {\n  border-radius: 20px;\n  font-size: 14px;\n  line-height: 2;\n  min-width: 90px;\n  float: right;\n  background: #5f5f5f;\n  border: none;\n  text-decoration: none; }\n\n.login-button:active:focus {\n  background: #5f5f5e; }\n\n.login-button:hover {\n  box-shadow: 2px 7px 18px 1px rgba(95, 95, 95, 0.76);\n  transition: 0.7s; }\n\n.dropdown {\n  position: relative;\n  float: right;\n  z-index: 10; }\n\n.dropdown:hover .dropdown-content {\n  display: block;\n  transition: 0.5s; }\n\n.dropdown-content:hover {\n  display: block;\n  transition: 1s; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: white;\n  padding: 0;\n  min-height: 120px;\n  min-width: 220px;\n  right: 1px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  z-index: 1; }\n\n.dropdown-content a {\n    padding: 20px 10px;\n    display: block;\n    text-decoration: none;\n    color: grey;\n    font-weight: 400; }\n\n.dropdown-content a:hover {\n    background-color: #5f5f5f;\n    color: white;\n    transition: 0.7s;\n    border-radius: 5px; }\n\n.profilePic {\n  margin-right: 30px;\n  border-radius: 50%;\n  display: -webkit-box;\n  /* img:hover {\n        width: 80px;\n        height: 80px;\n        transition: 0.5s;\n    } */ }\n\n.profilePic img {\n    cursor: pointer;\n    width: 70px;\n    height: 70px; }\n\n.profilePic p {\n    margin-top: 30px;\n    margin-right: 20px;\n    cursor: pointer; }\n\n.profileDetails {\n  position: absolute;\n  background: whitesmoke;\n  color: black;\n  display: inline;\n  min-width: 100px; }\n\n.left-logo img {\n  cursor: pointer;\n  max-height: 10vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjItY29weS9jb21wb25lbnRzL2Rhc2hib2FyZC12Mi1oZWFkZXIvZGFzaGJvYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjItY29weS9jb21wb25lbnRzL2Rhc2hib2FyZC12Mi1oZWFkZXIvZGFzaGJvYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHZDtFQUNJLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxtREFBbUQ7RUFDbkQsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFZLEVBQUE7O0FBR2hCO0VBRVEsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFFaEIsVUFBVTtFQUNWLCtDQUErQztFQWMvQyxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQXhCZDtJQVdRLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTs7QUFmeEI7SUFrQlEseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7O0FBTTFCO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFNcEI7Ozs7T0NoQkcsRURvQkM7O0FBYlI7SUFLUSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVksRUFBQTs7QUFQcEI7SUFlUSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBRVEsZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjItY29weS9jb21wb25lbnRzL2Rhc2hib2FyZC12Mi1oZWFkZXIvZGFzaGJvYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJXcmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnJpZ2h0VG9vbGJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMzAlO1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxvZ2luLWJ1dHRvbjphY3RpdmU6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWU7XG59XG5cbi5sb2dpbi1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDJweCA3cHggMThweCAxcHggcmdiYSg5NSwgOTUsIDk1LCAwLjc2KTtcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuXG4uZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgei1pbmRleCA6IDEwO1xufVxuXG4uZHJvcGRvd246aG92ZXIge1xuICAgIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgfVxufVxuXG4uZHJvcGRvd24tY29udGVudDpob3ZlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMXM7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgIG1pbi13aWR0aDogMjIwcHg7XG4gICAgLy8gdG9wOiA4NnB4O1xuICAgIHJpZ2h0OiAxcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIGE6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5wcm9maWxlUGljIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGltZyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICB9XG4gICAgLyogaW1nOmhvdmVyIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB9ICovXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLnByb2ZpbGVEZXRhaWxzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi5sZWZ0LWxvZ28ge1xuICAgIGltZyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWF4LWhlaWdodDogMTB2aDtcbiAgICB9XG59IiwiLmhlYWRlcldyYXBwZXIge1xuICBoZWlnaHQ6IDEwdmg7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cblxuLnJpZ2h0VG9vbGJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMzAlOyB9XG5cbi5sb2dpbi1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBtaW4td2lkdGg6IDkwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuLmxvZ2luLWJ1dHRvbjphY3RpdmU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVlOyB9XG5cbi5sb2dpbi1idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggN3B4IDE4cHggMXB4IHJnYmEoOTUsIDk1LCA5NSwgMC43Nik7XG4gIHRyYW5zaXRpb246IDAuN3M7IH1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHotaW5kZXg6IDEwOyB9XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjVzOyB9XG5cbi5kcm9wZG93bi1jb250ZW50OmhvdmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDFzOyB9XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogMTIwcHg7XG4gIG1pbi13aWR0aDogMjIwcHg7XG4gIHJpZ2h0OiAxcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHotaW5kZXg6IDE7IH1cbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LXdlaWdodDogNDAwOyB9XG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDAuN3M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG5cbi5wcm9maWxlUGljIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAvKiBpbWc6aG92ZXIge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIH0gKi8gfVxuICAucHJvZmlsZVBpYyBpbWcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7IH1cbiAgLnByb2ZpbGVQaWMgcCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5wcm9maWxlRGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1pbi13aWR0aDogMTAwcHg7IH1cblxuLmxlZnQtbG9nbyBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC1oZWlnaHQ6IDEwdmg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/dashboard-v2-header/dashboard-header.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/dashboard-v2-header/dashboard-header.component.ts ***!
  \********************************************************************************************************/
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
            template: __webpack_require__(/*! ./dashboard-header.component.html */ "./src/app/modules/dashboard-v2-copy/components/dashboard-v2-header/dashboard-header.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-header.component.scss */ "./src/app/modules/dashboard-v2-copy/components/dashboard-v2-header/dashboard-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardHeaderComponent);
    return DashboardHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/dashboard-v2-sidebar/dashboard-sidebar.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/dashboard-v2-sidebar/dashboard-sidebar.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper sidebar-wrapper\">\n    <div class=\"sidebarBody p-0\">\n        <div class=\"sidebarBodyTitle\">\n            <p>Filter By</p>\n        </div>\n        <div class=\"sidebarElements\" *ngIf=\"totalAtrributeOptions?.length > 0\">\n            <div class=\"item-container\">\n                <div class=\"item\" *ngFor=\"let attributeOptions of totalAtrributeOptions; let i = index\">\n                    <div *ngIf=\"attributeOptions\">\n                        <span class=\"\">\n\n                        </span>\n                        <a class=\"item-text hoverable\" (click)=\"networkElementClick(attributeOptions['attribute']);attributeOptions['rotate'] = !attributeOptions['rotate']\" data-toggle=\"collapse\" href=\"#collapseExample{{i}}\" role=\"button\" [attr.aria-expanded]=\"attributeOptions['rotate']\"\n                            [attr.aria-controls]=\"'collapseExample'+i\" [ngClass]=\"{'rotate': attributeOptions['rotate'], 'no-rotate': !attributeOptions['rotate']}\">{{attributeOptions['attribute']}}\n                            <span class=\"ele-count count-org\">{{attributeOptions['options'].length}}</span>\n                        </a>\n                        <span class=\"fas fa-chevron-right\" data-toggle=\"collapse\" [attr.href]=\"'#collapseExample'+i\" role=\"button\" [attr.aria-expanded]=\"attributeOptions?.rotate\" [attr.aria-controls]=\"'collapseExample'+i\" (click)=\"attributeOptions['rotate'] = !attributeOptions['rotate']\"\n                            [ngClass]=\"{'rotate': attributeOptions?.rotate, 'no-rotate': !attributeOptions?.rotate}\">\n                        </span>\n                        <div class=\"collapse\" [ngClass]=\"{'show-drop': attributeOptions?.rotate, 'hide-drop': !attributeOptions?.rotate}\">\n                            <sui-multi-select [(ngModel)]=\"selectedAttributeOptions[attributeOptions['attribute']]\" [options]=\"attributeOptions['options']\" [maxSelected]=\"15\"  #totalAtrributeOptions>\n                                <div class=\"ui icon search input\">\n                                    <i class=\"search icon\"></i>\n                                    <input suiSelectSearch type=\"text\" placeholder=\"Search {{attributeOptions['attribute']}}...\">\n                                </div>\n                                <div class=\"scrolling menu\">\n                                    <sui-select-option *ngFor=\"let o of totalAtrributeOptions.filteredOptions\" [value]=\"o\"></sui-select-option>\n                                </div>\n                            </sui-multi-select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"btn-container d-flex justify-content-around\">\n            <div class=\"searchBtnWrapper btn-sidebar\">\n                <button class=\"btn btn-default btn-md searchBtn\" (click)=\"resetGraph()\">Reset</button>\n            </div>\n            <div class=\"searchBtnWrapper btn-sidebar\">\n                <button class=\"btn btn-default btn-md searchBtn\" (click)=\"hitSearchGraph()\">Apply</button>\n            </div>\n\n        </div> -->\n        <!-- <div class=\"searchBtnWrapper btn-sidebar\">\n            <button class=\"btn btn-default btn-md searchBtn\" (click)=\"noderelationSearchGraph()\">Apply Both</button>\n        </div> -->\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Kanit&display=swap\");\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5; }\n::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5; }\n::-webkit-scrollbar-thumb {\n  background-color: #5f5f5f; }\n.margin-top-75 {\n  margin-top: 75px; }\n.sidebar-wrapper {\n  position: absolute;\n  left: 0;\n  overflow-y: auto;\n  z-index: 1;\n  width: 20%;\n  height: 92vh;\n  background: #fff; }\n.logo {\n  text-align: center; }\n.logo img {\n  cursor: pointer; }\n.sidebarBodyTitle {\n  font-family: 'Kanit', sans-serif;\n  font-size: 18px;\n  text-align: center; }\n.sidebarBodyTitle p {\n    padding: 0 10px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    background: transparent;\n    color: #5f5f5f;\n    font-weight: bold;\n    border-radius: 5px;\n    transition: 1s;\n    text-align: left; }\n.sidebarElements {\n  width: 100%;\n  padding: 25px 0; }\n.item {\n  font-size: 16px;\n  width: 100%;\n  padding: 0; }\n.item span {\n    margin-right: 20px; }\n.hoverable:hover {\n  font-size: 18px;\n  transition: 0.5s; }\n.item-container {\n  height: 40vh;\n  overflow-y: auto; }\n.item-container::-webkit-scrollbar {\n  display: none; }\n.item,\n.item span {\n  min-height: 50px;\n  line-height: 2.7; }\n.item-text {\n  cursor: pointer;\n  text-decoration: none;\n  color: #000; }\n.fa-chevron-right {\n  float: right;\n  cursor: pointer; }\n.rotate {\n  transform: rotate(90deg); }\n.no-rotate {\n  transform: rotate(0deg); }\n.click-pink {\n  color: pink; }\n.hide {\n  display: none; }\n.show {\n  display: block; }\n.show-drop {\n  transition: all linear 0.5s;\n  display: block; }\n.hide-drop {\n  display: none; }\n.ui.teal.left.pointing.label {\n  background: #5f5f5f !important; }\n.searchBtnWrapper {\n  font-family: 'Kanit', sans-serif;\n  font-size: 18px;\n  text-align: center;\n  position: relative;\n  margin-bottom: 20px;\n  bottom: 0;\n  width: 100%; }\n.searchBtnWrapper button {\n    background: #e4e4e4;\n    color: #000;\n    min-width: 100px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); }\n.searchBtnWrapper button:active {\n    box-shadow: none;\n    transition: 0.5s; }\n.btn-sidebar {\n  display: inline; }\n.btn-container {\n  margin-bottom: 25px; }\n.rel-tabs-container {\n  display: inline-block; }\n.rel-tab p {\n  word-break: break-all;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: bold;\n  font-size: 15px;\n  background-color: #F5F5F5;\n  color: #30333a;\n  margin: 4px;\n  padding: 3px 7px;\n  border-radius: 3px; }\n.ele-count {\n  border-radius: 50%;\n  padding: 8px;\n  margin-left: 10px;\n  text-align: center;\n  display: inline; }\n.wrapper hr {\n  margin-bottom: 2em;\n  margin-top: 0.15em; }\n.rel-tabs-container .selected {\n  box-shadow: -4px 4px 17px -8px rgba(0, 0, 0, 0.75); }\n.count-org {\n  background-color: #F5F5F5; }\n.count-person {\n  background-color: #F5F5F5; }\n.count-department {\n  background-color: #F5F5F5; }\nspan.ele-count.count-org {\n  padding: 9px 11px 9px 11px; }\n.c_ff4444 {\n  background-color: '#ff4444'; }\n.c_ffbb33 {\n  background-color: '#ffbb33'; }\n.c_00C851 {\n  background-color: '#00C851'; }\n.c_33b5e5 {\n  background-color: '#33b5e5'; }\n.c_CC0000 {\n  background-color: '#CC0000'; }\n.c_FF8800 {\n  background-color: '#FF8800'; }\n.c_007E33 {\n  background-color: '#007E33'; }\n.c_0099CC {\n  background-color: '#0099CC'; }\n.c_9933CC {\n  background-color: '#9933CC'; }\n.c_0d47a1 {\n  background-color: '#0d47a1'; }\n.c_2BBBAD {\n  background-color: '#2BBBAD'; }\n.c_c51162 {\n  background-color: '#c51162'; }\n.spanWrapper {\n  font-family: 'Kanit', sans-serif;\n  font-weight: bold;\n  max-width: 135px; }\n@media screen and (max-width: 1100px) {\n  .sidebar-wrapper {\n    width: 25%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjItY29weS9jb21wb25lbnRzL2Rhc2hib2FyZC12Mi1zaWRlYmFyL2Rhc2hib2FyZC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlFQUFZO0FBQ1o7RUFFSSw0Q0FBNEM7RUFDNUMseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxVQUFVO0VBQ1YseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFHUCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxrQkFBa0IsRUFBQTtBQUl0QjtFQUdRLGVBQWUsRUFBQTtBQUl2QjtFQUNJLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7QUFIdEI7SUFNUSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGlCQUFpQjtJQUVqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQixFQUFBO0FBSXhCO0VBQ0ksV0FBVztFQUNYLGVBQWUsRUFBQTtBQUduQjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVSxFQUFBO0FBSGQ7SUFPUSxrQkFBa0IsRUFBQTtBQUkxQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLGFBQWEsRUFBQTtBQUdqQjs7RUFFSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTtBQUdmO0VBQ0ksWUFBWTtFQUNaLGVBQWUsRUFBQTtBQUduQjtFQUNJLHdCQUF3QixFQUFBO0FBSTVCO0VBQ0ksdUJBQXVCLEVBQUE7QUFJM0I7RUFDSSxXQUFXLEVBQUE7QUFHZjtFQUNJLGFBQWEsRUFBQTtBQUdqQjtFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUVJLDJCQUEyQjtFQUMzQixjQUFjLEVBQUE7QUFHbEI7RUFDSSxhQUFhLEVBQUE7QUFHakI7RUFDSSw4QkFBOEIsRUFBQTtBQUdsQztFQUNJLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVcsRUFBQTtBQVBmO0lBVVEsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsK0NBQStDLEVBQUE7QUFidkQ7SUFnQlEsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0FBSXhCO0VBQ0ksZUFBZSxFQUFBO0FBR25CO0VBQ0ksbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxxQkFBcUIsRUFBQTtBQUd6QjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsMkRBQTJEO0VBQzNELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7QUFHdEI7RUFFSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBR3RCO0VBR0ksa0RBQWtELEVBQUE7QUFHdEQ7RUFDSSx5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSwwQkFBMEIsRUFBQTtBQUc5QjtFQUNJLDJCQUNKLEVBQUE7QUFFQTtFQUNJLDJCQUNKLEVBQUE7QUFFQTtFQUNJLDJCQUNKLEVBQUE7QUFFQTtFQUNJLDJCQUNKLEVBQUE7QUFFQTtFQUNJLDJCQUNKLEVBQUE7QUFFQTtFQUNJLDJCQUNKLEVBQUE7QUFFQTtFQUNJLDJCQUNKLEVBQUE7QUFFQTtFQUNJLDJCQUNKLEVBQUE7QUFFQTtFQUNJLDJCQUNKLEVBQUE7QUFFQTtFQUNJLDJCQUNKLEVBQUE7QUFFQTtFQUNJLDJCQUNKLEVBQUE7QUFFQTtFQUNJLDJCQUNKLEVBQUE7QUFFQTtFQUNJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7QUFJcEI7RUFDSTtJQUNJLFVBQVUsRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjItY29weS9jb21wb25lbnRzL2Rhc2hib2FyZC12Mi1zaWRlYmFyL2Rhc2hib2FyZC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYW5pdCZkaXNwbGF5PXN3YXAnKTtcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZjVmO1xufVxuXG4ubWFyZ2luLXRvcC03NSB7XG4gICAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgLy8gd2lkdGg6IDIzJTtcbiAgICAvLyBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogOTJ2aDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubG9nbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ubG9nbyB7XG4gICAgaW1nIHtcbiAgICAgICAgLy8gd2lkdGg6IDcwJTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLnNpZGViYXJCb2R5VGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICAgIC8vIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAvLyBib3gtc2hhZG93OiAycHggN3B4IDE4cHggMXB4IHJnYmEoOTUsIDk1LCA5NSwgMC43Nik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMXM7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufVxuXG4uc2lkZWJhckVsZW1lbnRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyNXB4IDA7XG59XG5cbi5pdGVtIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICAvLyBoZWlnaHQ6IDIwJTtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGU6aG92ZXIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uaXRlbS1jb250YWluZXIge1xuICAgIGhlaWdodDogNDB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uaXRlbS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaXRlbSxcbi5pdGVtIHNwYW4ge1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIuNztcbn1cblxuLml0ZW0tdGV4dCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmZhLWNoZXZyb24tcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3RhdGUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAvLyB0cmFuc2l0aW9uOiAuOHM7XG59XG5cbi5uby1yb3RhdGUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC8vIHRyYW5zaXRpb246IC44cztcbn1cblxuLmNsaWNrLXBpbmsge1xuICAgIGNvbG9yOiBwaW5rO1xufVxuXG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2hvdy1kcm9wIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuNXM7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oaWRlLWRyb3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi51aS50ZWFsLmxlZnQucG9pbnRpbmcubGFiZWwge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWYgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaEJ0bldyYXBwZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIH1cbn1cblxuLmJ0bi1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5idG4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ucmVsLXRhYnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yZWwtdGFiIHAge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICBjb2xvcjogcmdiKDQ4LCA1MSwgNTgpO1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHBhZGRpbmc6IDNweCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uZWxlLWNvdW50IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLndyYXBwZXIgaHIge1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjE1ZW07XG59XG5cbi5yZWwtdGFicy1jb250YWluZXIgLnNlbGVjdGVkIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC00cHggNHB4IDE3cHggLThweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogLTRweCA0cHggMTdweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgYm94LXNoYWRvdzogLTRweCA0cHggMTdweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5jb3VudC1vcmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jb3VudC1wZXJzb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jb3VudC1kZXBhcnRtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG5zcGFuLmVsZS1jb3VudC5jb3VudC1vcmcge1xuICAgIHBhZGRpbmc6IDlweCAxMXB4IDlweCAxMXB4O1xufVxuXG4uY19mZjQ0NDQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjZmY0NDQ0J1xufVxuXG4uY19mZmJiMzMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjZmZiYjMzJ1xufVxuXG4uY18wMEM4NTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMDBDODUxJ1xufVxuXG4uY18zM2I1ZTUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMzNiNWU1J1xufVxuXG4uY19DQzAwMDAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjQ0MwMDAwJ1xufVxuXG4uY19GRjg4MDAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjRkY4ODAwJ1xufVxuXG4uY18wMDdFMzMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMDA3RTMzJ1xufVxuXG4uY18wMDk5Q0Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMDA5OUNDJ1xufVxuXG4uY185OTMzQ0Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjOTkzM0NDJ1xufVxuXG4uY18wZDQ3YTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMGQ0N2ExJ1xufVxuXG4uY18yQkJCQUQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjMkJCQkFEJ1xufVxuXG4uY19jNTExNjIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICcjYzUxMTYyJ1xufVxuXG4uc3BhbldyYXBwZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1heC13aWR0aDogMTM1cHg7XG59XG5cbi8vIGFuIGF0dGVtcHQgdG8gbWFrZSBpdCBhIGJpdCByZXNwb25zaXZlXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAnMTEwMHB4Jykge1xuICAgIC5zaWRlYmFyLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/dashboard-v2-sidebar/dashboard-sidebar.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/dashboard-v2-sidebar/dashboard-sidebar.component.ts ***!
  \**********************************************************************************************************/
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
            query: "MATCH (p) WHERE p:Batch OR p:Student WITH DISTINCT keys(p) AS keys,p\n     with DISTINCT labels(p) as label,keys \n     UNWIND keys AS keyslisting WITH DISTINCT keyslisting AS allfields,label\n     RETURN collect(allfields),label"
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
                    if (keyName !== 'deleted' && keyName !== 'color' && keyName !== 'name' && keyName !== 'type') {
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
            template: __webpack_require__(/*! ./dashboard-sidebar.component.html */ "./src/app/modules/dashboard-v2-copy/components/dashboard-v2-sidebar/dashboard-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-sidebar.component.scss */ "./src/app/modules/dashboard-v2-copy/components/dashboard-v2-sidebar/dashboard-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"], src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_3__["SharedGraphService"],
            src_app_modules_shared_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"], src_app_modules_algo_runner_services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_8__["ToolbarSharedService"]])
    ], DashboardSidebarComponent);
    return DashboardSidebarComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/graph-exporter/graph-exporter.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/graph-exporter/graph-exporter.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid export-btn\">\n    <button (click)=\"exportAsCsv('csv')\" class=\"circularBtn\"><i class=\"fas fa-download\"></i></button>\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/graph-exporter/graph-exporter.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/graph-exporter/graph-exporter.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".export-btn button {\n  background: #e4e4e4;\n  color: #000;\n  box-shadow: -4px 4px 14px -9px rgba(0, 0, 0, 0.75); }\n\n.export-btn button:active {\n  box-shadow: none;\n  transition: 0.5s; }\n\n.circularBtn {\n  font-size: 1.5rem;\n  width: 40px;\n  border-radius: 50%;\n  height: 40px;\n  border: 0;\n  box-shadow: 2px 9px 17px -1px #cccccc; }\n\n.circularBtn:active {\n  box-shadow: none;\n  transition: .5s; }\n\n.circularBtn:focus {\n  outline: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjItY29weS9jb21wb25lbnRzL2dyYXBoLWV4cG9ydGVyL2dyYXBoLWV4cG9ydGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsbUJBQW1CO0VBQ25CLFdBQVc7RUFHWCxrREFBa0QsRUFBQTs7QUFOMUQ7RUFTUSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFHVCxxQ0FBb0QsRUFBQTs7QUFHeEQ7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyLWNvcHkvY29tcG9uZW50cy9ncmFwaC1leHBvcnRlci9ncmFwaC1leHBvcnRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBvcnQtYnRuIHtcbiAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNHB4IDRweCAxNHB4IC05cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAtNHB4IDRweCAxNHB4IC05cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgYm94LXNoYWRvdzogLTRweCA0cHggMTRweCAtOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgfVxuICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIH1cbn1cblxuLmNpcmN1bGFyQnRuIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggOXB4IDE3cHggLTFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xuICAgIGJveC1zaGFkb3c6IDJweCA5cHggMTdweCAtMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XG59XG5cbi5jaXJjdWxhckJ0bjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uY2lyY3VsYXJCdG46Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/graph-exporter/graph-exporter.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/graph-exporter/graph-exporter.component.ts ***!
  \*************************************************************************************************/
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
            template: __webpack_require__(/*! ./graph-exporter.component.html */ "./src/app/modules/dashboard-v2-copy/components/graph-exporter/graph-exporter.component.html"),
            styles: [__webpack_require__(/*! ./graph-exporter.component.scss */ "./src/app/modules/dashboard-v2-copy/components/graph-exporter/graph-exporter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_graph_export_service_graph_export_service__WEBPACK_IMPORTED_MODULE_2__["GraphExportService"], src_app_modules_shared_services_export_service_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
    ], GraphExporterComponent);
    return GraphExporterComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/graph-v2-visualizer/graph-visualizer.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/graph-v2-visualizer/graph-visualizer.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-global-loader *ngIf=\"loader\"></app-global-loader>\n<app-color-panel *ngIf=\"!loader\"></app-color-panel>\n<div class=\"wrapper-countlimit\" *ngIf=\"!loader\">\n    <div class=\"selected-count\">{{selectedCount}} Elements Found</div>\n    <div class=\"float-right-toolbar\">\n        <!-- graph exporter -->\n        <div class=\"export\">\n            <app-graph-exporter></app-graph-exporter>\n        </div>\n    </div>\n</div>\n<div class=\"graph-container\" id=\"graphViewer\">\n</div>\n<ng-template *ngIf=\"showlimiterror\" let-popup #popupTemplate>\n    <div class=\"header\">Rating</div>\n    <div class=\"content\">\n        <sui-rating class=\"star\" (click)=\"popup.close()\"></sui-rating>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/graph-v2-visualizer/graph-visualizer.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/graph-v2-visualizer/graph-visualizer.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".graph-container {\n  background: #F5F5F5;\n  height: 80vh;\n  width: 100%; }\n\n.selected-count {\n  background: #F5F5F5;\n  word-break: break-all;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  color: #30333a;\n  border-radius: 3px;\n  padding: 1em;\n  float: left; }\n\n.wrapper-countlimit {\n  width: 80%;\n  float: right; }\n\n.nodeLimit {\n  max-width: 200px;\n  top: 50px;\n  float: left;\n  border-radius: 3px;\n  padding: 1em;\n  background: #F5F5F5;\n  outline: none; }\n\n.float-right-toolbar {\n  display: inline-flex;\n  width: 63%;\n  justify-content: flex-end; }\n\n.creationToolbar {\n  display: inline;\n  top: 50px;\n  padding: 1em;\n  outline: none; }\n\n.export {\n  margin-top: 15px; }\n\n.nodeLimit input {\n  width: 35%;\n  border: 0.3px solid #000;\n  padding: 5px;\n  border-radius: 2px; }\n\n.nodeLimit:focus {\n  outline: none; }\n\n.nodelimit-head {\n  display: inline;\n  margin-right: 3px; }\n\n@media screen and (max-width: 1100px) {\n  .graph-container,\n  .selected-count {\n    width: 75%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkaXR5YS9wcm9qZWN0L25ldHdvcmtfdml6dWFsaXplcl9kMy9uZXR3b3JrLXZpc3VhbGl6ZXIvY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjItY29weS9jb21wb25lbnRzL2dyYXBoLXYyLXZpc3VhbGl6ZXIvZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsMkRBQTJEO0VBQzNELGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLHlCQUF5QixFQUFBOztBQUk3QjtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJOztJQUVJLFVBQVUsRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQtdjItY29weS9jb21wb25lbnRzL2dyYXBoLXYyLXZpc3VhbGl6ZXIvZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFwaC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VsZWN0ZWQtY291bnQge1xuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzMwMzMzYTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4ud3JhcHBlci1jb3VudGxpbWl0IHtcbiAgICB3aWR0aDogODAlO1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLm5vZGVMaW1pdCB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICB0b3A6IDUwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mbG9hdC1yaWdodC10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogNjMlO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cblxuLmNyZWF0aW9uVG9vbGJhciB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHRvcDogNTBweDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmV4cG9ydCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLm5vZGVMaW1pdCBpbnB1dCB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBib3JkZXI6IDAuM3B4IHNvbGlkICMwMDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLm5vZGVMaW1pdDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLm5vZGVsaW1pdC1oZWFkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICcxMTAwcHgnKSB7XG4gICAgLmdyYXBoLWNvbnRhaW5lcixcbiAgICAuc2VsZWN0ZWQtY291bnQge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/graph-v2-visualizer/graph-visualizer.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/graph-v2-visualizer/graph-visualizer.component.ts ***!
  \********************************************************************************************************/
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
/* harmony import */ var _services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/colorService/color-service.service */ "./src/app/modules/dashboard-v2-copy/services/colorService/color-service.service.ts");
/* harmony import */ var src_app_modules_algo_runner_services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service */ "./src/app/modules/algo-runner/services/toolbar-shared-service/toolbar-shared.service.ts");
/* harmony import */ var src_app_modules_redux_services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/redux/services/core-filter-service/core-filter.service */ "./src/app/modules/redux/services/core-filter-service/core-filter.service.ts");










var GraphVisualizerComponent = /** @class */ (function () {
    function GraphVisualizerComponent(graphService, sharedGraphService, snackBar, colorService, algoRunnerShrdSrvc, CoreFilterSrvc) {
        this.graphService = graphService;
        this.sharedGraphService = sharedGraphService;
        this.snackBar = snackBar;
        this.colorService = colorService;
        this.algoRunnerShrdSrvc = algoRunnerShrdSrvc;
        this.CoreFilterSrvc = CoreFilterSrvc;
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
        this.graphService.getInitialDataV3().subscribe(function (result) {
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
        var flag = false;
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
                    if (node.type[0] === 'Student' && node.label === _this.username) {
                        node.type[0] = 'You';
                        temColorObj['You'] = _this.colorConfig['defaultColor']['Spot'];
                        flag = true;
                    }
                }
            }
        });
        if (!flag) {
            resultObj['seperateNodes'][5].type[0] = 'You';
            temColorObj['You'] = this.colorConfig['defaultColor']['Spot'];
        }
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
                    if (key !== 'deleted' && key !== 'color' && key !== 'Type' && key !== 'skill') {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphVisualizerComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GraphVisualizerComponent.prototype, "username", void 0);
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
            template: __webpack_require__(/*! ./graph-visualizer.component.html */ "./src/app/modules/dashboard-v2-copy/components/graph-v2-visualizer/graph-visualizer.component.html"),
            styles: [__webpack_require__(/*! ./graph-visualizer.component.scss */ "./src/app/modules/dashboard-v2-copy/components/graph-v2-visualizer/graph-visualizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_services_graph_data_service_graph_data_service__WEBPACK_IMPORTED_MODULE_2__["GraphDataService"],
            src_app_modules_core_services_shared_graph_service__WEBPACK_IMPORTED_MODULE_5__["SharedGraphService"],
            _custom_material_services_material_core_material_service__WEBPACK_IMPORTED_MODULE_6__["MaterialService"],
            _services_colorService_color_service_service__WEBPACK_IMPORTED_MODULE_7__["ColorServiceService"], src_app_modules_algo_runner_services_toolbar_shared_service_toolbar_shared_service__WEBPACK_IMPORTED_MODULE_8__["ToolbarSharedService"],
            src_app_modules_redux_services_core_filter_service_core_filter_service__WEBPACK_IMPORTED_MODULE_9__["CoreFilterService"]])
    ], GraphVisualizerComponent);
    return GraphVisualizerComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/main-v2/main.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/main-v2/main.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-dashboard-sidebar (eventClicked)=\"childEventClicked($event)\" (nodeTypesEvent)=\"sendTypes($event)\" [newNodeCreated]=\"newNodeCreated\" [nodeLimitEnterEvent] = \"nodeLimitValue\"></app-dashboard-sidebar> -->\n<app-graph-visualizer [username]=\"username\" (newNodeCreated)=\"childEventClicked2($event)\" [event]=\"clickedEvent\" (nodeLimitEvent)=\"sendLimitToSidebar($event)\" [totalTypesArray]=\"totalTypesArray\"></app-graph-visualizer>"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/main-v2/main.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/main-v2/main.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkLXYyLWNvcHkvY29tcG9uZW50cy9tYWluLXYyL21haW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/components/main-v2/main.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/components/main-v2/main.component.ts ***!
  \********************************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MainComponent = /** @class */ (function () {
    function MainComponent(route) {
        this.route = route;
        this.totalTypesArray = [];
        this.nodeLimitValue = null;
        console.log(this.route.snapshot.params.name);
        this.username = this.route.snapshot.params.name;
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
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/modules/dashboard-v2-copy/components/main-v2/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/modules/dashboard-v2-copy/components/main-v2/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard-v2-copy/dashboard-v2-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/dashboard-v2-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardV2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardV2RoutingModule", function() { return DashboardV2RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-v2/main.component */ "./src/app/modules/dashboard-v2-copy/components/main-v2/main.component.ts");




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

/***/ "./src/app/modules/dashboard-v2-copy/dashboard-v2.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/dashboard-v2.module.ts ***!
  \******************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_v2_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-v2-routing.module */ "./src/app/modules/dashboard-v2-copy/dashboard-v2-routing.module.ts");
/* harmony import */ var _components_main_v2_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-v2/main.component */ "./src/app/modules/dashboard-v2-copy/components/main-v2/main.component.ts");
/* harmony import */ var _components_graph_v2_visualizer_graph_visualizer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/graph-v2-visualizer/graph-visualizer.component */ "./src/app/modules/dashboard-v2-copy/components/graph-v2-visualizer/graph-visualizer.component.ts");
/* harmony import */ var _components_dashboard_v2_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard-v2-sidebar/dashboard-sidebar.component */ "./src/app/modules/dashboard-v2-copy/components/dashboard-v2-sidebar/dashboard-sidebar.component.ts");
/* harmony import */ var _components_dashboard_v2_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard-v2-header/dashboard-header.component */ "./src/app/modules/dashboard-v2-copy/components/dashboard-v2-header/dashboard-header.component.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _algo_runner_algo_runner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../algo-runner/algo-runner.module */ "./src/app/modules/algo-runner/algo-runner.module.ts");
/* harmony import */ var _components_color_panel_color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/color-panel/color-panel/color-panel.component */ "./src/app/modules/dashboard-v2-copy/components/color-panel/color-panel/color-panel.component.ts");
/* harmony import */ var _components_create_nodes_create_nodes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/create-nodes/create-nodes.component */ "./src/app/modules/dashboard-v2-copy/components/create-nodes/create-nodes.component.ts");
/* harmony import */ var _components_graph_exporter_graph_exporter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/graph-exporter/graph-exporter.component */ "./src/app/modules/dashboard-v2-copy/components/graph-exporter/graph-exporter.component.ts");
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

/***/ "./src/app/modules/dashboard-v2-copy/services/colorService/color-service.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/dashboard-v2-copy/services/colorService/color-service.service.ts ***!
  \******************************************************************************************/
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
                Batch: '#c51162',
                Student: '#007E33',
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



/***/ })

}]);
//# sourceMappingURL=modules-dashboard-v2-copy-dashboard-v2-module.js.map