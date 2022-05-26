/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive } from '@angular/core';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbLayoutDirection } from '../../services/direction.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/direction.service";
class NbBaseLayoutDirectionDirective {
    constructor(templateRef, viewContainer, cd, directionService, directionToShow) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.directionService = directionService;
        this.directionToShow = directionToShow;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.directionService
            .onDirectionChange()
            .pipe(map((layoutDirection) => layoutDirection === this.directionToShow), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((shouldShow) => this.updateView(shouldShow));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateView(shouldShow) {
        if (shouldShow && !this.viewContainer.length) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.cd.markForCheck();
        }
        else if (!shouldShow && this.viewContainer.length) {
            this.viewContainer.clear();
        }
    }
}
NbBaseLayoutDirectionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBaseLayoutDirectionDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: i1.NbLayoutDirectionService }, { token: i1.NbLayoutDirection }], target: i0.ɵɵFactoryTarget.Directive });
NbBaseLayoutDirectionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbBaseLayoutDirectionDirective, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBaseLayoutDirectionDirective, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: i1.NbLayoutDirectionService }, { type: i1.NbLayoutDirection }]; } });
/**
 * Apply `nbLtr` directive to the element you need to show only when layout direction is `LTR`.
 *
 * ```html
 * <div *nbLtr>This text is visible only when layout direction is LTR</div>
 * ```
 */
export class NbLtrDirective extends NbBaseLayoutDirectionDirective {
    constructor(templateRef, viewContainer, cd, directionService) {
        super(templateRef, viewContainer, cd, directionService, NbLayoutDirection.LTR);
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.directionService = directionService;
    }
}
NbLtrDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLtrDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: i1.NbLayoutDirectionService }], target: i0.ɵɵFactoryTarget.Directive });
NbLtrDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbLtrDirective, selector: "[nbLtr]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLtrDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbLtr]',
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: i1.NbLayoutDirectionService }]; } });
/**
 * Apply `nbRtl` directive to the element you need to show only when layout direction is `RTL`.
 *
 * ```html
 * <div *nbRtl>This text is visible only when layout direction is RTL</div>
 * ```
 */
export class NbRtlDirective extends NbBaseLayoutDirectionDirective {
    constructor(templateRef, viewContainer, cd, directionService) {
        super(templateRef, viewContainer, cd, directionService, NbLayoutDirection.RTL);
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.directionService = directionService;
    }
}
NbRtlDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRtlDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: i1.NbLayoutDirectionService }], target: i0.ɵɵFactoryTarget.Directive });
NbRtlDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbRtlDirective, selector: "[nbRtl]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRtlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbRtl]',
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: i1.NbLayoutDirectionService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWRpcmVjdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC1kaXJlY3Rpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQXFCLFNBQVMsRUFBb0QsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBNEIsTUFBTSxrQ0FBa0MsQ0FBQzs7O0FBRS9GLE1BQ2UsOEJBQThCO0lBRzNDLFlBQ1ksV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsRUFBcUIsRUFDckIsZ0JBQTBDLEVBQzFDLGVBQWtDO1FBSmxDLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUEwQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFQcEMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFRdEMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCO2FBQ2xCLGlCQUFpQixFQUFFO2FBQ25CLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxlQUFrQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUNyRixvQkFBb0IsRUFBRSxFQUN0QixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxDQUFDLFVBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQVUsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRVMsVUFBVSxDQUFJLFVBQWE7UUFDbkMsSUFBSSxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7MkhBbENZLDhCQUE4QjsrR0FBOUIsOEJBQThCOzJGQUE5Qiw4QkFBOEI7a0JBRDVDLFNBQVM7O0FBc0NWOzs7Ozs7R0FNRztBQUlILE1BQU0sT0FBTyxjQUFlLFNBQVEsOEJBQThCO0lBQ2hFLFlBQ1ksV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsRUFBcUIsRUFDckIsZ0JBQTBDO1FBRXBELEtBQUssQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUxyRSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMEI7SUFHdEQsQ0FBQzs7MkdBUlUsY0FBYzsrRkFBZCxjQUFjOzJGQUFkLGNBQWM7a0JBSDFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7aUJBQ3BCOztBQVlEOzs7Ozs7R0FNRztBQUlILE1BQU0sT0FBTyxjQUFlLFNBQVEsOEJBQThCO0lBQ2hFLFlBQ1ksV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsRUFBcUIsRUFDckIsZ0JBQTBDO1FBRXBELEtBQUssQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUxyRSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMEI7SUFHdEQsQ0FBQzs7MkdBUlUsY0FBYzsrRkFBZCxjQUFjOzJGQUFkLGNBQWM7a0JBSDFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5iTGF5b3V0RGlyZWN0aW9uLCBOYkxheW91dERpcmVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kaXJlY3Rpb24uc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoKVxuYWJzdHJhY3QgY2xhc3MgTmJCYXNlTGF5b3V0RGlyZWN0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCBkaXJlY3Rpb25TZXJ2aWNlOiBOYkxheW91dERpcmVjdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGRpcmVjdGlvblRvU2hvdzogTmJMYXlvdXREaXJlY3Rpb24sXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGlvblNlcnZpY2VcbiAgICAgIC5vbkRpcmVjdGlvbkNoYW5nZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChsYXlvdXREaXJlY3Rpb246IE5iTGF5b3V0RGlyZWN0aW9uKSA9PiBsYXlvdXREaXJlY3Rpb24gPT09IHRoaXMuZGlyZWN0aW9uVG9TaG93KSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoc2hvdWxkU2hvdzogYm9vbGVhbikgPT4gdGhpcy51cGRhdGVWaWV3PGJvb2xlYW4+KHNob3VsZFNob3cpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVWaWV3PFQ+KHNob3VsZFNob3c6IFQpOiB2b2lkIHtcbiAgICBpZiAoc2hvdWxkU2hvdyAmJiAhdGhpcy52aWV3Q29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIGlmICghc2hvdWxkU2hvdyAmJiB0aGlzLnZpZXdDb250YWluZXIubGVuZ3RoKSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBcHBseSBgbmJMdHJgIGRpcmVjdGl2ZSB0byB0aGUgZWxlbWVudCB5b3UgbmVlZCB0byBzaG93IG9ubHkgd2hlbiBsYXlvdXQgZGlyZWN0aW9uIGlzIGBMVFJgLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgKm5iTHRyPlRoaXMgdGV4dCBpcyB2aXNpYmxlIG9ubHkgd2hlbiBsYXlvdXQgZGlyZWN0aW9uIGlzIExUUjwvZGl2PlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuYkx0cl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOYkx0ckRpcmVjdGl2ZSBleHRlbmRzIE5iQmFzZUxheW91dERpcmVjdGlvbkRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCBkaXJlY3Rpb25TZXJ2aWNlOiBOYkxheW91dERpcmVjdGlvblNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyLCBjZCwgZGlyZWN0aW9uU2VydmljZSwgTmJMYXlvdXREaXJlY3Rpb24uTFRSKTtcbiAgfVxufVxuXG4vKipcbiAqIEFwcGx5IGBuYlJ0bGAgZGlyZWN0aXZlIHRvIHRoZSBlbGVtZW50IHlvdSBuZWVkIHRvIHNob3cgb25seSB3aGVuIGxheW91dCBkaXJlY3Rpb24gaXMgYFJUTGAuXG4gKlxuICogYGBgaHRtbFxuICogPGRpdiAqbmJSdGw+VGhpcyB0ZXh0IGlzIHZpc2libGUgb25seSB3aGVuIGxheW91dCBkaXJlY3Rpb24gaXMgUlRMPC9kaXY+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25iUnRsXScsXG59KVxuZXhwb3J0IGNsYXNzIE5iUnRsRGlyZWN0aXZlIGV4dGVuZHMgTmJCYXNlTGF5b3V0RGlyZWN0aW9uRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJvdGVjdGVkIGRpcmVjdGlvblNlcnZpY2U6IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXIsIGNkLCBkaXJlY3Rpb25TZXJ2aWNlLCBOYkxheW91dERpcmVjdGlvbi5SVEwpO1xuICB9XG59XG4iXX0=