/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, OnInit, Type } from '@angular/core';
import { NbCalendarYearModelService } from '../calendar-kit/services/calendar-year-model.service';
import { NbCalendarCell, NbCalendarSize, NbCalendarViewMode, NbCalendarSizeValues, NbCalendarViewModeValues } from '../calendar-kit/model';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbBooleanInput } from '../helpers';
import * as i0 from "@angular/core";
/**
 * The basis for calendar and range calendar components.
 * Encapsulates common behavior - store calendar state and perform navigation
 * between pickers.
 * */
export declare class NbBaseCalendarComponent<D, T> implements OnInit {
    protected dateService: NbDateService<D>;
    protected yearModelService: NbCalendarYearModelService<D>;
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    boundingMonth: boolean;
    /**
     * Defines active view for calendar.
     * */
    activeViewMode: NbCalendarViewMode;
    static ngAcceptInputType_activeViewMode: NbCalendarViewModeValues;
    /**
     * Minimum available date for selection.
     * */
    min: D;
    /**
     * Maximum available date for selection.
     * */
    max: D;
    /**
     * Predicate that decides which cells will be disabled.
     * */
    filter: (D: any) => boolean;
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    dayCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    monthCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    yearCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Size of the calendar and entire components.
     * Can be 'medium' which is default or 'large'.
     * */
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    visibleDate: D;
    /**
     * Determines whether we should show calendar navigation or not.
     * */
    showNavigation: boolean;
    /**
     * Value which will be rendered as selected.
     * */
    date: T;
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
     * Emits date when selected.
     * */
    dateChange: EventEmitter<T>;
    constructor(dateService: NbDateService<D>, yearModelService: NbCalendarYearModelService<D>);
    ngOnInit(): void;
    get large(): boolean;
    ViewMode: typeof NbCalendarViewMode;
    setViewMode(viewMode: NbCalendarViewMode): void;
    setVisibleDate(visibleDate: D): void;
    prevMonth(): void;
    nextMonth(): void;
    prevYear(): void;
    nextYear(): void;
    prevYears(): void;
    nextYears(): void;
    navigatePrev(): void;
    navigateNext(): void;
    onChangeViewMode(): void;
    private changeVisibleMonth;
    private changeVisibleYear;
    private changeVisibleYears;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbBaseCalendarComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbBaseCalendarComponent<any, any>, "nb-base-calendar", never, { "boundingMonth": "boundingMonth"; "activeViewMode": "startView"; "min": "min"; "max": "max"; "filter": "filter"; "dayCellComponent": "dayCellComponent"; "monthCellComponent": "monthCellComponent"; "yearCellComponent": "yearCellComponent"; "size": "size"; "visibleDate": "visibleDate"; "showNavigation": "showNavigation"; "date": "date"; "showWeekNumber": "showWeekNumber"; "weekNumberSymbol": "weekNumberSymbol"; }, { "dateChange": "dateChange"; }, never, never>;
}
