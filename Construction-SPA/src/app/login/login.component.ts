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
  constructor(private authService: AuthService, private alertify: AlerifyService) { }

  ngOnInit(): void { }
login() {
  this.authService.login(this.model).subscribe(next => {
    this.alertify.success('success');
  // tslint:disable-next-line: no-shadowed-variable
  }, error => {
console.log(error);

  });
  console.log(this.model);
}
loggedIn() {
  return this.authService.loggedIn();
}
logout() {
  localStorage.removeItem('token');
  console.log('loggedout');
}
}
