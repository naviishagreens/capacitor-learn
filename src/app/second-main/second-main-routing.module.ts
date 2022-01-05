import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondCMainComponent } from './second-cmain/second-cmain.component';
import { Spage1Component } from './spage1/spage1.component';
import { Spage2Component } from './spage2/spage2.component';

const routes: Routes = [
  {
    path: '',
    component: SecondCMainComponent,
    children: [
      {
        path: 'page1',
        component: Spage1Component
      },
      {
        path: 'page2',
        component: Spage2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondMainRoutingModule { }
