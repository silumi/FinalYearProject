import { User } from './../../_models/Users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.css']
})
export class SmallCardsComponent implements OnInit {
user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
