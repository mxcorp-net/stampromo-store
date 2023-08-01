import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


//Modules
import {DashboardComponent} from './_modules/dashboard/dashboard.component';
import {ProductComponent} from './_modules/product/product.component';
import {InfoComponent} from './_modules/info/info.component';
import {CartShoppingComponent} from './_modules/cart-shopping/cart-shopping.component';
import {WishlistComponent} from './_modules/wishlist/wishlist.component';


//Components
import {CarouselComponent} from "./_components/carousel/carousel.component";
import {ProductListItemComponent} from './_components/product-list-item/product-list-item.component';
import {ProductDetailComponent} from './_modules/product/product-detail/product-detail.component';
import {UserModule} from "./_modules/user/user.module";
import * as path from "path";
import { ProductListHorizontalComponent } from './_components/product-list-horizontal/product-list-horizontal.component';
import { LoginComponent } from './_modules/auth/login/login.component';
import { ContactComponent } from './_modules/contact/contact.component';
import {CommonModule} from "@angular/common";



const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: DashboardComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'info', component: InfoComponent},
  {path: 'cart', component: CartShoppingComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'user', component: UserModule},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CarouselComponent,
    ProductComponent,
    InfoComponent,
    CartShoppingComponent,
    WishlistComponent,
    ProductDetailComponent,
    ProductListItemComponent,
    ProductListHorizontalComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
}
