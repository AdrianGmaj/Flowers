import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { MaterialModule } from '../material/material.module';
import { NextToCarouselComponent } from './home/next-to-carousel/next-to-carousel.component';
import { DividerSingUpComponent } from './home/divider-sing-up/divider-sing-up.component';
import { WhiteTextComponent } from './home/white-text/white-text.component';
import { DividerBlueComponent } from './home/divider-blue/divider-blue.component';
import { NewstletterComponent } from './home/newstletter/newstletter.component';
import { WhyFlowersComponent } from './home/why-flowers/why-flowers.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [HomeComponent, CarouselComponent, NextToCarouselComponent, DividerSingUpComponent, WhiteTextComponent, DividerBlueComponent, NewstletterComponent, WhyFlowersComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule
   
  ],
  exports: [
    
  ]
})
export class HomeModule { }
