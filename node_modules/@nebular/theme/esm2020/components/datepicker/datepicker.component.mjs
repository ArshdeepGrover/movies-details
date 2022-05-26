/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject, Input, Output, Optional, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';
import { NbComponentPortal } from '../cdk/overlay/mapping';
import { NbAdjustment, NbPosition, } from '../cdk/overlay/overlay-position';
import { patch } from '../cdk/overlay/overlay-service';
import { NbTrigger } from '../cdk/overlay/overlay-trigger';
import { NbDatepickerContainerComponent } from './datepicker-container.component';
import { NB_DOCUMENT } from '../../theme.options';
import { NbCalendarRangeComponent } from '../calendar/calendar-range.component';
import { NbCalendarComponent } from '../calendar/calendar.component';
import { NbCalendarSize, NbCalendarViewMode, } from '../calendar-kit/model';
import { NB_DATE_SERVICE_OPTIONS, NbDatepicker } from './datepicker.directive';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/overlay/overlay-position";
import * as i2 from "../cdk/overlay/overlay-trigger";
import * as i3 from "../cdk/overlay/overlay-service";
import * as i4 from "../calendar-kit/services/date.service";
/**
 * The `NbBasePicker` component concentrates overlay manipulation logic.
 * */
export class NbBasePicker extends NbDatepicker {
    constructor(overlay, positionBuilder, triggerStrategyBuilder, cfr, dateService, dateServiceOptions) {
        super();
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.triggerStrategyBuilder = triggerStrategyBuilder;
        this.cfr = cfr;
        this.dateService = dateService;
        this.dateServiceOptions = dateServiceOptions;
        this.init$ = new ReplaySubject();
        /**
         * Stream of picker changes. Required to be the subject because picker hides and shows and picker
         * change stream becomes recreated.
         * */
        this.onChange$ = new Subject();
        this.overlayOffset = 8;
        this.adjustment = NbAdjustment.COUNTERCLOCKWISE;
        this.destroy$ = new Subject();
        this.blur$ = new Subject();
    }
    /**
     * Returns picker instance.
     * */
    get picker() {
        return this.pickerRef && this.pickerRef.instance;
    }
    /**
     * Stream of picker value changes.
     * */
    get valueChange() {
        return this.onChange$.asObservable();
    }
    get isShown() {
        return this.ref && this.ref.hasAttached();
    }
    get init() {
        return this.init$.asObservable();
    }
    /**
     * Emits when datepicker looses focus.
     */
    get blur() {
        return this.blur$.asObservable();
    }
    /**
     * Datepicker knows nothing about host html input element.
     * So, attach method attaches datepicker to the host input element.
     * */
    attach(hostRef) {
        this.hostRef = hostRef;
        this.subscribeOnTriggers();
    }
    getValidatorConfig() {
        return { min: this.min, max: this.max, filter: this.filter };
    }
    show() {
        if (!this.ref) {
            this.createOverlay();
        }
        this.openDatepicker();
    }
    shouldHide() {
        return this.hideOnSelect && !!this.value;
    }
    hide() {
        if (this.ref) {
            this.ref.detach();
        }
        // save current value if picker was rendered
        if (this.picker) {
            this.queue = this.value;
            this.pickerRef.destroy();
            this.pickerRef = null;
            this.container = null;
        }
    }
    createOverlay() {
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.subscribeOnPositionChange();
    }
    openDatepicker() {
        this.container = this.ref.attach(new NbComponentPortal(NbDatepickerContainerComponent, null, null, this.cfr));
        this.instantiatePicker();
        this.subscribeOnValueChange();
        this.writeQueue();
        this.patchWithInputs();
        this.pickerRef.changeDetectorRef.markForCheck();
    }
    createPositionStrategy() {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(NbPosition.BOTTOM)
            .offset(this.overlayOffset)
            .adjustment(this.adjustment);
    }
    subscribeOnPositionChange() {
        this.positionStrategy.positionChange
            .pipe(takeUntil(this.destroy$))
            .subscribe((position) => patch(this.container, { position }));
    }
    createTriggerStrategy() {
        return this.triggerStrategyBuilder
            .trigger(NbTrigger.FOCUS)
            .host(this.hostRef.nativeElement)
            .container(() => this.container)
            .build();
    }
    subscribeOnTriggers() {
        this.triggerStrategy = this.createTriggerStrategy();
        this.triggerStrategy.show$.subscribe(() => this.show());
        this.triggerStrategy.hide$.subscribe(() => {
            this.blur$.next();
            this.hide();
        });
    }
    instantiatePicker() {
        this.pickerRef = this.container.instance.attach(new NbComponentPortal(this.pickerClass, null, null, this.cfr));
    }
    /**
     * Subscribes on picker value changes and emit data through this.onChange$ subject.
     * */
    subscribeOnValueChange() {
        this.pickerValueChange.subscribe((date) => {
            this.onChange$.next(date);
        });
    }
    patchWithInputs() {
        this.picker.boundingMonth = this.boundingMonth;
        this.picker.startView = this.startView;
        this.picker.min = this.min;
        this.picker.max = this.max;
        this.picker.filter = this.filter;
        this.picker._cellComponent = this.dayCellComponent;
        this.picker._monthCellComponent = this.monthCellComponent;
        this.picker._yearCellComponent = this.yearCellComponent;
        this.picker.size = this.size;
        this.picker.showNavigation = this.showNavigation;
        this.picker.visibleDate = this.visibleDate;
        this.picker.showWeekNumber = this.showWeekNumber;
        this.picker.weekNumberSymbol = this.weekNumberSymbol;
    }
    checkFormat() {
        if (this.dateService.getId() === 'native' && this.format) {
            throw new Error("Can't format native date. To use custom formatting you have to install @nebular/moment or " +
                '@nebular/date-fns package and import NbMomentDateModule or NbDateFnsDateModule accordingly.' +
                'More information at "Formatting issue" ' +
                'https://akveo.github.io/nebular/docs/components/datepicker/overview#nbdatepickercomponent');
        }
        const isFormatSet = this.format || (this.dateServiceOptions && this.dateServiceOptions.format);
        if (this.dateService.getId() === 'date-fns' && !isFormatSet) {
            throw new Error('format is required when using NbDateFnsDateModule');
        }
    }
}
export class NbBasePickerComponent extends NbBasePicker {
    constructor(document, positionBuilder, triggerStrategyBuilder, overlay, cfr, dateService, dateServiceOptions) {
        super(overlay, positionBuilder, triggerStrategyBuilder, cfr, dateService, dateServiceOptions);
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines starting view for calendar.
         * */
        this.startView = NbCalendarViewMode.DATE;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        /**
         * Hide picker when a date or a range is selected, `true` by default
         * @type {boolean}
         */
        this.hideOnSelect = true;
        /**
         * Determines should we show calendars navigation or not.
         * @type {boolean}
         */
        this.showNavigation = true;
        /**
         * Sets symbol used as a header for week numbers column
         * */
        this.weekNumberSymbol = '#';
        this._showWeekNumber = false;
        /**
         * Determines picker overlay offset (in pixels).
         * */
        this.overlayOffset = 8;
        this.adjustment = NbAdjustment.COUNTERCLOCKWISE;
    }
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber() {
        return this._showWeekNumber;
    }
    set showWeekNumber(value) {
        this._showWeekNumber = convertToBoolProperty(value);
    }
    ngOnInit() {
        this.checkFormat();
        this.init$.next();
    }
    ngOnChanges(changes) {
        if (changes.format && !changes.format.isFirstChange()) {
            this.checkFormat();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.hide();
        this.init$.complete();
        if (this.ref) {
            this.ref.dispose();
        }
        if (this.triggerStrategy) {
            this.triggerStrategy.destroy();
        }
    }
    get pickerValueChange() {
        return undefined;
    }
    get value() {
        return undefined;
    }
    set value(value) { }
    writeQueue() { }
}
NbBasePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBasePickerComponent, deps: [{ token: NB_DOCUMENT }, { token: i1.NbPositionBuilderService }, { token: i2.NbTriggerStrategyBuilderService }, { token: i3.NbOverlayService }, { token: i0.ComponentFactoryResolver }, { token: i4.NbDateService }, { token: NB_DATE_SERVICE_OPTIONS, optional: true }], target: i0.ɵɵFactoryTarget.Component });
NbBasePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbBasePickerComponent, selector: "ng-component", inputs: { format: "format", boundingMonth: "boundingMonth", startView: "startView", min: "min", max: "max", filter: "filter", dayCellComponent: "dayCellComponent", monthCellComponent: "monthCellComponent", yearCellComponent: "yearCellComponent", size: "size", visibleDate: "visibleDate", hideOnSelect: "hideOnSelect", showNavigation: "showNavigation", weekNumberSymbol: "weekNumberSymbol", showWeekNumber: "showWeekNumber", overlayOffset: "overlayOffset", adjustment: "adjustment" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBasePickerComponent, decorators: [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }, { type: i1.NbPositionBuilderService }, { type: i2.NbTriggerStrategyBuilderService }, { type: i3.NbOverlayService }, { type: i0.ComponentFactoryResolver }, { type: i4.NbDateService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NB_DATE_SERVICE_OPTIONS]
                }] }]; }, propDecorators: { format: [{
                type: Input
            }], boundingMonth: [{
                type: Input
            }], startView: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], filter: [{
                type: Input
            }], dayCellComponent: [{
                type: Input
            }], monthCellComponent: [{
                type: Input
            }], yearCellComponent: [{
                type: Input
            }], size: [{
                type: Input
            }], visibleDate: [{
                type: Input
            }], hideOnSelect: [{
                type: Input
            }], showNavigation: [{
                type: Input
            }], weekNumberSymbol: [{
                type: Input
            }], showWeekNumber: [{
                type: Input
            }], overlayOffset: [{
                type: Input
            }], adjustment: [{
                type: Input
            }] } });
/**
 * The DatePicker components itself.
 * Provides a proxy to `NbCalendar` options as well as custom picker options.
 */
export class NbDatepickerComponent extends NbBasePickerComponent {
    constructor() {
        super(...arguments);
        this.pickerClass = NbCalendarComponent;
    }
    /**
     * Date which will be rendered as selected.
     * */
    set date(date) {
        this.value = date;
    }
    /**
     * Emits date when selected.
     * */
    get dateChange() {
        return this.valueChange;
    }
    get value() {
        return this.picker ? this.picker.date : undefined;
    }
    set value(date) {
        if (!this.picker) {
            this.queue = date;
            return;
        }
        if (date) {
            this.visibleDate = date;
            this.picker.visibleDate = date;
            this.picker.date = date;
        }
    }
    get pickerValueChange() {
        return this.picker.dateChange;
    }
    writeQueue() {
        if (this.queue) {
            const date = this.queue;
            this.queue = null;
            this.value = date;
        }
    }
}
NbDatepickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDatepickerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NbDatepickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbDatepickerComponent, selector: "nb-datepicker", inputs: { date: "date" }, outputs: { dateChange: "dateChange" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDatepickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-datepicker',
                    template: '',
                }]
        }], propDecorators: { date: [{
                type: Input
            }], dateChange: [{
                type: Output
            }] } });
/**
 * The RangeDatePicker components itself.
 * Provides a proxy to `NbCalendarRange` options as well as custom picker options.
 */
export class NbRangepickerComponent extends NbBasePickerComponent {
    constructor() {
        super(...arguments);
        this.pickerClass = NbCalendarRangeComponent;
    }
    /**
     * Range which will be rendered as selected.
     * */
    set range(range) {
        this.value = range;
    }
    /**
     * Emits range when start selected and emits again when end selected.
     * */
    get rangeChange() {
        return this.valueChange;
    }
    get value() {
        return this.picker ? this.picker.range : undefined;
    }
    set value(range) {
        if (!this.picker) {
            this.queue = range;
            return;
        }
        if (range) {
            const visibleDate = range && range.start;
            this.visibleDate = visibleDate;
            this.picker.visibleDate = visibleDate;
            this.picker.range = range;
        }
    }
    get pickerValueChange() {
        return this.picker.rangeChange;
    }
    shouldHide() {
        return super.shouldHide() && !!(this.value && this.value.start && this.value.end);
    }
    writeQueue() {
        if (this.queue) {
            const range = this.queue;
            this.queue = null;
            this.value = range;
        }
    }
}
NbRangepickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRangepickerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NbRangepickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbRangepickerComponent, selector: "nb-rangepicker", inputs: { range: "range" }, outputs: { rangeChange: "rangeChange" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRangepickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-rangepicker',
                    template: '',
                }]
        }], propDecorators: { range: [{
                type: Input
            }], rangeChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFNVCxNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFJTixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFELE9BQU8sRUFBRSxpQkFBaUIsRUFBZ0IsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RSxPQUFPLEVBRUwsWUFBWSxFQUVaLFVBQVUsR0FFWCxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pDLE9BQU8sRUFBb0IsS0FBSyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBc0QsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFtQix3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFFTCxjQUFjLEVBQ2Qsa0JBQWtCLEdBR25CLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBMkIsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDOzs7Ozs7QUFFbkU7O0tBRUs7QUFDTCxNQUFNLE9BQWdCLFlBQXNCLFNBQVEsWUFBa0I7SUEySXBFLFlBQ1ksT0FBeUIsRUFDekIsZUFBeUMsRUFDekMsc0JBQXVELEVBQ3ZELEdBQTZCLEVBQzdCLFdBQTZCLEVBQzdCLGtCQUFrQjtRQUU1QixLQUFLLEVBQUUsQ0FBQztRQVBFLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLG9CQUFlLEdBQWYsZUFBZSxDQUEwQjtRQUN6QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQWlDO1FBQ3ZELFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBQzdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQUE7UUFqQ3BCLFVBQUssR0FBd0IsSUFBSSxhQUFhLEVBQVEsQ0FBQztRQUVqRTs7O2FBR0s7UUFDSyxjQUFTLEdBQWUsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU90QyxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQixlQUFVLEdBQWlCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztRQUV6RCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVEvQixVQUFLLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7SUFXckQsQ0FBQztJQUVEOztTQUVLO0lBQ0wsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBQ25ELENBQUM7SUFFRDs7U0FFSztJQUNMLElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUlEOzs7U0FHSztJQUNMLE1BQU0sQ0FBQyxPQUFtQjtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDM0MsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ25CO1FBRUQsNENBQTRDO1FBQzVDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUlTLGFBQWE7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDN0IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUU7U0FDM0QsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVTLGNBQWM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGlCQUFpQixDQUFDLDhCQUE4QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFUyxzQkFBc0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsZUFBZTthQUN4QixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN6QixRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQzthQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUMxQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFUyx5QkFBeUI7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWM7YUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLENBQUMsUUFBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVTLHFCQUFxQjtRQUM3QixPQUFPLElBQUksQ0FBQyxzQkFBc0I7YUFDL0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO2FBQ2hDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQy9CLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVTLG1CQUFtQjtRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsaUJBQWlCO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFRDs7U0FFSztJQUNLLHNCQUFzQjtRQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsZUFBZTtRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDdkQsQ0FBQztJQUVTLFdBQVc7UUFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hELE1BQU0sSUFBSSxLQUFLLENBQ2IsNEZBQTRGO2dCQUMxRiw2RkFBNkY7Z0JBQzdGLHlDQUF5QztnQkFDekMsMkZBQTJGLENBQzlGLENBQUM7U0FDSDtRQUVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9GLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDM0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztDQUNGO0FBS0QsTUFBTSxPQUFPLHFCQUErQixTQUFRLFlBQXFCO0lBb0d2RSxZQUN1QixRQUFRLEVBQzdCLGVBQXlDLEVBQ3pDLHNCQUF1RCxFQUN2RCxPQUF5QixFQUN6QixHQUE2QixFQUM3QixXQUE2QixFQUNnQixrQkFBa0I7UUFFL0QsS0FBSyxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBdEdoRzs7O2FBR0s7UUFDSSxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUV2Qzs7YUFFSztRQUNJLGNBQVMsR0FBdUIsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1FBaUNqRTs7O2FBR0s7UUFDSSxTQUFJLEdBQW1CLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFRdEQ7OztXQUdHO1FBQ00saUJBQVksR0FBWSxJQUFJLENBQUM7UUFFdEM7OztXQUdHO1FBQ00sbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFFeEM7O2FBRUs7UUFDSSxxQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFhOUIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFHM0M7O2FBRUs7UUFDSSxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQixlQUFVLEdBQWlCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztJQWFsRSxDQUFDO0lBaENEOzs7U0FHSztJQUNMLElBQ0ksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksY0FBYyxDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBd0JELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV0QixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBSUQsSUFBYyxpQkFBaUI7UUFDN0IsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFRLElBQUcsQ0FBQztJQUVaLFVBQVUsS0FBSSxDQUFDOztrSEFySmQscUJBQXFCLGtCQXFHdEIsV0FBVyx5TUFNQyx1QkFBdUI7c0dBM0dsQyxxQkFBcUIsb2tCQUZ0QixFQUFFOzJGQUVELHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs7MEJBc0dJLE1BQU07MkJBQUMsV0FBVzs7MEJBTWxCLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsdUJBQXVCOzRDQXRHcEMsTUFBTTtzQkFBZCxLQUFLO2dCQU1HLGFBQWE7c0JBQXJCLEtBQUs7Z0JBS0csU0FBUztzQkFBakIsS0FBSztnQkFNRyxHQUFHO3NCQUFYLEtBQUs7Z0JBS0csR0FBRztzQkFBWCxLQUFLO2dCQUtHLE1BQU07c0JBQWQsS0FBSztnQkFLRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBS0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUtHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFNRyxJQUFJO3NCQUFaLEtBQUs7Z0JBTUcsV0FBVztzQkFBbkIsS0FBSztnQkFNRyxZQUFZO3NCQUFwQixLQUFLO2dCQU1HLGNBQWM7c0JBQXRCLEtBQUs7Z0JBS0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQU9GLGNBQWM7c0JBRGpCLEtBQUs7Z0JBYUcsYUFBYTtzQkFBckIsS0FBSztnQkFFRyxVQUFVO3NCQUFsQixLQUFLOztBQXVEUjs7O0dBR0c7QUFLSCxNQUFNLE9BQU8scUJBQXlCLFNBQVEscUJBQW1EO0lBSmpHOztRQUtZLGdCQUFXLEdBQWlDLG1CQUFtQixDQUFDO0tBNEMzRTtJQTFDQzs7U0FFSztJQUNMLElBQWEsSUFBSSxDQUFDLElBQU87UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVEOztTQUVLO0lBQ0wsSUFBYyxVQUFVO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFdBQThCLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsSUFBTztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxJQUFjLGlCQUFpQjtRQUM3QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ2hDLENBQUM7SUFFUyxVQUFVO1FBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7SUFDSCxDQUFDOztrSEE1Q1UscUJBQXFCO3NHQUFyQixxQkFBcUIsNklBRnRCLEVBQUU7MkZBRUQscUJBQXFCO2tCQUpqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsRUFBRTtpQkFDYjs4QkFPYyxJQUFJO3NCQUFoQixLQUFLO2dCQU9RLFVBQVU7c0JBQXZCLE1BQU07O0FBa0NUOzs7R0FHRztBQUtILE1BQU0sT0FBTyxzQkFBMEIsU0FBUSxxQkFJOUM7SUFSRDs7UUFTWSxnQkFBVyxHQUFzQyx3QkFBd0IsQ0FBQztLQWlEckY7SUEvQ0M7O1NBRUs7SUFDTCxJQUFhLEtBQUssQ0FBQyxLQUF5QjtRQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQ7O1NBRUs7SUFDTCxJQUFjLFdBQVc7UUFDdkIsT0FBTyxJQUFJLENBQUMsV0FBK0MsQ0FBQztJQUM5RCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUF5QjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixPQUFPO1NBQ1I7UUFFRCxJQUFJLEtBQUssRUFBRTtZQUNULE1BQU0sV0FBVyxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsSUFBYyxpQkFBaUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRVMsVUFBVTtRQUNsQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7bUhBckRVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLGtKQUZ2QixFQUFFOzJGQUVELHNCQUFzQjtrQkFKbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsRUFBRTtpQkFDYjs4QkFXYyxLQUFLO3NCQUFqQixLQUFLO2dCQU9RLFdBQVc7c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgT25DaGFuZ2VzLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBUeXBlLFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmJDb21wb25lbnRQb3J0YWwsIE5iT3ZlcmxheVJlZiB9IGZyb20gJy4uL2Nkay9vdmVybGF5L21hcHBpbmcnO1xuaW1wb3J0IHtcbiAgTmJBZGp1c3RhYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgTmJBZGp1c3RtZW50LFxuICBOYkFkanVzdG1lbnRWYWx1ZXMsXG4gIE5iUG9zaXRpb24sXG4gIE5iUG9zaXRpb25CdWlsZGVyU2VydmljZSxcbn0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbic7XG5pbXBvcnQgeyBOYk92ZXJsYXlTZXJ2aWNlLCBwYXRjaCB9IGZyb20gJy4uL2Nkay9vdmVybGF5L292ZXJsYXktc2VydmljZSc7XG5pbXBvcnQgeyBOYlRyaWdnZXIsIE5iVHJpZ2dlclN0cmF0ZWd5LCBOYlRyaWdnZXJTdHJhdGVneUJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS10cmlnZ2VyJztcbmltcG9ydCB7IE5iRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5CX0RPQ1VNRU5UIH0gZnJvbSAnLi4vLi4vdGhlbWUub3B0aW9ucyc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyUmFuZ2UsIE5iQ2FsZW5kYXJSYW5nZUNvbXBvbmVudCB9IGZyb20gJy4uL2NhbGVuZGFyL2NhbGVuZGFyLXJhbmdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi4vY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIE5iQ2FsZW5kYXJDZWxsLFxuICBOYkNhbGVuZGFyU2l6ZSxcbiAgTmJDYWxlbmRhclZpZXdNb2RlLFxuICBOYkNhbGVuZGFyU2l6ZVZhbHVlcyxcbiAgTmJDYWxlbmRhclZpZXdNb2RlVmFsdWVzLFxufSBmcm9tICcuLi9jYWxlbmRhci1raXQvbW9kZWwnO1xuaW1wb3J0IHsgTmJEYXRlU2VydmljZSB9IGZyb20gJy4uL2NhbGVuZGFyLWtpdC9zZXJ2aWNlcy9kYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTkJfREFURV9TRVJWSUNFX09QVElPTlMsIE5iRGF0ZXBpY2tlciwgTmJQaWNrZXJWYWxpZGF0b3JDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLyoqXG4gKiBUaGUgYE5iQmFzZVBpY2tlcmAgY29tcG9uZW50IGNvbmNlbnRyYXRlcyBvdmVybGF5IG1hbmlwdWxhdGlvbiBsb2dpYy5cbiAqICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmJCYXNlUGlja2VyPEQsIFQsIFA+IGV4dGVuZHMgTmJEYXRlcGlja2VyPFQsIEQ+IHtcbiAgLyoqXG4gICAqIERhdGVwaWNrZXIgZGF0ZSBmb3JtYXQuIENhbiBiZSB1c2VkIG9ubHkgd2l0aCBkYXRlIGFkYXB0ZXJzIChtb21lbnQsIGRhdGUtZm5zKSBzaW5jZSBuYXRpdmUgZGF0ZVxuICAgKiBvYmplY3QgZG9lc24ndCBzdXBwb3J0IGZvcm1hdHRpbmcuXG4gICAqICovXG4gIGFic3RyYWN0IGZvcm1hdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGlmIHdlIHNob3VsZCByZW5kZXIgcHJldmlvdXMgYW5kIG5leHQgbW9udGhzXG4gICAqIGluIHRoZSBjdXJyZW50IG1vbnRoIHZpZXcuXG4gICAqICovXG4gIGFic3RyYWN0IGJvdW5kaW5nTW9udGg6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERlZmluZXMgc3RhcnRpbmcgdmlldyBmb3IgY2FsZW5kYXIuXG4gICAqICovXG4gIGFic3RyYWN0IHN0YXJ0VmlldzogTmJDYWxlbmRhclZpZXdNb2RlO1xuXG4gIC8qKlxuICAgKiBNaW5pbXVtIGF2YWlsYWJsZSBkYXRlIGZvciBzZWxlY3Rpb24uXG4gICAqICovXG4gIGFic3RyYWN0IG1pbjogRDtcblxuICAvKipcbiAgICogTWF4aW11bSBhdmFpbGFibGUgZGF0ZSBmb3Igc2VsZWN0aW9uLlxuICAgKiAqL1xuICBhYnN0cmFjdCBtYXg6IEQ7XG5cbiAgLyoqXG4gICAqIFByZWRpY2F0ZSB0aGF0IGRlY2lkZXMgd2hpY2ggY2VsbHMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICogKi9cbiAgYWJzdHJhY3QgZmlsdGVyOiAoRCkgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICogQ3VzdG9tIGRheSBjZWxsIGNvbXBvbmVudC4gSGF2ZSB0byBpbXBsZW1lbnQgYE5iQ2FsZW5kYXJDZWxsYCBpbnRlcmZhY2UuXG4gICAqICovXG4gIGFic3RyYWN0IGRheUNlbGxDb21wb25lbnQ6IFR5cGU8TmJDYWxlbmRhckNlbGw8RCwgVD4+O1xuXG4gIC8qKlxuICAgKiBDdXN0b20gbW9udGggY2VsbCBjb21wb25lbnQuIEhhdmUgdG8gaW1wbGVtZW50IGBOYkNhbGVuZGFyQ2VsbGAgaW50ZXJmYWNlLlxuICAgKiAqL1xuICBhYnN0cmFjdCBtb250aENlbGxDb21wb25lbnQ6IFR5cGU8TmJDYWxlbmRhckNlbGw8RCwgVD4+O1xuXG4gIC8qKlxuICAgKiBDdXN0b20geWVhciBjZWxsIGNvbXBvbmVudC4gSGF2ZSB0byBpbXBsZW1lbnQgYE5iQ2FsZW5kYXJDZWxsYCBpbnRlcmZhY2UuXG4gICAqICovXG4gIGFic3RyYWN0IHllYXJDZWxsQ29tcG9uZW50OiBUeXBlPE5iQ2FsZW5kYXJDZWxsPEQsIFQ+PjtcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGUgY2FsZW5kYXIgYW5kIGVudGlyZSBjb21wb25lbnRzLlxuICAgKiBDYW4gYmUgJ21lZGl1bScgd2hpY2ggaXMgZGVmYXVsdCBvciAnbGFyZ2UnLlxuICAgKiAqL1xuICBhYnN0cmFjdCBzaXplOiBOYkNhbGVuZGFyU2l6ZTtcblxuICAvKipcbiAgICogRGVwZW5kaW5nIG9uIHRoaXMgZGF0ZSBhIHBhcnRpY3VsYXIgbW9udGggaXMgc2VsZWN0ZWQgaW4gdGhlIGNhbGVuZGFyXG4gICAqL1xuICBhYnN0cmFjdCB2aXNpYmxlRGF0ZTogRDtcblxuICAvKipcbiAgICogSGlkZSBwaWNrZXIgd2hlbiBhIGRhdGUgb3IgYSByYW5nZSBpcyBzZWxlY3RlZCwgYHRydWVgIGJ5IGRlZmF1bHRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBhYnN0cmFjdCBoaWRlT25TZWxlY3Q6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgc2hvdWxkIHdlIHNob3cgY2FsZW5kYXIgbmF2aWdhdGlvbiBvciBub3QuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgYWJzdHJhY3Qgc2hvd05hdmlnYXRpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldHMgc3ltYm9sIHVzZWQgYXMgYSBoZWFkZXIgZm9yIHdlZWsgbnVtYmVycyBjb2x1bW5cbiAgICogKi9cbiAgYWJzdHJhY3Qgd2Vla051bWJlclN5bWJvbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHNob3VsZCB3ZSBzaG93IHdlZWsgbnVtYmVycyBjb2x1bW4uXG4gICAqIEZhbHNlIGJ5IGRlZmF1bHQuXG4gICAqICovXG4gIGFic3RyYWN0IHNob3dXZWVrTnVtYmVyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDYWxlbmRhciBjb21wb25lbnQgY2xhc3MgdGhhdCBoYXMgdG8gYmUgaW5zdGFudGlhdGVkIGluc2lkZSBvdmVybGF5LlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcGlja2VyQ2xhc3M6IFR5cGU8UD47XG5cbiAgLyoqXG4gICAqIE92ZXJsYXkgcmVmZXJlbmNlIG9iamVjdC5cbiAgICogKi9cbiAgcHJvdGVjdGVkIHJlZjogTmJPdmVybGF5UmVmO1xuXG4gIC8qKlxuICAgKiBEYXRlcGlja2VyIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIGluc3RhbnRpYXRlZCBwaWNrZXIuXG4gICAqICovXG4gIHByb3RlY3RlZCBjb250YWluZXI6IENvbXBvbmVudFJlZjxOYkRhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBQb3NpdGlvbmluZyBzdHJhdGVneSB1c2VkIGJ5IG92ZXJsYXkuXG4gICAqICovXG4gIHByb3RlY3RlZCBwb3NpdGlvblN0cmF0ZWd5OiBOYkFkanVzdGFibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHN0cmF0ZWd5IHVzZWQgYnkgb3ZlcmxheVxuICAgKiAqL1xuICBwcm90ZWN0ZWQgdHJpZ2dlclN0cmF0ZWd5OiBOYlRyaWdnZXJTdHJhdGVneTtcblxuICAvKipcbiAgICogSFRNTCBpbnB1dCByZWZlcmVuY2UgdG8gd2hpY2ggZGF0ZXBpY2tlciBjb25uZWN0ZWQuXG4gICAqICovXG4gIHByb3RlY3RlZCBob3N0UmVmOiBFbGVtZW50UmVmO1xuXG4gIHByb3RlY3RlZCBpbml0JDogUmVwbGF5U3ViamVjdDx2b2lkPiA9IG5ldyBSZXBsYXlTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIFN0cmVhbSBvZiBwaWNrZXIgY2hhbmdlcy4gUmVxdWlyZWQgdG8gYmUgdGhlIHN1YmplY3QgYmVjYXVzZSBwaWNrZXIgaGlkZXMgYW5kIHNob3dzIGFuZCBwaWNrZXJcbiAgICogY2hhbmdlIHN0cmVhbSBiZWNvbWVzIHJlY3JlYXRlZC5cbiAgICogKi9cbiAgcHJvdGVjdGVkIG9uQ2hhbmdlJDogU3ViamVjdDxUPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgcGlja2VyIGluc3RhbmNlIGl0c2VsZi5cbiAgICogKi9cbiAgcHJvdGVjdGVkIHBpY2tlclJlZjogQ29tcG9uZW50UmVmPGFueT47XG5cbiAgcHJvdGVjdGVkIG92ZXJsYXlPZmZzZXQgPSA4O1xuXG4gIHByb3RlY3RlZCBhZGp1c3RtZW50OiBOYkFkanVzdG1lbnQgPSBOYkFkanVzdG1lbnQuQ09VTlRFUkNMT0NLV0lTRTtcblxuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBRdWV1ZSBjb250YWlucyB0aGUgbGFzdCB2YWx1ZSB0aGF0IHdhcyBhcHBsaWVkIHRvIHRoZSBwaWNrZXIgd2hlbiBpdCB3YXMgaGlkZGVuLlxuICAgKiBUaGlzIHZhbHVlIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwaWNrZXIgYXMgc29vbiBhcyBpdCBzaG93bi5cbiAgICogKi9cbiAgcHJvdGVjdGVkIHF1ZXVlOiBUIHwgdW5kZWZpbmVkO1xuXG4gIHByb3RlY3RlZCBibHVyJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvdmVybGF5OiBOYk92ZXJsYXlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwb3NpdGlvbkJ1aWxkZXI6IE5iUG9zaXRpb25CdWlsZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJpZ2dlclN0cmF0ZWd5QnVpbGRlcjogTmJUcmlnZ2VyU3RyYXRlZ3lCdWlsZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJvdGVjdGVkIGRhdGVTZXJ2aWNlOiBOYkRhdGVTZXJ2aWNlPEQ+LFxuICAgIHByb3RlY3RlZCBkYXRlU2VydmljZU9wdGlvbnMsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBwaWNrZXIgaW5zdGFuY2UuXG4gICAqICovXG4gIGdldCBwaWNrZXIoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5waWNrZXJSZWYgJiYgdGhpcy5waWNrZXJSZWYuaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogU3RyZWFtIG9mIHBpY2tlciB2YWx1ZSBjaGFuZ2VzLlxuICAgKiAqL1xuICBnZXQgdmFsdWVDaGFuZ2UoKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMub25DaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmVmICYmIHRoaXMucmVmLmhhc0F0dGFjaGVkKCk7XG4gIH1cblxuICBnZXQgaW5pdCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5pbml0JC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIGRhdGVwaWNrZXIgbG9vc2VzIGZvY3VzLlxuICAgKi9cbiAgZ2V0IGJsdXIoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuYmx1ciQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IHBpY2tlclZhbHVlQ2hhbmdlKCk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIERhdGVwaWNrZXIga25vd3Mgbm90aGluZyBhYm91dCBob3N0IGh0bWwgaW5wdXQgZWxlbWVudC5cbiAgICogU28sIGF0dGFjaCBtZXRob2QgYXR0YWNoZXMgZGF0ZXBpY2tlciB0byB0aGUgaG9zdCBpbnB1dCBlbGVtZW50LlxuICAgKiAqL1xuICBhdHRhY2goaG9zdFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuaG9zdFJlZiA9IGhvc3RSZWY7XG4gICAgdGhpcy5zdWJzY3JpYmVPblRyaWdnZXJzKCk7XG4gIH1cblxuICBnZXRWYWxpZGF0b3JDb25maWcoKTogTmJQaWNrZXJWYWxpZGF0b3JDb25maWc8RD4ge1xuICAgIHJldHVybiB7IG1pbjogdGhpcy5taW4sIG1heDogdGhpcy5tYXgsIGZpbHRlcjogdGhpcy5maWx0ZXIgfTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKCF0aGlzLnJlZikge1xuICAgICAgdGhpcy5jcmVhdGVPdmVybGF5KCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcGVuRGF0ZXBpY2tlcigpO1xuICB9XG5cbiAgc2hvdWxkSGlkZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oaWRlT25TZWxlY3QgJiYgISF0aGlzLnZhbHVlO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5yZWYpIHtcbiAgICAgIHRoaXMucmVmLmRldGFjaCgpO1xuICAgIH1cblxuICAgIC8vIHNhdmUgY3VycmVudCB2YWx1ZSBpZiBwaWNrZXIgd2FzIHJlbmRlcmVkXG4gICAgaWYgKHRoaXMucGlja2VyKSB7XG4gICAgICB0aGlzLnF1ZXVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMucGlja2VyUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucGlja2VyUmVmID0gbnVsbDtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgd3JpdGVRdWV1ZSgpO1xuXG4gIHByb3RlY3RlZCBjcmVhdGVPdmVybGF5KCkge1xuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IHRoaXMuY3JlYXRlUG9zaXRpb25TdHJhdGVneSgpO1xuICAgIHRoaXMucmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpLFxuICAgIH0pO1xuICAgIHRoaXMuc3Vic2NyaWJlT25Qb3NpdGlvbkNoYW5nZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9wZW5EYXRlcGlja2VyKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5yZWYuYXR0YWNoKG5ldyBOYkNvbXBvbmVudFBvcnRhbChOYkRhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQsIG51bGwsIG51bGwsIHRoaXMuY2ZyKSk7XG4gICAgdGhpcy5pbnN0YW50aWF0ZVBpY2tlcigpO1xuICAgIHRoaXMuc3Vic2NyaWJlT25WYWx1ZUNoYW5nZSgpO1xuICAgIHRoaXMud3JpdGVRdWV1ZSgpO1xuICAgIHRoaXMucGF0Y2hXaXRoSW5wdXRzKCk7XG4gICAgdGhpcy5waWNrZXJSZWYuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlUG9zaXRpb25TdHJhdGVneSgpOiBOYkFkanVzdGFibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbkJ1aWxkZXJcbiAgICAgIC5jb25uZWN0ZWRUbyh0aGlzLmhvc3RSZWYpXG4gICAgICAucG9zaXRpb24oTmJQb3NpdGlvbi5CT1RUT00pXG4gICAgICAub2Zmc2V0KHRoaXMub3ZlcmxheU9mZnNldClcbiAgICAgIC5hZGp1c3RtZW50KHRoaXMuYWRqdXN0bWVudCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlT25Qb3NpdGlvbkNoYW5nZSgpIHtcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kucG9zaXRpb25DaGFuZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHBvc2l0aW9uOiBOYlBvc2l0aW9uKSA9PiBwYXRjaCh0aGlzLmNvbnRhaW5lciwgeyBwb3NpdGlvbiB9KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVHJpZ2dlclN0cmF0ZWd5KCk6IE5iVHJpZ2dlclN0cmF0ZWd5IHtcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyU3RyYXRlZ3lCdWlsZGVyXG4gICAgICAudHJpZ2dlcihOYlRyaWdnZXIuRk9DVVMpXG4gICAgICAuaG9zdCh0aGlzLmhvc3RSZWYubmF0aXZlRWxlbWVudClcbiAgICAgIC5jb250YWluZXIoKCkgPT4gdGhpcy5jb250YWluZXIpXG4gICAgICAuYnVpbGQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVPblRyaWdnZXJzKCkge1xuICAgIHRoaXMudHJpZ2dlclN0cmF0ZWd5ID0gdGhpcy5jcmVhdGVUcmlnZ2VyU3RyYXRlZ3koKTtcbiAgICB0aGlzLnRyaWdnZXJTdHJhdGVneS5zaG93JC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zaG93KCkpO1xuICAgIHRoaXMudHJpZ2dlclN0cmF0ZWd5LmhpZGUkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmJsdXIkLm5leHQoKTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluc3RhbnRpYXRlUGlja2VyKCkge1xuICAgIHRoaXMucGlja2VyUmVmID0gdGhpcy5jb250YWluZXIuaW5zdGFuY2UuYXR0YWNoKG5ldyBOYkNvbXBvbmVudFBvcnRhbCh0aGlzLnBpY2tlckNsYXNzLCBudWxsLCBudWxsLCB0aGlzLmNmcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZXMgb24gcGlja2VyIHZhbHVlIGNoYW5nZXMgYW5kIGVtaXQgZGF0YSB0aHJvdWdoIHRoaXMub25DaGFuZ2UkIHN1YmplY3QuXG4gICAqICovXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVPblZhbHVlQ2hhbmdlKCkge1xuICAgIHRoaXMucGlja2VyVmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKChkYXRlKSA9PiB7XG4gICAgICB0aGlzLm9uQ2hhbmdlJC5uZXh0KGRhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBhdGNoV2l0aElucHV0cygpIHtcbiAgICB0aGlzLnBpY2tlci5ib3VuZGluZ01vbnRoID0gdGhpcy5ib3VuZGluZ01vbnRoO1xuICAgIHRoaXMucGlja2VyLnN0YXJ0VmlldyA9IHRoaXMuc3RhcnRWaWV3O1xuICAgIHRoaXMucGlja2VyLm1pbiA9IHRoaXMubWluO1xuICAgIHRoaXMucGlja2VyLm1heCA9IHRoaXMubWF4O1xuICAgIHRoaXMucGlja2VyLmZpbHRlciA9IHRoaXMuZmlsdGVyO1xuICAgIHRoaXMucGlja2VyLl9jZWxsQ29tcG9uZW50ID0gdGhpcy5kYXlDZWxsQ29tcG9uZW50O1xuICAgIHRoaXMucGlja2VyLl9tb250aENlbGxDb21wb25lbnQgPSB0aGlzLm1vbnRoQ2VsbENvbXBvbmVudDtcbiAgICB0aGlzLnBpY2tlci5feWVhckNlbGxDb21wb25lbnQgPSB0aGlzLnllYXJDZWxsQ29tcG9uZW50O1xuICAgIHRoaXMucGlja2VyLnNpemUgPSB0aGlzLnNpemU7XG4gICAgdGhpcy5waWNrZXIuc2hvd05hdmlnYXRpb24gPSB0aGlzLnNob3dOYXZpZ2F0aW9uO1xuICAgIHRoaXMucGlja2VyLnZpc2libGVEYXRlID0gdGhpcy52aXNpYmxlRGF0ZTtcbiAgICB0aGlzLnBpY2tlci5zaG93V2Vla051bWJlciA9IHRoaXMuc2hvd1dlZWtOdW1iZXI7XG4gICAgdGhpcy5waWNrZXIud2Vla051bWJlclN5bWJvbCA9IHRoaXMud2Vla051bWJlclN5bWJvbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjaGVja0Zvcm1hdCgpIHtcbiAgICBpZiAodGhpcy5kYXRlU2VydmljZS5nZXRJZCgpID09PSAnbmF0aXZlJyAmJiB0aGlzLmZvcm1hdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNhbid0IGZvcm1hdCBuYXRpdmUgZGF0ZS4gVG8gdXNlIGN1c3RvbSBmb3JtYXR0aW5nIHlvdSBoYXZlIHRvIGluc3RhbGwgQG5lYnVsYXIvbW9tZW50IG9yIFwiICtcbiAgICAgICAgICAnQG5lYnVsYXIvZGF0ZS1mbnMgcGFja2FnZSBhbmQgaW1wb3J0IE5iTW9tZW50RGF0ZU1vZHVsZSBvciBOYkRhdGVGbnNEYXRlTW9kdWxlIGFjY29yZGluZ2x5LicgK1xuICAgICAgICAgICdNb3JlIGluZm9ybWF0aW9uIGF0IFwiRm9ybWF0dGluZyBpc3N1ZVwiICcgK1xuICAgICAgICAgICdodHRwczovL2FrdmVvLmdpdGh1Yi5pby9uZWJ1bGFyL2RvY3MvY29tcG9uZW50cy9kYXRlcGlja2VyL292ZXJ2aWV3I25iZGF0ZXBpY2tlcmNvbXBvbmVudCcsXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRm9ybWF0U2V0ID0gdGhpcy5mb3JtYXQgfHwgKHRoaXMuZGF0ZVNlcnZpY2VPcHRpb25zICYmIHRoaXMuZGF0ZVNlcnZpY2VPcHRpb25zLmZvcm1hdCk7XG4gICAgaWYgKHRoaXMuZGF0ZVNlcnZpY2UuZ2V0SWQoKSA9PT0gJ2RhdGUtZm5zJyAmJiAhaXNGb3JtYXRTZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZm9ybWF0IGlzIHJlcXVpcmVkIHdoZW4gdXNpbmcgTmJEYXRlRm5zRGF0ZU1vZHVsZScpO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBOYkJhc2VQaWNrZXJDb21wb25lbnQ8RCwgVCwgUD4gZXh0ZW5kcyBOYkJhc2VQaWNrZXI8RCwgVCwgUD4gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIERhdGVwaWNrZXIgZGF0ZSBmb3JtYXQuIENhbiBiZSB1c2VkIG9ubHkgd2l0aCBkYXRlIGFkYXB0ZXJzIChtb21lbnQsIGRhdGUtZm5zKSBzaW5jZSBuYXRpdmUgZGF0ZVxuICAgKiBvYmplY3QgZG9lc24ndCBzdXBwb3J0IGZvcm1hdHRpbmcuXG4gICAqICovXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGlmIHdlIHNob3VsZCByZW5kZXIgcHJldmlvdXMgYW5kIG5leHQgbW9udGhzXG4gICAqIGluIHRoZSBjdXJyZW50IG1vbnRoIHZpZXcuXG4gICAqICovXG4gIEBJbnB1dCgpIGJvdW5kaW5nTW9udGg6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHN0YXJ0aW5nIHZpZXcgZm9yIGNhbGVuZGFyLlxuICAgKiAqL1xuICBASW5wdXQoKSBzdGFydFZpZXc6IE5iQ2FsZW5kYXJWaWV3TW9kZSA9IE5iQ2FsZW5kYXJWaWV3TW9kZS5EQVRFO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RhcnRWaWV3OiBOYkNhbGVuZGFyVmlld01vZGVWYWx1ZXM7XG5cbiAgLyoqXG4gICAqIE1pbmltdW0gYXZhaWxhYmxlIGRhdGUgZm9yIHNlbGVjdGlvbi5cbiAgICogKi9cbiAgQElucHV0KCkgbWluOiBEO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIGF2YWlsYWJsZSBkYXRlIGZvciBzZWxlY3Rpb24uXG4gICAqICovXG4gIEBJbnB1dCgpIG1heDogRDtcblxuICAvKipcbiAgICogUHJlZGljYXRlIHRoYXQgZGVjaWRlcyB3aGljaCBjZWxscyB3aWxsIGJlIGRpc2FibGVkLlxuICAgKiAqL1xuICBASW5wdXQoKSBmaWx0ZXI6IChEKSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gZGF5IGNlbGwgY29tcG9uZW50LiBIYXZlIHRvIGltcGxlbWVudCBgTmJDYWxlbmRhckNlbGxgIGludGVyZmFjZS5cbiAgICogKi9cbiAgQElucHV0KCkgZGF5Q2VsbENvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxELCBUPj47XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBtb250aCBjZWxsIGNvbXBvbmVudC4gSGF2ZSB0byBpbXBsZW1lbnQgYE5iQ2FsZW5kYXJDZWxsYCBpbnRlcmZhY2UuXG4gICAqICovXG4gIEBJbnB1dCgpIG1vbnRoQ2VsbENvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxELCBUPj47XG5cbiAgLyoqXG4gICAqIEN1c3RvbSB5ZWFyIGNlbGwgY29tcG9uZW50LiBIYXZlIHRvIGltcGxlbWVudCBgTmJDYWxlbmRhckNlbGxgIGludGVyZmFjZS5cbiAgICogKi9cbiAgQElucHV0KCkgeWVhckNlbGxDb21wb25lbnQ6IFR5cGU8TmJDYWxlbmRhckNlbGw8RCwgVD4+O1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBjYWxlbmRhciBhbmQgZW50aXJlIGNvbXBvbmVudHMuXG4gICAqIENhbiBiZSAnbWVkaXVtJyB3aGljaCBpcyBkZWZhdWx0IG9yICdsYXJnZScuXG4gICAqICovXG4gIEBJbnB1dCgpIHNpemU6IE5iQ2FsZW5kYXJTaXplID0gTmJDYWxlbmRhclNpemUuTUVESVVNO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2l6ZTogTmJDYWxlbmRhclNpemVWYWx1ZXM7XG5cbiAgLyoqXG4gICAqIERlcGVuZGluZyBvbiB0aGlzIGRhdGUgYSBwYXJ0aWN1bGFyIG1vbnRoIGlzIHNlbGVjdGVkIGluIHRoZSBjYWxlbmRhclxuICAgKi9cbiAgQElucHV0KCkgdmlzaWJsZURhdGU6IEQ7XG5cbiAgLyoqXG4gICAqIEhpZGUgcGlja2VyIHdoZW4gYSBkYXRlIG9yIGEgcmFuZ2UgaXMgc2VsZWN0ZWQsIGB0cnVlYCBieSBkZWZhdWx0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KCkgaGlkZU9uU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBzaG91bGQgd2Ugc2hvdyBjYWxlbmRhcnMgbmF2aWdhdGlvbiBvciBub3QuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KCkgc2hvd05hdmlnYXRpb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBTZXRzIHN5bWJvbCB1c2VkIGFzIGEgaGVhZGVyIGZvciB3ZWVrIG51bWJlcnMgY29sdW1uXG4gICAqICovXG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJTeW1ib2w6IHN0cmluZyA9ICcjJztcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBzaG91bGQgd2Ugc2hvdyB3ZWVrIG51bWJlcnMgY29sdW1uLlxuICAgKiBGYWxzZSBieSBkZWZhdWx0LlxuICAgKiAqL1xuICBASW5wdXQoKVxuICBnZXQgc2hvd1dlZWtOdW1iZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dXZWVrTnVtYmVyO1xuICB9XG4gIHNldCBzaG93V2Vla051bWJlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dXZWVrTnVtYmVyID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX3Nob3dXZWVrTnVtYmVyOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaG93V2Vla051bWJlcjogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgcGlja2VyIG92ZXJsYXkgb2Zmc2V0IChpbiBwaXhlbHMpLlxuICAgKiAqL1xuICBASW5wdXQoKSBvdmVybGF5T2Zmc2V0ID0gODtcblxuICBASW5wdXQoKSBhZGp1c3RtZW50OiBOYkFkanVzdG1lbnQgPSBOYkFkanVzdG1lbnQuQ09VTlRFUkNMT0NLV0lTRTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FkanVzdG1lbnQ6IE5iQWRqdXN0bWVudFZhbHVlcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KE5CX0RPQ1VNRU5UKSBkb2N1bWVudCxcbiAgICBwb3NpdGlvbkJ1aWxkZXI6IE5iUG9zaXRpb25CdWlsZGVyU2VydmljZSxcbiAgICB0cmlnZ2VyU3RyYXRlZ3lCdWlsZGVyOiBOYlRyaWdnZXJTdHJhdGVneUJ1aWxkZXJTZXJ2aWNlLFxuICAgIG92ZXJsYXk6IE5iT3ZlcmxheVNlcnZpY2UsXG4gICAgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgZGF0ZVNlcnZpY2U6IE5iRGF0ZVNlcnZpY2U8RD4sXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOQl9EQVRFX1NFUlZJQ0VfT1BUSU9OUykgZGF0ZVNlcnZpY2VPcHRpb25zLFxuICApIHtcbiAgICBzdXBlcihvdmVybGF5LCBwb3NpdGlvbkJ1aWxkZXIsIHRyaWdnZXJTdHJhdGVneUJ1aWxkZXIsIGNmciwgZGF0ZVNlcnZpY2UsIGRhdGVTZXJ2aWNlT3B0aW9ucyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoZWNrRm9ybWF0KCk7XG4gICAgdGhpcy5pbml0JC5uZXh0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuZm9ybWF0ICYmICFjaGFuZ2VzLmZvcm1hdC5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tGb3JtYXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5oaWRlKCk7XG4gICAgdGhpcy5pbml0JC5jb21wbGV0ZSgpO1xuXG4gICAgaWYgKHRoaXMucmVmKSB7XG4gICAgICB0aGlzLnJlZi5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHJpZ2dlclN0cmF0ZWd5KSB7XG4gICAgICB0aGlzLnRyaWdnZXJTdHJhdGVneS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHBpY2tlckNsYXNzOiBUeXBlPFA+O1xuXG4gIHByb3RlY3RlZCBnZXQgcGlja2VyVmFsdWVDaGFuZ2UoKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBUIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZTogVCkge31cblxuICBwcm90ZWN0ZWQgd3JpdGVRdWV1ZSgpIHt9XG59XG5cbi8qKlxuICogVGhlIERhdGVQaWNrZXIgY29tcG9uZW50cyBpdHNlbGYuXG4gKiBQcm92aWRlcyBhIHByb3h5IHRvIGBOYkNhbGVuZGFyYCBvcHRpb25zIGFzIHdlbGwgYXMgY3VzdG9tIHBpY2tlciBvcHRpb25zLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBOYkRhdGVwaWNrZXJDb21wb25lbnQ8RD4gZXh0ZW5kcyBOYkJhc2VQaWNrZXJDb21wb25lbnQ8RCwgRCwgTmJDYWxlbmRhckNvbXBvbmVudDxEPj4ge1xuICBwcm90ZWN0ZWQgcGlja2VyQ2xhc3M6IFR5cGU8TmJDYWxlbmRhckNvbXBvbmVudDxEPj4gPSBOYkNhbGVuZGFyQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBEYXRlIHdoaWNoIHdpbGwgYmUgcmVuZGVyZWQgYXMgc2VsZWN0ZWQuXG4gICAqICovXG4gIEBJbnB1dCgpIHNldCBkYXRlKGRhdGU6IEQpIHtcbiAgICB0aGlzLnZhbHVlID0gZGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBkYXRlIHdoZW4gc2VsZWN0ZWQuXG4gICAqICovXG4gIEBPdXRwdXQoKSBnZXQgZGF0ZUNoYW5nZSgpOiBFdmVudEVtaXR0ZXI8RD4ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlQ2hhbmdlIGFzIEV2ZW50RW1pdHRlcjxEPjtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBEIHtcbiAgICByZXR1cm4gdGhpcy5waWNrZXIgPyB0aGlzLnBpY2tlci5kYXRlIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgc2V0IHZhbHVlKGRhdGU6IEQpIHtcbiAgICBpZiAoIXRoaXMucGlja2VyKSB7XG4gICAgICB0aGlzLnF1ZXVlID0gZGF0ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZSkge1xuICAgICAgdGhpcy52aXNpYmxlRGF0ZSA9IGRhdGU7XG4gICAgICB0aGlzLnBpY2tlci52aXNpYmxlRGF0ZSA9IGRhdGU7XG4gICAgICB0aGlzLnBpY2tlci5kYXRlID0gZGF0ZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHBpY2tlclZhbHVlQ2hhbmdlKCk6IE9ic2VydmFibGU8RD4ge1xuICAgIHJldHVybiB0aGlzLnBpY2tlci5kYXRlQ2hhbmdlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdyaXRlUXVldWUoKSB7XG4gICAgaWYgKHRoaXMucXVldWUpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLnF1ZXVlO1xuICAgICAgdGhpcy5xdWV1ZSA9IG51bGw7XG4gICAgICB0aGlzLnZhbHVlID0gZGF0ZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgUmFuZ2VEYXRlUGlja2VyIGNvbXBvbmVudHMgaXRzZWxmLlxuICogUHJvdmlkZXMgYSBwcm94eSB0byBgTmJDYWxlbmRhclJhbmdlYCBvcHRpb25zIGFzIHdlbGwgYXMgY3VzdG9tIHBpY2tlciBvcHRpb25zLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1yYW5nZXBpY2tlcicsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgTmJSYW5nZXBpY2tlckNvbXBvbmVudDxEPiBleHRlbmRzIE5iQmFzZVBpY2tlckNvbXBvbmVudDxcbiAgRCxcbiAgTmJDYWxlbmRhclJhbmdlPEQ+LFxuICBOYkNhbGVuZGFyUmFuZ2VDb21wb25lbnQ8RD5cbj4ge1xuICBwcm90ZWN0ZWQgcGlja2VyQ2xhc3M6IFR5cGU8TmJDYWxlbmRhclJhbmdlQ29tcG9uZW50PEQ+PiA9IE5iQ2FsZW5kYXJSYW5nZUNvbXBvbmVudDtcblxuICAvKipcbiAgICogUmFuZ2Ugd2hpY2ggd2lsbCBiZSByZW5kZXJlZCBhcyBzZWxlY3RlZC5cbiAgICogKi9cbiAgQElucHV0KCkgc2V0IHJhbmdlKHJhbmdlOiBOYkNhbGVuZGFyUmFuZ2U8RD4pIHtcbiAgICB0aGlzLnZhbHVlID0gcmFuZ2U7XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgcmFuZ2Ugd2hlbiBzdGFydCBzZWxlY3RlZCBhbmQgZW1pdHMgYWdhaW4gd2hlbiBlbmQgc2VsZWN0ZWQuXG4gICAqICovXG4gIEBPdXRwdXQoKSBnZXQgcmFuZ2VDaGFuZ2UoKTogRXZlbnRFbWl0dGVyPE5iQ2FsZW5kYXJSYW5nZTxEPj4ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlQ2hhbmdlIGFzIEV2ZW50RW1pdHRlcjxOYkNhbGVuZGFyUmFuZ2U8RD4+O1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IE5iQ2FsZW5kYXJSYW5nZTxEPiB7XG4gICAgcmV0dXJuIHRoaXMucGlja2VyID8gdGhpcy5waWNrZXIucmFuZ2UgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBzZXQgdmFsdWUocmFuZ2U6IE5iQ2FsZW5kYXJSYW5nZTxEPikge1xuICAgIGlmICghdGhpcy5waWNrZXIpIHtcbiAgICAgIHRoaXMucXVldWUgPSByYW5nZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmFuZ2UpIHtcbiAgICAgIGNvbnN0IHZpc2libGVEYXRlID0gcmFuZ2UgJiYgcmFuZ2Uuc3RhcnQ7XG4gICAgICB0aGlzLnZpc2libGVEYXRlID0gdmlzaWJsZURhdGU7XG4gICAgICB0aGlzLnBpY2tlci52aXNpYmxlRGF0ZSA9IHZpc2libGVEYXRlO1xuICAgICAgdGhpcy5waWNrZXIucmFuZ2UgPSByYW5nZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHBpY2tlclZhbHVlQ2hhbmdlKCk6IE9ic2VydmFibGU8TmJDYWxlbmRhclJhbmdlPEQ+PiB7XG4gICAgcmV0dXJuIHRoaXMucGlja2VyLnJhbmdlQ2hhbmdlO1xuICB9XG5cbiAgc2hvdWxkSGlkZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gc3VwZXIuc2hvdWxkSGlkZSgpICYmICEhKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5zdGFydCAmJiB0aGlzLnZhbHVlLmVuZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgd3JpdGVRdWV1ZSgpIHtcbiAgICBpZiAodGhpcy5xdWV1ZSkge1xuICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLnF1ZXVlO1xuICAgICAgdGhpcy5xdWV1ZSA9IG51bGw7XG4gICAgICB0aGlzLnZhbHVlID0gcmFuZ2U7XG4gICAgfVxuICB9XG59XG4iXX0=