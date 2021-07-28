import {User} from "../model/User" ;

export class Comment{
    id: number ;
    author: User ;
    date: string ;
    content: string ;

    constructor(id = 0, content = '', author = new User(), date = ''){
        this.id = id ;
        this.author = author ;
        this.date = date ;
        this.content = content ;
    }
}