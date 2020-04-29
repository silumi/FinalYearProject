import { AuthService } from './../services/auth.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  model: any = {};
  // tslint:disable-next-line: ban-types

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
    console.log('loggedout');
    this.router.navigate(['/']);
  }
  registerToggle() {
  this.router.navigate(['/register']);
  }
}
