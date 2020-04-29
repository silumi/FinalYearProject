import { Component, OnInit, Input } from '@angular/core';
import { Items } from 'src/app/_models/Items';

@Component({
  selector: 'app-item-cards',
  templateUrl: './item-cards.component.html',
  styleUrls: ['./item-cards.component.css']
})
export class ItemCardsComponent implements OnInit {
  @Input() item: Items;
  constructor() { }

  ngOnInit(): void {
  }

}
