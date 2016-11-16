import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../subscriber';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-subscribers-list',
  templateUrl: './subscribers-list.component.html',
  styleUrls: ['./subscribers-list.component.css'],
  providers: [SubscribeService]
})
export class SubscribersListComponent implements OnInit {
  errorMessage: string;
  subscribersLoading = true;

  subscribers: Subscriber[];

  constructor (private subscribeService: SubscribeService) {}

  ngOnInit() { this.getSubscribers(); }

  getSubscribers() {
    this.subscribeService.getSubscribers()
                     .subscribe(
                       subscribers => {
                         this.subscribersLoading = false;
                         this.subscribers = subscribers
                       },
                       error =>  this.errorMessage = <any>error);
  }

}
