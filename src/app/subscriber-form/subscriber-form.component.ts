import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../subscriber';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-subscriber-form',
  templateUrl: './subscriber-form.component.html',
  styleUrls: ['./subscriber-form.component.css'],
  providers: [SubscribeService]
})
export class SubscriberFormComponent implements OnInit {
  errorMessage: string;
  active = true;
  subscribers: Subscriber[];
  mode = 'Observable';

  constructor (private subscribeService: SubscribeService) {}

  submitted = false;

  addSubscriber (email: string) {
    this.submitted = true;
    if (!email) { return; }
    this.subscribeService.createSubscriber(email)
                     .subscribe(
                       subscriber  => this.subscribers.push(subscriber),
                       error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
  }


}
