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
export class NbCalendarRangeYearCellComponent extends NbBaseCalendarRangeCell {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.yearCellClass = true;
        this.rangeCellClass = true;
    }
    get inRange() {
        return this.hasRange && this.isInRange(this.date, this.selectedValue);
    }
    get rangeStart() {
        return this.hasRange && this.dateService.isSameYear(this.date, this.selectedValue.start);
    }
    get rangeEnd() {
        return this.hasRange && this.dateService.isSameYear(this.date, this.selectedValue.end);
    }
    get selected() {
        if (this.inRange) {
            return true;
        }
        if (this.selectedValue) {
            return this.dateService.isSameYearSafe(this.date, this.selectedValue.start);
        }
        return false;
    }
    get today() {
        return this.dateService.isSameYear(this.date, this.dateService.today());
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get year() {
        return this.dateService.getYear(this.date);
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.yearEnd(), this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.yearStart(), this.max) > 0;
    }
    yearStart() {
        return this.dateService.getYearStart(this.date);
    }
    yearEnd() {
        return this.dateService.getYearEnd(this.date);
    }
    isInRange(date, { start, end }) {
        if (start && end) {
            const cellYear = this.dateService.getYear(date);
            const startYear = this.dateService.getYear(start);
            const endYear = this.dateService.getYear(end);
            return cellYear >= startYear && cellYear <= endYear;
        }
        return this.dateService.isSameYear(date, start);
    }
}
NbCalendarRangeYearCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarRangeYearCellComponent, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarRangeYearCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarRangeYearCellComponent, selector: "nb-calendar-range-year-cell", inputs: { date: "date", min: "min", max: "max", selectedValue: "selectedValue", size: "size" }, outputs: { select: "select" }, host: { listeners: { "click": "onClick()" }, properties: { "class.in-range": "this.inRange", "class.start": "this.rangeStart", "class.end": "this.rangeEnd", "class.selected": "this.selected", "class.today": "this.today", "class.disabled": "this.disabled", "class.size-large": "this.isLarge", "class.year-cell": "this.yearCellClass", "class.range-cell": "this.rangeCellClass" } }, usesInheritance: true, ngImport: i0, template: `
    <div class="cell-content">
      {{ year }}
    </div>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarRangeYearCellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-calendar-range-year-cell',
                    template: `
    <div class="cell-content">
      {{ year }}
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; }, propDecorators: { date: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], selectedValue: [{
                type: Input
            }], size: [{
                type: Input
            }], select: [{
                type: Output
            }], inRange: [{
                type: HostBinding,
                args: ['class.in-range']
            }], rangeStart: [{
                type: HostBinding,
                args: ['class.start']
            }], rangeEnd: [{
                type: HostBinding,
                args: ['class.end']
            }], selected: [{
                type: HostBinding,
                args: ['class.selected']
            }], today: [{
                type: HostBinding,
                args: ['class.today']
            }], disabled: [{
                type: HostBinding,
                args: ['class.disabled']
            }], isLarge: [{
                type: HostBinding,
                args: ['class.size-large']
            }], yearCellClass: [{
                type: HostBinding,
                args: ['class.year-cell']
            }], rangeCellClass: [{
                type: HostBinding,
                args: ['class.range-cell']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcmFuZ2UteWVhci1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci1yYW5nZS15ZWFyLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBa0IsY0FBYyxFQUF3QixNQUFNLHVCQUF1QixDQUFDO0FBRzdGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFXckUsTUFBTSxPQUFPLGdDQUFvQyxTQUFRLHVCQUEwQjtJQWVqRixZQUFzQixXQUE2QjtRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURZLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUwxQyxTQUFJLEdBQW1CLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFHNUMsV0FBTSxHQUFvQixJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWtEM0Qsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFHckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7SUFqRHRCLENBQUM7SUFFRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FB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QyxDQUFDO0lBQ2xELENBQUM7OzZIQTNHVSxnQ0FBZ0M7aUhBQWhDLGdDQUFnQyxxbEJBUGpDOzs7O0dBSVQ7MkZBR1UsZ0NBQWdDO2tCQVQ1QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFFBQVEsRUFBRTs7OztHQUlUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDtvR0FHVSxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsR0FBRztzQkFBWCxLQUFLO2dCQUVHLEdBQUc7c0JBQVgsS0FBSztnQkFFRyxhQUFhO3NCQUFyQixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSztnQkFHSSxNQUFNO3NCQUFmLE1BQU07Z0JBT0gsT0FBTztzQkFEVixXQUFXO3VCQUFDLGdCQUFnQjtnQkFNekIsVUFBVTtzQkFEYixXQUFXO3VCQUFDLGFBQWE7Z0JBTXRCLFFBQVE7c0JBRFgsV0FBVzt1QkFBQyxXQUFXO2dCQU1wQixRQUFRO3NCQURYLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQWN6QixLQUFLO3NCQURSLFdBQVc7dUJBQUMsYUFBYTtnQkFNdEIsUUFBUTtzQkFEWCxXQUFXO3VCQUFDLGdCQUFnQjtnQkFNekIsT0FBTztzQkFEVixXQUFXO3VCQUFDLGtCQUFrQjtnQkFNL0IsYUFBYTtzQkFEWixXQUFXO3VCQUFDLGlCQUFpQjtnQkFJOUIsY0FBYztzQkFEYixXQUFXO3VCQUFDLGtCQUFrQjtnQkFRL0IsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iQ2FsZW5kYXJDZWxsLCBOYkNhbGVuZGFyU2l6ZSwgTmJDYWxlbmRhclNpemVWYWx1ZXMgfSBmcm9tICcuLi9jYWxlbmRhci1raXQvbW9kZWwnO1xuaW1wb3J0IHsgTmJDYWxlbmRhclJhbmdlIH0gZnJvbSAnLi9jYWxlbmRhci1yYW5nZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJEYXRlU2VydmljZSB9IGZyb20gJy4uL2NhbGVuZGFyLWtpdC9zZXJ2aWNlcy9kYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJCYXNlQ2FsZW5kYXJSYW5nZUNlbGwgfSBmcm9tICcuL2Jhc2UtY2FsZW5kYXItcmFuZ2UtY2VsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNhbGVuZGFyLXJhbmdlLXllYXItY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNlbGwtY29udGVudFwiPlxuICAgICAge3sgeWVhciB9fVxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhclJhbmdlWWVhckNlbGxDb21wb25lbnQ8RD4gZXh0ZW5kcyBOYkJhc2VDYWxlbmRhclJhbmdlQ2VsbDxEPlxuICBpbXBsZW1lbnRzIE5iQ2FsZW5kYXJDZWxsPEQsIE5iQ2FsZW5kYXJSYW5nZTxEPj4ge1xuICBASW5wdXQoKSBkYXRlOiBEO1xuXG4gIEBJbnB1dCgpIG1pbjogRDtcblxuICBASW5wdXQoKSBtYXg6IEQ7XG5cbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogTmJDYWxlbmRhclJhbmdlPEQ+O1xuXG4gIEBJbnB1dCgpIHNpemU6IE5iQ2FsZW5kYXJTaXplID0gTmJDYWxlbmRhclNpemUuTUVESVVNO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2l6ZTogTmJDYWxlbmRhclNpemVWYWx1ZXM7XG5cbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPEQ+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGF0ZVNlcnZpY2U6IE5iRGF0ZVNlcnZpY2U8RD4pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbi1yYW5nZScpXG4gIGdldCBpblJhbmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc1JhbmdlICYmIHRoaXMuaXNJblJhbmdlKHRoaXMuZGF0ZSwgdGhpcy5zZWxlY3RlZFZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhcnQnKVxuICBnZXQgcmFuZ2VTdGFydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNSYW5nZSAmJiB0aGlzLmRhdGVTZXJ2aWNlLmlzU2FtZVllYXIodGhpcy5kYXRlLCB0aGlzLnNlbGVjdGVkVmFsdWUuc3RhcnQpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5lbmQnKVxuICBnZXQgcmFuZ2VFbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzUmFuZ2UgJiYgdGhpcy5kYXRlU2VydmljZS5pc1NhbWVZZWFyKHRoaXMuZGF0ZSwgdGhpcy5zZWxlY3RlZFZhbHVlLmVuZCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGVkJylcbiAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmluUmFuZ2UpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmlzU2FtZVllYXJTYWZlKHRoaXMuZGF0ZSwgdGhpcy5zZWxlY3RlZFZhbHVlLnN0YXJ0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRvZGF5JylcbiAgZ2V0IHRvZGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmlzU2FtZVllYXIodGhpcy5kYXRlLCB0aGlzLmRhdGVTZXJ2aWNlLnRvZGF5KCkpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zbWFsbGVyVGhhbk1pbigpIHx8IHRoaXMuZ3JlYXRlclRoYW5NYXgoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1sYXJnZScpXG4gIGdldCBpc0xhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09IE5iQ2FsZW5kYXJTaXplLkxBUkdFO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy55ZWFyLWNlbGwnKVxuICB5ZWFyQ2VsbENsYXNzID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnJhbmdlLWNlbGwnKVxuICByYW5nZUNlbGxDbGFzcyA9IHRydWU7XG5cbiAgZ2V0IHllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5nZXRZZWFyKHRoaXMuZGF0ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuZGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc21hbGxlclRoYW5NaW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZSAmJiB0aGlzLm1pbiAmJiB0aGlzLmRhdGVTZXJ2aWNlLmNvbXBhcmVEYXRlcyh0aGlzLnllYXJFbmQoKSwgdGhpcy5taW4pIDwgMDtcbiAgfVxuXG4gIHByb3RlY3RlZCBncmVhdGVyVGhhbk1heCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlICYmIHRoaXMubWF4ICYmIHRoaXMuZGF0ZVNlcnZpY2UuY29tcGFyZURhdGVzKHRoaXMueWVhclN0YXJ0KCksIHRoaXMubWF4KSA+IDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgeWVhclN0YXJ0KCk6IEQge1xuICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmdldFllYXJTdGFydCh0aGlzLmRhdGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHllYXJFbmQoKTogRCB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuZ2V0WWVhckVuZCh0aGlzLmRhdGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzSW5SYW5nZShkYXRlOiBELCB7IHN0YXJ0LCBlbmQgfTogTmJDYWxlbmRhclJhbmdlPEQ+KTogYm9vbGVhbiB7XG4gICAgaWYgKHN0YXJ0ICYmIGVuZCkge1xuICAgICAgY29uc3QgY2VsbFllYXIgPSB0aGlzLmRhdGVTZXJ2aWNlLmdldFllYXIoZGF0ZSk7XG4gICAgICBjb25zdCBzdGFydFllYXIgPSB0aGlzLmRhdGVTZXJ2aWNlLmdldFllYXIoc3RhcnQpO1xuICAgICAgY29uc3QgZW5kWWVhciA9IHRoaXMuZGF0ZVNlcnZpY2UuZ2V0WWVhcihlbmQpO1xuXG4gICAgICByZXR1cm4gY2VsbFllYXIgPj0gc3RhcnRZZWFyICYmIGNlbGxZZWFyIDw9IGVuZFllYXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuaXNTYW1lWWVhcihkYXRlLCBzdGFydCk7XG4gIH1cbn1cbiJdfQ==