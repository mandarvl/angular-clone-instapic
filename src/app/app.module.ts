import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListePostsComponent } from './liste-posts/liste-posts.component';
import { PostComponent } from './post/post.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { CommentComponent } from './comment/comment.component';
import { PlaceHolderDirective } from './utils/placeholder.directive';
import { ProfileComponent } from './profile/profile.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListePostsComponent,
    PostComponent,
    DetailPostComponent,
    CommentComponent,
    PlaceHolderDirective,
    ProfileComponent,
    AddPostComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
