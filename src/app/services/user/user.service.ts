import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { ApiResponseInterface } from '../../../../../common/interfaces/apiResponseInterface';
import { Observable } from 'rxjs';
import { LocationInterface } from '../../../../../common/interfaces/locationInterface';
import { UserInterface } from '../../../../../common/interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiRoute = `${this.configService.api}/user`;
  dummyProfileImage: string = '../assets/img/profileImage.png'
  profilePageDetails: UserInterface;

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) { }

  // Getting User Details from Login Token
  getUserDetailsfromToken(token: string) {
    const httpOptions = this.configService.addTokenInHeaders(token);
    return this.http.get<ApiResponseInterface>(`${this.apiRoute}/getUserdetailsfromtoken`, httpOptions);
  }

  // Getting User Details from user name
  getUserDetailsFromUserName(userName: string) {
    return this.configService.contactApi('get', true, `${this.apiRoute}/getuserdetailsfromusername/${userName}`);
  }

  // Getting user news
  getUserNews(): Observable<ApiResponseInterface> {
    return this.configService.contactApi('get', true, `${this.apiRoute}/getusernews`);
  }

  // Getting User Suggesstions
  getUserSuggestions(limit: number, skipUserSuggestionsIdsList: string[]) {
    return this.configService.contactApi('post', true, `${this.apiRoute}/getusersuggestions`, {limit, skipUserSuggestionsIdsList});
  }

  // Registering User with username and district
  registerUser(userName: string, location: LocationInterface): Observable<ApiResponseInterface> {
    return this.configService.contactApi('post', true, `${this.apiRoute}/registeruser`, { userName, location });
  }

  //Regiter New user using mail
  registerNewUser(userName: string, location: LocationInterface, userPassword: string, userEmail: string): Observable<ApiResponseInterface> {
    return this.configService.getAllLocationList('post', `${this.apiRoute}/registernewuser`, { userName, location, userPassword, userEmail });
  }

  //user login
  userLogin(userName, password): Observable<ApiResponseInterface> {
    return this.configService.getAllLocationList('post', `${this.apiRoute}/getuserLoginDetails`, { userName, password });
  }

  //otp verification
  verifyOtp(userOtp: number, userEmail: string): Observable<ApiResponseInterface> {
    return this.configService.getAllLocationList('post', `${this.apiRoute}/verifyotp`, { userOtp, userEmail });
  }

  accountActivation(token: string): Observable<ApiResponseInterface> {
    return this.configService.getAllLocationList('post', `${this.apiRoute}/accountactivation`, { token });
  }

  resetpassword(email: string): Observable<ApiResponseInterface> {
    return this.configService.getAllLocationList('post', `${this.apiRoute}/resetpassword`, { email });
  }

  submitPassword(password: string, email: string): Observable<ApiResponseInterface> {
    return this.configService.getAllLocationList('post', `${this.apiRoute}/submitpassword`, { password, email });
  }
}
