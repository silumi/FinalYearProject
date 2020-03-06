import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, private router: Router) { }

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
    this.router.navigate(['/']);
  }
  registerToggle() {
  this.router.navigate(['/register']);
  }
}
