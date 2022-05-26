/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ElementRef, HostBinding, HostListener, Input, ViewChild, ViewContainerRef, Inject, PLATFORM_ID, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { NB_WINDOW, NB_DOCUMENT } from '../../theme.options';
import * as i0 from "@angular/core";
import * as i1 from "../../services/theme.service";
import * as i2 from "../../services/spinner.service";
import * as i3 from "../../services/direction.service";
import * as i4 from "../../services/scroll.service";
import * as i5 from "../../services/ruler.service";
import * as i6 from "./restore-scroll-top.service";
import * as i7 from "../cdk/adapter/overlay-container-adapter";
/**
 * Layout container component.
 * When using with Nebular Theme System it is required that all child components should be placed inside.
 *
 * Basic example of two column layout with header:
 *
 * @stacked-example(Showcase, layout/layout-showcase.component)
 *
 * Can contain the following components inside:
 *
 * ```html
 * <nb-layout>
 *  <nb-layout-header></nb-layout-header>
 *  <nb-layout-footer></nb-layout-footer>
 *  <nb-layout-column></nb-layout-column>
 *  <nb-sidebar></nb-sidebar>
 * </nb-layout>
 * ```
 * ### Installation
 *
 * Import `NbLayoutModule` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbLayoutModule,
 *   ],
 * })
 * export class AppModule { }
 * ```
 * ### Usage
 * By default the layout fills up the whole view-port.
 * The window scrollbars are disabled on the body and moved inside of the nb-layout, so that the scrollbars
 * won't mess with the fixed nb-header.
 *
 * The child components are projected into a flexible layout structure allowing to adjust the layout behavior
 * based on the settings provided.
 *
 * The layout content (columns) becomes centered when the window width is more than
 * the value specified in the theme variable `layout-content-width`.
 *
 * The layout also contains the area on the very top (the first child of the nb-layout), which could be used
 * to dynamically append some components like modals or spinners/loaders
 * so that they are located on top of the elements hierarchy.
 * More details are under the `ThemeService` section.
 *
 * The layout component is also responsible for changing application themes.
 * It listens to the `themeChange` event and change a theme CSS class appended to body.
 * Based on the class appended, specific CSS-theme is applied to the application.
 * More details of the Theme System could be found here [Enabling Theme System](#/docs/concepts/theme-system)
 *
 * A simple layout with footer:
 *
 * @stacked-example(Layout With Footer, layout/layout-w-footer.component)
 *
 * It is possible to ask the layout to center the columns (notice: we added a `center` attribute
 * to the layout:
 *
 * ```html
 * <nb-layout center>
 *   <nb-layout-header>Awesome Company</nb-layout-header>
 *
 *   <nb-layout-column>
 *     Hello World!
 *   </nb-layout-column>
 *
 *   <nb-layout-footer>Contact us</nb-layout-footer>
 * </nb-layout>
 * ```
 *
 * @styles
 *
 * layout-background-color:
 * layout-text-color:
 * layout-text-font-family:
 * layout-text-font-size:
 * layout-text-font-weight:
 * layout-text-line-height:
 * layout-min-height:
 * layout-content-width:
 * layout-window-mode-min-width:
 * layout-window-mode-background-color:
 * layout-window-mode-padding-top:
 * layout-window-shadow:
 * layout-padding:
 * layout-medium-padding:
 * layout-small-padding:
 * layout-scrollbar-background-color:
 * layout-scrollbar-color:
 * layout-scrollbar-width:
 */
export class NbLayoutComponent {
    constructor(themeService, spinnerService, elementRef, renderer, window, document, platformId, layoutDirectionService, scrollService, rulerService, scrollTop, overlayContainer) {
        this.themeService = themeService;
        this.spinnerService = spinnerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.window = window;
        this.document = document;
        this.platformId = platformId;
        this.layoutDirectionService = layoutDirectionService;
        this.scrollService = scrollService;
        this.rulerService = rulerService;
        this.scrollTop = scrollTop;
        this.overlayContainer = overlayContainer;
        this.scrollBlockClass = 'nb-global-scrollblock';
        this.isScrollBlocked = false;
        this.centerValue = false;
        this.restoreScrollTopValue = true;
        this.windowModeValue = false;
        this.withScrollValue = false;
        this.withSubheader = false;
        this.afterViewInit$ = new BehaviorSubject(null);
        this.destroy$ = new Subject();
        this.registerAsOverlayContainer();
        this.themeService
            .onThemeChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe((theme) => {
            const body = this.document.getElementsByTagName('body')[0];
            if (theme.previous) {
                this.renderer.removeClass(body, `nb-theme-${theme.previous}`);
            }
            this.renderer.addClass(body, `nb-theme-${theme.name}`);
        });
        this.themeService
            .onAppendLayoutClass()
            .pipe(takeUntil(this.destroy$))
            .subscribe((className) => {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        });
        this.themeService
            .onRemoveLayoutClass()
            .pipe(takeUntil(this.destroy$))
            .subscribe((className) => {
            this.renderer.removeClass(this.elementRef.nativeElement, className);
        });
        this.spinnerService.registerLoader(new Promise((resolve) => {
            this.afterViewInit$.pipe(takeUntil(this.destroy$)).subscribe((_) => resolve());
        }));
        this.spinnerService.load();
        this.rulerService
            .onGetDimensions()
            .pipe(takeUntil(this.destroy$))
            .subscribe(({ listener }) => {
            listener.next(this.getDimensions());
            listener.complete();
        });
        this.scrollService
            .onGetPosition()
            .pipe(takeUntil(this.destroy$))
            .subscribe(({ listener }) => {
            listener.next(this.getScrollPosition());
            listener.complete();
        });
        this.scrollTop
            .shouldRestore()
            .pipe(filter(() => this.restoreScrollTopValue), takeUntil(this.destroy$))
            .subscribe(() => {
            this.scroll(0, 0);
        });
        this.scrollService
            .onScrollableChange()
            .pipe(filter(() => this.withScrollValue), takeUntil(this.destroy$))
            .subscribe((scrollable) => {
            /**
             * In case when Nebular Layout custom scroll `withScroll` mode is enabled
             * we need to disable default CDK scroll blocker (@link NbBlockScrollStrategyAdapter) on HTML element
             * so that it won't add additional positioning.
             */
            if (scrollable) {
                this.enableScroll();
            }
            else {
                this.blockScroll();
            }
        });
        if (isPlatformBrowser(this.platformId)) {
            // trigger first time so that after the change we have the initial value
            this.themeService.changeWindowWidth(this.window.innerWidth);
        }
    }
    /**
     * Defines whether the layout columns will be centered after some width
     * @param {boolean} val
     */
    set center(val) {
        this.centerValue = convertToBoolProperty(val);
    }
    /**
     * Defines whether the layout enters a 'window' mode, when the layout content (including sidebars and fixed header)
     * becomes centered by width with a margin from the top of the screen, like a floating window.
     * Automatically enables `withScroll` mode, as in the window mode scroll must be inside the layout and cannot be on
     * window. (TODO: check this)
     * @param {boolean} val
     */
    set windowMode(val) {
        this.windowModeValue = convertToBoolProperty(val);
        this.withScroll = this.windowModeValue;
    }
    /**
     * Defines whether to move the scrollbars to layout or leave it at the body level.
     * Automatically set to true when `windowMode` is enabled.
     * @param {boolean} val
     */
    set withScroll(val) {
        this.withScrollValue = convertToBoolProperty(val);
        // TODO: is this the best way of doing it? as we don't have access to body from theme styles
        // TODO: add e2e test
        const body = this.document.getElementsByTagName('body')[0];
        if (this.withScrollValue) {
            this.renderer.setStyle(body, 'overflow', 'hidden');
        }
        else {
            this.renderer.setStyle(body, 'overflow', 'initial');
        }
    }
    /**
     * Restores scroll to the top of the page after navigation
     * @param {boolean} val
     */
    set restoreScrollTop(val) {
        this.restoreScrollTopValue = convertToBoolProperty(val);
    }
    ngAfterViewInit() {
        this.layoutDirectionService
            .onDirectionChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe((direction) => (this.document.dir = direction));
        this.scrollService
            .onManualScroll()
            .pipe(takeUntil(this.destroy$))
            .subscribe(({ x, y }) => this.scroll(x, y));
        this.afterViewInit$.next(true);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.unregisterAsOverlayContainer();
    }
    onScroll($event) {
        this.scrollService.fireScrollChange($event);
    }
    onResize(event) {
        this.themeService.changeWindowWidth(event.target.innerWidth);
    }
    /**
     * Returns scroll and client height/width
     *
     * Depending on the current scroll mode (`withScroll=true`) returns sizes from the body element
     * or from the `.scrollable-container`
     * @returns {NbLayoutDimensions}
     */
    getDimensions() {
        let clientWidth, clientHeight, scrollWidth, scrollHeight = 0;
        if (this.withScrollValue) {
            const container = this.scrollableContainerRef.nativeElement;
            clientWidth = container.clientWidth;
            clientHeight = container.clientHeight;
            scrollWidth = container.scrollWidth;
            scrollHeight = container.scrollHeight;
        }
        else {
            const { documentElement, body } = this.document;
            clientWidth = documentElement.clientWidth || body.clientWidth;
            clientHeight = documentElement.clientHeight || body.clientHeight;
            scrollWidth = documentElement.scrollWidth || body.scrollWidth;
            scrollHeight = documentElement.scrollHeight || body.scrollHeight;
        }
        return {
            clientWidth,
            clientHeight,
            scrollWidth,
            scrollHeight,
        };
    }
    /**
     * Returns scroll position of current scroll container.
     *
     * If `withScroll` = true, returns scroll position of the `.scrollable-container` element,
     * otherwise - of the scrollable element of the window (which may be different depending of a browser)
     *
     * @returns {NbScrollPosition}
     */
    getScrollPosition() {
        if (!isPlatformBrowser(this.platformId)) {
            return { x: 0, y: 0 };
        }
        if (this.withScrollValue) {
            const container = this.scrollableContainerRef.nativeElement;
            return { x: container.scrollLeft, y: container.scrollTop };
        }
        const documentRect = this.document.documentElement.getBoundingClientRect();
        const x = -documentRect.left ||
            this.document.body.scrollLeft ||
            this.window.scrollX ||
            this.document.documentElement.scrollLeft ||
            0;
        const y = -documentRect.top ||
            this.document.body.scrollTop ||
            this.window.scrollY ||
            this.document.documentElement.scrollTop ||
            0;
        return { x, y };
    }
    registerAsOverlayContainer() {
        if (this.overlayContainer.setContainer) {
            this.overlayContainer.setContainer(this.elementRef.nativeElement);
        }
    }
    unregisterAsOverlayContainer() {
        if (this.overlayContainer.clearContainer) {
            this.overlayContainer.clearContainer();
        }
    }
    scroll(x = null, y = null) {
        const { x: currentX, y: currentY } = this.getScrollPosition();
        x = x == null ? currentX : x;
        y = y == null ? currentY : y;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        if (this.withScrollValue) {
            const scrollable = this.scrollableContainerRef.nativeElement;
            if (scrollable.scrollTo) {
                scrollable.scrollTo(x, y);
            }
            else {
                scrollable.scrollLeft = x;
                scrollable.scrollTop = y;
            }
        }
        else {
            this.window.scrollTo(x, y);
        }
    }
    // TODO: Extract into block scroll strategy
    blockScroll() {
        if (this.isScrollBlocked) {
            return;
        }
        this.isScrollBlocked = true;
        this.renderer.addClass(this.document.documentElement, this.scrollBlockClass);
        const scrollableContainerElement = this.scrollableContainerRef.nativeElement;
        const layoutElement = this.layoutContainerRef.nativeElement;
        const layoutWithScrollWidth = layoutElement.clientWidth;
        this.scrollableContainerOverflowOldValue = scrollableContainerElement.style.overflow;
        scrollableContainerElement.style.overflow = 'hidden';
        const layoutWithoutScrollWidth = layoutElement.clientWidth;
        const scrollWidth = layoutWithoutScrollWidth - layoutWithScrollWidth;
        if (!scrollWidth) {
            return;
        }
        this.layoutPaddingOldValue = {
            left: layoutElement.style.paddingLeft,
            right: layoutElement.style.paddingRight,
        };
        if (this.layoutDirectionService.isLtr()) {
            layoutElement.style.paddingRight = `${scrollWidth}px`;
        }
        else {
            layoutElement.style.paddingLeft = `${scrollWidth}px`;
        }
    }
    enableScroll() {
        if (this.isScrollBlocked) {
            this.isScrollBlocked = false;
            this.renderer.removeClass(this.document.documentElement, this.scrollBlockClass);
            this.scrollableContainerRef.nativeElement.style.overflow = this.scrollableContainerOverflowOldValue;
            if (this.layoutPaddingOldValue) {
                const layoutElement = this.layoutContainerRef.nativeElement;
                layoutElement.style.paddingLeft = this.layoutPaddingOldValue.left;
                layoutElement.style.paddingRight = this.layoutPaddingOldValue.right;
                this.layoutPaddingOldValue = null;
            }
        }
    }
}
NbLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutComponent, deps: [{ token: i1.NbThemeService }, { token: i2.NbSpinnerService }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: NB_WINDOW }, { token: NB_DOCUMENT }, { token: PLATFORM_ID }, { token: i3.NbLayoutDirectionService }, { token: i4.NbLayoutScrollService }, { token: i5.NbLayoutRulerService }, { token: i6.NbRestoreScrollTopHelper }, { token: i7.NbOverlayContainerAdapter }], target: i0.ɵɵFactoryTarget.Component });
NbLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbLayoutComponent, selector: "nb-layout", inputs: { center: "center", windowMode: "windowMode", withScroll: "withScroll", restoreScrollTop: "restoreScrollTop" }, host: { listeners: { "window:scroll": "onScroll($event)", "window:resize": "onResize($event)" }, properties: { "class.window-mode": "this.windowModeValue", "class.with-scroll": "this.withScrollValue", "class.with-subheader": "this.withSubheader" } }, viewQueries: [{ propertyName: "veryTopRef", first: true, predicate: ["layoutTopDynamicArea"], descendants: true, read: ViewContainerRef }, { propertyName: "scrollableContainerRef", first: true, predicate: ["scrollableContainer"], descendants: true, read: ElementRef, static: true }, { propertyName: "layoutContainerRef", first: true, predicate: ["layoutContainer"], descendants: true, read: ElementRef }], ngImport: i0, template: `
    <div class="scrollable-container" #scrollableContainer (scroll)="onScroll($event)">
      <div class="layout" #layoutContainer>
        <ng-content select="nb-layout-header:not([subheader])"></ng-content>
        <div class="layout-container">
          <ng-content select="nb-sidebar"></ng-content>
          <div class="content" [class.center]="centerValue">
            <ng-content select="nb-layout-header[subheader]"></ng-content>
            <div class="columns">
              <ng-content select="nb-layout-column"></ng-content>
            </div>
            <ng-content select="nb-layout-footer"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{-webkit-font-smoothing:antialiased}[dir=ltr] :host{text-align:left}[dir=rtl] :host{text-align:right}:host .layout{display:flex;flex-direction:column}:host ::ng-deep nb-layout-header{display:block}:host ::ng-deep nb-layout-header nav{align-items:center;justify-content:flex-start;display:flex}:host ::ng-deep nb-layout-header.fixed{position:fixed;top:0;left:0;right:0;z-index:1040}:host .layout-container{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row}[dir=ltr] :host .layout-container ::ng-deep nb-sidebar.left{order:0}[dir=rtl] :host .layout-container ::ng-deep nb-sidebar.left,[dir=ltr] :host .layout-container ::ng-deep nb-sidebar.right{order:2}[dir=rtl] :host .layout-container ::ng-deep nb-sidebar.right{order:0}:host .layout-container ::ng-deep nb-sidebar.end{order:2}:host .layout-container ::ng-deep nb-sidebar .fixed{position:fixed;width:100%;overflow-y:auto;height:100%}:host .layout-container .content{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:column;min-width:0}:host .layout-container .content.center{max-width:100%;position:relative;margin-left:auto;margin-right:auto}:host .layout-container .content .columns{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row;width:100%}:host .layout-container .content .columns ::ng-deep nb-layout-column{order:1;flex:1 0;min-width:0}[dir=ltr] :host .layout-container .content .columns ::ng-deep nb-layout-column.left{order:0}[dir=rtl] :host .layout-container .content .columns ::ng-deep nb-layout-column.left{order:2}:host .layout-container .content .columns ::ng-deep nb-layout-column.start{order:0}:host .layout-container .content ::ng-deep nb-layout-footer{display:block;margin-top:auto}:host .layout-container .content ::ng-deep nb-layout-footer nav{justify-content:center;display:flex}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-layout', template: `
    <div class="scrollable-container" #scrollableContainer (scroll)="onScroll($event)">
      <div class="layout" #layoutContainer>
        <ng-content select="nb-layout-header:not([subheader])"></ng-content>
        <div class="layout-container">
          <ng-content select="nb-sidebar"></ng-content>
          <div class="content" [class.center]="centerValue">
            <ng-content select="nb-layout-header[subheader]"></ng-content>
            <div class="columns">
              <ng-content select="nb-layout-column"></ng-content>
            </div>
            <ng-content select="nb-layout-footer"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{-webkit-font-smoothing:antialiased}[dir=ltr] :host{text-align:left}[dir=rtl] :host{text-align:right}:host .layout{display:flex;flex-direction:column}:host ::ng-deep nb-layout-header{display:block}:host ::ng-deep nb-layout-header nav{align-items:center;justify-content:flex-start;display:flex}:host ::ng-deep nb-layout-header.fixed{position:fixed;top:0;left:0;right:0;z-index:1040}:host .layout-container{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row}[dir=ltr] :host .layout-container ::ng-deep nb-sidebar.left{order:0}[dir=rtl] :host .layout-container ::ng-deep nb-sidebar.left,[dir=ltr] :host .layout-container ::ng-deep nb-sidebar.right{order:2}[dir=rtl] :host .layout-container ::ng-deep nb-sidebar.right{order:0}:host .layout-container ::ng-deep nb-sidebar.end{order:2}:host .layout-container ::ng-deep nb-sidebar .fixed{position:fixed;width:100%;overflow-y:auto;height:100%}:host .layout-container .content{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:column;min-width:0}:host .layout-container .content.center{max-width:100%;position:relative;margin-left:auto;margin-right:auto}:host .layout-container .content .columns{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row;width:100%}:host .layout-container .content .columns ::ng-deep nb-layout-column{order:1;flex:1 0;min-width:0}[dir=ltr] :host .layout-container .content .columns ::ng-deep nb-layout-column.left{order:0}[dir=rtl] :host .layout-container .content .columns ::ng-deep nb-layout-column.left{order:2}:host .layout-container .content .columns ::ng-deep nb-layout-column.start{order:0}:host .layout-container .content ::ng-deep nb-layout-footer{display:block;margin-top:auto}:host .layout-container .content ::ng-deep nb-layout-footer nav{justify-content:center;display:flex}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbThemeService }, { type: i2.NbSpinnerService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_WINDOW]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i3.NbLayoutDirectionService }, { type: i4.NbLayoutScrollService }, { type: i5.NbLayoutRulerService }, { type: i6.NbRestoreScrollTopHelper }, { type: i7.NbOverlayContainerAdapter }]; }, propDecorators: { windowModeValue: [{
                type: HostBinding,
                args: ['class.window-mode']
            }], withScrollValue: [{
                type: HostBinding,
                args: ['class.with-scroll']
            }], withSubheader: [{
                type: HostBinding,
                args: ['class.with-subheader']
            }], center: [{
                type: Input
            }], windowMode: [{
                type: Input
            }], withScroll: [{
                type: Input
            }], restoreScrollTop: [{
                type: Input
            }], veryTopRef: [{
                type: ViewChild,
                args: ['layoutTopDynamicArea', { read: ViewContainerRef }]
            }], scrollableContainerRef: [{
                type: ViewChild,
                args: ['scrollableContainer', { read: ElementRef, static: true }]
            }], layoutContainerRef: [{
                type: ViewChild,
                args: ['layoutContainer', { read: ElementRef }]
            }], onScroll: [{
                type: HostListener,
                args: ['window:scroll', ['$event']]
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });
/**
 * A container component which determines a content position inside of the layout.
 * The layout could contain unlimited columns (not including the sidebars).
 *
 * By default the columns are ordered from the left to the right,
 * but it's also possible to overwrite this behavior by setting a `left` attribute to the column,
 * moving it to the very first position:
 *
 * @stacked-example(Column Left, layout/layout-column-left.component)
 */
export class NbLayoutColumnComponent {
    /**
     * Move the column to the very left position in the layout.
     * @param {boolean} val
     */
    set left(val) {
        this.leftValue = convertToBoolProperty(val);
        this.startValue = false;
    }
    /**
     * Make column first in the layout.
     * @param {boolean} val
     */
    set start(val) {
        this.startValue = convertToBoolProperty(val);
        this.leftValue = false;
    }
}
NbLayoutColumnComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutColumnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbLayoutColumnComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbLayoutColumnComponent, selector: "nb-layout-column", inputs: { left: "left", start: "start" }, host: { properties: { "class.left": "this.leftValue", "class.start": "this.startValue" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutColumnComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-layout-column',
                    template: `<ng-content></ng-content>`,
                }]
        }], propDecorators: { leftValue: [{
                type: HostBinding,
                args: ['class.left']
            }], startValue: [{
                type: HostBinding,
                args: ['class.start']
            }], left: [{
                type: Input
            }], start: [{
                type: Input
            }] } });
/**
 * Page header component.
 * Located on top of the page above the layout columns and sidebars.
 * Could be made `fixed` by setting the corresponding property. In the fixed mode the header becomes
 * sticky to the top of the nb-layout (to of the page). Here's an example:
 *
 * @stacked-example(Fixed Header, layout/layout-fixed-header.component)
 *
 * In a pair with sidebar it is possible to setup a configuration when header is placed on a side of the sidebar
 * and not on top of it. To achieve this simply put a `subheader` property to the header like this:
 * ```html
 * <nb-layout-header subheader></nb-layout-header>
 * ```
 * @stacked-example(Subheader, layout/layout-sidebar-subheader.component)
 * Note that in such configuration sidebar shadow is removed and header cannot be make `fixed`.
 *
 * Same way you can put both `fixed` and `clipped` headers adding creating a sub-header for your app:
 *
 * @stacked-example(Subheader, layout/layout-subheader.component)
 *
 * @styles
 *
 * header-background-color:
 * header-text-color:
 * header-text-font-family:
 * header-text-font-size:
 * header-text-font-weight:
 * header-text-line-height:
 * header-height:
 * header-padding:
 * header-shadow:
 */
export class NbLayoutHeaderComponent {
    constructor(layout) {
        this.layout = layout;
    }
    /**
     * Makes the header sticky to the top of the nb-layout.
     * @param {boolean} val
     */
    set fixed(val) {
        this.fixedValue = convertToBoolProperty(val);
    }
    /**
     * Places header on a side of the sidebar, and not above.
     * Disables fixed mode for this header and remove a shadow from the sidebar.
     * @param {boolean} val
     */
    set subheader(val) {
        this.subheaderValue = convertToBoolProperty(val);
        this.fixedValue = false;
        this.layout.withSubheader = this.subheaderValue;
    }
}
NbLayoutHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutHeaderComponent, deps: [{ token: NbLayoutComponent }], target: i0.ɵɵFactoryTarget.Component });
NbLayoutHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbLayoutHeaderComponent, selector: "nb-layout-header", inputs: { fixed: "fixed", subheader: "subheader" }, host: { properties: { "class.fixed": "this.fixedValue", "class.subheader": "this.subheaderValue" } }, ngImport: i0, template: `
    <nav [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </nav>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-layout-header',
                    template: `
    <nav [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </nav>
  `,
                }]
        }], ctorParameters: function () { return [{ type: NbLayoutComponent }]; }, propDecorators: { fixedValue: [{
                type: HostBinding,
                args: ['class.fixed']
            }], subheaderValue: [{
                type: HostBinding,
                args: ['class.subheader']
            }], fixed: [{
                type: Input
            }], subheader: [{
                type: Input
            }] } });
/**
 * Page footer.
 * Located under the nb-layout content (specifically, under the columns).
 * Could be made `fixed`, becoming sticky to the bottom of the view port (window).
 *
 * @styles
 *
 * footer-background-color:
 * footer-text-color:
 * footer-text-font-family:
 * footer-text-font-size:
 * footer-text-font-weight:
 * footer-text-line-height:
 * footer-text-highlight-color:
 * footer-height:
 * footer-padding:
 * footer-divider-color:
 * footer-divider-style:
 * footer-divider-width:
 * footer-shadow:
 */
export class NbLayoutFooterComponent {
    /**
     * Makes the footer sticky to the bottom of the window.
     * @param {boolean} val
     */
    set fixed(val) {
        this.fixedValue = convertToBoolProperty(val);
    }
}
NbLayoutFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbLayoutFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbLayoutFooterComponent, selector: "nb-layout-footer", inputs: { fixed: "fixed" }, host: { properties: { "class.fixed": "this.fixedValue" } }, ngImport: i0, template: `
    <nav [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </nav>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-layout-footer',
                    template: `
    <nav [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </nav>
  `,
                }]
        }], propDecorators: { fixedValue: [{
                type: HostBinding,
                args: ['class.fixed']
            }], fixed: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBR0wsU0FBUyxFQUNULGdCQUFnQixFQUNoQixNQUFNLEVBQ04sV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFrQixNQUFNLFlBQVksQ0FBQztBQU9uRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFHN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBGRztBQXNCSCxNQUFNLE9BQU8saUJBQWlCO0lBZ0Y1QixZQUNZLFlBQTRCLEVBQzVCLGNBQWdDLEVBQ2hDLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ0EsTUFBTSxFQUNKLFFBQVEsRUFDUixVQUFrQixFQUN2QyxzQkFBZ0QsRUFDaEQsYUFBb0MsRUFDcEMsWUFBa0MsRUFDbEMsU0FBbUMsRUFDbkMsZ0JBQTJDO1FBWDNDLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDaEMsZUFBVSxHQUFW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QixJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDbEQsQ0FBQzs7b0hBMUJVLHVCQUF1QixrQkFJTixpQkFBaUI7d0dBSmxDLHVCQUF1QixrTkFOeEI7Ozs7R0FJVDsyRkFFVSx1QkFBdUI7a0JBUm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFOzs7O0dBSVQ7aUJBQ0Y7MERBSzZCLGlCQUFpQiwwQkFIakIsVUFBVTtzQkFBckMsV0FBVzt1QkFBQyxhQUFhO2dCQUNNLGNBQWM7c0JBQTdDLFdBQVc7dUJBQUMsaUJBQWlCO2dCQVMxQixLQUFLO3NCQURSLEtBQUs7Z0JBWUYsU0FBUztzQkFEWixLQUFLOztBQVNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQVNILE1BQU0sT0FBTyx1QkFBdUI7SUFHbEM7OztPQUdHO0lBQ0gsSUFDSSxLQUFLLENBQUMsR0FBWTtRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O29IQVZVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLGdKQU54Qjs7OztHQUlUOzJGQUVVLHVCQUF1QjtrQkFSbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUU7Ozs7R0FJVDtpQkFDRjs4QkFFNkIsVUFBVTtzQkFBckMsV0FBVzt1QkFBQyxhQUFhO2dCQU90QixLQUFLO3NCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSUQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5LCBOYkJvb2xlYW5JbnB1dCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTmJUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5iU3Bpbm5lclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zcGlubmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGlyZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJSZXN0b3JlU2Nyb2xsVG9wSGVscGVyIH0gZnJvbSAnLi9yZXN0b3JlLXNjcm9sbC10b3Auc2VydmljZSc7XG5pbXBvcnQgeyBOYlNjcm9sbFBvc2l0aW9uLCBOYkxheW91dFNjcm9sbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zY3JvbGwuc2VydmljZSc7XG5pbXBvcnQgeyBOYkxheW91dERpbWVuc2lvbnMsIE5iTGF5b3V0UnVsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcnVsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOQl9XSU5ET1csIE5CX0RPQ1VNRU5UIH0gZnJvbSAnLi4vLi4vdGhlbWUub3B0aW9ucyc7XG5pbXBvcnQgeyBOYk92ZXJsYXlDb250YWluZXJBZGFwdGVyIH0gZnJvbSAnLi4vY2RrL2FkYXB0ZXIvb3ZlcmxheS1jb250YWluZXItYWRhcHRlcic7XG5cbi8qKlxuICogTGF5b3V0IGNvbnRhaW5lciBjb21wb25lbnQuXG4gKiBXaGVuIHVzaW5nIHdpdGggTmVidWxhciBUaGVtZSBTeXN0ZW0gaXQgaXMgcmVxdWlyZWQgdGhhdCBhbGwgY2hpbGQgY29tcG9uZW50cyBzaG91bGQgYmUgcGxhY2VkIGluc2lkZS5cbiAqXG4gKiBCYXNpYyBleGFtcGxlIG9mIHR3byBjb2x1bW4gbGF5b3V0IHdpdGggaGVhZGVyOlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU2hvd2Nhc2UsIGxheW91dC9sYXlvdXQtc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqIENhbiBjb250YWluIHRoZSBmb2xsb3dpbmcgY29tcG9uZW50cyBpbnNpZGU6XG4gKlxuICogYGBgaHRtbFxuICogPG5iLWxheW91dD5cbiAqICA8bmItbGF5b3V0LWhlYWRlcj48L25iLWxheW91dC1oZWFkZXI+XG4gKiAgPG5iLWxheW91dC1mb290ZXI+PC9uYi1sYXlvdXQtZm9vdGVyPlxuICogIDxuYi1sYXlvdXQtY29sdW1uPjwvbmItbGF5b3V0LWNvbHVtbj5cbiAqICA8bmItc2lkZWJhcj48L25iLXNpZGViYXI+XG4gKiA8L25iLWxheW91dD5cbiAqIGBgYFxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJMYXlvdXRNb2R1bGVgIHRvIHlvdXIgYXBwIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJMYXlvdXRNb2R1bGUsXG4gKiAgIF0sXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKiBCeSBkZWZhdWx0IHRoZSBsYXlvdXQgZmlsbHMgdXAgdGhlIHdob2xlIHZpZXctcG9ydC5cbiAqIFRoZSB3aW5kb3cgc2Nyb2xsYmFycyBhcmUgZGlzYWJsZWQgb24gdGhlIGJvZHkgYW5kIG1vdmVkIGluc2lkZSBvZiB0aGUgbmItbGF5b3V0LCBzbyB0aGF0IHRoZSBzY3JvbGxiYXJzXG4gKiB3b24ndCBtZXNzIHdpdGggdGhlIGZpeGVkIG5iLWhlYWRlci5cbiAqXG4gKiBUaGUgY2hpbGQgY29tcG9uZW50cyBhcmUgcHJvamVjdGVkIGludG8gYSBmbGV4aWJsZSBsYXlvdXQgc3RydWN0dXJlIGFsbG93aW5nIHRvIGFkanVzdCB0aGUgbGF5b3V0IGJlaGF2aW9yXG4gKiBiYXNlZCBvbiB0aGUgc2V0dGluZ3MgcHJvdmlkZWQuXG4gKlxuICogVGhlIGxheW91dCBjb250ZW50IChjb2x1bW5zKSBiZWNvbWVzIGNlbnRlcmVkIHdoZW4gdGhlIHdpbmRvdyB3aWR0aCBpcyBtb3JlIHRoYW5cbiAqIHRoZSB2YWx1ZSBzcGVjaWZpZWQgaW4gdGhlIHRoZW1lIHZhcmlhYmxlIGBsYXlvdXQtY29udGVudC13aWR0aGAuXG4gKlxuICogVGhlIGxheW91dCBhbHNvIGNvbnRhaW5zIHRoZSBhcmVhIG9uIHRoZSB2ZXJ5IHRvcCAodGhlIGZpcnN0IGNoaWxkIG9mIHRoZSBuYi1sYXlvdXQpLCB3aGljaCBjb3VsZCBiZSB1c2VkXG4gKiB0byBkeW5hbWljYWxseSBhcHBlbmQgc29tZSBjb21wb25lbnRzIGxpa2UgbW9kYWxzIG9yIHNwaW5uZXJzL2xvYWRlcnNcbiAqIHNvIHRoYXQgdGhleSBhcmUgbG9jYXRlZCBvbiB0b3Agb2YgdGhlIGVsZW1lbnRzIGhpZXJhcmNoeS5cbiAqIE1vcmUgZGV0YWlscyBhcmUgdW5kZXIgdGhlIGBUaGVtZVNlcnZpY2VgIHNlY3Rpb24uXG4gKlxuICogVGhlIGxheW91dCBjb21wb25lbnQgaXMgYWxzbyByZXNwb25zaWJsZSBmb3IgY2hhbmdpbmcgYXBwbGljYXRpb24gdGhlbWVzLlxuICogSXQgbGlzdGVucyB0byB0aGUgYHRoZW1lQ2hhbmdlYCBldmVudCBhbmQgY2hhbmdlIGEgdGhlbWUgQ1NTIGNsYXNzIGFwcGVuZGVkIHRvIGJvZHkuXG4gKiBCYXNlZCBvbiB0aGUgY2xhc3MgYXBwZW5kZWQsIHNwZWNpZmljIENTUy10aGVtZSBpcyBhcHBsaWVkIHRvIHRoZSBhcHBsaWNhdGlvbi5cbiAqIE1vcmUgZGV0YWlscyBvZiB0aGUgVGhlbWUgU3lzdGVtIGNvdWxkIGJlIGZvdW5kIGhlcmUgW0VuYWJsaW5nIFRoZW1lIFN5c3RlbV0oIy9kb2NzL2NvbmNlcHRzL3RoZW1lLXN5c3RlbSlcbiAqXG4gKiBBIHNpbXBsZSBsYXlvdXQgd2l0aCBmb290ZXI6XG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShMYXlvdXQgV2l0aCBGb290ZXIsIGxheW91dC9sYXlvdXQtdy1mb290ZXIuY29tcG9uZW50KVxuICpcbiAqIEl0IGlzIHBvc3NpYmxlIHRvIGFzayB0aGUgbGF5b3V0IHRvIGNlbnRlciB0aGUgY29sdW1ucyAobm90aWNlOiB3ZSBhZGRlZCBhIGBjZW50ZXJgIGF0dHJpYnV0ZVxuICogdG8gdGhlIGxheW91dDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmItbGF5b3V0IGNlbnRlcj5cbiAqICAgPG5iLWxheW91dC1oZWFkZXI+QXdlc29tZSBDb21wYW55PC9uYi1sYXlvdXQtaGVhZGVyPlxuICpcbiAqICAgPG5iLWxheW91dC1jb2x1bW4+XG4gKiAgICAgSGVsbG8gV29ybGQhXG4gKiAgIDwvbmItbGF5b3V0LWNvbHVtbj5cbiAqXG4gKiAgIDxuYi1sYXlvdXQtZm9vdGVyPkNvbnRhY3QgdXM8L25iLWxheW91dC1mb290ZXI+XG4gKiA8L25iLWxheW91dD5cbiAqIGBgYFxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiBsYXlvdXQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGxheW91dC10ZXh0LWNvbG9yOlxuICogbGF5b3V0LXRleHQtZm9udC1mYW1pbHk6XG4gKiBsYXlvdXQtdGV4dC1mb250LXNpemU6XG4gKiBsYXlvdXQtdGV4dC1mb250LXdlaWdodDpcbiAqIGxheW91dC10ZXh0LWxpbmUtaGVpZ2h0OlxuICogbGF5b3V0LW1pbi1oZWlnaHQ6XG4gKiBsYXlvdXQtY29udGVudC13aWR0aDpcbiAqIGxheW91dC13aW5kb3ctbW9kZS1taW4td2lkdGg6XG4gKiBsYXlvdXQtd2luZG93LW1vZGUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGxheW91dC13aW5kb3ctbW9kZS1wYWRkaW5nLXRvcDpcbiAqIGxheW91dC13aW5kb3ctc2hhZG93OlxuICogbGF5b3V0LXBhZGRpbmc6XG4gKiBsYXlvdXQtbWVkaXVtLXBhZGRpbmc6XG4gKiBsYXlvdXQtc21hbGwtcGFkZGluZzpcbiAqIGxheW91dC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGxheW91dC1zY3JvbGxiYXItY29sb3I6XG4gKiBsYXlvdXQtc2Nyb2xsYmFyLXdpZHRoOlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1sYXlvdXQnLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsYWJsZS1jb250YWluZXJcIiAjc2Nyb2xsYWJsZUNvbnRhaW5lciAoc2Nyb2xsKT1cIm9uU2Nyb2xsKCRldmVudClcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIiAjbGF5b3V0Q29udGFpbmVyPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1sYXlvdXQtaGVhZGVyOm5vdChbc3ViaGVhZGVyXSlcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItc2lkZWJhclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiIFtjbGFzcy5jZW50ZXJdPVwiY2VudGVyVmFsdWVcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5iLWxheW91dC1oZWFkZXJbc3ViaGVhZGVyXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5iLWxheW91dC1jb2x1bW5cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5iLWxheW91dC1mb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5iTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIHNjcm9sbEJsb2NrQ2xhc3MgPSAnbmItZ2xvYmFsLXNjcm9sbGJsb2NrJztcbiAgcHJvdGVjdGVkIGlzU2Nyb2xsQmxvY2tlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgc2Nyb2xsYWJsZUNvbnRhaW5lck92ZXJmbG93T2xkVmFsdWU6IHN0cmluZztcbiAgcHJvdGVjdGVkIGxheW91dFBhZGRpbmdPbGRWYWx1ZTogeyBsZWZ0OiBzdHJpbmc7IHJpZ2h0OiBzdHJpbmcgfTtcblxuICBjZW50ZXJWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICByZXN0b3JlU2Nyb2xsVG9wVmFsdWU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mud2luZG93LW1vZGUnKSB3aW5kb3dNb2RlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy53aXRoLXNjcm9sbCcpIHdpdGhTY3JvbGxWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLndpdGgtc3ViaGVhZGVyJykgd2l0aFN1YmhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhlIGxheW91dCBjb2x1bW5zIHdpbGwgYmUgY2VudGVyZWQgYWZ0ZXIgc29tZSB3aWR0aFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGNlbnRlcih2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNlbnRlclZhbHVlID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbCk7XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NlbnRlcjogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgd2hldGhlciB0aGUgbGF5b3V0IGVudGVycyBhICd3aW5kb3cnIG1vZGUsIHdoZW4gdGhlIGxheW91dCBjb250ZW50IChpbmNsdWRpbmcgc2lkZWJhcnMgYW5kIGZpeGVkIGhlYWRlcilcbiAgICogYmVjb21lcyBjZW50ZXJlZCBieSB3aWR0aCB3aXRoIGEgbWFyZ2luIGZyb20gdGhlIHRvcCBvZiB0aGUgc2NyZWVuLCBsaWtlIGEgZmxvYXRpbmcgd2luZG93LlxuICAgKiBBdXRvbWF0aWNhbGx5IGVuYWJsZXMgYHdpdGhTY3JvbGxgIG1vZGUsIGFzIGluIHRoZSB3aW5kb3cgbW9kZSBzY3JvbGwgbXVzdCBiZSBpbnNpZGUgdGhlIGxheW91dCBhbmQgY2Fubm90IGJlIG9uXG4gICAqIHdpbmRvdy4gKFRPRE86IGNoZWNrIHRoaXMpXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgd2luZG93TW9kZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLndpbmRvd01vZGVWYWx1ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWwpO1xuICAgIHRoaXMud2l0aFNjcm9sbCA9IHRoaXMud2luZG93TW9kZVZhbHVlO1xuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93aW5kb3dNb2RlOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogRGVmaW5lcyB3aGV0aGVyIHRvIG1vdmUgdGhlIHNjcm9sbGJhcnMgdG8gbGF5b3V0IG9yIGxlYXZlIGl0IGF0IHRoZSBib2R5IGxldmVsLlxuICAgKiBBdXRvbWF0aWNhbGx5IHNldCB0byB0cnVlIHdoZW4gYHdpbmRvd01vZGVgIGlzIGVuYWJsZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgd2l0aFNjcm9sbCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLndpdGhTY3JvbGxWYWx1ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWwpO1xuXG4gICAgLy8gVE9ETzogaXMgdGhpcyB0aGUgYmVzdCB3YXkgb2YgZG9pbmcgaXQ/IGFzIHdlIGRvbid0IGhhdmUgYWNjZXNzIHRvIGJvZHkgZnJvbSB0aGVtZSBzdHlsZXNcbiAgICAvLyBUT0RPOiBhZGQgZTJlIHRlc3RcbiAgICBjb25zdCBib2R5ID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIGlmICh0aGlzLndpdGhTY3JvbGxWYWx1ZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShib2R5LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYm9keSwgJ292ZXJmbG93JywgJ2luaXRpYWwnKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3dpdGhTY3JvbGw6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBSZXN0b3JlcyBzY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSBhZnRlciBuYXZpZ2F0aW9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgcmVzdG9yZVNjcm9sbFRvcCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJlc3RvcmVTY3JvbGxUb3BWYWx1ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWwpO1xuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXN0b3JlU2Nyb2xsVG9wOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvLyBUT0RPIHJlbW92ZSBhcyBvZiA1LjAuMFxuICBAVmlld0NoaWxkKCdsYXlvdXRUb3BEeW5hbWljQXJlYScsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB2ZXJ5VG9wUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbGFibGVDb250YWluZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBzY3JvbGxhYmxlQ29udGFpbmVyUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBAVmlld0NoaWxkKCdsYXlvdXRDb250YWluZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgbGF5b3V0Q29udGFpbmVyUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBwcm90ZWN0ZWQgYWZ0ZXJWaWV3SW5pdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0aGVtZVNlcnZpY2U6IE5iVGhlbWVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzcGlubmVyU2VydmljZTogTmJTcGlubmVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KE5CX1dJTkRPVykgcHJvdGVjdGVkIHdpbmRvdyxcbiAgICBASW5qZWN0KE5CX0RPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBwcm90ZWN0ZWQgbGF5b3V0RGlyZWN0aW9uU2VydmljZTogTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzY3JvbGxTZXJ2aWNlOiBOYkxheW91dFNjcm9sbFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJ1bGVyU2VydmljZTogTmJMYXlvdXRSdWxlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNjcm9sbFRvcDogTmJSZXN0b3JlU2Nyb2xsVG9wSGVscGVyLFxuICAgIHByb3RlY3RlZCBvdmVybGF5Q29udGFpbmVyOiBOYk92ZXJsYXlDb250YWluZXJBZGFwdGVyLFxuICApIHtcbiAgICB0aGlzLnJlZ2lzdGVyQXNPdmVybGF5Q29udGFpbmVyKCk7XG5cbiAgICB0aGlzLnRoZW1lU2VydmljZVxuICAgICAgLm9uVGhlbWVDaGFuZ2UoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgodGhlbWU6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgICAgICBpZiAodGhlbWUucHJldmlvdXMpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksIGBuYi10aGVtZS0ke3RoZW1lLnByZXZpb3VzfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgYG5iLXRoZW1lLSR7dGhlbWUubmFtZX1gKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy50aGVtZVNlcnZpY2VcbiAgICAgIC5vbkFwcGVuZExheW91dENsYXNzKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMudGhlbWVTZXJ2aWNlXG4gICAgICAub25SZW1vdmVMYXlvdXRDbGFzcygpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnNwaW5uZXJTZXJ2aWNlLnJlZ2lzdGVyTG9hZGVyKFxuICAgICAgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgdGhpcy5hZnRlclZpZXdJbml0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChfKSA9PiByZXNvbHZlKCkpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLnNwaW5uZXJTZXJ2aWNlLmxvYWQoKTtcblxuICAgIHRoaXMucnVsZXJTZXJ2aWNlXG4gICAgICAub25HZXREaW1lbnNpb25zKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHsgbGlzdGVuZXIgfSkgPT4ge1xuICAgICAgICBsaXN0ZW5lci5uZXh0KHRoaXMuZ2V0RGltZW5zaW9ucygpKTtcbiAgICAgICAgbGlzdGVuZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zY3JvbGxTZXJ2aWNlXG4gICAgICAub25HZXRQb3NpdGlvbigpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCh7IGxpc3RlbmVyIH0pID0+IHtcbiAgICAgICAgbGlzdGVuZXIubmV4dCh0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCkpO1xuICAgICAgICBsaXN0ZW5lci5jb21wbGV0ZSgpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnNjcm9sbFRvcFxuICAgICAgLnNob3VsZFJlc3RvcmUoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLnJlc3RvcmVTY3JvbGxUb3BWYWx1ZSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbCgwLCAwKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zY3JvbGxTZXJ2aWNlXG4gICAgICAub25TY3JvbGxhYmxlQ2hhbmdlKClcbiAgICAgIC5waXBlKGZpbHRlcigoKSA9PiB0aGlzLndpdGhTY3JvbGxWYWx1ZSksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHNjcm9sbGFibGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluIGNhc2Ugd2hlbiBOZWJ1bGFyIExheW91dCBjdXN0b20gc2Nyb2xsIGB3aXRoU2Nyb2xsYCBtb2RlIGlzIGVuYWJsZWRcbiAgICAgICAgICogd2UgbmVlZCB0byBkaXNhYmxlIGRlZmF1bHQgQ0RLIHNjcm9sbCBibG9ja2VyIChAbGluayBOYkJsb2NrU2Nyb2xsU3RyYXRlZ3lBZGFwdGVyKSBvbiBIVE1MIGVsZW1lbnRcbiAgICAgICAgICogc28gdGhhdCBpdCB3b24ndCBhZGQgYWRkaXRpb25hbCBwb3NpdGlvbmluZy5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChzY3JvbGxhYmxlKSB7XG4gICAgICAgICAgdGhpcy5lbmFibGVTY3JvbGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJsb2NrU2Nyb2xsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIC8vIHRyaWdnZXIgZmlyc3QgdGltZSBzbyB0aGF0IGFmdGVyIHRoZSBjaGFuZ2Ugd2UgaGF2ZSB0aGUgaW5pdGlhbCB2YWx1ZVxuICAgICAgdGhpcy50aGVtZVNlcnZpY2UuY2hhbmdlV2luZG93V2lkdGgodGhpcy53aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMubGF5b3V0RGlyZWN0aW9uU2VydmljZVxuICAgICAgLm9uRGlyZWN0aW9uQ2hhbmdlKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGRpcmVjdGlvbikgPT4gKHRoaXMuZG9jdW1lbnQuZGlyID0gZGlyZWN0aW9uKSk7XG5cbiAgICB0aGlzLnNjcm9sbFNlcnZpY2VcbiAgICAgIC5vbk1hbnVhbFNjcm9sbCgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCh7IHgsIHkgfTogTmJTY3JvbGxQb3NpdGlvbikgPT4gdGhpcy5zY3JvbGwoeCwgeSkpO1xuXG4gICAgdGhpcy5hZnRlclZpZXdJbml0JC5uZXh0KHRydWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMudW5yZWdpc3RlckFzT3ZlcmxheUNvbnRhaW5lcigpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcsIFsnJGV2ZW50J10pXG4gIG9uU2Nyb2xsKCRldmVudCkge1xuICAgIHRoaXMuc2Nyb2xsU2VydmljZS5maXJlU2Nyb2xsQ2hhbmdlKCRldmVudCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLnRoZW1lU2VydmljZS5jaGFuZ2VXaW5kb3dXaWR0aChldmVudC50YXJnZXQuaW5uZXJXaWR0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBzY3JvbGwgYW5kIGNsaWVudCBoZWlnaHQvd2lkdGhcbiAgICpcbiAgICogRGVwZW5kaW5nIG9uIHRoZSBjdXJyZW50IHNjcm9sbCBtb2RlIChgd2l0aFNjcm9sbD10cnVlYCkgcmV0dXJucyBzaXplcyBmcm9tIHRoZSBib2R5IGVsZW1lbnRcbiAgICogb3IgZnJvbSB0aGUgYC5zY3JvbGxhYmxlLWNvbnRhaW5lcmBcbiAgICogQHJldHVybnMge05iTGF5b3V0RGltZW5zaW9uc31cbiAgICovXG4gIGdldERpbWVuc2lvbnMoKTogTmJMYXlvdXREaW1lbnNpb25zIHtcbiAgICBsZXQgY2xpZW50V2lkdGgsXG4gICAgICBjbGllbnRIZWlnaHQsXG4gICAgICBzY3JvbGxXaWR0aCxcbiAgICAgIHNjcm9sbEhlaWdodCA9IDA7XG4gICAgaWYgKHRoaXMud2l0aFNjcm9sbFZhbHVlKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnNjcm9sbGFibGVDb250YWluZXJSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIGNsaWVudFdpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgY2xpZW50SGVpZ2h0ID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICAgIHNjcm9sbFdpZHRoID0gY29udGFpbmVyLnNjcm9sbFdpZHRoO1xuICAgICAgc2Nyb2xsSGVpZ2h0ID0gY29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBkb2N1bWVudEVsZW1lbnQsIGJvZHkgfSA9IHRoaXMuZG9jdW1lbnQ7XG4gICAgICBjbGllbnRXaWR0aCA9IGRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBib2R5LmNsaWVudFdpZHRoO1xuICAgICAgY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodDtcbiAgICAgIHNjcm9sbFdpZHRoID0gZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIHx8IGJvZHkuc2Nyb2xsV2lkdGg7XG4gICAgICBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IGJvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjbGllbnRXaWR0aCxcbiAgICAgIGNsaWVudEhlaWdodCxcbiAgICAgIHNjcm9sbFdpZHRoLFxuICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBzY3JvbGwgcG9zaXRpb24gb2YgY3VycmVudCBzY3JvbGwgY29udGFpbmVyLlxuICAgKlxuICAgKiBJZiBgd2l0aFNjcm9sbGAgPSB0cnVlLCByZXR1cm5zIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgYC5zY3JvbGxhYmxlLWNvbnRhaW5lcmAgZWxlbWVudCxcbiAgICogb3RoZXJ3aXNlIC0gb2YgdGhlIHNjcm9sbGFibGUgZWxlbWVudCBvZiB0aGUgd2luZG93ICh3aGljaCBtYXkgYmUgZGlmZmVyZW50IGRlcGVuZGluZyBvZiBhIGJyb3dzZXIpXG4gICAqXG4gICAqIEByZXR1cm5zIHtOYlNjcm9sbFBvc2l0aW9ufVxuICAgKi9cbiAgZ2V0U2Nyb2xsUG9zaXRpb24oKTogTmJTY3JvbGxQb3NpdGlvbiB7XG4gICAgaWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMud2l0aFNjcm9sbFZhbHVlKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnNjcm9sbGFibGVDb250YWluZXJSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHJldHVybiB7IHg6IGNvbnRhaW5lci5zY3JvbGxMZWZ0LCB5OiBjb250YWluZXIuc2Nyb2xsVG9wIH07XG4gICAgfVxuXG4gICAgY29uc3QgZG9jdW1lbnRSZWN0ID0gdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCB4ID1cbiAgICAgIC1kb2N1bWVudFJlY3QubGVmdCB8fFxuICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHxcbiAgICAgIHRoaXMud2luZG93LnNjcm9sbFggfHxcbiAgICAgIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHxcbiAgICAgIDA7XG5cbiAgICBjb25zdCB5ID1cbiAgICAgIC1kb2N1bWVudFJlY3QudG9wIHx8XG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8XG4gICAgICB0aGlzLndpbmRvdy5zY3JvbGxZIHx8XG4gICAgICB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHxcbiAgICAgIDA7XG5cbiAgICByZXR1cm4geyB4LCB5IH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVnaXN0ZXJBc092ZXJsYXlDb250YWluZXIoKSB7XG4gICAgaWYgKHRoaXMub3ZlcmxheUNvbnRhaW5lci5zZXRDb250YWluZXIpIHtcbiAgICAgIHRoaXMub3ZlcmxheUNvbnRhaW5lci5zZXRDb250YWluZXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB1bnJlZ2lzdGVyQXNPdmVybGF5Q29udGFpbmVyKCkge1xuICAgIGlmICh0aGlzLm92ZXJsYXlDb250YWluZXIuY2xlYXJDb250YWluZXIpIHtcbiAgICAgIHRoaXMub3ZlcmxheUNvbnRhaW5lci5jbGVhckNvbnRhaW5lcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsKHg6IG51bWJlciA9IG51bGwsIHk6IG51bWJlciA9IG51bGwpIHtcbiAgICBjb25zdCB7IHg6IGN1cnJlbnRYLCB5OiBjdXJyZW50WSB9ID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIHggPSB4ID09IG51bGwgPyBjdXJyZW50WCA6IHg7XG4gICAgeSA9IHkgPT0gbnVsbCA/IGN1cnJlbnRZIDogeTtcblxuICAgIGlmICghaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy53aXRoU2Nyb2xsVmFsdWUpIHtcbiAgICAgIGNvbnN0IHNjcm9sbGFibGUgPSB0aGlzLnNjcm9sbGFibGVDb250YWluZXJSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmIChzY3JvbGxhYmxlLnNjcm9sbFRvKSB7XG4gICAgICAgIHNjcm9sbGFibGUuc2Nyb2xsVG8oeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxhYmxlLnNjcm9sbExlZnQgPSB4O1xuICAgICAgICBzY3JvbGxhYmxlLnNjcm9sbFRvcCA9IHk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2luZG93LnNjcm9sbFRvKHgsIHkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRPRE86IEV4dHJhY3QgaW50byBibG9jayBzY3JvbGwgc3RyYXRlZ3lcbiAgcHJvdGVjdGVkIGJsb2NrU2Nyb2xsKCkge1xuICAgIGlmICh0aGlzLmlzU2Nyb2xsQmxvY2tlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNTY3JvbGxCbG9ja2VkID0gdHJ1ZTtcblxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMuc2Nyb2xsQmxvY2tDbGFzcyk7XG5cbiAgICBjb25zdCBzY3JvbGxhYmxlQ29udGFpbmVyRWxlbWVudCA9IHRoaXMuc2Nyb2xsYWJsZUNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGxheW91dEVsZW1lbnQgPSB0aGlzLmxheW91dENvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgY29uc3QgbGF5b3V0V2l0aFNjcm9sbFdpZHRoID0gbGF5b3V0RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICB0aGlzLnNjcm9sbGFibGVDb250YWluZXJPdmVyZmxvd09sZFZhbHVlID0gc2Nyb2xsYWJsZUNvbnRhaW5lckVsZW1lbnQuc3R5bGUub3ZlcmZsb3c7XG4gICAgc2Nyb2xsYWJsZUNvbnRhaW5lckVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBjb25zdCBsYXlvdXRXaXRob3V0U2Nyb2xsV2lkdGggPSBsYXlvdXRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gbGF5b3V0V2l0aG91dFNjcm9sbFdpZHRoIC0gbGF5b3V0V2l0aFNjcm9sbFdpZHRoO1xuXG4gICAgaWYgKCFzY3JvbGxXaWR0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubGF5b3V0UGFkZGluZ09sZFZhbHVlID0ge1xuICAgICAgbGVmdDogbGF5b3V0RWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCxcbiAgICAgIHJpZ2h0OiBsYXlvdXRFbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMubGF5b3V0RGlyZWN0aW9uU2VydmljZS5pc0x0cigpKSB7XG4gICAgICBsYXlvdXRFbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3Njcm9sbFdpZHRofXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5b3V0RWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3Njcm9sbFdpZHRofXB4YDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVuYWJsZVNjcm9sbCgpIHtcbiAgICBpZiAodGhpcy5pc1Njcm9sbEJsb2NrZWQpIHtcbiAgICAgIHRoaXMuaXNTY3JvbGxCbG9ja2VkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMuc2Nyb2xsQmxvY2tDbGFzcyk7XG4gICAgICB0aGlzLnNjcm9sbGFibGVDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IHRoaXMuc2Nyb2xsYWJsZUNvbnRhaW5lck92ZXJmbG93T2xkVmFsdWU7XG5cbiAgICAgIGlmICh0aGlzLmxheW91dFBhZGRpbmdPbGRWYWx1ZSkge1xuICAgICAgICBjb25zdCBsYXlvdXRFbGVtZW50ID0gdGhpcy5sYXlvdXRDb250YWluZXJSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGF5b3V0RWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IHRoaXMubGF5b3V0UGFkZGluZ09sZFZhbHVlLmxlZnQ7XG4gICAgICAgIGxheW91dEVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5sYXlvdXRQYWRkaW5nT2xkVmFsdWUucmlnaHQ7XG4gICAgICAgIHRoaXMubGF5b3V0UGFkZGluZ09sZFZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIGNvbnRhaW5lciBjb21wb25lbnQgd2hpY2ggZGV0ZXJtaW5lcyBhIGNvbnRlbnQgcG9zaXRpb24gaW5zaWRlIG9mIHRoZSBsYXlvdXQuXG4gKiBUaGUgbGF5b3V0IGNvdWxkIGNvbnRhaW4gdW5saW1pdGVkIGNvbHVtbnMgKG5vdCBpbmNsdWRpbmcgdGhlIHNpZGViYXJzKS5cbiAqXG4gKiBCeSBkZWZhdWx0IHRoZSBjb2x1bW5zIGFyZSBvcmRlcmVkIGZyb20gdGhlIGxlZnQgdG8gdGhlIHJpZ2h0LFxuICogYnV0IGl0J3MgYWxzbyBwb3NzaWJsZSB0byBvdmVyd3JpdGUgdGhpcyBiZWhhdmlvciBieSBzZXR0aW5nIGEgYGxlZnRgIGF0dHJpYnV0ZSB0byB0aGUgY29sdW1uLFxuICogbW92aW5nIGl0IHRvIHRoZSB2ZXJ5IGZpcnN0IHBvc2l0aW9uOlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoQ29sdW1uIExlZnQsIGxheW91dC9sYXlvdXQtY29sdW1uLWxlZnQuY29tcG9uZW50KVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1sYXlvdXQtY29sdW1uJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgTmJMYXlvdXRDb2x1bW5Db21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxlZnQnKSBsZWZ0VmFsdWU6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhcnQnKSBzdGFydFZhbHVlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNb3ZlIHRoZSBjb2x1bW4gdG8gdGhlIHZlcnkgbGVmdCBwb3NpdGlvbiBpbiB0aGUgbGF5b3V0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGxlZnQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5sZWZ0VmFsdWUgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsKTtcbiAgICB0aGlzLnN0YXJ0VmFsdWUgPSBmYWxzZTtcbiAgfVxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGVmdDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIE1ha2UgY29sdW1uIGZpcnN0IGluIHRoZSBsYXlvdXQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgc3RhcnQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5zdGFydFZhbHVlID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbCk7XG4gICAgdGhpcy5sZWZ0VmFsdWUgPSBmYWxzZTtcbiAgfVxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RhcnQ6IE5iQm9vbGVhbklucHV0O1xufVxuXG4vKipcbiAqIFBhZ2UgaGVhZGVyIGNvbXBvbmVudC5cbiAqIExvY2F0ZWQgb24gdG9wIG9mIHRoZSBwYWdlIGFib3ZlIHRoZSBsYXlvdXQgY29sdW1ucyBhbmQgc2lkZWJhcnMuXG4gKiBDb3VsZCBiZSBtYWRlIGBmaXhlZGAgYnkgc2V0dGluZyB0aGUgY29ycmVzcG9uZGluZyBwcm9wZXJ0eS4gSW4gdGhlIGZpeGVkIG1vZGUgdGhlIGhlYWRlciBiZWNvbWVzXG4gKiBzdGlja3kgdG8gdGhlIHRvcCBvZiB0aGUgbmItbGF5b3V0ICh0byBvZiB0aGUgcGFnZSkuIEhlcmUncyBhbiBleGFtcGxlOlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoRml4ZWQgSGVhZGVyLCBsYXlvdXQvbGF5b3V0LWZpeGVkLWhlYWRlci5jb21wb25lbnQpXG4gKlxuICogSW4gYSBwYWlyIHdpdGggc2lkZWJhciBpdCBpcyBwb3NzaWJsZSB0byBzZXR1cCBhIGNvbmZpZ3VyYXRpb24gd2hlbiBoZWFkZXIgaXMgcGxhY2VkIG9uIGEgc2lkZSBvZiB0aGUgc2lkZWJhclxuICogYW5kIG5vdCBvbiB0b3Agb2YgaXQuIFRvIGFjaGlldmUgdGhpcyBzaW1wbHkgcHV0IGEgYHN1YmhlYWRlcmAgcHJvcGVydHkgdG8gdGhlIGhlYWRlciBsaWtlIHRoaXM6XG4gKiBgYGBodG1sXG4gKiA8bmItbGF5b3V0LWhlYWRlciBzdWJoZWFkZXI+PC9uYi1sYXlvdXQtaGVhZGVyPlxuICogYGBgXG4gKiBAc3RhY2tlZC1leGFtcGxlKFN1YmhlYWRlciwgbGF5b3V0L2xheW91dC1zaWRlYmFyLXN1YmhlYWRlci5jb21wb25lbnQpXG4gKiBOb3RlIHRoYXQgaW4gc3VjaCBjb25maWd1cmF0aW9uIHNpZGViYXIgc2hhZG93IGlzIHJlbW92ZWQgYW5kIGhlYWRlciBjYW5ub3QgYmUgbWFrZSBgZml4ZWRgLlxuICpcbiAqIFNhbWUgd2F5IHlvdSBjYW4gcHV0IGJvdGggYGZpeGVkYCBhbmQgYGNsaXBwZWRgIGhlYWRlcnMgYWRkaW5nIGNyZWF0aW5nIGEgc3ViLWhlYWRlciBmb3IgeW91ciBhcHA6XG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShTdWJoZWFkZXIsIGxheW91dC9sYXlvdXQtc3ViaGVhZGVyLmNvbXBvbmVudClcbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogaGVhZGVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBoZWFkZXItdGV4dC1jb2xvcjpcbiAqIGhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OlxuICogaGVhZGVyLXRleHQtZm9udC1zaXplOlxuICogaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6XG4gKiBoZWFkZXItdGV4dC1saW5lLWhlaWdodDpcbiAqIGhlYWRlci1oZWlnaHQ6XG4gKiBoZWFkZXItcGFkZGluZzpcbiAqIGhlYWRlci1zaGFkb3c6XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWxheW91dC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYXYgW2NsYXNzLmZpeGVkXT1cImZpeGVkVmFsdWVcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25hdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmJMYXlvdXRIZWFkZXJDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpeGVkJykgZml4ZWRWYWx1ZTogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdWJoZWFkZXInKSBzdWJoZWFkZXJWYWx1ZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxheW91dDogTmJMYXlvdXRDb21wb25lbnQpIHt9XG5cbiAgLyoqXG4gICAqIE1ha2VzIHRoZSBoZWFkZXIgc3RpY2t5IHRvIHRoZSB0b3Agb2YgdGhlIG5iLWxheW91dC5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWxcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBmaXhlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpeGVkVmFsdWUgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsKTtcbiAgfVxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZml4ZWQ6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBQbGFjZXMgaGVhZGVyIG9uIGEgc2lkZSBvZiB0aGUgc2lkZWJhciwgYW5kIG5vdCBhYm92ZS5cbiAgICogRGlzYWJsZXMgZml4ZWQgbW9kZSBmb3IgdGhpcyBoZWFkZXIgYW5kIHJlbW92ZSBhIHNoYWRvdyBmcm9tIHRoZSBzaWRlYmFyLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHN1YmhlYWRlcih2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnN1YmhlYWRlclZhbHVlID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbCk7XG4gICAgdGhpcy5maXhlZFZhbHVlID0gZmFsc2U7XG4gICAgdGhpcy5sYXlvdXQud2l0aFN1YmhlYWRlciA9IHRoaXMuc3ViaGVhZGVyVmFsdWU7XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1YmhlYWRlcjogTmJCb29sZWFuSW5wdXQ7XG59XG5cbi8qKlxuICogUGFnZSBmb290ZXIuXG4gKiBMb2NhdGVkIHVuZGVyIHRoZSBuYi1sYXlvdXQgY29udGVudCAoc3BlY2lmaWNhbGx5LCB1bmRlciB0aGUgY29sdW1ucykuXG4gKiBDb3VsZCBiZSBtYWRlIGBmaXhlZGAsIGJlY29taW5nIHN0aWNreSB0byB0aGUgYm90dG9tIG9mIHRoZSB2aWV3IHBvcnQgKHdpbmRvdykuXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIGZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogZm9vdGVyLXRleHQtY29sb3I6XG4gKiBmb290ZXItdGV4dC1mb250LWZhbWlseTpcbiAqIGZvb3Rlci10ZXh0LWZvbnQtc2l6ZTpcbiAqIGZvb3Rlci10ZXh0LWZvbnQtd2VpZ2h0OlxuICogZm9vdGVyLXRleHQtbGluZS1oZWlnaHQ6XG4gKiBmb290ZXItdGV4dC1oaWdobGlnaHQtY29sb3I6XG4gKiBmb290ZXItaGVpZ2h0OlxuICogZm9vdGVyLXBhZGRpbmc6XG4gKiBmb290ZXItZGl2aWRlci1jb2xvcjpcbiAqIGZvb3Rlci1kaXZpZGVyLXN0eWxlOlxuICogZm9vdGVyLWRpdmlkZXItd2lkdGg6XG4gKiBmb290ZXItc2hhZG93OlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1sYXlvdXQtZm9vdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmF2IFtjbGFzcy5maXhlZF09XCJmaXhlZFZhbHVlXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9uYXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5iTGF5b3V0Rm9vdGVyQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maXhlZCcpIGZpeGVkVmFsdWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1ha2VzIHRoZSBmb290ZXIgc3RpY2t5IHRvIHRoZSBib3R0b20gb2YgdGhlIHdpbmRvdy5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWxcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBmaXhlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpeGVkVmFsdWUgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsKTtcbiAgfVxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZml4ZWQ6IE5iQm9vbGVhbklucHV0O1xufVxuIl19