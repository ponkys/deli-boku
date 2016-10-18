
import { Injectable }   from '@angular/core';

import {  Headers, Http, 
          RequestOptions, 
          Response }    from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import { Subscriber }   from './subscriber';
import './rxjs-operators';

@Injectable()
export class SubscribeService {

  private subscriberUrl = 'https://dokulatino-back.herokuapp.com/subscribers';

  private extractData(res: Response) {
    let body = res.toString();
    return body;
    //return body.data || { };
  }
  constructor(private _http: Http) { }

  addSubscriber (email: string): Observable<Subscriber> {
    let body = JSON.stringify({ email });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.subscriberUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

