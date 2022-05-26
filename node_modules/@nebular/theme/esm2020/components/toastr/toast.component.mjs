/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
import * as i2 from "../icon/icon.component";
import * as i3 from "@angular/common";
/**
 * The `NbToastComponent` is responsible for rendering each toast with appropriate styles.
 *
 * @styles
 *
 * toastr-border-style:
 * toastr-border-width:
 * toastr-border-radius:
 * toastr-padding:
 * toastr-shadow:
 * toastr-text-font-family:
 * toastr-text-font-size:
 * toastr-text-font-weight:
 * toastr-text-line-height:
 * toastr-title-text-font-family:
 * toastr-title-text-font-size:
 * toastr-title-text-font-weight:
 * toastr-title-text-line-height:
 * toastr-basic-background-color:
 * toastr-basic-border-color:
 * toastr-basic-text-color:
 * toastr-icon-basic-background-color:
 * toastr-icon-basic-color:
 * toastr-destroyable-basic-hover-background-color:
 * toastr-destroyable-basic-hover-border-color:
 * toastr-primary-background-color:
 * toastr-primary-border-color:
 * toastr-primary-text-color:
 * toastr-icon-primary-background-color:
 * toastr-icon-primary-color:
 * toastr-destroyable-primary-hover-background-color:
 * toastr-destroyable-primary-hover-border-color:
 * toastr-success-background-color:
 * toastr-success-border-color:
 * toastr-success-text-color:
 * toastr-icon-success-background-color:
 * toastr-icon-success-color:
 * toastr-destroyable-success-hover-background-color:
 * toastr-destroyable-success-hover-border-color:
 * toastr-info-background-color:
 * toastr-info-border-color:
 * toastr-info-text-color:
 * toastr-icon-info-background-color:
 * toastr-icon-info-color:
 * toastr-destroyable-info-hover-background-color:
 * toastr-destroyable-info-hover-border-color:
 * toastr-warning-background-color:
 * toastr-warning-border-color:
 * toastr-warning-text-color:
 * toastr-icon-warning-background-color:
 * toastr-icon-warning-color:
 * toastr-destroyable-warning-hover-background-color:
 * toastr-destroyable-warning-hover-border-color:
 * toastr-danger-background-color:
 * toastr-danger-border-color:
 * toastr-danger-text-color:
 * toastr-icon-danger-background-color:
 * toastr-icon-danger-color:
 * toastr-destroyable-danger-hover-background-color:
 * toastr-destroyable-danger-hover-border-color:
 * toastr-control-background-color:
 * toastr-control-border-color:
 * toastr-control-text-color:
 * toastr-icon-control-background-color:
 * toastr-icon-control-color:
 * toastr-destroyable-control-hover-background-color:
 * toastr-destroyable-control-hover-border-color:
 * */
export class NbToastComponent {
    constructor(renderer, elementRef, statusService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.statusService = statusService;
        this.destroy = new EventEmitter();
        this.toastClick = new EventEmitter();
    }
    get success() {
        return this.toast.config.status === 'success';
    }
    get info() {
        return this.toast.config.status === 'info';
    }
    get warning() {
        return this.toast.config.status === 'warning';
    }
    get primary() {
        return this.toast.config.status === 'primary';
    }
    get danger() {
        return this.toast.config.status === 'danger';
    }
    get basic() {
        return this.toast.config.status === 'basic';
    }
    get control() {
        return this.toast.config.status === 'control';
    }
    get destroyByClick() {
        return this.toast.config.destroyByClick;
    }
    get hasIcon() {
        const { icon } = this.toast.config;
        if (typeof icon === 'string') {
            return true;
        }
        return !!(icon && icon.icon);
    }
    get customIcon() {
        return !!this.icon;
    }
    get icon() {
        return this.toast.config.icon;
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.toast.config.status)) {
            return [this.statusService.getStatusClass(this.toast.config.status)];
        }
        return [];
    }
    onClick() {
        this.toastClick.emit();
    }
    ngOnInit() {
        if (this.toast.config.toastClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.toast.config.toastClass);
        }
    }
    ngOnDestroy() {
        this.destroy.emit();
    }
}
NbToastComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbToastComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbToastComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbToastComponent, selector: "nb-toast", inputs: { toast: "toast" }, outputs: { destroy: "destroy", toastClick: "toastClick" }, host: { listeners: { "click": "onClick()" }, properties: { "class.status-success": "this.success", "class.status-info": "this.info", "class.status-warning": "this.warning", "class.status-primary": "this.primary", "class.status-danger": "this.danger", "class.status-basic": "this.basic", "class.status-control": "this.control", "class.destroy-by-click": "this.destroyByClick", "class.has-icon": "this.hasIcon", "class.custom-icon": "this.customIcon", "class": "this.additionalClasses" } }, ngImport: i0, template: "<div class=\"icon-container\" *ngIf=\"hasIcon && icon\">\n  <nb-icon [config]=\"icon\"></nb-icon>\n</div>\n<div class=\"content-container\">\n  <span class=\"title subtitle\">{{ toast.title }}</span>\n  <div class=\"message\">{{ toast.message }}</div>\n</div>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;align-items:center;width:25rem;margin:.5rem}:host .title{margin-right:.25rem}:host.default .content-container,:host:not(.has-icon) .content-container{display:flex;flex-direction:row}:host.destroy-by-click{cursor:pointer}:host nb-icon{font-size:2.5rem}:host svg{width:2.5rem;height:2.5rem}\n"], components: [{ type: i2.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-toast', template: "<div class=\"icon-container\" *ngIf=\"hasIcon && icon\">\n  <nb-icon [config]=\"icon\"></nb-icon>\n</div>\n<div class=\"content-container\">\n  <span class=\"title subtitle\">{{ toast.title }}</span>\n  <div class=\"message\">{{ toast.message }}</div>\n</div>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;align-items:center;width:25rem;margin:.5rem}:host .title{margin-right:.25rem}:host.default .content-container,:host:not(.has-icon) .content-container{display:flex;flex-direction:row}:host.destroy-by-click{cursor:pointer}:host nb-icon{font-size:2.5rem}:host svg{width:2.5rem;height:2.5rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.NbStatusService }]; }, propDecorators: { toast: [{
                type: Input
            }], destroy: [{
                type: Output
            }], toastClick: [{
                type: Output
            }], success: [{
                type: HostBinding,
                args: ['class.status-success']
            }], info: [{
                type: HostBinding,
                args: ['class.status-info']
            }], warning: [{
                type: HostBinding,
                args: ['class.status-warning']
            }], primary: [{
                type: HostBinding,
                args: ['class.status-primary']
            }], danger: [{
                type: HostBinding,
                args: ['class.status-danger']
            }], basic: [{
                type: HostBinding,
                args: ['class.status-basic']
            }], control: [{
                type: HostBinding,
                args: ['class.status-control']
            }], destroyByClick: [{
                type: HostBinding,
                args: ['class.destroy-by-click']
            }], hasIcon: [{
                type: HostBinding,
                args: ['class.has-icon']
            }], customIcon: [{
                type: HostBinding,
                args: ['class.custom-icon']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3RvYXN0ci90b2FzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdG9hc3RyL3RvYXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUVLO0FBTUwsTUFBTSxPQUFPLGdCQUFnQjtJQStFM0IsWUFDWSxRQUFtQixFQUNuQixVQUFzQixFQUN0QixhQUE4QjtRQUY5QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBOUVoQyxZQUFPLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakQsZUFBVSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBOEUzRCxDQUFDO0lBNUVKLElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFDSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFT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Z0JBQWdCO2dCQVd6QixVQUFVO3NCQURiLFdBQVc7dUJBQUMsbUJBQW1CO2dCQVU1QixpQkFBaUI7c0JBRHBCLFdBQVc7dUJBQUMsT0FBTztnQkFTcEIsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RhdHVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJJY29uQ29uZmlnIH0gZnJvbSAnLi4vaWNvbi9pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYlRvYXN0IH0gZnJvbSAnLi9tb2RlbCc7XG5cbi8qKlxuICogVGhlIGBOYlRvYXN0Q29tcG9uZW50YCBpcyByZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIGVhY2ggdG9hc3Qgd2l0aCBhcHByb3ByaWF0ZSBzdHlsZXMuXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIHRvYXN0ci1ib3JkZXItc3R5bGU6XG4gKiB0b2FzdHItYm9yZGVyLXdpZHRoOlxuICogdG9hc3RyLWJvcmRlci1yYWRpdXM6XG4gKiB0b2FzdHItcGFkZGluZzpcbiAqIHRvYXN0ci1zaGFkb3c6XG4gKiB0b2FzdHItdGV4dC1mb250LWZhbWlseTpcbiAqIHRvYXN0ci10ZXh0LWZvbnQtc2l6ZTpcbiAqIHRvYXN0ci10ZXh0LWZvbnQtd2VpZ2h0OlxuICogdG9hc3RyLXRleHQtbGluZS1oZWlnaHQ6XG4gKiB0b2FzdHItdGl0bGUtdGV4dC1mb250LWZhbWlseTpcbiAqIHRvYXN0ci10aXRsZS10ZXh0LWZvbnQtc2l6ZTpcbiAqIHRvYXN0ci10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OlxuICogdG9hc3RyLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6XG4gKiB0b2FzdHItYmFzaWMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1iYXNpYy1ib3JkZXItY29sb3I6XG4gKiB0b2FzdHItYmFzaWMtdGV4dC1jb2xvcjpcbiAqIHRvYXN0ci1pY29uLWJhc2ljLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2FzdHItaWNvbi1iYXNpYy1jb2xvcjpcbiAqIHRvYXN0ci1kZXN0cm95YWJsZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLWRlc3Ryb3lhYmxlLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRvYXN0ci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2FzdHItcHJpbWFyeS1ib3JkZXItY29sb3I6XG4gKiB0b2FzdHItcHJpbWFyeS10ZXh0LWNvbG9yOlxuICogdG9hc3RyLWljb24tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLWljb24tcHJpbWFyeS1jb2xvcjpcbiAqIHRvYXN0ci1kZXN0cm95YWJsZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2FzdHItZGVzdHJveWFibGUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0b2FzdHItc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOlxuICogdG9hc3RyLXN1Y2Nlc3MtdGV4dC1jb2xvcjpcbiAqIHRvYXN0ci1pY29uLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1pY29uLXN1Y2Nlc3MtY29sb3I6XG4gKiB0b2FzdHItZGVzdHJveWFibGUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLWRlc3Ryb3lhYmxlLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogdG9hc3RyLWluZm8tYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1pbmZvLWJvcmRlci1jb2xvcjpcbiAqIHRvYXN0ci1pbmZvLXRleHQtY29sb3I6XG4gKiB0b2FzdHItaWNvbi1pbmZvLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2FzdHItaWNvbi1pbmZvLWNvbG9yOlxuICogdG9hc3RyLWRlc3Ryb3lhYmxlLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1kZXN0cm95YWJsZS1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRvYXN0ci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2FzdHItd2FybmluZy1ib3JkZXItY29sb3I6XG4gKiB0b2FzdHItd2FybmluZy10ZXh0LWNvbG9yOlxuICogdG9hc3RyLWljb24td2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLWljb24td2FybmluZy1jb2xvcjpcbiAqIHRvYXN0ci1kZXN0cm95YWJsZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2FzdHItZGVzdHJveWFibGUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0b2FzdHItZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b2FzdHItZGFuZ2VyLWJvcmRlci1jb2xvcjpcbiAqIHRvYXN0ci1kYW5nZXItdGV4dC1jb2xvcjpcbiAqIHRvYXN0ci1pY29uLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLWljb24tZGFuZ2VyLWNvbG9yOlxuICogdG9hc3RyLWRlc3Ryb3lhYmxlLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLWRlc3Ryb3lhYmxlLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0b2FzdHItY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLWNvbnRyb2wtYm9yZGVyLWNvbG9yOlxuICogdG9hc3RyLWNvbnRyb2wtdGV4dC1jb2xvcjpcbiAqIHRvYXN0ci1pY29uLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvYXN0ci1pY29uLWNvbnRyb2wtY29sb3I6XG4gKiB0b2FzdHItZGVzdHJveWFibGUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9hc3RyLWRlc3Ryb3lhYmxlLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLXRvYXN0JyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmJUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgdG9hc3Q6IE5iVG9hc3Q7XG5cbiAgQE91dHB1dCgpIGRlc3Ryb3k6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHRvYXN0Q2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1zdWNjZXNzJylcbiAgZ2V0IHN1Y2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG9hc3QuY29uZmlnLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtaW5mbycpXG4gIGdldCBpbmZvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvYXN0LmNvbmZpZy5zdGF0dXMgPT09ICdpbmZvJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXdhcm5pbmcnKVxuICBnZXQgd2FybmluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b2FzdC5jb25maWcuc3RhdHVzID09PSAnd2FybmluZyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1wcmltYXJ5JylcbiAgZ2V0IHByaW1hcnkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG9hc3QuY29uZmlnLnN0YXR1cyA9PT0gJ3ByaW1hcnknO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtZGFuZ2VyJylcbiAgZ2V0IGRhbmdlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b2FzdC5jb25maWcuc3RhdHVzID09PSAnZGFuZ2VyJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWJhc2ljJylcbiAgZ2V0IGJhc2ljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvYXN0LmNvbmZpZy5zdGF0dXMgPT09ICdiYXNpYyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1jb250cm9sJylcbiAgZ2V0IGNvbnRyb2woKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG9hc3QuY29uZmlnLnN0YXR1cyA9PT0gJ2NvbnRyb2wnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kZXN0cm95LWJ5LWNsaWNrJylcbiAgZ2V0IGRlc3Ryb3lCeUNsaWNrKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvYXN0LmNvbmZpZy5kZXN0cm95QnlDbGljaztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGFzLWljb24nKVxuICBnZXQgaGFzSWNvbigpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IGljb24gfSA9IHRoaXMudG9hc3QuY29uZmlnO1xuICAgIGlmICh0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShpY29uICYmIChpY29uIGFzIE5iSWNvbkNvbmZpZykuaWNvbik7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmN1c3RvbS1pY29uJylcbiAgZ2V0IGN1c3RvbUljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5pY29uO1xuICB9XG5cbiAgZ2V0IGljb24oKTogc3RyaW5nIHwgTmJJY29uQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy50b2FzdC5jb25maWcuaWNvbjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgYWRkaXRpb25hbENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLnN0YXR1c1NlcnZpY2UuaXNDdXN0b21TdGF0dXModGhpcy50b2FzdC5jb25maWcuc3RhdHVzKSkge1xuICAgICAgcmV0dXJuIFt0aGlzLnN0YXR1c1NlcnZpY2UuZ2V0U3RhdHVzQ2xhc3ModGhpcy50b2FzdC5jb25maWcuc3RhdHVzKV07XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLnRvYXN0Q2xpY2suZW1pdCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHN0YXR1c1NlcnZpY2U6IE5iU3RhdHVzU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnRvYXN0LmNvbmZpZy50b2FzdENsYXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnRvYXN0LmNvbmZpZy50b2FzdENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kuZW1pdCgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaWNvbi1jb250YWluZXJcIiAqbmdJZj1cImhhc0ljb24gJiYgaWNvblwiPlxuICA8bmItaWNvbiBbY29uZmlnXT1cImljb25cIj48L25iLWljb24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICA8c3BhbiBjbGFzcz1cInRpdGxlIHN1YnRpdGxlXCI+e3sgdG9hc3QudGl0bGUgfX08L3NwYW4+XG4gIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+e3sgdG9hc3QubWVzc2FnZSB9fTwvZGl2PlxuPC9kaXY+XG4iXX0=