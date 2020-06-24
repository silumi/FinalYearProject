import { ServiceReviews } from './../_models/ServiceReviews';
import { Injectable } from '@angular/core';
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
}
