import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * This service determines whether we should scroll the layout back to top.
 * This occurs when the page is changed, so when current url PATH is not equal to the previous one.
 *
 *  TODO: this is most likely a temporary solutions as recently Angular introduces ViewportScroll
 *  and scroll restoration process
 */
export declare class NbRestoreScrollTopHelper {
    private router;
    constructor(router: Router);
    shouldRestore(): Observable<boolean>;
    private pageChanged;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRestoreScrollTopHelper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbRestoreScrollTopHelper>;
}
