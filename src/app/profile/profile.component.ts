import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataList } from '../data/dataList';
import { User } from '../model/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user: User ;
  constructor(private titleService:Title) { 
    this.user = DataList.GetUserById(3) ;
    this.titleService.setTitle("Profil de "+this.user.getFullName()+" | par Ravalison Manda Jerisoa IMTICIA5");
  }

  ngOnInit(): void {
  }

}
