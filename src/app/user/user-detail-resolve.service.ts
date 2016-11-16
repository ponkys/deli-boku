import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';
import { Observable }   from 'rxjs/Observable';

@Injectable()
export class UserDetailResolve implements Resolve<User> {
  constructor(private us: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User>|boolean {
    let userName = route.params['userName'];

    return this.us.getUserUserName(userName).map(user => {
      if (user) {
        return user;
      } else { // userName not found
        this.router.navigate(['/users']);
        return false;
      }
    });
  }
}

