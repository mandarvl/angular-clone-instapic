import { Component, Input, OnInit } from '@angular/core';
import { DataList } from '../data/dataList';
import { User } from '../model/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user: User ;
  constructor() { 
    this.user = DataList.GetUserById(3) ;
  }

  ngOnInit(): void {
  }

}
