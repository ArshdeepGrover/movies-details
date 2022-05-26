import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, AfterViewInit, NgZone, Renderer2 } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NbBooleanInput } from '../helpers';
import { NbFocusableOption } from '../cdk/a11y/focus-key-manager';
import { NbHighlightableOption } from '../cdk/a11y/descendant-key-manager';
import { NbSelectComponent } from '../select/select.component';
import * as i0 from "@angular/core";
/**
 * NbOptionComponent
 *
 * @styles
 *
 * option-background-color:
 * option-text-color:
 * option-text-font-family:
 * option-hover-background-color:
 * option-hover-text-color:
 * option-active-background-color:
 * option-active-text-color:
 * option-focus-background-color:
 * option-focus-text-color:
 * option-selected-background-color:
 * option-selected-text-color:
 * option-selected-hover-background-color:
 * option-selected-hover-text-color:
 * option-selected-active-background-color:
 * option-selected-active-text-color:
 * option-selected-focus-background-color:
 * option-selected-focus-text-color:
 * option-disabled-background-color:
 * option-disabled-text-color:
 * option-tiny-text-font-size:
 * option-tiny-text-font-weight:
 * option-tiny-text-line-height:
 * option-tiny-padding:
 * option-small-text-font-size:
 * option-small-text-font-weight:
 * option-small-text-line-height:
 * option-small-padding:
 * option-medium-text-font-size:
 * option-medium-text-font-weight:
 * option-medium-text-line-height:
 * option-medium-padding:
 * option-large-text-font-size:
 * option-large-text-font-weight:
 * option-large-text-line-height:
 * option-large-padding:
 * option-giant-text-font-size:
 * option-giant-text-font-weight:
 * option-giant-text-line-height:
 * option-giant-padding:
 **/
export declare class NbOptionComponent<T = any> implements OnDestroy, AfterViewInit, NbFocusableOption, NbHighlightableOption {
    protected elementRef: ElementRef;
    protected cd: ChangeDetectorRef;
    protected zone: NgZone;
    protected renderer: Renderer2;
    protected disabledByGroup: boolean;
    /**
     * Option value that will be fired on selection.
     * */
    value: T;
    get disabled(): boolean;
    set disabled(value: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Fires value when option selection change.
     * */
    selectionChange: EventEmitter<NbOptionComponent<T>>;
    /**
     * Fires when option clicked
     */
    protected click$: Subject<NbOptionComponent<T>>;
    get click(): Observable<NbOptionComponent<T>>;
    selected: boolean;
    protected parent: NbSelectComponent;
    protected alive: boolean;
    /**
     * Component scoped id for aria attributes.
     * */
    id: string;
    constructor(parent: any, elementRef: ElementRef, cd: ChangeDetectorRef, zone: NgZone, renderer: Renderer2);
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    /**
     * Determines should we render checkbox.
     * */
    get withCheckbox(): boolean;
    get content(): any;
    get multiple(): boolean;
    get selectedClass(): boolean;
    get disabledAttribute(): '' | null;
    get tabindex(): string;
    get activeClass(): boolean;
    protected _active: boolean;
    onClick(event: any): void;
    select(): void;
    deselect(): void;
    /**
     * Sets disabled by group state and marks component for check.
     */
    setDisabledByGroupState(disabled: boolean): void;
    protected setSelection(selected: boolean): void;
    focus(): void;
    getLabel(): string;
    setActiveStyles(): void;
    setInactiveStyles(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOptionComponent<any>, [{ optional: true; }, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbOptionComponent<any>, "nb-option", never, { "value": "value"; "disabled": "disabled"; }, { "selectionChange": "selectionChange"; }, never, ["*"]>;
}
