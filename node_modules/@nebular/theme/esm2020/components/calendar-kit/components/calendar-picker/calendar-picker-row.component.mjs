/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewContainerRef, } from '@angular/core';
import { NbCalendarSize } from '../../model';
import * as i0 from "@angular/core";
export class NbCalendarPickerRowComponent {
    constructor(cfr) {
        this.cfr = cfr;
        this.size = NbCalendarSize.MEDIUM;
        // eslint-disable-next-line @angular-eslint/no-output-native
        this.select = new EventEmitter();
    }
    ngOnChanges() {
        const factory = this.cfr.resolveComponentFactory(this.component);
        this.containerRef.clear();
        this.row.forEach((date) => {
            const component = this.containerRef.createComponent(factory, this.containerRef.length);
            this.patchWithContext(component.instance, date);
            component.changeDetectorRef.detectChanges();
        });
    }
    patchWithContext(component, date) {
        component.visibleDate = this.visibleDate;
        component.selectedValue = this.selectedValue;
        component.date = date;
        component.min = this.min;
        component.max = this.max;
        component.filter = this.filter;
        component.size = this.size;
        component.select.subscribe(this.select.emit.bind(this.select));
    }
}
NbCalendarPickerRowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarPickerRowComponent, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarPickerRowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarPickerRowComponent, selector: "nb-calendar-picker-row", inputs: { row: "row", selectedValue: "selectedValue", visibleDate: "visibleDate", component: "component", min: "min", max: "max", filter: "filter", size: "size" }, outputs: { select: "select" }, viewQueries: [{ propertyName: "containerRef", first: true, predicate: TemplateRef, descendants: true, read: ViewContainerRef, static: true }], usesOnChanges: true, ngImport: i0, template: '<ng-template></ng-template>', isInline: true, styles: [":host{display:flex;justify-content:space-between}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarPickerRowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-calendar-picker-row',
                    styles: [
                        `
      :host {
        display: flex;
        justify-content: space-between;
      }
    `,
                    ],
                    template: '<ng-template></ng-template>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }]; }, propDecorators: { row: [{
                type: Input
            }], selectedValue: [{
                type: Input
            }], visibleDate: [{
                type: Input
            }], component: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], filter: [{
                type: Input
            }], size: [{
                type: Input
            }], select: [{
                type: Output
            }], containerRef: [{
                type: ViewChild,
                args: [TemplateRef, { read: ViewContainerRef, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcGlja2VyLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FsZW5kYXIta2l0L2NvbXBvbmVudHMvY2FsZW5kYXItcGlja2VyL2NhbGVuZGFyLXBpY2tlci1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixXQUFXLEVBRVgsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWtCLGNBQWMsRUFBd0IsTUFBTSxhQUFhLENBQUM7O0FBZW5GLE1BQU0sT0FBTyw0QkFBNEI7SUFnQnZDLFlBQW9CLEdBQTZCO1FBQTdCLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBUnhDLFNBQUksR0FBbUIsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUV0RCw0REFBNEQ7UUFDbEQsV0FBTSxHQUFvQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBS0gsQ0FBQztJQUVyRCxXQUFXO1FBQ1QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQU8sRUFBRSxFQUFFO1lBQzNCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hELFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxTQUErQixFQUFFLElBQU87UUFDL0QsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3pDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM3QyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QixTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDekIsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7O3lIQXZDVSw0QkFBNEI7NkdBQTVCLDRCQUE0QiwrU0FjNUIsV0FBVywyQkFBVSxnQkFBZ0IsZ0VBakJ0Qyw2QkFBNkI7MkZBRzVCLDRCQUE0QjtrQkFieEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxNQUFNLEVBQUU7d0JBQ047Ozs7O0tBS0M7cUJBQ0Y7b0JBQ0QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOytHQUVVLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBR0ksTUFBTTtzQkFBZixNQUFNO2dCQUcyRCxZQUFZO3NCQUE3RSxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJDYWxlbmRhckNlbGwsIE5iQ2FsZW5kYXJTaXplLCBOYkNhbGVuZGFyU2l6ZVZhbHVlcyB9IGZyb20gJy4uLy4uL21vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItY2FsZW5kYXItcGlja2VyLXJvdycsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iQ2FsZW5kYXJQaWNrZXJSb3dDb21wb25lbnQ8RCwgVD4gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSByb3c6IERbXTtcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogVDtcbiAgQElucHV0KCkgdmlzaWJsZURhdGU6IEQ7XG4gIEBJbnB1dCgpIGNvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxELCBUPj47XG4gIEBJbnB1dCgpIG1pbjogRDtcbiAgQElucHV0KCkgbWF4OiBEO1xuICBASW5wdXQoKSBmaWx0ZXI6IChEKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBzaXplOiBOYkNhbGVuZGFyU2l6ZSA9IE5iQ2FsZW5kYXJTaXplLk1FRElVTTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE5iQ2FsZW5kYXJTaXplVmFsdWVzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPEQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIFRPRE8gc3RhdGljIG11c3QgYmUgZmFsc2UgYXMgb2YgQW5ndWxhciA5LjAuMCwgaXNzdWVzLzE1MTRcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29tcG9uZW50KTtcblxuICAgIHRoaXMuY29udGFpbmVyUmVmLmNsZWFyKCk7XG5cbiAgICB0aGlzLnJvdy5mb3JFYWNoKChkYXRlOiBEKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSwgdGhpcy5jb250YWluZXJSZWYubGVuZ3RoKTtcbiAgICAgIHRoaXMucGF0Y2hXaXRoQ29udGV4dChjb21wb25lbnQuaW5zdGFuY2UsIGRhdGUpO1xuICAgICAgY29tcG9uZW50LmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcGF0Y2hXaXRoQ29udGV4dChjb21wb25lbnQ6IE5iQ2FsZW5kYXJDZWxsPEQsIFQ+LCBkYXRlOiBEKSB7XG4gICAgY29tcG9uZW50LnZpc2libGVEYXRlID0gdGhpcy52aXNpYmxlRGF0ZTtcbiAgICBjb21wb25lbnQuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcbiAgICBjb21wb25lbnQuZGF0ZSA9IGRhdGU7XG4gICAgY29tcG9uZW50Lm1pbiA9IHRoaXMubWluO1xuICAgIGNvbXBvbmVudC5tYXggPSB0aGlzLm1heDtcbiAgICBjb21wb25lbnQuZmlsdGVyID0gdGhpcy5maWx0ZXI7XG4gICAgY29tcG9uZW50LnNpemUgPSB0aGlzLnNpemU7XG4gICAgY29tcG9uZW50LnNlbGVjdC5zdWJzY3JpYmUodGhpcy5zZWxlY3QuZW1pdC5iaW5kKHRoaXMuc2VsZWN0KSk7XG4gIH1cbn1cbiJdfQ==