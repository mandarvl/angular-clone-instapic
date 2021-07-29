import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { CommentComponent } from './comment/comment.component';
import { ListePostsComponent } from './liste-posts/liste-posts.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ListePostsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'new',
    component: AddPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
