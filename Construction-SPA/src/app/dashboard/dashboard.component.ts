import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  // login() {
  //   this.authService.login(this.model).subscribe(next => {
  //     console.log('success');
  //   // tslint:disable-next-line: no-shadowed-variable
  //   }, error => {
  // console.log('fail');
  //   });
  //   console.log(this.model);
  // }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
    console.log('loggedout');
  }

}
