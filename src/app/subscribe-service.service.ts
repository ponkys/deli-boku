
import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';
import { Subscriber } from './subscriber';

@Injectable()
export class SubscribeServiceService {

  private subscribersUrl = 'http://localhost:4000/subscribers';

  constructor(private _http: Http) { }

  createSubscriber(subscriber: Subscriber){
        return this._http.post(this.subscribersUrl, JSON.stringify(subscriber))
            .map(res => res.json());
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

