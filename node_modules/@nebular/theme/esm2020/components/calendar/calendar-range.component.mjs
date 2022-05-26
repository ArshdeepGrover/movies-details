/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbCalendarSize, NbCalendarViewMode, } from '../calendar-kit/model';
import { NbCalendarRangeDayCellComponent } from './calendar-range-day-cell.component';
import { NbCalendarRangeYearCellComponent } from './calendar-range-year-cell.component';
import { NbCalendarRangeMonthCellComponent } from './calendar-range-month-cell.component';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../calendar-kit/services/date.service";
import * as i2 from "./base-calendar.component";
/**
 * CalendarRange component provides a capability to choose a date range.
 *
 * ```html
 * <nb-calendar [(date)]="date"></nb-calendar>
 * <nb-calendar [date]="date" (dateChange)="handleDateChange($event)"></nb-calendar>
 * ```
 *
 * Basic usage example
 * @stacked-example(Range, calendar/calendar-range-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCalendarRangeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCalendarRangeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * CalendarRange component supports all of the Calendar component customization properties. More defails can be found
 * in the [Calendar component docs](docs/components/calendar).
 *
 * @styles
 *
 * calendar-width:
 * calendar-background-color:
 * calendar-border-color:
 * calendar-border-style:
 * calendar-border-width:
 * calendar-border-radius:
 * calendar-text-color:
 * calendar-text-font-family:
 * calendar-text-font-size:
 * calendar-text-font-weight:
 * calendar-text-line-height:
 * calendar-picker-padding-top:
 * calendar-picker-padding-bottom:
 * calendar-picker-padding-start:
 * calendar-picker-padding-end:
 * calendar-navigation-text-color:
 * calendar-navigation-text-font-family:
 * calendar-navigation-title-text-font-size:
 * calendar-navigation-title-text-font-weight:
 * calendar-navigation-title-text-line-height:
 * calendar-navigation-padding:
 * calendar-cell-inactive-text-color:
 * calendar-cell-disabled-text-color:
 * calendar-cell-hover-background-color:
 * calendar-cell-hover-border-color:
 * calendar-cell-hover-text-color:
 * calendar-cell-hover-text-font-size:
 * calendar-cell-hover-text-font-weight:
 * calendar-cell-hover-text-line-height:
 * calendar-cell-active-background-color:
 * calendar-cell-active-border-color:
 * calendar-cell-active-text-color:
 * calendar-cell-active-text-font-size:
 * calendar-cell-active-text-font-weight:
 * calendar-cell-active-text-line-height:
 * calendar-cell-today-background-color:
 * calendar-cell-today-border-color:
 * calendar-cell-today-text-color:
 * calendar-cell-today-text-font-size:
 * calendar-cell-today-text-font-weight:
 * calendar-cell-today-text-line-height:
 * calendar-cell-today-hover-background-color:
 * calendar-cell-today-hover-border-color:
 * calendar-cell-today-active-background-color:
 * calendar-cell-today-active-border-color:
 * calendar-cell-today-disabled-border-color:
 * calendar-cell-today-selected-background-color:
 * calendar-cell-today-selected-border-color:
 * calendar-cell-today-selected-text-color:
 * calendar-cell-today-selected-hover-background-color:
 * calendar-cell-today-selected-hover-border-color:
 * calendar-cell-today-selected-active-background-color:
 * calendar-cell-today-selected-active-border-color:
 * calendar-cell-today-in-range-background-color:
 * calendar-cell-today-in-range-border-color:
 * calendar-cell-today-in-range-text-color:
 * calendar-cell-today-in-range-hover-background-color:
 * calendar-cell-today-in-range-hover-border-color:
 * calendar-cell-today-in-range-active-background-color:
 * calendar-cell-today-in-range-active-border-color:
 * calendar-cell-selected-background-color:
 * calendar-cell-selected-border-color:
 * calendar-cell-selected-text-color:
 * calendar-cell-selected-text-font-size:
 * calendar-cell-selected-text-font-weight:
 * calendar-cell-selected-text-line-height:
 * calendar-cell-selected-hover-background-color:
 * calendar-cell-selected-hover-border-color:
 * calendar-cell-selected-active-background-color:
 * calendar-cell-selected-active-border-color:
 * calendar-day-cell-width:
 * calendar-day-cell-height:
 * calendar-month-cell-width:
 * calendar-month-cell-height:
 * calendar-year-cell-width:
 * calendar-year-cell-height:
 * calendar-weekday-background:
 * calendar-weekday-divider-color:
 * calendar-weekday-divider-width:
 * calendar-weekday-text-color:
 * calendar-weekday-text-font-size:
 * calendar-weekday-text-font-weight:
 * calendar-weekday-text-line-height:
 * calendar-weekday-holiday-text-color:
 * calendar-weekday-height:
 * calendar-weekday-width:
 * calendar-weeknumber-background:
 * calendar-weeknumber-divider-color:
 * calendar-weeknumber-divider-width:
 * calendar-weeknumber-text-color:
 * calendar-weeknumber-text-font-size:
 * calendar-weeknumber-text-font-weight:
 * calendar-weeknumber-text-line-height:
 * calendar-weeknumber-height:
 * calendar-weeknumber-width:
 * calendar-large-width:
 * calendar-day-cell-large-width:
 * calendar-day-cell-large-height:
 * calendar-weekday-large-height:
 * calendar-weekday-large-width:
 * calendar-weeknumber-large-height:
 * calendar-weeknumber-large-width:
 * calendar-month-cell-large-width:
 * calendar-month-cell-large-height:
 * calendar-year-cell-large-width:
 * calendar-year-cell-large-height:
 * */
export class NbCalendarRangeComponent {
    constructor(dateService) {
        this.dateService = dateService;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines starting view for the calendar.
         * */
        this.startView = NbCalendarViewMode.DATE;
        this.dayCellComponent = NbCalendarRangeDayCellComponent;
        this.monthCellComponent = NbCalendarRangeMonthCellComponent;
        this.yearCellComponent = NbCalendarRangeYearCellComponent;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        /**
         * Determines should we show calendars navigation or not.
         * */
        this.showNavigation = true;
        this._showWeekNumber = false;
        /**
         * Sets symbol used as a header for week numbers column
         * */
        this.weekNumberSymbol = '#';
        /**
         * Emits range when start selected and emits again when end selected.
         * */
        this.rangeChange = new EventEmitter();
    }
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _cellComponent(cellComponent) {
        if (cellComponent) {
            this.dayCellComponent = cellComponent;
        }
    }
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _monthCellComponent(cellComponent) {
        if (cellComponent) {
            this.monthCellComponent = cellComponent;
        }
    }
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _yearCellComponent(cellComponent) {
        if (cellComponent) {
            this.yearCellComponent = cellComponent;
        }
    }
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber() {
        return this._showWeekNumber;
    }
    set showWeekNumber(value) {
        this._showWeekNumber = convertToBoolProperty(value);
    }
    onChange(date) {
        this.initDateIfNull();
        this.handleSelected(date);
    }
    initDateIfNull() {
        if (!this.range) {
            this.range = { start: null, end: null };
        }
    }
    handleSelected(date) {
        if (this.selectionStarted()) {
            this.selectEnd(date);
        }
        else {
            this.selectStart(date);
        }
    }
    selectionStarted() {
        const { start, end } = this.range;
        return start && !end;
    }
    selectStart(start) {
        this.selectRange({ start });
    }
    selectEnd(date) {
        const { start } = this.range;
        if (this.dateService.compareDates(date, start) > 0) {
            this.selectRange({ start, end: date });
        }
        else {
            this.selectRange({ start: date, end: start });
        }
    }
    selectRange(range) {
        this.range = range;
        this.rangeChange.emit(range);
    }
}
NbCalendarRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarRangeComponent, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarRangeComponent, selector: "nb-calendar-range", inputs: { boundingMonth: "boundingMonth", startView: "startView", min: "min", max: "max", filter: "filter", _cellComponent: ["dayCellComponent", "_cellComponent"], _monthCellComponent: ["monthCellComponent", "_monthCellComponent"], monthCellComponent: "monthCellComponent", _yearCellComponent: ["yearCellComponent", "_yearCellComponent"], size: "size", visibleDate: "visibleDate", showNavigation: "showNavigation", range: "range", showWeekNumber: "showWeekNumber", weekNumberSymbol: "weekNumberSymbol" }, outputs: { rangeChange: "rangeChange" }, ngImport: i0, template: `
    <nb-base-calendar
      [date]="range"
      (dateChange)="onChange($any($event))"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [startView]="startView"
      [boundingMonth]="boundingMonth"
      [dayCellComponent]="dayCellComponent"
      [monthCellComponent]="monthCellComponent"
      [yearCellComponent]="yearCellComponent"
      [visibleDate]="visibleDate"
      [showNavigation]="showNavigation"
      [size]="size"
      [showWeekNumber]="showWeekNumber"
      [weekNumberSymbol]="weekNumberSymbol"
    ></nb-base-calendar>
  `, isInline: true, components: [{ type: i2.NbBaseCalendarComponent, selector: "nb-base-calendar", inputs: ["boundingMonth", "startView", "min", "max", "filter", "dayCellComponent", "monthCellComponent", "yearCellComponent", "size", "visibleDate", "showNavigation", "date", "showWeekNumber", "weekNumberSymbol"], outputs: ["dateChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarRangeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-calendar-range',
                    template: `
    <nb-base-calendar
      [date]="range"
      (dateChange)="onChange($any($event))"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [startView]="startView"
      [boundingMonth]="boundingMonth"
      [dayCellComponent]="dayCellComponent"
      [monthCellComponent]="monthCellComponent"
      [yearCellComponent]="yearCellComponent"
      [visibleDate]="visibleDate"
      [showNavigation]="showNavigation"
      [size]="size"
      [showWeekNumber]="showWeekNumber"
      [weekNumberSymbol]="weekNumberSymbol"
    ></nb-base-calendar>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; }, propDecorators: { boundingMonth: [{
                type: Input
            }], startView: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], filter: [{
                type: Input
            }], _cellComponent: [{
                type: Input,
                args: ['dayCellComponent']
            }], _monthCellComponent: [{
                type: Input,
                args: ['monthCellComponent']
            }], monthCellComponent: [{
                type: Input
            }], _yearCellComponent: [{
                type: Input,
                args: ['yearCellComponent']
            }], size: [{
                type: Input
            }], visibleDate: [{
                type: Input
            }], showNavigation: [{
                type: Input
            }], range: [{
                type: Input
            }], showWeekNumber: [{
                type: Input
            }], weekNumberSymbol: [{
                type: Input
            }], rangeChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLXJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUU3RSxPQUFPLEVBRUwsY0FBYyxFQUNkLGtCQUFrQixHQUduQixNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBa0IsTUFBTSxZQUFZLENBQUM7Ozs7QUFRbkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBeUlLO0FBdUJMLE1BQU0sT0FBTyx3QkFBd0I7SUF3R25DLFlBQXNCLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQXZHbkQ7OzthQUdLO1FBQ0ksa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFFdkM7O2FBRUs7UUFDSSxjQUFTLEdBQXVCLGtCQUFrQixDQUFDLElBQUksQ0FBQztRQTJCakUscUJBQWdCLEdBQWdELCtCQUErQixDQUFDO1FBV3ZGLHVCQUFrQixHQUFnRCxpQ0FBaUMsQ0FBQztRQVc3RyxzQkFBaUIsR0FBZ0QsZ0NB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QXdCLDJsQkFwQnpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7MkZBRVUsd0JBQXdCO2tCQXRCcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtpQkFDRjtvR0FNVSxhQUFhO3NCQUFyQixLQUFLO2dCQUtHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBTUcsR0FBRztzQkFBWCxLQUFLO2dCQUtHLEdBQUc7c0JBQVgsS0FBSztnQkFLRyxNQUFNO3NCQUFkLEtBQUs7Z0JBTUYsY0FBYztzQkFEakIsS0FBSzt1QkFBQyxrQkFBa0I7Z0JBWXJCLG1CQUFtQjtzQkFEdEIsS0FBSzt1QkFBQyxvQkFBb0I7Z0JBTWxCLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFNRixrQkFBa0I7c0JBRHJCLEtBQUs7dUJBQUMsbUJBQW1CO2dCQVlqQixJQUFJO3NCQUFaLEtBQUs7Z0JBR0csV0FBVztzQkFBbkIsS0FBSztnQkFLRyxjQUFjO3NCQUF0QixLQUFLO2dCQUtHLEtBQUs7c0JBQWIsS0FBSztnQkFPRixjQUFjO3NCQURqQixLQUFLO2dCQWFHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFLSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBOYkNhbGVuZGFyQ2VsbCxcbiAgTmJDYWxlbmRhclNpemUsXG4gIE5iQ2FsZW5kYXJWaWV3TW9kZSxcbiAgTmJDYWxlbmRhclNpemVWYWx1ZXMsXG4gIE5iQ2FsZW5kYXJWaWV3TW9kZVZhbHVlcyxcbn0gZnJvbSAnLi4vY2FsZW5kYXIta2l0L21vZGVsJztcbmltcG9ydCB7IE5iRGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9jYWxlbmRhci1raXQvc2VydmljZXMvZGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5iQ2FsZW5kYXJSYW5nZURheUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXJhbmdlLWRheS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyUmFuZ2VZZWFyQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItcmFuZ2UteWVhci1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyUmFuZ2VNb250aENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXJhbmdlLW1vbnRoLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIE5iQ2FsZW5kYXJSYW5nZTxEPiB7XG4gIHN0YXJ0OiBEO1xuICBlbmQ/OiBEO1xufVxuXG4vKipcbiAqIENhbGVuZGFyUmFuZ2UgY29tcG9uZW50IHByb3ZpZGVzIGEgY2FwYWJpbGl0eSB0byBjaG9vc2UgYSBkYXRlIHJhbmdlLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxuYi1jYWxlbmRhciBbKGRhdGUpXT1cImRhdGVcIj48L25iLWNhbGVuZGFyPlxuICogPG5iLWNhbGVuZGFyIFtkYXRlXT1cImRhdGVcIiAoZGF0ZUNoYW5nZSk9XCJoYW5kbGVEYXRlQ2hhbmdlKCRldmVudClcIj48L25iLWNhbGVuZGFyPlxuICogYGBgXG4gKlxuICogQmFzaWMgdXNhZ2UgZXhhbXBsZVxuICogQHN0YWNrZWQtZXhhbXBsZShSYW5nZSwgY2FsZW5kYXIvY2FsZW5kYXItcmFuZ2Utc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqICMjIyBJbnN0YWxsYXRpb25cbiAqXG4gKiBJbXBvcnQgYE5iQ2FsZW5kYXJSYW5nZU1vZHVsZWAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJDYWxlbmRhclJhbmdlTW9kdWxlLFxuICogICBdLFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBQYWdlTW9kdWxlIHsgfVxuICogYGBgXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogQ2FsZW5kYXJSYW5nZSBjb21wb25lbnQgc3VwcG9ydHMgYWxsIG9mIHRoZSBDYWxlbmRhciBjb21wb25lbnQgY3VzdG9taXphdGlvbiBwcm9wZXJ0aWVzLiBNb3JlIGRlZmFpbHMgY2FuIGJlIGZvdW5kXG4gKiBpbiB0aGUgW0NhbGVuZGFyIGNvbXBvbmVudCBkb2NzXShkb2NzL2NvbXBvbmVudHMvY2FsZW5kYXIpLlxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiBjYWxlbmRhci13aWR0aDpcbiAqIGNhbGVuZGFyLWJhY2tncm91bmQtY29sb3I6XG4gKiBjYWxlbmRhci1ib3JkZXItY29sb3I6XG4gKiBjYWxlbmRhci1ib3JkZXItc3R5bGU6XG4gKiBjYWxlbmRhci1ib3JkZXItd2lkdGg6XG4gKiBjYWxlbmRhci1ib3JkZXItcmFkaXVzOlxuICogY2FsZW5kYXItdGV4dC1jb2xvcjpcbiAqIGNhbGVuZGFyLXRleHQtZm9udC1mYW1pbHk6XG4gKiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZTpcbiAqIGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQ6XG4gKiBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0OlxuICogY2FsZW5kYXItcGlja2VyLXBhZGRpbmctdG9wOlxuICogY2FsZW5kYXItcGlja2VyLXBhZGRpbmctYm90dG9tOlxuICogY2FsZW5kYXItcGlja2VyLXBhZGRpbmctc3RhcnQ6XG4gKiBjYWxlbmRhci1waWNrZXItcGFkZGluZy1lbmQ6XG4gKiBjYWxlbmRhci1uYXZpZ2F0aW9uLXRleHQtY29sb3I6XG4gKiBjYWxlbmRhci1uYXZpZ2F0aW9uLXRleHQtZm9udC1mYW1pbHk6XG4gKiBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtZm9udC1zaXplOlxuICogY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OlxuICogY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogY2FsZW5kYXItbmF2aWdhdGlvbi1wYWRkaW5nOlxuICogY2FsZW5kYXItY2VsbC1pbmFjdGl2ZS10ZXh0LWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtZm9udC1zaXplOlxuICogY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtd2VpZ2h0OlxuICogY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWxpbmUtaGVpZ2h0OlxuICogY2FsZW5kYXItY2VsbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWZvbnQtc2l6ZTpcbiAqIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtZm9udC13ZWlnaHQ6XG4gKiBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogY2FsZW5kYXItY2VsbC10b2RheS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS1ib3JkZXItY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtZm9udC1zaXplOlxuICogY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWZvbnQtd2VpZ2h0OlxuICogY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogY2FsZW5kYXItY2VsbC10b2RheS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXRvZGF5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWJvcmRlci1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtdGV4dC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYm9yZGVyLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS10ZXh0LWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtZm9udC1zaXplOlxuICogY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWZvbnQtd2VpZ2h0OlxuICogY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWxpbmUtaGVpZ2h0OlxuICogY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogY2FsZW5kYXItZGF5LWNlbGwtd2lkdGg6XG4gKiBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQ6XG4gKiBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoOlxuICogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQ6XG4gKiBjYWxlbmRhci15ZWFyLWNlbGwtd2lkdGg6XG4gKiBjYWxlbmRhci15ZWFyLWNlbGwtaGVpZ2h0OlxuICogY2FsZW5kYXItd2Vla2RheS1iYWNrZ3JvdW5kOlxuICogY2FsZW5kYXItd2Vla2RheS1kaXZpZGVyLWNvbG9yOlxuICogY2FsZW5kYXItd2Vla2RheS1kaXZpZGVyLXdpZHRoOlxuICogY2FsZW5kYXItd2Vla2RheS10ZXh0LWNvbG9yOlxuICogY2FsZW5kYXItd2Vla2RheS10ZXh0LWZvbnQtc2l6ZTpcbiAqIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1mb250LXdlaWdodDpcbiAqIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1saW5lLWhlaWdodDpcbiAqIGNhbGVuZGFyLXdlZWtkYXktaG9saWRheS10ZXh0LWNvbG9yOlxuICogY2FsZW5kYXItd2Vla2RheS1oZWlnaHQ6XG4gKiBjYWxlbmRhci13ZWVrZGF5LXdpZHRoOlxuICogY2FsZW5kYXItd2Vla251bWJlci1iYWNrZ3JvdW5kOlxuICogY2FsZW5kYXItd2Vla251bWJlci1kaXZpZGVyLWNvbG9yOlxuICogY2FsZW5kYXItd2Vla251bWJlci1kaXZpZGVyLXdpZHRoOlxuICogY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWNvbG9yOlxuICogY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWZvbnQtc2l6ZTpcbiAqIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1mb250LXdlaWdodDpcbiAqIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1saW5lLWhlaWdodDpcbiAqIGNhbGVuZGFyLXdlZWtudW1iZXItaGVpZ2h0OlxuICogY2FsZW5kYXItd2Vla251bWJlci13aWR0aDpcbiAqIGNhbGVuZGFyLWxhcmdlLXdpZHRoOlxuICogY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6XG4gKiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQ6XG4gKiBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLWhlaWdodDpcbiAqIGNhbGVuZGFyLXdlZWtkYXktbGFyZ2Utd2lkdGg6XG4gKiBjYWxlbmRhci13ZWVrbnVtYmVyLWxhcmdlLWhlaWdodDpcbiAqIGNhbGVuZGFyLXdlZWtudW1iZXItbGFyZ2Utd2lkdGg6XG4gKiBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLXdpZHRoOlxuICogY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQ6XG4gKiBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2Utd2lkdGg6XG4gKiBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2UtaGVpZ2h0OlxuICogKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNhbGVuZGFyLXJhbmdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmItYmFzZS1jYWxlbmRhclxuICAgICAgW2RhdGVdPVwicmFuZ2VcIlxuICAgICAgKGRhdGVDaGFuZ2UpPVwib25DaGFuZ2UoJGFueSgkZXZlbnQpKVwiXG4gICAgICBbbWluXT1cIm1pblwiXG4gICAgICBbbWF4XT1cIm1heFwiXG4gICAgICBbZmlsdGVyXT1cImZpbHRlclwiXG4gICAgICBbc3RhcnRWaWV3XT1cInN0YXJ0Vmlld1wiXG4gICAgICBbYm91bmRpbmdNb250aF09XCJib3VuZGluZ01vbnRoXCJcbiAgICAgIFtkYXlDZWxsQ29tcG9uZW50XT1cImRheUNlbGxDb21wb25lbnRcIlxuICAgICAgW21vbnRoQ2VsbENvbXBvbmVudF09XCJtb250aENlbGxDb21wb25lbnRcIlxuICAgICAgW3llYXJDZWxsQ29tcG9uZW50XT1cInllYXJDZWxsQ29tcG9uZW50XCJcbiAgICAgIFt2aXNpYmxlRGF0ZV09XCJ2aXNpYmxlRGF0ZVwiXG4gICAgICBbc2hvd05hdmlnYXRpb25dPVwic2hvd05hdmlnYXRpb25cIlxuICAgICAgW3NpemVdPVwic2l6ZVwiXG4gICAgICBbc2hvd1dlZWtOdW1iZXJdPVwic2hvd1dlZWtOdW1iZXJcIlxuICAgICAgW3dlZWtOdW1iZXJTeW1ib2xdPVwid2Vla051bWJlclN5bWJvbFwiXG4gICAgPjwvbmItYmFzZS1jYWxlbmRhcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhclJhbmdlQ29tcG9uZW50PEQ+IHtcbiAgLyoqXG4gICAqIERlZmluZXMgaWYgd2Ugc2hvdWxkIHJlbmRlciBwcmV2aW91cyBhbmQgbmV4dCBtb250aHNcbiAgICogaW4gdGhlIGN1cnJlbnQgbW9udGggdmlldy5cbiAgICogKi9cbiAgQElucHV0KCkgYm91bmRpbmdNb250aDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgc3RhcnRpbmcgdmlldyBmb3IgdGhlIGNhbGVuZGFyLlxuICAgKiAqL1xuICBASW5wdXQoKSBzdGFydFZpZXc6IE5iQ2FsZW5kYXJWaWV3TW9kZSA9IE5iQ2FsZW5kYXJWaWV3TW9kZS5EQVRFO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RhcnRWaWV3OiBOYkNhbGVuZGFyVmlld01vZGVWYWx1ZXM7XG5cbiAgLyoqXG4gICAqIEEgbWluaW11bSBhdmFpbGFibGUgZGF0ZSBmb3Igc2VsZWN0aW9uLlxuICAgKiAqL1xuICBASW5wdXQoKSBtaW46IEQ7XG5cbiAgLyoqXG4gICAqIEEgbWF4aW11bSBhdmFpbGFibGUgZGF0ZSBmb3Igc2VsZWN0aW9uLlxuICAgKiAqL1xuICBASW5wdXQoKSBtYXg6IEQ7XG5cbiAgLyoqXG4gICAqIEEgcHJlZGljYXRlIHRoYXQgZGVjaWRlcyB3aGljaCBjZWxscyB3aWxsIGJlIGRpc2FibGVkLlxuICAgKiAqL1xuICBASW5wdXQoKSBmaWx0ZXI6IChEKSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gZGF5IGNlbGwgY29tcG9uZW50LiBIYXZlIHRvIGltcGxlbWVudCBgTmJDYWxlbmRhckNlbGxgIGludGVyZmFjZS5cbiAgICogKi9cbiAgQElucHV0KCdkYXlDZWxsQ29tcG9uZW50JylcbiAgc2V0IF9jZWxsQ29tcG9uZW50KGNlbGxDb21wb25lbnQ6IFR5cGU8TmJDYWxlbmRhckNlbGw8RCwgTmJDYWxlbmRhclJhbmdlPEQ+Pj4pIHtcbiAgICBpZiAoY2VsbENvbXBvbmVudCkge1xuICAgICAgdGhpcy5kYXlDZWxsQ29tcG9uZW50ID0gY2VsbENvbXBvbmVudDtcbiAgICB9XG4gIH1cbiAgZGF5Q2VsbENvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxELCBOYkNhbGVuZGFyUmFuZ2U8RD4+PiA9IE5iQ2FsZW5kYXJSYW5nZURheUNlbGxDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBtb250aCBjZWxsIGNvbXBvbmVudC4gSGF2ZSB0byBpbXBsZW1lbnQgYE5iQ2FsZW5kYXJDZWxsYCBpbnRlcmZhY2UuXG4gICAqICovXG4gIEBJbnB1dCgnbW9udGhDZWxsQ29tcG9uZW50JylcbiAgc2V0IF9tb250aENlbGxDb21wb25lbnQoY2VsbENvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxELCBOYkNhbGVuZGFyUmFuZ2U8RD4+Pikge1xuICAgIGlmIChjZWxsQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm1vbnRoQ2VsbENvbXBvbmVudCA9IGNlbGxDb21wb25lbnQ7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIG1vbnRoQ2VsbENvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxELCBOYkNhbGVuZGFyUmFuZ2U8RD4+PiA9IE5iQ2FsZW5kYXJSYW5nZU1vbnRoQ2VsbENvbXBvbmVudDtcblxuICAvKipcbiAgICogQ3VzdG9tIHllYXIgY2VsbCBjb21wb25lbnQuIEhhdmUgdG8gaW1wbGVtZW50IGBOYkNhbGVuZGFyQ2VsbGAgaW50ZXJmYWNlLlxuICAgKiAqL1xuICBASW5wdXQoJ3llYXJDZWxsQ29tcG9uZW50JylcbiAgc2V0IF95ZWFyQ2VsbENvbXBvbmVudChjZWxsQ29tcG9uZW50OiBUeXBlPE5iQ2FsZW5kYXJDZWxsPEQsIE5iQ2FsZW5kYXJSYW5nZTxEPj4+KSB7XG4gICAgaWYgKGNlbGxDb21wb25lbnQpIHtcbiAgICAgIHRoaXMueWVhckNlbGxDb21wb25lbnQgPSBjZWxsQ29tcG9uZW50O1xuICAgIH1cbiAgfVxuICB5ZWFyQ2VsbENvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxELCBOYkNhbGVuZGFyUmFuZ2U8RD4+PiA9IE5iQ2FsZW5kYXJSYW5nZVllYXJDZWxsQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBjYWxlbmRhciBhbmQgZW50aXJlIGNvbXBvbmVudHMuXG4gICAqIENhbiBiZSAnbWVkaXVtJyB3aGljaCBpcyBkZWZhdWx0IG9yICdsYXJnZScuXG4gICAqICovXG4gIEBJbnB1dCgpIHNpemU6IE5iQ2FsZW5kYXJTaXplID0gTmJDYWxlbmRhclNpemUuTUVESVVNO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2l6ZTogTmJDYWxlbmRhclNpemVWYWx1ZXM7XG5cbiAgQElucHV0KCkgdmlzaWJsZURhdGU6IEQ7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgc2hvdWxkIHdlIHNob3cgY2FsZW5kYXJzIG5hdmlnYXRpb24gb3Igbm90LlxuICAgKiAqL1xuICBASW5wdXQoKSBzaG93TmF2aWdhdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFJhbmdlIHdoaWNoIHdpbGwgYmUgcmVuZGVyZWQgYXMgc2VsZWN0ZWQuXG4gICAqICovXG4gIEBJbnB1dCgpIHJhbmdlOiBOYkNhbGVuZGFyUmFuZ2U8RD47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgc2hvdWxkIHdlIHNob3cgd2VlayBudW1iZXJzIGNvbHVtbi5cbiAgICogRmFsc2UgYnkgZGVmYXVsdC5cbiAgICogKi9cbiAgQElucHV0KClcbiAgZ2V0IHNob3dXZWVrTnVtYmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93V2Vla051bWJlcjtcbiAgfVxuICBzZXQgc2hvd1dlZWtOdW1iZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93V2Vla051bWJlciA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJvdGVjdGVkIF9zaG93V2Vla051bWJlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvd1dlZWtOdW1iZXI6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBTZXRzIHN5bWJvbCB1c2VkIGFzIGEgaGVhZGVyIGZvciB3ZWVrIG51bWJlcnMgY29sdW1uXG4gICAqICovXG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJTeW1ib2w6IHN0cmluZyA9ICcjJztcblxuICAvKipcbiAgICogRW1pdHMgcmFuZ2Ugd2hlbiBzdGFydCBzZWxlY3RlZCBhbmQgZW1pdHMgYWdhaW4gd2hlbiBlbmQgc2VsZWN0ZWQuXG4gICAqICovXG4gIEBPdXRwdXQoKSByYW5nZUNoYW5nZTogRXZlbnRFbWl0dGVyPE5iQ2FsZW5kYXJSYW5nZTxEPj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGVTZXJ2aWNlOiBOYkRhdGVTZXJ2aWNlPEQ+KSB7XG4gIH1cblxuICBvbkNoYW5nZShkYXRlOiBEKSB7XG4gICAgdGhpcy5pbml0RGF0ZUlmTnVsbCgpO1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0ZWQoZGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIGluaXREYXRlSWZOdWxsKCkge1xuICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgdGhpcy5yYW5nZSA9IHsgc3RhcnQ6IG51bGwsIGVuZDogbnVsbCB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VsZWN0ZWQoZGF0ZTogRCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ZWQoKSkge1xuICAgICAgdGhpcy5zZWxlY3RFbmQoZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0U3RhcnQoZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3Rpb25TdGFydGVkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gdGhpcy5yYW5nZTtcbiAgICByZXR1cm4gc3RhcnQgJiYgIWVuZDtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0U3RhcnQoc3RhcnQ6IEQpIHtcbiAgICB0aGlzLnNlbGVjdFJhbmdlKHsgc3RhcnQgfSk7XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdEVuZChkYXRlOiBEKSB7XG4gICAgY29uc3QgeyBzdGFydCB9ID0gdGhpcy5yYW5nZTtcblxuICAgIGlmICh0aGlzLmRhdGVTZXJ2aWNlLmNvbXBhcmVEYXRlcyhkYXRlLCBzdGFydCkgPiAwKSB7XG4gICAgICB0aGlzLnNlbGVjdFJhbmdlKHsgc3RhcnQsIGVuZDogZGF0ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RSYW5nZSh7IHN0YXJ0OiBkYXRlLCBlbmQ6IHN0YXJ0IH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0UmFuZ2UocmFuZ2U6IE5iQ2FsZW5kYXJSYW5nZTxEPikge1xuICAgIHRoaXMucmFuZ2UgPSByYW5nZTtcbiAgICB0aGlzLnJhbmdlQ2hhbmdlLmVtaXQocmFuZ2UpO1xuICB9XG59XG4iXX0=