import { AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbAdjustment, NbPosition, NbPositionValues, NbAdjustmentValues } from '../cdk/overlay/overlay-position';
import { NbTrigger } from '../cdk/overlay/overlay-trigger';
import { NbDynamicOverlay } from '../cdk/overlay/dynamic/dynamic-overlay';
import { NbDynamicOverlayHandler } from '../cdk/overlay/dynamic/dynamic-overlay-handler';
import { NbOverlayConfig } from '../cdk/overlay/mapping';
import { NbTooltipComponent } from './tooltip.component';
import { NbIconConfig } from '../icon/icon.component';
import * as i0 from "@angular/core";
/**
 *
 * Tooltip directive for small text/icon hints.
 *
 * ### Installation
 *
 * Import `NbTooltipModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTooltipModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * @stacked-example(Showcase, tooltip/tooltip-showcase.component)
 *
 * Tooltip can accept a hint text and/or an icon:
 * @stacked-example(With Icon, tooltip/tooltip-with-icon.component)
 *
 * Same way as Popover, tooltip can accept placement position with `nbTooltipPlacement` property:
 * @stacked-example(Placements, tooltip/tooltip-placements.component)
 *
 * It is also possible to specify tooltip color using `nbTooltipStatus` property:
 * @stacked-example(Colored Tooltips, tooltip/tooltip-colors.component)
 *
 * Tooltip has a number of triggers which provides an ability to show and hide the component in different ways:
 *
 * - Click mode shows the component when a user clicks on the host element and hides when the user clicks
 * somewhere on the document outside the component.
 * - Hint provides capability to show the component when the user hovers over the host element
 * and hide when the user hovers out of the host.
 * - Hover works like hint mode with one exception - when the user moves mouse from host element to
 * the container element the component remains open, so that it is possible to interact with it content.
 * - Focus mode is applied when user focuses the element.
 * - Noop mode - the component won't react to the user interaction.
 */
export declare class NbTooltipDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    protected hostRef: ElementRef;
    protected dynamicOverlayHandler: NbDynamicOverlayHandler;
    protected destroy$: Subject<void>;
    protected tooltipComponent: typeof NbTooltipComponent;
    protected dynamicOverlay: NbDynamicOverlay;
    context: Object;
    /**
     * Tooltip message
     */
    content: string;
    /**
     * Position will be calculated relatively host element based on the position.
     * Can be top, right, bottom, left, start or end.
     */
    position: NbPosition;
    static ngAcceptInputType_position: NbPositionValues;
    /**
     * Container position will change automatically based on this strategy if container can't fit view port.
     * Set this property to `noop` value if you want to disable automatic adjustment.
     * Available values: `clockwise` (default), `counterclockwise`, `vertical`, `horizontal`, `noop`.
     */
    get adjustment(): NbAdjustment;
    set adjustment(value: NbAdjustment);
    protected _adjustment: NbAdjustment;
    static ngAcceptInputType_adjustment: NbAdjustmentValues;
    get tooltipClass(): string;
    set tooltipClass(value: string);
    _tooltipClass: string;
    /**
     * Accepts icon name or icon config object
     * @param {string | NbIconConfig} icon name or config object
     */
    set icon(icon: string | NbIconConfig);
    /**
     *
     * @param {string} status
     */
    set status(status: NbComponentOrCustomStatus);
    /**
     * Describes when the container will be shown.
     * Available options: `click`, `hover`, `hint`, `focus` and `noop`
     * */
    trigger: NbTrigger;
    /**
     * Determines tooltip overlay offset (in pixels).
     **/
    offset: number;
    /** Disables the display of the tooltip. */
    disabled: boolean;
    nbTooltipShowStateChange: EventEmitter<{
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTooltipDirective, "[nbTooltip]", ["nbTooltip"], { "content": "nbTooltip"; "position": "nbTooltipPlacement"; "adjustment": "nbTooltipAdjustment"; "tooltipClass": "nbTooltipClass"; "icon": "nbTooltipIcon"; "status": "nbTooltipStatus"; "trigger": "nbTooltipTrigger"; "offset": "nbTooltipOffset"; "disabled": "nbTooltipDisabled"; }, { "nbTooltipShowStateChange": "nbTooltipShowStateChange"; }, never>;
}
