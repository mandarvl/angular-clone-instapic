import { Component, OnInit } from '@angular/core';
import { Post } from '../model/Post';

@Component({
  selector: 'app-liste-posts',
  templateUrl: './liste-posts.component.html',
  styleUrls: ['./liste-posts.component.css']
})
export class ListePostsComponent implements OnInit {
  posts: Post[] ;
  constructor() { 
    this.posts = [
      new Post(1, "assets/images/1.jpg", "Ravalison Manda", "assets/images/5.jpg", "5h"),
      new Post(2, "assets/images/3.jpg", "Rakoto Zafy", "assets/images/10.jpg", "12h")
    ] ;
  }

  ngOnInit(): void {
    console.log(this.posts) ;
  }

}
