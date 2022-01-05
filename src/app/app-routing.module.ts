import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCMainComponent } from './first-main/first-cmain/first-cmain.component';
import { MaincComponent } from './mainc/mainc.component';
import { SecondCMainComponent } from './second-main/second-cmain/second-cmain.component';

const routes: Routes = [
  {
    path: 'first',
    loadChildren: () => import('./first-main/first-main.module').then(m => m.FirstMainModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./second-main/second-main.module').then(m => m.SecondMainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
