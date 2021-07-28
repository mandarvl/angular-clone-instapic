import { Component, OnInit, Input } from '@angular/core';
import {Comment} from '../model/Comment' ;

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment ;
  constructor() {
    this.comment = new Comment() ;
  }

  ngOnInit(): void {
  }

}
