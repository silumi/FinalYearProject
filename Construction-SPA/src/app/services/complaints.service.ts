import { Complaints } from './../_models/Complains';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginatedResult } from '../_models/Pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }

  getComplaints(id: number, page?, itemsPerPage?, complaintContainer? ) {
const paginatedResult: PaginatedResult<Complaints[]> = new PaginatedResult<Complaints[]>();
let params = new HttpParams();
params = params.append('ComplaintContainer', complaintContainer);
if (page != null && itemsPerPage != null) {
  params = params.append('pageNumber', page);
  params = params.append('pageSize', itemsPerPage);
}

return this.http.get<Complaints[]>(this.baseUrl + 'user/' + id + '/complaints', {observe: 'response', params})
  .pipe(
    map(response => {
      paginatedResult.result = response.body;
      if (response.headers.get('Pagination') !== null) {
        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
      }

      return paginatedResult;
    })
  );
}
getComplaintsThread(id: number, recepientId: number) {
  return this.http.get<Complaints[]>(this.baseUrl + 'user/' + id + '/complaints/thread/' + recepientId);
}
sendComplaint(id: number, complaint: Complaints) {
  return this.http.post(this.baseUrl + 'user/' + id + '/complaints', complaint);
}
deleteComplaint(id: number, userId: number) {
  return this.http.post(this.baseUrl + 'user/' + userId + '/complaints/' + id, {});
}
markAsChecked(userId: number, comId: number) {
  this.http.post(this.baseUrl + 'user/' + userId + '/complaints/' + comId + '/checked', {})
    .subscribe();
}
}
