import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { WatchFreeComponent } from './watch-free/watch-free.component';
import { SubscribersListComponent } from './subscribers-list/subscribers-list.component';
import { BasicLocationMapComponent } from './basic-location-map/basic-location-map.component';
import { LoginComponent } from './user/login/login.component';
//delete when refactor
import { UsersListComponent } from './user/users-list/users-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

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
      //delete when refactor
      { path: 'users',  component: UsersListComponent },
      { path: 'detail/:userName', component: UserDetailComponent }

      
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
