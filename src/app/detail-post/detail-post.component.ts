import { Component, Input, OnInit } from '@angular/core';
import { DataList } from '../data/dataList' ;
import { PostComponent } from '../post/post.component' ;

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  public DataReference = DataList ;
  @Input() selectedPost: PostComponent ;
  constructor() { 
    this.selectedPost = new PostComponent() ;
  }

  ngOnInit(): void {
  }

  closeDetail($event:Event): void{
    $event.preventDefault() ;
    this.selectedPost.close() ;
  }
}
