import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { PostsComponent } from './posts.component';

//providers

@NgModule({
  imports: [
     RouterModule.forChild([
      {
        path: 'post',
        component: PostsComponent
          },
    ])
  ],
  exports: [RouterModule]
})
export class PostsRoutingModule { }