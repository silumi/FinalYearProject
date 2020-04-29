import { AuthService } from './../services/auth.service';
import { error } from 'protractor';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlerifyService } from '../services/alerify.service';
import { UserServiceService } from '../services/user-service.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/Users';

@Injectable()
export class MemberEditResolver implements Resolve<User> {

constructor(private userService: UserServiceService, private authService: AuthService,
            private router: Router, private alertify: AlerifyService) {}

resolve(route: ActivatedRouteSnapshot): Observable<User> {
    // tslint:disable-next-line: no-string-literal
    return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
        // tslint:disable-next-line: no-shadowed-variable
        catchError(error => {
            this.alertify.error('Problem retrieving your data');
            this.router.navigate(['/members']);
            return of(null);
        })
    );
}
}
