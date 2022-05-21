import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })


export class RegistrationService {


    constructor(private http: HttpClient) { }
    private userUrl = 'http://localhost:8000/user';

   public addUser(obj: any): Observable<any>{
        return this.http.post(this.userUrl, obj);
    }


    
}