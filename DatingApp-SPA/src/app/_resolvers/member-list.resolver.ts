import { Injectable } from "@angular/core";
import { User } from '../_models/user';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/Alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
    constructor(private userService: UserService, private router: Router,
                private alertify: AlertifyService) {}

      resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
      return this.userService.getusers().pipe(
        catchError(error => {
            this.alertify.error('problem retriving data');
            this.router.navigate(['/home']);
            return of(null);
        })
    );
}
}
