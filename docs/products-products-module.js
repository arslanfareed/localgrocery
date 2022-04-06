(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "9Ii0":
/*!*************************************************************!*\
  !*** ./src/app/panels/merchant/products/products.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-routing.module */ "Azkk");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.component */ "FmLu");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory/inventory.component */ "A7gZ");
/* harmony import */ var _bundle_bundle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bundle/bundle.component */ "mFCl");
/* harmony import */ var _issues_issues_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./issues/issues.component */ "EEBA");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _inventory_bulk_upload_bulk_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inventory/bulk-upload/bulk-upload.component */ "ui5e");













class ProductsModule {
}
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductsRoutingModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteLibModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
        _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_6__["InventoryComponent"],
        _bundle_bundle_component__WEBPACK_IMPORTED_MODULE_7__["BundleComponent"],
        _issues_issues_component__WEBPACK_IMPORTED_MODULE_8__["IssuesComponent"],
        _inventory_bulk_upload_bulk_upload_component__WEBPACK_IMPORTED_MODULE_10__["BulkUploadComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
        _products_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductsRoutingModule"],
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
                    _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_6__["InventoryComponent"],
                    _bundle_bundle_component__WEBPACK_IMPORTED_MODULE_7__["BundleComponent"],
                    _issues_issues_component__WEBPACK_IMPORTED_MODULE_8__["IssuesComponent"],
                    _inventory_bulk_upload_bulk_upload_component__WEBPACK_IMPORTED_MODULE_10__["BulkUploadComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                    _products_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductsRoutingModule"],
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteLibModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "A7gZ":
/*!***************************************************************************!*\
  !*** ./src/app/panels/merchant/products/inventory/inventory.component.ts ***!
  \***************************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_shop_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/shop/shop.service */ "mMnW");
/* harmony import */ var _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/productLibrary/product-library.service */ "YY25");
/* harmony import */ var _services_productCatalog_product_catalog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/productCatalog/product-catalog.service */ "UoJ8");
/* harmony import */ var _services_productTax_product_tax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/productTax/product-tax.service */ "v4vL");
/* harmony import */ var _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/socket/socket.service */ "58qO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _bulk_upload_bulk_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bulk-upload/bulk-upload.component */ "ui5e");














function InventoryComponent_tr_51_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.product_name);
} }
function InventoryComponent_tr_51_td_8_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 50);
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r15.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function InventoryComponent_tr_51_td_8_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 50);
} if (rf & 2) {
    const notFound_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function InventoryComponent_tr_51_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ng-autocomplete", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function InventoryComponent_tr_51_td_8_Template_ng_autocomplete_selected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.selectEvent($event, i_r4); })("inputChanged", function InventoryComponent_tr_51_td_8_Template_ng_autocomplete_inputChanged_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.onChangeSearch($event); })("inputFocused", function InventoryComponent_tr_51_td_8_Template_ng_autocomplete_inputFocused_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.onFocused($event); })("ngModelChange", function InventoryComponent_tr_51_td_8_Template_ng_autocomplete_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return item_r3.productName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InventoryComponent_tr_51_td_8_ng_template_3_Template, 1, 1, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InventoryComponent_tr_51_td_8_ng_template_5_Template, 1, 1, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r6.library)("searchKeyword", ctx_r6.keyword)("itemTemplate", _r11)("notFoundTemplate", _r13)("ngModel", item_r3.productName);
} }
function InventoryComponent_tr_51_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r25 = ctx.$implicit;
    const ind_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ind_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tax_r25.shortName, " ");
} }
function InventoryComponent_tr_51_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r27 = ctx.$implicit;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3.selectedTaxUnitId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", unit_r27.symbol, " ");
} }
function InventoryComponent_tr_51_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fees_r30 = ctx.$implicit;
    const ind_r31 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ind_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fees_r30.shortName, " ");
} }
function InventoryComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_tr_51_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const item_r3 = ctx.$implicit; return item_r3.action = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InventoryComponent_tr_51_td_7_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InventoryComponent_tr_51_td_8_Template, 7, 5, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_tr_51_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const item_r3 = ctx.$implicit; return item_r3.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_tr_51_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const item_r3 = ctx.$implicit; return item_r3.stock = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_tr_51_Template_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const item_r3 = ctx.$implicit; return item_r3.selectedTax = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, InventoryComponent_tr_51_option_18_Template, 2, 2, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_tr_51_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const item_r3 = ctx.$implicit; return item_r3.taxes[item_r3.selectedTax].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_tr_51_Template_select_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const item_r3 = ctx.$implicit; return item_r3.selectedTaxUnitId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InventoryComponent_tr_51_option_22_Template, 2, 2, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_tr_51_Template_select_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const item_r3 = ctx.$implicit; return item_r3.selectedFees = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, InventoryComponent_tr_51_option_27_Template, 2, 2, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_tr_51_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const item_r3 = ctx.$implicit; return item_r3.fees[item_r3.selectedFees].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_tr_51_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const item_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return item_r3.action ? item_r3.isNewProduct ? ctx_r41.save(i_r4) : ctx_r41.update(i_r4) : ctx_r41.toggle(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_tr_51_Template_i_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const i_r4 = ctx.index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.delete(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r3.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.config.itemsPerPage * ctx_r0.config.currentPage - ctx_r0.config.itemsPerPage + i_r4 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r3.isNewProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.isNewProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://storage.googleapis.com/lg-content/ProdImages/", item_r3.image_link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r3.price)("disabled", !item_r3.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r3.stock)("disabled", !item_r3.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r3.selectedTax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.taxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r3.taxes[item_r3.selectedTax].value)("disabled", !item_r3.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r3.selectedTaxUnitId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.taxesUnits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r3.selectedFees);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.fees);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r3.fees[item_r3.selectedFees].value)("disabled", !item_r3.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r3.action ? "actionButtonSave" : "actionButtonEdit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.action ? "Save" : "Edit", " ");
} }
function InventoryComponent_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageSize_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", pageSize_r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSize_r43, " ");
} }
function InventoryComponent_app_bulk_upload_60_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-bulk-upload", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function InventoryComponent_app_bulk_upload_60_Template_app_bulk_upload_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.toggleBulkUpload(); })("upload", function InventoryComponent_app_bulk_upload_60_Template_app_bulk_upload_upload_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.uploadBulkProduct($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InventoryComponent {
    constructor(spinner, toastr, shopService, productLibraryService, productCatalogService, productTaxService, socketService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.shopService = shopService;
        this.productLibraryService = productLibraryService;
        this.productCatalogService = productCatalogService;
        this.productTaxService = productTaxService;
        this.socketService = socketService;
        this.isBulkUpload = false;
        this.products = [];
        this.p = 1;
        this.pageSizes = [5, 10, 25, 50];
        this.keyword = 'name';
        this.library = [];
        this.taxType = [];
        this.socketService.setupSocketConnection();
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: null,
        };
        this.shopService.selectedShopId.subscribe((data) => {
            if (data) {
                this.getProductByShop(data);
            }
        });
        this.getSuggestion();
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.socketService.closeConnection();
    }
    toggle(index) {
        this.products[index].action = !this.products[index].action;
    }
    toggleBulkUpload() {
        this.isBulkUpload = !this.isBulkUpload;
    }
    getProductByShop(shopId) {
        this.productCatalogService
            .getProductsByShop(shopId, this.config.currentPage, this.config.itemsPerPage)
            .subscribe((data) => {
            this.config.totalItems = data.total;
            this.products = data.body;
            const newObj = {
                taxes: [
                    { id: 1, shortName: 'GST', value: 0, },
                    { id: 2, shortName: 'HST', value: 0 },
                    { id: 3, shortName: 'PST', value: 0 },
                    { id: 4, shortName: 'QST', value: 0 },
                ],
                taxesUnits: [
                    { id: 1, symbol: '%' },
                    { id: 2, symbol: 'xx' }
                ],
                selectedTax: 0,
                selectedFees: 0,
                action: false,
                isNewProduct: false,
            };
            this.products = this.products.flat().map((p) => Object.assign(p, newObj));
            this.products.map((p) => {
                p.image_link = p.image_link.replace('images/', '');
                p.fees = [
                    {
                        id: 1,
                        shortName: 'ENV',
                        value: p.environmentfees,
                    },
                    { id: 2, shortName: 'REC', value: p.recyclefees },
                ];
            });
            console.log(this.products);
            this.productTaxService.getProductTaxByShop(this.products.length, 1, shopId).subscribe((data) => {
                console.log(data.body.data);
                this.products.map((p) => {
                    const taxes = data.body.data.filter((t) => t.productId == p.id);
                    console.log(taxes);
                    p.taxes[0].value = taxes.find((t) => t.taxId == 1).percent;
                    p.taxes[1].value = taxes.find((t) => t.taxId == 2).percent;
                    p.taxes[2].value = taxes.find((t) => t.taxId == 3).percent;
                    p.taxes[3].value = taxes.find((t) => t.taxId == 4).percent;
                    p.taxes = JSON.stringify(p.taxes);
                    p.taxes = JSON.parse(p.taxes);
                    console.log(this.products);
                });
            }, (error) => { });
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
        });
    }
    save(index) {
        console.log(this.products[index].productName);
        if (this.products[index].productName) {
            const productCatalogPayload = {
                shopId: this.shopService.selectedShopId.getValue(),
                productLibraryId: this.products[index].productLibraryId,
                price: this.products[index].price,
                stock: this.products[index].stock,
                environmentFees: this.products[index].fees[0].value,
                tax: 0,
                recycleFees: this.products[index].fees[1].value,
            };
            const productTaxesPayload = {
                productTaxes: [],
            };
            this.spinner.show();
            this.productCatalogService.addProduct(productCatalogPayload).subscribe((data) => {
                this.products[index].taxes.map((item) => {
                    const obj = {
                        productId: data.result.id,
                        taxId: item.id,
                        percent: item.value,
                        amount: (this.products[index].price * item.value) / 100,
                    };
                    productTaxesPayload.productTaxes.push(obj);
                });
                console.log(productTaxesPayload);
                this.productTaxService.addProductTax(productTaxesPayload).subscribe((data) => {
                    console.log(data);
                    // this.toastr.success(data.message, 'Success');
                    this.spinner.hide();
                    // this.toggle(index);
                    this.products[index].product_name = this.products[index].productName.product_name;
                    this.products[index].action = false;
                    this.products[index].isNewProduct = false;
                    console.log(this.products[index]);
                }, (error) => {
                    this.toastr.error(error.error.message, 'Error');
                    this.spinner.hide();
                });
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
    }
    update(index) {
        console.log(this.products[index].id);
        if (this.products[index].product_name) {
            this.products[index].action = !this.products[index].action;
            console.log(this.products[index]);
            const productCatalogPayload = {
                shopId: this.shopService.selectedShopId.getValue(),
                price: this.products[index].price,
                stock: this.products[index].stock,
                environmentFees: this.products[index].fees[0].value,
                recycleFees: this.products[index].fees[1].value,
            };
            const productTaxesPayload = {
                productTaxes: [],
            };
            console.log(productCatalogPayload, this.products[index].id);
            this.spinner.show();
            this.productCatalogService
                .updateProductByProductId(productCatalogPayload, this.products[index].id)
                .subscribe((data) => {
                console.log(data);
                this.products[index].taxes.map((item) => {
                    const obj = {
                        taxId: item.id,
                        percent: item.value,
                        amount: (this.products[index].price * item.value) / 100,
                    };
                    productTaxesPayload.productTaxes.push(obj);
                });
                console.log(productTaxesPayload);
                this.productTaxService
                    .updateProductTax(productTaxesPayload, this.products[index].id)
                    .subscribe((data) => {
                    console.log(data);
                    // this.toastr.success(data.message, 'Success');
                    this.spinner.hide();
                }, (error) => {
                    this.toastr.error(error.error.message, 'Error');
                    this.spinner.hide();
                });
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
    }
    publishAll() {
        const productPayload = [];
        const selectedProducts = this.products.filter((it) => it.action);
        if (!selectedProducts.length) {
            this.toastr.error('Please Select the item to publish', 'Error');
            return false;
        }
        let productLibraries = [];
        let errorMessage = '';
        selectedProducts.map((item, index) => {
            const productLibraryId = item.isNewProduct ? item.productLibraryId : item.productlibraryid;
            console.log(index);
            if (productLibraries.includes(productLibraryId)) {
                errorMessage = 'There is a duplicate item';
                return false;
            }
            else {
                productLibraries.push(productLibraryId);
            }
        });
        if (errorMessage) {
            this.toastr.error(errorMessage, 'Error');
            return false;
        }
        selectedProducts.map((item) => {
            if (!item.productName && !item.product_name) {
                errorMessage = 'Please fill the item detail first';
                return false;
            }
            const obj = {
                shopId: this.shopService.selectedShopId.getValue(),
                productLibraryId: item.isNewProduct ? item.productLibraryId : item.productlibraryid,
                price: item.price,
                stock: item.stock,
                environmentFees: item.fees[0].value,
                recycleFees: item.fees[1].value,
                tax: item.isNewProduct ? 0 : item.tax,
                isPublished: true,
            };
            productPayload.push(obj);
        });
        if (errorMessage) {
            this.toastr.error(errorMessage, 'Error');
            return false;
        }
        console.log(productPayload);
        this.spinner.show();
        this.productCatalogService.bulkUpsertProducts({ products: productPayload }).subscribe((data) => {
            console.log(data);
            const taxPayload = [];
            selectedProducts.map((item) => {
                const productLibraryId = item.isNewProduct
                    ? item.productLibraryId
                    : item.productlibraryid;
                item.taxes.map((tax) => {
                    const obj2 = {
                        productId: data.result.generatedMaps.find((it) => it.productLibraryId == productLibraryId).id,
                        taxId: tax.id,
                        percent: tax.value,
                        amount: (item.price * tax.value) / 100,
                    };
                    taxPayload.push(obj2);
                });
            });
            console.log(taxPayload);
            this.productTaxService.bulkUpsertProductTax({ productTaxes: taxPayload }).subscribe((data) => {
                selectedProducts.map((item) => {
                    item.action = false;
                });
                this.spinner.hide();
                console.log(data);
            }, (error) => { });
        }, (error) => {
            console.log(error);
        });
    }
    unpublishAll() {
        const productPayload = [];
        const selectedProducts = this.products.filter((it) => it.action);
        if (!selectedProducts.length) {
            this.toastr.error('Please Select the item to unpublish', 'Error');
            return false;
        }
        let productLibraries = [];
        let errorMessage = '';
        selectedProducts.map((item, index) => {
            const productLibraryId = item.isNewProduct ? item.productLibraryId : item.productlibraryid;
            console.log(index);
            if (productLibraries.includes(productLibraryId)) {
                errorMessage = 'There is a duplicate item';
                return false;
            }
            else {
                productLibraries.push(productLibraryId);
            }
        });
        if (errorMessage) {
            this.toastr.error(errorMessage, 'Error');
            return false;
        }
        selectedProducts.map((item) => {
            if (!item.productName && !item.product_name) {
                errorMessage = 'Please fill the item detail first';
                return false;
            }
            const obj = {
                shopId: this.shopService.selectedShopId.getValue(),
                productLibraryId: item.isNewProduct ? item.productLibraryId : item.productlibraryid,
                price: item.price,
                stock: item.stock,
                environmentFees: item.fees[0].value,
                recycleFees: item.fees[1].value,
                tax: item.isNewProduct ? 0 : item.tax,
                isPublished: false,
            };
            productPayload.push(obj);
        });
        if (errorMessage) {
            this.toastr.error(errorMessage, 'Error');
            return false;
        }
        console.log(productPayload);
        this.spinner.show();
        this.productCatalogService.bulkUpsertProducts({ products: productPayload }).subscribe((data) => {
            console.log(data);
            const taxPayload = [];
            selectedProducts.map((item) => {
                const productLibraryId = item.isNewProduct
                    ? item.productLibraryId
                    : item.productlibraryid;
                item.taxes.map((tax) => {
                    const obj2 = {
                        productId: data.result.generatedMaps.find((it) => it.productLibraryId == productLibraryId).id,
                        taxId: tax.id,
                        percent: tax.value,
                        amount: (item.price * tax.value) / 100,
                    };
                    taxPayload.push(obj2);
                });
            });
            console.log(taxPayload);
            this.productTaxService.bulkUpsertProductTax({ productTaxes: taxPayload }).subscribe((data) => {
                selectedProducts.map((item) => {
                    item.action = false;
                });
                this.spinner.hide();
                console.log(data);
            }, (error) => { });
        }, (error) => {
            console.log(error);
        });
    }
    delete(index) {
        console.log(this.products[index].id);
        if (!this.products[index].isNewProduct) {
            this.products[index].action = !this.products[index].action;
            console.log(this.products[index]);
            const payload = {
                shopId: this.shopService.selectedShopId.getValue(),
            };
            this.spinner.show();
            this.productCatalogService.deleteProductById(payload, this.products[index].id).subscribe((data) => {
                console.log(data);
                // this.toastr.success(data.message, 'Success');
                this.spinner.hide();
                this.products.splice(index, 1);
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
        else {
            this.products.splice(index, 1);
        }
    }
    addButton() {
        const obj = {
            productLibraryId: null,
            productName: '',
            image_link: '',
            price: 1,
            stock: 1,
            taxes: [
                { id: 1, shortName: 'GST', value: 0 },
                { id: 2, shortName: 'HST', value: 0 },
                { id: 3, shortName: 'PST', value: 0 },
                { id: 4, shortName: 'QST', value: 0 },
            ],
            taxesUnits: [
                { id: 1, symbol: '%' },
                { id: 2, symbol: 'xx' }
            ],
            fees: [
                { id: 1, shortName: 'ENV', value: 0, },
                { id: 2, shortName: 'REC', value: 0 },
            ],
            selectedTax: 0,
            selectedTaxUnitId: 1,
            selectedFees: 0,
            environmentFees: 0,
            recycleFees: 0,
            action: true,
            isNewProduct: true,
        };
        this.products.push(obj);
        // this.getProductList();
    }
    addBulkProduct(prod) {
        prod.map((item) => {
            const obj = {
                productLibraryId: 'suggestion' in item ? item.suggestion[0].product_id : null,
                productName: 'suggestion' in item ? item.suggestion[0].product_name : '',
                price: 1,
                stock: 1,
                taxes: [
                    {
                        id: 1,
                        shortName: 'GST',
                        value: 0,
                    },
                    { id: 2, shortName: 'HST', value: 0 },
                    { id: 3, shortName: 'PST', value: 0 },
                    { id: 4, shortName: 'QST', value: 0 },
                ],
                fees: [
                    {
                        id: 1,
                        shortName: 'ENV',
                        value: 0,
                    },
                    { id: 2, shortName: 'REC', value: 0 },
                ],
                selectedTax: 0,
                selectedFees: 0,
                environmentFees: 0,
                recycleFees: 0,
                action: true,
                isNewProduct: true,
            };
            this.products.push(obj);
        });
        console.log(this.products);
    }
    selectEvent(item, index) {
        // do something with selected item
        this.products[index].productLibraryId = item.id;
        this.products[index].productName = item.name;
        this.products[index].image_link = item.image_link.replace('images/', '');
        console.log(item);
        console.log(this.products[index]);
    }
    onChangeSearch(search) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
        this.sendSearch(search);
    }
    onFocused(e) {
        // do something
    }
    getProductList() {
        if (this.library.length < 10)
            this.productLibraryService.getProducts().subscribe((data) => {
                this.library = data.body.slice(0, 1000);
            });
    }
    getTaxesTypeList() {
        if (this.productLibraryService.taxes.value.length) {
            this.productLibraryService.getTaxesType().subscribe((data) => {
                this.productLibraryService.setTaxesType(data.body);
            });
        }
    }
    uploadBulkProduct(payload) {
        this.spinner.show();
        payload.append(`shopId`, this.shopService.selectedShopId.getValue());
        console.log(payload.get('products'));
        console.log(payload.get('shopId'));
        this.productCatalogService.bulkUpload(payload).subscribe((data) => {
            console.log(data);
            this.toastr.success(data.body, 'Success');
            this.spinner.hide();
            // this.addBulkProduct(data);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    sendSearch(keyword) {
        this.socketService.sendMessage(keyword);
    }
    getSuggestion() {
        this.socketService.getSuggestion().subscribe((data) => {
            console.log(data);
            this.library = data;
        });
    }
    selectAll(event) {
        this.products.map((item) => {
            item.action = event.currentTarget.checked;
        });
    }
    changePageSize() {
        this.getProductByShop(this.shopService.selectedShopId.getValue());
    }
    pageChanged(event) {
        this.config.currentPage = event;
        this.getProductByShop(this.shopService.selectedShopId.getValue());
    }
}
InventoryComponent.ɵfac = function InventoryComponent_Factory(t) { return new (t || InventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shop_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productCatalog_product_catalog_service__WEBPACK_IMPORTED_MODULE_5__["ProductCatalogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productTax_product_tax_service__WEBPACK_IMPORTED_MODULE_6__["ProductTaxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"])); };
InventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InventoryComponent, selectors: [["app-inventory"]], decls: 61, vars: 7, consts: [[1, "row", "m-0", "p-3", "bg-white", "d-flex", "justify-content-between", "align-items-center"], [1, "col-md-3"], [1, "col-md-7"], [1, "row", "float-right", "d-flex", "justify-content-center"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-button"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "dropdown-item"], [1, "text-button", 3, "click"], [1, "fa", "fa-upload", "uploadIcon"], ["type", "button", 1, "btn", "rounded-pill", "add-button", 3, "click"], [1, "fa", "fa-plus-circle"], [1, "body"], [1, "heading"], [1, "table", "table-striped"], ["scope", "col"], [1, "checkbox"], ["type", "checkbox", 3, "click"], [1, "checkmark"], ["class", "m-2", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-2"], [1, "pageSizeSelect"], [1, "form-control", "pageSizeSelect", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["responsive", "true", 1, "pagination", 3, "pageChange"], [3, "close", "upload", 4, "ngIf"], [1, "m-2"], [1, ""], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["scope", "row"], [4, "ngIf"], [1, "product-image"], ["onerror", "this.src='../../../../assets/category/images/fruits.jpg'", "alt", "LG", 1, "icon", 3, "src"], ["type", "number", 3, "ngModel", "disabled", "ngModelChange"], [1, "input-group"], [1, "input-group-prepend"], ["id", "inputGroupSelect01", 1, "custom-select", "input-group-text", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "custom-select", "input-group-text", 3, "ngModel", "ngModelChange"], [1, "dropdown"], ["data-toggle", "dropdown", "href", "#", 1, "btn", "btn-default", 3, "ngClass", "click"], [1, "fa", "fa-trash", "deleteIcon", 3, "click"], [1, "ng-autocomplete"], ["placeholder", "Enter the Product Name", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "ngModel", "selected", "inputChanged", "inputFocused", "ngModelChange"], ["itemTemplate", ""], ["notFoundTemplate", ""], [3, "innerHTML"], [3, "value"], [3, "ngValue"], [3, "close", "upload"]], template: function InventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PRODUCT CATALOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Bulk Action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_Template_span_click_11_listener() { return ctx.publishAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Publish Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_Template_span_click_13_listener() { return ctx.unpublishAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Unpublish Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_Template_b_click_17_listener() { return ctx.toggleBulkUpload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Bulk Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_Template_button_click_20_listener() { return ctx.addButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ADD NEW PRODUCT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Inventory Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_Template_input_click_32_listener($event) { return ctx.selectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "PRODUCT NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "IMAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "PRICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "STOCK ITEMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "TAXES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "FEES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, InventoryComponent_tr_51_Template, 33, 21, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_select_ngModelChange_56_listener($event) { return ctx.config.itemsPerPage = $event; })("change", function InventoryComponent_Template_select_change_56_listener() { return ctx.changePageSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, InventoryComponent_option_57_Template, 2, 2, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "pagination-controls", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function InventoryComponent_Template_pagination_controls_pageChange_59_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, InventoryComponent_app_bulk_upload_60_Template, 1, 0, "app-bulk-upload", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](52, 4, ctx.products, ctx.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.config.itemsPerPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageSizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBulkUpload);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _bulk_upload_bulk_upload_component__WEBPACK_IMPORTED_MODULE_12__["BulkUploadComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"]], styles: [".body[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 90vh;\n  padding: 30px;\n  margin: 0px;\n  overflow-x: auto;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #f29700;\n  font-weight: 900;\n  font-size: 1.3em;\n}\n\n.text-button[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px;\n  font-size: 1em;\n  color: #f29700;\n  font-weight: 700;\n  text-align: center;\n  cursor: pointer;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  width: 250px;\n  padding: 10px;\n  font-size: 1em;\n  color: white;\n  font-weight: 700;\n}\n\n.heading[_ngcontent-%COMP%] {\n  color: #f29700;\n  font-weight: 600;\n  padding-left: 40px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.btn-default[_ngcontent-%COMP%] {\n  font-family: Raleway-SemiBold;\n  font-size: 13px;\n  color: rgba(108, 88, 179, 0.75);\n  letter-spacing: 1px;\n  line-height: 15px;\n  border: 2px solid rgba(108, 89, 179, 0.75);\n  border-radius: 40px;\n  background: transparent;\n  transition: all 0.3s ease 0s;\n}\n\n.btn-default[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(108, 88, 179, 0.75);\n  border: 2px solid rgba(108, 89, 179, 0.75);\n}\n\ninput[_ngcontent-%COMP%] {\n  border: #f29700 thin solid;\n  border-radius: 5px;\n  text-align: center;\n  color: #f29700;\n  width: 60px;\n  line-height: 30px;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  width: 150px;\n}\n\ninput[type=number][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > th[_ngcontent-%COMP%] {\n  background-color: #f8f5f5;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > th[_ngcontent-%COMP%] {\n  background-color: #f8f5f5;\n}\n\ntr[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 0.5em;\n  padding: 5px;\n}\n\n.actionButtonEdit[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  color: white;\n}\n\n.actionButtonSave[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n\n.ng-autocomplete[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\n.deleteIcon[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 25px;\n  text-indent: 20px;\n  vertical-align: middle;\n}\n\n\n\n.checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 25px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n\n\n.checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 20px;\n  width: 20px;\n  background-color: #f29700;\n}\n\n\n\n.checkbox[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #f29700;\n}\n\n\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #f29700;\n}\n\n\n\n.checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n\n\n\n.checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  left: 7px;\n  top: 4px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n@media (max-width: 1139px) {\n  app-bulk-upload[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 15;\n    top: 12vh;\n    left: 5vw;\n    right: 5vw;\n  }\n}\n\n@media (min-width: 1140px) {\n  app-bulk-upload[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 15;\n    top: 12vh;\n    left: 20vw;\n    right: 20vw;\n  }\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a:hover {\n  border-radius: 30px;\n  background-color: #f29700;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a {\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li:not(:first-child):not(:last-child) {\n  width: 40px;\n  height: 40px;\n  line-height: 30px;\n  border-radius: 30px;\n  background-color: #e9ebf0;\n  margin: 5px;\n  text-align: center;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\n  background-color: #f29700 !important;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous .disabled span {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-left: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 30px;\n  padding-right: 30px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a::before, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous.disabled::before {\n  content: \" \";\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a::after, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next.disabled::after {\n  content: \" \";\n}\n\n.pageSizeSelect[_ngcontent-%COMP%]:focus {\n  border: #f29700 thin solid;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL21lcmNoYW50L3Byb2R1Y3RzL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ1pXO0VEYVgsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0NyQlc7RURzQlgsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQzVCVztFRDZCWCxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFQTtFQUNFLGNDcENXO0VEcUNYLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQUdGOztBQUFBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0NsRVc7RURtRVgsV0FBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBREE7O0VBRUUsd0JBQUE7QUFJRjs7QUFEQTs7RUFFRSx5QkFBQTtBQUlGOztBQURBOztFQUVFLHlCQUFBO0FBSUY7O0FBREE7RUFDRSxpQkFBQTtBQUlGOztBQURBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFJRjs7QUFEQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUlGOztBQURBO0VBQ0UseUJDN0dXO0VEOEdYLFlBQUE7QUFJRjs7QUFJQTtFQUNFLFdBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQURGOztBQUdBO0VBQ0UseUJDL0hXO0VEZ0lYLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQSx1RkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0FBQUY7O0FBR0Esd0NBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFBRjs7QUFHQSw2QkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQzVLVztBRDRLYjs7QUFHQSwrQ0FBQTs7QUFDQTtFQUNFLHlCQ2pMVztBRGlMYjs7QUFHQSx3REFBQTs7QUFDQTtFQUNFLHlCQ3RMVztBRHNMYjs7QUFHQSw2REFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQSxvQ0FBQTs7QUFDQTtFQUNFLGNBQUE7QUFBRjs7QUFHQSxrQ0FBQTs7QUFDQTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBR0Esd0JBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7RUFERjtBQUNGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSx5QkMxT1c7QURzT2I7O0FBTUE7RUFDRSxvQkFBQTtBQUhGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDblBhO0VEb1BiLFdBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUlBO0VBQ0Usb0NBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNoUWE7RURpUWIsa0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQzFRYTtFRDJRYixrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkNyUmE7RURzUmIsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7O0VBRUUsWUFBQTtBQURGOztBQUdBOztFQUVFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9tZXJjaGFudC9wcm9kdWN0cy9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuaDMge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG59XHJcblxyXG4udGV4dC1idXR0b24ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hZGQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uaGVhZGluZyB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59XHJcbi5idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uYnRuLWRlZmF1bHQge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5LVNlbWlCb2xkO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogcmdiYSgxMDgsIDg4LCAxNzksIDAuNzUpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMDgsIDg5LCAxNzksIDAuNzUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5cclxuLmJ0bi1kZWZhdWx0OmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgODgsIDE3OSwgMC43NSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMDgsIDg5LCAxNzksIDAuNzUpO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiAkYmFzZS1jb2xvciB0aGluIHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGQsXHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSA+IHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDUsIDI0NSk7IC8vIENob29zZSB5b3VyIG93biBjb2xvciBoZXJlXHJcbn1cclxuXHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikgPiB0ZCxcclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSA+IHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDUsIDI0NSk7IC8vIENob29zZSB5b3VyIG93biBjb2xvciBoZXJlXHJcbn1cclxuXHJcbnRyIHtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDAgMC41ZW07XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYWN0aW9uQnV0dG9uRWRpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxNDcsIDc2KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hY3Rpb25CdXR0b25TYXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vIC5pY29uIHtcclxuLy8gICBtYXJnaW4tbGVmdDogMTVweDtcclxuLy8gICBjb2xvcjogcmdiKDI0MSwgOTgsIDk4KTtcclxuLy8gfVxyXG5cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5nLWF1dG9jb21wbGV0ZSB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmRlbGV0ZUljb24ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHRleHQtaW5kZW50OiAyMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENIRUNLIEJPWCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLmNoZWNrYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xyXG4uY2hlY2tib3ggaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xyXG4uY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbi5jaGVja2JveDpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cclxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xyXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xyXG4uY2hlY2tib3ggLmNoZWNrbWFyazphZnRlciB7XHJcbiAgbGVmdDogN3B4O1xyXG4gIHRvcDogNHB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMzlweCkge1xyXG4gIGFwcC1idWxrLXVwbG9hZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxNTtcclxuICAgIHRvcDogMTJ2aDtcclxuICAgIGxlZnQ6IDV2dztcclxuICAgIHJpZ2h0OiA1dnc7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTE0MHB4KSB7XHJcbiAgYXBwLWJ1bGstdXBsb2FkIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE1O1xyXG4gICAgdG9wOiAxMnZoO1xyXG4gICAgbGVmdDogMjB2dztcclxuICAgIHJpZ2h0OiAyMHZ3O1xyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFBhZ2luYXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaSBhOmhvdmVyIHtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGkgYSB7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaTpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hhZG93LWNvbG9yO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIC5kaXNhYmxlZCBzcGFuIHtcclxuICBjb250ZW50OiBcIiBcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxOTEsIDE5NywgMjA3KTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoYWRvdy1jb2xvcjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyBhIHtcclxuICBjb250ZW50OiBcIiBcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxOTEsIDE5NywgMjA3KTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoYWRvdy1jb2xvcjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IGEge1xyXG4gIGNvbnRlbnQ6IFwiIFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDE5MSwgMTk3LCAyMDcpO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzaGFkb3ctY29sb3I7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgYTo6YmVmb3JlLFxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG59XHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCBhOjphZnRlcixcclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0LmRpc2FibGVkOjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbn1cclxuXHJcbi5wYWdlU2l6ZVNlbGVjdDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAkYmFzZS1jb2xvciB0aGluIHNvbGlkO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuIiwiJGJhc2UtY29sb3I6IHJnYigyNDIsIDE1MSwgMCk7XHJcbiRzaGFkb3ctY29sb3I6IHJnYigyMzMsIDIzNSwgMjQwKTtcclxuJGdyZWVuLWNvbG9yOiAjMjM5MzRjO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inventory',
                templateUrl: './inventory.component.html',
                styleUrls: ['./inventory.component.scss'],
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _services_shop_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] }, { type: _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"] }, { type: _services_productCatalog_product_catalog_service__WEBPACK_IMPORTED_MODULE_5__["ProductCatalogService"] }, { type: _services_productTax_product_tax_service__WEBPACK_IMPORTED_MODULE_6__["ProductTaxService"] }, { type: _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "Azkk":
/*!*********************************************************************!*\
  !*** ./src/app/panels/merchant/products/products-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ "FmLu");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory/inventory.component */ "A7gZ");
/* harmony import */ var _bundle_bundle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bundle/bundle.component */ "mFCl");
/* harmony import */ var _issues_issues_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./issues/issues.component */ "EEBA");








const routes = [
    {
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"],
        children: [
            { path: '', redirectTo: 'inventory', pathMatch: 'full' },
            {
                path: 'inventory',
                component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_3__["InventoryComponent"],
                pathMatch: 'full',
            },
            {
                path: 'bundle',
                component: _bundle_bundle_component__WEBPACK_IMPORTED_MODULE_4__["BundleComponent"],
                pathMatch: 'full',
            },
            {
                path: 'issue',
                component: _issues_issues_component__WEBPACK_IMPORTED_MODULE_5__["IssuesComponent"],
                pathMatch: 'full',
            },
        ],
    },
];
class ProductsRoutingModule {
}
ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "EEBA":
/*!*********************************************************************!*\
  !*** ./src/app/panels/merchant/products/issues/issues.component.ts ***!
  \*********************************************************************/
/*! exports provided: IssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesComponent", function() { return IssuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IssuesComponent {
    constructor() { }
    ngOnInit() {
    }
}
IssuesComponent.ɵfac = function IssuesComponent_Factory(t) { return new (t || IssuesComponent)(); };
IssuesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IssuesComponent, selectors: [["app-issues"]], decls: 2, vars: 0, template: function IssuesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "issues works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9tZXJjaGFudC9wcm9kdWN0cy9pc3N1ZXMvaXNzdWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssuesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-issues',
                templateUrl: './issues.component.html',
                styleUrls: ['./issues.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FmLu":
/*!****************************************************************!*\
  !*** ./src/app/panels/merchant/products/products.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 1, vars: 0, template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9tZXJjaGFudC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mFCl":
/*!*********************************************************************!*\
  !*** ./src/app/panels/merchant/products/bundle/bundle.component.ts ***!
  \*********************************************************************/
/*! exports provided: BundleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BundleComponent", function() { return BundleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_shop_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/shop/shop.service */ "mMnW");
/* harmony import */ var _services_bundleCatalog_bundle_catalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/bundleCatalog/bundle-catalog.service */ "Mjsx");
/* harmony import */ var _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/productLibrary/product-library.service */ "YY25");
/* harmony import */ var _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/socket/socket.service */ "58qO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");











function BundleComponent_tr_33_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.bundleName);
} }
function BundleComponent_tr_33_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BundleComponent_tr_33_td_4_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return item_r1.bundleName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1.bundleName)("disabled", !item_r1.action);
} }
function BundleComponent_tr_33_div_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 29);
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r18.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function BundleComponent_tr_33_div_8_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 29);
} if (rf & 2) {
    const notFound_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function BundleComponent_tr_33_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-autocomplete", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function BundleComponent_tr_33_div_8_Template_ng_autocomplete_selected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.selectEvent($event, i_r2); })("inputChanged", function BundleComponent_tr_33_div_8_Template_ng_autocomplete_inputChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.onChangeSearch($event); })("inputFocused", function BundleComponent_tr_33_div_8_Template_ng_autocomplete_inputFocused_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.onFocused($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BundleComponent_tr_33_div_8_ng_template_2_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BundleComponent_tr_33_div_8_ng_template_4_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r5.library)("searchKeyword", ctx_r5.keyword)("itemTemplate", _r14)("notFoundTemplate", _r16);
} }
function BundleComponent_tr_33_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemInclude_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemInclude_r25.product_name);
} }
function BundleComponent_tr_33_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r26 = ctx.$implicit;
    const ind_r27 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ind_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tax_r26.shortName, " ");
} }
function BundleComponent_tr_33_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fees_r28 = ctx.$implicit;
    const ind_r29 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ind_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fees_r28.shortName, " ");
} }
function BundleComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BundleComponent_tr_33_td_3_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BundleComponent_tr_33_td_4_Template, 2, 2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BundleComponent_tr_33_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r1 = ctx.$implicit; return item_r1.stock = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BundleComponent_tr_33_div_8_Template, 6, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BundleComponent_tr_33_div_9_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BundleComponent_tr_33_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r1 = ctx.$implicit; return item_r1.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BundleComponent_tr_33_Template_select_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r1 = ctx.$implicit; return item_r1.selectedTax = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BundleComponent_tr_33_option_15_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BundleComponent_tr_33_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r1 = ctx.$implicit; return item_r1.taxes[item_r1.selectedTax].percent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BundleComponent_tr_33_Template_select_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r1 = ctx.$implicit; return item_r1.selectedFees = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BundleComponent_tr_33_option_24_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BundleComponent_tr_33_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r1 = ctx.$implicit; return item_r1.fees[item_r1.selectedFees].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BundleComponent_tr_33_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return item_r1.action ? item_r1.isNewProduct ? ctx_r37.save(i_r2) : ctx_r37.update(i_r2) : ctx_r37.toggle(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.isNewProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isNewProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1.stock)("disabled", !item_r1.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isNewProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.productIncludes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1.price)("disabled", !item_r1.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1.selectedTax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.taxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1.taxes[item_r1.selectedTax].percent)("disabled", !item_r1.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1.selectedFees);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.fees);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1.fees[item_r1.selectedFees].value)("disabled", !item_r1.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r1.action ? "actionButtonSave" : "actionButtonEdit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.action ? "Save" : "Edit", " ");
} }
class BundleComponent {
    constructor(spinner, toastr, shopService, bundleCatalogService, productLibraryService, socketService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.shopService = shopService;
        this.bundleCatalogService = bundleCatalogService;
        this.productLibraryService = productLibraryService;
        this.socketService = socketService;
        this.products = [];
        this.keyword = 'name';
        this.library = [];
        this.taxType = [];
        this.socketService.setupSocketConnection();
        this.shopService.selectedShopId.subscribe((data) => {
            if (data) {
                this.getBundleByShop(data);
            }
        });
        this.getSuggestion();
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.socketService.closeConnection();
    }
    addButton() {
        const obj = {
            productLibraryId: null,
            bundleName: '',
            price: 1,
            stock: 1,
            productIncludes: [],
            taxes: [
                {
                    taxId: 1,
                    shortName: 'GST',
                    percent: 0,
                },
                { taxId: 2, shortName: 'HST', percent: 0 },
                { taxId: 3, shortName: 'PST', percent: 0 },
                { taxId: 4, shortName: 'QST', percent: 0 },
            ],
            fees: [
                {
                    id: 1,
                    shortName: 'ENV',
                    value: 0,
                },
                { id: 2, shortName: 'REC', value: 0 },
            ],
            selectedTax: 0,
            selectedFees: 0,
            action: true,
            isNewProduct: true,
        };
        this.products.push(obj);
        // this.getProductList();
    }
    selectEvent(item, index) {
        // do something with selected item
        console.log(item);
        const obj = {
            productLibraryId: item.id,
            product_name: item.name,
        };
        this.products[index].productIncludes.push(obj);
    }
    onChangeSearch(search) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
        this.sendSearch(search);
    }
    onFocused(e) {
        // do something
    }
    getProductList() {
        if (this.library.length < 10)
            this.productLibraryService.getProducts().subscribe((data) => {
                this.library = data.body;
            });
    }
    getTaxesTypeList() {
        if (this.productLibraryService.taxes.value.length) {
            this.productLibraryService.getTaxesType().subscribe((data) => {
                this.productLibraryService.setTaxesType(data.body);
            });
        }
    }
    toggle(index) {
        this.products[index].action = !this.products[index].action;
    }
    getBundleByShop(shopId) {
        this.bundleCatalogService.getBundleByShop(shopId).subscribe((data) => {
            this.products = data.body;
            const newObj = {
                taxes: [
                    {
                        id: 1,
                        shortName: 'GST',
                        percent: 0,
                    },
                    { id: 2, shortName: 'HST', percent: 0 },
                    { id: 3, shortName: 'PST', percent: 0 },
                    { id: 4, shortName: 'QST', percent: 0 },
                ],
                selectedTax: 0,
                selectedFees: 0,
                action: false,
                isNewProduct: false,
            };
            this.products = this.products.flat().map((p) => Object.assign(p, newObj));
            this.products.map((p) => {
                p.fees = [
                    {
                        id: 1,
                        shortName: 'ENV',
                        value: p.environmentFees,
                    },
                    { id: 2, shortName: 'REC', value: p.recycleFees },
                ];
            });
            this.bundleCatalogService.getBundleTaxByShopId(this.products.length, 1, shopId).subscribe((data) => {
                this.products.map((p) => {
                    const taxes = data.body.data.filter((t) => t.bundleId == p.id);
                    console.log(taxes);
                    p.taxes[0].percent = taxes.find((t) => t.taxId == 1).percent;
                    p.taxes[1].percent = taxes.find((t) => t.taxId == 2).percent;
                    p.taxes[2].percent = taxes.find((t) => t.taxId == 3).percent;
                    p.taxes[3].percent = taxes.find((t) => t.taxId == 4).percent;
                    p.taxes = JSON.stringify(p.taxes);
                    p.taxes = JSON.parse(p.taxes);
                });
            }, (error) => { });
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
        });
    }
    save(index) {
        console.log(this.shopService.selectedShopId.getValue());
        if (this.products[index].bundleName) {
            this.products[index].action = !this.products[index].action;
            console.log(this.products[index]);
            const bundleCatalogPayload = {
                bundleName: this.products[index].bundleName,
                shopId: this.shopService.selectedShopId.getValue(),
                price: this.products[index].price,
                stock: this.products[index].stock,
                environmentFees: this.products[index].fees[0].value,
                tax: 0,
                recycleFees: this.products[index].fees[1].value,
            };
            const productIncludesPayload = {
                bundleItems: [],
            };
            const productTaxesPayload = {
                bundleTaxes: [],
            };
            console.log(bundleCatalogPayload);
            console.log(productIncludesPayload);
            this.spinner.show();
            this.bundleCatalogService.addBundle(bundleCatalogPayload).subscribe((data) => {
                console.log(data);
                this.products[index].taxes.map((item) => {
                    const obj = {
                        bundleId: data.result.id,
                        taxId: item.taxId,
                        percent: item.percent,
                        amount: (this.products[index].price * item.percent) / 100,
                    };
                    productTaxesPayload.bundleTaxes.push(obj);
                });
                this.products[index].productIncludes.map((item) => {
                    const obj = {
                        bundleId: data.result.id,
                        productLibraryId: item.productLibraryId,
                    };
                    productIncludesPayload.bundleItems.push(obj);
                });
                console.log(productTaxesPayload);
                console.log(productIncludesPayload);
                // this.toastr.success(data.message, 'Success');
                this.spinner.hide();
                this.bundleCatalogService.addItemToBundle(productIncludesPayload).subscribe((data) => {
                    // this.toastr.success(data.message, 'Success');
                    this.spinner.hide();
                }, (error) => {
                    this.toastr.error(error.error.message, 'Error');
                    this.spinner.hide();
                });
                this.bundleCatalogService.addBundleTax(productTaxesPayload).subscribe((data) => {
                    console.log(data);
                    // this.toastr.success(data.message, 'Success');
                    this.spinner.hide();
                }, (error) => {
                    this.toastr.error(error.error.message, 'Error');
                    this.spinner.hide();
                });
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
    }
    update(index) {
        console.log('updating');
        if (this.products[index].bundleName) {
            this.products[index].action = !this.products[index].action;
            console.log(this.products[index]);
            const bundleCatalogPayload = {
                shopId: this.shopService.selectedShopId.getValue(),
                price: this.products[index].price,
                stock: this.products[index].stock,
                environmentFees: this.products[index].fees[0].value,
                recycleFees: this.products[index].fees[1].value,
            };
            const productIncludesPayload = {
                bundleItems: [],
            };
            const productTaxesPayload = {
                bundleTaxes: [],
            };
            console.log(bundleCatalogPayload);
            console.log(productIncludesPayload);
            this.spinner.show();
            this.bundleCatalogService
                .updateBundle(bundleCatalogPayload, this.products[index].id)
                .subscribe((data) => {
                console.log(data);
                this.products[index].taxes.map((item) => {
                    const obj = {
                        taxId: item.taxId,
                        percent: item.percent,
                        amount: (this.products[index].price * item.percent) / 100,
                    };
                    productTaxesPayload.bundleTaxes.push(obj);
                });
                console.log(productTaxesPayload);
                // this.toastr.success(data.message, 'Success');
                this.spinner.hide();
                this.bundleCatalogService
                    .updateBundleTax(productTaxesPayload, this.products[index].id)
                    .subscribe((data) => {
                    console.log(data);
                    // this.toastr.success(data.message, 'Success');
                    this.spinner.hide();
                }, (error) => {
                    this.toastr.error(error.error.message, 'Error');
                    this.spinner.hide();
                });
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
    }
    sendSearch(keyword) {
        this.socketService.sendMessage(keyword);
    }
    getSuggestion() {
        this.socketService.getSuggestion().subscribe((data) => {
            console.log(data);
            this.library = data;
        });
    }
}
BundleComponent.ɵfac = function BundleComponent_Factory(t) { return new (t || BundleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shop_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bundleCatalog_bundle_catalog_service__WEBPACK_IMPORTED_MODULE_4__["BundleCatalogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_5__["ProductLibraryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"])); };
BundleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BundleComponent, selectors: [["app-bundle"]], decls: 34, vars: 1, consts: [[1, "row", "m-0", "p-3", "bg-white", "d-flex", "justify-content-between", "align-items-center"], [1, "col-md-3"], [1, "row", "float-right"], ["type", "button", 1, "btn", "rounded-pill", "add-button", 3, "click"], [1, "fa", "fa-plus-circle"], [1, "body"], [1, "heading"], [1, "table", "table-striped"], ["scope", "col"], ["class", "m-2", 4, "ngFor", "ngForOf"], [1, "m-2"], ["scope", "row"], [4, "ngIf"], ["type", "number", 3, "ngModel", "disabled", "ngModelChange"], ["class", "ng-autocomplete", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "input-group"], [1, "input-group-prepend"], ["id", "inputGroupSelect01", 1, "custom-select", "input-group-text", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "input-group-text"], [1, ""], [1, "dropdown"], ["data-toggle", "dropdown", "href", "#", 1, "btn", "btn-default", 3, "ngClass", "click"], ["type", "text", "placeholder", "Bundle Name", 3, "ngModel", "disabled", "ngModelChange"], [1, "ng-autocomplete"], ["placeholder", "Add New Item", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], [3, "innerHTML"], [1, "badge", "badge-success", "m-2", "pl-3", "pr-3"], [3, "value"]], template: function BundleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BUNDLE OFFER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BundleComponent_Template_button_click_6_listener() { return ctx.addButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ADD NEW BRANCH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "BUNDLES OFFER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "BUNDLE NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "QUANTITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "PRODUCT INCLUDES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "PRICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "TAXES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "FEES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BundleComponent_tr_33_Template, 29, 19, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"]], styles: [".body[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 90vh;\n  padding: 30px;\n  overflow-x: auto;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #f29700;\n  font-weight: 900;\n  font-size: 1.3em;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  width: 250px;\n  padding: 10px;\n  font-size: 1em;\n  color: white;\n  font-weight: 700;\n}\n\n.heading[_ngcontent-%COMP%] {\n  color: #f29700;\n  font-weight: 600;\n  padding-left: 40px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.btn-default[_ngcontent-%COMP%] {\n  font-family: Raleway-SemiBold;\n  font-size: 13px;\n  color: rgba(108, 88, 179, 0.75);\n  letter-spacing: 1px;\n  line-height: 15px;\n  border: 2px solid rgba(108, 89, 179, 0.75);\n  border-radius: 40px;\n  background: transparent;\n  transition: all 0.3s ease 0s;\n}\n\n.btn-default[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(108, 88, 179, 0.75);\n  border: 2px solid rgba(108, 89, 179, 0.75);\n}\n\ninput[_ngcontent-%COMP%] {\n  border: #f29700 thin solid;\n  border-radius: 5px;\n  text-align: center;\n  color: #f29700;\n  width: 60px;\n  line-height: 30px;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  width: 200px;\n  text-align: left;\n  padding-left: 10px;\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\ninput[type=number][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > th[_ngcontent-%COMP%] {\n  background-color: #f8f5f5;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > th[_ngcontent-%COMP%] {\n  background-color: #f8f5f5;\n}\n\ntr[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 0.5em;\n  padding: 5px;\n}\n\n.actionButtonEdit[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  color: white;\n}\n\n.actionButtonSave[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  color: #f16262;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n\n.ng-autocomplete[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\n.taxes-fees[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL21lcmNoYW50L3Byb2R1Y3RzL2J1bmRsZS9idW5kbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQURGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNDWFc7RURZWCxnQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkNqQlc7RURrQlgsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxjQ3pCVztFRDBCWCxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7QUFHRjs7QUFBQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNDdkRXO0VEd0RYLFdBQUE7RUFDQSxpQkFBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7QUFNRjs7QUFKQTs7RUFFRSx3QkFBQTtBQU9GOztBQUpBOztFQUVFLHlCQUFBO0FBT0Y7O0FBSkE7O0VBRUUseUJBQUE7QUFPRjs7QUFKQTtFQUNFLGlCQUFBO0FBT0Y7O0FBSkE7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQU9GOztBQUpBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBT0Y7O0FBSkE7RUFDRSx5QkNyR1c7RURzR1gsWUFBQTtBQU9GOztBQUpBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBSkE7RUFDRSx5QkMvR1c7RURnSFgsWUFBQTtBQU9GOztBQUpBO0VBQ0UsZ0JBQUE7QUFPRjs7QUFKQTtFQUNFLGdCQUFBO0FBT0YiLCJmaWxlIjoic3JjL2FwcC9wYW5lbHMvbWVyY2hhbnQvcHJvZHVjdHMvYnVuZGxlL2J1bmRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbmgzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxufVxyXG5cclxuLmFkZC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5oZWFkaW5nIHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5idG4tZGVmYXVsdCB7XHJcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXktU2VtaUJvbGQ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiByZ2JhKDEwOCwgODgsIDE3OSwgMC43NSk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEwOCwgODksIDE3OSwgMC43NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcblxyXG4uYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTA4LCA4OCwgMTc5LCAwLjc1KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEwOCwgODksIDE3OSwgMC43NSk7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6ICRiYXNlLWNvbG9yIHRoaW4gc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGQsXHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSA+IHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDUsIDI0NSk7IC8vIENob29zZSB5b3VyIG93biBjb2xvciBoZXJlXHJcbn1cclxuXHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikgPiB0ZCxcclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSA+IHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDUsIDI0NSk7IC8vIENob29zZSB5b3VyIG93biBjb2xvciBoZXJlXHJcbn1cclxuXHJcbnRyIHtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDAgMC41ZW07XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYWN0aW9uQnV0dG9uRWRpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxNDcsIDc2KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hY3Rpb25CdXR0b25TYXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBjb2xvcjogcmdiKDI0MSwgOTgsIDk4KTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5nLWF1dG9jb21wbGV0ZSB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnRheGVzLWZlZXMge1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuIiwiJGJhc2UtY29sb3I6IHJnYigyNDIsIDE1MSwgMCk7XHJcbiRzaGFkb3ctY29sb3I6IHJnYigyMzMsIDIzNSwgMjQwKTtcclxuJGdyZWVuLWNvbG9yOiAjMjM5MzRjO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BundleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bundle',
                templateUrl: './bundle.component.html',
                styleUrls: ['./bundle.component.scss'],
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _services_shop_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] }, { type: _services_bundleCatalog_bundle_catalog_service__WEBPACK_IMPORTED_MODULE_4__["BundleCatalogService"] }, { type: _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_5__["ProductLibraryService"] }, { type: _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "ui5e":
/*!*****************************************************************************************!*\
  !*** ./src/app/panels/merchant/products/inventory/bulk-upload/bulk-upload.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BulkUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkUploadComponent", function() { return BulkUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_productCatalog_product_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/productCatalog/product-catalog.service */ "UoJ8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class BulkUploadComponent {
    constructor(spinner, toastr, productCatalogService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.productCatalogService = productCatalogService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.upload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.myFiles = [];
        this.myFilesThumb = [];
        this.formData = new FormData();
        this.fileName = '';
    }
    ngOnInit() { }
    onFileChange(event) {
        console.log(event.target.files);
        for (var i = 0; i < event.target.files.length; i++) {
            this.fileName = event.target.files[i].name;
            if (this.fileName.match(/.csv/g) == null && this.fileName.match(/.txt/g) == null &&
                this.fileName.match(/.xls/g) == null && this.fileName.match(/.xlsx/g) == null) {
                console.log('file formate not supported');
                this.toastr.error('Invalid fle formate', 'Error');
                this.fileName = '';
                return;
            }
            this.formData.append(`products`, event.target.files[i], `products.csv`);
        }
    }
    onSubmit() {
        if (this.fileName) {
            this.upload.emit(this.formData);
            this.close.emit(false);
        }
        else {
            this.toastr.error('Please Select File First', 'Error');
        }
    }
}
BulkUploadComponent.ɵfac = function BulkUploadComponent_Factory(t) { return new (t || BulkUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productCatalog_product_catalog_service__WEBPACK_IMPORTED_MODULE_3__["ProductCatalogService"])); };
BulkUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BulkUploadComponent, selectors: [["app-bulk-upload"]], outputs: { close: "close", upload: "upload" }, decls: 33, vars: 1, consts: [[1, "body"], [1, "container-fluid"], [1, "row", "p-5", "justify-content-center"], [1, "col-12"], [1, "close"], [1, "btn", "rounded-pill", "close-button", 3, "click"], [1, "fa", "fa-close"], [1, "p-2"], [1, "row"], [1, "col-12", "mb-5"], [1, "col-12", "p-0"], [1, "input-group", "border", "rounded-pill", "p-1"], ["type", "text", "placeholder", "No file selected", "aria-describedby", "button-addon4", 1, "form-control", "bg-none", "border-0", 3, "ngModel", "ngModelChange"], ["id", "file-input", "type", "file", "multiple", "", 1, "form-control", 2, "display", "none", 3, "change"], ["for", "file-input", 2, "float", "right"], [1, "rounded-pill", "btn", "browseFile", "pt-0", "pb-0"], [1, "row", "pr-3", "mt-5"], [1, "row", "float-right"], ["type", "submit", 1, "btn", "rounded-pill", "button", 3, "click"]], template: function BulkUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BulkUploadComponent_Template_button_click_5_listener() { return ctx.close.emit(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "UPLOAD YOUR PRODUCT CATALOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BulkUploadComponent_Template_input_ngModelChange_15_listener($event) { return ctx.fileName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BulkUploadComponent_Template_input_change_16_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Browse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SUPPORTED FORMATS CSV, TXT, XLS, XLSX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Please make sure that the file contains following columns:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Product Name, Price, Tax, Environmental Fees, Recycle Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BulkUploadComponent_Template_button_click_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fileName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["@media (min-width: 1140px) {\n  .body[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 14;\n    background-color: white;\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n    min-width: 800px;\n    min-height: 500px;\n    border-radius: 40px;\n  }\n}\n@media (max-width: 1139px) {\n  .body[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 14;\n    background-color: white;\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n    min-width: 800px;\n    min-height: 500px;\n    border-radius: 40px;\n  }\n}\n.close-button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 16;\n  top: 10px;\n  right: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #f29700;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 25px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #f29700;\n}\n\n.checkbox[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #f29700;\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #f29700;\n}\n\n.checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n\n.checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  left: 10px;\n  top: 7px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n.browseFile[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  width: 220px;\n  padding: 10px;\n  font-size: 1.25em;\n  color: white;\n  font-weight: 700;\n  text-align: center;\n}\n.button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  width: 220px;\n  padding: 10px;\n  font-size: 1.25em;\n  color: white;\n  font-weight: 700;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL21lcmNoYW50L3Byb2R1Y3RzL2ludmVudG9yeS9idWxrLXVwbG9hZC9idWxrLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0EsMENBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUFERjtBQUNGO0FBR0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0EsMENBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUFERjtBQUNGO0FBSUE7RUFDRSx5QkMxQlc7RUQyQlgsWUFBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUZGO0FBS0E7RUFDRSxjQ3RDVztBRG9DYjtBQUlBLHVGQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBR0EsaUJBQUE7QUFERjtBQUlBLHdDQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFERjtBQUlBLDZCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkN2RVc7QURzRWI7QUFJQSwrQ0FBQTtBQUNBO0VBQ0UseUJDNUVXO0FEMkViO0FBSUEsd0RBQUE7QUFDQTtFQUNFLHlCQ2pGVztBRGdGYjtBQUlBLDZEQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBREY7QUFJQSxvQ0FBQTtBQUNBO0VBQ0UsY0FBQTtBQURGO0FBSUEsa0NBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBR0Esd0JBQUE7QUFERjtBQUlBO0VBQ0UseUJDNUdZO0VENkdaLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURGO0FBSUE7RUFDRSx5QkN4SFc7RUR5SFgsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9wYW5lbHMvbWVyY2hhbnQvcHJvZHVjdHMvaW52ZW50b3J5L2J1bGstdXBsb2FkL2J1bGstdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDExNDBweCkge1xyXG4gIC5ib2R5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEzOXB4KSB7XHJcbiAgLmJvZHkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE2O1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDSEVDSyBCT1ggKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5jaGVja2JveCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuLmNoZWNrYm94IGlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuLmNoZWNrbWFyayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbi5jaGVja2JveDpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cclxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xyXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xyXG4uY2hlY2tib3ggLmNoZWNrbWFyazphZnRlciB7XHJcbiAgbGVmdDogMTBweDtcclxuICB0b3A6IDdweDtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5icm93c2VGaWxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiJGJhc2UtY29sb3I6IHJnYigyNDIsIDE1MSwgMCk7XHJcbiRzaGFkb3ctY29sb3I6IHJnYigyMzMsIDIzNSwgMjQwKTtcclxuJGdyZWVuLWNvbG9yOiAjMjM5MzRjO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BulkUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bulk-upload',
                templateUrl: './bulk-upload.component.html',
                styleUrls: ['./bulk-upload.component.scss'],
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _services_productCatalog_product_catalog_service__WEBPACK_IMPORTED_MODULE_3__["ProductCatalogService"] }]; }, { close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], upload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "v4vL":
/*!************************************************************!*\
  !*** ./src/app/services/productTax/product-tax.service.ts ***!
  \************************************************************/
/*! exports provided: ProductTaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTaxService", function() { return ProductTaxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");





class ProductTaxService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
    }
    addProductTax(payload) {
        const token = JSON.parse(localStorage.getItem('user')).accessToken;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', `Bearer ${token}`);
        return this.httpClient.post(`${this.baseURL}inventory/tax`, payload, {
            headers,
        });
    }
    bulkUpsertProductTax(payload) {
        const token = JSON.parse(localStorage.getItem('user')).accessToken;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', `Bearer ${token}`);
        return this.httpClient.post(`${this.baseURL}inventory/tax/bulkUpsert`, payload, {
            headers,
        });
    }
    getProductTaxByShop(pageSize, pageNum, shopId) {
        const token = JSON.parse(localStorage.getItem('user')).accessToken;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', `Bearer ${token}`);
        return this.httpClient.get(`${this.baseURL}inventory/tax/${shopId}?pageSize=${pageSize}&pageNum=${pageNum}`, {
            headers,
        });
    }
    updateProductTax(payload, productId) {
        const token = JSON.parse(localStorage.getItem('user')).accessToken;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', `Bearer ${token}`);
        return this.httpClient.patch(`${this.baseURL}inventory/tax/${productId}`, payload, {
            headers,
        });
    }
}
ProductTaxService.ɵfac = function ProductTaxService_Factory(t) { return new (t || ProductTaxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductTaxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductTaxService, factory: ProductTaxService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductTaxService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map