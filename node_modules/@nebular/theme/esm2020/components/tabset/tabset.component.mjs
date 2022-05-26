/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { map, delay, filter, takeUntil } from 'rxjs/operators';
import { Component, Input, Output, EventEmitter, ContentChildren, HostBinding, ContentChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { convertToBoolProperty } from '../helpers';
import { NbTabContentDirective } from './tab-content.directive';
import { NbTabTitleDirective } from './tab-title.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "../icon/icon.component";
import * as i4 from "../badge/badge.component";
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
export class NbTabComponent {
    constructor() {
        this.activeValue = false;
        this.responsiveValue = false;
        this.disabledValue = false;
        /**
         * Badge status (adds specific styles):
         * 'primary', 'info', 'success', 'warning', 'danger'
         * @param {string} val
         */
        this.badgeStatus = 'basic';
        /**
         * @deprecated
         * @breaking-change Remove 10.0.0
         * @docs-private
         */
        this.init = false;
    }
    /**
     * Use badge dot mode
     * @type {boolean}
     */
    get badgeDot() {
        return this._badgeDot;
    }
    set badgeDot(val) {
        this._badgeDot = convertToBoolProperty(val);
    }
    /**
     * Item is disabled and cannot be opened.
     * @type {boolean}
     */
    get disabled() {
        return this.disabledValue;
    }
    set disabled(val) {
        this.disabledValue = convertToBoolProperty(val);
    }
    /**
     * Show only icons when width is smaller than `tabs-icon-only-max-width`
     * @type {boolean}
     */
    set responsive(val) {
        this.responsiveValue = convertToBoolProperty(val);
    }
    get responsive() {
        return this.responsiveValue;
    }
    /**
     * Specifies active tab
     * @returns {boolean}
     */
    get active() {
        return this.activeValue;
    }
    set active(val) {
        this.activeValue = convertToBoolProperty(val);
        if (this.activeValue) {
            this.init = true;
        }
    }
    /**
     * Lazy load content before tab selection
     * @docs-private
     * @deprecated This setting never worked. Wrap content into a `nbTabContent` to make it lazy.
     * @breaking-change Remove 10.0.0
     */
    set lazyLoad(val) {
        this.init = convertToBoolProperty(val);
    }
}
NbTabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbTabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbTabComponent, selector: "nb-tab", inputs: { tabTitle: "tabTitle", tabId: "tabId", badgeDot: "badgeDot", tabIcon: "tabIcon", disabled: "disabled", responsive: "responsive", route: "route", active: "active", lazyLoad: "lazyLoad", badgeText: "badgeText", badgeStatus: "badgeStatus", badgePosition: "badgePosition" }, host: { properties: { "class.disabled": "this.disabled", "class.content-active": "this.activeValue" } }, queries: [{ propertyName: "tabContentDirective", first: true, predicate: NbTabContentDirective, descendants: true }, { propertyName: "tabTitleDirective", first: true, predicate: NbTabTitleDirective, descendants: true }], ngImport: i0, template: `
    <ng-container
      *ngIf="tabContentDirective; else projectedContent"
      [ngTemplateOutlet]="tabContentDirective.templateRef"
    ></ng-container>

    <ng-template #projectedContent>
      <ng-content></ng-content>
    </ng-template>
  `, isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTabComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-tab',
                    template: `
    <ng-container
      *ngIf="tabContentDirective; else projectedContent"
      [ngTemplateOutlet]="tabContentDirective.templateRef"
    ></ng-container>

    <ng-template #projectedContent>
      <ng-content></ng-content>
    </ng-template>
  `,
                }]
        }], propDecorators: { tabContentDirective: [{
                type: ContentChild,
                args: [NbTabContentDirective]
            }], tabTitleDirective: [{
                type: ContentChild,
                args: [NbTabTitleDirective]
            }], tabTitle: [{
                type: Input
            }], tabId: [{
                type: Input
            }], badgeDot: [{
                type: Input
            }], tabIcon: [{
                type: Input
            }], disabled: [{
                type: Input,
                args: ['disabled']
            }, {
                type: HostBinding,
                args: ['class.disabled']
            }], responsive: [{
                type: Input
            }], route: [{
                type: Input
            }], activeValue: [{
                type: HostBinding,
                args: ['class.content-active']
            }], active: [{
                type: Input
            }], lazyLoad: [{
                type: Input
            }], badgeText: [{
                type: Input
            }], badgeStatus: [{
                type: Input
            }], badgePosition: [{
                type: Input
            }] } });
// TODO: Combine tabset with route-tabset, so that we can:
// - have similar interface
// - easy to migrate from one to another
// - can mix them both (route/content tab)
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
export class NbTabsetComponent {
    constructor(route, changeDetectorRef) {
        this.route = route;
        this.changeDetectorRef = changeDetectorRef;
        this.fullWidthValue = false;
        /**
         * Emits when tab is selected
         * @type EventEmitter<any>
         */
        this.changeTab = new EventEmitter();
        this.destroy$ = new Subject();
    }
    /**
     * Take full width of a parent
     * @param {boolean} val
     */
    set fullWidth(val) {
        this.fullWidthValue = convertToBoolProperty(val);
    }
    // TODO: refactoring this component, avoid change detection loop
    ngAfterContentInit() {
        this.route.params
            .pipe(map((params) => this.tabs.find((tab) => (this.routeParam ? tab.route === params[this.routeParam] : tab.active))), delay(0), map((tab) => tab || this.tabs.first), filter((tab) => !!tab), takeUntil(this.destroy$))
            .subscribe((tabToSelect) => {
            this.selectTab(tabToSelect);
            this.changeDetectorRef.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    // TODO: navigate to routeParam
    selectTab(selectedTab) {
        if (!selectedTab.disabled) {
            this.tabs.forEach((tab) => (tab.active = tab === selectedTab));
            this.changeTab.emit(selectedTab);
        }
    }
}
NbTabsetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTabsetComponent, deps: [{ token: i2.ActivatedRoute }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NbTabsetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbTabsetComponent, selector: "nb-tabset", inputs: { fullWidth: "fullWidth", routeParam: "routeParam" }, outputs: { changeTab: "changeTab" }, host: { properties: { "class.full-width": "this.fullWidthValue" } }, queries: [{ propertyName: "tabs", predicate: NbTabComponent }], ngImport: i0, template: `
    <ul class="tabset">
      <li
        *ngFor="let tab of tabs"
        (click)="selectTab(tab)"
        (keyup.space)="selectTab(tab)"
        (keyup.enter)="selectTab(tab)"
        [class.responsive]="tab.responsive"
        [class.active]="tab.active"
        [class.disabled]="tab.disabled"
        [attr.tabindex]="tab.disabled ? -1 : 0"
        [attr.data-tab-id]="tab.tabId"
        class="tab"
      >
        <a href (click)="$event.preventDefault()" tabindex="-1" class="tab-link">
          <nb-icon *ngIf="tab.tabIcon" [config]="tab.tabIcon"></nb-icon>
          <ng-container
            *ngIf="tab.tabTitleDirective; else textTitleTemplate"
            [ngTemplateOutlet]="tab.tabTitleDirective.templateRef"
          ></ng-container>
          <ng-template #textTitleTemplate>
            <span class="tab-text">{{ tab.tabTitle }}</span>
          </ng-template>
        </a>
        <nb-badge
          *ngIf="tab.badgeText || tab.badgeDot"
          [text]="tab.badgeText"
          [dotMode]="tab.badgeDot"
          [status]="tab.badgeStatus"
          [position]="tab.badgePosition"
        >
        </nb-badge>
      </li>
    </ul>
    <ng-content select="nb-tab"></ng-content>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:block}:host.full-width .tabset{justify-content:space-around}:host ::ng-deep nb-tab{flex:1;-ms-flex:1 1 auto;overflow:auto;display:none}:host ::ng-deep nb-tab.content-active{display:block}:host .tabset{display:flex;flex-direction:row;list-style-type:none;margin:0;padding:0}:host .tabset .tab{margin-bottom:-1px;text-align:center;position:relative}:host .tabset .tab.active a:before{display:block}:host .tabset .tab a{display:flex;position:relative;text-decoration:none}:host .tabset .tab a:before{position:absolute;content:\"\";width:100%;border-radius:3px;bottom:-2px;left:0}:host .tabset .tab a nb-icon{vertical-align:middle}[dir=ltr] :host .tabset .tab a nb-icon+span{margin-left:.5rem}[dir=rtl] :host .tabset .tab a nb-icon+span{margin-right:.5rem}\n"], components: [{ type: i3.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }, { type: i4.NbBadgeComponent, selector: "nb-badge", inputs: ["text", "position", "dotMode", "status"] }], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTabsetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-tabset', template: `
    <ul class="tabset">
      <li
        *ngFor="let tab of tabs"
        (click)="selectTab(tab)"
        (keyup.space)="selectTab(tab)"
        (keyup.enter)="selectTab(tab)"
        [class.responsive]="tab.responsive"
        [class.active]="tab.active"
        [class.disabled]="tab.disabled"
        [attr.tabindex]="tab.disabled ? -1 : 0"
        [attr.data-tab-id]="tab.tabId"
        class="tab"
      >
        <a href (click)="$event.preventDefault()" tabindex="-1" class="tab-link">
          <nb-icon *ngIf="tab.tabIcon" [config]="tab.tabIcon"></nb-icon>
          <ng-container
            *ngIf="tab.tabTitleDirective; else textTitleTemplate"
            [ngTemplateOutlet]="tab.tabTitleDirective.templateRef"
          ></ng-container>
          <ng-template #textTitleTemplate>
            <span class="tab-text">{{ tab.tabTitle }}</span>
          </ng-template>
        </a>
        <nb-badge
          *ngIf="tab.badgeText || tab.badgeDot"
          [text]="tab.badgeText"
          [dotMode]="tab.badgeDot"
          [status]="tab.badgeStatus"
          [position]="tab.badgePosition"
        >
        </nb-badge>
      </li>
    </ul>
    <ng-content select="nb-tab"></ng-content>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:block}:host.full-width .tabset{justify-content:space-around}:host ::ng-deep nb-tab{flex:1;-ms-flex:1 1 auto;overflow:auto;display:none}:host ::ng-deep nb-tab.content-active{display:block}:host .tabset{display:flex;flex-direction:row;list-style-type:none;margin:0;padding:0}:host .tabset .tab{margin-bottom:-1px;text-align:center;position:relative}:host .tabset .tab.active a:before{display:block}:host .tabset .tab a{display:flex;position:relative;text-decoration:none}:host .tabset .tab a:before{position:absolute;content:\"\";width:100%;border-radius:3px;bottom:-2px;left:0}:host .tabset .tab a nb-icon{vertical-align:middle}[dir=ltr] :host .tabset .tab a nb-icon+span{margin-left:.5rem}[dir=rtl] :host .tabset .tab a nb-icon+span{margin-right:.5rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i2.ActivatedRoute }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { tabs: [{
                type: ContentChildren,
                args: [NbTabComponent]
            }], fullWidthValue: [{
                type: HostBinding,
                args: ['class.full-width']
            }], fullWidth: [{
                type: Input
            }], routeParam: [{
                type: Input
            }], changeTab: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90YWJzZXQvdGFic2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osZUFBZSxFQUdmLFdBQVcsRUFFWCxZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDO0FBSW5FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFFNUQ7Ozs7Ozs7Ozs7R0FVRztBQWNILE1BQU0sT0FBTyxjQUFjO0lBYjNCO1FBbUZFLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBb0N0Qjs7OztXQUlHO1FBQ00sZ0JBQVcsR0FBOEIsT0FBTyxDQUFDO1FBVzFEOzs7O1dBSUc7UUFDSCxTQUFJLEdBQVksS0FBSyxDQUFDO0tBQ3ZCO0lBbkhDOzs7T0FHRztJQUNILElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsR0FBWTtRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlD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QVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs4R0E3RFUsaUJBQWlCO2tHQUFqQixpQkFBaUIsOE9BQ1gsY0FBYyw2QkF0Q3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1DVDsyRkFFVSxpQkFBaUI7a0JBeEM3QixTQUFTOytCQUNFLFdBQVcsWUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQ1Q7cUlBR2dDLElBQUk7c0JBQXBDLGVBQWU7dUJBQUMsY0FBYztnQkFHL0IsY0FBYztzQkFEYixXQUFXO3VCQUFDLGtCQUFrQjtnQkFRM0IsU0FBUztzQkFEWixLQUFLO2dCQVVHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBTUksU0FBUztzQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgbWFwLCBkZWxheSwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEhvc3RCaW5kaW5nLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29udGVudENoaWxkLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sUHJvcGVydHksIE5iQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzIH0gZnJvbSAnLi4vY29tcG9uZW50LXN0YXR1cyc7XG5pbXBvcnQgeyBOYkJhZGdlUG9zaXRpb24gfSBmcm9tICcuLi9iYWRnZS9iYWRnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJJY29uQ29uZmlnIH0gZnJvbSAnLi4vaWNvbi9pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYlRhYkNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOYlRhYlRpdGxlRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItdGl0bGUuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBTcGVjaWZpYyB0YWIgY29udGFpbmVyLlxuICpcbiAqIGBgYHRzXG4gKiA8bmItdGFiIHRhYlRpdGxlPVwiVXNlcnNcIlxuICogICBiYWRnZVRleHQ9XCI5OStcIlxuICogICBiYWRnZVN0YXR1cz1cImRhbmdlclwiPlxuICogICA8cD5MaXN0IG9mIDxzdHJvbmc+dXNlcnM8L3N0cm9uZz4uPC9wPlxuICogPC9uYi10YWI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItdGFiJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyXG4gICAgICAqbmdJZj1cInRhYkNvbnRlbnREaXJlY3RpdmU7IGVsc2UgcHJvamVjdGVkQ29udGVudFwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0YWJDb250ZW50RGlyZWN0aXZlLnRlbXBsYXRlUmVmXCJcbiAgICA+PC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctdGVtcGxhdGUgI3Byb2plY3RlZENvbnRlbnQ+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmJUYWJDb21wb25lbnQge1xuICBAQ29udGVudENoaWxkKE5iVGFiQ29udGVudERpcmVjdGl2ZSkgdGFiQ29udGVudERpcmVjdGl2ZTogTmJUYWJDb250ZW50RGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKE5iVGFiVGl0bGVEaXJlY3RpdmUpIHRhYlRpdGxlRGlyZWN0aXZlOiBOYlRhYlRpdGxlRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBUYWIgdGl0bGVcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIHRhYlRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRhYiBpZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgdGFiSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVXNlIGJhZGdlIGRvdCBtb2RlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGJhZGdlRG90KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9iYWRnZURvdDtcbiAgfVxuICBzZXQgYmFkZ2VEb3QodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYmFkZ2VEb3QgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsKTtcbiAgfVxuICBwcm90ZWN0ZWQgX2JhZGdlRG90OiBib29sZWFuO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYmFkZ2VEb3Q6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBUYWIgaWNvbiBuYW1lIG9yIGljb24gY29uZmlnIG9iamVjdFxuICAgKiBAdHlwZSB7c3RyaW5nIHwgTmJJY29uQ29uZmlnfVxuICAgKi9cbiAgQElucHV0KCkgdGFiSWNvbjogc3RyaW5nIHwgTmJJY29uQ29uZmlnO1xuXG4gIC8qKlxuICAgKiBJdGVtIGlzIGRpc2FibGVkIGFuZCBjYW5ub3QgYmUgb3BlbmVkLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBJbnB1dCgnZGlzYWJsZWQnKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVmFsdWU7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWRWYWx1ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWwpO1xuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFNob3cgb25seSBpY29ucyB3aGVuIHdpZHRoIGlzIHNtYWxsZXIgdGhhbiBgdGFicy1pY29uLW9ubHktbWF4LXdpZHRoYFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCByZXNwb25zaXZlKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMucmVzcG9uc2l2ZVZhbHVlID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbCk7XG4gIH1cbiAgZ2V0IHJlc3BvbnNpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzcG9uc2l2ZVZhbHVlO1xuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXNwb25zaXZlOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogTWFrZXMgdGhpcyB0YWIgYSBsaW5rIHRoYXQgaW5pdGlhdGVzIG5hdmlnYXRpb24gdG8gYSByb3V0ZVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgpIHJvdXRlOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb250ZW50LWFjdGl2ZScpXG4gIGFjdGl2ZVZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcmVzcG9uc2l2ZVZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gIGRpc2FibGVkVmFsdWUgPSBmYWxzZTtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIGFjdGl2ZSB0YWJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVZhbHVlO1xuICB9XG4gIHNldCBhY3RpdmUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5hY3RpdmVWYWx1ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWwpO1xuICAgIGlmICh0aGlzLmFjdGl2ZVZhbHVlKSB7XG4gICAgICB0aGlzLmluaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYWN0aXZlOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogTGF6eSBsb2FkIGNvbnRlbnQgYmVmb3JlIHRhYiBzZWxlY3Rpb25cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKiBAZGVwcmVjYXRlZCBUaGlzIHNldHRpbmcgbmV2ZXIgd29ya2VkLiBXcmFwIGNvbnRlbnQgaW50byBhIGBuYlRhYkNvbnRlbnRgIHRvIG1ha2UgaXQgbGF6eS5cbiAgICogQGJyZWFraW5nLWNoYW5nZSBSZW1vdmUgMTAuMC4wXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbGF6eUxvYWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5pbml0ID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbCk7XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xhenlMb2FkOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogQmFkZ2UgdGV4dCB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCkgYmFkZ2VUZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJhZGdlIHN0YXR1cyAoYWRkcyBzcGVjaWZpYyBzdHlsZXMpOlxuICAgKiAncHJpbWFyeScsICdpbmZvJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWxcbiAgICovXG4gIEBJbnB1dCgpIGJhZGdlU3RhdHVzOiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzID0gJ2Jhc2ljJztcblxuICAvKipcbiAgICogQmFkZ2UgcG9zaXRpb24uXG4gICAqIENhbiBiZSBzZXQgdG8gYW55IGNsYXNzIG9yIHRvIG9uZSBvZiBwcmVkZWZpbmVkIHBvc2l0aW9uczpcbiAgICogJ3RvcCBsZWZ0JywgJ3RvcCByaWdodCcsICdib3R0b20gbGVmdCcsICdib3R0b20gcmlnaHQnLFxuICAgKiAndG9wIHN0YXJ0JywgJ3RvcCBlbmQnLCAnYm90dG9tIHN0YXJ0JywgJ2JvdHRvbSBlbmQnXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCkgYmFkZ2VQb3NpdGlvbjogTmJCYWRnZVBvc2l0aW9uO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBAYnJlYWtpbmctY2hhbmdlIFJlbW92ZSAxMC4wLjBcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgaW5pdDogYm9vbGVhbiA9IGZhbHNlO1xufVxuXG4vLyBUT0RPOiBDb21iaW5lIHRhYnNldCB3aXRoIHJvdXRlLXRhYnNldCwgc28gdGhhdCB3ZSBjYW46XG4vLyAtIGhhdmUgc2ltaWxhciBpbnRlcmZhY2Vcbi8vIC0gZWFzeSB0byBtaWdyYXRlIGZyb20gb25lIHRvIGFub3RoZXJcbi8vIC0gY2FuIG1peCB0aGVtIGJvdGggKHJvdXRlL2NvbnRlbnQgdGFiKVxuLyoqXG4gKlxuICogRHluYW1pYyB0YWJzZXQgY29tcG9uZW50LlxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgdGFic2V0L3RhYnNldC1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogQmFzaWMgdGFic2V0IGV4YW1wbGVcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmItdGFic2V0PlxuICogIDxuYi10YWIgdGFiVGl0bGU9XCJTaW1wbGUgVGFiICMxXCI+XG4gKiAgICBUYWIgY29udGVudCAxXG4gKiAgPC9uYi10YWI+XG4gKiAgPG5iLXRhYiB0YWJUaXRsZT1cIlNpbXBsZSBUYWIgIzJcIj5cbiAqICAgIFRhYiBjb250ZW50IDJcbiAqICA8L25iLXRhYj5cbiAqIDwvbmItdGFic2V0PlxuICogYGBgXG4gKlxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJUYWJzZXRNb2R1bGVgIHRvIHlvdXIgZmVhdHVyZSBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iVGFic2V0TW9kdWxlLFxuICogICBdLFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBQYWdlTW9kdWxlIHsgfVxuICogYGBgXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIHNldCBhIGJhZGdlIHRvIGEgcGFydGljdWxhciB0YWI6XG4gKiBAc3RhY2tlZC1leGFtcGxlKFRhYiBXaXRoIEJhZGdlLCB0YWJzZXQvdGFic2V0LWJhZGdlLmNvbXBvbmVudClcbiAqXG4gKiBhbmQgd2UgY2FuIHNldCBpdCB0byBmdWxsIGEgd2lkdGggb2YgYSBwYXJlbnQgY29tcG9uZW50XG4gKiBAc3RhY2tlZC1leGFtcGxlKEZ1bGwgV2lkdGgsIHRhYnNldC90YWJzZXQtd2lkdGguY29tcG9uZW50KVxuICpcbiAqIGB0YWJJY29uYCBzaG91bGQgYmUgdXNlZCB0byBhZGQgYW4gaWNvbiB0byB0aGUgdGFiLiBJY29uIGNhbiBhbHNvIGJlIGNvbWJpbmVkIHdpdGggdGl0bGUuXG4gKiBgcmVzcG9uc2l2ZWAgdGFiIHByb3BlcnR5IGlmIHNldCBhbGxvd3MgeW91IHRvIGhpZGUgdGhlIHRpdGxlIG9uIHNtYWxsZXIgc2NyZWVuc1xuICogKGAkdGFic2V0LXRhYi10ZXh0LWhpZGUtYnJlYWtwb2ludGAgdmFyaWFibGUpIGZvciBiZXR0ZXIgcmVzcG9uc2l2ZSBiZWhhdmlvdXIuXG4gKiBZb3UgY2FuIG9wZW4gdGhlIGZvbGxvd2luZyBleGFtcGxlIGFuZCBtYWtlXG4gKiB5b3VyIHNjcmVlbiBzbWFsbGVyIC0gdGl0bGVzIHdpbGwgYmUgaGlkZGVuIGluIHRoZSBsYXN0IHRhYnNldCBpbiB0aGUgbGlzdDpcbiAqIEBzdGFja2VkLWV4YW1wbGUoSWNvbiwgdGFic2V0L3RhYnNldC1pY29uLmNvbXBvbmVudClcbiAqXG4gKiBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIGRpc2FibGUgYSB0YWIgdXNpbmcgYGRpc2FibGVkYCBwcm9wZXJ0eTpcbiAqIEBzdGFja2VkLWV4YW1wbGUoRGlzYWJsZWQgVGFiLCB0YWJzZXQvdGFic2V0LWRpc2FibGVkLmNvbXBvbmVudClcbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGUgdGFiIGNvbnRlbnRzIGluc3RhbnRpYXRlZCBzdHJhaWdodGF3YXkuIFRvIG1ha2UgdGFiIGNvbnRlbnRzIGxvYWQgbGF6eSxcbiAqIGRlY2xhcmUgdGhlIGJvZHkgb2YgYSB0YWIgaW4gYSB0ZW1wbGF0ZSB3aXRoIGBuYlRhYkNvbnRlbnRgIGRpcmVjdGl2ZS5cbiAqIGBgYGh0bWxcbiAqIDxuYi10YWJzZXQ+XG4gKiAgIDxuYi10YWI+XG4gKiAgICAgPHNvbWUtY29tcG9uZW50ICpuYlRhYkNvbnRlbnQ+TGF6eSBjb250ZW50PC9zb21lLWNvbXBvbmVudD5cbiAqICAgPC9uYi10YWI+XG4gKiAgIDxuYi10YWI+XG4gKiAgICAgPG5nLXRlbXBsYXRlIG5iVGFiQ29udGVudD5cbiAqICAgICAgIExhenkgY29udGVudCB3aXRoIHRlbXBsYXRlIHN5bnRheFxuICogICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgIDwvbmItdGFiPlxuICogPC9uYi10YWJzZXQ+XG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIHByb3ZpZGUgYSB0ZW1wbGF0ZSBhcyBhIHRhYiB0aXRsZSB2aWEgYDxuZy10ZW1wbGF0ZSBuYlRhYlRpdGxlPmA6XG4gKiBAc3RhY2tlZC1leGFtcGxlKFRhYiB0aXRsZSB0ZW1wbGF0ZSwgdGFic2V0L3RhYnNldC10ZW1wbGF0ZS10aXRsZS5jb21wb25lbnQpXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIHRhYnNldC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFic2V0LWJvcmRlci1yYWRpdXM6XG4gKiB0YWJzZXQtc2hhZG93OlxuICogdGFic2V0LXRhYi1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFic2V0LXRhYi1wYWRkaW5nOlxuICogdGFic2V0LXRhYi10ZXh0LWNvbG9yOlxuICogdGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5OlxuICogdGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZTpcbiAqIHRhYnNldC10YWItdGV4dC1mb250LXdlaWdodDpcbiAqIHRhYnNldC10YWItdGV4dC1saW5lLWhlaWdodDpcbiAqIHRhYnNldC10YWItdGV4dC10cmFuc2Zvcm06XG4gKiB0YWJzZXQtdGFiLXVuZGVybGluZS13aWR0aDpcbiAqIHRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yOlxuICogdGFic2V0LXRhYi1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhYnNldC10YWItYWN0aXZlLXRleHQtY29sb3I6XG4gKiB0YWJzZXQtdGFiLWFjdGl2ZS11bmRlcmxpbmUtY29sb3I6XG4gKiB0YWJzZXQtdGFiLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWJzZXQtdGFiLWZvY3VzLXRleHQtY29sb3I6XG4gKiB0YWJzZXQtdGFiLWZvY3VzLXVuZGVybGluZS1jb2xvcjpcbiAqIHRhYnNldC10YWItaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhYnNldC10YWItaG92ZXItdGV4dC1jb2xvcjpcbiAqIHRhYnNldC10YWItaG92ZXItdW5kZXJsaW5lLWNvbG9yOlxuICogdGFic2V0LXRhYi1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFic2V0LXRhYi1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogdGFic2V0LXRhYi1kaXNhYmxlZC11bmRlcmxpbmUtY29sb3I6XG4gKiB0YWJzZXQtZGl2aWRlci1jb2xvcjpcbiAqIHRhYnNldC1kaXZpZGVyLXN0eWxlOlxuICogdGFic2V0LWRpdmlkZXItd2lkdGg6XG4gKiB0YWJzZXQtY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFic2V0LWNvbnRlbnQtcGFkZGluZzpcbiAqIHRhYnNldC1jb250ZW50LXRleHQtY29sb3I6XG4gKiB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtZmFtaWx5OlxuICogdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXNpemU6XG4gKiB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtd2VpZ2h0OlxuICogdGFic2V0LWNvbnRlbnQtdGV4dC1saW5lLWhlaWdodDpcbiAqIHRhYnNldC1zY3JvbGxiYXItY29sb3I6XG4gKiB0YWJzZXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWJzZXQtc2Nyb2xsYmFyLXdpZHRoOlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi10YWJzZXQnLFxuICBzdHlsZVVybHM6IFsnLi90YWJzZXQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dWwgY2xhc3M9XCJ0YWJzZXRcIj5cbiAgICAgIDxsaVxuICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxuICAgICAgICAoY2xpY2spPVwic2VsZWN0VGFiKHRhYilcIlxuICAgICAgICAoa2V5dXAuc3BhY2UpPVwic2VsZWN0VGFiKHRhYilcIlxuICAgICAgICAoa2V5dXAuZW50ZXIpPVwic2VsZWN0VGFiKHRhYilcIlxuICAgICAgICBbY2xhc3MucmVzcG9uc2l2ZV09XCJ0YWIucmVzcG9uc2l2ZVwiXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwidGFiLmFjdGl2ZVwiXG4gICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxuICAgICAgICBbYXR0ci50YWJpbmRleF09XCJ0YWIuZGlzYWJsZWQgPyAtMSA6IDBcIlxuICAgICAgICBbYXR0ci5kYXRhLXRhYi1pZF09XCJ0YWIudGFiSWRcIlxuICAgICAgICBjbGFzcz1cInRhYlwiXG4gICAgICA+XG4gICAgICAgIDxhIGhyZWYgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCIgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwidGFiLWxpbmtcIj5cbiAgICAgICAgICA8bmItaWNvbiAqbmdJZj1cInRhYi50YWJJY29uXCIgW2NvbmZpZ109XCJ0YWIudGFiSWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAqbmdJZj1cInRhYi50YWJUaXRsZURpcmVjdGl2ZTsgZWxzZSB0ZXh0VGl0bGVUZW1wbGF0ZVwiXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0YWIudGFiVGl0bGVEaXJlY3RpdmUudGVtcGxhdGVSZWZcIlxuICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI3RleHRUaXRsZVRlbXBsYXRlPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWItdGV4dFwiPnt7IHRhYi50YWJUaXRsZSB9fTwvc3Bhbj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxuYi1iYWRnZVxuICAgICAgICAgICpuZ0lmPVwidGFiLmJhZGdlVGV4dCB8fCB0YWIuYmFkZ2VEb3RcIlxuICAgICAgICAgIFt0ZXh0XT1cInRhYi5iYWRnZVRleHRcIlxuICAgICAgICAgIFtkb3RNb2RlXT1cInRhYi5iYWRnZURvdFwiXG4gICAgICAgICAgW3N0YXR1c109XCJ0YWIuYmFkZ2VTdGF0dXNcIlxuICAgICAgICAgIFtwb3NpdGlvbl09XCJ0YWIuYmFkZ2VQb3NpdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgPC9uYi1iYWRnZT5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi10YWJcIj48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5iVGFic2V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZHJlbihOYlRhYkNvbXBvbmVudCkgdGFiczogUXVlcnlMaXN0PE5iVGFiQ29tcG9uZW50PjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZ1bGwtd2lkdGgnKVxuICBmdWxsV2lkdGhWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUYWtlIGZ1bGwgd2lkdGggb2YgYSBwYXJlbnRcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWxcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBmdWxsV2lkdGgodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5mdWxsV2lkdGhWYWx1ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWwpO1xuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9mdWxsV2lkdGg6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBJZiBzcGVjaWZpZWQgLSB0YWJzZXQgbGlzdGVucyB0byB0aGlzIHBhcmFtZXRlciBhbmQgc2VsZWN0cyBjb3JyZXNwb25kaW5nIHRhYi5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIHJvdXRlUGFyYW06IHN0cmluZztcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiB0YWIgaXMgc2VsZWN0ZWRcbiAgICogQHR5cGUgRXZlbnRFbWl0dGVyPGFueT5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2VUYWIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgLy8gVE9ETzogcmVmYWN0b3JpbmcgdGhpcyBjb21wb25lbnQsIGF2b2lkIGNoYW5nZSBkZXRlY3Rpb24gbG9vcFxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHBhcmFtczogYW55KSA9PlxuICAgICAgICAgIHRoaXMudGFicy5maW5kKCh0YWIpID0+ICh0aGlzLnJvdXRlUGFyYW0gPyB0YWIucm91dGUgPT09IHBhcmFtc1t0aGlzLnJvdXRlUGFyYW1dIDogdGFiLmFjdGl2ZSkpLFxuICAgICAgICApLFxuICAgICAgICBkZWxheSgwKSxcbiAgICAgICAgbWFwKCh0YWI6IE5iVGFiQ29tcG9uZW50KSA9PiB0YWIgfHwgdGhpcy50YWJzLmZpcnN0KSxcbiAgICAgICAgZmlsdGVyKCh0YWI6IE5iVGFiQ29tcG9uZW50KSA9PiAhIXRhYiksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHRhYlRvU2VsZWN0OiBOYlRhYkNvbXBvbmVudCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdFRhYih0YWJUb1NlbGVjdCk7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8vIFRPRE86IG5hdmlnYXRlIHRvIHJvdXRlUGFyYW1cbiAgc2VsZWN0VGFiKHNlbGVjdGVkVGFiOiBOYlRhYkNvbXBvbmVudCkge1xuICAgIGlmICghc2VsZWN0ZWRUYWIuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+ICh0YWIuYWN0aXZlID0gdGFiID09PSBzZWxlY3RlZFRhYikpO1xuICAgICAgdGhpcy5jaGFuZ2VUYWIuZW1pdChzZWxlY3RlZFRhYik7XG4gICAgfVxuICB9XG59XG4iXX0=