import { SupplierComponent } from './supplier/supplier.component';
import { PreventUnsavedChanges } from './_guards/prevent-UnsavedChanges.guard';
import { MemberListResolver } from './_resolvers/member-list.resolvers';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RegisterComponent } from './register/register.component';
import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AuthGuard } from './_guards/auth.guard';
import { ItemListComponent } from './items/item-list/item-list.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { ItemDetailsComponent } from './items/item-details/item-details.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolvers';
import { ItemDetailResolver } from './_resolvers/item-detail.resolvers';
import { ItemListResolver } from './_resolvers/items-list.resolvers';
import { MemberListComponent } from './members/memberlist.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolvers';
import { MessagesResolver } from './_resolvers/messages.resolvers';
import { MessagesComponent } from './messages/messages.component';
import { ReviewsComponent } from './members/reviews/reviews.component';


const routes: Routes = [
  {path: '', component: StartComponent},

  {path: 'register', component: RegisterComponent},
   { path: '',
     runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
   children: [
     { path: 'profile', component: ProfileComponent},
     { path: 'items', component: ItemListComponent, resolve: {items: ItemListResolver}},
     { path: 'items/:id', component: ItemDetailsComponent, resolve: {items: ItemDetailResolver}},
     { path: 'members/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
     { path: 'members', component: MemberListComponent, resolve: {services: MemberListResolver} },
     { path: 'members/:id', component: MemberDetailsComponent, resolve: {services: MemberDetailResolver}},
     {path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver}},
     {path: 'reviews', component: ReviewsComponent},
     { path: 'dashboard', component: DashboardComponent},
     { path: 'supplier', component: SupplierComponent},
     { path: 'cart', component: ShoppingCartComponent}
  ]},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
