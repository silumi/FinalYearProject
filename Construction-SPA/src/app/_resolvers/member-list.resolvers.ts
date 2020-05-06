import { error } from 'protractor';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlerifyService } from '../services/alerify.service';
import { UserServiceService } from '../services/user-service.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/Users';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
    pageNumber = 1;
    pageSize = 3;

constructor(private userService: UserServiceService, private router: Router, private alertify: AlerifyService) {}

resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    // tslint:disable-next-line: no-string-literal
    return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(
        // tslint:disable-next-line: no-shadowed-variable
        catchError(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/dashboard']);
            return of(null);
        })
    );
}
}
