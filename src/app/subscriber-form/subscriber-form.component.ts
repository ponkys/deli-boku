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
  model = new Subscriber('test@test.com');
  active = true;
  subscribers: Subscriber[];
  mode = 'Observable';

  constructor (private subscribeService: SubscribeService) {}

  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  addSubscriber (email: string) {
    if (!email) { return; }
    this.subscribeService.createSubscriber(email)
                     .subscribe(
                       subscriber  => this.subscribers.push(subscriber),
                       error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
  }


}
