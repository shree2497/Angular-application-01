import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  loadedPosts:Post[] = [];
  isFetching=false;
  id='-Ms9pr5nRUk6VJ5mJuWM';

  constructor(private http: HttpClient, private postsService:PostsService,private authService:AuthService) {}

  ngOnInit() {
    this.isFetching=true;
    this.postsService.fetchPosts().subscribe(Posts=>{
      this.isFetching=false;
      this.loadedPosts=Posts;
    }); 
  }

  onCreatePost(postData:Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title,postData.content,postData.age,postData.school,postData.city,postData.state,postData.country,postData.skills);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching=true;
    this.postsService.fetchPosts().subscribe(Posts=>{
      this.isFetching=false;
      this.loadedPosts=Posts;
    }); 
  }

  onClearPosts() {
    // Send Http request 
    this.postsService.deletePosts().subscribe(()=>{
     this.loadedPosts= [];
    });
  }

  updatepost(){
    return this.http
    .patch(`https://ng-complete-guide-1bfaf-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${this.id}.json`,
    { title: 'krishna',content:'c++' })
    .subscribe();
} 
  }  

