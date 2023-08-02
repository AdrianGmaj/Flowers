import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { RouterModule } from '@angular/router';
import { ContactModule } from './contact/contact.module';
import { BasketModule } from './basket/basket.module';
import { ServicesModule } from './services/services.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { BasketIconComponent } from './toolbar/basket-icon/basket-icon.component';
import {FlexLayoutModule} from '@angular/flex-layout';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    BasketIconComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    HomeModule,
    ShopModule,
    ContactModule,
    BasketModule,
    ServicesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    FlexLayoutModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
