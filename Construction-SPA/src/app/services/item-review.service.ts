import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ItemReviews } from '../_models/itemReviews';

@Injectable({
  providedIn: 'root'
})
export class ItemReviewService {
  baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }
  getItemReviews(id: number, userId: number) {
    return this.http.get<ItemReviews[]>(this.baseUrl + 'user/' + userId + '/itemReviews/' + id);
  }
  getItemReviewsThread(userId: number, id: number) {
    return this.http.get<ItemReviews[]>(this.baseUrl + 'user/' + userId + '/itemReviews/thread/' + id);
  }
  sendReview(userId: number, review: ItemReviews) {
   return this.http.post(this.baseUrl + 'user/' + userId + '/itemReviews', review);
  }

  deleteReview(id: number, userId: number) {
    return this.http.post(this.baseUrl + 'user/' + userId + '/itemReviews/' + id, {});
  }
  addItemRate(userId: number, itemId: number, rating: number) {
    return this.http.post(this.baseUrl + 'user/' + userId + '/itemRating/' + itemId + '/rate/' + rating, {});
 }
}
