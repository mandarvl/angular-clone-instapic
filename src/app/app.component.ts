import { Component } from '@angular/core';
import { ListePostsComponent } from './liste-posts/liste-posts.component';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("InstaPic | par Ravalison Manda Jerisoa IMTICIA5");
  }
}
