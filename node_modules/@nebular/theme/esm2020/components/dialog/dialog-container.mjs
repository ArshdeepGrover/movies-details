/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ViewChild } from '@angular/core';
import { NbPortalOutletDirective } from '../cdk/overlay/mapping';
import * as i0 from "@angular/core";
import * as i1 from "./dialog-config";
import * as i2 from "../cdk/a11y/focus-trap";
import * as i3 from "../cdk/overlay/mapping";
/**
 * Container component for each dialog.
 * All the dialogs will be attached to it.
 * // TODO add animations
 * */
export class NbDialogContainerComponent {
    constructor(config, elementRef, focusTrapFactory) {
        this.config = config;
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
    }
    ngOnInit() {
        if (this.config.autoFocus) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
            this.focusTrap.blurPreviouslyFocusedElement();
            this.focusTrap.focusInitialElement();
        }
    }
    ngOnDestroy() {
        if (this.config.autoFocus && this.focusTrap) {
            this.focusTrap.restoreFocus();
        }
    }
    attachComponentPortal(portal) {
        return this.portalOutlet.attachComponentPortal(portal);
    }
    attachTemplatePortal(portal) {
        return this.portalOutlet.attachTemplatePortal(portal);
    }
}
NbDialogContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDialogContainerComponent, deps: [{ token: i1.NbDialogConfig }, { token: i0.ElementRef }, { token: i2.NbFocusTrapFactoryService }], target: i0.ɵɵFactoryTarget.Component });
NbDialogContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbDialogContainerComponent, selector: "nb-dialog-container", viewQueries: [{ propertyName: "portalOutlet", first: true, predicate: NbPortalOutletDirective, descendants: true, static: true }], ngImport: i0, template: '<ng-template nbPortalOutlet></ng-template>', isInline: true, directives: [{ type: i3.NbPortalOutletDirective, selector: "[nbPortalOutlet]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDialogContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-dialog-container',
                    template: '<ng-template nbPortalOutlet></ng-template>',
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDialogConfig }, { type: i0.ElementRef }, { type: i2.NbFocusTrapFactoryService }]; }, propDecorators: { portalOutlet: [{
                type: ViewChild,
                args: [NbPortalOutletDirective, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLWNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBZ0UsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBcUIsdUJBQXVCLEVBQW9CLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBS3RHOzs7O0tBSUs7QUFLTCxNQUFNLE9BQU8sMEJBQTBCO0lBT3JDLFlBQXNCLE1BQXNCLEVBQ3RCLFVBQXNCLEVBQ3RCLGdCQUEyQztRQUYzQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMkI7SUFDakUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVELHFCQUFxQixDQUFJLE1BQTRCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsb0JBQW9CLENBQUksTUFBMkI7UUFDakQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7O3VIQWhDVSwwQkFBMEI7MkdBQTFCLDBCQUEwQix5R0FHMUIsdUJBQXVCLDhEQUx4Qiw0Q0FBNEM7MkZBRTNDLDBCQUEwQjtrQkFKdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsNENBQTRDO2lCQUN2RDtzS0FJdUQsWUFBWTtzQkFBakUsU0FBUzt1QkFBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJDb21wb25lbnRQb3J0YWwsIE5iUG9ydGFsT3V0bGV0RGlyZWN0aXZlLCBOYlRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvbWFwcGluZyc7XG5pbXBvcnQgeyBOYkZvY3VzVHJhcCwgTmJGb2N1c1RyYXBGYWN0b3J5U2VydmljZSB9IGZyb20gJy4uL2Nkay9hMTF5L2ZvY3VzLXRyYXAnO1xuaW1wb3J0IHsgTmJEaWFsb2dDb25maWcgfSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xuXG5cbi8qKlxuICogQ29udGFpbmVyIGNvbXBvbmVudCBmb3IgZWFjaCBkaWFsb2cuXG4gKiBBbGwgdGhlIGRpYWxvZ3Mgd2lsbCBiZSBhdHRhY2hlZCB0byBpdC5cbiAqIC8vIFRPRE8gYWRkIGFuaW1hdGlvbnNcbiAqICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1kaWFsb2ctY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgbmJQb3J0YWxPdXRsZXQ+PC9uZy10ZW1wbGF0ZT4nLFxufSlcbmV4cG9ydCBjbGFzcyBOYkRpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvLyBUT0RPIHN0YXRpYyBtdXN0IGJlIGZhbHNlIGFzIG9mIEFuZ3VsYXIgOS4wLjAsIGlzc3Vlcy8xNTE0XG4gIEBWaWV3Q2hpbGQoTmJQb3J0YWxPdXRsZXREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHBvcnRhbE91dGxldDogTmJQb3J0YWxPdXRsZXREaXJlY3RpdmU7XG5cbiAgcHJvdGVjdGVkIGZvY3VzVHJhcDogTmJGb2N1c1RyYXA7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogTmJEaWFsb2dDb25maWcsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgZm9jdXNUcmFwRmFjdG9yeTogTmJGb2N1c1RyYXBGYWN0b3J5U2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5mb2N1c1RyYXAgPSB0aGlzLmZvY3VzVHJhcEZhY3RvcnkuY3JlYXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmJsdXJQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmZvY3VzSW5pdGlhbEVsZW1lbnQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jb25maWcuYXV0b0ZvY3VzICYmIHRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICB0aGlzLmZvY3VzVHJhcC5yZXN0b3JlRm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4ocG9ydGFsOiBOYkNvbXBvbmVudFBvcnRhbDxUPik6IENvbXBvbmVudFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMucG9ydGFsT3V0bGV0LmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwpO1xuICB9XG5cbiAgYXR0YWNoVGVtcGxhdGVQb3J0YWw8Qz4ocG9ydGFsOiBOYlRlbXBsYXRlUG9ydGFsPEM+KTogRW1iZWRkZWRWaWV3UmVmPEM+IHtcbiAgICByZXR1cm4gdGhpcy5wb3J0YWxPdXRsZXQuYXR0YWNoVGVtcGxhdGVQb3J0YWwocG9ydGFsKTtcbiAgfVxufVxuIl19