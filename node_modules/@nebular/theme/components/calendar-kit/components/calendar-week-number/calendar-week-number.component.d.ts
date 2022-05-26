import { OnChanges, SimpleChanges } from '@angular/core';
import { NbDateService } from '../../services/date.service';
import { NbCalendarSize, NbCalendarSizeValues } from '../../model';
import * as i0 from "@angular/core";
export declare class NbCalendarWeekNumberComponent<D> implements OnChanges {
    private dateService;
    weekNumbers: number[];
    weeks: D[][];
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    /**
     * Sets symbol used as a header for week numbers column
     * */
    weekNumberSymbol: string;
    get isLarge(): boolean;
    constructor(dateService: NbDateService<D>);
    ngOnChanges(changes: SimpleChanges): void;
    getWeeks(): number[];
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarWeekNumberComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarWeekNumberComponent<any>, "nb-calendar-week-numbers", never, { "weeks": "weeks"; "size": "size"; "weekNumberSymbol": "weekNumberSymbol"; }, {}, never, never>;
}
