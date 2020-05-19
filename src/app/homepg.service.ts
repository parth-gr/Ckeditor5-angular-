import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HomepgService {

  private _homepgUrl = "http://localhost:3000/api/home";
  private _channelsUrl = "http://localhost:3000/api/channels";

  constructor(private http: HttpClient) { }

  getHomepg() {
    return this.http.get<any>(this._homepgUrl)
  }

  getChannels() {
    return this.http.get<any>(this._channelsUrl)
  }
}
