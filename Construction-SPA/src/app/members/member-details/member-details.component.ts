import { AlerifyService } from './../../services/alerify.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { User } from 'src/app/_models/Users';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
@ViewChild('memberTabs', { static: true }) memberTabs: TabsetComponent;
users: User;

galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

galleryOptionsUser: NgxGalleryOptions[];
galleryImagesUser: NgxGalleryImage[];
  constructor(private userService: UserServiceService, private alertify: AlerifyService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.users = data['services'];
    });
    this.route.queryParams.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      const selectedTab = params['tab'];
      this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
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
    this.galleryOptionsUser = [
      {
       width: '300px',
       height: '300px',
         imagePercent: 100,
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
    }
    ];
    this.galleryImages = this.getImages();
    this.galleryImagesUser = this.getImagesUser();
 }
getImages() {
    const imageUrl = [];
     // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.users.servicePhotos.length; i++) {
    imageUrl.push({
        small: this.users.servicePhotos[i].url,
        medium: this.users.servicePhotos[i].url,
        big: this.users.servicePhotos[i].url,
       description: this.users.servicePhotos[i].description
      });
    }
    return imageUrl;
  }
  getImagesUser() {
    const imageUrl = [];
     // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.users.photos.length; i++) {
    imageUrl.push({
        small: this.users.photos[i].url,
        medium: this.users.photos[i].url,
        big: this.users.photos[i].url,
       description: this.users.photos[i].description
      });
    }
    return imageUrl;
  }
selectTabs(tabId: number) {
this.memberTabs.tabs[tabId].active = true;
}
}
