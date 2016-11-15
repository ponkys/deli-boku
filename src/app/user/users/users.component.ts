import { Component } from '@angular/core';

@Component({
  template: `
    <div class="col-8 col-m-10 group center">
      <h1 class="text-align-center">Dashboard</h1>
      <nav class="col-12 sub-nav">
        <ul class="col-8 col-m-12 center flex">
          <li><a routerLink="#" routerLinkActive="active">Users</a></li>
          <li><a routerLink="#" routerLinkActive="active">Subscribers</a></li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./users.component.css']
})

export class UsersComponent {

}
