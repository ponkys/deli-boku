
import { Injectable } from '@angular/core';

import { Headers, Http, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/observable';
import { Subscriber } from './subscriber';
import './rxjs-operators';

@Injectable()
export class SubscribeService {

  private subscriberUrl = 'http://localhost:4000/subscribers';

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  constructor(private _http: Http) { }

  createSubscriber (email: string): Observable<Subscriber> {
    let body = JSON.stringify({ email });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.subscriberUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


  //CORS that needs to be implemented in production

    // var headers = new Headers ({
    //     "access-control-request-method": "POST"
    // });

    // var options = new RequestOptions({
    //     headers: headers
    // });

    // this.http.get(this.postUrl, options);
}

