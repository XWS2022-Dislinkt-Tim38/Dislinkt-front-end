import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class RegistrationService {
    constructor(private http: HttpClient) { }
    private userUrl = 'http://localhost:8000/user';

   public addUser(obj: any){
        return this.http.post(this.userUrl, obj);
    }
    
}