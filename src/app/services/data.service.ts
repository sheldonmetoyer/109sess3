import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  posts: Post[] = [];

  constructor() { }

  public savePost(post){
    this.posts.push(post);
  }

  public getAllPosts() {
    return this.posts;

  }
}
