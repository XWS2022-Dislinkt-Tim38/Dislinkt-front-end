import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

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

    

    

}