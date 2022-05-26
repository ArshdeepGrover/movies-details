/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { NbCalendarSize } from '../calendar-kit/model';
import { NbBaseCalendarRangeCell } from './base-calendar-range-cell';
import * as i0 from "@angular/core";
import * as i1 from "../calendar-kit/services/date.service";
export class NbCalendarRangeMonthCellComponent extends NbBaseCalendarRangeCell {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.monthCellClass = true;
        this.rangeCellClass = true;
    }
    get month() {
        return this.dateService.getMonthName(this.date);
    }
    get selected() {
        if (this.inRange) {
            return true;
        }
        if (this.selectedValue) {
            return this.dateService.isSameMonthSafe(this.date, this.selectedValue.start);
        }
        return false;
    }
    get inRange() {
        if (this.hasRange) {
            return this.isInRage(this.date, this.selectedValue);
        }
        return false;
    }
    get rangeStart() {
        if (this.hasRange) {
            return this.dateService.isSameMonth(this.date, this.selectedValue.start);
        }
        return false;
    }
    get rangeEnd() {
        if (this.hasRange) {
            return this.dateService.isSameMonth(this.date, this.selectedValue.end);
        }
        return false;
    }
    get today() {
        return this.dateService.isSameMonthSafe(this.date, this.dateService.today());
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.monthEnd(), this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.monthStart(), this.max) > 0;
    }
    monthStart() {
        return this.dateService.getMonthStart(this.date);
    }
    monthEnd() {
        return this.dateService.getMonthEnd(this.date);
    }
    isInRage(date, range) {
        if (range.start && range.end) {
            const cellDate = this.dateService.getMonthStart(date);
            const start = this.dateService.getMonthStart(range.start);
            const end = this.dateService.getMonthStart(range.end);
            const isGreaterThanStart = this.dateService.compareDates(cellDate, start) >= 0;
            const isLessThanEnd = this.dateService.compareDates(cellDate, end) <= 0;
            return isGreaterThanStart && isLessThanEnd;
        }
        return this.dateService.isSameMonth(date, range.start);
    }
}
NbCalendarRangeMonthCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarRangeMonthCellComponent, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarRangeMonthCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarRangeMonthCellComponent, selector: "nb-calendar-range-month-cell", inputs: { date: "date", visibleDate: "visibleDate", selectedValue: "selectedValue", min: "min", max: "max", size: "size" }, outputs: { select: "select" }, host: { listeners: { "click": "onClick()" }, properties: { "class.month-cell": "this.monthCellClass", "class.range-cell": "this.rangeCellClass", "class.selected": "this.selected", "class.in-range": "this.inRange", "class.start": "this.rangeStart", "class.end": "this.rangeEnd", "class.today": "this.today", "class.disabled": "this.disabled", "class.size-large": "this.isLarge" } }, usesInheritance: true, ngImport: i0, template: `
    <div class="cell-content">
      {{ month }}
    </div>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarRangeMonthCellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-calendar-range-month-cell',
                    template: `
    <div class="cell-content">
      {{ month }}
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; }, propDecorators: { date: [{
                type: Input
            }], visibleDate: [{
                type: Input
            }], selectedValue: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], size: [{
                type: Input
            }], select: [{
                type: Output
            }], monthCellClass: [{
                type: HostBinding,
                args: ['class.month-cell']
            }], rangeCellClass: [{
                type: HostBinding,
                args: ['class.range-cell']
            }], selected: [{
                type: HostBinding,
                args: ['class.selected']
            }], inRange: [{
                type: HostBinding,
                args: ['class.in-range']
            }], rangeStart: [{
                type: HostBinding,
                args: ['class.start']
            }], rangeEnd: [{
                type: HostBinding,
                args: ['class.end']
            }], today: [{
                type: HostBinding,
                args: ['class.today']
            }], disabled: [{
                type: HostBinding,
                args: ['class.disabled']
            }], isLarge: [{
                type: HostBinding,
                args: ['class.size-large']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcmFuZ2UtbW9udGgtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXItcmFuZ2UtbW9udGgtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFrQixjQUFjLEVBQXdCLE1BQU0sdUJBQXVCLENBQUM7QUFHN0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQVdyRSxNQUFNLE9BQU8saUNBQXFDLFNBQVEsdUJBQTBCO0lBc0ZsRixZQUFzQixXQUE2QjtRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURZLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQXhFMUMsU0FBSSxHQUFtQixjQUFjLENBQUMsTUFBTSxDQUFDO1FBRzVDLFdBQU0sR0FBb0IsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHM0QsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFHdEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7SUFpRXRCLENBQUM7SUFyRkQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQW9CRCxJQUNJLFFBQVE7UUFDVixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxD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LFdBQVc7dUJBQUMsZ0JBQWdCO2dCQU16QixPQUFPO3NCQURWLFdBQVc7dUJBQUMsa0JBQWtCO2dCQU0vQixPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJDYWxlbmRhckNlbGwsIE5iQ2FsZW5kYXJTaXplLCBOYkNhbGVuZGFyU2l6ZVZhbHVlcyB9IGZyb20gJy4uL2NhbGVuZGFyLWtpdC9tb2RlbCc7XG5pbXBvcnQgeyBOYkRhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vY2FsZW5kYXIta2l0L3NlcnZpY2VzL2RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyUmFuZ2UgfSBmcm9tICcuL2NhbGVuZGFyLXJhbmdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkJhc2VDYWxlbmRhclJhbmdlQ2VsbCB9IGZyb20gJy4vYmFzZS1jYWxlbmRhci1yYW5nZS1jZWxsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItY2FsZW5kYXItcmFuZ2UtbW9udGgtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNlbGwtY29udGVudFwiPlxuICAgICAge3sgbW9udGggfX1cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iQ2FsZW5kYXJSYW5nZU1vbnRoQ2VsbENvbXBvbmVudDxEPiBleHRlbmRzIE5iQmFzZUNhbGVuZGFyUmFuZ2VDZWxsPEQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcGxlbWVudHMgTmJDYWxlbmRhckNlbGw8RCwgTmJDYWxlbmRhclJhbmdlPEQ+PiB7XG5cbiAgZ2V0IG1vbnRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuZ2V0TW9udGhOYW1lKHRoaXMuZGF0ZSk7XG4gIH1cblxuICBASW5wdXQoKSBkYXRlOiBEO1xuICBASW5wdXQoKSB2aXNpYmxlRGF0ZTogRDtcblxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBOYkNhbGVuZGFyUmFuZ2U8RD47XG4gIEBJbnB1dCgpIG1pbjogRDtcbiAgQElucHV0KCkgbWF4OiBEO1xuXG4gIEBJbnB1dCgpIHNpemU6IE5iQ2FsZW5kYXJTaXplID0gTmJDYWxlbmRhclNpemUuTUVESVVNO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2l6ZTogTmJDYWxlbmRhclNpemVWYWx1ZXM7XG5cbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPEQ+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1vbnRoLWNlbGwnKVxuICBtb250aENlbGxDbGFzcyA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yYW5nZS1jZWxsJylcbiAgcmFuZ2VDZWxsQ2xhc3MgPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VsZWN0ZWQnKVxuICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaW5SYW5nZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuaXNTYW1lTW9udGhTYWZlKHRoaXMuZGF0ZSwgdGhpcy5zZWxlY3RlZFZhbHVlLnN0YXJ0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmluLXJhbmdlJylcbiAgZ2V0IGluUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFzUmFuZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzSW5SYWdlKHRoaXMuZGF0ZSwgdGhpcy5zZWxlY3RlZFZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGFydCcpXG4gIGdldCByYW5nZVN0YXJ0KCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmhhc1JhbmdlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5pc1NhbWVNb250aCh0aGlzLmRhdGUsIHRoaXMuc2VsZWN0ZWRWYWx1ZS5zdGFydCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZW5kJylcbiAgZ2V0IHJhbmdlRW5kKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmhhc1JhbmdlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5pc1NhbWVNb250aCh0aGlzLmRhdGUsIHRoaXMuc2VsZWN0ZWRWYWx1ZS5lbmQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRvZGF5JylcbiAgZ2V0IHRvZGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmlzU2FtZU1vbnRoU2FmZSh0aGlzLmRhdGUsIHRoaXMuZGF0ZVNlcnZpY2UudG9kYXkoKSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNtYWxsZXJUaGFuTWluKCkgfHwgdGhpcy5ncmVhdGVyVGhhbk1heCgpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWxhcmdlJylcbiAgZ2V0IGlzTGFyZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gTmJDYWxlbmRhclNpemUuTEFSR0U7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuZGF0ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGF0ZVNlcnZpY2U6IE5iRGF0ZVNlcnZpY2U8RD4pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNtYWxsZXJUaGFuTWluKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGUgJiYgdGhpcy5taW4gJiYgdGhpcy5kYXRlU2VydmljZS5jb21wYXJlRGF0ZXModGhpcy5tb250aEVuZCgpLCB0aGlzLm1pbikgPCAwO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdyZWF0ZXJUaGFuTWF4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGUgJiYgdGhpcy5tYXggJiYgdGhpcy5kYXRlU2VydmljZS5jb21wYXJlRGF0ZXModGhpcy5tb250aFN0YXJ0KCksIHRoaXMubWF4KSA+IDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgbW9udGhTdGFydCgpOiBEIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5nZXRNb250aFN0YXJ0KHRoaXMuZGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbW9udGhFbmQoKTogRCB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuZ2V0TW9udGhFbmQodGhpcy5kYXRlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0luUmFnZShkYXRlOiBELCByYW5nZTogTmJDYWxlbmRhclJhbmdlPEQ+KTogYm9vbGVhbiB7XG4gICAgaWYgKHJhbmdlLnN0YXJ0ICYmIHJhbmdlLmVuZCkge1xuICAgICAgY29uc3QgY2VsbERhdGUgPSB0aGlzLmRhdGVTZXJ2aWNlLmdldE1vbnRoU3RhcnQoZGF0ZSk7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuZGF0ZVNlcnZpY2UuZ2V0TW9udGhTdGFydChyYW5nZS5zdGFydCk7XG4gICAgICBjb25zdCBlbmQgPSB0aGlzLmRhdGVTZXJ2aWNlLmdldE1vbnRoU3RhcnQocmFuZ2UuZW5kKTtcblxuICAgICAgY29uc3QgaXNHcmVhdGVyVGhhblN0YXJ0ID0gdGhpcy5kYXRlU2VydmljZS5jb21wYXJlRGF0ZXMoY2VsbERhdGUsIHN0YXJ0KSA+PSAwO1xuICAgICAgY29uc3QgaXNMZXNzVGhhbkVuZCA9IHRoaXMuZGF0ZVNlcnZpY2UuY29tcGFyZURhdGVzKGNlbGxEYXRlLCBlbmQpIDw9IDA7XG5cbiAgICAgIHJldHVybiBpc0dyZWF0ZXJUaGFuU3RhcnQgJiYgaXNMZXNzVGhhbkVuZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5pc1NhbWVNb250aChkYXRlLCByYW5nZS5zdGFydCk7XG4gIH1cbn1cbiJdfQ==