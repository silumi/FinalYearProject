import { LocationComponent } from './location/location.component';
import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  {path: 'start', component: StartComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: '',
    runGuardsAndResolvers: 'always',
   canActivate: [AuthGuard],
  children: [
    { path: 'profile', component: ProfileComponent},
    { path: 'location', component: LocationComponent},
  ]},
    {path: '**', redirectTo: 'start', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
