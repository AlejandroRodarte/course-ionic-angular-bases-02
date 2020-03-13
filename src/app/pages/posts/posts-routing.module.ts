import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';

const postsRoutes: Routes = [
  {
    path: '',
    component: PostsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(postsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule { }
