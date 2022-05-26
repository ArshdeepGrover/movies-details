import { ElementRef, EventEmitter, OnDestroy, AfterViewInit, QueryList } from '@angular/core';
import { NbBooleanInput } from '../helpers';
import { NbLayoutScrollService } from '../../services/scroll.service';
import { NbLayoutRulerService } from '../../services/ruler.service';
import { NbListItemComponent } from './list.component';
import * as i0 from "@angular/core";
export declare class NbScrollableContainerDimensions {
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
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
export declare class NbInfiniteListDirective implements AfterViewInit, OnDestroy {
    private elementRef;
    private scrollService;
    private dimensionsService;
    private destroy$;
    private lastScrollPosition;
    windowScroll: boolean;
    private get elementScroll();
    private elementScroll$;
    private windowScroll$;
    private bottomThreshold$;
    private topThreshold$;
    private throttleTime$;
    /**
     * Threshold after which event load more event will be emited.
     * In pixels.
     */
    threshold: number;
    /**
     * Prevent subsequent bottom/topThreshold emissions for specified duration after emitting once.
     * In milliseconds.
     */
    set throttleTime(value: number);
    get throttleTime(): number;
    /**
     * By default component observes list scroll position.
     * If set to `true`, component will observe position of page scroll instead.
     */
    set listenWindowScroll(value: any);
    static ngAcceptInputType_listenWindowScroll: NbBooleanInput;
    /**
     * Emits when distance between list bottom and current scroll position is less than threshold.
     */
    bottomThreshold: EventEmitter<any>;
    /**
     * Emits when distance between list top and current scroll position is less than threshold.
     */
    topThreshold: EventEmitter<any>;
    onElementScroll(): void;
    listItems: QueryList<NbListItemComponent>;
    constructor(elementRef: ElementRef, scrollService: NbLayoutScrollService, dimensionsService: NbLayoutRulerService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    checkPosition({ scrollHeight, scrollTop, clientHeight }: NbScrollableContainerDimensions): void;
    private getContainerDimensions;
    private inSyncWithDom;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbInfiniteListDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbInfiniteListDirective, "[nbInfiniteList]", never, { "threshold": "threshold"; "throttleTime": "throttleTime"; "listenWindowScroll": "listenWindowScroll"; }, { "bottomThreshold": "bottomThreshold"; "topThreshold": "topThreshold"; }, ["listItems"]>;
}
