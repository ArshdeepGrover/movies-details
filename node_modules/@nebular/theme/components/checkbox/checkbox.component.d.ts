/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, EventEmitter, Renderer2, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NbStatusService } from '../../services/status.service';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbBooleanInput } from '../helpers';
import * as i0 from "@angular/core";
/**
 * Styled checkbox component
 *
 * @stacked-example(Showcase, checkbox/checkbox-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCheckboxComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCheckboxModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Checkbox is available in multiple colors using `status` property:
 * @stacked-example(Colored Checkboxes, checkbox/checkbox-status.component)
 *
 * Indeterminate state is also supported:
 * @stacked-example(Indeterminate Checkbox, checkbox/checkbox-indeterminate.component)
 *
 * Checkbox can be disabled via `disabled` attribute.
 * @stacked-example(Disabled Checkbox, checkbox/checkbox-disabled.component)
 *
 * @styles
 *
 * checkbox-height:
 * checkbox-width:
 * checkbox-border-style:
 * checkbox-border-width:
 * checkbox-border-radius:
 * checkbox-outline-width:
 * checkbox-outline-color:
 * checkbox-text-font-family:
 * checkbox-text-font-size:
 * checkbox-text-font-weight:
 * checkbox-text-line-height:
 * checkbox-text-space:
 * checkbox-padding:
 * checkbox-focus-inset-shadow-length:
 * checkbox-basic-text-color:
 * checkbox-basic-background-color:
 * checkbox-basic-border-color:
 * checkbox-basic-checked-background-color:
 * checkbox-basic-checked-border-color:
 * checkbox-basic-checked-checkmark-color:
 * checkbox-basic-indeterminate-background-color:
 * checkbox-basic-indeterminate-border-color:
 * checkbox-basic-indeterminate-checkmark-color:
 * checkbox-basic-focus-background-color:
 * checkbox-basic-focus-border-color:
 * checkbox-basic-focus-checked-background-color:
 * checkbox-basic-focus-checked-border-color:
 * checkbox-basic-hover-background-color:
 * checkbox-basic-hover-border-color:
 * checkbox-basic-hover-checked-background-color:
 * checkbox-basic-hover-checked-border-color:
 * checkbox-basic-active-background-color:
 * checkbox-basic-active-border-color:
 * checkbox-basic-active-checked-background-color:
 * checkbox-basic-active-checked-border-color:
 * checkbox-basic-disabled-background-color:
 * checkbox-basic-disabled-border-color:
 * checkbox-basic-disabled-checkmark-color:
 * checkbox-basic-disabled-text-color:
 * checkbox-basic-disabled-checked-background-color:
 * checkbox-primary-text-color:
 * checkbox-primary-background-color:
 * checkbox-primary-border-color:
 * checkbox-primary-checked-background-color:
 * checkbox-primary-checked-border-color:
 * checkbox-primary-checked-checkmark-color:
 * checkbox-primary-indeterminate-background-color:
 * checkbox-primary-indeterminate-border-color:
 * checkbox-primary-indeterminate-checkmark-color:
 * checkbox-primary-focus-background-color:
 * checkbox-primary-focus-border-color:
 * checkbox-primary-focus-checked-background-color:
 * checkbox-primary-focus-checked-border-color:
 * checkbox-primary-hover-background-color:
 * checkbox-primary-hover-border-color:
 * checkbox-primary-hover-checked-background-color:
 * checkbox-primary-hover-checked-border-color:
 * checkbox-primary-active-background-color:
 * checkbox-primary-active-border-color:
 * checkbox-primary-active-checked-background-color:
 * checkbox-primary-active-checked-border-color:
 * checkbox-primary-disabled-background-color:
 * checkbox-primary-disabled-border-color:
 * checkbox-primary-disabled-checkmark-color:
 * checkbox-primary-disabled-text-color:
 * checkbox-primary-disabled-checked-background-color:
 * checkbox-success-text-color:
 * checkbox-success-background-color:
 * checkbox-success-border-color:
 * checkbox-success-checked-background-color:
 * checkbox-success-checked-border-color:
 * checkbox-success-checked-checkmark-color:
 * checkbox-success-indeterminate-background-color:
 * checkbox-success-indeterminate-border-color:
 * checkbox-success-indeterminate-checkmark-color:
 * checkbox-success-focus-background-color:
 * checkbox-success-focus-border-color:
 * checkbox-success-focus-checked-background-color:
 * checkbox-success-focus-checked-border-color:
 * checkbox-success-hover-background-color:
 * checkbox-success-hover-border-color:
 * checkbox-success-hover-checked-background-color:
 * checkbox-success-hover-checked-border-color:
 * checkbox-success-active-background-color:
 * checkbox-success-active-border-color:
 * checkbox-success-active-checked-background-color:
 * checkbox-success-active-checked-border-color:
 * checkbox-success-disabled-background-color:
 * checkbox-success-disabled-border-color:
 * checkbox-success-disabled-checkmark-color:
 * checkbox-success-disabled-text-color:
 * checkbox-success-disabled-checked-background-color:
 * checkbox-info-text-color:
 * checkbox-info-background-color:
 * checkbox-info-border-color:
 * checkbox-info-checked-background-color:
 * checkbox-info-checked-border-color:
 * checkbox-info-checked-checkmark-color:
 * checkbox-info-indeterminate-background-color:
 * checkbox-info-indeterminate-border-color:
 * checkbox-info-indeterminate-checkmark-color:
 * checkbox-info-focus-background-color:
 * checkbox-info-focus-border-color:
 * checkbox-info-focus-checked-background-color:
 * checkbox-info-focus-checked-border-color:
 * checkbox-info-hover-background-color:
 * checkbox-info-hover-border-color:
 * checkbox-info-hover-checked-background-color:
 * checkbox-info-hover-checked-border-color:
 * checkbox-info-active-background-color:
 * checkbox-info-active-border-color:
 * checkbox-info-active-checked-background-color:
 * checkbox-info-active-checked-border-color:
 * checkbox-info-disabled-background-color:
 * checkbox-info-disabled-border-color:
 * checkbox-info-disabled-checkmark-color:
 * checkbox-info-disabled-text-color:
 * checkbox-info-disabled-checked-background-color:
 * checkbox-warning-text-color:
 * checkbox-warning-background-color:
 * checkbox-warning-border-color:
 * checkbox-warning-checked-background-color:
 * checkbox-warning-checked-border-color:
 * checkbox-warning-checked-checkmark-color:
 * checkbox-warning-indeterminate-background-color:
 * checkbox-warning-indeterminate-border-color:
 * checkbox-warning-indeterminate-checkmark-color:
 * checkbox-warning-focus-background-color:
 * checkbox-warning-focus-border-color:
 * checkbox-warning-focus-checked-background-color:
 * checkbox-warning-focus-checked-border-color:
 * checkbox-warning-hover-background-color:
 * checkbox-warning-hover-border-color:
 * checkbox-warning-hover-checked-background-color:
 * checkbox-warning-hover-checked-border-color:
 * checkbox-warning-active-background-color:
 * checkbox-warning-active-border-color:
 * checkbox-warning-active-checked-background-color:
 * checkbox-warning-active-checked-border-color:
 * checkbox-warning-disabled-background-color:
 * checkbox-warning-disabled-border-color:
 * checkbox-warning-disabled-checkmark-color:
 * checkbox-warning-disabled-text-color:
 * checkbox-warning-disabled-checked-background-color:
 * checkbox-danger-text-color:
 * checkbox-danger-background-color:
 * checkbox-danger-border-color:
 * checkbox-danger-checked-background-color:
 * checkbox-danger-checked-border-color:
 * checkbox-danger-checked-checkmark-color:
 * checkbox-danger-indeterminate-background-color:
 * checkbox-danger-indeterminate-border-color:
 * checkbox-danger-indeterminate-checkmark-color:
 * checkbox-danger-focus-background-color:
 * checkbox-danger-focus-border-color:
 * checkbox-danger-focus-checked-background-color:
 * checkbox-danger-focus-checked-border-color:
 * checkbox-danger-hover-background-color:
 * checkbox-danger-hover-border-color:
 * checkbox-danger-hover-checked-background-color:
 * checkbox-danger-hover-checked-border-color:
 * checkbox-danger-active-background-color:
 * checkbox-danger-active-border-color:
 * checkbox-danger-active-checked-background-color:
 * checkbox-danger-active-checked-border-color:
 * checkbox-danger-disabled-background-color:
 * checkbox-danger-disabled-border-color:
 * checkbox-danger-disabled-checkmark-color:
 * checkbox-danger-disabled-text-color:
 * checkbox-danger-disabled-checked-background-color:
 * checkbox-control-text-color:
 * checkbox-control-background-color:
 * checkbox-control-border-color:
 * checkbox-control-checked-background-color:
 * checkbox-control-checked-border-color:
 * checkbox-control-checked-checkmark-color:
 * checkbox-control-indeterminate-background-color:
 * checkbox-control-indeterminate-border-color:
 * checkbox-control-indeterminate-checkmark-color:
 * checkbox-control-focus-background-color:
 * checkbox-control-focus-border-color:
 * checkbox-control-focus-checked-background-color:
 * checkbox-control-focus-checked-border-color:
 * checkbox-control-hover-background-color:
 * checkbox-control-hover-border-color:
 * checkbox-control-hover-checked-background-color:
 * checkbox-control-hover-checked-border-color:
 * checkbox-control-active-background-color:
 * checkbox-control-active-border-color:
 * checkbox-control-active-checked-background-color:
 * checkbox-control-active-checked-border-color:
 * checkbox-control-disabled-background-color:
 * checkbox-control-disabled-border-color:
 * checkbox-control-disabled-checkmark-color:
 * checkbox-control-disabled-text-color:
 * checkbox-control-disabled-checked-background-color:
 */
export declare class NbCheckboxComponent implements AfterViewInit, ControlValueAccessor {
    private changeDetector;
    private renderer;
    private hostElement;
    private zone;
    private statusService;
    onChange: any;
    onTouched: any;
    get checked(): boolean;
    set checked(value: boolean);
    private _checked;
    static ngAcceptInputType_checked: NbBooleanInput;
    /**
     * Controls input disabled state
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Checkbox status.
     * Possible values are: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`.
     */
    status: NbComponentOrCustomStatus;
    /**
     * Controls checkbox indeterminate state
     */
    get indeterminate(): boolean;
    set indeterminate(value: boolean);
    private _indeterminate;
    static ngAcceptInputType_indeterminate: NbBooleanInput;
    /**
     * Output when checked state is changed by a user
     * @type EventEmitter<boolean>
     */
    checkedChange: EventEmitter<boolean>;
    get primary(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get info(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get additionalClasses(): string[];
    constructor(changeDetector: ChangeDetectorRef, renderer: Renderer2, hostElement: ElementRef<HTMLElement>, zone: NgZone, statusService: NbStatusService);
    ngAfterViewInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(val: any): void;
    setDisabledState(val: boolean): void;
    setTouched(): void;
    updateValueAndIndeterminate(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCheckboxComponent, "nb-checkbox", never, { "checked": "checked"; "disabled": "disabled"; "status": "status"; "indeterminate": "indeterminate"; }, { "checkedChange": "checkedChange"; }, never, ["*"]>;
}
