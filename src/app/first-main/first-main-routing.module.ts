import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCMainComponent } from './first-cmain/first-cmain.component';
import { Fpage1Component } from './fpage1/fpage1.component';
import { Fpage2Component } from './fpage2/fpage2.component';

const routes: Routes = [
  {
    path: '',
    component: FirstCMainComponent,
    children: [
      {
        path: 'page1',
        component: Fpage1Component
      },
      {
        path: 'page2',
        component: Fpage2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstMainRoutingModule { }
