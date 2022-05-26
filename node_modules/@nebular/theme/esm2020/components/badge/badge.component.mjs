/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostBinding, Input } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
/**
 * Badge is a simple labeling component.
 * It can be used to add additional information to any content or highlight unread items.
 *
 * Element is absolute positioned, so parent should be
 * [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
 * It means parent `position` should be set to anything except `static`, e.g. `relative`,
 * `absolute`, `fixed`, or `sticky`.
 *
 * ### Installation
 *
 * Import `NbBadgeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbBadgeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Badge with default position and status(color):
 *
 * ```html
 * <nb-badge text="badgeText"></nb-badge>
 * ```
 *
 * For example, badge can be placed into nb-card header:
 * @stacked-example(Showcase, badge/badge-showcase.component)
 *
 * Badge located on the bottom right with warning status:
 *
 * ```html
 * <nb-badge text="badgeText" status="warning" position="bottom right">
 * </nb-badge>
 * ```
 *
 * @styles
 *
 * badge-border-radius:
 * badge-text-font-family:
 * badge-text-font-size:
 * badge-text-font-weight:
 * badge-text-line-height:
 * badge-padding:
 * badge-basic-background-color:
 * badge-basic-text-color:
 * badge-primary-background-color:
 * badge-primary-text-color:
 * badge-success-background-color:
 * badge-success-text-color:
 * badge-info-background-color:
 * badge-info-text-color:
 * badge-warning-background-color:
 * badge-warning-text-color:
 * badge-danger-background-color:
 * badge-danger-text-color:
 * badge-control-background-color:
 * badge-control-text-color:
 */
export class NbBadgeComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Text to display
         * @type string
         */
        this.text = '';
        this._defaultPosition = 'top right';
        this._position = this._defaultPosition;
        /**
         * Badge status (adds specific styles):
         * 'basic', 'primary', 'info', 'success', 'warning', 'danger', 'control'
         */
        this.status = 'basic';
    }
    /**
     * Badge position
     *
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value || this._defaultPosition;
    }
    /**
     * Shows badge as a dot. No text is shown.
     * @type boolean
     */
    get dotMode() {
        return this._dotMode;
    }
    set dotMode(value) {
        this._dotMode = convertToBoolProperty(value);
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
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
    get top() {
        return this.position.includes('top');
    }
    get right() {
        return this.position.includes('right');
    }
    get bottom() {
        return this.position.includes('bottom');
    }
    get left() {
        return this.position.includes('left');
    }
    get start() {
        return this.position.includes('start');
    }
    get end() {
        return this.position.includes('end');
    }
    get center() {
        return this.position.includes('center');
    }
}
NbBadgeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBadgeComponent, deps: [{ token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbBadgeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbBadgeComponent, selector: "nb-badge", inputs: { text: "text", position: "position", dotMode: "dotMode", status: "status" }, host: { properties: { "class.dot-mode": "this.dotMode", "class": "this.additionalClasses", "class.status-primary": "this.primary", "class.status-success": "this.success", "class.status-info": "this.info", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-basic": "this.basic", "class.status-control": "this.control", "class.position-top": "this.top", "class.position-right": "this.right", "class.position-bottom": "this.bottom", "class.position-left": "this.left", "class.position-start": "this.start", "class.position-end": "this.end", "class.position-center": "this.center" } }, ngImport: i0, template: `{{dotMode ? '' : text}}`, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{position:absolute;text-align:center;white-space:nowrap;vertical-align:baseline}:host(.position-top){top:0}:host(.position-right){right:0}:host(.position-bottom){bottom:0}:host(.position-left){left:0}:host(.position-center){top:50%;transform:translateY(-50%)}[dir=ltr] :host(.position-start){left:0}[dir=rtl] :host(.position-start),[dir=ltr] :host(.position-end){right:0}[dir=rtl] :host(.position-end){left:0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-badge', template: `{{dotMode ? '' : text}}`, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{position:absolute;text-align:center;white-space:nowrap;vertical-align:baseline}:host(.position-top){top:0}:host(.position-right){right:0}:host(.position-bottom){bottom:0}:host(.position-left){left:0}:host(.position-center){top:50%;transform:translateY(-50%)}[dir=ltr] :host(.position-start){left:0}[dir=rtl] :host(.position-start),[dir=ltr] :host(.position-end){right:0}[dir=rtl] :host(.position-end){left:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbStatusService }]; }, propDecorators: { text: [{
                type: Input
            }], position: [{
                type: Input
            }], dotMode: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.dot-mode']
            }], status: [{
                type: Input
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
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
            }], top: [{
                type: HostBinding,
                args: ['class.position-top']
            }], right: [{
                type: HostBinding,
                args: ['class.position-right']
            }], bottom: [{
                type: HostBinding,
                args: ['class.position-bottom']
            }], left: [{
                type: HostBinding,
                args: ['class.position-left']
            }], start: [{
                type: HostBinding,
                args: ['class.position-start']
            }], end: [{
                type: HostBinding,
                args: ['class.position-end']
            }], center: [{
                type: HostBinding,
                args: ['class.position-center']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2JhZGdlL2JhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBYW5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkRHO0FBTUgsTUFBTSxPQUFPLGdCQUFnQjtJQTRIM0IsWUFBc0IsYUFBOEI7UUFBOUIsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBMUhwRDs7O1dBR0c7UUFDTSxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBaUJqQixxQkFBZ0IsR0FBb0IsV0FBVyxDQUFDO1FBQ2hELGNBQVMsR0FBb0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBZ0I3RDs7O1dBR0c7UUFDTSxXQUFNLEdBQThCLE9BQU8sQ0FBQztJQWlGckQsQ0FBQztJQXJIRDs7Ozs7OztPQU9HO0lBQ0gsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFzQjtRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDbEQsQ0FBQztJQUlEOzs7T0FHRztJQUNILElBRUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lB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QjtnQkFNL0IsTUFBTTtzQkFEVCxXQUFXO3VCQUFDLHVCQUF1QjtnQkFNaEMsSUFBSTtzQkFEUCxXQUFXO3VCQUFDLHFCQUFxQjtnQkFNOUIsS0FBSztzQkFEUixXQUFXO3VCQUFDLHNCQUFzQjtnQkFNL0IsR0FBRztzQkFETixXQUFXO3VCQUFDLG9CQUFvQjtnQkFNN0IsTUFBTTtzQkFEVCxXQUFXO3VCQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RhdHVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyB9IGZyb20gJy4uL2NvbXBvbmVudC1zdGF0dXMnO1xuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCB0eXBlIE5iQmFkZ2VQaHlzaWNhbFBvc2l0aW9uID0gJ3RvcCBsZWZ0JyB8ICd0b3AgcmlnaHQnIHwgJ2JvdHRvbSBsZWZ0JyB8ICdib3R0b20gcmlnaHQnIHwgJ2NlbnRlciByaWdodCcgfCAnY2VudGVyIGxlZnQnO1xuZXhwb3J0IHR5cGUgTmJCYWRnZUxvZ2ljYWxQb3NpdGlvbiA9ICd0b3Agc3RhcnQnIHwgJ3RvcCBlbmQnIHwgJ2JvdHRvbSBzdGFydCcgfCAnYm90dG9tIGVuZCcgfCAnY2VudGVyIHN0YXJ0J3wgJ2NlbnRlciBlbmQnO1xuZXhwb3J0IHR5cGUgTmJCYWRnZVBvc2l0aW9uID0gTmJCYWRnZVBoeXNpY2FsUG9zaXRpb24gfCBOYkJhZGdlTG9naWNhbFBvc2l0aW9uO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5iQmFkZ2Uge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBwb3NpdGlvbj86IE5iQmFkZ2VQb3NpdGlvbjtcbiAgc3RhdHVzPzogTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cztcbiAgZG90TW9kZT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQmFkZ2UgaXMgYSBzaW1wbGUgbGFiZWxpbmcgY29tcG9uZW50LlxuICogSXQgY2FuIGJlIHVzZWQgdG8gYWRkIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gYW55IGNvbnRlbnQgb3IgaGlnaGxpZ2h0IHVucmVhZCBpdGVtcy5cbiAqXG4gKiBFbGVtZW50IGlzIGFic29sdXRlIHBvc2l0aW9uZWQsIHNvIHBhcmVudCBzaG91bGQgYmVcbiAqIFtwb3NpdGlvbmVkIGVsZW1lbnRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9wb3NpdGlvbikuXG4gKiBJdCBtZWFucyBwYXJlbnQgYHBvc2l0aW9uYCBzaG91bGQgYmUgc2V0IHRvIGFueXRoaW5nIGV4Y2VwdCBgc3RhdGljYCwgZS5nLiBgcmVsYXRpdmVgLFxuICogYGFic29sdXRlYCwgYGZpeGVkYCwgb3IgYHN0aWNreWAuXG4gKlxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJCYWRnZU1vZHVsZWAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJCYWRnZU1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKlxuICogQmFkZ2Ugd2l0aCBkZWZhdWx0IHBvc2l0aW9uIGFuZCBzdGF0dXMoY29sb3IpOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxuYi1iYWRnZSB0ZXh0PVwiYmFkZ2VUZXh0XCI+PC9uYi1iYWRnZT5cbiAqIGBgYFxuICpcbiAqIEZvciBleGFtcGxlLCBiYWRnZSBjYW4gYmUgcGxhY2VkIGludG8gbmItY2FyZCBoZWFkZXI6XG4gKiBAc3RhY2tlZC1leGFtcGxlKFNob3djYXNlLCBiYWRnZS9iYWRnZS1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogQmFkZ2UgbG9jYXRlZCBvbiB0aGUgYm90dG9tIHJpZ2h0IHdpdGggd2FybmluZyBzdGF0dXM6XG4gKlxuICogYGBgaHRtbFxuICogPG5iLWJhZGdlIHRleHQ9XCJiYWRnZVRleHRcIiBzdGF0dXM9XCJ3YXJuaW5nXCIgcG9zaXRpb249XCJib3R0b20gcmlnaHRcIj5cbiAqIDwvbmItYmFkZ2U+XG4gKiBgYGBcbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogYmFkZ2UtYm9yZGVyLXJhZGl1czpcbiAqIGJhZGdlLXRleHQtZm9udC1mYW1pbHk6XG4gKiBiYWRnZS10ZXh0LWZvbnQtc2l6ZTpcbiAqIGJhZGdlLXRleHQtZm9udC13ZWlnaHQ6XG4gKiBiYWRnZS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogYmFkZ2UtcGFkZGluZzpcbiAqIGJhZGdlLWJhc2ljLWJhY2tncm91bmQtY29sb3I6XG4gKiBiYWRnZS1iYXNpYy10ZXh0LWNvbG9yOlxuICogYmFkZ2UtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYmFkZ2UtcHJpbWFyeS10ZXh0LWNvbG9yOlxuICogYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOlxuICogYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYmFkZ2UtaW5mby10ZXh0LWNvbG9yOlxuICogYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOlxuICogYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6XG4gKiBiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjpcbiAqIGJhZGdlLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGJhZGdlLWNvbnRyb2wtdGV4dC1jb2xvcjpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItYmFkZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9iYWRnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYHt7ZG90TW9kZSA/ICcnIDogdGV4dH19YCxcbn0pXG5leHBvcnQgY2xhc3MgTmJCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE5iQmFkZ2Uge1xuXG4gIC8qKlxuICAgKiBUZXh0IHRvIGRpc3BsYXlcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogQmFkZ2UgcG9zaXRpb25cbiAgICpcbiAgICogQ2FuIGJlIHNldCB0byBhbnkgY2xhc3Mgb3IgdG8gb25lIG9mIHByZWRlZmluZWQgcG9zaXRpb25zOlxuICAgKiAndG9wIGxlZnQnLCAndG9wIHJpZ2h0JywgJ2JvdHRvbSBsZWZ0JywgJ2JvdHRvbSByaWdodCcsXG4gICAqICd0b3Agc3RhcnQnLCAndG9wIGVuZCcsICdib3R0b20gc3RhcnQnLCAnYm90dG9tIGVuZCdcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgcG9zaXRpb24oKTogTmJCYWRnZVBvc2l0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cbiAgc2V0IHBvc2l0aW9uKHZhbHVlOiBOYkJhZGdlUG9zaXRpb24pIHtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbHVlIHx8IHRoaXMuX2RlZmF1bHRQb3NpdGlvbjtcbiAgfVxuICBwcm90ZWN0ZWQgX2RlZmF1bHRQb3NpdGlvbjogTmJCYWRnZVBvc2l0aW9uID0gJ3RvcCByaWdodCc7XG4gIHByb3RlY3RlZCBfcG9zaXRpb246IE5iQmFkZ2VQb3NpdGlvbiA9IHRoaXMuX2RlZmF1bHRQb3NpdGlvbjtcblxuICAvKipcbiAgICogU2hvd3MgYmFkZ2UgYXMgYSBkb3QuIE5vIHRleHQgaXMgc2hvd24uXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZG90LW1vZGUnKVxuICBnZXQgZG90TW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZG90TW9kZTtcbiAgfVxuICBzZXQgZG90TW9kZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RvdE1vZGUgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByb3RlY3RlZCBfZG90TW9kZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmFkZ2Ugc3RhdHVzIChhZGRzIHNwZWNpZmljIHN0eWxlcyk6XG4gICAqICdiYXNpYycsICdwcmltYXJ5JywgJ2luZm8nLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlcicsICdjb250cm9sJ1xuICAgKi9cbiAgQElucHV0KCkgc3RhdHVzOiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzID0gJ2Jhc2ljJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGFkZGl0aW9uYWxDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5zdGF0dXNTZXJ2aWNlLmlzQ3VzdG9tU3RhdHVzKHRoaXMuc3RhdHVzKSkge1xuICAgICAgcmV0dXJuIFt0aGlzLnN0YXR1c1NlcnZpY2UuZ2V0U3RhdHVzQ2xhc3ModGhpcy5zdGF0dXMpXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtcHJpbWFyeScpXG4gIGdldCBwcmltYXJ5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ3ByaW1hcnknO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtc3VjY2VzcycpXG4gIGdldCBzdWNjZXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtaW5mbycpXG4gIGdldCBpbmZvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2luZm8nO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtd2FybmluZycpXG4gIGdldCB3YXJuaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ3dhcm5pbmcnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtZGFuZ2VyJylcbiAgZ2V0IGRhbmdlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdkYW5nZXInO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtYmFzaWMnKVxuICBnZXQgYmFzaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnYmFzaWMnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtY29udHJvbCcpXG4gIGdldCBjb250cm9sKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2NvbnRyb2wnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wb3NpdGlvbi10b3AnKVxuICBnZXQgdG9wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmluY2x1ZGVzKCd0b3AnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucG9zaXRpb24tcmlnaHQnKVxuICBnZXQgcmlnaHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uaW5jbHVkZXMoJ3JpZ2h0Jyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBvc2l0aW9uLWJvdHRvbScpXG4gIGdldCBib3R0b20oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uaW5jbHVkZXMoJ2JvdHRvbScpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wb3NpdGlvbi1sZWZ0JylcbiAgZ2V0IGxlZnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uaW5jbHVkZXMoJ2xlZnQnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucG9zaXRpb24tc3RhcnQnKVxuICBnZXQgc3RhcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uaW5jbHVkZXMoJ3N0YXJ0Jyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBvc2l0aW9uLWVuZCcpXG4gIGdldCBlbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uaW5jbHVkZXMoJ2VuZCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wb3NpdGlvbi1jZW50ZXInKVxuICBnZXQgY2VudGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmluY2x1ZGVzKCdjZW50ZXInKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdGF0dXNTZXJ2aWNlOiBOYlN0YXR1c1NlcnZpY2UpIHtcbiAgfVxufVxuIl19