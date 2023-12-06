import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeatureComponent } from './layouts/feature/feature.component';
import { ProductComponent } from './layouts/product/product.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BlogPostComponent } from './layouts/blog-post/blog-post.component';
import { CartComponent } from './layouts/cart/cart.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    FeatureComponent,
    ProductComponent,
    SubscriptionComponent,
    FooterComponent,
    BlogPostComponent,
    CartComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
