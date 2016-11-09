import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { User }         from '../user';
import { UserService }  from '../user.service';

@Component({
  selector: 'my-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [ './user-detail.component.css' ]
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let userName = params['userName'];
      this.userService.getUserUserName(userName)
        .then(user => this.user = user);
    });
  }

  goBack(): void {
    this.location.back();
  }
}