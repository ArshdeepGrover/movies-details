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
 * Styled spinner component
 *
 * @styles
 *
 * spinner-text-color:
 * spinner-text-font-family:
 * spinner-text-font-size:
 * spinner-text-font-weight:
 * spinner-text-line-height:
 * spinner-basic-background-color:
 * spinner-basic-circle-filled-color:
 * spinner-basic-circle-empty-color:
 * spinner-primary-background-color:
 * spinner-primary-circle-filled-color:
 * spinner-primary-circle-empty-color:
 * spinner-info-background-color:
 * spinner-info-circle-filled-color:
 * spinner-info-circle-empty-color:
 * spinner-success-background-color:
 * spinner-success-circle-filled-color:
 * spinner-success-circle-empty-color:
 * spinner-warning-background-color:
 * spinner-warning-circle-filled-color:
 * spinner-warning-circle-empty-color:
 * spinner-danger-background-color:
 * spinner-danger-circle-filled-color:
 * spinner-danger-circle-empty-color:
 * spinner-control-background-color:
 * spinner-control-circle-filled-color:
 * spinner-control-circle-empty-color:
 * spinner-height-tiny:
 * spinner-height-small:
 * spinner-height-medium:
 * spinner-height-large:
 * spinner-height-giant:
 */
export class NbSpinnerComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Loading text that is shown near the icon
         * @type string
         */
        this.message = 'Loading...';
        /**
         * Spinner size, available sizes:
         * tiny, small, medium, large, giant
         * @param {string} value
         */
        this.size = 'medium';
        /**
         * Spinner status (adds specific styles):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`.
         */
        this.status = 'basic';
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
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
}
NbSpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSpinnerComponent, deps: [{ token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbSpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbSpinnerComponent, selector: "nb-spinner", inputs: { message: "message", size: "size", status: "status" }, host: { properties: { "class.size-tiny": "this.tiny", "class.size-small": "this.small", "class.size-medium": "this.medium", "class.size-large": "this.large", "class.size-giant": "this.giant", "class.status-primary": "this.primary", "class.status-info": "this.info", "class.status-success": "this.success", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-basic": "this.basic", "class.status-control": "this.control", "class": "this.additionalClasses" } }, ngImport: i0, template: `
    <span class="spin-circle"></span>
    <span class="message" *ngIf="message">{{ message }}</span>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{opacity:1;position:absolute;border-radius:inherit;top:0;right:0;left:0;bottom:0;overflow:hidden;z-index:9999;display:flex;justify-content:center;align-items:center;visibility:visible}:host .spin-circle{animation:spin .8s infinite linear;border-radius:50%;border-style:solid;border-width:.125em;width:1em;height:1em}:host .message{margin-left:.5rem}\n"], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-spinner', template: `
    <span class="spin-circle"></span>
    <span class="message" *ngIf="message">{{ message }}</span>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{opacity:1;position:absolute;border-radius:inherit;top:0;right:0;left:0;bottom:0;overflow:hidden;z-index:9999;display:flex;justify-content:center;align-items:center;visibility:visible}:host .spin-circle{animation:spin .8s infinite linear;border-radius:50%;border-style:solid;border-width:.125em;width:1em;height:1em}:host .message{margin-left:.5rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbStatusService }]; }, propDecorators: { message: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
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
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTTlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQ0c7QUFTSCxNQUFNLE9BQU8sa0JBQWtCO0lBMkY3QixZQUFzQixhQUE4QjtRQUE5QixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUF6RnBEOzs7V0FHRztRQUVILFlBQU8sR0FBVyxZQUFZLENBQUM7UUFFL0I7Ozs7V0FJRztRQUVILFNBQUksR0FBb0IsUUFBUSxDQUFDO1FBRWpDOzs7V0FHRztRQUNNLFdBQU0sR0FBOEIsT0FBTyxDQUFDO0lBdUVyRCxDQUFDO0lBckVELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksaUJBQWlCO1FBQ25CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7K0dBekZVLGtCQUFrQjttR0FBbEIsa0JBQWtCLHFtQkFObkI7OztHQUdUOzJGQUdVLGtCQUFrQjtrQkFSOUIsU0FBUzsrQkFDRSxZQUFZLFlBQ1o7OztHQUdUO3NHQVVELE9BQU87c0JBRE4sS0FBSztnQkFTTixJQUFJO3NCQURILEtBQUs7Z0JBT0csTUFBTTtzQkFBZCxLQUFLO2dCQUdGLElBQUk7c0JBRFAsV0FBVzt1QkFBQyxpQkFBaUI7Z0JBTTFCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTTNCLE1BQU07c0JBRFQsV0FBVzt1QkFBQyxtQkFBbUI7Z0JBTTVCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTTNCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTTNCLE9BQU87c0JBRFYsV0FBVzt1QkFBQyxzQkFBc0I7Z0JBTS9CLElBQUk7c0JBRFAsV0FBVzt1QkFBQyxtQkFBbUI7Z0JBTTVCLE9BQU87c0JBRFYsV0FBVzt1QkFBQyxzQkFBc0I7Z0JBTS9CLE9BQU87c0JBRFYsV0FBVzt1QkFBQyxzQkFBc0I7Z0JBTS9CLE1BQU07c0JBRFQsV0FBVzt1QkFBQyxxQkFBcUI7Z0JBTTlCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxvQkFBb0I7Z0JBTTdCLE9BQU87c0JBRFYsV0FBVzt1QkFBQyxzQkFBc0I7Z0JBTS9CLGlCQUFpQjtzQkFEcEIsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYlN0YXR1c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdGF0dXMuc2VydmljZSc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudFNpemUgfSBmcm9tICcuLi9jb21wb25lbnQtc2l6ZSc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzIH0gZnJvbSAnLi4vY29tcG9uZW50LXN0YXR1cyc7XG5cbi8qKlxuICogU3R5bGVkIHNwaW5uZXIgY29tcG9uZW50XG4gKlxuICogQHN0eWxlc1xuICpcbiAqIHNwaW5uZXItdGV4dC1jb2xvcjpcbiAqIHNwaW5uZXItdGV4dC1mb250LWZhbWlseTpcbiAqIHNwaW5uZXItdGV4dC1mb250LXNpemU6XG4gKiBzcGlubmVyLXRleHQtZm9udC13ZWlnaHQ6XG4gKiBzcGlubmVyLXRleHQtbGluZS1oZWlnaHQ6XG4gKiBzcGlubmVyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6XG4gKiBzcGlubmVyLWJhc2ljLWNpcmNsZS1maWxsZWQtY29sb3I6XG4gKiBzcGlubmVyLWJhc2ljLWNpcmNsZS1lbXB0eS1jb2xvcjpcbiAqIHNwaW5uZXItcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogc3Bpbm5lci1wcmltYXJ5LWNpcmNsZS1maWxsZWQtY29sb3I6XG4gKiBzcGlubmVyLXByaW1hcnktY2lyY2xlLWVtcHR5LWNvbG9yOlxuICogc3Bpbm5lci1pbmZvLWJhY2tncm91bmQtY29sb3I6XG4gKiBzcGlubmVyLWluZm8tY2lyY2xlLWZpbGxlZC1jb2xvcjpcbiAqIHNwaW5uZXItaW5mby1jaXJjbGUtZW1wdHktY29sb3I6XG4gKiBzcGlubmVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHNwaW5uZXItc3VjY2Vzcy1jaXJjbGUtZmlsbGVkLWNvbG9yOlxuICogc3Bpbm5lci1zdWNjZXNzLWNpcmNsZS1lbXB0eS1jb2xvcjpcbiAqIHNwaW5uZXItd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogc3Bpbm5lci13YXJuaW5nLWNpcmNsZS1maWxsZWQtY29sb3I6XG4gKiBzcGlubmVyLXdhcm5pbmctY2lyY2xlLWVtcHR5LWNvbG9yOlxuICogc3Bpbm5lci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHNwaW5uZXItZGFuZ2VyLWNpcmNsZS1maWxsZWQtY29sb3I6XG4gKiBzcGlubmVyLWRhbmdlci1jaXJjbGUtZW1wdHktY29sb3I6XG4gKiBzcGlubmVyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHNwaW5uZXItY29udHJvbC1jaXJjbGUtZmlsbGVkLWNvbG9yOlxuICogc3Bpbm5lci1jb250cm9sLWNpcmNsZS1lbXB0eS1jb2xvcjpcbiAqIHNwaW5uZXItaGVpZ2h0LXRpbnk6XG4gKiBzcGlubmVyLWhlaWdodC1zbWFsbDpcbiAqIHNwaW5uZXItaGVpZ2h0LW1lZGl1bTpcbiAqIHNwaW5uZXItaGVpZ2h0LWxhcmdlOlxuICogc3Bpbm5lci1oZWlnaHQtZ2lhbnQ6XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLXNwaW5uZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwic3Bpbi1jaXJjbGVcIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJtZXNzYWdlXCIgKm5nSWY9XCJtZXNzYWdlXCI+e3sgbWVzc2FnZSB9fTwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vc3Bpbm5lci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOYlNwaW5uZXJDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBMb2FkaW5nIHRleHQgdGhhdCBpcyBzaG93biBuZWFyIHRoZSBpY29uXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KClcbiAgbWVzc2FnZTogc3RyaW5nID0gJ0xvYWRpbmcuLi4nO1xuXG4gIC8qKlxuICAgKiBTcGlubmVyIHNpemUsIGF2YWlsYWJsZSBzaXplczpcbiAgICogdGlueSwgc21hbGwsIG1lZGl1bSwgbGFyZ2UsIGdpYW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2l6ZTogTmJDb21wb25lbnRTaXplID0gJ21lZGl1bSc7XG5cbiAgLyoqXG4gICAqIFNwaW5uZXIgc3RhdHVzIChhZGRzIHNwZWNpZmljIHN0eWxlcyk6XG4gICAqIGBiYXNpY2AsIGBwcmltYXJ5YCwgYGluZm9gLCBgc3VjY2Vzc2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAsIGBjb250cm9sYC5cbiAgICovXG4gIEBJbnB1dCgpIHN0YXR1czogTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyA9ICdiYXNpYyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLXRpbnknKVxuICBnZXQgdGlueSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAndGlueSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtc21hbGwnKVxuICBnZXQgc21hbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1tZWRpdW0nKVxuICBnZXQgbWVkaXVtKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdtZWRpdW0nO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWxhcmdlJylcbiAgZ2V0IGxhcmdlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdsYXJnZSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtZ2lhbnQnKVxuICBnZXQgZ2lhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2dpYW50JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXByaW1hcnknKVxuICBnZXQgcHJpbWFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdwcmltYXJ5JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWluZm8nKVxuICBnZXQgaW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdpbmZvJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXN1Y2Nlc3MnKVxuICBnZXQgc3VjY2VzcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXdhcm5pbmcnKVxuICBnZXQgd2FybmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICd3YXJuaW5nJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWRhbmdlcicpXG4gIGdldCBkYW5nZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnZGFuZ2VyJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWJhc2ljJylcbiAgZ2V0IGJhc2ljKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Jhc2ljJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWNvbnRyb2wnKVxuICBnZXQgY29udHJvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdjb250cm9sJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgYWRkaXRpb25hbENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLnN0YXR1c1NlcnZpY2UuaXNDdXN0b21TdGF0dXModGhpcy5zdGF0dXMpKSB7XG4gICAgICByZXR1cm4gW3RoaXMuc3RhdHVzU2VydmljZS5nZXRTdGF0dXNDbGFzcyh0aGlzLnN0YXR1cyldO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RhdHVzU2VydmljZTogTmJTdGF0dXNTZXJ2aWNlKSB7XG4gIH1cbn1cbiJdfQ==