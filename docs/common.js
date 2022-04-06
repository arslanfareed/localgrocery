(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Mjsx":
/*!******************************************************************!*\
  !*** ./src/app/services/bundleCatalog/bundle-catalog.service.ts ***!
  \******************************************************************/
/*! exports provided: BundleCatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BundleCatalogService", function() { return BundleCatalogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");





class BundleCatalogService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
    }
    addBundle(payload) {
        const token = JSON.parse(localStorage.getItem('user')).accessToken;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', `Bearer ${token}`);
        return this.httpClient.post(`${this.baseURL}inventory/bundle`, payload, {
            headers,
        });
    }
    getBundleByShop(shopId) {
        const token = JSON.parse(localStorage.getItem('user')).accessToken;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', `Bearer ${token}`);
        return this.httpClient.get(`${this.baseURL}inventory/bundle/${shopId}?pageSize=10&pageNum=1`, {
            headers,
        });
    }
    updateBundle(payload, bundleId) {
        const token = JSON.parse(localStorage.getItem('user')).accessToken;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', `Bearer ${token}`);
        return this.httpClient.patch(`${this.baseURL}inventory/bundle/${bundleId}`, payload, {
            headers,
        });
    }
    addItemToBundle(payload) {
        const token = JSON.parse(localStorage.getItem('user')).accessToken;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', `Bearer ${token}`);
        return this.httpClient.post(`${this.baseURL}inventory/bundle/item`, payload, {
            headers,
        });
    }
    addBundleTax(payload) {
        const token = JSON.parse(localStorage.getItem('user')).accessToken;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', `Bearer ${token}`);
        return this.httpClient.post(`${this.baseURL}inventory/bundle/tax`, payload, {
            headers,
        });
    }
    getBundleTaxByShopId(pageSize, pageNum, shopId) {
        const token = JSON.parse(localStorage.getItem('user')).accessToken;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', `Bearer ${token}`);
        return this.httpClient.get(`${this.baseURL}inventory/bundle/tax/${shopId}?pageSize=${pageSize}&pageNum=${pageNum}`, {
            headers,
        });
    }
    updateBundleTax(payload, bundleId) {
        const token = JSON.parse(localStorage.getItem('user')).accessToken;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', `Bearer ${token}`);
        return this.httpClient.patch(`${this.baseURL}inventory/bundle/tax/${bundleId}`, payload, {
            headers,
        });
    }
}
BundleCatalogService.ɵfac = function BundleCatalogService_Factory(t) { return new (t || BundleCatalogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BundleCatalogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BundleCatalogService, factory: BundleCatalogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BundleCatalogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map