import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Items } from '../_models/Items';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }
  getItems(): Observable<Items[]> {
    return this.http.get<Items[]>(this.baseUrl + 'items');
  }
  getItem(id): Observable<Items> {
    return this.http.get<Items>(this.baseUrl + 'items/' + id);
  }
}
