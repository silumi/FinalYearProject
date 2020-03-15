import { AuthService } from './../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AlerifyService } from '../services/alerify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerMode = false;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService, private router: Router, private alertify: AlerifyService) {}

  ngOnInit(): void {
  }
  register() {
    console.log('red');
    this.authService.register(this.model).subscribe(() => {
    this.alertify.message('Register Successfull !');
    this.router.navigate(['/']);
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
  console.log(error);
});
  }
  cancel() {
    this.cancelRegister.emit(false);
    this.router.navigate(['/']);
  }
  registerToggle() {
    this.registerMode = true;
  }
}
