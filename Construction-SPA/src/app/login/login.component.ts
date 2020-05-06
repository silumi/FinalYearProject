import { HttpErrorResponse } from '@angular/common/http';
import {  Router } from '@angular/router';
import { AlerifyService } from '../services/alerify.service';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { User } from '../_models/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
constructor(private authService: AuthService, private alertify: AlerifyService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Login Success!');
      this.router.navigate(['/dashboard']);
    },
      // tslint:disable-next-line: no-shadowed-variable
      error => {
        this.alertify.warning(error);
      })
      ;
  }
loggedIn() {
  const token = localStorage.getItem('token');
  return !!token;
}
  loggedout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.success('logged out !');
    this.router.navigate(['/']);
  }
}
