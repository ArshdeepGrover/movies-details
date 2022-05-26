/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { AfterContentChecked, ChangeDetectorRef, QueryList, AfterContentInit, OnDestroy, NgZone, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Subject, Observable, ReplaySubject } from 'rxjs';
import { NbPrefixDirective } from './prefix.directive';
import { NbSuffixDirective } from './suffix.directive';
import { NbFormFieldControl, NbFormControlState, NbFormFieldControlConfig } from './form-field-control';
import * as i0 from "@angular/core";
export declare type NbFormControlAddon = 'prefix' | 'suffix';
export declare class NbFormFieldComponent implements AfterContentChecked, AfterContentInit, AfterViewInit, OnDestroy {
    protected cd: ChangeDetectorRef;
    protected zone: NgZone;
    protected elementRef: ElementRef;
    protected renderer: Renderer2;
    protected readonly destroy$: Subject<void>;
    protected formControlState$: ReplaySubject<NbFormControlState>;
    prefixClasses$: Observable<string[]>;
    suffixClasses$: Observable<string[]>;
    prefix: QueryList<NbPrefixDirective>;
    suffix: QueryList<NbSuffixDirective>;
    formControl: NbFormFieldControl;
    formControlConfig: NbFormFieldControlConfig;
    formFieldClasses: any;
    constructor(cd: ChangeDetectorRef, zone: NgZone, elementRef: ElementRef, renderer: Renderer2);
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    shouldShowPrefix(): boolean;
    shouldShowSuffix(): boolean;
    protected subscribeToFormControlStateChange(): void;
    protected subscribeToAddonChange(): void;
    protected getAddonClasses(addon: NbFormControlAddon, state: NbFormControlState): string[];
    protected getFormControlConfig(): NbFormFieldControlConfig;
    protected isStatesEqual(oldState: NbFormControlState, state: NbFormControlState): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFormFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbFormFieldComponent, "nb-form-field", never, {}, {}, ["formControl", "formControlConfig", "prefix", "suffix"], ["[nbPrefix]", "*", "[nbSuffix]"]>;
}
