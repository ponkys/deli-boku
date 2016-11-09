import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';

//routing
import { UsersRoutingModule } from './user-routing.module';

//services
import { UserService } from './user.service';

//components
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserHomeComponent } from './user-home/user-home.component';

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
    UsersComponent,
    UsersListComponent,
    UserDetailComponent,
    UserHomeComponent
  ],
  providers:[ UserService ]
})
export class UserModule { }
