import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _adminLoginUrl = "http://localhost:3000/api/adminlogin" ;
  private _adminChannel = "http://localhost:3000/api/adminchannel" ;
  constructor(private http: HttpClient,
              private _router: Router) { }
  
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }
  adminLogin(admin) {
    return this.http.post<any>(this._adminLoginUrl, admin)
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }
  loggedIn() {
    return !!localStorage.getItem('token')  
      
  }
  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }
  getToken() {
    return localStorage.getItem('token')
  }
  addChannel(channel) {
    return this.http.post<any>(this._adminChannel, channel)
  }
}
