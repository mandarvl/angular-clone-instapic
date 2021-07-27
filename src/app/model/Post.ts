export class Post{
    id: number ;
    imagePath: string ;
    authorName: string ;
    authorPdpPath: string ;
    date: string ;
    description: string ;

    constructor(id = 0, imagePath = '', authorName = '', authorPdpPath = '', date = '', description = ''){
        this.id = id ;
        this.imagePath = imagePath ;
        this.authorName = authorName ;
        this.authorPdpPath = authorPdpPath ;
        this.date = date ;
        this.description = description ;
    }
}