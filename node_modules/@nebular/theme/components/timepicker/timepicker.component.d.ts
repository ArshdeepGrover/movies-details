import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NbBooleanInput } from '../helpers';
import { NbPortalDirective } from '../cdk/overlay/mapping';
import { NbPlatform } from '../cdk/platform/platform-service';
import { NbDateService, NbDayPeriod } from '../calendar-kit/services/date.service';
import { NbCalendarTimeModelService } from '../calendar-kit/services/calendar-time-model.service';
import { NbSelectedTimePayload, NbTimePickerConfig } from './model';
import * as i0 from "@angular/core";
interface NbTimePartOption {
    value: number;
    text: string;
}
/**
 * The TimePicker components itself.
 * Provides a proxy to `TimePicker` options as well as custom picker options.
 */
export declare class NbTimePickerComponent<D> implements OnChanges, OnInit {
    protected config: NbTimePickerConfig;
    protected platformService: NbPlatform;
    cd: ChangeDetectorRef;
    protected calendarTimeModelService: NbCalendarTimeModelService<D>;
    protected dateService: NbDateService<D>;
    protected blur$: Subject<void>;
    fullTimeOptions: D[];
    hoursColumnOptions: NbTimePartOption[];
    minutesColumnOptions: NbTimePartOption[];
    secondsColumnOptions: NbTimePartOption[];
    readonly dayPeriodColumnOptions: NbDayPeriod[];
    hostRef: ElementRef;
    isAM: boolean;
    /**
     * Emits when timepicker looses focus.
     */
    get blur(): Observable<void>;
    /**
     * Defines time format string.
     * */
    get timeFormat(): string;
    set timeFormat(timeFormat: string);
    protected _timeFormat: string;
    /**
     * Defines 12 hours format .
     * */
    get twelveHoursFormat(): boolean;
    set twelveHoursFormat(value: boolean);
    protected _twelveHoursFormat: boolean;
    static ngAcceptInputType_twelveHoursFormat: NbBooleanInput;
    /**
     * Show seconds in timepicker.
     * Ignored when singleColumn is true
     * */
    get withSeconds(): boolean;
    set withSeconds(value: boolean);
    protected _withSeconds: boolean;
    static ngAcceptInputType_withSeconds: NbBooleanInput;
    /**
     * Show timepicker values in one column with 60 minutes step by default.
     * */
    get singleColumn(): boolean;
    set singleColumn(value: boolean);
    _singleColumn: boolean;
    static ngAcceptInputType_singleColumn: NbBooleanInput;
    /**
     * Defines minutes offset for options, when timepicker is in single column mode.
     * By default it’s 60 minutes: '12:00, 13:00: 14:00, 15:00...'
     * */
    set step(step: number);
    get step(): number;
    protected _step: number;
    /**
     * Date which will be rendered as selected.
     * */
    set date(date: D);
    get date(): D;
    _date: D;
    /**
     * In timepicker value should be always true
     * In calendar-with-time.component  should set to false
     * @docs-private
     */
    showFooter: boolean;
    applyButtonText: string;
    hoursText: string;
    minutesText: string;
    secondsText: string;
    ampmText: string;
    currentTimeButtonText: string;
    /**
     * Emits date when selected.
     * */
    onSelectTime: EventEmitter<NbSelectedTimePayload<D>>;
    portal: NbPortalDirective;
    constructor(config: NbTimePickerConfig, platformService: NbPlatform, locale: string, cd: ChangeDetectorRef, calendarTimeModelService: NbCalendarTimeModelService<D>, dateService: NbDateService<D>);
    ngOnInit(): void;
    ngOnChanges({ step, twelveHoursFormat, withSeconds, singleColumn, }: SimpleChanges): void;
    setHost(hostRef: ElementRef): void;
    attach(hostRef: ElementRef): void;
    setCurrentTime(): void;
    setHour(value: number): void;
    setMinute(value: number): void;
    setSecond(value: number): void;
    selectFullTime(value: D): void;
    changeDayPeriod(dayPeriodToSet: NbDayPeriod): void;
    updateValue(date: D): void;
    saveValue(): void;
    trackByTimeValues(index: any, item: NbTimePartOption): number;
    trackBySingleColumnValue(index: any, item: D): number;
    trackByDayPeriod(index: any, item: NbDayPeriod): string;
    showSeconds(): boolean;
    isSelectedHour(val: number): boolean;
    isSelectedMinute(val: number): boolean;
    isSelectedSecond(val: number): boolean;
    isSelectedDayPeriod(dayPeriod: NbDayPeriod): boolean;
    getFullTimeString(item: D): string;
    isSelectedFullTimeValue(value: D): boolean;
    protected buildColumnOptions(): void;
    /**
     * @docs-private
     */
    isFirefox(): boolean;
    protected generateHours(): NbTimePartOption[];
    protected generateMinutesOrSeconds(): NbTimePartOption[];
    protected setupTimeFormat(): string;
    /**
     * @docs-private
     */
    buildTimeFormat(): string;
    protected initFromConfig(config: NbTimePickerConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTimePickerComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTimePickerComponent<any>, "nb-timepicker", ["nbTimepicker"], { "timeFormat": "timeFormat"; "twelveHoursFormat": "twelveHoursFormat"; "withSeconds": "withSeconds"; "singleColumn": "singleColumn"; "step": "step"; "date": "date"; "showFooter": "showFooter"; "applyButtonText": "applyButtonText"; "hoursText": "hoursText"; "minutesText": "minutesText"; "secondsText": "secondsText"; "ampmText": "ampmText"; "currentTimeButtonText": "currentTimeButtonText"; }, { "onSelectTime": "onSelectTime"; }, never, never>;
}
export {};
