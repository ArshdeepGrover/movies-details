/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbCalendarCell, NbCalendarSize, NbCalendarSizeValues } from '../calendar-kit/model';
import { NbCalendarRange } from './calendar-range.component';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbBaseCalendarRangeCell } from './base-calendar-range-cell';
import * as i0 from "@angular/core";
export declare class NbCalendarRangeYearCellComponent<D> extends NbBaseCalendarRangeCell<D> implements NbCalendarCell<D, NbCalendarRange<D>> {
    protected dateService: NbDateService<D>;
    date: D;
    min: D;
    max: D;
    selectedValue: NbCalendarRange<D>;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    get inRange(): boolean;
    get rangeStart(): boolean;
    get rangeEnd(): boolean;
    get selected(): boolean;
    get today(): boolean;
    get disabled(): boolean;
    get isLarge(): boolean;
    yearCellClass: boolean;
    rangeCellClass: boolean;
    get year(): number;
    onClick(): void;
    protected smallerThanMin(): boolean;
    protected greaterThanMax(): boolean;
    protected yearStart(): D;
    protected yearEnd(): D;
    protected isInRange(date: D, { start, end }: NbCalendarRange<D>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarRangeYearCellComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarRangeYearCellComponent<any>, "nb-calendar-range-year-cell", never, { "date": "date"; "min": "min"; "max": "max"; "selectedValue": "selectedValue"; "size": "size"; }, { "select": "select"; }, never, never>;
}
