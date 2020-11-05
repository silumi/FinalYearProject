import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Todos } from '../_models/Todos';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }
  getUserTodos(id: number) {
   return this.http.get<Todos[]>(this.baseUrl + 'user/' + id + '/todos');
   }
}
