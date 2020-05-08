import { PaginatedResult } from './../_models/Pagination';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Message } from '../_models/Message';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }

  getMessages(id: number, page?, itemsPerPage?, messageContainer? ) {
const paginatedResult: PaginatedResult<Message[]> = new PaginatedResult<Message[]>();
let params = new HttpParams();
params = params.append('MessageContainer', messageContainer);
if (page != null && itemsPerPage != null) {
  params = params.append('pageNumber', page);
  params = params.append('pageSize', itemsPerPage);
}

return this.http.get<Message[]>(this.baseUrl + 'user/' + id + '/messages', {observe: 'response', params})
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

getMessageThread(id: number, recepientId: number) {
  return this.http.get<Message[]>(this.baseUrl + 'user/' + id + '/messages/thread/' + recepientId);
}
sendMessage(id: number, message: Message) {
  return this.http.post(this.baseUrl + 'user/' + id + '/messages', message);
}

deleteMessage(id: number, userId: number) {
  return this.http.post(this.baseUrl + 'user/' + userId + '/messages/' + id, {});
}

markAsRead(userId: number, messageId: number) {
  this.http.post(this.baseUrl + 'user/' + userId + '/messages/' + messageId + '/read', {})
    .subscribe();
}  }

