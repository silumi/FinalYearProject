import { ScheduleService } from './services/schedule.service';
import { ComplaintsService } from './services/complaints.service';
import { StarRatingModule } from 'angular-star-rating';
import { ComplaintsResolver } from './_resolvers/complaints.resolvers';
import { MessagesService } from './services/messages.service';
import { ReviewsService } from 'src/app/services/reviews.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreventUnsavedChanges } from './_guards/prevent-UnsavedChanges.guard';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FileUploadModule } from 'ng2-file-upload';
import { MemberListResolver } from './_resolvers/member-list.resolvers';
import { JwtModule } from '@auth0/angular-jwt';
import { ItemsService } from './services/items.service';
import { AlerifyService } from './services/alerify.service';
import { AuthService } from './services/auth.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Pipe } from '@angular/core';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SupplierComponent } from './supplier/supplier.component';
import { ItemSmallCardsComponent } from './supplier/item-small-cards/item-small-cards.component';
import { ItemContent1Component } from './supplier/item-content1/item-content1.component';
import { ItemOrdersComponent } from './supplier/item-orders/item-orders.component';
import { StatisticComponent } from './supplier/statistic/statistic.component';
import { MessagesResolver } from './_resolvers/messages.resolvers';
import { MessagesComponent } from './messages/messages.component';
import { DateAgoPipe } from './Pipes/date-ago.pipe';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { ReviewsComponent } from './members/reviews/reviews.component';
import { MemberReviewComponent } from './members/member-review/member-review.component';
import { ItemReviewsComponent } from './members/reviews/item-reviews/item-reviews.component';
import { ItemReviewService } from './services/item-review.service';
import { ComplaintsComponent } from './complaints/complaints.component';
import { MemberComplaintsComponent } from './members/member-complaints/member-complaints.component';
import { TodosComponent } from './todos/todos.component';
import { ServiceRatingComponent } from './members/service-rating/service-rating.component';
import { ItemRatingComponent } from './items/item-rating/item-rating.component';
import { SchedulerComponent } from './../app/members/scheduler/scheduler.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService,
  ScheduleModule, RecurrenceEditorModule} from '@syncfusion/ej2-angular-schedule';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);





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
    UserPhotoEditorComponent,
    SupplierComponent,
    ItemSmallCardsComponent,
    ItemContent1Component,
    ItemOrdersComponent,
    StatisticComponent,
    MessagesComponent,
    DateAgoPipe,
    MemberMessagesComponent,
    ReviewsComponent,
    MemberReviewComponent,
    ItemReviewsComponent,
    ComplaintsComponent,
    MemberComplaintsComponent,
    TodosComponent,
    ServiceRatingComponent,
    ItemRatingComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    StarRatingModule,
    AppRoutingModule,
    FileUploadModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    NgxGalleryModule,
    FullCalendarModule,
    ButtonsModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    JwtModule.forRoot({
      config: {
        // tslint:disable-next-line: object-literal-shorthand
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:44368'],
        blacklistedRoutes: ['localhost:44368/api/auth']
      }
    }),
    ScheduleModule, RecurrenceEditorModule,

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
   ReviewsService,
   ItemReviewService,
   MessagesService,
   ComplaintsResolver,
   ComplaintsService,
   MessagesResolver,
   ItemsService,
   AuthGuard,
   ScheduleService,
   PreventUnsavedChanges,
   DayService,
   WeekService,
   WorkWeekService,
   MonthService,
   MonthAgendaService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
