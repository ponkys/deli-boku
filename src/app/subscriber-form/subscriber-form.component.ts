import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../subscriber';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-subscriber-form',
  templateUrl: './subscriber-form.component.html',
  styleUrls: ['./subscriber-form.component.scss'],
  providers: [SubscribeService]
})
export class SubscriberFormComponent implements OnInit {
  errorMessage: string;
  active = true;
  subscribers: Subscriber[];
  mode = 'Observable';

  sent = false;
  sentDelete = true;
  submitted = false;

  constructor (private subscribeService: SubscribeService) {}

  ngOnInit() { 
    this.subscribers = [];
  }

  addSubscriber (email: string) {
    this.sentDelete = !this.sentDelete;
    this.sent = !this.sent;
    this.submitted = true;

    if (!email) { return; }
    this.subscribeService.addSubscriber(email)
                      .subscribe(
                    //    // I dont need this as I'm not expectong anything it is just a subscribe.
                        subscribers  => this.subscribers.push(subscribers),
                        error =>  this.errorMessage = <any>error);
  }
}
