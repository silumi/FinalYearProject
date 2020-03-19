import { HttpErrorResponse } from '@angular/common/http';
import {  Router } from '@angular/router';
import { AlerifyService } from '../services/alerify.service';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isLogginError = false;
constructor(private authService: AuthService, private alertify: AlerifyService, private router: Router) { }

  ngOnInit(): void { }

  doLogin(userName, password) {
    this.authService.login(userName, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      localStorage.setItem('UserName', data.userName);
      this.alertify.success('Login Success!');
      this.router.navigate(['/dashboard']);
    },
      (err: HttpErrorResponse) => {
        this.isLogginError = true;
      });
  }

  logout() {
    localStorage.removeItem('userToken');
    this.alertify.success('logged out !');
    this.router.navigate(['/']);
  }
}
