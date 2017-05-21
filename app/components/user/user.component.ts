import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html'
 
})
export class UserComponent  { 
  fbname : string; 
  content : string;
  likes: number;
  comments: number;
  posts:Post[];

}

interface Post{
  _id:string;
  fbname:string;
  content: string;
  likes: number;
  comments: number;
}