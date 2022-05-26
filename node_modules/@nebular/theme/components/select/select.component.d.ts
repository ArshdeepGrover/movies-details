import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ComponentRef, ElementRef, EventEmitter, OnDestroy, QueryList, SimpleChanges, OnChanges, Renderer2, NgZone } from '@angular/core';
import { NgClass } from '@angular/common';
import { ControlValueAccessor } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { NbStatusService } from '../../services/status.service';
import { NbAdjustableConnectedPositionStrategy, NbPosition, NbPositionBuilderService } from '../cdk/overlay/overlay-position';
import { NbOverlayRef, NbPortalDirective, NbScrollStrategy } from '../cdk/overlay/mapping';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { NbTriggerStrategy, NbTriggerStrategyBuilderService } from '../cdk/overlay/overlay-trigger';
import { NbFocusKeyManager, NbFocusKeyManagerFactoryService } from '../cdk/a11y/focus-key-manager';
import { NbComponentSize } from '../component-size';
import { NbComponentShape } from '../component-shape';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbOptionComponent } from '../option/option.component';
import { NbBooleanInput } from '../helpers';
import { NbFormFieldControl, NbFormFieldControlConfig } from '../form-field/form-field-control';
import { NbFocusMonitor } from '../cdk/a11y/a11y.module';
import { NbScrollStrategies } from '../cdk/adapter/block-scroll-strategy-adapter';
import * as i0 from "@angular/core";
export declare type NbSelectCompareFunction<T = any> = (v1: any, v2: any) => boolean;
export declare type NbSelectAppearance = 'outline' | 'filled' | 'hero';
export declare class NbSelectLabelComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSelectLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSelectLabelComponent, "nb-select-label", never, {}, {}, never, ["*"]>;
}
export declare function nbSelectFormFieldControlConfigFactory(): NbFormFieldControlConfig;
/**
 * The `NbSelectComponent` provides a capability to select one of the passed items.
 *
 * @stacked-example(Showcase, select/select-showcase.component)
 *
 * ### Installation
 *
 * Import `NbSelectModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSelectModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use it as the multi-select control you have to mark it as `multiple`.
 * In this case, `nb-select` will work only with arrays - accept arrays and propagate arrays.
 *
 * @stacked-example(Multiple, select/select-multiple.component)
 *
 * Items without values will clean the selection. Both `null` and `undefined` values will also clean the selection.
 *
 * @stacked-example(Clean selection, select/select-clean.component)
 *
 * Select may be bounded using `selected` input:
 *
 * ```html
 * <nb-select [(selected)]="selected"></nb-selected>
 * ```
 *
 * Or you can bind control with form controls or ngModel:
 *
 * @stacked-example(Select form binding, select/select-form.component)
 *
 * Options in the select may be grouped using `nb-option-group` component.
 *
 * @stacked-example(Grouping, select/select-groups.component)
 *
 * Select may have a placeholder that will be shown when nothing selected:
 *
 * @stacked-example(Placeholder, select/select-placeholder.component)
 *
 * You can disable select, options and whole groups.
 *
 * @stacked-example(Disabled select, select/select-disabled.component)
 *
 * Also, the custom label may be provided in select.
 * This custom label will be used for instead placeholder when something selected.
 *
 * @stacked-example(Custom label, select/select-label.component)
 *
 * Default `nb-select` size is `medium` and status is `basic`.
 * Select is available in multiple colors using `status` property:
 *
 * @stacked-example(Select statuses, select/select-status.component)
 *
 * There are five select sizes:
 *
 * @stacked-example(Select sizes, select/select-sizes.component)
 *
 * And two additional style types - `filled`:
 *
 * @stacked-example(Filled select, select/select-filled.component)
 *
 * and `hero`:
 *
 * @stacked-example(Select colors, select/select-hero.component)
 *
 * Select is available in different shapes, that could be combined with the other properties:
 *
 * @stacked-example(Select shapes, select/select-shapes.component)
 *
 * By default, the component selects options whose values are strictly equal (`===`) with the select value.
 * To change such behavior, pass a custom comparator function to the `compareWith` attribute.
 *
 * @stacked-example(Select custom comparator, select/select-compare-with.component)
 *
 * You can add an additional icon to the select via the `nb-form-field` component:
 * @stacked-example(Select with icon, select/select-icon.component)
 *
 * @additional-example(Interactive, select/select-interactive.component)
 *
 * @styles
 *
 * select-cursor:
 * select-disabled-cursor:
 * select-min-width:
 * select-outline-width:
 * select-outline-color:
 * select-icon-offset:
 * select-text-font-family:
 * select-placeholder-text-font-family:
 * select-tiny-text-font-size:
 * select-tiny-text-font-weight:
 * select-tiny-text-line-height:
 * select-tiny-placeholder-text-font-size:
 * select-tiny-placeholder-text-font-weight:
 * select-tiny-max-width:
 * select-small-text-font-size:
 * select-small-text-font-weight:
 * select-small-text-line-height:
 * select-small-placeholder-text-font-size:
 * select-small-placeholder-text-font-weight:
 * select-small-max-width:
 * select-medium-text-font-size:
 * select-medium-text-font-weight:
 * select-medium-text-line-height:
 * select-medium-placeholder-text-font-size:
 * select-medium-placeholder-text-font-weight:
 * select-medium-max-width:
 * select-large-text-font-size:
 * select-large-text-font-weight:
 * select-large-text-line-height:
 * select-large-placeholder-text-font-size:
 * select-large-placeholder-text-font-weight:
 * select-large-max-width:
 * select-giant-text-font-size:
 * select-giant-text-font-weight:
 * select-giant-text-line-height:
 * select-giant-placeholder-text-font-size:
 * select-giant-placeholder-text-font-weight:
 * select-giant-max-width:
 * select-rectangle-border-radius:
 * select-semi-round-border-radius:
 * select-round-border-radius:
 * select-outline-border-style:
 * select-outline-border-width:
 * select-outline-tiny-padding:
 * select-outline-small-padding:
 * select-outline-medium-padding:
 * select-outline-large-padding:
 * select-outline-giant-padding:
 * select-outline-basic-icon-color:
 * select-outline-basic-text-color:
 * select-outline-basic-placeholder-text-color:
 * select-outline-basic-background-color:
 * select-outline-basic-border-color:
 * select-outline-basic-focus-background-color:
 * select-outline-basic-focus-border-color:
 * select-outline-basic-hover-background-color:
 * select-outline-basic-hover-border-color:
 * select-outline-basic-disabled-background-color:
 * select-outline-basic-disabled-border-color:
 * select-outline-basic-disabled-icon-color:
 * select-outline-basic-disabled-text-color:
 * select-outline-primary-icon-color:
 * select-outline-primary-text-color:
 * select-outline-primary-placeholder-text-color:
 * select-outline-primary-background-color:
 * select-outline-primary-border-color:
 * select-outline-primary-focus-background-color:
 * select-outline-primary-focus-border-color:
 * select-outline-primary-hover-background-color:
 * select-outline-primary-hover-border-color:
 * select-outline-primary-disabled-background-color:
 * select-outline-primary-disabled-border-color:
 * select-outline-primary-disabled-icon-color:
 * select-outline-primary-disabled-text-color:
 * select-outline-success-icon-color:
 * select-outline-success-text-color:
 * select-outline-success-placeholder-text-color:
 * select-outline-success-background-color:
 * select-outline-success-border-color:
 * select-outline-success-focus-background-color:
 * select-outline-success-focus-border-color:
 * select-outline-success-hover-background-color:
 * select-outline-success-hover-border-color:
 * select-outline-success-disabled-background-color:
 * select-outline-success-disabled-border-color:
 * select-outline-success-disabled-icon-color:
 * select-outline-success-disabled-text-color:
 * select-outline-info-icon-color:
 * select-outline-info-text-color:
 * select-outline-info-placeholder-text-color:
 * select-outline-info-background-color:
 * select-outline-info-border-color:
 * select-outline-info-focus-background-color:
 * select-outline-info-focus-border-color:
 * select-outline-info-hover-background-color:
 * select-outline-info-hover-border-color:
 * select-outline-info-disabled-background-color:
 * select-outline-info-disabled-border-color:
 * select-outline-info-disabled-icon-color:
 * select-outline-info-disabled-text-color:
 * select-outline-warning-icon-color:
 * select-outline-warning-text-color:
 * select-outline-warning-placeholder-text-color:
 * select-outline-warning-background-color:
 * select-outline-warning-border-color:
 * select-outline-warning-focus-background-color:
 * select-outline-warning-focus-border-color:
 * select-outline-warning-hover-background-color:
 * select-outline-warning-hover-border-color:
 * select-outline-warning-disabled-background-color:
 * select-outline-warning-disabled-border-color:
 * select-outline-warning-disabled-icon-color:
 * select-outline-warning-disabled-text-color:
 * select-outline-danger-icon-color:
 * select-outline-danger-text-color:
 * select-outline-danger-placeholder-text-color:
 * select-outline-danger-background-color:
 * select-outline-danger-border-color:
 * select-outline-danger-focus-background-color:
 * select-outline-danger-focus-border-color:
 * select-outline-danger-hover-background-color:
 * select-outline-danger-hover-border-color:
 * select-outline-danger-disabled-background-color:
 * select-outline-danger-disabled-border-color:
 * select-outline-danger-disabled-icon-color:
 * select-outline-danger-disabled-text-color:
 * select-outline-control-icon-color:
 * select-outline-control-text-color:
 * select-outline-control-placeholder-text-color:
 * select-outline-control-background-color:
 * select-outline-control-border-color:
 * select-outline-control-focus-background-color:
 * select-outline-control-focus-border-color:
 * select-outline-control-hover-background-color:
 * select-outline-control-hover-border-color:
 * select-outline-control-disabled-background-color:
 * select-outline-control-disabled-border-color:
 * select-outline-control-disabled-icon-color:
 * select-outline-control-disabled-text-color:
 * select-outline-adjacent-border-style:
 * select-outline-adjacent-border-width:
 * select-outline-basic-open-border-color:
 * select-outline-basic-adjacent-border-color:
 * select-outline-primary-open-border-color:
 * select-outline-primary-adjacent-border-color:
 * select-outline-success-open-border-color:
 * select-outline-success-adjacent-border-color:
 * select-outline-info-open-border-color:
 * select-outline-info-adjacent-border-color:
 * select-outline-warning-open-border-color:
 * select-outline-warning-adjacent-border-color:
 * select-outline-danger-open-border-color:
 * select-outline-danger-adjacent-border-color:
 * select-outline-control-open-border-color:
 * select-outline-control-adjacent-border-color:
 * select-filled-border-style:
 * select-filled-border-width:
 * select-filled-tiny-padding:
 * select-filled-small-padding:
 * select-filled-medium-padding:
 * select-filled-large-padding:
 * select-filled-giant-padding:
 * select-filled-basic-background-color:
 * select-filled-basic-border-color:
 * select-filled-basic-icon-color:
 * select-filled-basic-text-color:
 * select-filled-basic-placeholder-text-color:
 * select-filled-basic-focus-background-color:
 * select-filled-basic-focus-border-color:
 * select-filled-basic-hover-background-color:
 * select-filled-basic-hover-border-color:
 * select-filled-basic-disabled-background-color:
 * select-filled-basic-disabled-border-color:
 * select-filled-basic-disabled-icon-color:
 * select-filled-basic-disabled-text-color:
 * select-filled-primary-background-color:
 * select-filled-primary-border-color:
 * select-filled-primary-icon-color:
 * select-filled-primary-text-color:
 * select-filled-primary-placeholder-text-color:
 * select-filled-primary-focus-background-color:
 * select-filled-primary-focus-border-color:
 * select-filled-primary-hover-background-color:
 * select-filled-primary-hover-border-color:
 * select-filled-primary-disabled-background-color:
 * select-filled-primary-disabled-border-color:
 * select-filled-primary-disabled-icon-color:
 * select-filled-primary-disabled-text-color:
 * select-filled-success-background-color:
 * select-filled-success-border-color:
 * select-filled-success-icon-color:
 * select-filled-success-text-color:
 * select-filled-success-placeholder-text-color:
 * select-filled-success-focus-background-color:
 * select-filled-success-focus-border-color:
 * select-filled-success-hover-background-color:
 * select-filled-success-hover-border-color:
 * select-filled-success-disabled-background-color:
 * select-filled-success-disabled-border-color:
 * select-filled-success-disabled-icon-color:
 * select-filled-success-disabled-text-color:
 * select-filled-info-background-color:
 * select-filled-info-border-color:
 * select-filled-info-icon-color:
 * select-filled-info-text-color:
 * select-filled-info-placeholder-text-color:
 * select-filled-info-focus-background-color:
 * select-filled-info-focus-border-color:
 * select-filled-info-hover-background-color:
 * select-filled-info-hover-border-color:
 * select-filled-info-disabled-background-color:
 * select-filled-info-disabled-border-color:
 * select-filled-info-disabled-icon-color:
 * select-filled-info-disabled-text-color:
 * select-filled-warning-background-color:
 * select-filled-warning-border-color:
 * select-filled-warning-icon-color:
 * select-filled-warning-text-color:
 * select-filled-warning-placeholder-text-color:
 * select-filled-warning-focus-background-color:
 * select-filled-warning-focus-border-color:
 * select-filled-warning-hover-background-color:
 * select-filled-warning-hover-border-color:
 * select-filled-warning-disabled-background-color:
 * select-filled-warning-disabled-border-color:
 * select-filled-warning-disabled-icon-color:
 * select-filled-warning-disabled-text-color:
 * select-filled-danger-background-color:
 * select-filled-danger-border-color:
 * select-filled-danger-icon-color:
 * select-filled-danger-text-color:
 * select-filled-danger-placeholder-text-color:
 * select-filled-danger-focus-background-color:
 * select-filled-danger-focus-border-color:
 * select-filled-danger-hover-background-color:
 * select-filled-danger-hover-border-color:
 * select-filled-danger-disabled-background-color:
 * select-filled-danger-disabled-border-color:
 * select-filled-danger-disabled-icon-color:
 * select-filled-danger-disabled-text-color:
 * select-filled-control-background-color:
 * select-filled-control-border-color:
 * select-filled-control-icon-color:
 * select-filled-control-text-color:
 * select-filled-control-placeholder-text-color:
 * select-filled-control-focus-background-color:
 * select-filled-control-focus-border-color:
 * select-filled-control-hover-background-color:
 * select-filled-control-hover-border-color:
 * select-filled-control-disabled-background-color:
 * select-filled-control-disabled-border-color:
 * select-filled-control-disabled-icon-color:
 * select-filled-control-disabled-text-color:
 * select-hero-tiny-padding:
 * select-hero-small-padding:
 * select-hero-medium-padding:
 * select-hero-large-padding:
 * select-hero-giant-padding:
 * select-hero-basic-left-background-color:
 * select-hero-basic-right-background-color:
 * select-hero-basic-icon-color:
 * select-hero-basic-text-color:
 * select-hero-basic-placeholder-text-color:
 * select-hero-basic-focus-left-background-color:
 * select-hero-basic-focus-right-background-color:
 * select-hero-basic-hover-left-background-color:
 * select-hero-basic-hover-right-background-color:
 * select-hero-basic-disabled-background-color:
 * select-hero-basic-disabled-icon-color:
 * select-hero-basic-disabled-text-color:
 * select-hero-primary-left-background-color:
 * select-hero-primary-right-background-color:
 * select-hero-primary-icon-color:
 * select-hero-primary-text-color:
 * select-hero-primary-placeholder-text-color:
 * select-hero-primary-focus-left-background-color:
 * select-hero-primary-focus-right-background-color:
 * select-hero-primary-hover-left-background-color:
 * select-hero-primary-hover-right-background-color:
 * select-hero-primary-disabled-background-color:
 * select-hero-primary-disabled-icon-color:
 * select-hero-primary-disabled-text-color:
 * select-hero-success-left-background-color:
 * select-hero-success-right-background-color:
 * select-hero-success-icon-color:
 * select-hero-success-text-color:
 * select-hero-success-placeholder-text-color:
 * select-hero-success-focus-left-background-color:
 * select-hero-success-focus-right-background-color:
 * select-hero-success-hover-left-background-color:
 * select-hero-success-hover-right-background-color:
 * select-hero-success-disabled-background-color:
 * select-hero-success-disabled-icon-color:
 * select-hero-success-disabled-text-color:
 * select-hero-info-left-background-color:
 * select-hero-info-right-background-color:
 * select-hero-info-icon-color:
 * select-hero-info-text-color:
 * select-hero-info-placeholder-text-color:
 * select-hero-info-focus-left-background-color:
 * select-hero-info-focus-right-background-color:
 * select-hero-info-hover-left-background-color:
 * select-hero-info-hover-right-background-color:
 * select-hero-info-disabled-background-color:
 * select-hero-info-disabled-icon-color:
 * select-hero-info-disabled-text-color:
 * select-hero-warning-left-background-color:
 * select-hero-warning-right-background-color:
 * select-hero-warning-icon-color:
 * select-hero-warning-text-color:
 * select-hero-warning-placeholder-text-color:
 * select-hero-warning-focus-left-background-color:
 * select-hero-warning-focus-right-background-color:
 * select-hero-warning-hover-left-background-color:
 * select-hero-warning-hover-right-background-color:
 * select-hero-warning-disabled-background-color:
 * select-hero-warning-disabled-icon-color:
 * select-hero-warning-disabled-text-color:
 * select-hero-danger-left-background-color:
 * select-hero-danger-right-background-color:
 * select-hero-danger-icon-color:
 * select-hero-danger-text-color:
 * select-hero-danger-placeholder-text-color:
 * select-hero-danger-focus-left-background-color:
 * select-hero-danger-focus-right-background-color:
 * select-hero-danger-hover-left-background-color:
 * select-hero-danger-hover-right-background-color:
 * select-hero-danger-disabled-background-color:
 * select-hero-danger-disabled-icon-color:
 * select-hero-danger-disabled-text-color:
 * select-hero-control-left-background-color:
 * select-hero-control-right-background-color:
 * select-hero-control-icon-color:
 * select-hero-control-text-color:
 * select-hero-control-placeholder-text-color:
 * select-hero-control-focus-left-background-color:
 * select-hero-control-focus-right-background-color:
 * select-hero-control-hover-left-background-color:
 * select-hero-control-hover-right-background-color:
 * select-hero-control-disabled-background-color:
 * select-hero-control-disabled-icon-color:
 * select-hero-control-disabled-text-color:
 * */
export declare class NbSelectComponent implements OnChanges, AfterViewInit, AfterContentInit, OnDestroy, ControlValueAccessor, NbFormFieldControl {
    protected document: any;
    protected overlay: NbOverlayService;
    protected hostRef: ElementRef<HTMLElement>;
    protected positionBuilder: NbPositionBuilderService;
    protected triggerStrategyBuilder: NbTriggerStrategyBuilderService;
    protected cd: ChangeDetectorRef;
    protected focusKeyManagerFactoryService: NbFocusKeyManagerFactoryService<NbOptionComponent>;
    protected focusMonitor: NbFocusMonitor;
    protected renderer: Renderer2;
    protected zone: NgZone;
    protected statusService: NbStatusService;
    /**
     * Select size, available sizes:
     * `tiny`, `small`, `medium` (default), `large`, `giant`
     */
    size: NbComponentSize;
    /**
     * Select status (adds specific styles):
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
     */
    status: NbComponentOrCustomStatus;
    /**
     * Select shapes: `rectangle` (default), `round`, `semi-round`
     */
    shape: NbComponentShape;
    /**
     * Select appearances: `outline` (default), `filled`, `hero`
     */
    appearance: NbSelectAppearance;
    /**
     * Specifies class to be set on `nb-option`s container (`nb-option-list`)
     * */
    optionsListClass: NgClass['ngClass'];
    /**
     * Specifies class for the overlay panel with options
     * */
    optionsPanelClass: string | string[];
    /**
     * Specifies width (in pixels) to be set on `nb-option`s container (`nb-option-list`)
     * */
    get optionsWidth(): number;
    set optionsWidth(value: number);
    protected _optionsWidth: number | undefined;
    /**
     * Adds `outline` styles
     */
    get outline(): boolean;
    set outline(value: boolean);
    static ngAcceptInputType_outline: NbBooleanInput;
    /**
     * Adds `filled` styles
     */
    get filled(): boolean;
    set filled(value: boolean);
    static ngAcceptInputType_filled: NbBooleanInput;
    /**
     * Adds `hero` styles
     */
    get hero(): boolean;
    set hero(value: boolean);
    static ngAcceptInputType_hero: NbBooleanInput;
    /**
     * Disables the select
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * If set element will fill its container
     */
    get fullWidth(): boolean;
    set fullWidth(value: boolean);
    protected _fullWidth: boolean;
    static ngAcceptInputType_fullWidth: NbBooleanInput;
    /**
     * Renders select placeholder if nothing selected.
     * */
    placeholder: string;
    /**
     * A function to compare option value with selected value.
     * By default, values are compared with strict equality (`===`).
     */
    get compareWith(): NbSelectCompareFunction;
    set compareWith(fn: NbSelectCompareFunction);
    protected _compareWith: NbSelectCompareFunction;
    /**
     * Accepts selected item or array of selected items.
     * */
    set selected(value: any);
    get selected(): any;
    /**
     * Gives capability just write `multiple` over the element.
     * */
    get multiple(): boolean;
    set multiple(value: boolean);
    protected _multiple: boolean;
    static ngAcceptInputType_multiple: NbBooleanInput;
    /**
     * Determines options overlay offset (in pixels).
     **/
    optionsOverlayOffset: number;
    /**
     * Determines options overlay scroll strategy.
     **/
    scrollStrategy: NbScrollStrategies;
    get additionalClasses(): string[];
    /**
     * Will be emitted when selected value changes.
     * */
    selectedChange: EventEmitter<any>;
    /**
     * List of `NbOptionComponent`'s components passed as content.
     * TODO maybe it would be better provide wrapper
     * */
    options: QueryList<NbOptionComponent>;
    /**
     * Custom select label, will be rendered instead of default enumeration with coma.
     * */
    customLabel: any;
    /**
     * NbCard with options content.
     * */
    portal: NbPortalDirective;
    button: ElementRef<HTMLButtonElement>;
    /**
     * Determines is select opened.
     * */
    get isOpen(): boolean;
    /**
     * List of selected options.
     * */
    selectionModel: NbOptionComponent[];
    positionStrategy: NbAdjustableConnectedPositionStrategy;
    /**
     * Current overlay position because of we have to toggle overlayPosition
     * in [ngClass] direction and this directive can use only string.
     */
    overlayPosition: NbPosition;
    protected ref: NbOverlayRef;
    protected triggerStrategy: NbTriggerStrategy;
    protected alive: boolean;
    protected destroy$: Subject<void>;
    protected keyManager: NbFocusKeyManager<NbOptionComponent>;
    /**
     * If a user assigns value before content nb-options's rendered the value will be putted in this variable.
     * And then applied after content rendered.
     * Only the last value will be applied.
     * */
    protected queue: any;
    /**
     * Function passed through control value accessor to propagate changes.
     * */
    protected onChange: Function;
    protected onTouched: Function;
    status$: BehaviorSubject<string>;
    size$: BehaviorSubject<NbComponentSize>;
    focused$: BehaviorSubject<boolean>;
    disabled$: BehaviorSubject<boolean>;
    fullWidth$: BehaviorSubject<boolean>;
    constructor(document: any, overlay: NbOverlayService, hostRef: ElementRef<HTMLElement>, positionBuilder: NbPositionBuilderService, triggerStrategyBuilder: NbTriggerStrategyBuilderService, cd: ChangeDetectorRef, focusKeyManagerFactoryService: NbFocusKeyManagerFactoryService<NbOptionComponent>, focusMonitor: NbFocusMonitor, renderer: Renderer2, zone: NgZone, statusService: NbStatusService);
    /**
     * Determines is select hidden.
     * */
    get isHidden(): boolean;
    /**
     * Returns width of the select button.
     * */
    get hostWidth(): number;
    get selectButtonClasses(): string[];
    /**
     * Content rendered in the label.
     * */
    get selectionView(): any;
    ngOnChanges({ disabled, status, size, fullWidth }: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    /**
     * Selects option or clear all selected options if value is null.
     * */
    protected handleOptionClick(option: NbOptionComponent): void;
    /**
     * Deselect all selected options.
     * */
    protected reset(): void;
    /**
     * Determines how to select option as multiple or single.
     * */
    protected selectOption(option: NbOptionComponent): void;
    /**
     * Select single option.
     * */
    protected handleSingleSelect(option: NbOptionComponent): void;
    /**
     * Select for multiple options.
     * */
    protected handleMultipleSelect(option: NbOptionComponent): void;
    protected attachToOverlay(): void;
    protected setActiveOption(): void;
    protected createOverlay(): void;
    protected createKeyManager(): void;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected createScrollStrategy(): NbScrollStrategy;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected subscribeOnTriggers(): void;
    protected subscribeOnPositionChange(): void;
    protected subscribeOnOptionClick(): void;
    protected subscribeOnOverlayKeys(): void;
    protected subscribeOnButtonFocus(): void;
    protected getContainer(): ComponentRef<any>;
    /**
     * Propagate selected value.
     * */
    protected emitSelected(selected: any): void;
    /**
     * Set selected value in model.
     * */
    protected setSelection(value: any): void;
    /**
     * Selects value.
     * */
    protected selectValue(value: any): void;
    protected shouldShow(): boolean;
    /**
     * Sets touched if focus moved outside of button and overlay,
     * ignoring the case when focus moved to options overlay.
     */
    trySetTouched(): void;
    protected isClickedWithinComponent($event: Event): boolean;
    protected canSelectValue(): boolean;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get info(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get rectangle(): boolean;
    get round(): boolean;
    get semiRound(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSelectComponent, "nb-select", never, { "size": "size"; "status": "status"; "shape": "shape"; "appearance": "appearance"; "optionsListClass": "optionsListClass"; "optionsPanelClass": "optionsPanelClass"; "optionsWidth": "optionsWidth"; "outline": "outline"; "filled": "filled"; "hero": "hero"; "disabled": "disabled"; "fullWidth": "fullWidth"; "placeholder": "placeholder"; "compareWith": "compareWith"; "selected": "selected"; "multiple": "multiple"; "optionsOverlayOffset": "optionsOverlayOffset"; "scrollStrategy": "scrollStrategy"; }, { "selectedChange": "selectedChange"; }, ["customLabel", "options"], ["nb-select-label", "nb-option, nb-option-group"]>;
}
