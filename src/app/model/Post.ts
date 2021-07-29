import { DataList } from "../data/dataList";
import {User} from "../model/User" ;
import {Comment} from "../model/Comment" ;

export class Post{
    id: number ;
    imagePath: string ;
    authorId: number ;
    date: string ;
    description: string ;

    constructor(id = 0, imagePath = '', authorId = 0, date = '', description = ''){
        this.id = id ;
        this.imagePath = imagePath ;
        this.authorId = authorId ;
        this.date = date ;
        this.description = description ;
    }

    GetAuthor():User{
        return DataList.GetUserById(this.authorId) ;
    }

    GetComments():Comment[]{
        return DataList.GetCommentsByPostId(this.id) ;
    }
}