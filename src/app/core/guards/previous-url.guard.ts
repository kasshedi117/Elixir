import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { PreviousUrlService } from '../services/previous-url.service';

@Injectable({
    providedIn: 'root',
})
export class PreviousUrlGuard {
    constructor(
        private router: Router,
        private previousUrlService: PreviousUrlService
    ) { }


    canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
        const routePreviousRoute:string[] = route.data['previousRoute'];

        const previousUrl: string = this.previousUrlService.getPreviousUrl()??'undefined';
        console.log(previousUrl)
        console.log(routePreviousRoute)
        console.log(routePreviousRoute.includes(previousUrl))
        if (routePreviousRoute.length === 0 || routePreviousRoute.includes(previousUrl)) {
            return true;
        } else {
            this.router.createUrlTree(['/']);
             return false;
        }



    }
}
