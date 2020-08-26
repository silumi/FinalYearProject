import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews.service';
import { AlerifyService } from 'src/app/services/alerify.service';

import { ActivatedRoute } from '@angular/router';
import { ServiceRating } from '../../../_models/ServiceRating';

@Component({
  selector: 'app-rating-display',
  templateUrl: './rating-display.component.html',
  styleUrls: ['./rating-display.component.css']
})
export class RatingDisplayComponent implements OnInit {
 ratings: ServiceRating;

  constructor(private reviewService: ReviewsService, private authService: AuthService,
              private alertify: AlerifyService, private route: ActivatedRoute) { }
  currentUserId = +this.authService.decodedToken.nameid;

  ngOnInit(): void {
  }

}
