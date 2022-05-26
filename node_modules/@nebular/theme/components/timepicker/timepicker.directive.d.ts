import { AfterViewInit, ChangeDetectorRef, ComponentRef, ElementRef, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { ControlValueAccessor } from '@angular/forms';
import { NbTimePickerComponent } from './timepicker.component';
import { NbOverlayRef, NbScrollStrategy } from '../cdk/overlay/mapping';
import { NbAdjustableConnectedPositionStrategy, NbPositionBuilderService } from '../cdk/overlay/overlay-position';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { NbTriggerStrategy, NbTriggerStrategyBuilderService } from '../cdk/overlay/overlay-trigger';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbCalendarTimeModelService } from '../calendar-kit/services/calendar-time-model.service';
import * as i0 from "@angular/core";
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
export declare class NbTimePickerDirective<D> implements AfterViewInit, ControlValueAccessor {
    protected document: any;
    protected positionBuilder: NbPositionBuilderService;
    protected hostRef: ElementRef;
    protected triggerStrategyBuilder: NbTriggerStrategyBuilderService;
    protected overlay: NbOverlayService;
    protected cd: ChangeDetectorRef;
    protected calendarTimeModelService: NbCalendarTimeModelService<D>;
    protected dateService: NbDateService<D>;
    protected renderer: Renderer2;
    protected placeholder: string;
    /**
     * Provides timepicker component.
     * */
    get timepicker(): NbTimePickerComponent<D>;
    set timepicker(timePicker: NbTimePickerComponent<D>);
    protected _timePickerComponent: NbTimePickerComponent<D>;
    /**
     * Time picker overlay offset.
     * */
    overlayOffset: number;
    /**
     * String representation of latest selected date.
     * Updated when value is updated programmatically (writeValue), via timepicker (subscribeOnApplyClick)
     * or via input field (handleInputChange)
     * @docs-private
     */
    protected lastInputValue: string;
    /**
     * Positioning strategy used by overlay.
     * @docs-private
     * */
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    protected overlayRef: NbOverlayRef;
    protected destroy$: Subject<void>;
    protected onChange: (value: D) => void;
    protected onTouched: () => void;
    /**
     * Trigger strategy used by overlay.
     * @docs-private
     * */
    protected triggerStrategy: NbTriggerStrategy;
    /**
     * Returns html input element.
     * @docs-private
     * */
    get input(): HTMLInputElement;
    /**
     * Determines is timepicker overlay opened.
     * @docs-private
     * */
    get isOpen(): boolean;
    /**
     * Determines is timepicker overlay closed.
     * @docs-private
     * */
    get isClosed(): boolean;
    constructor(document: any, positionBuilder: NbPositionBuilderService, hostRef: ElementRef, triggerStrategyBuilder: NbTriggerStrategyBuilderService, overlay: NbOverlayService, cd: ChangeDetectorRef, calendarTimeModelService: NbCalendarTimeModelService<D>, dateService: NbDateService<D>, renderer: Renderer2, placeholder: string);
    /**
     * Returns host input value.
     * @docs-private
     * */
    get inputValue(): string;
    set inputValue(value: string);
    ngAfterViewInit(): void;
    show(): void;
    hide(): void;
    /**
     * Attaches picker to the timepicker portal.
     * @docs-private
     * */
    protected attachToOverlay(): void;
    setupTimepicker(): void;
    protected initOverlay(): void;
    protected subscribeOnApplyClick(): void;
    protected createOverlay(): void;
    protected subscribeOnTriggers(): void;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected getContainer(): ComponentRef<any>;
    protected createScrollStrategy(): NbScrollStrategy;
    protected subscribeOnInputChange(): void;
    protected subscribeToBlur(): void;
    /**
     * Parses input value and write if it isn't null.
     * @docs-private
     * */
    protected handleInputChange(value: string): void;
    protected updateValue(value: D): void;
    writeValue(value: D): void;
    registerOnChange(fn: (value: any) => {}): void;
    registerOnTouched(fn: any): void;
    protected parseNativeDateString(value: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTimePickerDirective<any>, [null, null, null, null, null, null, null, null, null, { attribute: "placeholder"; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTimePickerDirective<any>, "input[nbTimepicker]", never, { "timepicker": "nbTimepicker"; "overlayOffset": "overlayOffset"; }, {}, never>;
}
