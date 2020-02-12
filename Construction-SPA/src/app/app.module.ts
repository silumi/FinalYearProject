

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopnavComponent } from './dashboard/topnav/topnav.component';
import { SearchComponent } from './dashboard/search/search.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { NewComponent } from './dashboard/new/new.component';
import { ProfileComponent } from './dashboard/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopnavComponent,
    SearchComponent,
    NotificationsComponent,
    NewComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
