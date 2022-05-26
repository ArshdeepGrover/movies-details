/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
import * as i2 from "@angular/common";
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
export class NbAlertComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Alert size, available sizes:
         * `tiny`, `small`, `medium`, `large`, `giant`
         * Unset by default.
         */
        this.size = '';
        /**
         * Alert status (adds specific styles):
         * `basic` (default), `primary`, `success`, `info`, `warning`, `danger`, `control`.
         */
        this.status = 'basic';
        /**
         * Alert accent (color of the top border):
         * `basic`, `primary`, `success`, `info`, `warning`, `danger`, `control`.
         * Unset by default.
         */
        this.accent = '';
        /**
         * Alert outline (color of the border):
         * `basic`, `primary`, `success`, `info`, `warning`, `danger`, `control`.
         * Unset by default.
         */
        this.outline = '';
        this._closable = false;
        /**
         * Emits when chip is removed
         * @type EventEmitter<any>
         */
        this.close = new EventEmitter();
    }
    /**
     * Shows `close` icon
     */
    get closable() {
        return this._closable;
    }
    set closable(value) {
        this._closable = convertToBoolProperty(value);
    }
    /**
     * Emits the removed chip event
     */
    onClose() {
        this.close.emit();
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get info() {
        return this.status === 'info';
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
    get primaryAccent() {
        return this.accent === 'primary';
    }
    get successAccent() {
        return this.accent === 'success';
    }
    get infoAccent() {
        return this.accent === 'info';
    }
    get warningAccent() {
        return this.accent === 'warning';
    }
    get dangerAccent() {
        return this.accent === 'danger';
    }
    get basicAccent() {
        return this.accent === 'basic';
    }
    get controlAccent() {
        return this.accent === 'control';
    }
    get primaryOutline() {
        return this.outline === 'primary';
    }
    get successOutline() {
        return this.outline === 'success';
    }
    get infoOutline() {
        return this.outline === 'info';
    }
    get warningOutline() {
        return this.outline === 'warning';
    }
    get dangerOutline() {
        return this.outline === 'danger';
    }
    get basicOutline() {
        return this.outline === 'basic';
    }
    get controlOutline() {
        return this.outline === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
}
NbAlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAlertComponent, deps: [{ token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbAlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbAlertComponent, selector: "nb-alert", inputs: { size: "size", status: "status", accent: "accent", outline: "outline", closable: "closable" }, outputs: { close: "close" }, host: { properties: { "class.closable": "this.closable", "class.size-tiny": "this.tiny", "class.size-small": "this.small", "class.size-medium": "this.medium", "class.size-large": "this.large", "class.size-giant": "this.giant", "class.status-primary": "this.primary", "class.status-success": "this.success", "class.status-info": "this.info", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-basic": "this.basic", "class.status-control": "this.control", "class.accent-primary": "this.primaryAccent", "class.accent-success": "this.successAccent", "class.accent-info": "this.infoAccent", "class.accent-warning": "this.warningAccent", "class.accent-danger": "this.dangerAccent", "class.accent-basic": "this.basicAccent", "class.accent-control": "this.controlAccent", "class.outline-primary": "this.primaryOutline", "class.outline-success": "this.successOutline", "class.outline-info": "this.infoOutline", "class.outline-warning": "this.warningOutline", "class.outline-danger": "this.dangerOutline", "class.outline-basic": "this.basicOutline", "class.outline-control": "this.controlOutline", "class": "this.additionalClasses" } }, ngImport: i0, template: `
    <button *ngIf="closable" type="button" class="close" aria-label="Close" (click)="onClose()">
      <span aria-hidden="true">&times;</span>
    </button>
    <ng-content></ng-content>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;flex-direction:column;position:relative}[dir=ltr] :host .close{right:0}[dir=rtl] :host .close{left:0}.close{position:absolute;top:0;color:inherit;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\n"], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-alert', template: `
    <button *ngIf="closable" type="button" class="close" aria-label="Close" (click)="onClose()">
      <span aria-hidden="true">&times;</span>
    </button>
    <ng-content></ng-content>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;flex-direction:column;position:relative}[dir=ltr] :host .close{right:0}[dir=rtl] :host .close{left:0}.close{position:absolute;top:0;color:inherit;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbStatusService }]; }, propDecorators: { size: [{
                type: Input
            }], status: [{
                type: Input
            }], accent: [{
                type: Input
            }], outline: [{
                type: Input
            }], closable: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.closable']
            }], close: [{
                type: Output
            }], tiny: [{
                type: HostBinding,
                args: ['class.size-tiny']
            }], small: [{
                type: HostBinding,
                args: ['class.size-small']
            }], medium: [{
                type: HostBinding,
                args: ['class.size-medium']
            }], large: [{
                type: HostBinding,
                args: ['class.size-large']
            }], giant: [{
                type: HostBinding,
                args: ['class.size-giant']
            }], primary: [{
                type: HostBinding,
                args: ['class.status-primary']
            }], success: [{
                type: HostBinding,
                args: ['class.status-success']
            }], info: [{
                type: HostBinding,
                args: ['class.status-info']
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
            }], primaryAccent: [{
                type: HostBinding,
                args: ['class.accent-primary']
            }], successAccent: [{
                type: HostBinding,
                args: ['class.accent-success']
            }], infoAccent: [{
                type: HostBinding,
                args: ['class.accent-info']
            }], warningAccent: [{
                type: HostBinding,
                args: ['class.accent-warning']
            }], dangerAccent: [{
                type: HostBinding,
                args: ['class.accent-danger']
            }], basicAccent: [{
                type: HostBinding,
                args: ['class.accent-basic']
            }], controlAccent: [{
                type: HostBinding,
                args: ['class.accent-control']
            }], primaryOutline: [{
                type: HostBinding,
                args: ['class.outline-primary']
            }], successOutline: [{
                type: HostBinding,
                args: ['class.outline-success']
            }], infoOutline: [{
                type: HostBinding,
                args: ['class.outline-info']
            }], warningOutline: [{
                type: HostBinding,
                args: ['class.outline-warning']
            }], dangerOutline: [{
                type: HostBinding,
                args: ['class.outline-danger']
            }], basicOutline: [{
                type: HostBinding,
                args: ['class.outline-basic']
            }], controlOutline: [{
                type: HostBinding,
                args: ['class.outline-control']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFrQixNQUFNLFlBQVksQ0FBQzs7OztBQUduRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErRkc7QUFXSCxNQUFNLE9BQU8sZ0JBQWdCO0lBaUQzQixZQUFzQixhQUE4QjtRQUE5QixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUEvQ3BEOzs7O1dBSUc7UUFDTSxTQUFJLEdBQXlCLEVBQUUsQ0FBQztRQUV6Qzs7O1dBR0c7UUFDTSxXQUFNLEdBQThCLE9BQU8sQ0FBQztRQUVyRDs7OztXQUlHO1FBQ00sV0FBTSxHQUEyQixFQUFFLENBQUM7UUFFN0M7Ozs7V0FJRztRQUNNLFlBQU8sR0FBMkIsRUFBRSxDQUFDO1FBYXBDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHckM7OztXQUdHO1FBQ08sVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHckMsQ0FBQztJQXJCRDs7T0FFRztJQUNILElBRUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFhRDs7T0FFRztJQUNILE9BQU87UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUNJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUNJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUNJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFD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QWE7c0JBRGhCLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixVQUFVO3NCQURiLFdBQVc7dUJBQUMsbUJBQW1CO2dCQU01QixhQUFhO3NCQURoQixXQUFXO3VCQUFDLHNCQUFzQjtnQkFNL0IsWUFBWTtzQkFEZixXQUFXO3VCQUFDLHFCQUFxQjtnQkFNOUIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLG9CQUFvQjtnQkFNN0IsYUFBYTtzQkFEaEIsV0FBVzt1QkFBQyxzQkFBc0I7Z0JBTS9CLGNBQWM7c0JBRGpCLFdBQVc7dUJBQUMsdUJBQXVCO2dCQU1oQyxjQUFjO3NCQURqQixXQUFXO3VCQUFDLHVCQUF1QjtnQkFNaEMsV0FBVztzQkFEZCxXQUFXO3VCQUFDLG9CQUFvQjtnQkFNN0IsY0FBYztzQkFEakIsV0FBVzt1QkFBQyx1QkFBdUI7Z0JBTWhDLGFBQWE7c0JBRGhCLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixZQUFZO3NCQURmLFdBQVc7dUJBQUMscUJBQXFCO2dCQU05QixjQUFjO3NCQURqQixXQUFXO3VCQUFDLHVCQUF1QjtnQkFNaEMsaUJBQWlCO3NCQURwQixXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYlN0YXR1c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdGF0dXMuc2VydmljZSc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudFNpemUgfSBmcm9tICcuLi9jb21wb25lbnQtc2l6ZSc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzLCBOYkNvbXBvbmVudFN0YXR1cyB9IGZyb20gJy4uL2NvbXBvbmVudC1zdGF0dXMnO1xuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5LCBOYkJvb2xlYW5JbnB1dCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5cbi8qKlxuICogQWxlcnQgY29tcG9uZW50LlxuICpcbiAqIEJhc2ljIGFsZXJ0IGV4YW1wbGU6XG4gKiBAc3RhY2tlZC1leGFtcGxlKFNob3djYXNlLCBhbGVydC9hbGVydC1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogQWxlcnQgY29uZmlndXJhdGlvbjpcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmItYWxlcnQgc3RhdHVzPVwic3VjY2Vzc1wiPlxuICogICBZb3UgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBhdXRoZW50aWNhdGVkIVxuICogPC9uYi1hbGVydD5cbiAqIGBgYFxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJBbGVydE1vZHVsZWAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJBbGVydE1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKlxuICogQWxlcnQgY291bGQgYWRkaXRpb25hbGx5IGhhdmUgYSBgY2xvc2VgIGJ1dHRvbiB3aGVuIGBjbG9zYWJsZWAgcHJvcGVydHkgaXMgc2V0OlxuICogYGBgaHRtbFxuICogPG5iLWFsZXJ0IHN0YXR1cz1cInN1Y2Nlc3NcIiBjbG9zYWJsZSAoY2xvc2UpPVwib25DbG9zZSgpXCI+XG4gKiAgIFlvdSBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGF1dGhlbnRpY2F0ZWQhXG4gKiA8L25iLWFsZXJ0PlxuICogYGBgXG4gKlxuICogQ29sb3JlZCBhbGVydHMgY291bGQgYmUgc2ltcGx5IGNvbmZpZ3VyZWQgYnkgcHJvdmlkaW5nIGEgYHN0YXR1c2AgcHJvcGVydHk6XG4gKiBAc3RhY2tlZC1leGFtcGxlKEFsZXJ0IHN0YXR1cywgYWxlcnQvYWxlcnQtY29sb3JzLmNvbXBvbmVudClcbiAqXG4gKiBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIGFzc2lnbiBhbiBgYWNjZW50YCBwcm9wZXJ0eSBmb3IgYSBzbGlnaHQgYWxlcnQgaGlnaGxpZ2h0XG4gKiBhcyB3ZWxsIGFzIGNvbWJpbmUgaXQgd2l0aCBgc3RhdHVzYDpcbiAqIEBzdGFja2VkLWV4YW1wbGUoQWxlcnQgYWNjZW50LCBhbGVydC9hbGVydC1hY2NlbnRzLmNvbXBvbmVudClcbiAqXG4gKiBBbmQgYG91dGxpbmVgIHByb3BlcnR5OlxuICogQHN0YWNrZWQtZXhhbXBsZShPdXRsaW5lIEFsZXJ0LCBhbGVydC9hbGVydC1vdXRsaW5lLmNvbXBvbmVudClcbiAqXG4gKiBAYWRkaXRpb25hbC1leGFtcGxlKE11bHRpcGxlIFNpemVzLCBhbGVydC9hbGVydC1zaXplcy5jb21wb25lbnQpXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIGFsZXJ0LWJvcmRlci1yYWRpdXM6XG4gKiBhbGVydC1ib3R0b20tbWFyZ2luOlxuICogYWxlcnQtcGFkZGluZzpcbiAqIGFsZXJ0LXNjcm9sbGJhci1jb2xvcjpcbiAqIGFsZXJ0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYWxlcnQtc2Nyb2xsYmFyLXdpZHRoOlxuICogYWxlcnQtc2hhZG93OlxuICogYWxlcnQtdGV4dC1mb250LWZhbWlseTpcbiAqIGFsZXJ0LXRleHQtZm9udC1zaXplOlxuICogYWxlcnQtdGV4dC1mb250LXdlaWdodDpcbiAqIGFsZXJ0LXRleHQtbGluZS1oZWlnaHQ6XG4gKiBhbGVydC1jbG9zYWJsZS1zdGFydC1wYWRkaW5nOlxuICogYWxlcnQtdGlueS1oZWlnaHQ6XG4gKiBhbGVydC1zbWFsbC1oZWlnaHQ6XG4gKiBhbGVydC1tZWRpdW0taGVpZ2h0OlxuICogYWxlcnQtbWVkaXVtLXBhZGRpbmc6XG4gKiBhbGVydC1sYXJnZS1oZWlnaHQ6XG4gKiBhbGVydC1naWFudC1oZWlnaHQ6XG4gKiBhbGVydC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYWxlcnQtYmFzaWMtdGV4dC1jb2xvcjpcbiAqIGFsZXJ0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjpcbiAqIGFsZXJ0LXByaW1hcnktdGV4dC1jb2xvcjpcbiAqIGFsZXJ0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGFsZXJ0LXN1Y2Nlc3MtdGV4dC1jb2xvcjpcbiAqIGFsZXJ0LWluZm8tYmFja2dyb3VuZC1jb2xvcjpcbiAqIGFsZXJ0LWluZm8tdGV4dC1jb2xvcjpcbiAqIGFsZXJ0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjpcbiAqIGFsZXJ0LXdhcm5pbmctdGV4dC1jb2xvcjpcbiAqIGFsZXJ0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYWxlcnQtZGFuZ2VyLXRleHQtY29sb3I6XG4gKiBhbGVydC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6XG4gKiBhbGVydC1jb250cm9sLXRleHQtY29sb3I6XG4gKiBhbGVydC1hY2NlbnQtYmFzaWMtY29sb3I6XG4gKiBhbGVydC1hY2NlbnQtcHJpbWFyeS1jb2xvcjpcbiAqIGFsZXJ0LWFjY2VudC1pbmZvLWNvbG9yOlxuICogYWxlcnQtYWNjZW50LXN1Y2Nlc3MtY29sb3I6XG4gKiBhbGVydC1hY2NlbnQtd2FybmluZy1jb2xvcjpcbiAqIGFsZXJ0LWFjY2VudC1kYW5nZXItY29sb3I6XG4gKiBhbGVydC1hY2NlbnQtY29udHJvbC1jb2xvcjpcbiAqIGFsZXJ0LW91dGxpbmUtd2lkdGg6XG4gKiBhbGVydC1vdXRsaW5lLWJhc2ljLWNvbG9yOlxuICogYWxlcnQtb3V0bGluZS1wcmltYXJ5LWNvbG9yOlxuICogYWxlcnQtb3V0bGluZS1pbmZvLWNvbG9yOlxuICogYWxlcnQtb3V0bGluZS1zdWNjZXNzLWNvbG9yOlxuICogYWxlcnQtb3V0bGluZS13YXJuaW5nLWNvbG9yOlxuICogYWxlcnQtb3V0bGluZS1kYW5nZXItY29sb3I6XG4gKiBhbGVydC1vdXRsaW5lLWNvbnRyb2wtY29sb3I6XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWFsZXJ0JyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uICpuZ0lmPVwiY2xvc2FibGVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJvbkNsb3NlKClcIj5cbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOYkFsZXJ0Q29tcG9uZW50IHtcblxuICAvKipcbiAgICogQWxlcnQgc2l6ZSwgYXZhaWxhYmxlIHNpemVzOlxuICAgKiBgdGlueWAsIGBzbWFsbGAsIGBtZWRpdW1gLCBgbGFyZ2VgLCBgZ2lhbnRgXG4gICAqIFVuc2V0IGJ5IGRlZmF1bHQuXG4gICAqL1xuICBASW5wdXQoKSBzaXplOiAnJyB8IE5iQ29tcG9uZW50U2l6ZSA9ICcnO1xuXG4gIC8qKlxuICAgKiBBbGVydCBzdGF0dXMgKGFkZHMgc3BlY2lmaWMgc3R5bGVzKTpcbiAgICogYGJhc2ljYCAoZGVmYXVsdCksIGBwcmltYXJ5YCwgYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAsIGBjb250cm9sYC5cbiAgICovXG4gIEBJbnB1dCgpIHN0YXR1czogTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyA9ICdiYXNpYyc7XG5cbiAgLyoqXG4gICAqIEFsZXJ0IGFjY2VudCAoY29sb3Igb2YgdGhlIHRvcCBib3JkZXIpOlxuICAgKiBgYmFzaWNgLCBgcHJpbWFyeWAsIGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AsIGBkYW5nZXJgLCBgY29udHJvbGAuXG4gICAqIFVuc2V0IGJ5IGRlZmF1bHQuXG4gICAqL1xuICBASW5wdXQoKSBhY2NlbnQ6ICcnIHwgTmJDb21wb25lbnRTdGF0dXMgPSAnJztcblxuICAvKipcbiAgICogQWxlcnQgb3V0bGluZSAoY29sb3Igb2YgdGhlIGJvcmRlcik6XG4gICAqIGBiYXNpY2AsIGBwcmltYXJ5YCwgYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAsIGBjb250cm9sYC5cbiAgICogVW5zZXQgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpIG91dGxpbmU6ICcnIHwgTmJDb21wb25lbnRTdGF0dXMgPSAnJztcblxuICAvKipcbiAgICogU2hvd3MgYGNsb3NlYCBpY29uXG4gICAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNsb3NhYmxlJylcbiAgZ2V0IGNsb3NhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jbG9zYWJsZTtcbiAgfVxuICBzZXQgY2xvc2FibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jbG9zYWJsZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJvdGVjdGVkIF9jbG9zYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY2xvc2FibGU6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIGNoaXAgaXMgcmVtb3ZlZFxuICAgKiBAdHlwZSBFdmVudEVtaXR0ZXI8YW55PlxuICAgKi9cbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdGF0dXNTZXJ2aWNlOiBOYlN0YXR1c1NlcnZpY2UpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgcmVtb3ZlZCBjaGlwIGV2ZW50XG4gICAqL1xuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLXRpbnknKVxuICBnZXQgdGlueSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAndGlueSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtc21hbGwnKVxuICBnZXQgc21hbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1tZWRpdW0nKVxuICBnZXQgbWVkaXVtKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdtZWRpdW0nO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWxhcmdlJylcbiAgZ2V0IGxhcmdlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdsYXJnZSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtZ2lhbnQnKVxuICBnZXQgZ2lhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2dpYW50JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXByaW1hcnknKVxuICBnZXQgcHJpbWFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdwcmltYXJ5JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXN1Y2Nlc3MnKVxuICBnZXQgc3VjY2VzcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWluZm8nKVxuICBnZXQgaW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdpbmZvJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXdhcm5pbmcnKVxuICBnZXQgd2FybmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICd3YXJuaW5nJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWRhbmdlcicpXG4gIGdldCBkYW5nZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnZGFuZ2VyJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWJhc2ljJylcbiAgZ2V0IGJhc2ljKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Jhc2ljJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWNvbnRyb2wnKVxuICBnZXQgY29udHJvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdjb250cm9sJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWNjZW50LXByaW1hcnknKVxuICBnZXQgcHJpbWFyeUFjY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hY2NlbnQgPT09ICdwcmltYXJ5JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWNjZW50LXN1Y2Nlc3MnKVxuICBnZXQgc3VjY2Vzc0FjY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hY2NlbnQgPT09ICdzdWNjZXNzJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWNjZW50LWluZm8nKVxuICBnZXQgaW5mb0FjY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hY2NlbnQgPT09ICdpbmZvJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWNjZW50LXdhcm5pbmcnKVxuICBnZXQgd2FybmluZ0FjY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hY2NlbnQgPT09ICd3YXJuaW5nJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWNjZW50LWRhbmdlcicpXG4gIGdldCBkYW5nZXJBY2NlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWNjZW50ID09PSAnZGFuZ2VyJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWNjZW50LWJhc2ljJylcbiAgZ2V0IGJhc2ljQWNjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFjY2VudCA9PT0gJ2Jhc2ljJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWNjZW50LWNvbnRyb2wnKVxuICBnZXQgY29udHJvbEFjY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hY2NlbnQgPT09ICdjb250cm9sJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mub3V0bGluZS1wcmltYXJ5JylcbiAgZ2V0IHByaW1hcnlPdXRsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLm91dGxpbmUgPT09ICdwcmltYXJ5JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mub3V0bGluZS1zdWNjZXNzJylcbiAgZ2V0IHN1Y2Nlc3NPdXRsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLm91dGxpbmUgPT09ICdzdWNjZXNzJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mub3V0bGluZS1pbmZvJylcbiAgZ2V0IGluZm9PdXRsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLm91dGxpbmUgPT09ICdpbmZvJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mub3V0bGluZS13YXJuaW5nJylcbiAgZ2V0IHdhcm5pbmdPdXRsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLm91dGxpbmUgPT09ICd3YXJuaW5nJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mub3V0bGluZS1kYW5nZXInKVxuICBnZXQgZGFuZ2VyT3V0bGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRsaW5lID09PSAnZGFuZ2VyJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mub3V0bGluZS1iYXNpYycpXG4gIGdldCBiYXNpY091dGxpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3V0bGluZSA9PT0gJ2Jhc2ljJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mub3V0bGluZS1jb250cm9sJylcbiAgZ2V0IGNvbnRyb2xPdXRsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLm91dGxpbmUgPT09ICdjb250cm9sJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgYWRkaXRpb25hbENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLnN0YXR1c1NlcnZpY2UuaXNDdXN0b21TdGF0dXModGhpcy5zdGF0dXMpKSB7XG4gICAgICByZXR1cm4gW3RoaXMuc3RhdHVzU2VydmljZS5nZXRTdGF0dXNDbGFzcyh0aGlzLnN0YXR1cyldO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cbn1cbiJdfQ==