import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../subscriber';

@Component({
  selector: 'app-subscriber-form',
  templateUrl: './subscriber-form.component.html',
  styleUrls: ['./subscriber-form.component.css']
})
export class SubscriberFormComponent implements OnInit {

  model = new Subscriber('test@test.com');
  active = true;

  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newSubscriber(){}

  constructor() { }

  ngOnInit() {
  }

}
