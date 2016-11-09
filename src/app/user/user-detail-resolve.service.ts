import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';

@Injectable()
export class UserDetailResolve implements Resolve<User> {
  constructor(private us: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<User>|boolean {
    let userName = route.params['userName'];

    return this.us.getUserUserName(userName).then(user => {
      if (user) {
        return user;
      } else { // userName not found
        this.router.navigate(['/users']);
        return false;
      }
    });
  }
}

