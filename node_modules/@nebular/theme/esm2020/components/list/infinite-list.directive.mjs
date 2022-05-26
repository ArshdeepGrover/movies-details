import { Directive, Input, HostListener, EventEmitter, Output, ContentChildren, } from '@angular/core';
import { forkJoin, of as observableOf, interval, timer, Subject, merge, BehaviorSubject } from 'rxjs';
import { filter, switchMap, map, takeUntil, take, throttle } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { NbListItemComponent } from './list.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/scroll.service";
import * as i2 from "../../services/ruler.service";
export class NbScrollableContainerDimensions {
}
/**
 * Infinite List Directive
 *
 * ```html
 *  <nb-list nbInfiniteList [threshold]="500" (bottomThreshold)="loadNext()">
 *    <nb-list-item *ngFor="let item of items"></nb-list-item>
 *  </nb-list>
 * ```
 *
 * @stacked-example(Simple infinite list, infinite-list/infinite-list-showcase.component)
 *
 * Directive will notify when list scrolled up or down to a given threshold.
 * By default it listen to scroll of list on which applied, but also can be set to listen to window scroll.
 *
 * @stacked-example(Scroll modes, infinite-list/infinite-list-scroll-modes.component)
 *
 * To improve UX of infinite lists, it's better to keep current page in url,
 * so user able to return to the last viewed page or to share a link to this page.
 * `nbListPageTracker` directive will help you to know, what page user currently viewing.
 * Just put it on a list, set page size and it will calculate page that currently in viewport.
 * You can [open the example](example/infinite-list/infinite-news-list.component)
 * in a new tab to check out this feature.
 *
 * @stacked-example(Infinite list with pager, infinite-list/infinite-news-list.component)
 *
 * @stacked-example(Infinite list with placeholders at the top, infinite-list/infinite-list-placeholders.component)
 *
 */
export class NbInfiniteListDirective {
    constructor(elementRef, scrollService, dimensionsService) {
        this.elementRef = elementRef;
        this.scrollService = scrollService;
        this.dimensionsService = dimensionsService;
        this.destroy$ = new Subject();
        this.windowScroll = false;
        this.elementScroll$ = new Subject();
        this.windowScroll$ = this.scrollService.onScroll().pipe(filter(() => this.windowScroll));
        this.bottomThreshold$ = new Subject();
        this.topThreshold$ = new Subject();
        this.throttleTime$ = new BehaviorSubject(0);
        /**
         * Emits when distance between list bottom and current scroll position is less than threshold.
         */
        this.bottomThreshold = new EventEmitter(true);
        /**
         * Emits when distance between list top and current scroll position is less than threshold.
         */
        this.topThreshold = new EventEmitter(true);
    }
    get elementScroll() {
        return !this.windowScroll;
    }
    /**
     * Prevent subsequent bottom/topThreshold emissions for specified duration after emitting once.
     * In milliseconds.
     */
    set throttleTime(value) {
        this.throttleTime$.next(value);
    }
    get throttleTime() {
        return this.throttleTime$.value;
    }
    /**
     * By default component observes list scroll position.
     * If set to `true`, component will observe position of page scroll instead.
     */
    set listenWindowScroll(value) {
        this.windowScroll = convertToBoolProperty(value);
    }
    onElementScroll() {
        if (this.elementScroll) {
            this.elementScroll$.next();
        }
    }
    ngAfterViewInit() {
        merge(this.windowScroll$, this.elementScroll$)
            .pipe(switchMap(() => this.getContainerDimensions()), takeUntil(this.destroy$))
            .subscribe((dimensions) => this.checkPosition(dimensions));
        this.throttleTime$
            .pipe(switchMap(() => this.topThreshold$.pipe(throttle(() => interval(this.throttleTime)))), takeUntil(this.destroy$))
            .subscribe(() => {
            this.topThreshold.emit();
        });
        this.throttleTime$
            .pipe(switchMap(() => this.bottomThreshold$.pipe(throttle(() => interval(this.throttleTime)))), takeUntil(this.destroy$))
            .subscribe(() => {
            this.bottomThreshold.emit();
        });
        this.listItems.changes
            .pipe(
        // For some reason, changes are emitted before list item removed from dom,
        // so dimensions will be incorrect.
        // Check every 50ms for a second if dom and query are in sync.
        // Once they synchronized, we can get proper dimensions.
        switchMap(() => interval(50).pipe(filter(() => this.inSyncWithDom()), take(1), takeUntil(timer(1000)))), switchMap(() => this.getContainerDimensions()), takeUntil(this.destroy$))
            .subscribe((dimensions) => this.checkPosition(dimensions));
        this.getContainerDimensions().subscribe((dimensions) => this.checkPosition(dimensions));
    }
    ngOnDestroy() {
        this.topThreshold$.complete();
        this.bottomThreshold$.complete();
        this.elementScroll$.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }
    checkPosition({ scrollHeight, scrollTop, clientHeight }) {
        const initialCheck = this.lastScrollPosition == null;
        const manualCheck = this.lastScrollPosition === scrollTop;
        const scrollUp = scrollTop < this.lastScrollPosition;
        const scrollDown = scrollTop > this.lastScrollPosition;
        const distanceToBottom = scrollHeight - scrollTop - clientHeight;
        if ((initialCheck || manualCheck || scrollDown) && distanceToBottom <= this.threshold) {
            this.bottomThreshold$.next();
        }
        if ((initialCheck || scrollUp) && scrollTop <= this.threshold) {
            this.topThreshold$.next();
        }
        this.lastScrollPosition = scrollTop;
    }
    getContainerDimensions() {
        if (this.elementScroll) {
            const { scrollTop, scrollHeight, clientHeight } = this.elementRef.nativeElement;
            return observableOf({ scrollTop, scrollHeight, clientHeight });
        }
        return forkJoin([this.scrollService.getPosition(), this.dimensionsService.getDimensions()]).pipe(map(([scrollPosition, dimensions]) => ({
            scrollTop: scrollPosition.y,
            scrollHeight: dimensions.scrollHeight,
            clientHeight: dimensions.clientHeight,
        })));
    }
    inSyncWithDom() {
        return this.elementRef.nativeElement.children.length === this.listItems.length;
    }
}
NbInfiniteListDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbInfiniteListDirective, deps: [{ token: i0.ElementRef }, { token: i1.NbLayoutScrollService }, { token: i2.NbLayoutRulerService }], target: i0.ɵɵFactoryTarget.Directive });
NbInfiniteListDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbInfiniteListDirective, selector: "[nbInfiniteList]", inputs: { threshold: "threshold", throttleTime: "throttleTime", listenWindowScroll: "listenWindowScroll" }, outputs: { bottomThreshold: "bottomThreshold", topThreshold: "topThreshold" }, host: { listeners: { "scroll": "onElementScroll()" } }, queries: [{ propertyName: "listItems", predicate: NbListItemComponent }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbInfiniteListDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbInfiniteList]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NbLayoutScrollService }, { type: i2.NbLayoutRulerService }]; }, propDecorators: { threshold: [{
                type: Input
            }], throttleTime: [{
                type: Input
            }], listenWindowScroll: [{
                type: Input
            }], bottomThreshold: [{
                type: Output
            }], topThreshold: [{
                type: Output
            }], onElementScroll: [{
                type: HostListener,
                args: ['scroll']
            }], listItems: [{
                type: ContentChildren,
                args: [NbListItemComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtbGlzdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvbGlzdC9pbmZpbml0ZS1saXN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBRVosWUFBWSxFQUNaLE1BQU0sRUFHTixlQUFlLEdBRWhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYyxRQUFRLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBa0IsTUFBTSxZQUFZLENBQUM7QUFHbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFdkQsTUFBTSxPQUFPLCtCQUErQjtDQUkzQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQkc7QUFJSCxNQUFNLE9BQU8sdUJBQXVCO0lBK0RsQyxZQUNVLFVBQXNCLEVBQ3RCLGFBQW9DLEVBQ3BDLGlCQUF1QztRQUZ2QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUNwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXNCO1FBakV6QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUV2QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUliLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNyQyxrQkFBYSxHQUFH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LE1BQU0sS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUNqRixDQUFDOztvSEEvSlUsdUJBQXVCO3dHQUF2Qix1QkFBdUIscVVBNkRqQixtQkFBbUI7MkZBN0R6Qix1QkFBdUI7a0JBSG5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7d0tBbUJDLFNBQVM7c0JBRFIsS0FBSztnQkFRRixZQUFZO3NCQURmLEtBQUs7Z0JBYUYsa0JBQWtCO3NCQURyQixLQUFLO2dCQVVOLGVBQWU7c0JBRGQsTUFBTTtnQkFPUCxZQUFZO3NCQURYLE1BQU07Z0JBSVAsZUFBZTtzQkFEZCxZQUFZO3VCQUFDLFFBQVE7Z0JBT2dCLFNBQVM7c0JBQTlDLGVBQWU7dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgT25EZXN0cm95LFxuICBBZnRlclZpZXdJbml0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmb3JrSm9pbiwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBpbnRlcnZhbCwgdGltZXIsIFN1YmplY3QsIG1lcmdlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHRha2VVbnRpbCwgdGFrZSwgdGhyb3R0bGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sUHJvcGVydHksIE5iQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOYkxheW91dFNjcm9sbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zY3JvbGwuc2VydmljZSc7XG5pbXBvcnQgeyBOYkxheW91dFJ1bGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3J1bGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgTmJTY3JvbGxhYmxlQ29udGFpbmVyRGltZW5zaW9ucyB7XG4gIHNjcm9sbFRvcDogbnVtYmVyO1xuICBzY3JvbGxIZWlnaHQ6IG51bWJlcjtcbiAgY2xpZW50SGVpZ2h0OiBudW1iZXI7XG59XG5cbi8qKlxuICogSW5maW5pdGUgTGlzdCBEaXJlY3RpdmVcbiAqXG4gKiBgYGBodG1sXG4gKiAgPG5iLWxpc3QgbmJJbmZpbml0ZUxpc3QgW3RocmVzaG9sZF09XCI1MDBcIiAoYm90dG9tVGhyZXNob2xkKT1cImxvYWROZXh0KClcIj5cbiAqICAgIDxuYi1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj48L25iLWxpc3QtaXRlbT5cbiAqICA8L25iLWxpc3Q+XG4gKiBgYGBcbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKFNpbXBsZSBpbmZpbml0ZSBsaXN0LCBpbmZpbml0ZS1saXN0L2luZmluaXRlLWxpc3Qtc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqIERpcmVjdGl2ZSB3aWxsIG5vdGlmeSB3aGVuIGxpc3Qgc2Nyb2xsZWQgdXAgb3IgZG93biB0byBhIGdpdmVuIHRocmVzaG9sZC5cbiAqIEJ5IGRlZmF1bHQgaXQgbGlzdGVuIHRvIHNjcm9sbCBvZiBsaXN0IG9uIHdoaWNoIGFwcGxpZWQsIGJ1dCBhbHNvIGNhbiBiZSBzZXQgdG8gbGlzdGVuIHRvIHdpbmRvdyBzY3JvbGwuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShTY3JvbGwgbW9kZXMsIGluZmluaXRlLWxpc3QvaW5maW5pdGUtbGlzdC1zY3JvbGwtbW9kZXMuY29tcG9uZW50KVxuICpcbiAqIFRvIGltcHJvdmUgVVggb2YgaW5maW5pdGUgbGlzdHMsIGl0J3MgYmV0dGVyIHRvIGtlZXAgY3VycmVudCBwYWdlIGluIHVybCxcbiAqIHNvIHVzZXIgYWJsZSB0byByZXR1cm4gdG8gdGhlIGxhc3Qgdmlld2VkIHBhZ2Ugb3IgdG8gc2hhcmUgYSBsaW5rIHRvIHRoaXMgcGFnZS5cbiAqIGBuYkxpc3RQYWdlVHJhY2tlcmAgZGlyZWN0aXZlIHdpbGwgaGVscCB5b3UgdG8ga25vdywgd2hhdCBwYWdlIHVzZXIgY3VycmVudGx5IHZpZXdpbmcuXG4gKiBKdXN0IHB1dCBpdCBvbiBhIGxpc3QsIHNldCBwYWdlIHNpemUgYW5kIGl0IHdpbGwgY2FsY3VsYXRlIHBhZ2UgdGhhdCBjdXJyZW50bHkgaW4gdmlld3BvcnQuXG4gKiBZb3UgY2FuIFtvcGVuIHRoZSBleGFtcGxlXShleGFtcGxlL2luZmluaXRlLWxpc3QvaW5maW5pdGUtbmV3cy1saXN0LmNvbXBvbmVudClcbiAqIGluIGEgbmV3IHRhYiB0byBjaGVjayBvdXQgdGhpcyBmZWF0dXJlLlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoSW5maW5pdGUgbGlzdCB3aXRoIHBhZ2VyLCBpbmZpbml0ZS1saXN0L2luZmluaXRlLW5ld3MtbGlzdC5jb21wb25lbnQpXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShJbmZpbml0ZSBsaXN0IHdpdGggcGxhY2Vob2xkZXJzIGF0IHRoZSB0b3AsIGluZmluaXRlLWxpc3QvaW5maW5pdGUtbGlzdC1wbGFjZWhvbGRlcnMuY29tcG9uZW50KVxuICpcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25iSW5maW5pdGVMaXN0XScsXG59KVxuZXhwb3J0IGNsYXNzIE5iSW5maW5pdGVMaXN0RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgbGFzdFNjcm9sbFBvc2l0aW9uO1xuICB3aW5kb3dTY3JvbGwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBnZXQgZWxlbWVudFNjcm9sbCgpIHtcbiAgICByZXR1cm4gIXRoaXMud2luZG93U2Nyb2xsO1xuICB9XG4gIHByaXZhdGUgZWxlbWVudFNjcm9sbCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHdpbmRvd1Njcm9sbCQgPSB0aGlzLnNjcm9sbFNlcnZpY2Uub25TY3JvbGwoKS5waXBlKGZpbHRlcigoKSA9PiB0aGlzLndpbmRvd1Njcm9sbCkpO1xuICBwcml2YXRlIGJvdHRvbVRocmVzaG9sZCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHRvcFRocmVzaG9sZCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHRocm90dGxlVGltZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMCk7XG5cbiAgLyoqXG4gICAqIFRocmVzaG9sZCBhZnRlciB3aGljaCBldmVudCBsb2FkIG1vcmUgZXZlbnQgd2lsbCBiZSBlbWl0ZWQuXG4gICAqIEluIHBpeGVscy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHRocmVzaG9sZDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQcmV2ZW50IHN1YnNlcXVlbnQgYm90dG9tL3RvcFRocmVzaG9sZCBlbWlzc2lvbnMgZm9yIHNwZWNpZmllZCBkdXJhdGlvbiBhZnRlciBlbWl0dGluZyBvbmNlLlxuICAgKiBJbiBtaWxsaXNlY29uZHMuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgdGhyb3R0bGVUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnRocm90dGxlVGltZSQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHRocm90dGxlVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aHJvdHRsZVRpbWUkLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgY29tcG9uZW50IG9ic2VydmVzIGxpc3Qgc2Nyb2xsIHBvc2l0aW9uLlxuICAgKiBJZiBzZXQgdG8gYHRydWVgLCBjb21wb25lbnQgd2lsbCBvYnNlcnZlIHBvc2l0aW9uIG9mIHBhZ2Ugc2Nyb2xsIGluc3RlYWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbGlzdGVuV2luZG93U2Nyb2xsKHZhbHVlKSB7XG4gICAgdGhpcy53aW5kb3dTY3JvbGwgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9saXN0ZW5XaW5kb3dTY3JvbGw6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIGRpc3RhbmNlIGJldHdlZW4gbGlzdCBib3R0b20gYW5kIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGlzIGxlc3MgdGhhbiB0aHJlc2hvbGQuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgYm90dG9tVGhyZXNob2xkID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiBkaXN0YW5jZSBiZXR3ZWVuIGxpc3QgdG9wIGFuZCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBpcyBsZXNzIHRoYW4gdGhyZXNob2xkLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHRvcFRocmVzaG9sZCA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG5cbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJylcbiAgb25FbGVtZW50U2Nyb2xsKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRTY3JvbGwpIHtcbiAgICAgIHRoaXMuZWxlbWVudFNjcm9sbCQubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmJMaXN0SXRlbUNvbXBvbmVudCkgbGlzdEl0ZW1zOiBRdWVyeUxpc3Q8TmJMaXN0SXRlbUNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgc2Nyb2xsU2VydmljZTogTmJMYXlvdXRTY3JvbGxTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGltZW5zaW9uc1NlcnZpY2U6IE5iTGF5b3V0UnVsZXJTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIG1lcmdlKHRoaXMud2luZG93U2Nyb2xsJCwgdGhpcy5lbGVtZW50U2Nyb2xsJClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5nZXRDb250YWluZXJEaW1lbnNpb25zKCkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChkaW1lbnNpb25zKSA9PiB0aGlzLmNoZWNrUG9zaXRpb24oZGltZW5zaW9ucykpO1xuXG4gICAgdGhpcy50aHJvdHRsZVRpbWUkXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMudG9wVGhyZXNob2xkJC5waXBlKHRocm90dGxlKCgpID0+IGludGVydmFsKHRoaXMudGhyb3R0bGVUaW1lKSkpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudG9wVGhyZXNob2xkLmVtaXQoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy50aHJvdHRsZVRpbWUkXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuYm90dG9tVGhyZXNob2xkJC5waXBlKHRocm90dGxlKCgpID0+IGludGVydmFsKHRoaXMudGhyb3R0bGVUaW1lKSkpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYm90dG9tVGhyZXNob2xkLmVtaXQoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5saXN0SXRlbXMuY2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIC8vIEZvciBzb21lIHJlYXNvbiwgY2hhbmdlcyBhcmUgZW1pdHRlZCBiZWZvcmUgbGlzdCBpdGVtIHJlbW92ZWQgZnJvbSBkb20sXG4gICAgICAgIC8vIHNvIGRpbWVuc2lvbnMgd2lsbCBiZSBpbmNvcnJlY3QuXG4gICAgICAgIC8vIENoZWNrIGV2ZXJ5IDUwbXMgZm9yIGEgc2Vjb25kIGlmIGRvbSBhbmQgcXVlcnkgYXJlIGluIHN5bmMuXG4gICAgICAgIC8vIE9uY2UgdGhleSBzeW5jaHJvbml6ZWQsIHdlIGNhbiBnZXQgcHJvcGVyIGRpbWVuc2lvbnMuXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICAgIGludGVydmFsKDUwKS5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuaW5TeW5jV2l0aERvbSgpKSxcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICB0YWtlVW50aWwodGltZXIoMTAwMCkpLFxuICAgICAgICAgICksXG4gICAgICAgICksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmdldENvbnRhaW5lckRpbWVuc2lvbnMoKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGRpbWVuc2lvbnMpID0+IHRoaXMuY2hlY2tQb3NpdGlvbihkaW1lbnNpb25zKSk7XG5cbiAgICB0aGlzLmdldENvbnRhaW5lckRpbWVuc2lvbnMoKS5zdWJzY3JpYmUoKGRpbWVuc2lvbnMpID0+IHRoaXMuY2hlY2tQb3NpdGlvbihkaW1lbnNpb25zKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnRvcFRocmVzaG9sZCQuY29tcGxldGUoKTtcbiAgICB0aGlzLmJvdHRvbVRocmVzaG9sZCQuY29tcGxldGUoKTtcbiAgICB0aGlzLmVsZW1lbnRTY3JvbGwkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgY2hlY2tQb3NpdGlvbih7IHNjcm9sbEhlaWdodCwgc2Nyb2xsVG9wLCBjbGllbnRIZWlnaHQgfTogTmJTY3JvbGxhYmxlQ29udGFpbmVyRGltZW5zaW9ucykge1xuICAgIGNvbnN0IGluaXRpYWxDaGVjayA9IHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID09IG51bGw7XG4gICAgY29uc3QgbWFudWFsQ2hlY2sgPSB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9PT0gc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHNjcm9sbFVwID0gc2Nyb2xsVG9wIDwgdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb247XG4gICAgY29uc3Qgc2Nyb2xsRG93biA9IHNjcm9sbFRvcCA+IHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uO1xuICAgIGNvbnN0IGRpc3RhbmNlVG9Cb3R0b20gPSBzY3JvbGxIZWlnaHQgLSBzY3JvbGxUb3AgLSBjbGllbnRIZWlnaHQ7XG5cbiAgICBpZiAoKGluaXRpYWxDaGVjayB8fCBtYW51YWxDaGVjayB8fCBzY3JvbGxEb3duKSAmJiBkaXN0YW5jZVRvQm90dG9tIDw9IHRoaXMudGhyZXNob2xkKSB7XG4gICAgICB0aGlzLmJvdHRvbVRocmVzaG9sZCQubmV4dCgpO1xuICAgIH1cblxuICAgIGlmICgoaW5pdGlhbENoZWNrIHx8IHNjcm9sbFVwKSAmJiBzY3JvbGxUb3AgPD0gdGhpcy50aHJlc2hvbGQpIHtcbiAgICAgIHRoaXMudG9wVGhyZXNob2xkJC5uZXh0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxUb3A7XG4gIH1cblxuICBwcml2YXRlIGdldENvbnRhaW5lckRpbWVuc2lvbnMoKTogT2JzZXJ2YWJsZTxOYlNjcm9sbGFibGVDb250YWluZXJEaW1lbnNpb25zPiB7XG4gICAgaWYgKHRoaXMuZWxlbWVudFNjcm9sbCkge1xuICAgICAgY29uc3QgeyBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0IH0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoeyBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JrSm9pbihbdGhpcy5zY3JvbGxTZXJ2aWNlLmdldFBvc2l0aW9uKCksIHRoaXMuZGltZW5zaW9uc1NlcnZpY2UuZ2V0RGltZW5zaW9ucygpXSkucGlwZShcbiAgICAgIG1hcCgoW3Njcm9sbFBvc2l0aW9uLCBkaW1lbnNpb25zXSkgPT4gKHtcbiAgICAgICAgc2Nyb2xsVG9wOiBzY3JvbGxQb3NpdGlvbi55LFxuICAgICAgICBzY3JvbGxIZWlnaHQ6IGRpbWVuc2lvbnMuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBjbGllbnRIZWlnaHQ6IGRpbWVuc2lvbnMuY2xpZW50SGVpZ2h0LFxuICAgICAgfSkpLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluU3luY1dpdGhEb20oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gdGhpcy5saXN0SXRlbXMubGVuZ3RoO1xuICB9XG59XG4iXX0=