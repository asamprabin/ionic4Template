import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UtilityModule } from '../../modules/utility/utility.module';

import { DetailsPage } from './details.page';
import { UpdatesCardComponent } from './updates-card/updates-card.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsPage
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
  declarations: [
    DetailsPage,
    UpdatesCardComponent
  ]
})
export class DetailsPageModule {}
