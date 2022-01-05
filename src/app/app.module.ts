import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstMainModule } from './first-main/first-main.module';
import { GeoPageComponent } from './geo-page/geo-page.component';
import { SecondMainModule } from './second-main/second-main.module';
import { MaincComponent } from './mainc/mainc.component';

@NgModule({
  declarations: [
    AppComponent,
    GeoPageComponent,
    MaincComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
