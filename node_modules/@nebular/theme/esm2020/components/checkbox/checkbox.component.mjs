/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding, forwardRef, Output, EventEmitter, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
import * as i2 from "../icon/icon.component";
import * as i3 from "@angular/common";
/**
 * Styled checkbox component
 *
 * @stacked-example(Showcase, checkbox/checkbox-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCheckboxComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCheckboxModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Checkbox is available in multiple colors using `status` property:
 * @stacked-example(Colored Checkboxes, checkbox/checkbox-status.component)
 *
 * Indeterminate state is also supported:
 * @stacked-example(Indeterminate Checkbox, checkbox/checkbox-indeterminate.component)
 *
 * Checkbox can be disabled via `disabled` attribute.
 * @stacked-example(Disabled Checkbox, checkbox/checkbox-disabled.component)
 *
 * @styles
 *
 * checkbox-height:
 * checkbox-width:
 * checkbox-border-style:
 * checkbox-border-width:
 * checkbox-border-radius:
 * checkbox-outline-width:
 * checkbox-outline-color:
 * checkbox-text-font-family:
 * checkbox-text-font-size:
 * checkbox-text-font-weight:
 * checkbox-text-line-height:
 * checkbox-text-space:
 * checkbox-padding:
 * checkbox-focus-inset-shadow-length:
 * checkbox-basic-text-color:
 * checkbox-basic-background-color:
 * checkbox-basic-border-color:
 * checkbox-basic-checked-background-color:
 * checkbox-basic-checked-border-color:
 * checkbox-basic-checked-checkmark-color:
 * checkbox-basic-indeterminate-background-color:
 * checkbox-basic-indeterminate-border-color:
 * checkbox-basic-indeterminate-checkmark-color:
 * checkbox-basic-focus-background-color:
 * checkbox-basic-focus-border-color:
 * checkbox-basic-focus-checked-background-color:
 * checkbox-basic-focus-checked-border-color:
 * checkbox-basic-hover-background-color:
 * checkbox-basic-hover-border-color:
 * checkbox-basic-hover-checked-background-color:
 * checkbox-basic-hover-checked-border-color:
 * checkbox-basic-active-background-color:
 * checkbox-basic-active-border-color:
 * checkbox-basic-active-checked-background-color:
 * checkbox-basic-active-checked-border-color:
 * checkbox-basic-disabled-background-color:
 * checkbox-basic-disabled-border-color:
 * checkbox-basic-disabled-checkmark-color:
 * checkbox-basic-disabled-text-color:
 * checkbox-basic-disabled-checked-background-color:
 * checkbox-primary-text-color:
 * checkbox-primary-background-color:
 * checkbox-primary-border-color:
 * checkbox-primary-checked-background-color:
 * checkbox-primary-checked-border-color:
 * checkbox-primary-checked-checkmark-color:
 * checkbox-primary-indeterminate-background-color:
 * checkbox-primary-indeterminate-border-color:
 * checkbox-primary-indeterminate-checkmark-color:
 * checkbox-primary-focus-background-color:
 * checkbox-primary-focus-border-color:
 * checkbox-primary-focus-checked-background-color:
 * checkbox-primary-focus-checked-border-color:
 * checkbox-primary-hover-background-color:
 * checkbox-primary-hover-border-color:
 * checkbox-primary-hover-checked-background-color:
 * checkbox-primary-hover-checked-border-color:
 * checkbox-primary-active-background-color:
 * checkbox-primary-active-border-color:
 * checkbox-primary-active-checked-background-color:
 * checkbox-primary-active-checked-border-color:
 * checkbox-primary-disabled-background-color:
 * checkbox-primary-disabled-border-color:
 * checkbox-primary-disabled-checkmark-color:
 * checkbox-primary-disabled-text-color:
 * checkbox-primary-disabled-checked-background-color:
 * checkbox-success-text-color:
 * checkbox-success-background-color:
 * checkbox-success-border-color:
 * checkbox-success-checked-background-color:
 * checkbox-success-checked-border-color:
 * checkbox-success-checked-checkmark-color:
 * checkbox-success-indeterminate-background-color:
 * checkbox-success-indeterminate-border-color:
 * checkbox-success-indeterminate-checkmark-color:
 * checkbox-success-focus-background-color:
 * checkbox-success-focus-border-color:
 * checkbox-success-focus-checked-background-color:
 * checkbox-success-focus-checked-border-color:
 * checkbox-success-hover-background-color:
 * checkbox-success-hover-border-color:
 * checkbox-success-hover-checked-background-color:
 * checkbox-success-hover-checked-border-color:
 * checkbox-success-active-background-color:
 * checkbox-success-active-border-color:
 * checkbox-success-active-checked-background-color:
 * checkbox-success-active-checked-border-color:
 * checkbox-success-disabled-background-color:
 * checkbox-success-disabled-border-color:
 * checkbox-success-disabled-checkmark-color:
 * checkbox-success-disabled-text-color:
 * checkbox-success-disabled-checked-background-color:
 * checkbox-info-text-color:
 * checkbox-info-background-color:
 * checkbox-info-border-color:
 * checkbox-info-checked-background-color:
 * checkbox-info-checked-border-color:
 * checkbox-info-checked-checkmark-color:
 * checkbox-info-indeterminate-background-color:
 * checkbox-info-indeterminate-border-color:
 * checkbox-info-indeterminate-checkmark-color:
 * checkbox-info-focus-background-color:
 * checkbox-info-focus-border-color:
 * checkbox-info-focus-checked-background-color:
 * checkbox-info-focus-checked-border-color:
 * checkbox-info-hover-background-color:
 * checkbox-info-hover-border-color:
 * checkbox-info-hover-checked-background-color:
 * checkbox-info-hover-checked-border-color:
 * checkbox-info-active-background-color:
 * checkbox-info-active-border-color:
 * checkbox-info-active-checked-background-color:
 * checkbox-info-active-checked-border-color:
 * checkbox-info-disabled-background-color:
 * checkbox-info-disabled-border-color:
 * checkbox-info-disabled-checkmark-color:
 * checkbox-info-disabled-text-color:
 * checkbox-info-disabled-checked-background-color:
 * checkbox-warning-text-color:
 * checkbox-warning-background-color:
 * checkbox-warning-border-color:
 * checkbox-warning-checked-background-color:
 * checkbox-warning-checked-border-color:
 * checkbox-warning-checked-checkmark-color:
 * checkbox-warning-indeterminate-background-color:
 * checkbox-warning-indeterminate-border-color:
 * checkbox-warning-indeterminate-checkmark-color:
 * checkbox-warning-focus-background-color:
 * checkbox-warning-focus-border-color:
 * checkbox-warning-focus-checked-background-color:
 * checkbox-warning-focus-checked-border-color:
 * checkbox-warning-hover-background-color:
 * checkbox-warning-hover-border-color:
 * checkbox-warning-hover-checked-background-color:
 * checkbox-warning-hover-checked-border-color:
 * checkbox-warning-active-background-color:
 * checkbox-warning-active-border-color:
 * checkbox-warning-active-checked-background-color:
 * checkbox-warning-active-checked-border-color:
 * checkbox-warning-disabled-background-color:
 * checkbox-warning-disabled-border-color:
 * checkbox-warning-disabled-checkmark-color:
 * checkbox-warning-disabled-text-color:
 * checkbox-warning-disabled-checked-background-color:
 * checkbox-danger-text-color:
 * checkbox-danger-background-color:
 * checkbox-danger-border-color:
 * checkbox-danger-checked-background-color:
 * checkbox-danger-checked-border-color:
 * checkbox-danger-checked-checkmark-color:
 * checkbox-danger-indeterminate-background-color:
 * checkbox-danger-indeterminate-border-color:
 * checkbox-danger-indeterminate-checkmark-color:
 * checkbox-danger-focus-background-color:
 * checkbox-danger-focus-border-color:
 * checkbox-danger-focus-checked-background-color:
 * checkbox-danger-focus-checked-border-color:
 * checkbox-danger-hover-background-color:
 * checkbox-danger-hover-border-color:
 * checkbox-danger-hover-checked-background-color:
 * checkbox-danger-hover-checked-border-color:
 * checkbox-danger-active-background-color:
 * checkbox-danger-active-border-color:
 * checkbox-danger-active-checked-background-color:
 * checkbox-danger-active-checked-border-color:
 * checkbox-danger-disabled-background-color:
 * checkbox-danger-disabled-border-color:
 * checkbox-danger-disabled-checkmark-color:
 * checkbox-danger-disabled-text-color:
 * checkbox-danger-disabled-checked-background-color:
 * checkbox-control-text-color:
 * checkbox-control-background-color:
 * checkbox-control-border-color:
 * checkbox-control-checked-background-color:
 * checkbox-control-checked-border-color:
 * checkbox-control-checked-checkmark-color:
 * checkbox-control-indeterminate-background-color:
 * checkbox-control-indeterminate-border-color:
 * checkbox-control-indeterminate-checkmark-color:
 * checkbox-control-focus-background-color:
 * checkbox-control-focus-border-color:
 * checkbox-control-focus-checked-background-color:
 * checkbox-control-focus-checked-border-color:
 * checkbox-control-hover-background-color:
 * checkbox-control-hover-border-color:
 * checkbox-control-hover-checked-background-color:
 * checkbox-control-hover-checked-border-color:
 * checkbox-control-active-background-color:
 * checkbox-control-active-border-color:
 * checkbox-control-active-checked-background-color:
 * checkbox-control-active-checked-border-color:
 * checkbox-control-disabled-background-color:
 * checkbox-control-disabled-border-color:
 * checkbox-control-disabled-checkmark-color:
 * checkbox-control-disabled-text-color:
 * checkbox-control-disabled-checked-background-color:
 */
export class NbCheckboxComponent {
    constructor(changeDetector, renderer, hostElement, zone, statusService) {
        this.changeDetector = changeDetector;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.zone = zone;
        this.statusService = statusService;
        this.onChange = () => { };
        this.onTouched = () => { };
        this._checked = false;
        this._disabled = false;
        /**
         * Checkbox status.
         * Possible values are: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`.
         */
        this.status = 'basic';
        this._indeterminate = false;
        /**
         * Output when checked state is changed by a user
         * @type EventEmitter<boolean>
         */
        this.checkedChange = new EventEmitter();
    }
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
    /**
     * Controls checkbox indeterminate state
     */
    get indeterminate() {
        return this._indeterminate;
    }
    set indeterminate(value) {
        this._indeterminate = convertToBoolProperty(value);
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
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.hostElement.nativeElement, 'nb-transition');
        }));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(val) {
        this._checked = val;
        this.changeDetector.markForCheck();
    }
    setDisabledState(val) {
        this.disabled = convertToBoolProperty(val);
        this.changeDetector.markForCheck();
    }
    setTouched() {
        this.onTouched();
    }
    updateValueAndIndeterminate(event) {
        const input = event.target;
        this.checked = input.checked;
        this.checkedChange.emit(this.checked);
        this.onChange(this.checked);
        this.indeterminate = input.indeterminate;
    }
}
NbCheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCheckboxComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCheckboxComponent, selector: "nb-checkbox", inputs: { checked: "checked", disabled: "disabled", status: "status", indeterminate: "indeterminate" }, outputs: { checkedChange: "checkedChange" }, host: { properties: { "class.status-primary": "this.primary", "class.status-success": "this.success", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-info": "this.info", "class.status-basic": "this.basic", "class.status-control": "this.control", "class": "this.additionalClasses" } }, providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NbCheckboxComponent),
            multi: true,
        }], ngImport: i0, template: `
    <label class="label">
      <input type="checkbox" class="native-input visually-hidden"
             [disabled]="disabled"
             [checked]="checked"
             (change)="updateValueAndIndeterminate($event)"
             (blur)="setTouched()"
             (click)="$event.stopPropagation()"
             [indeterminate]="indeterminate">
      <span [class.indeterminate]="indeterminate" [class.checked]="checked" class="custom-checkbox">
        <nb-icon *ngIf="indeterminate" icon="minus-bold-outline" pack="nebular-essentials" class="custom-checkbox-icon"></nb-icon>
        <nb-icon *ngIf="checked && !indeterminate" icon="checkmark-bold-outline" pack="nebular-essentials" class="custom-checkbox-icon"></nb-icon>
      </span>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host .label{position:relative;display:inline-flex;align-items:center;margin:0;min-height:inherit}:host .custom-checkbox{flex-shrink:0}:host(.nb-transition) .custom-checkbox{transition-duration:.15s;transition-property:background-color,border,box-shadow;transition-timing-function:ease-in}:host(.nb-transition) .text{transition-duration:.15s;transition-property:color;transition-timing-function:ease-in}\n"], components: [{ type: i2.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-checkbox', template: `
    <label class="label">
      <input type="checkbox" class="native-input visually-hidden"
             [disabled]="disabled"
             [checked]="checked"
             (change)="updateValueAndIndeterminate($event)"
             (blur)="setTouched()"
             (click)="$event.stopPropagation()"
             [indeterminate]="indeterminate">
      <span [class.indeterminate]="indeterminate" [class.checked]="checked" class="custom-checkbox">
        <nb-icon *ngIf="indeterminate" icon="minus-bold-outline" pack="nebular-essentials" class="custom-checkbox-icon"></nb-icon>
        <nb-icon *ngIf="checked && !indeterminate" icon="checkmark-bold-outline" pack="nebular-essentials" class="custom-checkbox-icon"></nb-icon>
      </span>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => NbCheckboxComponent),
                            multi: true,
                        }], changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host .label{position:relative;display:inline-flex;align-items:center;margin:0;min-height:inherit}:host .custom-checkbox{flex-shrink:0}:host(.nb-transition) .custom-checkbox{transition-duration:.15s;transition-property:background-color,border,box-shadow;transition-timing-function:ease-in}:host(.nb-transition) .text{transition-duration:.15s;transition-property:color;transition-timing-function:ease-in}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.NbStatusService }]; }, propDecorators: { checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], status: [{
                type: Input
            }], indeterminate: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFVBQVUsRUFFVixNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixHQUt4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJekUsT0FBTyxFQUFFLHFCQUFxQixFQUFrQixNQUFNLFlBQVksQ0FBQzs7Ozs7QUFFbkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrT0c7QUE2QkgsTUFBTSxPQUFPLG1CQUFtQjtJQWdHOUIsWUFDVSxjQUFpQyxFQUNqQyxRQUFtQixFQUNuQixXQUFvQyxFQUNwQyxJQUFZLEVBQ1osYUFBOEI7UUFKOUIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFuR3hDLGFBQVEsR0FBUSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUIsY0FBUyxHQUFR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O2dCQWNJLGFBQWE7c0JBQXRCLE1BQU07Z0JBR0gsT0FBTztzQkFEVixXQUFXO3VCQUFDLHNCQUFzQjtnQkFNL0IsT0FBTztzQkFEVixXQUFXO3VCQUFDLHNCQUFzQjtnQkFNL0IsT0FBTztzQkFEVixXQUFXO3VCQUFDLHNCQUFzQjtnQkFNL0IsTUFBTTtzQkFEVCxXQUFXO3VCQUFDLHFCQUFxQjtnQkFNOUIsSUFBSTtzQkFEUCxXQUFXO3VCQUFDLG1CQUFtQjtnQkFNNUIsS0FBSztzQkFEUixXQUFXO3VCQUFDLG9CQUFvQjtnQkFNN0IsT0FBTztzQkFEVixXQUFXO3VCQUFDLHNCQUFzQjtnQkFNL0IsaUJBQWlCO3NCQURwQixXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBmb3J3YXJkUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIE5nWm9uZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5iU3RhdHVzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0YXR1cy5zZXJ2aWNlJztcbmltcG9ydCB7IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgfSBmcm9tICcuLi9jb21wb25lbnQtc3RhdHVzJztcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLyoqXG4gKiBTdHlsZWQgY2hlY2tib3ggY29tcG9uZW50XG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgY2hlY2tib3gvY2hlY2tib3gtc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqICMjIyBJbnN0YWxsYXRpb25cbiAqXG4gKiBJbXBvcnQgYE5iQ2hlY2tib3hDb21wb25lbnRgIHRvIHlvdXIgZmVhdHVyZSBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iQ2hlY2tib3hNb2R1bGUsXG4gKiAgIF0sXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUgeyB9XG4gKiBgYGBcbiAqICMjIyBVc2FnZVxuICpcbiAqIENoZWNrYm94IGlzIGF2YWlsYWJsZSBpbiBtdWx0aXBsZSBjb2xvcnMgdXNpbmcgYHN0YXR1c2AgcHJvcGVydHk6XG4gKiBAc3RhY2tlZC1leGFtcGxlKENvbG9yZWQgQ2hlY2tib3hlcywgY2hlY2tib3gvY2hlY2tib3gtc3RhdHVzLmNvbXBvbmVudClcbiAqXG4gKiBJbmRldGVybWluYXRlIHN0YXRlIGlzIGFsc28gc3VwcG9ydGVkOlxuICogQHN0YWNrZWQtZXhhbXBsZShJbmRldGVybWluYXRlIENoZWNrYm94LCBjaGVja2JveC9jaGVja2JveC1pbmRldGVybWluYXRlLmNvbXBvbmVudClcbiAqXG4gKiBDaGVja2JveCBjYW4gYmUgZGlzYWJsZWQgdmlhIGBkaXNhYmxlZGAgYXR0cmlidXRlLlxuICogQHN0YWNrZWQtZXhhbXBsZShEaXNhYmxlZCBDaGVja2JveCwgY2hlY2tib3gvY2hlY2tib3gtZGlzYWJsZWQuY29tcG9uZW50KVxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiBjaGVja2JveC1oZWlnaHQ6XG4gKiBjaGVja2JveC13aWR0aDpcbiAqIGNoZWNrYm94LWJvcmRlci1zdHlsZTpcbiAqIGNoZWNrYm94LWJvcmRlci13aWR0aDpcbiAqIGNoZWNrYm94LWJvcmRlci1yYWRpdXM6XG4gKiBjaGVja2JveC1vdXRsaW5lLXdpZHRoOlxuICogY2hlY2tib3gtb3V0bGluZS1jb2xvcjpcbiAqIGNoZWNrYm94LXRleHQtZm9udC1mYW1pbHk6XG4gKiBjaGVja2JveC10ZXh0LWZvbnQtc2l6ZTpcbiAqIGNoZWNrYm94LXRleHQtZm9udC13ZWlnaHQ6XG4gKiBjaGVja2JveC10ZXh0LWxpbmUtaGVpZ2h0OlxuICogY2hlY2tib3gtdGV4dC1zcGFjZTpcbiAqIGNoZWNrYm94LXBhZGRpbmc6XG4gKiBjaGVja2JveC1mb2N1cy1pbnNldC1zaGFkb3ctbGVuZ3RoOlxuICogY2hlY2tib3gtYmFzaWMtdGV4dC1jb2xvcjpcbiAqIGNoZWNrYm94LWJhc2ljLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1iYXNpYy1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1iYXNpYy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LWJhc2ljLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOlxuICogY2hlY2tib3gtYmFzaWMtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtYmFzaWMtaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1iYXNpYy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjpcbiAqIGNoZWNrYm94LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1iYXNpYy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1iYXNpYy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1iYXNpYy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOlxuICogY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LXByaW1hcnktdGV4dC1jb2xvcjpcbiAqIGNoZWNrYm94LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LXByaW1hcnktYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1wcmltYXJ5LWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjpcbiAqIGNoZWNrYm94LXByaW1hcnktaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LXByaW1hcnktaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6XG4gKiBjaGVja2JveC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LXByaW1hcnktZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1wcmltYXJ5LWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjpcbiAqIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtc3VjY2Vzcy10ZXh0LWNvbG9yOlxuICogY2hlY2tib3gtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtc3VjY2Vzcy1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOlxuICogY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1zdWNjZXNzLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjpcbiAqIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOlxuICogY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1pbmZvLXRleHQtY29sb3I6XG4gKiBjaGVja2JveC1pbmZvLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1pbmZvLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LWluZm8tY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtaW5mby1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LWluZm8tY2hlY2tlZC1jaGVja21hcmstY29sb3I6XG4gKiBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOlxuICogY2hlY2tib3gtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LWluZm8tZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtaW5mby1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1pbmZvLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1pbmZvLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtaW5mby1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6XG4gKiBjaGVja2JveC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6XG4gKiBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LXdhcm5pbmctdGV4dC1jb2xvcjpcbiAqIGNoZWNrYm94LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LXdhcm5pbmctYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC13YXJuaW5nLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjpcbiAqIGNoZWNrYm94LXdhcm5pbmctaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LXdhcm5pbmctaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6XG4gKiBjaGVja2JveC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtd2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC13YXJuaW5nLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjpcbiAqIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtZGFuZ2VyLXRleHQtY29sb3I6XG4gKiBjaGVja2JveC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LWRhbmdlci1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtZGFuZ2VyLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOlxuICogY2hlY2tib3gtZGFuZ2VyLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjpcbiAqIGNoZWNrYm94LWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LWRhbmdlci1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1kYW5nZXItZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOlxuICogY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6XG4gKiBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtY29udHJvbC10ZXh0LWNvbG9yOlxuICogY2hlY2tib3gtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtY29udHJvbC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOlxuICogY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1jb250cm9sLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjpcbiAqIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1jb250cm9sLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogY2hlY2tib3gtY29udHJvbC1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hlY2tib3gtY29udHJvbC1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjpcbiAqIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOlxuICogY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNoZWNrYm94JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwibmF0aXZlLWlucHV0IHZpc3VhbGx5LWhpZGRlblwiXG4gICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcbiAgICAgICAgICAgICAoY2hhbmdlKT1cInVwZGF0ZVZhbHVlQW5kSW5kZXRlcm1pbmF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAoYmx1cik9XCJzZXRUb3VjaGVkKClcIlxuICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cImluZGV0ZXJtaW5hdGVcIj5cbiAgICAgIDxzcGFuIFtjbGFzcy5pbmRldGVybWluYXRlXT1cImluZGV0ZXJtaW5hdGVcIiBbY2xhc3MuY2hlY2tlZF09XCJjaGVja2VkXCIgY2xhc3M9XCJjdXN0b20tY2hlY2tib3hcIj5cbiAgICAgICAgPG5iLWljb24gKm5nSWY9XCJpbmRldGVybWluYXRlXCIgaWNvbj1cIm1pbnVzLWJvbGQtb3V0bGluZVwiIHBhY2s9XCJuZWJ1bGFyLWVzc2VudGlhbHNcIiBjbGFzcz1cImN1c3RvbS1jaGVja2JveC1pY29uXCI+PC9uYi1pY29uPlxuICAgICAgICA8bmItaWNvbiAqbmdJZj1cImNoZWNrZWQgJiYgIWluZGV0ZXJtaW5hdGVcIiBpY29uPVwiY2hlY2ttYXJrLWJvbGQtb3V0bGluZVwiIHBhY2s9XCJuZWJ1bGFyLWVzc2VudGlhbHNcIiBjbGFzcz1cImN1c3RvbS1jaGVja2JveC1pY29uXCI+PC9uYi1pY29uPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuICBgLFxuICBzdHlsZVVybHM6IFsgYC4vY2hlY2tib3guY29tcG9uZW50LnNjc3NgIF0sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOYkNoZWNrYm94Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7IH07XG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4geyB9O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG4gIHNldCBjaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2hlY2tlZCA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY2hlY2tlZDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIGlucHV0IGRpc2FibGVkIHN0YXRlXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBDaGVja2JveCBzdGF0dXMuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBhcmU6IGBiYXNpY2AsIGBwcmltYXJ5YCwgYHN1Y2Nlc3NgLCBgd2FybmluZ2AsIGBkYW5nZXJgLCBgaW5mb2AsIGBjb250cm9sYC5cbiAgICovXG4gIEBJbnB1dCgpIHN0YXR1czogTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyA9ICdiYXNpYyc7XG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIGNoZWNrYm94IGluZGV0ZXJtaW5hdGUgc3RhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBpbmRldGVybWluYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmRldGVybWluYXRlO1xuICB9XG4gIHNldCBpbmRldGVybWluYXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaW5kZXRlcm1pbmF0ZTogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIE91dHB1dCB3aGVuIGNoZWNrZWQgc3RhdGUgaXMgY2hhbmdlZCBieSBhIHVzZXJcbiAgICogQHR5cGUgRXZlbnRFbWl0dGVyPGJvb2xlYW4+XG4gICAqL1xuICBAT3V0cHV0KCkgY2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1wcmltYXJ5JylcbiAgZ2V0IHByaW1hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAncHJpbWFyeSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1zdWNjZXNzJylcbiAgZ2V0IHN1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnc3VjY2Vzcyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy13YXJuaW5nJylcbiAgZ2V0IHdhcm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnd2FybmluZyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1kYW5nZXInKVxuICBnZXQgZGFuZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Rhbmdlcic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1pbmZvJylcbiAgZ2V0IGluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnaW5mbyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1iYXNpYycpXG4gIGdldCBiYXNpYygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdiYXNpYyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1jb250cm9sJylcbiAgZ2V0IGNvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnY29udHJvbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGFkZGl0aW9uYWxDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5zdGF0dXNTZXJ2aWNlLmlzQ3VzdG9tU3RhdHVzKHRoaXMuc3RhdHVzKSkge1xuICAgICAgcmV0dXJuIFt0aGlzLnN0YXR1c1NlcnZpY2UuZ2V0U3RhdHVzQ2xhc3ModGhpcy5zdGF0dXMpXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgc3RhdHVzU2VydmljZTogTmJTdGF0dXNTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIFRPRE86ICMyMjU0XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICduYi10cmFuc2l0aW9uJyk7XG4gICAgfSkpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbDogYW55KSB7XG4gICAgdGhpcy5fY2hlY2tlZCA9IHZhbDtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNldFRvdWNoZWQoKSB7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlQW5kSW5kZXRlcm1pbmF0ZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCk7XG4gICAgdGhpcy5jaGVja2VkID0gaW5wdXQuY2hlY2tlZDtcbiAgICB0aGlzLmNoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWQpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5jaGVja2VkKTtcbiAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBpbnB1dC5pbmRldGVybWluYXRlO1xuICB9XG59XG4iXX0=