/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NbBooleanInput } from '../helpers';
import { NbThemeService } from '../../services/theme.service';
import { NbSidebarService } from './sidebar.service';
import * as i0 from "@angular/core";
export declare type NbSidebarState = 'expanded' | 'collapsed' | 'compacted';
export declare type NbSidebarResponsiveState = 'mobile' | 'tablet' | 'pc';
/**
 * Sidebar header container.
 *
 * Placeholder which contains a sidebar header content,
 * placed at the very top of the sidebar outside of the scroll area.
 */
export declare class NbSidebarHeaderComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSidebarHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSidebarHeaderComponent, "nb-sidebar-header", never, {}, {}, never, ["*"]>;
}
/**
 * Sidebar footer container.
 *
 * Placeholder which contains a sidebar footer content,
 * placed at the very bottom of the sidebar outside of the scroll area.
 */
export declare class NbSidebarFooterComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSidebarFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSidebarFooterComponent, "nb-sidebar-footer", never, {}, {}, never, ["*"]>;
}
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
export declare class NbSidebarComponent implements OnInit, OnDestroy {
    private sidebarService;
    private themeService;
    private element;
    private cd;
    protected readonly responsiveValueChange$: Subject<boolean>;
    protected responsiveState: NbSidebarResponsiveState;
    protected destroy$: Subject<void>;
    containerFixedValue: boolean;
    fixedValue: boolean;
    rightValue: boolean;
    leftValue: boolean;
    startValue: boolean;
    endValue: boolean;
    get expanded(): boolean;
    get collapsed(): boolean;
    get compacted(): boolean;
    /**
     * Places sidebar on the right side
     * @type {boolean}
     */
    set right(val: boolean);
    static ngAcceptInputType_right: NbBooleanInput;
    /**
     * Places sidebar on the left side
     * @type {boolean}
     */
    set left(val: boolean);
    static ngAcceptInputType_left: NbBooleanInput;
    /**
     * Places sidebar on the start edge of layout
     * @type {boolean}
     */
    set start(val: boolean);
    static ngAcceptInputType_start: NbBooleanInput;
    /**
     * Places sidebar on the end edge of layout
     * @type {boolean}
     */
    set end(val: boolean);
    static ngAcceptInputType_end: NbBooleanInput;
    /**
     * Makes sidebar fixed (shown above the layout content)
     * @type {boolean}
     */
    set fixed(val: boolean);
    static ngAcceptInputType_fixed: NbBooleanInput;
    /**
     * Makes sidebar container fixed
     * @type {boolean}
     */
    set containerFixed(val: boolean);
    static ngAcceptInputType_containerFixed: NbBooleanInput;
    /**
     * Initial sidebar state, `expanded`|`collapsed`|`compacted`
     * @type {string}
     */
    get state(): NbSidebarState;
    set state(value: NbSidebarState);
    protected _state: NbSidebarState;
    /**
     * Makes sidebar listen to media query events and change its behaviour
     * @type {boolean}
     */
    get responsive(): boolean;
    set responsive(value: boolean);
    protected _responsive: boolean;
    static ngAcceptInputType_responsive: NbBooleanInput;
    /**
     * Tags a sidebar with some ID, can be later used in the sidebar service
     * to determine which sidebar triggered the action, if multiple sidebars exist on the page.
     *
     * @type {string}
     */
    tag: string;
    /**
     * Controls on which screen sizes sidebar should be switched to compacted state.
     * Works only when responsive mode is on.
     * Default values are `['xs', 'is', 'sm', 'md', 'lg']`.
     *
     * @type string[]
     */
    compactedBreakpoints: string[];
    /**
     * Controls on which screen sizes sidebar should be switched to collapsed state.
     * Works only when responsive mode is on.
     * Default values are `['xs', 'is']`.
     *
     * @type string[]
     */
    collapsedBreakpoints: string[];
    /**
     * Emits whenever sidebar state change.
     */
    readonly stateChange: EventEmitter<NbSidebarState>;
    /**
     * Emits whenever sidebar responsive state change.
     */
    readonly responsiveStateChange: EventEmitter<NbSidebarResponsiveState>;
    constructor(sidebarService: NbSidebarService, themeService: NbThemeService, element: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(event: any): void;
    /**
     * Collapses the sidebar
     */
    collapse(): void;
    /**
     * Expands the sidebar
     */
    expand(): void;
    /**
     * Compacts the sidebar (minimizes)
     */
    compact(): void;
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
    toggle(compact?: boolean): void;
    protected subscribeToMediaQueryChange(): void;
    protected getMenuLink(element: HTMLElement): HTMLElement | undefined;
    protected updateState(state: NbSidebarState): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSidebarComponent, "nb-sidebar", never, { "right": "right"; "left": "left"; "start": "start"; "end": "end"; "fixed": "fixed"; "containerFixed": "containerFixed"; "state": "state"; "responsive": "responsive"; "tag": "tag"; "compactedBreakpoints": "compactedBreakpoints"; "collapsedBreakpoints": "collapsedBreakpoints"; }, { "stateChange": "stateChange"; "responsiveStateChange": "responsiveStateChange"; }, never, ["nb-sidebar-header", "*", "nb-sidebar-footer"]>;
}
