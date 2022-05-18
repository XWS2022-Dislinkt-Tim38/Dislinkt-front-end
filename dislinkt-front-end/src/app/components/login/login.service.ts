import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class LoginService {
    constructor(private http: HttpClient) { }
    private userUrl = 'http://localhost:8002/auth/login';

   public createAuthenticationToken(obj: any){
        return this.http.post(this.userUrl, obj);
    }
    
}