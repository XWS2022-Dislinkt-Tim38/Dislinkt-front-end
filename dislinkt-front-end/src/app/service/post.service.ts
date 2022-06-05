import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PostModel } from "../model/post";

@Injectable({
    providedIn: 'root'
  })

export class PostService {

    constructor(private http: HttpClient) { }

    public getAllPublicPosts(): Observable<any>{
        return this.http.get(environment.baseUrlPostService + "/public");
    }

    public getFeed(userId: String): Observable<any>{
        return this.http.get(environment.baseUrlPostService + "/feed/" + userId);
    }

    
    public getOwnerPosts(userId: String): Observable<any>{
        return this.http.get(environment.baseUrlPostService + "/owner/" + userId);
    }

    public updatePost(post: PostModel): Observable<any>{
        return this.http.put(environment.baseUrlPostService, post);
    }

    public getSearchedPosts(userId: String, search: String): Observable<any>{
        return this.http.get(environment.baseUrlPostService + "/search/" + userId + "/" + search );
    }

    public deletePost(postId: String): Observable<any>{
        return this.http.delete(environment.baseUrlPostService + "/" + postId)
    }

    public addPost(post: PostModel): Observable<any>{
        return this.http.post(environment.baseUrlPostService, post)
    }

}