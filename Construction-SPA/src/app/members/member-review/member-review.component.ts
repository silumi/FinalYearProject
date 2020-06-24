import { ServiceReviews } from './../../_models/ServiceReviews';
import { Component, OnInit, Input } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlerifyService } from 'src/app/services/alerify.service';

@Component({
  selector: 'app-member-review',
  templateUrl: './member-review.component.html',
  styleUrls: ['./member-review.component.css']
})
export class MemberReviewComponent implements OnInit {
  @Input() recepientId: number;
  reviews: ServiceReviews[];
  review: ServiceReviews;
  constructor(private reviewService: ReviewsService, private authservice: AuthService, private alertify: AlerifyService) { }
  currentUserId = +this.authservice.decodedToken.nameid;
  ngOnInit(): void {
this.loadUserReviews();
  }
loadUserReviews() {
this.reviewService.getUserReviews(this.authservice.decodedToken.nameid).subscribe(reviews => {
this.reviews = reviews;
}, error => {
  this.alertify.error(error);
});
}
deleteReview(id: number) {
  this.alertify.confirm('Are you sure you want to delete this comment?', () => {
   this.reviewService.deleteReview(id, this.currentUserId)
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
