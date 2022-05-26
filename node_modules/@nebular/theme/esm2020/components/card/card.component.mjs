/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
/**
 * Component intended to be used within the `<nb-card>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * card-header-text-color:
 * card-header-text-font-family:
 * card-header-text-font-size:
 * card-header-text-font-weight:
 * card-header-text-line-height:
 * card-header-basic-background-color:
 * card-header-basic-text-color:
 * card-header-primary-background-color:
 * card-header-primary-text-color:
 * card-header-info-background-color:
 * card-header-info-text-color:
 * card-header-success-background-color:
 * card-header-success-text-color:
 * card-header-warning-background-color:
 * card-header-warning-text-color:
 * card-header-danger-background-color:
 * card-header-danger-text-color:
 * card-header-control-background-color:
 * card-header-control-text-color:
 */
export class NbCardHeaderComponent {
}
NbCardHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbCardHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCardHeaderComponent, selector: "nb-card-header", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-card-header',
                    template: `<ng-content></ng-content>`,
                }]
        }] });
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */
export class NbCardBodyComponent {
}
NbCardBodyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbCardBodyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCardBodyComponent, selector: "nb-card-body", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-card-body',
                    template: `<ng-content></ng-content>`,
                }]
        }] });
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */
export class NbCardFooterComponent {
}
NbCardFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbCardFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCardFooterComponent, selector: "nb-card-footer", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-card-footer',
                    template: `<ng-content></ng-content>`,
                }]
        }] });
/**
 * Basic content container component.
 *
 * Basic card example:
 * @stacked-example(Showcase, card/card-showcase.component)
 *
 * Basic card configuration:
 *
 * ```html
 * <nb-card>
 *   <nb-card-body>
 *     Card
 *   </nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Card with header and footer:
 * @stacked-example(With Header & Footer, card/card-full.component)
 *
 * Most of the time main card content goes to `nb-card-body`,
 * so it is styled and aligned in accordance with the header and footer.
 * In case you need a higher level of control, you can pass contend directly to `nb-card`,
 * so `nb-card-body` styling will not be applied.
 *
 * Consider an example with `nb-list` component:
 * @stacked-example(Card with list, card/card-without-body.component)
 *
 * Colored cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, card/card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, card/card-accents.component)
 *
 * Cards of smaller sizes could be combined and put on the same row with a bigger card so they have the same heights.
 * @stacked-example(Card sizes combinations, card/card-sizes-combinations.component)
 *
 * @additional-example(Multiple Sizes, card/card-sizes.component)
 *
 * @styles
 *
 * card-background-color:
 * card-text-color:
 * card-text-font-family:
 * card-text-font-size:
 * card-text-font-weight:
 * card-text-line-height:
 * card-border-width:
 * card-border-style:
 * card-border-color:
 * card-border-radius:
 * card-padding:
 * card-shadow:
 * card-divider-color:
 * card-divider-style:
 * card-divider-width:
 * card-height-tiny:
 * card-height-small:
 * card-height-medium:
 * card-height-large:
 * card-height-giant:
 * card-margin-bottom:
 * card-scrollbar-color:
 * card-scrollbar-background-color:
 * card-scrollbar-width:
 */
export class NbCardComponent {
    constructor(statusService) {
        this.statusService = statusService;
        this._size = '';
        /**
         * Card status:
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.status = '';
        /**
         * Card accent (color of the top border):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.accent = '';
    }
    /**
     * Card size, available sizes:
     * tiny, small, medium, large, giant
     */
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
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
    get hasAccent() {
        return this.accent;
    }
    get primaryAccent() {
        return this.accent === 'primary';
    }
    get infoAccent() {
        return this.accent === 'info';
    }
    get successAccent() {
        return this.accent === 'success';
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
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
}
NbCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardComponent, deps: [{ token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCardComponent, selector: "nb-card", inputs: { size: "size", status: "status", accent: "accent" }, host: { properties: { "class.size-tiny": "this.tiny", "class.size-small": "this.small", "class.size-medium": "this.medium", "class.size-large": "this.large", "class.size-giant": "this.giant", "class.status-primary": "this.primary", "class.status-info": "this.info", "class.status-success": "this.success", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-basic": "this.basic", "class.status-control": "this.control", "class.accent": "this.hasAccent", "class.accent-primary": "this.primaryAccent", "class.accent-info": "this.infoAccent", "class.accent-success": "this.successAccent", "class.accent-warning": "this.warningAccent", "class.accent-danger": "this.dangerAccent", "class.accent-basic": "this.basicAccent", "class.accent-control": "this.controlAccent", "class": "this.additionalClasses" } }, ngImport: i0, template: `
    <ng-content select="nb-card-header"></ng-content>
    <ng-content select="nb-card-body"></ng-content>
    <ng-content></ng-content>
    <ng-content select="nb-card-footer"></ng-content>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;flex-direction:column}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-card', template: `
    <ng-content select="nb-card-header"></ng-content>
    <ng-content select="nb-card-body"></ng-content>
    <ng-content></ng-content>
    <ng-content select="nb-card-footer"></ng-content>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;flex-direction:column}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbStatusService }]; }, propDecorators: { size: [{
                type: Input
            }], status: [{
                type: Input
            }], accent: [{
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
            }], hasAccent: [{
                type: HostBinding,
                args: ['class.accent']
            }], primaryAccent: [{
                type: HostBinding,
                args: ['class.accent-primary']
            }], infoAccent: [{
                type: HostBinding,
                args: ['class.accent-info']
            }], successAccent: [{
                type: HostBinding,
                args: ['class.accent-success']
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
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNOUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFLSCxNQUFNLE9BQU8scUJBQXFCOztrSEFBckIscUJBQXFCO3NHQUFyQixxQkFBcUIsc0RBRnRCLDJCQUEyQjsyRkFFMUIscUJBQXFCO2tCQUpqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOztBQUlEOzs7R0FHRztBQUtILE1BQU0sT0FBTyxtQkFBbUI7O2dIQUFuQixtQkFBbUI7b0dBQW5CLG1CQUFtQixvREFGcEIsMkJBQTJCOzJGQUUxQixtQkFBbUI7a0JBSi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOztBQUlEOzs7R0FHRztBQUtILE1BQU0sT0FBTyxxQkFBcUI7O2tIQUFyQixxQkFBcUI7c0dBQXJCLHFCQUFxQixzREFGdEIsMkJBQTJCOzJGQUUxQixxQkFBcUI7a0JBSmpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7O0FBSUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErRUc7QUFXSCxNQUFNLE9BQU8sZUFBZTtJQXlJMUIsWUFBc0IsYUFBOEI7UUFBOUIsa0JBQWEsR0FBYixhQUFh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bnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYlN0YXR1c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdGF0dXMuc2VydmljZSc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudFNpemUgfSBmcm9tICcuLi9jb21wb25lbnQtc2l6ZSc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzLCBOYkNvbXBvbmVudFN0YXR1cyB9IGZyb20gJy4uL2NvbXBvbmVudC1zdGF0dXMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBpbnRlbmRlZCB0byBiZSB1c2VkIHdpdGhpbiB0aGUgYDxuYi1jYXJkPmAgY29tcG9uZW50LlxuICogSXQgYWRkcyBzdHlsZXMgZm9yIGEgcHJlc2V0IGhlYWRlciBzZWN0aW9uLlxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiBjYXJkLWhlYWRlci10ZXh0LWNvbG9yOlxuICogY2FyZC1oZWFkZXItdGV4dC1mb250LWZhbWlseTpcbiAqIGNhcmQtaGVhZGVyLXRleHQtZm9udC1zaXplOlxuICogY2FyZC1oZWFkZXItdGV4dC1mb250LXdlaWdodDpcbiAqIGNhcmQtaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6XG4gKiBjYXJkLWhlYWRlci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2FyZC1oZWFkZXItYmFzaWMtdGV4dC1jb2xvcjpcbiAqIGNhcmQtaGVhZGVyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhcmQtaGVhZGVyLXByaW1hcnktdGV4dC1jb2xvcjpcbiAqIGNhcmQtaGVhZGVyLWluZm8tYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhcmQtaGVhZGVyLWluZm8tdGV4dC1jb2xvcjpcbiAqIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtdGV4dC1jb2xvcjpcbiAqIGNhcmQtaGVhZGVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhcmQtaGVhZGVyLXdhcm5pbmctdGV4dC1jb2xvcjpcbiAqIGNhcmQtaGVhZGVyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2FyZC1oZWFkZXItZGFuZ2VyLXRleHQtY29sb3I6XG4gKiBjYXJkLWhlYWRlci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6XG4gKiBjYXJkLWhlYWRlci1jb250cm9sLXRleHQtY29sb3I6XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNhcmQtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYXJkSGVhZGVyQ29tcG9uZW50IHtcbn1cblxuLyoqXG4gKiBDb21wb25lbnQgaW50ZW5kZWQgdG8gYmUgdXNlZCB3aXRoaW4gIHRoZSBgPG5iLWNhcmQ+YCBjb21wb25lbnQuXG4gKiBBZGRzIHN0eWxlcyBmb3IgYSBwcmVzZXQgYm9keSBzZWN0aW9uLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1jYXJkLWJvZHknLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNhcmRCb2R5Q29tcG9uZW50IHtcbn1cblxuLyoqXG4gKiBDb21wb25lbnQgaW50ZW5kZWQgdG8gYmUgdXNlZCB3aXRoaW4gIHRoZSBgPG5iLWNhcmQ+YCBjb21wb25lbnQuXG4gKiBBZGRzIHN0eWxlcyBmb3IgYSBwcmVzZXQgZm9vdGVyIHNlY3Rpb24uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNhcmQtZm9vdGVyJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYXJkRm9vdGVyQ29tcG9uZW50IHtcbn1cblxuLyoqXG4gKiBCYXNpYyBjb250ZW50IGNvbnRhaW5lciBjb21wb25lbnQuXG4gKlxuICogQmFzaWMgY2FyZCBleGFtcGxlOlxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgY2FyZC9jYXJkLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBCYXNpYyBjYXJkIGNvbmZpZ3VyYXRpb246XG4gKlxuICogYGBgaHRtbFxuICogPG5iLWNhcmQ+XG4gKiAgIDxuYi1jYXJkLWJvZHk+XG4gKiAgICAgQ2FyZFxuICogICA8L25iLWNhcmQtYm9keT5cbiAqIDwvbmItY2FyZD5cbiAqIGBgYFxuICpcbiAqICMjIyBJbnN0YWxsYXRpb25cbiAqXG4gKiBJbXBvcnQgYE5iQ2FyZE1vZHVsZWAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJDYXJkTW9kdWxlLFxuICogICBdLFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBQYWdlTW9kdWxlIHsgfVxuICogYGBgXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBDYXJkIHdpdGggaGVhZGVyIGFuZCBmb290ZXI6XG4gKiBAc3RhY2tlZC1leGFtcGxlKFdpdGggSGVhZGVyICYgRm9vdGVyLCBjYXJkL2NhcmQtZnVsbC5jb21wb25lbnQpXG4gKlxuICogTW9zdCBvZiB0aGUgdGltZSBtYWluIGNhcmQgY29udGVudCBnb2VzIHRvIGBuYi1jYXJkLWJvZHlgLFxuICogc28gaXQgaXMgc3R5bGVkIGFuZCBhbGlnbmVkIGluIGFjY29yZGFuY2Ugd2l0aCB0aGUgaGVhZGVyIGFuZCBmb290ZXIuXG4gKiBJbiBjYXNlIHlvdSBuZWVkIGEgaGlnaGVyIGxldmVsIG9mIGNvbnRyb2wsIHlvdSBjYW4gcGFzcyBjb250ZW5kIGRpcmVjdGx5IHRvIGBuYi1jYXJkYCxcbiAqIHNvIGBuYi1jYXJkLWJvZHlgIHN0eWxpbmcgd2lsbCBub3QgYmUgYXBwbGllZC5cbiAqXG4gKiBDb25zaWRlciBhbiBleGFtcGxlIHdpdGggYG5iLWxpc3RgIGNvbXBvbmVudDpcbiAqIEBzdGFja2VkLWV4YW1wbGUoQ2FyZCB3aXRoIGxpc3QsIGNhcmQvY2FyZC13aXRob3V0LWJvZHkuY29tcG9uZW50KVxuICpcbiAqIENvbG9yZWQgY2FyZHMgY291bGQgYmUgc2ltcGx5IGNvbmZpZ3VyZWQgYnkgcHJvdmlkaW5nIGEgYHN0YXR1c2AgcHJvcGVydHk6XG4gKiBAc3RhY2tlZC1leGFtcGxlKENvbG9yZWQgQ2FyZCwgY2FyZC9jYXJkLWNvbG9ycy5jb21wb25lbnQpXG4gKlxuICogSXQgaXMgYWxzbyBwb3NzaWJsZSB0byBhc3NpZ24gYW4gYGFjY2VudGAgcHJvcGVydHkgZm9yIGEgc2xpZ2h0IGNhcmQgaGlnaGxpZ2h0XG4gKiBhcyB3ZWxsIGFzIGNvbWJpbmUgaXQgd2l0aCBgc3RhdHVzYDpcbiAqIEBzdGFja2VkLWV4YW1wbGUoQWNjZW50IENhcmQsIGNhcmQvY2FyZC1hY2NlbnRzLmNvbXBvbmVudClcbiAqXG4gKiBDYXJkcyBvZiBzbWFsbGVyIHNpemVzIGNvdWxkIGJlIGNvbWJpbmVkIGFuZCBwdXQgb24gdGhlIHNhbWUgcm93IHdpdGggYSBiaWdnZXIgY2FyZCBzbyB0aGV5IGhhdmUgdGhlIHNhbWUgaGVpZ2h0cy5cbiAqIEBzdGFja2VkLWV4YW1wbGUoQ2FyZCBzaXplcyBjb21iaW5hdGlvbnMsIGNhcmQvY2FyZC1zaXplcy1jb21iaW5hdGlvbnMuY29tcG9uZW50KVxuICpcbiAqIEBhZGRpdGlvbmFsLWV4YW1wbGUoTXVsdGlwbGUgU2l6ZXMsIGNhcmQvY2FyZC1zaXplcy5jb21wb25lbnQpXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIGNhcmQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNhcmQtdGV4dC1jb2xvcjpcbiAqIGNhcmQtdGV4dC1mb250LWZhbWlseTpcbiAqIGNhcmQtdGV4dC1mb250LXNpemU6XG4gKiBjYXJkLXRleHQtZm9udC13ZWlnaHQ6XG4gKiBjYXJkLXRleHQtbGluZS1oZWlnaHQ6XG4gKiBjYXJkLWJvcmRlci13aWR0aDpcbiAqIGNhcmQtYm9yZGVyLXN0eWxlOlxuICogY2FyZC1ib3JkZXItY29sb3I6XG4gKiBjYXJkLWJvcmRlci1yYWRpdXM6XG4gKiBjYXJkLXBhZGRpbmc6XG4gKiBjYXJkLXNoYWRvdzpcbiAqIGNhcmQtZGl2aWRlci1jb2xvcjpcbiAqIGNhcmQtZGl2aWRlci1zdHlsZTpcbiAqIGNhcmQtZGl2aWRlci13aWR0aDpcbiAqIGNhcmQtaGVpZ2h0LXRpbnk6XG4gKiBjYXJkLWhlaWdodC1zbWFsbDpcbiAqIGNhcmQtaGVpZ2h0LW1lZGl1bTpcbiAqIGNhcmQtaGVpZ2h0LWxhcmdlOlxuICogY2FyZC1oZWlnaHQtZ2lhbnQ6XG4gKiBjYXJkLW1hcmdpbi1ib3R0b206XG4gKiBjYXJkLXNjcm9sbGJhci1jb2xvcjpcbiAqIGNhcmQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6XG4gKiBjYXJkLXNjcm9sbGJhci13aWR0aDpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItY2FyZCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1jYXJkLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1jYXJkLWJvZHlcIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5iLWNhcmQtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNhcmRDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBDYXJkIHNpemUsIGF2YWlsYWJsZSBzaXplczpcbiAgICogdGlueSwgc21hbGwsIG1lZGl1bSwgbGFyZ2UsIGdpYW50XG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc2l6ZSgpOiAnJyB8IE5iQ29tcG9uZW50U2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cbiAgc2V0IHNpemUodmFsdWU6ICcnIHwgTmJDb21wb25lbnRTaXplKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICB9XG4gIF9zaXplOiAnJyB8IE5iQ29tcG9uZW50U2l6ZSA9ICcnO1xuXG4gIC8qKlxuICAgKiBDYXJkIHN0YXR1czpcbiAgICogYGJhc2ljYCwgYHByaW1hcnlgLCBgaW5mb2AsIGBzdWNjZXNzYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCwgYGNvbnRyb2xgXG4gICAqL1xuICBASW5wdXQoKVxuICBzdGF0dXM6ICcnIHwgTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyA9ICcnO1xuXG4gIC8qKlxuICAgKiBDYXJkIGFjY2VudCAoY29sb3Igb2YgdGhlIHRvcCBib3JkZXIpOlxuICAgKiBgYmFzaWNgLCBgcHJpbWFyeWAsIGBpbmZvYCwgYHN1Y2Nlc3NgLCBgd2FybmluZ2AsIGBkYW5nZXJgLCBgY29udHJvbGBcbiAgICovXG4gIEBJbnB1dCgpXG4gIGFjY2VudDogJycgfCBOYkNvbXBvbmVudFN0YXR1cyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS10aW55JylcbiAgZ2V0IHRpbnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3RpbnknO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLXNtYWxsJylcbiAgZ2V0IHNtYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdzbWFsbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtbWVkaXVtJylcbiAgZ2V0IG1lZGl1bSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnbWVkaXVtJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1sYXJnZScpXG4gIGdldCBsYXJnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnbGFyZ2UnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWdpYW50JylcbiAgZ2V0IGdpYW50KCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdnaWFudCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1wcmltYXJ5JylcbiAgZ2V0IHByaW1hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAncHJpbWFyeSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1pbmZvJylcbiAgZ2V0IGluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnaW5mbyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1zdWNjZXNzJylcbiAgZ2V0IHN1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnc3VjY2Vzcyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy13YXJuaW5nJylcbiAgZ2V0IHdhcm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnd2FybmluZyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1kYW5nZXInKVxuICBnZXQgZGFuZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Rhbmdlcic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1iYXNpYycpXG4gIGdldCBiYXNpYygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdiYXNpYyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1jb250cm9sJylcbiAgZ2V0IGNvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnY29udHJvbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjY2VudCcpXG4gIGdldCBoYXNBY2NlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWNjZW50O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY2NlbnQtcHJpbWFyeScpXG4gIGdldCBwcmltYXJ5QWNjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFjY2VudCA9PT0gJ3ByaW1hcnknO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY2NlbnQtaW5mbycpXG4gIGdldCBpbmZvQWNjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFjY2VudCA9PT0gJ2luZm8nO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY2NlbnQtc3VjY2VzcycpXG4gIGdldCBzdWNjZXNzQWNjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFjY2VudCA9PT0gJ3N1Y2Nlc3MnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY2NlbnQtd2FybmluZycpXG4gIGdldCB3YXJuaW5nQWNjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFjY2VudCA9PT0gJ3dhcm5pbmcnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY2NlbnQtZGFuZ2VyJylcbiAgZ2V0IGRhbmdlckFjY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hY2NlbnQgPT09ICdkYW5nZXInO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY2NlbnQtYmFzaWMnKVxuICBnZXQgYmFzaWNBY2NlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWNjZW50ID09PSAnYmFzaWMnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY2NlbnQtY29udHJvbCcpXG4gIGdldCBjb250cm9sQWNjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFjY2VudCA9PT0gJ2NvbnRyb2wnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBhZGRpdGlvbmFsQ2xhc3NlcygpOiBzdHJpbmdbXSB7XG4gICAgaWYgKHRoaXMuc3RhdHVzU2VydmljZS5pc0N1c3RvbVN0YXR1cyh0aGlzLnN0YXR1cykpIHtcbiAgICAgIHJldHVybiBbdGhpcy5zdGF0dXNTZXJ2aWNlLmdldFN0YXR1c0NsYXNzKHRoaXMuc3RhdHVzKV07XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdGF0dXNTZXJ2aWNlOiBOYlN0YXR1c1NlcnZpY2UpIHtcbiAgfVxufVxuIl19