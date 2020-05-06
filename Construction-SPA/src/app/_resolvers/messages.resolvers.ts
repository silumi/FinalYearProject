import { MessagesService } from './../services/messages.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlerifyService } from '../services/alerify.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Message } from '../_models/Message';

@Injectable()
export class MessagesResolver implements Resolve<Message[]> {
    pageNumber = 1;
    pageSize = 3;
    messageContainer = 'Unread';

    constructor(private messagesService: MessagesService, private router: Router,
                private alertify: AlerifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
        return this.messagesService.getMessages(this.authService.decodedToken.nameid,
              this.pageNumber, this.pageSize, this.messageContainer).pipe(
            // tslint:disable-next-line: no-shadowed-variable
            catchError(error => {
                this.alertify.error('Problem retrieving messages');
                this.router.navigate(['/dashboard']);
                return of(null);
            })
        );
    }
}
