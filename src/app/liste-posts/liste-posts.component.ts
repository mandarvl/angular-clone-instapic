import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataList } from '../data/dataList' ;
import { Post } from '../model/Post';
import { PostComponent } from '../post/post.component' ;

@Component({
  selector: 'app-liste-posts',
  templateUrl: './liste-posts.component.html',
  styleUrls: ['./liste-posts.component.css']
})
export class ListePostsComponent implements OnInit {
  @Input() posts: Post[];
  @Input() selectedPost: PostComponent ;
  hideDetail:boolean ;
  @Input() userId:number;
  constructor(private titleService:Title) { 
    this.hideDetail = true ;
    this.selectedPost = new PostComponent() ;
    this.posts = DataList.posts ;
    this.userId = 0 ;
  }

  ngOnInit(): void {
    if(this.userId != 0){
      this.posts = DataList.GetPostsByUserId(this.userId) ;
    }else{
      this.titleService.setTitle("InstaPic | par Ravalison Manda Jerisoa IMTICIA5");
    }
  }

  processReq(message:any){
    this.hideDetail = !message.show ;
    this.selectedPost = message.selectedPost ;
  }
}
