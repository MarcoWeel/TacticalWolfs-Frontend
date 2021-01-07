import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  PostEvent(event) {
    var url = 'http://localhost/event';
    return this.http.post(url, event);
  }
}
