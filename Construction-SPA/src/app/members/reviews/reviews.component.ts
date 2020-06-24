import { ServiceReviews } from './../../_models/ServiceReviews';
import { Component, OnInit, Input } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlerifyService } from 'src/app/services/alerify.service';
import { User } from 'src/app/_models/Users';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() recepientId: number;
  reviews: ServiceReviews[];
  newReview: any = {};
  users: User;

  constructor(private reviewService: ReviewsService, private authservice: AuthService, private alertify: AlerifyService) { }
  currentUserId = +this.authservice.decodedToken.nameid;
  ngOnInit(): void {
this.loadReviews();
  }
  loadReviews() {
    this.reviewService.getReviewsThread(this.authservice.decodedToken.nameid, this.recepientId)
    .subscribe(reviews => {
      this.reviews = reviews;
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.alertify.error(error);
    });

  }

  sendReview() {
    this.newReview.recipientId = this.recepientId;
    this.reviewService.sendReview(this.authservice.decodedToken.nameid, this.newReview)
    .subscribe((review: ServiceReviews) => {
      this.reviews.unshift(review);
      this.newReview.review = '';
  // tslint:disable-next-line: no-shadowed-variable
  }, error => {
    this.alertify.error(error);
  });
  }
  deleteReview(id: number) {
this.alertify.confirm('Are you sure you want to delete this comment?', () => {
 this.reviewService.deleteReview(id, this.authservice.decodedToken.nameid)
 .subscribe(() => {
  this.reviews.splice(this.reviews.findIndex(m => m.id === id), 1);
  this.alertify.success('comment has been deleted');
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.alertify.error('Failed to delete the comment');
    });
  });
  }
}
