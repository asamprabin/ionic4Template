import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'newpromise', loadChildren: './pages/new-promise/new-promise.module#NewPromisePageModule' },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'newregister', loadChildren: './pages/new-register/new-register.module#NewRegisterPageModule' },
  { path: 'docs', loadChildren: './pages/docs/docs.module#DocsPageModule' },
  { path: 'faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },
  { path: 'terms-of-use', loadChildren: './pages/terms-of-use/terms-of-use.module#TermsOfUsePageModule' },
  { path: 'privacy-policy', loadChildren: './pages/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'about-us', loadChildren: './pages/about-us/about-us.module#AboutUsPageModule' },
  { path: 'trending', loadChildren: './pages/trending/trending.module#TrendingPageModule' },
  { path: 'new-register', loadChildren: './pages/new-register/new-register.module#NewRegisterPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
