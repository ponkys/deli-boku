import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';
import { SubscribeService } from './subscribe.service';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule }     from './app-routing.module';
import { SubscribersListComponent } from './subscribers-list/subscribers-list.component';
import { AboutComponent } from './about/about.component';
import { WatchFreeComponent } from './watch-free/watch-free.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SubscriberFormComponent,
    HeaderComponent,
    SubscribersListComponent,
    AboutComponent,
    WatchFreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [SubscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
