/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostBinding, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NbPosition } from '../cdk/overlay/overlay-position';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
import * as i2 from "../icon/icon.component";
import * as i3 from "@angular/common";
/**
 * Tooltip container.
 * Renders provided tooltip inside.
 *
 * @styles
 *
 * tooltip-background-color:
 * tooltip-border-color:
 * tooltip-border-style:
 * tooltip-border-width:
 * tooltip-border-radius:
 * tooltip-padding:
 * tooltip-text-color:
 * tooltip-text-font-family:
 * tooltip-text-font-size:
 * tooltip-text-font-weight:
 * tooltip-text-line-height:
 * tooltip-icon-height:
 * tooltip-icon-width:
 * tooltip-max-width:
 * tooltip-basic-background-color:
 * tooltip-basic-border-color:
 * tooltip-basic-text-color:
 * tooltip-primary-background-color:
 * tooltip-primary-border-color:
 * tooltip-primary-text-color:
 * tooltip-info-background-color:
 * tooltip-info-border-color:
 * tooltip-info-text-color:
 * tooltip-success-background-color:
 * tooltip-success-border-color:
 * tooltip-success-text-color:
 * tooltip-warning-background-color:
 * tooltip-warning-border-color:
 * tooltip-warning-text-color:
 * tooltip-danger-background-color:
 * tooltip-danger-border-color:
 * tooltip-danger-text-color:
 * tooltip-control-background-color:
 * tooltip-control-border-color:
 * tooltip-control-text-color:
 * tooltip-shadow:
 */
export class NbTooltipComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Popover position relatively host element.
         * */
        this.position = NbPosition.TOP;
        this.context = {};
    }
    get binding() {
        return `${this.position} ${this.statusClass}`;
    }
    get show() {
        return true;
    }
    get statusClass() {
        if (this.context.status) {
            return this.statusService.getStatusClass(this.context.status);
        }
        return '';
    }
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent() { }
}
NbTooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTooltipComponent, deps: [{ token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbTooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbTooltipComponent, selector: "nb-tooltip", inputs: { content: "content", position: "position", context: "context" }, host: { properties: { "class": "this.binding", "@showTooltip": "this.show" } }, ngImport: i0, template: `
    <span class="arrow"></span>
    <div class="content">
      <nb-icon *ngIf="context?.icon" [config]="context.icon"></nb-icon>
      <span *ngIf="content">{{ content }}</span>
    </div>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{z-index:10000}:host .content{display:flex;align-items:center}:host.right .content{flex-direction:row-reverse}:host .arrow{position:absolute;width:0;height:0}:host nb-icon+span{margin-left:.5rem}:host.right nb-icon+span{margin-right:.5rem}:host .arrow{border-left:6px solid transparent;border-right:6px solid transparent}:host(.bottom) .arrow{top:-6px;left:calc(50% - 6px)}:host(.bottom-start) .arrow{top:-6px}[dir=ltr] :host(.bottom-start) .arrow{right:6px}[dir=rtl] :host(.bottom-start) .arrow{left:6px}:host(.bottom-end) .arrow{top:-6px}[dir=ltr] :host(.bottom-end) .arrow{left:6px}[dir=rtl] :host(.bottom-end) .arrow{right:6px}:host(.left) .arrow,:host(.start) .arrow{top:calc(50% - 2.4px)}[dir=ltr] :host(.left) .arrow,[dir=ltr] :host(.start) .arrow{right:-8px;transform:rotate(90deg)}[dir=rtl] :host(.left) .arrow,[dir=rtl] :host(.start) .arrow{left:-8px;transform:rotate(270deg)}:host(.start-top) .arrow{right:-8px;bottom:6px;transform:rotate(90deg)}:host(.start-bottom) .arrow{right:-8px;top:6px;transform:rotate(90deg)}:host(.top) .arrow{bottom:-6px;left:calc(50% - 6px);transform:rotate(180deg)}:host(.top-start) .arrow{bottom:-5px;transform:rotate(180deg)}[dir=ltr] :host(.top-start) .arrow{right:6px}[dir=rtl] :host(.top-start) .arrow{left:6px}:host(.top-end) .arrow{bottom:-5px;transform:rotate(180deg)}[dir=ltr] :host(.top-end) .arrow{left:6px}[dir=rtl] :host(.top-end) .arrow{right:6px}:host(.right) .arrow,:host(.end) .arrow{top:calc(50% - 2.4px)}[dir=ltr] :host(.right) .arrow,[dir=ltr] :host(.end) .arrow{left:-8px;transform:rotate(270deg)}[dir=rtl] :host(.right) .arrow,[dir=rtl] :host(.end) .arrow{right:-8px;transform:rotate(90deg)}:host(.end-top) .arrow{left:-8.4px;bottom:6px;transform:rotate(270deg)}:host(.end-bottom) .arrow{left:-8.4px;top:6px;transform:rotate(270deg)}\n"], components: [{ type: i2.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], animations: [
        trigger('showTooltip', [
            state('in', style({ opacity: 1 })),
            transition('void => *', [
                style({ opacity: 0 }),
                animate(100),
            ]),
            transition('* => void', [
                animate(100, style({ opacity: 0 })),
            ]),
        ]),
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-tooltip', template: `
    <span class="arrow"></span>
    <div class="content">
      <nb-icon *ngIf="context?.icon" [config]="context.icon"></nb-icon>
      <span *ngIf="content">{{ content }}</span>
    </div>
  `, animations: [
                        trigger('showTooltip', [
                            state('in', style({ opacity: 1 })),
                            transition('void => *', [
                                style({ opacity: 0 }),
                                animate(100),
                            ]),
                            transition('* => void', [
                                animate(100, style({ opacity: 0 })),
                            ]),
                        ]),
                    ], styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{z-index:10000}:host .content{display:flex;align-items:center}:host.right .content{flex-direction:row-reverse}:host .arrow{position:absolute;width:0;height:0}:host nb-icon+span{margin-left:.5rem}:host.right nb-icon+span{margin-right:.5rem}:host .arrow{border-left:6px solid transparent;border-right:6px solid transparent}:host(.bottom) .arrow{top:-6px;left:calc(50% - 6px)}:host(.bottom-start) .arrow{top:-6px}[dir=ltr] :host(.bottom-start) .arrow{right:6px}[dir=rtl] :host(.bottom-start) .arrow{left:6px}:host(.bottom-end) .arrow{top:-6px}[dir=ltr] :host(.bottom-end) .arrow{left:6px}[dir=rtl] :host(.bottom-end) .arrow{right:6px}:host(.left) .arrow,:host(.start) .arrow{top:calc(50% - 2.4px)}[dir=ltr] :host(.left) .arrow,[dir=ltr] :host(.start) .arrow{right:-8px;transform:rotate(90deg)}[dir=rtl] :host(.left) .arrow,[dir=rtl] :host(.start) .arrow{left:-8px;transform:rotate(270deg)}:host(.start-top) .arrow{right:-8px;bottom:6px;transform:rotate(90deg)}:host(.start-bottom) .arrow{right:-8px;top:6px;transform:rotate(90deg)}:host(.top) .arrow{bottom:-6px;left:calc(50% - 6px);transform:rotate(180deg)}:host(.top-start) .arrow{bottom:-5px;transform:rotate(180deg)}[dir=ltr] :host(.top-start) .arrow{right:6px}[dir=rtl] :host(.top-start) .arrow{left:6px}:host(.top-end) .arrow{bottom:-5px;transform:rotate(180deg)}[dir=ltr] :host(.top-end) .arrow{left:6px}[dir=rtl] :host(.top-end) .arrow{right:6px}:host(.right) .arrow,:host(.end) .arrow{top:calc(50% - 2.4px)}[dir=ltr] :host(.right) .arrow,[dir=ltr] :host(.end) .arrow{left:-8px;transform:rotate(270deg)}[dir=rtl] :host(.right) .arrow,[dir=rtl] :host(.end) .arrow{right:-8px;transform:rotate(90deg)}:host(.end-top) .arrow{left:-8.4px;bottom:6px;transform:rotate(270deg)}:host(.end-bottom) .arrow{left:-8.4px;top:6px;transform:rotate(270deg)}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbStatusService }]; }, propDecorators: { content: [{
                type: Input
            }], position: [{
                type: Input
            }], binding: [{
                type: HostBinding,
                args: ['class']
            }], show: [{
                type: HostBinding,
                args: ['@showTooltip']
            }], context: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7OztBQUk3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENHO0FBd0JILE1BQU0sT0FBTyxrQkFBa0I7SUFnQzdCLFlBQXNCLGFBQThCO1FBQTlCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQTNCcEQ7O2FBRUs7UUFFTCxhQUFRLEdBQWUsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQWF0QyxZQUFPLEdBQXlFLEVBQUUsQ0FBQztJQVduRixDQUFDO0lBdEJELElBQ0ksT0FBTztRQUNULE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFDSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBS0QsSUFBSSxXQUFXO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0Q7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFLRDs7O09BR0c7SUFDSCxhQUFhLEtBQUksQ0FBQzs7K0dBdkNQLGtCQUFrQjttR0FBbEIsa0JBQWtCLDRNQXBCbkI7Ozs7OztHQU1ULCtxRUFDVztRQUNWLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDckIsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQyxVQUFVLENBQUMsV0FBVyxFQUFFO2dCQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUM7YUFDYixDQUFDO1lBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQkFDdEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNwQyxDQUFDO1NBQ0gsQ0FBQztLQUNIOzJGQUVVLGtCQUFrQjtrQkF2QjlCLFNBQVM7K0JBQ0UsWUFBWSxZQUVaOzs7Ozs7R0FNVCxjQUNXO3dCQUNWLE9BQU8sQ0FBQyxhQUFhLEVBQUU7NEJBQ3JCLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ2xDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQzs2QkFDYixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ3BDLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDtzR0FLRCxPQUFPO3NCQUROLEtBQUs7Z0JBT04sUUFBUTtzQkFEUCxLQUFLO2dCQUlGLE9BQU87c0JBRFYsV0FBVzt1QkFBQyxPQUFPO2dCQU1oQixJQUFJO3NCQURQLFdBQVc7dUJBQUMsY0FBYztnQkFNM0IsT0FBTztzQkFETixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgTmJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RhdHVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyB9IGZyb20gJy4uL2NvbXBvbmVudC1zdGF0dXMnO1xuaW1wb3J0IHsgTmJSZW5kZXJhYmxlQ29udGFpbmVyIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgTmJQb3NpdGlvbiB9IGZyb20gJy4uL2Nkay9vdmVybGF5L292ZXJsYXktcG9zaXRpb24nO1xuaW1wb3J0IHsgTmJJY29uQ29uZmlnIH0gZnJvbSAnLi4vaWNvbi9pY29uLmNvbXBvbmVudCc7XG5cblxuLyoqXG4gKiBUb29sdGlwIGNvbnRhaW5lci5cbiAqIFJlbmRlcnMgcHJvdmlkZWQgdG9vbHRpcCBpbnNpZGUuXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIHRvb2x0aXAtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvb2x0aXAtYm9yZGVyLWNvbG9yOlxuICogdG9vbHRpcC1ib3JkZXItc3R5bGU6XG4gKiB0b29sdGlwLWJvcmRlci13aWR0aDpcbiAqIHRvb2x0aXAtYm9yZGVyLXJhZGl1czpcbiAqIHRvb2x0aXAtcGFkZGluZzpcbiAqIHRvb2x0aXAtdGV4dC1jb2xvcjpcbiAqIHRvb2x0aXAtdGV4dC1mb250LWZhbWlseTpcbiAqIHRvb2x0aXAtdGV4dC1mb250LXNpemU6XG4gKiB0b29sdGlwLXRleHQtZm9udC13ZWlnaHQ6XG4gKiB0b29sdGlwLXRleHQtbGluZS1oZWlnaHQ6XG4gKiB0b29sdGlwLWljb24taGVpZ2h0OlxuICogdG9vbHRpcC1pY29uLXdpZHRoOlxuICogdG9vbHRpcC1tYXgtd2lkdGg6XG4gKiB0b29sdGlwLWJhc2ljLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b29sdGlwLWJhc2ljLWJvcmRlci1jb2xvcjpcbiAqIHRvb2x0aXAtYmFzaWMtdGV4dC1jb2xvcjpcbiAqIHRvb2x0aXAtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9vbHRpcC1wcmltYXJ5LWJvcmRlci1jb2xvcjpcbiAqIHRvb2x0aXAtcHJpbWFyeS10ZXh0LWNvbG9yOlxuICogdG9vbHRpcC1pbmZvLWJhY2tncm91bmQtY29sb3I6XG4gKiB0b29sdGlwLWluZm8tYm9yZGVyLWNvbG9yOlxuICogdG9vbHRpcC1pbmZvLXRleHQtY29sb3I6XG4gKiB0b29sdGlwLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvb2x0aXAtc3VjY2Vzcy1ib3JkZXItY29sb3I6XG4gKiB0b29sdGlwLXN1Y2Nlc3MtdGV4dC1jb2xvcjpcbiAqIHRvb2x0aXAtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdG9vbHRpcC13YXJuaW5nLWJvcmRlci1jb2xvcjpcbiAqIHRvb2x0aXAtd2FybmluZy10ZXh0LWNvbG9yOlxuICogdG9vbHRpcC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvb2x0aXAtZGFuZ2VyLWJvcmRlci1jb2xvcjpcbiAqIHRvb2x0aXAtZGFuZ2VyLXRleHQtY29sb3I6XG4gKiB0b29sdGlwLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRvb2x0aXAtY29udHJvbC1ib3JkZXItY29sb3I6XG4gKiB0b29sdGlwLWNvbnRyb2wtdGV4dC1jb2xvcjpcbiAqIHRvb2x0aXAtc2hhZG93OlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi10b29sdGlwJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbHRpcC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwiYXJyb3dcIj48L3NwYW4+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgIDxuYi1pY29uICpuZ0lmPVwiY29udGV4dD8uaWNvblwiIFtjb25maWddPVwiY29udGV4dC5pY29uXCI+PC9uYi1pY29uPlxuICAgICAgPHNwYW4gKm5nSWY9XCJjb250ZW50XCI+e3sgY29udGVudCB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3Nob3dUb29sdGlwJywgW1xuICAgICAgc3RhdGUoJ2luJywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxuICAgICAgICBhbmltYXRlKDEwMCksXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgxMDAsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgTmJSZW5kZXJhYmxlQ29udGFpbmVyIHtcblxuICBASW5wdXQoKVxuICBjb250ZW50OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFBvcG92ZXIgcG9zaXRpb24gcmVsYXRpdmVseSBob3N0IGVsZW1lbnQuXG4gICAqICovXG4gIEBJbnB1dCgpXG4gIHBvc2l0aW9uOiBOYlBvc2l0aW9uID0gTmJQb3NpdGlvbi5UT1A7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBiaW5kaW5nKCkge1xuICAgIHJldHVybiBgJHt0aGlzLnBvc2l0aW9ufSAke3RoaXMuc3RhdHVzQ2xhc3N9YDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnQHNob3dUb29sdGlwJylcbiAgZ2V0IHNob3coKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBjb250ZXh0OiB7IGljb24/OiBzdHJpbmcgfCBOYkljb25Db25maWcsIHN0YXR1cz86IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgfSA9IHt9O1xuXG4gIGdldCBzdGF0dXNDbGFzcygpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0LnN0YXR1cykge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzU2VydmljZS5nZXRTdGF0dXNDbGFzcyh0aGlzLmNvbnRleHQuc3RhdHVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RhdHVzU2VydmljZTogTmJTdGF0dXNTZXJ2aWNlKSB7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1ldGhvZCBpcyBlbXB0eSBzaW5jZSB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nIGFkZGl0aW9uYWxseVxuICAgKiByZW5kZXIgaXMgaGFuZGxlZCBieSBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAqL1xuICByZW5kZXJDb250ZW50KCkge31cbn1cbiJdfQ==