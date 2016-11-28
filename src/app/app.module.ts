import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';

//routing
import {APP_BASE_HREF} from '@angular/common';
//modules
import { UserModule  } from './user/user.module';
import { PostsModule  } from './posts/posts.module';
//components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { WatchFreeComponent } from './watch-free/watch-free.component';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';
// users components due to direct route
import { LoginComponent } from './user/login/login.component';
// I should decide where to move this

//services

//routing
import { AppRoutingModule }     from './app-routing.module';
import { LoginRoutingModule }   from './user/login/login-routing.module';

//maps
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BasicLocationMapComponent } from './basic-location-map/basic-location-map.component';
import { BasicLocationMapStyleDirective } from './basic-location-map/basic-location-map-style.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule }      from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SubscriberFormComponent,
    AboutComponent,
    WatchFreeComponent,
    BasicLocationMapComponent,
    BasicLocationMapStyleDirective,
    PageNotFoundComponent,
    //check this later module direct due to route
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    //routing
    LoginRoutingModule,
    AppRoutingModule,
    
    //Maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrr2PKXEHx2XNvk0v8T_KAKxzmsylOjLQ'
    }),
    //child modules
    UserModule,
    SharedModule,
    PostsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
