import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class AuthenticationService {

    constructor(private http: HttpClient) { }

   public login(obj: any): Observable<any>{
        return this.http.post(environment.baseUrlAuthService + "/login", obj)
    }


    
}