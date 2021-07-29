import { DataList } from "../data/dataList";
import {User} from "../model/User" ;

export class Comment{
    id: number ;
    authorId: number ;
    date: string ;
    content: string ;

    constructor(id = 0, content = '', authorId = 0, date = ''){
        this.id = id ;
        this.authorId = authorId ;
        this.date = date ;
        this.content = content ;
    }

    GetAuthor():User{
        return DataList.GetUserById(this.authorId) ;
    }
}