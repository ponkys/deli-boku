import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // addSubscriber (email: string) {
  //   this.sent = !this.sent;
  //   this.submitted = true;

  //   if (!email) { return; }
  //   this.subscribeService.addSubscriber(email)
  //                     .subscribe(
  //                   //    // I dont need this as I'm not expectong anything it is just a subscribe.
  //                       subscribers  => this.subscribers.push(subscribers),
  //                       error =>  this.errorMessage = <any>error);
  // }

}
