/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, forwardRef, Input, Output, PLATFORM_ID, Inject, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { from, fromEvent, merge, Subject } from 'rxjs';
import { filter, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { NB_DOCUMENT } from '../../theme.options';
import { NbRadioComponent } from './radio.component';
import * as i0 from "@angular/core";
/**
 * The `NbRadioGroupComponent` is the wrapper for `nb-radio` button.
 * It provides form bindings:
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Also, you can use `value` and `valueChange` for binding without forms.
 *
 * ```html
 * <nb-radio-group [(value)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Radio items name has to be provided through `name` input property of the radio group.
 *
 * ```html
 * <nb-radio-group name="my-radio-group">
 *   ...
 * </nb-radio-group>
 * ```
 *
 * You can change radio group status by setting `status` input.
 * @stacked-example(Statuses, radio/radio-statuses.component)
 *
 * Also, you can disable the whole group using `disabled` attribute.
 * @stacked-example(Disabled group, radio/radio-disabled-group.component)
 *
 * Radio group supports `ngModel` and reactive forms:
 * @stacked-example(Radio Group with forms, radio/radio-form.component)
 *
 * */
export class NbRadioGroupComponent {
    constructor(hostElement, platformId, document) {
        this.hostElement = hostElement;
        this.platformId = platformId;
        this.document = document;
        this.destroy$ = new Subject();
        this.onChange = (value) => { };
        this.onTouched = () => { };
        this._status = 'basic';
        this.valueChange = new EventEmitter();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.updateValues();
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
        this.updateNames();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = convertToBoolProperty(disabled);
        this.updateDisabled();
    }
    /**
     * Radio buttons status.
     * Possible values are `primary` (default), `success`, `warning`, `danger`, `info`.
     */
    get status() {
        return this._status;
    }
    set status(value) {
        if (this._status !== value) {
            this._status = value;
            this.updateStatus();
        }
    }
    ngAfterContentInit() {
        // In case option 'name' isn't set on nb-radio component,
        // we need to set it's name right away, so it won't overlap with options
        // without names from other radio groups. Otherwise they all would have
        // same name and will be considered as options from one group so only the
        // last option will stay selected.
        this.updateNames();
        this.radios.changes
            .pipe(startWith(this.radios), 
        // 'changes' emit during change detection run and we can't update
        // option properties right of since they already was initialized.
        // Instead we schedule microtask to update radios after change detection
        // run is finished and trigger one more change detection run.
        switchMap((radios) => from(Promise.resolve(radios))), takeUntil(this.destroy$))
            .subscribe(() => this.updateAndSubscribeToRadios());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        this.value = value;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    updateAndSubscribeToRadios() {
        this.updateValueFromCheckedOption();
        this.updateNames();
        this.updateValues();
        this.updateDisabled();
        this.updateStatus();
        this.subscribeOnRadiosValueChange();
        this.subscribeOnRadiosBlur();
    }
    updateNames() {
        if (this.radios) {
            this.radios.forEach((radio) => radio._setName(this.name));
        }
    }
    updateValues() {
        this.updateAndMarkForCheckRadios((radio) => radio.checked = radio.value === this.value);
    }
    updateDisabled() {
        if (typeof this.disabled !== 'undefined') {
            this.updateAndMarkForCheckRadios((radio) => radio.disabled = this.disabled);
        }
    }
    subscribeOnRadiosValueChange() {
        if (!this.radios || !this.radios.length) {
            return;
        }
        merge(...this.radios.map((radio) => radio.valueChange))
            .pipe(takeUntil(merge(this.radios.changes, this.destroy$)))
            .subscribe((value) => {
            this.writeValue(value);
            this.propagateValue(value);
        });
    }
    propagateValue(value) {
        this.valueChange.emit(value);
        this.onChange(value);
    }
    subscribeOnRadiosBlur() {
        const hasNoRadios = !this.radios || !this.radios.length;
        if (!isPlatformBrowser(this.platformId) || hasNoRadios) {
            return;
        }
        const hostElement = this.hostElement.nativeElement;
        fromEvent(hostElement, 'focusin')
            .pipe(filter(event => hostElement.contains(event.target)), switchMap(() => merge(fromEvent(this.document, 'focusin'), fromEvent(this.document, 'click'))), filter(event => !hostElement.contains(event.target)), takeUntil(merge(this.radios.changes, this.destroy$)))
            .subscribe(() => this.onTouched());
    }
    updateStatus() {
        this.updateAndMarkForCheckRadios((radio) => radio.status = this.status);
    }
    updateAndMarkForCheckRadios(updateFn) {
        if (this.radios) {
            this.radios.forEach((radio) => {
                updateFn(radio);
                radio._markForCheck();
            });
        }
    }
    updateValueFromCheckedOption() {
        const checkedRadio = this.radios.find((radio) => radio.checked);
        const isValueMissing = this.value === undefined || this.value === null;
        if (checkedRadio && isValueMissing && checkedRadio.value !== this.value) {
            this.value = checkedRadio.value;
        }
    }
}
NbRadioGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRadioGroupComponent, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }, { token: NB_DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
NbRadioGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbRadioGroupComponent, selector: "nb-radio-group", inputs: { value: "value", name: "name", disabled: "disabled", status: "status" }, outputs: { valueChange: "valueChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NbRadioGroupComponent),
            multi: true,
        },
    ], queries: [{ propertyName: "radios", predicate: NbRadioComponent, descendants: true }], ngImport: i0, template: `
    <ng-content select="nb-radio"></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRadioGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-radio-group',
                    template: `
    <ng-content select="nb-radio"></ng-content>`,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => NbRadioGroupComponent),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }]; }, propDecorators: { value: [{
                type: Input
            }], name: [{
                type: Input
            }], disabled: [{
                type: Input
            }], status: [{
                type: Input
            }], radios: [{
                type: ContentChildren,
                args: [NbRadioComponent, { descendants: true }]
            }], valueChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3JhZGlvL3JhZGlvLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLE1BQU0sRUFFTixXQUFXLEVBQ1gsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXVDSztBQWNMLE1BQU0sT0FBTyxxQkFBcUI7SUF5RGhDLFlBQ1ksV0FBb0MsRUFDZixVQUFVLEVBQ1YsUUFBUTtRQUY3QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFBO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQTFEL0IsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFR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QyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNwRCxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsaURBd0RnQixnQkFBZ0IsZ0RBaEV2QjtnREFDb0M7MkZBVW5DLHFCQUFxQjtrQkFiakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUU7Z0RBQ29DO29CQUM5QyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUM7NEJBQ3BELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7MEJBNERJLE1BQU07MkJBQUMsV0FBVzs7MEJBQ2xCLE1BQU07MkJBQUMsV0FBVzs0Q0FyRGpCLEtBQUs7c0JBRFIsS0FBSztnQkFXRixJQUFJO3NCQURQLEtBQUs7Z0JBV0YsUUFBUTtzQkFEWCxLQUFLO2dCQWdCRixNQUFNO3NCQURULEtBQUs7Z0JBWW9ELE1BQU07c0JBQS9ELGVBQWU7dUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO2dCQUU5QyxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUExBVEZPUk1fSUQsXG4gIEluamVjdCxcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmcm9tLCBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IE5CX0RPQ1VNRU5UIH0gZnJvbSAnLi4vLi4vdGhlbWUub3B0aW9ucyc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzIH0gZnJvbSAnLi4vY29tcG9uZW50LXN0YXR1cyc7XG5pbXBvcnQgeyBOYlJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRpby5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoZSBgTmJSYWRpb0dyb3VwQ29tcG9uZW50YCBpcyB0aGUgd3JhcHBlciBmb3IgYG5iLXJhZGlvYCBidXR0b24uXG4gKiBJdCBwcm92aWRlcyBmb3JtIGJpbmRpbmdzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxuYi1yYWRpby1ncm91cCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkT3B0aW9uXCI+XG4gKiAgIDxuYi1yYWRpbyB2YWx1ZT1cIjFcIj5PcHRpb24gMTwvbmItcmFkaW8+XG4gKiAgIDxuYi1yYWRpbyB2YWx1ZT1cIjJcIj5PcHRpb24gMjwvbmItcmFkaW8+XG4gKiAgIDxuYi1yYWRpbyB2YWx1ZT1cIjNcIj5PcHRpb24gMzwvbmItcmFkaW8+XG4gKiA8L25iLXJhZGlvLWdyb3VwPlxuICogYGBgXG4gKlxuICogQWxzbywgeW91IGNhbiB1c2UgYHZhbHVlYCBhbmQgYHZhbHVlQ2hhbmdlYCBmb3IgYmluZGluZyB3aXRob3V0IGZvcm1zLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxuYi1yYWRpby1ncm91cCBbKHZhbHVlKV09XCJzZWxlY3RlZE9wdGlvblwiPlxuICogICA8bmItcmFkaW8gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L25iLXJhZGlvPlxuICogICA8bmItcmFkaW8gdmFsdWU9XCIyXCI+T3B0aW9uIDI8L25iLXJhZGlvPlxuICogICA8bmItcmFkaW8gdmFsdWU9XCIzXCI+T3B0aW9uIDM8L25iLXJhZGlvPlxuICogPC9uYi1yYWRpby1ncm91cD5cbiAqIGBgYFxuICpcbiAqIFJhZGlvIGl0ZW1zIG5hbWUgaGFzIHRvIGJlIHByb3ZpZGVkIHRocm91Z2ggYG5hbWVgIGlucHV0IHByb3BlcnR5IG9mIHRoZSByYWRpbyBncm91cC5cbiAqXG4gKiBgYGBodG1sXG4gKiA8bmItcmFkaW8tZ3JvdXAgbmFtZT1cIm15LXJhZGlvLWdyb3VwXCI+XG4gKiAgIC4uLlxuICogPC9uYi1yYWRpby1ncm91cD5cbiAqIGBgYFxuICpcbiAqIFlvdSBjYW4gY2hhbmdlIHJhZGlvIGdyb3VwIHN0YXR1cyBieSBzZXR0aW5nIGBzdGF0dXNgIGlucHV0LlxuICogQHN0YWNrZWQtZXhhbXBsZShTdGF0dXNlcywgcmFkaW8vcmFkaW8tc3RhdHVzZXMuY29tcG9uZW50KVxuICpcbiAqIEFsc28sIHlvdSBjYW4gZGlzYWJsZSB0aGUgd2hvbGUgZ3JvdXAgdXNpbmcgYGRpc2FibGVkYCBhdHRyaWJ1dGUuXG4gKiBAc3RhY2tlZC1leGFtcGxlKERpc2FibGVkIGdyb3VwLCByYWRpby9yYWRpby1kaXNhYmxlZC1ncm91cC5jb21wb25lbnQpXG4gKlxuICogUmFkaW8gZ3JvdXAgc3VwcG9ydHMgYG5nTW9kZWxgIGFuZCByZWFjdGl2ZSBmb3JtczpcbiAqIEBzdGFja2VkLWV4YW1wbGUoUmFkaW8gR3JvdXAgd2l0aCBmb3JtcywgcmFkaW8vcmFkaW8tZm9ybS5jb21wb25lbnQpXG4gKlxuICogKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLXJhZGlvLWdyb3VwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1yYWRpb1wiPjwvbmctY29udGVudD5gLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5iUmFkaW9Hcm91cENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJSYWRpb0dyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJvdGVjdGVkIG9uQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHt9O1xuICBwcm90ZWN0ZWQgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlcygpO1xuICB9XG4gIHByb3RlY3RlZCBfdmFsdWU6IGFueTtcblxuICBASW5wdXQoKVxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMudXBkYXRlTmFtZXMoKTtcbiAgfVxuICBwcm90ZWN0ZWQgX25hbWU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29udmVydFRvQm9vbFByb3BlcnR5KGRpc2FibGVkKTtcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVkKCk7XG4gIH1cbiAgcHJvdGVjdGVkIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogUmFkaW8gYnV0dG9ucyBzdGF0dXMuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBhcmUgYHByaW1hcnlgIChkZWZhdWx0KSwgYHN1Y2Nlc3NgLCBgd2FybmluZ2AsIGBkYW5nZXJgLCBgaW5mb2AuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc3RhdHVzKCk6IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cbiAgc2V0IHN0YXR1cyh2YWx1ZTogTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cykge1xuICAgIGlmICh0aGlzLl9zdGF0dXMgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdHVzKCk7XG4gICAgfVxuICB9XG4gIHByb3RlY3RlZCBfc3RhdHVzOiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzID0gJ2Jhc2ljJztcblxuICBAQ29udGVudENoaWxkcmVuKE5iUmFkaW9Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgcmFkaW9zOiBRdWVyeUxpc3Q8TmJSYWRpb0NvbXBvbmVudD47XG5cbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkLFxuICAgIEBJbmplY3QoTkJfRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudCxcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBJbiBjYXNlIG9wdGlvbiAnbmFtZScgaXNuJ3Qgc2V0IG9uIG5iLXJhZGlvIGNvbXBvbmVudCxcbiAgICAvLyB3ZSBuZWVkIHRvIHNldCBpdCdzIG5hbWUgcmlnaHQgYXdheSwgc28gaXQgd29uJ3Qgb3ZlcmxhcCB3aXRoIG9wdGlvbnNcbiAgICAvLyB3aXRob3V0IG5hbWVzIGZyb20gb3RoZXIgcmFkaW8gZ3JvdXBzLiBPdGhlcndpc2UgdGhleSBhbGwgd291bGQgaGF2ZVxuICAgIC8vIHNhbWUgbmFtZSBhbmQgd2lsbCBiZSBjb25zaWRlcmVkIGFzIG9wdGlvbnMgZnJvbSBvbmUgZ3JvdXAgc28gb25seSB0aGVcbiAgICAvLyBsYXN0IG9wdGlvbiB3aWxsIHN0YXkgc2VsZWN0ZWQuXG4gICAgdGhpcy51cGRhdGVOYW1lcygpO1xuXG4gICAgdGhpcy5yYWRpb3MuY2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh0aGlzLnJhZGlvcyksXG4gICAgICAgIC8vICdjaGFuZ2VzJyBlbWl0IGR1cmluZyBjaGFuZ2UgZGV0ZWN0aW9uIHJ1biBhbmQgd2UgY2FuJ3QgdXBkYXRlXG4gICAgICAgIC8vIG9wdGlvbiBwcm9wZXJ0aWVzIHJpZ2h0IG9mIHNpbmNlIHRoZXkgYWxyZWFkeSB3YXMgaW5pdGlhbGl6ZWQuXG4gICAgICAgIC8vIEluc3RlYWQgd2Ugc2NoZWR1bGUgbWljcm90YXNrIHRvIHVwZGF0ZSByYWRpb3MgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvblxuICAgICAgICAvLyBydW4gaXMgZmluaXNoZWQgYW5kIHRyaWdnZXIgb25lIG1vcmUgY2hhbmdlIGRldGVjdGlvbiBydW4uXG4gICAgICAgIHN3aXRjaE1hcCgocmFkaW9zOiBRdWVyeUxpc3Q8TmJSYWRpb0NvbXBvbmVudD4pID0+IGZyb20oUHJvbWlzZS5yZXNvbHZlKHJhZGlvcykpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUFuZFN1YnNjcmliZVRvUmFkaW9zKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVBbmRTdWJzY3JpYmVUb1JhZGlvcygpIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlRnJvbUNoZWNrZWRPcHRpb24oKTtcbiAgICB0aGlzLnVwZGF0ZU5hbWVzKCk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZXMoKTtcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVkKCk7XG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcbiAgICB0aGlzLnN1YnNjcmliZU9uUmFkaW9zVmFsdWVDaGFuZ2UoKTtcbiAgICB0aGlzLnN1YnNjcmliZU9uUmFkaW9zQmx1cigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZU5hbWVzKCkge1xuICAgIGlmICh0aGlzLnJhZGlvcykge1xuICAgICAgdGhpcy5yYWRpb3MuZm9yRWFjaCgocmFkaW86IE5iUmFkaW9Db21wb25lbnQpID0+IHJhZGlvLl9zZXROYW1lKHRoaXMubmFtZSkpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVWYWx1ZXMoKSB7XG4gICAgdGhpcy51cGRhdGVBbmRNYXJrRm9yQ2hlY2tSYWRpb3MoKHJhZGlvOiBOYlJhZGlvQ29tcG9uZW50KSA9PiByYWRpby5jaGVja2VkID0gcmFkaW8udmFsdWUgPT09IHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZURpc2FibGVkKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5kaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMudXBkYXRlQW5kTWFya0ZvckNoZWNrUmFkaW9zKChyYWRpbzogTmJSYWRpb0NvbXBvbmVudCkgPT4gcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlT25SYWRpb3NWYWx1ZUNoYW5nZSgpIHtcbiAgICBpZiAoIXRoaXMucmFkaW9zIHx8ICF0aGlzLnJhZGlvcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXJnZSguLi50aGlzLnJhZGlvcy5tYXAoKHJhZGlvOiBOYlJhZGlvQ29tcG9uZW50KSA9PiByYWRpby52YWx1ZUNoYW5nZSkpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKFxuICAgICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgdGhpcy5yYWRpb3MuY2hhbmdlcyxcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSQsXG4gICAgICAgICAgKSxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwcm9wYWdhdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVPblJhZGlvc0JsdXIoKSB7XG4gICAgY29uc3QgaGFzTm9SYWRpb3MgPSAhdGhpcy5yYWRpb3MgfHwgIXRoaXMucmFkaW9zLmxlbmd0aDtcbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgfHwgaGFzTm9SYWRpb3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBob3N0RWxlbWVudCA9IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBmcm9tRXZlbnQ8RXZlbnQ+KGhvc3RFbGVtZW50LCAnZm9jdXNpbicpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGhvc3RFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKSksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBtZXJnZShcbiAgICAgICAgICBmcm9tRXZlbnQ8RXZlbnQ+KHRoaXMuZG9jdW1lbnQsICdmb2N1c2luJyksXG4gICAgICAgICAgZnJvbUV2ZW50PEV2ZW50Pih0aGlzLmRvY3VtZW50LCAnY2xpY2snKSxcbiAgICAgICAgKSksXG4gICAgICAgIGZpbHRlcihldmVudCA9PiAhaG9zdEVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpKSxcbiAgICAgICAgdGFrZVVudGlsKFxuICAgICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgdGhpcy5yYWRpb3MuY2hhbmdlcyxcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSQsXG4gICAgICAgICAgKSxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlU3RhdHVzKCkge1xuICAgIHRoaXMudXBkYXRlQW5kTWFya0ZvckNoZWNrUmFkaW9zKChyYWRpbzogTmJSYWRpb0NvbXBvbmVudCkgPT4gcmFkaW8uc3RhdHVzID0gdGhpcy5zdGF0dXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUFuZE1hcmtGb3JDaGVja1JhZGlvcyh1cGRhdGVGbjogKE5iUmFkaW9Db21wb25lbnQpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yYWRpb3MpIHtcbiAgICAgIHRoaXMucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgIHVwZGF0ZUZuKHJhZGlvKTtcbiAgICAgICAgcmFkaW8uX21hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlRnJvbUNoZWNrZWRPcHRpb24oKSB7XG4gICAgY29uc3QgY2hlY2tlZFJhZGlvID0gdGhpcy5yYWRpb3MuZmluZCgocmFkaW8pID0+IHJhZGlvLmNoZWNrZWQpO1xuICAgIGNvbnN0IGlzVmFsdWVNaXNzaW5nID0gdGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMudmFsdWUgPT09IG51bGw7XG4gICAgaWYgKGNoZWNrZWRSYWRpbyAmJiBpc1ZhbHVlTWlzc2luZyAmJiBjaGVja2VkUmFkaW8udmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBjaGVja2VkUmFkaW8udmFsdWU7XG4gICAgfVxuICB9XG59XG4iXX0=