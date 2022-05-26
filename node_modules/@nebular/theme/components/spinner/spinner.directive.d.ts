/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentFactoryResolver, ComponentFactory, ComponentRef, ElementRef, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { NbComponentSize } from '../component-size';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbSpinnerComponent } from './spinner.component';
import * as i0 from "@angular/core";
/**
 * Styled spinner directive
 *
 * @stacked-example(Spinner Showcase, spinner/spinner-card.component)
 *
 *
 * ```ts
 * <nb-card [nbSpinner]="loading" nbSpinnerStatus="danger">
 *   <nb-card-body>Card Content</nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbSpinnerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSpinnerModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Could be colored using `status` property
 *
 * @stacked-example(Spinner Colors, spinner/spinner-colors.component)
 *
 * Available in different sizes with `size` property:
 *
 * @stacked-example(Spinner Sizes, spinner/spinner-sizes.component)
 *
 * It is also possible to place it into the button:
 * @stacked-example(Buttons with spinner, spinner/spinner-button.component)
 *
 * Or tabs:
 * @stacked-example(Spinner in tabs, spinner/spinner-tabs.component)
 */
export declare class NbSpinnerDirective implements OnInit {
    private directiveView;
    private componentFactoryResolver;
    private renderer;
    private directiveElement;
    private shouldShow;
    spinner: ComponentRef<NbSpinnerComponent>;
    componentFactory: ComponentFactory<NbSpinnerComponent>;
    /**
     * Spinner message shown next to the icon
     * @type {string}
     */
    spinnerMessage: string;
    /**
     * Spinner status color
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`.
     */
    spinnerStatus: NbComponentOrCustomStatus;
    /**
     * Spinner size. Possible values: `tiny`, `small`, `medium` (default), `large`, `giant`
     */
    spinnerSize: NbComponentSize;
    /**
     * Directive value - show or hide spinner
     * @param {boolean} val
     */
    set nbSpinner(val: boolean);
    isSpinnerExist: boolean;
    constructor(directiveView: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, renderer: Renderer2, directiveElement: ElementRef);
    ngOnInit(): void;
    hide(): void;
    show(): void;
    setInstanceInputs(instance: NbSpinnerComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSpinnerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbSpinnerDirective, "[nbSpinner]", never, { "spinnerMessage": "nbSpinnerMessage"; "spinnerStatus": "nbSpinnerStatus"; "spinnerSize": "nbSpinnerSize"; "nbSpinner": "nbSpinner"; }, {}, never>;
}
