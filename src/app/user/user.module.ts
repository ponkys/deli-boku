import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';

//services


//components
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule 
  ],
  declarations: [
    UserComponent],
  providers:[]
})
export class UserModule { }
