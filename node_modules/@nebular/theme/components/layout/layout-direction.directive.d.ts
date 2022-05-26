/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NbLayoutDirection, NbLayoutDirectionService } from '../../services/direction.service';
import * as i0 from "@angular/core";
declare abstract class NbBaseLayoutDirectionDirective implements OnInit, OnDestroy {
    protected templateRef: TemplateRef<any>;
    protected viewContainer: ViewContainerRef;
    protected cd: ChangeDetectorRef;
    protected directionService: NbLayoutDirectionService;
    protected directionToShow: NbLayoutDirection;
    protected destroy$: Subject<void>;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, cd: ChangeDetectorRef, directionService: NbLayoutDirectionService, directionToShow: NbLayoutDirection);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected updateView<T>(shouldShow: T): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbBaseLayoutDirectionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbBaseLayoutDirectionDirective, never, never, {}, {}, never>;
}
/**
 * Apply `nbLtr` directive to the element you need to show only when layout direction is `LTR`.
 *
 * ```html
 * <div *nbLtr>This text is visible only when layout direction is LTR</div>
 * ```
 */
export declare class NbLtrDirective extends NbBaseLayoutDirectionDirective {
    protected templateRef: TemplateRef<any>;
    protected viewContainer: ViewContainerRef;
    protected cd: ChangeDetectorRef;
    protected directionService: NbLayoutDirectionService;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, cd: ChangeDetectorRef, directionService: NbLayoutDirectionService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbLtrDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbLtrDirective, "[nbLtr]", never, {}, {}, never>;
}
/**
 * Apply `nbRtl` directive to the element you need to show only when layout direction is `RTL`.
 *
 * ```html
 * <div *nbRtl>This text is visible only when layout direction is RTL</div>
 * ```
 */
export declare class NbRtlDirective extends NbBaseLayoutDirectionDirective {
    protected templateRef: TemplateRef<any>;
    protected viewContainer: ViewContainerRef;
    protected cd: ChangeDetectorRef;
    protected directionService: NbLayoutDirectionService;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, cd: ChangeDetectorRef, directionService: NbLayoutDirectionService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRtlDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbRtlDirective, "[nbRtl]", never, {}, {}, never>;
}
export {};
