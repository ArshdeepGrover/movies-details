/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { AfterViewInit, ElementRef, OnDestroy, Renderer2, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NbBooleanInput } from '../helpers';
import { NbThemeService } from '../../services/theme.service';
import { NbSpinnerService } from '../../services/spinner.service';
import { NbLayoutDirectionService } from '../../services/direction.service';
import { NbRestoreScrollTopHelper } from './restore-scroll-top.service';
import { NbScrollPosition, NbLayoutScrollService } from '../../services/scroll.service';
import { NbLayoutDimensions, NbLayoutRulerService } from '../../services/ruler.service';
import { NbOverlayContainerAdapter } from '../cdk/adapter/overlay-container-adapter';
import * as i0 from "@angular/core";
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
export declare class NbLayoutComponent implements AfterViewInit, OnDestroy {
    protected themeService: NbThemeService;
    protected spinnerService: NbSpinnerService;
    protected elementRef: ElementRef;
    protected renderer: Renderer2;
    protected window: any;
    protected document: any;
    protected platformId: Object;
    protected layoutDirectionService: NbLayoutDirectionService;
    protected scrollService: NbLayoutScrollService;
    protected rulerService: NbLayoutRulerService;
    protected scrollTop: NbRestoreScrollTopHelper;
    protected overlayContainer: NbOverlayContainerAdapter;
    protected scrollBlockClass: string;
    protected isScrollBlocked: boolean;
    protected scrollableContainerOverflowOldValue: string;
    protected layoutPaddingOldValue: {
        left: string;
        right: string;
    };
    centerValue: boolean;
    restoreScrollTopValue: boolean;
    windowModeValue: boolean;
    withScrollValue: boolean;
    withSubheader: boolean;
    /**
     * Defines whether the layout columns will be centered after some width
     * @param {boolean} val
     */
    set center(val: boolean);
    static ngAcceptInputType_center: NbBooleanInput;
    /**
     * Defines whether the layout enters a 'window' mode, when the layout content (including sidebars and fixed header)
     * becomes centered by width with a margin from the top of the screen, like a floating window.
     * Automatically enables `withScroll` mode, as in the window mode scroll must be inside the layout and cannot be on
     * window. (TODO: check this)
     * @param {boolean} val
     */
    set windowMode(val: boolean);
    static ngAcceptInputType_windowMode: NbBooleanInput;
    /**
     * Defines whether to move the scrollbars to layout or leave it at the body level.
     * Automatically set to true when `windowMode` is enabled.
     * @param {boolean} val
     */
    set withScroll(val: boolean);
    static ngAcceptInputType_withScroll: NbBooleanInput;
    /**
     * Restores scroll to the top of the page after navigation
     * @param {boolean} val
     */
    set restoreScrollTop(val: boolean);
    static ngAcceptInputType_restoreScrollTop: NbBooleanInput;
    veryTopRef: ViewContainerRef;
    scrollableContainerRef: ElementRef<HTMLElement>;
    layoutContainerRef: ElementRef<HTMLElement>;
    protected afterViewInit$: BehaviorSubject<any>;
    private destroy$;
    constructor(themeService: NbThemeService, spinnerService: NbSpinnerService, elementRef: ElementRef, renderer: Renderer2, window: any, document: any, platformId: Object, layoutDirectionService: NbLayoutDirectionService, scrollService: NbLayoutScrollService, rulerService: NbLayoutRulerService, scrollTop: NbRestoreScrollTopHelper, overlayContainer: NbOverlayContainerAdapter);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onScroll($event: any): void;
    onResize(event: any): void;
    /**
     * Returns scroll and client height/width
     *
     * Depending on the current scroll mode (`withScroll=true`) returns sizes from the body element
     * or from the `.scrollable-container`
     * @returns {NbLayoutDimensions}
     */
    getDimensions(): NbLayoutDimensions;
    /**
     * Returns scroll position of current scroll container.
     *
     * If `withScroll` = true, returns scroll position of the `.scrollable-container` element,
     * otherwise - of the scrollable element of the window (which may be different depending of a browser)
     *
     * @returns {NbScrollPosition}
     */
    getScrollPosition(): NbScrollPosition;
    protected registerAsOverlayContainer(): void;
    protected unregisterAsOverlayContainer(): void;
    private scroll;
    protected blockScroll(): void;
    private enableScroll;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbLayoutComponent, "nb-layout", never, { "center": "center"; "windowMode": "windowMode"; "withScroll": "withScroll"; "restoreScrollTop": "restoreScrollTop"; }, {}, never, ["nb-layout-header:not([subheader])", "nb-sidebar", "nb-layout-header[subheader]", "nb-layout-column", "nb-layout-footer"]>;
}
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
export declare class NbLayoutColumnComponent {
    leftValue: boolean;
    startValue: boolean;
    /**
     * Move the column to the very left position in the layout.
     * @param {boolean} val
     */
    set left(val: boolean);
    static ngAcceptInputType_left: NbBooleanInput;
    /**
     * Make column first in the layout.
     * @param {boolean} val
     */
    set start(val: boolean);
    static ngAcceptInputType_start: NbBooleanInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLayoutColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbLayoutColumnComponent, "nb-layout-column", never, { "left": "left"; "start": "start"; }, {}, never, ["*"]>;
}
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
export declare class NbLayoutHeaderComponent {
    private layout;
    fixedValue: boolean;
    subheaderValue: boolean;
    constructor(layout: NbLayoutComponent);
    /**
     * Makes the header sticky to the top of the nb-layout.
     * @param {boolean} val
     */
    set fixed(val: boolean);
    static ngAcceptInputType_fixed: NbBooleanInput;
    /**
     * Places header on a side of the sidebar, and not above.
     * Disables fixed mode for this header and remove a shadow from the sidebar.
     * @param {boolean} val
     */
    set subheader(val: boolean);
    static ngAcceptInputType_subheader: NbBooleanInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLayoutHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbLayoutHeaderComponent, "nb-layout-header", never, { "fixed": "fixed"; "subheader": "subheader"; }, {}, never, ["*"]>;
}
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
export declare class NbLayoutFooterComponent {
    fixedValue: boolean;
    /**
     * Makes the footer sticky to the bottom of the window.
     * @param {boolean} val
     */
    set fixed(val: boolean);
    static ngAcceptInputType_fixed: NbBooleanInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLayoutFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbLayoutFooterComponent, "nb-layout-footer", never, { "fixed": "fixed"; }, {}, never, ["*"]>;
}
