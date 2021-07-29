import { Component, OnInit, ViewChild } from '@angular/core';
import { DataList } from '../data/dataList';
import { Post } from '../model/Post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @ViewChild('description') description:any;
  @ViewChild('file') file:any;
  @ViewChild('selectedImg') selectedImg:any;
  selectedSrc:any ;
  showPreview: boolean ;
  constructor() { 
    this.selectedSrc = "" ;
    this.showPreview = false ;
  }

  ngOnInit(): void {
  }

  addPost($event:Event){
    $event.preventDefault() ;
    const nbPost = DataList.posts.length ;
    const lastId = DataList.posts[nbPost - 1].id ;
    DataList.posts.push(new Post(lastId + 1, "assets/images/11.jpg", 3, "2min", this.description.nativeElement.value)) ;
    this.description.nativeElement.value = "" ;
  }

  showSelectedImage($event: Event){
    this.showPreview = this.readURL(this.file.nativeElement.files) ;
    console.log(this.showPreview) ;
  }

  readURL(files:any): boolean {
    if (files && files[0]) {
        const file = files[0];

        const reader = new FileReader();
        reader.onload = e => this.selectedSrc = reader.result?.toString();

        reader.readAsDataURL(file);
        return true ;
    }

    return false
  }

}
