import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './modules/shared/shared.module';
import { LoaderComponent } from './modules/shared/components/loader/loader.component';
import { PrimaryButtonComponent } from './modules/shared/components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './modules/shared/components/buttons/secondary-button/secondary-button.component';
import { AuthDirective } from './modules/shared/directives/auth.directive';
import { AngularMaterialModule } from './modules/shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    AuthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
