import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstMainRoutingModule } from './first-main-routing.module';
import { FirstCMainComponent } from './first-cmain/first-cmain.component';
import { Fpage1Component } from './fpage1/fpage1.component';
import { Fpage2Component } from './fpage2/fpage2.component';


@NgModule({
  declarations: [
    FirstCMainComponent,
    Fpage1Component,
    Fpage2Component
  ],
  imports: [
    CommonModule,
    FirstMainRoutingModule
  ]
})
export class FirstMainModule { }
