"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("../shared/index");
exports.sellerRoutes = [
    { path: "sellers-list", component: index_1.SellersListComponent },
    { path: "vendor-profile", component: index_1.SellerProfileComponent /*, canActivate: [VendorProfileActivator]*/ },
    { path: "sellers-list/:id", component: index_1.SellerDetailsComponent, canActivate: [index_2.JewelleryAndSellerDetailsActivator] }
];
//# sourceMappingURL=seller.routes.js.map