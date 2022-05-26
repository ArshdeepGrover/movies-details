/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
import * as i2 from "@angular/common";
/**
 * Progress Bar is a component for indicating progress.
 *
 * Simple usage:
 *
 * ```html
 * <nb-progress-bar [value]="50"></nb-progress-bar>
 * ```
 * ### Installation
 *
 * Import `NbProgressBarModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbProgressBarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Progress bar accepts property `value` in range 0-100
 * @stacked-example(Progress bar, progress-bar/progress-bar-showcase.component)
 *
 * Progress bar background could be configured by providing a `status` property:
 * @stacked-example(Progress bar status, progress-bar/progress-bar-status.component)
 *
 * Progress bar size (height and font-size) could be configured by providing a `size` property:
 * @stacked-example(Progress bar size, progress-bar/progress-bar-size.component)
 *
 * `displayValue` property shows current value inside progress bar. It's also possible to add custom text inside:
 * @stacked-example(Progress bar value, progress-bar/progress-bar-value.component)
 *
 * Progress bar supports `width` and `background-color` transition:
 * @stacked-example(Progress bar interactive, progress-bar/progress-bar-interactive.component)
 *
 * @styles
 *
 * progress-bar-animation-duration:
 * progress-bar-border-radius:
 * progress-bar-text-font-family:
 * progress-bar-tiny-height:
 * progress-bar-tiny-text-font-size:
 * progress-bar-tiny-text-font-weight:
 * progress-bar-tiny-text-line-height:
 * progress-bar-small-height:
 * progress-bar-small-text-font-size:
 * progress-bar-small-text-font-weight:
 * progress-bar-small-text-line-height:
 * progress-bar-medium-height:
 * progress-bar-medium-text-font-size:
 * progress-bar-medium-text-font-weight:
 * progress-bar-medium-text-line-height:
 * progress-bar-large-height:
 * progress-bar-large-text-font-size:
 * progress-bar-large-text-font-weight:
 * progress-bar-large-text-line-height:
 * progress-bar-giant-height:
 * progress-bar-giant-text-font-size:
 * progress-bar-giant-text-font-weight:
 * progress-bar-giant-text-line-height:
 * progress-bar-basic-background-color:
 * progress-bar-basic-filled-background-color:
 * progress-bar-basic-text-color:
 * progress-bar-primary-background-color:
 * progress-bar-primary-filled-background-color:
 * progress-bar-primary-text-color:
 * progress-bar-success-background-color:
 * progress-bar-success-filled-background-color:
 * progress-bar-success-text-color:
 * progress-bar-info-background-color:
 * progress-bar-info-filled-background-color:
 * progress-bar-info-text-color:
 * progress-bar-warning-background-color:
 * progress-bar-warning-filled-background-color:
 * progress-bar-warning-text-color:
 * progress-bar-danger-background-color:
 * progress-bar-danger-filled-background-color:
 * progress-bar-danger-text-color:
 * progress-bar-control-background-color:
 * progress-bar-control-filled-background-color:
 * progress-bar-control-text-color:
 */
export class NbProgressBarComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Progress bar value in percent (0 - 100)
         */
        this.value = 0;
        /**
         * Progress bar background (`basic` (default), `primary`, `info`, `success`, `warning`, `danger`, `control`)
         */
        this.status = 'basic';
        /**
         * Progress bar size (`tiny`, `small`, `medium` (default), `large`, `giant`)
         */
        this.size = 'medium';
        /**
         * Displays value inside progress bar
         */
        this.displayValue = false;
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
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
}
NbProgressBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbProgressBarComponent, deps: [{ token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbProgressBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbProgressBarComponent, selector: "nb-progress-bar", inputs: { value: "value", status: "status", size: "size", displayValue: "displayValue" }, host: { properties: { "class.size-tiny": "this.tiny", "class.size-small": "this.small", "class.size-medium": "this.medium", "class.size-large": "this.large", "class.size-giant": "this.giant", "class.status-primary": "this.primary", "class.status-success": "this.success", "class.status-info": "this.info", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-basic": "this.basic", "class.status-control": "this.control", "class": "this.additionalClasses" } }, ngImport: i0, template: `
    <div class="progress-container">
      <div class="progress-value" [style.width.%]="value">
        <span *ngIf="displayValue">{{ value }}%</span>
        <ng-content></ng-content>
      </div>
    </div>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:block}.progress-container{overflow:hidden}.progress-value{height:100%;text-align:center;overflow:hidden}\n"], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbProgressBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-progress-bar', template: `
    <div class="progress-container">
      <div class="progress-value" [style.width.%]="value">
        <span *ngIf="displayValue">{{ value }}%</span>
        <ng-content></ng-content>
      </div>
    </div>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:block}.progress-container{overflow:hidden}.progress-value{height:100%;text-align:center;overflow:hidden}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbStatusService }]; }, propDecorators: { value: [{
                type: Input
            }], status: [{
                type: Input
            }], size: [{
                type: Input
            }], displayValue: [{
                type: Input
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
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTTlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1GRztBQWFILE1BQU0sT0FBTyxzQkFBc0I7SUEwRmpDLFlBQXNCLGFBQThCO1FBQTlCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQXhGcEQ7O1dBRUc7UUFDTSxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRTNCOztXQUVHO1FBQ00sV0FBTSxHQUE4QixPQUFPLENBQUM7UUFFckQ7O1dBRUc7UUFDTSxTQUFJLEdBQW9CLFFBQVEsQ0FBQztRQUUxQzs7V0FFRztRQUNNLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBdUV2QyxDQUFDO0lBckVELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksaUJBQWlCO1FBQ25CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7bUhBeEZVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLG9vQkFUdkI7Ozs7Ozs7R0FPVDsyRkFFVSxzQkFBc0I7a0JBWmxDLFNBQVM7K0JBQ0UsaUJBQWlCLFlBRWpCOzs7Ozs7O0dBT1Q7c0dBT1EsS0FBSztzQkFBYixLQUFLO2dCQUtHLE1BQU07c0JBQWQsS0FBSztnQkFLRyxJQUFJO3NCQUFaLEtBQUs7Z0JBS0csWUFBWTtzQkFBcEIsS0FBSztnQkFHRixJQUFJO3NCQURQLFdBQVc7dUJBQUMsaUJBQWlCO2dCQU0xQixLQUFLO3NCQURSLFdBQVc7dUJBQUMsa0JBQWtCO2dCQU0zQixNQUFNO3NCQURULFdBQVc7dUJBQUMsbUJBQW1CO2dCQU01QixLQUFLO3NCQURSLFdBQVc7dUJBQUMsa0JBQWtCO2dCQU0zQixLQUFLO3NCQURSLFdBQVc7dUJBQUMsa0JBQWtCO2dCQU0zQixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixJQUFJO3NCQURQLFdBQVc7dUJBQUMsbUJBQW1CO2dCQU01QixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixNQUFNO3NCQURULFdBQVc7dUJBQUMscUJBQXFCO2dCQU05QixLQUFLO3NCQURSLFdBQVc7dUJBQUMsb0JBQW9CO2dCQU03QixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixpQkFBaUI7c0JBRHBCLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RhdHVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRTaXplIH0gZnJvbSAnLi4vY29tcG9uZW50LXNpemUnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyB9IGZyb20gJy4uL2NvbXBvbmVudC1zdGF0dXMnO1xuXG4vKipcbiAqIFByb2dyZXNzIEJhciBpcyBhIGNvbXBvbmVudCBmb3IgaW5kaWNhdGluZyBwcm9ncmVzcy5cbiAqXG4gKiBTaW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgaHRtbFxuICogPG5iLXByb2dyZXNzLWJhciBbdmFsdWVdPVwiNTBcIj48L25iLXByb2dyZXNzLWJhcj5cbiAqIGBgYFxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJQcm9ncmVzc0Jhck1vZHVsZWAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJQcm9ncmVzc0Jhck1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKlxuICogUHJvZ3Jlc3MgYmFyIGFjY2VwdHMgcHJvcGVydHkgYHZhbHVlYCBpbiByYW5nZSAwLTEwMFxuICogQHN0YWNrZWQtZXhhbXBsZShQcm9ncmVzcyBiYXIsIHByb2dyZXNzLWJhci9wcm9ncmVzcy1iYXItc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqIFByb2dyZXNzIGJhciBiYWNrZ3JvdW5kIGNvdWxkIGJlIGNvbmZpZ3VyZWQgYnkgcHJvdmlkaW5nIGEgYHN0YXR1c2AgcHJvcGVydHk6XG4gKiBAc3RhY2tlZC1leGFtcGxlKFByb2dyZXNzIGJhciBzdGF0dXMsIHByb2dyZXNzLWJhci9wcm9ncmVzcy1iYXItc3RhdHVzLmNvbXBvbmVudClcbiAqXG4gKiBQcm9ncmVzcyBiYXIgc2l6ZSAoaGVpZ2h0IGFuZCBmb250LXNpemUpIGNvdWxkIGJlIGNvbmZpZ3VyZWQgYnkgcHJvdmlkaW5nIGEgYHNpemVgIHByb3BlcnR5OlxuICogQHN0YWNrZWQtZXhhbXBsZShQcm9ncmVzcyBiYXIgc2l6ZSwgcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1zaXplLmNvbXBvbmVudClcbiAqXG4gKiBgZGlzcGxheVZhbHVlYCBwcm9wZXJ0eSBzaG93cyBjdXJyZW50IHZhbHVlIGluc2lkZSBwcm9ncmVzcyBiYXIuIEl0J3MgYWxzbyBwb3NzaWJsZSB0byBhZGQgY3VzdG9tIHRleHQgaW5zaWRlOlxuICogQHN0YWNrZWQtZXhhbXBsZShQcm9ncmVzcyBiYXIgdmFsdWUsIHByb2dyZXNzLWJhci9wcm9ncmVzcy1iYXItdmFsdWUuY29tcG9uZW50KVxuICpcbiAqIFByb2dyZXNzIGJhciBzdXBwb3J0cyBgd2lkdGhgIGFuZCBgYmFja2dyb3VuZC1jb2xvcmAgdHJhbnNpdGlvbjpcbiAqIEBzdGFja2VkLWV4YW1wbGUoUHJvZ3Jlc3MgYmFyIGludGVyYWN0aXZlLCBwcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLWludGVyYWN0aXZlLmNvbXBvbmVudClcbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi1kdXJhdGlvbjpcbiAqIHByb2dyZXNzLWJhci1ib3JkZXItcmFkaXVzOlxuICogcHJvZ3Jlc3MtYmFyLXRleHQtZm9udC1mYW1pbHk6XG4gKiBwcm9ncmVzcy1iYXItdGlueS1oZWlnaHQ6XG4gKiBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWZvbnQtc2l6ZTpcbiAqIHByb2dyZXNzLWJhci10aW55LXRleHQtZm9udC13ZWlnaHQ6XG4gKiBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogcHJvZ3Jlc3MtYmFyLXNtYWxsLWhlaWdodDpcbiAqIHByb2dyZXNzLWJhci1zbWFsbC10ZXh0LWZvbnQtc2l6ZTpcbiAqIHByb2dyZXNzLWJhci1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OlxuICogcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6XG4gKiBwcm9ncmVzcy1iYXItbWVkaXVtLWhlaWdodDpcbiAqIHByb2dyZXNzLWJhci1tZWRpdW0tdGV4dC1mb250LXNpemU6XG4gKiBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6XG4gKiBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6XG4gKiBwcm9ncmVzcy1iYXItbGFyZ2UtaGVpZ2h0OlxuICogcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC1zaXplOlxuICogcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6XG4gKiBwcm9ncmVzcy1iYXItbGFyZ2UtdGV4dC1saW5lLWhlaWdodDpcbiAqIHByb2dyZXNzLWJhci1naWFudC1oZWlnaHQ6XG4gKiBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXNpemU6XG4gKiBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXdlaWdodDpcbiAqIHByb2dyZXNzLWJhci1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OlxuICogcHJvZ3Jlc3MtYmFyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6XG4gKiBwcm9ncmVzcy1iYXItYmFzaWMtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBwcm9ncmVzcy1iYXItYmFzaWMtdGV4dC1jb2xvcjpcbiAqIHByb2dyZXNzLWJhci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6XG4gKiBwcm9ncmVzcy1iYXItcHJpbWFyeS1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHByb2dyZXNzLWJhci1wcmltYXJ5LXRleHQtY29sb3I6XG4gKiBwcm9ncmVzcy1iYXItc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBwcm9ncmVzcy1iYXItc3VjY2Vzcy10ZXh0LWNvbG9yOlxuICogcHJvZ3Jlc3MtYmFyLWluZm8tYmFja2dyb3VuZC1jb2xvcjpcbiAqIHByb2dyZXNzLWJhci1pbmZvLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcHJvZ3Jlc3MtYmFyLWluZm8tdGV4dC1jb2xvcjpcbiAqIHByb2dyZXNzLWJhci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6XG4gKiBwcm9ncmVzcy1iYXItd2FybmluZy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHByb2dyZXNzLWJhci13YXJuaW5nLXRleHQtY29sb3I6XG4gKiBwcm9ncmVzcy1iYXItZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6XG4gKiBwcm9ncmVzcy1iYXItZGFuZ2VyLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcHJvZ3Jlc3MtYmFyLWRhbmdlci10ZXh0LWNvbG9yOlxuICogcHJvZ3Jlc3MtYmFyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHByb2dyZXNzLWJhci1jb250cm9sLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcHJvZ3Jlc3MtYmFyLWNvbnRyb2wtdGV4dC1jb2xvcjpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItcHJvZ3Jlc3MtYmFyJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLXZhbHVlXCIgW3N0eWxlLndpZHRoLiVdPVwidmFsdWVcIj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJkaXNwbGF5VmFsdWVcIj57eyB2YWx1ZSB9fSU8L3NwYW4+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOYlByb2dyZXNzQmFyQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogUHJvZ3Jlc3MgYmFyIHZhbHVlIGluIHBlcmNlbnQgKDAgLSAxMDApXG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogUHJvZ3Jlc3MgYmFyIGJhY2tncm91bmQgKGBiYXNpY2AgKGRlZmF1bHQpLCBgcHJpbWFyeWAsIGBpbmZvYCwgYHN1Y2Nlc3NgLCBgd2FybmluZ2AsIGBkYW5nZXJgLCBgY29udHJvbGApXG4gICAqL1xuICBASW5wdXQoKSBzdGF0dXM6IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgPSAnYmFzaWMnO1xuXG4gIC8qKlxuICAgKiBQcm9ncmVzcyBiYXIgc2l6ZSAoYHRpbnlgLCBgc21hbGxgLCBgbWVkaXVtYCAoZGVmYXVsdCksIGBsYXJnZWAsIGBnaWFudGApXG4gICAqL1xuICBASW5wdXQoKSBzaXplOiBOYkNvbXBvbmVudFNpemUgPSAnbWVkaXVtJztcblxuICAvKipcbiAgICogRGlzcGxheXMgdmFsdWUgaW5zaWRlIHByb2dyZXNzIGJhclxuICAgKi9cbiAgQElucHV0KCkgZGlzcGxheVZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLXRpbnknKVxuICBnZXQgdGlueSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAndGlueSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtc21hbGwnKVxuICBnZXQgc21hbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1tZWRpdW0nKVxuICBnZXQgbWVkaXVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdtZWRpdW0nO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWxhcmdlJylcbiAgZ2V0IGxhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdsYXJnZSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtZ2lhbnQnKVxuICBnZXQgZ2lhbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2dpYW50JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXByaW1hcnknKVxuICBnZXQgcHJpbWFyeSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdwcmltYXJ5JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXN1Y2Nlc3MnKVxuICBnZXQgc3VjY2VzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWluZm8nKVxuICBnZXQgaW5mbygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdpbmZvJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXdhcm5pbmcnKVxuICBnZXQgd2FybmluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICd3YXJuaW5nJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWRhbmdlcicpXG4gIGdldCBkYW5nZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnZGFuZ2VyJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWJhc2ljJylcbiAgZ2V0IGJhc2ljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Jhc2ljJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWNvbnRyb2wnKVxuICBnZXQgY29udHJvbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdjb250cm9sJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgYWRkaXRpb25hbENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLnN0YXR1c1NlcnZpY2UuaXNDdXN0b21TdGF0dXModGhpcy5zdGF0dXMpKSB7XG4gICAgICByZXR1cm4gW3RoaXMuc3RhdHVzU2VydmljZS5nZXRTdGF0dXNDbGFzcyh0aGlzLnN0YXR1cyldO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RhdHVzU2VydmljZTogTmJTdGF0dXNTZXJ2aWNlKSB7XG4gIH1cbn1cbiJdfQ==