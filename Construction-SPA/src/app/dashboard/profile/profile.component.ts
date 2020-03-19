import { logging } from 'protractor';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: any = {};
  constructor(public authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.user = localStorage.getItem('UserName');
  }
  logout() {
    localStorage.removeItem('userToken');
    console.log('loggedout');
    this.router.navigate(['/']);
  }
}
