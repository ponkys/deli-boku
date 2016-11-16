import { User }         from './user';

import { Injectable }   from '@angular/core';
import {  Headers, 
          Http, 
          RequestOptions, 
          Response }    from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class UserService {

  private userUrl = 'https://dokulatino-back.herokuapp.com/users';

  private extractData(res: Response) {
  
    let body = res.json();
    return body;

  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  constructor(private _http: Http) { }

  getUsers(): Observable<User[]> {
    return this._http.get(this.userUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getUserUserName(userName: string): Observable<User> {
    return this.getUsers()
               .map(users => users.find(user => user.userName === userName));
  }
}








