import { Component } from '@angular/core';

@Component({
  template: `
    <div class="col-8 col-m-10 group center">
      <h2>USERS</h2>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./users.component.css']
})

export class UsersComponent {

}
