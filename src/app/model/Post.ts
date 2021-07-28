import {User} from "../model/User" ;

export class Post{
    id: number ;
    imagePath: string ;
    author: User ;
    date: string ;
    description: string ;

    constructor(id = 0, imagePath = '', author = new User(), date = '', description = ''){
        this.id = id ;
        this.imagePath = imagePath ;
        this.author = author ;
        this.date = date ;
        this.description = description ;
    }
}