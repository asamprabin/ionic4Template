import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ],
      },
      {
        path: 'trending',
        children: [
          {
            path: '',
            loadChildren: '../trending/trending.module#TrendingPageModule'
          }
        ],
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: '../search/search.module#SearchPageModule'
          }
        ],
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: '../notifications/notifications.module#NotificationsPageModule'
          }
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ],
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
