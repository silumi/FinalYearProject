import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Items } from '../_models/Items';
import { PaginatedResult } from '../_models/Pagination';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }
  getItems(page?, itemsPerPage?, itemParams?): Observable<PaginatedResult<Items[]>> {
    const paginatedResult: PaginatedResult<Items[]> = new PaginatedResult<Items[]>();

    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    if (itemParams != null) {
     params = params.append('itemType', itemParams.itemType);
     params = params.append('minItemPrice', itemParams.minItemPrice);
     params = params.append('maxItemPrice', itemParams.maxItemPrice);
     params = params.append('orderBy', itemParams.orderBy);
     }
    return this.http.get<Items[]>(this.baseUrl + 'items', {observe: 'response', params})
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
  getItem(id): Observable<Items> {
    return this.http.get<Items>(this.baseUrl + 'items/' + id);
  }
}
