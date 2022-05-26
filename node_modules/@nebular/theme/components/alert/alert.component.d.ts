/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbStatusService } from '../../services/status.service';
import { NbComponentSize } from '../component-size';
import { NbComponentOrCustomStatus, NbComponentStatus } from '../component-status';
import { NbBooleanInput } from '../helpers';
import * as i0 from "@angular/core";
/**
 * Alert component.
 *
 * Basic alert example:
 * @stacked-example(Showcase, alert/alert-showcase.component)
 *
 * Alert configuration:
 *
 * ```html
 * <nb-alert status="success">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 * ### Installation
 *
 * Import `NbAlertModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbAlertModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Alert could additionally have a `close` button when `closable` property is set:
 * ```html
 * <nb-alert status="success" closable (close)="onClose()">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 *
 * Colored alerts could be simply configured by providing a `status` property:
 * @stacked-example(Alert status, alert/alert-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight alert highlight
 * as well as combine it with `status`:
 * @stacked-example(Alert accent, alert/alert-accents.component)
 *
 * And `outline` property:
 * @stacked-example(Outline Alert, alert/alert-outline.component)
 *
 * @additional-example(Multiple Sizes, alert/alert-sizes.component)
 *
 * @styles
 *
 * alert-border-radius:
 * alert-bottom-margin:
 * alert-padding:
 * alert-scrollbar-color:
 * alert-scrollbar-background-color:
 * alert-scrollbar-width:
 * alert-shadow:
 * alert-text-font-family:
 * alert-text-font-size:
 * alert-text-font-weight:
 * alert-text-line-height:
 * alert-closable-start-padding:
 * alert-tiny-height:
 * alert-small-height:
 * alert-medium-height:
 * alert-medium-padding:
 * alert-large-height:
 * alert-giant-height:
 * alert-basic-background-color:
 * alert-basic-text-color:
 * alert-primary-background-color:
 * alert-primary-text-color:
 * alert-success-background-color:
 * alert-success-text-color:
 * alert-info-background-color:
 * alert-info-text-color:
 * alert-warning-background-color:
 * alert-warning-text-color:
 * alert-danger-background-color:
 * alert-danger-text-color:
 * alert-control-background-color:
 * alert-control-text-color:
 * alert-accent-basic-color:
 * alert-accent-primary-color:
 * alert-accent-info-color:
 * alert-accent-success-color:
 * alert-accent-warning-color:
 * alert-accent-danger-color:
 * alert-accent-control-color:
 * alert-outline-width:
 * alert-outline-basic-color:
 * alert-outline-primary-color:
 * alert-outline-info-color:
 * alert-outline-success-color:
 * alert-outline-warning-color:
 * alert-outline-danger-color:
 * alert-outline-control-color:
 */
export declare class NbAlertComponent {
    protected statusService: NbStatusService;
    /**
     * Alert size, available sizes:
     * `tiny`, `small`, `medium`, `large`, `giant`
     * Unset by default.
     */
    size: '' | NbComponentSize;
    /**
     * Alert status (adds specific styles):
     * `basic` (default), `primary`, `success`, `info`, `warning`, `danger`, `control`.
     */
    status: NbComponentOrCustomStatus;
    /**
     * Alert accent (color of the top border):
     * `basic`, `primary`, `success`, `info`, `warning`, `danger`, `control`.
     * Unset by default.
     */
    accent: '' | NbComponentStatus;
    /**
     * Alert outline (color of the border):
     * `basic`, `primary`, `success`, `info`, `warning`, `danger`, `control`.
     * Unset by default.
     */
    outline: '' | NbComponentStatus;
    /**
     * Shows `close` icon
     */
    get closable(): boolean;
    set closable(value: boolean);
    protected _closable: boolean;
    static ngAcceptInputType_closable: NbBooleanInput;
    /**
     * Emits when chip is removed
     * @type EventEmitter<any>
     */
    close: EventEmitter<any>;
    constructor(statusService: NbStatusService);
    /**
     * Emits the removed chip event
     */
    onClose(): void;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get success(): boolean;
    get info(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get primaryAccent(): boolean;
    get successAccent(): boolean;
    get infoAccent(): boolean;
    get warningAccent(): boolean;
    get dangerAccent(): boolean;
    get basicAccent(): boolean;
    get controlAccent(): boolean;
    get primaryOutline(): boolean;
    get successOutline(): boolean;
    get infoOutline(): boolean;
    get warningOutline(): boolean;
    get dangerOutline(): boolean;
    get basicOutline(): boolean;
    get controlOutline(): boolean;
    get additionalClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbAlertComponent, "nb-alert", never, { "size": "size"; "status": "status"; "accent": "accent"; "outline": "outline"; "closable": "closable"; }, { "close": "close"; }, never, ["*"]>;
}
