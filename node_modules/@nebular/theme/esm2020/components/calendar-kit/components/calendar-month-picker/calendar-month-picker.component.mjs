/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { batch } from '../../helpers';
import { NbCalendarSize } from '../../model';
import { NbCalendarMonthCellComponent } from './calendar-month-cell.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/date.service";
import * as i2 from "../calendar-picker/calendar-picker.component";
export const MONTHS_IN_VIEW = 12;
export const MONTHS_IN_COLUMN = 4;
export class NbCalendarMonthPickerComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.monthChange = new EventEmitter();
        this.cellComponent = NbCalendarMonthCellComponent;
    }
    set _cellComponent(cellComponent) {
        if (cellComponent) {
            this.cellComponent = cellComponent;
        }
    }
    get large() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnChanges(changes) {
        if (changes.month) {
            this.initMonths();
        }
    }
    initMonths() {
        const date = this.dateService.getDate(this.month);
        const year = this.dateService.getYear(this.month);
        const firstMonth = this.dateService.createDate(year, 0, date);
        const months = [firstMonth];
        for (let monthIndex = 1; monthIndex < MONTHS_IN_VIEW; monthIndex++) {
            months.push(this.dateService.addMonth(firstMonth, monthIndex));
        }
        this.months = batch(months, MONTHS_IN_COLUMN);
    }
    onSelect(month) {
        this.monthChange.emit(month);
    }
}
NbCalendarMonthPickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarMonthPickerComponent, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarMonthPickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarMonthPickerComponent, selector: "nb-calendar-month-picker", inputs: { min: "min", max: "max", filter: "filter", size: "size", month: "month", date: "date", _cellComponent: ["cellComponent", "_cellComponent"] }, outputs: { monthChange: "monthChange" }, host: { properties: { "class.size-large": "this.large" } }, usesOnChanges: true, ngImport: i0, template: `
    <nb-calendar-picker
      [data]="months"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [selectedValue]="date"
      [visibleDate]="month"
      [cellComponent]="cellComponent"
      [size]="size"
      (select)="onSelect($event)">
    </nb-calendar-picker>
  `, isInline: true, components: [{ type: i2.NbCalendarPickerComponent, selector: "nb-calendar-picker", inputs: ["data", "visibleDate", "selectedValue", "cellComponent", "min", "max", "filter", "size"], outputs: ["select"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarMonthPickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-calendar-month-picker',
                    template: `
    <nb-calendar-picker
      [data]="months"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [selectedValue]="date"
      [visibleDate]="month"
      [cellComponent]="cellComponent"
      [size]="size"
      (select)="onSelect($event)">
    </nb-calendar-picker>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; }, propDecorators: { min: [{
                type: Input
            }], max: [{
                type: Input
            }], filter: [{
                type: Input
            }], size: [{
                type: Input
            }], month: [{
                type: Input
            }], date: [{
                type: Input
            }], monthChange: [{
                type: Output
            }], _cellComponent: [{
                type: Input,
                args: ['cellComponent']
            }], large: [{
                type: HostBinding,
                args: ['class.size-large']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jYWxlbmRhci1raXQvY29tcG9uZW50cy9jYWxlbmRhci1tb250aC1waWNrZXIvY2FsZW5kYXItbW9udGgtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsTUFBTSxHQUdQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxFQUFrQixjQUFjLEVBQXdCLE1BQU0sYUFBYSxDQUFDO0FBQ25GLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRy9FLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBbUJsQyxNQUFNLE9BQU8sOEJBQThCO0lBdUJ6QyxZQUFzQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFoQjFDLFNBQUksR0FBbUIsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQWE1QyxnQkFBVyxHQUFvQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBWTVELGtCQUFhLEdBQW1DLDRCQUE0QixDQUFDO0lBUjdFLENBQUM7SUFFRCxJQUNJLGNBQWMsQ0FBQyxhQUF5QztRQUMxRCxJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUNwQztJQUNILENBQUM7SUFHRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxNQUFNLE1BQU0sR0FBRyxDQUFFLFVBQVUsQ0FBRSxDQUFDO1FBRTlCLEtBQUssSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxjQUFjLEVBQUUsVUFBVSxFQUFFLEVBQUU7WUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUNoRTtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxRQUFRLENBQUMsS0FBUTtRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7OzJIQTVEVSw4QkFBOEI7K0dBQTlCLDhCQUE4QixpVkFmL0I7Ozs7Ozs7Ozs7OztHQVlUOzJGQUdVLDhCQUE4QjtrQkFqQjFDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7b0dBR1UsR0FBRztzQkFBWCxLQUFLO2dCQUVHLEdBQUc7c0JBQVgsS0FBSztnQkFFRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQU1HLEtBQUs7c0JBQWIsS0FBSztnQkFLRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRUksV0FBVztzQkFBcEIsTUFBTTtnQkFPSCxjQUFjO3NCQURqQixLQUFLO3VCQUFDLGVBQWU7Z0JBU2xCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgVHlwZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXRjaCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTmJDYWxlbmRhckNlbGwsIE5iQ2FsZW5kYXJTaXplLCBOYkNhbGVuZGFyU2l6ZVZhbHVlcyB9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7IE5iQ2FsZW5kYXJNb250aENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLW1vbnRoLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IE5iRGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgTU9OVEhTX0lOX1ZJRVcgPSAxMjtcbmV4cG9ydCBjb25zdCBNT05USFNfSU5fQ09MVU1OID0gNDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItY2FsZW5kYXItbW9udGgtcGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmItY2FsZW5kYXItcGlja2VyXG4gICAgICBbZGF0YV09XCJtb250aHNcIlxuICAgICAgW21pbl09XCJtaW5cIlxuICAgICAgW21heF09XCJtYXhcIlxuICAgICAgW2ZpbHRlcl09XCJmaWx0ZXJcIlxuICAgICAgW3NlbGVjdGVkVmFsdWVdPVwiZGF0ZVwiXG4gICAgICBbdmlzaWJsZURhdGVdPVwibW9udGhcIlxuICAgICAgW2NlbGxDb21wb25lbnRdPVwiY2VsbENvbXBvbmVudFwiXG4gICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgIChzZWxlY3QpPVwib25TZWxlY3QoJGV2ZW50KVwiPlxuICAgIDwvbmItY2FsZW5kYXItcGlja2VyPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhck1vbnRoUGlja2VyQ29tcG9uZW50PEQsIFQ+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBtaW46IEQ7XG5cbiAgQElucHV0KCkgbWF4OiBEO1xuXG4gIEBJbnB1dCgpIGZpbHRlcjogKEQpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNpemU6IE5iQ2FsZW5kYXJTaXplID0gTmJDYWxlbmRhclNpemUuTUVESVVNO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2l6ZTogTmJDYWxlbmRhclNpemVWYWx1ZXM7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgbW9udGhcbiAgICoqL1xuICBASW5wdXQoKSBtb250aDogRDtcblxuICAvKipcbiAgICogU2VsZWN0ZWQgZGF0ZVxuICAgKiovXG4gIEBJbnB1dCgpIGRhdGU6IEQ7XG5cbiAgQE91dHB1dCgpIG1vbnRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG1vbnRoczogRFtdW107XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGVTZXJ2aWNlOiBOYkRhdGVTZXJ2aWNlPEQ+KSB7XG4gIH1cblxuICBASW5wdXQoJ2NlbGxDb21wb25lbnQnKVxuICBzZXQgX2NlbGxDb21wb25lbnQoY2VsbENvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxELCBUPj4pIHtcbiAgICBpZiAoY2VsbENvbXBvbmVudCkge1xuICAgICAgdGhpcy5jZWxsQ29tcG9uZW50ID0gY2VsbENvbXBvbmVudDtcbiAgICB9XG4gIH1cbiAgY2VsbENvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxhbnksIGFueT4+ID0gTmJDYWxlbmRhck1vbnRoQ2VsbENvbXBvbmVudDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtbGFyZ2UnKVxuICBnZXQgbGFyZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gTmJDYWxlbmRhclNpemUuTEFSR0U7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMubW9udGgpIHtcbiAgICAgIHRoaXMuaW5pdE1vbnRocygpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRNb250aHMoKSB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZVNlcnZpY2UuZ2V0RGF0ZSh0aGlzLm1vbnRoKTtcbiAgICBjb25zdCB5ZWFyID0gdGhpcy5kYXRlU2VydmljZS5nZXRZZWFyKHRoaXMubW9udGgpO1xuICAgIGNvbnN0IGZpcnN0TW9udGggPSB0aGlzLmRhdGVTZXJ2aWNlLmNyZWF0ZURhdGUoeWVhciwgMCwgZGF0ZSk7XG4gICAgY29uc3QgbW9udGhzID0gWyBmaXJzdE1vbnRoIF07XG5cbiAgICBmb3IgKGxldCBtb250aEluZGV4ID0gMTsgbW9udGhJbmRleCA8IE1PTlRIU19JTl9WSUVXOyBtb250aEluZGV4KyspIHtcbiAgICAgIG1vbnRocy5wdXNoKHRoaXMuZGF0ZVNlcnZpY2UuYWRkTW9udGgoZmlyc3RNb250aCwgbW9udGhJbmRleCkpO1xuICAgIH1cblxuICAgIHRoaXMubW9udGhzID0gYmF0Y2gobW9udGhzLCBNT05USFNfSU5fQ09MVU1OKTtcbiAgfVxuXG4gIG9uU2VsZWN0KG1vbnRoOiBEKSB7XG4gICAgdGhpcy5tb250aENoYW5nZS5lbWl0KG1vbnRoKTtcbiAgfVxufVxuIl19