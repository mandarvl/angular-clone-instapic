import { Component, OnInit, Input } from '@angular/core';
import { DataList } from '../data/DataList' ;

@Component({
  selector: 'app-liste-posts',
  templateUrl: './liste-posts.component.html',
  styleUrls: ['./liste-posts.component.css']
})
export class ListePostsComponent implements OnInit {
  public dataReference = DataList;
  constructor() { 
  }

  ngOnInit(): void {
    
  }

}
