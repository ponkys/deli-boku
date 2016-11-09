import { User } from './user';
import { USERS } from './mock-users';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUsersSlowly(): Promise<User[]> {
    return new Promise<User[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getUsers());
  }

  getUserUserName(userName: string): Promise<User> {
    return this.getUsers()
               .then(users => users.find(user => user.userName === userName));
  }
}
