/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, Renderer2 } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NbStatusService } from '../../services/status.service';
import { NbBooleanInput } from '../helpers';
import { NbButton, NbButtonAppearance } from '../button/base-button';
import * as i0 from "@angular/core";
export declare type NbButtonToggleAppearance = Exclude<NbButtonAppearance, 'hero'>;
export interface NbButtonToggleChange {
    source: NbButtonToggleDirective;
    pressed: boolean;
}
/**
 * `[nbButtonToggle]` is a directive to add a `pressed` state to a button.
 */
export declare class NbButtonToggleDirective extends NbButton {
    protected renderer: Renderer2;
    protected hostElement: ElementRef<HTMLElement>;
    protected cd: ChangeDetectorRef;
    protected zone: NgZone;
    protected statusService: NbStatusService;
    protected buttonGroup?: any;
    protected readonly _pressedChange$: Subject<NbButtonToggleChange>;
    get pressedChange$(): Observable<NbButtonToggleChange>;
    appearance: NbButtonToggleAppearance;
    /**
     * A value associated with the button.
     */
    value: any;
    /**
     * Controls button pressed state
     **/
    get pressed(): boolean;
    set pressed(value: boolean);
    protected _pressed: boolean;
    static ngAcceptInputType_pressed: NbBooleanInput;
    /**
     * Emits whenever button pressed state change
     **/
    readonly pressedChange: EventEmitter<boolean>;
    get basic(): boolean;
    get primary(): boolean;
    get success(): boolean;
    get info(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get control(): boolean;
    get additionalClasses(): string[];
    onClick(): void;
    constructor(renderer: Renderer2, hostElement: ElementRef<HTMLElement>, cd: ChangeDetectorRef, zone: NgZone, statusService: NbStatusService, buttonGroup?: any);
    /**
     * @docs-private
     */
    _updatePressed(value: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbButtonToggleDirective, [null, null, null, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbButtonToggleDirective, "button[nbButtonToggle]", ["nbButtonToggle"], { "appearance": "appearance"; "value": "value"; "pressed": "pressed"; }, { "pressedChange": "pressedChange"; }, never>;
}
