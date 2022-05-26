/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, Input, Output, EventEmitter, } from '@angular/core';
import { NbDynamicOverlay } from '../cdk/overlay/dynamic/dynamic-overlay';
import { NbDynamicOverlayHandler } from '../cdk/overlay/dynamic/dynamic-overlay-handler';
import { NbAdjustment, NbPosition } from '../cdk/overlay/overlay-position';
import { NbTrigger } from '../cdk/overlay/overlay-trigger';
import { NbPopoverComponent } from './popover.component';
import { takeUntil, skip } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/overlay/dynamic/dynamic-overlay-handler";
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
export class NbPopoverDirective {
    constructor(hostRef, dynamicOverlayHandler) {
        this.hostRef = hostRef;
        this.dynamicOverlayHandler = dynamicOverlayHandler;
        this.popoverComponent = NbPopoverComponent;
        this.destroy$ = new Subject();
        /**
         * Container content context. Will be applied to the rendered component.
         * */
        this.context = {};
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom, left, start or end.
         * */
        // eslint-disable-next-line @angular-eslint/no-input-rename
        this.position = NbPosition.TOP;
        this._adjustment = NbAdjustment.CLOCKWISE;
        /**
         * Describes when the container will be shown.
         * Available options: `click`, `hover`, `hint`, `focus` and `noop`
         * */
        this.trigger = NbTrigger.CLICK;
        /**
         * Sets popover offset
         * */
        this.offset = 15;
        /** Disables the display of the tooltip. */
        // eslint-disable-next-line @angular-eslint/no-input-rename
        this.disabled = false;
        this._popoverClass = '';
        this.nbPopoverShowStateChange = new EventEmitter();
        this.overlayConfig = { panelClass: this.popoverClass };
    }
    /**
     * Container position will be changes automatically based on this strategy if container can't fit view port.
     * Set this property to `noop` value if you want to disable automatically adjustment.
     * Available values: `clockwise` (default), `counterclockwise`, `vertical`, `horizontal`, `noop`.
     * */
    get adjustment() {
        return this._adjustment;
    }
    set adjustment(value) {
        this._adjustment = value;
    }
    get popoverClass() {
        return this._popoverClass;
    }
    set popoverClass(value) {
        if (value !== this.popoverClass) {
            this._popoverClass = value;
            this.overlayConfig = { panelClass: this.popoverClass };
        }
    }
    get isShown() {
        return !!(this.dynamicOverlay && this.dynamicOverlay.isAttached);
    }
    ngOnInit() {
        this.dynamicOverlayHandler.host(this.hostRef).componentType(this.popoverComponent);
    }
    ngOnChanges() {
        this.rebuild();
    }
    ngAfterViewInit() {
        this.dynamicOverlay = this.configureDynamicOverlay().build();
        this.dynamicOverlay.isShown
            .pipe(skip(1), takeUntil(this.destroy$))
            .subscribe((isShown) => this.nbPopoverShowStateChange.emit({ isShown }));
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
            .offset(this.offset)
            .adjustment(this.adjustment)
            .content(this.content)
            .context(this.context)
            .overlayConfig(this.overlayConfig);
    }
}
NbPopoverDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPopoverDirective, deps: [{ token: i0.ElementRef }, { token: i1.NbDynamicOverlayHandler }], target: i0.ɵɵFactoryTarget.Directive });
NbPopoverDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbPopoverDirective, selector: "[nbPopover]", inputs: { content: ["nbPopover", "content"], context: ["nbPopoverContext", "context"], position: ["nbPopoverPlacement", "position"], adjustment: ["nbPopoverAdjustment", "adjustment"], trigger: ["nbPopoverTrigger", "trigger"], offset: ["nbPopoverOffset", "offset"], disabled: ["nbTooltipDisabled", "disabled"], popoverClass: ["nbPopoverClass", "popoverClass"] }, outputs: { nbPopoverShowStateChange: "nbPopoverShowStateChange" }, providers: [NbDynamicOverlayHandler, NbDynamicOverlay], exportAs: ["nbPopover"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPopoverDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbPopover]',
                    exportAs: 'nbPopover',
                    providers: [NbDynamicOverlayHandler, NbDynamicOverlay],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NbDynamicOverlayHandler }]; }, propDecorators: { content: [{
                type: Input,
                args: ['nbPopover']
            }], context: [{
                type: Input,
                args: ['nbPopoverContext']
            }], position: [{
                type: Input,
                args: ['nbPopoverPlacement']
            }], adjustment: [{
                type: Input,
                args: ['nbPopoverAdjustment']
            }], trigger: [{
                type: Input,
                args: ['nbPopoverTrigger']
            }], offset: [{
                type: Input,
                args: ['nbPopoverOffset']
            }], disabled: [{
                type: Input,
                args: ['nbTooltipDisabled']
            }], popoverClass: [{
                type: Input,
                args: ['nbPopoverClass']
            }], nbPopoverShowStateChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLFNBQVMsRUFFVCxLQUFLLEVBSUwsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQThCLE1BQU0sd0NBQXdDLENBQUM7QUFDdEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDekYsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQXdDLE1BQU0saUNBQWlDLENBQUM7QUFFakgsT0FBTyxFQUFFLFNBQVMsRUFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtRks7QUFNTCxNQUFNLE9BQU8sa0JBQWtCO0lBaUY3QixZQUFzQixPQUFtQixFQUFZLHFCQUE4QztRQUE3RSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVksMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF5QjtRQWhGekYscUJBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFFdEMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFTekM7O2FBRUs7UUFFTCxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCOzs7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Q0FBQyxRQUFRLENBQUM7YUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDbkIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckIsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QyxDQUFDOzsrR0FuSVUsa0JBQWtCO21HQUFsQixrQkFBa0IsbWRBRmxCLENBQUMsdUJBQXVCLEVBQUUsZ0JBQWdCLENBQUM7MkZBRTNDLGtCQUFrQjtrQkFMOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixFQUFFLGdCQUFnQixDQUFDO2lCQUN2RDt1SUFXQyxPQUFPO3NCQUROLEtBQUs7dUJBQUMsV0FBVztnQkFPbEIsT0FBTztzQkFETixLQUFLO3VCQUFDLGtCQUFrQjtnQkFTekIsUUFBUTtzQkFEUCxLQUFLO3VCQUFDLG9CQUFvQjtnQkFVdkIsVUFBVTtzQkFEYixLQUFLO3VCQUFDLHFCQUFxQjtnQkFlNUIsT0FBTztzQkFETixLQUFLO3VCQUFDLGtCQUFrQjtnQkFRekIsTUFBTTtzQkFETCxLQUFLO3VCQUFDLGlCQUFpQjtnQkFLSSxRQUFRO3NCQUFuQyxLQUFLO3VCQUFDLG1CQUFtQjtnQkFHdEIsWUFBWTtzQkFEZixLQUFLO3VCQUFDLGdCQUFnQjtnQkFhdkIsd0JBQXdCO3NCQUR2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iRHluYW1pY092ZXJsYXksIE5iRHluYW1pY092ZXJsYXlDb250cm9sbGVyIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvZHluYW1pYy9keW5hbWljLW92ZXJsYXknO1xuaW1wb3J0IHsgTmJEeW5hbWljT3ZlcmxheUhhbmRsZXIgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9keW5hbWljL2R5bmFtaWMtb3ZlcmxheS1oYW5kbGVyJztcbmltcG9ydCB7IE5iQWRqdXN0bWVudCwgTmJQb3NpdGlvbiwgTmJQb3NpdGlvblZhbHVlcywgTmJBZGp1c3RtZW50VmFsdWVzIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbic7XG5pbXBvcnQgeyBOYk92ZXJsYXlDb250ZW50IH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS1zZXJ2aWNlJztcbmltcG9ydCB7IE5iVHJpZ2dlciwgTmJUcmlnZ2VyVmFsdWVzIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS10cmlnZ2VyJztcbmltcG9ydCB7IE5iT3ZlcmxheUNvbmZpZyB9IGZyb20gJy4uL2Nkay9vdmVybGF5L21hcHBpbmcnO1xuaW1wb3J0IHsgTmJQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHNraXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogUG93ZXJmdWwgcG9wb3ZlciBkaXJlY3RpdmUsIHdoaWNoIHByb3ZpZGVzIHRoZSBiZXN0IFVYIGZvciB5b3VyIHVzZXJzLlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU2hvd2Nhc2UsIHBvcG92ZXIvcG9wb3Zlci1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogUG9wb3ZlciBjYW4gYWNjZXB0IGRpZmZlcmVudCBjb250ZW50IHN1Y2ggYXM6XG4gKiBUZW1wbGF0ZVJlZlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gW25iUG9wb3Zlcl09XCJ0ZW1wbGF0ZVJlZlwiPjwvYnV0dG9uPlxuICogPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZVJlZj5cbiAqICAgPHNwYW4+SGVsbG8sIFBvcG92ZXIhPC9zcGFuPlxuICogPC9uZy10ZW1wbGF0ZT5cbiAqIGBgYFxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJQb3BvdmVyTW9kdWxlYCB0byB5b3VyIGZlYXR1cmUgbW9kdWxlLlxuICogYGBgdHNcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgICBOYlBvcG92ZXJNb2R1bGUsXG4gKiAgIF0sXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUgeyB9XG4gKiBgYGBcbiAqICMjIyBVc2FnZVxuICpcbiAqIEN1c3RvbSBjb21wb25lbnRzXG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBbbmJQb3BvdmVyXT1cIk15UG9wb3ZlckNvbXBvbmVudFwiPjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogQm90aCBjdXN0b20gY29tcG9uZW50cyBhbmQgdGVtcGxhdGVSZWYgcG9wb3ZlcnMgY2FuIHJlY2VpdmUgKmNvbnRlbnRDb250ZXh0KiBwcm9wZXJ0eVxuICogdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY29udGVudCBwcm9wcy5cbiAqXG4gKiBQcmltaXRpdmUgdHlwZXNcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIG5iUG9wb3Zlcj1cIkhlbGxvLCBQb3BvdmVyIVwiPjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogUG9wb3ZlciBoYXMgZGlmZmVyZW50IHBsYWNlbWVudHMsIHN1Y2ggYXM6IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgc3RhcnQgYW5kIGVuZFxuICogd2hpY2ggY2FuIGJlIHVzZWQgYXMgZm9sbG93aW5nOlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoUGxhY2VtZW50cywgcG9wb3Zlci9wb3BvdmVyLXBsYWNlbWVudHMuY29tcG9uZW50KVxuICpcbiAqIEJ5IGRlZmF1bHQgcG9wb3ZlciB3aWxsIHRyeSB0byBhZGp1c3QgaXRzZWxmIHRvIG1heGltYWxseSBmaXQgdmlld3BvcnRcbiAqIGFuZCBwcm92aWRlIHRoZSBiZXN0IHVzZXIgZXhwZXJpZW5jZS4gSXQgd2lsbCB0cnkgdG8gY2hhbmdlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyIGNvbnRhaW5lci5cbiAqIElmIHlvdSB3YW50IHRvIGRpc2FibGUgdGhpcyBiZWhhdmlvdXIgc2V0IGl0IGBub29wYC5cbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIG5iUG9wb3Zlcj1cIkhlbGxvLCBQb3BvdmVyIVwiIG5iUG9wb3ZlckFkanVzdG1lbnQ9XCJub29wXCI+PC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBQb3BvdmVyIGhhcyBhIG51bWJlciBvZiB0cmlnZ2VycyB3aGljaCBwcm92aWRlcyBhbiBhYmlsaXR5IHRvIHNob3cgYW5kIGhpZGUgdGhlIGNvbXBvbmVudCBpbiBkaWZmZXJlbnQgd2F5czpcbiAqXG4gKiAtIENsaWNrIG1vZGUgc2hvd3MgdGhlIGNvbXBvbmVudCB3aGVuIGEgdXNlciBjbGlja3Mgb24gdGhlIGhvc3QgZWxlbWVudCBhbmQgaGlkZXMgd2hlbiB0aGUgdXNlciBjbGlja3NcbiAqIHNvbWV3aGVyZSBvbiB0aGUgZG9jdW1lbnQgb3V0c2lkZSB0aGUgY29tcG9uZW50LlxuICogLSBIaW50IHByb3ZpZGVzIGNhcGFiaWxpdHkgdG8gc2hvdyB0aGUgY29tcG9uZW50IHdoZW4gdGhlIHVzZXIgaG92ZXJzIG92ZXIgdGhlIGhvc3QgZWxlbWVudFxuICogYW5kIGhpZGUgd2hlbiB0aGUgdXNlciBob3ZlcnMgb3V0IG9mIHRoZSBob3N0LlxuICogLSBIb3ZlciB3b3JrcyBsaWtlIGhpbnQgbW9kZSB3aXRoIG9uZSBleGNlcHRpb24gLSB3aGVuIHRoZSB1c2VyIG1vdmVzIG1vdXNlIGZyb20gaG9zdCBlbGVtZW50IHRvXG4gKiB0aGUgY29udGFpbmVyIGVsZW1lbnQgdGhlIGNvbXBvbmVudCByZW1haW5zIG9wZW4sIHNvIHRoYXQgaXQgaXMgcG9zc2libGUgdG8gaW50ZXJhY3Qgd2l0aCBpdCBjb250ZW50LlxuICogLSBGb2N1cyBtb2RlIGlzIGFwcGxpZWQgd2hlbiB1c2VyIGZvY3VzZXMgdGhlIGVsZW1lbnQuXG4gKiAtIE5vb3AgbW9kZSAtIHRoZSBjb21wb25lbnQgd29uJ3QgcmVhY3QgdG8gdGhlIHVzZXIgaW50ZXJhY3Rpb24uXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShBdmFpbGFibGUgVHJpZ2dlcnMsIHBvcG92ZXIvcG9wb3Zlci1tb2Rlcy5jb21wb25lbnQuaHRtbClcbiAqXG4gKiBOb29wIG1vZGUgaXMgZXNwZWNpYWxseSB1c2VmdWwgd2hlbiB5b3UgbmVlZCB0byBjb250cm9sIFBvcG92ZXIgcHJvZ3JhbW1hdGljYWxseSwgZm9yIGV4YW1wbGUgc2hvdy9oaWRlXG4gKiBhcyBhIHJlc3VsdCBvZiBzb21lIHRoaXJkLXBhcnR5IGFjdGlvbiwgbGlrZSBIVFRQIHJlcXVlc3Qgb3IgdmFsaWRhdGlvbiBjaGVjazpcbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKE1hbnVhbCBDb250cm9sLCBwb3BvdmVyL3BvcG92ZXItbm9vcC5jb21wb25lbnQpXG4gKlxuICogQmVsb3cgYXJlIGV4YW1wbGVzIGZvciBtYW51YWwgcG9wb3ZlciBzZXR0aW5ncyBjb250cm9sLCBib3RoIHZpYSB0ZW1wbGF0ZSBiaW5kaW5nIGFuZCBjb2RlLlxuICogQHN0YWNrZWQtZXhhbXBsZShQb3BvdmVyIFNldHRpbmdzLCBwb3BvdmVyL3BvcG92ZXItZHluYW1pYy5jb21wb25lbnQpXG4gKlxuICogUGxlYXNlIG5vdGUsIHdoaWxlIG1hbmlwdWxhdGluZyBQb3BvdmVyIHNldHRpbmcgdmlhIGNvZGUsIHlvdSBuZWVkIHRvIGNhbGwgYHJlYnVpbGQoKWAgbWV0aG9kIHRvIGFwcGx5IHRoZSBzZXR0aW5nc1xuICogY2hhbmdlZC5cbiAqIEBzdGFja2VkLWV4YW1wbGUoUG9wb3ZlciBTZXR0aW5ncyBDb2RlLCBwb3BvdmVyL3BvcG92ZXItZHluYW1pYy1jb2RlLmNvbXBvbmVudClcbiAqXG4gKiBAYWRkaXRpb25hbC1leGFtcGxlKFRlbXBsYXRlIFJlZiwgcG9wb3Zlci9wb3BvdmVyLXRlbXBsYXRlLXJlZi5jb21wb25lbnQpXG4gKiBAYWRkaXRpb25hbC1leGFtcGxlKEN1c3RvbSBDb21wb25lbnQsIHBvcG92ZXIvcG9wb3Zlci1jdXN0b20tY29tcG9uZW50LmNvbXBvbmVudClcbiAqICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmJQb3BvdmVyXScsXG4gIGV4cG9ydEFzOiAnbmJQb3BvdmVyJyxcbiAgcHJvdmlkZXJzOiBbTmJEeW5hbWljT3ZlcmxheUhhbmRsZXIsIE5iRHluYW1pY092ZXJsYXldLFxufSlcbmV4cG9ydCBjbGFzcyBOYlBvcG92ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBOYkR5bmFtaWNPdmVybGF5Q29udHJvbGxlciwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHByb3RlY3RlZCBwb3BvdmVyQ29tcG9uZW50ID0gTmJQb3BvdmVyQ29tcG9uZW50O1xuICBwcm90ZWN0ZWQgZHluYW1pY092ZXJsYXk6IE5iRHluYW1pY092ZXJsYXk7XG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIFBvcG92ZXIgY29udGVudCB3aGljaCB3aWxsIGJlIHJlbmRlcmVkIGluIE5iQXJyb3dlZE92ZXJsYXlDb250YWluZXJDb21wb25lbnQuXG4gICAqIEF2YWlsYWJsZSBjb250ZW50OiB0ZW1wbGF0ZSByZWYsIGNvbXBvbmVudCBhbmQgYW55IHByaW1pdGl2ZS5cbiAgICogKi9cbiAgQElucHV0KCduYlBvcG92ZXInKVxuICBjb250ZW50OiBOYk92ZXJsYXlDb250ZW50O1xuXG4gIC8qKlxuICAgKiBDb250YWluZXIgY29udGVudCBjb250ZXh0LiBXaWxsIGJlIGFwcGxpZWQgdG8gdGhlIHJlbmRlcmVkIGNvbXBvbmVudC5cbiAgICogKi9cbiAgQElucHV0KCduYlBvcG92ZXJDb250ZXh0JylcbiAgY29udGV4dDogT2JqZWN0ID0ge307XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIHdpbGwgYmUgY2FsY3VsYXRlZCByZWxhdGl2ZWx5IGhvc3QgZWxlbWVudCBiYXNlZCBvbiB0aGUgcG9zaXRpb24uXG4gICAqIENhbiBiZSB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIHN0YXJ0IG9yIGVuZC5cbiAgICogKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCduYlBvcG92ZXJQbGFjZW1lbnQnKVxuICBwb3NpdGlvbjogTmJQb3NpdGlvbiA9IE5iUG9zaXRpb24uVE9QO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcG9zaXRpb246IE5iUG9zaXRpb25WYWx1ZXM7XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBwb3NpdGlvbiB3aWxsIGJlIGNoYW5nZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB0aGlzIHN0cmF0ZWd5IGlmIGNvbnRhaW5lciBjYW4ndCBmaXQgdmlldyBwb3J0LlxuICAgKiBTZXQgdGhpcyBwcm9wZXJ0eSB0byBgbm9vcGAgdmFsdWUgaWYgeW91IHdhbnQgdG8gZGlzYWJsZSBhdXRvbWF0aWNhbGx5IGFkanVzdG1lbnQuXG4gICAqIEF2YWlsYWJsZSB2YWx1ZXM6IGBjbG9ja3dpc2VgIChkZWZhdWx0KSwgYGNvdW50ZXJjbG9ja3dpc2VgLCBgdmVydGljYWxgLCBgaG9yaXpvbnRhbGAsIGBub29wYC5cbiAgICogKi9cbiAgQElucHV0KCduYlBvcG92ZXJBZGp1c3RtZW50JylcbiAgZ2V0IGFkanVzdG1lbnQoKTogTmJBZGp1c3RtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fYWRqdXN0bWVudDtcbiAgfVxuICBzZXQgYWRqdXN0bWVudCh2YWx1ZTogTmJBZGp1c3RtZW50KSB7XG4gICAgdGhpcy5fYWRqdXN0bWVudCA9IHZhbHVlO1xuICB9XG4gIHByb3RlY3RlZCBfYWRqdXN0bWVudDogTmJBZGp1c3RtZW50ID0gTmJBZGp1c3RtZW50LkNMT0NLV0lTRTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FkanVzdG1lbnQ6IE5iQWRqdXN0bWVudFZhbHVlcztcblxuICAvKipcbiAgICogRGVzY3JpYmVzIHdoZW4gdGhlIGNvbnRhaW5lciB3aWxsIGJlIHNob3duLlxuICAgKiBBdmFpbGFibGUgb3B0aW9uczogYGNsaWNrYCwgYGhvdmVyYCwgYGhpbnRgLCBgZm9jdXNgIGFuZCBgbm9vcGBcbiAgICogKi9cbiAgQElucHV0KCduYlBvcG92ZXJUcmlnZ2VyJylcbiAgdHJpZ2dlcjogTmJUcmlnZ2VyID0gTmJUcmlnZ2VyLkNMSUNLO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdHJpZ2dlcjogTmJUcmlnZ2VyVmFsdWVzO1xuXG4gIC8qKlxuICAgKiBTZXRzIHBvcG92ZXIgb2Zmc2V0XG4gICAqICovXG4gIEBJbnB1dCgnbmJQb3BvdmVyT2Zmc2V0JylcbiAgb2Zmc2V0ID0gMTU7XG5cbiAgLyoqIERpc2FibGVzIHRoZSBkaXNwbGF5IG9mIHRoZSB0b29sdGlwLiAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ25iVG9vbHRpcERpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoJ25iUG9wb3ZlckNsYXNzJylcbiAgZ2V0IHBvcG92ZXJDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wb3BvdmVyQ2xhc3M7XG4gIH1cbiAgc2V0IHBvcG92ZXJDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnBvcG92ZXJDbGFzcykge1xuICAgICAgdGhpcy5fcG9wb3ZlckNsYXNzID0gdmFsdWU7XG4gICAgICB0aGlzLm92ZXJsYXlDb25maWcgPSB7IHBhbmVsQ2xhc3M6IHRoaXMucG9wb3ZlckNsYXNzIH07XG4gICAgfVxuICB9XG4gIF9wb3BvdmVyQ2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIEBPdXRwdXQoKVxuICBuYlBvcG92ZXJTaG93U3RhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaXNTaG93bjogYm9vbGVhbiB9PigpO1xuXG4gIHByb3RlY3RlZCBvdmVybGF5Q29uZmlnOiBOYk92ZXJsYXlDb25maWcgPSB7IHBhbmVsQ2xhc3M6IHRoaXMucG9wb3ZlckNsYXNzIH07XG5cbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHRoaXMuZHluYW1pY092ZXJsYXkgJiYgdGhpcy5keW5hbWljT3ZlcmxheS5pc0F0dGFjaGVkKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBob3N0UmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgZHluYW1pY092ZXJsYXlIYW5kbGVyOiBOYkR5bmFtaWNPdmVybGF5SGFuZGxlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmR5bmFtaWNPdmVybGF5SGFuZGxlci5ob3N0KHRoaXMuaG9zdFJlZikuY29tcG9uZW50VHlwZSh0aGlzLnBvcG92ZXJDb21wb25lbnQpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5yZWJ1aWxkKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5keW5hbWljT3ZlcmxheSA9IHRoaXMuY29uZmlndXJlRHluYW1pY092ZXJsYXkoKS5idWlsZCgpO1xuXG4gICAgdGhpcy5keW5hbWljT3ZlcmxheS5pc1Nob3duXG4gICAgICAucGlwZShza2lwKDEpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChpc1Nob3duOiBib29sZWFuKSA9PiB0aGlzLm5iUG9wb3ZlclNob3dTdGF0ZUNoYW5nZS5lbWl0KHsgaXNTaG93biB9KSk7XG4gIH1cblxuICByZWJ1aWxkKCkge1xuICAgIHRoaXMuZHluYW1pY092ZXJsYXkgPSB0aGlzLmNvbmZpZ3VyZUR5bmFtaWNPdmVybGF5KCkucmVidWlsZCgpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLmR5bmFtaWNPdmVybGF5LnNob3coKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5keW5hbWljT3ZlcmxheS5oaWRlKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5keW5hbWljT3ZlcmxheS50b2dnbGUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZHluYW1pY092ZXJsYXlIYW5kbGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29uZmlndXJlRHluYW1pY092ZXJsYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHluYW1pY092ZXJsYXlIYW5kbGVyXG4gICAgICAucG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgICAgIC50cmlnZ2VyKHRoaXMudHJpZ2dlcilcbiAgICAgIC5kaXNhYmxlZCh0aGlzLmRpc2FibGVkKVxuICAgICAgLm9mZnNldCh0aGlzLm9mZnNldClcbiAgICAgIC5hZGp1c3RtZW50KHRoaXMuYWRqdXN0bWVudClcbiAgICAgIC5jb250ZW50KHRoaXMuY29udGVudClcbiAgICAgIC5jb250ZXh0KHRoaXMuY29udGV4dClcbiAgICAgIC5vdmVybGF5Q29uZmlnKHRoaXMub3ZlcmxheUNvbmZpZyk7XG4gIH1cbn1cbiJdfQ==