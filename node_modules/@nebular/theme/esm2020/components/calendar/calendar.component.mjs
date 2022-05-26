/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbCalendarSize, NbCalendarViewMode, } from '../calendar-kit/model';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "./base-calendar.component";
/**
 * Calendar component provides a capability to choose a date.
 *
 * ```html
 * <nb-calendar [(date)]="date"></nb-calendar>
 * <nb-calendar [date]="date" (dateChange)="handleDateChange($event)"></nb-calendar>
 * ```
 *
 * Basic usage example
 * @stacked-example(Showcase, calendar/calendar-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCalendarModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCalendarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to select ranges you can use `NbCalendarRangeComponent`.
 *
 * ```html
 * <nb-calendar-range [(range)]="range"></nb-calendar-range>
 * <nb-calendar-range [range]="range" (rangeChange)="handleRangeChange($event)"></nb-calendar-range>
 * ```
 *
 * In order to use it, you have to import `NbCalendarRangeModule`.
 * @stacked-example(Range, calendar/calendar-range-showcase.component)
 *
 * The calendar component is supplied with a calendar navigation that contains navigate buttons.
 * If you do not want to use it you can hide calendar navigation using `showNavigation` property.
 * @stacked-example(Without navigation, calendar/calendar-without-navigation.component)
 *
 * As you can see in the basic usage example calendar contains previous and next month days
 * which can be disabled using `boundingMonth` property.
 * @stacked-example(Bounding months, calendar/calendar-bounding-month.component)
 *
 * You can define starting view of the calendar by setting `startView` property.
 * Available values: year, month and date.
 * @stacked-example(Start view, calendar/calendar-start-view.component)
 *
 * You can use a larger version of the calendar by defining size property.
 * Available values: medium(which is default) and large.
 * @stacked-example(Size, calendar/calendar-size.component)
 *
 * Calendar supports min and max dates which disables values out of min-max range.
 * @stacked-example(Borders, calendar/calendar-min-max.component)
 *
 * Also, you can define custom filter property that should be predicate which receives
 * date and returns false if this date has to be disabled. In this example, we provide the filter
 * which disables weekdays.
 * @stacked-example(Filter, calendar/calendar-filter.component)
 *
 * Week numbers column could be enabled via `showWeekNumber` binding:
 * @stacked-example(Week number, calendar/calendar-week-number.component)
 *
 * If you need create custom cells you can easily provide custom components for
 * calendar. For examples if you want to show any average price under each date you can
 * just provide custom `dayCellComponent`. Custom cells for month and year can be provided
 * the same way, check API reference.
 * @stacked-example(Custom day cell, calendar/calendar-custom-day-cell-showcase.component)
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
export class NbCalendarComponent {
    constructor() {
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines starting view for calendar.
         * */
        this.startView = NbCalendarViewMode.DATE;
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
         * Emits date when selected.
         * */
        this.dateChange = new EventEmitter();
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
}
NbCalendarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbCalendarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarComponent, selector: "nb-calendar", inputs: { boundingMonth: "boundingMonth", startView: "startView", min: "min", max: "max", filter: "filter", dayCellComponent: "dayCellComponent", monthCellComponent: "monthCellComponent", yearCellComponent: "yearCellComponent", size: "size", visibleDate: "visibleDate", showNavigation: "showNavigation", date: "date", showWeekNumber: "showWeekNumber", weekNumberSymbol: "weekNumberSymbol" }, outputs: { dateChange: "dateChange" }, ngImport: i0, template: `
    <nb-base-calendar
      [boundingMonth]="boundingMonth"
      [startView]="startView"
      [date]="date"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [dayCellComponent]="dayCellComponent"
      [monthCellComponent]="monthCellComponent"
      [yearCellComponent]="yearCellComponent"
      [size]="size"
      [visibleDate]="visibleDate"
      [showNavigation]="showNavigation"
      [showWeekNumber]="showWeekNumber"
      [weekNumberSymbol]="weekNumberSymbol"
      (dateChange)="dateChange.emit($event)"
    ></nb-base-calendar>
  `, isInline: true, components: [{ type: i1.NbBaseCalendarComponent, selector: "nb-base-calendar", inputs: ["boundingMonth", "startView", "min", "max", "filter", "dayCellComponent", "monthCellComponent", "yearCellComponent", "size", "visibleDate", "showNavigation", "date", "showWeekNumber", "weekNumberSymbol"], outputs: ["dateChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-calendar',
                    template: `
    <nb-base-calendar
      [boundingMonth]="boundingMonth"
      [startView]="startView"
      [date]="date"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [dayCellComponent]="dayCellComponent"
      [monthCellComponent]="monthCellComponent"
      [yearCellComponent]="yearCellComponent"
      [size]="size"
      [visibleDate]="visibleDate"
      [showNavigation]="showNavigation"
      [showWeekNumber]="showWeekNumber"
      [weekNumberSymbol]="weekNumberSymbol"
      (dateChange)="dateChange.emit($event)"
    ></nb-base-calendar>
  `,
                }]
        }], propDecorators: { boundingMonth: [{
                type: Input
            }], startView: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], filter: [{
                type: Input
            }], dayCellComponent: [{
                type: Input
            }], monthCellComponent: [{
                type: Input
            }], yearCellComponent: [{
                type: Input
            }], size: [{
                type: Input
            }], visibleDate: [{
                type: Input
            }], showNavigation: [{
                type: Input
            }], date: [{
                type: Input
            }], showWeekNumber: [{
                type: Input
            }], weekNumberSymbol: [{
                type: Input
            }], dateChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUU3RSxPQUFPLEVBRUwsY0FBYyxFQUNkLGtCQUFrQixHQUduQixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxxQkFBcUIsRUFBa0IsTUFBTSxZQUFZLENBQUM7OztBQUduRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnTEs7QUF1QkwsTUFBTSxPQUFPLG1CQUFtQjtJQXRCaEM7UUF3QkU7OzthQUdLO1FBQ0ksa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFFdkM7O2FBRUs7UUFDSSxjQUFTLEdBQXVCLGtCQUFrQixDQUFDLElBQUksQ0FBQztRQWlDakU7OzthQUdLO1FBQ0ksU0FBSSxHQUFtQixjQUFjLENBQUMsTUFBTSxDQUFDO1FBS3REOzthQUVLO1FBQ0ksbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFrQjlCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRzNDOzthQUVLO1FBQ0kscUJBQWdCLEdBQVcsR0FBRyxDQUFDO1FBRXhDOzthQUVLO1FBQ0ssZUFBVSxHQUFvQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBQzVEO0lBdkJDOzs7U0FHSztJQUNMLElBQ0ksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksY0FBYyxDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnSEF6RVUsbUJBQW1CO29HQUFuQixtQkFBbUIsa2VBcEJwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUOzJGQUVVLG1CQUFtQjtrQkF0Qi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUO2lCQUNGOzhCQU9VLGFBQWE7c0JBQXJCLEtBQUs7Z0JBS0csU0FBUztzQkFBakIsS0FBSztnQkFNRyxHQUFHO3NCQUFYLEtBQUs7Z0JBS0csR0FBRztzQkFBWCxLQUFLO2dCQUtHLE1BQU07c0JBQWQsS0FBSztnQkFLRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBS0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUtHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFNRyxJQUFJO3NCQUFaLEtBQUs7Z0JBR0csV0FBVztzQkFBbkIsS0FBSztnQkFLRyxjQUFjO3NCQUF0QixLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFPRixjQUFjO3NCQURqQixLQUFLO2dCQWFHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFLSSxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBOYkNhbGVuZGFyQ2VsbCxcbiAgTmJDYWxlbmRhclNpemUsXG4gIE5iQ2FsZW5kYXJWaWV3TW9kZSxcbiAgTmJDYWxlbmRhclNpemVWYWx1ZXMsXG4gIE5iQ2FsZW5kYXJWaWV3TW9kZVZhbHVlcyxcbn0gZnJvbSAnLi4vY2FsZW5kYXIta2l0L21vZGVsJztcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuXG4vKipcbiAqIENhbGVuZGFyIGNvbXBvbmVudCBwcm92aWRlcyBhIGNhcGFiaWxpdHkgdG8gY2hvb3NlIGEgZGF0ZS5cbiAqXG4gKiBgYGBodG1sXG4gKiA8bmItY2FsZW5kYXIgWyhkYXRlKV09XCJkYXRlXCI+PC9uYi1jYWxlbmRhcj5cbiAqIDxuYi1jYWxlbmRhciBbZGF0ZV09XCJkYXRlXCIgKGRhdGVDaGFuZ2UpPVwiaGFuZGxlRGF0ZUNoYW5nZSgkZXZlbnQpXCI+PC9uYi1jYWxlbmRhcj5cbiAqIGBgYFxuICpcbiAqIEJhc2ljIHVzYWdlIGV4YW1wbGVcbiAqIEBzdGFja2VkLWV4YW1wbGUoU2hvd2Nhc2UsIGNhbGVuZGFyL2NhbGVuZGFyLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiAjIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogSW1wb3J0IGBOYkNhbGVuZGFyTW9kdWxlYCB0byB5b3VyIGZlYXR1cmUgbW9kdWxlLlxuICogYGBgdHNcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgICBOYkNhbGVuZGFyTW9kdWxlLFxuICogICBdLFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBQYWdlTW9kdWxlIHsgfVxuICogYGBgXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBJZiB5b3Ugd2FudCB0byBzZWxlY3QgcmFuZ2VzIHlvdSBjYW4gdXNlIGBOYkNhbGVuZGFyUmFuZ2VDb21wb25lbnRgLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxuYi1jYWxlbmRhci1yYW5nZSBbKHJhbmdlKV09XCJyYW5nZVwiPjwvbmItY2FsZW5kYXItcmFuZ2U+XG4gKiA8bmItY2FsZW5kYXItcmFuZ2UgW3JhbmdlXT1cInJhbmdlXCIgKHJhbmdlQ2hhbmdlKT1cImhhbmRsZVJhbmdlQ2hhbmdlKCRldmVudClcIj48L25iLWNhbGVuZGFyLXJhbmdlPlxuICogYGBgXG4gKlxuICogSW4gb3JkZXIgdG8gdXNlIGl0LCB5b3UgaGF2ZSB0byBpbXBvcnQgYE5iQ2FsZW5kYXJSYW5nZU1vZHVsZWAuXG4gKiBAc3RhY2tlZC1leGFtcGxlKFJhbmdlLCBjYWxlbmRhci9jYWxlbmRhci1yYW5nZS1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogVGhlIGNhbGVuZGFyIGNvbXBvbmVudCBpcyBzdXBwbGllZCB3aXRoIGEgY2FsZW5kYXIgbmF2aWdhdGlvbiB0aGF0IGNvbnRhaW5zIG5hdmlnYXRlIGJ1dHRvbnMuXG4gKiBJZiB5b3UgZG8gbm90IHdhbnQgdG8gdXNlIGl0IHlvdSBjYW4gaGlkZSBjYWxlbmRhciBuYXZpZ2F0aW9uIHVzaW5nIGBzaG93TmF2aWdhdGlvbmAgcHJvcGVydHkuXG4gKiBAc3RhY2tlZC1leGFtcGxlKFdpdGhvdXQgbmF2aWdhdGlvbiwgY2FsZW5kYXIvY2FsZW5kYXItd2l0aG91dC1uYXZpZ2F0aW9uLmNvbXBvbmVudClcbiAqXG4gKiBBcyB5b3UgY2FuIHNlZSBpbiB0aGUgYmFzaWMgdXNhZ2UgZXhhbXBsZSBjYWxlbmRhciBjb250YWlucyBwcmV2aW91cyBhbmQgbmV4dCBtb250aCBkYXlzXG4gKiB3aGljaCBjYW4gYmUgZGlzYWJsZWQgdXNpbmcgYGJvdW5kaW5nTW9udGhgIHByb3BlcnR5LlxuICogQHN0YWNrZWQtZXhhbXBsZShCb3VuZGluZyBtb250aHMsIGNhbGVuZGFyL2NhbGVuZGFyLWJvdW5kaW5nLW1vbnRoLmNvbXBvbmVudClcbiAqXG4gKiBZb3UgY2FuIGRlZmluZSBzdGFydGluZyB2aWV3IG9mIHRoZSBjYWxlbmRhciBieSBzZXR0aW5nIGBzdGFydFZpZXdgIHByb3BlcnR5LlxuICogQXZhaWxhYmxlIHZhbHVlczogeWVhciwgbW9udGggYW5kIGRhdGUuXG4gKiBAc3RhY2tlZC1leGFtcGxlKFN0YXJ0IHZpZXcsIGNhbGVuZGFyL2NhbGVuZGFyLXN0YXJ0LXZpZXcuY29tcG9uZW50KVxuICpcbiAqIFlvdSBjYW4gdXNlIGEgbGFyZ2VyIHZlcnNpb24gb2YgdGhlIGNhbGVuZGFyIGJ5IGRlZmluaW5nIHNpemUgcHJvcGVydHkuXG4gKiBBdmFpbGFibGUgdmFsdWVzOiBtZWRpdW0od2hpY2ggaXMgZGVmYXVsdCkgYW5kIGxhcmdlLlxuICogQHN0YWNrZWQtZXhhbXBsZShTaXplLCBjYWxlbmRhci9jYWxlbmRhci1zaXplLmNvbXBvbmVudClcbiAqXG4gKiBDYWxlbmRhciBzdXBwb3J0cyBtaW4gYW5kIG1heCBkYXRlcyB3aGljaCBkaXNhYmxlcyB2YWx1ZXMgb3V0IG9mIG1pbi1tYXggcmFuZ2UuXG4gKiBAc3RhY2tlZC1leGFtcGxlKEJvcmRlcnMsIGNhbGVuZGFyL2NhbGVuZGFyLW1pbi1tYXguY29tcG9uZW50KVxuICpcbiAqIEFsc28sIHlvdSBjYW4gZGVmaW5lIGN1c3RvbSBmaWx0ZXIgcHJvcGVydHkgdGhhdCBzaG91bGQgYmUgcHJlZGljYXRlIHdoaWNoIHJlY2VpdmVzXG4gKiBkYXRlIGFuZCByZXR1cm5zIGZhbHNlIGlmIHRoaXMgZGF0ZSBoYXMgdG8gYmUgZGlzYWJsZWQuIEluIHRoaXMgZXhhbXBsZSwgd2UgcHJvdmlkZSB0aGUgZmlsdGVyXG4gKiB3aGljaCBkaXNhYmxlcyB3ZWVrZGF5cy5cbiAqIEBzdGFja2VkLWV4YW1wbGUoRmlsdGVyLCBjYWxlbmRhci9jYWxlbmRhci1maWx0ZXIuY29tcG9uZW50KVxuICpcbiAqIFdlZWsgbnVtYmVycyBjb2x1bW4gY291bGQgYmUgZW5hYmxlZCB2aWEgYHNob3dXZWVrTnVtYmVyYCBiaW5kaW5nOlxuICogQHN0YWNrZWQtZXhhbXBsZShXZWVrIG51bWJlciwgY2FsZW5kYXIvY2FsZW5kYXItd2Vlay1udW1iZXIuY29tcG9uZW50KVxuICpcbiAqIElmIHlvdSBuZWVkIGNyZWF0ZSBjdXN0b20gY2VsbHMgeW91IGNhbiBlYXNpbHkgcHJvdmlkZSBjdXN0b20gY29tcG9uZW50cyBmb3JcbiAqIGNhbGVuZGFyLiBGb3IgZXhhbXBsZXMgaWYgeW91IHdhbnQgdG8gc2hvdyBhbnkgYXZlcmFnZSBwcmljZSB1bmRlciBlYWNoIGRhdGUgeW91IGNhblxuICoganVzdCBwcm92aWRlIGN1c3RvbSBgZGF5Q2VsbENvbXBvbmVudGAuIEN1c3RvbSBjZWxscyBmb3IgbW9udGggYW5kIHllYXIgY2FuIGJlIHByb3ZpZGVkXG4gKiB0aGUgc2FtZSB3YXksIGNoZWNrIEFQSSByZWZlcmVuY2UuXG4gKiBAc3RhY2tlZC1leGFtcGxlKEN1c3RvbSBkYXkgY2VsbCwgY2FsZW5kYXIvY2FsZW5kYXItY3VzdG9tLWRheS1jZWxsLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogY2FsZW5kYXItd2lkdGg6XG4gKiBjYWxlbmRhci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2FsZW5kYXItYm9yZGVyLWNvbG9yOlxuICogY2FsZW5kYXItYm9yZGVyLXN0eWxlOlxuICogY2FsZW5kYXItYm9yZGVyLXdpZHRoOlxuICogY2FsZW5kYXItYm9yZGVyLXJhZGl1czpcbiAqIGNhbGVuZGFyLXRleHQtY29sb3I6XG4gKiBjYWxlbmRhci10ZXh0LWZvbnQtZmFtaWx5OlxuICogY2FsZW5kYXItdGV4dC1mb250LXNpemU6XG4gKiBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0OlxuICogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodDpcbiAqIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLXRvcDpcbiAqIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLWJvdHRvbTpcbiAqIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLXN0YXJ0OlxuICogY2FsZW5kYXItcGlja2VyLXBhZGRpbmctZW5kOlxuICogY2FsZW5kYXItbmF2aWdhdGlvbi10ZXh0LWNvbG9yOlxuICogY2FsZW5kYXItbmF2aWdhdGlvbi10ZXh0LWZvbnQtZmFtaWx5OlxuICogY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWZvbnQtc2l6ZTpcbiAqIGNhbGVuZGFyLW5hdmlnYXRpb24tdGl0bGUtdGV4dC1mb250LXdlaWdodDpcbiAqIGNhbGVuZGFyLW5hdmlnYXRpb24tdGl0bGUtdGV4dC1saW5lLWhlaWdodDpcbiAqIGNhbGVuZGFyLW5hdmlnYXRpb24tcGFkZGluZzpcbiAqIGNhbGVuZGFyLWNlbGwtaW5hY3RpdmUtdGV4dC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtc2l6ZTpcbiAqIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1mb250LXdlaWdodDpcbiAqIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1saW5lLWhlaWdodDpcbiAqIGNhbGVuZGFyLWNlbGwtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1mb250LXNpemU6XG4gKiBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWZvbnQtd2VpZ2h0OlxuICogY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1saW5lLWhlaWdodDpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktYm9yZGVyLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWZvbnQtc2l6ZTpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1mb250LXdlaWdodDpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1saW5lLWhlaWdodDpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktaG92ZXItYm9yZGVyLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1ib3JkZXItY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLXRleHQtY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWJhY2tncm91bmQtY29sb3I6XG4gKiBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWJvcmRlci1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtdGV4dC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWZvbnQtc2l6ZTpcbiAqIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1mb250LXdlaWdodDpcbiAqIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1saW5lLWhlaWdodDpcbiAqIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoOlxuICogY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0OlxuICogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aDpcbiAqIGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0OlxuICogY2FsZW5kYXIteWVhci1jZWxsLXdpZHRoOlxuICogY2FsZW5kYXIteWVhci1jZWxsLWhlaWdodDpcbiAqIGNhbGVuZGFyLXdlZWtkYXktYmFja2dyb3VuZDpcbiAqIGNhbGVuZGFyLXdlZWtkYXktZGl2aWRlci1jb2xvcjpcbiAqIGNhbGVuZGFyLXdlZWtkYXktZGl2aWRlci13aWR0aDpcbiAqIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1jb2xvcjpcbiAqIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1mb250LXNpemU6XG4gKiBjYWxlbmRhci13ZWVrZGF5LXRleHQtZm9udC13ZWlnaHQ6XG4gKiBjYWxlbmRhci13ZWVrZGF5LXRleHQtbGluZS1oZWlnaHQ6XG4gKiBjYWxlbmRhci13ZWVrZGF5LWhvbGlkYXktdGV4dC1jb2xvcjpcbiAqIGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0OlxuICogY2FsZW5kYXItd2Vla2RheS13aWR0aDpcbiAqIGNhbGVuZGFyLXdlZWtudW1iZXItYmFja2dyb3VuZDpcbiAqIGNhbGVuZGFyLXdlZWtudW1iZXItZGl2aWRlci1jb2xvcjpcbiAqIGNhbGVuZGFyLXdlZWtudW1iZXItZGl2aWRlci13aWR0aDpcbiAqIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1jb2xvcjpcbiAqIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1mb250LXNpemU6XG4gKiBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtZm9udC13ZWlnaHQ6XG4gKiBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtbGluZS1oZWlnaHQ6XG4gKiBjYWxlbmRhci13ZWVrbnVtYmVyLWhlaWdodDpcbiAqIGNhbGVuZGFyLXdlZWtudW1iZXItd2lkdGg6XG4gKiBjYWxlbmRhci1sYXJnZS13aWR0aDpcbiAqIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoOlxuICogY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2UtaGVpZ2h0OlxuICogY2FsZW5kYXItd2Vla2RheS1sYXJnZS1oZWlnaHQ6XG4gKiBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLXdpZHRoOlxuICogY2FsZW5kYXItd2Vla251bWJlci1sYXJnZS1oZWlnaHQ6XG4gKiBjYWxlbmRhci13ZWVrbnVtYmVyLWxhcmdlLXdpZHRoOlxuICogY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aDpcbiAqIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0OlxuICogY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLXdpZHRoOlxuICogY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLWhlaWdodDpcbiAqICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1jYWxlbmRhcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5iLWJhc2UtY2FsZW5kYXJcbiAgICAgIFtib3VuZGluZ01vbnRoXT1cImJvdW5kaW5nTW9udGhcIlxuICAgICAgW3N0YXJ0Vmlld109XCJzdGFydFZpZXdcIlxuICAgICAgW2RhdGVdPVwiZGF0ZVwiXG4gICAgICBbbWluXT1cIm1pblwiXG4gICAgICBbbWF4XT1cIm1heFwiXG4gICAgICBbZmlsdGVyXT1cImZpbHRlclwiXG4gICAgICBbZGF5Q2VsbENvbXBvbmVudF09XCJkYXlDZWxsQ29tcG9uZW50XCJcbiAgICAgIFttb250aENlbGxDb21wb25lbnRdPVwibW9udGhDZWxsQ29tcG9uZW50XCJcbiAgICAgIFt5ZWFyQ2VsbENvbXBvbmVudF09XCJ5ZWFyQ2VsbENvbXBvbmVudFwiXG4gICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgIFt2aXNpYmxlRGF0ZV09XCJ2aXNpYmxlRGF0ZVwiXG4gICAgICBbc2hvd05hdmlnYXRpb25dPVwic2hvd05hdmlnYXRpb25cIlxuICAgICAgW3Nob3dXZWVrTnVtYmVyXT1cInNob3dXZWVrTnVtYmVyXCJcbiAgICAgIFt3ZWVrTnVtYmVyU3ltYm9sXT1cIndlZWtOdW1iZXJTeW1ib2xcIlxuICAgICAgKGRhdGVDaGFuZ2UpPVwiZGF0ZUNoYW5nZS5lbWl0KCRldmVudClcIlxuICAgID48L25iLWJhc2UtY2FsZW5kYXI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5iQ2FsZW5kYXJDb21wb25lbnQ8RD4ge1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGlmIHdlIHNob3VsZCByZW5kZXIgcHJldmlvdXMgYW5kIG5leHQgbW9udGhzXG4gICAqIGluIHRoZSBjdXJyZW50IG1vbnRoIHZpZXcuXG4gICAqICovXG4gIEBJbnB1dCgpIGJvdW5kaW5nTW9udGg6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHN0YXJ0aW5nIHZpZXcgZm9yIGNhbGVuZGFyLlxuICAgKiAqL1xuICBASW5wdXQoKSBzdGFydFZpZXc6IE5iQ2FsZW5kYXJWaWV3TW9kZSA9IE5iQ2FsZW5kYXJWaWV3TW9kZS5EQVRFO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RhcnRWaWV3OiBOYkNhbGVuZGFyVmlld01vZGVWYWx1ZXM7XG5cbiAgLyoqXG4gICAqIE1pbmltdW0gYXZhaWxhYmxlIGRhdGUgZm9yIHNlbGVjdGlvbi5cbiAgICogKi9cbiAgQElucHV0KCkgbWluOiBEO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIGF2YWlsYWJsZSBkYXRlIGZvciBzZWxlY3Rpb24uXG4gICAqICovXG4gIEBJbnB1dCgpIG1heDogRDtcblxuICAvKipcbiAgICogUHJlZGljYXRlIHRoYXQgZGVjaWRlcyB3aGljaCBjZWxscyB3aWxsIGJlIGRpc2FibGVkLlxuICAgKiAqL1xuICBASW5wdXQoKSBmaWx0ZXI6IChEKSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gZGF5IGNlbGwgY29tcG9uZW50LiBIYXZlIHRvIGltcGxlbWVudCBgTmJDYWxlbmRhckNlbGxgIGludGVyZmFjZS5cbiAgICogKi9cbiAgQElucHV0KCkgZGF5Q2VsbENvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxELCBEPj47XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBtb250aCBjZWxsIGNvbXBvbmVudC4gSGF2ZSB0byBpbXBsZW1lbnQgYE5iQ2FsZW5kYXJDZWxsYCBpbnRlcmZhY2UuXG4gICAqICovXG4gIEBJbnB1dCgpIG1vbnRoQ2VsbENvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxELCBEPj47XG5cbiAgLyoqXG4gICAqIEN1c3RvbSB5ZWFyIGNlbGwgY29tcG9uZW50LiBIYXZlIHRvIGltcGxlbWVudCBgTmJDYWxlbmRhckNlbGxgIGludGVyZmFjZS5cbiAgICogKi9cbiAgQElucHV0KCkgeWVhckNlbGxDb21wb25lbnQ6IFR5cGU8TmJDYWxlbmRhckNlbGw8RCwgRD4+O1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBjYWxlbmRhciBhbmQgZW50aXJlIGNvbXBvbmVudHMuXG4gICAqIENhbiBiZSAnbWVkaXVtJyB3aGljaCBpcyBkZWZhdWx0IG9yICdsYXJnZScuXG4gICAqICovXG4gIEBJbnB1dCgpIHNpemU6IE5iQ2FsZW5kYXJTaXplID0gTmJDYWxlbmRhclNpemUuTUVESVVNO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2l6ZTogTmJDYWxlbmRhclNpemVWYWx1ZXM7XG5cbiAgQElucHV0KCkgdmlzaWJsZURhdGU6IEQ7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgc2hvdWxkIHdlIHNob3cgY2FsZW5kYXJzIG5hdmlnYXRpb24gb3Igbm90LlxuICAgKiAqL1xuICBASW5wdXQoKSBzaG93TmF2aWdhdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIERhdGUgd2hpY2ggd2lsbCBiZSByZW5kZXJlZCBhcyBzZWxlY3RlZC5cbiAgICogKi9cbiAgQElucHV0KCkgZGF0ZTogRDtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBzaG91bGQgd2Ugc2hvdyB3ZWVrIG51bWJlcnMgY29sdW1uLlxuICAgKiBGYWxzZSBieSBkZWZhdWx0LlxuICAgKiAqL1xuICBASW5wdXQoKVxuICBnZXQgc2hvd1dlZWtOdW1iZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dXZWVrTnVtYmVyO1xuICB9XG4gIHNldCBzaG93V2Vla051bWJlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dXZWVrTnVtYmVyID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX3Nob3dXZWVrTnVtYmVyOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaG93V2Vla051bWJlcjogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFNldHMgc3ltYm9sIHVzZWQgYXMgYSBoZWFkZXIgZm9yIHdlZWsgbnVtYmVycyBjb2x1bW5cbiAgICogKi9cbiAgQElucHV0KCkgd2Vla051bWJlclN5bWJvbDogc3RyaW5nID0gJyMnO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBkYXRlIHdoZW4gc2VsZWN0ZWQuXG4gICAqICovXG4gIEBPdXRwdXQoKSBkYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iXX0=