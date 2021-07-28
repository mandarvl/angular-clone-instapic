import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../model/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post ;
  isLoved: boolean ;
  show:boolean ;
  @Output() sendRequestToData = new EventEmitter() ;
  constructor() { 
    this.post = new Post() ;
    this.isLoved = false ;
    this.show = false ;
  }

  ngOnInit(): void {
  }

  toggleLove($event:Event){
    $event.preventDefault() ;
    this.isLoved = !this.isLoved ;
  }

  viewDetail($event:Event){
    $event.preventDefault() ;
    this.show = !this.show ;
    this.sendEvent() ;
  }

  close(){
    this.show = false ;
    this.sendEvent() ;
  }

  sendEvent(){
    this.sendRequestToData.emit({
      show: this.show,
      selectedPost: this
    }) ;
  }
}
