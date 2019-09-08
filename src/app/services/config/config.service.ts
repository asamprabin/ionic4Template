import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiResponseInterface } from '../../../../../common/interfaces/apiResponseInterface';
import { UserInterface } from '../../../../../common/interfaces/userInterface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  userDetails: UserInterface;
  guardUpdatedDetails: boolean;

  api: string = environment.api;

  // Google Sign In
  googleSignIn = `${this.api}/googleauth/auth`;

  // Authentication Token
  token: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // Getting user details
  getUserDetails() {
    return { ...this.userDetails };
  }

  // Storing in Session Storage
  storeInSessionStorage(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  // Getting from Session Storage
  getFromSessionStorage(key: string): string {
    const value = sessionStorage.getItem(key) ? sessionStorage.getItem(key) : undefined;
    return value;
  }

  // Storing in Local Storage
  storeInLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  // Getting from Local Storage
  getFromLocalStorage(key: string): string {
    const value = localStorage.getItem(key) ? localStorage.getItem(key) : undefined;
    return value;
  }

  // Clearing Session Storage
  clearSessionStorage() {
    sessionStorage.clear();
  }

  // Clearing Local Storage
  clearLocalStorage() {
    localStorage.clear();
  }

  // logout User
  logoutUser() {
    this.clearSessionStorage();
    this.clearLocalStorage();
    this.router.navigate(['/login']);
  }

  // Adding token in header
  addTokenInHeaders(token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
        accept: 'true'
      }),
    };

    return httpOptions;
  }

  // Contacting Api
  contactApi(method: string, authentication: boolean, endPoint: string, data?: any): Observable<ApiResponseInterface> {

    if (!this.token) {
      this.token = this.getFromSessionStorage('token') ? this.getFromSessionStorage('token') : this.getFromLocalStorage('token');
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
        keyid: this.userDetails._id
      })
    };

    switch (method) {
      case 'get': return this.http.get<ApiResponseInterface>(endPoint, authentication ? httpOptions : undefined);
      case 'post': return this.http.post<ApiResponseInterface>(endPoint, data, httpOptions);
    }
  }

  getAllLocationList(method: string, endPoint: string, data?: any): Observable<ApiResponseInterface> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    switch (method) {
      case 'get': return this.http.get<ApiResponseInterface>(endPoint, httpOptions);
      case 'post': return this.http.post<ApiResponseInterface>(endPoint, data, httpOptions);
    }
  }
  
  // Contacting Api without token
  contactApiWithoutToken(endPoint: string): Observable<ApiResponseInterface> {
    return this.http.get<ApiResponseInterface>(endPoint);
  }

}
