import { ServiceRating } from 'src/app/_models/serviceRating';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/Users';

@Component({
  selector: 'app-member-cards',
  templateUrl: './member-cards.component.html',
  styleUrls: ['./member-cards.component.css']
})
export class MemberCardsComponent implements OnInit {
@Input() user: User;
@Input() serviceRating: ServiceRating;
  constructor() { }

  ngOnInit(): void {
  }

}
