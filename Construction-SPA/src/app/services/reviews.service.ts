import { ServiceRating } from './../_models/ServiceRating';
import { Observable } from 'rxjs';
import { ServiceReviews } from './../_models/ServiceReviews';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }
  getUserReviews(id: number) {
    return this.http.get<ServiceReviews[]>(this.baseUrl + 'user/' + id + '/reviews');
  }
  getReviewsThread(id: number, recepientId: number) {
    return this.http.get<ServiceReviews[]>(this.baseUrl + 'user/' + id + '/reviews/thread/' + recepientId);
  }
  sendReview(id: number, review: ServiceReviews) {
    return this.http.post(this.baseUrl + 'user/' + id + '/reviews', review);
  }

  deleteReview(id: number, userId: number) {
    return this.http.post(this.baseUrl + 'user/' + userId + '/reviews/' + id, {});
  }
  addUserRate(userId: number, recepientId: number, rating: number) {
return this.http.post(this.baseUrl + 'user/' + userId + '/serviceRating/' + recepientId + '/rate/' + rating, {});
  }
  getRate(userId: number, recepientId: number): Observable<ServiceRating> {
return this.http.get<ServiceRating>(this.baseUrl + 'user/' + userId + '/serviceRating/' + recepientId);
  }
}
