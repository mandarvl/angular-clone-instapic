import { Component, OnInit } from '@angular/core';
import { Post } from '../model/Post';
import { User } from '../model/User' ;

@Component({
  selector: 'app-liste-posts',
  templateUrl: './liste-posts.component.html',
  styleUrls: ['./liste-posts.component.css']
})
export class ListePostsComponent implements OnInit {
  posts: Post[] ;
  users: User[] ;
  constructor() { 
    this.users = [
      new User(1, "Perline", "Rakoto", "assets/images/5.jpg"),
      new User(2, "Soa", "Rasoa", "assets/images/10.jpg"),
      new User(3, "Manda", "Ravalison", "assets/images/10.jpg")
    ]
    this.posts = [
      new Post(1, "assets/images/1.jpg", this.users[0], "5h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
      new Post(2, "assets/images/3.jpg", this.users[1], "12h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    ] ;
  }

  ngOnInit(): void {
    console.log(this.posts) ;
  }

}
