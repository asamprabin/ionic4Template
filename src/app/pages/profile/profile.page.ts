import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  tabView = 'promise';

  constructor() { }

  ngOnInit() {
  }

  // Changing Tab View
  changeTabView(changeEvent) {
    this.tabView = changeEvent.detail.value;
  }

}
