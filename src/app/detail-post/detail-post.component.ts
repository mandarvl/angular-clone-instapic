import { Component, Input, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { DataList } from '../data/dataList' ;
import { PostComponent } from '../post/post.component' ;
import { PlaceHolderDirective } from '../utils/placeholder.directive';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  public DataReference = DataList ;
  @Input() selectedPost: PostComponent ;
  @ViewChild(PlaceHolderDirective) newComments!: PlaceHolderDirective ;
  @ViewChild('textMessage') textarea: any ;
  constructor(private componentFactoryResolver:ComponentFactoryResolver) { 
    this.selectedPost = new PostComponent() ;
  }

  ngOnInit(): void {
  }

  closeDetail($event:Event): void{
    $event.preventDefault() ;
    this.selectedPost.close() ;
  }
  
  addComment($event:Event){
    $event.preventDefault() ;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CommentComponent) ;
    const componentRef = this.newComments.viewContainerRef.createComponent(componentFactory) ;
    componentRef.instance.comment.author = this.DataReference.users[2] ;
    console.log(this.textarea.nativeElement.value) ;
    componentRef.instance.comment.content = this.textarea.nativeElement.value ;
    componentRef.instance.comment.date = "A l'instant" ;
    this.textarea.nativeElement.value = "" ;
  }

}
