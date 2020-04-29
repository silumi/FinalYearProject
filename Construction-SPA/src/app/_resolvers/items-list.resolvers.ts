import { ItemsService } from '../services/items.service';
import { Injectable } from '@angular/core';
import { Items } from '../_models/Items';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlerifyService } from '../services/alerify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ItemListResolver implements Resolve<Items[]> {

constructor(private itemService: ItemsService, private router: Router, private alertify: AlerifyService) {}

resolve(route: ActivatedRouteSnapshot): Observable<Items[]> {
    // tslint:disable-next-line: no-string-literal
    return this.itemService.getItems().pipe(
        // tslint:disable-next-line: no-shadowed-variable
        catchError(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/dashboard']);
            return of(null);
        })
    );
}
}
