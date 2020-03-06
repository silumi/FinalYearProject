import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
model: any = {};
registerMode = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('success');
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
  console.log('fail');
    });
    console.log(this.model);
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
    console.log('loggedout');
  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }
}
