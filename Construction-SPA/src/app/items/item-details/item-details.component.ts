import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { AlerifyService } from './../../services/alerify.service';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Items } from 'src/app/_models/Items';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @ViewChild('memberTabs', { static: true }) memberTabs: TabsetComponent;
items: Items;

galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];
  constructor(private itemService: ItemsService, private alertify: AlerifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.items = data ['items'];
    });
    this.galleryOptions = [
      {
       width: '500px',
       height: '500px',
       imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
    }
    ];
    this.galleryImages = this.getItemImages();
 }
getItemImages() {
    const imageUrl = [];
     // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.items.itemPhoto.length; i++) {
    imageUrl.push({
        small: this.items.itemPhoto[i].url,
        medium: this.items.itemPhoto[i].url,
        big: this.items.itemPhoto[i].url,
        description: this.items.itemPhoto[i].description
      });
    }
    return imageUrl;
  }
  selectTabs(tabId: number) {
    this.memberTabs.tabs[tabId].active = true;
    }

}
