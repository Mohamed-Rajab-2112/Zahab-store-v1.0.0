import {Routes} from "@angular/router";

import {
  JewelleryHomeComponent,
  JewelleryListComponent,
  JewellerySearchResultsComponent,
  JewelleryDetailsComponent
} from "./index";

export const appRoutes: Routes = [
  {path: "home", component: JewelleryHomeComponent},
  {path: "home/:type", component: JewelleryListComponent},
  {path: "home/:type/:id", component: JewelleryDetailsComponent},
  {path: "search/:terms", component: JewellerySearchResultsComponent},
  {path: "seller", component: JewelleryHomeComponent},
  {path: "seller", loadChildren: "app/seller/seller.module#SellerModule"},
  {path: "customer", loadChildren: "app/customer/customer.module#CustomerModule"},
  {path: '', redirectTo: "/home", pathMatch: "full"}
];
