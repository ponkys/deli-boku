import { Component } from '@angular/core';

@Component({
  template: `
    <div class="col-8 col-m-10 group center">
      <h1 class="text-align-center">Dashboard</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./users.component.css']
})

export class UsersComponent {

}
