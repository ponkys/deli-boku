import { User } from './user';
import { USERS } from './mock-users';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUserUserName(userName: string): Promise<User> {
    return this.getUsers()
               .then(users => users.find(user => user.userName === userName));
  }
}
