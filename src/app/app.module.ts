import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';


//Modules
import { DashboardComponent } from './_modules/dashboard/dashboard.component';
import { ProductComponent } from './_modules/product/product.component';
import { InfoComponent } from './_modules/info/info.component';
import { CartShoppingComponent } from './_modules/cart-shopping/cart-shopping.component';
import { WishlistComponent } from './_modules/wishlist/wishlist.component';


//Components
import {CarouselComponent} from "./_components/carousel/carousel.component";




const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'info', component: InfoComponent },
  { path: 'cart', component: CartShoppingComponent },
  { path: 'wishlist', component: WishlistComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CarouselComponent,
    ProductComponent,
    InfoComponent,
    CartShoppingComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
