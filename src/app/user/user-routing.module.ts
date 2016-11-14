import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Components
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserHomeComponent } from './user-home/user-home.component';

//providers
import { UserDetailResolve }   from './user-detail-resolve.service';

@NgModule({
  imports: [
     RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
        children: [
          {
            path: '',
            component: UsersListComponent,
            children: [
              {
                path: ':userName',
                component: UserDetailComponent,
                 resolve: {
                  crisis: UserDetailResolve
                }
              },
              {
                path: '',
                component: UserHomeComponent
              }
            ]
          }
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [ UserDetailResolve ]
})
export class UsersRoutingModule { }