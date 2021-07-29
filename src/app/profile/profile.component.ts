import { Component, OnInit } from '@angular/core';
import { DataList } from '../data/dataList';
import { User } from '../model/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User ;
  constructor() { 
    this.user = DataList.users[0] ;
  }

  ngOnInit(): void {
  }

}
