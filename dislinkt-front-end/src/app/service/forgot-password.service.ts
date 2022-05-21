import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

  export class ForgotPasswordService {
    constructor(private http: HttpClient) { }

    public resetPasswordRequest(email: any): Observable<any>{
        return this.http.post(environment.baseUrlUserService +"/resetPasswordRequest", email);
    }
  }