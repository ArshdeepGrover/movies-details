/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icon.component";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
import * as i4 from "./merge-configs.pipe";
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
export class NbRouteTabsetComponent {
    constructor() {
        this.fullWidthValue = false;
        /**
         * Options passed to `routerLinkActiveOptions` directive which set on tab links.
         * `{ exact: true }` by default.
         */
        this.activeLinkOptions = { exact: true };
        /**
         * Emits when tab is selected
         * @type {EventEmitter<NbRouteTab>}
         */
        this.changeTab = new EventEmitter();
    }
    /**
     * Take full width of a parent
     * @param {boolean} val
     */
    set fullWidth(val) {
        this.fullWidthValue = convertToBoolProperty(val);
    }
    selectTab(tab) {
        this.changeTab.emit(tab);
    }
}
NbRouteTabsetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRouteTabsetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbRouteTabsetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbRouteTabsetComponent, selector: "nb-route-tabset", inputs: { tabs: "tabs", activeLinkOptions: "activeLinkOptions", fullWidth: "fullWidth" }, outputs: { changeTab: "changeTab" }, host: { properties: { "class.full-width": "this.fullWidthValue" } }, ngImport: i0, template: `
    <ul class="route-tabset">
      <ng-container *ngFor="let tab of tabs">
        <li
          *ngIf="tab.disabled; else enabled"
          [class.responsive]="tab.responsive"
          class="route-tab disabled"
          tabindex="-1"
        >
          <a tabindex="-1" class="tab-link">
            <nb-icon *ngIf="tab.icon" [config]="tab.icon"></nb-icon>
            <span *ngIf="tab.title" class="tab-text">{{ tab.title }}</span>
          </a>
        </li>

        <ng-template #enabled>
          <li
            routerLinkActive="active"
            [routerLinkActiveOptions]="activeLinkOptions | nbMergeConfigs: tab.activeLinkOptions"
            class="route-tab"
          >
            <a
              (click)="selectTab(tab)"
              [routerLink]="tab.route"
              [class.responsive]="tab.responsive"
              [queryParams]="tab.queryParams"
              [queryParamsHandling]="tab.queryParamsHandling"
              [fragment]="tab.fragment"
              [preserveFragment]="tab.preserveFragment"
              [skipLocationChange]="tab.skipLocationChange"
              [replaceUrl]="tab.replaceUrl"
              [state]="tab.state"
              class="tab-link"
            >
              <nb-icon *ngIf="tab.icon" [config]="tab.icon"></nb-icon>
              <span *ngIf="tab.title" class="tab-text">{{ tab.title }}</span>
            </a>
          </li>
        </ng-template>
      </ng-container>
    </ul>
    <router-outlet></router-outlet>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.route-tabset{display:flex;flex-direction:row;list-style-type:none;margin:0;padding:0}.route-tabset .route-tab{margin-bottom:-1px;text-align:center;padding:0}.route-tabset .route-tab.active a:before{display:block}.route-tabset .route-tab a{position:relative;text-decoration:none;display:inline-block}.route-tabset .route-tab a:before{position:absolute;content:\"\";width:100%;border-radius:3px;bottom:-2px;left:0}.route-tabset .route-tab a nb-icon{vertical-align:middle}[dir=ltr] :host .tab-link nb-icon+span{margin-left:.5rem}[dir=rtl] :host .tab-link nb-icon+span{margin-right:.5rem}:host(.full-width) .route-tabset{justify-content:space-around}\n"], components: [{ type: i1.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { type: i3.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i3.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }], pipes: { "nbMergeConfigs": i4.NbMergeConfigsPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRouteTabsetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-route-tabset', template: `
    <ul class="route-tabset">
      <ng-container *ngFor="let tab of tabs">
        <li
          *ngIf="tab.disabled; else enabled"
          [class.responsive]="tab.responsive"
          class="route-tab disabled"
          tabindex="-1"
        >
          <a tabindex="-1" class="tab-link">
            <nb-icon *ngIf="tab.icon" [config]="tab.icon"></nb-icon>
            <span *ngIf="tab.title" class="tab-text">{{ tab.title }}</span>
          </a>
        </li>

        <ng-template #enabled>
          <li
            routerLinkActive="active"
            [routerLinkActiveOptions]="activeLinkOptions | nbMergeConfigs: tab.activeLinkOptions"
            class="route-tab"
          >
            <a
              (click)="selectTab(tab)"
              [routerLink]="tab.route"
              [class.responsive]="tab.responsive"
              [queryParams]="tab.queryParams"
              [queryParamsHandling]="tab.queryParamsHandling"
              [fragment]="tab.fragment"
              [preserveFragment]="tab.preserveFragment"
              [skipLocationChange]="tab.skipLocationChange"
              [replaceUrl]="tab.replaceUrl"
              [state]="tab.state"
              class="tab-link"
            >
              <nb-icon *ngIf="tab.icon" [config]="tab.icon"></nb-icon>
              <span *ngIf="tab.title" class="tab-text">{{ tab.title }}</span>
            </a>
          </li>
        </ng-template>
      </ng-container>
    </ul>
    <router-outlet></router-outlet>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.route-tabset{display:flex;flex-direction:row;list-style-type:none;margin:0;padding:0}.route-tabset .route-tab{margin-bottom:-1px;text-align:center;padding:0}.route-tabset .route-tab.active a:before{display:block}.route-tabset .route-tab a{position:relative;text-decoration:none;display:inline-block}.route-tabset .route-tab a:before{position:absolute;content:\"\";width:100%;border-radius:3px;bottom:-2px;left:0}.route-tabset .route-tab a nb-icon{vertical-align:middle}[dir=ltr] :host .tab-link nb-icon+span{margin-left:.5rem}[dir=rtl] :host .tab-link nb-icon+span{margin-right:.5rem}:host(.full-width) .route-tabset{justify-content:space-around}\n"] }]
        }], propDecorators: { fullWidthValue: [{
                type: HostBinding,
                args: ['class.full-width']
            }], tabs: [{
                type: Input
            }], activeLinkOptions: [{
                type: Input
            }], fullWidth: [{
                type: Input
            }], changeTab: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtdGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9yb3V0ZS10YWJzZXQvcm91dGUtdGFic2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFrQixNQUFNLFlBQVksQ0FBQzs7Ozs7O0FBbUJuRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvRUc7QUFnREgsTUFBTSxPQUFPLHNCQUFzQjtJQS9DbkM7UUFnRG1DLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBT2pFOzs7V0FHRztRQUNNLHNCQUFpQixHQUFnRCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztRQVkxRjs7O1dBR0c7UUFDTyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztLQUt0RDtJQW5CQzs7O09BR0c7SUFDSCxJQUNJLFNBQVMsQ0FBQyxHQUFZO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQVNELFNBQVMsQ0FBQyxHQUFlO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7O21IQWhDVSxzQkFBc0I7dUdBQXRCLHNCQUFzQiwyUEE1Q3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQ1Q7MkZBRVUsc0JBQXNCO2tCQS9DbEMsU0FBUzsrQkFDRSxpQkFBaUIsWUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBDVDs4QkFHZ0MsY0FBYztzQkFBOUMsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBS3RCLElBQUk7c0JBQVosS0FBSztnQkFNRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBT0YsU0FBUztzQkFEWixLQUFLO2dCQVVJLFNBQVM7c0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTGluaywgUm91dGVyTGlua0FjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IE5iSWNvbkNvbmZpZyB9IGZyb20gJy4uL2ljb24vaWNvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5iUm91dGVUYWIge1xuICByb3V0ZT86IFJvdXRlckxpbmtbJ3JvdXRlckxpbmsnXSB8IHVuZGVmaW5lZDtcbiAgdGl0bGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGljb24/OiBzdHJpbmcgfCBOYkljb25Db25maWcgfCB1bmRlZmluZWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgcmVzcG9uc2l2ZT86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIHF1ZXJ5UGFyYW1zPzogUm91dGVyTGlua1sncXVlcnlQYXJhbXMnXSB8IHVuZGVmaW5lZDtcbiAgcXVlcnlQYXJhbXNIYW5kbGluZz86IFJvdXRlckxpbmtbJ3F1ZXJ5UGFyYW1zSGFuZGxpbmcnXSB8IHVuZGVmaW5lZDtcbiAgZnJhZ21lbnQ/OiBSb3V0ZXJMaW5rWydmcmFnbWVudCddIHwgdW5kZWZpbmVkO1xuICBwcmVzZXJ2ZUZyYWdtZW50PzogUm91dGVyTGlua1sncHJlc2VydmVGcmFnbWVudCddIHwgdW5kZWZpbmVkO1xuICBza2lwTG9jYXRpb25DaGFuZ2U/OiBSb3V0ZXJMaW5rWydza2lwTG9jYXRpb25DaGFuZ2UnXSB8IHVuZGVmaW5lZDtcbiAgcmVwbGFjZVVybD86IFJvdXRlckxpbmtbJ3JlcGxhY2VVcmwnXSB8IHVuZGVmaW5lZDtcbiAgc3RhdGU/OiBSb3V0ZXJMaW5rWydzdGF0ZSddIHwgdW5kZWZpbmVkO1xuICBhY3RpdmVMaW5rT3B0aW9ucz86IFJvdXRlckxpbmtBY3RpdmVbJ3JvdXRlckxpbmtBY3RpdmVPcHRpb25zJ10gfCB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogUm91dGUgdGFic2V0IGNvbXBvbmVudHMuXG4gKiBSZW5kZXJzIHRhYnMgaW5zaWRlIG9mIGEgcm91dGVyLW91dGxldC5cbiAqXG4gKiBgYGB0c1xuICogIHRhYnMgPSBbXG4gKiAge1xuICogICAgdGl0bGU6ICdSb3V0ZSB0YWIgIzEnLFxuICogICAgcm91dGU6ICcvcGFnZXMvZGVzY3JpcHRpb24nLFxuICogICAgaWNvbjogJ2hvbWUnLFxuICogICAgcmVzcG9uc2l2ZTogdHJ1ZSwgLy8gaGlkZSB0aXRsZSBiZWZvcmUgYCR0YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50YCB2YWx1ZVxuICogIH0sXG4gKiAge1xuICogICAgdGl0bGU6ICdSb3V0ZSB0YWIgIzInLFxuICogICAgcm91dGU6ICcvcGFnZXMvaW1hZ2VzJyxcbiAqICAgIH1cbiAqICBdO1xuICpcbiAqICA8bmItcm91dGUtdGFic2V0IFt0YWJzXT1cInRhYnNcIj48L25iLXJvdXRlLXRhYnNldD5cbiAqIGBgYFxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJSb3V0ZVRhYnNldE1vZHVsZWAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJSb3V0ZVRhYnNldE1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoUm91dGUgVGFic2V0LCB0YWJzZXQvcm91dGUtdGFic2V0LXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogcm91dGUtdGFic2V0LWJhY2tncm91bmQtY29sb3I6XG4gKiByb3V0ZS10YWJzZXQtYm9yZGVyLXJhZGl1czpcbiAqIHJvdXRlLXRhYnNldC1zaGFkb3c6XG4gKiByb3V0ZS10YWJzZXQtdGFiLWJhY2tncm91bmQtY29sb3I6XG4gKiByb3V0ZS10YWJzZXQtdGFiLXBhZGRpbmc6XG4gKiByb3V0ZS10YWJzZXQtdGFiLXRleHQtY29sb3I6XG4gKiByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC1mYW1pbHk6XG4gKiByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC1zaXplOlxuICogcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0OlxuICogcm91dGUtdGFic2V0LXRhYi10ZXh0LWxpbmUtaGVpZ2h0OlxuICogcm91dGUtdGFic2V0LXRhYi10ZXh0LXRyYW5zZm9ybTpcbiAqIHJvdXRlLXRhYnNldC10YWItdW5kZXJsaW5lLXdpZHRoOlxuICogcm91dGUtdGFic2V0LXRhYi11bmRlcmxpbmUtY29sb3I6XG4gKiByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcm91dGUtdGFic2V0LXRhYi1hY3RpdmUtdGV4dC1jb2xvcjpcbiAqIHJvdXRlLXRhYnNldC10YWItYWN0aXZlLXVuZGVybGluZS1jb2xvcjpcbiAqIHJvdXRlLXRhYnNldC10YWItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJvdXRlLXRhYnNldC10YWItZm9jdXMtdGV4dC1jb2xvcjpcbiAqIHJvdXRlLXRhYnNldC10YWItZm9jdXMtdW5kZXJsaW5lLWNvbG9yOlxuICogcm91dGUtdGFic2V0LXRhYi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcm91dGUtdGFic2V0LXRhYi1ob3Zlci10ZXh0LWNvbG9yOlxuICogcm91dGUtdGFic2V0LXRhYi1ob3Zlci11bmRlcmxpbmUtY29sb3I6XG4gKiByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLXRleHQtY29sb3I6XG4gKiByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLXVuZGVybGluZS1jb2xvcjpcbiAqIHJvdXRlLXRhYnNldC1kaXZpZGVyLWNvbG9yOlxuICogcm91dGUtdGFic2V0LWRpdmlkZXItc3R5bGU6XG4gKiByb3V0ZS10YWJzZXQtZGl2aWRlci13aWR0aDpcbiAqIHJvdXRlLXRhYnNldC1zY3JvbGxiYXItY29sb3I6XG4gKiByb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6XG4gKiByb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLXdpZHRoOlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1yb3V0ZS10YWJzZXQnLFxuICBzdHlsZVVybHM6IFsnLi9yb3V0ZS10YWJzZXQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dWwgY2xhc3M9XCJyb3V0ZS10YWJzZXRcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCI+XG4gICAgICAgIDxsaVxuICAgICAgICAgICpuZ0lmPVwidGFiLmRpc2FibGVkOyBlbHNlIGVuYWJsZWRcIlxuICAgICAgICAgIFtjbGFzcy5yZXNwb25zaXZlXT1cInRhYi5yZXNwb25zaXZlXCJcbiAgICAgICAgICBjbGFzcz1cInJvdXRlLXRhYiBkaXNhYmxlZFwiXG4gICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgID5cbiAgICAgICAgICA8YSB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJ0YWItbGlua1wiPlxuICAgICAgICAgICAgPG5iLWljb24gKm5nSWY9XCJ0YWIuaWNvblwiIFtjb25maWddPVwidGFiLmljb25cIj48L25iLWljb24+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRhYi50aXRsZVwiIGNsYXNzPVwidGFiLXRleHRcIj57eyB0YWIudGl0bGUgfX08L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZW5hYmxlZD5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIlxuICAgICAgICAgICAgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cImFjdGl2ZUxpbmtPcHRpb25zIHwgbmJNZXJnZUNvbmZpZ3M6IHRhYi5hY3RpdmVMaW5rT3B0aW9uc1wiXG4gICAgICAgICAgICBjbGFzcz1cInJvdXRlLXRhYlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdFRhYih0YWIpXCJcbiAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwidGFiLnJvdXRlXCJcbiAgICAgICAgICAgICAgW2NsYXNzLnJlc3BvbnNpdmVdPVwidGFiLnJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICBbcXVlcnlQYXJhbXNdPVwidGFiLnF1ZXJ5UGFyYW1zXCJcbiAgICAgICAgICAgICAgW3F1ZXJ5UGFyYW1zSGFuZGxpbmddPVwidGFiLnF1ZXJ5UGFyYW1zSGFuZGxpbmdcIlxuICAgICAgICAgICAgICBbZnJhZ21lbnRdPVwidGFiLmZyYWdtZW50XCJcbiAgICAgICAgICAgICAgW3ByZXNlcnZlRnJhZ21lbnRdPVwidGFiLnByZXNlcnZlRnJhZ21lbnRcIlxuICAgICAgICAgICAgICBbc2tpcExvY2F0aW9uQ2hhbmdlXT1cInRhYi5za2lwTG9jYXRpb25DaGFuZ2VcIlxuICAgICAgICAgICAgICBbcmVwbGFjZVVybF09XCJ0YWIucmVwbGFjZVVybFwiXG4gICAgICAgICAgICAgIFtzdGF0ZV09XCJ0YWIuc3RhdGVcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRhYi1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5iLWljb24gKm5nSWY9XCJ0YWIuaWNvblwiIFtjb25maWddPVwidGFiLmljb25cIj48L25iLWljb24+XG4gICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidGFiLnRpdGxlXCIgY2xhc3M9XCJ0YWItdGV4dFwiPnt7IHRhYi50aXRsZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC91bD5cbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5iUm91dGVUYWJzZXRDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZ1bGwtd2lkdGgnKSBmdWxsV2lkdGhWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUYWJzIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIEBJbnB1dCgpIHRhYnM6IE5iUm91dGVUYWJbXTtcblxuICAvKipcbiAgICogT3B0aW9ucyBwYXNzZWQgdG8gYHJvdXRlckxpbmtBY3RpdmVPcHRpb25zYCBkaXJlY3RpdmUgd2hpY2ggc2V0IG9uIHRhYiBsaW5rcy5cbiAgICogYHsgZXhhY3Q6IHRydWUgfWAgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpIGFjdGl2ZUxpbmtPcHRpb25zOiBSb3V0ZXJMaW5rQWN0aXZlWydyb3V0ZXJMaW5rQWN0aXZlT3B0aW9ucyddID0geyBleGFjdDogdHJ1ZSB9O1xuXG4gIC8qKlxuICAgKiBUYWtlIGZ1bGwgd2lkdGggb2YgYSBwYXJlbnRcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWxcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBmdWxsV2lkdGgodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5mdWxsV2lkdGhWYWx1ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWwpO1xuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9mdWxsV2lkdGg6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHRhYiBpcyBzZWxlY3RlZFxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPE5iUm91dGVUYWI+fVxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZVRhYiA9IG5ldyBFdmVudEVtaXR0ZXI8TmJSb3V0ZVRhYj4oKTtcblxuICBzZWxlY3RUYWIodGFiOiBOYlJvdXRlVGFiKSB7XG4gICAgdGhpcy5jaGFuZ2VUYWIuZW1pdCh0YWIpO1xuICB9XG59XG4iXX0=