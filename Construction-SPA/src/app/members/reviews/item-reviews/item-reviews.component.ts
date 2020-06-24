import { Items } from './../../../_models/Items';
import { Component, OnInit, Input } from '@angular/core';
import { ItemReviews } from 'src/app/_models/itemReviews';
import { User } from 'src/app/_models/Users';
import { ItemReviewService } from 'src/app/services/item-review.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlerifyService } from 'src/app/services/alerify.service';

@Component({
  selector: 'app-item-reviews',
  templateUrl: './item-reviews.component.html',
  styleUrls: ['./item-reviews.component.css']
})
export class ItemReviewsComponent implements OnInit {
  @Input() reviewRecipientId: number;
  reviews: ItemReviews[];
  newReview: any = {};
  users: User;
  items: Items;

  constructor(private reviewService: ItemReviewService, private authservice: AuthService, private alertify: AlerifyService) { }
  currentUserId = +this.authservice.decodedToken.nameid;

  ngOnInit(): void {
    this.loadItemReviews();
  }
  loadItemReviews() {
    this.reviewService.getItemReviewsThread(this.authservice.decodedToken.nameid, this.reviewRecipientId)
    .subscribe(reviews => {
      this.reviews = reviews;
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.alertify.error(error);
    });

  }

  sendReview() {
    this.newReview.reviewRecipientId = this.reviewRecipientId;
    this.reviewService.sendReview(this.authservice.decodedToken.nameid, this.newReview)
    .subscribe((review: ItemReviews) => {
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
