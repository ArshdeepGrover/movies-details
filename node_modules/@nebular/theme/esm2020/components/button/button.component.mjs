/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NbButton } from './base-button';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
/**
 * Basic button component.
 *
 * Default button size is `medium` and status color is `basic`:
 * @stacked-example(Button Showcase, button/button-showcase.component)
 *
 * ```html
 * <button nbButton></button>
 * ```
 * ### Installation
 *
 * Import `NbButtonModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbButtonModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Buttons are available in multiple colors using `status` property:
 * @stacked-example(Button Colors, button/button-colors.component.html)
 *
 * There are three button sizes:
 *
 * @stacked-example(Button Sizes, button/button-sizes.component.html)
 *
 * And two additional style types - `outline`:
 *
 * @stacked-example(Outline Buttons, button/button-outline.component.html)
 *
 * and `hero`:
 *
 * @stacked-example(Button Hero, button/button-hero.component.html)
 *
 * Buttons available in different shapes, which could be combined with the other properties:
 * @stacked-example(Button Shapes, button/button-shapes.component)
 *
 * `nbButton` could be applied to the following selectors - `button`, `input[type="button"]`, `input[type="submit"]`
 * and `a`:
 * @stacked-example(Button Elements, button/button-types.component.html)
 *
 * Button can be made `fullWidth`:
 * @stacked-example(Full Width Button, button/button-full-width.component.html)
 *
 * Icon can be placed inside of a button as a child element:
 * @stacked-example(Icon Button, button/button-icon.component.html)
 *
 * @additional-example(Interactive example, button/button-interactive.component)
 *
 * @styles
 *
 * button-cursor:
 * button-outline-width:
 * button-outline-color:
 * button-text-font-family:
 * button-text-font-weight:
 * button-disabled-cursor:
 * button-tiny-text-font-size:
 * button-tiny-text-line-height:
 * button-tiny-icon-size:
 * button-tiny-icon-vertical-margin:
 * button-tiny-icon-offset:
 * button-small-text-font-size:
 * button-small-text-line-height:
 * button-small-icon-size:
 * button-small-icon-vertical-margin:
 * button-small-icon-offset:
 * button-medium-text-font-size:
 * button-medium-text-line-height:
 * button-medium-icon-size:
 * button-medium-icon-vertical-margin:
 * button-medium-icon-offset:
 * button-large-text-font-size:
 * button-large-text-line-height:
 * button-large-icon-size:
 * button-large-icon-vertical-margin:
 * button-large-icon-offset:
 * button-giant-text-font-size:
 * button-giant-text-line-height:
 * button-giant-icon-size:
 * button-giant-icon-vertical-margin:
 * button-giant-icon-offset:
 * button-rectangle-border-radius:
 * button-semi-round-border-radius:
 * button-round-border-radius:
 * button-filled-border-style:
 * button-filled-border-width:
 * button-filled-text-transform:
 * button-filled-tiny-padding:
 * button-filled-small-padding:
 * button-filled-medium-padding:
 * button-filled-large-padding:
 * button-filled-giant-padding:
 * button-filled-basic-background-color:
 * button-filled-basic-border-color:
 * button-filled-basic-text-color:
 * button-filled-basic-focus-background-color:
 * button-filled-basic-focus-border-color:
 * button-filled-basic-hover-background-color:
 * button-filled-basic-hover-border-color:
 * button-filled-basic-active-background-color:
 * button-filled-basic-active-border-color:
 * button-filled-basic-disabled-background-color:
 * button-filled-basic-disabled-border-color:
 * button-filled-basic-disabled-text-color:
 * button-filled-primary-background-color:
 * button-filled-primary-border-color:
 * button-filled-primary-text-color:
 * button-filled-primary-focus-background-color:
 * button-filled-primary-focus-border-color:
 * button-filled-primary-hover-background-color:
 * button-filled-primary-hover-border-color:
 * button-filled-primary-active-background-color:
 * button-filled-primary-active-border-color:
 * button-filled-primary-disabled-background-color:
 * button-filled-primary-disabled-border-color:
 * button-filled-primary-disabled-text-color:
 * button-filled-success-background-color:
 * button-filled-success-border-color:
 * button-filled-success-text-color:
 * button-filled-success-focus-background-color:
 * button-filled-success-focus-border-color:
 * button-filled-success-hover-background-color:
 * button-filled-success-hover-border-color:
 * button-filled-success-active-background-color:
 * button-filled-success-active-border-color:
 * button-filled-success-disabled-background-color:
 * button-filled-success-disabled-border-color:
 * button-filled-success-disabled-text-color:
 * button-filled-info-background-color:
 * button-filled-info-border-color:
 * button-filled-info-text-color:
 * button-filled-info-focus-background-color:
 * button-filled-info-focus-border-color:
 * button-filled-info-hover-background-color:
 * button-filled-info-hover-border-color:
 * button-filled-info-active-background-color:
 * button-filled-info-active-border-color:
 * button-filled-info-disabled-background-color:
 * button-filled-info-disabled-border-color:
 * button-filled-info-disabled-text-color:
 * button-filled-warning-background-color:
 * button-filled-warning-border-color:
 * button-filled-warning-text-color:
 * button-filled-warning-focus-background-color:
 * button-filled-warning-focus-border-color:
 * button-filled-warning-hover-background-color:
 * button-filled-warning-hover-border-color:
 * button-filled-warning-active-background-color:
 * button-filled-warning-active-border-color:
 * button-filled-warning-disabled-background-color:
 * button-filled-warning-disabled-border-color:
 * button-filled-warning-disabled-text-color:
 * button-filled-danger-background-color:
 * button-filled-danger-border-color:
 * button-filled-danger-text-color:
 * button-filled-danger-focus-background-color:
 * button-filled-danger-focus-border-color:
 * button-filled-danger-hover-background-color:
 * button-filled-danger-hover-border-color:
 * button-filled-danger-active-background-color:
 * button-filled-danger-active-border-color:
 * button-filled-danger-disabled-background-color:
 * button-filled-danger-disabled-border-color:
 * button-filled-danger-disabled-text-color:
 * button-filled-control-background-color:
 * button-filled-control-border-color:
 * button-filled-control-text-color:
 * button-filled-control-focus-background-color:
 * button-filled-control-focus-border-color:
 * button-filled-control-hover-background-color:
 * button-filled-control-hover-border-color:
 * button-filled-control-active-background-color:
 * button-filled-control-active-border-color:
 * button-filled-control-disabled-background-color:
 * button-filled-control-disabled-border-color:
 * button-filled-control-disabled-text-color:
 * button-outline-border-style:
 * button-outline-border-width:
 * button-outline-text-transform:
 * button-outline-focus-inset-shadow-length:
 * button-outline-tiny-padding:
 * button-outline-small-padding:
 * button-outline-medium-padding:
 * button-outline-large-padding:
 * button-outline-giant-padding:
 * button-outline-basic-background-color:
 * button-outline-basic-border-color:
 * button-outline-basic-text-color:
 * button-outline-basic-focus-background-color:
 * button-outline-basic-focus-border-color:
 * button-outline-basic-focus-text-color:
 * button-outline-basic-hover-background-color:
 * button-outline-basic-hover-border-color:
 * button-outline-basic-hover-text-color:
 * button-outline-basic-active-background-color:
 * button-outline-basic-active-border-color:
 * button-outline-basic-active-text-color:
 * button-outline-basic-disabled-background-color:
 * button-outline-basic-disabled-border-color:
 * button-outline-basic-disabled-text-color:
 * button-outline-primary-background-color:
 * button-outline-primary-border-color:
 * button-outline-primary-text-color:
 * button-outline-primary-focus-background-color:
 * button-outline-primary-focus-border-color:
 * button-outline-primary-focus-text-color:
 * button-outline-primary-hover-background-color:
 * button-outline-primary-hover-border-color:
 * button-outline-primary-hover-text-color:
 * button-outline-primary-active-background-color:
 * button-outline-primary-active-border-color:
 * button-outline-primary-active-text-color:
 * button-outline-primary-disabled-background-color:
 * button-outline-primary-disabled-border-color:
 * button-outline-primary-disabled-text-color:
 * button-outline-success-background-color:
 * button-outline-success-border-color:
 * button-outline-success-text-color:
 * button-outline-success-focus-background-color:
 * button-outline-success-focus-border-color:
 * button-outline-success-focus-text-color:
 * button-outline-success-hover-background-color:
 * button-outline-success-hover-border-color:
 * button-outline-success-hover-text-color:
 * button-outline-success-active-background-color:
 * button-outline-success-active-border-color:
 * button-outline-success-active-text-color:
 * button-outline-success-disabled-background-color:
 * button-outline-success-disabled-border-color:
 * button-outline-success-disabled-text-color:
 * button-outline-info-background-color:
 * button-outline-info-border-color:
 * button-outline-info-text-color:
 * button-outline-info-focus-background-color:
 * button-outline-info-focus-border-color:
 * button-outline-info-focus-text-color:
 * button-outline-info-hover-background-color:
 * button-outline-info-hover-border-color:
 * button-outline-info-hover-text-color:
 * button-outline-info-active-background-color:
 * button-outline-info-active-border-color:
 * button-outline-info-active-text-color:
 * button-outline-info-disabled-background-color:
 * button-outline-info-disabled-border-color:
 * button-outline-info-disabled-text-color:
 * button-outline-warning-background-color:
 * button-outline-warning-border-color:
 * button-outline-warning-text-color:
 * button-outline-warning-focus-background-color:
 * button-outline-warning-focus-border-color:
 * button-outline-warning-focus-text-color:
 * button-outline-warning-hover-background-color:
 * button-outline-warning-hover-border-color:
 * button-outline-warning-hover-text-color:
 * button-outline-warning-active-background-color:
 * button-outline-warning-active-border-color:
 * button-outline-warning-active-text-color:
 * button-outline-warning-disabled-background-color:
 * button-outline-warning-disabled-border-color:
 * button-outline-warning-disabled-text-color:
 * button-outline-danger-background-color:
 * button-outline-danger-border-color:
 * button-outline-danger-text-color:
 * button-outline-danger-focus-background-color:
 * button-outline-danger-focus-border-color:
 * button-outline-danger-focus-text-color:
 * button-outline-danger-hover-background-color:
 * button-outline-danger-hover-border-color:
 * button-outline-danger-hover-text-color:
 * button-outline-danger-active-background-color:
 * button-outline-danger-active-border-color:
 * button-outline-danger-active-text-color:
 * button-outline-danger-disabled-background-color:
 * button-outline-danger-disabled-border-color:
 * button-outline-danger-disabled-text-color:
 * button-outline-control-background-color:
 * button-outline-control-border-color:
 * button-outline-control-text-color:
 * button-outline-control-focus-background-color:
 * button-outline-control-focus-border-color:
 * button-outline-control-focus-text-color:
 * button-outline-control-hover-background-color:
 * button-outline-control-hover-border-color:
 * button-outline-control-hover-text-color:
 * button-outline-control-active-background-color:
 * button-outline-control-active-border-color:
 * button-outline-control-active-text-color:
 * button-outline-control-disabled-background-color:
 * button-outline-control-disabled-border-color:
 * button-outline-control-disabled-text-color:
 * button-ghost-background-color:
 * button-ghost-border-color:
 * button-ghost-border-style:
 * button-ghost-border-width:
 * button-ghost-text-transform:
 * button-ghost-focus-inset-shadow-length:
 * button-ghost-tiny-padding:
 * button-ghost-small-padding:
 * button-ghost-medium-padding:
 * button-ghost-large-padding:
 * button-ghost-giant-padding:
 * button-ghost-basic-text-color:
 * button-ghost-basic-focus-background-color:
 * button-ghost-basic-focus-border-color:
 * button-ghost-basic-focus-text-color:
 * button-ghost-basic-hover-background-color:
 * button-ghost-basic-hover-border-color:
 * button-ghost-basic-hover-text-color:
 * button-ghost-basic-active-background-color:
 * button-ghost-basic-active-border-color:
 * button-ghost-basic-active-text-color:
 * button-ghost-basic-disabled-background-color:
 * button-ghost-basic-disabled-border-color:
 * button-ghost-basic-disabled-text-color:
 * button-ghost-primary-text-color:
 * button-ghost-primary-focus-background-color:
 * button-ghost-primary-focus-border-color:
 * button-ghost-primary-focus-text-color:
 * button-ghost-primary-hover-background-color:
 * button-ghost-primary-hover-border-color:
 * button-ghost-primary-hover-text-color:
 * button-ghost-primary-active-background-color:
 * button-ghost-primary-active-border-color:
 * button-ghost-primary-active-text-color:
 * button-ghost-primary-disabled-background-color:
 * button-ghost-primary-disabled-border-color:
 * button-ghost-primary-disabled-text-color:
 * button-ghost-success-text-color:
 * button-ghost-success-focus-background-color:
 * button-ghost-success-focus-border-color:
 * button-ghost-success-focus-text-color:
 * button-ghost-success-hover-background-color:
 * button-ghost-success-hover-border-color:
 * button-ghost-success-hover-text-color:
 * button-ghost-success-active-background-color:
 * button-ghost-success-active-border-color:
 * button-ghost-success-active-text-color:
 * button-ghost-success-disabled-background-color:
 * button-ghost-success-disabled-border-color:
 * button-ghost-success-disabled-text-color:
 * button-ghost-info-text-color:
 * button-ghost-info-focus-background-color:
 * button-ghost-info-focus-border-color:
 * button-ghost-info-focus-text-color:
 * button-ghost-info-hover-background-color:
 * button-ghost-info-hover-border-color:
 * button-ghost-info-hover-text-color:
 * button-ghost-info-active-background-color:
 * button-ghost-info-active-border-color:
 * button-ghost-info-active-text-color:
 * button-ghost-info-disabled-background-color:
 * button-ghost-info-disabled-border-color:
 * button-ghost-info-disabled-text-color:
 * button-ghost-warning-text-color:
 * button-ghost-warning-focus-background-color:
 * button-ghost-warning-focus-border-color:
 * button-ghost-warning-focus-text-color:
 * button-ghost-warning-hover-background-color:
 * button-ghost-warning-hover-border-color:
 * button-ghost-warning-hover-text-color:
 * button-ghost-warning-active-background-color:
 * button-ghost-warning-active-border-color:
 * button-ghost-warning-active-text-color:
 * button-ghost-warning-disabled-background-color:
 * button-ghost-warning-disabled-border-color:
 * button-ghost-warning-disabled-text-color:
 * button-ghost-danger-text-color:
 * button-ghost-danger-focus-background-color:
 * button-ghost-danger-focus-border-color:
 * button-ghost-danger-focus-text-color:
 * button-ghost-danger-hover-background-color:
 * button-ghost-danger-hover-border-color:
 * button-ghost-danger-hover-text-color:
 * button-ghost-danger-active-background-color:
 * button-ghost-danger-active-border-color:
 * button-ghost-danger-active-text-color:
 * button-ghost-danger-disabled-background-color:
 * button-ghost-danger-disabled-border-color:
 * button-ghost-danger-disabled-text-color:
 * button-ghost-control-text-color:
 * button-ghost-control-focus-background-color:
 * button-ghost-control-focus-border-color:
 * button-ghost-control-focus-text-color:
 * button-ghost-control-hover-background-color:
 * button-ghost-control-hover-border-color:
 * button-ghost-control-hover-text-color:
 * button-ghost-control-active-background-color:
 * button-ghost-control-active-border-color:
 * button-ghost-control-active-text-color:
 * button-ghost-control-disabled-background-color:
 * button-ghost-control-disabled-border-color:
 * button-ghost-control-disabled-text-color:
 * button-hero-border-color:
 * button-hero-border-style:
 * button-hero-border-width:
 * button-hero-text-transform:
 * button-hero-tiny-padding:
 * button-hero-small-padding:
 * button-hero-medium-padding:
 * button-hero-large-padding:
 * button-hero-giant-padding:
 * button-hero-shadow:
 * button-hero-text-shadow:
 * button-hero-bevel-size:
 * button-hero-glow-size:
 * button-hero-outline-color:
 * button-hero-outline-width:
 * button-hero-basic-text-color:
 * button-hero-basic-bevel-color:
 * button-hero-basic-glow-color:
 * button-hero-basic-left-background-color:
 * button-hero-basic-right-background-color:
 * button-hero-basic-focus-left-background-color:
 * button-hero-basic-focus-right-background-color:
 * button-hero-basic-hover-left-background-color:
 * button-hero-basic-hover-right-background-color:
 * button-hero-basic-active-left-background-color:
 * button-hero-basic-active-right-background-color:
 * button-hero-basic-disabled-background-color:
 * button-hero-basic-disabled-text-color:
 * button-hero-primary-text-color:
 * button-hero-primary-bevel-color:
 * button-hero-primary-glow-color:
 * button-hero-primary-left-background-color:
 * button-hero-primary-right-background-color:
 * button-hero-primary-focus-left-background-color:
 * button-hero-primary-focus-right-background-color:
 * button-hero-primary-hover-left-background-color:
 * button-hero-primary-hover-right-background-color:
 * button-hero-primary-active-left-background-color:
 * button-hero-primary-active-right-background-color:
 * button-hero-primary-disabled-background-color:
 * button-hero-primary-disabled-text-color:
 * button-hero-success-text-color:
 * button-hero-success-bevel-color:
 * button-hero-success-glow-color:
 * button-hero-success-left-background-color:
 * button-hero-success-right-background-color:
 * button-hero-success-focus-left-background-color:
 * button-hero-success-focus-right-background-color:
 * button-hero-success-hover-left-background-color:
 * button-hero-success-hover-right-background-color:
 * button-hero-success-active-left-background-color:
 * button-hero-success-active-right-background-color:
 * button-hero-success-disabled-background-color:
 * button-hero-success-disabled-text-color:
 * button-hero-info-text-color:
 * button-hero-info-bevel-color:
 * button-hero-info-glow-color:
 * button-hero-info-left-background-color:
 * button-hero-info-right-background-color:
 * button-hero-info-focus-left-background-color:
 * button-hero-info-focus-right-background-color:
 * button-hero-info-hover-left-background-color:
 * button-hero-info-hover-right-background-color:
 * button-hero-info-active-left-background-color:
 * button-hero-info-active-right-background-color:
 * button-hero-info-disabled-background-color:
 * button-hero-info-disabled-text-color:
 * button-hero-warning-text-color:
 * button-hero-warning-bevel-color:
 * button-hero-warning-glow-color:
 * button-hero-warning-left-background-color:
 * button-hero-warning-right-background-color:
 * button-hero-warning-focus-left-background-color:
 * button-hero-warning-focus-right-background-color:
 * button-hero-warning-hover-left-background-color:
 * button-hero-warning-hover-right-background-color:
 * button-hero-warning-active-left-background-color:
 * button-hero-warning-active-right-background-color:
 * button-hero-warning-disabled-background-color:
 * button-hero-warning-disabled-text-color:
 * button-hero-danger-text-color:
 * button-hero-danger-bevel-color:
 * button-hero-danger-glow-color:
 * button-hero-danger-left-background-color:
 * button-hero-danger-right-background-color:
 * button-hero-danger-focus-left-background-color:
 * button-hero-danger-focus-right-background-color:
 * button-hero-danger-hover-left-background-color:
 * button-hero-danger-hover-right-background-color:
 * button-hero-danger-active-left-background-color:
 * button-hero-danger-active-right-background-color:
 * button-hero-danger-disabled-background-color:
 * button-hero-danger-disabled-text-color:
 * button-hero-control-text-color:
 * button-hero-control-bevel-color:
 * button-hero-control-glow-color:
 * button-hero-control-left-background-color:
 * button-hero-control-right-background-color:
 * button-hero-control-focus-left-background-color:
 * button-hero-control-focus-right-background-color:
 * button-hero-control-hover-left-background-color:
 * button-hero-control-hover-right-background-color:
 * button-hero-control-active-left-background-color:
 * button-hero-control-active-right-background-color:
 * button-hero-control-disabled-background-color:
 * button-hero-control-disabled-text-color:
 */
export class NbButtonComponent extends NbButton {
    constructor(renderer, hostElement, cd, zone, statusService) {
        super(renderer, hostElement, cd, zone, statusService);
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.cd = cd;
        this.zone = zone;
        this.statusService = statusService;
    }
    /**
     * Sets `hero` appearance
     */
    get hero() {
        return this.appearance === 'hero';
    }
    set hero(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'hero';
        }
    }
    get primary() {
        return this.status === 'primary';
    }
    get info() {
        return this.status === 'info';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    /**
     * @private
     * Keep this handler to partially support anchor disabling.
     * Unlike button, anchor doesn't have 'disabled' DOM property,
     * so handler will be called anyway. We preventing navigation and bubbling.
     * Disabling is partial due to click handlers precedence. Consider example:
     * <a nbButton [disabled]="true" (click)="clickHandler()">...</a>
     * 'clickHandler' will be called before our host listener below. We can't prevent
     * such handlers call.
     */
    onClick(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
}
NbButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbButtonComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: { hero: "hero" }, host: { listeners: { "click": "onClick($event)" }, properties: { "class.appearance-hero": "this.hero", "class.status-primary": "this.primary", "class.status-info": "this.info", "class.status-success": "this.success", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-basic": "this.basic", "class.status-control": "this.control" } }, providers: [
        { provide: NbButton, useExisting: NbButtonComponent },
    ], usesInheritance: true, ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'button[nbButton],a[nbButton],input[type="button"][nbButton],input[type="submit"][nbButton]',
                    template: `
    <ng-content></ng-content>
  `,
                    providers: [
                        { provide: NbButton, useExisting: NbButtonComponent },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i1.NbStatusService }]; }, propDecorators: { hero: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.appearance-hero']
            }], primary: [{
                type: HostBinding,
                args: ['class.status-primary']
            }], info: [{
                type: HostBinding,
                args: ['class.status-info']
            }], success: [{
                type: HostBinding,
                args: ['class.status-success']
            }], warning: [{
                type: HostBinding,
                args: ['class.status-warning']
            }], danger: [{
                type: HostBinding,
                args: ['class.status-danger']
            }], basic: [{
                type: HostBinding,
                args: ['class.status-basic']
            }], control: [{
                type: HostBinding,
                args: ['class.status-control']
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFrQixNQUFNLFlBQVksQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdWZHO0FBV0gsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFFBQVE7SUFxRTdDLFlBQ1ksUUFBbUIsRUFDbkIsV0FBb0MsRUFDcEMsRUFBcUIsRUFDckIsSUFBWSxFQUNaLGFBQThCO1FBRXhDLEtBQUssQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFONUMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtJQUcxQyxDQUFDO0lBNUVEOztPQUVHO0lBQ0gsSUFFSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLE1BQU0sQ0FBQztJQUNwQyxDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYztRQUNyQixJQUFJLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUdELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUVILE9BQU8sQ0FBQyxLQUFLO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7OzhHQW5FVSxpQkFBaUI7a0dBQWpCLGlCQUFpQiwwZ0JBTGpCO1FBQ1QsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRTtLQUN0RCxpREFMUzs7R0FFVDsyRkFNVSxpQkFBaUI7a0JBVjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDRGQUE0RjtvQkFDdEcsUUFBUSxFQUFFOztHQUVUO29CQUNELFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxtQkFBbUIsRUFBRTtxQkFDdEQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzRNQU9LLElBQUk7c0JBRlAsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyx1QkFBdUI7Z0JBWWhDLE9BQU87c0JBRFYsV0FBVzt1QkFBQyxzQkFBc0I7Z0JBTS9CLElBQUk7c0JBRFAsV0FBVzt1QkFBQyxtQkFBbUI7Z0JBTTVCLE9BQU87c0JBRFYsV0FBVzt1QkFBQyxzQkFBc0I7Z0JBTS9CLE9BQU87c0JBRFYsV0FBVzt1QkFBQyxzQkFBc0I7Z0JBTS9CLE1BQU07c0JBRFQsV0FBVzt1QkFBQyxxQkFBcUI7Z0JBTTlCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxvQkFBb0I7Z0JBTTdCLE9BQU87c0JBRFYsV0FBVzt1QkFBQyxzQkFBc0I7Z0JBZ0JuQyxPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgTmdab25lLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RhdHVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5LCBOYkJvb2xlYW5JbnB1dCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTmJCdXR0b24gfSBmcm9tICcuL2Jhc2UtYnV0dG9uJztcblxuLyoqXG4gKiBCYXNpYyBidXR0b24gY29tcG9uZW50LlxuICpcbiAqIERlZmF1bHQgYnV0dG9uIHNpemUgaXMgYG1lZGl1bWAgYW5kIHN0YXR1cyBjb2xvciBpcyBgYmFzaWNgOlxuICogQHN0YWNrZWQtZXhhbXBsZShCdXR0b24gU2hvd2Nhc2UsIGJ1dHRvbi9idXR0b24tc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gbmJCdXR0b24+PC9idXR0b24+XG4gKiBgYGBcbiAqICMjIyBJbnN0YWxsYXRpb25cbiAqXG4gKiBJbXBvcnQgYE5iQnV0dG9uTW9kdWxlYCB0byB5b3VyIGZlYXR1cmUgbW9kdWxlLlxuICogYGBgdHNcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgICBOYkJ1dHRvbk1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKlxuICogQnV0dG9ucyBhcmUgYXZhaWxhYmxlIGluIG11bHRpcGxlIGNvbG9ycyB1c2luZyBgc3RhdHVzYCBwcm9wZXJ0eTpcbiAqIEBzdGFja2VkLWV4YW1wbGUoQnV0dG9uIENvbG9ycywgYnV0dG9uL2J1dHRvbi1jb2xvcnMuY29tcG9uZW50Lmh0bWwpXG4gKlxuICogVGhlcmUgYXJlIHRocmVlIGJ1dHRvbiBzaXplczpcbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKEJ1dHRvbiBTaXplcywgYnV0dG9uL2J1dHRvbi1zaXplcy5jb21wb25lbnQuaHRtbClcbiAqXG4gKiBBbmQgdHdvIGFkZGl0aW9uYWwgc3R5bGUgdHlwZXMgLSBgb3V0bGluZWA6XG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShPdXRsaW5lIEJ1dHRvbnMsIGJ1dHRvbi9idXR0b24tb3V0bGluZS5jb21wb25lbnQuaHRtbClcbiAqXG4gKiBhbmQgYGhlcm9gOlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoQnV0dG9uIEhlcm8sIGJ1dHRvbi9idXR0b24taGVyby5jb21wb25lbnQuaHRtbClcbiAqXG4gKiBCdXR0b25zIGF2YWlsYWJsZSBpbiBkaWZmZXJlbnQgc2hhcGVzLCB3aGljaCBjb3VsZCBiZSBjb21iaW5lZCB3aXRoIHRoZSBvdGhlciBwcm9wZXJ0aWVzOlxuICogQHN0YWNrZWQtZXhhbXBsZShCdXR0b24gU2hhcGVzLCBidXR0b24vYnV0dG9uLXNoYXBlcy5jb21wb25lbnQpXG4gKlxuICogYG5iQnV0dG9uYCBjb3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBmb2xsb3dpbmcgc2VsZWN0b3JzIC0gYGJ1dHRvbmAsIGBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdYCwgYGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gXG4gKiBhbmQgYGFgOlxuICogQHN0YWNrZWQtZXhhbXBsZShCdXR0b24gRWxlbWVudHMsIGJ1dHRvbi9idXR0b24tdHlwZXMuY29tcG9uZW50Lmh0bWwpXG4gKlxuICogQnV0dG9uIGNhbiBiZSBtYWRlIGBmdWxsV2lkdGhgOlxuICogQHN0YWNrZWQtZXhhbXBsZShGdWxsIFdpZHRoIEJ1dHRvbiwgYnV0dG9uL2J1dHRvbi1mdWxsLXdpZHRoLmNvbXBvbmVudC5odG1sKVxuICpcbiAqIEljb24gY2FuIGJlIHBsYWNlZCBpbnNpZGUgb2YgYSBidXR0b24gYXMgYSBjaGlsZCBlbGVtZW50OlxuICogQHN0YWNrZWQtZXhhbXBsZShJY29uIEJ1dHRvbiwgYnV0dG9uL2J1dHRvbi1pY29uLmNvbXBvbmVudC5odG1sKVxuICpcbiAqIEBhZGRpdGlvbmFsLWV4YW1wbGUoSW50ZXJhY3RpdmUgZXhhbXBsZSwgYnV0dG9uL2J1dHRvbi1pbnRlcmFjdGl2ZS5jb21wb25lbnQpXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIGJ1dHRvbi1jdXJzb3I6XG4gKiBidXR0b24tb3V0bGluZS13aWR0aDpcbiAqIGJ1dHRvbi1vdXRsaW5lLWNvbG9yOlxuICogYnV0dG9uLXRleHQtZm9udC1mYW1pbHk6XG4gKiBidXR0b24tdGV4dC1mb250LXdlaWdodDpcbiAqIGJ1dHRvbi1kaXNhYmxlZC1jdXJzb3I6XG4gKiBidXR0b24tdGlueS10ZXh0LWZvbnQtc2l6ZTpcbiAqIGJ1dHRvbi10aW55LXRleHQtbGluZS1oZWlnaHQ6XG4gKiBidXR0b24tdGlueS1pY29uLXNpemU6XG4gKiBidXR0b24tdGlueS1pY29uLXZlcnRpY2FsLW1hcmdpbjpcbiAqIGJ1dHRvbi10aW55LWljb24tb2Zmc2V0OlxuICogYnV0dG9uLXNtYWxsLXRleHQtZm9udC1zaXplOlxuICogYnV0dG9uLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6XG4gKiBidXR0b24tc21hbGwtaWNvbi1zaXplOlxuICogYnV0dG9uLXNtYWxsLWljb24tdmVydGljYWwtbWFyZ2luOlxuICogYnV0dG9uLXNtYWxsLWljb24tb2Zmc2V0OlxuICogYnV0dG9uLW1lZGl1bS10ZXh0LWZvbnQtc2l6ZTpcbiAqIGJ1dHRvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDpcbiAqIGJ1dHRvbi1tZWRpdW0taWNvbi1zaXplOlxuICogYnV0dG9uLW1lZGl1bS1pY29uLXZlcnRpY2FsLW1hcmdpbjpcbiAqIGJ1dHRvbi1tZWRpdW0taWNvbi1vZmZzZXQ6XG4gKiBidXR0b24tbGFyZ2UtdGV4dC1mb250LXNpemU6XG4gKiBidXR0b24tbGFyZ2UtdGV4dC1saW5lLWhlaWdodDpcbiAqIGJ1dHRvbi1sYXJnZS1pY29uLXNpemU6XG4gKiBidXR0b24tbGFyZ2UtaWNvbi12ZXJ0aWNhbC1tYXJnaW46XG4gKiBidXR0b24tbGFyZ2UtaWNvbi1vZmZzZXQ6XG4gKiBidXR0b24tZ2lhbnQtdGV4dC1mb250LXNpemU6XG4gKiBidXR0b24tZ2lhbnQtdGV4dC1saW5lLWhlaWdodDpcbiAqIGJ1dHRvbi1naWFudC1pY29uLXNpemU6XG4gKiBidXR0b24tZ2lhbnQtaWNvbi12ZXJ0aWNhbC1tYXJnaW46XG4gKiBidXR0b24tZ2lhbnQtaWNvbi1vZmZzZXQ6XG4gKiBidXR0b24tcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6XG4gKiBidXR0b24tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOlxuICogYnV0dG9uLXJvdW5kLWJvcmRlci1yYWRpdXM6XG4gKiBidXR0b24tZmlsbGVkLWJvcmRlci1zdHlsZTpcbiAqIGJ1dHRvbi1maWxsZWQtYm9yZGVyLXdpZHRoOlxuICogYnV0dG9uLWZpbGxlZC10ZXh0LXRyYW5zZm9ybTpcbiAqIGJ1dHRvbi1maWxsZWQtdGlueS1wYWRkaW5nOlxuICogYnV0dG9uLWZpbGxlZC1zbWFsbC1wYWRkaW5nOlxuICogYnV0dG9uLWZpbGxlZC1tZWRpdW0tcGFkZGluZzpcbiAqIGJ1dHRvbi1maWxsZWQtbGFyZ2UtcGFkZGluZzpcbiAqIGJ1dHRvbi1maWxsZWQtZ2lhbnQtcGFkZGluZzpcbiAqIGJ1dHRvbi1maWxsZWQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtYmFzaWMtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1iYXNpYy10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1pbmZvLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtaW5mby10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC13YXJuaW5nLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtd2FybmluZy10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWRhbmdlci1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWRhbmdlci10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1jb250cm9sLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtY29udHJvbC10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1maWxsZWQtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWJvcmRlci1zdHlsZTpcbiAqIGJ1dHRvbi1vdXRsaW5lLWJvcmRlci13aWR0aDpcbiAqIGJ1dHRvbi1vdXRsaW5lLXRleHQtdHJhbnNmb3JtOlxuICogYnV0dG9uLW91dGxpbmUtZm9jdXMtaW5zZXQtc2hhZG93LWxlbmd0aDpcbiAqIGJ1dHRvbi1vdXRsaW5lLXRpbnktcGFkZGluZzpcbiAqIGJ1dHRvbi1vdXRsaW5lLXNtYWxsLXBhZGRpbmc6XG4gKiBidXR0b24tb3V0bGluZS1tZWRpdW0tcGFkZGluZzpcbiAqIGJ1dHRvbi1vdXRsaW5lLWxhcmdlLXBhZGRpbmc6XG4gKiBidXR0b24tb3V0bGluZS1naWFudC1wYWRkaW5nOlxuICogYnV0dG9uLW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLXRleHQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtYmFzaWMtZm9jdXMtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1iYXNpYy1ob3Zlci10ZXh0LWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLXRleHQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWFjdGl2ZS10ZXh0LWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1mb2N1cy10ZXh0LWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1zdWNjZXNzLWhvdmVyLXRleHQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1pbmZvLXRleHQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWluZm8tZm9jdXMtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtaW5mby1ob3Zlci10ZXh0LWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLXRleHQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtd2FybmluZy10ZXh0LWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLXRleHQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS13YXJuaW5nLWFjdGl2ZS10ZXh0LWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1kYW5nZXItdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy10ZXh0LWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1jb250cm9sLXRleHQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtY29udHJvbC1ob3Zlci10ZXh0LWNvbG9yOlxuICogYnV0dG9uLW91dGxpbmUtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYWN0aXZlLXRleHQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1ib3JkZXItc3R5bGU6XG4gKiBidXR0b24tZ2hvc3QtYm9yZGVyLXdpZHRoOlxuICogYnV0dG9uLWdob3N0LXRleHQtdHJhbnNmb3JtOlxuICogYnV0dG9uLWdob3N0LWZvY3VzLWluc2V0LXNoYWRvdy1sZW5ndGg6XG4gKiBidXR0b24tZ2hvc3QtdGlueS1wYWRkaW5nOlxuICogYnV0dG9uLWdob3N0LXNtYWxsLXBhZGRpbmc6XG4gKiBidXR0b24tZ2hvc3QtbWVkaXVtLXBhZGRpbmc6XG4gKiBidXR0b24tZ2hvc3QtbGFyZ2UtcGFkZGluZzpcbiAqIGJ1dHRvbi1naG9zdC1naWFudC1wYWRkaW5nOlxuICogYnV0dG9uLWdob3N0LWJhc2ljLXRleHQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtYmFzaWMtZm9jdXMtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1wcmltYXJ5LXRleHQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLXRleHQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1zdWNjZXNzLXRleHQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLXRleHQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1pbmZvLXRleHQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWluZm8tZm9jdXMtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWluZm8tYWN0aXZlLXRleHQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC13YXJuaW5nLXRleHQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3Qtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZ2hvc3Qtd2FybmluZy1ob3Zlci10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLXRleHQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1kYW5nZXItdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWRhbmdlci1mb2N1cy10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWRhbmdlci1hY3RpdmUtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWNvbnRyb2wtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWdob3N0LWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLXRleHQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtY29udHJvbC1hY3RpdmUtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1naG9zdC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBidXR0b24tZ2hvc3QtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWhlcm8tYm9yZGVyLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tYm9yZGVyLXN0eWxlOlxuICogYnV0dG9uLWhlcm8tYm9yZGVyLXdpZHRoOlxuICogYnV0dG9uLWhlcm8tdGV4dC10cmFuc2Zvcm06XG4gKiBidXR0b24taGVyby10aW55LXBhZGRpbmc6XG4gKiBidXR0b24taGVyby1zbWFsbC1wYWRkaW5nOlxuICogYnV0dG9uLWhlcm8tbWVkaXVtLXBhZGRpbmc6XG4gKiBidXR0b24taGVyby1sYXJnZS1wYWRkaW5nOlxuICogYnV0dG9uLWhlcm8tZ2lhbnQtcGFkZGluZzpcbiAqIGJ1dHRvbi1oZXJvLXNoYWRvdzpcbiAqIGJ1dHRvbi1oZXJvLXRleHQtc2hhZG93OlxuICogYnV0dG9uLWhlcm8tYmV2ZWwtc2l6ZTpcbiAqIGJ1dHRvbi1oZXJvLWdsb3ctc2l6ZTpcbiAqIGJ1dHRvbi1oZXJvLW91dGxpbmUtY29sb3I6XG4gKiBidXR0b24taGVyby1vdXRsaW5lLXdpZHRoOlxuICogYnV0dG9uLWhlcm8tYmFzaWMtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWJhc2ljLWJldmVsLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tYmFzaWMtZ2xvdy1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWJhc2ljLWxlZnQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWJhc2ljLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1iYXNpYy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1iYXNpYy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tYmFzaWMtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tYmFzaWMtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWJhc2ljLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1iYXNpYy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWhlcm8tcHJpbWFyeS10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWhlcm8tcHJpbWFyeS1iZXZlbC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXByaW1hcnktZ2xvdy1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXByaW1hcnktbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tcHJpbWFyeS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tcHJpbWFyeS1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1wcmltYXJ5LWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1wcmltYXJ5LWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXByaW1hcnktaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXByaW1hcnktYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXByaW1hcnktYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6XG4gKiBidXR0b24taGVyby1zdWNjZXNzLXRleHQtY29sb3I6XG4gKiBidXR0b24taGVyby1zdWNjZXNzLWJldmVsLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tc3VjY2Vzcy1nbG93LWNvbG9yOlxuICogYnV0dG9uLWhlcm8tc3VjY2Vzcy1sZWZ0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1zdWNjZXNzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1zdWNjZXNzLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tc3VjY2Vzcy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tc3VjY2Vzcy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tc3VjY2Vzcy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWluZm8tdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWluZm8tYmV2ZWwtY29sb3I6XG4gKiBidXR0b24taGVyby1pbmZvLWdsb3ctY29sb3I6XG4gKiBidXR0b24taGVyby1pbmZvLWxlZnQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWluZm8tcmlnaHQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWluZm8tZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8taW5mby1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8taW5mby1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1pbmZvLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1pbmZvLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1pbmZvLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8taW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8taW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWhlcm8td2FybmluZy10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWhlcm8td2FybmluZy1iZXZlbC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXdhcm5pbmctZ2xvdy1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXdhcm5pbmctbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8td2FybmluZy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8td2FybmluZy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby13YXJuaW5nLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby13YXJuaW5nLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXdhcm5pbmctaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXdhcm5pbmctYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLXdhcm5pbmctYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6XG4gKiBidXR0b24taGVyby1kYW5nZXItdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWRhbmdlci1iZXZlbC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWRhbmdlci1nbG93LWNvbG9yOlxuICogYnV0dG9uLWhlcm8tZGFuZ2VyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWRhbmdlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tZGFuZ2VyLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWRhbmdlci1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tZGFuZ2VyLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tZGFuZ2VyLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1kYW5nZXItYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWhlcm8tY29udHJvbC10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWhlcm8tY29udHJvbC1iZXZlbC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZ2xvdy1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWNvbnRyb2wtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tY29udHJvbC1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYnV0dG9uLWhlcm8tY29udHJvbC1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1jb250cm9sLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1jb250cm9sLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWNvbnRyb2wtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBidXR0b24taGVyby1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltuYkJ1dHRvbl0sYVtuYkJ1dHRvbl0saW5wdXRbdHlwZT1cImJ1dHRvblwiXVtuYkJ1dHRvbl0saW5wdXRbdHlwZT1cInN1Ym1pdFwiXVtuYkJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBOYkJ1dHRvbiwgdXNlRXhpc3Rpbmc6IE5iQnV0dG9uQ29tcG9uZW50IH0sXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYkJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIE5iQnV0dG9uIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBTZXRzIGBoZXJvYCBhcHBlYXJhbmNlXG4gICAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFwcGVhcmFuY2UtaGVybycpXG4gIGdldCBoZXJvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFwcGVhcmFuY2UgPT09ICdoZXJvJztcbiAgfVxuICBzZXQgaGVybyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmIChjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpKSB7XG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPSAnaGVybyc7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZXJvOiBOYkJvb2xlYW5JbnB1dDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1wcmltYXJ5JylcbiAgZ2V0IHByaW1hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAncHJpbWFyeSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1pbmZvJylcbiAgZ2V0IGluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnaW5mbyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1zdWNjZXNzJylcbiAgZ2V0IHN1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnc3VjY2Vzcyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy13YXJuaW5nJylcbiAgZ2V0IHdhcm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnd2FybmluZyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1kYW5nZXInKVxuICBnZXQgZGFuZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Rhbmdlcic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1iYXNpYycpXG4gIGdldCBiYXNpYygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdiYXNpYyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1jb250cm9sJylcbiAgZ2V0IGNvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnY29udHJvbCc7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogS2VlcCB0aGlzIGhhbmRsZXIgdG8gcGFydGlhbGx5IHN1cHBvcnQgYW5jaG9yIGRpc2FibGluZy5cbiAgICogVW5saWtlIGJ1dHRvbiwgYW5jaG9yIGRvZXNuJ3QgaGF2ZSAnZGlzYWJsZWQnIERPTSBwcm9wZXJ0eSxcbiAgICogc28gaGFuZGxlciB3aWxsIGJlIGNhbGxlZCBhbnl3YXkuIFdlIHByZXZlbnRpbmcgbmF2aWdhdGlvbiBhbmQgYnViYmxpbmcuXG4gICAqIERpc2FibGluZyBpcyBwYXJ0aWFsIGR1ZSB0byBjbGljayBoYW5kbGVycyBwcmVjZWRlbmNlLiBDb25zaWRlciBleGFtcGxlOlxuICAgKiA8YSBuYkJ1dHRvbiBbZGlzYWJsZWRdPVwidHJ1ZVwiIChjbGljayk9XCJjbGlja0hhbmRsZXIoKVwiPi4uLjwvYT5cbiAgICogJ2NsaWNrSGFuZGxlcicgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIG91ciBob3N0IGxpc3RlbmVyIGJlbG93LiBXZSBjYW4ndCBwcmV2ZW50XG4gICAqIHN1Y2ggaGFuZGxlcnMgY2FsbC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25DbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIHN0YXR1c1NlcnZpY2U6IE5iU3RhdHVzU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIocmVuZGVyZXIsIGhvc3RFbGVtZW50LCBjZCwgem9uZSwgc3RhdHVzU2VydmljZSk7XG4gIH1cbn1cbiJdfQ==