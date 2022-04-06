(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module"],{

/***/ "Baki":
/*!*********************************************************************************!*\
  !*** ./src/app/panels/admin/inventory/all-inventory/all-inventory.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AllInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllInventoryComponent", function() { return AllInventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "oOf3");









function AllInventoryComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 33);
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r7.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AllInventoryComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 33);
} if (rf & 2) {
    const notFound_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AllInventoryComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r9.label, " ");
} }
function AllInventoryComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "view detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.config.itemsPerPage * ctx_r5.config.currentPage - ctx_r5.config.itemsPerPage + i_r11 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r10.productname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r10.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r10.ethnicity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r10.imagelink);
} }
function AllInventoryComponent_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageSize_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", pageSize_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSize_r12, " ");
} }
class AllInventoryComponent {
    constructor(spinner, toastr, router) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.router = router;
        this.products = [
            {
                productname: 'Apple, Gala',
                category: 'Fruits',
                ethnicity: 'Asina',
                imagelink: 'http://www.com',
            },
            {
                productname: 'Apple, Gala',
                category: 'Fruits',
                ethnicity: 'Asina',
                imagelink: 'http://www.com',
            },
            {
                productname: 'Apple, Gala',
                category: 'Fruits',
                ethnicity: 'Asina',
                imagelink: 'http://www.com',
            },
            {
                productname: 'Apple, Gala',
                category: 'Fruits',
                ethnicity: 'Asina',
                imagelink: 'http://www.com',
            },
            {
                productname: 'Apple, Gala',
                category: 'Fruits',
                ethnicity: 'Asina',
                imagelink: 'http://www.com',
            },
        ];
        this.fields = [
            { label: 'Name', fieldName: 'name' },
            { label: 'Category', fieldName: 'category' },
            { label: 'Ethnicity', fieldName: 'ethnicity' },
            { label: 'Image', fieldName: 'imagelink' },
            { label: 'Detail', fieldName: 'detail' },
        ];
        this.p = 1;
        this.pageSizes = [1, 2, 5, 10, 25, 50];
        this.sort = {
            orderBy: 'createdAt',
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
        // this.getTickets();
        // this.getAdminUsers();
    }
    pageChanged(event) {
        this.config.currentPage = event;
        // this.getTickets();
    }
    navigateToOrderDetail(id) {
        this.router.navigate([`store/dashboard/order-detail`, id]);
    }
    changePageSize() {
        // this.getTickets();
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
        this.getTickets();
    }
    sortBy(orderBy, sort) {
        this.sort = {
            orderBy,
            sort,
        };
        this.getTickets();
    }
    getTickets() {
        // this.spinner.show();
        // const filter = {};
        // this.ticketService
        //   .getAllTickets(this.config.currentPage, this.config.itemsPerPage, filter, this.sort)
        //   .subscribe(
        //     (data) => {
        //       console.log(data);
        //       this.tickets = data.data;
        //       this.config.totalItems = data.total;
        //       this.spinner.hide();
        //     },
        //     (error) => {
        //       this.toastr.error(error.error.message, 'Error');
        //       this.spinner.hide();
        //     }
        //   );
    }
    updateAssignee(ticketId, userId, index) {
        // this.spinner.show();
        // const payload = {
        //   assignedTo: userId,
        // };
        // console.log(ticketId, userId);
        // this.ticketService.updateTicket(ticketId, payload).subscribe(
        //   (data) => {
        //     console.log(data);
        //     this.tickets[index].assigneefirstname = this.adminUsers.find(
        //       (it) => it.id == userId
        //     ).firstname;
        //     this.tickets[index].assigneelastname = this.adminUsers.find(
        //       (it) => it.id == userId
        //     ).lastname;
        //     this.spinner.hide();
        //   },
        //   (error) => {
        //     this.toastr.error(error.error.message, 'Error');
        //     this.spinner.hide();
        //   }
        // );
    }
    addNewProduct() { }
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
AllInventoryComponent.ɵfac = function AllInventoryComponent_Factory(t) { return new (t || AllInventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AllInventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllInventoryComponent, selectors: [["app-all-inventory"]], decls: 51, vars: 11, consts: [[1, "body"], [1, "table-top"], [1, "row"], [1, "col-md-3"], [1, "cust-heading"], [1, "heading"], [1, "col-md-9", "d-flex", "justify-content-end"], [1, "serch-sec", "p-1", "flex-fill", "d-flex", "justify-content-end"], [1, "resport-sec"], [1, "add-button", "m-2", 3, "routerLink", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "ml-1"], [1, "print-report", "m-1", 3, "routerLink", "click"], ["src", "../../../../../assets/fileicon/pdffile.png", "alt", "pdf", "width", "30", "height", "30", 1, "img-thumbnail"], ["src", "../../../../../assets/fileicon/excelfile.png", "alt", "excel", "width", "30", "height", "30", 1, "img-thumbnail"], ["src", "../../../../../assets/fileicon/csvfile.png", "alt", "csv", "width", "30", "height", "30", 1, "img-thumbnail"], [1, "flex-fill"], [1, "input-group", "border", "rounded-pill", "p-1"], [1, "input-group-prepend", "border-0"], [1, "col-auto"], [1, "fa", "fa-search", "h5", "pt-2"], [1, "form-control", "bg-none", "border-0", "p-0"], ["placeholder", "Enter the Product Name", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "table", "table-striped"], ["scope", "col", 4, "ngFor", "ngForOf"], ["class", "m-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "drp-select"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["responsive", "true", 1, "pagination", 3, "pageChange"], [3, "innerHTML"], ["scope", "col"], [1, "m-2"], ["scope", "row"], [3, "ngValue"]], template: function AllInventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllInventoryComponent_Template_a_click_10_listener() { return ctx.addNewProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add New Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Print Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllInventoryComponent_Template_a_click_18_listener() { return ctx.exportPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllInventoryComponent_Template_a_click_20_listener() { return ctx.exportToExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllInventoryComponent_Template_a_click_22_listener() { return ctx.exportToCSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ng-autocomplete", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function AllInventoryComponent_Template_ng_autocomplete_selected_30_listener($event) { return ctx.selectEvent($event); })("inputChanged", function AllInventoryComponent_Template_ng_autocomplete_inputChanged_30_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function AllInventoryComponent_Template_ng_autocomplete_inputFocused_30_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AllInventoryComponent_ng_template_31_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AllInventoryComponent_ng_template_33_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AllInventoryComponent_th_40_Template, 2, 1, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AllInventoryComponent_tr_42_Template, 13, 5, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AllInventoryComponent_Template_select_ngModelChange_47_listener($event) { return ctx.config.itemsPerPage = $event; })("change", function AllInventoryComponent_Template_select_change_47_listener() { return ctx.changePageSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AllInventoryComponent_option_48_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "pagination-controls", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AllInventoryComponent_Template_pagination_controls_pageChange_50_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.library)("searchKeyword", ctx.keyword)("itemTemplate", _r0)("notFoundTemplate", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 8, ctx.products, ctx.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.config.itemsPerPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageSizes);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_4__["AutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"]], styles: [".body[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 90vh;\n  padding: 30px;\n  overflow-x: auto;\n}\n\n.heading[_ngcontent-%COMP%] {\n  color: #f29700;\n  font-weight: 600;\n  padding-left: 40px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.btn-default[_ngcontent-%COMP%] {\n  font-family: Raleway-SemiBold;\n  font-size: 13px;\n  color: rgba(108, 88, 179, 0.75);\n  letter-spacing: 1px;\n  line-height: 15px;\n  border: 2px solid rgba(108, 89, 179, 0.75);\n  border-radius: 40px;\n  background: transparent;\n  transition: all 0.3s ease 0s;\n}\n\n.btn-default[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(108, 88, 179, 0.75);\n  border: 2px solid rgba(108, 89, 179, 0.75);\n}\n\n.add-button[_ngcontent-%COMP%] {\n  color: #f29700;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: #f29700 thin solid;\n  border-radius: 5px;\n  text-align: center;\n  color: #f29700;\n  width: 60px;\n  line-height: 30px;\n}\n\ninput[type=number][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > th[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even)    > th[_ngcontent-%COMP%] {\n  background-color: #fcf6ea;\n}\n\ntr[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.actionButtonEdit[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  color: white;\n}\n\n.actionButtonSave[_ngcontent-%COMP%] {\n  background-color: #f29700;\n  color: white;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  color: #f16262;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a:hover {\n  border-radius: 30px;\n  background-color: #f29700;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li a {\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li:not(:first-child):not(:last-child) {\n  width: 40px;\n  height: 40px;\n  line-height: 30px;\n  border-radius: 30px;\n  background-color: #e9ebf0;\n  margin: 5px;\n  text-align: center;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\n  background-color: #f29700 !important;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous .disabled span {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-right: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 20px;\n  padding-right: 20px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a {\n  content: \" \" !important;\n  font-weight: 700;\n  color: #bfc5cf;\n  margin-left: 10vw;\n  background-color: #e9ebf0;\n  padding-left: 30px;\n  padding-right: 30px;\n  outline: transparent;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a::before, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous.disabled::before {\n  content: \" \";\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a::after, .pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next.disabled::after {\n  content: \" \";\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #23934c;\n  min-width: 100px;\n  font-size: 0.75em;\n  color: white;\n  font-weight: 700;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: auto;\n}\n\n.dropdown-position[_ngcontent-%COMP%] {\n  transform: translate3d(-15px, 25px, 0px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2FkbWluL2ludmVudG9yeS9hbGwtaW52ZW50b3J5L2FsbC1pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0NUVztFRFVYLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQUFGOztBQUdBO0VBQ0UsY0N0Q1c7QURzQ2I7O0FBR0E7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQzdDVztFRDhDWCxXQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTs7RUFFRSx3QkFBQTtBQUFGOztBQUdBOztFQUVFLHVCQUFBO0FBQUY7O0FBR0E7O0VBRUUseUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UseUJDM0ZXO0VENEZYLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSx5QkN2R1c7QURzR2I7O0FBSUE7RUFDRSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDbEhhO0VEbUhiLFdBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0Usb0NBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNoSWE7RURpSWIsa0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQzFJYTtFRDJJYixrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkNySmE7RURzSmIsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7O0VBRUUsWUFBQTtBQURGOztBQUlBOztFQUVFLFlBQUE7QUFERjs7QUFLQTtFQUNFLHlCQ3RLWTtFRHVLWixnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0E7RUFDRSx3Q0FBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvcGFuZWxzL2FkbWluL2ludmVudG9yeS9hbGwtaW52ZW50b3J5L2FsbC1pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tZGVmYXVsdCB7XHJcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXktU2VtaUJvbGQ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiByZ2JhKDEwOCwgODgsIDE3OSwgMC43NSk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEwOCwgODksIDE3OSwgMC43NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcblxyXG4uYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTA4LCA4OCwgMTc5LCAwLjc1KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEwOCwgODksIDE3OSwgMC43NSk7XHJcbn1cclxuXHJcbi5hZGQtYnV0dG9uIHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6ICRiYXNlLWNvbG9yIHRoaW4gc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGQsXHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSA+IHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IC8vIENob29zZSB5b3VyIG93biBjb2xvciBoZXJlXHJcbn1cclxuXHJcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikgPiB0ZCxcclxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSA+IHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNDYsIDIzNCk7IC8vIENob29zZSB5b3VyIG93biBjb2xvciBoZXJlXHJcbn1cclxuXHJcbnRyIHtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxudGgge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFjdGlvbkJ1dHRvbkVkaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMTQ3LCA3Nik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWN0aW9uQnV0dG9uU2F2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgY29sb3I6IHJnYigyNDEsIDk4LCA5OCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLyBQYWdpbmF0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaSBhOmhvdmVyIHtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpIGEge1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzaGFkb3ctY29sb3I7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIC5kaXNhYmxlZCBzcGFuIHtcclxuICBjb250ZW50OiBcIiBcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxOTEsIDE5NywgMjA3KTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoYWRvdy1jb2xvcjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyBhIHtcclxuICBjb250ZW50OiBcIiBcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigxOTEsIDE5NywgMjA3KTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoYWRvdy1jb2xvcjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IGEge1xyXG4gIGNvbnRlbnQ6IFwiIFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDE5MSwgMTk3LCAyMDcpO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzaGFkb3ctY29sb3I7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgYTo6YmVmb3JlLFxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQgYTo6YWZ0ZXIsXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dC5kaXNhYmxlZDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9AYXQtcm9vdFxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uZHJvcGRvd24tcG9zaXRpb24ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1cHgsIDI1cHgsIDBweCk7XHJcbn1cclxuIiwiJGJhc2UtY29sb3I6IHJnYigyNDIsIDE1MSwgMCk7XHJcbiRzaGFkb3ctY29sb3I6IHJnYigyMzMsIDIzNSwgMjQwKTtcclxuJGdyZWVuLWNvbG9yOiAjMjM5MzRjO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllInventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-inventory',
                templateUrl: './all-inventory.component.html',
                styleUrls: ['./all-inventory.component.scss'],
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Gzsw":
/*!*********************************************************************************!*\
  !*** ./src/app/panels/admin/inventory/add-inventory/add-inventory.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInventoryComponent", function() { return AddInventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AddInventoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddInventoryComponent.ɵfac = function AddInventoryComponent_Factory(t) { return new (t || AddInventoryComponent)(); };
AddInventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddInventoryComponent, selectors: [["app-add-inventory"]], decls: 2, vars: 0, template: function AddInventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-inventory works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9hZG1pbi9pbnZlbnRvcnkvYWRkLWludmVudG9yeS9hZGQtaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddInventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-inventory',
                templateUrl: './add-inventory.component.html',
                styleUrls: ['./add-inventory.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MKxa":
/*!***************************************************************************************!*\
  !*** ./src/app/panels/admin/inventory/inventory-detail/inventory-detail.component.ts ***!
  \***************************************************************************************/
/*! exports provided: InventoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryDetailComponent", function() { return InventoryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InventoryDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
InventoryDetailComponent.ɵfac = function InventoryDetailComponent_Factory(t) { return new (t || InventoryDetailComponent)(); };
InventoryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InventoryDetailComponent, selectors: [["app-inventory-detail"]], decls: 2, vars: 0, template: function InventoryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "inventory-detail works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9hZG1pbi9pbnZlbnRvcnkvaW52ZW50b3J5LWRldGFpbC9pbnZlbnRvcnktZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inventory-detail',
                templateUrl: './inventory-detail.component.html',
                styleUrls: ['./inventory-detail.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cV/U":
/*!************************************************************!*\
  !*** ./src/app/panels/admin/inventory/inventory.module.ts ***!
  \************************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory-routing.module */ "fkm/");
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory.component */ "hmPC");
/* harmony import */ var _all_inventory_all_inventory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-inventory/all-inventory.component */ "Baki");
/* harmony import */ var _add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-inventory/add-inventory.component */ "Gzsw");
/* harmony import */ var _inventory_detail_inventory_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory-detail/inventory-detail.component */ "MKxa");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");












class InventoryModule {
}
InventoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InventoryModule });
InventoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InventoryModule_Factory(t) { return new (t || InventoryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__["InventoryRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteLibModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InventoryModule, { declarations: [_inventory_component__WEBPACK_IMPORTED_MODULE_4__["InventoryComponent"],
        _all_inventory_all_inventory_component__WEBPACK_IMPORTED_MODULE_5__["AllInventoryComponent"],
        _add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_6__["AddInventoryComponent"],
        _inventory_detail_inventory_detail_component__WEBPACK_IMPORTED_MODULE_7__["InventoryDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__["InventoryRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteLibModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _inventory_component__WEBPACK_IMPORTED_MODULE_4__["InventoryComponent"],
                    _all_inventory_all_inventory_component__WEBPACK_IMPORTED_MODULE_5__["AllInventoryComponent"],
                    _add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_6__["AddInventoryComponent"],
                    _inventory_detail_inventory_detail_component__WEBPACK_IMPORTED_MODULE_7__["InventoryDetailComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__["InventoryRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteLibModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "fkm/":
/*!********************************************************************!*\
  !*** ./src/app/panels/admin/inventory/inventory-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: InventoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryRoutingModule", function() { return InventoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.component */ "hmPC");
/* harmony import */ var _add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-inventory/add-inventory.component */ "Gzsw");
/* harmony import */ var _all_inventory_all_inventory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-inventory/all-inventory.component */ "Baki");
/* harmony import */ var _inventory_detail_inventory_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory-detail/inventory-detail.component */ "MKxa");








const routes = [
    {
        path: '',
        component: _inventory_component__WEBPACK_IMPORTED_MODULE_2__["InventoryComponent"],
        children: [
            { path: '', redirectTo: 'view-inventory', pathMatch: 'full' },
            {
                path: 'add-inventory',
                component: _add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_3__["AddInventoryComponent"],
                pathMatch: 'full',
            },
            {
                path: 'view-inventory',
                component: _all_inventory_all_inventory_component__WEBPACK_IMPORTED_MODULE_4__["AllInventoryComponent"],
                pathMatch: 'full',
            },
            {
                path: 'inventory-detail',
                component: _inventory_detail_inventory_detail_component__WEBPACK_IMPORTED_MODULE_5__["InventoryDetailComponent"],
                pathMatch: 'full',
            },
        ],
    },
];
class InventoryRoutingModule {
}
InventoryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InventoryRoutingModule });
InventoryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InventoryRoutingModule_Factory(t) { return new (t || InventoryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InventoryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "hmPC":
/*!***************************************************************!*\
  !*** ./src/app/panels/admin/inventory/inventory.component.ts ***!
  \***************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class InventoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
InventoryComponent.ɵfac = function InventoryComponent_Factory(t) { return new (t || InventoryComponent)(); };
InventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InventoryComponent, selectors: [["app-inventory"]], decls: 1, vars: 0, template: function InventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9hZG1pbi9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inventory',
                templateUrl: './inventory.component.html',
                styleUrls: ['./inventory.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=inventory-inventory-module.js.map