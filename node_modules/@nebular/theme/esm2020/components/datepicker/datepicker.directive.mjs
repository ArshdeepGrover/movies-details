/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, forwardRef, Inject, InjectionToken, Input, } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators, } from '@angular/forms';
import { fromEvent, merge, Subject } from 'rxjs';
import { filter, map, take, takeUntil, tap } from 'rxjs/operators';
import { NB_DOCUMENT } from '../../theme.options';
import * as i0 from "@angular/core";
import * as i1 from "../calendar-kit/services/date.service";
/**
 * The `NbDatepickerAdapter` instances provide way how to parse, format and validate
 * different date types.
 * */
export class NbDatepickerAdapter {
}
/**
 * Datepicker is an control that can pick any values anyway.
 * It has to be bound to the datepicker directive through nbDatepicker input.
 * */
export class NbDatepicker {
}
export const NB_DATE_ADAPTER = new InjectionToken('Datepicker Adapter');
export const NB_DATE_SERVICE_OPTIONS = new InjectionToken('Date service options');
/**
 * The `NbDatepickerDirective` is form control that gives you ability to select dates and ranges. The datepicker
 * is shown when input receives a `focus` event.
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker></nb-datepicker>
 * ```
 *
 * @stacked-example(Showcase, datepicker/datepicker-showcase.component)
 *
 * ### Installation
 *
 * Import `NbDatepickerModule.forRoot()` to your root module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDatepickerModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * And `NbDatepickerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDatepickerModule,
 *   ],
 * })
 *
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use range selection, you have to use `NbRangepickerComponent` instead:
 *
 * ```html
 * <input [nbDatepicker]="rangepicker">
 * <nb-rangepicker #rangepicker></nb-rangepicker>
 * ```
 *
 * Both range and date pickers support all parameters as calendar, so, check `NbCalendarComponent` for additional
 * info.
 *
 * @stacked-example(Range showcase, datepicker/rangepicker-showcase.component)
 *
 * Datepicker is the form control so it can be bound with angular forms through ngModel and form controls.
 *
 * @stacked-example(Forms, datepicker/datepicker-forms.component)
 *
 * `NbDatepickerDirective` may be validated using `min` and `max` dates passed to the datepicker.
 *
 * @stacked-example(Validation, datepicker/datepicker-validation.component)
 *
 * Also `NbDatepickerDirective` may be filtered using `filter` predicate
 * that receives date object and has to return a boolean value.
 *
 * @stacked-example(Filter, datepicker/datepicker-filter.component)
 *
 * If you need to pick a time along with the date, you can use nb-date-timepicker
 *
 * ```html
 * <input nbInput placeholder="Pick Date" [nbDatepicker]="dateTimePicker">
 * <nb-date-timepicker withSeconds #dateTimePicker></nb-date-timepicker>
 * ```
 * @stacked-example(Date timepicker, datepicker/date-timepicker-showcase.component)
 *
 * A single column picker with options value as time and minute, so users won’t be able to pick
 * hours and minutes individually.
 *
 * @stacked-example(Date timepicker single column, datepicker/date-timepicker-single-column.component)

 * The `NbDatepickerComponent` supports date formatting:
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker format="MM\dd\yyyy"></nb-datepicker>
 * ```
 * <span id="formatting-issue"></span>
 * ## Formatting Issue
 *
 * By default, datepicker uses angulars `LOCALE_ID` token for localization and `DatePipe` for dates formatting.
 * And native `Date.parse(...)` for dates parsing. But native `Date.parse` function doesn't support formats.
 * To provide custom formatting you have to use one of the following packages:
 *
 * - `@nebular/moment` - provides moment date adapter that uses moment for date objects. This means datepicker than
 * will operate only moment date objects. If you want to use it you have to install it: `npm i @nebular/moment`, and
 * import `NbMomentDateModule` from this package.
 *
 * - `@nebular/date-fns` - adapter for popular date-fns library. This way is preferred if you need only date formatting.
 * Because date-fns is treeshakable, tiny and operates native date objects. If you want to use it you have to
 * install it: `npm i @nebular/date-fns`, and import `NbDateFnsDateModule` from this package.
 *
 * ### NbDateFnsDateModule
 *
 * Format is required when using `NbDateFnsDateModule`. You can set it via `format` input on datepicker component:
 * ```html
 * <nb-datepicker format="dd.MM.yyyy"></nb-datepicker>
 * ```
 * Also format can be set globally with `NbDateFnsDateModule.forRoot({ format: 'dd.MM.yyyy' })` and
 * `NbDateFnsDateModule.forChild({ format: 'dd.MM.yyyy' })` methods.
 *
 * Please note to use some of the formatting tokens you also need to pass
 * `{ useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true }` to date-fns parse and format functions.
 * You can configure options passed this functions by setting `formatOptions` and
 * `parseOptions` of options object passed to `NbDateFnsDateModule.forRoot` and `NbDateFnsDateModule.forChild` methods.
 * ```ts
 * NbDateFnsDateModule.forRoot({
 *   parseOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
 *   formatOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
 * })
 * ```
 * Further info on `date-fns` formatting tokens could be found at
 * [date-fns docs](https://date-fns.org/v2.0.0-alpha.27/docs/Unicode-Tokens).
 *
 * You can also use `parseOptions` and `formatOptions` to provide locale.
 * ```ts
 * import { eo } from 'date-fns/locale';
 *
 * @NgModule({
 *   imports: [
 *     NbDateFnsDateModule.forRoot({
 *       parseOptions: { locale: eo },
 *       formatOptions: { locale: eo },
 *     }),
 *   ],
 * })
 * ```
 *
 * @styles
 *
 * datepicker-background-color:
 * datepicker-border-color:
 * datepicker-border-style:
 * datepicker-border-width:
 * datepicker-border-radius:
 * datepicker-shadow:
 * */
export class NbDatepickerDirective {
    constructor(document, datepickerAdapters, hostRef, dateService, changeDetector) {
        this.document = document;
        this.datepickerAdapters = datepickerAdapters;
        this.hostRef = hostRef;
        this.dateService = dateService;
        this.changeDetector = changeDetector;
        this.destroy$ = new Subject();
        this.isDatepickerReady = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        /**
         * Form control validators will be called in validators context, so, we need to bind them.
         * */
        this.validator = Validators.compose([this.parseValidator, this.minValidator, this.maxValidator, this.filterValidator].map((fn) => fn.bind(this)));
        this.subscribeOnInputChange();
    }
    /**
     * Provides datepicker component.
     * */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set setPicker(picker) {
        this.picker = picker;
        this.setupPicker();
    }
    /**
     * Returns html input element.
     * */
    get input() {
        return this.hostRef.nativeElement;
    }
    /**
     * Returns host input value.
     * */
    get inputValue() {
        return this.input.value;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Writes value in picker and html input element.
     * */
    writeValue(value) {
        if (this.isDatepickerReady) {
            this.writePicker(value);
            this.writeInput(value);
        }
        else {
            this.queue = value;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.input.disabled = isDisabled;
    }
    /**
     * Form control validation based on picker validator config.
     * */
    validate() {
        return this.validator(null);
    }
    /**
     * Hides picker, focuses the input
     */
    hidePicker() {
        this.input.focus();
        this.picker.hide();
    }
    /**
     * Validates that we can parse value correctly.
     * */
    parseValidator() {
        /**
         * Date services treat empty string as invalid date.
         * That's why we're getting invalid formControl in case of empty input which is not required.
         * */
        if (this.inputValue === '') {
            return null;
        }
        const isValid = this.datepickerAdapter.isValid(this.inputValue, this.picker.format);
        return isValid ? null : { nbDatepickerParse: { value: this.inputValue } };
    }
    /**
     * Validates passed value is greater than min.
     * */
    minValidator() {
        const config = this.picker.getValidatorConfig();
        const date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return !config.min || !date || this.dateService.compareDates(config.min, date) <= 0
            ? null
            : { nbDatepickerMin: { min: config.min, actual: date } };
    }
    /**
     * Validates passed value is smaller than max.
     * */
    maxValidator() {
        const config = this.picker.getValidatorConfig();
        const date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return !config.max || !date || this.dateService.compareDates(config.max, date) >= 0
            ? null
            : { nbDatepickerMax: { max: config.max, actual: date } };
    }
    /**
     * Validates passed value satisfy the filter.
     * */
    filterValidator() {
        const config = this.picker.getValidatorConfig();
        const date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return !config.filter || !date || config.filter(date) ? null : { nbDatepickerFilter: true };
    }
    /**
     * Chooses datepicker adapter based on passed picker component.
     * */
    chooseDatepickerAdapter() {
        this.datepickerAdapter = this.datepickerAdapters.find(({ picker }) => this.picker instanceof picker);
        if (this.noDatepickerAdapterProvided()) {
            throw new Error('No datepickerAdapter provided for picker');
        }
    }
    /**
     * Attaches picker to the host input element and subscribes on value changes.
     * */
    setupPicker() {
        this.chooseDatepickerAdapter();
        this.picker.attach(this.hostRef);
        if (this.inputValue) {
            this.picker.value = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        }
        // In case datepicker component placed after the input with datepicker directive,
        // we can't read `this.picker.format` on first change detection run,
        // since it's not bound yet, so we have to wait for datepicker component initialization.
        if (!this.isDatepickerReady) {
            this.picker.init
                .pipe(take(1), tap(() => (this.isDatepickerReady = true)), filter(() => !!this.queue), takeUntil(this.destroy$))
                .subscribe(() => {
                this.writeValue(this.queue);
                this.changeDetector.detectChanges();
                this.queue = undefined;
            });
        }
        this.picker.valueChange.pipe(takeUntil(this.destroy$)).subscribe((value) => {
            this.writePicker(value);
            this.writeInput(value);
            this.onChange(value);
            if (this.picker.shouldHide()) {
                this.hidePicker();
            }
        });
        merge(this.picker.blur, fromEvent(this.input, 'blur').pipe(filter(() => !this.picker.isShown && this.document.activeElement !== this.input)))
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.onTouched());
    }
    writePicker(value) {
        this.picker.value = value;
    }
    writeInput(value) {
        this.hostRef.nativeElement.value = this.datepickerAdapter.format(value, this.picker.format);
    }
    /**
     * Validates if no datepicker adapter provided.
     * */
    noDatepickerAdapterProvided() {
        return !this.datepickerAdapter || !(this.datepickerAdapter instanceof NbDatepickerAdapter);
    }
    subscribeOnInputChange() {
        fromEvent(this.input, 'input')
            .pipe(map(() => this.inputValue), takeUntil(this.destroy$))
            .subscribe((value) => this.handleInputChange(value));
    }
    /**
     * Parses input value and write if it isn't null.
     * */
    handleInputChange(value) {
        const date = this.parseInputValue(value);
        this.onChange(date);
        this.writePicker(date);
    }
    parseInputValue(value) {
        if (this.datepickerAdapter.isValid(value, this.picker.format)) {
            return this.datepickerAdapter.parse(value, this.picker.format);
        }
        return null;
    }
}
NbDatepickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDatepickerDirective, deps: [{ token: NB_DOCUMENT }, { token: NB_DATE_ADAPTER }, { token: i0.ElementRef }, { token: i1.NbDateService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
NbDatepickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbDatepickerDirective, selector: "input[nbDatepicker]", inputs: { setPicker: ["nbDatepicker", "setPicker"] }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NbDatepickerDirective),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => NbDatepickerDirective),
            multi: true,
        },
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDatepickerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[nbDatepicker]',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => NbDatepickerDirective),
                            multi: true,
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => NbDatepickerDirective),
                            multi: true,
                        },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DATE_ADAPTER]
                }] }, { type: i0.ElementRef }, { type: i1.NbDateService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { setPicker: [{
                type: Input,
                args: ['nbDatepicker']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLGFBQWEsRUFDYixpQkFBaUIsRUFJakIsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFHbEQ7OztLQUdLO0FBQ0wsTUFBTSxPQUFnQixtQkFBbUI7Q0FvQnhDO0FBc0JEOzs7S0FHSztBQUNMLE1BQU0sT0FBZ0IsWUFBWTtDQWlDakM7QUFFRCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQTJCLG9CQUFvQixDQUFDLENBQUM7QUFFbEcsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUVsRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJJSztBQWdCTCxNQUFN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LFVBQVUsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUM7NEJBQ3BELEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxzQkFBc0IsQ0FBQzs0QkFDcEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OzBCQW1DSSxNQUFNOzJCQUFDLFdBQVc7OzBCQUNsQixNQUFNOzJCQUFDLGVBQWU7aUlBN0JyQixTQUFTO3NCQURaLEtBQUs7dUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxJREFUT1JTLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgVmFsaWRhdGlvbkVycm9ycyxcbiAgVmFsaWRhdG9yLFxuICBWYWxpZGF0b3JGbixcbiAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOQl9ET0NVTUVOVCB9IGZyb20gJy4uLy4uL3RoZW1lLm9wdGlvbnMnO1xuaW1wb3J0IHsgTmJEYXRlU2VydmljZSB9IGZyb20gJy4uL2NhbGVuZGFyLWtpdC9zZXJ2aWNlcy9kYXRlLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoZSBgTmJEYXRlcGlja2VyQWRhcHRlcmAgaW5zdGFuY2VzIHByb3ZpZGUgd2F5IGhvdyB0byBwYXJzZSwgZm9ybWF0IGFuZCB2YWxpZGF0ZVxuICogZGlmZmVyZW50IGRhdGUgdHlwZXMuXG4gKiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5iRGF0ZXBpY2tlckFkYXB0ZXI8RD4ge1xuICAvKipcbiAgICogUGlja2VyIGNvbXBvbmVudCBjbGFzcy5cbiAgICogKi9cbiAgYWJzdHJhY3QgcGlja2VyOiBUeXBlPGFueT47XG5cbiAgLyoqXG4gICAqIFBhcnNlIGRhdGUgc3RyaW5nIGFjY29yZGluZyB0byB0aGUgZm9ybWF0LlxuICAgKiAqL1xuICBhYnN0cmFjdCBwYXJzZSh2YWx1ZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IEQ7XG5cbiAgLyoqXG4gICAqIEZvcm1hdCBkYXRlIGFjY29yZGluZyB0byB0aGUgZm9ybWF0LlxuICAgKiAqL1xuICBhYnN0cmFjdCBmb3JtYXQodmFsdWU6IEQsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgZGF0ZSBzdHJpbmcgYWNjb3JkaW5nIHRvIHRoZSBwYXNzZWQgZm9ybWF0LlxuICAgKiAqL1xuICBhYnN0cmFjdCBpc1ZhbGlkKHZhbHVlOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBWYWxpZGF0b3JzIGNvbmZpZyB0aGF0IHdpbGwgYmUgdXNlZCBieSBmb3JtIGNvbnRyb2wgdG8gcGVyZm9ybSBwcm9wZXIgdmFsaWRhdGlvbi5cbiAqICovXG5leHBvcnQgaW50ZXJmYWNlIE5iUGlja2VyVmFsaWRhdG9yQ29uZmlnPEQ+IHtcbiAgLyoqXG4gICAqIE1pbmltdW0gZGF0ZSBhdmFpbGFibGUgaW4gcGlja2VyLlxuICAgKiAqL1xuICBtaW46IEQ7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gZGF0ZSBhdmFpbGFibGUgaW4gcGlja2VyLlxuICAgKiAqL1xuICBtYXg6IEQ7XG5cbiAgLyoqXG4gICAqIFByZWRpY2F0ZSB0aGF0IGRldGVybWluZXMgaXMgdmFsdWUgYXZhaWxhYmxlIGZvciBwaWNraW5nLlxuICAgKiAqL1xuICBmaWx0ZXI6IChEKSA9PiBib29sZWFuO1xufVxuXG4vKipcbiAqIERhdGVwaWNrZXIgaXMgYW4gY29udHJvbCB0aGF0IGNhbiBwaWNrIGFueSB2YWx1ZXMgYW55d2F5LlxuICogSXQgaGFzIHRvIGJlIGJvdW5kIHRvIHRoZSBkYXRlcGlja2VyIGRpcmVjdGl2ZSB0aHJvdWdoIG5iRGF0ZXBpY2tlciBpbnB1dC5cbiAqICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmJEYXRlcGlja2VyPFQsIEQgPSBUPiB7XG4gIC8qKlxuICAgKiBIVE1MIGlucHV0IGVsZW1lbnQgZGF0ZSBmb3JtYXQuXG4gICAqICovXG4gIGFic3RyYWN0IGZvcm1hdDogc3RyaW5nO1xuXG4gIGFic3RyYWN0IGdldCB2YWx1ZSgpOiBUO1xuXG4gIGFic3RyYWN0IHNldCB2YWx1ZSh2YWx1ZTogVCk7XG5cbiAgYWJzdHJhY3QgZ2V0IHZhbHVlQ2hhbmdlKCk6IE9ic2VydmFibGU8VD47XG5cbiAgYWJzdHJhY3QgZ2V0IGluaXQoKTogT2JzZXJ2YWJsZTx2b2lkPjtcblxuICAvKipcbiAgICogQXR0YWNoZXMgZGF0ZXBpY2tlciB0byB0aGUgbmF0aXZlIGlucHV0IGVsZW1lbnQuXG4gICAqICovXG4gIGFic3RyYWN0IGF0dGFjaChob3N0UmVmOiBFbGVtZW50UmVmKTtcblxuICAvKipcbiAgICogUmV0dXJucyB2YWxpZGF0b3IgY29uZmlndXJhdGlvbiBiYXNlZCBvbiB0aGUgaW5wdXQgcHJvcGVydGllcy5cbiAgICogKi9cbiAgYWJzdHJhY3QgZ2V0VmFsaWRhdG9yQ29uZmlnKCk6IE5iUGlja2VyVmFsaWRhdG9yQ29uZmlnPEQ+O1xuXG4gIGFic3RyYWN0IHNob3coKTtcblxuICBhYnN0cmFjdCBoaWRlKCk7XG5cbiAgYWJzdHJhY3Qgc2hvdWxkSGlkZSgpOiBib29sZWFuO1xuXG4gIGFic3RyYWN0IGdldCBpc1Nob3duKCk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3QgZ2V0IGJsdXIoKTogT2JzZXJ2YWJsZTx2b2lkPjtcbn1cblxuZXhwb3J0IGNvbnN0IE5CX0RBVEVfQURBUFRFUiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOYkRhdGVwaWNrZXJBZGFwdGVyPGFueT4+KCdEYXRlcGlja2VyIEFkYXB0ZXInKTtcblxuZXhwb3J0IGNvbnN0IE5CX0RBVEVfU0VSVklDRV9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdEYXRlIHNlcnZpY2Ugb3B0aW9ucycpO1xuXG4vKipcbiAqIFRoZSBgTmJEYXRlcGlja2VyRGlyZWN0aXZlYCBpcyBmb3JtIGNvbnRyb2wgdGhhdCBnaXZlcyB5b3UgYWJpbGl0eSB0byBzZWxlY3QgZGF0ZXMgYW5kIHJhbmdlcy4gVGhlIGRhdGVwaWNrZXJcbiAqIGlzIHNob3duIHdoZW4gaW5wdXQgcmVjZWl2ZXMgYSBgZm9jdXNgIGV2ZW50LlxuICpcbiAqIGBgYGh0bWxcbiAqIDxpbnB1dCBbbmJEYXRlcGlja2VyXT1cImRhdGVwaWNrZXJcIj5cbiAqIDxuYi1kYXRlcGlja2VyICNkYXRlcGlja2VyPjwvbmItZGF0ZXBpY2tlcj5cbiAqIGBgYFxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU2hvd2Nhc2UsIGRhdGVwaWNrZXIvZGF0ZXBpY2tlci1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJEYXRlcGlja2VyTW9kdWxlLmZvclJvb3QoKWAgdG8geW91ciByb290IG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJEYXRlcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuICogYGBgXG4gKiBBbmQgYE5iRGF0ZXBpY2tlck1vZHVsZWAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJEYXRlcGlja2VyTW9kdWxlLFxuICogICBdLFxuICogfSlcbiAqXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKlxuICogSWYgeW91IHdhbnQgdG8gdXNlIHJhbmdlIHNlbGVjdGlvbiwgeW91IGhhdmUgdG8gdXNlIGBOYlJhbmdlcGlja2VyQ29tcG9uZW50YCBpbnN0ZWFkOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxpbnB1dCBbbmJEYXRlcGlja2VyXT1cInJhbmdlcGlja2VyXCI+XG4gKiA8bmItcmFuZ2VwaWNrZXIgI3JhbmdlcGlja2VyPjwvbmItcmFuZ2VwaWNrZXI+XG4gKiBgYGBcbiAqXG4gKiBCb3RoIHJhbmdlIGFuZCBkYXRlIHBpY2tlcnMgc3VwcG9ydCBhbGwgcGFyYW1ldGVycyBhcyBjYWxlbmRhciwgc28sIGNoZWNrIGBOYkNhbGVuZGFyQ29tcG9uZW50YCBmb3IgYWRkaXRpb25hbFxuICogaW5mby5cbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKFJhbmdlIHNob3djYXNlLCBkYXRlcGlja2VyL3JhbmdlcGlja2VyLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBEYXRlcGlja2VyIGlzIHRoZSBmb3JtIGNvbnRyb2wgc28gaXQgY2FuIGJlIGJvdW5kIHdpdGggYW5ndWxhciBmb3JtcyB0aHJvdWdoIG5nTW9kZWwgYW5kIGZvcm0gY29udHJvbHMuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShGb3JtcywgZGF0ZXBpY2tlci9kYXRlcGlja2VyLWZvcm1zLmNvbXBvbmVudClcbiAqXG4gKiBgTmJEYXRlcGlja2VyRGlyZWN0aXZlYCBtYXkgYmUgdmFsaWRhdGVkIHVzaW5nIGBtaW5gIGFuZCBgbWF4YCBkYXRlcyBwYXNzZWQgdG8gdGhlIGRhdGVwaWNrZXIuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShWYWxpZGF0aW9uLCBkYXRlcGlja2VyL2RhdGVwaWNrZXItdmFsaWRhdGlvbi5jb21wb25lbnQpXG4gKlxuICogQWxzbyBgTmJEYXRlcGlja2VyRGlyZWN0aXZlYCBtYXkgYmUgZmlsdGVyZWQgdXNpbmcgYGZpbHRlcmAgcHJlZGljYXRlXG4gKiB0aGF0IHJlY2VpdmVzIGRhdGUgb2JqZWN0IGFuZCBoYXMgdG8gcmV0dXJuIGEgYm9vbGVhbiB2YWx1ZS5cbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKEZpbHRlciwgZGF0ZXBpY2tlci9kYXRlcGlja2VyLWZpbHRlci5jb21wb25lbnQpXG4gKlxuICogSWYgeW91IG5lZWQgdG8gcGljayBhIHRpbWUgYWxvbmcgd2l0aCB0aGUgZGF0ZSwgeW91IGNhbiB1c2UgbmItZGF0ZS10aW1lcGlja2VyXG4gKlxuICogYGBgaHRtbFxuICogPGlucHV0IG5iSW5wdXQgcGxhY2Vob2xkZXI9XCJQaWNrIERhdGVcIiBbbmJEYXRlcGlja2VyXT1cImRhdGVUaW1lUGlja2VyXCI+XG4gKiA8bmItZGF0ZS10aW1lcGlja2VyIHdpdGhTZWNvbmRzICNkYXRlVGltZVBpY2tlcj48L25iLWRhdGUtdGltZXBpY2tlcj5cbiAqIGBgYFxuICogQHN0YWNrZWQtZXhhbXBsZShEYXRlIHRpbWVwaWNrZXIsIGRhdGVwaWNrZXIvZGF0ZS10aW1lcGlja2VyLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBBIHNpbmdsZSBjb2x1bW4gcGlja2VyIHdpdGggb3B0aW9ucyB2YWx1ZSBhcyB0aW1lIGFuZCBtaW51dGUsIHNvIHVzZXJzIHdvbuKAmXQgYmUgYWJsZSB0byBwaWNrXG4gKiBob3VycyBhbmQgbWludXRlcyBpbmRpdmlkdWFsbHkuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShEYXRlIHRpbWVwaWNrZXIgc2luZ2xlIGNvbHVtbiwgZGF0ZXBpY2tlci9kYXRlLXRpbWVwaWNrZXItc2luZ2xlLWNvbHVtbi5jb21wb25lbnQpXG5cbiAqIFRoZSBgTmJEYXRlcGlja2VyQ29tcG9uZW50YCBzdXBwb3J0cyBkYXRlIGZvcm1hdHRpbmc6XG4gKlxuICogYGBgaHRtbFxuICogPGlucHV0IFtuYkRhdGVwaWNrZXJdPVwiZGF0ZXBpY2tlclwiPlxuICogPG5iLWRhdGVwaWNrZXIgI2RhdGVwaWNrZXIgZm9ybWF0PVwiTU1cXGRkXFx5eXl5XCI+PC9uYi1kYXRlcGlja2VyPlxuICogYGBgXG4gKiA8c3BhbiBpZD1cImZvcm1hdHRpbmctaXNzdWVcIj48L3NwYW4+XG4gKiAjIyBGb3JtYXR0aW5nIElzc3VlXG4gKlxuICogQnkgZGVmYXVsdCwgZGF0ZXBpY2tlciB1c2VzIGFuZ3VsYXJzIGBMT0NBTEVfSURgIHRva2VuIGZvciBsb2NhbGl6YXRpb24gYW5kIGBEYXRlUGlwZWAgZm9yIGRhdGVzIGZvcm1hdHRpbmcuXG4gKiBBbmQgbmF0aXZlIGBEYXRlLnBhcnNlKC4uLilgIGZvciBkYXRlcyBwYXJzaW5nLiBCdXQgbmF0aXZlIGBEYXRlLnBhcnNlYCBmdW5jdGlvbiBkb2Vzbid0IHN1cHBvcnQgZm9ybWF0cy5cbiAqIFRvIHByb3ZpZGUgY3VzdG9tIGZvcm1hdHRpbmcgeW91IGhhdmUgdG8gdXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHBhY2thZ2VzOlxuICpcbiAqIC0gYEBuZWJ1bGFyL21vbWVudGAgLSBwcm92aWRlcyBtb21lbnQgZGF0ZSBhZGFwdGVyIHRoYXQgdXNlcyBtb21lbnQgZm9yIGRhdGUgb2JqZWN0cy4gVGhpcyBtZWFucyBkYXRlcGlja2VyIHRoYW5cbiAqIHdpbGwgb3BlcmF0ZSBvbmx5IG1vbWVudCBkYXRlIG9iamVjdHMuIElmIHlvdSB3YW50IHRvIHVzZSBpdCB5b3UgaGF2ZSB0byBpbnN0YWxsIGl0OiBgbnBtIGkgQG5lYnVsYXIvbW9tZW50YCwgYW5kXG4gKiBpbXBvcnQgYE5iTW9tZW50RGF0ZU1vZHVsZWAgZnJvbSB0aGlzIHBhY2thZ2UuXG4gKlxuICogLSBgQG5lYnVsYXIvZGF0ZS1mbnNgIC0gYWRhcHRlciBmb3IgcG9wdWxhciBkYXRlLWZucyBsaWJyYXJ5LiBUaGlzIHdheSBpcyBwcmVmZXJyZWQgaWYgeW91IG5lZWQgb25seSBkYXRlIGZvcm1hdHRpbmcuXG4gKiBCZWNhdXNlIGRhdGUtZm5zIGlzIHRyZWVzaGFrYWJsZSwgdGlueSBhbmQgb3BlcmF0ZXMgbmF0aXZlIGRhdGUgb2JqZWN0cy4gSWYgeW91IHdhbnQgdG8gdXNlIGl0IHlvdSBoYXZlIHRvXG4gKiBpbnN0YWxsIGl0OiBgbnBtIGkgQG5lYnVsYXIvZGF0ZS1mbnNgLCBhbmQgaW1wb3J0IGBOYkRhdGVGbnNEYXRlTW9kdWxlYCBmcm9tIHRoaXMgcGFja2FnZS5cbiAqXG4gKiAjIyMgTmJEYXRlRm5zRGF0ZU1vZHVsZVxuICpcbiAqIEZvcm1hdCBpcyByZXF1aXJlZCB3aGVuIHVzaW5nIGBOYkRhdGVGbnNEYXRlTW9kdWxlYC4gWW91IGNhbiBzZXQgaXQgdmlhIGBmb3JtYXRgIGlucHV0IG9uIGRhdGVwaWNrZXIgY29tcG9uZW50OlxuICogYGBgaHRtbFxuICogPG5iLWRhdGVwaWNrZXIgZm9ybWF0PVwiZGQuTU0ueXl5eVwiPjwvbmItZGF0ZXBpY2tlcj5cbiAqIGBgYFxuICogQWxzbyBmb3JtYXQgY2FuIGJlIHNldCBnbG9iYWxseSB3aXRoIGBOYkRhdGVGbnNEYXRlTW9kdWxlLmZvclJvb3QoeyBmb3JtYXQ6ICdkZC5NTS55eXl5JyB9KWAgYW5kXG4gKiBgTmJEYXRlRm5zRGF0ZU1vZHVsZS5mb3JDaGlsZCh7IGZvcm1hdDogJ2RkLk1NLnl5eXknIH0pYCBtZXRob2RzLlxuICpcbiAqIFBsZWFzZSBub3RlIHRvIHVzZSBzb21lIG9mIHRoZSBmb3JtYXR0aW5nIHRva2VucyB5b3UgYWxzbyBuZWVkIHRvIHBhc3NcbiAqIGB7IHVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VuczogdHJ1ZSwgdXNlQWRkaXRpb25hbERheU9mWWVhclRva2VuczogdHJ1ZSB9YCB0byBkYXRlLWZucyBwYXJzZSBhbmQgZm9ybWF0IGZ1bmN0aW9ucy5cbiAqIFlvdSBjYW4gY29uZmlndXJlIG9wdGlvbnMgcGFzc2VkIHRoaXMgZnVuY3Rpb25zIGJ5IHNldHRpbmcgYGZvcm1hdE9wdGlvbnNgIGFuZFxuICogYHBhcnNlT3B0aW9uc2Agb2Ygb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvIGBOYkRhdGVGbnNEYXRlTW9kdWxlLmZvclJvb3RgIGFuZCBgTmJEYXRlRm5zRGF0ZU1vZHVsZS5mb3JDaGlsZGAgbWV0aG9kcy5cbiAqIGBgYHRzXG4gKiBOYkRhdGVGbnNEYXRlTW9kdWxlLmZvclJvb3Qoe1xuICogICBwYXJzZU9wdGlvbnM6IHsgdXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zOiB0cnVlLCB1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zOiB0cnVlIH0sXG4gKiAgIGZvcm1hdE9wdGlvbnM6IHsgdXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zOiB0cnVlLCB1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zOiB0cnVlIH0sXG4gKiB9KVxuICogYGBgXG4gKiBGdXJ0aGVyIGluZm8gb24gYGRhdGUtZm5zYCBmb3JtYXR0aW5nIHRva2VucyBjb3VsZCBiZSBmb3VuZCBhdFxuICogW2RhdGUtZm5zIGRvY3NdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL3YyLjAuMC1hbHBoYS4yNy9kb2NzL1VuaWNvZGUtVG9rZW5zKS5cbiAqXG4gKiBZb3UgY2FuIGFsc28gdXNlIGBwYXJzZU9wdGlvbnNgIGFuZCBgZm9ybWF0T3B0aW9uc2AgdG8gcHJvdmlkZSBsb2NhbGUuXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZW8gfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xuICpcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICBOYkRhdGVGbnNEYXRlTW9kdWxlLmZvclJvb3Qoe1xuICogICAgICAgcGFyc2VPcHRpb25zOiB7IGxvY2FsZTogZW8gfSxcbiAqICAgICAgIGZvcm1hdE9wdGlvbnM6IHsgbG9jYWxlOiBlbyB9LFxuICogICAgIH0pLFxuICogICBdLFxuICogfSlcbiAqIGBgYFxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiBkYXRlcGlja2VyLWJhY2tncm91bmQtY29sb3I6XG4gKiBkYXRlcGlja2VyLWJvcmRlci1jb2xvcjpcbiAqIGRhdGVwaWNrZXItYm9yZGVyLXN0eWxlOlxuICogZGF0ZXBpY2tlci1ib3JkZXItd2lkdGg6XG4gKiBkYXRlcGlja2VyLWJvcmRlci1yYWRpdXM6XG4gKiBkYXRlcGlja2VyLXNoYWRvdzpcbiAqICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtuYkRhdGVwaWNrZXJdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOYkRhdGVwaWNrZXJEaXJlY3RpdmUpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmJEYXRlcGlja2VyRGlyZWN0aXZlKSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iRGF0ZXBpY2tlckRpcmVjdGl2ZTxEPiBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIC8qKlxuICAgKiBQcm92aWRlcyBkYXRlcGlja2VyIGNvbXBvbmVudC5cbiAgICogKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCduYkRhdGVwaWNrZXInKVxuICBzZXQgc2V0UGlja2VyKHBpY2tlcjogTmJEYXRlcGlja2VyPEQ+KSB7XG4gICAgdGhpcy5waWNrZXIgPSBwaWNrZXI7XG4gICAgdGhpcy5zZXR1cFBpY2tlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIERhdGVwaWNrZXIgYWRhcHRlci5cbiAgICogKi9cbiAgcHJvdGVjdGVkIGRhdGVwaWNrZXJBZGFwdGVyOiBOYkRhdGVwaWNrZXJBZGFwdGVyPEQ+O1xuXG4gIC8qKlxuICAgKiBEYXRlcGlja2VyIGluc3RhbmNlLlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgcGlja2VyOiBOYkRhdGVwaWNrZXI8RD47XG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByb3RlY3RlZCBpc0RhdGVwaWNrZXJSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgcXVldWU6IEQgfCB1bmRlZmluZWQ7XG4gIHByb3RlY3RlZCBvbkNoYW5nZTogKEQpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJvdGVjdGVkIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBGb3JtIGNvbnRyb2wgdmFsaWRhdG9ycyB3aWxsIGJlIGNhbGxlZCBpbiB2YWxpZGF0b3JzIGNvbnRleHQsIHNvLCB3ZSBuZWVkIHRvIGJpbmQgdGhlbS5cbiAgICogKi9cbiAgcHJvdGVjdGVkIHZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSBWYWxpZGF0b3JzLmNvbXBvc2UoXG4gICAgW3RoaXMucGFyc2VWYWxpZGF0b3IsIHRoaXMubWluVmFsaWRhdG9yLCB0aGlzLm1heFZhbGlkYXRvciwgdGhpcy5maWx0ZXJWYWxpZGF0b3JdLm1hcCgoZm4pID0+IGZuLmJpbmQodGhpcykpLFxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoTkJfRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudCxcbiAgICBASW5qZWN0KE5CX0RBVEVfQURBUFRFUikgcHJvdGVjdGVkIGRhdGVwaWNrZXJBZGFwdGVyczogTmJEYXRlcGlja2VyQWRhcHRlcjxEPltdLFxuICAgIHByb3RlY3RlZCBob3N0UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBkYXRlU2VydmljZTogTmJEYXRlU2VydmljZTxEPixcbiAgICBwcm90ZWN0ZWQgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICB0aGlzLnN1YnNjcmliZU9uSW5wdXRDaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGh0bWwgaW5wdXQgZWxlbWVudC5cbiAgICogKi9cbiAgZ2V0IGlucHV0KCk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmhvc3RSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGhvc3QgaW5wdXQgdmFsdWUuXG4gICAqICovXG4gIGdldCBpbnB1dFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIHZhbHVlIGluIHBpY2tlciBhbmQgaHRtbCBpbnB1dCBlbGVtZW50LlxuICAgKiAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBEKSB7XG4gICAgaWYgKHRoaXMuaXNEYXRlcGlja2VyUmVhZHkpIHtcbiAgICAgIHRoaXMud3JpdGVQaWNrZXIodmFsdWUpO1xuICAgICAgdGhpcy53cml0ZUlucHV0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5xdWV1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dC5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogRm9ybSBjb250cm9sIHZhbGlkYXRpb24gYmFzZWQgb24gcGlja2VyIHZhbGlkYXRvciBjb25maWcuXG4gICAqICovXG4gIHZhbGlkYXRlKCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IobnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgcGlja2VyLCBmb2N1c2VzIHRoZSBpbnB1dFxuICAgKi9cbiAgcHJvdGVjdGVkIGhpZGVQaWNrZXIoKSB7XG4gICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIHRoaXMucGlja2VyLmhpZGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgdGhhdCB3ZSBjYW4gcGFyc2UgdmFsdWUgY29ycmVjdGx5LlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgcGFyc2VWYWxpZGF0b3IoKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIC8qKlxuICAgICAqIERhdGUgc2VydmljZXMgdHJlYXQgZW1wdHkgc3RyaW5nIGFzIGludmFsaWQgZGF0ZS5cbiAgICAgKiBUaGF0J3Mgd2h5IHdlJ3JlIGdldHRpbmcgaW52YWxpZCBmb3JtQ29udHJvbCBpbiBjYXNlIG9mIGVtcHR5IGlucHV0IHdoaWNoIGlzIG5vdCByZXF1aXJlZC5cbiAgICAgKiAqL1xuICAgIGlmICh0aGlzLmlucHV0VmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy5kYXRlcGlja2VyQWRhcHRlci5pc1ZhbGlkKHRoaXMuaW5wdXRWYWx1ZSwgdGhpcy5waWNrZXIuZm9ybWF0KTtcbiAgICByZXR1cm4gaXNWYWxpZCA/IG51bGwgOiB7IG5iRGF0ZXBpY2tlclBhcnNlOiB7IHZhbHVlOiB0aGlzLmlucHV0VmFsdWUgfSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBwYXNzZWQgdmFsdWUgaXMgZ3JlYXRlciB0aGFuIG1pbi5cbiAgICogKi9cbiAgcHJvdGVjdGVkIG1pblZhbGlkYXRvcigpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5waWNrZXIuZ2V0VmFsaWRhdG9yQ29uZmlnKCk7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZXBpY2tlckFkYXB0ZXIucGFyc2UodGhpcy5pbnB1dFZhbHVlLCB0aGlzLnBpY2tlci5mb3JtYXQpO1xuICAgIHJldHVybiAhY29uZmlnLm1pbiB8fCAhZGF0ZSB8fCB0aGlzLmRhdGVTZXJ2aWNlLmNvbXBhcmVEYXRlcyhjb25maWcubWluLCBkYXRlKSA8PSAwXG4gICAgICA/IG51bGxcbiAgICAgIDogeyBuYkRhdGVwaWNrZXJNaW46IHsgbWluOiBjb25maWcubWluLCBhY3R1YWw6IGRhdGUgfSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBwYXNzZWQgdmFsdWUgaXMgc21hbGxlciB0aGFuIG1heC5cbiAgICogKi9cbiAgcHJvdGVjdGVkIG1heFZhbGlkYXRvcigpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5waWNrZXIuZ2V0VmFsaWRhdG9yQ29uZmlnKCk7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZXBpY2tlckFkYXB0ZXIucGFyc2UodGhpcy5pbnB1dFZhbHVlLCB0aGlzLnBpY2tlci5mb3JtYXQpO1xuICAgIHJldHVybiAhY29uZmlnLm1heCB8fCAhZGF0ZSB8fCB0aGlzLmRhdGVTZXJ2aWNlLmNvbXBhcmVEYXRlcyhjb25maWcubWF4LCBkYXRlKSA+PSAwXG4gICAgICA/IG51bGxcbiAgICAgIDogeyBuYkRhdGVwaWNrZXJNYXg6IHsgbWF4OiBjb25maWcubWF4LCBhY3R1YWw6IGRhdGUgfSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBwYXNzZWQgdmFsdWUgc2F0aXNmeSB0aGUgZmlsdGVyLlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgZmlsdGVyVmFsaWRhdG9yKCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLnBpY2tlci5nZXRWYWxpZGF0b3JDb25maWcoKTtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlcGlja2VyQWRhcHRlci5wYXJzZSh0aGlzLmlucHV0VmFsdWUsIHRoaXMucGlja2VyLmZvcm1hdCk7XG4gICAgcmV0dXJuICFjb25maWcuZmlsdGVyIHx8ICFkYXRlIHx8IGNvbmZpZy5maWx0ZXIoZGF0ZSkgPyBudWxsIDogeyBuYkRhdGVwaWNrZXJGaWx0ZXI6IHRydWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaG9vc2VzIGRhdGVwaWNrZXIgYWRhcHRlciBiYXNlZCBvbiBwYXNzZWQgcGlja2VyIGNvbXBvbmVudC5cbiAgICogKi9cbiAgcHJvdGVjdGVkIGNob29zZURhdGVwaWNrZXJBZGFwdGVyKCkge1xuICAgIHRoaXMuZGF0ZXBpY2tlckFkYXB0ZXIgPSB0aGlzLmRhdGVwaWNrZXJBZGFwdGVycy5maW5kKCh7IHBpY2tlciB9KSA9PiB0aGlzLnBpY2tlciBpbnN0YW5jZW9mIHBpY2tlcik7XG5cbiAgICBpZiAodGhpcy5ub0RhdGVwaWNrZXJBZGFwdGVyUHJvdmlkZWQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBkYXRlcGlja2VyQWRhcHRlciBwcm92aWRlZCBmb3IgcGlja2VyJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHBpY2tlciB0byB0aGUgaG9zdCBpbnB1dCBlbGVtZW50IGFuZCBzdWJzY3JpYmVzIG9uIHZhbHVlIGNoYW5nZXMuXG4gICAqICovXG4gIHByb3RlY3RlZCBzZXR1cFBpY2tlcigpIHtcbiAgICB0aGlzLmNob29zZURhdGVwaWNrZXJBZGFwdGVyKCk7XG4gICAgdGhpcy5waWNrZXIuYXR0YWNoKHRoaXMuaG9zdFJlZik7XG5cbiAgICBpZiAodGhpcy5pbnB1dFZhbHVlKSB7XG4gICAgICB0aGlzLnBpY2tlci52YWx1ZSA9IHRoaXMuZGF0ZXBpY2tlckFkYXB0ZXIucGFyc2UodGhpcy5pbnB1dFZhbHVlLCB0aGlzLnBpY2tlci5mb3JtYXQpO1xuICAgIH1cblxuICAgIC8vIEluIGNhc2UgZGF0ZXBpY2tlciBjb21wb25lbnQgcGxhY2VkIGFmdGVyIHRoZSBpbnB1dCB3aXRoIGRhdGVwaWNrZXIgZGlyZWN0aXZlLFxuICAgIC8vIHdlIGNhbid0IHJlYWQgYHRoaXMucGlja2VyLmZvcm1hdGAgb24gZmlyc3QgY2hhbmdlIGRldGVjdGlvbiBydW4sXG4gICAgLy8gc2luY2UgaXQncyBub3QgYm91bmQgeWV0LCBzbyB3ZSBoYXZlIHRvIHdhaXQgZm9yIGRhdGVwaWNrZXIgY29tcG9uZW50IGluaXRpYWxpemF0aW9uLlxuICAgIGlmICghdGhpcy5pc0RhdGVwaWNrZXJSZWFkeSkge1xuICAgICAgdGhpcy5waWNrZXIuaW5pdFxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIHRhcCgoKSA9PiAodGhpcy5pc0RhdGVwaWNrZXJSZWFkeSA9IHRydWUpKSxcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLnF1ZXVlKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMucXVldWUpO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgIHRoaXMucXVldWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMucGlja2VyLnZhbHVlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKHZhbHVlOiBEKSA9PiB7XG4gICAgICB0aGlzLndyaXRlUGlja2VyKHZhbHVlKTtcbiAgICAgIHRoaXMud3JpdGVJbnB1dCh2YWx1ZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMucGlja2VyLnNob3VsZEhpZGUoKSkge1xuICAgICAgICB0aGlzLmhpZGVQaWNrZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1lcmdlKFxuICAgICAgdGhpcy5waWNrZXIuYmx1cixcbiAgICAgIGZyb21FdmVudCh0aGlzLmlucHV0LCAnYmx1cicpLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5waWNrZXIuaXNTaG93biAmJiB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRoaXMuaW5wdXQpLFxuICAgICAgKSxcbiAgICApXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdyaXRlUGlja2VyKHZhbHVlOiBEKSB7XG4gICAgdGhpcy5waWNrZXIudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCB3cml0ZUlucHV0KHZhbHVlOiBEKSB7XG4gICAgdGhpcy5ob3N0UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmRhdGVwaWNrZXJBZGFwdGVyLmZvcm1hdCh2YWx1ZSwgdGhpcy5waWNrZXIuZm9ybWF0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgaWYgbm8gZGF0ZXBpY2tlciBhZGFwdGVyIHByb3ZpZGVkLlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgbm9EYXRlcGlja2VyQWRhcHRlclByb3ZpZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5kYXRlcGlja2VyQWRhcHRlciB8fCAhKHRoaXMuZGF0ZXBpY2tlckFkYXB0ZXIgaW5zdGFuY2VvZiBOYkRhdGVwaWNrZXJBZGFwdGVyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVPbklucHV0Q2hhbmdlKCkge1xuICAgIGZyb21FdmVudCh0aGlzLmlucHV0LCAnaW5wdXQnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLmlucHV0VmFsdWUpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGlucHV0IHZhbHVlIGFuZCB3cml0ZSBpZiBpdCBpc24ndCBudWxsLlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgaGFuZGxlSW5wdXRDaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLnBhcnNlSW5wdXRWYWx1ZSh2YWx1ZSk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlKGRhdGUpO1xuICAgIHRoaXMud3JpdGVQaWNrZXIoZGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyc2VJbnB1dFZhbHVlKHZhbHVlKTogRCB8IG51bGwge1xuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJBZGFwdGVyLmlzVmFsaWQodmFsdWUsIHRoaXMucGlja2VyLmZvcm1hdCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXJBZGFwdGVyLnBhcnNlKHZhbHVlLCB0aGlzLnBpY2tlci5mb3JtYXQpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=