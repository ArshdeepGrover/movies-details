/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NbStatusService } from '../../services/status.service';
import { NbIconConfig } from '../icon/icon.component';
import { NbToast } from './model';
import * as i0 from "@angular/core";
/**
 * The `NbToastComponent` is responsible for rendering each toast with appropriate styles.
 *
 * @styles
 *
 * toastr-border-style:
 * toastr-border-width:
 * toastr-border-radius:
 * toastr-padding:
 * toastr-shadow:
 * toastr-text-font-family:
 * toastr-text-font-size:
 * toastr-text-font-weight:
 * toastr-text-line-height:
 * toastr-title-text-font-family:
 * toastr-title-text-font-size:
 * toastr-title-text-font-weight:
 * toastr-title-text-line-height:
 * toastr-basic-background-color:
 * toastr-basic-border-color:
 * toastr-basic-text-color:
 * toastr-icon-basic-background-color:
 * toastr-icon-basic-color:
 * toastr-destroyable-basic-hover-background-color:
 * toastr-destroyable-basic-hover-border-color:
 * toastr-primary-background-color:
 * toastr-primary-border-color:
 * toastr-primary-text-color:
 * toastr-icon-primary-background-color:
 * toastr-icon-primary-color:
 * toastr-destroyable-primary-hover-background-color:
 * toastr-destroyable-primary-hover-border-color:
 * toastr-success-background-color:
 * toastr-success-border-color:
 * toastr-success-text-color:
 * toastr-icon-success-background-color:
 * toastr-icon-success-color:
 * toastr-destroyable-success-hover-background-color:
 * toastr-destroyable-success-hover-border-color:
 * toastr-info-background-color:
 * toastr-info-border-color:
 * toastr-info-text-color:
 * toastr-icon-info-background-color:
 * toastr-icon-info-color:
 * toastr-destroyable-info-hover-background-color:
 * toastr-destroyable-info-hover-border-color:
 * toastr-warning-background-color:
 * toastr-warning-border-color:
 * toastr-warning-text-color:
 * toastr-icon-warning-background-color:
 * toastr-icon-warning-color:
 * toastr-destroyable-warning-hover-background-color:
 * toastr-destroyable-warning-hover-border-color:
 * toastr-danger-background-color:
 * toastr-danger-border-color:
 * toastr-danger-text-color:
 * toastr-icon-danger-background-color:
 * toastr-icon-danger-color:
 * toastr-destroyable-danger-hover-background-color:
 * toastr-destroyable-danger-hover-border-color:
 * toastr-control-background-color:
 * toastr-control-border-color:
 * toastr-control-text-color:
 * toastr-icon-control-background-color:
 * toastr-icon-control-color:
 * toastr-destroyable-control-hover-background-color:
 * toastr-destroyable-control-hover-border-color:
 * */
export declare class NbToastComponent implements OnInit, OnDestroy {
    protected renderer: Renderer2;
    protected elementRef: ElementRef;
    protected statusService: NbStatusService;
    toast: NbToast;
    destroy: EventEmitter<void>;
    toastClick: EventEmitter<void>;
    get success(): boolean;
    get info(): boolean;
    get warning(): boolean;
    get primary(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get destroyByClick(): boolean;
    get hasIcon(): boolean;
    get customIcon(): boolean;
    get icon(): string | NbIconConfig;
    get additionalClasses(): string[];
    onClick(): void;
    constructor(renderer: Renderer2, elementRef: ElementRef, statusService: NbStatusService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbToastComponent, "nb-toast", never, { "toast": "toast"; }, { "destroy": "destroy"; "toastClick": "toastClick"; }, never, never>;
}
