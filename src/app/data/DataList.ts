import { Post } from '../model/Post';
import { User } from '../model/User' ;
import { Comment } from '../model/Comment' ;

export class DataList{
    static users : User[] = [
        new User(1, "Perline", "Rakoto", "assets/images/5.jpg"),
        new User(2, "Soa", "Rasoa", "assets/images/10.jpg"),
        new User(3, "Manda", "Ravalison", "assets/images/9.jpg")
      ] ;
  
    static posts : Post[] = [
        new Post(1, "assets/images/1.jpg", DataList.users[0], "5h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(2, "assets/images/3.jpg", DataList.users[1], "12h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(3, "assets/images/4.jpg", DataList.users[0], "5h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(4, "assets/images/8.jfif", DataList.users[2], "12h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(5, "assets/images/14.jfif", DataList.users[1], "6h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(6, "assets/images/12.jfif", DataList.users[0], "18h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(7, "assets/images/11.jpg", DataList.users[2], "12h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        new Post(4, "assets/images/13.jfif", DataList.users[2], "12h", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    ] ;

    static comments : Comment[] = [
        new Comment(1, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", DataList.users[0], "4h"),
        new Comment(2, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", DataList.users[2], "30m"),
        new Comment(3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", DataList.users[2], "20m")
    ]
}