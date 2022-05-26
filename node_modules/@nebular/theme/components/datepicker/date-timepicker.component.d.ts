import { ComponentFactoryResolver, EventEmitter, OnInit, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { NbBooleanInput } from '../helpers';
import { NbPositionBuilderService } from '../cdk/overlay/overlay-position';
import { NbTriggerStrategyBuilderService } from '../cdk/overlay/overlay-trigger';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { NbCalendarTimeModelService } from '../calendar-kit/services/calendar-time-model.service';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbCalendarWithTimeComponent } from './calendar-with-time.component';
import { NbBasePickerComponent } from './datepicker.component';
import * as i0 from "@angular/core";
/**
 * The DateTimePicker component itself.
 * Provides a proxy to `NbCalendarWithTimeComponent` options as well as custom picker options.
 */
export declare class NbDateTimePickerComponent<D> extends NbBasePickerComponent<D, D, NbCalendarWithTimeComponent<D>> implements OnInit {
    protected calendarWithTimeModelService: NbCalendarTimeModelService<D>;
    protected pickerClass: Type<NbCalendarWithTimeComponent<D>>;
    get value(): any;
    set value(date: any);
    /**
     * Defines minutes step when we use fill time format.
     * If set to 20, it will be: '12:00, 12:20: 12:40, 13:00...'
     * */
    step: number;
    title: string;
    applyButtonText: string;
    currentTimeButtonText: string;
    showCurrentTimeButton: boolean;
    /**
     * Defines 12 hours format like '07:00 PM'.
     * */
    get twelveHoursFormat(): boolean;
    set twelveHoursFormat(value: boolean);
    _twelveHoursFormat: boolean;
    static ngAcceptInputType_twelveHoursFormat: NbBooleanInput;
    /**
     * Show seconds in timepicker.
     * Ignored when singleColumn is true.
     * */
    get withSeconds(): boolean;
    set withSeconds(value: boolean);
    _withSeconds: boolean;
    static ngAcceptInputType_withSeconds: NbBooleanInput;
    /**
     * Show timepicker values in one column with 60 minutes step by default.
     * */
    get singleColumn(): boolean;
    set singleColumn(value: boolean);
    _singleColumn: boolean;
    static ngAcceptInputType_singleColumn: NbBooleanInput;
    /**
     * Emits date with time when selected.
     * */
    get dateTimeChange(): EventEmitter<D>;
    constructor(document: any, positionBuilder: NbPositionBuilderService, triggerStrategyBuilder: NbTriggerStrategyBuilderService, overlay: NbOverlayService, cfr: ComponentFactoryResolver, dateService: NbDateService<D>, dateServiceOptions: any, calendarWithTimeModelService: NbCalendarTimeModelService<D>);
    ngOnInit(): void;
    protected patchWithInputs(): void;
    protected get pickerValueChange(): Observable<any>;
    protected writeQueue(): void;
    protected buildTimeFormat(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDateTimePickerComponent<any>, [null, null, null, null, null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbDateTimePickerComponent<any>, "nb-date-timepicker", never, { "step": "step"; "title": "title"; "applyButtonText": "applyButtonText"; "currentTimeButtonText": "currentTimeButtonText"; "showCurrentTimeButton": "showCurrentTimeButton"; "twelveHoursFormat": "twelveHoursFormat"; "withSeconds": "withSeconds"; "singleColumn": "singleColumn"; }, { "dateTimeChange": "dateTimeChange"; }, never, never>;
}
