import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Components
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    //  RouterModule.forChild([
    //   {
    //     path: 'crisis-center',
    //     component: CrisisCenterComponent,
    //     children: [
    //       {
    //         path: '',
    //         component: CrisisListComponent,
    //         children: [
    //           {
    //             path: ':id',
    //             component: UserDetailComponent
    //           },
    //           {
    //             path: '',
    //             component: CrisisCenterHomeComponent
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ])
  ],
  exports: [RouterModule],
  providers: []
})
export class UsersRoutingModule { }