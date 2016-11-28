import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { WatchFreeComponent } from './watch-free/watch-free.component';
import { BasicLocationMapComponent } from './basic-location-map/basic-location-map.component';
import { LoginComponent } from './user/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PreloadSelectedModules } from './selective-preload-strategy';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/welcome', pathMatch: 'full' },
      { path: 'welcome',  component: WelcomeComponent },
      { path: 'about',  component: AboutComponent },
      { path: 'watch-free',  component: WatchFreeComponent },
      { path: 'where',  component: BasicLocationMapComponent },
      { path: 'login',  component: LoginComponent },
      {
        path: 'posts',
        loadChildren: 'app/posts/posts.module#PostsModule',
        data: {
          preload: true
        }
      },
      {
        path: 'dashboard',
        loadChildren: 'app/user/user.module#UserModule',
        data: {
          preload: true
        }
      },
      { path: '**', component: PageNotFoundComponent }  
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
