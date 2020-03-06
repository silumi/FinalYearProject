import { Routes, Router } from '@angular/router';
import { AlerifyService } from './../services/alerify.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';

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
    this.alertify.success('success');
  // tslint:disable-next-line: no-shadowed-variable
  }, error => {
console.log(error);

  }, () => {
this.router.navigate(['/dashboard']);
  });

}
loggedIn() {
  return this.authService.loggedIn();
}
logout() {
  localStorage.removeItem('token');
  this.alertify.success('logged out !');
  this.router.navigate(['/']);
}
}
