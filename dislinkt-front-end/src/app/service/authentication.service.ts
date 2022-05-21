import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class AuthenticationService {

    constructor(private http: HttpClient) { 
      const token = localStorage.getItem("regUserToken")
      this._isLoggedIn$.next(!!token)
    }

    private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
    isLoggedIn$ = this._isLoggedIn$.asObservable()

   public login(obj: any): Observable<any>{
        return this.http.post(environment.baseUrlAuthService + "/login", obj).pipe(
          tap((response: any) => {
            
            this.storeToken(response.accessToken)
            console.log(response.accessToken)})
        )
    }

    public storeToken(accessToken: any) {
      this._isLoggedIn$.next(true)
      localStorage.setItem("regUserToken", accessToken)
    }

}