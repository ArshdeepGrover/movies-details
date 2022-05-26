import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * Layout scroll service. Provides information about current scroll position,
 * as well as methods to update position of the scroll.
 *
 * The reason we added this service is that in Nebular there are two scroll modes:
 * - the default mode when scroll is on body
 * - and the `withScroll` mode, when scroll is removed from the body and moved to an element inside of the
 * `nb-layout` component
 */
export class NbLayoutScrollService {
    constructor() {
        this.scrollPositionReq$ = new Subject();
        this.manualScroll$ = new Subject();
        this.scroll$ = new Subject();
        this.scrollable$ = new Subject();
    }
    /**
     * Returns scroll position
     *
     * @returns {Observable<NbScrollPosition>}
     */
    getPosition() {
        return new Observable((observer) => {
            const listener = new Subject();
            listener.subscribe(observer);
            this.scrollPositionReq$.next({ listener });
            return () => listener.complete();
        });
    }
    /**
     * Sets scroll position
     *
     * @param {number} x
     * @param {number} y
     */
    scrollTo(x = null, y = null) {
        this.manualScroll$.next({ x, y });
    }
    /**
     * Returns a stream of scroll events
     *
     * @returns {Observable<any>}
     */
    onScroll() {
        return this.scroll$.pipe(share());
    }
    /**
     * @private
     * @returns Observable<NbScrollPosition>.
     */
    onManualScroll() {
        return this.manualScroll$.pipe(share());
    }
    /**
     * @private
     * @returns {Subject<any>}
     */
    onGetPosition() {
        return this.scrollPositionReq$;
    }
    onScrollableChange() {
        return this.scrollable$.pipe(share());
    }
    /**
     * @private
     * @param {any} event
     */
    fireScrollChange(event) {
        this.scroll$.next(event);
    }
    scrollable(scrollable) {
        this.scrollable$.next(scrollable);
    }
}
NbLayoutScrollService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutScrollService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbLayoutScrollService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutScrollService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutScrollService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL3NlcnZpY2VzL3Njcm9sbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQW9CdkM7Ozs7Ozs7O0dBUUc7QUFFSCxNQUFNLE9BQU8scUJBQXFCO0lBRGxDO1FBR1UsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN4QyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFvQixDQUFDO1FBQ2hELFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzdCLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztLQW1FOUM7SUFqRUM7Ozs7T0FJRztJQUNILFdBQVc7UUFDVCxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsUUFBc0MsRUFBRSxFQUFFO1lBQy9ELE1BQU0sUUFBUSxHQUFHLElBQUksT0FBTyxFQUFvQixDQUFDO1lBQ2pELFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFFM0MsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxRQUFRLENBQUMsSUFBWSxJQUFJLEVBQUUsSUFBWSxJQUFJO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQW9CLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0IsQ0FBQyxLQUFVO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBbUI7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7a0hBdkVVLHFCQUFxQjtzSEFBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpYmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBTY3JvbGwgcG9zaXRpb24gdHlwZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5iU2Nyb2xsUG9zaXRpb24ge1xuXG4gIC8qKlxuICAgKiB4IC0gbGVmdFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgeDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiB5IC0gdG9wXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB5OiBudW1iZXI7XG59XG5cbi8qKlxuICogTGF5b3V0IHNjcm9sbCBzZXJ2aWNlLiBQcm92aWRlcyBpbmZvcm1hdGlvbiBhYm91dCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbixcbiAqIGFzIHdlbGwgYXMgbWV0aG9kcyB0byB1cGRhdGUgcG9zaXRpb24gb2YgdGhlIHNjcm9sbC5cbiAqXG4gKiBUaGUgcmVhc29uIHdlIGFkZGVkIHRoaXMgc2VydmljZSBpcyB0aGF0IGluIE5lYnVsYXIgdGhlcmUgYXJlIHR3byBzY3JvbGwgbW9kZXM6XG4gKiAtIHRoZSBkZWZhdWx0IG1vZGUgd2hlbiBzY3JvbGwgaXMgb24gYm9keVxuICogLSBhbmQgdGhlIGB3aXRoU2Nyb2xsYCBtb2RlLCB3aGVuIHNjcm9sbCBpcyByZW1vdmVkIGZyb20gdGhlIGJvZHkgYW5kIG1vdmVkIHRvIGFuIGVsZW1lbnQgaW5zaWRlIG9mIHRoZVxuICogYG5iLWxheW91dGAgY29tcG9uZW50XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYkxheW91dFNjcm9sbFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgc2Nyb2xsUG9zaXRpb25SZXEkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIG1hbnVhbFNjcm9sbCQgPSBuZXcgU3ViamVjdDxOYlNjcm9sbFBvc2l0aW9uPigpO1xuICBwcml2YXRlIHNjcm9sbCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgc2Nyb2xsYWJsZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHNjcm9sbCBwb3NpdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxOYlNjcm9sbFBvc2l0aW9uPn1cbiAgICovXG4gIGdldFBvc2l0aW9uKCk6IE9ic2VydmFibGU8TmJTY3JvbGxQb3NpdGlvbj4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IFN1YnNjcmliZXI8TmJTY3JvbGxQb3NpdGlvbj4pID0+IHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gbmV3IFN1YmplY3Q8TmJTY3JvbGxQb3NpdGlvbj4oKTtcbiAgICAgIGxpc3RlbmVyLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uUmVxJC5uZXh0KHsgbGlzdGVuZXIgfSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiBsaXN0ZW5lci5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgc2Nyb2xsIHBvc2l0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAqL1xuICBzY3JvbGxUbyh4OiBudW1iZXIgPSBudWxsLCB5OiBudW1iZXIgPSBudWxsKSB7XG4gICAgdGhpcy5tYW51YWxTY3JvbGwkLm5leHQoeyB4LCB5IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJlYW0gb2Ygc2Nyb2xsIGV2ZW50c1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgb25TY3JvbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsJC5waXBlKHNoYXJlPGFueT4oKSk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxOYlNjcm9sbFBvc2l0aW9uPi5cbiAgICovXG4gIG9uTWFudWFsU2Nyb2xsKCk6IE9ic2VydmFibGU8TmJTY3JvbGxQb3NpdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLm1hbnVhbFNjcm9sbCQucGlwZShzaGFyZTxOYlNjcm9sbFBvc2l0aW9uPigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJucyB7U3ViamVjdDxhbnk+fVxuICAgKi9cbiAgb25HZXRQb3NpdGlvbigpOiBTdWJqZWN0PGFueT4ge1xuICAgIHJldHVybiB0aGlzLnNjcm9sbFBvc2l0aW9uUmVxJDtcbiAgfVxuXG4gIG9uU2Nyb2xsYWJsZUNoYW5nZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxhYmxlJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7YW55fSBldmVudFxuICAgKi9cbiAgZmlyZVNjcm9sbENoYW5nZShldmVudDogYW55KSB7XG4gICAgdGhpcy5zY3JvbGwkLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgc2Nyb2xsYWJsZShzY3JvbGxhYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zY3JvbGxhYmxlJC5uZXh0KHNjcm9sbGFibGUpO1xuICB9XG59XG4iXX0=