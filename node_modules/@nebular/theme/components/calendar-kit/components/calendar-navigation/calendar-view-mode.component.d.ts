import { EventEmitter } from '@angular/core';
import { NbCalendarViewMode, NbCalendarViewModeValues } from '../../model';
import { NbCalendarYearModelService } from '../../services/calendar-year-model.service';
import { NbDateService } from '../../services/date.service';
import * as i0 from "@angular/core";
export declare class NbCalendarViewModeComponent<D> {
    protected dateService: NbDateService<D>;
    protected yearModelService: NbCalendarYearModelService<D>;
    date: D;
    viewMode: NbCalendarViewMode;
    static ngAcceptInputType_viewMode: NbCalendarViewModeValues;
    changeMode: EventEmitter<void>;
    constructor(dateService: NbDateService<D>, yearModelService: NbCalendarYearModelService<D>);
    getText(): string;
    getIcon(): string;
    protected getFirstYear(): string;
    protected getLastYear(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarViewModeComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarViewModeComponent<any>, "nb-calendar-view-mode", never, { "date": "date"; "viewMode": "viewMode"; }, { "changeMode": "changeMode"; }, never, never>;
}
