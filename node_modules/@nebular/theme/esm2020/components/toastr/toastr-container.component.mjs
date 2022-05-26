/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, ViewChildren } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbToastComponent } from './toast.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/direction.service";
import * as i2 from "../cdk/overlay/position-helper";
import * as i3 from "./toast.component";
import * as i4 from "@angular/common";
const voidState = style({
    transform: 'translateX({{ direction }}110%)',
    height: 0,
    marginLeft: '0',
    marginRight: '0',
    marginTop: '0',
    marginBottom: '0',
});
const defaultOptions = { params: { direction: '' } };
export class NbToastrContainerComponent {
    constructor(layoutDirection, positionHelper) {
        this.layoutDirection = layoutDirection;
        this.positionHelper = positionHelper;
        this.destroy$ = new Subject();
        this.content = [];
    }
    ngOnInit() {
        this.layoutDirection.onDirectionChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.onDirectionChange());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onDirectionChange() {
        const direction = this.positionHelper.isRightPosition(this.position) ? '' : '-';
        this.fadeIn = { value: '', params: { direction } };
    }
}
NbToastrContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbToastrContainerComponent, deps: [{ token: i1.NbLayoutDirectionService }, { token: i2.NbPositionHelper }], target: i0.ɵɵFactoryTarget.Component });
NbToastrContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbToastrContainerComponent, selector: "nb-toastr-container", inputs: { content: "content", context: "context", position: "position" }, viewQueries: [{ propertyName: "toasts", predicate: NbToastComponent, descendants: true }], ngImport: i0, template: `
    <nb-toast [@fadeIn]="fadeIn" *ngFor="let toast of content" [toast]="toast"></nb-toast>`, isInline: true, components: [{ type: i3.NbToastComponent, selector: "nb-toast", inputs: ["toast"], outputs: ["destroy", "toastClick"] }], directives: [{ type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], animations: [
        trigger('fadeIn', [
            transition(':enter', [voidState, animate(100)], defaultOptions),
            transition(':leave', [animate(100, voidState)], defaultOptions),
        ]),
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbToastrContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-toastr-container',
                    template: `
    <nb-toast [@fadeIn]="fadeIn" *ngFor="let toast of content" [toast]="toast"></nb-toast>`,
                    animations: [
                        trigger('fadeIn', [
                            transition(':enter', [voidState, animate(100)], defaultOptions),
                            transition(':leave', [animate(100, voidState)], defaultOptions),
                        ]),
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i1.NbLayoutDirectionService }, { type: i2.NbPositionHelper }]; }, propDecorators: { content: [{
                type: Input
            }], context: [{
                type: Input
            }], position: [{
                type: Input
            }], toasts: [{
                type: ViewChildren,
                args: [NbToastComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdG9hc3RyL3RvYXN0ci1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0MsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7O0FBS3JELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN0QixTQUFTLEVBQUUsaUNBQWlDO0lBQzVDLE1BQU0sRUFBRSxDQUFDO0lBQ1QsVUFBVSxFQUFFLEdBQUc7SUFDZixXQUFXLEVBQUUsR0FBRztJQUNoQixTQUFTLEVBQUUsR0FBRztJQUNkLFlBQVksRUFBRSxHQUFHO0NBQ2xCLENBQUMsQ0FBQztBQUVILE1BQU0sY0FBYyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFhckQsTUFBTSxPQUFPLDBCQUEwQjtJQWtCckMsWUFBc0IsZUFBeUMsRUFDekMsY0FBZ0M7UUFEaEMsb0JBQWUsR0FBZixlQUFlLENBQTBCO1FBQ3pDLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQWpCNUMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFHekMsWUFBTyxHQUFjLEVBQUUsQ0FBQztJQWV4QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUU7YUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVTLGlCQUFpQjtRQUN6QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUM7SUFDckQsQ0FBQzs7dUhBcENVLDBCQUEwQjsyR0FBMUIsMEJBQTBCLGdLQWF2QixnQkFBZ0IsZ0RBdEJwQjsyRkFDK0UsZ1JBQzdFO1FBQ1YsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNoQixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQztZQUMvRCxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQztTQUNoRSxDQUFDO0tBQ0g7MkZBRVUsMEJBQTBCO2tCQVh0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRTsyRkFDK0U7b0JBQ3pGLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsUUFBUSxFQUFFOzRCQUNoQixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQzs0QkFDL0QsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUM7eUJBQ2hFLENBQUM7cUJBQ0g7aUJBQ0Y7OElBTUMsT0FBTztzQkFETixLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sTUFBTTtzQkFETCxZQUFZO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOYlRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJUb2FzdCB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGlyZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJHbG9iYWxQb3NpdGlvbiwgTmJQb3NpdGlvbkhlbHBlciB9IGZyb20gJy4uL2Nkay9vdmVybGF5L3Bvc2l0aW9uLWhlbHBlcic7XG5cbmNvbnN0IHZvaWRTdGF0ZSA9IHN0eWxlKHtcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCh7eyBkaXJlY3Rpb24gfX0xMTAlKScsXG4gIGhlaWdodDogMCxcbiAgbWFyZ2luTGVmdDogJzAnLFxuICBtYXJnaW5SaWdodDogJzAnLFxuICBtYXJnaW5Ub3A6ICcwJyxcbiAgbWFyZ2luQm90dG9tOiAnMCcsXG59KTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7IHBhcmFtczogeyBkaXJlY3Rpb246ICcnIH0gfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItdG9hc3RyLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5iLXRvYXN0IFtAZmFkZUluXT1cImZhZGVJblwiICpuZ0Zvcj1cImxldCB0b2FzdCBvZiBjb250ZW50XCIgW3RvYXN0XT1cInRvYXN0XCI+PC9uYi10b2FzdD5gLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZmFkZUluJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW3ZvaWRTdGF0ZSwgYW5pbWF0ZSgxMDApXSwgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW2FuaW1hdGUoMTAwLCB2b2lkU3RhdGUpXSwgZGVmYXVsdE9wdGlvbnMpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOYlRvYXN0ckNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQ6IE5iVG9hc3RbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRleHQ6IE9iamVjdDtcblxuICBASW5wdXQoKVxuICBwb3NpdGlvbjogTmJHbG9iYWxQb3NpdGlvbjtcblxuICBAVmlld0NoaWxkcmVuKE5iVG9hc3RDb21wb25lbnQpXG4gIHRvYXN0czogUXVlcnlMaXN0PE5iVG9hc3RDb21wb25lbnQ+O1xuXG4gIGZhZGVJbjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbGF5b3V0RGlyZWN0aW9uOiBOYkxheW91dERpcmVjdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBwb3NpdGlvbkhlbHBlcjogTmJQb3NpdGlvbkhlbHBlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYXlvdXREaXJlY3Rpb24ub25EaXJlY3Rpb25DaGFuZ2UoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uRGlyZWN0aW9uQ2hhbmdlKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRGlyZWN0aW9uQ2hhbmdlKCkge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMucG9zaXRpb25IZWxwZXIuaXNSaWdodFBvc2l0aW9uKHRoaXMucG9zaXRpb24pID8gJycgOiAnLSc7XG4gICAgdGhpcy5mYWRlSW4gPSB7IHZhbHVlOiAnJywgcGFyYW1zOiB7IGRpcmVjdGlvbiB9IH07XG4gIH1cbn1cbiJdfQ==