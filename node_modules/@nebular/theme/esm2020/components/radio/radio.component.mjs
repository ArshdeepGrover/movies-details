/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, ViewChild, ElementRef, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
/**
 * The `NbRadioComponent` provides the same functionality as native `<input type="radio">`
 * with Nebular styles and animations.
 *
 * @stacked-example(Showcase, radio/radio-showcase.component)
 *
 * ### Installation
 *
 * Import `NbRadioModule` to your feature module.
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbRadioModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * Radio buttons should be wrapped in `nb-radio-group` to provide form bindings.
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * You can disable some radios in the group using a `disabled` attribute.
 *
 * @stacked-example(Disabled, radio/radio-disabled.component)
 *
 *
 * @styles
 *
 * radio-width:
 * radio-height:
 * radio-border-style:
 * radio-border-width:
 * radio-text-font-family:
 * radio-text-font-size:
 * radio-text-font-weight:
 * radio-text-line-height:
 * radio-outline-color:
 * radio-outline-width:
 * radio-basic-text-color:
 * radio-basic-border-color:
 * radio-basic-background-color:
 * radio-basic-checked-background-color:
 * radio-basic-checked-border-color:
 * radio-basic-inner-circle-color:
 * radio-basic-focus-border-color:
 * radio-basic-focus-inner-circle-color:
 * radio-basic-hover-background-color:
 * radio-basic-hover-border-color:
 * radio-basic-hover-inner-circle-color:
 * radio-basic-hover-checked-background-color:
 * radio-basic-active-border-color:
 * radio-basic-active-inner-circle-color:
 * radio-basic-disabled-background-color:
 * radio-basic-disabled-border-color:
 * radio-basic-disabled-text-color:
 * radio-basic-disabled-checked-background-color:
 * radio-basic-disabled-checked-border-color:
 * radio-basic-disabled-checked-inner-circle-color:
 * radio-primary-text-color:
 * radio-primary-border-color:
 * radio-primary-background-color:
 * radio-primary-checked-background-color:
 * radio-primary-checked-border-color:
 * radio-primary-inner-circle-color:
 * radio-primary-focus-border-color:
 * radio-primary-focus-inner-circle-color:
 * radio-primary-hover-background-color:
 * radio-primary-hover-border-color:
 * radio-primary-hover-inner-circle-color:
 * radio-primary-hover-checked-background-color:
 * radio-primary-active-border-color:
 * radio-primary-active-inner-circle-color:
 * radio-primary-disabled-background-color:
 * radio-primary-disabled-border-color:
 * radio-primary-disabled-text-color:
 * radio-primary-disabled-checked-background-color:
 * radio-primary-disabled-checked-border-color:
 * radio-primary-disabled-checked-inner-circle-color:
 * radio-success-text-color:
 * radio-success-border-color:
 * radio-success-background-color:
 * radio-success-checked-background-color:
 * radio-success-checked-border-color:
 * radio-success-inner-circle-color:
 * radio-success-focus-border-color:
 * radio-success-focus-inner-circle-color:
 * radio-success-hover-background-color:
 * radio-success-hover-border-color:
 * radio-success-hover-inner-circle-color:
 * radio-success-hover-checked-background-color:
 * radio-success-active-border-color:
 * radio-success-active-inner-circle-color:
 * radio-success-disabled-background-color:
 * radio-success-disabled-border-color:
 * radio-success-disabled-text-color:
 * radio-success-disabled-checked-background-color:
 * radio-success-disabled-checked-border-color:
 * radio-success-disabled-checked-inner-circle-color:
 * radio-info-text-color:
 * radio-info-border-color:
 * radio-info-background-color:
 * radio-info-checked-background-color:
 * radio-info-checked-border-color:
 * radio-info-inner-circle-color:
 * radio-info-focus-border-color:
 * radio-info-focus-inner-circle-color:
 * radio-info-hover-background-color:
 * radio-info-hover-border-color:
 * radio-info-hover-inner-circle-color:
 * radio-info-hover-checked-background-color:
 * radio-info-active-border-color:
 * radio-info-active-inner-circle-color:
 * radio-info-disabled-background-color:
 * radio-info-disabled-border-color:
 * radio-info-disabled-text-color:
 * radio-info-disabled-checked-background-color:
 * radio-info-disabled-checked-border-color:
 * radio-info-disabled-checked-inner-circle-color:
 * radio-warning-text-color:
 * radio-warning-border-color:
 * radio-warning-background-color:
 * radio-warning-checked-background-color:
 * radio-warning-checked-border-color:
 * radio-warning-inner-circle-color:
 * radio-warning-focus-border-color:
 * radio-warning-focus-inner-circle-color:
 * radio-warning-hover-background-color:
 * radio-warning-hover-border-color:
 * radio-warning-hover-inner-circle-color:
 * radio-warning-hover-checked-background-color:
 * radio-warning-active-border-color:
 * radio-warning-active-inner-circle-color:
 * radio-warning-disabled-background-color:
 * radio-warning-disabled-border-color:
 * radio-warning-disabled-text-color:
 * radio-warning-disabled-checked-background-color:
 * radio-warning-disabled-checked-border-color:
 * radio-warning-disabled-checked-inner-circle-color:
 * radio-danger-text-color:
 * radio-danger-border-color:
 * radio-danger-background-color:
 * radio-danger-checked-background-color:
 * radio-danger-checked-border-color:
 * radio-danger-inner-circle-color:
 * radio-danger-focus-border-color:
 * radio-danger-focus-inner-circle-color:
 * radio-danger-hover-background-color:
 * radio-danger-hover-border-color:
 * radio-danger-hover-inner-circle-color:
 * radio-danger-hover-checked-background-color:
 * radio-danger-active-border-color:
 * radio-danger-active-inner-circle-color:
 * radio-danger-disabled-background-color:
 * radio-danger-disabled-border-color:
 * radio-danger-disabled-text-color:
 * radio-danger-disabled-checked-background-color:
 * radio-danger-disabled-checked-border-color:
 * radio-danger-disabled-checked-inner-circle-color:
 * radio-control-text-color:
 * radio-control-background-color:
 * radio-control-border-color:
 * radio-control-checked-background-color:
 * radio-control-checked-border-color:
 * radio-control-inner-circle-color:
 * radio-control-focus-border-color:
 * radio-control-focus-inner-circle-color:
 * radio-control-hover-background-color:
 * radio-control-hover-border-color:
 * radio-control-hover-inner-circle-color:
 * radio-control-hover-checked-background-color:
 * radio-control-active-border-color:
 * radio-control-active-inner-circle-color:
 * radio-control-disabled-background-color:
 * radio-control-disabled-border-color:
 * radio-control-disabled-text-color:
 * radio-control-disabled-checked-background-color:
 * radio-control-disabled-checked-border-color:
 * radio-control-disabled-checked-inner-circle-color:
 * */
export class NbRadioComponent {
    constructor(cd, renderer, statusService) {
        this.cd = cd;
        this.renderer = renderer;
        this.statusService = statusService;
        this._checked = false;
        this._disabled = false;
        this.status = 'basic';
        this.valueChange = new EventEmitter();
        this.blur = new EventEmitter();
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (this._name !== value) {
            this._name = value;
        }
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        const boolValue = convertToBoolProperty(value);
        if (this._checked !== boolValue) {
            this._checked = boolValue;
        }
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
        }
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        const boolValue = convertToBoolProperty(disabled);
        if (this._disabled !== boolValue) {
            this._disabled = boolValue;
        }
    }
    get isPrimary() {
        return this.status === 'primary';
    }
    get isSuccess() {
        return this.status === 'success';
    }
    get isWarning() {
        return this.status === 'warning';
    }
    get isDanger() {
        return this.status === 'danger';
    }
    get isInfo() {
        return this.status === 'info';
    }
    get isBasic() {
        return this.status === 'basic';
    }
    get isControl() {
        return this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    onChange(event) {
        event.stopPropagation();
        this.checked = true;
        this.valueChange.emit(this.value);
    }
    onClick(event) {
        event.stopPropagation();
    }
    /*
     * @docs-private
     * We use this method when setting radio inputs from radio group component.
     * Otherwise Angular won't detect changes in radio template as cached last rendered
     * value didn't updated.
     **/
    _markForCheck() {
        this.cd.markForCheck();
    }
    /*
     * @docs-private
     * Use this method when setting radio name from radio group component.
     * In case option 'name' isn't set on nb-radio component we need to set name
     * right away, so it won't overlap with options without names from other radio
     * groups. Otherwise they all would have same name and will be considered as
     * options from one group so only the last option will stay selected.
     **/
    _setName(name) {
        this.name = name;
        if (this.input) {
            this.renderer.setProperty(this.input.nativeElement, 'name', name);
        }
    }
}
NbRadioComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRadioComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbRadioComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbRadioComponent, selector: "nb-radio", inputs: { name: "name", checked: "checked", value: "value", disabled: "disabled", status: "status" }, outputs: { valueChange: "valueChange", blur: "blur" }, host: { properties: { "class.status-primary": "this.isPrimary", "class.status-success": "this.isSuccess", "class.status-warning": "this.isWarning", "class.status-danger": "this.isDanger", "class.status-info": "this.isInfo", "class.status-basic": "this.isBasic", "class.status-control": "this.isControl", "class": "this.additionalClasses" } }, viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true, read: ElementRef }], ngImport: i0, template: `
    <label>
      <input
        #input
        type="radio"
        class="native-input visually-hidden"
        [name]="name"
        [value]="value"
        [checked]="checked"
        [disabled]="disabled"
        (change)="onChange($event)"
        (click)="onClick($event)">
      <span class="outer-circle"></span>
      <span class="inner-circle"></span>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//*\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:block;position:relative}:host label{display:inline-flex;margin:0;min-height:inherit;padding:.375rem 0;align-items:center}[dir=ltr] :host label{padding-right:1.5rem}[dir=rtl] :host label{padding-left:1.5rem}:host .outer-circle,:host .inner-circle{border-radius:50%;position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] :host .outer-circle,[dir=ltr] :host .inner-circle{left:0}[dir=rtl] :host .outer-circle,[dir=rtl] :host .inner-circle{right:0}:host .inner-circle{transform:translateY(-50%) scale(.6)}[dir=ltr] :host .text{padding-left:.5rem}[dir=rtl] :host .text{padding-right:.5rem}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-radio', template: `
    <label>
      <input
        #input
        type="radio"
        class="native-input visually-hidden"
        [name]="name"
        [value]="value"
        [checked]="checked"
        [disabled]="disabled"
        (change)="onChange($event)"
        (click)="onClick($event)">
      <span class="outer-circle"></span>
      <span class="inner-circle"></span>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//*\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:block;position:relative}:host label{display:inline-flex;margin:0;min-height:inherit;padding:.375rem 0;align-items:center}[dir=ltr] :host label{padding-right:1.5rem}[dir=rtl] :host label{padding-left:1.5rem}:host .outer-circle,:host .inner-circle{border-radius:50%;position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] :host .outer-circle,[dir=ltr] :host .inner-circle{left:0}[dir=rtl] :host .outer-circle,[dir=rtl] :host .inner-circle{right:0}:host .inner-circle{transform:translateY(-50%) scale(.6)}[dir=ltr] :host .text{padding-left:.5rem}[dir=rtl] :host .text{padding-right:.5rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.NbStatusService }]; }, propDecorators: { name: [{
                type: Input
            }], checked: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], status: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], blur: [{
                type: Output
            }], input: [{
                type: ViewChild,
                args: ['input', { read: ElementRef }]
            }], isPrimary: [{
                type: HostBinding,
                args: ['class.status-primary']
            }], isSuccess: [{
                type: HostBinding,
                args: ['class.status-success']
            }], isWarning: [{
                type: HostBinding,
                args: ['class.status-warning']
            }], isDanger: [{
                type: HostBinding,
                args: ['class.status-danger']
            }], isInfo: [{
                type: HostBinding,
                args: ['class.status-info']
            }], isBasic: [{
                type: HostBinding,
                args: ['class.status-basic']
            }], isControl: [{
                type: HostBinding,
                args: ['class.status-control']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEdBRVgsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFrQixNQUFNLFlBQVksQ0FBQzs7O0FBR25FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E2TEs7QUF5QkwsTUFBTSxPQUFPLGdCQUFnQjtJQTBEM0IsWUFDWSxFQUFxQixFQUNyQixRQUFtQixFQUNuQixhQUE4QjtRQUY5QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQXRDbEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQXdCMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUcxQixXQUFNLEdBQThCLE9BQU8sQ0FBQztRQUUzQyxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBELFNBQUksR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVFyRCxDQUFDO0lBNURKLElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNw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O1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs7NkdBN0lVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLCttQkF3REMsVUFBVSw2QkE5RTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7MkZBSVUsZ0JBQWdCO2tCQXhCNUIsU0FBUzsrQkFDRSxVQUFVLFlBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVCxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTTs4SkFNM0MsSUFBSTtzQkFEUCxLQUFLO2dCQVlGLE9BQU87c0JBRFYsS0FBSztnQkFjRixLQUFLO3NCQURSLEtBQUs7Z0JBWUYsUUFBUTtzQkFEWCxLQUFLO2dCQWFHLE1BQU07c0JBQWQsS0FBSztnQkFFSSxXQUFXO3NCQUFwQixNQUFNO2dCQUVHLElBQUk7c0JBQWIsTUFBTTtnQkFFbUMsS0FBSztzQkFBOUMsU0FBUzt1QkFBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQVNwQyxTQUFTO3NCQURaLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixTQUFTO3NCQURaLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixTQUFTO3NCQURaLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixRQUFRO3NCQURYLFdBQVc7dUJBQUMscUJBQXFCO2dCQU05QixNQUFNO3NCQURULFdBQVc7dUJBQUMsbUJBQW1CO2dCQU01QixPQUFPO3NCQURWLFdBQVc7dUJBQUMsb0JBQW9CO2dCQU03QixTQUFTO3NCQURaLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixpQkFBaUI7c0JBRHBCLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYlN0YXR1c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdGF0dXMuc2VydmljZSc7XG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sUHJvcGVydHksIE5iQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzIH0gZnJvbSAnLi4vY29tcG9uZW50LXN0YXR1cyc7XG5cbi8qKlxuICogVGhlIGBOYlJhZGlvQ29tcG9uZW50YCBwcm92aWRlcyB0aGUgc2FtZSBmdW5jdGlvbmFsaXR5IGFzIG5hdGl2ZSBgPGlucHV0IHR5cGU9XCJyYWRpb1wiPmBcbiAqIHdpdGggTmVidWxhciBzdHlsZXMgYW5kIGFuaW1hdGlvbnMuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgcmFkaW8vcmFkaW8tc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqICMjIyBJbnN0YWxsYXRpb25cbiAqXG4gKiBJbXBvcnQgYE5iUmFkaW9Nb2R1bGVgIHRvIHlvdXIgZmVhdHVyZSBtb2R1bGUuXG4gKlxuICogYGBgdHNcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgICBOYlJhZGlvTW9kdWxlLFxuICogICBdLFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBQYWdlTW9kdWxlIHsgfVxuICogYGBgXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogUmFkaW8gYnV0dG9ucyBzaG91bGQgYmUgd3JhcHBlZCBpbiBgbmItcmFkaW8tZ3JvdXBgIHRvIHByb3ZpZGUgZm9ybSBiaW5kaW5ncy5cbiAqXG4gKiBgYGBodG1sXG4gKiA8bmItcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZE9wdGlvblwiPlxuICogICA8bmItcmFkaW8gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L25iLXJhZGlvPlxuICogICA8bmItcmFkaW8gdmFsdWU9XCIyXCI+T3B0aW9uIDI8L25iLXJhZGlvPlxuICogICA8bmItcmFkaW8gdmFsdWU9XCIzXCI+T3B0aW9uIDM8L25iLXJhZGlvPlxuICogPC9uYi1yYWRpby1ncm91cD5cbiAqIGBgYFxuICpcbiAqIFlvdSBjYW4gZGlzYWJsZSBzb21lIHJhZGlvcyBpbiB0aGUgZ3JvdXAgdXNpbmcgYSBgZGlzYWJsZWRgIGF0dHJpYnV0ZS5cbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKERpc2FibGVkLCByYWRpby9yYWRpby1kaXNhYmxlZC5jb21wb25lbnQpXG4gKlxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiByYWRpby13aWR0aDpcbiAqIHJhZGlvLWhlaWdodDpcbiAqIHJhZGlvLWJvcmRlci1zdHlsZTpcbiAqIHJhZGlvLWJvcmRlci13aWR0aDpcbiAqIHJhZGlvLXRleHQtZm9udC1mYW1pbHk6XG4gKiByYWRpby10ZXh0LWZvbnQtc2l6ZTpcbiAqIHJhZGlvLXRleHQtZm9udC13ZWlnaHQ6XG4gKiByYWRpby10ZXh0LWxpbmUtaGVpZ2h0OlxuICogcmFkaW8tb3V0bGluZS1jb2xvcjpcbiAqIHJhZGlvLW91dGxpbmUtd2lkdGg6XG4gKiByYWRpby1iYXNpYy10ZXh0LWNvbG9yOlxuICogcmFkaW8tYmFzaWMtYm9yZGVyLWNvbG9yOlxuICogcmFkaW8tYmFzaWMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLWJhc2ljLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLWJhc2ljLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogcmFkaW8tYmFzaWMtaW5uZXItY2lyY2xlLWNvbG9yOlxuICogcmFkaW8tYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogcmFkaW8tYmFzaWMtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOlxuICogcmFkaW8tYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLWJhc2ljLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjpcbiAqIHJhZGlvLWJhc2ljLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiByYWRpby1iYXNpYy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOlxuICogcmFkaW8tYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6XG4gKiByYWRpby1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOlxuICogcmFkaW8tcHJpbWFyeS10ZXh0LWNvbG9yOlxuICogcmFkaW8tcHJpbWFyeS1ib3JkZXItY29sb3I6XG4gKiByYWRpby1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLXByaW1hcnktY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiByYWRpby1wcmltYXJ5LWlubmVyLWNpcmNsZS1jb2xvcjpcbiAqIHJhZGlvLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogcmFkaW8tcHJpbWFyeS1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6XG4gKiByYWRpby1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLXByaW1hcnktaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOlxuICogcmFkaW8tcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiByYWRpby1wcmltYXJ5LWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6XG4gKiByYWRpby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6XG4gKiByYWRpby1zdWNjZXNzLXRleHQtY29sb3I6XG4gKiByYWRpby1zdWNjZXNzLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcmFkaW8tc3VjY2Vzcy1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLXN1Y2Nlc3MtaW5uZXItY2lyY2xlLWNvbG9yOlxuICogcmFkaW8tc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiByYWRpby1zdWNjZXNzLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjpcbiAqIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogcmFkaW8tc3VjY2Vzcy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6XG4gKiByYWRpby1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjpcbiAqIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjpcbiAqIHJhZGlvLWluZm8tdGV4dC1jb2xvcjpcbiAqIHJhZGlvLWluZm8tYm9yZGVyLWNvbG9yOlxuICogcmFkaW8taW5mby1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcmFkaW8taW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby1pbmZvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogcmFkaW8taW5mby1pbm5lci1jaXJjbGUtY29sb3I6XG4gKiByYWRpby1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLWluZm8tZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOlxuICogcmFkaW8taW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcmFkaW8taW5mby1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiByYWRpby1pbmZvLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjpcbiAqIHJhZGlvLWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcmFkaW8taW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogcmFkaW8taW5mby1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOlxuICogcmFkaW8taW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcmFkaW8taW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiByYWRpby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6XG4gKiByYWRpby1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiByYWRpby1pbmZvLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOlxuICogcmFkaW8td2FybmluZy10ZXh0LWNvbG9yOlxuICogcmFkaW8td2FybmluZy1ib3JkZXItY29sb3I6XG4gKiByYWRpby13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLXdhcm5pbmctY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiByYWRpby13YXJuaW5nLWlubmVyLWNpcmNsZS1jb2xvcjpcbiAqIHJhZGlvLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogcmFkaW8td2FybmluZy1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6XG4gKiByYWRpby13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLXdhcm5pbmctaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOlxuICogcmFkaW8td2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiByYWRpby13YXJuaW5nLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6XG4gKiByYWRpby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcmFkaW8td2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6XG4gKiByYWRpby1kYW5nZXItdGV4dC1jb2xvcjpcbiAqIHJhZGlvLWRhbmdlci1ib3JkZXItY29sb3I6XG4gKiByYWRpby1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLWRhbmdlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby1kYW5nZXItY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiByYWRpby1kYW5nZXItaW5uZXItY2lyY2xlLWNvbG9yOlxuICogcmFkaW8tZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLWRhbmdlci1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6XG4gKiByYWRpby1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiByYWRpby1kYW5nZXItaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOlxuICogcmFkaW8tZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogcmFkaW8tZGFuZ2VyLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6XG4gKiByYWRpby1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiByYWRpby1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6XG4gKiByYWRpby1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6XG4gKiByYWRpby1jb250cm9sLXRleHQtY29sb3I6XG4gKiByYWRpby1jb250cm9sLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby1jb250cm9sLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLWNvbnRyb2wtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcmFkaW8tY29udHJvbC1jaGVja2VkLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLWNvbnRyb2wtaW5uZXItY2lyY2xlLWNvbG9yOlxuICogcmFkaW8tY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiByYWRpby1jb250cm9sLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjpcbiAqIHJhZGlvLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogcmFkaW8tY29udHJvbC1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6XG4gKiByYWRpby1jb250cm9sLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjpcbiAqIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogcmFkaW8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogcmFkaW8tY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6XG4gKiByYWRpby1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOlxuICogcmFkaW8tY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjpcbiAqICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1yYWRpbycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgICNpbnB1dFxuICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICBjbGFzcz1cIm5hdGl2ZS1pbnB1dCB2aXN1YWxseS1oaWRkZW5cIlxuICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwib3V0ZXItY2lyY2xlXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJpbm5lci1jaXJjbGVcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZVVybHM6IFsnLi9yYWRpby5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOYlJhZGlvQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fbmFtZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG4gIHNldCBjaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgYm9vbFZhbHVlID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgICBpZiAodGhpcy5fY2hlY2tlZCAhPT0gYm9vbFZhbHVlKSB7XG4gICAgICB0aGlzLl9jaGVja2VkID0gYm9vbFZhbHVlO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9jaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jaGVja2VkOiBOYkJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF92YWx1ZTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgY29uc3QgYm9vbFZhbHVlID0gY29udmVydFRvQm9vbFByb3BlcnR5KGRpc2FibGVkKTtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQgIT09IGJvb2xWYWx1ZSkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBib29sVmFsdWU7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgc3RhdHVzOiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzID0gJ2Jhc2ljJztcblxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgc3RhdHVzU2VydmljZTogTmJTdGF0dXNTZXJ2aWNlLFxuICApIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtcHJpbWFyeScpXG4gIGdldCBpc1ByaW1hcnkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAncHJpbWFyeSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1zdWNjZXNzJylcbiAgZ2V0IGlzU3VjY2VzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXdhcm5pbmcnKVxuICBnZXQgaXNXYXJuaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ3dhcm5pbmcnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtZGFuZ2VyJylcbiAgZ2V0IGlzRGFuZ2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Rhbmdlcic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1pbmZvJylcbiAgZ2V0IGlzSW5mbygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdpbmZvJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWJhc2ljJylcbiAgZ2V0IGlzQmFzaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnYmFzaWMnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtY29udHJvbCcpXG4gIGdldCBpc0NvbnRyb2woKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnY29udHJvbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGFkZGl0aW9uYWxDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5zdGF0dXNTZXJ2aWNlLmlzQ3VzdG9tU3RhdHVzKHRoaXMuc3RhdHVzKSkge1xuICAgICAgcmV0dXJuIFt0aGlzLnN0YXR1c1NlcnZpY2UuZ2V0U3RhdHVzQ2xhc3ModGhpcy5zdGF0dXMpXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgLypcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKiBXZSB1c2UgdGhpcyBtZXRob2Qgd2hlbiBzZXR0aW5nIHJhZGlvIGlucHV0cyBmcm9tIHJhZGlvIGdyb3VwIGNvbXBvbmVudC5cbiAgICogT3RoZXJ3aXNlIEFuZ3VsYXIgd29uJ3QgZGV0ZWN0IGNoYW5nZXMgaW4gcmFkaW8gdGVtcGxhdGUgYXMgY2FjaGVkIGxhc3QgcmVuZGVyZWRcbiAgICogdmFsdWUgZGlkbid0IHVwZGF0ZWQuXG4gICAqKi9cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLypcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKiBVc2UgdGhpcyBtZXRob2Qgd2hlbiBzZXR0aW5nIHJhZGlvIG5hbWUgZnJvbSByYWRpbyBncm91cCBjb21wb25lbnQuXG4gICAqIEluIGNhc2Ugb3B0aW9uICduYW1lJyBpc24ndCBzZXQgb24gbmItcmFkaW8gY29tcG9uZW50IHdlIG5lZWQgdG8gc2V0IG5hbWVcbiAgICogcmlnaHQgYXdheSwgc28gaXQgd29uJ3Qgb3ZlcmxhcCB3aXRoIG9wdGlvbnMgd2l0aG91dCBuYW1lcyBmcm9tIG90aGVyIHJhZGlvXG4gICAqIGdyb3Vwcy4gT3RoZXJ3aXNlIHRoZXkgYWxsIHdvdWxkIGhhdmUgc2FtZSBuYW1lIGFuZCB3aWxsIGJlIGNvbnNpZGVyZWQgYXNcbiAgICogb3B0aW9ucyBmcm9tIG9uZSBncm91cCBzbyBvbmx5IHRoZSBsYXN0IG9wdGlvbiB3aWxsIHN0YXkgc2VsZWN0ZWQuXG4gICAqKi9cbiAgX3NldE5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcblxuICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ25hbWUnLCBuYW1lKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==