import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { ListePostsComponent } from './liste-posts/liste-posts.component';

const routes: Routes = [
  {
    path: '',
    component: ListePostsComponent
  },
  {
    path: 'comment',
    component: CommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
