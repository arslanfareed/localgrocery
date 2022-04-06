(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["library-library-module"],{

/***/ "/dEP":
/*!*************************************************************************!*\
  !*** ./src/app/panels/admin/library/product/detail/detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/productLibrary/product-library.service */ "YY25");
/* harmony import */ var _services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/ticket/ticket.service */ "agnC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/error/error.component */ "HZwm");










function ProductDetailComponent_h3_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add New Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_h3_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_option_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", unit_r10.unit_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", unit_r10.unit_long_name, " ");
} }
function ProductDetailComponent_option_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", brand_r11.brand_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", brand_r11.brand_name, " ");
} }
function ProductDetailComponent_option_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ethnicity_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ethnicity_r12.ethnicity_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ethnicity_r12.ethnicity_name, " ");
} }
function ProductDetailComponent_div_98_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_98_option_10_Template_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const category_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.getCategories(category_r14.category_id, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r14.category_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r14.category_name, " ");
} }
function ProductDetailComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductDetailComponent_div_98_Template_select_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.getCategories($event.target.value, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Category of level 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductDetailComponent_div_98_option_10_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.categories[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r5.category_id);
} }
function ProductDetailComponent_div_99_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_99_option_10_Template_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const category_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.getCategories(category_r20.category_id, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r20.category_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r20.category_name, " ");
} }
function ProductDetailComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductDetailComponent_div_99_Template_select_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.getCategories($event.target.value, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Category of level 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductDetailComponent_div_99_option_10_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.categories[1]);
} }
function ProductDetailComponent_div_100_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_100_option_10_Template_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const category_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.getCategories(category_r26.category_id, 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r26.category_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r26.category_name, " ");
} }
function ProductDetailComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductDetailComponent_div_100_Template_select_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.getCategories($event.target.value, 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Category of level 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductDetailComponent_div_100_option_10_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.categories[2]);
} }
function ProductDetailComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_110_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r32 = ctx.index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.deleteImage(i_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thumb_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", thumb_r31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductDetailComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductDetailComponent {
    constructor(spinner, toastr, productLibraryService, ticketService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.productLibraryService = productLibraryService;
        this.ticketService = ticketService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.upload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataList = [];
        this.Arr = Array;
        this.myFiles = [];
        this.myFilesThumb = [];
        this.formData = new FormData();
        // deleteImage(index) {
        //   this.myFiles.splice(index, 1);
        //   this.myFilesThumb.splice(index, 1);
        // }
        this.product = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            product_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            product_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            brand_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            product_ingredients: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            product_contain: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            unit_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            image_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            ethnicity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        }, { updateOn: 'change' });
        this.categories = [];
        this.ethnicities = [];
        this.brands = [];
        this.units = [];
    }
    ngOnInit() {
        // const token = JSON.parse(localStorage.getItem('user'))?.accessToken;
        // this.decoded = jwt_decode(token);
        // console.log(this.decoded);
        this.getEthnicities();
        this.getBrands();
        this.getCategories(0, 0);
        this.getUnits();
        console.log(this.action);
        if (this.action === 'detail') {
            this.getProductById();
        }
    }
    onFileChange(event) {
        if (event.target.files.length + this.myFiles.length == 1) {
            for (var i = 0; i < event.target.files.length; i++) {
                var mimeType = event.target.files[i].type;
                console.log(mimeType);
                if (mimeType.match(/image\/*/) == null) {
                    this.toastr.error('you are only allowed to upload images', 'Error');
                    return;
                }
                if (event.target.files[i].size > 2048576) {
                    this.toastr.error('Image can not be greater than 2mb', 'Error');
                    return;
                }
                this.formData.append(`image${i + 1}`, event.target.files[i], `image${i + 1}.png`);
                this.myFiles.push(event.target.files[i]);
                this.product.controls.image_link.setValue(`ProdImages/${this.product.value.product_name}.jpeg`);
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[i]);
                reader.onload = (_event) => {
                    this.myFilesThumb.push(_event.target.result);
                };
                if (this.action === 'detail') {
                    this.addImage();
                }
                console.log(this.formData);
                console.log(event.target.files[i]);
            }
            console.log(this.myFilesThumb);
        }
        else {
            this.toastr.error('You can only add upto 1 Photos', 'Error');
        }
    }
    get product_name() {
        return this.product.get('product_name');
    }
    get product_description() {
        return this.product.get('product_description');
    }
    get brand_id() {
        return this.product.get('brand_id');
    }
    get product_ingredients() {
        return this.product.get('product_ingredients');
    }
    get product_contain() {
        return this.product.get('product_contain');
    }
    get unit_id() {
        return this.product.get('unit_id');
    }
    get category_id() {
        return this.product.get('category_id');
    }
    get image_link() {
        return this.product.get('image_link');
    }
    get ethnicity_id() {
        return this.product.get('ethnicity_id');
    }
    onSubmit() {
        const group = this.product;
        console.log(group);
        if (this.product.valid) {
            console.log(group.value);
            this.spinner.show();
            this.productLibraryService.createProduct(group.value).subscribe((data) => {
                console.log(data);
                this.formData.append(`productId`, data.result.product_id);
                this.productLibraryService.addProductImage(this.formData).subscribe((data) => {
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
        else {
            this.validateAllFormFields(group);
        }
    }
    update() {
        console.log('updating........');
        const group = this.product;
        group.controls.image_link.setValue(true);
        console.log(group);
        console.log(group.valid);
        delete group.value.image_link;
        if (group.valid) {
            console.log(group.value);
            this.spinner.show();
            this.productLibraryService.updateProduct(group.value, this.productId).subscribe((data) => {
                console.log(data);
                this.spinner.hide();
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
        else {
            this.validateAllFormFields(group);
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                this.validateAllFormFields(control);
            }
        });
    }
    getCategories(parentCategory = 0, level = 0) {
        // this.selectedCategory = parentCategory;
        // console.log(this.selectedCategory);
        const queryParams = `?parentCategory=${parentCategory}`;
        this.productLibraryService.getCategories(queryParams).subscribe((data) => {
            this.categories[level] = data.body;
        });
    }
    getEthnicities() {
        this.productLibraryService.ethinicity.subscribe((eth) => {
            console.log(eth);
            this.ethnicities.push(...eth);
            if (eth.length == 0) {
                this.productLibraryService.getEthinicity().subscribe((data) => {
                    this.productLibraryService.setEthnicity(data.body);
                });
            }
            const newObj = {
                isSelected: false,
            };
            this.ethnicities = this.ethnicities.flat().map((p) => Object.assign(p, newObj));
        });
    }
    getBrands() {
        this.productLibraryService.brands.subscribe((data) => {
            this.brands.push(...data);
            console.log(this.brands);
            if (data.length == 0) {
                this.productLibraryService.getBrands().subscribe((data) => {
                    this.productLibraryService.setBrands(data.body);
                });
            }
            const newObj = {
                isSelected: false,
            };
            this.brands = this.brands.flat().map((p) => Object.assign(p, newObj));
        });
    }
    getUnits() {
        this.productLibraryService.getUnits().subscribe((data) => {
            this.units = data.body;
        });
    }
    getProductById() {
        this.spinner.show();
        this.productLibraryService.getProductById(this.productId).subscribe((data) => {
            console.log(data);
            this.fillFormFields(data.body);
            this.spinner.hide();
        });
    }
    fillFormFields(product) {
        const group = this.product;
        group.controls.product_name.setValue(product.product_name || '');
        group.controls.product_description.setValue(product.product_description || '');
        group.controls.product_ingredients.setValue(product.product_ingredients || '');
        group.controls.product_contain.setValue(product.product_contain || '');
        group.controls.unit_id.setValue(product.unit_id || '');
        group.controls.brand_id.setValue(product.brand_id || '');
        group.controls.ethnicity_id.setValue(product.ethnicity_id || '');
        group.controls.category_id.setValue(product.category_id || '');
        if (product.image_link) {
            this.myFilesThumb.push(`https://storage.googleapis.com/lg-content/ProdImages/${product.image_link.replace('images/', '')}`);
        }
    }
    deleteImage(index) {
        this.spinner.show();
        this.productLibraryService.deleteProductImage(this.productId).subscribe((data) => {
            this.myFiles.splice(index, 1);
            this.myFilesThumb.splice(index, 1);
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    addImage() {
        this.formData.append(`productId`, this.productId);
        this.productLibraryService.addProductImage(this.formData).subscribe((data) => {
            // this.toastr.success(data.message, 'Success');
            this.spinner.hide();
        }, (error) => {
            console.log(error);
            this.myFiles = [];
            this.myFilesThumb = [];
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"])); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], inputs: { action: "action", productId: "productId" }, outputs: { close: "close", upload: "upload" }, decls: 115, vars: 18, consts: [[1, "body"], [1, "container-fluid"], [1, "pl-5", "pr-5", "pt-5", "d-flex", "justify-content-between"], [1, "icon", "fa", "fa-long-arrow-left", 3, "click"], [1, ""], [1, "btn", "rounded-pill", "close-button", 3, "click"], [1, "fa", "fa-close"], [1, "row", "p-5", "justify-content-center"], [1, "col-12"], [1, "p-2"], [1, "row"], [1, "col-12", "mb-5"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row", "section"], [1, "col-lg-6"], [1, "row", "pr-3"], [1, "col"], [1, "mb-3"], ["for", "basic-url", 1, "form-label", "pl-4", "mb-0"], [1, "inner-addon", "right-addon"], [1, "glyphicon", "fa", "fa-pencil-square-o", 2, "font-size", "24px"], ["type", "text ", "placeholder", "Product Name", "formControlName", "product_name", 1, "form-control", "input-text"], [3, "control"], ["type", "text ", "placeholder", "Product Description", "formControlName", "product_description", 1, "form-control", "input-text"], ["type", "text ", "placeholder", "Product Ingredients", "formControlName", "product_ingredients", 1, "form-control", "input-text"], [1, "col-md-8"], ["type", "number", "placeholder", "Product Contain", "formControlName", "product_contain", 1, "form-control", "input-text"], ["name", "unit_id", "formControlName", "unit_id", 1, "input-text", "form-select", "form-select-sm", "select"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "brand_id", "formControlName", "brand_id", 1, "input-text", "form-select", "form-select-sm", "select", 3, "change"], ["name", "category1", "formControlName", "ethnicity_id", 1, "input-text", "form-select", "form-select-sm", "select", 3, "change"], ["class", "col-12", 4, "ngIf"], [1, "row", "shadow", "p-3", "mb-2", "bg-white", "card"], [1, "mb-3", "d-flex", "justify-content-between"], ["for", "file-input"], [1, "fa", "fa-upload", "uploadIcon"], ["id", "file-input", "type", "file", "multiple", "", 1, "form-control", 2, "display", "none", 3, "change"], [1, "row", "d-flex", "justify-content-center"], ["class", "thumb", 4, "ngFor", "ngForOf"], [1, "row", "float-right"], ["type", "submit", 1, "btn", "rounded-pill", "button"], [3, "value"], ["name", "category1", "formControlName", "category_id", 1, "input-text", "form-select", "form-select-sm", "select", 3, "change"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["name", "category2", "formControlName", "category_id", 1, "input-text", "form-select", "form-select-sm", "select", 3, "change"], ["name", "category3", "formControlName", "category_id", 1, "input-text", "form-select", "form-select-sm", "select", 3, "change"], [1, "thumb"], ["alt", "Cinque Terre", "width", "100%", "height", "100%", 1, "img-thumbnail", 3, "src"], [1, "fa", "fa-trash", "deleteIcon", 3, "click"], ["src", "../../../../../assets/store/image-placeholder.png", "alt", "Cinque Terre", "width", "100%", "height", "100%", 1, "img-thumbnail"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_Template_i_click_3_listener() { return ctx.close.emit(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_5_listener() { return ctx.close.emit(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductDetailComponent_h3_12_Template, 2, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductDetailComponent_h3_13_Template, 2, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductDetailComponent_Template_form_ngSubmit_14_listener() { return ctx.action === "create" ? ctx.onSubmit() : ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Product Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Product Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Product Contain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Select Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ProductDetailComponent_option_68_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductDetailComponent_Template_select_change_79_listener($event) { return ctx.getCategories($event.target.value, 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Select Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ProductDetailComponent_option_82_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Ethnicity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductDetailComponent_Template_select_change_92_listener($event) { return ctx.getCategories($event.target.value, 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Select Ethnicity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, ProductDetailComponent_option_95_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, ProductDetailComponent_div_98_Template, 12, 2, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, ProductDetailComponent_div_99_Template, 11, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, ProductDetailComponent_div_100_Template, 11, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "SHOP IMAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductDetailComponent_Template_input_change_108_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, ProductDetailComponent_div_110_Template, 3, 1, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ProductDetailComponent_div_111_Template, 2, 0, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.product_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.product_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.product_ingredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.product_contain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.unit_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brands);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.brand_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ethnicities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ethnicity_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.categories[0] == null ? null : ctx.categories[0].length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.categories[1] == null ? null : ctx.categories[1].length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.categories[2] == null ? null : ctx.categories[2].length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myFilesThumb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Arr(1 - ctx.myFilesThumb.length).fill(1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["@media (min-width: 1140px) {\n  .body[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 14;\n    background-color: white;\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n  }\n}\n@media (max-width: 1139px) {\n  .body[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 14;\n    background-color: white;\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n    border-radius: 40px;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  color: #f29700;\n  font-size: 30px;\n  cursor: pointer;\n}\n.close-button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 16;\n  top: 10px;\n  right: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh3[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh4[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh5[_ngcontent-%COMP%] {\n  color: #f29700;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  border: #f29700 solid thin;\n  border-radius: 30px;\n  padding: 20px;\n}\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  outline: 0px;\n}\n.select[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  border: 0;\n}\n.button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  width: 220px;\n  padding: 10px;\n  font-size: 1.25em;\n  color: white;\n  font-weight: 700;\n}\n.inner-addon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.inner-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none;\n}\n.right-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n}\n.right-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  right: 0px;\n}\n\n.thumb[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n}\n.img-thumbnail[_ngcontent-%COMP%] {\n  height: 150px;\n  object-fit: cover;\n}\n.deleteIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  right: 10px;\n  top: 10px;\n  z-index: 3;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2FkbWluL2xpYnJhcnkvcHJvZHVjdC9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSwwQ0FBQTtJQUdBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUFGRjtBQUNGO0FBTUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0EsMENBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFKRjtBQUNGO0FBT0E7RUFDRSxjQzlCVztFRCtCWCxlQUFBO0VBQ0EsZUFBQTtBQUxGO0FBT0E7RUFDRSx5QkNuQ1c7RURvQ1gsWUFBQTtBQUpGO0FBT0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUpGO0FBT0E7RUFDRSxjQy9DVztBRDJDYjtBQU9BO0VBQ0UsY0NuRFc7QUQrQ2I7QUFPQTtFQUNFLGNDdkRXO0FEbURiO0FBT0E7RUFDRSxjQzNEVztBRHVEYjtBQU9BLDBDQUFBO0FBQ0E7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUpGO0FBTUE7RUFDRSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7QUFIRjtBQUtBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRkY7QUFLQTtFQUNFLFNBQUE7QUFGRjtBQUlBO0VBQ0UseUJDakZXO0VEa0ZYLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdBO0VBQ0Usa0JBQUE7QUFBRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQUFBO0VBQ0UsVUFBQTtBQUdGO0FBQUEsOERBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFHRiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9hZG1pbi9saWJyYXJ5L3Byb2R1Y3QvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuQG1lZGlhIChtaW4td2lkdGg6IDExNDBweCkge1xyXG4gIC5ib2R5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAvLyBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgLy8gbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMzlweCkge1xyXG4gIC5ib2R5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmljb24ge1xyXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jbG9zZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTY7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKipUZXh0IEJveCoqKioqKioqKioqKioqKioqKiovXHJcbi5pbnB1dC10ZXh0IHtcclxuICBib3JkZXI6ICRiYXNlLWNvbG9yIHNvbGlkIHRoaW47XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG4uc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG91dGxpbmU6IDBweDtcclxufVxyXG5cclxuLnNlbGVjdCA6Zm9jdXMge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uaW5uZXItYWRkb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5uZXItYWRkb24gLmdseXBoaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLnJpZ2h0LWFkZG9uIGlucHV0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5yaWdodC1hZGRvbiAuZ2x5cGhpY29uIHtcclxuICByaWdodDogMHB4O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKipJbWFnZSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLnRodW1iIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbWctdGh1bWJuYWlsIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uZGVsZXRlSWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDEwcHg7XHJcbiAgei1pbmRleDogMztcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiIsIiRiYXNlLWNvbG9yOiByZ2IoMjQyLCAxNTEsIDApO1xyXG4kc2hhZG93LWNvbG9yOiByZ2IoMjMzLCAyMzUsIDI0MCk7XHJcbiRncmVlbi1jb2xvcjogIzIzOTM0YztcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.scss'],
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"] }, { type: _services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"] }]; }, { close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], upload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], productId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "5XcL":
/*!*************************************************************!*\
  !*** ./src/app/panels/admin/library/unit/unit.component.ts ***!
  \*************************************************************/
/*! exports provided: UnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitComponent", function() { return UnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/productLibrary/product-library.service */ "YY25");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail/detail.component */ "suXm");











function UnitComponent_app_unit_detail_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-unit-detail", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function UnitComponent_app_unit_detail_1_Template_app_unit_detail_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addNewUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", ctx_r0.action)("unitId", ctx_r0.unitId);
} }
function UnitComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 36);
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r10.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function UnitComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    const notFound_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function UnitComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r12.label, " ");
} }
function UnitComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitComponent_tr_46_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const unit_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.unitDetail(unit_r13.unit_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitComponent_tr_46_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const unit_r13 = ctx.$implicit; const i_r14 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.deleteUnit(unit_r13.unit_id, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.config.itemsPerPage * ctx_r6.config.currentPage - ctx_r6.config.itemsPerPage + i_r14 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unit_r13.unit_short_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unit_r13.unit_long_name);
} }
function UnitComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageSize_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", pageSize_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSize_r18, " ");
} }
class UnitComponent {
    constructor(spinner, toastr, router, productLibraryService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.router = router;
        this.productLibraryService = productLibraryService;
        this.isAddNewUnit = false;
        this.units = [];
        this.fields = [
            { label: 'Short Name', fieldName: 'unit_short_name' },
            { label: 'Long Name', fieldName: 'unit_long_name' },
        ];
        this.p = 1;
        this.pageSizes = [1, 2, 5, 10, 25, 50];
        this.sort = {
            orderBy: 'unit_long_name',
            sort: 'ASC',
        };
        this.keyword = 'name';
        this.search = [];
        // this.socketService.setupSocketConnection();
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
        };
        // this.customerData = this.customerData.slice();
        // this.getUsersSuggestion();
    }
    ngOnInit() {
        this.getUnits();
        // this.getAdminUsers();
    }
    pageChanged(event) {
        this.config.currentPage = event;
        this.getUnits();
    }
    changePageSize() {
        this.getUnits();
    }
    selectEvent(item) {
        this.search = [item];
    }
    onChangeSearch(search) {
        // this.sendUserSearch(search);
    }
    onFocused(e) {
        // do something
    }
    onEnter(e) {
        const userIds = [];
        this.search.map((item) => {
            userIds.push(item.id);
        });
        this.config['userIds'] = userIds;
        console.log(this.config);
        this.getUnits();
    }
    sortBy(orderBy, sort) {
        this.sort = {
            orderBy,
            sort,
        };
        this.getUnits();
    }
    getUnits() {
        this.spinner.show();
        this.productLibraryService.getUnitByPagination(this.config, this.sort).subscribe((data) => {
            console.log(data);
            this.units = data.data;
            this.config.totalItems = data.total;
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    deleteUnit(unitId, index) {
        this.spinner.show();
        this.productLibraryService.deleteUnitById(unitId).subscribe((data) => {
            this.units.splice(index, 1);
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    addNewUnit() {
        this.action = 'create';
        this.isAddNewUnit = !this.isAddNewUnit;
    }
    unitDetail(unitId) {
        this.action = 'detail';
        this.unitId = unitId;
        this.isAddNewUnit = !this.isAddNewUnit;
    }
    //--------export to pdf start-----------------
    exportPdf() {
        __webpack_require__.e(/*! import() | jspdf */ "default~jspdf~jspdf-autotable").then(__webpack_require__.t.bind(null, /*! jspdf */ "5RHE", 7)).then((jsPDF) => {
            Promise.all(/*! import() | jspdf-autotable */[__webpack_require__.e("default~jspdf~jspdf-autotable"), __webpack_require__.e("jspdf-autotable")]).then(__webpack_require__.t.bind(null, /*! jspdf-autotable */ "DaQG", 7)).then((x) => {
                const doc = new jsPDF.default(0, 0);
                this.exportLst = [];
                if (this.units) {
                    this.units.forEach((data) => {
                        this.exportLst.push({
                            FirstName: data.firstName,
                            LastName: data.lastName,
                            Email: data.email,
                            Phone: data.phoneNumber,
                            Address: data.address1,
                            City: data.city,
                            Date: data.createdAt,
                        });
                    });
                    // this.driverService.exportDriversFilteredRecords(this.driverDetails).subscribe(data => {
                    //   data.lstDrivers.forEach((i) => {
                    //     this.exportLst.push({
                    //       FirstName: i.FirstName, LastName: i.LastName,
                    //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
                    //     })
                    //   });
                    doc.autoTable(this.exportColumns, this.exportLst);
                    // });
                }
                else {
                    // this.spinner.show();
                    // this.driverService.exportAllDrivers().subscribe(data => {
                    //   data.lstDrivers.forEach((i) => {
                    //     this.exportLst.push({
                    //       FirstName: i.FirstName, LastName: i.LastName,
                    //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
                    //     })
                    //   });
                    //   this.spinner.hide();
                    //   this.exportExcel(this.exportLst);
                    // });
                }
                //doc.autoTable(this.exportColumns, this.lstDrivers);
                doc.save('CustomerTable.pdf');
            });
        });
    }
    //--------export to pdf end-----------------
    //----------export to excel----start-----------------------
    exportToExcel() {
        //---------------------------------------------------------------
        this.exportLst = [];
        if (this.units) {
            this.units.forEach((data) => {
                this.exportLst.push({
                    FirstName: data.firstName,
                    LastName: data.lastName,
                    Email: data.email,
                    Phone: data.phoneNumber,
                    Address: data.address1,
                    City: data.city,
                    Date: data.createdAt,
                });
            });
            this.exportExcel(this.exportLst);
            // });
        }
        else {
        }
        //---------------------------------------------------------------
    }
    //--------------------------
    exportExcel(exportLst) {
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "EUZL", 7)).then((xlsx) => {
            if (this.exportLst.length > 0) {
                console.log(exportLst);
                const worksheet = xlsx.utils.json_to_sheet(exportLst);
                const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
                this.saveAsExcelFile(excelBuffer, 'customersDetails');
            }
        });
    }
    //--------------------------
    //--------------------------
    saveAsExcelFile(buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "Iab2", 7)).then((FileSaver) => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE,
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
    //--------------------------
    //----------export to excel----end-------------------------
    //---------------------------------------------
    //----------export to CSV----start-----------------------
    exportToCSV() {
        //---------------------------------------------------------------
        this.exportLst = [];
        if (this.units) {
            this.units.forEach((data) => {
                this.exportLst.push({
                    FirstName: data.firstName,
                    LastName: data.lastName,
                    Email: data.email,
                    Phone: data.phoneNumber,
                    Address: data.address1,
                    City: data.city,
                    Date: data.createdAt,
                });
            });
            this.exportCSV(this.exportLst);
            // });
        }
        else {
        }
        //---------------------------------------------------------------
    }
    //--------------------------
    exportCSV(exportLst) {
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "EUZL", 7)).then((xlsx) => {
            if (this.exportLst.length > 0) {
                console.log(exportLst);
                const worksheet = xlsx.utils.json_to_sheet(exportLst);
                const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
                this.saveAsCSVFile(excelBuffer, 'customersDetails');
            }
        });
    }
    //--------------------------
    //--------------------------
    saveAsCSVFile(buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "Iab2", 7)).then((FileSaver) => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.csv';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE,
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
}
UnitComponent.ɵfac = function UnitComponent_Factory(t) { return new (t || UnitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"])); };
UnitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnitComponent, selectors: [["app-unit"]], decls: 55, vars: 12, consts: [[1, "modal-center"], [3, "action", "unitId", "close", 4, "ngIf"], [1, "body"], [1, "table-top"], [1, "row"], [1, "col-md-3"], [1, "cust-heading"], [1, "heading"], [1, "col-md-9", "d-flex", "justify-content-end"], [1, "serch-sec", "p-1", "flex-fill", "d-flex", "justify-content-end"], [1, "resport-sec"], [1, "add-button", "m-2", 3, "routerLink", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "ml-1"], [1, "print-report", "m-1", 3, "routerLink", "click"], ["src", "../../../../../assets/fileicon/pdffile.png", "alt", "pdf", "width", "30", "height", "30", 1, "img-thumbnail"], ["src", "../../../../../assets/fileicon/excelfile.png", "alt", "excel", "width", "30", "height", "30", 1, "img-thumbnail"], ["src", "../../../../../assets/fileicon/csvfile.png", "alt", "csv", "width", "30", "height", "30", 1, "img-thumbnail"], [1, "flex-fill"], [1, "input-group", "border", "rounded-pill", "p-1"], [1, "input-group-prepend", "border-0"], [1, "col-auto"], [1, "fa", "fa-search", "h5", "pt-2"], [1, "form-control", "bg-none", "border-0", "p-0"], ["placeholder", "Enter the Product Name", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "table", "table-striped"], ["scope", "col", 4, "ngFor", "ngForOf"], ["class", "m-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "drp-select"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["responsive", "true", 1, "pagination", 3, "pageChange"], [3, "action", "unitId", "close"], [3, "innerHTML"], ["scope", "col"], [1, "m-2"], ["scope", "row"], [1, "navbar-nav", "pl-3", "pr-3"], [1, "nav-item", "dropdown"], ["type", "button", "href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "rounded-pill", "button", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-position"], [1, "dropdown-item", 3, "click"], [3, "ngValue"]], template: function UnitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UnitComponent_app_unit_detail_1_Template, 1, 2, "app-unit-detail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitComponent_Template_a_click_12_listener() { return ctx.addNewUnit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add New Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Print Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitComponent_Template_a_click_20_listener() { return ctx.exportPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitComponent_Template_a_click_22_listener() { return ctx.exportToExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitComponent_Template_a_click_24_listener() { return ctx.exportToCSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ng-autocomplete", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function UnitComponent_Template_ng_autocomplete_selected_32_listener($event) { return ctx.selectEvent($event); })("inputChanged", function UnitComponent_Template_ng_autocomplete_inputChanged_32_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function UnitComponent_Template_ng_autocomplete_inputFocused_32_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UnitComponent_ng_template_33_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UnitComponent_ng_template_35_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, UnitComponent_th_42_Template, 2, 1, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, UnitComponent_tr_46_Template, 17, 3, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnitComponent_Template_select_ngModelChange_51_listener($event) { return ctx.config.itemsPerPage = $event; })("change", function UnitComponent_Template_select_change_51_listener() { return ctx.changePageSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, UnitComponent_option_52_Template, 2, 2, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "pagination-controls", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UnitComponent_Template_pagination_controls_pageChange_54_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddNewUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.library)("searchKeyword", ctx.keyword)("itemTemplate", _r1)("notFoundTemplate", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](47, 9, ctx.units, ctx.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.config.itemsPerPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageSizes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["UnitDetailComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]], styles: [".body[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 90vh;\n  padding: 30px;\n  overflow-x: auto;\n}\n\n.heading[_ngcontent-%COMP%] {\n  color: #f29700;\n  font-weight: 600;\n  padding-left: 40px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.btn-default[_ngcontent-%COMP%] {\n  font-family: Raleway-SemiBold;\n  font-size: 13px;\n  color: rgba(108, 88, 179, 0.75);\n  letter-spacing: 1px;\n  line-height: 15px;\n  border: 2px solid rgba(108, 89, 179, 0.75);\n  border-radius: 40px;\n  background: transparent;\n  transition: all 0.3s ease 0s;\n}\n\n.btn-default[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(108, 88, 179, 0.75);\n  border: 2px solid rgba(108, 89, 179, 0.75);\n}\n\n.add-button[_ngcontent-%COMP%] {\n  color: #f29700;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: #f29700 thin solid;\n  border-radius: 5px;\n  text-align: center;\n  color: #f29700;\n  width: 60px;\n  line-height: 30px;\n}\n\ninput[type=number][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > th[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > th[_ngcontent-%COMP%] {\n  background-color: #fcf6ea;\n}\n\ntr[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.actionButtonEdit[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  color: white;\n}\n\n.actionButtonSave[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a:hover {\n  border-radius: 30px;\n  background-color: #f29700;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a {\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li:not(:first-child):not(:last-child) {\n  width: 40px;\n  height: 40px;\n  line-height: 30px;\n  border-radius: 30px;\n  background-color: #e9ebf0;\n  margin: 5px;\n  text-align: center;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\n  background-color: #f29700 !important;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous .disabled span {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-left: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 30px;\n  padding-right: 30px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a::before, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous.disabled::before {\n  content: \" \";\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a::after, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next.disabled::after {\n  content: \" \";\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  min-width: 100px;\n  font-size: 0.75em;\n  color: white;\n  font-weight: 700;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: auto;\n  cursor: pointer;\n}\n\n.dropdown-position[_ngcontent-%COMP%] {\n  transform: translate3d(-15px, 25px, 0px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2FkbWluL2xpYnJhcnkvdW5pdC91bml0LmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNDVFc7RURVWCxnQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7QUFBRjs7QUFHQTtFQUNFLGNDdENXO0FEc0NiOztBQUdBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0M3Q1c7RUQ4Q1gsV0FBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7O0VBRUUsd0JBQUE7QUFBRjs7QUFHQTs7RUFFRSx1QkFBQTtBQUFGOztBQUdBOztFQUVFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQzNGVztFRDRGWCxZQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0EseUJDL0dXO0FEMEdiOztBQVFBO0VBQ0Usb0JBQUE7QUFMRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQzFIYTtFRDJIYixXQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLG9DQUFBO0FBTEY7O0FBUUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJDeElhO0VEeUliLGtCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNsSmE7RURtSmIsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBTEY7O0FBUUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJDN0phO0VEOEpiLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUxGOztBQVFBOztFQUVFLFlBQUE7QUFMRjs7QUFRQTs7RUFFRSxZQUFBO0FBTEY7O0FBU0E7RUFDRSx5QkM5S1k7RUQrS1osZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMRjs7QUFPQTtFQUNFLHdDQUFBO0FBSkYiLCJmaWxlIjoic3JjL2FwcC9wYW5lbHMvYWRtaW4vbGlicmFyeS91bml0L3VuaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tZGVmYXVsdCB7XHJcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXktU2VtaUJvbGQ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiByZ2JhKDEwOCwgODgsIDE3OSwgMC43NSk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEwOCwgODksIDE3OSwgMC43NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcblxyXG4uYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTA4LCA4OCwgMTc5LCAwLjc1KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEwOCwgODksIDE3OSwgMC43NSk7XHJcbn1cclxuXHJcbi5hZGQtYnV0dG9uIHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6ICRiYXNlLWNvbG9yIHRoaW4gc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGQsXHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSA+IHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IC8vIENob29zZSB5b3VyIG93biBjb2xvciBoZXJlXHJcbn1cclxuXHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikgPiB0ZCxcclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSA+IHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNDYsIDIzNCk7IC8vIENob29zZSB5b3VyIG93biBjb2xvciBoZXJlXHJcbn1cclxuXHJcbnRyIHtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxudGgge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFjdGlvbkJ1dHRvbkVkaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMTQ3LCA3Nik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWN0aW9uQnV0dG9uU2F2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5wcm9kdWN0LWltYWdlIHtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyAuaWNvbiB7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbi8vICAgY29sb3I6IHJnYigyNDEsIDk4LCA5OCk7XHJcbi8vIH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLyBQYWdpbmF0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaSBhOmhvdmVyIHtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpIGEge1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzaGFkb3ctY29sb3I7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIC5kaXNhYmxlZCBzcGFuIHtcclxuICBjb250ZW50OiBcIiBcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxOTEsIDE5NywgMjA3KTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoYWRvdy1jb2xvcjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyBhIHtcclxuICBjb250ZW50OiBcIiBcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxOTEsIDE5NywgMjA3KTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoYWRvdy1jb2xvcjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IGEge1xyXG4gIGNvbnRlbnQ6IFwiIFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDE5MSwgMTk3LCAyMDcpO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzaGFkb3ctY29sb3I7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgYTo6YmVmb3JlLFxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQgYTo6YWZ0ZXIsXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dC5kaXNhYmxlZDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9AYXQtcm9vdFxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRyb3Bkb3duLXBvc2l0aW9uIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNXB4LCAyNXB4LCAwcHgpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgZGl2Lm1vZGFsLWNlbnRlciB7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxOCU7XHJcbn1cclxuIiwiJGJhc2UtY29sb3I6IHJnYigyNDIsIDE1MSwgMCk7XHJcbiRzaGFkb3ctY29sb3I6IHJnYigyMzMsIDIzNSwgMjQwKTtcclxuJGdyZWVuLWNvbG9yOiAjMjM5MzRjO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unit',
                templateUrl: './unit.component.html',
                styleUrls: ['./unit.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"] }]; }, null); })();


/***/ }),

/***/ "AWcQ":
/*!***************************************************************************!*\
  !*** ./src/app/panels/admin/library/ethnicity/detail/detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: EthnicityDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthnicityDetailComponent", function() { return EthnicityDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/productLibrary/product-library.service */ "YY25");
/* harmony import */ var _services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/ticket/ticket.service */ "agnC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/error/error.component */ "HZwm");










function EthnicityDetailComponent_h3_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add New Ethnicity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EthnicityDetailComponent_h3_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ethnicity Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EthnicityDetailComponent {
    constructor(spinner, toastr, productLibraryService, ticketService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.productLibraryService = productLibraryService;
        this.ticketService = ticketService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.upload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataList = [];
        this.Arr = Array;
        this.ethnicity = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ethnicity_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        }, { updateOn: 'change' });
        this.ethnicities = [];
        this.brands = [];
        this.units = [];
    }
    ngOnInit() {
        // const token = JSON.parse(localStorage.getItem('user'))?.accessToken;
        // this.decoded = jwt_decode(token);
        // console.log(this.decoded);
        console.log(this.action);
        if (this.action === 'detail') {
            this.getEthnicityById();
        }
    }
    get ethnicity_name() {
        return this.ethnicity.get('ethnicity_name');
    }
    onSubmit() {
        const group = this.ethnicity;
        console.log(group);
        if (this.ethnicity.valid) {
            console.log(group.value);
            this.spinner.show();
            this.productLibraryService.createEthnicity(group.value).subscribe((data) => {
                console.log(data);
                this.spinner.hide();
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
        else {
            this.validateAllFormFields(group);
        }
    }
    update() {
        console.log('updating........');
        const group = this.ethnicity;
        console.log(group);
        console.log(group.valid);
        if (group.valid) {
            console.log(group.value);
            this.spinner.show();
            this.productLibraryService.updateEthnicity(group.value, this.ethnicityId).subscribe((data) => {
                console.log(data);
                this.spinner.hide();
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
        else {
            this.validateAllFormFields(group);
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                this.validateAllFormFields(control);
            }
        });
    }
    getEthnicityById() {
        this.spinner.show();
        this.productLibraryService.getEthnicityById(this.ethnicityId).subscribe((data) => {
            console.log(data);
            this.spinner.hide();
            this.fillFormFields(data.body);
        });
    }
    fillFormFields(ethnicity) {
        console.log(ethnicity);
        const group = this.ethnicity;
        group.controls.ethnicity_name.setValue(ethnicity.ethnicity_name || '');
    }
}
EthnicityDetailComponent.ɵfac = function EthnicityDetailComponent_Factory(t) { return new (t || EthnicityDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"])); };
EthnicityDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EthnicityDetailComponent, selectors: [["app-ethnicity-detail"]], inputs: { action: "action", ethnicityId: "ethnicityId" }, outputs: { close: "close", upload: "upload" }, decls: 30, vars: 4, consts: [[1, "body"], [1, "container-fluid"], [1, "pl-5", "pr-5", "pt-5", "d-flex", "justify-content-between"], [1, "icon", "fa", "fa-long-arrow-left", 3, "click"], [1, ""], [1, "btn", "rounded-pill", "close-button", 3, "click"], [1, "fa", "fa-close"], [1, "row", "p-5", "justify-content-center"], [1, "col-12"], [1, "p-2"], [1, "row"], [1, "col-12", "mb-5"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row", "section"], [1, "col-lg-6"], [1, "row", "pr-3"], [1, "col"], [1, "mb-3"], ["for", "basic-url", 1, "form-label", "pl-4", "mb-0"], [1, "inner-addon", "right-addon"], [1, "glyphicon", "fa", "fa-pencil-square-o", 2, "font-size", "24px"], ["type", "text ", "placeholder", "Ethnicity Name", "formControlName", "ethnicity_name", 1, "form-control", "input-text"], [3, "control"], [1, "row", "float-right"], ["type", "submit", 1, "btn", "rounded-pill", "button"]], template: function EthnicityDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EthnicityDetailComponent_Template_i_click_3_listener() { return ctx.close.emit(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EthnicityDetailComponent_Template_button_click_5_listener() { return ctx.close.emit(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EthnicityDetailComponent_h3_12_Template, 2, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EthnicityDetailComponent_h3_13_Template, 2, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EthnicityDetailComponent_Template_form_ngSubmit_14_listener() { return ctx.action === "create" ? ctx.onSubmit() : ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ethnicity Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ethnicity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ethnicity_name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]], styles: ["@media (min-width: 1140px) {\n  .body[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 14;\n    background-color: white;\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n  }\n}\n@media (max-width: 1139px) {\n  .body[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 14;\n    background-color: white;\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n    border-radius: 40px;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  color: #f29700;\n  font-size: 30px;\n  cursor: pointer;\n}\n.close-button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 16;\n  top: 10px;\n  right: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh3[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh4[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh5[_ngcontent-%COMP%] {\n  color: #f29700;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  border: #f29700 solid thin;\n  border-radius: 30px;\n  padding: 20px;\n}\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  outline: 0px;\n}\n.select[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  border: 0;\n}\n.button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  width: 220px;\n  padding: 10px;\n  font-size: 1.25em;\n  color: white;\n  font-weight: 700;\n}\n.inner-addon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.inner-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none;\n}\n.right-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n}\n.right-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  right: 0px;\n}\n\n.thumb[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n}\n.img-thumbnail[_ngcontent-%COMP%] {\n  height: 150px;\n  object-fit: cover;\n}\n.deleteIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  right: 10px;\n  top: 10px;\n  z-index: 3;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2FkbWluL2xpYnJhcnkvZXRobmljaXR5L2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtJQUNBLDBDQUFBO0lBR0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQUZGO0FBQ0Y7QUFNQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSwwQ0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQUpGO0FBQ0Y7QUFPQTtFQUNFLGNDOUJXO0VEK0JYLGVBQUE7RUFDQSxlQUFBO0FBTEY7QUFPQTtFQUNFLHlCQ25DVztFRG9DWCxZQUFBO0FBSkY7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBSkY7QUFPQTtFQUNFLGNDL0NXO0FEMkNiO0FBT0E7RUFDRSxjQ25EVztBRCtDYjtBQU9BO0VBQ0UsY0N2RFc7QURtRGI7QUFPQTtFQUNFLGNDM0RXO0FEdURiO0FBT0EsMENBQUE7QUFDQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSkY7QUFNQTtFQUNFLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtBQUhGO0FBS0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFGRjtBQUtBO0VBQ0UsU0FBQTtBQUZGO0FBSUE7RUFDRSx5QkNqRlc7RURrRlgsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0E7RUFDRSxrQkFBQTtBQUFGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQ0E7RUFDRSxtQkFBQTtBQUVGO0FBQUE7RUFDRSxVQUFBO0FBR0Y7QUFBQSw4REFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUdGO0FBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFHRjtBQUFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUdGIiwiZmlsZSI6InNyYy9hcHAvcGFuZWxzL2FkbWluL2xpYnJhcnkvZXRobmljaXR5L2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMTQwcHgpIHtcclxuICAuYm9keSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgLy8gbWluLXdpZHRoOiA4MDBweDtcclxuICAgIC8vIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTM5cHgpIHtcclxuICAuYm9keSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE2O1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuaDMge1xyXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuaDQge1xyXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuaDUge1xyXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqVGV4dCBCb3gqKioqKioqKioqKioqKioqKioqL1xyXG4uaW5wdXQtdGV4dCB7XHJcbiAgYm9yZGVyOiAkYmFzZS1jb2xvciBzb2xpZCB0aGluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5zZWxlY3Qge1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuLnNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBvdXRsaW5lOiAwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3QgOmZvY3VzIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmlubmVyLWFkZG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmlubmVyLWFkZG9uIC5nbHlwaGljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5yaWdodC1hZGRvbiBpbnB1dCB7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG4ucmlnaHQtYWRkb24gLmdseXBoaWNvbiB7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqSW1hZ2UqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi50aHVtYiB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1nLXRodW1ibmFpbCB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmRlbGV0ZUljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iLCIkYmFzZS1jb2xvcjogcmdiKDI0MiwgMTUxLCAwKTtcclxuJHNoYWRvdy1jb2xvcjogcmdiKDIzMywgMjM1LCAyNDApO1xyXG4kZ3JlZW4tY29sb3I6ICMyMzkzNGM7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EthnicityDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ethnicity-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"] }, { type: _services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"] }]; }, { close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], upload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ethnicityId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "CpWP":
/*!*******************************************************************!*\
  !*** ./src/app/panels/admin/library/product/product.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/productLibrary/product-library.service */ "YY25");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail/detail.component */ "/dEP");











function ProductComponent_app_product_detail_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-product-detail", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ProductComponent_app_product_detail_1_Template_app_product_detail_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addNewProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", ctx_r0.action)("productId", ctx_r0.productId);
} }
function ProductComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 36);
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r10.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ProductComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    const notFound_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ProductComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r12.label, " ");
} }
function ProductComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_tr_44_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const product_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.productDetail(product_r13.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_tr_44_Template_a_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const product_r13 = ctx.$implicit; const i_r14 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.deleteProduct(product_r13.product_id, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.config.itemsPerPage * ctx_r6.config.currentPage - ctx_r6.config.itemsPerPage + i_r14 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r13.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r13.product_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r13.product_ingredients);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r13.product_contain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://storage.googleapis.com/lg-content/ProdImages/", product_r13.image_link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r13.category_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r13.ethnicity_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r13.brand_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r13.unit_long_name);
} }
function ProductComponent_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageSize_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", pageSize_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSize_r18, " ");
} }
class ProductComponent {
    constructor(spinner, toastr, router, productLibraryService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.router = router;
        this.productLibraryService = productLibraryService;
        this.isAddNewProduct = false;
        this.products = [];
        this.fields = [
            { label: 'Name', fieldName: 'product_name' },
            { label: 'Description', fieldName: 'product_description' },
            { label: 'Ingredients', fieldName: 'product_ingredients' },
            { label: 'Contain', fieldName: 'product_contain' },
            { label: 'Image Link', fieldName: 'image_link' },
            { label: 'Category', fieldName: 'category_name' },
            { label: 'Ethnicity', fieldName: 'ethnicity_name' },
            { label: 'Brand', fieldName: 'brand_name' },
            { label: 'Unit', fieldName: 'unit_long_name' },
        ];
        this.p = 1;
        this.pageSizes = [1, 2, 5, 10, 25, 50];
        this.sort = {
            orderBy: 'product_id',
            sort: 'DESC',
        };
        this.keyword = 'name';
        this.search = [];
        // this.socketService.setupSocketConnection();
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
        };
        // this.customerData = this.customerData.slice();
        // this.getUsersSuggestion();
    }
    ngOnInit() {
        this.getProducts();
        // this.getAdminUsers();
    }
    pageChanged(event) {
        this.config.currentPage = event;
        this.getProducts();
    }
    navigateToOrderDetail(id) {
        this.router.navigate([`store/dashboard/order-detail`, id]);
    }
    changePageSize() {
        this.getProducts();
    }
    selectEvent(item) {
        this.search = [item];
        // // do something with selected item
        // // this.products[index].productLibraryId = item.product_id;
        // // this.products[index].productName = item.product_name;
        // console.log(item)
        // if(this.searchBy === 'Products'){
        //   console.log('Products')
        //   this.productCatalogService.setSearch(item)
        //   this.router.navigate(['store/search-products']);
        // }
        // else if(this.searchBy === 'Shop'){
        //   console.log('Shop')
        //   this.productCatalogService.setShop(item)
        //   this.router.navigate(['store/shop-products']);
        // }
    }
    onChangeSearch(search) {
        // this.sendUserSearch(search);
    }
    onFocused(e) {
        // do something
    }
    onEnter(e) {
        const userIds = [];
        this.search.map((item) => {
            userIds.push(item.id);
        });
        this.config['userIds'] = userIds;
        console.log(this.config);
        this.getProducts();
    }
    sortBy(orderBy, sort) {
        this.sort = {
            orderBy,
            sort,
        };
        this.getProducts();
    }
    getProducts() {
        this.spinner.show();
        this.productLibraryService.getProductsByPagination(this.config, this.sort).subscribe((data) => {
            this.products = data.data;
            this.config.totalItems = data.total;
            this.products.map((p) => {
                p.image_link = p.image_link.replace('images/', '');
            });
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    deleteProduct(productId, index) {
        this.spinner.show();
        this.productLibraryService.deleteProductById(productId).subscribe((data) => {
            this.products.splice(index, 1);
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    addNewProduct() {
        this.action = 'create';
        this.isAddNewProduct = !this.isAddNewProduct;
    }
    productDetail(productId) {
        this.action = 'detail';
        this.productId = productId;
        this.isAddNewProduct = !this.isAddNewProduct;
    }
    //--------export to pdf start-----------------
    exportPdf() {
        __webpack_require__.e(/*! import() | jspdf */ "default~jspdf~jspdf-autotable").then(__webpack_require__.t.bind(null, /*! jspdf */ "5RHE", 7)).then((jsPDF) => {
            Promise.all(/*! import() | jspdf-autotable */[__webpack_require__.e("default~jspdf~jspdf-autotable"), __webpack_require__.e("jspdf-autotable")]).then(__webpack_require__.t.bind(null, /*! jspdf-autotable */ "DaQG", 7)).then((x) => {
                const doc = new jsPDF.default(0, 0);
                this.exportLst = [];
                if (this.products) {
                    this.products.forEach((data) => {
                        this.exportLst.push({
                            FirstName: data.firstName,
                            LastName: data.lastName,
                            Email: data.email,
                            Phone: data.phoneNumber,
                            Address: data.address1,
                            City: data.city,
                            Date: data.createdAt,
                        });
                    });
                    // this.driverService.exportDriversFilteredRecords(this.driverDetails).subscribe(data => {
                    //   data.lstDrivers.forEach((i) => {
                    //     this.exportLst.push({
                    //       FirstName: i.FirstName, LastName: i.LastName,
                    //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
                    //     })
                    //   });
                    doc.autoTable(this.exportColumns, this.exportLst);
                    // });
                }
                else {
                    // this.spinner.show();
                    // this.driverService.exportAllDrivers().subscribe(data => {
                    //   data.lstDrivers.forEach((i) => {
                    //     this.exportLst.push({
                    //       FirstName: i.FirstName, LastName: i.LastName,
                    //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
                    //     })
                    //   });
                    //   this.spinner.hide();
                    //   this.exportExcel(this.exportLst);
                    // });
                }
                //doc.autoTable(this.exportColumns, this.lstDrivers);
                doc.save('CustomerTable.pdf');
            });
        });
    }
    //--------export to pdf end-----------------
    //----------export to excel----start-----------------------
    exportToExcel() {
        //---------------------------------------------------------------
        this.exportLst = [];
        if (this.products) {
            this.products.forEach((data) => {
                this.exportLst.push({
                    FirstName: data.firstName,
                    LastName: data.lastName,
                    Email: data.email,
                    Phone: data.phoneNumber,
                    Address: data.address1,
                    City: data.city,
                    Date: data.createdAt,
                });
            });
            this.exportExcel(this.exportLst);
            // });
        }
        else {
        }
        //---------------------------------------------------------------
    }
    //--------------------------
    exportExcel(exportLst) {
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "EUZL", 7)).then((xlsx) => {
            if (this.exportLst.length > 0) {
                console.log(exportLst);
                const worksheet = xlsx.utils.json_to_sheet(exportLst);
                const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
                this.saveAsExcelFile(excelBuffer, 'customersDetails');
            }
        });
    }
    //--------------------------
    //--------------------------
    saveAsExcelFile(buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "Iab2", 7)).then((FileSaver) => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE,
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
    //--------------------------
    //----------export to excel----end-------------------------
    //---------------------------------------------
    //----------export to CSV----start-----------------------
    exportToCSV() {
        //---------------------------------------------------------------
        this.exportLst = [];
        if (this.products) {
            this.products.forEach((data) => {
                this.exportLst.push({
                    FirstName: data.firstName,
                    LastName: data.lastName,
                    Email: data.email,
                    Phone: data.phoneNumber,
                    Address: data.address1,
                    City: data.city,
                    Date: data.createdAt,
                });
            });
            this.exportCSV(this.exportLst);
            // });
        }
        else {
        }
        //---------------------------------------------------------------
    }
    //--------------------------
    exportCSV(exportLst) {
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "EUZL", 7)).then((xlsx) => {
            if (this.exportLst.length > 0) {
                console.log(exportLst);
                const worksheet = xlsx.utils.json_to_sheet(exportLst);
                const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
                this.saveAsCSVFile(excelBuffer, 'customersDetails');
            }
        });
    }
    //--------------------------
    //--------------------------
    saveAsCSVFile(buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "Iab2", 7)).then((FileSaver) => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.csv';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE,
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 53, vars: 12, consts: [[1, "modal-center"], [3, "action", "productId", "close", 4, "ngIf"], [1, "body"], [1, "table-top"], [1, "row"], [1, "col-md-3"], [1, "cust-heading"], [1, "heading"], [1, "col-md-9", "d-flex", "justify-content-end"], [1, "serch-sec", "p-1", "flex-fill", "d-flex", "justify-content-end"], [1, "resport-sec"], [1, "add-button", "m-2", 3, "routerLink", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "ml-1"], [1, "print-report", "m-1", 3, "routerLink", "click"], ["src", "../../../../../assets/fileicon/pdffile.png", "alt", "pdf", "width", "30", "height", "30", 1, "img-thumbnail"], ["src", "../../../../../assets/fileicon/excelfile.png", "alt", "excel", "width", "30", "height", "30", 1, "img-thumbnail"], ["src", "../../../../../assets/fileicon/csvfile.png", "alt", "csv", "width", "30", "height", "30", 1, "img-thumbnail"], [1, "flex-fill"], [1, "input-group", "border", "rounded-pill", "p-1"], [1, "input-group-prepend", "border-0"], [1, "col-auto"], [1, "fa", "fa-search", "h5", "pt-2"], [1, "form-control", "bg-none", "border-0", "p-0"], ["placeholder", "Enter the Product Name", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "table", "table-striped"], ["scope", "col", 4, "ngFor", "ngForOf"], ["class", "m-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "drp-select"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["responsive", "true", 1, "pagination", 3, "pageChange"], [3, "action", "productId", "close"], [3, "innerHTML"], ["scope", "col"], [1, "m-2"], ["scope", "row"], [1, "product-image"], ["onerror", "this.src='../../../../assets/category/images/fruits.jpg'", "alt", "LG", 1, "icon", 3, "src"], [1, "navbar-nav", "pl-3", "pr-3"], [1, "nav-item", "dropdown"], ["type", "button", "href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "rounded-pill", "button", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-position"], [1, "dropdown-item", 3, "click"], [3, "ngValue"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_app_product_detail_1_Template, 1, 2, "app-product-detail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_a_click_12_listener() { return ctx.addNewProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add New Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Print Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_a_click_20_listener() { return ctx.exportPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_a_click_22_listener() { return ctx.exportToExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_a_click_24_listener() { return ctx.exportToCSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ng-autocomplete", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function ProductComponent_Template_ng_autocomplete_selected_32_listener($event) { return ctx.selectEvent($event); })("inputChanged", function ProductComponent_Template_ng_autocomplete_inputChanged_32_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function ProductComponent_Template_ng_autocomplete_inputFocused_32_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProductComponent_ng_template_33_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProductComponent_ng_template_35_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProductComponent_th_42_Template, 2, 1, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ProductComponent_tr_44_Template, 31, 10, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_Template_select_ngModelChange_49_listener($event) { return ctx.config.itemsPerPage = $event; })("change", function ProductComponent_Template_select_change_49_listener() { return ctx.changePageSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ProductComponent_option_50_Template, 2, 2, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "pagination-controls", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ProductComponent_Template_pagination_controls_pageChange_52_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddNewProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.library)("searchKeyword", ctx.keyword)("itemTemplate", _r1)("notFoundTemplate", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 9, ctx.products, ctx.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.config.itemsPerPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageSizes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]], styles: [".body[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 90vh;\n  padding: 30px;\n  overflow-x: auto;\n}\n\n.heading[_ngcontent-%COMP%] {\n  color: #f29700;\n  font-weight: 600;\n  padding-left: 40px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.btn-default[_ngcontent-%COMP%] {\n  font-family: Raleway-SemiBold;\n  font-size: 13px;\n  color: rgba(108, 88, 179, 0.75);\n  letter-spacing: 1px;\n  line-height: 15px;\n  border: 2px solid rgba(108, 89, 179, 0.75);\n  border-radius: 40px;\n  background: transparent;\n  transition: all 0.3s ease 0s;\n}\n\n.btn-default[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(108, 88, 179, 0.75);\n  border: 2px solid rgba(108, 89, 179, 0.75);\n}\n\n.add-button[_ngcontent-%COMP%] {\n  color: #f29700;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: #f29700 thin solid;\n  border-radius: 5px;\n  text-align: center;\n  color: #f29700;\n  width: 60px;\n  line-height: 30px;\n}\n\ninput[type=number][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > th[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > th[_ngcontent-%COMP%] {\n  background-color: #fcf6ea;\n}\n\ntr[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.actionButtonEdit[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  color: white;\n}\n\n.actionButtonSave[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a:hover {\n  border-radius: 30px;\n  background-color: #f29700;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a {\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li:not(:first-child):not(:last-child) {\n  width: 40px;\n  height: 40px;\n  line-height: 30px;\n  border-radius: 30px;\n  background-color: #e9ebf0;\n  margin: 5px;\n  text-align: center;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\n  background-color: #f29700 !important;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous .disabled span {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-left: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 30px;\n  padding-right: 30px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a::before, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous.disabled::before {\n  content: \" \";\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a::after, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next.disabled::after {\n  content: \" \";\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  min-width: 100px;\n  font-size: 0.75em;\n  color: white;\n  font-weight: 700;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: auto;\n}\n\n.dropdown-position[_ngcontent-%COMP%] {\n  transform: translate3d(-15px, 25px, 0px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2FkbWluL2xpYnJhcnkvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNDVFc7RURVWCxnQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7QUFBRjs7QUFHQTtFQUNFLGNDdENXO0FEc0NiOztBQUdBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0M3Q1c7RUQ4Q1gsV0FBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7O0VBRUUsd0JBQUE7QUFBRjs7QUFHQTs7RUFFRSx1QkFBQTtBQUFGOztBQUdBOztFQUVFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQzNGVztFRDRGWCxZQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0EseUJDL0dXO0FEMEdiOztBQVFBO0VBQ0Usb0JBQUE7QUFMRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQzFIYTtFRDJIYixXQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLG9DQUFBO0FBTEY7O0FBUUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJDeElhO0VEeUliLGtCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNsSmE7RURtSmIsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBTEY7O0FBUUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJDN0phO0VEOEpiLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUxGOztBQVFBOztFQUVFLFlBQUE7QUFMRjs7QUFRQTs7RUFFRSxZQUFBO0FBTEY7O0FBU0E7RUFDRSx5QkM5S1k7RUQrS1osZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUxGOztBQU9BO0VBQ0Usd0NBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9hZG1pbi9saWJyYXJ5L3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuLmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmJ0bi1kZWZhdWx0IHtcclxuICBmb250LWZhbWlseTogUmFsZXdheS1TZW1pQm9sZDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6IHJnYmEoMTA4LCA4OCwgMTc5LCAwLjc1KTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTA4LCA4OSwgMTc5LCAwLjc1KTtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbn1cclxuXHJcbi5idG4tZGVmYXVsdDpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDg4LCAxNzksIDAuNzUpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTA4LCA4OSwgMTc5LCAwLjc1KTtcclxufVxyXG5cclxuLmFkZC1idXR0b24ge1xyXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogJGJhc2UtY29sb3IgdGhpbiBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICB3aWR0aDogNjBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkgPiB0ZCxcclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgLy8gQ2hvb3NlIHlvdXIgb3duIGNvbG9yIGhlcmVcclxufVxyXG5cclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSA+IHRkLFxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pID4gdGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI0NiwgMjM0KTsgLy8gQ2hvb3NlIHlvdXIgb3duIGNvbG9yIGhlcmVcclxufVxyXG5cclxudHIge1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG50aCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYWN0aW9uQnV0dG9uRWRpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxNDcsIDc2KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hY3Rpb25CdXR0b25TYXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIC5pY29uIHtcclxuLy8gICBtYXJnaW4tbGVmdDogMTVweDtcclxuLy8gICBjb2xvcjogcmdiKDI0MSwgOTgsIDk4KTtcclxuLy8gfVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFBhZ2luYXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpIGE6aG92ZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGkgYSB7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGk6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoYWRvdy1jb2xvcjtcclxuICBtYXJnaW46IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgLmRpc2FibGVkIHNwYW4ge1xyXG4gIGNvbnRlbnQ6IFwiIFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDE5MSwgMTk3LCAyMDcpO1xyXG4gIG1hcmdpbi1yaWdodDogMTB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hhZG93LWNvbG9yO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIGEge1xyXG4gIGNvbnRlbnQ6IFwiIFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDE5MSwgMTk3LCAyMDcpO1xyXG4gIG1hcmdpbi1yaWdodDogMTB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hhZG93LWNvbG9yO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQgYSB7XHJcbiAgY29udGVudDogXCIgXCIgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTkxLCAxOTcsIDIwNyk7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoYWRvdy1jb2xvcjtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyBhOjpiZWZvcmUsXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMuZGlzYWJsZWQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCBhOjphZnRlcixcclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0LmRpc2FibGVkOjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL0BhdC1yb290XHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5kcm9wZG93bi1wb3NpdGlvbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTVweCwgMjVweCwgMHB4KTtcclxufVxyXG5cclxuOjpuZy1kZWVwIGRpdi5tb2RhbC1jZW50ZXIge1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMTglO1xyXG59XHJcbiIsIiRiYXNlLWNvbG9yOiByZ2IoMjQyLCAxNTEsIDApO1xyXG4kc2hhZG93LWNvbG9yOiByZ2IoMjMzLCAyMzUsIDI0MCk7XHJcbiRncmVlbi1jb2xvcjogIzIzOTM0YztcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss'],
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"] }]; }, null); })();


/***/ }),

/***/ "DQpC":
/*!***********************************************************************!*\
  !*** ./src/app/panels/admin/library/ethnicity/ethnicity.component.ts ***!
  \***********************************************************************/
/*! exports provided: EthnicityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthnicityComponent", function() { return EthnicityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/productLibrary/product-library.service */ "YY25");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail/detail.component */ "AWcQ");











function EthnicityComponent_app_ethnicity_detail_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-ethnicity-detail", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function EthnicityComponent_app_ethnicity_detail_1_Template_app_ethnicity_detail_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addNewEthnicity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", ctx_r0.action)("ethnicityId", ctx_r0.ethnicityId);
} }
function EthnicityComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 36);
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r10.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function EthnicityComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    const notFound_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function EthnicityComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r12.label, " ");
} }
function EthnicityComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EthnicityComponent_tr_46_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ethnicity_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.ethnicityDetail(ethnicity_r13.ethnicity_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EthnicityComponent_tr_46_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ethnicity_r13 = ctx.$implicit; const i_r14 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.deleteEthnicity(ethnicity_r13.ethnicity_id, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ethnicity_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.config.itemsPerPage * ctx_r6.config.currentPage - ctx_r6.config.itemsPerPage + i_r14 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ethnicity_r13.ethnicity_name);
} }
function EthnicityComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageSize_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", pageSize_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSize_r18, " ");
} }
class EthnicityComponent {
    constructor(spinner, toastr, router, productLibraryService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.router = router;
        this.productLibraryService = productLibraryService;
        this.isAddNewEthnicity = true;
        this.ethnicities = [];
        this.fields = [
            { label: 'Name', fieldName: 'ethnicity_name' },
        ];
        this.p = 1;
        this.pageSizes = [1, 2, 5, 10, 25, 50];
        this.sort = {
            orderBy: 'ethnicity_name',
            sort: 'ASC',
        };
        this.keyword = 'name';
        this.search = [];
        // this.socketService.setupSocketConnection();
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
        };
        // this.customerData = this.customerData.slice();
        // this.getUsersSuggestion();
    }
    ngOnInit() {
        this.getEthnicities();
        // this.getAdminUsers();
    }
    pageChanged(event) {
        this.config.currentPage = event;
        this.getEthnicities();
    }
    changePageSize() {
        this.getEthnicities();
    }
    selectEvent(item) {
        this.search = [item];
    }
    onChangeSearch(search) {
        // this.sendUserSearch(search);
    }
    onFocused(e) {
        // do something
    }
    onEnter(e) {
        const userIds = [];
        this.search.map((item) => {
            userIds.push(item.id);
        });
        this.config['userIds'] = userIds;
        console.log(this.config);
        this.getEthnicities();
    }
    sortBy(orderBy, sort) {
        this.sort = {
            orderBy,
            sort,
        };
        this.getEthnicities();
    }
    getEthnicities() {
        this.spinner.show();
        this.productLibraryService.getEthnicityByPagination(this.config, this.sort).subscribe((data) => {
            console.log(data);
            this.ethnicities = data.data;
            this.config.totalItems = data.total;
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    deleteEthnicity(ethnicityId, index) {
        this.spinner.show();
        this.productLibraryService.deleteEthnicityById(ethnicityId).subscribe((data) => {
            this.ethnicities.splice(index, 1);
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    addNewEthnicity() {
        this.action = 'create';
        this.isAddNewEthnicity = !this.isAddNewEthnicity;
    }
    ethnicityDetail(ethnicityId) {
        this.action = 'detail';
        this.ethnicityId = ethnicityId;
        this.isAddNewEthnicity = !this.isAddNewEthnicity;
    }
    //--------export to pdf start-----------------
    exportPdf() {
        __webpack_require__.e(/*! import() | jspdf */ "default~jspdf~jspdf-autotable").then(__webpack_require__.t.bind(null, /*! jspdf */ "5RHE", 7)).then((jsPDF) => {
            Promise.all(/*! import() | jspdf-autotable */[__webpack_require__.e("default~jspdf~jspdf-autotable"), __webpack_require__.e("jspdf-autotable")]).then(__webpack_require__.t.bind(null, /*! jspdf-autotable */ "DaQG", 7)).then((x) => {
                const doc = new jsPDF.default(0, 0);
                this.exportLst = [];
                if (this.ethnicities) {
                    this.ethnicities.forEach((data) => {
                        this.exportLst.push({
                            FirstName: data.firstName,
                            LastName: data.lastName,
                            Email: data.email,
                            Phone: data.phoneNumber,
                            Address: data.address1,
                            City: data.city,
                            Date: data.createdAt,
                        });
                    });
                    // this.driverService.exportDriversFilteredRecords(this.driverDetails).subscribe(data => {
                    //   data.lstDrivers.forEach((i) => {
                    //     this.exportLst.push({
                    //       FirstName: i.FirstName, LastName: i.LastName,
                    //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
                    //     })
                    //   });
                    doc.autoTable(this.exportColumns, this.exportLst);
                    // });
                }
                else {
                    // this.spinner.show();
                    // this.driverService.exportAllDrivers().subscribe(data => {
                    //   data.lstDrivers.forEach((i) => {
                    //     this.exportLst.push({
                    //       FirstName: i.FirstName, LastName: i.LastName,
                    //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
                    //     })
                    //   });
                    //   this.spinner.hide();
                    //   this.exportExcel(this.exportLst);
                    // });
                }
                //doc.autoTable(this.exportColumns, this.lstDrivers);
                doc.save('CustomerTable.pdf');
            });
        });
    }
    //--------export to pdf end-----------------
    //----------export to excel----start-----------------------
    exportToExcel() {
        //---------------------------------------------------------------
        this.exportLst = [];
        if (this.ethnicities) {
            this.ethnicities.forEach((data) => {
                this.exportLst.push({
                    FirstName: data.firstName,
                    LastName: data.lastName,
                    Email: data.email,
                    Phone: data.phoneNumber,
                    Address: data.address1,
                    City: data.city,
                    Date: data.createdAt,
                });
            });
            this.exportExcel(this.exportLst);
            // });
        }
        else {
        }
        //---------------------------------------------------------------
    }
    //--------------------------
    exportExcel(exportLst) {
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "EUZL", 7)).then((xlsx) => {
            if (this.exportLst.length > 0) {
                console.log(exportLst);
                const worksheet = xlsx.utils.json_to_sheet(exportLst);
                const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
                this.saveAsExcelFile(excelBuffer, 'customersDetails');
            }
        });
    }
    //--------------------------
    //--------------------------
    saveAsExcelFile(buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "Iab2", 7)).then((FileSaver) => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE,
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
    //--------------------------
    //----------export to excel----end-------------------------
    //---------------------------------------------
    //----------export to CSV----start-----------------------
    exportToCSV() {
        //---------------------------------------------------------------
        this.exportLst = [];
        if (this.ethnicities) {
            this.ethnicities.forEach((data) => {
                this.exportLst.push({
                    FirstName: data.firstName,
                    LastName: data.lastName,
                    Email: data.email,
                    Phone: data.phoneNumber,
                    Address: data.address1,
                    City: data.city,
                    Date: data.createdAt,
                });
            });
            this.exportCSV(this.exportLst);
            // });
        }
        else {
        }
        //---------------------------------------------------------------
    }
    //--------------------------
    exportCSV(exportLst) {
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "EUZL", 7)).then((xlsx) => {
            if (this.exportLst.length > 0) {
                console.log(exportLst);
                const worksheet = xlsx.utils.json_to_sheet(exportLst);
                const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
                this.saveAsCSVFile(excelBuffer, 'customersDetails');
            }
        });
    }
    //--------------------------
    //--------------------------
    saveAsCSVFile(buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "Iab2", 7)).then((FileSaver) => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.csv';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE,
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
}
EthnicityComponent.ɵfac = function EthnicityComponent_Factory(t) { return new (t || EthnicityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"])); };
EthnicityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EthnicityComponent, selectors: [["app-ethnicity"]], decls: 55, vars: 12, consts: [[1, "modal-center"], [3, "action", "ethnicityId", "close", 4, "ngIf"], [1, "body"], [1, "table-top"], [1, "row"], [1, "col-md-3"], [1, "cust-heading"], [1, "heading"], [1, "col-md-9", "d-flex", "justify-content-end"], [1, "serch-sec", "p-1", "flex-fill", "d-flex", "justify-content-end"], [1, "resport-sec"], [1, "add-button", "m-2", 3, "routerLink", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "ml-1"], [1, "print-report", "m-1", 3, "routerLink", "click"], ["src", "../../../../../assets/fileicon/pdffile.png", "alt", "pdf", "width", "30", "height", "30", 1, "img-thumbnail"], ["src", "../../../../../assets/fileicon/excelfile.png", "alt", "excel", "width", "30", "height", "30", 1, "img-thumbnail"], ["src", "../../../../../assets/fileicon/csvfile.png", "alt", "csv", "width", "30", "height", "30", 1, "img-thumbnail"], [1, "flex-fill"], [1, "input-group", "border", "rounded-pill", "p-1"], [1, "input-group-prepend", "border-0"], [1, "col-auto"], [1, "fa", "fa-search", "h5", "pt-2"], [1, "form-control", "bg-none", "border-0", "p-0"], ["placeholder", "Enter the Product Name", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "table", "table-striped"], ["scope", "col", 4, "ngFor", "ngForOf"], ["class", "m-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "drp-select"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["responsive", "true", 1, "pagination", 3, "pageChange"], [3, "action", "ethnicityId", "close"], [3, "innerHTML"], ["scope", "col"], [1, "m-2"], ["scope", "row"], [1, "navbar-nav", "pl-3", "pr-3"], [1, "nav-item", "dropdown"], ["type", "button", "href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "rounded-pill", "button", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-position"], [1, "dropdown-item", 3, "click"], [3, "ngValue"]], template: function EthnicityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EthnicityComponent_app_ethnicity_detail_1_Template, 1, 2, "app-ethnicity-detail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View Ethnicity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EthnicityComponent_Template_a_click_12_listener() { return ctx.addNewEthnicity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add New Ethnicity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Print Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EthnicityComponent_Template_a_click_20_listener() { return ctx.exportPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EthnicityComponent_Template_a_click_22_listener() { return ctx.exportToExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EthnicityComponent_Template_a_click_24_listener() { return ctx.exportToCSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ng-autocomplete", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function EthnicityComponent_Template_ng_autocomplete_selected_32_listener($event) { return ctx.selectEvent($event); })("inputChanged", function EthnicityComponent_Template_ng_autocomplete_inputChanged_32_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function EthnicityComponent_Template_ng_autocomplete_inputFocused_32_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EthnicityComponent_ng_template_33_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, EthnicityComponent_ng_template_35_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, EthnicityComponent_th_42_Template, 2, 1, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, EthnicityComponent_tr_46_Template, 15, 2, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EthnicityComponent_Template_select_ngModelChange_51_listener($event) { return ctx.config.itemsPerPage = $event; })("change", function EthnicityComponent_Template_select_change_51_listener() { return ctx.changePageSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, EthnicityComponent_option_52_Template, 2, 2, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "pagination-controls", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function EthnicityComponent_Template_pagination_controls_pageChange_54_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddNewEthnicity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.library)("searchKeyword", ctx.keyword)("itemTemplate", _r1)("notFoundTemplate", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](47, 9, ctx.ethnicities, ctx.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.config.itemsPerPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageSizes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["EthnicityDetailComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]], styles: [".body[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 90vh;\n  padding: 30px;\n  overflow-x: auto;\n}\n\n.heading[_ngcontent-%COMP%] {\n  color: #f29700;\n  font-weight: 600;\n  padding-left: 40px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.btn-default[_ngcontent-%COMP%] {\n  font-family: Raleway-SemiBold;\n  font-size: 13px;\n  color: rgba(108, 88, 179, 0.75);\n  letter-spacing: 1px;\n  line-height: 15px;\n  border: 2px solid rgba(108, 89, 179, 0.75);\n  border-radius: 40px;\n  background: transparent;\n  transition: all 0.3s ease 0s;\n}\n\n.btn-default[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(108, 88, 179, 0.75);\n  border: 2px solid rgba(108, 89, 179, 0.75);\n}\n\n.add-button[_ngcontent-%COMP%] {\n  color: #f29700;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: #f29700 thin solid;\n  border-radius: 5px;\n  text-align: center;\n  color: #f29700;\n  width: 60px;\n  line-height: 30px;\n}\n\ninput[type=number][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > th[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > th[_ngcontent-%COMP%] {\n  background-color: #fcf6ea;\n}\n\ntr[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.actionButtonEdit[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  color: white;\n}\n\n.actionButtonSave[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a:hover {\n  border-radius: 30px;\n  background-color: #f29700;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a {\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li:not(:first-child):not(:last-child) {\n  width: 40px;\n  height: 40px;\n  line-height: 30px;\n  border-radius: 30px;\n  background-color: #e9ebf0;\n  margin: 5px;\n  text-align: center;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\n  background-color: #f29700 !important;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous .disabled span {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-left: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 30px;\n  padding-right: 30px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a::before, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous.disabled::before {\n  content: \" \";\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a::after, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next.disabled::after {\n  content: \" \";\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  min-width: 100px;\n  font-size: 0.75em;\n  color: white;\n  font-weight: 700;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: auto;\n  cursor: pointer;\n}\n\n.dropdown-position[_ngcontent-%COMP%] {\n  transform: translate3d(-15px, 25px, 0px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2FkbWluL2xpYnJhcnkvZXRobmljaXR5L2V0aG5pY2l0eS5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQ1RXO0VEVVgsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0FBQUY7O0FBR0E7RUFDRSxjQ3RDVztBRHNDYjs7QUFHQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNDN0NXO0VEOENYLFdBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBOztFQUVFLHdCQUFBO0FBQUY7O0FBR0E7O0VBRUUsdUJBQUE7QUFBRjs7QUFHQTs7RUFFRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkMzRlc7RUQ0RlgsWUFBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBUUE7RUFDRSxtQkFBQTtFQUNBLHlCQy9HVztBRDBHYjs7QUFRQTtFQUNFLG9CQUFBO0FBTEY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkMxSGE7RUQySGIsV0FBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxvQ0FBQTtBQUxGOztBQVFBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ3hJYTtFRHlJYixrQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJDbEphO0VEbUpiLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUxGOztBQVFBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQzdKYTtFRDhKYixrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFMRjs7QUFRQTs7RUFFRSxZQUFBO0FBTEY7O0FBUUE7O0VBRUUsWUFBQTtBQUxGOztBQVNBO0VBQ0UseUJDOUtZO0VEK0taLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFRQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTEY7O0FBT0E7RUFDRSx3Q0FBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvcGFuZWxzL2FkbWluL2xpYnJhcnkvZXRobmljaXR5L2V0aG5pY2l0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuLmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmJ0bi1kZWZhdWx0IHtcclxuICBmb250LWZhbWlseTogUmFsZXdheS1TZW1pQm9sZDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6IHJnYmEoMTA4LCA4OCwgMTc5LCAwLjc1KTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTA4LCA4OSwgMTc5LCAwLjc1KTtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbn1cclxuXHJcbi5idG4tZGVmYXVsdDpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDg4LCAxNzksIDAuNzUpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTA4LCA4OSwgMTc5LCAwLjc1KTtcclxufVxyXG5cclxuLmFkZC1idXR0b24ge1xyXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogJGJhc2UtY29sb3IgdGhpbiBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICB3aWR0aDogNjBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkgPiB0ZCxcclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgLy8gQ2hvb3NlIHlvdXIgb3duIGNvbG9yIGhlcmVcclxufVxyXG5cclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSA+IHRkLFxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pID4gdGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI0NiwgMjM0KTsgLy8gQ2hvb3NlIHlvdXIgb3duIGNvbG9yIGhlcmVcclxufVxyXG5cclxudHIge1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG50aCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYWN0aW9uQnV0dG9uRWRpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxNDcsIDc2KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hY3Rpb25CdXR0b25TYXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIC5pY29uIHtcclxuLy8gICBtYXJnaW4tbGVmdDogMTVweDtcclxuLy8gICBjb2xvcjogcmdiKDI0MSwgOTgsIDk4KTtcclxuLy8gfVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFBhZ2luYXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpIGE6aG92ZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGkgYSB7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGk6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoYWRvdy1jb2xvcjtcclxuICBtYXJnaW46IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgLmRpc2FibGVkIHNwYW4ge1xyXG4gIGNvbnRlbnQ6IFwiIFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDE5MSwgMTk3LCAyMDcpO1xyXG4gIG1hcmdpbi1yaWdodDogMTB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hhZG93LWNvbG9yO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIGEge1xyXG4gIGNvbnRlbnQ6IFwiIFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDE5MSwgMTk3LCAyMDcpO1xyXG4gIG1hcmdpbi1yaWdodDogMTB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hhZG93LWNvbG9yO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQgYSB7XHJcbiAgY29udGVudDogXCIgXCIgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTkxLCAxOTcsIDIwNyk7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoYWRvdy1jb2xvcjtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyBhOjpiZWZvcmUsXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMuZGlzYWJsZWQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCBhOjphZnRlcixcclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0LmRpc2FibGVkOjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL0BhdC1yb290XHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcGRvd24tcG9zaXRpb24ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1cHgsIDI1cHgsIDBweCk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBkaXYubW9kYWwtY2VudGVyIHtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDE4JTtcclxufVxyXG4iLCIkYmFzZS1jb2xvcjogcmdiKDI0MiwgMTUxLCAwKTtcclxuJHNoYWRvdy1jb2xvcjogcmdiKDIzMywgMjM1LCAyNDApO1xyXG4kZ3JlZW4tY29sb3I6ICMyMzkzNGM7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EthnicityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ethnicity',
                templateUrl: './ethnicity.component.html',
                styleUrls: ['./ethnicity.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"] }]; }, null); })();


/***/ }),

/***/ "HLcv":
/*!*********************************************************************!*\
  !*** ./src/app/panels/admin/library/category/category.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/productLibrary/product-library.service */ "YY25");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail/detail.component */ "VgVf");











function CategoryComponent_app_category_detail_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-category-detail", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function CategoryComponent_app_category_detail_1_Template_app_category_detail_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addNewProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", ctx_r0.action)("categoryId", ctx_r0.categoryId);
} }
function CategoryComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 36);
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r10.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CategoryComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    const notFound_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CategoryComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r12.label, " ");
} }
function CategoryComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_tr_44_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const category_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.categoryDetail(category_r13.category_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "View Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_tr_44_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const category_r13 = ctx.$implicit; const i_r14 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.deleteCategory(category_r13.category_id, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.config.itemsPerPage * ctx_r6.config.currentPage - ctx_r6.config.itemsPerPage + i_r14 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r13.category_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r13.category_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r13.isfeatured);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://storage.googleapis.com/lg-content/", category_r13.image_link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://storage.googleapis.com/lg-content/", category_r13.cover_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CategoryComponent_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageSize_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", pageSize_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSize_r18, " ");
} }
class CategoryComponent {
    constructor(spinner, toastr, router, productLibraryService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.router = router;
        this.productLibraryService = productLibraryService;
        this.isAddNewCategory = false;
        this.categories = [];
        this.fields = [
            { label: 'Name', fieldName: 'category_name' },
            { label: 'Description', fieldName: 'category_description' },
            { label: 'Featured', fieldName: 'isFeatured' },
            { label: 'Icon', fieldName: 'image_link' },
            { label: 'Cover', fieldName: 'cover_image' },
        ];
        this.p = 1;
        this.pageSizes = [1, 2, 5, 10, 25, 50];
        this.sort = {
            orderBy: 'category_name',
            sort: 'DESC',
        };
        this.keyword = 'name';
        this.search = [];
        // this.socketService.setupSocketConnection();
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
        };
        // this.customerData = this.customerData.slice();
        // this.getUsersSuggestion();
    }
    ngOnInit() {
        this.getCategories();
        // this.getAdminUsers();
    }
    pageChanged(event) {
        this.config.currentPage = event;
        this.getCategories();
    }
    navigateToOrderDetail(id) {
        this.router.navigate([`store/dashboard/order-detail`, id]);
    }
    changePageSize() {
        this.getCategories();
    }
    selectEvent(item) {
        this.search = [item];
    }
    onChangeSearch(search) {
        // this.sendUserSearch(search);
    }
    onFocused(e) {
        // do something
    }
    onEnter(e) {
        const userIds = [];
        this.search.map((item) => {
            userIds.push(item.id);
        });
        this.config['userIds'] = userIds;
        console.log(this.config);
        this.getCategories();
    }
    sortBy(orderBy, sort) {
        this.sort = {
            orderBy,
            sort,
        };
        this.getCategories();
    }
    getCategories() {
        this.spinner.show();
        this.productLibraryService.getCategoryByPagination(this.config, this.sort).subscribe((data) => {
            console.log(data);
            this.categories = data.data;
            this.config.totalItems = data.total;
            this.categories.map((p) => {
                if (p.image_link) {
                    p.image_link = p.image_link.replace('images/', '');
                }
            });
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    deleteCategory(categoryId, index) {
        this.spinner.show();
        this.productLibraryService.deleteCategoryById(categoryId).subscribe((data) => {
            this.categories.splice(index, 1);
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    addNewProduct() {
        this.action = 'create';
        this.isAddNewCategory = !this.isAddNewCategory;
    }
    categoryDetail(categoryId) {
        this.action = 'detail';
        this.categoryId = categoryId;
        this.isAddNewCategory = !this.isAddNewCategory;
    }
    //--------export to pdf start-----------------
    exportPdf() {
        __webpack_require__.e(/*! import() | jspdf */ "default~jspdf~jspdf-autotable").then(__webpack_require__.t.bind(null, /*! jspdf */ "5RHE", 7)).then((jsPDF) => {
            Promise.all(/*! import() | jspdf-autotable */[__webpack_require__.e("default~jspdf~jspdf-autotable"), __webpack_require__.e("jspdf-autotable")]).then(__webpack_require__.t.bind(null, /*! jspdf-autotable */ "DaQG", 7)).then((x) => {
                const doc = new jsPDF.default(0, 0);
                this.exportLst = [];
                if (this.categories) {
                    this.categories.forEach((data) => {
                        this.exportLst.push({
                            FirstName: data.firstName,
                            LastName: data.lastName,
                            Email: data.email,
                            Phone: data.phoneNumber,
                            Address: data.address1,
                            City: data.city,
                            Date: data.createdAt,
                        });
                    });
                    // this.driverService.exportDriversFilteredRecords(this.driverDetails).subscribe(data => {
                    //   data.lstDrivers.forEach((i) => {
                    //     this.exportLst.push({
                    //       FirstName: i.FirstName, LastName: i.LastName,
                    //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
                    //     })
                    //   });
                    doc.autoTable(this.exportColumns, this.exportLst);
                    // });
                }
                else {
                    // this.spinner.show();
                    // this.driverService.exportAllDrivers().subscribe(data => {
                    //   data.lstDrivers.forEach((i) => {
                    //     this.exportLst.push({
                    //       FirstName: i.FirstName, LastName: i.LastName,
                    //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
                    //     })
                    //   });
                    //   this.spinner.hide();
                    //   this.exportExcel(this.exportLst);
                    // });
                }
                //doc.autoTable(this.exportColumns, this.lstDrivers);
                doc.save('CustomerTable.pdf');
            });
        });
    }
    //--------export to pdf end-----------------
    //----------export to excel----start-----------------------
    exportToExcel() {
        //---------------------------------------------------------------
        this.exportLst = [];
        if (this.categories) {
            this.categories.forEach((data) => {
                this.exportLst.push({
                    FirstName: data.firstName,
                    LastName: data.lastName,
                    Email: data.email,
                    Phone: data.phoneNumber,
                    Address: data.address1,
                    City: data.city,
                    Date: data.createdAt,
                });
            });
            this.exportExcel(this.exportLst);
            // });
        }
        else {
        }
        //---------------------------------------------------------------
    }
    //--------------------------
    exportExcel(exportLst) {
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "EUZL", 7)).then((xlsx) => {
            if (this.exportLst.length > 0) {
                console.log(exportLst);
                const worksheet = xlsx.utils.json_to_sheet(exportLst);
                const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
                this.saveAsExcelFile(excelBuffer, 'customersDetails');
            }
        });
    }
    //--------------------------
    //--------------------------
    saveAsExcelFile(buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "Iab2", 7)).then((FileSaver) => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE,
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
    //--------------------------
    //----------export to excel----end-------------------------
    //---------------------------------------------
    //----------export to CSV----start-----------------------
    exportToCSV() {
        //---------------------------------------------------------------
        this.exportLst = [];
        if (this.categories) {
            this.categories.forEach((data) => {
                this.exportLst.push({
                    FirstName: data.firstName,
                    LastName: data.lastName,
                    Email: data.email,
                    Phone: data.phoneNumber,
                    Address: data.address1,
                    City: data.city,
                    Date: data.createdAt,
                });
            });
            this.exportCSV(this.exportLst);
            // });
        }
        else {
        }
        //---------------------------------------------------------------
    }
    //--------------------------
    exportCSV(exportLst) {
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "EUZL", 7)).then((xlsx) => {
            if (this.exportLst.length > 0) {
                console.log(exportLst);
                const worksheet = xlsx.utils.json_to_sheet(exportLst);
                const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
                this.saveAsCSVFile(excelBuffer, 'customersDetails');
            }
        });
    }
    //--------------------------
    //--------------------------
    saveAsCSVFile(buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "Iab2", 7)).then((FileSaver) => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.csv';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE,
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"])); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], decls: 53, vars: 12, consts: [[1, "modal-center"], [3, "action", "categoryId", "close", 4, "ngIf"], [1, "body"], [1, "table-top"], [1, "row"], [1, "col-md-3"], [1, "cust-heading"], [1, "heading"], [1, "col-md-9", "d-flex", "justify-content-end"], [1, "serch-sec", "p-1", "flex-fill", "d-flex", "justify-content-end"], [1, "resport-sec"], [1, "add-button", "m-2", 3, "routerLink", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "ml-1"], [1, "print-report", "m-1", 3, "routerLink", "click"], ["src", "../../../../../assets/fileicon/pdffile.png", "alt", "pdf", "width", "30", "height", "30", 1, "img-thumbnail"], ["src", "../../../../../assets/fileicon/excelfile.png", "alt", "excel", "width", "30", "height", "30", 1, "img-thumbnail"], ["src", "../../../../../assets/fileicon/csvfile.png", "alt", "csv", "width", "30", "height", "30", 1, "img-thumbnail"], [1, "flex-fill"], [1, "input-group", "border", "rounded-pill", "p-1"], [1, "input-group-prepend", "border-0"], [1, "col-auto"], [1, "fa", "fa-search", "h5", "pt-2"], [1, "form-control", "bg-none", "border-0", "p-0"], ["placeholder", "Enter the Product Name", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "table", "table-striped"], ["scope", "col", 4, "ngFor", "ngForOf"], ["class", "m-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "drp-select"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["responsive", "true", 1, "pagination", 3, "pageChange"], [3, "action", "categoryId", "close"], [3, "innerHTML"], ["scope", "col"], [1, "m-2"], ["scope", "row"], [1, "product-image"], ["onerror", "this.src='../../../../assets/category/images/fruits.jpg'", "alt", "LG", 1, "icon", 3, "src"], [1, "navbar-nav", "pl-3", "pr-3"], [1, "nav-item", "dropdown"], ["type", "button", "href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "rounded-pill", "button", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-position"], [1, "dropdown-item", 3, "click"], [3, "ngValue"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryComponent_app_category_detail_1_Template, 1, 2, "app-category-detail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_Template_a_click_12_listener() { return ctx.addNewProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add New Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Print Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_Template_a_click_20_listener() { return ctx.exportPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_Template_a_click_22_listener() { return ctx.exportToExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_Template_a_click_24_listener() { return ctx.exportToCSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ng-autocomplete", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function CategoryComponent_Template_ng_autocomplete_selected_32_listener($event) { return ctx.selectEvent($event); })("inputChanged", function CategoryComponent_Template_ng_autocomplete_inputChanged_32_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function CategoryComponent_Template_ng_autocomplete_inputFocused_32_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CategoryComponent_ng_template_33_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CategoryComponent_ng_template_35_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CategoryComponent_th_42_Template, 2, 1, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CategoryComponent_tr_44_Template, 23, 6, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoryComponent_Template_select_ngModelChange_49_listener($event) { return ctx.config.itemsPerPage = $event; })("change", function CategoryComponent_Template_select_change_49_listener() { return ctx.changePageSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CategoryComponent_option_50_Template, 2, 2, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "pagination-controls", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CategoryComponent_Template_pagination_controls_pageChange_52_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddNewCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.library)("searchKeyword", ctx.keyword)("itemTemplate", _r1)("notFoundTemplate", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 9, ctx.categories, ctx.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.config.itemsPerPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageSizes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["CategoryDetailComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]], styles: [".body[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 90vh;\n  padding: 30px;\n  overflow-x: auto;\n}\n\n.heading[_ngcontent-%COMP%] {\n  color: #f29700;\n  font-weight: 600;\n  padding-left: 40px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.btn-default[_ngcontent-%COMP%] {\n  font-family: Raleway-SemiBold;\n  font-size: 13px;\n  color: rgba(108, 88, 179, 0.75);\n  letter-spacing: 1px;\n  line-height: 15px;\n  border: 2px solid rgba(108, 89, 179, 0.75);\n  border-radius: 40px;\n  background: transparent;\n  transition: all 0.3s ease 0s;\n}\n\n.btn-default[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(108, 88, 179, 0.75);\n  border: 2px solid rgba(108, 89, 179, 0.75);\n}\n\n.add-button[_ngcontent-%COMP%] {\n  color: #f29700;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: #f29700 thin solid;\n  border-radius: 5px;\n  text-align: center;\n  color: #f29700;\n  width: 60px;\n  line-height: 30px;\n}\n\ninput[type=number][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > th[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > th[_ngcontent-%COMP%] {\n  background-color: #fcf6ea;\n}\n\ntr[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.actionButtonEdit[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  color: white;\n}\n\n.actionButtonSave[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a:hover {\n  border-radius: 30px;\n  background-color: #f29700;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a {\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li:not(:first-child):not(:last-child) {\n  width: 40px;\n  height: 40px;\n  line-height: 30px;\n  border-radius: 30px;\n  background-color: #e9ebf0;\n  margin: 5px;\n  text-align: center;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\n  background-color: #f29700 !important;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous .disabled span {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-left: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 30px;\n  padding-right: 30px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a::before, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous.disabled::before {\n  content: \" \";\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a::after, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next.disabled::after {\n  content: \" \";\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  min-width: 100px;\n  font-size: 0.75em;\n  color: white;\n  font-weight: 700;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: auto;\n}\n\n.dropdown-position[_ngcontent-%COMP%] {\n  transform: translate3d(-15px, 25px, 0px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2FkbWluL2xpYnJhcnkvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0NUVztFRFVYLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQUFGOztBQUdBO0VBQ0UsY0N0Q1c7QURzQ2I7O0FBR0E7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQzdDVztFRDhDWCxXQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTs7RUFFRSx3QkFBQTtBQUFGOztBQUdBOztFQUVFLHVCQUFBO0FBQUY7O0FBR0E7O0VBRUUseUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UseUJDM0ZXO0VENEZYLFlBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQVFBO0VBQ0UsbUJBQUE7RUFDQSx5QkMvR1c7QUQwR2I7O0FBUUE7RUFDRSxvQkFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDMUhhO0VEMkhiLFdBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0Usb0NBQUE7QUFMRjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkN4SWE7RUR5SWIsa0JBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ2xKYTtFRG1KYixrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFMRjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkM3SmE7RUQ4SmIsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBTEY7O0FBUUE7O0VBRUUsWUFBQTtBQUxGOztBQVFBOztFQUVFLFlBQUE7QUFMRjs7QUFTQTtFQUNFLHlCQzlLWTtFRCtLWixnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTkY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBT0E7RUFDRSx3Q0FBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvcGFuZWxzL2FkbWluL2xpYnJhcnkvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tZGVmYXVsdCB7XHJcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXktU2VtaUJvbGQ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiByZ2JhKDEwOCwgODgsIDE3OSwgMC43NSk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEwOCwgODksIDE3OSwgMC43NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcblxyXG4uYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTA4LCA4OCwgMTc5LCAwLjc1KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEwOCwgODksIDE3OSwgMC43NSk7XHJcbn1cclxuXHJcbi5hZGQtYnV0dG9uIHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6ICRiYXNlLWNvbG9yIHRoaW4gc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGQsXHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSA+IHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IC8vIENob29zZSB5b3VyIG93biBjb2xvciBoZXJlXHJcbn1cclxuXHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikgPiB0ZCxcclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSA+IHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNDYsIDIzNCk7IC8vIENob29zZSB5b3VyIG93biBjb2xvciBoZXJlXHJcbn1cclxuXHJcbnRyIHtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxudGgge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFjdGlvbkJ1dHRvbkVkaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMTQ3LCA3Nik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWN0aW9uQnV0dG9uU2F2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5wcm9kdWN0LWltYWdlIHtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyAuaWNvbiB7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbi8vICAgY29sb3I6IHJnYigyNDEsIDk4LCA5OCk7XHJcbi8vIH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLyBQYWdpbmF0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaSBhOmhvdmVyIHtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpIGEge1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzaGFkb3ctY29sb3I7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIC5kaXNhYmxlZCBzcGFuIHtcclxuICBjb250ZW50OiBcIiBcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxOTEsIDE5NywgMjA3KTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoYWRvdy1jb2xvcjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyBhIHtcclxuICBjb250ZW50OiBcIiBcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxOTEsIDE5NywgMjA3KTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoYWRvdy1jb2xvcjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IGEge1xyXG4gIGNvbnRlbnQ6IFwiIFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDE5MSwgMTk3LCAyMDcpO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzaGFkb3ctY29sb3I7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgYTo6YmVmb3JlLFxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQgYTo6YWZ0ZXIsXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dC5kaXNhYmxlZDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9AYXQtcm9vdFxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uZHJvcGRvd24tcG9zaXRpb24ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1cHgsIDI1cHgsIDBweCk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBkaXYubW9kYWwtY2VudGVyIHtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDE4JTtcclxufVxyXG4iLCIkYmFzZS1jb2xvcjogcmdiKDI0MiwgMTUxLCAwKTtcclxuJHNoYWRvdy1jb2xvcjogcmdiKDIzMywgMjM1LCAyNDApO1xyXG4kZ3JlZW4tY29sb3I6ICMyMzkzNGM7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category',
                templateUrl: './category.component.html',
                styleUrls: ['./category.component.scss'],
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"] }]; }, null); })();


/***/ }),

/***/ "JYBg":
/*!****************************************************************!*\
  !*** ./src/app/panels/admin/library/library-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: LibraryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryRoutingModule", function() { return LibraryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _library_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library.component */ "hXTp");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "CpWP");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "HLcv");
/* harmony import */ var _brand_brand_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brand/brand.component */ "pIl8");
/* harmony import */ var _ethnicity_ethnicity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ethnicity/ethnicity.component */ "DQpC");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unit/unit.component */ "5XcL");










const routes = [
    {
        path: '',
        component: _library_component__WEBPACK_IMPORTED_MODULE_2__["LibraryComponent"],
        children: [
            { path: '', redirectTo: 'view-promotions', pathMatch: 'full' },
            {
                path: 'products',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"],
                pathMatch: 'full',
            },
            // {
            //   path: 'products/detail',
            //   component: ProductComponent,
            //   pathMatch: 'full',
            // },
            {
                path: 'categories',
                component: _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"],
                pathMatch: 'full',
            },
            {
                path: 'brands',
                component: _brand_brand_component__WEBPACK_IMPORTED_MODULE_5__["BrandComponent"],
                pathMatch: 'full',
            },
            {
                path: 'ethnicities',
                component: _ethnicity_ethnicity_component__WEBPACK_IMPORTED_MODULE_6__["EthnicityComponent"],
                pathMatch: 'full',
            },
            {
                path: 'units',
                component: _unit_unit_component__WEBPACK_IMPORTED_MODULE_7__["UnitComponent"],
                pathMatch: 'full',
            },
        ],
    },
];
class LibraryRoutingModule {
}
LibraryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LibraryRoutingModule });
LibraryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LibraryRoutingModule_Factory(t) { return new (t || LibraryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LibraryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibraryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "OSxD":
/*!********************************************************!*\
  !*** ./src/app/panels/admin/library/library.module.ts ***!
  \********************************************************/
/*! exports provided: LibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryModule", function() { return LibraryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_error_error_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/error/error.module */ "DPoA");
/* harmony import */ var _library_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library-routing.module */ "JYBg");
/* harmony import */ var _library_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./library.component */ "hXTp");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "CpWP");
/* harmony import */ var _product_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/detail/detail.component */ "/dEP");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category/category.component */ "HLcv");
/* harmony import */ var _category_detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category/detail/detail.component */ "VgVf");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./unit/unit.component */ "5XcL");
/* harmony import */ var _unit_detail_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./unit/detail/detail.component */ "suXm");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _brand_brand_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./brand/brand.component */ "pIl8");
/* harmony import */ var _brand_detail_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./brand/detail/detail.component */ "kPm8");
/* harmony import */ var _ethnicity_ethnicity_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ethnicity/ethnicity.component */ "DQpC");
/* harmony import */ var _ethnicity_detail_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ethnicity/detail/detail.component */ "AWcQ");




















class LibraryModule {
}
LibraryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LibraryModule });
LibraryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LibraryModule_Factory(t) { return new (t || LibraryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _shared_error_error_module__WEBPACK_IMPORTED_MODULE_3__["ErrorModule"],
            _library_routing_module__WEBPACK_IMPORTED_MODULE_4__["LibraryRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutocompleteLibModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LibraryModule, { declarations: [_library_component__WEBPACK_IMPORTED_MODULE_5__["LibraryComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
        _product_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"],
        _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"],
        _category_detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["CategoryDetailComponent"],
        _brand_brand_component__WEBPACK_IMPORTED_MODULE_14__["BrandComponent"],
        _brand_detail_detail_component__WEBPACK_IMPORTED_MODULE_15__["BrandDetailComponent"],
        _ethnicity_ethnicity_component__WEBPACK_IMPORTED_MODULE_16__["EthnicityComponent"],
        _ethnicity_detail_detail_component__WEBPACK_IMPORTED_MODULE_17__["EthnicityDetailComponent"],
        _unit_unit_component__WEBPACK_IMPORTED_MODULE_10__["UnitComponent"],
        _unit_detail_detail_component__WEBPACK_IMPORTED_MODULE_11__["UnitDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_error_error_module__WEBPACK_IMPORTED_MODULE_3__["ErrorModule"],
        _library_routing_module__WEBPACK_IMPORTED_MODULE_4__["LibraryRoutingModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutocompleteLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibraryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _library_component__WEBPACK_IMPORTED_MODULE_5__["LibraryComponent"],
                    _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
                    _product_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"],
                    _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"],
                    _category_detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["CategoryDetailComponent"],
                    _brand_brand_component__WEBPACK_IMPORTED_MODULE_14__["BrandComponent"],
                    _brand_detail_detail_component__WEBPACK_IMPORTED_MODULE_15__["BrandDetailComponent"],
                    _ethnicity_ethnicity_component__WEBPACK_IMPORTED_MODULE_16__["EthnicityComponent"],
                    _ethnicity_detail_detail_component__WEBPACK_IMPORTED_MODULE_17__["EthnicityDetailComponent"],
                    _unit_unit_component__WEBPACK_IMPORTED_MODULE_10__["UnitComponent"],
                    _unit_detail_detail_component__WEBPACK_IMPORTED_MODULE_11__["UnitDetailComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _shared_error_error_module__WEBPACK_IMPORTED_MODULE_3__["ErrorModule"],
                    _library_routing_module__WEBPACK_IMPORTED_MODULE_4__["LibraryRoutingModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutocompleteLibModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "VgVf":
/*!**************************************************************************!*\
  !*** ./src/app/panels/admin/library/category/detail/detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: CategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailComponent", function() { return CategoryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/productLibrary/product-library.service */ "YY25");
/* harmony import */ var _services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/ticket/ticket.service */ "agnC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/error/error.component */ "HZwm");










function CategoryDetailComponent_h3_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add New Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CategoryDetailComponent_h3_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Category Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CategoryDetailComponent_div_49_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDetailComponent_div_49_option_10_Template_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const category_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.getCategories(category_r10.category_id, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r10.category_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r10.category_name, " ");
} }
function CategoryDetailComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CategoryDetailComponent_div_49_Template_select_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.getCategories($event.target.value, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Category of level 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CategoryDetailComponent_div_49_option_10_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.categories[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r2.parent_category);
} }
function CategoryDetailComponent_div_50_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDetailComponent_div_50_option_10_Template_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const category_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.getCategories(category_r16.category_id, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r16.category_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r16.category_name, " ");
} }
function CategoryDetailComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CategoryDetailComponent_div_50_Template_select_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.getCategories($event.target.value, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Category of level 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CategoryDetailComponent_div_50_option_10_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.categories[1]);
} }
function CategoryDetailComponent_div_51_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDetailComponent_div_51_option_10_Template_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const category_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.getCategories(category_r22.category_id, 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r22.category_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r22.category_name, " ");
} }
function CategoryDetailComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CategoryDetailComponent_div_51_Template_select_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.getCategories($event.target.value, 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Category of level 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CategoryDetailComponent_div_51_option_10_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.categories[2]);
} }
function CategoryDetailComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDetailComponent_div_61_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const i_r28 = ctx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.deleteIconImage(i_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thumb_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", thumb_r27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CategoryDetailComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CategoryDetailComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDetailComponent_div_72_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const i_r34 = ctx.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.deleteCoverImage(i_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thumb_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", thumb_r33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CategoryDetailComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CategoryDetailComponent {
    constructor(spinner, toastr, productLibraryService, ticketService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.productLibraryService = productLibraryService;
        this.ticketService = ticketService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.upload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataList = [];
        this.Arr = Array;
        this.myFilesCover = [];
        this.myFilesThumbCover = [];
        this.formDataCover = new FormData();
        this.myFilesIcon = [];
        this.myFilesThumbIcon = [];
        this.formDataIcon = new FormData();
        // deleteImage(index) {
        //   this.myFiles.splice(index, 1);
        //   this.myFilesThumb.splice(index, 1);
        // }
        this.category = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            category_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            category_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            parent_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            isFeatured: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            image_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            cover_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
        }, { updateOn: 'change' });
        this.categories = [];
        this.ethnicities = [];
        this.brands = [];
        this.units = [];
    }
    ngOnInit() {
        // const token = JSON.parse(localStorage.getItem('user'))?.accessToken;
        // this.decoded = jwt_decode(token);
        // console.log(this.decoded);
        this.getCategories(0, 0);
        console.log(this.action);
        if (this.action === 'detail') {
            this.getCategoryById();
        }
    }
    onCoverChange(event) {
        if (event.target.files.length + this.myFilesThumbCover.length == 1) {
            for (var i = 0; i < event.target.files.length; i++) {
                var mimeType = event.target.files[i].type;
                console.log(mimeType);
                if (mimeType.match(/image\/*/) == null) {
                    this.toastr.error('you are only allowed to upload images', 'Error');
                    return;
                }
                if (event.target.files[i].size > 2048576) {
                    this.toastr.error('Image can not be greater than 2mb', 'Error');
                    return;
                }
                this.formDataCover.append(`image${i + 1}`, event.target.files[i], `image${i + 1}.png`);
                this.formDataCover.append('imageType', 'cover');
                this.myFilesCover.push(event.target.files[i]);
                this.category.controls.cover_image.setValue(`WebAssets/cover_${this.category.value.category_name}.jpeg`);
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[i]);
                reader.onload = (_event) => {
                    this.myFilesThumbCover.push(_event.target.result);
                };
                if (this.action === 'detail') {
                    this.addCoverImage();
                }
                console.log(this.formDataCover);
                console.log(event.target.files[i]);
            }
            console.log(this.myFilesThumbCover);
        }
        else {
            this.toastr.error('You can only add upto 1 Photos', 'Error');
        }
    }
    onIconChange(event) {
        if (event.target.files.length + this.myFilesThumbIcon.length == 1) {
            for (var i = 0; i < event.target.files.length; i++) {
                var mimeType = event.target.files[i].type;
                console.log(mimeType);
                if (mimeType.match(/image\/*/) == null) {
                    this.toastr.error('you are only allowed to upload images', 'Error');
                    return;
                }
                if (event.target.files[i].size > 2048576) {
                    this.toastr.error('Image can not be greater than 2mb', 'Error');
                    return;
                }
                this.formDataIcon.append(`image${i + 1}`, event.target.files[i], `image${i + 1}.png`);
                this.formDataIcon.append('imageType', 'icon');
                this.myFilesIcon.push(event.target.files[i]);
                this.category.controls.image_link.setValue(`WebAssets/icon_${this.category.value.category_name}.jpeg`);
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[i]);
                reader.onload = (_event) => {
                    this.myFilesThumbIcon.push(_event.target.result);
                };
                if (this.action === 'detail') {
                    this.addIconImage();
                }
                console.log(this.formDataIcon);
                console.log(event.target.files[i]);
            }
            console.log(this.myFilesThumbIcon);
        }
        else {
            this.toastr.error('You can only add upto 1 Photos', 'Error');
        }
    }
    get category_name() {
        return this.category.get('category_name');
    }
    get category_description() {
        return this.category.get('category_description');
    }
    get parent_category() {
        return this.category.get('parent_category');
    }
    get isFeatured() {
        return this.category.get('isFeatured');
    }
    get image_link() {
        return this.category.get('image_link');
    }
    get cover_image() {
        return this.category.get('cover_image');
    }
    onSubmit() {
        const group = this.category;
        console.log(group);
        if (this.category.valid) {
            console.log(group.value);
            console.log(this.formDataIcon.has('imageType'));
            console.log(this.formDataCover.has('imageType'));
            this.spinner.show();
            this.productLibraryService.createCategory(group.value).subscribe((data) => {
                console.log(data);
                if (this.formDataIcon.has('imageType')) {
                    this.formDataIcon.append(`categoryId`, data.result.category_id);
                    this.productLibraryService.addCategoryImage(this.formDataIcon).subscribe((data) => {
                        // this.toastr.success(data.message, 'Success');
                        this.spinner.hide();
                    }, (error) => {
                        this.toastr.error(error.error.message, 'Error');
                        this.spinner.hide();
                    });
                }
                if (this.formDataCover.has('imageType')) {
                    this.formDataCover.append(`categoryId`, data.result.category_id);
                    this.productLibraryService.addCategoryImage(this.formDataCover).subscribe((data) => {
                        // this.toastr.success(data.message, 'Success');
                        this.spinner.hide();
                    }, (error) => {
                        this.toastr.error(error.error.message, 'Error');
                        this.spinner.hide();
                    });
                }
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
        else {
            this.validateAllFormFields(group);
        }
    }
    update() {
        console.log('updating........');
        const group = this.category;
        group.controls.image_link.setValue(true);
        console.log(group);
        console.log(group.valid);
        delete group.value.image_link;
        delete group.value.cover_image;
        if (group.valid) {
            console.log(group.value);
            this.spinner.show();
            this.productLibraryService.updateCategory(group.value, this.categoryId).subscribe((data) => {
                console.log(data);
                this.spinner.hide();
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
        else {
            this.validateAllFormFields(group);
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                this.validateAllFormFields(control);
            }
        });
    }
    getCategories(parentCategory = 0, level = 0) {
        // this.selectedCategory = parentCategory;
        // console.log(this.selectedCategory);
        const queryParams = `?parentCategory=${parentCategory}`;
        this.productLibraryService.getCategories(queryParams).subscribe((data) => {
            this.categories[level] = data.body;
        });
    }
    getCategoryById() {
        this.spinner.show();
        this.productLibraryService.getCategoryById(this.categoryId).subscribe((data) => {
            console.log(data);
            this.spinner.hide();
            this.fillFormFields(data.body);
        });
    }
    fillFormFields(category) {
        console.log(category);
        const group = this.category;
        group.controls.category_name.setValue(category.category_name || '');
        group.controls.category_description.setValue(category.category_description || '');
        group.controls.isFeatured.setValue(category.isFeatured || '');
        group.controls.image_link.setValue(category.image_link || '');
        group.controls.cover_image.setValue(category.cover_image || '');
        if (category.image_link) {
            this.myFilesThumbIcon.push(`https://storage.googleapis.com/lg-content/${category.image_link}`);
        }
        if (category.cover_image) {
            this.myFilesThumbCover.push(`https://storage.googleapis.com/lg-content/${category.cover_image}`);
        }
    }
    deleteCoverImage(index) {
        this.spinner.show();
        this.productLibraryService.deleteCategoryImage(this.categoryId, 'cover').subscribe((data) => {
            this.myFilesCover.splice(index, 1);
            this.myFilesThumbCover.splice(index, 1);
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    addCoverImage() {
        console.log(11111111);
        this.formDataCover.append(`categoryId`, this.categoryId);
        this.productLibraryService.addCategoryImage(this.formDataCover).subscribe((data) => {
            console.log(222222);
            // this.toastr.success(data.message, 'Success');
            this.spinner.hide();
        }, (error) => {
            console.log(error);
            this.myFilesCover = [];
            this.myFilesThumbCover = [];
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    deleteIconImage(index) {
        this.spinner.show();
        this.productLibraryService.deleteCategoryImage(this.categoryId, 'icon').subscribe((data) => {
            this.myFilesIcon.splice(index, 1);
            this.myFilesThumbIcon.splice(index, 1);
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    addIconImage() {
        this.formDataIcon.append(`categoryId`, this.categoryId);
        this.productLibraryService.addCategoryImage(this.formDataIcon).subscribe((data) => {
            // this.toastr.success(data.message, 'Success');
            this.spinner.hide();
        }, (error) => {
            console.log(error);
            this.myFilesIcon = [];
            this.myFilesThumbIcon = [];
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
}
CategoryDetailComponent.ɵfac = function CategoryDetailComponent_Factory(t) { return new (t || CategoryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"])); };
CategoryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryDetailComponent, selectors: [["app-category-detail"]], inputs: { action: "action", categoryId: "categoryId" }, outputs: { close: "close", upload: "upload" }, decls: 77, vars: 13, consts: [[1, "body"], [1, "container-fluid"], [1, "pl-5", "pr-5", "pt-5", "d-flex", "justify-content-between"], [1, "icon", "fa", "fa-long-arrow-left", 3, "click"], [1, ""], [1, "btn", "rounded-pill", "close-button", 3, "click"], [1, "fa", "fa-close"], [1, "row", "p-5", "justify-content-center"], [1, "col-12"], [1, "p-2"], [1, "row"], [1, "col-12", "mb-5"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row", "section"], [1, "col-lg-6"], [1, "row", "pr-3"], [1, "col"], [1, "mb-3"], ["for", "basic-url", 1, "form-label", "pl-4", "mb-0"], [1, "inner-addon", "right-addon"], [1, "glyphicon", "fa", "fa-pencil-square-o", 2, "font-size", "24px"], ["type", "text ", "placeholder", "Category Name", "formControlName", "category_name", 1, "form-control", "input-text"], [3, "control"], ["type", "text ", "placeholder", "Category Description", "formControlName", "category_description", 1, "form-control", "input-text"], ["type", "checkbox", "placeholder", "Make it featured", "formControlName", "isFeatured", 1, "form-control", "input-text"], ["class", "col-12", 4, "ngIf"], [1, "row", "shadow", "p-3", "mb-2", "bg-white", "card"], [1, "mb-3", "d-flex", "justify-content-between"], ["for", "file-input"], [1, "fa", "fa-upload", "uploadIcon"], ["id", "file-input", "type", "file", "multiple", "", 1, "form-control", 2, "display", "none", 3, "change"], [1, "row", "d-flex", "justify-content-center"], ["class", "thumb", 4, "ngFor", "ngForOf"], ["for", "cover-input"], ["id", "cover-input", "type", "file", "multiple", "", 1, "form-control", 2, "display", "none", 3, "change"], [1, "row", "float-right"], ["type", "submit", 1, "btn", "rounded-pill", "button"], ["name", "category1", "formControlName", "parent_category", 1, "input-text", "form-select", "form-select-sm", "select", 3, "change"], ["value", "", "disabled", "", "selected", ""], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["name", "category2", "formControlName", "category_id", 1, "input-text", "form-select", "form-select-sm", "select", 3, "change"], ["name", "category3", "formControlName", "category_id", 1, "input-text", "form-select", "form-select-sm", "select", 3, "change"], [1, "thumb"], ["alt", "Cinque Terre", "width", "100%", "height", "100%", 1, "img-thumbnail", 3, "src"], [1, "fa", "fa-trash", "deleteIcon", 3, "click"], ["src", "../../../../../assets/store/image-placeholder.png", "alt", "Cinque Terre", "width", "100%", "height", "100%", 1, "img-thumbnail"]], template: function CategoryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDetailComponent_Template_i_click_3_listener() { return ctx.close.emit(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDetailComponent_Template_button_click_5_listener() { return ctx.close.emit(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CategoryDetailComponent_h3_12_Template, 2, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CategoryDetailComponent_h3_13_Template, 2, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CategoryDetailComponent_Template_form_ngSubmit_14_listener() { return ctx.action === "create" ? ctx.onSubmit() : ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Category Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Category Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Is Featured");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CategoryDetailComponent_div_49_Template, 12, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CategoryDetailComponent_div_50_Template, 11, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CategoryDetailComponent_div_51_Template, 11, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Category Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CategoryDetailComponent_Template_input_change_59_listener($event) { return ctx.onIconChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, CategoryDetailComponent_div_61_Template, 3, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, CategoryDetailComponent_div_62_Template, 2, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Category Cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CategoryDetailComponent_Template_input_change_70_listener($event) { return ctx.onCoverChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, CategoryDetailComponent_div_72_Template, 3, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, CategoryDetailComponent_div_73_Template, 2, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.category_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.category_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.isFeatured);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.categories[0] == null ? null : ctx.categories[0].length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.categories[1] == null ? null : ctx.categories[1].length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.categories[2] == null ? null : ctx.categories[2].length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myFilesThumbIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Arr(1 - ctx.myFilesThumbIcon.length).fill(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myFilesThumbCover);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Arr(1 - ctx.myFilesThumbCover.length).fill(1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["@media (min-width: 1140px) {\n  .body[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 14;\n    background-color: white;\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n  }\n}\n@media (max-width: 1139px) {\n  .body[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 14;\n    background-color: white;\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n    border-radius: 40px;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  color: #f29700;\n  font-size: 30px;\n  cursor: pointer;\n}\n.close-button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 16;\n  top: 10px;\n  right: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh3[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh4[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh5[_ngcontent-%COMP%] {\n  color: #f29700;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  border: #f29700 solid thin;\n  border-radius: 30px;\n  padding: 20px;\n}\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  outline: 0px;\n}\n.select[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  border: 0;\n}\n.button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  width: 220px;\n  padding: 10px;\n  font-size: 1.25em;\n  color: white;\n  font-weight: 700;\n}\n.inner-addon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.inner-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none;\n}\n.right-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n}\n.right-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  right: 0px;\n}\n\n.thumb[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n}\n.img-thumbnail[_ngcontent-%COMP%] {\n  height: 150px;\n  object-fit: cover;\n}\n.deleteIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  right: 10px;\n  top: 10px;\n  z-index: 3;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2FkbWluL2xpYnJhcnkvY2F0ZWdvcnkvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0EsMENBQUE7SUFHQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBRkY7QUFDRjtBQU1BO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtJQUNBLDBDQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0UsY0M5Qlc7RUQrQlgsZUFBQTtFQUNBLGVBQUE7QUFMRjtBQU9BO0VBQ0UseUJDbkNXO0VEb0NYLFlBQUE7QUFKRjtBQU9BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFKRjtBQU9BO0VBQ0UsY0MvQ1c7QUQyQ2I7QUFPQTtFQUNFLGNDbkRXO0FEK0NiO0FBT0E7RUFDRSxjQ3ZEVztBRG1EYjtBQU9BO0VBQ0UsY0MzRFc7QUR1RGI7QUFPQSwwQ0FBQTtBQUNBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFKRjtBQU1BO0VBQ0Usd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0FBSEY7QUFLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUZGO0FBS0E7RUFDRSxTQUFBO0FBRkY7QUFJQTtFQUNFLHlCQ2pGVztFRGtGWCxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREY7QUFHQTtFQUNFLGtCQUFBO0FBQUY7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDQTtFQUNFLG1CQUFBO0FBRUY7QUFBQTtFQUNFLFVBQUE7QUFHRjtBQUFBLDhEQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBR0Y7QUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUdGO0FBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9wYW5lbHMvYWRtaW4vbGlicmFyeS9jYXRlZ29yeS9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTE0MHB4KSB7XHJcbiAgLmJvZHkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIC8vIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEzOXB4KSB7XHJcbiAgLmJvZHkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxNjtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbmgzIHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbmg0IHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbmg1IHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKlRleHQgQm94KioqKioqKioqKioqKioqKioqKi9cclxuLmlucHV0LXRleHQge1xyXG4gIGJvcmRlcjogJGJhc2UtY29sb3Igc29saWQgdGhpbjtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuc2VsZWN0IHtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbi5zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgb3V0bGluZTogMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0IDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5pbm5lci1hZGRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5pbm5lci1hZGRvbiAuZ2x5cGhpY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4ucmlnaHQtYWRkb24gaW5wdXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuLnJpZ2h0LWFkZG9uIC5nbHlwaGljb24ge1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKkltYWdlKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4udGh1bWIge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltZy10aHVtYm5haWwge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5kZWxldGVJY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMTBweDtcclxuICB6LWluZGV4OiAzO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIiwiJGJhc2UtY29sb3I6IHJnYigyNDIsIDE1MSwgMCk7XHJcbiRzaGFkb3ctY29sb3I6IHJnYigyMzMsIDIzNSwgMjQwKTtcclxuJGdyZWVuLWNvbG9yOiAjMjM5MzRjO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.scss'],
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"] }, { type: _services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"] }]; }, { close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], upload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], categoryId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hXTp":
/*!***********************************************************!*\
  !*** ./src/app/panels/admin/library/library.component.ts ***!
  \***********************************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LibraryComponent {
    constructor() { }
    ngOnInit() {
    }
}
LibraryComponent.ɵfac = function LibraryComponent_Factory(t) { return new (t || LibraryComponent)(); };
LibraryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LibraryComponent, selectors: [["app-library"]], decls: 1, vars: 0, template: function LibraryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9hZG1pbi9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibraryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-library',
                templateUrl: './library.component.html',
                styleUrls: ['./library.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kPm8":
/*!***********************************************************************!*\
  !*** ./src/app/panels/admin/library/brand/detail/detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: BrandDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandDetailComponent", function() { return BrandDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/productLibrary/product-library.service */ "YY25");
/* harmony import */ var _services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/ticket/ticket.service */ "agnC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/error/error.component */ "HZwm");










function BrandDetailComponent_h3_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add New Brand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BrandDetailComponent_h3_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Brand Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BrandDetailComponent {
    constructor(spinner, toastr, productLibraryService, ticketService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.productLibraryService = productLibraryService;
        this.ticketService = ticketService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.upload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataList = [];
        this.Arr = Array;
        this.brand = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            brand_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        }, { updateOn: 'change' });
        this.ethnicities = [];
        this.brands = [];
        this.units = [];
    }
    ngOnInit() {
        // const token = JSON.parse(localStorage.getItem('user'))?.accessToken;
        // this.decoded = jwt_decode(token);
        // console.log(this.decoded);
        console.log(this.action);
        if (this.action === 'detail') {
            this.getBrandById();
        }
    }
    get brand_name() {
        return this.brand.get('brand_name');
    }
    onSubmit() {
        const group = this.brand;
        console.log(group);
        if (this.brand.valid) {
            console.log(group.value);
            this.spinner.show();
            this.productLibraryService.createBrand(group.value).subscribe((data) => {
                console.log(data);
                this.spinner.hide();
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
        else {
            this.validateAllFormFields(group);
        }
    }
    update() {
        console.log('updating........');
        const group = this.brand;
        console.log(group);
        console.log(group.valid);
        if (group.valid) {
            console.log(group.value);
            this.spinner.show();
            this.productLibraryService.updateBrand(group.value, this.brandId).subscribe((data) => {
                console.log(data);
                this.spinner.hide();
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
        else {
            this.validateAllFormFields(group);
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                this.validateAllFormFields(control);
            }
        });
    }
    getBrandById() {
        this.spinner.show();
        this.productLibraryService.getBrandById(this.brandId).subscribe((data) => {
            console.log(data);
            this.spinner.hide();
            this.fillFormFields(data.body);
        });
    }
    fillFormFields(brand) {
        console.log(brand);
        const group = this.brand;
        group.controls.brand_name.setValue(brand.brand_name || '');
    }
}
BrandDetailComponent.ɵfac = function BrandDetailComponent_Factory(t) { return new (t || BrandDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"])); };
BrandDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrandDetailComponent, selectors: [["app-brand-detail"]], inputs: { action: "action", brandId: "brandId" }, outputs: { close: "close", upload: "upload" }, decls: 30, vars: 4, consts: [[1, "body"], [1, "container-fluid"], [1, "pl-5", "pr-5", "pt-5", "d-flex", "justify-content-between"], [1, "icon", "fa", "fa-long-arrow-left", 3, "click"], [1, ""], [1, "btn", "rounded-pill", "close-button", 3, "click"], [1, "fa", "fa-close"], [1, "row", "p-5", "justify-content-center"], [1, "col-12"], [1, "p-2"], [1, "row"], [1, "col-12", "mb-5"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row", "section"], [1, "col-lg-6"], [1, "row", "pr-3"], [1, "col"], [1, "mb-3"], ["for", "basic-url", 1, "form-label", "pl-4", "mb-0"], [1, "inner-addon", "right-addon"], [1, "glyphicon", "fa", "fa-pencil-square-o", 2, "font-size", "24px"], ["type", "text ", "placeholder", "Brand Name", "formControlName", "brand_name", 1, "form-control", "input-text"], [3, "control"], [1, "row", "float-right"], ["type", "submit", 1, "btn", "rounded-pill", "button"]], template: function BrandDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandDetailComponent_Template_i_click_3_listener() { return ctx.close.emit(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandDetailComponent_Template_button_click_5_listener() { return ctx.close.emit(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BrandDetailComponent_h3_12_Template, 2, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BrandDetailComponent_h3_13_Template, 2, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BrandDetailComponent_Template_form_ngSubmit_14_listener() { return ctx.action === "create" ? ctx.onSubmit() : ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Brand Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.brand_name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]], styles: ["@media (min-width: 1140px) {\n  .body[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 14;\n    background-color: white;\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n  }\n}\n@media (max-width: 1139px) {\n  .body[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 14;\n    background-color: white;\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n    border-radius: 40px;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  color: #f29700;\n  font-size: 30px;\n  cursor: pointer;\n}\n.close-button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 16;\n  top: 10px;\n  right: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh3[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh4[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh5[_ngcontent-%COMP%] {\n  color: #f29700;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  border: #f29700 solid thin;\n  border-radius: 30px;\n  padding: 20px;\n}\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  outline: 0px;\n}\n.select[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  border: 0;\n}\n.button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  width: 220px;\n  padding: 10px;\n  font-size: 1.25em;\n  color: white;\n  font-weight: 700;\n}\n.inner-addon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.inner-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none;\n}\n.right-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n}\n.right-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  right: 0px;\n}\n\n.thumb[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n}\n.img-thumbnail[_ngcontent-%COMP%] {\n  height: 150px;\n  object-fit: cover;\n}\n.deleteIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  right: 10px;\n  top: 10px;\n  z-index: 3;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2FkbWluL2xpYnJhcnkvYnJhbmQvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0EsMENBQUE7SUFHQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBRkY7QUFDRjtBQU1BO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtJQUNBLDBDQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0UsY0M5Qlc7RUQrQlgsZUFBQTtFQUNBLGVBQUE7QUFMRjtBQU9BO0VBQ0UseUJDbkNXO0VEb0NYLFlBQUE7QUFKRjtBQU9BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFKRjtBQU9BO0VBQ0UsY0MvQ1c7QUQyQ2I7QUFPQTtFQUNFLGNDbkRXO0FEK0NiO0FBT0E7RUFDRSxjQ3ZEVztBRG1EYjtBQU9BO0VBQ0UsY0MzRFc7QUR1RGI7QUFPQSwwQ0FBQTtBQUNBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFKRjtBQU1BO0VBQ0Usd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0FBSEY7QUFLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUZGO0FBS0E7RUFDRSxTQUFBO0FBRkY7QUFJQTtFQUNFLHlCQ2pGVztFRGtGWCxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREY7QUFHQTtFQUNFLGtCQUFBO0FBQUY7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDQTtFQUNFLG1CQUFBO0FBRUY7QUFBQTtFQUNFLFVBQUE7QUFHRjtBQUFBLDhEQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBR0Y7QUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUdGO0FBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9wYW5lbHMvYWRtaW4vbGlicmFyeS9icmFuZC9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTE0MHB4KSB7XHJcbiAgLmJvZHkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIC8vIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEzOXB4KSB7XHJcbiAgLmJvZHkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxNjtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbmgzIHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbmg0IHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbmg1IHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKlRleHQgQm94KioqKioqKioqKioqKioqKioqKi9cclxuLmlucHV0LXRleHQge1xyXG4gIGJvcmRlcjogJGJhc2UtY29sb3Igc29saWQgdGhpbjtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuc2VsZWN0IHtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbi5zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgb3V0bGluZTogMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0IDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5pbm5lci1hZGRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5pbm5lci1hZGRvbiAuZ2x5cGhpY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4ucmlnaHQtYWRkb24gaW5wdXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuLnJpZ2h0LWFkZG9uIC5nbHlwaGljb24ge1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKkltYWdlKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4udGh1bWIge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltZy10aHVtYm5haWwge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5kZWxldGVJY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMTBweDtcclxuICB6LWluZGV4OiAzO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIiwiJGJhc2UtY29sb3I6IHJnYigyNDIsIDE1MSwgMCk7XHJcbiRzaGFkb3ctY29sb3I6IHJnYigyMzMsIDIzNSwgMjQwKTtcclxuJGdyZWVuLWNvbG9yOiAjMjM5MzRjO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrandDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brand-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"] }, { type: _services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"] }]; }, { close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], upload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], brandId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "pIl8":
/*!***************************************************************!*\
  !*** ./src/app/panels/admin/library/brand/brand.component.ts ***!
  \***************************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/productLibrary/product-library.service */ "YY25");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail/detail.component */ "kPm8");











function BrandComponent_app_brand_detail_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-brand-detail", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function BrandComponent_app_brand_detail_1_Template_app_brand_detail_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addNewBrand(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", ctx_r0.action)("brandId", ctx_r0.brandId);
} }
function BrandComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 36);
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r10.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function BrandComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    const notFound_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function BrandComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r12.label, " ");
} }
function BrandComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandComponent_tr_46_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const brand_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.brandDetail(brand_r13.brand_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandComponent_tr_46_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const brand_r13 = ctx.$implicit; const i_r14 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.deleteBrand(brand_r13.brand_id, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.config.itemsPerPage * ctx_r6.config.currentPage - ctx_r6.config.itemsPerPage + i_r14 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brand_r13.brand_name);
} }
function BrandComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageSize_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", pageSize_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSize_r18, " ");
} }
class BrandComponent {
    constructor(spinner, toastr, router, productLibraryService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.router = router;
        this.productLibraryService = productLibraryService;
        this.isAddNewBrand = false;
        this.brands = [];
        this.fields = [
            { label: 'Name', fieldName: 'brand_name' },
        ];
        this.p = 1;
        this.pageSizes = [1, 2, 5, 10, 25, 50];
        this.sort = {
            orderBy: 'brand_name',
            sort: 'ASC',
        };
        this.keyword = 'name';
        this.search = [];
        // this.socketService.setupSocketConnection();
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
        };
        // this.customerData = this.customerData.slice();
        // this.getUsersSuggestion();
    }
    ngOnInit() {
        this.getBrands();
        // this.getAdminUsers();
    }
    pageChanged(event) {
        this.config.currentPage = event;
        this.getBrands();
    }
    changePageSize() {
        this.getBrands();
    }
    selectEvent(item) {
        this.search = [item];
    }
    onChangeSearch(search) {
        // this.sendUserSearch(search);
    }
    onFocused(e) {
        // do something
    }
    onEnter(e) {
        const userIds = [];
        this.search.map((item) => {
            userIds.push(item.id);
        });
        this.config['userIds'] = userIds;
        console.log(this.config);
        this.getBrands();
    }
    sortBy(orderBy, sort) {
        this.sort = {
            orderBy,
            sort,
        };
        this.getBrands();
    }
    getBrands() {
        this.spinner.show();
        this.productLibraryService.getBrandByPagination(this.config, this.sort).subscribe((data) => {
            console.log(data);
            this.brands = data.data;
            this.config.totalItems = data.total;
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    deleteBrand(brandId, index) {
        this.spinner.show();
        this.productLibraryService.deleteBrandById(brandId).subscribe((data) => {
            this.brands.splice(index, 1);
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    addNewBrand() {
        this.action = 'create';
        this.isAddNewBrand = !this.isAddNewBrand;
    }
    brandDetail(brandId) {
        this.action = 'detail';
        this.brandId = brandId;
        this.isAddNewBrand = !this.isAddNewBrand;
    }
    //--------export to pdf start-----------------
    exportPdf() {
        __webpack_require__.e(/*! import() | jspdf */ "default~jspdf~jspdf-autotable").then(__webpack_require__.t.bind(null, /*! jspdf */ "5RHE", 7)).then((jsPDF) => {
            Promise.all(/*! import() | jspdf-autotable */[__webpack_require__.e("default~jspdf~jspdf-autotable"), __webpack_require__.e("jspdf-autotable")]).then(__webpack_require__.t.bind(null, /*! jspdf-autotable */ "DaQG", 7)).then((x) => {
                const doc = new jsPDF.default(0, 0);
                this.exportLst = [];
                if (this.brands) {
                    this.brands.forEach((data) => {
                        this.exportLst.push({
                            FirstName: data.firstName,
                            LastName: data.lastName,
                            Email: data.email,
                            Phone: data.phoneNumber,
                            Address: data.address1,
                            City: data.city,
                            Date: data.createdAt,
                        });
                    });
                    // this.driverService.exportDriversFilteredRecords(this.driverDetails).subscribe(data => {
                    //   data.lstDrivers.forEach((i) => {
                    //     this.exportLst.push({
                    //       FirstName: i.FirstName, LastName: i.LastName,
                    //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
                    //     })
                    //   });
                    doc.autoTable(this.exportColumns, this.exportLst);
                    // });
                }
                else {
                    // this.spinner.show();
                    // this.driverService.exportAllDrivers().subscribe(data => {
                    //   data.lstDrivers.forEach((i) => {
                    //     this.exportLst.push({
                    //       FirstName: i.FirstName, LastName: i.LastName,
                    //       EmailAddress: i.EmailAddress, PhoneNumber: i.PhoneNumber
                    //     })
                    //   });
                    //   this.spinner.hide();
                    //   this.exportExcel(this.exportLst);
                    // });
                }
                //doc.autoTable(this.exportColumns, this.lstDrivers);
                doc.save('CustomerTable.pdf');
            });
        });
    }
    //--------export to pdf end-----------------
    //----------export to excel----start-----------------------
    exportToExcel() {
        //---------------------------------------------------------------
        this.exportLst = [];
        if (this.brands) {
            this.brands.forEach((data) => {
                this.exportLst.push({
                    FirstName: data.firstName,
                    LastName: data.lastName,
                    Email: data.email,
                    Phone: data.phoneNumber,
                    Address: data.address1,
                    City: data.city,
                    Date: data.createdAt,
                });
            });
            this.exportExcel(this.exportLst);
            // });
        }
        else {
        }
        //---------------------------------------------------------------
    }
    //--------------------------
    exportExcel(exportLst) {
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "EUZL", 7)).then((xlsx) => {
            if (this.exportLst.length > 0) {
                console.log(exportLst);
                const worksheet = xlsx.utils.json_to_sheet(exportLst);
                const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
                this.saveAsExcelFile(excelBuffer, 'customersDetails');
            }
        });
    }
    //--------------------------
    //--------------------------
    saveAsExcelFile(buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "Iab2", 7)).then((FileSaver) => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE,
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
    //--------------------------
    //----------export to excel----end-------------------------
    //---------------------------------------------
    //----------export to CSV----start-----------------------
    exportToCSV() {
        //---------------------------------------------------------------
        this.exportLst = [];
        if (this.brands) {
            this.brands.forEach((data) => {
                this.exportLst.push({
                    FirstName: data.firstName,
                    LastName: data.lastName,
                    Email: data.email,
                    Phone: data.phoneNumber,
                    Address: data.address1,
                    City: data.city,
                    Date: data.createdAt,
                });
            });
            this.exportCSV(this.exportLst);
            // });
        }
        else {
        }
        //---------------------------------------------------------------
    }
    //--------------------------
    exportCSV(exportLst) {
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "EUZL", 7)).then((xlsx) => {
            if (this.exportLst.length > 0) {
                console.log(exportLst);
                const worksheet = xlsx.utils.json_to_sheet(exportLst);
                const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
                this.saveAsCSVFile(excelBuffer, 'customersDetails');
            }
        });
    }
    //--------------------------
    //--------------------------
    saveAsCSVFile(buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "Iab2", 7)).then((FileSaver) => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.csv';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE,
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
}
BrandComponent.ɵfac = function BrandComponent_Factory(t) { return new (t || BrandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"])); };
BrandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrandComponent, selectors: [["app-brand"]], decls: 55, vars: 12, consts: [[1, "modal-center"], [3, "action", "brandId", "close", 4, "ngIf"], [1, "body"], [1, "table-top"], [1, "row"], [1, "col-md-3"], [1, "cust-heading"], [1, "heading"], [1, "col-md-9", "d-flex", "justify-content-end"], [1, "serch-sec", "p-1", "flex-fill", "d-flex", "justify-content-end"], [1, "resport-sec"], [1, "add-button", "m-2", 3, "routerLink", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "ml-1"], [1, "print-report", "m-1", 3, "routerLink", "click"], ["src", "../../../../../assets/fileicon/pdffile.png", "alt", "pdf", "width", "30", "height", "30", 1, "img-thumbnail"], ["src", "../../../../../assets/fileicon/excelfile.png", "alt", "excel", "width", "30", "height", "30", 1, "img-thumbnail"], ["src", "../../../../../assets/fileicon/csvfile.png", "alt", "csv", "width", "30", "height", "30", 1, "img-thumbnail"], [1, "flex-fill"], [1, "input-group", "border", "rounded-pill", "p-1"], [1, "input-group-prepend", "border-0"], [1, "col-auto"], [1, "fa", "fa-search", "h5", "pt-2"], [1, "form-control", "bg-none", "border-0", "p-0"], ["placeholder", "Enter the Product Name", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "table", "table-striped"], ["scope", "col", 4, "ngFor", "ngForOf"], ["class", "m-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "drp-select"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["responsive", "true", 1, "pagination", 3, "pageChange"], [3, "action", "brandId", "close"], [3, "innerHTML"], ["scope", "col"], [1, "m-2"], ["scope", "row"], [1, "navbar-nav", "pl-3", "pr-3"], [1, "nav-item", "dropdown"], ["type", "button", "href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "rounded-pill", "button", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-position"], [1, "dropdown-item", 3, "click"], [3, "ngValue"]], template: function BrandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BrandComponent_app_brand_detail_1_Template, 1, 2, "app-brand-detail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandComponent_Template_a_click_12_listener() { return ctx.addNewBrand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add New Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Print Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandComponent_Template_a_click_20_listener() { return ctx.exportPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandComponent_Template_a_click_22_listener() { return ctx.exportToExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandComponent_Template_a_click_24_listener() { return ctx.exportToCSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ng-autocomplete", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function BrandComponent_Template_ng_autocomplete_selected_32_listener($event) { return ctx.selectEvent($event); })("inputChanged", function BrandComponent_Template_ng_autocomplete_inputChanged_32_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function BrandComponent_Template_ng_autocomplete_inputFocused_32_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BrandComponent_ng_template_33_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, BrandComponent_ng_template_35_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, BrandComponent_th_42_Template, 2, 1, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, BrandComponent_tr_46_Template, 15, 2, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BrandComponent_Template_select_ngModelChange_51_listener($event) { return ctx.config.itemsPerPage = $event; })("change", function BrandComponent_Template_select_change_51_listener() { return ctx.changePageSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, BrandComponent_option_52_Template, 2, 2, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "pagination-controls", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function BrandComponent_Template_pagination_controls_pageChange_54_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddNewBrand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.library)("searchKeyword", ctx.keyword)("itemTemplate", _r1)("notFoundTemplate", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](47, 9, ctx.brands, ctx.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.config.itemsPerPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageSizes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["BrandDetailComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]], styles: [".body[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 90vh;\n  padding: 30px;\n  overflow-x: auto;\n}\n\n.heading[_ngcontent-%COMP%] {\n  color: #f29700;\n  font-weight: 600;\n  padding-left: 40px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.btn-default[_ngcontent-%COMP%] {\n  font-family: Raleway-SemiBold;\n  font-size: 13px;\n  color: rgba(108, 88, 179, 0.75);\n  letter-spacing: 1px;\n  line-height: 15px;\n  border: 2px solid rgba(108, 89, 179, 0.75);\n  border-radius: 40px;\n  background: transparent;\n  transition: all 0.3s ease 0s;\n}\n\n.btn-default[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(108, 88, 179, 0.75);\n  border: 2px solid rgba(108, 89, 179, 0.75);\n}\n\n.add-button[_ngcontent-%COMP%] {\n  color: #f29700;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: #f29700 thin solid;\n  border-radius: 5px;\n  text-align: center;\n  color: #f29700;\n  width: 60px;\n  line-height: 30px;\n}\n\ninput[type=number][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > th[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > th[_ngcontent-%COMP%] {\n  background-color: #fcf6ea;\n}\n\ntr[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.actionButtonEdit[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  color: white;\n}\n\n.actionButtonSave[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a:hover {\n  border-radius: 30px;\n  background-color: #f29700;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a {\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li:not(:first-child):not(:last-child) {\n  width: 40px;\n  height: 40px;\n  line-height: 30px;\n  border-radius: 30px;\n  background-color: #e9ebf0;\n  margin: 5px;\n  text-align: center;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\n  background-color: #f29700 !important;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous .disabled span {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-left: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 30px;\n  padding-right: 30px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a::before, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous.disabled::before {\n  content: \" \";\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a::after, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next.disabled::after {\n  content: \" \";\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  min-width: 100px;\n  font-size: 0.75em;\n  color: white;\n  font-weight: 700;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: auto;\n  cursor: pointer;\n}\n\n.dropdown-position[_ngcontent-%COMP%] {\n  transform: translate3d(-15px, 25px, 0px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2FkbWluL2xpYnJhcnkvYnJhbmQvYnJhbmQuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0NUVztFRFVYLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQUFGOztBQUdBO0VBQ0UsY0N0Q1c7QURzQ2I7O0FBR0E7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQzdDVztFRDhDWCxXQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTs7RUFFRSx3QkFBQTtBQUFGOztBQUdBOztFQUVFLHVCQUFBO0FBQUY7O0FBR0E7O0VBRUUseUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UseUJDM0ZXO0VENEZYLFlBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQVFBO0VBQ0UsbUJBQUE7RUFDQSx5QkMvR1c7QUQwR2I7O0FBUUE7RUFDRSxvQkFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDMUhhO0VEMkhiLFdBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0Usb0NBQUE7QUFMRjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkN4SWE7RUR5SWIsa0JBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ2xKYTtFRG1KYixrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFMRjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkM3SmE7RUQ4SmIsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBTEY7O0FBUUE7O0VBRUUsWUFBQTtBQUxGOztBQVFBOztFQUVFLFlBQUE7QUFMRjs7QUFTQTtFQUNFLHlCQzlLWTtFRCtLWixnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTkY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUxGOztBQU9BO0VBQ0Usd0NBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9hZG1pbi9saWJyYXJ5L2JyYW5kL2JyYW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLWRlZmF1bHQge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5LVNlbWlCb2xkO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogcmdiYSgxMDgsIDg4LCAxNzksIDAuNzUpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMDgsIDg5LCAxNzksIDAuNzUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5cclxuLmJ0bi1kZWZhdWx0OmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgODgsIDE3OSwgMC43NSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMDgsIDg5LCAxNzksIDAuNzUpO1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbiB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiAkYmFzZS1jb2xvciB0aGluIHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSA+IHRkLFxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkgPiB0aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyAvLyBDaG9vc2UgeW91ciBvd24gY29sb3IgaGVyZVxyXG59XHJcblxyXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pID4gdGQsXHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikgPiB0aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjQ2LCAyMzQpOyAvLyBDaG9vc2UgeW91ciBvd24gY29sb3IgaGVyZVxyXG59XHJcblxyXG50ciB7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbnRoIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hY3Rpb25CdXR0b25FZGl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDE0NywgNzYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFjdGlvbkJ1dHRvblNhdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucHJvZHVjdC1pbWFnZSB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gLmljb24ge1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4vLyAgIGNvbG9yOiByZ2IoMjQxLCA5OCwgOTgpO1xyXG4vLyB9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8gUGFnaW5hdGlvbiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGkgYTpob3ZlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaSBhIHtcclxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaTpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hhZG93LWNvbG9yO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyAuZGlzYWJsZWQgc3BhbiB7XHJcbiAgY29udGVudDogXCIgXCIgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTkxLCAxOTcsIDIwNyk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzaGFkb3ctY29sb3I7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgYSB7XHJcbiAgY29udGVudDogXCIgXCIgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTkxLCAxOTcsIDIwNyk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzaGFkb3ctY29sb3I7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCBhIHtcclxuICBjb250ZW50OiBcIiBcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxOTEsIDE5NywgMjA3KTtcclxuICBtYXJnaW4tbGVmdDogMTB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hhZG93LWNvbG9yO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIGE6OmJlZm9yZSxcclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cy5kaXNhYmxlZDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IGE6OmFmdGVyLFxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQuZGlzYWJsZWQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vQGF0LXJvb3RcclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWNvbG9yO1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93bi1wb3NpdGlvbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTVweCwgMjVweCwgMHB4KTtcclxufVxyXG5cclxuOjpuZy1kZWVwIGRpdi5tb2RhbC1jZW50ZXIge1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMTglO1xyXG59XHJcbiIsIiRiYXNlLWNvbG9yOiByZ2IoMjQyLCAxNTEsIDApO1xyXG4kc2hhZG93LWNvbG9yOiByZ2IoMjMzLCAyMzUsIDI0MCk7XHJcbiRncmVlbi1jb2xvcjogIzIzOTM0YztcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brand',
                templateUrl: './brand.component.html',
                styleUrls: ['./brand.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"] }]; }, null); })();


/***/ }),

/***/ "suXm":
/*!**********************************************************************!*\
  !*** ./src/app/panels/admin/library/unit/detail/detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: UnitDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitDetailComponent", function() { return UnitDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/productLibrary/product-library.service */ "YY25");
/* harmony import */ var _services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/ticket/ticket.service */ "agnC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/error/error.component */ "HZwm");










function UnitDetailComponent_h3_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add New Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UnitDetailComponent_h3_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unit Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UnitDetailComponent {
    constructor(spinner, toastr, productLibraryService, ticketService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.productLibraryService = productLibraryService;
        this.ticketService = ticketService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.upload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataList = [];
        this.Arr = Array;
        this.unit = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            unit_short_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            unit_long_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        }, { updateOn: 'change' });
    }
    ngOnInit() {
        // const token = JSON.parse(localStorage.getItem('user'))?.accessToken;
        // this.decoded = jwt_decode(token);
        // console.log(this.decoded);
        console.log(this.action);
        if (this.action === 'detail') {
            this.getUnitById();
        }
    }
    get unit_short_name() {
        return this.unit.get('unit_short_name');
    }
    get unit_long_name() {
        return this.unit.get('unit_long_name');
    }
    onSubmit() {
        const group = this.unit;
        console.log(group);
        if (this.unit.valid) {
            console.log(group.value);
            this.spinner.show();
            this.productLibraryService.createUnit(group.value).subscribe((data) => {
                console.log(data);
                this.spinner.hide();
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
        else {
            this.validateAllFormFields(group);
        }
    }
    update() {
        console.log('updating........');
        const group = this.unit;
        console.log(group);
        console.log(group.valid);
        if (group.valid) {
            console.log(group.value);
            this.spinner.show();
            this.productLibraryService.updateUnit(group.value, this.unitId).subscribe((data) => {
                console.log(data);
                this.spinner.hide();
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                this.spinner.hide();
            });
        }
        else {
            this.validateAllFormFields(group);
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                this.validateAllFormFields(control);
            }
        });
    }
    getUnitById() {
        this.spinner.show();
        this.productLibraryService.getUnitById(this.unitId).subscribe((data) => {
            console.log(data);
            this.spinner.hide();
            this.fillFormFields(data.body);
        });
    }
    fillFormFields(unit) {
        console.log(unit);
        const group = this.unit;
        group.controls.unit_short_name.setValue(unit.unit_short_name || '');
        group.controls.unit_long_name.setValue(unit.unit_long_name || '');
    }
}
UnitDetailComponent.ɵfac = function UnitDetailComponent_Factory(t) { return new (t || UnitDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"])); };
UnitDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnitDetailComponent, selectors: [["app-unit-detail"]], inputs: { action: "action", unitId: "unitId" }, outputs: { close: "close", upload: "upload" }, decls: 40, vars: 5, consts: [[1, "body"], [1, "container-fluid"], [1, "pl-5", "pr-5", "pt-5", "d-flex", "justify-content-between"], [1, "icon", "fa", "fa-long-arrow-left", 3, "click"], [1, ""], [1, "btn", "rounded-pill", "close-button", 3, "click"], [1, "fa", "fa-close"], [1, "row", "p-5", "justify-content-center"], [1, "col-12"], [1, "p-2"], [1, "row"], [1, "col-12", "mb-5"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row", "section"], [1, "col-lg-6"], [1, "row", "pr-3"], [1, "col"], [1, "mb-3"], ["for", "basic-url", 1, "form-label", "pl-4", "mb-0"], [1, "inner-addon", "right-addon"], [1, "glyphicon", "fa", "fa-pencil-square-o", 2, "font-size", "24px"], ["type", "text ", "placeholder", "Unit Short Name", "formControlName", "unit_short_name", 1, "form-control", "input-text"], [3, "control"], ["type", "text ", "placeholder", "Unit long Name", "formControlName", "unit_long_name", 1, "form-control", "input-text"], [1, "row", "float-right"], ["type", "submit", 1, "btn", "rounded-pill", "button"]], template: function UnitDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitDetailComponent_Template_i_click_3_listener() { return ctx.close.emit(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitDetailComponent_Template_button_click_5_listener() { return ctx.close.emit(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UnitDetailComponent_h3_12_Template, 2, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UnitDetailComponent_h3_13_Template, 2, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UnitDetailComponent_Template_form_ngSubmit_14_listener() { return ctx.action === "create" ? ctx.onSubmit() : ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Unit Short Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Unit Long Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.unit_short_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.unit_long_name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]], styles: ["@media (min-width: 1140px) {\n  .body[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 14;\n    background-color: white;\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n  }\n}\n@media (max-width: 1139px) {\n  .body[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 14;\n    background-color: white;\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n    border-radius: 40px;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  color: #f29700;\n  font-size: 30px;\n  cursor: pointer;\n}\n.close-button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 16;\n  top: 10px;\n  right: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh3[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh4[_ngcontent-%COMP%] {\n  color: #f29700;\n}\nh5[_ngcontent-%COMP%] {\n  color: #f29700;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  border: #f29700 solid thin;\n  border-radius: 30px;\n  padding: 20px;\n}\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  outline: 0px;\n}\n.select[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  border: 0;\n}\n.button[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  width: 220px;\n  padding: 10px;\n  font-size: 1.25em;\n  color: white;\n  font-weight: 700;\n}\n.inner-addon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.inner-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none;\n}\n.right-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n}\n.right-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  right: 0px;\n}\n\n.thumb[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n}\n.img-thumbnail[_ngcontent-%COMP%] {\n  height: 150px;\n  object-fit: cover;\n}\n.deleteIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  right: 10px;\n  top: 10px;\n  z-index: 3;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2FkbWluL2xpYnJhcnkvdW5pdC9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSwwQ0FBQTtJQUdBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUFGRjtBQUNGO0FBTUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0EsMENBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFKRjtBQUNGO0FBT0E7RUFDRSxjQzlCVztFRCtCWCxlQUFBO0VBQ0EsZUFBQTtBQUxGO0FBT0E7RUFDRSx5QkNuQ1c7RURvQ1gsWUFBQTtBQUpGO0FBT0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUpGO0FBT0E7RUFDRSxjQy9DVztBRDJDYjtBQU9BO0VBQ0UsY0NuRFc7QUQrQ2I7QUFPQTtFQUNFLGNDdkRXO0FEbURiO0FBT0E7RUFDRSxjQzNEVztBRHVEYjtBQU9BLDBDQUFBO0FBQ0E7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUpGO0FBTUE7RUFDRSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7QUFIRjtBQUtBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRkY7QUFLQTtFQUNFLFNBQUE7QUFGRjtBQUlBO0VBQ0UseUJDakZXO0VEa0ZYLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdBO0VBQ0Usa0JBQUE7QUFBRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQUFBO0VBQ0UsVUFBQTtBQUdGO0FBQUEsOERBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFHRiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9hZG1pbi9saWJyYXJ5L3VuaXQvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuQG1lZGlhIChtaW4td2lkdGg6IDExNDBweCkge1xyXG4gIC5ib2R5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAvLyBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgLy8gbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMzlweCkge1xyXG4gIC5ib2R5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmljb24ge1xyXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jbG9zZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTY7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKipUZXh0IEJveCoqKioqKioqKioqKioqKioqKiovXHJcbi5pbnB1dC10ZXh0IHtcclxuICBib3JkZXI6ICRiYXNlLWNvbG9yIHNvbGlkIHRoaW47XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG4uc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG91dGxpbmU6IDBweDtcclxufVxyXG5cclxuLnNlbGVjdCA6Zm9jdXMge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uaW5uZXItYWRkb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5uZXItYWRkb24gLmdseXBoaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLnJpZ2h0LWFkZG9uIGlucHV0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5yaWdodC1hZGRvbiAuZ2x5cGhpY29uIHtcclxuICByaWdodDogMHB4O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKipJbWFnZSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLnRodW1iIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbWctdGh1bWJuYWlsIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uZGVsZXRlSWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDEwcHg7XHJcbiAgei1pbmRleDogMztcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiIsIiRiYXNlLWNvbG9yOiByZ2IoMjQyLCAxNTEsIDApO1xyXG4kc2hhZG93LWNvbG9yOiByZ2IoMjMzLCAyMzUsIDI0MCk7XHJcbiRncmVlbi1jb2xvcjogIzIzOTM0YztcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unit-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.scss'],
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _services_productLibrary_product_library_service__WEBPACK_IMPORTED_MODULE_4__["ProductLibraryService"] }, { type: _services_ticket_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"] }]; }, { close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], upload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unitId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=library-library-module.js.map