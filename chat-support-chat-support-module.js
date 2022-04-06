(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-support-chat-support-module"],{

/***/ "6ycD":
/*!**************************************************************************!*\
  !*** ./src/app/panels/admin/chat-support/chat-support-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ChatSupportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSupportRoutingModule", function() { return ChatSupportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_support_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-support.component */ "PHsX");





const routes = [
    {
        path: '',
        component: _chat_support_component__WEBPACK_IMPORTED_MODULE_2__["ChatSupportComponent"],
    },
];
class ChatSupportRoutingModule {
}
ChatSupportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatSupportRoutingModule });
ChatSupportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatSupportRoutingModule_Factory(t) { return new (t || ChatSupportRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatSupportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatSupportRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "PHsX":
/*!*********************************************************************!*\
  !*** ./src/app/panels/admin/chat-support/chat-support.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChatSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSupportComponent", function() { return ChatSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _online_user_online_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./online-user/online-user.component */ "jMqw");
/* harmony import */ var _chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-area/chat-area.component */ "TyR0");




class ChatSupportComponent {
    constructor() { }
    ngOnInit() { }
    openChat(event) {
        console.log(event);
        this.sessionId = event.customerSessionId;
        this.customerId = event.id;
        this.isOnline = event.isOnline;
        this.customerName = event.customerName;
    }
}
ChatSupportComponent.ɵfac = function ChatSupportComponent_Factory(t) { return new (t || ChatSupportComponent)(); };
ChatSupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatSupportComponent, selectors: [["app-chat-support"]], decls: 5, vars: 4, consts: [[1, "row"], [1, "col-3"], [3, "openUserChat"], [1, "col-9"], [3, "sessionId", "customerId", "isOnline", "customerName"]], template: function ChatSupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-online-user", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openUserChat", function ChatSupportComponent_Template_app_online_user_openUserChat_2_listener($event) { return ctx.openChat($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-chat-area", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sessionId", ctx.sessionId)("customerId", ctx.customerId)("isOnline", ctx.isOnline)("customerName", ctx.customerName);
    } }, directives: [_online_user_online_user_component__WEBPACK_IMPORTED_MODULE_1__["OnlineUserComponent"], _chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_2__["ChatAreaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9hZG1pbi9jaGF0LXN1cHBvcnQvY2hhdC1zdXBwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatSupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-support',
                templateUrl: './chat-support.component.html',
                styleUrls: ['./chat-support.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TyR0":
/*!****************************************************************************!*\
  !*** ./src/app/panels/admin/chat-support/chat-area/chat-area.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChatAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatAreaComponent", function() { return ChatAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/chat/chat.service */ "iPoy");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









const _c0 = ["scrollframe"];
function ChatAreaComponent_ng_container_2_ng_container_6_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 12 mins ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r3.message);
} }
function ChatAreaComponent_ng_container_2_ng_container_6_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 13 mins ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r3.message, " ");
} }
function ChatAreaComponent_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatAreaComponent_ng_container_2_ng_container_6_li_1_Template, 12, 2, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatAreaComponent_ng_container_2_ng_container_6_li_2_Template, 12, 2, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r3.userType === "customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r3.userType === "agent");
} }
function ChatAreaComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatAreaComponent_ng_container_2_ng_container_6_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatAreaComponent_ng_container_2_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.message = $event; })("keyup.enter", function ChatAreaComponent_ng_container_2_Template_input_keyup_enter_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.sendMessageToCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.message);
} }
class ChatAreaComponent {
    constructor(ChatService, spinner, toastr) {
        var _a;
        this.ChatService = ChatService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.messages = [
        // {
        //   userName: 'asd',
        //   userType: 'agent',
        //   message: 'addasd ads',
        //   customerSessionId: '12',
        // },
        // {
        //   userName: 'asd',
        //   userType: 'agent',
        //   message: 'addasd ads',
        //   customerSessionId: '12',
        // },
        // {
        //   userName: 'asd',
        //   userType: 'agent',
        //   message: 'addasd ads',
        //   customerSessionId: '12',
        // },
        // {
        //   userName: 'asd',
        //   userType: 'agent',
        //   message: 'addasd ads',
        //   customerSessionId: '12',
        // },
        // {
        //   userName: 'asd',
        //   userType: 'agent',
        //   message: 'addasd ads',
        //   customerSessionId: '12',
        // },
        // {
        //   userName: 'asd',
        //   userType: 'agent',
        //   message: 'addasd ads',
        //   customerSessionId: '12',
        // },
        // {
        //   userName: 'asd',
        //   userType: 'agent',
        //   message: 'addasd ads',
        //   customerSessionId: '12',
        // },
        // {
        //   userName: 'asd',
        //   userType: 'agent',
        //   message: 'addasd ads',
        //   customerSessionId: '12',
        // },
        // {
        //   userName: 'asd',
        //   userType: 'agent',
        //   message: 'addasd ads',
        //   customerSessionId: '12',
        // },
        ];
        this.sort = {
            orderBy: 'createdAt',
            sort: 'DESC',
        };
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: null,
        };
        this.message = '';
        const token = (_a = JSON.parse(localStorage.getItem('user'))) === null || _a === void 0 ? void 0 : _a.accessToken;
        if (token) {
            this.decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(token);
        }
        console.log(this.decoded);
        this.userName = `${this.decoded.firstName} ${this.decoded.lastName}`;
        this.messageForAgentListener();
    }
    ngOnInit() {
        // this.getMessageBySession();
        console.log('initing.......');
    }
    ngAfterViewChecked() {
        console.log('agter view checked');
        if (this.config.currentPage == 1) {
            this.scrollToBottom();
        }
    }
    ngOnChanges(changes) {
        // this.getMessageBySession();
        this.messages = [];
        this.config.currentPage = 1;
        this.getChatHistory();
    }
    ngAfterViewInit() {
        // console.log('scroll', this.scrollFrame);
        // console.log('after view init');
        // this.scrollToBottom();
    }
    messageForAgentListener() {
        console.log('Observing no agent online');
        this.ChatService.receiveMessageForAgent().subscribe((data) => {
            if (data.customerSessionId === this.sessionId) {
                this.messages.push(data);
            }
        });
    }
    sendMessageToCustomer() {
        const obj = {
            message: this.message,
            customerSessionId: this.sessionId,
        };
        // console.log('Observing no agent online');
        this.ChatService.sendMessageToCustomer(obj);
        obj['userType'] = 'agent';
        // obj['userName'] = this.userName;
        this.messages.push(obj);
        this.message = '';
    }
    getMessageBySession() {
        this.messages = [];
    }
    scrollToBottom() {
        const el = this.scrollFrame.nativeElement;
        el.scroll({
            top: el.scrollHeight,
        });
    }
    getChatHistory() {
        this.ChatService.getChatHistory(this.config.currentPage, this.config.itemsPerPage, this.sort, this.customerId).subscribe((data) => {
            this.config.totalItems = data.total;
            const chatHistory = data.body;
            this.messages.unshift(...chatHistory.reverse());
            console.log(this.messages);
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    onScroll() {
        console.log('scrolling');
        // console.log(this.config.currentPage * this.config.itemsPerPage, this.messages.length);
        // if (this.config.currentPage * this.config.itemsPerPage == this.messages.length) {
        //   this.config.currentPage = this.config.currentPage + 1;
        //   this.getChatHistory();
        // }
    }
    onScrollUp() {
        console.log('123 up');
        console.log(this.config.currentPage * this.config.itemsPerPage, this.messages.length);
        if (this.config.currentPage * this.config.itemsPerPage == this.messages.length) {
            this.config.currentPage = this.config.currentPage + 1;
            this.getChatHistory();
        }
    }
}
ChatAreaComponent.ɵfac = function ChatAreaComponent_Factory(t) { return new (t || ChatAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
ChatAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatAreaComponent, selectors: [["app-chat-area"]], viewQuery: function ChatAreaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollFrame = _t.first);
    } }, inputs: { sessionId: "sessionId", customerId: "customerId", isOnline: "isOnline", customerName: "customerName" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 4, consts: [["infiniteScroll", "", 1, "body", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled", "scrolledUp"], ["scrollframe", ""], [4, "ngIf"], [1, "container", "bootstrap", "snippets", "bootdey", "h-100"], [1, "row", "h-100"], [1, "col-md-12", "bg-white", "d-flex", "flex-column", "justify-content-between"], [1, "chat-message"], [1, "chat"], [4, "ngFor", "ngForOf"], [1, "chat-box", "bg-white"], [1, "input-group"], ["placeholder", "Type your message here", 1, "form-control", "border", "no-shadow", "no-rounded", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-success", "no-rounded"], ["class", "left clearfix", 4, "ngIf"], ["class", "right clearfix", 4, "ngIf"], [1, "left", "clearfix"], [1, "chat-img", "pull-left"], ["src", "https://bootdey.com/img/Content/user_3.jpg", "alt", "User Avatar"], [1, "chat-body", "clearfix"], [1, "header"], [1, "primary-font"], [1, "pull-right", "text-muted"], [1, "fa", "fa-clock-o"], [1, "right", "clearfix"], [1, "chat-img", "pull-right"], ["src", "https://bootdey.com/img/Content/user_1.jpg", "alt", "User Avatar"]], template: function ChatAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function ChatAreaComponent_Template_div_scrolled_0_listener() { return ctx.onScroll(); })("scrolledUp", function ChatAreaComponent_Template_div_scrolledUp_0_listener() { return ctx.onScrollUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatAreaComponent_ng_container_2_Template, 13, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 1)("infiniteScrollThrottle", 50)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sessionId);
    } }, directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".body[_ngcontent-%COMP%] {\n  padding-top: 0;\n  font-size: 12px;\n  color: #777;\n  background: #f9f9f9;\n  font-family: \"Open Sans\", sans-serif;\n  height: 85vh;\n  overflow-y: auto;\n}\n\n.chat-message[_ngcontent-%COMP%] {\n  padding: 60px 20px 115px;\n}\n\n.chat[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n}\n\n.chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50em;\n  -moz-border-radius: 50em;\n  -webkit-border-radius: 50em;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.chat-body[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.chat[_ngcontent-%COMP%]   li.left[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%] {\n  margin-left: 70px;\n  background-color: #fff;\n}\n\n.chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 11px;\n  padding: 10px;\n  border: 1px solid #f1f5fc;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  border-bottom: 1px solid #f1f5fc;\n}\n\n.chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.chat[_ngcontent-%COMP%]   li.left[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 10px;\n  left: -8px;\n  display: inline-block;\n  background: #fff;\n  width: 16px;\n  height: 16px;\n  border-top: 1px solid #f1f5fc;\n  border-left: 1px solid #f1f5fc;\n  content: \"\";\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n}\n\n.chat[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 10px;\n  right: -8px;\n  display: inline-block;\n  background: #fff;\n  width: 16px;\n  height: 16px;\n  border-top: 1px solid #f1f5fc;\n  border-right: 1px solid #f1f5fc;\n  content: \"\";\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n}\n\n.chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.chat[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%] {\n  margin-right: 70px;\n  background-color: #fff;\n}\n\n.chat-box[_ngcontent-%COMP%] {\n  \n  padding: 15px;\n  border-top: 1px solid #eee;\n  transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -ms-transition: all 0.5s ease;\n  -o-transition: all 0.5s ease;\n}\n\n.primary-font[_ngcontent-%COMP%] {\n  color: #3c8dbc;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2FkbWluL2NoYXQtc3VwcG9ydC9jaGF0LWFyZWEvY2hhdC1hcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usd0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtBQUFGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7QUFKRjs7QUFPQTtFQUNFLG9CQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsaURBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7QUFKRjs7QUFPQTtFQUNFLFNBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFKRjs7QUFPQTtFQUNFOzs7OztLQUFBO0VBTUEsYUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtBQUpGOztBQU9BOzs7RUFHRSxxQkFBQTtFQUNBLFVBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9hZG1pbi9jaGF0LXN1cHBvcnQvY2hhdC1hcmVhL2NoYXQtYXJlYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGhlaWdodDogODV2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlIHtcclxuICBwYWRkaW5nOiA2MHB4IDIwcHggMTE1cHg7XHJcbn1cclxuXHJcbi5jaGF0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNoYXQtbWVzc2FnZSB7XHJcbiAgLy8gYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxufVxyXG5cclxuLmNoYXQgbGkgaW1nIHtcclxuICB3aWR0aDogNDVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBlbTtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwZW07XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MGVtO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNoYXQtYm9keSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jaGF0IGxpLmxlZnQgLmNoYXQtYm9keSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNoYXQgbGkgLmNoYXQtYm9keSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1ZmM7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG4uY2hhdCBsaSAuY2hhdC1ib2R5IC5oZWFkZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1ZmM7XHJcbn1cclxuXHJcbi5jaGF0IGxpIC5jaGF0LWJvZHkgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2hhdCBsaS5sZWZ0IC5jaGF0LWJvZHk6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IC04cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWZjO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YxZjVmYztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4uY2hhdCBsaS5yaWdodCAuY2hhdC1ib2R5OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogLThweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1ZmM7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YxZjVmYztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLmNoYXQgbGkge1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uY2hhdCBsaS5yaWdodCAuY2hhdC1ib2R5IHtcclxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNoYXQtYm94IHtcclxuICAvKlxyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogNDQ0cHg7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgKi9cclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG4ucHJpbWFyeS1mb250IHtcclxuICBjb2xvcjogIzNjOGRiYztcclxufVxyXG5cclxuYTpob3ZlcixcclxuYTphY3RpdmUsXHJcbmE6Zm9jdXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-area',
                templateUrl: './chat-area.component.html',
                styleUrls: ['./chat-area.component.scss'],
            }]
    }], function () { return [{ type: _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, { scrollFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollframe']
        }], sessionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customerId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isOnline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customerName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "h1rb":
/*!******************************************************************!*\
  !*** ./src/app/panels/admin/chat-support/chat-support.module.ts ***!
  \******************************************************************/
/*! exports provided: ChatSupportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSupportModule", function() { return ChatSupportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chat_support_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-support.component */ "PHsX");
/* harmony import */ var _chat_support_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-support-routing.module */ "6ycD");
/* harmony import */ var _online_user_online_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./online-user/online-user.component */ "jMqw");
/* harmony import */ var _chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-area/chat-area.component */ "TyR0");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");









class ChatSupportModule {
}
ChatSupportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatSupportModule });
ChatSupportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatSupportModule_Factory(t) { return new (t || ChatSupportModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _chat_support_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChatSupportRoutingModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatSupportModule, { declarations: [_chat_support_component__WEBPACK_IMPORTED_MODULE_3__["ChatSupportComponent"], _online_user_online_user_component__WEBPACK_IMPORTED_MODULE_5__["OnlineUserComponent"], _chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_6__["ChatAreaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _chat_support_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChatSupportRoutingModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatSupportModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_chat_support_component__WEBPACK_IMPORTED_MODULE_3__["ChatSupportComponent"], _online_user_online_user_component__WEBPACK_IMPORTED_MODULE_5__["OnlineUserComponent"], _chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_6__["ChatAreaComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _chat_support_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChatSupportRoutingModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "jMqw":
/*!********************************************************************************!*\
  !*** ./src/app/panels/admin/chat-support/online-user/online-user.component.ts ***!
  \********************************************************************************/
/*! exports provided: OnlineUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineUserComponent", function() { return OnlineUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/chat/chat.service */ "iPoy");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = function (a0, a1) { return { online: a0, offline: a1 }; };
function OnlineUserComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnlineUserComponent_ng_container_13_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const customer_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openUserChat.emit(customer_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const customer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, customer_r1.isOnline, !customer_r1.isOnline));
} }
class OnlineUserComponent {
    constructor(ChatService, spinner, toastr) {
        var _a;
        this.ChatService = ChatService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.openUserChat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.customers = [];
        this.isOnline = true;
        this.sort = {
            orderBy: 'createdAt',
            sort: 'DESC',
        };
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: null,
        };
        const token = (_a = JSON.parse(localStorage.getItem('user'))) === null || _a === void 0 ? void 0 : _a.accessToken;
        if (token) {
            this.decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(token);
        }
        console.log(this.decoded);
        const userName = `${this.decoded.firstName} ${this.decoded.lastName}`;
        this.ChatService.setupSocketConnection('agent', userName, this.decoded.id);
        this.newCustomerListner();
        this.customerDisconnectedListner();
        this.getChatSessions();
    }
    ngOnInit() { }
    ngOnDestroy() {
        console.log('destroying component');
        this.ChatService.closeConnection();
    }
    newCustomerListner() {
        this.ChatService.newCustomer().subscribe((data) => {
            data['isOnline'] = true;
            delete Object.assign(data, { ['customerName']: data['name'] })['name'];
            delete Object.assign(data, { ['customerEmail']: data['email'] })['email'];
            delete Object.assign(data, { ['customerPhone']: data['phone'] })['phone'];
            delete Object.assign(data, { ['customerSessionId']: data['socketId'] })['socketId'];
            this.customers.unshift(data);
            console.log(data);
        });
    }
    customerDisconnectedListner() {
        this.ChatService.customerDisconnected().subscribe((data) => {
            this.customers.find((it) => it.socketId === data.socketId).isOnline = false;
            console.log(data);
        });
    }
    getChatSessions() {
        this.ChatService.getChatSessions(this.config.currentPage, this.config.itemsPerPage, this.sort).subscribe((data) => {
            this.config.totalItems = data.total;
            const sessions = data.body;
            this.customers.push(...sessions);
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error.error.message, 'Error');
            this.spinner.hide();
        });
    }
    onScroll() {
        console.log('scrolling');
        console.log(this.config.currentPage * this.config.itemsPerPage, this.customers.length);
        if (this.config.currentPage * this.config.itemsPerPage == this.customers.length) {
            this.config.currentPage = this.config.currentPage + 1;
            this.getChatSessions();
        }
    }
    switchStatus() {
        this.isOnline = !this.isOnline;
    }
}
OnlineUserComponent.ɵfac = function OnlineUserComponent_Factory(t) { return new (t || OnlineUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
OnlineUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnlineUserComponent, selectors: [["app-online-user"]], outputs: { openUserChat: "openUserChat" }, decls: 14, vars: 5, consts: [["infiniteScroll", "", 1, "body", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled"], [1, "container", "bootstrap", "snippets", "bootdey"], [1, "row"], [1, "col-12", "bg-white"], [1, "row", "d-flex", "border-bottom", "padding-sm", "p-2", "justify-content-between", 2, "height", "40px"], [1, "text-center", "p-2"], [1, ""], [1, "mb-3"], [1, "custom-control", "custom-switch", "custom-switch-lg", 3, "click"], ["id", "isManageByOwner", "type", "checkbox", 1, "custom-control-input", "custom-control-input-warning", 3, "ngModel", "ngModelChange"], ["for", "", 1, "custom-control-label"], [1, "friend-list"], [4, "ngFor", "ngForOf"], [1, "active", "bounceInDown", 3, "click"], [1, "clearfix"], ["src", "https://bootdey.com/img/Content/user_1.jpg", "alt", "", 1, "img-circle"], [1, "friend-name"], [1, "last-message", "text-muted"], [1, "fa", "fa-circle", "chat-alert", 3, "ngClass"]], template: function OnlineUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function OnlineUserComponent_Template_div_scrolled_0_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnlineUserComponent_Template_p_click_9_listener() { return ctx.switchStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OnlineUserComponent_Template_input_ngModelChange_10_listener($event) { return ctx.isOnline = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OnlineUserComponent_ng_container_13_Template, 10, 5, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 1)("infiniteScrollThrottle", 50)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isOnline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customers);
    } }, directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".body[_ngcontent-%COMP%] {\n  padding-top: 0;\n  font-size: 12px;\n  color: #777;\n  background: #f9f9f9;\n  font-family: \"Open Sans\", sans-serif;\n  height: 85vh;\n  overflow-y: auto;\n}\n\n.bg-white[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.friend-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-left: -40px;\n}\n\n.friend-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eee;\n}\n\n.friend-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  float: left;\n  width: 45px;\n  height: 45px;\n  margin-right: 10px;\n}\n\n.friend-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 10px;\n  transition: all 0.2s ease;\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  -ms-transition: all 0.2s ease;\n  -o-transition: all 0.2s ease;\n}\n\n.friend-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #f1f5fc;\n}\n\n.friend-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .friend-name[_ngcontent-%COMP%], .friend-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .friend-name[_ngcontent-%COMP%]:hover {\n  color: #777;\n}\n\n.friend-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .last-message[_ngcontent-%COMP%] {\n  width: 65%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.friend-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 8px;\n}\n\nsmall[_ngcontent-%COMP%], .small[_ngcontent-%COMP%] {\n  font-size: 85%;\n}\n\n.friend-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .chat-alert[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 27px;\n  font-size: 10px;\n  padding: 3px 5px;\n}\n\n.online[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.offline[_ngcontent-%COMP%] {\n  color: orangered;\n}\n\n\n\n.checkbox[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 25px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n\n\n.checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #f29700;\n}\n\n\n\n.checkbox[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #f29700;\n}\n\n\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #f29700;\n}\n\n\n\n.checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n\n\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n\n\n\n.checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  left: 10px;\n  top: 7px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n\n\n.custom-control-input-warning[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: #f29700 !important;\n  border-color: #f29700 !important;\n}\n\n\n\n.custom-switch-lg[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\n  left: -2.25rem;\n  width: 4rem;\n  border-radius: 1.5rem;\n}\n\n.custom-switch-lg[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after {\n  top: calc(0.25rem + 3px);\n  left: calc(-2.25rem + 4px);\n  width: calc(1.5rem - 6px);\n  height: calc(1.5rem - 6px);\n  border-radius: 1.5rem;\n}\n\n.custom-switch-lg[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::after {\n  transform: translateX(2.4rem);\n}\n\n.custom-switch-lg[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\n  height: 1.5rem;\n}\n\n.custom-switch-lg[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%] {\n  padding-left: 2.5rem;\n  line-height: 1.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2FkbWluL2NoYXQtc3VwcG9ydC9vbmxpbmUtdXNlci9vbmxpbmUtdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsNkJBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTs7RUFFRSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7O0VBRUUsY0FBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQSx1RkFBQTs7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFHQSxpQkFBQTtBQUZGOztBQUtBLHdDQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBRkY7O0FBS0EsNkJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkN0SFc7QURvSGI7O0FBS0EsK0NBQUE7O0FBQ0E7RUFDRSx5QkMzSFc7QUR5SGI7O0FBS0Esd0RBQUE7O0FBQ0E7RUFDRSx5QkNoSVc7QUQ4SGI7O0FBS0EsNkRBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0Esb0NBQUE7O0FBQ0E7RUFDRSxjQUFBO0FBRkY7O0FBS0Esa0NBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUdBLHdCQUFBO0FBRkY7O0FBS0EsaUVBQUE7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLGdDQUFBO0FBSEY7O0FBTUEseUJBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBSEY7O0FBTUE7RUFDRSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FBSEY7O0FBTUE7RUFDRSw2QkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvcGFuZWxzL2FkbWluL2NoYXQtc3VwcG9ydC9vbmxpbmUtdXNlci9vbmxpbmUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGhlaWdodDogODV2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uYmctd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mcmllbmQtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbn1cclxuXHJcbi5mcmllbmQtbGlzdCBsaSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5mcmllbmQtbGlzdCBsaSBhIGltZyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmZyaWVuZC1saXN0IGxpIGEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uZnJpZW5kLWxpc3QgbGkuYWN0aXZlIGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1ZmM7XHJcbn1cclxuXHJcbi5mcmllbmQtbGlzdCBsaSBhIC5mcmllbmQtbmFtZSxcclxuLmZyaWVuZC1saXN0IGxpIGEgLmZyaWVuZC1uYW1lOmhvdmVyIHtcclxuICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuLmZyaWVuZC1saXN0IGxpIGEgLmxhc3QtbWVzc2FnZSB7XHJcbiAgd2lkdGg6IDY1JTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mcmllbmQtbGlzdCBsaSBhIC50aW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbnNtYWxsLFxyXG4uc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogODUlO1xyXG59XHJcblxyXG4uZnJpZW5kLWxpc3QgbGkgYSAuY2hhdC1hbGVydCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA4cHg7XHJcbiAgdG9wOiAyN3B4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiAzcHggNXB4O1xyXG59XHJcblxyXG4ub25saW5lIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5vZmZsaW5lIHtcclxuICBjb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDSEVDSyBCT1ggKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5jaGVja2JveCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuLmNoZWNrYm94IGlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuLmNoZWNrbWFyayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbi5jaGVja2JveDpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG59XHJcblxyXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cclxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xyXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xyXG4uY2hlY2tib3ggLmNoZWNrbWFyazphZnRlciB7XHJcbiAgbGVmdDogMTBweDtcclxuICB0b3A6IDdweDtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKlNXSVRDSCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmN1c3RvbS1jb250cm9sLWlucHV0LXdhcm5pbmc6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogJGJhc2UtY29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogTGFyZ2UgdG9nZ2wgc3dpdGNoZXMgKi9cclxuLmN1c3RvbS1zd2l0Y2gtbGcgLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gIGxlZnQ6IC0yLjI1cmVtO1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxufVxyXG5cclxuLmN1c3RvbS1zd2l0Y2gtbGcgLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XHJcbiAgdG9wOiBjYWxjKDAuMjVyZW0gKyAzcHgpO1xyXG4gIGxlZnQ6IGNhbGMoLTIuMjVyZW0gKyA0cHgpO1xyXG4gIHdpZHRoOiBjYWxjKDEuNXJlbSAtIDZweCk7XHJcbiAgaGVpZ2h0OiBjYWxjKDEuNXJlbSAtIDZweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG59XHJcblxyXG4uY3VzdG9tLXN3aXRjaC1sZyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyLjRyZW0pO1xyXG59XHJcblxyXG4uY3VzdG9tLXN3aXRjaC1sZyAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5jdXN0b20tc3dpdGNoLWxnIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxufVxyXG4iLCIkYmFzZS1jb2xvcjogcmdiKDI0MiwgMTUxLCAwKTtcclxuJHNoYWRvdy1jb2xvcjogcmdiKDIzMywgMjM1LCAyNDApO1xyXG4kZ3JlZW4tY29sb3I6ICMyMzkzNGM7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlineUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-online-user',
                templateUrl: './online-user.component.html',
                styleUrls: ['./online-user.component.scss'],
            }]
    }], function () { return [{ type: _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, { openUserChat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=chat-support-chat-support-module.js.map