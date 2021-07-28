import { Post } from '../model/Post';
import { User } from '../model/User' ;
import { Comment } from '../model/Comment' ;

export class DataList{
    static users : User[] = [
        new User(1, "Perline", "Rakoto", "assets/images/5.jpg"),
        new User(2, "Soa", "Rasoa", "assets/images/10.jpg"),
        new User(3, "Manda", "Ravalison", "assets/images/10.jpg")
      ] ;
  
    static posts : Post[] = [
        new Post(1, "assets/images/1.jpg", users[0], "5h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(2, "assets/images/3.jpg", users[1], "12h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    ] ;

    static comments : Comment[] = [
        new Comment(1, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", users[0]),
        new Comment(2, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", users[2]),
        new Comment(3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", users[2])
    ]
}