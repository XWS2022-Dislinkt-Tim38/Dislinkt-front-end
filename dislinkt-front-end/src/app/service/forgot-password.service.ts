import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { partitionArray } from "@angular/compiler/src/util";
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

    public checkIfExpired(tokenId: string): Observable<boolean> {   
      return this.http.get<boolean>(environment.baseUrlTokenService + "/recovery/"+tokenId);  
    }
    
    public changePassword(obj: any): Observable<any> {
      return this.http.post(environment.baseUrlUserService + "/changePassword", obj);
    }
  }