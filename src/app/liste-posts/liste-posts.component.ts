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
      new Post(1, "assets/images/1.jpg", "Rakoto Perline", "assets/images/5.jpg", "5h", "Blabalablabalbalba"),
      new Post(2, "assets/images/3.jpg", "Rasoa Soa", "assets/images/10.jpg", "12h", "Blablbalablabla")
    ] ;
  }

  ngOnInit(): void {
    console.log(this.posts) ;
  }

}
