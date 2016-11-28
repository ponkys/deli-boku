import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { HttpModule }          from '@angular/http';

import { SharedModule }        from '../shared/shared.module';

import { PostsComponent }      from './posts.component';
import { PostService }         from './post.service';
import { UserService }         from '../user/user.service';

//routing
import { PostsRoutingModule }     from './posts-routing.module';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HttpModule,
         //routing
        PostsRoutingModule,
    ],
    declarations: [
        PostsComponent 
    ],
    providers: [
        PostService,
        UserService
    ]
})
export class PostsModule { 
}