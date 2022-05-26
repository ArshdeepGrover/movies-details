/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbCalendarCell, NbCalendarSize, NbCalendarSizeValues } from '../../model';
import { NbDateService } from '../../services/date.service';
import * as i0 from "@angular/core";
export declare class NbCalendarMonthCellComponent<D> implements NbCalendarCell<D, D> {
    private dateService;
    date: D;
    selectedValue: D;
    min: D;
    max: D;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    get selected(): boolean;
    get today(): boolean;
    get disabled(): boolean;
    get isLarge(): boolean;
    monthCellClass: boolean;
    get month(): string;
    onClick(): void;
    protected smallerThanMin(): boolean;
    protected greaterThanMax(): boolean;
    protected monthStart(): D;
    protected monthEnd(): D;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarMonthCellComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarMonthCellComponent<any>, "nb-calendar-month-cell", never, { "date": "date"; "selectedValue": "selectedValue"; "min": "min"; "max": "max"; "size": "size"; }, { "select": "select"; }, never, never>;
}
