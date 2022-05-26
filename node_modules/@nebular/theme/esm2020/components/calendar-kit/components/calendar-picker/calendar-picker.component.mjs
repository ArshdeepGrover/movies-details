/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, HostBinding } from '@angular/core';
import { NbCalendarSize } from '../../model';
import * as i0 from "@angular/core";
import * as i1 from "./calendar-picker-row.component";
import * as i2 from "@angular/common";
export class NbCalendarPickerComponent {
    constructor() {
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
}
NbCalendarPickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarPickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbCalendarPickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarPickerComponent, selector: "nb-calendar-picker", inputs: { data: "data", visibleDate: "visibleDate", selectedValue: "selectedValue", cellComponent: "cellComponent", min: "min", max: "max", filter: "filter", size: "size" }, outputs: { select: "select" }, host: { properties: { "class.size-large": "this.isLarge" } }, ngImport: i0, template: `
    <nb-calendar-picker-row
      *ngFor="let row of data"
      [row]="row"
      [visibleDate]="visibleDate"
      [selectedValue]="selectedValue"
      [component]="cellComponent"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [size]="size"
      (select)="select.emit($event)">
    </nb-calendar-picker-row>
  `, isInline: true, components: [{ type: i1.NbCalendarPickerRowComponent, selector: "nb-calendar-picker-row", inputs: ["row", "selectedValue", "visibleDate", "component", "min", "max", "filter", "size"], outputs: ["select"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarPickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-calendar-picker',
                    template: `
    <nb-calendar-picker-row
      *ngFor="let row of data"
      [row]="row"
      [visibleDate]="visibleDate"
      [selectedValue]="selectedValue"
      [component]="cellComponent"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [size]="size"
      (select)="select.emit($event)">
    </nb-calendar-picker-row>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { data: [{
                type: Input
            }], visibleDate: [{
                type: Input
            }], selectedValue: [{
                type: Input
            }], cellComponent: [{
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
            }], isLarge: [{
                type: HostBinding,
                args: ['class.size-large']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jYWxlbmRhci1raXQvY29tcG9uZW50cy9jYWxlbmRhci1waWNrZXIvY2FsZW5kYXItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBUSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkgsT0FBTyxFQUFrQixjQUFjLEVBQXdCLE1BQU0sYUFBYSxDQUFDOzs7O0FBcUJuRixNQUFNLE9BQU8seUJBQXlCO0lBbEJ0QztRQTBCVyxTQUFJLEdBQW1CLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFFNUMsV0FBTSxHQUFvQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBTXhEO0lBSkMsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDNUMsQ0FBQzs7c0hBZlUseUJBQXlCOzBHQUF6Qix5QkFBeUIscVVBaEIxQjs7Ozs7Ozs7Ozs7OztHQWFUOzJGQUdVLHlCQUF5QjtrQkFsQnJDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0dBYVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzhCQUVVLElBQUk7c0JBQVosS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRUksTUFBTTtzQkFBZixNQUFNO2dCQUdILE9BQU87c0JBRFYsV0FBVzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVHlwZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJDYWxlbmRhckNlbGwsIE5iQ2FsZW5kYXJTaXplLCBOYkNhbGVuZGFyU2l6ZVZhbHVlcyB9IGZyb20gJy4uLy4uL21vZGVsJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1jYWxlbmRhci1waWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYi1jYWxlbmRhci1waWNrZXItcm93XG4gICAgICAqbmdGb3I9XCJsZXQgcm93IG9mIGRhdGFcIlxuICAgICAgW3Jvd109XCJyb3dcIlxuICAgICAgW3Zpc2libGVEYXRlXT1cInZpc2libGVEYXRlXCJcbiAgICAgIFtzZWxlY3RlZFZhbHVlXT1cInNlbGVjdGVkVmFsdWVcIlxuICAgICAgW2NvbXBvbmVudF09XCJjZWxsQ29tcG9uZW50XCJcbiAgICAgIFttaW5dPVwibWluXCJcbiAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgIFtmaWx0ZXJdPVwiZmlsdGVyXCJcbiAgICAgIFtzaXplXT1cInNpemVcIlxuICAgICAgKHNlbGVjdCk9XCJzZWxlY3QuZW1pdCgkZXZlbnQpXCI+XG4gICAgPC9uYi1jYWxlbmRhci1waWNrZXItcm93PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhclBpY2tlckNvbXBvbmVudDxELCBUPiB7XG4gIEBJbnB1dCgpIGRhdGE6IERbXVtdO1xuICBASW5wdXQoKSB2aXNpYmxlRGF0ZTogRDtcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogVDtcbiAgQElucHV0KCkgY2VsbENvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxELCBUPj47XG4gIEBJbnB1dCgpIG1pbjogRDtcbiAgQElucHV0KCkgbWF4OiBEO1xuICBASW5wdXQoKSBmaWx0ZXI6IChEKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBzaXplOiBOYkNhbGVuZGFyU2l6ZSA9IE5iQ2FsZW5kYXJTaXplLk1FRElVTTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE5iQ2FsZW5kYXJTaXplVmFsdWVzO1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8RD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWxhcmdlJylcbiAgZ2V0IGlzTGFyZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gTmJDYWxlbmRhclNpemUuTEFSR0U7XG4gIH1cbn1cbiJdfQ==