/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { NbStatusService } from '../../services/status.service';
import { NbBooleanInput } from '../helpers';
import { NbComponentSize } from '../component-size';
import { NbComponentShape } from '../component-shape';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbButton } from '../button/base-button';
import { NbButtonToggleAppearance, NbButtonToggleDirective } from './button-toggle.directive';
import * as i0 from "@angular/core";
/**
 * `<nb-button-group>` visually groups buttons together and allow to control buttons properties and the state as a
 * group.
 * @stacked-example(Button Group Showcase, button-group/button-group-showcase.component)
 *
 * ### Installation
 *
 * Import `NbButtonGroupModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbButtonGroupModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * You can use `<nb-button-group>` to group a series of `[nbButton]` or `[nbButtonToggle]` components.
 * @stacked-example(Button and Button Toggle Groups, button-group/button-and-button-toggle-groups.component)
 *
 * For a group of multiple `[nbButtonToggle]` you also can control multi-selection behavior. By default, the group
 * component allows only one pressed button toggle at a time (similar to the radio group). To be able to keep multiple
 * toggles pressed, you need to add `multiple` attributes to the `<nb-button-toggle>`.
 * @stacked-example(Button Group Multiple, button-group/button-group-multiple.component)
 *
 * To know which buttons are currently pressed listen to `(valueChange)` on the `nb-button-group`. Event
 * contains an array of values of currently pressed button toggles. You can assign a value to the
 * `[nbButtonToggle]` via the `value` input.
 * @stacked-example(Button Group Value Change, button-group/button-group-value-change.component)
 *
 * To disable a group of buttons, add a `disabled` attribute to the `<nb-button-group>`.
 * @stacked-example(Button Group Disabled, button-group/button-group-disabled.component)
 *
 * The group component controls all visual attributes of buttons such as `appearance`, `status`, `size`, `shape`.
 * You can change it via the appropriate attributes.
 *
 * Button group appearances:
 * @stacked-example(Button Group Appearances, button-group/button-group-appearances.component)
 *
 * Button group statuses:
 * @stacked-example(Button Group Statuses, button-group/button-group-statuses.component)
 *
 * Button group sizes:
 * @stacked-example(Button Group Sizes, button-group/button-group-sizes.component)
 *
 * Buttons group shapes:
 * @additional-example(Button Group Shapes, button-group/button-group-shapes.component)
 *
 * @styles
 *
 * button-group-filled-button-basic-text-color:
 * button-group-filled-button-primary-text-color:
 * button-group-filled-button-success-text-color:
 * button-group-filled-button-info-text-color:
 * button-group-filled-button-warning-text-color:
 * button-group-filled-button-danger-text-color:
 * button-group-filled-button-control-text-color:
 * button-group-filled-basic-divider-color:
 * button-group-filled-primary-divider-color:
 * button-group-filled-success-divider-color:
 * button-group-filled-info-divider-color:
 * button-group-filled-warning-divider-color:
 * button-group-filled-danger-divider-color:
 * button-group-filled-control-divider-color:
 * button-group-ghost-divider-color:
 **/
export declare class NbButtonGroupComponent implements OnChanges, AfterContentInit {
    protected cd: ChangeDetectorRef;
    protected statusService: NbStatusService;
    protected lastEmittedValue: any[];
    protected readonly destroy$: Subject<void>;
    protected readonly buttonsChange$: Subject<NbButton[]>;
    readonly buttons: QueryList<NbButton>;
    /**
     * Button group size, available sizes:
     * `tiny`, `small`, `medium`, `large`, `giant`
     */
    size: NbComponentSize;
    /**
     * Button group status (adds specific styles):
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
     */
    status: NbComponentOrCustomStatus;
    /**
     * Button group shapes: `rectangle`, `round`, `semi-round`
     */
    shape: NbComponentShape;
    /**
     * Button group appearance: `filled`, `outline`, `ghost`
     */
    appearance: NbButtonToggleAppearance;
    get disabled(): boolean;
    set disabled(value: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Allows to keep multiple button toggles pressed. Off by default.
     */
    get multiple(): boolean;
    set multiple(value: boolean);
    protected _multiple: boolean;
    static ngAcceptInputType_multiple: NbBooleanInput;
    /**
     * Sets `filled` appearance
     */
    get filled(): boolean;
    set filled(value: boolean);
    static ngAcceptInputType_filled: NbBooleanInput;
    /**
     * Sets `outline` appearance
     */
    get outline(): boolean;
    set outline(value: boolean);
    static ngAcceptInputType_outline: NbBooleanInput;
    /**
     * Sets `ghost` appearance
     */
    get ghost(): boolean;
    set ghost(value: boolean);
    static ngAcceptInputType_ghost: NbBooleanInput;
    /**
     * Emits when `nbButtonToggle` pressed state change. `$event` contains an array of the currently pressed button
     * toggles.
     */
    valueChange: EventEmitter<any[]>;
    role: string;
    get additionalClasses(): string[];
    constructor(cd: ChangeDetectorRef, statusService: NbStatusService);
    ngOnChanges({ size, status, shape, multiple, filled, outline, ghost, disabled }: SimpleChanges): void;
    ngAfterContentInit(): void;
    protected listenButtonPressedState(buttons: NbButton[]): void;
    protected syncButtonsProperties(buttons: NbButton[]): void;
    protected emitCurrentValue(toggleButtons: NbButtonToggleDirective[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbButtonGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbButtonGroupComponent, "nb-button-group", never, { "size": "size"; "status": "status"; "shape": "shape"; "appearance": "appearance"; "disabled": "disabled"; "multiple": "multiple"; "filled": "filled"; "outline": "outline"; "ghost": "ghost"; }, { "valueChange": "valueChange"; }, ["buttons"], ["*"]>;
}
