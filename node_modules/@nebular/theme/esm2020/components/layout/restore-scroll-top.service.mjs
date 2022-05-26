import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter, pairwise, startWith, map } from 'rxjs/operators';
import { getPathPartOfUrl } from '../menu/url-matching-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/**
 * This service determines whether we should scroll the layout back to top.
 * This occurs when the page is changed, so when current url PATH is not equal to the previous one.
 *
 *  TODO: this is most likely a temporary solutions as recently Angular introduces ViewportScroll
 *  and scroll restoration process
 */
export class NbRestoreScrollTopHelper {
    constructor(router) {
        this.router = router;
    }
    shouldRestore() {
        return this.router.events
            .pipe(startWith(null), filter(event => event === null || event instanceof NavigationEnd), pairwise(), map(([prev, current]) => this.pageChanged(prev, current)), filter(res => !!res));
    }
    pageChanged(prev, current) {
        return !prev || getPathPartOfUrl(prev.url) !== getPathPartOfUrl(current.url);
    }
}
NbRestoreScrollTopHelper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRestoreScrollTopHelper, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
NbRestoreScrollTopHelper.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRestoreScrollTopHelper });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRestoreScrollTopHelper, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdG9yZS1zY3JvbGwtdG9wLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvbGF5b3V0L3Jlc3RvcmUtc2Nyb2xsLXRvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBR3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBRWhFOzs7Ozs7R0FNRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFFbkMsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEMsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUN0QixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxZQUFZLGFBQWEsQ0FBQyxFQUNqRSxRQUFRLEVBQUUsRUFDVixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFxQixFQUFFLE9BQXdCLENBQUMsQ0FBQyxFQUMzRixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ3JCLENBQUM7SUFDTixDQUFDO0lBRU8sV0FBVyxDQUFDLElBQW1CLEVBQUUsT0FBc0I7UUFDN0QsT0FBTyxDQUFDLElBQUksSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9FLENBQUM7O3FIQWxCVSx3QkFBd0I7eUhBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQURwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZmlsdGVyLCBwYWlyd2lzZSwgc3RhcnRXaXRoLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXRQYXRoUGFydE9mVXJsIH0gZnJvbSAnLi4vbWVudS91cmwtbWF0Y2hpbmctaGVscGVycyc7XG5cbi8qKlxuICogVGhpcyBzZXJ2aWNlIGRldGVybWluZXMgd2hldGhlciB3ZSBzaG91bGQgc2Nyb2xsIHRoZSBsYXlvdXQgYmFjayB0byB0b3AuXG4gKiBUaGlzIG9jY3VycyB3aGVuIHRoZSBwYWdlIGlzIGNoYW5nZWQsIHNvIHdoZW4gY3VycmVudCB1cmwgUEFUSCBpcyBub3QgZXF1YWwgdG8gdGhlIHByZXZpb3VzIG9uZS5cbiAqXG4gKiAgVE9ETzogdGhpcyBpcyBtb3N0IGxpa2VseSBhIHRlbXBvcmFyeSBzb2x1dGlvbnMgYXMgcmVjZW50bHkgQW5ndWxhciBpbnRyb2R1Y2VzIFZpZXdwb3J0U2Nyb2xsXG4gKiAgYW5kIHNjcm9sbCByZXN0b3JhdGlvbiBwcm9jZXNzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYlJlc3RvcmVTY3JvbGxUb3BIZWxwZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIHNob3VsZFJlc3RvcmUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50ID09PSBudWxsIHx8IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICAgIHBhaXJ3aXNlKCksXG4gICAgICAgIG1hcCgoW3ByZXYsIGN1cnJlbnRdKSA9PiB0aGlzLnBhZ2VDaGFuZ2VkKHByZXYgYXMgTmF2aWdhdGlvbkVuZCwgY3VycmVudCBhcyBOYXZpZ2F0aW9uRW5kKSksXG4gICAgICAgIGZpbHRlcihyZXMgPT4gISFyZXMpLFxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFnZUNoYW5nZWQocHJldjogTmF2aWdhdGlvbkVuZCwgY3VycmVudDogTmF2aWdhdGlvbkVuZCkge1xuICAgIHJldHVybiAhcHJldiB8fCBnZXRQYXRoUGFydE9mVXJsKHByZXYudXJsKSAhPT0gZ2V0UGF0aFBhcnRPZlVybChjdXJyZW50LnVybCk7XG4gIH1cbn1cbiJdfQ==