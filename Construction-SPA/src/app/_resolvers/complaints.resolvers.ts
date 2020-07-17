import { ComplaintsService } from './../services/complaints.service';
import { Complaints } from './../_models/Complains';
import { MessagesService } from '../services/messages.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlerifyService } from '../services/alerify.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Message } from '../_models/Message';

@Injectable()
export class ComplaintsResolver implements Resolve<Complaints[]> {
    pageNumber = 1;
    pageSize = 6;
    complaintContainer = 'New';

    constructor(private complaintsService: ComplaintsService, private router: Router,
                private alertify: AlerifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Complaints[]> {
        return this.complaintsService.getComplaints(this.authService.decodedToken.nameid,
              this.pageNumber, this.pageSize, this.complaintContainer).pipe(
            // tslint:disable-next-line: no-shadowed-variable
            catchError(error => {
                this.alertify.error('Problem retrieving complaints');
                this.router.navigate(['/dashboard']);
                return of(null);
            })
        );
    }
}
