import { DataList } from "../data/dataList";
import {User} from "../model/User" ;

export class Comment{
    id: number ;
    authorId: number ;
    date: string ;
    content: string ;
    postId: number ;

    constructor(id = 0, content = '', authorId = 0, date = '', postId = 0){
        this.id = id ;
        this.authorId = authorId ;
        this.date = date ;
        this.content = content ;
        this.postId = postId ;
    }

    GetAuthor():User{
        return DataList.GetUserById(this.authorId) ;
    }
}