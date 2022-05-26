import { ChangeDetectorRef, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { NbStatusService } from '../../services/status.service';
import { NbBooleanInput } from '../helpers';
import { NbComponentOrCustomStatus } from '../component-status';
import * as i0 from "@angular/core";
/**
 * The `NbRadioComponent` provides the same functionality as native `<input type="radio">`
 * with Nebular styles and animations.
 *
 * @stacked-example(Showcase, radio/radio-showcase.component)
 *
 * ### Installation
 *
 * Import `NbRadioModule` to your feature module.
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbRadioModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * Radio buttons should be wrapped in `nb-radio-group` to provide form bindings.
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * You can disable some radios in the group using a `disabled` attribute.
 *
 * @stacked-example(Disabled, radio/radio-disabled.component)
 *
 *
 * @styles
 *
 * radio-width:
 * radio-height:
 * radio-border-style:
 * radio-border-width:
 * radio-text-font-family:
 * radio-text-font-size:
 * radio-text-font-weight:
 * radio-text-line-height:
 * radio-outline-color:
 * radio-outline-width:
 * radio-basic-text-color:
 * radio-basic-border-color:
 * radio-basic-background-color:
 * radio-basic-checked-background-color:
 * radio-basic-checked-border-color:
 * radio-basic-inner-circle-color:
 * radio-basic-focus-border-color:
 * radio-basic-focus-inner-circle-color:
 * radio-basic-hover-background-color:
 * radio-basic-hover-border-color:
 * radio-basic-hover-inner-circle-color:
 * radio-basic-hover-checked-background-color:
 * radio-basic-active-border-color:
 * radio-basic-active-inner-circle-color:
 * radio-basic-disabled-background-color:
 * radio-basic-disabled-border-color:
 * radio-basic-disabled-text-color:
 * radio-basic-disabled-checked-background-color:
 * radio-basic-disabled-checked-border-color:
 * radio-basic-disabled-checked-inner-circle-color:
 * radio-primary-text-color:
 * radio-primary-border-color:
 * radio-primary-background-color:
 * radio-primary-checked-background-color:
 * radio-primary-checked-border-color:
 * radio-primary-inner-circle-color:
 * radio-primary-focus-border-color:
 * radio-primary-focus-inner-circle-color:
 * radio-primary-hover-background-color:
 * radio-primary-hover-border-color:
 * radio-primary-hover-inner-circle-color:
 * radio-primary-hover-checked-background-color:
 * radio-primary-active-border-color:
 * radio-primary-active-inner-circle-color:
 * radio-primary-disabled-background-color:
 * radio-primary-disabled-border-color:
 * radio-primary-disabled-text-color:
 * radio-primary-disabled-checked-background-color:
 * radio-primary-disabled-checked-border-color:
 * radio-primary-disabled-checked-inner-circle-color:
 * radio-success-text-color:
 * radio-success-border-color:
 * radio-success-background-color:
 * radio-success-checked-background-color:
 * radio-success-checked-border-color:
 * radio-success-inner-circle-color:
 * radio-success-focus-border-color:
 * radio-success-focus-inner-circle-color:
 * radio-success-hover-background-color:
 * radio-success-hover-border-color:
 * radio-success-hover-inner-circle-color:
 * radio-success-hover-checked-background-color:
 * radio-success-active-border-color:
 * radio-success-active-inner-circle-color:
 * radio-success-disabled-background-color:
 * radio-success-disabled-border-color:
 * radio-success-disabled-text-color:
 * radio-success-disabled-checked-background-color:
 * radio-success-disabled-checked-border-color:
 * radio-success-disabled-checked-inner-circle-color:
 * radio-info-text-color:
 * radio-info-border-color:
 * radio-info-background-color:
 * radio-info-checked-background-color:
 * radio-info-checked-border-color:
 * radio-info-inner-circle-color:
 * radio-info-focus-border-color:
 * radio-info-focus-inner-circle-color:
 * radio-info-hover-background-color:
 * radio-info-hover-border-color:
 * radio-info-hover-inner-circle-color:
 * radio-info-hover-checked-background-color:
 * radio-info-active-border-color:
 * radio-info-active-inner-circle-color:
 * radio-info-disabled-background-color:
 * radio-info-disabled-border-color:
 * radio-info-disabled-text-color:
 * radio-info-disabled-checked-background-color:
 * radio-info-disabled-checked-border-color:
 * radio-info-disabled-checked-inner-circle-color:
 * radio-warning-text-color:
 * radio-warning-border-color:
 * radio-warning-background-color:
 * radio-warning-checked-background-color:
 * radio-warning-checked-border-color:
 * radio-warning-inner-circle-color:
 * radio-warning-focus-border-color:
 * radio-warning-focus-inner-circle-color:
 * radio-warning-hover-background-color:
 * radio-warning-hover-border-color:
 * radio-warning-hover-inner-circle-color:
 * radio-warning-hover-checked-background-color:
 * radio-warning-active-border-color:
 * radio-warning-active-inner-circle-color:
 * radio-warning-disabled-background-color:
 * radio-warning-disabled-border-color:
 * radio-warning-disabled-text-color:
 * radio-warning-disabled-checked-background-color:
 * radio-warning-disabled-checked-border-color:
 * radio-warning-disabled-checked-inner-circle-color:
 * radio-danger-text-color:
 * radio-danger-border-color:
 * radio-danger-background-color:
 * radio-danger-checked-background-color:
 * radio-danger-checked-border-color:
 * radio-danger-inner-circle-color:
 * radio-danger-focus-border-color:
 * radio-danger-focus-inner-circle-color:
 * radio-danger-hover-background-color:
 * radio-danger-hover-border-color:
 * radio-danger-hover-inner-circle-color:
 * radio-danger-hover-checked-background-color:
 * radio-danger-active-border-color:
 * radio-danger-active-inner-circle-color:
 * radio-danger-disabled-background-color:
 * radio-danger-disabled-border-color:
 * radio-danger-disabled-text-color:
 * radio-danger-disabled-checked-background-color:
 * radio-danger-disabled-checked-border-color:
 * radio-danger-disabled-checked-inner-circle-color:
 * radio-control-text-color:
 * radio-control-background-color:
 * radio-control-border-color:
 * radio-control-checked-background-color:
 * radio-control-checked-border-color:
 * radio-control-inner-circle-color:
 * radio-control-focus-border-color:
 * radio-control-focus-inner-circle-color:
 * radio-control-hover-background-color:
 * radio-control-hover-border-color:
 * radio-control-hover-inner-circle-color:
 * radio-control-hover-checked-background-color:
 * radio-control-active-border-color:
 * radio-control-active-inner-circle-color:
 * radio-control-disabled-background-color:
 * radio-control-disabled-border-color:
 * radio-control-disabled-text-color:
 * radio-control-disabled-checked-background-color:
 * radio-control-disabled-checked-border-color:
 * radio-control-disabled-checked-inner-circle-color:
 * */
export declare class NbRadioComponent {
    protected cd: ChangeDetectorRef;
    protected renderer: Renderer2;
    protected statusService: NbStatusService;
    get name(): string;
    set name(value: string);
    private _name;
    get checked(): boolean;
    set checked(value: boolean);
    private _checked;
    static ngAcceptInputType_checked: NbBooleanInput;
    get value(): any;
    set value(value: any);
    private _value;
    get disabled(): boolean;
    set disabled(disabled: boolean);
    private _disabled;
    static ngAcceptInputType_disabled: NbBooleanInput;
    status: NbComponentOrCustomStatus;
    valueChange: EventEmitter<any>;
    blur: EventEmitter<void>;
    input: ElementRef<HTMLInputElement>;
    constructor(cd: ChangeDetectorRef, renderer: Renderer2, statusService: NbStatusService);
    get isPrimary(): boolean;
    get isSuccess(): boolean;
    get isWarning(): boolean;
    get isDanger(): boolean;
    get isInfo(): boolean;
    get isBasic(): boolean;
    get isControl(): boolean;
    get additionalClasses(): string[];
    onChange(event: Event): void;
    onClick(event: Event): void;
    _markForCheck(): void;
    _setName(name: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbRadioComponent, "nb-radio", never, { "name": "name"; "checked": "checked"; "value": "value"; "disabled": "disabled"; "status": "status"; }, { "valueChange": "valueChange"; "blur": "blur"; }, never, ["*"]>;
}
