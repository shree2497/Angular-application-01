import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map,take } from "rxjs/operators";
import{exhaustMap} from "rxjs"
import { AuthService } from "../auth.service";

@Injectable({providedIn:'root'})

export class PostsService {

   constructor(private http:HttpClient,private authService:AuthService){}

    createAndStorePost(title:string,content:string,age:number,
      skills:string,
      school:string,
      city:string,
      state:string,
      country:string){
        const postData: Post ={title:title,content:content,age:age,
          skills:skills,
          school:school,
          city:city,
          state:state,
          country:country};
        this.http
        .post<{name:string}>(
          'https://ng-complete-guide-1bfaf-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
          postData
        )
        .subscribe(responseData => {
          console.log(responseData);
        });
    }

    fetchPosts(){
        //..
        return this.http.get<{[key:string]:Post}>('https://ng-complete-guide-1bfaf-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
        .pipe(map(responseData =>{
          const postsArray:Post[]=[]; 
          for(const key in responseData ){
            if(responseData.hasOwnProperty(key)){
            postsArray.push({...responseData[key], id:key})
            }
          }
          return postsArray;
        }));
         
    }

    deletePosts(){
     return this.http.delete('https://ng-complete-guide-1bfaf-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    }
}