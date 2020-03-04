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
  constructor(private authService: AuthService) { }

  ngOnInit(): void { }
login() {
  this.authService.login(this.model).subscribe(next => {
    console.log('success');
  // tslint:disable-next-line: no-shadowed-variable
  }, error => {
console.log(error);

  });
  console.log(this.model);
}
loggedIn() {
  const token = localStorage.getItem('token');
  return !!token;
}
logout() {
  localStorage.removeItem('token');
  console.log('loggedout');
}
}
