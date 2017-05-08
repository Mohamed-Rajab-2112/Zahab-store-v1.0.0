"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var index_1 = require("./jewellery/index");
var index_2 = require("./shared/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(index_1.appRoutes),
            forms_1.FormsModule
        ],
        declarations: [index_1.JewelleryStoreAppComponent,
            index_1.JewelleryHomeComponent,
            index_1.JewelleryListComponent,
            index_1.JewelleryThumbnailComponent,
            index_1.JewellerySearchResultsComponent,
            index_1.JewelleryDetailsComponent,
            index_2.NavComponent,
            index_2.FooterComponent
        ],
        bootstrap: [index_1.JewelleryStoreAppComponent],
        providers: [index_2.JewelleryService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map