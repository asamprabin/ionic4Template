import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { UserInputComponent } from './user-input/user-input.component';
import { NotificationPostCardComponent } from './notification-post-card/notification-post-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CommentCardComponent } from './comment-card/comment-card.component';

@NgModule({
  declarations: [
    UserInputComponent,
    NotificationPostCardComponent,
    UserCardComponent,
    CommentCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    UserInputComponent,
    NotificationPostCardComponent,
    UserCardComponent,
    CommentCardComponent
  ]
})
export class UtilityModule { }
