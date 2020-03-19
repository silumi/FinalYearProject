import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://localhost:44393';
  constructor(private httpClient: HttpClient) { }

  login(username, password) {
    const data = 'username=' + username + '&password=' + password + '&grant_type=password';
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded' });
    return this.httpClient.post(this.baseUrl + '/token', data, { headers: reqHeader });
  }
  register(model: any) {
    return this.httpClient.post(this.baseUrl + '/api/account/register', model);
  }
}
