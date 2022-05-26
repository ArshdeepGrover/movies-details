/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbCalendarCell, NbCalendarSize, NbCalendarSizeValues } from '../../model';
import { NbDateService } from '../../services/date.service';
import * as i0 from "@angular/core";
export declare class NbCalendarDayCellComponent<D> implements NbCalendarCell<D, D> {
    protected dateService: NbDateService<D>;
    date: D;
    selectedValue: D;
    visibleDate: D;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    get today(): boolean;
    get boundingMonth(): boolean;
    get selected(): boolean;
    get empty(): boolean;
    get disabled(): boolean;
    get isLarge(): boolean;
    dayCellClass: boolean;
    get day(): number;
    onClick(): void;
    private smallerThanMin;
    private greaterThanMax;
    private dontFitFilter;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarDayCellComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarDayCellComponent<any>, "nb-calendar-day-cell", never, { "date": "date"; "selectedValue": "selectedValue"; "visibleDate": "visibleDate"; "min": "min"; "max": "max"; "filter": "filter"; "size": "size"; }, { "select": "select"; }, never, never>;
}
