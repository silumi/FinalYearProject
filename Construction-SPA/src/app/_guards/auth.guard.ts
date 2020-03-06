import { AlerifyService } from './../services/alerify.service';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private alertify: AlerifyService) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
  return true;
    }
    this.alertify.error('You Shall not pass !');
    this.router.navigate(['/']);
    return false;
  }
}
