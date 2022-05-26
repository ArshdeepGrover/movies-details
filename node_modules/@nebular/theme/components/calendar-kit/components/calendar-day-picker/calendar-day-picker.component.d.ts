/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, OnChanges, SimpleChanges, Type } from '@angular/core';
import { NbCalendarMonthModelService } from '../../services/calendar-month-model.service';
import { NbCalendarCell, NbCalendarSize, NbCalendarSizeValues } from '../../model';
import { NbBooleanInput } from '../../../helpers';
import * as i0 from "@angular/core";
/**
 * Provides capability pick days.
 * */
export declare class NbCalendarDayPickerComponent<D, T> implements OnChanges {
    private monthModel;
    /**
     * Describes which month picker have to render.
     * */
    visibleDate: D;
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    boundingMonths: boolean;
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
    set setCellComponent(cellComponent: Type<NbCalendarCell<D, T>>);
    cellComponent: Type<NbCalendarCell<any, any>>;
    /**
     * Size of the component.
     * Can be 'medium' which is default or 'large'.
     * */
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    /**
     * Already selected date.
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
     * Fires newly selected date.
     * */
    dateChange: EventEmitter<D>;
    get large(): boolean;
    /**
     * Day picker model.
     * Provides all days in current month and if boundingMonth is true some days
     * from previous and next one.
     * */
    weeks: D[][];
    constructor(monthModel: NbCalendarMonthModelService<D>);
    ngOnChanges({ visibleDate, boundingMonths }: SimpleChanges): void;
    onSelect(day: D): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarDayPickerComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarDayPickerComponent<any, any>, "nb-calendar-day-picker", never, { "visibleDate": "visibleDate"; "boundingMonths": "boundingMonths"; "min": "min"; "max": "max"; "filter": "filter"; "setCellComponent": "cellComponent"; "size": "size"; "date": "date"; "showWeekNumber": "showWeekNumber"; "weekNumberSymbol": "weekNumberSymbol"; }, { "dateChange": "dateChange"; }, never, never>;
}
