import  { Injectable } from '@angular/core';
import  { Http, 
          Headers,
          RequestOptions, 
          Response } from '@angular/http';

import  { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  //production route 
  private _authUrl = 'http://dokulatino-back.herokuapp.com/api/authenticate'; 
  //development route 
  //private _authUrl = 'http://localhost:4000/api/authenticate';
  
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  isLoggedIn: boolean = false;
  public token: string;

  constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }


  login(userName: string, password: string): Observable<boolean> {
     let headers = new Headers({   
                                'Content-Type': 'application/json' 
                              });
    let options = new RequestOptions({ headers: headers });


    var reqObj = { userName: userName, password: password }
    //Console log to debug: I can see the data I'am sending
    //console.log(reqObj);
    return this.http.post(this._authUrl, reqObj, options)
      .map((response: Response) => {
        console.log(response)

        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
          if (token) {
            this.isLoggedIn = true;
            // set token property
            this.token = token;

            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify({ userName: userName, token: token }));

            // return true to indicate successful login
            return true;   
            
          } else {
            // return false to indicate failed login
            return false;
          }
      })
      .catch(this.handleError); 
  }

  logout(): void {
    this.isLoggedIn = false;
    this.token = null;
    localStorage.removeItem('currentUser');
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

}