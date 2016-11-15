import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { WatchFreeComponent } from './watch-free/watch-free.component';
import { SubscribersListComponent } from './subscribers-list/subscribers-list.component';
import { BasicLocationMapComponent } from './basic-location-map/basic-location-map.component';
import { LoginComponent } from './user/login/login.component';

import { PreloadSelectedModules } from './selective-preload-strategy';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/welcome', pathMatch: 'full' },
      { path: 'welcome',  component: WelcomeComponent },
      { path: 'about',  component: AboutComponent },
      { path: 'subscribers',  component: SubscribersListComponent },
      { path: 'watch-free',  component: WatchFreeComponent },
      { path: 'where',  component: BasicLocationMapComponent },
      { path: 'login',  component: LoginComponent },
      {
        path: 'users',
        loadChildren: 'app/user/user.module#UserModule',
        data: {
          preload: true
        }
      },
      //{ path: '**', component: PageNotFoundComponent } Create this component    
    ],
    { preloadingStrategy: PreloadSelectedModules }
    )
  ],
  exports: [RouterModule],
  providers: [
    PreloadSelectedModules
  ]
})
export class AppRoutingModule { }
