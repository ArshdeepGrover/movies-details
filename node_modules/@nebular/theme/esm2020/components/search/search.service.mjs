/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * Search component service, connects your code to a page-level search component.
 */
export class NbSearchService {
    constructor() {
        this.searchSubmittings$ = new Subject();
        this.searchActivations$ = new Subject();
        this.searchDeactivations$ = new Subject();
        this.searchInput$ = new Subject();
    }
    /***
     * Activate (open) search component
     * @param {string} searchType
     * @param {string} tag
     */
    activateSearch(searchType, tag) {
        this.searchActivations$.next({ searchType, tag });
    }
    /**
     * Deactibate (close) search component
     * @param {string} searchType
     * @param {string} tag
     */
    deactivateSearch(searchType, tag) {
        this.searchDeactivations$.next({ searchType, tag });
    }
    /**
     * Trigger search submit
     * @param {string} term
     * @param {string} tag
     */
    submitSearch(term, tag) {
        this.searchSubmittings$.next({ term, tag });
    }
    /**
     * Trigger search submit by input event
     * @param {string} term
     * @param {string} tag
     */
    searchInput(term, tag) {
        this.searchInput$.next({ term, tag });
    }
    /**
     * Subscribe to 'activate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    onSearchActivate() {
        return this.searchActivations$.pipe(share());
    }
    /**
     * Subscribe to 'deactivate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    onSearchDeactivate() {
        return this.searchDeactivations$.pipe(share());
    }
    /**
     * Subscribe to 'submit' event (when submit button clicked)
     * @returns Observable<{term: string; tag?: string}>
     */
    onSearchSubmit() {
        return this.searchSubmittings$.pipe(share());
    }
    /**
     * Subscribe to input event
     * @returns Observable<{term: string; tag?: string}>
     */
    onSearchInput() {
        return this.searchInput$.pipe(share());
    }
}
NbSearchService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSearchService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbSearchService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSearchService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSearchService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV2Qzs7R0FFRztBQUVILE1BQU0sT0FBTyxlQUFlO0lBRDVCO1FBRVUsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQWtDLENBQUM7UUFDbkUsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQXdDLENBQUM7UUFDekUseUJBQW9CLEdBQUcsSUFBSSxPQUFPLEVBQXdDLENBQUM7UUFDM0UsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBa0MsQ0FBQztLQXFFdEU7SUFuRUM7Ozs7T0FJRztJQUNILGNBQWMsQ0FBQyxVQUFrQixFQUFFLEdBQVk7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsZ0JBQWdCLENBQUMsVUFBa0IsRUFBRSxHQUFZO1FBQy9DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFlBQVksQ0FBQyxJQUFZLEVBQUUsR0FBWTtRQUNyQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxXQUFXLENBQUMsSUFBWSxFQUFFLEdBQVk7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7T0FHRztJQUNILGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OzRHQXhFVSxlQUFlO2dIQUFmLGVBQWU7MkZBQWYsZUFBZTtrQkFEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogU2VhcmNoIGNvbXBvbmVudCBzZXJ2aWNlLCBjb25uZWN0cyB5b3VyIGNvZGUgdG8gYSBwYWdlLWxldmVsIHNlYXJjaCBjb21wb25lbnQuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYlNlYXJjaFNlcnZpY2Uge1xuICBwcml2YXRlIHNlYXJjaFN1Ym1pdHRpbmdzJCA9IG5ldyBTdWJqZWN0PHsgdGVybTogc3RyaW5nLCB0YWc/OiBzdHJpbmcgfT4oKTtcbiAgcHJpdmF0ZSBzZWFyY2hBY3RpdmF0aW9ucyQgPSBuZXcgU3ViamVjdDx7IHNlYXJjaFR5cGU6IHN0cmluZywgdGFnPzogc3RyaW5nIH0+KCk7XG4gIHByaXZhdGUgc2VhcmNoRGVhY3RpdmF0aW9ucyQgPSBuZXcgU3ViamVjdDx7IHNlYXJjaFR5cGU6IHN0cmluZywgdGFnPzogc3RyaW5nIH0+KCk7XG4gIHByaXZhdGUgc2VhcmNoSW5wdXQkID0gbmV3IFN1YmplY3Q8eyB0ZXJtOiBzdHJpbmcsIHRhZz86IHN0cmluZyB9PigpO1xuXG4gIC8qKipcbiAgICogQWN0aXZhdGUgKG9wZW4pIHNlYXJjaCBjb21wb25lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlYXJjaFR5cGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgKi9cbiAgYWN0aXZhdGVTZWFyY2goc2VhcmNoVHlwZTogc3RyaW5nLCB0YWc/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlYXJjaEFjdGl2YXRpb25zJC5uZXh0KHsgc2VhcmNoVHlwZSwgdGFnIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aWJhdGUgKGNsb3NlKSBzZWFyY2ggY29tcG9uZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2hUeXBlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICovXG4gIGRlYWN0aXZhdGVTZWFyY2goc2VhcmNoVHlwZTogc3RyaW5nLCB0YWc/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlYXJjaERlYWN0aXZhdGlvbnMkLm5leHQoeyBzZWFyY2hUeXBlLCB0YWcgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBzZWFyY2ggc3VibWl0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICovXG4gIHN1Ym1pdFNlYXJjaCh0ZXJtOiBzdHJpbmcsIHRhZz86IHN0cmluZykge1xuICAgIHRoaXMuc2VhcmNoU3VibWl0dGluZ3MkLm5leHQoeyB0ZXJtLCB0YWcgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBzZWFyY2ggc3VibWl0IGJ5IGlucHV0IGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICovXG4gIHNlYXJjaElucHV0KHRlcm06IHN0cmluZywgdGFnPzogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWFyY2hJbnB1dCQubmV4dCh7dGVybSwgdGFnfSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvICdhY3RpdmF0ZScgZXZlbnRcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx7c2VhcmNoVHlwZTogc3RyaW5nOyB0YWc/OiBzdHJpbmd9PlxuICAgKi9cbiAgb25TZWFyY2hBY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPHsgc2VhcmNoVHlwZTogc3RyaW5nLCB0YWc/OiBzdHJpbmcgfT4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaEFjdGl2YXRpb25zJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byAnZGVhY3RpdmF0ZScgZXZlbnRcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx7c2VhcmNoVHlwZTogc3RyaW5nOyB0YWc/OiBzdHJpbmd9PlxuICAgKi9cbiAgb25TZWFyY2hEZWFjdGl2YXRlKCk6IE9ic2VydmFibGU8eyBzZWFyY2hUeXBlOiBzdHJpbmcsIHRhZz86IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoRGVhY3RpdmF0aW9ucyQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gJ3N1Ym1pdCcgZXZlbnQgKHdoZW4gc3VibWl0IGJ1dHRvbiBjbGlja2VkKVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHt0ZXJtOiBzdHJpbmc7IHRhZz86IHN0cmluZ30+XG4gICAqL1xuICBvblNlYXJjaFN1Ym1pdCgpOiBPYnNlcnZhYmxlPHsgdGVybTogc3RyaW5nLCB0YWc/OiBzdHJpbmcgfT4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaFN1Ym1pdHRpbmdzJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBpbnB1dCBldmVudFxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHt0ZXJtOiBzdHJpbmc7IHRhZz86IHN0cmluZ30+XG4gICAqL1xuICBvblNlYXJjaElucHV0KCk6IE9ic2VydmFibGU8eyB0ZXJtOiBzdHJpbmcsIHRhZz86IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoSW5wdXQkLnBpcGUoc2hhcmUoKSk7XG4gIH1cbn1cbiJdfQ==