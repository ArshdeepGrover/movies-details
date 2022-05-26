/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, Type } from '@angular/core';
import { NbCalendarCell, NbCalendarSize, NbCalendarViewMode, NbCalendarSizeValues, NbCalendarViewModeValues } from '../calendar-kit/model';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbBooleanInput } from '../helpers';
import * as i0 from "@angular/core";
export interface NbCalendarRange<D> {
    start: D;
    end?: D;
}
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
export declare class NbCalendarRangeComponent<D> {
    protected dateService: NbDateService<D>;
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    boundingMonth: boolean;
    /**
     * Defines starting view for the calendar.
     * */
    startView: NbCalendarViewMode;
    static ngAcceptInputType_startView: NbCalendarViewModeValues;
    /**
     * A minimum available date for selection.
     * */
    min: D;
    /**
     * A maximum available date for selection.
     * */
    max: D;
    /**
     * A predicate that decides which cells will be disabled.
     * */
    filter: (D: any) => boolean;
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _cellComponent(cellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>);
    dayCellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>;
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _monthCellComponent(cellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>);
    monthCellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>;
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _yearCellComponent(cellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>);
    yearCellComponent: Type<NbCalendarCell<D, NbCalendarRange<D>>>;
    /**
     * Size of the calendar and entire components.
     * Can be 'medium' which is default or 'large'.
     * */
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    visibleDate: D;
    /**
     * Determines should we show calendars navigation or not.
     * */
    showNavigation: boolean;
    /**
     * Range which will be rendered as selected.
     * */
    range: NbCalendarRange<D>;
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber(): boolean;
    set showWeekNumber(value: boolean);
    protected _showWeekNumber: boolean;
    static ngAcceptInputType_showWeekNumber: NbBooleanInput;
    /**
     * Sets symbol used as a header for week numbers column
     * */
    weekNumberSymbol: string;
    /**
     * Emits range when start selected and emits again when end selected.
     * */
    rangeChange: EventEmitter<NbCalendarRange<D>>;
    constructor(dateService: NbDateService<D>);
    onChange(date: D): void;
    private initDateIfNull;
    private handleSelected;
    private selectionStarted;
    private selectStart;
    private selectEnd;
    private selectRange;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarRangeComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarRangeComponent<any>, "nb-calendar-range", never, { "boundingMonth": "boundingMonth"; "startView": "startView"; "min": "min"; "max": "max"; "filter": "filter"; "_cellComponent": "dayCellComponent"; "_monthCellComponent": "monthCellComponent"; "monthCellComponent": "monthCellComponent"; "_yearCellComponent": "yearCellComponent"; "size": "size"; "visibleDate": "visibleDate"; "showNavigation": "showNavigation"; "range": "range"; "showWeekNumber": "showWeekNumber"; "weekNumberSymbol": "weekNumberSymbol"; }, { "rangeChange": "rangeChange"; }, never, never>;
}
