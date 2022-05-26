/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbCalendarCell, NbCalendarSize, NbCalendarSizeValues } from '../calendar-kit/model';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbCalendarRange } from './calendar-range.component';
import { NbBaseCalendarRangeCell } from './base-calendar-range-cell';
import * as i0 from "@angular/core";
export declare class NbCalendarRangeMonthCellComponent<D> extends NbBaseCalendarRangeCell<D> implements NbCalendarCell<D, NbCalendarRange<D>> {
    protected dateService: NbDateService<D>;
    get month(): string;
    date: D;
    visibleDate: D;
    selectedValue: NbCalendarRange<D>;
    min: D;
    max: D;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    monthCellClass: boolean;
    rangeCellClass: boolean;
    get selected(): boolean;
    get inRange(): boolean;
    get rangeStart(): boolean;
    get rangeEnd(): boolean;
    get today(): boolean;
    get disabled(): boolean;
    get isLarge(): boolean;
    onClick(): void;
    constructor(dateService: NbDateService<D>);
    protected smallerThanMin(): boolean;
    protected greaterThanMax(): boolean;
    protected monthStart(): D;
    protected monthEnd(): D;
    protected isInRage(date: D, range: NbCalendarRange<D>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarRangeMonthCellComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarRangeMonthCellComponent<any>, "nb-calendar-range-month-cell", never, { "date": "date"; "visibleDate": "visibleDate"; "selectedValue": "selectedValue"; "min": "min"; "max": "max"; "size": "size"; }, { "select": "select"; }, never, never>;
}
