import { AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { NbCalendarComponent } from '../calendar/calendar.component';
import { NbSelectedTimePayload } from '../timepicker/model';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbCalendarTimeModelService } from '../calendar-kit/services/calendar-time-model.service';
import { NbPortalOutletDirective } from '../cdk/overlay/mapping';
import { NbTimePickerComponent } from '../timepicker/timepicker.component';
import * as i0 from "@angular/core";
export declare class NbCalendarWithTimeComponent<D> extends NbCalendarComponent<D> implements OnInit, AfterViewInit {
    protected dateService: NbDateService<D>;
    cd: ChangeDetectorRef;
    protected calendarTimeModelService: NbCalendarTimeModelService<D>;
    /**
     * Defines selected date.
     * */
    visibleDate: D;
    /**
     * Defines 12 hours format like '07:00 PM'.
     * */
    twelveHoursFormat: boolean;
    /**
     * Show seconds in timepicker.
     * Ignored when singleColumn is true.
     * */
    withSeconds: boolean;
    /**
     * Show timepicker values in one column with 60 minutes step by default.
     * */
    singleColumn: boolean;
    /**
     * Defines minutes step when we use fill time format.
     * If set to 20, it will be: '12:00, 12:20: 12:40, 13:00...'
     * */
    step: number;
    /**
     * Defines time format.
     * */
    timeFormat: string;
    /**
     * Defines text over the timepicker.
     * */
    title: string;
    applyButtonText: string;
    currentTimeButtonText: string;
    showCurrentTimeButton: boolean;
    portalOutlet: NbPortalOutletDirective;
    timepicker: NbTimePickerComponent<D>;
    constructor(dateService: NbDateService<D>, cd: ChangeDetectorRef, calendarTimeModelService: NbCalendarTimeModelService<D>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onDateValueChange(date: D): void;
    onTimeChange(selectedTime: NbSelectedTimePayload<D>): void;
    saveValue(): void;
    saveCurrentTime(): void;
    /**
     * We don't show seconds with twelve hours format
     * */
    showSeconds(): boolean;
    isLarge(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarWithTimeComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarWithTimeComponent<any>, "nb-calendar-with-time", never, { "visibleDate": "visibleDate"; "twelveHoursFormat": "twelveHoursFormat"; "withSeconds": "withSeconds"; "singleColumn": "singleColumn"; "step": "step"; "timeFormat": "timeFormat"; "title": "title"; "applyButtonText": "applyButtonText"; "currentTimeButtonText": "currentTimeButtonText"; "showCurrentTimeButton": "showCurrentTimeButton"; }, {}, never, never>;
}
