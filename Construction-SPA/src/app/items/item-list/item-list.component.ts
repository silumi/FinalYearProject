import { Items } from './../../_models/Items';
import { PaginatedResult } from './../../_models/Pagination';
import { ActivatedRoute } from '@angular/router';
import { AlerifyService } from './../../services/alerify.service';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/_models/Pagination';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
pagination: Pagination;
item: Items = JSON.parse(localStorage.getItem('items'));
items: Items[];
itemParams: any = {};
textItems = false;
  constructor(private itemService: ItemsService, private alertify: AlerifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.items = data['items'].result;
      // tslint:disable-next-line: no-string-literal
      this.pagination = data['items'].pagination;
    });
    this.itemParams.minItemPrice = 10;
    this.itemParams.maxItemPrice = 10000;
    this.itemParams.orderBy = 'DateAdded';
    this.loadItems();
  }
  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadItems();
  }
  resetFilters() {
    this.itemParams.minItemPrice = 10;
    this.itemParams.maxItemPrice = 10000;
    this.loadItems();
  }
loadItems() {
  this.itemService.getItems(this.pagination.currentPage, this.pagination.itemsPerPage,
     this.itemParams).subscribe((res: PaginatedResult<Items[]>) => {
     this.items = res.result;
     this.pagination = res.pagination;
   // tslint:disable-next-line: no-shadowed-variable
   }, error => {
     this.alertify.error(error);
  });
 }
 textItemToggle() {
  this.textItems = true;
}
}
