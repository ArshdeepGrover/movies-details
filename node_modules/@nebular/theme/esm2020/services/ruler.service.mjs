import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Simple helper service to return Layout dimensions
 * Depending of current Layout scroll mode (default or `withScroll` when scroll is moved to an element
 * inside of the layout) corresponding dimensions will be returns  - of `documentElement` in first case and
 * `.scrollable-container` in the second.
 */
export class NbLayoutRulerService {
    constructor() {
        this.contentDimensionsReq$ = new Subject();
    }
    /**
     * Content dimensions
     * @returns {Observable<NbLayoutDimensions>}
     */
    getDimensions() {
        return new Observable((observer) => {
            const listener = new Subject();
            listener.subscribe(observer);
            this.contentDimensionsReq$.next({ listener });
            return () => listener.complete();
        });
    }
    /**
     * @private
     * @returns {Subject<any>}
     */
    onGetDimensions() {
        return this.contentDimensionsReq$;
    }
}
NbLayoutRulerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutRulerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbLayoutRulerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutRulerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutRulerService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvc2VydmljZXMvcnVsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQWdDdkQ7Ozs7O0dBS0c7QUFFSCxNQUFNLE9BQU8sb0JBQW9CO0lBRGpDO1FBR1UsMEJBQXFCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztLQXVCL0M7SUFyQkM7OztPQUdHO0lBQ0gsYUFBYTtRQUNYLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUF3QyxFQUFFLEVBQUU7WUFDakUsTUFBTSxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQXNCLENBQUM7WUFDbkQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUU5QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQzs7aUhBeEJVLG9CQUFvQjtxSEFBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpYmVyIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogTGF5b3V0IGRpbWVuc2lvbnMgdHlwZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5iTGF5b3V0RGltZW5zaW9ucyB7XG5cbiAgLyoqXG4gICAqIGNsaWVudFdpZHRoXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBjbGllbnRXaWR0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBjbGllbnRIZWlnaHRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGNsaWVudEhlaWdodDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBzY3JvbGxXaWR0aFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgc2Nyb2xsV2lkdGg6IG51bWJlcjtcblxuICAvKipcbiAgICogc2Nyb2xsSGVpZ2h0XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBzY3JvbGxIZWlnaHQ6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBTaW1wbGUgaGVscGVyIHNlcnZpY2UgdG8gcmV0dXJuIExheW91dCBkaW1lbnNpb25zXG4gKiBEZXBlbmRpbmcgb2YgY3VycmVudCBMYXlvdXQgc2Nyb2xsIG1vZGUgKGRlZmF1bHQgb3IgYHdpdGhTY3JvbGxgIHdoZW4gc2Nyb2xsIGlzIG1vdmVkIHRvIGFuIGVsZW1lbnRcbiAqIGluc2lkZSBvZiB0aGUgbGF5b3V0KSBjb3JyZXNwb25kaW5nIGRpbWVuc2lvbnMgd2lsbCBiZSByZXR1cm5zICAtIG9mIGBkb2N1bWVudEVsZW1lbnRgIGluIGZpcnN0IGNhc2UgYW5kXG4gKiBgLnNjcm9sbGFibGUtY29udGFpbmVyYCBpbiB0aGUgc2Vjb25kLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmJMYXlvdXRSdWxlclNlcnZpY2Uge1xuXG4gIHByaXZhdGUgY29udGVudERpbWVuc2lvbnNSZXEkID0gbmV3IFN1YmplY3QoKTtcblxuICAvKipcbiAgICogQ29udGVudCBkaW1lbnNpb25zXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE5iTGF5b3V0RGltZW5zaW9ucz59XG4gICAqL1xuICBnZXREaW1lbnNpb25zKCk6IE9ic2VydmFibGU8TmJMYXlvdXREaW1lbnNpb25zPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogU3Vic2NyaWJlcjxOYkxheW91dERpbWVuc2lvbnM+KSA9PiB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IG5ldyBTdWJqZWN0PE5iTGF5b3V0RGltZW5zaW9ucz4oKTtcbiAgICAgIGxpc3RlbmVyLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB0aGlzLmNvbnRlbnREaW1lbnNpb25zUmVxJC5uZXh0KHsgbGlzdGVuZXIgfSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiBsaXN0ZW5lci5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm5zIHtTdWJqZWN0PGFueT59XG4gICAqL1xuICBvbkdldERpbWVuc2lvbnMoKTogU3ViamVjdDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50RGltZW5zaW9uc1JlcSQ7XG4gIH1cbn1cbiJdfQ==