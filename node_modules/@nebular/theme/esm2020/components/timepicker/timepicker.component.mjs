import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, LOCALE_ID, Output, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { convertToBoolProperty } from '../helpers';
import { NbPortalDirective } from '../cdk/overlay/mapping';
import { range, rangeFromTo } from '../calendar-kit/helpers';
import { NB_DEFAULT_TIMEPICKER_LOCALIZATION_CONFIG, NB_TIME_PICKER_CONFIG, } from './model';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/platform/platform-service";
import * as i2 from "../calendar-kit/services/calendar-time-model.service";
import * as i3 from "../calendar-kit/services/date.service";
import * as i4 from "../card/card.component";
import * as i5 from "../list/list.component";
import * as i6 from "./timepicker-cell.component";
import * as i7 from "../calendar-kit/components/calendar-actions/calendar-actions.component";
import * as i8 from "../cdk/overlay/mapping";
import * as i9 from "@angular/common";
/**
 * The TimePicker components itself.
 * Provides a proxy to `TimePicker` options as well as custom picker options.
 */
export class NbTimePickerComponent {
    constructor(config, platformService, locale, cd, calendarTimeModelService, dateService) {
        this.config = config;
        this.platformService = platformService;
        this.cd = cd;
        this.calendarTimeModelService = calendarTimeModelService;
        this.dateService = dateService;
        this.blur$ = new Subject();
        this.dayPeriodColumnOptions = ["AM" /* AM */, "PM" /* PM */];
        this.isAM = true;
        /**
         * In timepicker value should be always true
         * In calendar-with-time.component  should set to false
         * @docs-private
         */
        this.showFooter = true;
        /**
         * Emits date when selected.
         * */
        this.onSelectTime = new EventEmitter();
        this.initFromConfig(this.config);
    }
    /**
     * Emits when timepicker looses focus.
     */
    get blur() {
        return this.blur$.asObservable();
    }
    /**
     * Defines time format string.
     * */
    get timeFormat() {
        return this._timeFormat;
    }
    set timeFormat(timeFormat) {
        this._timeFormat = timeFormat;
    }
    /**
     * Defines 12 hours format .
     * */
    get twelveHoursFormat() {
        return this._twelveHoursFormat;
    }
    set twelveHoursFormat(value) {
        this._twelveHoursFormat = convertToBoolProperty(value);
    }
    ;
    /**
     * Show seconds in timepicker.
     * Ignored when singleColumn is true
     * */
    get withSeconds() {
        return this._withSeconds;
    }
    set withSeconds(value) {
        this._withSeconds = convertToBoolProperty(value);
    }
    ;
    /**
     * Show timepicker values in one column with 60 minutes step by default.
     * */
    get singleColumn() {
        return this._singleColumn;
    }
    set singleColumn(value) {
        this._singleColumn = convertToBoolProperty(value);
    }
    /**
     * Defines minutes offset for options, when timepicker is in single column mode.
     * By default it’s 60 minutes: '12:00, 13:00: 14:00, 15:00...'
     * */
    set step(step) {
        this._step = step;
    }
    get step() {
        return this._step;
    }
    /**
     * Date which will be rendered as selected.
     * */
    set date(date) {
        this._date = date;
        this.isAM = this.dateService.getDayPeriod(this.date) === "AM" /* AM */;
        this.buildColumnOptions();
        this.cd.markForCheck();
    }
    get date() {
        return this._date;
    }
    ngOnInit() {
        this.timeFormat = this.setupTimeFormat();
    }
    ngOnChanges({ step, twelveHoursFormat, withSeconds, singleColumn, }) {
        this.timeFormat = this.setupTimeFormat();
        const isConfigChanged = step || twelveHoursFormat || withSeconds || singleColumn;
        if (isConfigChanged || !this.fullTimeOptions) {
            this.buildColumnOptions();
        }
    }
    setHost(hostRef) {
        this.hostRef = hostRef;
    }
    attach(hostRef) {
        this.hostRef = hostRef;
    }
    setCurrentTime() {
        this.date = this.dateService.today();
        this.onSelectTime.emit({
            time: this.date,
            save: true,
        });
    }
    setHour(value) {
        this.updateValue(this.dateService.setHours(this.date, value));
    }
    setMinute(value) {
        this.updateValue(this.dateService.setMinutes(this.date, value));
    }
    setSecond(value) {
        this.updateValue(this.dateService.setSeconds(this.date, value));
    }
    selectFullTime(value) {
        this.updateValue(value);
    }
    changeDayPeriod(dayPeriodToSet) {
        if (this.dateService.getDayPeriod(this.date) === dayPeriodToSet) {
            return;
        }
        // Subtract hours when switching to AM (before midday, 0-11 in 24-hour) from PM (after midday, 12-24 in 24-hour),
        // otherwise add hours because switching to PM from AM.
        const direction = dayPeriodToSet === "AM" /* AM */ ? -1 : 1;
        const increment = direction * this.dateService.HOURS_IN_DAY_PERIOD;
        this.updateValue(this.dateService.addHours(this.date, increment));
    }
    updateValue(date) {
        this.onSelectTime.emit({ time: date });
    }
    saveValue() {
        this.onSelectTime.emit({
            time: this.date,
            save: true,
        });
    }
    trackByTimeValues(index, item) {
        return item.value;
    }
    trackBySingleColumnValue(index, item) {
        return this.dateService.valueOf(item);
    }
    trackByDayPeriod(index, item) {
        return item;
    }
    showSeconds() {
        return this.withSeconds && !this.singleColumn;
    }
    isSelectedHour(val) {
        if (this.date) {
            return this.dateService.getHours(this.date) === val;
        }
        return false;
    }
    isSelectedMinute(val) {
        if (this.date) {
            return this.dateService.getMinutes(this.date) === val;
        }
        return false;
    }
    isSelectedSecond(val) {
        if (this.date) {
            return this.dateService.getSeconds(this.date) === val;
        }
        return false;
    }
    isSelectedDayPeriod(dayPeriod) {
        if (this.date) {
            return dayPeriod === this.dateService.getDayPeriod(this.date);
        }
        return false;
    }
    getFullTimeString(item) {
        return this.dateService.format(item, this.timeFormat).toUpperCase();
    }
    isSelectedFullTimeValue(value) {
        if (this.date) {
            return this.dateService.isSameHourAndMinute(value, this.date);
        }
        return false;
    }
    buildColumnOptions() {
        this.timeFormat = this.setupTimeFormat();
        this.fullTimeOptions = this.singleColumn
            ? this.calendarTimeModelService.getHoursRange(this.step)
            : [];
        this.hoursColumnOptions = this.generateHours();
        this.minutesColumnOptions = this.generateMinutesOrSeconds();
        this.secondsColumnOptions = this.withSeconds ? this.generateMinutesOrSeconds() : [];
    }
    /**
     * @docs-private
     */
    isFirefox() {
        return this.platformService.FIREFOX;
    }
    generateHours() {
        if (!this.twelveHoursFormat) {
            return range(24, (v) => {
                return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(v) };
            });
        }
        if (this.isAM) {
            return (range(12, (v) => {
                const text = v === 0 ? 12 : v;
                return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(text) };
            }));
        }
        return (rangeFromTo(12, 24, (v) => {
            const text = v === 12 ? 12 : (v - 12);
            return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(text) };
        }));
    }
    generateMinutesOrSeconds() {
        return range(60, (v) => {
            return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(v) };
        });
    }
    setupTimeFormat() {
        if (!this.timeFormat) {
            return this.config.format || this.buildTimeFormat();
        }
        return this.timeFormat;
    }
    /**
     * @docs-private
     */
    buildTimeFormat() {
        if (this.twelveHoursFormat) {
            return `${this.withSeconds && !this.singleColumn ? this.dateService.getTwelveHoursFormatWithSeconds()
                : this.dateService.getTwelveHoursFormat()}`;
        }
        else {
            return `${this.withSeconds && !this.singleColumn ? this.dateService.getTwentyFourHoursFormatWithSeconds()
                : this.dateService.getTwentyFourHoursFormat()}`;
        }
    }
    initFromConfig(config) {
        if (config) {
            this.twelveHoursFormat = config.twelveHoursFormat;
        }
        else {
            this.twelveHoursFormat = this.dateService.getLocaleTimeFormat().includes('h');
        }
        const localeConfig = { ...NB_DEFAULT_TIMEPICKER_LOCALIZATION_CONFIG, ...config?.localization ?? {} };
        this.hoursText = localeConfig.hoursText;
        this.minutesText = localeConfig.minutesText;
        this.secondsText = localeConfig.secondsText;
        this.ampmText = localeConfig.ampmText;
    }
}
NbTimePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTimePickerComponent, deps: [{ token: NB_TIME_PICKER_CONFIG }, { token: i1.NbPlatform }, { token: LOCALE_ID }, { token: i0.ChangeDetectorRef }, { token: i2.NbCalendarTimeModelService }, { token: i3.NbDateService }], target: i0.ɵɵFactoryTarget.Component });
NbTimePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbTimePickerComponent, selector: "nb-timepicker", inputs: { timeFormat: "timeFormat", twelveHoursFormat: "twelveHoursFormat", withSeconds: "withSeconds", singleColumn: "singleColumn", step: "step", date: "date", showFooter: "showFooter", applyButtonText: "applyButtonText", hoursText: "hoursText", minutesText: "minutesText", secondsText: "secondsText", ampmText: "ampmText", currentTimeButtonText: "currentTimeButtonText" }, outputs: { onSelectTime: "onSelectTime" }, viewQueries: [{ propertyName: "portal", first: true, predicate: NbPortalDirective, descendants: true, static: true }], exportAs: ["nbTimepicker"], usesOnChanges: true, ngImport: i0, template: "<nb-card *nbPortal\n         [class.supports-scrollbar-theming]=\"!isFirefox()\"\n         class=\"nb-timepicker-container\">\n  <nb-card-header class=\"column-header\">\n    <ng-container *ngIf=\"singleColumn; else fullTimeHeadersBlock\">\n      <div class=\"header-cell\">Time</div>\n    </ng-container>\n    <ng-template #fullTimeHeadersBlock>\n      <div class=\"header-cell\">{{ hoursText }}</div>\n      <div class=\"header-cell\">{{ minutesText }}</div>\n      <div *ngIf=\"withSeconds\" class=\"header-cell\">{{ secondsText }}</div>\n      <div *ngIf=\"twelveHoursFormat\" class=\"header-cell\">{{ ampmText }}</div>\n    </ng-template>\n  </nb-card-header>\n\n  <div class=\"picker-body\">\n    <ng-container *ngIf=\"singleColumn; else fullTimeColumnBlock\">\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedFullTimeValue(item)\"\n          *ngFor=\"let item of fullTimeOptions; trackBy: trackBySingleColumnValue.bind(this)\">\n          <nb-timepicker-cell\n            [value]=\"getFullTimeString(item)\"\n            [selected]=\"isSelectedFullTimeValue(item)\"\n            (select)=\"selectFullTime(item)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n    </ng-container>\n\n    <ng-template #fullTimeColumnBlock>\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedHour(item.value)\"\n          *ngFor=\"let item of hoursColumnOptions; trackBy: trackByTimeValues\">\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedHour(item.value)\"\n            (select)=\"setHour(item.value)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedMinute(item.value)\"\n          *ngFor=\"let item of minutesColumnOptions; trackBy: trackByTimeValues\">\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedMinute(item.value)\"\n            (select)=\"setMinute(item.value)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list *ngIf=\"showSeconds()\" class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedSecond(item.value)\"\n          *ngFor=\"let item of secondsColumnOptions; trackBy: trackByTimeValues\">\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedSecond(item.value)\"\n            (select)=\"setSecond(item.value)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list *ngIf=\"twelveHoursFormat\" class=\"values-list\">\n        <nb-list-item\n          class=\"list-item am-pm-item\"\n          [class.selected]=\"isSelectedDayPeriod(dayPeriod)\"\n          *ngFor=\"let dayPeriod of dayPeriodColumnOptions; trackBy: trackByDayPeriod\">\n          <nb-timepicker-cell\n            [value]=\"dayPeriod\"\n            [selected]=\"isSelectedDayPeriod(dayPeriod)\"\n            (select)=\"changeDayPeriod(dayPeriod)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n    </ng-template>\n  </div>\n\n  <nb-card-footer *ngIf=\"showFooter\" class=\"actions-footer\">\n    <nb-calendar-actions\n      [applyButtonText]=\"applyButtonText\"\n      [currentTimeButtonText]=\"currentTimeButtonText\"\n      (setCurrentTime)=\"setCurrentTime()\"\n      (saveValue)=\"saveValue()\"\n    ></nb-calendar-actions>\n  </nb-card-footer>\n</nb-card>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-timepicker-container{overflow:hidden;margin-bottom:0}.values-list{width:100%;overflow:hidden;-ms-scroll-snap-type:y proximity;scroll-snap-type:y proximity}.values-list:hover{overflow-y:auto}.list-item{border:0;padding:0;cursor:pointer}.picker-body{display:flex;width:100%;flex:1 0 0;overflow:hidden}.column-header{width:100%;display:flex;justify-content:space-between;padding:0}.header-cell{width:100%;display:flex;align-items:center;justify-content:center}.actions-footer{width:100%}nb-card-header,nb-card-footer{flex:0 0 auto}\n"], components: [{ type: i4.NbCardComponent, selector: "nb-card", inputs: ["size", "status", "accent"] }, { type: i4.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i5.NbListComponent, selector: "nb-list", inputs: ["role"] }, { type: i5.NbListItemComponent, selector: "nb-list-item", inputs: ["role"] }, { type: i6.NbTimePickerCellComponent, selector: "nb-timepicker-cell", inputs: ["selected", "value"], outputs: ["select"] }, { type: i4.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i7.NbCalendarActionsComponent, selector: "nb-calendar-actions", inputs: ["applyButtonText", "currentTimeButtonText", "showCurrentTimeButton"], outputs: ["setCurrentTime", "saveValue"] }], directives: [{ type: i8.NbPortalDirective, selector: "[nbPortal]" }, { type: i9.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i9.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTimePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-timepicker', exportAs: 'nbTimepicker', changeDetection: ChangeDetectionStrategy.OnPush, template: "<nb-card *nbPortal\n         [class.supports-scrollbar-theming]=\"!isFirefox()\"\n         class=\"nb-timepicker-container\">\n  <nb-card-header class=\"column-header\">\n    <ng-container *ngIf=\"singleColumn; else fullTimeHeadersBlock\">\n      <div class=\"header-cell\">Time</div>\n    </ng-container>\n    <ng-template #fullTimeHeadersBlock>\n      <div class=\"header-cell\">{{ hoursText }}</div>\n      <div class=\"header-cell\">{{ minutesText }}</div>\n      <div *ngIf=\"withSeconds\" class=\"header-cell\">{{ secondsText }}</div>\n      <div *ngIf=\"twelveHoursFormat\" class=\"header-cell\">{{ ampmText }}</div>\n    </ng-template>\n  </nb-card-header>\n\n  <div class=\"picker-body\">\n    <ng-container *ngIf=\"singleColumn; else fullTimeColumnBlock\">\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedFullTimeValue(item)\"\n          *ngFor=\"let item of fullTimeOptions; trackBy: trackBySingleColumnValue.bind(this)\">\n          <nb-timepicker-cell\n            [value]=\"getFullTimeString(item)\"\n            [selected]=\"isSelectedFullTimeValue(item)\"\n            (select)=\"selectFullTime(item)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n    </ng-container>\n\n    <ng-template #fullTimeColumnBlock>\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedHour(item.value)\"\n          *ngFor=\"let item of hoursColumnOptions; trackBy: trackByTimeValues\">\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedHour(item.value)\"\n            (select)=\"setHour(item.value)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedMinute(item.value)\"\n          *ngFor=\"let item of minutesColumnOptions; trackBy: trackByTimeValues\">\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedMinute(item.value)\"\n            (select)=\"setMinute(item.value)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list *ngIf=\"showSeconds()\" class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedSecond(item.value)\"\n          *ngFor=\"let item of secondsColumnOptions; trackBy: trackByTimeValues\">\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedSecond(item.value)\"\n            (select)=\"setSecond(item.value)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list *ngIf=\"twelveHoursFormat\" class=\"values-list\">\n        <nb-list-item\n          class=\"list-item am-pm-item\"\n          [class.selected]=\"isSelectedDayPeriod(dayPeriod)\"\n          *ngFor=\"let dayPeriod of dayPeriodColumnOptions; trackBy: trackByDayPeriod\">\n          <nb-timepicker-cell\n            [value]=\"dayPeriod\"\n            [selected]=\"isSelectedDayPeriod(dayPeriod)\"\n            (select)=\"changeDayPeriod(dayPeriod)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n    </ng-template>\n  </div>\n\n  <nb-card-footer *ngIf=\"showFooter\" class=\"actions-footer\">\n    <nb-calendar-actions\n      [applyButtonText]=\"applyButtonText\"\n      [currentTimeButtonText]=\"currentTimeButtonText\"\n      (setCurrentTime)=\"setCurrentTime()\"\n      (saveValue)=\"saveValue()\"\n    ></nb-calendar-actions>\n  </nb-card-footer>\n</nb-card>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-timepicker-container{overflow:hidden;margin-bottom:0}.values-list{width:100%;overflow:hidden;-ms-scroll-snap-type:y proximity;scroll-snap-type:y proximity}.values-list:hover{overflow-y:auto}.list-item{border:0;padding:0;cursor:pointer}.picker-body{display:flex;width:100%;flex:1 0 0;overflow:hidden}.column-header{width:100%;display:flex;justify-content:space-between;padding:0}.header-cell{width:100%;display:flex;align-items:center;justify-content:center}.actions-footer{width:100%}nb-card-header,nb-card-footer{flex:0 0 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_TIME_PICKER_CONFIG]
                }] }, { type: i1.NbPlatform }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: i0.ChangeDetectorRef }, { type: i2.NbCalendarTimeModelService }, { type: i3.NbDateService }]; }, propDecorators: { timeFormat: [{
                type: Input
            }], twelveHoursFormat: [{
                type: Input
            }], withSeconds: [{
                type: Input
            }], singleColumn: [{
                type: Input
            }], step: [{
                type: Input
            }], date: [{
                type: Input
            }], showFooter: [{
                type: Input
            }], applyButtonText: [{
                type: Input
            }], hoursText: [{
                type: Input
            }], minutesText: [{
                type: Input
            }], secondsText: [{
                type: Input
            }], ampmText: [{
                type: Input
            }], currentTimeButtonText: [{
                type: Input
            }], onSelectTime: [{
                type: Output
            }], portal: [{
                type: ViewChild,
                args: [NbPortalDirective, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdGltZXBpY2tlci90aW1lcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUdULE1BQU0sRUFFTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNELE9BQU8sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0QsT0FBTyxFQUNMLHlDQUF5QyxFQUN6QyxxQkFBcUIsR0FHdEIsTUFBTSxTQUFTLENBQUM7Ozs7Ozs7Ozs7O0FBT2pCOzs7R0FHRztBQVFILE1BQU0sT0FBTyxxQkFBcUI7SUF1SGhDLFlBQXFELE1BQTBCLEVBQ3pELGVBQTJCLEVBQ2xCLE1BQWMsRUFDMUIsRUFBcUIsRUFDbEIsd0JBQXVELEVBQ3ZELFdBQTZCO1FBTEUsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFDekQsb0JBQWUsR0FBZixlQUFlLENBQVk7UUFFOUIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDbEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUErQjtRQUN2RCxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUEzSHpDLFVBQUssR0FBa0Is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LEtBQUs7Z0JBY0YsWUFBWTtzQkFEZixLQUFLO2dCQWVGLElBQUk7c0JBRFAsS0FBSztnQkFhRixJQUFJO3NCQURQLEtBQUs7Z0JBbUJHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLHFCQUFxQjtzQkFBN0IsS0FBSztnQkFLSSxZQUFZO3NCQUFyQixNQUFNO2dCQUN1QyxNQUFNO3NCQUFuRCxTQUFTO3VCQUFDLGlCQUFpQixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIExPQ0FMRV9JRCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5LCBOYkJvb2xlYW5JbnB1dCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTmJQb3J0YWxEaXJlY3RpdmUgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9tYXBwaW5nJztcbmltcG9ydCB7IE5iUGxhdGZvcm0gfSBmcm9tICcuLi9jZGsvcGxhdGZvcm0vcGxhdGZvcm0tc2VydmljZSc7XG5pbXBvcnQgeyBOYkRhdGVTZXJ2aWNlLCBOYkRheVBlcmlvZCB9IGZyb20gJy4uL2NhbGVuZGFyLWtpdC9zZXJ2aWNlcy9kYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgcmFuZ2UsIHJhbmdlRnJvbVRvIH0gZnJvbSAnLi4vY2FsZW5kYXIta2l0L2hlbHBlcnMnO1xuaW1wb3J0IHsgTmJDYWxlbmRhclRpbWVNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi9jYWxlbmRhci1raXQvc2VydmljZXMvY2FsZW5kYXItdGltZS1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIE5CX0RFRkFVTFRfVElNRVBJQ0tFUl9MT0NBTElaQVRJT05fQ09ORklHLFxuICBOQl9USU1FX1BJQ0tFUl9DT05GSUcsXG4gIE5iU2VsZWN0ZWRUaW1lUGF5bG9hZCxcbiAgTmJUaW1lUGlja2VyQ29uZmlnLFxufSBmcm9tICcuL21vZGVsJztcblxuaW50ZXJmYWNlIE5iVGltZVBhcnRPcHRpb24ge1xuICB2YWx1ZTogbnVtYmVyLFxuICB0ZXh0OiBzdHJpbmcsXG59XG5cbi8qKlxuICogVGhlIFRpbWVQaWNrZXIgY29tcG9uZW50cyBpdHNlbGYuXG4gKiBQcm92aWRlcyBhIHByb3h5IHRvIGBUaW1lUGlja2VyYCBvcHRpb25zIGFzIHdlbGwgYXMgY3VzdG9tIHBpY2tlciBvcHRpb25zLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi10aW1lcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90aW1lcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGV4cG9ydEFzOiAnbmJUaW1lcGlja2VyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iVGltZVBpY2tlckNvbXBvbmVudDxEPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgcHJvdGVjdGVkIGJsdXIkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBmdWxsVGltZU9wdGlvbnM6IERbXTtcbiAgaG91cnNDb2x1bW5PcHRpb25zOiBOYlRpbWVQYXJ0T3B0aW9uW107XG4gIG1pbnV0ZXNDb2x1bW5PcHRpb25zOiBOYlRpbWVQYXJ0T3B0aW9uW107XG4gIHNlY29uZHNDb2x1bW5PcHRpb25zOiBOYlRpbWVQYXJ0T3B0aW9uW107XG4gIHJlYWRvbmx5IGRheVBlcmlvZENvbHVtbk9wdGlvbnMgPSBbIE5iRGF5UGVyaW9kLkFNLCBOYkRheVBlcmlvZC5QTSBdO1xuICBob3N0UmVmOiBFbGVtZW50UmVmO1xuICBpc0FNID0gdHJ1ZTtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiB0aW1lcGlja2VyIGxvb3NlcyBmb2N1cy5cbiAgICovXG4gIGdldCBibHVyKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmJsdXIkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGltZSBmb3JtYXQgc3RyaW5nLlxuICAgKiAqL1xuICBASW5wdXQoKVxuICBnZXQgdGltZUZvcm1hdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aW1lRm9ybWF0O1xuICB9XG4gIHNldCB0aW1lRm9ybWF0KHRpbWVGb3JtYXQ6IHN0cmluZykge1xuICAgIHRoaXMuX3RpbWVGb3JtYXQgPSB0aW1lRm9ybWF0O1xuICB9XG4gIHByb3RlY3RlZCBfdGltZUZvcm1hdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIDEyIGhvdXJzIGZvcm1hdCAuXG4gICAqICovXG4gIEBJbnB1dCgpXG4gIGdldCB0d2VsdmVIb3Vyc0Zvcm1hdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdHdlbHZlSG91cnNGb3JtYXQ7XG4gIH1cbiAgc2V0IHR3ZWx2ZUhvdXJzRm9ybWF0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdHdlbHZlSG91cnNGb3JtYXQgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpO1xuICB9O1xuICBwcm90ZWN0ZWQgX3R3ZWx2ZUhvdXJzRm9ybWF0OiBib29sZWFuO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdHdlbHZlSG91cnNGb3JtYXQ6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBTaG93IHNlY29uZHMgaW4gdGltZXBpY2tlci5cbiAgICogSWdub3JlZCB3aGVuIHNpbmdsZUNvbHVtbiBpcyB0cnVlXG4gICAqICovXG4gIEBJbnB1dCgpXG4gIGdldCB3aXRoU2Vjb25kcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aFNlY29uZHM7XG4gIH1cbiAgc2V0IHdpdGhTZWNvbmRzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fd2l0aFNlY29uZHMgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpO1xuICB9O1xuICBwcm90ZWN0ZWQgX3dpdGhTZWNvbmRzOiBib29sZWFuO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfd2l0aFNlY29uZHM6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBTaG93IHRpbWVwaWNrZXIgdmFsdWVzIGluIG9uZSBjb2x1bW4gd2l0aCA2MCBtaW51dGVzIHN0ZXAgYnkgZGVmYXVsdC5cbiAgICogKi9cbiAgQElucHV0KClcbiAgZ2V0IHNpbmdsZUNvbHVtbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2luZ2xlQ29sdW1uO1xuICB9XG4gIHNldCBzaW5nbGVDb2x1bW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaW5nbGVDb2x1bW4gPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIF9zaW5nbGVDb2x1bW46IGJvb2xlYW47XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaW5nbGVDb2x1bW46IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIG1pbnV0ZXMgb2Zmc2V0IGZvciBvcHRpb25zLCB3aGVuIHRpbWVwaWNrZXIgaXMgaW4gc2luZ2xlIGNvbHVtbiBtb2RlLlxuICAgKiBCeSBkZWZhdWx0IGl04oCZcyA2MCBtaW51dGVzOiAnMTI6MDAsIDEzOjAwOiAxNDowMCwgMTU6MDAuLi4nXG4gICAqICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdGVwKHN0ZXA6IG51bWJlcikge1xuICAgIHRoaXMuX3N0ZXAgPSBzdGVwO1xuICB9XG4gIGdldCBzdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXA7XG4gIH1cbiAgcHJvdGVjdGVkIF9zdGVwOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERhdGUgd2hpY2ggd2lsbCBiZSByZW5kZXJlZCBhcyBzZWxlY3RlZC5cbiAgICogKi9cbiAgQElucHV0KClcbiAgc2V0IGRhdGUoZGF0ZTogRCkge1xuICAgIHRoaXMuX2RhdGUgPSBkYXRlO1xuICAgIHRoaXMuaXNBTSA9IHRoaXMuZGF0ZVNlcnZpY2UuZ2V0RGF5UGVyaW9kKHRoaXMuZGF0ZSkgPT09IE5iRGF5UGVyaW9kLkFNO1xuICAgIHRoaXMuYnVpbGRDb2x1bW5PcHRpb25zKCk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCBkYXRlKCk6IEQge1xuICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICB9XG5cbiAgX2RhdGU6IEQ7XG5cbiAgLyoqXG4gICAqIEluIHRpbWVwaWNrZXIgdmFsdWUgc2hvdWxkIGJlIGFsd2F5cyB0cnVlXG4gICAqIEluIGNhbGVuZGFyLXdpdGgtdGltZS5jb21wb25lbnQgIHNob3VsZCBzZXQgdG8gZmFsc2VcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQElucHV0KCkgc2hvd0Zvb3RlcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGFwcGx5QnV0dG9uVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBob3Vyc1RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbWludXRlc1RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgc2Vjb25kc1RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgYW1wbVRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgY3VycmVudFRpbWVCdXR0b25UZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVtaXRzIGRhdGUgd2hlbiBzZWxlY3RlZC5cbiAgICogKi9cbiAgQE91dHB1dCgpIG9uU2VsZWN0VGltZTogRXZlbnRFbWl0dGVyPE5iU2VsZWN0ZWRUaW1lUGF5bG9hZDxEPj4gPSBuZXcgRXZlbnRFbWl0dGVyPE5iU2VsZWN0ZWRUaW1lUGF5bG9hZDxEPj4oKTtcbiAgQFZpZXdDaGlsZChOYlBvcnRhbERpcmVjdGl2ZSwge3N0YXRpYzogdHJ1ZX0pIHBvcnRhbDogTmJQb3J0YWxEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChOQl9USU1FX1BJQ0tFUl9DT05GSUcpIHByb3RlY3RlZCBjb25maWc6IE5iVGltZVBpY2tlckNvbmZpZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIHBsYXRmb3JtU2VydmljZTogTmJQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nLFxuICAgICAgICAgICAgICBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgY2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlOiBOYkNhbGVuZGFyVGltZU1vZGVsU2VydmljZTxEPixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIGRhdGVTZXJ2aWNlOiBOYkRhdGVTZXJ2aWNlPEQ+KSB7XG4gICAgdGhpcy5pbml0RnJvbUNvbmZpZyh0aGlzLmNvbmZpZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVGb3JtYXQgPSB0aGlzLnNldHVwVGltZUZvcm1hdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoe1xuICAgICAgICAgICAgICAgIHN0ZXAsXG4gICAgICAgICAgICAgICAgdHdlbHZlSG91cnNGb3JtYXQsXG4gICAgICAgICAgICAgICAgd2l0aFNlY29uZHMsXG4gICAgICAgICAgICAgICAgc2luZ2xlQ29sdW1uLFxuICAgICAgICAgICAgICB9OiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy50aW1lRm9ybWF0ID0gdGhpcy5zZXR1cFRpbWVGb3JtYXQoKTtcblxuICAgIGNvbnN0IGlzQ29uZmlnQ2hhbmdlZCA9IHN0ZXAgfHwgdHdlbHZlSG91cnNGb3JtYXQgfHwgd2l0aFNlY29uZHMgfHwgc2luZ2xlQ29sdW1uO1xuXG4gICAgaWYgKGlzQ29uZmlnQ2hhbmdlZCB8fCAhdGhpcy5mdWxsVGltZU9wdGlvbnMpIHtcbiAgICAgIHRoaXMuYnVpbGRDb2x1bW5PcHRpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0SG9zdChob3N0UmVmOiBFbGVtZW50UmVmKTogdm9pZCB7XG4gICAgdGhpcy5ob3N0UmVmID0gaG9zdFJlZjtcbiAgfVxuXG4gIGF0dGFjaChob3N0UmVmOiBFbGVtZW50UmVmKTogdm9pZCB7XG4gICAgdGhpcy5ob3N0UmVmID0gaG9zdFJlZjtcbiAgfVxuXG4gIHNldEN1cnJlbnRUaW1lKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZSA9IHRoaXMuZGF0ZVNlcnZpY2UudG9kYXkoKTtcbiAgICB0aGlzLm9uU2VsZWN0VGltZS5lbWl0KHtcbiAgICAgIHRpbWU6IHRoaXMuZGF0ZSxcbiAgICAgIHNhdmU6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZXRIb3VyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuZGF0ZVNlcnZpY2Uuc2V0SG91cnModGhpcy5kYXRlLCB2YWx1ZSkpO1xuICB9XG5cbiAgc2V0TWludXRlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuZGF0ZVNlcnZpY2Uuc2V0TWludXRlcyh0aGlzLmRhdGUsIHZhbHVlKSk7XG4gIH1cblxuICBzZXRTZWNvbmQodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5kYXRlU2VydmljZS5zZXRTZWNvbmRzKHRoaXMuZGF0ZSwgdmFsdWUpKTtcbiAgfVxuXG4gIHNlbGVjdEZ1bGxUaW1lKHZhbHVlOiBEKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VEYXlQZXJpb2QoZGF5UGVyaW9kVG9TZXQ6IE5iRGF5UGVyaW9kKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF0ZVNlcnZpY2UuZ2V0RGF5UGVyaW9kKHRoaXMuZGF0ZSkgPT09IGRheVBlcmlvZFRvU2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3VidHJhY3QgaG91cnMgd2hlbiBzd2l0Y2hpbmcgdG8gQU0gKGJlZm9yZSBtaWRkYXksIDAtMTEgaW4gMjQtaG91cikgZnJvbSBQTSAoYWZ0ZXIgbWlkZGF5LCAxMi0yNCBpbiAyNC1ob3VyKSxcbiAgICAvLyBvdGhlcndpc2UgYWRkIGhvdXJzIGJlY2F1c2Ugc3dpdGNoaW5nIHRvIFBNIGZyb20gQU0uXG4gICAgY29uc3QgZGlyZWN0aW9uID0gZGF5UGVyaW9kVG9TZXQgPT09IE5iRGF5UGVyaW9kLkFNID8gLTEgOiAxO1xuICAgIGNvbnN0IGluY3JlbWVudCA9IGRpcmVjdGlvbiAqIHRoaXMuZGF0ZVNlcnZpY2UuSE9VUlNfSU5fREFZX1BFUklPRDtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuZGF0ZVNlcnZpY2UuYWRkSG91cnModGhpcy5kYXRlLCBpbmNyZW1lbnQpKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKGRhdGU6IEQpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VsZWN0VGltZS5lbWl0KHt0aW1lOiBkYXRlfSk7XG4gIH1cblxuICBzYXZlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5vblNlbGVjdFRpbWUuZW1pdCh7XG4gICAgICB0aW1lOiB0aGlzLmRhdGUsXG4gICAgICBzYXZlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgdHJhY2tCeVRpbWVWYWx1ZXMoaW5kZXgsIGl0ZW06IE5iVGltZVBhcnRPcHRpb24pOiBudW1iZXIge1xuICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICB9XG5cbiAgdHJhY2tCeVNpbmdsZUNvbHVtblZhbHVlKGluZGV4LCBpdGVtOiBEKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UudmFsdWVPZihpdGVtKTtcbiAgfVxuXG4gIHRyYWNrQnlEYXlQZXJpb2QoaW5kZXgsIGl0ZW06IE5iRGF5UGVyaW9kKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIHNob3dTZWNvbmRzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpdGhTZWNvbmRzICYmICF0aGlzLnNpbmdsZUNvbHVtbjtcbiAgfVxuXG4gIGlzU2VsZWN0ZWRIb3VyKHZhbDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuZ2V0SG91cnModGhpcy5kYXRlKSA9PT0gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWRNaW51dGUodmFsOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5kYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5nZXRNaW51dGVzKHRoaXMuZGF0ZSkgPT09IHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1NlbGVjdGVkU2Vjb25kKHZhbDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuZ2V0U2Vjb25kcyh0aGlzLmRhdGUpID09PSB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNTZWxlY3RlZERheVBlcmlvZChkYXlQZXJpb2Q6IE5iRGF5UGVyaW9kKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGF0ZSkge1xuICAgICAgcmV0dXJuIGRheVBlcmlvZCA9PT0gdGhpcy5kYXRlU2VydmljZS5nZXREYXlQZXJpb2QodGhpcy5kYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRGdWxsVGltZVN0cmluZyhpdGVtOiBEKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5mb3JtYXQoaXRlbSwgdGhpcy50aW1lRm9ybWF0KS50b1VwcGVyQ2FzZSgpO1xuICB9XG5cbiAgaXNTZWxlY3RlZEZ1bGxUaW1lVmFsdWUodmFsdWU6IEQpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5kYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5pc1NhbWVIb3VyQW5kTWludXRlKHZhbHVlLCB0aGlzLmRhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZENvbHVtbk9wdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lRm9ybWF0ID0gdGhpcy5zZXR1cFRpbWVGb3JtYXQoKTtcbiAgICB0aGlzLmZ1bGxUaW1lT3B0aW9ucyA9IHRoaXMuc2luZ2xlQ29sdW1uXG4gICAgICA/IHRoaXMuY2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlLmdldEhvdXJzUmFuZ2UodGhpcy5zdGVwKVxuICAgICAgOiBbXTtcblxuICAgIHRoaXMuaG91cnNDb2x1bW5PcHRpb25zID0gdGhpcy5nZW5lcmF0ZUhvdXJzKCk7XG4gICAgdGhpcy5taW51dGVzQ29sdW1uT3B0aW9ucyA9IHRoaXMuZ2VuZXJhdGVNaW51dGVzT3JTZWNvbmRzKCk7XG4gICAgdGhpcy5zZWNvbmRzQ29sdW1uT3B0aW9ucyA9IHRoaXMud2l0aFNlY29uZHMgPyB0aGlzLmdlbmVyYXRlTWludXRlc09yU2Vjb25kcygpIDogW107XG4gIH1cblxuICAvKipcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgaXNGaXJlZm94KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBsYXRmb3JtU2VydmljZS5GSVJFRk9YO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdlbmVyYXRlSG91cnMoKTogTmJUaW1lUGFydE9wdGlvbltdIHtcbiAgICBpZiAoIXRoaXMudHdlbHZlSG91cnNGb3JtYXQpIHtcbiAgICAgIHJldHVybiByYW5nZSgyNCwgKHY6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiB2LCB0ZXh0OiB0aGlzLmNhbGVuZGFyVGltZU1vZGVsU2VydmljZS5wYWRkVG9Ud29TeW1ib2xzKHYpfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQU0pIHtcbiAgICAgIHJldHVybiAocmFuZ2UoMTIsICh2OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHYgPT09IDAgPyAxMiA6IHY7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IHYsIHRleHQ6IHRoaXMuY2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlLnBhZGRUb1R3b1N5bWJvbHModGV4dCl9XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChyYW5nZUZyb21UbygxMiwgMjQsICh2OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSB2ID09PSAxMiA/IDEyIDogKHYgLSAxMik7XG4gICAgICByZXR1cm4ge3ZhbHVlOiB2LCB0ZXh0OiB0aGlzLmNhbGVuZGFyVGltZU1vZGVsU2VydmljZS5wYWRkVG9Ud29TeW1ib2xzKHRleHQpfVxuICAgIH0pKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZW5lcmF0ZU1pbnV0ZXNPclNlY29uZHMoKTogTmJUaW1lUGFydE9wdGlvbltdIHtcbiAgICByZXR1cm4gcmFuZ2UoNjAsICh2OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiB7dmFsdWU6IHYsIHRleHQ6IHRoaXMuY2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlLnBhZGRUb1R3b1N5bWJvbHModil9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldHVwVGltZUZvcm1hdCgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy50aW1lRm9ybWF0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuZm9ybWF0IHx8IHRoaXMuYnVpbGRUaW1lRm9ybWF0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGltZUZvcm1hdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBidWlsZFRpbWVGb3JtYXQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy50d2VsdmVIb3Vyc0Zvcm1hdCkge1xuICAgICAgcmV0dXJuIGAke3RoaXMud2l0aFNlY29uZHMgJiYgIXRoaXMuc2luZ2xlQ29sdW1uID8gdGhpcy5kYXRlU2VydmljZS5nZXRUd2VsdmVIb3Vyc0Zvcm1hdFdpdGhTZWNvbmRzKClcbiAgICAgICAgOiB0aGlzLmRhdGVTZXJ2aWNlLmdldFR3ZWx2ZUhvdXJzRm9ybWF0KCl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke3RoaXMud2l0aFNlY29uZHMgJiYgIXRoaXMuc2luZ2xlQ29sdW1uID8gdGhpcy5kYXRlU2VydmljZS5nZXRUd2VudHlGb3VySG91cnNGb3JtYXRXaXRoU2Vjb25kcygpXG4gICAgICAgIDogdGhpcy5kYXRlU2VydmljZS5nZXRUd2VudHlGb3VySG91cnNGb3JtYXQoKX1gO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0RnJvbUNvbmZpZyhjb25maWc6IE5iVGltZVBpY2tlckNvbmZpZykge1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIHRoaXMudHdlbHZlSG91cnNGb3JtYXQgPSBjb25maWcudHdlbHZlSG91cnNGb3JtYXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHdlbHZlSG91cnNGb3JtYXQgPSB0aGlzLmRhdGVTZXJ2aWNlLmdldExvY2FsZVRpbWVGb3JtYXQoKS5pbmNsdWRlcygnaCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvY2FsZUNvbmZpZyA9IHsgLi4uTkJfREVGQVVMVF9USU1FUElDS0VSX0xPQ0FMSVpBVElPTl9DT05GSUcsIC4uLmNvbmZpZz8ubG9jYWxpemF0aW9uID8/IHt9IH07XG4gICAgdGhpcy5ob3Vyc1RleHQgPSBsb2NhbGVDb25maWcuaG91cnNUZXh0O1xuICAgIHRoaXMubWludXRlc1RleHQgPSBsb2NhbGVDb25maWcubWludXRlc1RleHQ7XG4gICAgdGhpcy5zZWNvbmRzVGV4dCA9IGxvY2FsZUNvbmZpZy5zZWNvbmRzVGV4dDtcbiAgICB0aGlzLmFtcG1UZXh0ID0gbG9jYWxlQ29uZmlnLmFtcG1UZXh0O1xuICB9XG59XG4iLCI8bmItY2FyZCAqbmJQb3J0YWxcbiAgICAgICAgIFtjbGFzcy5zdXBwb3J0cy1zY3JvbGxiYXItdGhlbWluZ109XCIhaXNGaXJlZm94KClcIlxuICAgICAgICAgY2xhc3M9XCJuYi10aW1lcGlja2VyLWNvbnRhaW5lclwiPlxuICA8bmItY2FyZC1oZWFkZXIgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNpbmdsZUNvbHVtbjsgZWxzZSBmdWxsVGltZUhlYWRlcnNCbG9ja1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1jZWxsXCI+VGltZTwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjZnVsbFRpbWVIZWFkZXJzQmxvY2s+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNlbGxcIj57eyBob3Vyc1RleHQgfX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY2VsbFwiPnt7IG1pbnV0ZXNUZXh0IH19PC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwid2l0aFNlY29uZHNcIiBjbGFzcz1cImhlYWRlci1jZWxsXCI+e3sgc2Vjb25kc1RleHQgfX08L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJ0d2VsdmVIb3Vyc0Zvcm1hdFwiIGNsYXNzPVwiaGVhZGVyLWNlbGxcIj57eyBhbXBtVGV4dCB9fTwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbmItY2FyZC1oZWFkZXI+XG5cbiAgPGRpdiBjbGFzcz1cInBpY2tlci1ib2R5XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNpbmdsZUNvbHVtbjsgZWxzZSBmdWxsVGltZUNvbHVtbkJsb2NrXCI+XG4gICAgICA8bmItbGlzdCBjbGFzcz1cInZhbHVlcy1saXN0XCI+XG4gICAgICAgIDxuYi1saXN0LWl0ZW1cbiAgICAgICAgICBjbGFzcz1cImxpc3QtaXRlbVwiXG4gICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cImlzU2VsZWN0ZWRGdWxsVGltZVZhbHVlKGl0ZW0pXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmdWxsVGltZU9wdGlvbnM7IHRyYWNrQnk6IHRyYWNrQnlTaW5nbGVDb2x1bW5WYWx1ZS5iaW5kKHRoaXMpXCI+XG4gICAgICAgICAgPG5iLXRpbWVwaWNrZXItY2VsbFxuICAgICAgICAgICAgW3ZhbHVlXT1cImdldEZ1bGxUaW1lU3RyaW5nKGl0ZW0pXCJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJpc1NlbGVjdGVkRnVsbFRpbWVWYWx1ZShpdGVtKVwiXG4gICAgICAgICAgICAoc2VsZWN0KT1cInNlbGVjdEZ1bGxUaW1lKGl0ZW0pXCI+XG4gICAgICAgICAgPC9uYi10aW1lcGlja2VyLWNlbGw+XG4gICAgICAgIDwvbmItbGlzdC1pdGVtPlxuICAgICAgPC9uYi1saXN0PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLXRlbXBsYXRlICNmdWxsVGltZUNvbHVtbkJsb2NrPlxuICAgICAgPG5iLWxpc3QgY2xhc3M9XCJ2YWx1ZXMtbGlzdFwiPlxuICAgICAgICA8bmItbGlzdC1pdGVtXG4gICAgICAgICAgY2xhc3M9XCJsaXN0LWl0ZW1cIlxuICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpc1NlbGVjdGVkSG91cihpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaG91cnNDb2x1bW5PcHRpb25zOyB0cmFja0J5OiB0cmFja0J5VGltZVZhbHVlc1wiPlxuICAgICAgICAgIDxuYi10aW1lcGlja2VyLWNlbGxcbiAgICAgICAgICAgIFt2YWx1ZV09XCJpdGVtLnRleHRcIlxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cImlzU2VsZWN0ZWRIb3VyKGl0ZW0udmFsdWUpXCJcbiAgICAgICAgICAgIChzZWxlY3QpPVwic2V0SG91cihpdGVtLnZhbHVlKVwiPlxuICAgICAgICAgIDwvbmItdGltZXBpY2tlci1jZWxsPlxuICAgICAgICA8L25iLWxpc3QtaXRlbT5cbiAgICAgIDwvbmItbGlzdD5cbiAgICAgIDxuYi1saXN0IGNsYXNzPVwidmFsdWVzLWxpc3RcIj5cbiAgICAgICAgPG5iLWxpc3QtaXRlbVxuICAgICAgICAgIGNsYXNzPVwibGlzdC1pdGVtXCJcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZE1pbnV0ZShpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbWludXRlc0NvbHVtbk9wdGlvbnM7IHRyYWNrQnk6IHRyYWNrQnlUaW1lVmFsdWVzXCI+XG4gICAgICAgICAgPG5iLXRpbWVwaWNrZXItY2VsbFxuICAgICAgICAgICAgW3ZhbHVlXT1cIml0ZW0udGV4dFwiXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZE1pbnV0ZShpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAoc2VsZWN0KT1cInNldE1pbnV0ZShpdGVtLnZhbHVlKVwiPlxuICAgICAgICAgIDwvbmItdGltZXBpY2tlci1jZWxsPlxuICAgICAgICA8L25iLWxpc3QtaXRlbT5cbiAgICAgIDwvbmItbGlzdD5cbiAgICAgIDxuYi1saXN0ICpuZ0lmPVwic2hvd1NlY29uZHMoKVwiIGNsYXNzPVwidmFsdWVzLWxpc3RcIj5cbiAgICAgICAgPG5iLWxpc3QtaXRlbVxuICAgICAgICAgIGNsYXNzPVwibGlzdC1pdGVtXCJcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFNlY29uZChpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2Vjb25kc0NvbHVtbk9wdGlvbnM7IHRyYWNrQnk6IHRyYWNrQnlUaW1lVmFsdWVzXCI+XG4gICAgICAgICAgPG5iLXRpbWVwaWNrZXItY2VsbFxuICAgICAgICAgICAgW3ZhbHVlXT1cIml0ZW0udGV4dFwiXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFNlY29uZChpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAoc2VsZWN0KT1cInNldFNlY29uZChpdGVtLnZhbHVlKVwiPlxuICAgICAgICAgIDwvbmItdGltZXBpY2tlci1jZWxsPlxuICAgICAgICA8L25iLWxpc3QtaXRlbT5cbiAgICAgIDwvbmItbGlzdD5cbiAgICAgIDxuYi1saXN0ICpuZ0lmPVwidHdlbHZlSG91cnNGb3JtYXRcIiBjbGFzcz1cInZhbHVlcy1saXN0XCI+XG4gICAgICAgIDxuYi1saXN0LWl0ZW1cbiAgICAgICAgICBjbGFzcz1cImxpc3QtaXRlbSBhbS1wbS1pdGVtXCJcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZERheVBlcmlvZChkYXlQZXJpb2QpXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZGF5UGVyaW9kIG9mIGRheVBlcmlvZENvbHVtbk9wdGlvbnM7IHRyYWNrQnk6IHRyYWNrQnlEYXlQZXJpb2RcIj5cbiAgICAgICAgICA8bmItdGltZXBpY2tlci1jZWxsXG4gICAgICAgICAgICBbdmFsdWVdPVwiZGF5UGVyaW9kXCJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJpc1NlbGVjdGVkRGF5UGVyaW9kKGRheVBlcmlvZClcIlxuICAgICAgICAgICAgKHNlbGVjdCk9XCJjaGFuZ2VEYXlQZXJpb2QoZGF5UGVyaW9kKVwiPlxuICAgICAgICAgIDwvbmItdGltZXBpY2tlci1jZWxsPlxuICAgICAgICA8L25iLWxpc3QtaXRlbT5cbiAgICAgIDwvbmItbGlzdD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L2Rpdj5cblxuICA8bmItY2FyZC1mb290ZXIgKm5nSWY9XCJzaG93Rm9vdGVyXCIgY2xhc3M9XCJhY3Rpb25zLWZvb3RlclwiPlxuICAgIDxuYi1jYWxlbmRhci1hY3Rpb25zXG4gICAgICBbYXBwbHlCdXR0b25UZXh0XT1cImFwcGx5QnV0dG9uVGV4dFwiXG4gICAgICBbY3VycmVudFRpbWVCdXR0b25UZXh0XT1cImN1cnJlbnRUaW1lQnV0dG9uVGV4dFwiXG4gICAgICAoc2V0Q3VycmVudFRpbWUpPVwic2V0Q3VycmVudFRpbWUoKVwiXG4gICAgICAoc2F2ZVZhbHVlKT1cInNhdmVWYWx1ZSgpXCJcbiAgICA+PC9uYi1jYWxlbmRhci1hY3Rpb25zPlxuICA8L25iLWNhcmQtZm9vdGVyPlxuPC9uYi1jYXJkPlxuIl19