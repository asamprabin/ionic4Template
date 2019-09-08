import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { UtilityModule } from '../../modules/utility/utility.module';

import { NewPromisePage } from './new-promise.page';

const routes: Routes = [
  {
    path: '',
    component: NewPromisePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [NewPromisePage]
})
export class NewPromisePageModule {}
