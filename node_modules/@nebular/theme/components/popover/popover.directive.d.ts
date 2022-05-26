/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { NbDynamicOverlay, NbDynamicOverlayController } from '../cdk/overlay/dynamic/dynamic-overlay';
import { NbDynamicOverlayHandler } from '../cdk/overlay/dynamic/dynamic-overlay-handler';
import { NbAdjustment, NbPosition, NbPositionValues, NbAdjustmentValues } from '../cdk/overlay/overlay-position';
import { NbOverlayContent } from '../cdk/overlay/overlay-service';
import { NbTrigger, NbTriggerValues } from '../cdk/overlay/overlay-trigger';
import { NbOverlayConfig } from '../cdk/overlay/mapping';
import { NbPopoverComponent } from './popover.component';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Powerful popover directive, which provides the best UX for your users.
 *
 * @stacked-example(Showcase, popover/popover-showcase.component)
 *
 * Popover can accept different content such as:
 * TemplateRef
 *
 * ```html
 * <button [nbPopover]="templateRef"></button>
 * <ng-template #templateRef>
 *   <span>Hello, Popover!</span>
 * </ng-template>
 * ```
 * ### Installation
 *
 * Import `NbPopoverModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbPopoverModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Custom components
 *
 * ```html
 * <button [nbPopover]="MyPopoverComponent"></button>
 * ```
 *
 * Both custom components and templateRef popovers can receive *contentContext* property
 * that will be passed to the content props.
 *
 * Primitive types
 *
 * ```html
 * <button nbPopover="Hello, Popover!"></button>
 * ```
 *
 * Popover has different placements, such as: top, bottom, left, right, start and end
 * which can be used as following:
 *
 * @stacked-example(Placements, popover/popover-placements.component)
 *
 * By default popover will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the popover container.
 * If you want to disable this behaviour set it `noop`.
 *
 * ```html
 * <button nbPopover="Hello, Popover!" nbPopoverAdjustment="noop"></button>
 * ```
 *
 * Popover has a number of triggers which provides an ability to show and hide the component in different ways:
 *
 * - Click mode shows the component when a user clicks on the host element and hides when the user clicks
 * somewhere on the document outside the component.
 * - Hint provides capability to show the component when the user hovers over the host element
 * and hide when the user hovers out of the host.
 * - Hover works like hint mode with one exception - when the user moves mouse from host element to
 * the container element the component remains open, so that it is possible to interact with it content.
 * - Focus mode is applied when user focuses the element.
 * - Noop mode - the component won't react to the user interaction.
 *
 * @stacked-example(Available Triggers, popover/popover-modes.component.html)
 *
 * Noop mode is especially useful when you need to control Popover programmatically, for example show/hide
 * as a result of some third-party action, like HTTP request or validation check:
 *
 * @stacked-example(Manual Control, popover/popover-noop.component)
 *
 * Below are examples for manual popover settings control, both via template binding and code.
 * @stacked-example(Popover Settings, popover/popover-dynamic.component)
 *
 * Please note, while manipulating Popover setting via code, you need to call `rebuild()` method to apply the settings
 * changed.
 * @stacked-example(Popover Settings Code, popover/popover-dynamic-code.component)
 *
 * @additional-example(Template Ref, popover/popover-template-ref.component)
 * @additional-example(Custom Component, popover/popover-custom-component.component)
 * */
export declare class NbPopoverDirective implements NbDynamicOverlayController, OnChanges, AfterViewInit, OnDestroy, OnInit {
    protected hostRef: ElementRef;
    protected dynamicOverlayHandler: NbDynamicOverlayHandler;
    protected popoverComponent: typeof NbPopoverComponent;
    protected dynamicOverlay: NbDynamicOverlay;
    protected destroy$: Subject<void>;
    /**
     * Popover content which will be rendered in NbArrowedOverlayContainerComponent.
     * Available content: template ref, component and any primitive.
     * */
    content: NbOverlayContent;
    /**
     * Container content context. Will be applied to the rendered component.
     * */
    context: Object;
    /**
     * Position will be calculated relatively host element based on the position.
     * Can be top, right, bottom, left, start or end.
     * */
    position: NbPosition;
    static ngAcceptInputType_position: NbPositionValues;
    /**
     * Container position will be changes automatically based on this strategy if container can't fit view port.
     * Set this property to `noop` value if you want to disable automatically adjustment.
     * Available values: `clockwise` (default), `counterclockwise`, `vertical`, `horizontal`, `noop`.
     * */
    get adjustment(): NbAdjustment;
    set adjustment(value: NbAdjustment);
    protected _adjustment: NbAdjustment;
    static ngAcceptInputType_adjustment: NbAdjustmentValues;
    /**
     * Describes when the container will be shown.
     * Available options: `click`, `hover`, `hint`, `focus` and `noop`
     * */
    trigger: NbTrigger;
    static ngAcceptInputType_trigger: NbTriggerValues;
    /**
     * Sets popover offset
     * */
    offset: number;
    /** Disables the display of the tooltip. */
    disabled: boolean;
    get popoverClass(): string;
    set popoverClass(value: string);
    _popoverClass: string;
    nbPopoverShowStateChange: EventEmitter<{
        isShown: boolean;
    }>;
    protected overlayConfig: NbOverlayConfig;
    get isShown(): boolean;
    constructor(hostRef: ElementRef, dynamicOverlayHandler: NbDynamicOverlayHandler);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    rebuild(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    ngOnDestroy(): void;
    protected configureDynamicOverlay(): NbDynamicOverlayHandler;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPopoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbPopoverDirective, "[nbPopover]", ["nbPopover"], { "content": "nbPopover"; "context": "nbPopoverContext"; "position": "nbPopoverPlacement"; "adjustment": "nbPopoverAdjustment"; "trigger": "nbPopoverTrigger"; "offset": "nbPopoverOffset"; "disabled": "nbTooltipDisabled"; "popoverClass": "nbPopoverClass"; }, { "nbPopoverShowStateChange": "nbPopoverShowStateChange"; }, never>;
}
