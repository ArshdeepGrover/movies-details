/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, Input, Output, EventEmitter, } from '@angular/core';
import { skip, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbAdjustment, NbPosition } from '../cdk/overlay/overlay-position';
import { NbTrigger } from '../cdk/overlay/overlay-trigger';
import { NbDynamicOverlay } from '../cdk/overlay/dynamic/dynamic-overlay';
import { NbDynamicOverlayHandler } from '../cdk/overlay/dynamic/dynamic-overlay-handler';
import { NbTooltipComponent } from './tooltip.component';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/overlay/dynamic/dynamic-overlay-handler";
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
export class NbTooltipDirective {
    constructor(hostRef, dynamicOverlayHandler) {
        this.hostRef = hostRef;
        this.dynamicOverlayHandler = dynamicOverlayHandler;
        this.destroy$ = new Subject();
        this.tooltipComponent = NbTooltipComponent;
        this.context = {};
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom, left, start or end.
         */
        // eslint-disable-next-line @angular-eslint/no-input-rename
        this.position = NbPosition.TOP;
        this._adjustment = NbAdjustment.CLOCKWISE;
        this._tooltipClass = '';
        /**
         * Describes when the container will be shown.
         * Available options: `click`, `hover`, `hint`, `focus` and `noop`
         * */
        this.trigger = NbTrigger.HINT;
        /**
         * Determines tooltip overlay offset (in pixels).
         **/
        this.offset = 8;
        /** Disables the display of the tooltip. */
        this.disabled = false;
        this.nbTooltipShowStateChange = new EventEmitter();
        this.overlayConfig = { panelClass: this.tooltipClass };
    }
    /**
     * Container position will change automatically based on this strategy if container can't fit view port.
     * Set this property to `noop` value if you want to disable automatic adjustment.
     * Available values: `clockwise` (default), `counterclockwise`, `vertical`, `horizontal`, `noop`.
     */
    get adjustment() {
        return this._adjustment;
    }
    set adjustment(value) {
        this._adjustment = value;
    }
    get tooltipClass() {
        return this._tooltipClass;
    }
    set tooltipClass(value) {
        if (value !== this.tooltipClass) {
            this._tooltipClass = value;
            this.overlayConfig = { panelClass: this.tooltipClass };
        }
    }
    /**
     * Accepts icon name or icon config object
     * @param {string | NbIconConfig} icon name or config object
     */
    set icon(icon) {
        this.context = Object.assign(this.context, { icon });
    }
    /**
     *
     * @param {string} status
     */
    set status(status) {
        this.context = Object.assign(this.context, { status });
    }
    get isShown() {
        return !!(this.dynamicOverlay && this.dynamicOverlay.isAttached);
    }
    ngOnInit() {
        this.dynamicOverlayHandler.host(this.hostRef).componentType(this.tooltipComponent).offset(this.offset);
    }
    ngOnChanges() {
        this.rebuild();
    }
    ngAfterViewInit() {
        this.dynamicOverlay = this.configureDynamicOverlay().build();
        this.dynamicOverlay.isShown
            .pipe(skip(1), takeUntil(this.destroy$))
            .subscribe((isShown) => this.nbTooltipShowStateChange.emit({ isShown }));
    }
    rebuild() {
        this.dynamicOverlay = this.configureDynamicOverlay().rebuild();
    }
    show() {
        this.dynamicOverlay.show();
    }
    hide() {
        this.dynamicOverlay.hide();
    }
    toggle() {
        this.dynamicOverlay.toggle();
    }
    ngOnDestroy() {
        this.dynamicOverlayHandler.destroy();
        this.destroy$.next();
        this.destroy$.complete();
    }
    configureDynamicOverlay() {
        return this.dynamicOverlayHandler
            .position(this.position)
            .trigger(this.trigger)
            .disabled(this.disabled)
            .adjustment(this.adjustment)
            .content(this.content)
            .context(this.context)
            .overlayConfig(this.overlayConfig);
    }
}
NbTooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTooltipDirective, deps: [{ token: i0.ElementRef }, { token: i1.NbDynamicOverlayHandler }], target: i0.ɵɵFactoryTarget.Directive });
NbTooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTooltipDirective, selector: "[nbTooltip]", inputs: { content: ["nbTooltip", "content"], position: ["nbTooltipPlacement", "position"], adjustment: ["nbTooltipAdjustment", "adjustment"], tooltipClass: ["nbTooltipClass", "tooltipClass"], icon: ["nbTooltipIcon", "icon"], status: ["nbTooltipStatus", "status"], trigger: ["nbTooltipTrigger", "trigger"], offset: ["nbTooltipOffset", "offset"], disabled: ["nbTooltipDisabled", "disabled"] }, outputs: { nbTooltipShowStateChange: "nbTooltipShowStateChange" }, providers: [NbDynamicOverlayHandler, NbDynamicOverlay], exportAs: ["nbTooltip"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbTooltip]',
                    exportAs: 'nbTooltip',
                    providers: [NbDynamicOverlayHandler, NbDynamicOverlay],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NbDynamicOverlayHandler }]; }, propDecorators: { content: [{
                type: Input,
                args: ['nbTooltip']
            }], position: [{
                type: Input,
                args: ['nbTooltipPlacement']
            }], adjustment: [{
                type: Input,
                args: ['nbTooltipAdjustment']
            }], tooltipClass: [{
                type: Input,
                args: ['nbTooltipClass']
            }], icon: [{
                type: Input,
                args: ['nbTooltipIcon']
            }], status: [{
                type: Input,
                args: ['nbTooltipStatus']
            }], trigger: [{
                type: Input,
                args: ['nbTooltipTrigger']
            }], offset: [{
                type: Input,
                args: ['nbTooltipOffset']
            }], disabled: [{
                type: Input,
                args: ['nbTooltipDisabled']
            }], nbTooltipShowStateChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLFNBQVMsRUFFVCxLQUFLLEVBSUwsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQXdDLE1BQU0saUNBQWlDLENBQUM7QUFDakgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFHekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVDRztBQU1ILE1BQU0sT0FBTyxrQkFBa0I7SUEyRjdCLFlBQXNCLE9BQW1CLEVBQVkscUJBQThDO1FBQTdFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBWSwwQkFBcUIsR0FBckIscUJBQXFCLENBQXlCO1FBMUZ6RixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvQixxQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUdoRCxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBUXJCOzs7V0FHRztRQUNILDJEQUEyRDtRQUUzRCxhQUFRLEdBQWUsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQWU1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QkFVeEIsT0FBTztzQkFETixLQUFLO3VCQUFDLGtCQUFrQjtnQkFNQyxNQUFNO3NCQUEvQixLQUFLO3VCQUFDLGlCQUFpQjtnQkFHSSxRQUFRO3NCQUFuQyxLQUFLO3VCQUFDLG1CQUFtQjtnQkFHMUIsd0JBQXdCO3NCQUR2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNraXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyB9IGZyb20gJy4uL2NvbXBvbmVudC1zdGF0dXMnO1xuaW1wb3J0IHsgTmJBZGp1c3RtZW50LCBOYlBvc2l0aW9uLCBOYlBvc2l0aW9uVmFsdWVzLCBOYkFkanVzdG1lbnRWYWx1ZXMgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uJztcbmltcG9ydCB7IE5iVHJpZ2dlciB9IGZyb20gJy4uL2Nkay9vdmVybGF5L292ZXJsYXktdHJpZ2dlcic7XG5pbXBvcnQgeyBOYkR5bmFtaWNPdmVybGF5IH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvZHluYW1pYy9keW5hbWljLW92ZXJsYXknO1xuaW1wb3J0IHsgTmJEeW5hbWljT3ZlcmxheUhhbmRsZXIgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9keW5hbWljL2R5bmFtaWMtb3ZlcmxheS1oYW5kbGVyJztcbmltcG9ydCB7IE5iT3ZlcmxheUNvbmZpZyB9IGZyb20gJy4uL2Nkay9vdmVybGF5L21hcHBpbmcnO1xuaW1wb3J0IHsgTmJUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkljb25Db25maWcgfSBmcm9tICcuLi9pY29uL2ljb24uY29tcG9uZW50JztcblxuLyoqXG4gKlxuICogVG9vbHRpcCBkaXJlY3RpdmUgZm9yIHNtYWxsIHRleHQvaWNvbiBoaW50cy5cbiAqXG4gKiAjIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogSW1wb3J0IGBOYlRvb2x0aXBNb2R1bGVgIHRvIHlvdXIgZmVhdHVyZSBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iVG9vbHRpcE1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgdG9vbHRpcC90b29sdGlwLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBUb29sdGlwIGNhbiBhY2NlcHQgYSBoaW50IHRleHQgYW5kL29yIGFuIGljb246XG4gKiBAc3RhY2tlZC1leGFtcGxlKFdpdGggSWNvbiwgdG9vbHRpcC90b29sdGlwLXdpdGgtaWNvbi5jb21wb25lbnQpXG4gKlxuICogU2FtZSB3YXkgYXMgUG9wb3ZlciwgdG9vbHRpcCBjYW4gYWNjZXB0IHBsYWNlbWVudCBwb3NpdGlvbiB3aXRoIGBuYlRvb2x0aXBQbGFjZW1lbnRgIHByb3BlcnR5OlxuICogQHN0YWNrZWQtZXhhbXBsZShQbGFjZW1lbnRzLCB0b29sdGlwL3Rvb2x0aXAtcGxhY2VtZW50cy5jb21wb25lbnQpXG4gKlxuICogSXQgaXMgYWxzbyBwb3NzaWJsZSB0byBzcGVjaWZ5IHRvb2x0aXAgY29sb3IgdXNpbmcgYG5iVG9vbHRpcFN0YXR1c2AgcHJvcGVydHk6XG4gKiBAc3RhY2tlZC1leGFtcGxlKENvbG9yZWQgVG9vbHRpcHMsIHRvb2x0aXAvdG9vbHRpcC1jb2xvcnMuY29tcG9uZW50KVxuICpcbiAqIFRvb2x0aXAgaGFzIGEgbnVtYmVyIG9mIHRyaWdnZXJzIHdoaWNoIHByb3ZpZGVzIGFuIGFiaWxpdHkgdG8gc2hvdyBhbmQgaGlkZSB0aGUgY29tcG9uZW50IGluIGRpZmZlcmVudCB3YXlzOlxuICpcbiAqIC0gQ2xpY2sgbW9kZSBzaG93cyB0aGUgY29tcG9uZW50IHdoZW4gYSB1c2VyIGNsaWNrcyBvbiB0aGUgaG9zdCBlbGVtZW50IGFuZCBoaWRlcyB3aGVuIHRoZSB1c2VyIGNsaWNrc1xuICogc29tZXdoZXJlIG9uIHRoZSBkb2N1bWVudCBvdXRzaWRlIHRoZSBjb21wb25lbnQuXG4gKiAtIEhpbnQgcHJvdmlkZXMgY2FwYWJpbGl0eSB0byBzaG93IHRoZSBjb21wb25lbnQgd2hlbiB0aGUgdXNlciBob3ZlcnMgb3ZlciB0aGUgaG9zdCBlbGVtZW50XG4gKiBhbmQgaGlkZSB3aGVuIHRoZSB1c2VyIGhvdmVycyBvdXQgb2YgdGhlIGhvc3QuXG4gKiAtIEhvdmVyIHdvcmtzIGxpa2UgaGludCBtb2RlIHdpdGggb25lIGV4Y2VwdGlvbiAtIHdoZW4gdGhlIHVzZXIgbW92ZXMgbW91c2UgZnJvbSBob3N0IGVsZW1lbnQgdG9cbiAqIHRoZSBjb250YWluZXIgZWxlbWVudCB0aGUgY29tcG9uZW50IHJlbWFpbnMgb3Blbiwgc28gdGhhdCBpdCBpcyBwb3NzaWJsZSB0byBpbnRlcmFjdCB3aXRoIGl0IGNvbnRlbnQuXG4gKiAtIEZvY3VzIG1vZGUgaXMgYXBwbGllZCB3aGVuIHVzZXIgZm9jdXNlcyB0aGUgZWxlbWVudC5cbiAqIC0gTm9vcCBtb2RlIC0gdGhlIGNvbXBvbmVudCB3b24ndCByZWFjdCB0byB0aGUgdXNlciBpbnRlcmFjdGlvbi5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25iVG9vbHRpcF0nLFxuICBleHBvcnRBczogJ25iVG9vbHRpcCcsXG4gIHByb3ZpZGVyczogW05iRHluYW1pY092ZXJsYXlIYW5kbGVyLCBOYkR5bmFtaWNPdmVybGF5XSxcbn0pXG5leHBvcnQgY2xhc3MgTmJUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByb3RlY3RlZCB0b29sdGlwQ29tcG9uZW50ID0gTmJUb29sdGlwQ29tcG9uZW50O1xuICBwcm90ZWN0ZWQgZHluYW1pY092ZXJsYXk6IE5iRHluYW1pY092ZXJsYXk7XG5cbiAgY29udGV4dDogT2JqZWN0ID0ge307XG5cbiAgLyoqXG4gICAqIFRvb2x0aXAgbWVzc2FnZVxuICAgKi9cbiAgQElucHV0KCduYlRvb2x0aXAnKVxuICBjb250ZW50OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIHdpbGwgYmUgY2FsY3VsYXRlZCByZWxhdGl2ZWx5IGhvc3QgZWxlbWVudCBiYXNlZCBvbiB0aGUgcG9zaXRpb24uXG4gICAqIENhbiBiZSB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIHN0YXJ0IG9yIGVuZC5cbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnbmJUb29sdGlwUGxhY2VtZW50JylcbiAgcG9zaXRpb246IE5iUG9zaXRpb24gPSBOYlBvc2l0aW9uLlRPUDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Bvc2l0aW9uOiBOYlBvc2l0aW9uVmFsdWVzO1xuXG4gIC8qKlxuICAgKiBDb250YWluZXIgcG9zaXRpb24gd2lsbCBjaGFuZ2UgYXV0b21hdGljYWxseSBiYXNlZCBvbiB0aGlzIHN0cmF0ZWd5IGlmIGNvbnRhaW5lciBjYW4ndCBmaXQgdmlldyBwb3J0LlxuICAgKiBTZXQgdGhpcyBwcm9wZXJ0eSB0byBgbm9vcGAgdmFsdWUgaWYgeW91IHdhbnQgdG8gZGlzYWJsZSBhdXRvbWF0aWMgYWRqdXN0bWVudC5cbiAgICogQXZhaWxhYmxlIHZhbHVlczogYGNsb2Nrd2lzZWAgKGRlZmF1bHQpLCBgY291bnRlcmNsb2Nrd2lzZWAsIGB2ZXJ0aWNhbGAsIGBob3Jpem9udGFsYCwgYG5vb3BgLlxuICAgKi9cbiAgQElucHV0KCduYlRvb2x0aXBBZGp1c3RtZW50JylcbiAgZ2V0IGFkanVzdG1lbnQoKTogTmJBZGp1c3RtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fYWRqdXN0bWVudDtcbiAgfVxuICBzZXQgYWRqdXN0bWVudCh2YWx1ZTogTmJBZGp1c3RtZW50KSB7XG4gICAgdGhpcy5fYWRqdXN0bWVudCA9IHZhbHVlO1xuICB9XG4gIHByb3RlY3RlZCBfYWRqdXN0bWVudDogTmJBZGp1c3RtZW50ID0gTmJBZGp1c3RtZW50LkNMT0NLV0lTRTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FkanVzdG1lbnQ6IE5iQWRqdXN0bWVudFZhbHVlcztcblxuICBASW5wdXQoJ25iVG9vbHRpcENsYXNzJylcbiAgZ2V0IHRvb2x0aXBDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwQ2xhc3M7XG4gIH1cbiAgc2V0IHRvb2x0aXBDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnRvb2x0aXBDbGFzcykge1xuICAgICAgdGhpcy5fdG9vbHRpcENsYXNzID0gdmFsdWU7XG4gICAgICB0aGlzLm92ZXJsYXlDb25maWcgPSB7IHBhbmVsQ2xhc3M6IHRoaXMudG9vbHRpcENsYXNzIH07XG4gICAgfVxuICB9XG4gIF90b29sdGlwQ2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBBY2NlcHRzIGljb24gbmFtZSBvciBpY29uIGNvbmZpZyBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBOYkljb25Db25maWd9IGljb24gbmFtZSBvciBjb25maWcgb2JqZWN0XG4gICAqL1xuICBASW5wdXQoJ25iVG9vbHRpcEljb24nKVxuICBzZXQgaWNvbihpY29uOiBzdHJpbmcgfCBOYkljb25Db25maWcpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHRoaXMuY29udGV4dCwgeyBpY29uIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXNcbiAgICovXG4gIEBJbnB1dCgnbmJUb29sdGlwU3RhdHVzJylcbiAgc2V0IHN0YXR1cyhzdGF0dXM6IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHRoaXMuY29udGV4dCwgeyBzdGF0dXMgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzY3JpYmVzIHdoZW4gdGhlIGNvbnRhaW5lciB3aWxsIGJlIHNob3duLlxuICAgKiBBdmFpbGFibGUgb3B0aW9uczogYGNsaWNrYCwgYGhvdmVyYCwgYGhpbnRgLCBgZm9jdXNgIGFuZCBgbm9vcGBcbiAgICogKi9cbiAgQElucHV0KCduYlRvb2x0aXBUcmlnZ2VyJylcbiAgdHJpZ2dlcjogTmJUcmlnZ2VyID0gTmJUcmlnZ2VyLkhJTlQ7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdG9vbHRpcCBvdmVybGF5IG9mZnNldCAoaW4gcGl4ZWxzKS5cbiAgICoqL1xuICBASW5wdXQoJ25iVG9vbHRpcE9mZnNldCcpIG9mZnNldCA9IDg7XG5cbiAgLyoqIERpc2FibGVzIHRoZSBkaXNwbGF5IG9mIHRoZSB0b29sdGlwLiAqL1xuICBASW5wdXQoJ25iVG9vbHRpcERpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgbmJUb29sdGlwU2hvd1N0YXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGlzU2hvd246IGJvb2xlYW4gfT4oKTtcblxuICBwcm90ZWN0ZWQgb3ZlcmxheUNvbmZpZzogTmJPdmVybGF5Q29uZmlnID0geyBwYW5lbENsYXNzOiB0aGlzLnRvb2x0aXBDbGFzcyB9O1xuXG4gIGdldCBpc1Nob3duKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh0aGlzLmR5bmFtaWNPdmVybGF5ICYmIHRoaXMuZHluYW1pY092ZXJsYXkuaXNBdHRhY2hlZCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaG9zdFJlZjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIGR5bmFtaWNPdmVybGF5SGFuZGxlcjogTmJEeW5hbWljT3ZlcmxheUhhbmRsZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5keW5hbWljT3ZlcmxheUhhbmRsZXIuaG9zdCh0aGlzLmhvc3RSZWYpLmNvbXBvbmVudFR5cGUodGhpcy50b29sdGlwQ29tcG9uZW50KS5vZmZzZXQodGhpcy5vZmZzZXQpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5yZWJ1aWxkKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5keW5hbWljT3ZlcmxheSA9IHRoaXMuY29uZmlndXJlRHluYW1pY092ZXJsYXkoKS5idWlsZCgpO1xuXG4gICAgdGhpcy5keW5hbWljT3ZlcmxheS5pc1Nob3duXG4gICAgICAucGlwZShza2lwKDEpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChpc1Nob3duOiBib29sZWFuKSA9PiB0aGlzLm5iVG9vbHRpcFNob3dTdGF0ZUNoYW5nZS5lbWl0KHsgaXNTaG93biB9KSk7XG4gIH1cblxuICByZWJ1aWxkKCkge1xuICAgIHRoaXMuZHluYW1pY092ZXJsYXkgPSB0aGlzLmNvbmZpZ3VyZUR5bmFtaWNPdmVybGF5KCkucmVidWlsZCgpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLmR5bmFtaWNPdmVybGF5LnNob3coKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5keW5hbWljT3ZlcmxheS5oaWRlKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5keW5hbWljT3ZlcmxheS50b2dnbGUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZHluYW1pY092ZXJsYXlIYW5kbGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29uZmlndXJlRHluYW1pY092ZXJsYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHluYW1pY092ZXJsYXlIYW5kbGVyXG4gICAgICAucG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgICAgIC50cmlnZ2VyKHRoaXMudHJpZ2dlcilcbiAgICAgIC5kaXNhYmxlZCh0aGlzLmRpc2FibGVkKVxuICAgICAgLmFkanVzdG1lbnQodGhpcy5hZGp1c3RtZW50KVxuICAgICAgLmNvbnRlbnQodGhpcy5jb250ZW50KVxuICAgICAgLmNvbnRleHQodGhpcy5jb250ZXh0KVxuICAgICAgLm92ZXJsYXlDb25maWcodGhpcy5vdmVybGF5Q29uZmlnKTtcbiAgfVxufVxuIl19