import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondMainRoutingModule } from './second-main-routing.module';
import { SecondCMainComponent } from './second-cmain/second-cmain.component';
import { Spage1Component } from './spage1/spage1.component';
import { Spage2Component } from './spage2/spage2.component';


@NgModule({
  declarations: [
    SecondCMainComponent,
    Spage1Component,
    Spage2Component
  ],
  imports: [
    CommonModule,
    SecondMainRoutingModule
  ]
})
export class SecondMainModule { }
