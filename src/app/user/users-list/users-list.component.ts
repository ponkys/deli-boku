import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-users',
  templateUrl: './users-list.component.html',
  styleUrls: [ './users-list.component.css' ]
})
export class UsersListComponent implements OnInit {
  users: User[];
  selectedUserName: string;
  errorMessage: string;
  usersLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  isSelected(user: User) {
    return user.userName === this.selectedUserName;
  }
  
  // ngOnInit() {
  //   this.users = this.route.params
  //     .switchMap((params: Params) => {
  //       this.selectedUserName = params['userName'];
  //       return this.userService.getUsers();
  //     });
  // }

  ngOnInit() { this.getUsers(); }

  getUsers() {
    //this.users = this.route.params
    this.userService.getUsers()
                     .subscribe(
                       users => {
                         this.usersLoading  = false;
                         this.users = users
                       },
                       error =>  this.errorMessage = <any>error);
  }

  onSelect(user: User): void {
    this.selectedUserName = user.userName;

    // Navigate with relative link
    this.router.navigate([user.userName], { relativeTo: this.route });
  }

}




  