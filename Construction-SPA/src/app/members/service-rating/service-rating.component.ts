import { ReviewsService } from '../../services/reviews.service';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IStarRatingOnClickEvent, IStarRatingIOnHoverRatingChangeEvent, IStarRatingOnRatingChangeEven } from 'angular-star-rating';
import { AlerifyService } from '../../services/alerify.service';
import { error } from 'protractor';
import { User } from 'src/app/_models/Users';

@Component({
  selector: 'app-service-rating',
  templateUrl: './service-rating.component.html',
  styleUrls: ['./service-rating.component.css']
})
export class ServiceRatingComponent implements OnInit {
  @Input() recepientId: number;
  @Input() user: User;
  onClickResult: IStarRatingOnClickEvent;
  onHoverRatingChangeResult: IStarRatingIOnHoverRatingChangeEvent;
  onRatingChangeResult: IStarRatingOnRatingChangeEven;
  constructor(private reviewService: ReviewsService, private authService: AuthService, private alertify: AlerifyService) { }
  currentUserId = +this.authService.decodedToken.nameid;

  ngOnInit(): void {
  }

  onClick = ($event: IStarRatingOnClickEvent) => {
    this.reviewService.addUserRate(this.currentUserId, this.recepientId, $event.rating ).subscribe(() => {

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
