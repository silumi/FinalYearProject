import { User } from 'src/app/_models/Users';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'user');
  }
  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'user/' + id);
  }
  updateUser(id: number, user: User) {
return this.http.put(this.baseUrl + 'user/' + id, user);
  }
  setUserMainPhoto(userId: number,  photoId: number) {
return this.http.post(this.baseUrl + 'user/' + userId + '/userPhotos/' + photoId + '/setMain', {}); // {} satisfy post request
  }
  deletePhoto( userId: number, photoId: number ) {
    return this.http.delete(this.baseUrl + 'user/' + userId + '/userPhotos/' + photoId);
  }
  }

