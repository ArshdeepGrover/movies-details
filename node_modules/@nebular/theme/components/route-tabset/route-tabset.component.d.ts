/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NbBooleanInput } from '../helpers';
import { NbIconConfig } from '../icon/icon.component';
import * as i0 from "@angular/core";
export interface NbRouteTab {
    route?: RouterLink['routerLink'] | undefined;
    title?: string | undefined;
    icon?: string | NbIconConfig | undefined;
    disabled?: boolean | undefined;
    responsive?: boolean | undefined;
    queryParams?: RouterLink['queryParams'] | undefined;
    queryParamsHandling?: RouterLink['queryParamsHandling'] | undefined;
    fragment?: RouterLink['fragment'] | undefined;
    preserveFragment?: RouterLink['preserveFragment'] | undefined;
    skipLocationChange?: RouterLink['skipLocationChange'] | undefined;
    replaceUrl?: RouterLink['replaceUrl'] | undefined;
    state?: RouterLink['state'] | undefined;
    activeLinkOptions?: RouterLinkActive['routerLinkActiveOptions'] | undefined;
}
/**
 * Route tabset components.
 * Renders tabs inside of a router-outlet.
 *
 * ```ts
 *  tabs = [
 *  {
 *    title: 'Route tab #1',
 *    route: '/pages/description',
 *    icon: 'home',
 *    responsive: true, // hide title before `$tabset-tab-text-hide-breakpoint` value
 *  },
 *  {
 *    title: 'Route tab #2',
 *    route: '/pages/images',
 *    }
 *  ];
 *
 *  <nb-route-tabset [tabs]="tabs"></nb-route-tabset>
 * ```
 * ### Installation
 *
 * Import `NbRouteTabsetModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbRouteTabsetModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * @stacked-example(Route Tabset, tabset/route-tabset-showcase.component)
 *
 * @styles
 *
 * route-tabset-background-color:
 * route-tabset-border-radius:
 * route-tabset-shadow:
 * route-tabset-tab-background-color:
 * route-tabset-tab-padding:
 * route-tabset-tab-text-color:
 * route-tabset-tab-text-font-family:
 * route-tabset-tab-text-font-size:
 * route-tabset-tab-text-font-weight:
 * route-tabset-tab-text-line-height:
 * route-tabset-tab-text-transform:
 * route-tabset-tab-underline-width:
 * route-tabset-tab-underline-color:
 * route-tabset-tab-active-background-color:
 * route-tabset-tab-active-text-color:
 * route-tabset-tab-active-underline-color:
 * route-tabset-tab-focus-background-color:
 * route-tabset-tab-focus-text-color:
 * route-tabset-tab-focus-underline-color:
 * route-tabset-tab-hover-background-color:
 * route-tabset-tab-hover-text-color:
 * route-tabset-tab-hover-underline-color:
 * route-tabset-tab-disabled-background-color:
 * route-tabset-tab-disabled-text-color:
 * route-tabset-tab-disabled-underline-color:
 * route-tabset-divider-color:
 * route-tabset-divider-style:
 * route-tabset-divider-width:
 * route-tabset-scrollbar-color:
 * route-tabset-scrollbar-background-color:
 * route-tabset-scrollbar-width:
 */
export declare class NbRouteTabsetComponent {
    fullWidthValue: boolean;
    /**
     * Tabs configuration
     */
    tabs: NbRouteTab[];
    /**
     * Options passed to `routerLinkActiveOptions` directive which set on tab links.
     * `{ exact: true }` by default.
     */
    activeLinkOptions: RouterLinkActive['routerLinkActiveOptions'];
    /**
     * Take full width of a parent
     * @param {boolean} val
     */
    set fullWidth(val: boolean);
    static ngAcceptInputType_fullWidth: NbBooleanInput;
    /**
     * Emits when tab is selected
     * @type {EventEmitter<NbRouteTab>}
     */
    changeTab: EventEmitter<NbRouteTab>;
    selectTab(tab: NbRouteTab): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRouteTabsetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbRouteTabsetComponent, "nb-route-tabset", never, { "tabs": "tabs"; "activeLinkOptions": "activeLinkOptions"; "fullWidth": "fullWidth"; }, { "changeTab": "changeTab"; }, never, never>;
}
