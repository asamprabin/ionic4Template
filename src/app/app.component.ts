import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Edit Profile',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Edit Bank Details',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'How Edandra works?',
      url: '/about',
      icon: 'list'
    },
    {
      title: 'Docs',
      url: '/docs',
      icon: 'home'
    },
    {
      title: 'Faq',
      url: '/faq',
      icon: 'home'
    },
    {
      title: 'Terms of Use',
      url: '/terms-of-use',
      icon: 'list'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
      icon: 'home'
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'home'
    },
    {
      title: 'Sign Out',
      url: '/login',
      icon: 'list'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
