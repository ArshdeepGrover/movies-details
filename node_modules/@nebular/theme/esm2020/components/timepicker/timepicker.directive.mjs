import { Attribute, Directive, forwardRef, Inject, Input, isDevMode, } from '@angular/core';
import { filter, map, takeUntil } from 'rxjs/operators';
import { fromEvent, merge, Subject } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NbAdjustment, NbPosition, } from '../cdk/overlay/overlay-position';
import { NbTrigger } from '../cdk/overlay/overlay-trigger';
import { NB_DOCUMENT } from '../../theme.options';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/overlay/overlay-position";
import * as i2 from "../cdk/overlay/overlay-trigger";
import * as i3 from "../cdk/overlay/overlay-service";
import * as i4 from "../calendar-kit/services/calendar-time-model.service";
import * as i5 from "../calendar-kit/services/date.service";
/**
 * The `NbTimePickerDirective` is form control that gives you ability to select a time. The timepicker
 * is shown when input receives a `focus` event.
 * ```html
 * <input [nbTimepicker]="timepicker">
 * <nb-timepicker #timepicker></nb-timepicker>
 * ```
 *
 * @stacked-example(Showcase, timepicker/timepicker-showcase.component)
 *
 * ### Installation
 *
 * Import `NbTimepickerModule.forRoot()` to your root module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTimepickerModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * And `NbTimepickerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTimepickerModule,
 *   ],
 * })
 * export class PageModule { }
 *
 * ```
 * <div id="native-parse-issue" class="note note-warning">
 * <div class="note-title">Note</div>
 * <div class="note-body">
 * Timepicker uses native Date object by default, which doesn't support parsing by custom format.
 * According to the ECMAScript specification, the only supported format is a format described by ISO 8061 standard.
 * This standard requires date part to be included in the date string,
 * meaning you have to type a date+time in the input.
 * We highly recommend you to use NbDateFnsDateModule or NbMomentDateModule to be able to support time only strings in
 * the timepicker inputs. These modules use date-fns and moment date libraries, which provide capabilities
 * to parse time only strings.
 * See "Formatting Issue" at
 * <a href="https://akveo.github.io/nebular/docs/components/datepicker/overview#formatting-issue">Date picker docs</a>
 * for installation instructions.
 * </div>
 * </div>
 * <hr>
 *
 * ### Usage
 *
 * To show seconds column along with hours and minutes use `withSeconds` input
 *
 * ```html
 * <input [nbTimepicker]="timepicker">
 * <nb-timepicker #timepicker withSeconds></nb-timepicker>
 * ```
 * @stacked-example(Time picker with seconds, timepicker/timepicker-with-seconds.component)
 *
 * To force timepicker work in 12 hours format, use `twelveHoursFormat` input.
 * By default, timepicker choose 12 or 24 formats based on application locale standards
 *
 * ```html
 * <input [nbTimepicker]="timepicker" twelveHoursFormat>
 * <nb-timepicker #timepicker></nb-timepicker>
 * ```
 *
 * @stacked-example(Twelve hours format showcase, timepicker/timepicker-twelve-hours-format.component)
 *
 * A single column picker with options value as time and minute, so users won’t be able to pick
 * hours and minutes individually.
 * You can control options minutes offset via `step` input, e.g.: 11:00, 11:20, 11:40...'
 *
 * @stacked-example(Single column, timepicker/timepicker-single-column.component)
 *
 * Timepicker support forms and reactive forms API so you can provide value using `formControl` and `ngModel` directives
 * @stacked-example(Form control, timepicker/timepicker-form-control.component)
 *
 * <input [nbTimepicker]="timepicker" twelveHoursFormat>
 * <nb-timepicker #timepicke [formControl]="formControl"></nb-timepicker>
 *
 * @stacked-example(NgModel, timepicker/timepicker-ng-model.component)
 *
 * <input [nbTimepicker]="timepicker" twelveHoursFormat>
 * <nb-timepicker #timepicke [ngModel]="date"></nb-timepicker>
 *
 * You can provide localized versions of the timepicker text via the `localization` property of the config
 * object passed to the `forRoot` or `forChild` methods of the `NbTimepickerModule`:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTimepickerModule.forRoot({
 *       localization: {
 *         hoursText: 'Hr',
 *         minutesText: 'Min',
 *         secondsText: 'Sec',
 *         ampmText: 'Am/Pm',
 *       }
 *     }),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * @styles
 *
 * timepicker-cell-text-color:
 * timepicker-cell-hover-background-color:
 * timepicker-cell-hover-text-color:
 * timepicker-cell-focus-background-color:
 * timepicker-cell-focus-text-color:
 * timepicker-cell-active-background-color:
 * timepicker-cell-active-text-color:
 * timepicker-cell-text-font-size:
 * timepicker-cell-text-font-family:
 * timepicker-cell-text-line-height:
 * timepicker-cell-text-font-weight:
 * timepicker-cell-height:
 * timepicker-header-cell-text-color:
 * timepicker-header-cell-text-font-size:
 * timepicker-header-cell-text-font-family:
 * timepicker-header-cell-height:
 * timepicker-header-cell-text-line-height:
 * timepicker-header-cell-text-font-weight:
 * timepicker-border-color:
 * timepicker-border-style:
 * timepicker-border-width:
 * timepicker-scrollbar-color:
 * timepicker-scrollbar-background-color:
 * timepicker-scrollbar-width:
 * timepicker-single-column-width:
 * timepicker-multiple-column-width:
 * timepicker-title-height:
 * timepicker-title-padding:
 * timepicker-container-width:
 * timepicker-container-height:
 * */
export class NbTimePickerDirective {
    constructor(document, positionBuilder, hostRef, triggerStrategyBuilder, overlay, cd, calendarTimeModelService, dateService, renderer, placeholder) {
        this.document = document;
        this.positionBuilder = positionBuilder;
        this.hostRef = hostRef;
        this.triggerStrategyBuilder = triggerStrategyBuilder;
        this.overlay = overlay;
        this.cd = cd;
        this.calendarTimeModelService = calendarTimeModelService;
        this.dateService = dateService;
        this.renderer = renderer;
        this.placeholder = placeholder;
        /**
         * Time picker overlay offset.
         * */
        this.overlayOffset = 8;
        this.destroy$ = new Subject();
        this.onChange = () => {
        };
        this.onTouched = () => {
        };
    }
    /**
     * Provides timepicker component.
     * */
    get timepicker() {
        return this._timePickerComponent;
    }
    set timepicker(timePicker) {
        this._timePickerComponent = timePicker;
    }
    /**
     * Returns html input element.
     * @docs-private
     * */
    get input() {
        return this.hostRef.nativeElement;
    }
    /**
     * Determines is timepicker overlay opened.
     * @docs-private
     * */
    get isOpen() {
        return this.overlayRef && this.overlayRef.hasAttached();
    }
    /**
     * Determines is timepicker overlay closed.
     * @docs-private
     * */
    get isClosed() {
        return !this.isOpen;
    }
    /**
     * Returns host input value.
     * @docs-private
     * */
    get inputValue() {
        return this.input.value;
    }
    set inputValue(value) {
        this.input.value = value;
    }
    ngAfterViewInit() {
        this.subscribeOnInputChange();
        if (!this.placeholder) {
            this.renderer.setProperty(this.input, 'placeholder', this.timepicker.timeFormat);
        }
        this.triggerStrategy = this.createTriggerStrategy();
        this.subscribeOnTriggers();
        this.subscribeToBlur();
    }
    show() {
        if (this.isClosed) {
            this.attachToOverlay();
        }
    }
    hide() {
        if (this.isOpen) {
            this.overlayRef.detach();
            this.cd.markForCheck();
        }
    }
    /**
     * Attaches picker to the timepicker portal.
     * @docs-private
     * */
    attachToOverlay() {
        if (!this.overlayRef) {
            this.setupTimepicker();
            this.initOverlay();
        }
        this.overlayRef.attach(this.timepicker.portal);
    }
    setupTimepicker() {
        if (this.dateService.getId() === 'native' && isDevMode()) {
            console.warn('Date.parse does not support parsing time with custom format.' +
                ' See details here https://akveo.github.io/nebular/docs/components/datepicker/overview#native-parse-issue');
        }
        this.timepicker.setHost(this.hostRef);
        if (this.inputValue) {
            const val = this.dateService.getId() === 'native' ? this.parseNativeDateString(this.inputValue) : this.inputValue;
            this.timepicker.date = this.dateService.parse(val, this.timepicker.timeFormat);
        }
        else {
            this.timepicker.date = this.calendarTimeModelService.getResetTime();
        }
    }
    initOverlay() {
        this.positionStrategy = this.createPositionStrategy();
        this.subscribeOnApplyClick();
        this.createOverlay();
    }
    subscribeOnApplyClick() {
        this.timepicker.onSelectTime.pipe(takeUntil(this.destroy$)).subscribe((value) => {
            const time = this.dateService.format(value.time, this.timepicker.timeFormat).toUpperCase();
            this.inputValue = time;
            this.timepicker.date = value.time;
            this.onChange(value.time);
            if (value.save) {
                this.lastInputValue = time;
                this.hide();
            }
        });
    }
    createOverlay() {
        const scrollStrategy = this.createScrollStrategy();
        this.overlayRef = this.overlay.create({ positionStrategy: this.positionStrategy, scrollStrategy });
    }
    subscribeOnTriggers() {
        this.triggerStrategy.show$
            .pipe(filter(() => this.isClosed))
            .subscribe(() => this.show());
        this.triggerStrategy.hide$
            .pipe(filter(() => this.isOpen))
            .subscribe(() => {
            this.inputValue = this.lastInputValue || '';
            this.hide();
        });
    }
    createTriggerStrategy() {
        return this.triggerStrategyBuilder
            .trigger(NbTrigger.FOCUS)
            .host(this.hostRef.nativeElement)
            .container(() => this.getContainer())
            .build();
    }
    createPositionStrategy() {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(NbPosition.BOTTOM)
            .offset(this.overlayOffset)
            .adjustment(NbAdjustment.VERTICAL);
    }
    getContainer() {
        return this.overlayRef && this.isOpen && {
            location: {
                nativeElement: this.overlayRef.overlayElement,
            },
        };
    }
    createScrollStrategy() {
        return this.overlay.scrollStrategies.block();
    }
    subscribeOnInputChange() {
        fromEvent(this.input, 'input')
            .pipe(map(() => this.inputValue), takeUntil(this.destroy$))
            .subscribe((value) => this.handleInputChange(value));
    }
    subscribeToBlur() {
        merge(this.timepicker.blur, fromEvent(this.input, 'blur').pipe(filter(() => !this.isOpen && this.document.activeElement !== this.input))).pipe(takeUntil(this.destroy$))
            .subscribe(() => this.onTouched());
    }
    /**
     * Parses input value and write if it isn't null.
     * @docs-private
     * */
    handleInputChange(value) {
        if (this.dateService.getId() === 'native') {
            /**
             * Native date service dont parse only time string value,
             * and we adding year mouth and day to convert string to valid date format
             **/
            value = this.parseNativeDateString(value);
        }
        const isValidDate = this.dateService.isValidDateString(value, this.timepicker.timeFormat);
        if (isValidDate) {
            this.lastInputValue = value;
            const date = this.dateService.parse(value, this.timepicker.timeFormat);
            this.onChange(date);
            this.timepicker.date = date;
        }
    }
    updateValue(value) {
        if (value) {
            this.timepicker.date = value;
            const timeString = this.dateService.format(value, this.timepicker.timeFormat).toUpperCase();
            this.inputValue = timeString;
            this.lastInputValue = timeString;
        }
    }
    writeValue(value) {
        this.updateValue(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    parseNativeDateString(value) {
        const date = this.dateService.today();
        const year = this.dateService.getYear(date);
        const month = this.calendarTimeModelService.paddToTwoSymbols(this.dateService.getMonth(date));
        const day = this.calendarTimeModelService.paddToTwoSymbols(this.dateService.getDate(date));
        return `${year}-${month}-${day} ${value}`;
    }
}
NbTimePickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTimePickerDirective, deps: [{ token: NB_DOCUMENT }, { token: i1.NbPositionBuilderService }, { token: i0.ElementRef }, { token: i2.NbTriggerStrategyBuilderService }, { token: i3.NbOverlayService }, { token: i0.ChangeDetectorRef }, { token: i4.NbCalendarTimeModelService }, { token: i5.NbDateService }, { token: i0.Renderer2 }, { token: 'placeholder', attribute: true }], target: i0.ɵɵFactoryTarget.Directive });
NbTimePickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTimePickerDirective, selector: "input[nbTimepicker]", inputs: { timepicker: ["nbTimepicker", "timepicker"], overlayOffset: "overlayOffset" }, providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NbTimePickerDirective),
            multi: true,
        }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTimePickerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[nbTimepicker]',
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => NbTimePickerDirective),
                            multi: true,
                        }],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }, { type: i1.NbPositionBuilderService }, { type: i0.ElementRef }, { type: i2.NbTriggerStrategyBuilderService }, { type: i3.NbOverlayService }, { type: i0.ChangeDetectorRef }, { type: i4.NbCalendarTimeModelService }, { type: i5.NbDateService }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: ['placeholder']
                }] }]; }, propDecorators: { timepicker: [{
                type: Input,
                args: ['nbTimepicker']
            }], overlayOffset: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdGltZXBpY2tlci90aW1lcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULFNBQVMsRUFFVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RSxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsR0FFWCxNQUFNLGlDQUFpQyxDQUFDO0FBRXpDLE9BQU8sRUFBRSxTQUFTLEVBQXNELE1BQU0sZ0NBQWdDLENBQUM7QUFJL0csT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBRWxEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwSUs7QUFTTCxNQUFNLE9BQU8scUJBQXFCO0lBb0VoQyxZQUEyQyxRQUFRLEVBQzdCLGVBQXlDLEVBQ3pDLE9BQW1CLEVBQ25CLHNCQUF1RCxFQUN2RCxPQUF5QixFQUN6QixFQUFxQixFQUNyQix3QkFBdUQsRUFDdkQsV0FBNkIsRUFDN0IsUUFBbUIsRUFDTyxXQUFtQjtRQVR4QixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBQzdCLG9CQUFlLEdBQWYsZUFBZSxDQUEwQjtRQUN6QyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBaUM7UUFDdkQsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUErQjtRQUN2RCxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNPLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBL0RuRTs7YUFFSztRQUNJLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBZ0JqQixhQUFRLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFDOUMsYUFBUSxHQUF1QixHQUFHLEVBQUU7UUFDOUMsQ0FBQyxDQUFDO1FBQ1EsY0FBUyxHQUFHLEdBQUcsRUFBRTtRQUMzQixDQUFDLENBQUM7SUF5Q0YsQ0FBQztJQTdFRDs7U0FFSztJQUNMLElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxVQUFvQztRQUNqRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDO0lBQ3pDLENBQUM7SUFpQ0Q7OztTQUdLO0lBQ0wsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztTQUdLO0lBQ0wsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7U0FHSztJQUNMLElBQUksUUFBUTtRQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFjRDs7O1NBR0s7SUFDTCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEY7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRDs7O1NBR0s7SUFDSyxlQUFlO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLFFBQVEsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUN4RCxPQUFPLENBQUMsSUFBSSxDQUFDLDhEQUE4RDtnQkFDekUsMEdBQTBHLENBQUMsQ0FBQTtTQUM5RztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbEgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEY7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFFUyxXQUFXO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVTLHFCQUFxQjtRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQStCLEVBQUUsRUFBRTtZQUN4RyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsYUFBYTtRQUNyQixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNuQyxFQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLEVBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFUyxtQkFBbUI7UUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLO2FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2pDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUs7YUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMscUJBQXFCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQjthQUNqQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQzthQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7YUFDaEMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNwQyxLQUFLLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFUyxzQkFBc0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsZUFBZTthQUMxQixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN6QixRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQzthQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUMxQixVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFUyxZQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUF1QjtZQUMxRCxRQUFRLEVBQUU7Z0JBQ1IsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYzthQUM5QztTQUNGLENBQUM7SUFDSixDQUFDO0lBRVMsb0JBQW9CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRVMsc0JBQXNCO1FBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQzthQUM3QixJQUFJLENBQ0gsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDMUIsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFUyxlQUFlO1FBQ3ZCLEtBQUssQ0FDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFDcEIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUNoQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDekUsQ0FDRixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7OztTQUdLO0lBQ0ssaUJBQWlCLENBQUMsS0FBYTtRQUN2QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssUUFBUSxFQUFFO1lBQ3pDOzs7Z0JBR0k7WUFDSixLQUFLLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO1FBRUQsTUFBTSxXQUFXLEdBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRyxJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBRTVCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVTLFdBQVcsQ0FBQyxLQUFRO1FBQzVCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBRTdCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVGLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFRO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQXNCO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFUyxxQkFBcUIsQ0FBQyxLQUFhO1FBQzNDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUYsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFM0YsT0FBTyxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzVDLENBQUM7O2tIQXZSVSxxQkFBcUIsa0JBb0VaLFdBQVcsK1JBU1IsYUFBYTtzR0E3RXpCLHFCQUFxQixzSUFOckIsQ0FBQztZQUNWLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNwRCxLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUM7MkZBRVMscUJBQXFCO2tCQVJqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFNBQVMsRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHNCQUFzQixDQUFDOzRCQUNwRCxLQUFLLEVBQUUsSUFBSTt5QkFDWixDQUFDO2lCQUNIOzswQkFxRWMsTUFBTTsyQkFBQyxXQUFXOzswQkFTbEIsU0FBUzsyQkFBQyxhQUFhOzRDQXhFaEMsVUFBVTtzQkFEYixLQUFLO3VCQUFDLGNBQWM7Z0JBYVosYUFBYTtzQkFBckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIEF0dHJpYnV0ZSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmJUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYk92ZXJsYXlSZWYsIE5iU2Nyb2xsU3RyYXRlZ3kgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9tYXBwaW5nJztcbmltcG9ydCB7XG4gIE5iQWRqdXN0YWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG4gIE5iQWRqdXN0bWVudCxcbiAgTmJQb3NpdGlvbixcbiAgTmJQb3NpdGlvbkJ1aWxkZXJTZXJ2aWNlLFxufSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uJztcbmltcG9ydCB7IE5iT3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5LXNlcnZpY2UnO1xuaW1wb3J0IHsgTmJUcmlnZ2VyLCBOYlRyaWdnZXJTdHJhdGVneSwgTmJUcmlnZ2VyU3RyYXRlZ3lCdWlsZGVyU2VydmljZSB9IGZyb20gJy4uL2Nkay9vdmVybGF5L292ZXJsYXktdHJpZ2dlcic7XG5pbXBvcnQgeyBOYlNlbGVjdGVkVGltZVBheWxvYWQgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IE5iRGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9jYWxlbmRhci1raXQvc2VydmljZXMvZGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5iQ2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vY2FsZW5kYXIta2l0L3NlcnZpY2VzL2NhbGVuZGFyLXRpbWUtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBOQl9ET0NVTUVOVCB9IGZyb20gJy4uLy4uL3RoZW1lLm9wdGlvbnMnO1xuXG4vKipcbiAqIFRoZSBgTmJUaW1lUGlja2VyRGlyZWN0aXZlYCBpcyBmb3JtIGNvbnRyb2wgdGhhdCBnaXZlcyB5b3UgYWJpbGl0eSB0byBzZWxlY3QgYSB0aW1lLiBUaGUgdGltZXBpY2tlclxuICogaXMgc2hvd24gd2hlbiBpbnB1dCByZWNlaXZlcyBhIGBmb2N1c2AgZXZlbnQuXG4gKiBgYGBodG1sXG4gKiA8aW5wdXQgW25iVGltZXBpY2tlcl09XCJ0aW1lcGlja2VyXCI+XG4gKiA8bmItdGltZXBpY2tlciAjdGltZXBpY2tlcj48L25iLXRpbWVwaWNrZXI+XG4gKiBgYGBcbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKFNob3djYXNlLCB0aW1lcGlja2VyL3RpbWVwaWNrZXItc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqICMjIyBJbnN0YWxsYXRpb25cbiAqXG4gKiBJbXBvcnQgYE5iVGltZXBpY2tlck1vZHVsZS5mb3JSb290KClgIHRvIHlvdXIgcm9vdCBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iVGltZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gKiAgIF0sXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiAqIGBgYFxuICogQW5kIGBOYlRpbWVwaWNrZXJNb2R1bGVgIHRvIHlvdXIgZmVhdHVyZSBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iVGltZXBpY2tlck1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqXG4gKiBgYGBcbiAqIDxkaXYgaWQ9XCJuYXRpdmUtcGFyc2UtaXNzdWVcIiBjbGFzcz1cIm5vdGUgbm90ZS13YXJuaW5nXCI+XG4gKiA8ZGl2IGNsYXNzPVwibm90ZS10aXRsZVwiPk5vdGU8L2Rpdj5cbiAqIDxkaXYgY2xhc3M9XCJub3RlLWJvZHlcIj5cbiAqIFRpbWVwaWNrZXIgdXNlcyBuYXRpdmUgRGF0ZSBvYmplY3QgYnkgZGVmYXVsdCwgd2hpY2ggZG9lc24ndCBzdXBwb3J0IHBhcnNpbmcgYnkgY3VzdG9tIGZvcm1hdC5cbiAqIEFjY29yZGluZyB0byB0aGUgRUNNQVNjcmlwdCBzcGVjaWZpY2F0aW9uLCB0aGUgb25seSBzdXBwb3J0ZWQgZm9ybWF0IGlzIGEgZm9ybWF0IGRlc2NyaWJlZCBieSBJU08gODA2MSBzdGFuZGFyZC5cbiAqIFRoaXMgc3RhbmRhcmQgcmVxdWlyZXMgZGF0ZSBwYXJ0IHRvIGJlIGluY2x1ZGVkIGluIHRoZSBkYXRlIHN0cmluZyxcbiAqIG1lYW5pbmcgeW91IGhhdmUgdG8gdHlwZSBhIGRhdGUrdGltZSBpbiB0aGUgaW5wdXQuXG4gKiBXZSBoaWdobHkgcmVjb21tZW5kIHlvdSB0byB1c2UgTmJEYXRlRm5zRGF0ZU1vZHVsZSBvciBOYk1vbWVudERhdGVNb2R1bGUgdG8gYmUgYWJsZSB0byBzdXBwb3J0IHRpbWUgb25seSBzdHJpbmdzIGluXG4gKiB0aGUgdGltZXBpY2tlciBpbnB1dHMuIFRoZXNlIG1vZHVsZXMgdXNlIGRhdGUtZm5zIGFuZCBtb21lbnQgZGF0ZSBsaWJyYXJpZXMsIHdoaWNoIHByb3ZpZGUgY2FwYWJpbGl0aWVzXG4gKiB0byBwYXJzZSB0aW1lIG9ubHkgc3RyaW5ncy5cbiAqIFNlZSBcIkZvcm1hdHRpbmcgSXNzdWVcIiBhdFxuICogPGEgaHJlZj1cImh0dHBzOi8vYWt2ZW8uZ2l0aHViLmlvL25lYnVsYXIvZG9jcy9jb21wb25lbnRzL2RhdGVwaWNrZXIvb3ZlcnZpZXcjZm9ybWF0dGluZy1pc3N1ZVwiPkRhdGUgcGlja2VyIGRvY3M8L2E+XG4gKiBmb3IgaW5zdGFsbGF0aW9uIGluc3RydWN0aW9ucy5cbiAqIDwvZGl2PlxuICogPC9kaXY+XG4gKiA8aHI+XG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogVG8gc2hvdyBzZWNvbmRzIGNvbHVtbiBhbG9uZyB3aXRoIGhvdXJzIGFuZCBtaW51dGVzIHVzZSBgd2l0aFNlY29uZHNgIGlucHV0XG4gKlxuICogYGBgaHRtbFxuICogPGlucHV0IFtuYlRpbWVwaWNrZXJdPVwidGltZXBpY2tlclwiPlxuICogPG5iLXRpbWVwaWNrZXIgI3RpbWVwaWNrZXIgd2l0aFNlY29uZHM+PC9uYi10aW1lcGlja2VyPlxuICogYGBgXG4gKiBAc3RhY2tlZC1leGFtcGxlKFRpbWUgcGlja2VyIHdpdGggc2Vjb25kcywgdGltZXBpY2tlci90aW1lcGlja2VyLXdpdGgtc2Vjb25kcy5jb21wb25lbnQpXG4gKlxuICogVG8gZm9yY2UgdGltZXBpY2tlciB3b3JrIGluIDEyIGhvdXJzIGZvcm1hdCwgdXNlIGB0d2VsdmVIb3Vyc0Zvcm1hdGAgaW5wdXQuXG4gKiBCeSBkZWZhdWx0LCB0aW1lcGlja2VyIGNob29zZSAxMiBvciAyNCBmb3JtYXRzIGJhc2VkIG9uIGFwcGxpY2F0aW9uIGxvY2FsZSBzdGFuZGFyZHNcbiAqXG4gKiBgYGBodG1sXG4gKiA8aW5wdXQgW25iVGltZXBpY2tlcl09XCJ0aW1lcGlja2VyXCIgdHdlbHZlSG91cnNGb3JtYXQ+XG4gKiA8bmItdGltZXBpY2tlciAjdGltZXBpY2tlcj48L25iLXRpbWVwaWNrZXI+XG4gKiBgYGBcbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKFR3ZWx2ZSBob3VycyBmb3JtYXQgc2hvd2Nhc2UsIHRpbWVwaWNrZXIvdGltZXBpY2tlci10d2VsdmUtaG91cnMtZm9ybWF0LmNvbXBvbmVudClcbiAqXG4gKiBBIHNpbmdsZSBjb2x1bW4gcGlja2VyIHdpdGggb3B0aW9ucyB2YWx1ZSBhcyB0aW1lIGFuZCBtaW51dGUsIHNvIHVzZXJzIHdvbuKAmXQgYmUgYWJsZSB0byBwaWNrXG4gKiBob3VycyBhbmQgbWludXRlcyBpbmRpdmlkdWFsbHkuXG4gKiBZb3UgY2FuIGNvbnRyb2wgb3B0aW9ucyBtaW51dGVzIG9mZnNldCB2aWEgYHN0ZXBgIGlucHV0LCBlLmcuOiAxMTowMCwgMTE6MjAsIDExOjQwLi4uJ1xuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU2luZ2xlIGNvbHVtbiwgdGltZXBpY2tlci90aW1lcGlja2VyLXNpbmdsZS1jb2x1bW4uY29tcG9uZW50KVxuICpcbiAqIFRpbWVwaWNrZXIgc3VwcG9ydCBmb3JtcyBhbmQgcmVhY3RpdmUgZm9ybXMgQVBJIHNvIHlvdSBjYW4gcHJvdmlkZSB2YWx1ZSB1c2luZyBgZm9ybUNvbnRyb2xgIGFuZCBgbmdNb2RlbGAgZGlyZWN0aXZlc1xuICogQHN0YWNrZWQtZXhhbXBsZShGb3JtIGNvbnRyb2wsIHRpbWVwaWNrZXIvdGltZXBpY2tlci1mb3JtLWNvbnRyb2wuY29tcG9uZW50KVxuICpcbiAqIDxpbnB1dCBbbmJUaW1lcGlja2VyXT1cInRpbWVwaWNrZXJcIiB0d2VsdmVIb3Vyc0Zvcm1hdD5cbiAqIDxuYi10aW1lcGlja2VyICN0aW1lcGlja2UgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCI+PC9uYi10aW1lcGlja2VyPlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoTmdNb2RlbCwgdGltZXBpY2tlci90aW1lcGlja2VyLW5nLW1vZGVsLmNvbXBvbmVudClcbiAqXG4gKiA8aW5wdXQgW25iVGltZXBpY2tlcl09XCJ0aW1lcGlja2VyXCIgdHdlbHZlSG91cnNGb3JtYXQ+XG4gKiA8bmItdGltZXBpY2tlciAjdGltZXBpY2tlIFtuZ01vZGVsXT1cImRhdGVcIj48L25iLXRpbWVwaWNrZXI+XG4gKlxuICogWW91IGNhbiBwcm92aWRlIGxvY2FsaXplZCB2ZXJzaW9ucyBvZiB0aGUgdGltZXBpY2tlciB0ZXh0IHZpYSB0aGUgYGxvY2FsaXphdGlvbmAgcHJvcGVydHkgb2YgdGhlIGNvbmZpZ1xuICogb2JqZWN0IHBhc3NlZCB0byB0aGUgYGZvclJvb3RgIG9yIGBmb3JDaGlsZGAgbWV0aG9kcyBvZiB0aGUgYE5iVGltZXBpY2tlck1vZHVsZWA6XG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iVGltZXBpY2tlck1vZHVsZS5mb3JSb290KHtcbiAqICAgICAgIGxvY2FsaXphdGlvbjoge1xuICogICAgICAgICBob3Vyc1RleHQ6ICdIcicsXG4gKiAgICAgICAgIG1pbnV0ZXNUZXh0OiAnTWluJyxcbiAqICAgICAgICAgc2Vjb25kc1RleHQ6ICdTZWMnLFxuICogICAgICAgICBhbXBtVGV4dDogJ0FtL1BtJyxcbiAqICAgICAgIH1cbiAqICAgICB9KSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuICogYGBgXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIHRpbWVwaWNrZXItY2VsbC10ZXh0LWNvbG9yOlxuICogdGltZXBpY2tlci1jZWxsLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0aW1lcGlja2VyLWNlbGwtaG92ZXItdGV4dC1jb2xvcjpcbiAqIHRpbWVwaWNrZXItY2VsbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGltZXBpY2tlci1jZWxsLWZvY3VzLXRleHQtY29sb3I6XG4gKiB0aW1lcGlja2VyLWNlbGwtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiB0aW1lcGlja2VyLWNlbGwtYWN0aXZlLXRleHQtY29sb3I6XG4gKiB0aW1lcGlja2VyLWNlbGwtdGV4dC1mb250LXNpemU6XG4gKiB0aW1lcGlja2VyLWNlbGwtdGV4dC1mb250LWZhbWlseTpcbiAqIHRpbWVwaWNrZXItY2VsbC10ZXh0LWxpbmUtaGVpZ2h0OlxuICogdGltZXBpY2tlci1jZWxsLXRleHQtZm9udC13ZWlnaHQ6XG4gKiB0aW1lcGlja2VyLWNlbGwtaGVpZ2h0OlxuICogdGltZXBpY2tlci1oZWFkZXItY2VsbC10ZXh0LWNvbG9yOlxuICogdGltZXBpY2tlci1oZWFkZXItY2VsbC10ZXh0LWZvbnQtc2l6ZTpcbiAqIHRpbWVwaWNrZXItaGVhZGVyLWNlbGwtdGV4dC1mb250LWZhbWlseTpcbiAqIHRpbWVwaWNrZXItaGVhZGVyLWNlbGwtaGVpZ2h0OlxuICogdGltZXBpY2tlci1oZWFkZXItY2VsbC10ZXh0LWxpbmUtaGVpZ2h0OlxuICogdGltZXBpY2tlci1oZWFkZXItY2VsbC10ZXh0LWZvbnQtd2VpZ2h0OlxuICogdGltZXBpY2tlci1ib3JkZXItY29sb3I6XG4gKiB0aW1lcGlja2VyLWJvcmRlci1zdHlsZTpcbiAqIHRpbWVwaWNrZXItYm9yZGVyLXdpZHRoOlxuICogdGltZXBpY2tlci1zY3JvbGxiYXItY29sb3I6XG4gKiB0aW1lcGlja2VyLXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGltZXBpY2tlci1zY3JvbGxiYXItd2lkdGg6XG4gKiB0aW1lcGlja2VyLXNpbmdsZS1jb2x1bW4td2lkdGg6XG4gKiB0aW1lcGlja2VyLW11bHRpcGxlLWNvbHVtbi13aWR0aDpcbiAqIHRpbWVwaWNrZXItdGl0bGUtaGVpZ2h0OlxuICogdGltZXBpY2tlci10aXRsZS1wYWRkaW5nOlxuICogdGltZXBpY2tlci1jb250YWluZXItd2lkdGg6XG4gKiB0aW1lcGlja2VyLWNvbnRhaW5lci1oZWlnaHQ6XG4gKiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbmJUaW1lcGlja2VyXScsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOYlRpbWVQaWNrZXJEaXJlY3RpdmUpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTmJUaW1lUGlja2VyRGlyZWN0aXZlPEQ+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvKipcbiAgICogUHJvdmlkZXMgdGltZXBpY2tlciBjb21wb25lbnQuXG4gICAqICovXG4gIEBJbnB1dCgnbmJUaW1lcGlja2VyJylcbiAgZ2V0IHRpbWVwaWNrZXIoKTogTmJUaW1lUGlja2VyQ29tcG9uZW50PEQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdGltZVBpY2tlckNvbXBvbmVudDtcbiAgfVxuXG4gIHNldCB0aW1lcGlja2VyKHRpbWVQaWNrZXI6IE5iVGltZVBpY2tlckNvbXBvbmVudDxEPikge1xuICAgIHRoaXMuX3RpbWVQaWNrZXJDb21wb25lbnQgPSB0aW1lUGlja2VyO1xuICB9XG4gIHByb3RlY3RlZCBfdGltZVBpY2tlckNvbXBvbmVudDogTmJUaW1lUGlja2VyQ29tcG9uZW50PEQ+O1xuXG4gIC8qKlxuICAgKiBUaW1lIHBpY2tlciBvdmVybGF5IG9mZnNldC5cbiAgICogKi9cbiAgQElucHV0KCkgb3ZlcmxheU9mZnNldCA9IDg7XG5cblxuICAvKipcbiAgICogU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGxhdGVzdCBzZWxlY3RlZCBkYXRlLlxuICAgKiBVcGRhdGVkIHdoZW4gdmFsdWUgaXMgdXBkYXRlZCBwcm9ncmFtbWF0aWNhbGx5ICh3cml0ZVZhbHVlKSwgdmlhIHRpbWVwaWNrZXIgKHN1YnNjcmliZU9uQXBwbHlDbGljaylcbiAgICogb3IgdmlhIGlucHV0IGZpZWxkIChoYW5kbGVJbnB1dENoYW5nZSlcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcHJvdGVjdGVkIGxhc3RJbnB1dFZhbHVlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQb3NpdGlvbmluZyBzdHJhdGVneSB1c2VkIGJ5IG92ZXJsYXkuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICogKi9cbiAgcHJvdGVjdGVkIHBvc2l0aW9uU3RyYXRlZ3k6IE5iQWRqdXN0YWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XG4gIHByb3RlY3RlZCBvdmVybGF5UmVmOiBOYk92ZXJsYXlSZWY7XG4gIHByb3RlY3RlZCBkZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByb3RlY3RlZCBvbkNoYW5nZTogKHZhbHVlOiBEKSA9PiB2b2lkID0gKCkgPT4ge1xuICB9O1xuICBwcm90ZWN0ZWQgb25Ub3VjaGVkID0gKCkgPT4ge1xuICB9O1xuICAvKipcbiAgICogVHJpZ2dlciBzdHJhdGVneSB1c2VkIGJ5IG92ZXJsYXkuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICogKi9cbiAgcHJvdGVjdGVkIHRyaWdnZXJTdHJhdGVneTogTmJUcmlnZ2VyU3RyYXRlZ3k7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaHRtbCBpbnB1dCBlbGVtZW50LlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqICovXG4gIGdldCBpbnB1dCgpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5ob3N0UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpcyB0aW1lcGlja2VyIG92ZXJsYXkgb3BlbmVkLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqICovXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlzIHRpbWVwaWNrZXIgb3ZlcmxheSBjbG9zZWQuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICogKi9cbiAgZ2V0IGlzQ2xvc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc09wZW47XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5CX0RPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBwb3NpdGlvbkJ1aWxkZXI6IE5iUG9zaXRpb25CdWlsZGVyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIGhvc3RSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCB0cmlnZ2VyU3RyYXRlZ3lCdWlsZGVyOiBOYlRyaWdnZXJTdHJhdGVneUJ1aWxkZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgb3ZlcmxheTogTmJPdmVybGF5U2VydmljZSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIGNhbGVuZGFyVGltZU1vZGVsU2VydmljZTogTmJDYWxlbmRhclRpbWVNb2RlbFNlcnZpY2U8RD4sXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBkYXRlU2VydmljZTogTmJEYXRlU2VydmljZTxEPixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIEBBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykgcHJvdGVjdGVkIHBsYWNlaG9sZGVyOiBzdHJpbmcpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGhvc3QgaW5wdXQgdmFsdWUuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICogKi9cbiAgZ2V0IGlucHV0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgfVxuXG4gIHNldCBpbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVPbklucHV0Q2hhbmdlKCk7XG5cbiAgICBpZiAoIXRoaXMucGxhY2Vob2xkZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5pbnB1dCwgJ3BsYWNlaG9sZGVyJywgdGhpcy50aW1lcGlja2VyLnRpbWVGb3JtYXQpO1xuICAgIH1cbiAgICB0aGlzLnRyaWdnZXJTdHJhdGVneSA9IHRoaXMuY3JlYXRlVHJpZ2dlclN0cmF0ZWd5KCk7XG4gICAgdGhpcy5zdWJzY3JpYmVPblRyaWdnZXJzKCk7XG4gICAgdGhpcy5zdWJzY3JpYmVUb0JsdXIoKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuaXNDbG9zZWQpIHtcbiAgICAgIHRoaXMuYXR0YWNoVG9PdmVybGF5KCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHBpY2tlciB0byB0aGUgdGltZXBpY2tlciBwb3J0YWwuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICogKi9cbiAgcHJvdGVjdGVkIGF0dGFjaFRvT3ZlcmxheSgpIHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5zZXR1cFRpbWVwaWNrZXIoKTtcbiAgICAgIHRoaXMuaW5pdE92ZXJsYXkoKTtcbiAgICB9XG4gICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnRpbWVwaWNrZXIucG9ydGFsKTtcbiAgfVxuXG4gIHNldHVwVGltZXBpY2tlcigpIHtcbiAgICBpZiAodGhpcy5kYXRlU2VydmljZS5nZXRJZCgpID09PSAnbmF0aXZlJyAmJiBpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKCdEYXRlLnBhcnNlIGRvZXMgbm90IHN1cHBvcnQgcGFyc2luZyB0aW1lIHdpdGggY3VzdG9tIGZvcm1hdC4nICtcbiAgICAgICAgJyBTZWUgZGV0YWlscyBoZXJlIGh0dHBzOi8vYWt2ZW8uZ2l0aHViLmlvL25lYnVsYXIvZG9jcy9jb21wb25lbnRzL2RhdGVwaWNrZXIvb3ZlcnZpZXcjbmF0aXZlLXBhcnNlLWlzc3VlJylcbiAgICB9XG4gICAgdGhpcy50aW1lcGlja2VyLnNldEhvc3QodGhpcy5ob3N0UmVmKTtcbiAgICBpZiAodGhpcy5pbnB1dFZhbHVlKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLmRhdGVTZXJ2aWNlLmdldElkKCkgPT09ICduYXRpdmUnID8gdGhpcy5wYXJzZU5hdGl2ZURhdGVTdHJpbmcodGhpcy5pbnB1dFZhbHVlKSA6IHRoaXMuaW5wdXRWYWx1ZTtcbiAgICAgIHRoaXMudGltZXBpY2tlci5kYXRlID0gdGhpcy5kYXRlU2VydmljZS5wYXJzZSh2YWwsIHRoaXMudGltZXBpY2tlci50aW1lRm9ybWF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aW1lcGlja2VyLmRhdGUgPSB0aGlzLmNhbGVuZGFyVGltZU1vZGVsU2VydmljZS5nZXRSZXNldFRpbWUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdE92ZXJsYXkoKSB7XG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5jcmVhdGVQb3NpdGlvblN0cmF0ZWd5KCk7XG4gICAgdGhpcy5zdWJzY3JpYmVPbkFwcGx5Q2xpY2soKTtcbiAgICB0aGlzLmNyZWF0ZU92ZXJsYXkoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVPbkFwcGx5Q2xpY2soKSB7XG4gICAgdGhpcy50aW1lcGlja2VyLm9uU2VsZWN0VGltZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCh2YWx1ZTogTmJTZWxlY3RlZFRpbWVQYXlsb2FkPEQ+KSA9PiB7XG4gICAgICBjb25zdCB0aW1lID0gdGhpcy5kYXRlU2VydmljZS5mb3JtYXQodmFsdWUudGltZSwgdGhpcy50aW1lcGlja2VyLnRpbWVGb3JtYXQpLnRvVXBwZXJDYXNlKCk7XG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aW1lO1xuICAgICAgdGhpcy50aW1lcGlja2VyLmRhdGUgPSB2YWx1ZS50aW1lO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZS50aW1lKTtcbiAgICAgIGlmICh2YWx1ZS5zYXZlKSB7XG4gICAgICAgIHRoaXMubGFzdElucHV0VmFsdWUgPSB0aW1lO1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVPdmVybGF5KCkge1xuICAgIGNvbnN0IHNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5jcmVhdGVTY3JvbGxTdHJhdGVneSgpO1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoXG4gICAgICB7cG9zaXRpb25TdHJhdGVneTogdGhpcy5wb3NpdGlvblN0cmF0ZWd5LCBzY3JvbGxTdHJhdGVneX0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZU9uVHJpZ2dlcnMoKSB7XG4gICAgdGhpcy50cmlnZ2VyU3RyYXRlZ3kuc2hvdyRcbiAgICAucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy5pc0Nsb3NlZCkpXG4gICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNob3coKSk7XG5cbiAgICB0aGlzLnRyaWdnZXJTdHJhdGVneS5oaWRlJFxuICAgIC5waXBlKGZpbHRlcigoKSA9PiB0aGlzLmlzT3BlbikpXG4gICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmxhc3RJbnB1dFZhbHVlIHx8ICcnO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlVHJpZ2dlclN0cmF0ZWd5KCk6IE5iVHJpZ2dlclN0cmF0ZWd5IHtcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyU3RyYXRlZ3lCdWlsZGVyXG4gICAgLnRyaWdnZXIoTmJUcmlnZ2VyLkZPQ1VTKVxuICAgIC5ob3N0KHRoaXMuaG9zdFJlZi5uYXRpdmVFbGVtZW50KVxuICAgIC5jb250YWluZXIoKCkgPT4gdGhpcy5nZXRDb250YWluZXIoKSlcbiAgICAuYnVpbGQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVQb3NpdGlvblN0cmF0ZWd5KCk6IE5iQWRqdXN0YWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uQnVpbGRlclxuICAgIC5jb25uZWN0ZWRUbyh0aGlzLmhvc3RSZWYpXG4gICAgLnBvc2l0aW9uKE5iUG9zaXRpb24uQk9UVE9NKVxuICAgIC5vZmZzZXQodGhpcy5vdmVybGF5T2Zmc2V0KVxuICAgIC5hZGp1c3RtZW50KE5iQWRqdXN0bWVudC5WRVJUSUNBTCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5pc09wZW4gJiYgPENvbXBvbmVudFJlZjxhbnk+PntcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIG5hdGl2ZUVsZW1lbnQ6IHRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVTY3JvbGxTdHJhdGVneSgpOiBOYlNjcm9sbFN0cmF0ZWd5IHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVPbklucHV0Q2hhbmdlKCkge1xuICAgIGZyb21FdmVudCh0aGlzLmlucHV0LCAnaW5wdXQnKVxuICAgIC5waXBlKFxuICAgICAgbWFwKCgpID0+IHRoaXMuaW5wdXRWYWx1ZSksXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgKVxuICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UodmFsdWUpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVUb0JsdXIoKSB7XG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLnRpbWVwaWNrZXIuYmx1cixcbiAgICAgIGZyb21FdmVudCh0aGlzLmlucHV0LCAnYmx1cicpLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5pc09wZW4gJiYgdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSB0aGlzLmlucHV0KSxcbiAgICAgICksXG4gICAgKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBpbnB1dCB2YWx1ZSBhbmQgd3JpdGUgaWYgaXQgaXNuJ3QgbnVsbC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKiAqL1xuICBwcm90ZWN0ZWQgaGFuZGxlSW5wdXRDaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmRhdGVTZXJ2aWNlLmdldElkKCkgPT09ICduYXRpdmUnKSB7XG4gICAgICAvKipcbiAgICAgICAqIE5hdGl2ZSBkYXRlIHNlcnZpY2UgZG9udCBwYXJzZSBvbmx5IHRpbWUgc3RyaW5nIHZhbHVlLFxuICAgICAgICogYW5kIHdlIGFkZGluZyB5ZWFyIG1vdXRoIGFuZCBkYXkgdG8gY29udmVydCBzdHJpbmcgdG8gdmFsaWQgZGF0ZSBmb3JtYXRcbiAgICAgICAqKi9cbiAgICAgIHZhbHVlID0gdGhpcy5wYXJzZU5hdGl2ZURhdGVTdHJpbmcodmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzVmFsaWREYXRlOiBib29sZWFuID0gdGhpcy5kYXRlU2VydmljZS5pc1ZhbGlkRGF0ZVN0cmluZyh2YWx1ZSwgdGhpcy50aW1lcGlja2VyLnRpbWVGb3JtYXQpO1xuICAgIGlmIChpc1ZhbGlkRGF0ZSkge1xuICAgICAgdGhpcy5sYXN0SW5wdXRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlU2VydmljZS5wYXJzZSh2YWx1ZSwgdGhpcy50aW1lcGlja2VyLnRpbWVGb3JtYXQpO1xuICAgICAgdGhpcy5vbkNoYW5nZShkYXRlKTtcbiAgICAgIHRoaXMudGltZXBpY2tlci5kYXRlID0gZGF0ZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWUodmFsdWU6IEQpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMudGltZXBpY2tlci5kYXRlID0gdmFsdWU7XG5cbiAgICAgIGNvbnN0IHRpbWVTdHJpbmcgPSB0aGlzLmRhdGVTZXJ2aWNlLmZvcm1hdCh2YWx1ZSwgdGhpcy50aW1lcGlja2VyLnRpbWVGb3JtYXQpLnRvVXBwZXJDYXNlKCk7XG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aW1lU3RyaW5nO1xuICAgICAgdGhpcy5sYXN0SW5wdXRWYWx1ZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyc2VOYXRpdmVEYXRlU3RyaW5nKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVTZXJ2aWNlLnRvZGF5KCk7XG4gICAgY29uc3QgeWVhciA9IHRoaXMuZGF0ZVNlcnZpY2UuZ2V0WWVhcihkYXRlKTtcbiAgICBjb25zdCBtb250aCA9IHRoaXMuY2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlLnBhZGRUb1R3b1N5bWJvbHModGhpcy5kYXRlU2VydmljZS5nZXRNb250aChkYXRlKSk7XG4gICAgY29uc3QgZGF5ID0gdGhpcy5jYWxlbmRhclRpbWVNb2RlbFNlcnZpY2UucGFkZFRvVHdvU3ltYm9scyh0aGlzLmRhdGVTZXJ2aWNlLmdldERhdGUoZGF0ZSkpO1xuXG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fSAke3ZhbHVlfWA7XG4gIH1cbn1cbiJdfQ==