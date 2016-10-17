import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';
import { SubscribeService } from './subscribe.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SubscriberFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [SubscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
