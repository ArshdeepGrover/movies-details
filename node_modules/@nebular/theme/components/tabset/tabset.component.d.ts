import { EventEmitter, QueryList, AfterContentInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbBooleanInput } from '../helpers';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbBadgePosition } from '../badge/badge.component';
import { NbIconConfig } from '../icon/icon.component';
import { NbTabContentDirective } from './tab-content.directive';
import { NbTabTitleDirective } from './tab-title.directive';
import * as i0 from "@angular/core";
/**
 * Specific tab container.
 *
 * ```ts
 * <nb-tab tabTitle="Users"
 *   badgeText="99+"
 *   badgeStatus="danger">
 *   <p>List of <strong>users</strong>.</p>
 * </nb-tab>
 * ```
 */
export declare class NbTabComponent {
    tabContentDirective: NbTabContentDirective;
    tabTitleDirective: NbTabTitleDirective;
    /**
     * Tab title
     * @type {string}
     */
    tabTitle: string;
    /**
     * Tab id
     * @type {string}
     */
    tabId: string;
    /**
     * Use badge dot mode
     * @type {boolean}
     */
    get badgeDot(): boolean;
    set badgeDot(val: boolean);
    protected _badgeDot: boolean;
    static ngAcceptInputType_badgeDot: NbBooleanInput;
    /**
     * Tab icon name or icon config object
     * @type {string | NbIconConfig}
     */
    tabIcon: string | NbIconConfig;
    /**
     * Item is disabled and cannot be opened.
     * @type {boolean}
     */
    get disabled(): boolean;
    set disabled(val: boolean);
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Show only icons when width is smaller than `tabs-icon-only-max-width`
     * @type {boolean}
     */
    set responsive(val: boolean);
    get responsive(): boolean;
    static ngAcceptInputType_responsive: NbBooleanInput;
    /**
     * Makes this tab a link that initiates navigation to a route
     * @type string
     */
    route: string;
    activeValue: boolean;
    responsiveValue: boolean;
    disabledValue: boolean;
    /**
     * Specifies active tab
     * @returns {boolean}
     */
    get active(): boolean;
    set active(val: boolean);
    static ngAcceptInputType_active: NbBooleanInput;
    /**
     * Lazy load content before tab selection
     * @docs-private
     * @deprecated This setting never worked. Wrap content into a `nbTabContent` to make it lazy.
     * @breaking-change Remove 10.0.0
     */
    set lazyLoad(val: boolean);
    static ngAcceptInputType_lazyLoad: NbBooleanInput;
    /**
     * Badge text to display
     * @type string
     */
    badgeText: string;
    /**
     * Badge status (adds specific styles):
     * 'primary', 'info', 'success', 'warning', 'danger'
     * @param {string} val
     */
    badgeStatus: NbComponentOrCustomStatus;
    /**
     * Badge position.
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    badgePosition: NbBadgePosition;
    /**
     * @deprecated
     * @breaking-change Remove 10.0.0
     * @docs-private
     */
    init: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTabComponent, "nb-tab", never, { "tabTitle": "tabTitle"; "tabId": "tabId"; "badgeDot": "badgeDot"; "tabIcon": "tabIcon"; "disabled": "disabled"; "responsive": "responsive"; "route": "route"; "active": "active"; "lazyLoad": "lazyLoad"; "badgeText": "badgeText"; "badgeStatus": "badgeStatus"; "badgePosition": "badgePosition"; }, {}, ["tabContentDirective", "tabTitleDirective"], ["*"]>;
}
/**
 *
 * Dynamic tabset component.
 * @stacked-example(Showcase, tabset/tabset-showcase.component)
 *
 * Basic tabset example
 *
 * ```html
 * <nb-tabset>
 *  <nb-tab tabTitle="Simple Tab #1">
 *    Tab content 1
 *  </nb-tab>
 *  <nb-tab tabTitle="Simple Tab #2">
 *    Tab content 2
 *  </nb-tab>
 * </nb-tabset>
 * ```
 *
 * ### Installation
 *
 * Import `NbTabsetModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTabsetModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * It is also possible to set a badge to a particular tab:
 * @stacked-example(Tab With Badge, tabset/tabset-badge.component)
 *
 * and we can set it to full a width of a parent component
 * @stacked-example(Full Width, tabset/tabset-width.component)
 *
 * `tabIcon` should be used to add an icon to the tab. Icon can also be combined with title.
 * `responsive` tab property if set allows you to hide the title on smaller screens
 * (`$tabset-tab-text-hide-breakpoint` variable) for better responsive behaviour.
 * You can open the following example and make
 * your screen smaller - titles will be hidden in the last tabset in the list:
 * @stacked-example(Icon, tabset/tabset-icon.component)
 *
 * It is also possible to disable a tab using `disabled` property:
 * @stacked-example(Disabled Tab, tabset/tabset-disabled.component)
 *
 * By default, the tab contents instantiated straightaway. To make tab contents load lazy,
 * declare the body of a tab in a template with `nbTabContent` directive.
 * ```html
 * <nb-tabset>
 *   <nb-tab>
 *     <some-component *nbTabContent>Lazy content</some-component>
 *   </nb-tab>
 *   <nb-tab>
 *     <ng-template nbTabContent>
 *       Lazy content with template syntax
 *     </ng-template>
 *   </nb-tab>
 * </nb-tabset>
 * ```
 *
 * You can provide a template as a tab title via `<ng-template nbTabTitle>`:
 * @stacked-example(Tab title template, tabset/tabset-template-title.component)
 *
 * @styles
 *
 * tabset-background-color:
 * tabset-border-radius:
 * tabset-shadow:
 * tabset-tab-background-color:
 * tabset-tab-padding:
 * tabset-tab-text-color:
 * tabset-tab-text-font-family:
 * tabset-tab-text-font-size:
 * tabset-tab-text-font-weight:
 * tabset-tab-text-line-height:
 * tabset-tab-text-transform:
 * tabset-tab-underline-width:
 * tabset-tab-underline-color:
 * tabset-tab-active-background-color:
 * tabset-tab-active-text-color:
 * tabset-tab-active-underline-color:
 * tabset-tab-focus-background-color:
 * tabset-tab-focus-text-color:
 * tabset-tab-focus-underline-color:
 * tabset-tab-hover-background-color:
 * tabset-tab-hover-text-color:
 * tabset-tab-hover-underline-color:
 * tabset-tab-disabled-background-color:
 * tabset-tab-disabled-text-color:
 * tabset-tab-disabled-underline-color:
 * tabset-divider-color:
 * tabset-divider-style:
 * tabset-divider-width:
 * tabset-content-background-color:
 * tabset-content-padding:
 * tabset-content-text-color:
 * tabset-content-text-font-family:
 * tabset-content-text-font-size:
 * tabset-content-text-font-weight:
 * tabset-content-text-line-height:
 * tabset-scrollbar-color:
 * tabset-scrollbar-background-color:
 * tabset-scrollbar-width:
 */
export declare class NbTabsetComponent implements AfterContentInit, OnDestroy {
    private route;
    private changeDetectorRef;
    tabs: QueryList<NbTabComponent>;
    fullWidthValue: boolean;
    /**
     * Take full width of a parent
     * @param {boolean} val
     */
    set fullWidth(val: boolean);
    static ngAcceptInputType_fullWidth: NbBooleanInput;
    /**
     * If specified - tabset listens to this parameter and selects corresponding tab.
     * @type {string}
     */
    routeParam: string;
    /**
     * Emits when tab is selected
     * @type EventEmitter<any>
     */
    changeTab: EventEmitter<any>;
    private destroy$;
    constructor(route: ActivatedRoute, changeDetectorRef: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    selectTab(selectedTab: NbTabComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTabsetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTabsetComponent, "nb-tabset", never, { "fullWidth": "fullWidth"; "routeParam": "routeParam"; }, { "changeTab": "changeTab"; }, ["tabs"], ["nb-tab"]>;
}
