import { User } from './../../_models/Users';
import { logging } from 'protractor';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: any = {};
  photoUrl: string;
  @Input() users: User;
  constructor(public authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    console.log('loggedout');
    this.router.navigate(['/']);
  }
  loggedIn() {
    return this.authService.loggedIn();
  }
}
