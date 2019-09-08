import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ViewPromisesComponent } from './view-promises/view-promises.component';
import { ViewNotifyingComponent } from './view-notifying/view-notifying.component';
import { ViewSponsoredComponent } from './view-sponsored/view-sponsored.component';
import { ViewTrustingComponent } from './view-trusting/view-trusting.component';

import { UtilityModule } from '../../modules/utility/utility.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
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
    ProfilePage,
    ViewPromisesComponent,
    ViewNotifyingComponent,
    ViewSponsoredComponent,
    ViewTrustingComponent
  ]
})
export class ProfilePageModule {}
