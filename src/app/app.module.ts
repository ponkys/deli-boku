import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';

//modules
import { UserModule  } from './user/user.module';

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

//maps
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BasicLocationMapComponent } from './basic-location-map/basic-location-map.component';
import { BasicLocationMapStyleDirective } from './basic-location-map/basic-location-map-style.directive';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    //check this later module direct due to route
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    //routing
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrr2PKXEHx2XNvk0v8T_KAKxzmsylOjLQ'
    }),
    //child modules
    UserModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
