import { AfterContentInit, EventEmitter, OnDestroy, QueryList, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { NbBooleanInput } from '../helpers';
import { NbComponentOrCustomStatus } from '../component-status';
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
export declare class NbRadioGroupComponent implements AfterContentInit, OnDestroy, ControlValueAccessor {
    protected hostElement: ElementRef<HTMLElement>;
    protected platformId: any;
    protected document: any;
    protected destroy$: Subject<void>;
    protected onChange: (value: any) => void;
    protected onTouched: () => void;
    get value(): any;
    set value(value: any);
    protected _value: any;
    get name(): string;
    set name(name: string);
    protected _name: string;
    get disabled(): boolean;
    set disabled(disabled: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Radio buttons status.
     * Possible values are `primary` (default), `success`, `warning`, `danger`, `info`.
     */
    get status(): NbComponentOrCustomStatus;
    set status(value: NbComponentOrCustomStatus);
    protected _status: NbComponentOrCustomStatus;
    radios: QueryList<NbRadioComponent>;
    valueChange: EventEmitter<any>;
    constructor(hostElement: ElementRef<HTMLElement>, platformId: any, document: any);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    protected updateAndSubscribeToRadios(): void;
    protected updateNames(): void;
    protected updateValues(): void;
    protected updateDisabled(): void;
    protected subscribeOnRadiosValueChange(): void;
    protected propagateValue(value: any): void;
    protected subscribeOnRadiosBlur(): void;
    protected updateStatus(): void;
    protected updateAndMarkForCheckRadios(updateFn: (NbRadioComponent: any) => void): void;
    protected updateValueFromCheckedOption(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRadioGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbRadioGroupComponent, "nb-radio-group", never, { "value": "value"; "name": "name"; "disabled": "disabled"; "status": "status"; }, { "valueChange": "valueChange"; }, ["radios"], ["nb-radio"]>;
}
