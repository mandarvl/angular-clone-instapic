import { Component, OnInit } from '@angular/core';
import { DataList } from '../data/DataList' ;
import { Post } from '../model/Post' ;

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  public DataReference = DataList ;
  selectedPost: Post ;
  constructor() { 
    this.selectedPost = new Post() ;
  }

  ngOnInit(): void {
  }

}
