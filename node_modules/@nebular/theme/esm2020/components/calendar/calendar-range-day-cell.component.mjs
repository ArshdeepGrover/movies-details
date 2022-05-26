/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, HostListener, } from '@angular/core';
import { NbCalendarSize } from '../calendar-kit/model';
import { NbBaseCalendarRangeCell } from './base-calendar-range-cell';
import * as i0 from "@angular/core";
import * as i1 from "../calendar-kit/services/date.service";
export class NbCalendarRangeDayCellComponent extends NbBaseCalendarRangeCell {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.rangeCellClass = true;
        this.dayCellClass = true;
    }
    get inRange() {
        if (this.date && this.hasRange) {
            return this.isInRange(this.date, this.selectedValue);
        }
        return false;
    }
    get start() {
        return this.date && this.hasRange && this.dateService.isSameDay(this.date, this.selectedValue.start);
    }
    get end() {
        return this.date && this.hasRange && this.dateService.isSameDay(this.date, this.selectedValue.end);
    }
    get today() {
        return this.date && this.dateService.isSameDay(this.date, this.dateService.today());
    }
    get boundingMonth() {
        return !this.dateService.isSameMonthSafe(this.date, this.visibleDate);
    }
    get selected() {
        if (this.inRange) {
            return true;
        }
        if (this.selectedValue) {
            return this.dateService.isSameDaySafe(this.date, this.selectedValue.start);
        }
        return false;
    }
    get empty() {
        return !this.date;
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax() || this.dontFitFilter();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get day() {
        return this.date && this.dateService.getDate(this.date);
    }
    onClick() {
        if (this.disabled || this.empty) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.date, this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.date, this.max) > 0;
    }
    dontFitFilter() {
        return this.date && this.filter && !this.filter(this.date);
    }
    isInRange(date, { start, end }) {
        const isGreaterThanStart = this.dateService.compareDates(this.date, start) >= 0;
        const isLessThanEnd = this.dateService.compareDates(this.date, end) <= 0;
        return isGreaterThanStart && isLessThanEnd;
    }
}
NbCalendarRangeDayCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarRangeDayCellComponent, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarRangeDayCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarRangeDayCellComponent, selector: "nb-calendar-range-day-cell", inputs: { date: "date", selectedValue: "selectedValue", visibleDate: "visibleDate", min: "min", max: "max", filter: "filter", size: "size" }, outputs: { select: "select" }, host: { listeners: { "click": "onClick()" }, properties: { "class.in-range": "this.inRange", "class.start": "this.start", "class.end": "this.end", "class.range-cell": "this.rangeCellClass", "class.day-cell": "this.dayCellClass", "class.today": "this.today", "class.bounding-month": "this.boundingMonth", "class.selected": "this.selected", "class.empty": "this.empty", "class.disabled": "this.disabled", "class.size-large": "this.isLarge" } }, usesInheritance: true, ngImport: i0, template: `
    <div class="cell-content">{{ day }}</div>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarRangeDayCellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-calendar-range-day-cell',
                    template: `
    <div class="cell-content">{{ day }}</div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; }, propDecorators: { date: [{
                type: Input
            }], selectedValue: [{
                type: Input
            }], visibleDate: [{
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
            }], inRange: [{
                type: HostBinding,
                args: ['class.in-range']
            }], start: [{
                type: HostBinding,
                args: ['class.start']
            }], end: [{
                type: HostBinding,
                args: ['class.end']
            }], rangeCellClass: [{
                type: HostBinding,
                args: ['class.range-cell']
            }], dayCellClass: [{
                type: HostBinding,
                args: ['class.day-cell']
            }], today: [{
                type: HostBinding,
                args: ['class.today']
            }], boundingMonth: [{
                type: HostBinding,
                args: ['class.bounding-month']
            }], selected: [{
                type: HostBinding,
                args: ['class.selected']
            }], empty: [{
                type: HostBinding,
                args: ['class.empty']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcmFuZ2UtZGF5LWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLXJhbmdlLWRheS1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWtCLGNBQWMsRUFBd0IsTUFBTSx1QkFBdUIsQ0FBQztBQUc3RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBU3JFLE1BQU0sT0FBTywrQkFBbUMsU0FBUSx1QkFBMEI7SUFtQmhGLFlBQXNCLFdBQTZCO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFksZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBTDFDLFNBQUksR0FBbUIsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUc1QyxXQUFNLEdBQW9CLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBMEIzRCxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUd0QixpQkFBWSxHQUFHLElBQUksQ0FBQztJQXpCcEIsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN0RDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFB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QVc7dUJBQUMsa0JBQWtCO2dCQVUvQixPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJDYWxlbmRhckNlbGwsIE5iQ2FsZW5kYXJTaXplLCBOYkNhbGVuZGFyU2l6ZVZhbHVlcyB9IGZyb20gJy4uL2NhbGVuZGFyLWtpdC9tb2RlbCc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyUmFuZ2UgfSBmcm9tICcuL2NhbGVuZGFyLXJhbmdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkRhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vY2FsZW5kYXIta2l0L3NlcnZpY2VzL2RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBOYkJhc2VDYWxlbmRhclJhbmdlQ2VsbCB9IGZyb20gJy4vYmFzZS1jYWxlbmRhci1yYW5nZS1jZWxsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItY2FsZW5kYXItcmFuZ2UtZGF5LWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjZWxsLWNvbnRlbnRcIj57eyBkYXkgfX08L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iQ2FsZW5kYXJSYW5nZURheUNlbGxDb21wb25lbnQ8RD4gZXh0ZW5kcyBOYkJhc2VDYWxlbmRhclJhbmdlQ2VsbDxEPlxuICBpbXBsZW1lbnRzIE5iQ2FsZW5kYXJDZWxsPEQsIE5iQ2FsZW5kYXJSYW5nZTxEPj4ge1xuICBASW5wdXQoKSBkYXRlOiBEO1xuXG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6IE5iQ2FsZW5kYXJSYW5nZTxEPjtcblxuICBASW5wdXQoKSB2aXNpYmxlRGF0ZTogRDtcblxuICBASW5wdXQoKSBtaW46IEQ7XG5cbiAgQElucHV0KCkgbWF4OiBEO1xuXG4gIEBJbnB1dCgpIGZpbHRlcjogKEQpID0+IGJvb2xlYW47XG5cbiAgQElucHV0KCkgc2l6ZTogTmJDYWxlbmRhclNpemUgPSBOYkNhbGVuZGFyU2l6ZS5NRURJVU07XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaXplOiBOYkNhbGVuZGFyU2l6ZVZhbHVlcztcblxuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8RD4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkYXRlU2VydmljZTogTmJEYXRlU2VydmljZTxEPikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmluLXJhbmdlJylcbiAgZ2V0IGluUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGF0ZSAmJiB0aGlzLmhhc1JhbmdlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0luUmFuZ2UodGhpcy5kYXRlLCB0aGlzLnNlbGVjdGVkVmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhcnQnKVxuICBnZXQgc3RhcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZSAmJiB0aGlzLmhhc1JhbmdlICYmIHRoaXMuZGF0ZVNlcnZpY2UuaXNTYW1lRGF5KHRoaXMuZGF0ZSwgdGhpcy5zZWxlY3RlZFZhbHVlLnN0YXJ0KTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZW5kJylcbiAgZ2V0IGVuZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlICYmIHRoaXMuaGFzUmFuZ2UgJiYgdGhpcy5kYXRlU2VydmljZS5pc1NhbWVEYXkodGhpcy5kYXRlLCB0aGlzLnNlbGVjdGVkVmFsdWUuZW5kKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucmFuZ2UtY2VsbCcpXG4gIHJhbmdlQ2VsbENsYXNzID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRheS1jZWxsJylcbiAgZGF5Q2VsbENsYXNzID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRvZGF5JylcbiAgZ2V0IHRvZGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGUgJiYgdGhpcy5kYXRlU2VydmljZS5pc1NhbWVEYXkodGhpcy5kYXRlLCB0aGlzLmRhdGVTZXJ2aWNlLnRvZGF5KCkpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ib3VuZGluZy1tb250aCcpXG4gIGdldCBib3VuZGluZ01vbnRoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5kYXRlU2VydmljZS5pc1NhbWVNb250aFNhZmUodGhpcy5kYXRlLCB0aGlzLnZpc2libGVEYXRlKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VsZWN0ZWQnKVxuICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaW5SYW5nZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuaXNTYW1lRGF5U2FmZSh0aGlzLmRhdGUsIHRoaXMuc2VsZWN0ZWRWYWx1ZS5zdGFydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5lbXB0eScpXG4gIGdldCBlbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZGF0ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc21hbGxlclRoYW5NaW4oKSB8fCB0aGlzLmdyZWF0ZXJUaGFuTWF4KCkgfHwgdGhpcy5kb250Rml0RmlsdGVyKCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtbGFyZ2UnKVxuICBnZXQgaXNMYXJnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSBOYkNhbGVuZGFyU2l6ZS5MQVJHRTtcbiAgfVxuXG4gIGdldCBkYXkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlICYmIHRoaXMuZGF0ZVNlcnZpY2UuZ2V0RGF0ZSh0aGlzLmRhdGUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuZW1wdHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuZGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc21hbGxlclRoYW5NaW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZSAmJiB0aGlzLm1pbiAmJiB0aGlzLmRhdGVTZXJ2aWNlLmNvbXBhcmVEYXRlcyh0aGlzLmRhdGUsIHRoaXMubWluKSA8IDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ3JlYXRlclRoYW5NYXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZSAmJiB0aGlzLm1heCAmJiB0aGlzLmRhdGVTZXJ2aWNlLmNvbXBhcmVEYXRlcyh0aGlzLmRhdGUsIHRoaXMubWF4KSA+IDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZG9udEZpdEZpbHRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlICYmIHRoaXMuZmlsdGVyICYmICF0aGlzLmZpbHRlcih0aGlzLmRhdGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzSW5SYW5nZShkYXRlOiBELCB7IHN0YXJ0LCBlbmQgfTogTmJDYWxlbmRhclJhbmdlPEQ+KTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNHcmVhdGVyVGhhblN0YXJ0ID0gdGhpcy5kYXRlU2VydmljZS5jb21wYXJlRGF0ZXModGhpcy5kYXRlLCBzdGFydCkgPj0gMDtcbiAgICBjb25zdCBpc0xlc3NUaGFuRW5kID0gdGhpcy5kYXRlU2VydmljZS5jb21wYXJlRGF0ZXModGhpcy5kYXRlLCBlbmQpIDw9IDA7XG5cbiAgICByZXR1cm4gaXNHcmVhdGVyVGhhblN0YXJ0ICYmIGlzTGVzc1RoYW5FbmQ7XG4gIH1cbn1cbiJdfQ==