import  { Component, 
          OnInit, 
          HostBinding,
          trigger, 
          transition,
          animate, 
          style, 
          state }       from '@angular/core';
import  { ActivatedRoute, 
          Router, 
          Params }      from '@angular/router';
import  { Location }    from '@angular/common';

import  { User }        from '../user';
import  { UserService } from '../user.service';

@Component({
  selector: 'my-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [ './user-detail.component.css' ],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})

export class UserDetailComponent implements OnInit {
  //animations
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

  //Initiate imported variables
  user: User;
  userName: String;
  errorMessage: String;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  //methods
  ngOnInit() {
    this.route.data.forEach((data: { user: User }) => {
      this.userName = data.user.userName;
      this.user = data.user;
    });
  }

  gotoUsers() {
    let userUserName = this.user ? this.user.userName : null;
    // Pass along the user userName if available
    // so that the UserListComponent can select that user.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the users
    this.router.navigate(['../', { userName: userUserName, foo: 'foo' }], { relativeTo: this.route });
  }

  goBack(): void {
    this.location.back();
  }

  // updateUser(
  //   _id: string,
  //   userName: string,
  //   firstName: string,
  //   lastName: string,
  //   middleNameInitial: string,
  //   password: string,
  //   role: string,
  //   email: string){ 
  //   if (
  //     !_id,
  //     !userName,
  //     !firstName,
  //     !lastName,
  //     !middleNameInitial,
  //     !password,
  //     !role,
  //     !email){ return;}
  //   this.userService.updateUser(
  //     _id,
  //     userName,
  //     firstName,
  //     lastName,
  //     middleNameInitial,
  //     password,
  //     role,
  //     email)
  //   .subscribe(
  //     //user => this.userService.push(user),
  //     error => this.errorMessage = <any>error
  //   ); 
  // }

  cancel() {
    this.gotoUsers();
  }
}