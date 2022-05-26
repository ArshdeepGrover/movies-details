/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding, forwardRef, Output, EventEmitter, ChangeDetectionStrategy, } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/direction.service";
import * as i2 from "../../services/status.service";
import * as i3 from "../icon/icon.component";
import * as i4 from "@angular/common";
/**
 * Toggle is a control representing `on` and `off` states.
 *
 * @stacked-example(Showcase, toggle/toggle-showcase.component)
 *
 * ### Installation
 *
 * Import `NbToggleComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbToggleModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Toggle may have one of the following statuses: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`
 *
 * @stacked-example(Toggle status, toggle/toggle-status.component)
 *
 * Toggle can be disabled via `disabled` input.
 *
 * @stacked-example(Disabled Toggles, toggle/toggle-disabled.component)
 *
 * Toggle may have a label with following positions: `left`, `right`, `start`, `end` (default)
 *
 * @stacked-example(Toggles With Labels, toggle/toggle-label-position.component.ts)
 *
 * You can set control state via `checked` binding:
 *
 * ```html
 * <nb-toggle [(checked)]="checked"></nb-toggle>
 * ```
 *
 * Or it could be set via reactive forms or ngModel bindings:
 *
 * @stacked-example(Toggle form binding, toggle/toggle-form.component)
 *
 * @styles
 *
 * toggle-height:
 * toggle-width:
 * toggle-border-width:
 * toggle-border-radius:
 * toggle-outline-width:
 * toggle-outline-color:
 * toggle-switcher-size:
 * toggle-switcher-icon-size:
 * toggle-text-font-family:
 * toggle-text-font-size:
 * toggle-text-font-weight:
 * toggle-text-line-height:
 * toggle-cursor:
 * toggle-disabled-cursor:
 * toggle-basic-text-color:
 * toggle-basic-background-color:
 * toggle-basic-border-color:
 * toggle-basic-checked-background-color:
 * toggle-basic-checked-border-color:
 * toggle-basic-checked-switcher-background-color:
 * toggle-basic-checked-switcher-checkmark-color:
 * toggle-basic-focus-background-color:
 * toggle-basic-focus-border-color:
 * toggle-basic-focus-checked-background-color:
 * toggle-basic-focus-checked-border-color:
 * toggle-basic-hover-background-color:
 * toggle-basic-hover-border-color:
 * toggle-basic-hover-checked-background-color:
 * toggle-basic-hover-checked-border-color:
 * toggle-basic-active-background-color:
 * toggle-basic-active-border-color:
 * toggle-basic-active-checked-background-color:
 * toggle-basic-active-checked-border-color:
 * toggle-basic-disabled-background-color:
 * toggle-basic-disabled-border-color:
 * toggle-basic-disabled-switcher-background-color:
 * toggle-basic-disabled-checked-switcher-checkmark-color:
 * toggle-basic-disabled-text-color:
 * toggle-primary-text-color:
 * toggle-primary-background-color:
 * toggle-primary-border-color:
 * toggle-primary-checked-background-color:
 * toggle-primary-checked-border-color:
 * toggle-primary-checked-switcher-background-color:
 * toggle-primary-checked-switcher-checkmark-color:
 * toggle-primary-focus-background-color:
 * toggle-primary-focus-border-color:
 * toggle-primary-focus-checked-background-color:
 * toggle-primary-focus-checked-border-color:
 * toggle-primary-hover-background-color:
 * toggle-primary-hover-border-color:
 * toggle-primary-hover-checked-background-color:
 * toggle-primary-hover-checked-border-color:
 * toggle-primary-active-background-color:
 * toggle-primary-active-border-color:
 * toggle-primary-active-checked-background-color:
 * toggle-primary-active-checked-border-color:
 * toggle-primary-disabled-background-color:
 * toggle-primary-disabled-border-color:
 * toggle-primary-disabled-switcher-background-color:
 * toggle-primary-disabled-checked-switcher-checkmark-color:
 * toggle-primary-disabled-text-color:
 * toggle-success-text-color:
 * toggle-success-background-color:
 * toggle-success-border-color:
 * toggle-success-checked-background-color:
 * toggle-success-checked-border-color:
 * toggle-success-checked-switcher-background-color:
 * toggle-success-checked-switcher-checkmark-color:
 * toggle-success-focus-background-color:
 * toggle-success-focus-border-color:
 * toggle-success-focus-checked-background-color:
 * toggle-success-focus-checked-border-color:
 * toggle-success-hover-background-color:
 * toggle-success-hover-border-color:
 * toggle-success-hover-checked-background-color:
 * toggle-success-hover-checked-border-color:
 * toggle-success-active-background-color:
 * toggle-success-active-border-color:
 * toggle-success-active-checked-background-color:
 * toggle-success-active-checked-border-color:
 * toggle-success-disabled-background-color:
 * toggle-success-disabled-border-color:
 * toggle-success-disabled-switcher-background-color:
 * toggle-success-disabled-checked-switcher-checkmark-color:
 * toggle-success-disabled-text-color:
 * toggle-info-text-color:
 * toggle-info-background-color:
 * toggle-info-border-color:
 * toggle-info-checked-background-color:
 * toggle-info-checked-border-color:
 * toggle-info-checked-switcher-background-color:
 * toggle-info-checked-switcher-checkmark-color:
 * toggle-info-focus-background-color:
 * toggle-info-focus-border-color:
 * toggle-info-focus-checked-background-color:
 * toggle-info-focus-checked-border-color:
 * toggle-info-hover-background-color:
 * toggle-info-hover-border-color:
 * toggle-info-hover-checked-background-color:
 * toggle-info-hover-checked-border-color:
 * toggle-info-active-background-color:
 * toggle-info-active-border-color:
 * toggle-info-active-checked-background-color:
 * toggle-info-active-checked-border-color:
 * toggle-info-disabled-background-color:
 * toggle-info-disabled-border-color:
 * toggle-info-disabled-switcher-background-color:
 * toggle-info-disabled-checked-switcher-checkmark-color:
 * toggle-info-disabled-text-color:
 * toggle-warning-text-color:
 * toggle-warning-background-color:
 * toggle-warning-border-color:
 * toggle-warning-checked-background-color:
 * toggle-warning-checked-border-color:
 * toggle-warning-checked-switcher-background-color:
 * toggle-warning-checked-switcher-checkmark-color:
 * toggle-warning-focus-background-color:
 * toggle-warning-focus-border-color:
 * toggle-warning-focus-checked-background-color:
 * toggle-warning-focus-checked-border-color:
 * toggle-warning-hover-background-color:
 * toggle-warning-hover-border-color:
 * toggle-warning-hover-checked-background-color:
 * toggle-warning-hover-checked-border-color:
 * toggle-warning-active-background-color:
 * toggle-warning-active-border-color:
 * toggle-warning-active-checked-background-color:
 * toggle-warning-active-checked-border-color:
 * toggle-warning-disabled-background-color:
 * toggle-warning-disabled-border-color:
 * toggle-warning-disabled-switcher-background-color:
 * toggle-warning-disabled-checked-switcher-checkmark-color:
 * toggle-warning-disabled-text-color:
 * toggle-danger-text-color:
 * toggle-danger-background-color:
 * toggle-danger-border-color:
 * toggle-danger-checked-background-color:
 * toggle-danger-checked-border-color:
 * toggle-danger-checked-switcher-background-color:
 * toggle-danger-checked-switcher-checkmark-color:
 * toggle-danger-focus-background-color:
 * toggle-danger-focus-border-color:
 * toggle-danger-focus-checked-background-color:
 * toggle-danger-focus-checked-border-color:
 * toggle-danger-hover-background-color:
 * toggle-danger-hover-border-color:
 * toggle-danger-hover-checked-background-color:
 * toggle-danger-hover-checked-border-color:
 * toggle-danger-active-background-color:
 * toggle-danger-active-border-color:
 * toggle-danger-active-checked-background-color:
 * toggle-danger-active-checked-border-color:
 * toggle-danger-disabled-background-color:
 * toggle-danger-disabled-border-color:
 * toggle-danger-disabled-switcher-background-color:
 * toggle-danger-disabled-checked-switcher-checkmark-color:
 * toggle-danger-disabled-text-color:
 * toggle-control-text-color:
 * toggle-control-background-color:
 * toggle-control-border-color:
 * toggle-control-checked-background-color:
 * toggle-control-checked-border-color:
 * toggle-control-checked-switcher-background-color:
 * toggle-control-checked-switcher-checkmark-color:
 * toggle-control-focus-background-color:
 * toggle-control-focus-border-color:
 * toggle-control-focus-checked-background-color:
 * toggle-control-focus-checked-border-color:
 * toggle-control-hover-background-color:
 * toggle-control-hover-border-color:
 * toggle-control-hover-checked-background-color:
 * toggle-control-hover-checked-border-color:
 * toggle-control-active-background-color:
 * toggle-control-active-border-color:
 * toggle-control-active-checked-background-color:
 * toggle-control-active-checked-border-color:
 * toggle-control-disabled-background-color:
 * toggle-control-disabled-border-color:
 * toggle-control-disabled-switcher-background-color:
 * toggle-control-disabled-checked-switcher-checkmark-color:
 * toggle-control-disabled-text-color:
 */
export class NbToggleComponent {
    constructor(changeDetector, layoutDirection, renderer, hostElement, zone, statusService) {
        this.changeDetector = changeDetector;
        this.layoutDirection = layoutDirection;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.zone = zone;
        this.statusService = statusService;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.destroy$ = new Subject();
        this._checked = false;
        this._disabled = false;
        /**
         * Toggle status.
         * Possible values are: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`.
         */
        this.status = 'basic';
        /**
         * Toggle label position.
         * Possible values are: `left`, `right`, `start`, `end` (default)
         */
        this.labelPosition = 'end';
        /**
         * Output when checked state is changed by a user
         * @type EventEmitter<boolean>
         */
        this.checkedChange = new EventEmitter();
    }
    /**
     * Toggle checked
     * @type {boolean}
     */
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = convertToBoolProperty(value);
    }
    /**
     * Controls input disabled state
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
    }
    get primary() {
        return this.status === 'primary';
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
    get info() {
        return this.status === 'info';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    get labelLeft() {
        return this.labelPosition === 'left';
    }
    get labelRight() {
        return this.labelPosition === 'right';
    }
    get labelStart() {
        return this.labelPosition === 'start';
    }
    get labelEnd() {
        return this.labelPosition === 'end';
    }
    ngOnInit() {
        this.layoutDirection.onDirectionChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.changeDetector.detectChanges());
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.hostElement.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    checkState() {
        if (this.checked) {
            return this.layoutDirection.isLtr() ? 'right' : 'left';
        }
        return this.layoutDirection.isLtr() ? 'left' : 'right';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(val) {
        this.checked = val;
        this.changeDetector.markForCheck();
    }
    setDisabledState(val) {
        this.disabled = convertToBoolProperty(val);
        this.changeDetector.markForCheck();
    }
    updateValue(event) {
        const input = event.target;
        this.checked = input.checked;
        this.checkedChange.emit(this.checked);
        this.onChange(this.checked);
    }
    onInputClick(event) {
        event.stopPropagation();
    }
}
NbToggleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbToggleComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.NbLayoutDirectionService }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i2.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbToggleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbToggleComponent, selector: "nb-toggle", inputs: { checked: "checked", disabled: "disabled", status: "status", labelPosition: "labelPosition" }, outputs: { checkedChange: "checkedChange" }, host: { properties: { "class.status-primary": "this.primary", "class.status-success": "this.success", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-info": "this.info", "class.status-basic": "this.basic", "class.status-control": "this.control", "class": "this.additionalClasses", "class.toggle-label-left": "this.labelLeft", "class.toggle-label-right": "this.labelRight", "class.toggle-label-start": "this.labelStart", "class.toggle-label-end": "this.labelEnd" } }, providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NbToggleComponent),
            multi: true,
        }], ngImport: i0, template: `
    <label class="toggle-label">
      <input type="checkbox"
             class="native-input visually-hidden"
             role="switch"
             [attr.aria-checked]="checked"
             [disabled]="disabled"
             [checked]="checked"
             (change)="updateValue($event)"
             (blur)="onTouched()"
             (click)="onInputClick($event)">
      <div class="toggle" [class.checked]="checked">
        <span [@position]="checkState()" class="toggle-switcher">
          <nb-icon *ngIf="checked" icon="checkmark-bold-outline" pack="nebular-essentials"></nb-icon>
        </span>
      </div>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:inline-flex;outline:none}:host(.toggle-label-left) .text:not(:empty){padding-right:.6875rem}[dir=ltr] :host(.toggle-label-left) .text:not(:empty){order:-1}[dir=rtl] :host(.toggle-label-left) .text:not(:empty){order:1}:host(.toggle-label-right) .text:not(:empty){padding-left:.6875rem}[dir=ltr] :host(.toggle-label-right) .text:not(:empty){order:1}[dir=rtl] :host(.toggle-label-right) .text:not(:empty){order:-1}:host(.toggle-label-start) .toggle-label{flex-direction:row-reverse}[dir=ltr] :host(.toggle-label-start) .toggle-label .text:not(:empty){padding-right:.6875rem}[dir=rtl] :host(.toggle-label-start) .toggle-label .text:not(:empty),[dir=ltr] :host(.toggle-label-end) .text:not(:empty){padding-left:.6875rem}[dir=rtl] :host(.toggle-label-end) .text:not(:empty){padding-right:.6875rem}:host(.nb-transition) .toggle{transition-duration:.15s;transition-property:background-color,border,box-shadow;transition-timing-function:ease-in}.toggle-label{position:relative;display:inline-flex;align-items:center}.toggle{position:relative;display:inline-flex;box-sizing:content-box}.toggle-switcher{position:absolute;border-radius:50%;margin:1px}.toggle-switcher nb-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"], components: [{ type: i3.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], animations: [
        trigger('position', [
            state('right', style({ right: 0, left: '*' })),
            state('left', style({ left: 0, right: '*' })),
            transition(':enter', [animate(0)]),
            transition('right <=> left', [animate('0.15s')]),
        ]),
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbToggleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-toggle', animations: [
                        trigger('position', [
                            state('right', style({ right: 0, left: '*' })),
                            state('left', style({ left: 0, right: '*' })),
                            transition(':enter', [animate(0)]),
                            transition('right <=> left', [animate('0.15s')]),
                        ]),
                    ], template: `
    <label class="toggle-label">
      <input type="checkbox"
             class="native-input visually-hidden"
             role="switch"
             [attr.aria-checked]="checked"
             [disabled]="disabled"
             [checked]="checked"
             (change)="updateValue($event)"
             (blur)="onTouched()"
             (click)="onInputClick($event)">
      <div class="toggle" [class.checked]="checked">
        <span [@position]="checkState()" class="toggle-switcher">
          <nb-icon *ngIf="checked" icon="checkmark-bold-outline" pack="nebular-essentials"></nb-icon>
        </span>
      </div>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => NbToggleComponent),
                            multi: true,
                        }], changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:inline-flex;outline:none}:host(.toggle-label-left) .text:not(:empty){padding-right:.6875rem}[dir=ltr] :host(.toggle-label-left) .text:not(:empty){order:-1}[dir=rtl] :host(.toggle-label-left) .text:not(:empty){order:1}:host(.toggle-label-right) .text:not(:empty){padding-left:.6875rem}[dir=ltr] :host(.toggle-label-right) .text:not(:empty){order:1}[dir=rtl] :host(.toggle-label-right) .text:not(:empty){order:-1}:host(.toggle-label-start) .toggle-label{flex-direction:row-reverse}[dir=ltr] :host(.toggle-label-start) .toggle-label .text:not(:empty){padding-right:.6875rem}[dir=rtl] :host(.toggle-label-start) .toggle-label .text:not(:empty),[dir=ltr] :host(.toggle-label-end) .text:not(:empty){padding-left:.6875rem}[dir=rtl] :host(.toggle-label-end) .text:not(:empty){padding-right:.6875rem}:host(.nb-transition) .toggle{transition-duration:.15s;transition-property:background-color,border,box-shadow;transition-timing-function:ease-in}.toggle-label{position:relative;display:inline-flex;align-items:center}.toggle{position:relative;display:inline-flex;box-sizing:content-box}.toggle-switcher{position:absolute;border-radius:50%;margin:1px}.toggle-switcher nb-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NbLayoutDirectionService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i2.NbStatusService }]; }, propDecorators: { checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], status: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }], primary: [{
                type: HostBinding,
                args: ['class.status-primary']
            }], success: [{
                type: HostBinding,
                args: ['class.status-success']
            }], warning: [{
                type: HostBinding,
                args: ['class.status-warning']
            }], danger: [{
                type: HostBinding,
                args: ['class.status-danger']
            }], info: [{
                type: HostBinding,
                args: ['class.status-info']
            }], basic: [{
                type: HostBinding,
                args: ['class.status-basic']
            }], control: [{
                type: HostBinding,
                args: ['class.status-control']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }], labelLeft: [{
                type: HostBinding,
                args: ['class.toggle-label-left']
            }], labelRight: [{
                type: HostBinding,
                args: ['class.toggle-label-right']
            }], labelStart: [{
                type: HostBinding,
                args: ['class.toggle-label-start']
            }], labelEnd: [{
                type: HostBinding,
                args: ['class.toggle-label-end']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFVBQVUsRUFHVixNQUFNLEVBQ04sWUFBWSxFQUVaLHVCQUF1QixHQUt4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUszQyxPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDOzs7Ozs7QUFFbkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlPRztBQXdDSCxNQUFNLE9BQU8saUJBQWlCO0lBbUg1QixZQUNVLGNBQWlDLEVBQ2pDLGVBQXlDLEVBQ3pDLFFBQW1CLEVBQ25CLFdBQW9DLEVBQ3BDLElBQVksRUFDVixhQUE4QjtRQUxoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsb0JBQWUsR0FBZixlQUFlLENBQTBCO1FBQ3pDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDVixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUF2SDFDLGFBQVEsR0FBUSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUIsY0FBUyxHQUFRLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVuQixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQWEvQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBYTFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHbkM7OztXQUdHO1FBQ00sV0FBTSxHQUE4QixPQUFPLENBQUM7UUFFckQ7OztXQUdHO1FBQ00sa0JBQWEsR0FBdUMsS0FBSyxDQUFDO1FBRW5FOzs7V0FHRztRQUNPLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQXdFbkQsQ0FBQztJQW5ISjs7O09BR0c7SUFDSCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBSUQ7O09BRUc7SUFDSCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBc0JELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksaUJBQWlCO1FBQ25CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxNQUFNLENBQUM7SUFDdkMsQ0FBQztJQUVELElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQVdELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFO2FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELGVBQWU7UUFDYixjQUFjO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ3hEO1FBRUQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUN6RCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsR0FBWTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFZO1FBQ3RCLE1BQU0sS0FBSyxHQUFJLEtBQUssQ0FBQyxNQUEyQixDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFZO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs4R0FqTFUsaUJBQWlCO2tHQUFqQixpQkFBaUIsd3JCQVBqQixDQUFDO1lBQ1YsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ2hELEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQywwQkExQlE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JULG9vREE1Qlc7UUFDVixPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ2xCLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM5QyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDN0MsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2pELENBQUM7S0FDSDsyRkE4QlUsaUJBQWlCO2tCQXZDN0IsU0FBUzsrQkFDRSxXQUFXLGNBQ1Q7d0JBQ1YsT0FBTyxDQUFDLFVBQVUsRUFBRTs0QkFDbEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDOzRCQUM5QyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7NEJBQzdDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7eUJBQ2pELENBQUM7cUJBQ0gsWUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQlQsYUFFVSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDOzRCQUNoRCxLQUFLLEVBQUUsSUFBSTt5QkFDWixDQUFDLG1CQUNlLHVCQUF1QixDQUFDLE1BQU07bVBBYzNDLE9BQU87c0JBRFYsS0FBSztnQkFjRixRQUFRO3NCQURYLEtBQUs7Z0JBY0csTUFBTTtzQkFBZCxLQUFLO2dCQU1HLGFBQWE7c0JBQXJCLEtBQUs7Z0JBTUksYUFBYTtzQkFBdEIsTUFBTTtnQkFHSCxPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixNQUFNO3NCQURULFdBQVc7dUJBQUMscUJBQXFCO2dCQU05QixJQUFJO3NCQURQLFdBQVc7dUJBQUMsbUJBQW1CO2dCQU01QixLQUFLO3NCQURSLFdBQVc7dUJBQUMsb0JBQW9CO2dCQU03QixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixpQkFBaUI7c0JBRHBCLFdBQVc7dUJBQUMsT0FBTztnQkFTaEIsU0FBUztzQkFEWixXQUFXO3VCQUFDLHlCQUF5QjtnQkFNbEMsVUFBVTtzQkFEYixXQUFXO3VCQUFDLDBCQUEwQjtnQkFNbkMsVUFBVTtzQkFEYixXQUFXO3VCQUFDLDBCQUEwQjtnQkFNbkMsUUFBUTtzQkFEWCxXQUFXO3VCQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIE5nWm9uZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTmJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RhdHVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGlyZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyB9IGZyb20gJy4uL2NvbXBvbmVudC1zdGF0dXMnO1xuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5LCBOYkJvb2xlYW5JbnB1dCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG4vKipcbiAqIFRvZ2dsZSBpcyBhIGNvbnRyb2wgcmVwcmVzZW50aW5nIGBvbmAgYW5kIGBvZmZgIHN0YXRlcy5cbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKFNob3djYXNlLCB0b2dnbGUvdG9nZ2xlLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiAjIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogSW1wb3J0IGBOYlRvZ2dsZUNvbXBvbmVudGAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJUb2dnbGVNb2R1bGUsXG4gKiAgIF0sXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUgeyB9XG4gKiBgYGBcbiAqICMjIyBVc2FnZVxuICpcbiAqIFRvZ2dsZSBtYXkgaGF2ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBzdGF0dXNlczogYGJhc2ljYCwgYHByaW1hcnlgLCBgc3VjY2Vzc2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAsIGBpbmZvYCwgYGNvbnRyb2xgXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShUb2dnbGUgc3RhdHVzLCB0b2dnbGUvdG9nZ2xlLXN0YXR1cy5jb21wb25lbnQpXG4gKlxuICogVG9nZ2xlIGNhbiBiZSBkaXNhYmxlZCB2aWEgYGRpc2FibGVkYCBpbnB1dC5cbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKERpc2FibGVkIFRvZ2dsZXMsIHRvZ2dsZS90b2dnbGUtZGlzYWJsZWQuY29tcG9uZW50KVxuICpcbiAqIFRvZ2dsZSBtYXkgaGF2ZSBhIGxhYmVsIHdpdGggZm9sbG93aW5nIHBvc2l0aW9uczogYGxlZnRgLCBgcmlnaHRgLCBgc3RhcnRgLCBgZW5kYCAoZGVmYXVsdClcbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKFRvZ2dsZXMgV2l0aCBMYWJlbHMsIHRvZ2dsZS90b2dnbGUtbGFiZWwtcG9zaXRpb24uY29tcG9uZW50LnRzKVxuICpcbiAqIFlvdSBjYW4gc2V0IGNvbnRyb2wgc3RhdGUgdmlhIGBjaGVja2VkYCBiaW5kaW5nOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxuYi10b2dnbGUgWyhjaGVja2VkKV09XCJjaGVja2VkXCI+PC9uYi10b2dnbGU+XG4gKiBgYGBcbiAqXG4gKiBPciBpdCBjb3VsZCBiZSBzZXQgdmlhIHJlYWN0aXZlIGZvcm1zIG9yIG5nTW9kZWwgYmluZGluZ3M6XG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShUb2dnbGUgZm9ybSBiaW5kaW5nLCB0b2dnbGUvdG9nZ2xlLWZvcm0uY29tcG9uZW50KVxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiB0b2dnbGUtaGVpZ2h0OlxuICogdG9nZ2xlLXdpZHRoOlxuICogdG9nZ2xlLWJvcmRlci13aWR0aDpcbiAqIHRvZ2dsZS1ib3JkZXItcmFkaXVzOlxuICogdG9nZ2xlLW91dGxpbmUtd2lkdGg6XG4gKiB0b2dnbGUtb3V0bGluZS1jb2xvcjpcbiAqIHRvZ2dsZS1zd2l0Y2hlci1zaXplOlxuICogdG9nZ2xlLXN3aXRjaGVyLWljb24tc2l6ZTpcbiAqIHRvZ2dsZS10ZXh0LWZvbnQtZmFtaWx5OlxuICogdG9nZ2xlLXRleHQtZm9udC1zaXplOlxuICogdG9nZ2xlLXRleHQtZm9udC13ZWlnaHQ6XG4gKiB0b2dnbGUtdGV4dC1saW5lLWhlaWdodDpcbiAqIHRvZ2dsZS1jdXJzb3I6XG4gKiB0b2dnbGUtZGlzYWJsZWQtY3Vyc29yOlxuICogdG9nZ2xlLWJhc2ljLXRleHQtY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjpcbiAqIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogdG9nZ2xlLXByaW1hcnktdGV4dC1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOlxuICogdG9nZ2xlLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6XG4gKiB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogdG9nZ2xlLXN1Y2Nlc3MtdGV4dC1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOlxuICogdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6XG4gKiB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogdG9nZ2xlLWluZm8tdGV4dC1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtaW5mby1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtaW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtaW5mby1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOlxuICogdG9nZ2xlLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWluZm8tYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtaW5mby1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6XG4gKiB0b2dnbGUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogdG9nZ2xlLXdhcm5pbmctdGV4dC1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOlxuICogdG9nZ2xlLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6XG4gKiB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci10ZXh0LWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOlxuICogdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogdG9nZ2xlLWNvbnRyb2wtdGV4dC1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOlxuICogdG9nZ2xlLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6XG4gKiB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi10b2dnbGUnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigncG9zaXRpb24nLCBbXG4gICAgICBzdGF0ZSgncmlnaHQnLCBzdHlsZSh7IHJpZ2h0OiAwLCBsZWZ0OiAnKicgfSkpLFxuICAgICAgc3RhdGUoJ2xlZnQnLCBzdHlsZSh7IGxlZnQ6IDAsIHJpZ2h0OiAnKicgfSkpLFxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW2FuaW1hdGUoMCldKSxcbiAgICAgIHRyYW5zaXRpb24oJ3JpZ2h0IDw9PiBsZWZ0JywgW2FuaW1hdGUoJzAuMTVzJyldKSxcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgY2xhc3M9XCJ0b2dnbGUtbGFiZWxcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgIGNsYXNzPVwibmF0aXZlLWlucHV0IHZpc3VhbGx5LWhpZGRlblwiXG4gICAgICAgICAgICAgcm9sZT1cInN3aXRjaFwiXG4gICAgICAgICAgICAgW2F0dHIuYXJpYS1jaGVja2VkXT1cImNoZWNrZWRcIlxuICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgICAgICAgICAgKGNoYW5nZSk9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoKVwiXG4gICAgICAgICAgICAgKGNsaWNrKT1cIm9uSW5wdXRDbGljaygkZXZlbnQpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlXCIgW2NsYXNzLmNoZWNrZWRdPVwiY2hlY2tlZFwiPlxuICAgICAgICA8c3BhbiBbQHBvc2l0aW9uXT1cImNoZWNrU3RhdGUoKVwiIGNsYXNzPVwidG9nZ2xlLXN3aXRjaGVyXCI+XG4gICAgICAgICAgPG5iLWljb24gKm5nSWY9XCJjaGVja2VkXCIgaWNvbj1cImNoZWNrbWFyay1ib2xkLW91dGxpbmVcIiBwYWNrPVwibmVidWxhci1lc3NlbnRpYWxzXCI+PC9uYi1pY29uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbIGAuL3RvZ2dsZS5jb21wb25lbnQuc2Nzc2AgXSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5iVG9nZ2xlQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYlRvZ2dsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHsgfTtcbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7IH07XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBjaGVja2VkXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cbiAgc2V0IGNoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGVja2VkID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9jaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jaGVja2VkOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogQ29udHJvbHMgaW5wdXQgZGlzYWJsZWQgc3RhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBzdGF0dXMuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBhcmU6IGBiYXNpY2AsIGBwcmltYXJ5YCwgYHN1Y2Nlc3NgLCBgd2FybmluZ2AsIGBkYW5nZXJgLCBgaW5mb2AsIGBjb250cm9sYC5cbiAgICovXG4gIEBJbnB1dCgpIHN0YXR1czogTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyA9ICdiYXNpYyc7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBsYWJlbCBwb3NpdGlvbi5cbiAgICogUG9zc2libGUgdmFsdWVzIGFyZTogYGxlZnRgLCBgcmlnaHRgLCBgc3RhcnRgLCBgZW5kYCAoZGVmYXVsdClcbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsUG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnc3RhcnQnIHwgJ2VuZCcgPSAnZW5kJztcblxuICAvKipcbiAgICogT3V0cHV0IHdoZW4gY2hlY2tlZCBzdGF0ZSBpcyBjaGFuZ2VkIGJ5IGEgdXNlclxuICAgKiBAdHlwZSBFdmVudEVtaXR0ZXI8Ym9vbGVhbj5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXByaW1hcnknKVxuICBnZXQgcHJpbWFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdwcmltYXJ5JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXN1Y2Nlc3MnKVxuICBnZXQgc3VjY2VzcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXdhcm5pbmcnKVxuICBnZXQgd2FybmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICd3YXJuaW5nJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWRhbmdlcicpXG4gIGdldCBkYW5nZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnZGFuZ2VyJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWluZm8nKVxuICBnZXQgaW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdpbmZvJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWJhc2ljJylcbiAgZ2V0IGJhc2ljKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Jhc2ljJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWNvbnRyb2wnKVxuICBnZXQgY29udHJvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdjb250cm9sJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgYWRkaXRpb25hbENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLnN0YXR1c1NlcnZpY2UuaXNDdXN0b21TdGF0dXModGhpcy5zdGF0dXMpKSB7XG4gICAgICByZXR1cm4gW3RoaXMuc3RhdHVzU2VydmljZS5nZXRTdGF0dXNDbGFzcyh0aGlzLnN0YXR1cyldO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRvZ2dsZS1sYWJlbC1sZWZ0JylcbiAgZ2V0IGxhYmVsTGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbFBvc2l0aW9uID09PSAnbGVmdCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRvZ2dsZS1sYWJlbC1yaWdodCcpXG4gIGdldCBsYWJlbFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdyaWdodCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRvZ2dsZS1sYWJlbC1zdGFydCcpXG4gIGdldCBsYWJlbFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdzdGFydCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRvZ2dsZS1sYWJlbC1lbmQnKVxuICBnZXQgbGFiZWxFbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxQb3NpdGlvbiA9PT0gJ2VuZCc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGxheW91dERpcmVjdGlvbjogTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgc3RhdHVzU2VydmljZTogTmJTdGF0dXNTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sYXlvdXREaXJlY3Rpb24ub25EaXJlY3Rpb25DaGFuZ2UoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gVE9ETzogIzIyNTRcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ25iLXRyYW5zaXRpb24nKTtcbiAgICB9KSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBjaGVja1N0YXRlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgcmV0dXJuIHRoaXMubGF5b3V0RGlyZWN0aW9uLmlzTHRyKCkgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxheW91dERpcmVjdGlvbi5pc0x0cigpID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWw6IGFueSkge1xuICAgIHRoaXMuY2hlY2tlZCA9IHZhbDtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KTtcbiAgICB0aGlzLmNoZWNrZWQgPSBpbnB1dC5jaGVja2VkO1xuICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNoZWNrZWQpO1xuICB9XG5cbiAgb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=