/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { share, refCount, publish } from 'rxjs/operators';
import * as i0 from "@angular/core";
export const getSidebarState$ = new Subject();
export const getSidebarResponsiveState$ = new Subject();
/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 *
 * Allows you to change sidebar state dynamically from any part of the app:
 * @stacked-example(Sidebar State, sidebar/sidebar-toggle.component)
 */
export class NbSidebarService {
    constructor() {
        this.toggle$ = new Subject();
        this.expand$ = new Subject();
        this.collapse$ = new Subject();
        this.compact$ = new Subject();
    }
    /**
     * Subscribe to toggle events
     *
     * @returns Observable<{ compact: boolean, tag: string }>
     */
    onToggle() {
        return this.toggle$.pipe(share());
    }
    /**
     * Subscribe to expand events
     * @returns Observable<{ tag: string }>
     */
    onExpand() {
        return this.expand$.pipe(share());
    }
    /**
     * Subscribe to collapse evens
     * @returns Observable<{ tag: string }>
     */
    onCollapse() {
        return this.collapse$.pipe(share());
    }
    /**
     * Subscribe to compact evens
     * @returns Observable<{ tag: string }>
     */
    onCompact() {
        return this.compact$.pipe(share());
    }
    /**
     * Toggle a sidebar
     * @param {boolean} compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    toggle(compact = false, tag) {
        this.toggle$.next({ compact, tag });
    }
    /**
     * Expands a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    expand(tag) {
        this.expand$.next({ tag });
    }
    /**
     * Collapses a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    collapse(tag) {
        this.collapse$.next({ tag });
    }
    /**
     * Makes sidebar compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    compact(tag) {
        this.compact$.next({ tag });
    }
    /**
     * Returns sidebar state observable which emits once
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar state you need
     */
    getSidebarState(tag) {
        const observer = new ReplaySubject(1);
        getSidebarState$.next({ observer, tag });
        return observer.pipe(publish(), refCount());
    }
    /**
     * Returns sidebar state observable which emits once
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar responsive state you need
     */
    getSidebarResponsiveState(tag) {
        const observer = new ReplaySubject();
        getSidebarResponsiveState$.next({ observer, tag });
        return observer.pipe(publish(), refCount());
    }
}
NbSidebarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSidebarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbSidebarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSidebarService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSidebarService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQXdCLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHMUQsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQXVELENBQUM7QUFDbkcsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxPQUFPLEVBQWlFLENBQUM7QUFFdkg7Ozs7Ozs7R0FPRztBQUVILE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7UUFHVSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQXFDLENBQUM7UUFDM0QsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFtQixDQUFDO1FBQ3pDLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUMzQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQW1CLENBQUM7S0E2Rm5EO0lBM0ZDOzs7O09BSUc7SUFDSCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLEdBQVk7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxHQUFZO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVEsQ0FBQyxHQUFZO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE9BQU8sQ0FBQyxHQUFZO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGVBQWUsQ0FBQyxHQUFZO1FBQzFCLE1BQU0sUUFBUSxHQUFHLElBQUksYUFBYSxDQUFpQixDQUFDLENBQUMsQ0FBQztRQUN0RCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHlCQUF5QixDQUFDLEdBQVk7UUFDcEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxhQUFhLEVBQTRCLENBQUM7UUFDL0QsMEJBQTBCLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbkQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7NkdBakdVLGdCQUFnQjtpSEFBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIE9ic2VydmVyLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSwgcmVmQ291bnQsIHB1Ymxpc2ggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOYlNpZGViYXJSZXNwb25zaXZlU3RhdGUsIE5iU2lkZWJhclN0YXRlIH0gZnJvbSAnLi9zaWRlYmFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBnZXRTaWRlYmFyU3RhdGUkID0gbmV3IFN1YmplY3Q8eyB0YWc6IHN0cmluZywgb2JzZXJ2ZXI6IE9ic2VydmVyPE5iU2lkZWJhclN0YXRlPiB9PigpO1xuZXhwb3J0IGNvbnN0IGdldFNpZGViYXJSZXNwb25zaXZlU3RhdGUkID0gbmV3IFN1YmplY3Q8eyB0YWc6IHN0cmluZywgb2JzZXJ2ZXI6IE9ic2VydmVyPE5iU2lkZWJhclJlc3BvbnNpdmVTdGF0ZT4gfT4oKTtcblxuLyoqXG4gKiBTaWRlYmFyIHNlcnZpY2UuXG4gKlxuICogUm9vdCBtb2R1bGUgc2VydmljZSB0byBjb250cm9sIHRoZSBzaWRlYmFyIGZyb20gYW55IHBhcnQgb2YgdGhlIGFwcC5cbiAqXG4gKiBBbGxvd3MgeW91IHRvIGNoYW5nZSBzaWRlYmFyIHN0YXRlIGR5bmFtaWNhbGx5IGZyb20gYW55IHBhcnQgb2YgdGhlIGFwcDpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU2lkZWJhciBTdGF0ZSwgc2lkZWJhci9zaWRlYmFyLXRvZ2dsZS5jb21wb25lbnQpXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYlNpZGViYXJTZXJ2aWNlIHtcblxuICBwcml2YXRlIHRvZ2dsZSQgPSBuZXcgU3ViamVjdDx7IGNvbXBhY3Q6IGJvb2xlYW4sIHRhZzogc3RyaW5nIH0+KCk7XG4gIHByaXZhdGUgZXhwYW5kJCA9IG5ldyBTdWJqZWN0PHsgdGFnOiBzdHJpbmcgfT4oKTtcbiAgcHJpdmF0ZSBjb2xsYXBzZSQgPSBuZXcgU3ViamVjdDx7IHRhZzogc3RyaW5nIH0+KCk7XG4gIHByaXZhdGUgY29tcGFjdCQgPSBuZXcgU3ViamVjdDx7IHRhZzogc3RyaW5nIH0+KCk7XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0b2dnbGUgZXZlbnRzXG4gICAqXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8eyBjb21wYWN0OiBib29sZWFuLCB0YWc6IHN0cmluZyB9PlxuICAgKi9cbiAgb25Ub2dnbGUoKTogT2JzZXJ2YWJsZTx7IGNvbXBhY3Q6IGJvb2xlYW4sIHRhZzogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4gdGhpcy50b2dnbGUkLnBpcGUoc2hhcmUoKSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIGV4cGFuZCBldmVudHNcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx7IHRhZzogc3RyaW5nIH0+XG4gICAqL1xuICBvbkV4cGFuZCgpOiBPYnNlcnZhYmxlPHsgdGFnOiBzdHJpbmcgfT4ge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZCQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gY29sbGFwc2UgZXZlbnNcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx7IHRhZzogc3RyaW5nIH0+XG4gICAqL1xuICBvbkNvbGxhcHNlKCk6IE9ic2VydmFibGU8eyB0YWc6IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIHRoaXMuY29sbGFwc2UkLnBpcGUoc2hhcmUoKSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIGNvbXBhY3QgZXZlbnNcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx7IHRhZzogc3RyaW5nIH0+XG4gICAqL1xuICBvbkNvbXBhY3QoKTogT2JzZXJ2YWJsZTx7IHRhZzogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wYWN0JC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBhIHNpZGViYXJcbiAgICogQHBhcmFtIHtib29sZWFufSBjb21wYWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgSWYgeW91IGhhdmUgbXVsdGlwbGUgc2lkZWJhcnMgb24gdGhlIHBhZ2UsIG1hcmsgdGhlbSB3aXRoIGB0YWdgIGlucHV0IHByb3BlcnR5IGFuZCBwYXNzIGl0IGhlcmVcbiAgICogdG8gc3BlY2lmeSB3aGljaCBzaWRlYmFyIHlvdSB3YW50IHRvIGNvbnRyb2xcbiAgICovXG4gIHRvZ2dsZShjb21wYWN0ID0gZmFsc2UsIHRhZz86IHN0cmluZykge1xuICAgIHRoaXMudG9nZ2xlJC5uZXh0KHsgY29tcGFjdCwgdGFnIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cGFuZHMgYSBzaWRlYmFyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgSWYgeW91IGhhdmUgbXVsdGlwbGUgc2lkZWJhcnMgb24gdGhlIHBhZ2UsIG1hcmsgdGhlbSB3aXRoIGB0YWdgIGlucHV0IHByb3BlcnR5IGFuZCBwYXNzIGl0IGhlcmVcbiAgICogdG8gc3BlY2lmeSB3aGljaCBzaWRlYmFyIHlvdSB3YW50IHRvIGNvbnRyb2xcbiAgICovXG4gIGV4cGFuZCh0YWc/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmV4cGFuZCQubmV4dCh7IHRhZyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsYXBzZXMgYSBzaWRlYmFyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgSWYgeW91IGhhdmUgbXVsdGlwbGUgc2lkZWJhcnMgb24gdGhlIHBhZ2UsIG1hcmsgdGhlbSB3aXRoIGB0YWdgIGlucHV0IHByb3BlcnR5IGFuZCBwYXNzIGl0IGhlcmVcbiAgICogdG8gc3BlY2lmeSB3aGljaCBzaWRlYmFyIHlvdSB3YW50IHRvIGNvbnRyb2xcbiAgICovXG4gIGNvbGxhcHNlKHRhZz86IHN0cmluZykge1xuICAgIHRoaXMuY29sbGFwc2UkLm5leHQoeyB0YWcgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgc2lkZWJhciBjb21wYWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgSWYgeW91IGhhdmUgbXVsdGlwbGUgc2lkZWJhcnMgb24gdGhlIHBhZ2UsIG1hcmsgdGhlbSB3aXRoIGB0YWdgIGlucHV0IHByb3BlcnR5IGFuZCBwYXNzIGl0IGhlcmVcbiAgICogdG8gc3BlY2lmeSB3aGljaCBzaWRlYmFyIHlvdSB3YW50IHRvIGNvbnRyb2xcbiAgICovXG4gIGNvbXBhY3QodGFnPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb21wYWN0JC5uZXh0KHsgdGFnIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc2lkZWJhciBzdGF0ZSBvYnNlcnZhYmxlIHdoaWNoIGVtaXRzIG9uY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyBJZiB5b3UgaGF2ZSBtdWx0aXBsZSBzaWRlYmFycyBvbiB0aGUgcGFnZSwgbWFyayB0aGVtIHdpdGggYHRhZ2AgaW5wdXQgcHJvcGVydHkgYW5kIHBhc3MgaXQgaGVyZVxuICAgKiB0byBzcGVjaWZ5IHdoaWNoIHNpZGViYXIgc3RhdGUgeW91IG5lZWRcbiAgICovXG4gIGdldFNpZGViYXJTdGF0ZSh0YWc/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5iU2lkZWJhclN0YXRlPiB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVwbGF5U3ViamVjdDxOYlNpZGViYXJTdGF0ZT4oMSk7XG4gICAgZ2V0U2lkZWJhclN0YXRlJC5uZXh0KHsgb2JzZXJ2ZXIsIHRhZyB9KTtcbiAgICByZXR1cm4gb2JzZXJ2ZXIucGlwZShwdWJsaXNoKCksIHJlZkNvdW50KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc2lkZWJhciBzdGF0ZSBvYnNlcnZhYmxlIHdoaWNoIGVtaXRzIG9uY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyBJZiB5b3UgaGF2ZSBtdWx0aXBsZSBzaWRlYmFycyBvbiB0aGUgcGFnZSwgbWFyayB0aGVtIHdpdGggYHRhZ2AgaW5wdXQgcHJvcGVydHkgYW5kIHBhc3MgaXQgaGVyZVxuICAgKiB0byBzcGVjaWZ5IHdoaWNoIHNpZGViYXIgcmVzcG9uc2l2ZSBzdGF0ZSB5b3UgbmVlZFxuICAgKi9cbiAgZ2V0U2lkZWJhclJlc3BvbnNpdmVTdGF0ZSh0YWc/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5iU2lkZWJhclJlc3BvbnNpdmVTdGF0ZT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IFJlcGxheVN1YmplY3Q8TmJTaWRlYmFyUmVzcG9uc2l2ZVN0YXRlPigpO1xuICAgIGdldFNpZGViYXJSZXNwb25zaXZlU3RhdGUkLm5leHQoeyBvYnNlcnZlciwgdGFnIH0pO1xuICAgIHJldHVybiBvYnNlcnZlci5waXBlKHB1Ymxpc2goKSwgcmVmQ291bnQoKSk7XG4gIH1cbn1cbiJdfQ==