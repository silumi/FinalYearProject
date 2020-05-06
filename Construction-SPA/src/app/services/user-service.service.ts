import { map } from 'rxjs/operators';
import { User } from 'src/app/_models/Users';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../_models/Pagination';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }

  getUsers(page?, itemsPerPage?): Observable<PaginatedResult<User[]>> {
    const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();
    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    // if (userParams != null) {
    //   params = params.append('minAge', userParams.minAge);
    //   params = params.append('maxAge', userParams.maxAge);
    //   params = params.append('gender', userParams.gender);
    //   params = params.append('orderBy', userParams.orderBy);
    // }
    return this.http.get<User[]>(this.baseUrl + 'user', {observe: 'response', params})
    .pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
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

