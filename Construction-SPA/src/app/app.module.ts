

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopnavComponent } from './dashboard/topnav/topnav.component';
import { SearchComponent } from './dashboard/search/search.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { NewComponent } from './dashboard/new/new.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { SmallCardsComponent } from './dashboard/small-cards/small-cards.component';
import { ContentComponent } from './dashboard/content/content.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { CommentComponent } from './dashboard/comment/comment.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { Content1Component } from './dashboard/content1/content1.component';
import { CalendarComponent } from './calendar/calendar.component';
import { Content0Component } from './dashboard/content0/content0.component';
import { AdsComponent } from './ads/ads.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopnavComponent,
    SearchComponent,
    NotificationsComponent,
    NewComponent,
    ProfileComponent,
    SidenavComponent,
    SmallCardsComponent,
    ContentComponent,
    ChartsComponent,
    CommentComponent,
    MemberlistComponent,
    OrderlistComponent,
    Content1Component,
    CalendarComponent,
    Content0Component,
    AdsComponent,
    LocationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
