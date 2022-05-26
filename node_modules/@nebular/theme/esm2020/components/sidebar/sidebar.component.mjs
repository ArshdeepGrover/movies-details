/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil, filter, map, startWith } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { getSidebarState$, getSidebarResponsiveState$ } from './sidebar.service';
import * as i0 from "@angular/core";
import * as i1 from "./sidebar.service";
import * as i2 from "../../services/theme.service";
/**
 * Sidebar header container.
 *
 * Placeholder which contains a sidebar header content,
 * placed at the very top of the sidebar outside of the scroll area.
 */
export class NbSidebarHeaderComponent {
}
NbSidebarHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSidebarHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbSidebarHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbSidebarHeaderComponent, selector: "nb-sidebar-header", ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSidebarHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-sidebar-header',
                    template: ` <ng-content></ng-content> `,
                }]
        }] });
/**
 * Sidebar footer container.
 *
 * Placeholder which contains a sidebar footer content,
 * placed at the very bottom of the sidebar outside of the scroll area.
 */
export class NbSidebarFooterComponent {
}
NbSidebarFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSidebarFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbSidebarFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbSidebarFooterComponent, selector: "nb-sidebar-footer", ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSidebarFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-sidebar-footer',
                    template: ` <ng-content></ng-content> `,
                }]
        }] });
/**
 * Layout sidebar component.
 *
 * @stacked-example(Showcase, sidebar/sidebar-showcase.component)
 *
 * ### Installation
 *
 * Import `NbSidebarModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSidebarModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * and `NbSidebarModule` to your feature module where the component should be shown:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSidebarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Sidebar can be placed on the left or the right side of the layout,
 * or on start/end position of layout (depends on document direction, left to right or right to left)
 * It can be fixed (shown above the content) or can push the layout when opened.
 *
 * There are three states - `expanded`, `collapsed`, `compacted`.
 * By default sidebar content is fixed and saves its position while the page is being scrolled.
 *
 * Compacted sidebar example:
 * @stacked-example(Compacted Sidebar, sidebar/sidebar-compacted.component)
 *
 * Sidebar also supports a `responsive` behavior, listening to window size change and changing its size respectably.
 *
 * In a pair with header it is possible to setup a configuration when header is placed on a side of the sidebar
 * and not on top of it. To achieve this simply put a `subheader` property to the header like this:
 * ```html
 * <nb-layout-header subheader></nb-layout-header>
 * ```
 * @stacked-example(Subheader, layout/layout-sidebar-subheader.component)
 * Note that in such configuration sidebar shadow is removed and header cannot be make `fixed`.
 *
 * @additional-example(Right Sidebar, sidebar/sidebar-right.component)
 * @additional-example(Fixed Sidebar, sidebar/sidebar-fixed.component)
 *
 * @styles
 *
 * sidebar-background-color:
 * sidebar-text-color:
 * sidebar-text-font-family:
 * sidebar-text-font-size:
 * sidebar-text-font-weight:
 * sidebar-text-line-height:
 * sidebar-height:
 * sidebar-width:
 * sidebar-width-compact:
 * sidebar-padding:
 * sidebar-header-height:
 * sidebar-footer-height:
 * sidebar-shadow:
 * sidebar-menu-item-highlight-color:
 * sidebar-scrollbar-background-color:
 * sidebar-scrollbar-color:
 * sidebar-scrollbar-width:
 */
export class NbSidebarComponent {
    constructor(sidebarService, themeService, element, cd) {
        this.sidebarService = sidebarService;
        this.themeService = themeService;
        this.element = element;
        this.cd = cd;
        this.responsiveValueChange$ = new Subject();
        this.responsiveState = 'pc';
        this.destroy$ = new Subject();
        this.containerFixedValue = true;
        this.fixedValue = false;
        this.rightValue = false;
        this.leftValue = true;
        this.startValue = false;
        this.endValue = false;
        this._state = 'expanded';
        this._responsive = false;
        // TODO: get width by the key and define only max width for the tablets and mobiles
        /**
         * Controls on which screen sizes sidebar should be switched to compacted state.
         * Works only when responsive mode is on.
         * Default values are `['xs', 'is', 'sm', 'md', 'lg']`.
         *
         * @type string[]
         */
        this.compactedBreakpoints = ['xs', 'is', 'sm', 'md', 'lg'];
        /**
         * Controls on which screen sizes sidebar should be switched to collapsed state.
         * Works only when responsive mode is on.
         * Default values are `['xs', 'is']`.
         *
         * @type string[]
         */
        this.collapsedBreakpoints = ['xs', 'is'];
        /**
         * Emits whenever sidebar state change.
         */
        this.stateChange = new EventEmitter();
        /**
         * Emits whenever sidebar responsive state change.
         */
        this.responsiveStateChange = new EventEmitter();
    }
    get expanded() {
        return this.state === 'expanded';
    }
    get collapsed() {
        return this.state === 'collapsed';
    }
    get compacted() {
        return this.state === 'compacted';
    }
    /**
     * Places sidebar on the right side
     * @type {boolean}
     */
    set right(val) {
        this.rightValue = convertToBoolProperty(val);
        this.leftValue = !this.rightValue;
        this.startValue = false;
        this.endValue = false;
    }
    /**
     * Places sidebar on the left side
     * @type {boolean}
     */
    set left(val) {
        this.leftValue = convertToBoolProperty(val);
        this.rightValue = !this.leftValue;
        this.startValue = false;
        this.endValue = false;
    }
    /**
     * Places sidebar on the start edge of layout
     * @type {boolean}
     */
    set start(val) {
        this.startValue = convertToBoolProperty(val);
        this.endValue = !this.startValue;
        this.leftValue = false;
        this.rightValue = false;
    }
    /**
     * Places sidebar on the end edge of layout
     * @type {boolean}
     */
    set end(val) {
        this.endValue = convertToBoolProperty(val);
        this.startValue = !this.endValue;
        this.leftValue = false;
        this.rightValue = false;
    }
    /**
     * Makes sidebar fixed (shown above the layout content)
     * @type {boolean}
     */
    set fixed(val) {
        this.fixedValue = convertToBoolProperty(val);
    }
    /**
     * Makes sidebar container fixed
     * @type {boolean}
     */
    set containerFixed(val) {
        this.containerFixedValue = convertToBoolProperty(val);
    }
    /**
     * Initial sidebar state, `expanded`|`collapsed`|`compacted`
     * @type {string}
     */
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    /**
     * Makes sidebar listen to media query events and change its behaviour
     * @type {boolean}
     */
    get responsive() {
        return this._responsive;
    }
    set responsive(value) {
        if (this.responsive !== convertToBoolProperty(value)) {
            this._responsive = !this.responsive;
            this.responsiveValueChange$.next(this.responsive);
        }
    }
    ngOnInit() {
        this.sidebarService
            .onToggle()
            .pipe(filter(({ tag }) => !this.tag || this.tag === tag), takeUntil(this.destroy$))
            .subscribe(({ compact }) => this.toggle(compact));
        this.sidebarService
            .onExpand()
            .pipe(filter(({ tag }) => !this.tag || this.tag === tag), takeUntil(this.destroy$))
            .subscribe(() => this.expand());
        this.sidebarService
            .onCollapse()
            .pipe(filter(({ tag }) => !this.tag || this.tag === tag), takeUntil(this.destroy$))
            .subscribe(() => this.collapse());
        this.sidebarService
            .onCompact()
            .pipe(filter(({ tag }) => !this.tag || this.tag === tag), takeUntil(this.destroy$))
            .subscribe(() => this.compact());
        getSidebarState$
            .pipe(filter(({ tag }) => !this.tag || this.tag === tag), takeUntil(this.destroy$))
            .subscribe(({ observer }) => observer.next(this.state));
        getSidebarResponsiveState$
            .pipe(filter(({ tag }) => !this.tag || this.tag === tag), takeUntil(this.destroy$))
            .subscribe(({ observer }) => observer.next(this.responsiveState));
        this.responsiveValueChange$
            .pipe(filter((responsive) => !responsive), takeUntil(this.destroy$))
            .subscribe(() => this.expand());
        this.subscribeToMediaQueryChange();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    // TODO: this is more of a workaround, should be a better way to make components communicate to each other
    onClick(event) {
        const menu = this.element.nativeElement.querySelector('nb-menu');
        if (menu && menu.contains(event.target)) {
            const link = this.getMenuLink(event.target);
            if (link && link.nextElementSibling && link.nextElementSibling.classList.contains('menu-items')) {
                this.sidebarService.expand(this.tag);
            }
        }
    }
    /**
     * Collapses the sidebar
     */
    collapse() {
        this.updateState('collapsed');
    }
    /**
     * Expands the sidebar
     */
    expand() {
        this.updateState('expanded');
    }
    /**
     * Compacts the sidebar (minimizes)
     */
    compact() {
        this.updateState('compacted');
    }
    /**
     * Toggles sidebar state (expanded|collapsed|compacted)
     * @param {boolean} compact If true, then sidebar state will be changed between expanded & compacted,
     * otherwise - between expanded & collapsed. False by default.
     *
     * Toggle sidebar state
     *
     * ```ts
     * this.sidebar.toggle(true);
     * ```
     */
    toggle(compact = false) {
        if (this.responsive) {
            if (this.responsiveState === 'mobile') {
                compact = false;
            }
        }
        if (this.state === 'compacted' || this.state === 'collapsed') {
            this.updateState('expanded');
        }
        else {
            this.updateState(compact ? 'compacted' : 'collapsed');
        }
    }
    subscribeToMediaQueryChange() {
        combineLatest([
            this.responsiveValueChange$.pipe(startWith(this.responsive)),
            this.themeService.onMediaQueryChange(),
        ])
            .pipe(filter(([responsive]) => responsive), map(([, breakpoints]) => breakpoints), takeUntil(this.destroy$))
            .subscribe(([prev, current]) => {
            const isCollapsed = this.collapsedBreakpoints.includes(current.name);
            const isCompacted = this.compactedBreakpoints.includes(current.name);
            let newResponsiveState;
            if (isCompacted) {
                this.fixed = this.containerFixedValue;
                this.compact();
                newResponsiveState = 'tablet';
            }
            if (isCollapsed) {
                this.fixed = true;
                this.collapse();
                newResponsiveState = 'mobile';
            }
            if (!isCollapsed && !isCompacted && (!prev.width || prev.width < current.width)) {
                this.expand();
                this.fixed = false;
                newResponsiveState = 'pc';
            }
            if (newResponsiveState && newResponsiveState !== this.responsiveState) {
                this.responsiveState = newResponsiveState;
                this.responsiveStateChange.emit(this.responsiveState);
                this.cd.markForCheck();
            }
        });
    }
    getMenuLink(element) {
        if (!element || element.tagName.toLowerCase() === 'nb-menu') {
            return undefined;
        }
        if (element.tagName.toLowerCase() === 'a') {
            return element;
        }
        return this.getMenuLink(element.parentElement);
    }
    updateState(state) {
        if (this.state !== state) {
            this.state = state;
            this.stateChange.emit(this.state);
            this.cd.markForCheck();
        }
    }
}
NbSidebarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSidebarComponent, deps: [{ token: i1.NbSidebarService }, { token: i2.NbThemeService }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NbSidebarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbSidebarComponent, selector: "nb-sidebar", inputs: { right: "right", left: "left", start: "start", end: "end", fixed: "fixed", containerFixed: "containerFixed", state: "state", responsive: "responsive", tag: "tag", compactedBreakpoints: "compactedBreakpoints", collapsedBreakpoints: "collapsedBreakpoints" }, outputs: { stateChange: "stateChange", responsiveStateChange: "responsiveStateChange" }, host: { properties: { "class.fixed": "this.fixedValue", "class.right": "this.rightValue", "class.left": "this.leftValue", "class.start": "this.startValue", "class.end": "this.endValue", "class.expanded": "this.expanded", "class.collapsed": "this.collapsed", "class.compacted": "this.compacted" } }, ngImport: i0, template: `
    <div class="main-container" [class.main-container-fixed]="containerFixedValue">
      <ng-content select="nb-sidebar-header"></ng-content>
      <div class="scrollable" (click)="onClick($event)">
        <ng-content></ng-content>
      </div>
      <ng-content select="nb-sidebar-footer"></ng-content>
    </div>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;flex-direction:column;overflow:hidden;z-index:auto;order:0}:host .scrollable{overflow-y:auto;overflow-x:hidden;flex:1}:host .main-container{transform:translate(0);display:flex;flex-direction:column}:host .main-container-fixed{position:fixed}:host.right{margin-right:0;margin-left:auto}[dir=ltr] :host.right{order:4}[dir=rtl] :host.right{order:0}:host.end{order:4}[dir=ltr] :host.end{margin-right:0;margin-left:auto}[dir=rtl] :host.end{margin-left:0;margin-right:auto}:host.fixed{position:fixed;height:100%;z-index:999;top:0;bottom:0;left:0}:host.fixed.right{right:0}[dir=ltr] :host.fixed.start{left:0}[dir=rtl] :host.fixed.start,[dir=ltr] :host.fixed.end{right:0}[dir=rtl] :host.fixed.end{left:0}:host ::ng-deep nb-sidebar-footer{margin-top:auto;display:block}:host ::ng-deep nb-sidebar-header{display:block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-sidebar', template: `
    <div class="main-container" [class.main-container-fixed]="containerFixedValue">
      <ng-content select="nb-sidebar-header"></ng-content>
      <div class="scrollable" (click)="onClick($event)">
        <ng-content></ng-content>
      </div>
      <ng-content select="nb-sidebar-footer"></ng-content>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;flex-direction:column;overflow:hidden;z-index:auto;order:0}:host .scrollable{overflow-y:auto;overflow-x:hidden;flex:1}:host .main-container{transform:translate(0);display:flex;flex-direction:column}:host .main-container-fixed{position:fixed}:host.right{margin-right:0;margin-left:auto}[dir=ltr] :host.right{order:4}[dir=rtl] :host.right{order:0}:host.end{order:4}[dir=ltr] :host.end{margin-right:0;margin-left:auto}[dir=rtl] :host.end{margin-left:0;margin-right:auto}:host.fixed{position:fixed;height:100%;z-index:999;top:0;bottom:0;left:0}:host.fixed.right{right:0}[dir=ltr] :host.fixed.start{left:0}[dir=rtl] :host.fixed.start,[dir=ltr] :host.fixed.end{right:0}[dir=rtl] :host.fixed.end{left:0}:host ::ng-deep nb-sidebar-footer{margin-top:auto;display:block}:host ::ng-deep nb-sidebar-header{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbSidebarService }, { type: i2.NbThemeService }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { fixedValue: [{
                type: HostBinding,
                args: ['class.fixed']
            }], rightValue: [{
                type: HostBinding,
                args: ['class.right']
            }], leftValue: [{
                type: HostBinding,
                args: ['class.left']
            }], startValue: [{
                type: HostBinding,
                args: ['class.start']
            }], endValue: [{
                type: HostBinding,
                args: ['class.end']
            }], expanded: [{
                type: HostBinding,
                args: ['class.expanded']
            }], collapsed: [{
                type: HostBinding,
                args: ['class.collapsed']
            }], compacted: [{
                type: HostBinding,
                args: ['class.compacted']
            }], right: [{
                type: Input
            }], left: [{
                type: Input
            }], start: [{
                type: Input
            }], end: [{
                type: Input
            }], fixed: [{
                type: Input
            }], containerFixed: [{
                type: Input
            }], state: [{
                type: Input
            }], responsive: [{
                type: Input
            }], tag: [{
                type: Input
            }], compactedBreakpoints: [{
                type: Input
            }], collapsedBreakpoints: [{
                type: Input
            }], stateChange: [{
                type: Output
            }], responsiveStateChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRSxPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDO0FBR25FLE9BQU8sRUFBb0IsZ0JBQWdCLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUtuRzs7Ozs7R0FLRztBQUtILE1BQU0sT0FBTyx3QkFBd0I7O3FIQUF4Qix3QkFBd0I7eUdBQXhCLHdCQUF3Qix5REFGekIsNkJBQTZCOzJGQUU1Qix3QkFBd0I7a0JBSnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLDZCQUE2QjtpQkFDeEM7O0FBR0Q7Ozs7O0dBS0c7QUFLSCxNQUFNLE9BQU8sd0JBQXdCOztxSEFBeEIsd0JBQXdCO3lHQUF4Qix3QkFBd0IseURBRnpCLDZCQUE2QjsyRkFFNUIsd0JBQXdCO2tCQUpwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSw2QkFBNkI7aUJBQ3hDOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7OytHQWhXVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixnc0JBWG5COzs7Ozs7OztHQVFUOzJGQUdVLGtCQUFrQjtrQkFkOUIsU0FBUzsrQkFDRSxZQUFZLFlBRVo7Ozs7Ozs7O0dBUVQsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU07NkxBVW5CLFVBQVU7c0JBQXJDLFdBQVc7dUJBQUMsYUFBYTtnQkFDRSxVQUFVO3NCQUFyQyxXQUFXO3VCQUFDLGFBQWE7Z0JBQ0MsU0FBUztzQkFBbkMsV0FBVzt1QkFBQyxZQUFZO2dCQUNHLFVBQVU7c0JBQXJDLFdBQVc7dUJBQUMsYUFBYTtnQkFDQSxRQUFRO3NCQUFqQyxXQUFXO3VCQUFDLFdBQVc7Z0JBR3BCLFFBQVE7c0JBRFgsV0FBVzt1QkFBQyxnQkFBZ0I7Z0JBS3pCLFNBQVM7c0JBRFosV0FBVzt1QkFBQyxpQkFBaUI7Z0JBSzFCLFNBQVM7c0JBRFosV0FBVzt1QkFBQyxpQkFBaUI7Z0JBVTFCLEtBQUs7c0JBRFIsS0FBSztnQkFjRixJQUFJO3NCQURQLEtBQUs7Z0JBY0YsS0FBSztzQkFEUixLQUFLO2dCQWNGLEdBQUc7c0JBRE4sS0FBSztnQkFjRixLQUFLO3NCQURSLEtBQUs7Z0JBV0YsY0FBYztzQkFEakIsS0FBSztnQkFXRixLQUFLO3NCQURSLEtBQUs7Z0JBY0YsVUFBVTtzQkFEYixLQUFLO2dCQW1CRyxHQUFHO3NCQUFYLEtBQUs7Z0JBVUcsb0JBQW9CO3NCQUE1QixLQUFLO2dCQVNHLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFLYSxXQUFXO3NCQUE3QixNQUFNO2dCQUtZLHFCQUFxQjtzQkFBdkMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5LCBOYkJvb2xlYW5JbnB1dCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTmJUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5iTWVkaWFCcmVha3BvaW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYnJlYWtwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBOYlNpZGViYXJTZXJ2aWNlLCBnZXRTaWRlYmFyU3RhdGUkLCBnZXRTaWRlYmFyUmVzcG9uc2l2ZVN0YXRlJCB9IGZyb20gJy4vc2lkZWJhci5zZXJ2aWNlJztcblxuZXhwb3J0IHR5cGUgTmJTaWRlYmFyU3RhdGUgPSAnZXhwYW5kZWQnIHwgJ2NvbGxhcHNlZCcgfCAnY29tcGFjdGVkJztcbmV4cG9ydCB0eXBlIE5iU2lkZWJhclJlc3BvbnNpdmVTdGF0ZSA9ICdtb2JpbGUnIHwgJ3RhYmxldCcgfCAncGMnO1xuXG4vKipcbiAqIFNpZGViYXIgaGVhZGVyIGNvbnRhaW5lci5cbiAqXG4gKiBQbGFjZWhvbGRlciB3aGljaCBjb250YWlucyBhIHNpZGViYXIgaGVhZGVyIGNvbnRlbnQsXG4gKiBwbGFjZWQgYXQgdGhlIHZlcnkgdG9wIG9mIHRoZSBzaWRlYmFyIG91dHNpZGUgb2YgdGhlIHNjcm9sbCBhcmVhLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1zaWRlYmFyLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTmJTaWRlYmFySGVhZGVyQ29tcG9uZW50IHt9XG5cbi8qKlxuICogU2lkZWJhciBmb290ZXIgY29udGFpbmVyLlxuICpcbiAqIFBsYWNlaG9sZGVyIHdoaWNoIGNvbnRhaW5zIGEgc2lkZWJhciBmb290ZXIgY29udGVudCxcbiAqIHBsYWNlZCBhdCB0aGUgdmVyeSBib3R0b20gb2YgdGhlIHNpZGViYXIgb3V0c2lkZSBvZiB0aGUgc2Nyb2xsIGFyZWEuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLXNpZGViYXItZm9vdGVyJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBOYlNpZGViYXJGb290ZXJDb21wb25lbnQge31cblxuLyoqXG4gKiBMYXlvdXQgc2lkZWJhciBjb21wb25lbnQuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgc2lkZWJhci9zaWRlYmFyLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiAjIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogSW1wb3J0IGBOYlNpZGViYXJNb2R1bGUuZm9yUm9vdCgpYCB0byB5b3VyIGFwcCBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iU2lkZWJhck1vZHVsZS5mb3JSb290KCksXG4gKiAgIF0sXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiAqIGBgYFxuICogYW5kIGBOYlNpZGViYXJNb2R1bGVgIHRvIHlvdXIgZmVhdHVyZSBtb2R1bGUgd2hlcmUgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgc2hvd246XG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iU2lkZWJhck1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKlxuICogU2lkZWJhciBjYW4gYmUgcGxhY2VkIG9uIHRoZSBsZWZ0IG9yIHRoZSByaWdodCBzaWRlIG9mIHRoZSBsYXlvdXQsXG4gKiBvciBvbiBzdGFydC9lbmQgcG9zaXRpb24gb2YgbGF5b3V0IChkZXBlbmRzIG9uIGRvY3VtZW50IGRpcmVjdGlvbiwgbGVmdCB0byByaWdodCBvciByaWdodCB0byBsZWZ0KVxuICogSXQgY2FuIGJlIGZpeGVkIChzaG93biBhYm92ZSB0aGUgY29udGVudCkgb3IgY2FuIHB1c2ggdGhlIGxheW91dCB3aGVuIG9wZW5lZC5cbiAqXG4gKiBUaGVyZSBhcmUgdGhyZWUgc3RhdGVzIC0gYGV4cGFuZGVkYCwgYGNvbGxhcHNlZGAsIGBjb21wYWN0ZWRgLlxuICogQnkgZGVmYXVsdCBzaWRlYmFyIGNvbnRlbnQgaXMgZml4ZWQgYW5kIHNhdmVzIGl0cyBwb3NpdGlvbiB3aGlsZSB0aGUgcGFnZSBpcyBiZWluZyBzY3JvbGxlZC5cbiAqXG4gKiBDb21wYWN0ZWQgc2lkZWJhciBleGFtcGxlOlxuICogQHN0YWNrZWQtZXhhbXBsZShDb21wYWN0ZWQgU2lkZWJhciwgc2lkZWJhci9zaWRlYmFyLWNvbXBhY3RlZC5jb21wb25lbnQpXG4gKlxuICogU2lkZWJhciBhbHNvIHN1cHBvcnRzIGEgYHJlc3BvbnNpdmVgIGJlaGF2aW9yLCBsaXN0ZW5pbmcgdG8gd2luZG93IHNpemUgY2hhbmdlIGFuZCBjaGFuZ2luZyBpdHMgc2l6ZSByZXNwZWN0YWJseS5cbiAqXG4gKiBJbiBhIHBhaXIgd2l0aCBoZWFkZXIgaXQgaXMgcG9zc2libGUgdG8gc2V0dXAgYSBjb25maWd1cmF0aW9uIHdoZW4gaGVhZGVyIGlzIHBsYWNlZCBvbiBhIHNpZGUgb2YgdGhlIHNpZGViYXJcbiAqIGFuZCBub3Qgb24gdG9wIG9mIGl0LiBUbyBhY2hpZXZlIHRoaXMgc2ltcGx5IHB1dCBhIGBzdWJoZWFkZXJgIHByb3BlcnR5IHRvIHRoZSBoZWFkZXIgbGlrZSB0aGlzOlxuICogYGBgaHRtbFxuICogPG5iLWxheW91dC1oZWFkZXIgc3ViaGVhZGVyPjwvbmItbGF5b3V0LWhlYWRlcj5cbiAqIGBgYFxuICogQHN0YWNrZWQtZXhhbXBsZShTdWJoZWFkZXIsIGxheW91dC9sYXlvdXQtc2lkZWJhci1zdWJoZWFkZXIuY29tcG9uZW50KVxuICogTm90ZSB0aGF0IGluIHN1Y2ggY29uZmlndXJhdGlvbiBzaWRlYmFyIHNoYWRvdyBpcyByZW1vdmVkIGFuZCBoZWFkZXIgY2Fubm90IGJlIG1ha2UgYGZpeGVkYC5cbiAqXG4gKiBAYWRkaXRpb25hbC1leGFtcGxlKFJpZ2h0IFNpZGViYXIsIHNpZGViYXIvc2lkZWJhci1yaWdodC5jb21wb25lbnQpXG4gKiBAYWRkaXRpb25hbC1leGFtcGxlKEZpeGVkIFNpZGViYXIsIHNpZGViYXIvc2lkZWJhci1maXhlZC5jb21wb25lbnQpXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIHNpZGViYXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHNpZGViYXItdGV4dC1jb2xvcjpcbiAqIHNpZGViYXItdGV4dC1mb250LWZhbWlseTpcbiAqIHNpZGViYXItdGV4dC1mb250LXNpemU6XG4gKiBzaWRlYmFyLXRleHQtZm9udC13ZWlnaHQ6XG4gKiBzaWRlYmFyLXRleHQtbGluZS1oZWlnaHQ6XG4gKiBzaWRlYmFyLWhlaWdodDpcbiAqIHNpZGViYXItd2lkdGg6XG4gKiBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6XG4gKiBzaWRlYmFyLXBhZGRpbmc6XG4gKiBzaWRlYmFyLWhlYWRlci1oZWlnaHQ6XG4gKiBzaWRlYmFyLWZvb3Rlci1oZWlnaHQ6XG4gKiBzaWRlYmFyLXNoYWRvdzpcbiAqIHNpZGViYXItbWVudS1pdGVtLWhpZ2hsaWdodC1jb2xvcjpcbiAqIHNpZGViYXItc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6XG4gKiBzaWRlYmFyLXNjcm9sbGJhci1jb2xvcjpcbiAqIHNpZGViYXItc2Nyb2xsYmFyLXdpZHRoOlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1zaWRlYmFyJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZWJhci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiIFtjbGFzcy5tYWluLWNvbnRhaW5lci1maXhlZF09XCJjb250YWluZXJGaXhlZFZhbHVlXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1zaWRlYmFyLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGxhYmxlXCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5iLXNpZGViYXItZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcmVzcG9uc2l2ZVZhbHVlQ2hhbmdlJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByb3RlY3RlZCByZXNwb25zaXZlU3RhdGU6IE5iU2lkZWJhclJlc3BvbnNpdmVTdGF0ZSA9ICdwYyc7XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb250YWluZXJGaXhlZFZhbHVlOiBib29sZWFuID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpeGVkJykgZml4ZWRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnJpZ2h0JykgcmlnaHRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxlZnQnKSBsZWZ0VmFsdWU6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXJ0Jykgc3RhcnRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmVuZCcpIGVuZFZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5leHBhbmRlZCcpXG4gIGdldCBleHBhbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gJ2V4cGFuZGVkJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbGxhcHNlZCcpXG4gIGdldCBjb2xsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09ICdjb2xsYXBzZWQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29tcGFjdGVkJylcbiAgZ2V0IGNvbXBhY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gJ2NvbXBhY3RlZCc7XG4gIH1cblxuICAvKipcbiAgICogUGxhY2VzIHNpZGViYXIgb24gdGhlIHJpZ2h0IHNpZGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgcmlnaHQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5yaWdodFZhbHVlID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbCk7XG4gICAgdGhpcy5sZWZ0VmFsdWUgPSAhdGhpcy5yaWdodFZhbHVlO1xuICAgIHRoaXMuc3RhcnRWYWx1ZSA9IGZhbHNlO1xuICAgIHRoaXMuZW5kVmFsdWUgPSBmYWxzZTtcbiAgfVxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmlnaHQ6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBQbGFjZXMgc2lkZWJhciBvbiB0aGUgbGVmdCBzaWRlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGxlZnQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5sZWZ0VmFsdWUgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsKTtcbiAgICB0aGlzLnJpZ2h0VmFsdWUgPSAhdGhpcy5sZWZ0VmFsdWU7XG4gICAgdGhpcy5zdGFydFZhbHVlID0gZmFsc2U7XG4gICAgdGhpcy5lbmRWYWx1ZSA9IGZhbHNlO1xuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sZWZ0OiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogUGxhY2VzIHNpZGViYXIgb24gdGhlIHN0YXJ0IGVkZ2Ugb2YgbGF5b3V0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHN0YXJ0KHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuc3RhcnRWYWx1ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWwpO1xuICAgIHRoaXMuZW5kVmFsdWUgPSAhdGhpcy5zdGFydFZhbHVlO1xuICAgIHRoaXMubGVmdFZhbHVlID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodFZhbHVlID0gZmFsc2U7XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0YXJ0OiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogUGxhY2VzIHNpZGViYXIgb24gdGhlIGVuZCBlZGdlIG9mIGxheW91dFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBlbmQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5lbmRWYWx1ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWwpO1xuICAgIHRoaXMuc3RhcnRWYWx1ZSA9ICF0aGlzLmVuZFZhbHVlO1xuICAgIHRoaXMubGVmdFZhbHVlID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodFZhbHVlID0gZmFsc2U7XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2VuZDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIE1ha2VzIHNpZGViYXIgZml4ZWQgKHNob3duIGFib3ZlIHRoZSBsYXlvdXQgY29udGVudClcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgZml4ZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5maXhlZFZhbHVlID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbCk7XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpeGVkOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogTWFrZXMgc2lkZWJhciBjb250YWluZXIgZml4ZWRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgY29udGFpbmVyRml4ZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb250YWluZXJGaXhlZFZhbHVlID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbCk7XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbnRhaW5lckZpeGVkOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogSW5pdGlhbCBzaWRlYmFyIHN0YXRlLCBgZXhwYW5kZWRgfGBjb2xsYXBzZWRgfGBjb21wYWN0ZWRgXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc3RhdGUoKTogTmJTaWRlYmFyU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuICBzZXQgc3RhdGUodmFsdWU6IE5iU2lkZWJhclN0YXRlKSB7XG4gICAgdGhpcy5fc3RhdGUgPSB2YWx1ZTtcbiAgfVxuICBwcm90ZWN0ZWQgX3N0YXRlOiBOYlNpZGViYXJTdGF0ZSA9ICdleHBhbmRlZCc7XG5cbiAgLyoqXG4gICAqIE1ha2VzIHNpZGViYXIgbGlzdGVuIHRvIG1lZGlhIHF1ZXJ5IGV2ZW50cyBhbmQgY2hhbmdlIGl0cyBiZWhhdmlvdXJcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVzcG9uc2l2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2l2ZTtcbiAgfVxuICBzZXQgcmVzcG9uc2l2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnJlc3BvbnNpdmUgIT09IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3Jlc3BvbnNpdmUgPSAhdGhpcy5yZXNwb25zaXZlO1xuICAgICAgdGhpcy5yZXNwb25zaXZlVmFsdWVDaGFuZ2UkLm5leHQodGhpcy5yZXNwb25zaXZlKTtcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIF9yZXNwb25zaXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXNwb25zaXZlOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogVGFncyBhIHNpZGViYXIgd2l0aCBzb21lIElELCBjYW4gYmUgbGF0ZXIgdXNlZCBpbiB0aGUgc2lkZWJhciBzZXJ2aWNlXG4gICAqIHRvIGRldGVybWluZSB3aGljaCBzaWRlYmFyIHRyaWdnZXJlZCB0aGUgYWN0aW9uLCBpZiBtdWx0aXBsZSBzaWRlYmFycyBleGlzdCBvbiB0aGUgcGFnZS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIHRhZzogc3RyaW5nO1xuXG4gIC8vIFRPRE86IGdldCB3aWR0aCBieSB0aGUga2V5IGFuZCBkZWZpbmUgb25seSBtYXggd2lkdGggZm9yIHRoZSB0YWJsZXRzIGFuZCBtb2JpbGVzXG4gIC8qKlxuICAgKiBDb250cm9scyBvbiB3aGljaCBzY3JlZW4gc2l6ZXMgc2lkZWJhciBzaG91bGQgYmUgc3dpdGNoZWQgdG8gY29tcGFjdGVkIHN0YXRlLlxuICAgKiBXb3JrcyBvbmx5IHdoZW4gcmVzcG9uc2l2ZSBtb2RlIGlzIG9uLlxuICAgKiBEZWZhdWx0IHZhbHVlcyBhcmUgYFsneHMnLCAnaXMnLCAnc20nLCAnbWQnLCAnbGcnXWAuXG4gICAqXG4gICAqIEB0eXBlIHN0cmluZ1tdXG4gICAqL1xuICBASW5wdXQoKSBjb21wYWN0ZWRCcmVha3BvaW50czogc3RyaW5nW10gPSBbJ3hzJywgJ2lzJywgJ3NtJywgJ21kJywgJ2xnJ107XG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIG9uIHdoaWNoIHNjcmVlbiBzaXplcyBzaWRlYmFyIHNob3VsZCBiZSBzd2l0Y2hlZCB0byBjb2xsYXBzZWQgc3RhdGUuXG4gICAqIFdvcmtzIG9ubHkgd2hlbiByZXNwb25zaXZlIG1vZGUgaXMgb24uXG4gICAqIERlZmF1bHQgdmFsdWVzIGFyZSBgWyd4cycsICdpcyddYC5cbiAgICpcbiAgICogQHR5cGUgc3RyaW5nW11cbiAgICovXG4gIEBJbnB1dCgpIGNvbGxhcHNlZEJyZWFrcG9pbnRzOiBzdHJpbmdbXSA9IFsneHMnLCAnaXMnXTtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbmV2ZXIgc2lkZWJhciBzdGF0ZSBjaGFuZ2UuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3RhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE5iU2lkZWJhclN0YXRlPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuZXZlciBzaWRlYmFyIHJlc3BvbnNpdmUgc3RhdGUgY2hhbmdlLlxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlc3BvbnNpdmVTdGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TmJTaWRlYmFyUmVzcG9uc2l2ZVN0YXRlPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IE5iU2lkZWJhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZVNlcnZpY2U6IE5iVGhlbWVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2VcbiAgICAgIC5vblRvZ2dsZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCh7IHRhZyB9KSA9PiAhdGhpcy50YWcgfHwgdGhpcy50YWcgPT09IHRhZyksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHsgY29tcGFjdCB9KSA9PiB0aGlzLnRvZ2dsZShjb21wYWN0KSk7XG5cbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlXG4gICAgICAub25FeHBhbmQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoeyB0YWcgfSkgPT4gIXRoaXMudGFnIHx8IHRoaXMudGFnID09PSB0YWcpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZXhwYW5kKCkpO1xuXG4gICAgdGhpcy5zaWRlYmFyU2VydmljZVxuICAgICAgLm9uQ29sbGFwc2UoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoeyB0YWcgfSkgPT4gIXRoaXMudGFnIHx8IHRoaXMudGFnID09PSB0YWcpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY29sbGFwc2UoKSk7XG5cbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlXG4gICAgICAub25Db21wYWN0KClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgdGFnIH0pID0+ICF0aGlzLnRhZyB8fCB0aGlzLnRhZyA9PT0gdGFnKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNvbXBhY3QoKSk7XG5cbiAgICBnZXRTaWRlYmFyU3RhdGUkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCh7IHRhZyB9KSA9PiAhdGhpcy50YWcgfHwgdGhpcy50YWcgPT09IHRhZyksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHsgb2JzZXJ2ZXIgfSkgPT4gb2JzZXJ2ZXIubmV4dCh0aGlzLnN0YXRlKSk7XG5cbiAgICBnZXRTaWRlYmFyUmVzcG9uc2l2ZVN0YXRlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoeyB0YWcgfSkgPT4gIXRoaXMudGFnIHx8IHRoaXMudGFnID09PSB0YWcpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh7IG9ic2VydmVyIH0pID0+IG9ic2VydmVyLm5leHQodGhpcy5yZXNwb25zaXZlU3RhdGUpKTtcblxuICAgIHRoaXMucmVzcG9uc2l2ZVZhbHVlQ2hhbmdlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigocmVzcG9uc2l2ZTogYm9vbGVhbikgPT4gIXJlc3BvbnNpdmUpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZXhwYW5kKCkpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVUb01lZGlhUXVlcnlDaGFuZ2UoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8vIFRPRE86IHRoaXMgaXMgbW9yZSBvZiBhIHdvcmthcm91bmQsIHNob3VsZCBiZSBhIGJldHRlciB3YXkgdG8gbWFrZSBjb21wb25lbnRzIGNvbW11bmljYXRlIHRvIGVhY2ggb3RoZXJcbiAgb25DbGljayhldmVudCk6IHZvaWQge1xuICAgIGNvbnN0IG1lbnUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCduYi1tZW51Jyk7XG5cbiAgICBpZiAobWVudSAmJiBtZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmdldE1lbnVMaW5rKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgIGlmIChsaW5rICYmIGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nICYmIGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pdGVtcycpKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuZXhwYW5kKHRoaXMudGFnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGFwc2VzIHRoZSBzaWRlYmFyXG4gICAqL1xuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCdjb2xsYXBzZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBhbmRzIHRoZSBzaWRlYmFyXG4gICAqL1xuICBleHBhbmQoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgnZXhwYW5kZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYWN0cyB0aGUgc2lkZWJhciAobWluaW1pemVzKVxuICAgKi9cbiAgY29tcGFjdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCdjb21wYWN0ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHNpZGViYXIgc3RhdGUgKGV4cGFuZGVkfGNvbGxhcHNlZHxjb21wYWN0ZWQpXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29tcGFjdCBJZiB0cnVlLCB0aGVuIHNpZGViYXIgc3RhdGUgd2lsbCBiZSBjaGFuZ2VkIGJldHdlZW4gZXhwYW5kZWQgJiBjb21wYWN0ZWQsXG4gICAqIG90aGVyd2lzZSAtIGJldHdlZW4gZXhwYW5kZWQgJiBjb2xsYXBzZWQuIEZhbHNlIGJ5IGRlZmF1bHQuXG4gICAqXG4gICAqIFRvZ2dsZSBzaWRlYmFyIHN0YXRlXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIHRoaXMuc2lkZWJhci50b2dnbGUodHJ1ZSk7XG4gICAqIGBgYFxuICAgKi9cbiAgdG9nZ2xlKGNvbXBhY3Q6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLnJlc3BvbnNpdmUpIHtcbiAgICAgIGlmICh0aGlzLnJlc3BvbnNpdmVTdGF0ZSA9PT0gJ21vYmlsZScpIHtcbiAgICAgICAgY29tcGFjdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlID09PSAnY29tcGFjdGVkJyB8fCB0aGlzLnN0YXRlID09PSAnY29sbGFwc2VkJykge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnZXhwYW5kZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZShjb21wYWN0ID8gJ2NvbXBhY3RlZCcgOiAnY29sbGFwc2VkJyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZVRvTWVkaWFRdWVyeUNoYW5nZSgpIHtcbiAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMucmVzcG9uc2l2ZVZhbHVlQ2hhbmdlJC5waXBlKHN0YXJ0V2l0aCh0aGlzLnJlc3BvbnNpdmUpKSxcbiAgICAgIHRoaXMudGhlbWVTZXJ2aWNlLm9uTWVkaWFRdWVyeUNoYW5nZSgpIGFzIE9ic2VydmFibGU8W05iTWVkaWFCcmVha3BvaW50LCBOYk1lZGlhQnJlYWtwb2ludF0+LFxuICAgIF0pXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChbcmVzcG9uc2l2ZV0pID0+IHJlc3BvbnNpdmUpLFxuICAgICAgICBtYXAoKFssIGJyZWFrcG9pbnRzXSkgPT4gYnJlYWtwb2ludHMpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChbcHJldiwgY3VycmVudF06IFtOYk1lZGlhQnJlYWtwb2ludCwgTmJNZWRpYUJyZWFrcG9pbnRdKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ29sbGFwc2VkID0gdGhpcy5jb2xsYXBzZWRCcmVha3BvaW50cy5pbmNsdWRlcyhjdXJyZW50Lm5hbWUpO1xuICAgICAgICBjb25zdCBpc0NvbXBhY3RlZCA9IHRoaXMuY29tcGFjdGVkQnJlYWtwb2ludHMuaW5jbHVkZXMoY3VycmVudC5uYW1lKTtcblxuICAgICAgICBsZXQgbmV3UmVzcG9uc2l2ZVN0YXRlO1xuXG4gICAgICAgIGlmIChpc0NvbXBhY3RlZCkge1xuICAgICAgICAgIHRoaXMuZml4ZWQgPSB0aGlzLmNvbnRhaW5lckZpeGVkVmFsdWU7XG4gICAgICAgICAgdGhpcy5jb21wYWN0KCk7XG4gICAgICAgICAgbmV3UmVzcG9uc2l2ZVN0YXRlID0gJ3RhYmxldCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgdGhpcy5maXhlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jb2xsYXBzZSgpO1xuICAgICAgICAgIG5ld1Jlc3BvbnNpdmVTdGF0ZSA9ICdtb2JpbGUnO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNDb2xsYXBzZWQgJiYgIWlzQ29tcGFjdGVkICYmICghcHJldi53aWR0aCB8fCBwcmV2LndpZHRoIDwgY3VycmVudC53aWR0aCkpIHtcbiAgICAgICAgICB0aGlzLmV4cGFuZCgpO1xuICAgICAgICAgIHRoaXMuZml4ZWQgPSBmYWxzZTtcbiAgICAgICAgICBuZXdSZXNwb25zaXZlU3RhdGUgPSAncGMnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1Jlc3BvbnNpdmVTdGF0ZSAmJiBuZXdSZXNwb25zaXZlU3RhdGUgIT09IHRoaXMucmVzcG9uc2l2ZVN0YXRlKSB7XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlU3RhdGUgPSBuZXdSZXNwb25zaXZlU3RhdGU7XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlU3RhdGVDaGFuZ2UuZW1pdCh0aGlzLnJlc3BvbnNpdmVTdGF0ZSk7XG4gICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0TWVudUxpbmsoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbmItbWVudScpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldE1lbnVMaW5rKGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IE5iU2lkZWJhclN0YXRlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IHN0YXRlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlLmVtaXQodGhpcy5zdGF0ZSk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxufVxuIl19