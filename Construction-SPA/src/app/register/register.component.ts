import { error } from 'protractor';
import { User } from './../_models/Users';
import { AuthService } from '../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AlerifyService } from '../services/alerify.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerMode = false;
  @Output() cancelRegister = new EventEmitter();
  user: User;
  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(private authService: AuthService, private router: Router, private alertify: AlerifyService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bsConfig = {
      containerClass: 'theme-dark-blue '
    };
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      lookingFor: ['work'],
      isJobSeeker:['', Validators.required],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }
  passwordMatchValidator(g: FormGroup) {
    // tslint:disable-next-line: object-literal-key-quotes
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }
  register() {
    if (this.registerForm.valid) {
this.user = Object.assign({}, this.registerForm.value);
this.authService.register(this.user).subscribe(() => {
  this.alertify.success('success register');
// tslint:disable-next-line: no-shadowed-variable
}, error => {
  this.alertify.error(error);
}, () => {
  this.authService.login(this.user).subscribe(() => {
    this.router.navigate(['/members']);
  });
} );
    }
  }
  cancel() {
    this.cancelRegister.emit(false);
    this.router.navigate(['/']);
  }
  registerToggle() {
    this.registerMode = true;
  }
}
