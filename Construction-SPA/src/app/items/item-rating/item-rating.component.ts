import { Component, OnInit, Input } from '@angular/core';
import { IStarRatingOnClickEvent, IStarRatingIOnHoverRatingChangeEvent, IStarRatingOnRatingChangeEven } from 'angular-star-rating';
import { ItemReviewService } from '../../services/item-review.service';
import { AuthService } from '../../services/auth.service';
import { AlerifyService } from '../../services/alerify.service';

@Component({
  selector: 'app-item-rating',
  templateUrl: './item-rating.component.html',
  styleUrls: ['./item-rating.component.css']
})
export class ItemRatingComponent implements OnInit {
  @Input() itemId: number;
  onClickResult: IStarRatingOnClickEvent;
  onHoverRatingChangeResult: IStarRatingIOnHoverRatingChangeEvent;
  onRatingChangeResult: IStarRatingOnRatingChangeEven;
  constructor(private itemReview: ItemReviewService, private authService: AuthService, private alertify: AlerifyService) { }
  currentUserId = +this.authService.decodedToken.nameid;

  ngOnInit(): void {}

  onClick = ($event: IStarRatingOnClickEvent) => {
    this.itemReview.addItemRate(this.currentUserId, this.itemId, $event.rating ).subscribe(() => {

    this.alertify.success('done!');
      }, error => {
        this.alertify.error('error');
      });
  }

  onRatingChange = ($event: IStarRatingOnRatingChangeEven) => {
      console.log('onRatingUpdated $event: ', $event);
      this.onRatingChangeResult = $event;
  }

  onHoverRatingChange = ($event: IStarRatingIOnHoverRatingChangeEvent) => {
     // console.log('onHoverRatingChange $event: ', $event);
      this.onHoverRatingChangeResult = $event;
  } }

