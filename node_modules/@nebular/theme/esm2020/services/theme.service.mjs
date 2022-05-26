/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Inject, Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { map, filter, pairwise, distinctUntilChanged, startWith, share } from 'rxjs/operators';
import { NB_THEME_OPTIONS } from '../theme.options';
import * as i0 from "@angular/core";
import * as i1 from "./breakpoints.service";
import * as i2 from "./js-themes-registry.service";
/**
 * Main Nebular service. Includes various helper methods.
 */
export class NbThemeService {
    constructor(options, breakpointService, jsThemesRegistry) {
        this.options = options;
        this.breakpointService = breakpointService;
        this.jsThemesRegistry = jsThemesRegistry;
        this.themeChanges$ = new ReplaySubject(1);
        this.appendLayoutClass$ = new Subject();
        this.removeLayoutClass$ = new Subject();
        this.changeWindowWidth$ = new ReplaySubject(2);
        if (options && options.name) {
            this.changeTheme(options.name);
        }
    }
    /**
     * Change current application theme
     * @param {string} name
     */
    changeTheme(name) {
        this.themeChanges$.next({ name, previous: this.currentTheme });
        this.currentTheme = name;
    }
    changeWindowWidth(width) {
        this.changeWindowWidth$.next(width);
    }
    /**
     * Returns a theme object with variables (color/paddings/etc) on a theme change.
     * Once subscribed - returns current theme.
     *
     * @returns {Observable<NbJSThemeOptions>}
     */
    getJsTheme() {
        return this.onThemeChange().pipe(map((theme) => {
            return this.jsThemesRegistry.get(theme.name);
        }));
    }
    /**
     * Triggers media query breakpoint change
     * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
     * ```ts
     *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
     * ```
     * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
     */
    onMediaQueryChange() {
        return this.changeWindowWidth$
            .pipe(startWith(undefined), pairwise(), map(([prevWidth, width]) => {
            return [
                this.breakpointService.getByWidth(prevWidth),
                this.breakpointService.getByWidth(width),
            ];
        }), filter(([prevPoint, point]) => {
            return prevPoint.name !== point.name;
        }), distinctUntilChanged(null, params => params[0].name + params[1].name), share());
    }
    /**
     * Triggered when current theme is changed
     * @returns {Observable<any>}
     */
    onThemeChange() {
        return this.themeChanges$.pipe(share());
    }
    /**
     * Append a class to nb-layout
     * @param {string} className
     */
    appendLayoutClass(className) {
        this.appendLayoutClass$.next(className);
    }
    /**
     * Triggered when a new class is added to nb-layout through `appendLayoutClass` method
     * @returns {Observable<any>}
     */
    onAppendLayoutClass() {
        return this.appendLayoutClass$.pipe(share());
    }
    /**
     * Removes a class from nb-layout
     * @param {string} className
     */
    removeLayoutClass(className) {
        this.removeLayoutClass$.next(className);
    }
    /**
     * Triggered when a class is removed from nb-layout through `removeLayoutClass` method
     * @returns {Observable<any>}
     */
    onRemoveLayoutClass() {
        return this.removeLayoutClass$.pipe(share());
    }
}
NbThemeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbThemeService, deps: [{ token: NB_THEME_OPTIONS }, { token: i1.NbMediaBreakpointsService }, { token: i2.NbJSThemesRegistry }], target: i0.ɵɵFactoryTarget.Injectable });
NbThemeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbThemeService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbThemeService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_THEME_OPTIONS]
                }] }, { type: i1.NbMediaBreakpointsService }, { type: i2.NbJSThemesRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvc2VydmljZXMvdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUtwRDs7R0FFRztBQUVILE1BQU0sT0FBTyxjQUFjO0lBU3pCLFlBQWdELE9BQVksRUFDeEMsaUJBQTRDLEVBQzVDLGdCQUFvQztRQUZSLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFDeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEyQjtRQUM1QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBUGhELGtCQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNuQyx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ25DLHVCQUFrQixHQUFHLElBQUksYUFBYSxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBS3hELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLElBQVk7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FDOUIsR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCO2FBQzNCLElBQUksQ0FDSCxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQ3BCLFFBQVEsRUFBRSxFQUNWLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBbUIsRUFBRSxFQUFFO1lBQzNDLE9BQU87Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2FBQ0MsQ0FBQztRQUM5QyxDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQXlDLEVBQUUsRUFBRTtZQUNwRSxPQUFPLFNBQVMsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFDRixvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDckUsS0FBSyxFQUFFLENBQ1IsQ0FBQztJQUNOLENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQkFBaUIsQ0FBQyxTQUFpQjtRQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlCQUFpQixDQUFDLFNBQWlCO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzsyR0E3R1UsY0FBYyxrQkFTTCxnQkFBZ0I7K0dBVHpCLGNBQWM7MkZBQWQsY0FBYztrQkFEMUIsVUFBVTs7MEJBVUksTUFBTTsyQkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgcGFpcndpc2UsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzdGFydFdpdGgsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOQl9USEVNRV9PUFRJT05TIH0gZnJvbSAnLi4vdGhlbWUub3B0aW9ucyc7XG5pbXBvcnQgeyBOYkpTVGhlbWVPcHRpb25zIH0gZnJvbSAnLi9qcy10aGVtZXMvdGhlbWUub3B0aW9ucyc7XG5pbXBvcnQgeyBOYkpTVGhlbWVzUmVnaXN0cnkgfSBmcm9tICcuL2pzLXRoZW1lcy1yZWdpc3RyeS5zZXJ2aWNlJztcbmltcG9ydCB7IE5iTWVkaWFCcmVha3BvaW50c1NlcnZpY2UsIE5iTWVkaWFCcmVha3BvaW50IH0gZnJvbSAnLi9icmVha3BvaW50cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBNYWluIE5lYnVsYXIgc2VydmljZS4gSW5jbHVkZXMgdmFyaW91cyBoZWxwZXIgbWV0aG9kcy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5iVGhlbWVTZXJ2aWNlIHtcblxuICAvLyBUT0RPOiBiZWhhdmlvcmFsIHN1YmplY3QgaGVyZT9cbiAgY3VycmVudFRoZW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgdGhlbWVDaGFuZ2VzJCA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICBwcml2YXRlIGFwcGVuZExheW91dENsYXNzJCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVtb3ZlTGF5b3V0Q2xhc3MkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjaGFuZ2VXaW5kb3dXaWR0aCQgPSBuZXcgUmVwbGF5U3ViamVjdDxudW1iZXI+KDIpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTkJfVEhFTUVfT1BUSU9OUykgcHJvdGVjdGVkIG9wdGlvbnM6IGFueSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTogTmJNZWRpYUJyZWFrcG9pbnRzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBqc1RoZW1lc1JlZ2lzdHJ5OiBOYkpTVGhlbWVzUmVnaXN0cnkpIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm5hbWUpIHtcbiAgICAgIHRoaXMuY2hhbmdlVGhlbWUob3B0aW9ucy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGN1cnJlbnQgYXBwbGljYXRpb24gdGhlbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICovXG4gIGNoYW5nZVRoZW1lKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudGhlbWVDaGFuZ2VzJC5uZXh0KHsgbmFtZSwgcHJldmlvdXM6IHRoaXMuY3VycmVudFRoZW1lIH0pO1xuICAgIHRoaXMuY3VycmVudFRoZW1lID0gbmFtZTtcbiAgfVxuXG4gIGNoYW5nZVdpbmRvd1dpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVdpbmRvd1dpZHRoJC5uZXh0KHdpZHRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdGhlbWUgb2JqZWN0IHdpdGggdmFyaWFibGVzIChjb2xvci9wYWRkaW5ncy9ldGMpIG9uIGEgdGhlbWUgY2hhbmdlLlxuICAgKiBPbmNlIHN1YnNjcmliZWQgLSByZXR1cm5zIGN1cnJlbnQgdGhlbWUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE5iSlNUaGVtZU9wdGlvbnM+fVxuICAgKi9cbiAgZ2V0SnNUaGVtZSgpOiBPYnNlcnZhYmxlPE5iSlNUaGVtZU9wdGlvbnM+IHtcbiAgICByZXR1cm4gdGhpcy5vblRoZW1lQ2hhbmdlKCkucGlwZShcbiAgICAgIG1hcCgodGhlbWU6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5qc1RoZW1lc1JlZ2lzdHJ5LmdldCh0aGVtZS5uYW1lKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgbWVkaWEgcXVlcnkgYnJlYWtwb2ludCBjaGFuZ2VcbiAgICogUmV0dXJucyBhIHBhaXIgd2hlcmUgdGhlIGZpcnN0IGl0ZW0gaXMgcHJldmlvdXMgbWVkaWEgYnJlYWtwb2ludCBhbmQgdGhlIHNlY29uZCBpdGVtIGlzIGN1cnJlbnQgYnJlYWtwb2l0LlxuICAgKiBgYGB0c1xuICAgKiAgW3sgbmFtZTogJ3hzJywgd2lkdGg6IDAgfSwgeyBuYW1lOiAnbWQnLCB3aWR0aDogNzY4IH1dIC8vIGNoYW5nZSBmcm9tIGB4c2AgdG8gYG1kYFxuICAgKiBgYGBcbiAgICogQHJldHVybnMge09ic2VydmFibGU8W05iTWVkaWFCcmVha3BvaW50LCBOYk1lZGlhQnJlYWtwb2ludF0+fVxuICAgKi9cbiAgb25NZWRpYVF1ZXJ5Q2hhbmdlKCk6IE9ic2VydmFibGU8TmJNZWRpYUJyZWFrcG9pbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZVdpbmRvd1dpZHRoJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh1bmRlZmluZWQpLFxuICAgICAgICBwYWlyd2lzZSgpLFxuICAgICAgICBtYXAoKFtwcmV2V2lkdGgsIHdpZHRoXTogW251bWJlciwgbnVtYmVyXSkgPT4ge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmdldEJ5V2lkdGgocHJldldpZHRoKSxcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuZ2V0QnlXaWR0aCh3aWR0aCksXG4gICAgICAgICAgXSBhcyBbTmJNZWRpYUJyZWFrcG9pbnQsIE5iTWVkaWFCcmVha3BvaW50XTtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoW3ByZXZQb2ludCwgcG9pbnRdOiBbTmJNZWRpYUJyZWFrcG9pbnQsIE5iTWVkaWFCcmVha3BvaW50XSkgPT4ge1xuICAgICAgICAgIHJldHVybiBwcmV2UG9pbnQubmFtZSAhPT0gcG9pbnQubmFtZTtcbiAgICAgICAgfSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKG51bGwsIHBhcmFtcyA9PiBwYXJhbXNbMF0ubmFtZSArIHBhcmFtc1sxXS5uYW1lKSxcbiAgICAgICAgc2hhcmUoKSxcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcmVkIHdoZW4gY3VycmVudCB0aGVtZSBpcyBjaGFuZ2VkXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBvblRoZW1lQ2hhbmdlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWVDaGFuZ2VzJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCBhIGNsYXNzIHRvIG5iLWxheW91dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhcHBlbmRMYXlvdXRDbGFzcyhjbGFzc05hbWU6IHN0cmluZykge1xuICAgIHRoaXMuYXBwZW5kTGF5b3V0Q2xhc3MkLm5leHQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBhIG5ldyBjbGFzcyBpcyBhZGRlZCB0byBuYi1sYXlvdXQgdGhyb3VnaCBgYXBwZW5kTGF5b3V0Q2xhc3NgIG1ldGhvZFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgb25BcHBlbmRMYXlvdXRDbGFzcygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFwcGVuZExheW91dENsYXNzJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIG5iLWxheW91dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVMYXlvdXRDbGFzcyhjbGFzc05hbWU6IHN0cmluZykge1xuICAgIHRoaXMucmVtb3ZlTGF5b3V0Q2xhc3MkLm5leHQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBhIGNsYXNzIGlzIHJlbW92ZWQgZnJvbSBuYi1sYXlvdXQgdGhyb3VnaCBgcmVtb3ZlTGF5b3V0Q2xhc3NgIG1ldGhvZFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgb25SZW1vdmVMYXlvdXRDbGFzcygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZUxheW91dENsYXNzJC5waXBlKHNoYXJlKCkpO1xuICB9XG59XG4iXX0=