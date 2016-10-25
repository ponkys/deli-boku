
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
  private getsubscribersUrl = 'https://dokulatino-back.herokuapp.com/';


  private extractData(res: Response) {
    //let body = res.toString();
    //return body;
    //return body.data || { }; keep when uncomment above

    //test
    let body = res.json();
    return body;
    //return body.data || { };
  }
  constructor(private _http: Http) { }

  getSubscribers(): Observable<Subscriber[]> {
    return this._http.get(this.getsubscribersUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addSubscriber (email: string): Observable<Subscriber> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.subscriberUrl, { email }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
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

