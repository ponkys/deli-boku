import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';

//routing
import { UsersRoutingModule } from './user-routing.module';

//services
import { UserService } from './user.service';
import { SubscribeService } from '../subscribe.service';

//components
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
// subscribers
import { SubscribersListComponent } from '../subscribers-list/subscribers-list.component';
//spinner
import { SpinnerComponent } from '../spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    //routing
    UsersRoutingModule 
  ],
  declarations: [
    DashboardComponent,
    UsersListComponent,
    UserDetailComponent,
    UserHomeComponent,
    UserDashboardComponent,
    SubscribersListComponent,
    SpinnerComponent
  ],
  providers:[ UserService, SubscribeService ]
})
export class UserModule { }
