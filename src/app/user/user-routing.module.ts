import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }                from '../auth-guard.service';

//Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserHomeComponent } from './user-home/user-home.component';

import { SubscribersListComponent } from '../subscribers-list/subscribers-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

//providers
import { UserDetailResolve }   from './user-detail-resolve.service';

@NgModule({
  imports: [
     RouterModule.forChild([
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: UserDashboardComponent
          },
          {
            path: 'users',
            component: UsersListComponent,
            canActivateChild: [AuthGuard],
            children: [
              {
                path: ':userName',
                component: UserDetailComponent,
                resolve: {
                  user: UserDetailResolve
                }
              },
              {
                path: '',
                component: UserHomeComponent
              }
            ]
          },
          {
            path: 'subscribers',
            component: SubscribersListComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [ UserDetailResolve ]
})
export class UsersRoutingModule { }