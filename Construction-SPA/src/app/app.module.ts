import { PreventUnsavedChanges } from './_guards/prevent-UnsavedChanges.guard';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import { MemberListResolver } from './_resolvers/member-list.resolvers';
import { JwtModule } from '@auth0/angular-jwt';
import { ItemsService } from './services/items.service';
import { AlerifyService } from './services/alerify.service';
import { AuthService } from './services/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
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

import { OrderlistComponent } from './orderlist/orderlist.component';
import { Content1Component } from './dashboard/content1/content1.component';
import { CalendarComponent } from './calendar/calendar.component';
import { Content0Component } from './dashboard/content0/content0.component';
import { AdsComponent } from './ads/ads.component';
import { FooterComponent } from './footer/footer.component';
import { Charts2Component } from './charts2/charts2.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmailComponent } from './email/email.component';
import { ChatsComponent } from './chats/chats.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { FormsModule } from '@angular/forms';
import { TopnavComponent } from './topnav/topnav.component';
import { StartComponent } from './start/start.component';
import { ErrorInterceptorProvider } from './services/error-interceptor.service';
import { AuthGuard } from './_guards/auth.guard';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserServiceService } from './services/user-service.service';
import { MemberCardsComponent } from './members/member-cards/member-cards.component';

import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemCardsComponent } from './items/item-cards/item-cards.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ItemDetailsComponent } from './items/item-details/item-details.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolvers';
import { ItemDetailResolver } from './_resolvers/item-detail.resolvers';
import { ItemListResolver } from './_resolvers/items-list.resolvers';
import { MemberListComponent } from './members/memberlist.component';
import { WorkersComponent } from './workers/workers.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolvers';
import { ServicePhotoEditComponent } from './members/service-photo-edit/service-photo-edit.component';
import { UserPhotoEditorComponent } from './members/user-photo-editor/user-photo-editor.component';


export function tokenGetter() {
  return localStorage.getItem('token');
}






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
    OrderlistComponent,
    Content1Component,
    CalendarComponent,
    Content0Component,
    AdsComponent,
    FooterComponent,
    Charts2Component,
    LoginComponent,
    RegisterComponent,
    EmailComponent,
    ChatsComponent,
    InvoicesComponent,
    ComplaintsComponent,
    StartComponent,
    ShoppingCartComponent,
    MemberCardsComponent,
    ItemListComponent,
    ItemCardsComponent,
    MemberDetailsComponent,
    ItemDetailsComponent,
    MemberListComponent,
    WorkersComponent,
    MemberEditComponent,
    ServicePhotoEditComponent,
    UserPhotoEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    HttpClientModule,
    NgxGalleryModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    TabsModule.forRoot(),
    JwtModule.forRoot({
      config: {
        // tslint:disable-next-line: object-literal-shorthand
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:44368'],
        blacklistedRoutes: ['localhost:44368/api/auth']
      }
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AuthService,
   ErrorInterceptorProvider,
   AlerifyService,
   MemberDetailResolver,
   ItemDetailResolver,
   ItemListResolver,
   MemberListResolver,
   MemberEditResolver,
   UserServiceService,
   ItemsService,
   AuthGuard,
   PreventUnsavedChanges
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
