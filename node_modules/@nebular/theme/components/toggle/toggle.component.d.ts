/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, OnInit, EventEmitter, OnDestroy, Renderer2, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NbStatusService } from '../../services/status.service';
import { NbLayoutDirectionService } from '../../services/direction.service';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbBooleanInput } from '../helpers';
import * as i0 from "@angular/core";
/**
 * Toggle is a control representing `on` and `off` states.
 *
 * @stacked-example(Showcase, toggle/toggle-showcase.component)
 *
 * ### Installation
 *
 * Import `NbToggleComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbToggleModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Toggle may have one of the following statuses: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`
 *
 * @stacked-example(Toggle status, toggle/toggle-status.component)
 *
 * Toggle can be disabled via `disabled` input.
 *
 * @stacked-example(Disabled Toggles, toggle/toggle-disabled.component)
 *
 * Toggle may have a label with following positions: `left`, `right`, `start`, `end` (default)
 *
 * @stacked-example(Toggles With Labels, toggle/toggle-label-position.component.ts)
 *
 * You can set control state via `checked` binding:
 *
 * ```html
 * <nb-toggle [(checked)]="checked"></nb-toggle>
 * ```
 *
 * Or it could be set via reactive forms or ngModel bindings:
 *
 * @stacked-example(Toggle form binding, toggle/toggle-form.component)
 *
 * @styles
 *
 * toggle-height:
 * toggle-width:
 * toggle-border-width:
 * toggle-border-radius:
 * toggle-outline-width:
 * toggle-outline-color:
 * toggle-switcher-size:
 * toggle-switcher-icon-size:
 * toggle-text-font-family:
 * toggle-text-font-size:
 * toggle-text-font-weight:
 * toggle-text-line-height:
 * toggle-cursor:
 * toggle-disabled-cursor:
 * toggle-basic-text-color:
 * toggle-basic-background-color:
 * toggle-basic-border-color:
 * toggle-basic-checked-background-color:
 * toggle-basic-checked-border-color:
 * toggle-basic-checked-switcher-background-color:
 * toggle-basic-checked-switcher-checkmark-color:
 * toggle-basic-focus-background-color:
 * toggle-basic-focus-border-color:
 * toggle-basic-focus-checked-background-color:
 * toggle-basic-focus-checked-border-color:
 * toggle-basic-hover-background-color:
 * toggle-basic-hover-border-color:
 * toggle-basic-hover-checked-background-color:
 * toggle-basic-hover-checked-border-color:
 * toggle-basic-active-background-color:
 * toggle-basic-active-border-color:
 * toggle-basic-active-checked-background-color:
 * toggle-basic-active-checked-border-color:
 * toggle-basic-disabled-background-color:
 * toggle-basic-disabled-border-color:
 * toggle-basic-disabled-switcher-background-color:
 * toggle-basic-disabled-checked-switcher-checkmark-color:
 * toggle-basic-disabled-text-color:
 * toggle-primary-text-color:
 * toggle-primary-background-color:
 * toggle-primary-border-color:
 * toggle-primary-checked-background-color:
 * toggle-primary-checked-border-color:
 * toggle-primary-checked-switcher-background-color:
 * toggle-primary-checked-switcher-checkmark-color:
 * toggle-primary-focus-background-color:
 * toggle-primary-focus-border-color:
 * toggle-primary-focus-checked-background-color:
 * toggle-primary-focus-checked-border-color:
 * toggle-primary-hover-background-color:
 * toggle-primary-hover-border-color:
 * toggle-primary-hover-checked-background-color:
 * toggle-primary-hover-checked-border-color:
 * toggle-primary-active-background-color:
 * toggle-primary-active-border-color:
 * toggle-primary-active-checked-background-color:
 * toggle-primary-active-checked-border-color:
 * toggle-primary-disabled-background-color:
 * toggle-primary-disabled-border-color:
 * toggle-primary-disabled-switcher-background-color:
 * toggle-primary-disabled-checked-switcher-checkmark-color:
 * toggle-primary-disabled-text-color:
 * toggle-success-text-color:
 * toggle-success-background-color:
 * toggle-success-border-color:
 * toggle-success-checked-background-color:
 * toggle-success-checked-border-color:
 * toggle-success-checked-switcher-background-color:
 * toggle-success-checked-switcher-checkmark-color:
 * toggle-success-focus-background-color:
 * toggle-success-focus-border-color:
 * toggle-success-focus-checked-background-color:
 * toggle-success-focus-checked-border-color:
 * toggle-success-hover-background-color:
 * toggle-success-hover-border-color:
 * toggle-success-hover-checked-background-color:
 * toggle-success-hover-checked-border-color:
 * toggle-success-active-background-color:
 * toggle-success-active-border-color:
 * toggle-success-active-checked-background-color:
 * toggle-success-active-checked-border-color:
 * toggle-success-disabled-background-color:
 * toggle-success-disabled-border-color:
 * toggle-success-disabled-switcher-background-color:
 * toggle-success-disabled-checked-switcher-checkmark-color:
 * toggle-success-disabled-text-color:
 * toggle-info-text-color:
 * toggle-info-background-color:
 * toggle-info-border-color:
 * toggle-info-checked-background-color:
 * toggle-info-checked-border-color:
 * toggle-info-checked-switcher-background-color:
 * toggle-info-checked-switcher-checkmark-color:
 * toggle-info-focus-background-color:
 * toggle-info-focus-border-color:
 * toggle-info-focus-checked-background-color:
 * toggle-info-focus-checked-border-color:
 * toggle-info-hover-background-color:
 * toggle-info-hover-border-color:
 * toggle-info-hover-checked-background-color:
 * toggle-info-hover-checked-border-color:
 * toggle-info-active-background-color:
 * toggle-info-active-border-color:
 * toggle-info-active-checked-background-color:
 * toggle-info-active-checked-border-color:
 * toggle-info-disabled-background-color:
 * toggle-info-disabled-border-color:
 * toggle-info-disabled-switcher-background-color:
 * toggle-info-disabled-checked-switcher-checkmark-color:
 * toggle-info-disabled-text-color:
 * toggle-warning-text-color:
 * toggle-warning-background-color:
 * toggle-warning-border-color:
 * toggle-warning-checked-background-color:
 * toggle-warning-checked-border-color:
 * toggle-warning-checked-switcher-background-color:
 * toggle-warning-checked-switcher-checkmark-color:
 * toggle-warning-focus-background-color:
 * toggle-warning-focus-border-color:
 * toggle-warning-focus-checked-background-color:
 * toggle-warning-focus-checked-border-color:
 * toggle-warning-hover-background-color:
 * toggle-warning-hover-border-color:
 * toggle-warning-hover-checked-background-color:
 * toggle-warning-hover-checked-border-color:
 * toggle-warning-active-background-color:
 * toggle-warning-active-border-color:
 * toggle-warning-active-checked-background-color:
 * toggle-warning-active-checked-border-color:
 * toggle-warning-disabled-background-color:
 * toggle-warning-disabled-border-color:
 * toggle-warning-disabled-switcher-background-color:
 * toggle-warning-disabled-checked-switcher-checkmark-color:
 * toggle-warning-disabled-text-color:
 * toggle-danger-text-color:
 * toggle-danger-background-color:
 * toggle-danger-border-color:
 * toggle-danger-checked-background-color:
 * toggle-danger-checked-border-color:
 * toggle-danger-checked-switcher-background-color:
 * toggle-danger-checked-switcher-checkmark-color:
 * toggle-danger-focus-background-color:
 * toggle-danger-focus-border-color:
 * toggle-danger-focus-checked-background-color:
 * toggle-danger-focus-checked-border-color:
 * toggle-danger-hover-background-color:
 * toggle-danger-hover-border-color:
 * toggle-danger-hover-checked-background-color:
 * toggle-danger-hover-checked-border-color:
 * toggle-danger-active-background-color:
 * toggle-danger-active-border-color:
 * toggle-danger-active-checked-background-color:
 * toggle-danger-active-checked-border-color:
 * toggle-danger-disabled-background-color:
 * toggle-danger-disabled-border-color:
 * toggle-danger-disabled-switcher-background-color:
 * toggle-danger-disabled-checked-switcher-checkmark-color:
 * toggle-danger-disabled-text-color:
 * toggle-control-text-color:
 * toggle-control-background-color:
 * toggle-control-border-color:
 * toggle-control-checked-background-color:
 * toggle-control-checked-border-color:
 * toggle-control-checked-switcher-background-color:
 * toggle-control-checked-switcher-checkmark-color:
 * toggle-control-focus-background-color:
 * toggle-control-focus-border-color:
 * toggle-control-focus-checked-background-color:
 * toggle-control-focus-checked-border-color:
 * toggle-control-hover-background-color:
 * toggle-control-hover-border-color:
 * toggle-control-hover-checked-background-color:
 * toggle-control-hover-checked-border-color:
 * toggle-control-active-background-color:
 * toggle-control-active-border-color:
 * toggle-control-active-checked-background-color:
 * toggle-control-active-checked-border-color:
 * toggle-control-disabled-background-color:
 * toggle-control-disabled-border-color:
 * toggle-control-disabled-switcher-background-color:
 * toggle-control-disabled-checked-switcher-checkmark-color:
 * toggle-control-disabled-text-color:
 */
export declare class NbToggleComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
    private changeDetector;
    private layoutDirection;
    private renderer;
    private hostElement;
    private zone;
    protected statusService: NbStatusService;
    onChange: any;
    onTouched: any;
    private destroy$;
    /**
     * Toggle checked
     * @type {boolean}
     */
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
     * Toggle status.
     * Possible values are: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`.
     */
    status: NbComponentOrCustomStatus;
    /**
     * Toggle label position.
     * Possible values are: `left`, `right`, `start`, `end` (default)
     */
    labelPosition: 'left' | 'right' | 'start' | 'end';
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
    get labelLeft(): boolean;
    get labelRight(): boolean;
    get labelStart(): boolean;
    get labelEnd(): boolean;
    constructor(changeDetector: ChangeDetectorRef, layoutDirection: NbLayoutDirectionService, renderer: Renderer2, hostElement: ElementRef<HTMLElement>, zone: NgZone, statusService: NbStatusService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    checkState(): string;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(val: any): void;
    setDisabledState(val: boolean): void;
    updateValue(event: Event): void;
    onInputClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbToggleComponent, "nb-toggle", never, { "checked": "checked"; "disabled": "disabled"; "status": "status"; "labelPosition": "labelPosition"; }, { "checkedChange": "checkedChange"; }, never, ["*"]>;
}
