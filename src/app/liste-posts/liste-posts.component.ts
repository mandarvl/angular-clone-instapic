import { Component, OnInit, Input } from '@angular/core';
import { DataList } from '../data/dataList' ;
import { PostComponent } from '../post/post.component' ;

@Component({
  selector: 'app-liste-posts',
  templateUrl: './liste-posts.component.html',
  styleUrls: ['./liste-posts.component.css']
})
export class ListePostsComponent implements OnInit {
  public dataReference = DataList;
  @Input() selectedPost: PostComponent ;
  hideDetail:boolean ;
  constructor() { 
    this.hideDetail = true ;
    this.selectedPost = new PostComponent() ;
  }

  ngOnInit(): void {
  }

  processReq(message:any){
    this.hideDetail = !message.show ;
    this.selectedPost = message.selectedPost ;
  }
}
