import { ActivatedRoute } from '@angular/router';
import { AlerifyService } from './../../services/alerify.service';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/_models/Items';
import { error } from 'protractor';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
items: Items[];
  constructor(private itemService: ItemsService, private alertify: AlerifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.items = data['items'];
    });
  }
// loadItems() {
//   this.itemService.getItems().subscribe((items: Items[]) => {
//     this.items = items;
//   // tslint:disable-next-line: no-shadowed-variable
//   }, error => {
//     this.alertify.error(error);
//   });
// }
}
