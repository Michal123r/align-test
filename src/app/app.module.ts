import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GaleryComponent } from './components/galery/galery.component';
import { ActiveImageComponent } from './components/active-image/active-image.component';
import { HttpClientModule } from '@angular/common/http';
import { BigImageComponent } from './components/big-image/big-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleryComponent,
    ActiveImageComponent,
    BigImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
