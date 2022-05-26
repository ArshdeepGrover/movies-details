/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostBinding, Input } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icon.component";
import * as i2 from "../badge/badge.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
export class NbActionComponent {
    constructor() {
        /**
         * Optional title for mouseover
         * @type string
         */
        this.title = '';
        this._disabled = false;
        /**
         * Badge status (adds specific styles):
         * 'basic', 'primary', 'info', 'success', 'warning', 'danger', 'control'
         * @param {string} val
         */
        this.badgeStatus = 'basic';
    }
    /**
     * Visually disables the item
     * @type boolean
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
    }
    /**
     * Use badge dot mode
     * @type boolean
     */
    get badgeDot() {
        return this._badgeDot;
    }
    set badgeDot(value) {
        this._badgeDot = convertToBoolProperty(value);
    }
}
NbActionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbActionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbActionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbActionComponent, selector: "nb-action", inputs: { link: "link", href: "href", title: "title", icon: "icon", disabled: "disabled", badgeDot: "badgeDot", badgeText: "badgeText", badgeStatus: "badgeStatus", badgePosition: "badgePosition" }, host: { properties: { "class.disabled": "this.disabled" } }, ngImport: i0, template: `
    <ng-container *ngIf="icon; else projectedContent">
      <a class="icon-container"
         [routerLink]="link"
         [title]="title"
         *ngIf="link">
        <nb-icon [config]="icon"></nb-icon>
        <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
      </a>
      <a class="icon-container"
         [href]="href"
         [title]="title"
         *ngIf="href && !link">
        <nb-icon [config]="icon"></nb-icon>
        <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
      </a>
      <a class="icon-container"
         href="#"
         [title]="title"
         *ngIf="!href && !link"
         (click)="$event.preventDefault()">
        <nb-icon [config]="icon"></nb-icon>
        <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
      </a>
    </ng-container>

    <ng-template #projectedContent>
      <ng-content></ng-content>
      <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
    </ng-template>
    <ng-template #badgeTemplate>
      <nb-badge *ngIf="badgeText || badgeDot"
                [text]="badgeText"
                [dotMode]="badgeDot"
                [status]="badgeStatus"
                [position]="badgePosition">
      </nb-badge>
    </ng-template>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{background:transparent;display:flex;align-items:center;position:relative}:host(.disabled),:host(.disabled) a,:host(.disabled) nb-icon{cursor:not-allowed}:host-context(nb-actions.full-width){justify-content:center;width:100%}a.icon-container{position:relative}a.icon-container:hover,a.icon-container:focus{text-decoration:none}nb-icon:hover{cursor:pointer}\n"], components: [{ type: i1.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }, { type: i2.NbBadgeComponent, selector: "nb-badge", inputs: ["text", "position", "dotMode", "status"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbActionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-action', template: `
    <ng-container *ngIf="icon; else projectedContent">
      <a class="icon-container"
         [routerLink]="link"
         [title]="title"
         *ngIf="link">
        <nb-icon [config]="icon"></nb-icon>
        <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
      </a>
      <a class="icon-container"
         [href]="href"
         [title]="title"
         *ngIf="href && !link">
        <nb-icon [config]="icon"></nb-icon>
        <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
      </a>
      <a class="icon-container"
         href="#"
         [title]="title"
         *ngIf="!href && !link"
         (click)="$event.preventDefault()">
        <nb-icon [config]="icon"></nb-icon>
        <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
      </a>
    </ng-container>

    <ng-template #projectedContent>
      <ng-content></ng-content>
      <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
    </ng-template>
    <ng-template #badgeTemplate>
      <nb-badge *ngIf="badgeText || badgeDot"
                [text]="badgeText"
                [dotMode]="badgeDot"
                [status]="badgeStatus"
                [position]="badgePosition">
      </nb-badge>
    </ng-template>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{background:transparent;display:flex;align-items:center;position:relative}:host(.disabled),:host(.disabled) a,:host(.disabled) nb-icon{cursor:not-allowed}:host-context(nb-actions.full-width){justify-content:center;width:100%}a.icon-container{position:relative}a.icon-container:hover,a.icon-container:focus{text-decoration:none}nb-icon:hover{cursor:pointer}\n"] }]
        }], propDecorators: { link: [{
                type: Input
            }], href: [{
                type: Input
            }], title: [{
                type: Input
            }], icon: [{
                type: Input
            }], disabled: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.disabled']
            }], badgeDot: [{
                type: Input
            }], badgeText: [{
                type: Input
            }], badgeStatus: [{
                type: Input
            }], badgePosition: [{
                type: Input
            }] } });
/**
 * Shows a horizontal list of actions, available in multiple sizes.
 * Aligns items vertically.
 *
 * @stacked-example(Showcase, action/action-showcase.component)
 *
 * Basic actions setup:
 * ```html
 * <nb-actions size="small">
 *   <nb-action icon="nb-search"></nb-action>
 *   <nb-action icon="nb-power-circled"></nb-action>
 *   <nb-action icon="nb-person"></nb-action>
 * </nb-actions>
 * ```
 * ### Installation
 *
 * Import `NbActionsModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbActionsModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Multiple sizes example:
 * @stacked-example(Multiple Sizes, action/action-sizes.component)
 *
 * It is also possible to specify a `badge` value:
 *
 * @stacked-example(Action Badge, action/action-badge.component)
 *
 * and we can set it to full a width of a parent component
 * @stacked-example(Full Width, action/action-width.component)
 *
 * Action dot mode
 * @stacked-example(Action badge in dot mode, action/action-dot-mode.component)
 *
 * @styles
 *
 * actions-background-color:
 * actions-divider-color:
 * actions-divider-style:
 * actions-divider-width:
 * actions-icon-color:
 * actions-text-color:
 * actions-text-font-family:
 * actions-text-font-weight:
 * actions-text-line-height:
 * actions-disabled-icon-color:
 * actions-disabled-text-color:
 * actions-tiny-height:
 * actions-tiny-icon-height:
 * actions-tiny-padding:
 * actions-tiny-text-font-size:
 * actions-small-height:
 * actions-small-icon-height:
 * actions-small-padding:
 * actions-small-text-font-size:
 * actions-medium-height:
 * actions-medium-icon-height:
 * actions-medium-padding:
 * actions-medium-text-font-size:
 * actions-large-height:
 * actions-large-icon-height:
 * actions-large-padding:
 * actions-large-text-font-size:
 * actions-giant-height:
 * actions-giant-icon-height:
 * actions-giant-padding:
 * actions-giant-text-font-size:
 */
export class NbActionsComponent {
    constructor() {
        this._size = 'small';
        this._fullWidth = false;
    }
    /**
     * Size of the component: 'tiny', 'small' (default), 'medium', 'large', 'giant'
     */
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
    }
    /**
     * Component will fill full width of the container
     */
    get fullWidth() {
        return this._fullWidth;
    }
    set fullWidth(value) {
        this._fullWidth = convertToBoolProperty(value);
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
}
NbActionsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbActionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbActionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbActionsComponent, selector: "nb-actions", inputs: { size: "size", fullWidth: "fullWidth" }, host: { properties: { "class.full-width": "this.fullWidth", "class.size-tiny": "this.tiny", "class.size-small": "this.small", "class.size-medium": "this.medium", "class.size-large": "this.large", "class.size-giant": "this.giant" } }, ngImport: i0, template: `
    <ng-content select="nb-action"></ng-content>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;align-items:center}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbActionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-actions', template: `
    <ng-content select="nb-action"></ng-content>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;align-items:center}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], fullWidth: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.full-width']
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBa0IsTUFBTSxZQUFZLENBQUM7Ozs7OztBQU1uRTs7R0FFRztBQTRDSCxNQUFNLE9BQU8saUJBQWlCO0lBM0M5QjtRQXlERTs7O1dBR0c7UUFDTSxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBb0JsQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBdUJyQzs7OztXQUlHO1FBQ00sZ0JBQVcsR0FBOEIsT0FBTyxDQUFDO0tBVTNEO0lBbERDOzs7T0FHRztJQUNILElBRUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFJRDs7O09BR0c7SUFDSCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs4R0FuRFUsaUJBQWlCO2tHQUFqQixpQkFBaUIsb1RBeENsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQ1Q7MkZBRVUsaUJBQWlCO2tCQTNDN0IsU0FBUzsrQkFDRSxXQUFXLFlBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0NUOzhCQVFRLElBQUk7c0JBQVosS0FBSztnQkFNRyxJQUFJO3NCQUFaLEtBQUs7Z0JBTUcsS0FBSztzQkFBYixLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFRRixRQUFRO3NCQUZYLEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQWV6QixRQUFRO3NCQURYLEtBQUs7Z0JBY0csU0FBUztzQkFBakIsS0FBSztnQkFPRyxXQUFXO3NCQUFuQixLQUFLO2dCQVNHLGFBQWE7c0JBQXJCLEtBQUs7O0FBR1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEVHO0FBUUgsTUFBTSxPQUFPLGtCQUFrQjtJQVAvQjtRQW1CWSxVQUFLLEdBQW9CLE9BQU8sQ0FBQztRQWFqQyxlQUFVLEdBQVksS0FBSyxDQUFDO0tBMkJ2QztJQWxEQzs7T0FFRztJQUNILElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBc0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUdEOztPQUVHO0lBQ0gsSUFFSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUlELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7K0dBbkRVLGtCQUFrQjttR0FBbEIsa0JBQWtCLDhVQUpuQjs7R0FFVDsyRkFFVSxrQkFBa0I7a0JBUDlCLFNBQVM7K0JBQ0UsWUFBWSxZQUVaOztHQUVUOzhCQVFHLElBQUk7c0JBRFAsS0FBSztnQkFjRixTQUFTO3NCQUZaLEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsa0JBQWtCO2dCQVczQixJQUFJO3NCQURQLFdBQVc7dUJBQUMsaUJBQWlCO2dCQU0xQixLQUFLO3NCQURSLFdBQVc7dUJBQUMsa0JBQWtCO2dCQU0zQixNQUFNO3NCQURULFdBQVc7dUJBQUMsbUJBQW1CO2dCQU01QixLQUFLO3NCQURSLFdBQVc7dUJBQUMsa0JBQWtCO2dCQU0zQixLQUFLO3NCQURSLFdBQVc7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sUHJvcGVydHksIE5iQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudFNpemUgfSBmcm9tICcuLi9jb21wb25lbnQtc2l6ZSc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzIH0gZnJvbSAnLi4vY29tcG9uZW50LXN0YXR1cyc7XG5pbXBvcnQgeyBOYkJhZGdlUG9zaXRpb24gfSBmcm9tICcuLi9iYWRnZS9iYWRnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJJY29uQ29uZmlnIH0gZnJvbSAnLi4vaWNvbi9pY29uLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQWN0aW9uIGl0ZW0sIGRpc3BsYXkgYSBsaW5rIHdpdGggYW4gaWNvbiwgb3IgYW55IG90aGVyIGNvbnRlbnQgcHJvdmlkZWQgaW5zdGVhZC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItYWN0aW9uJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImljb247IGVsc2UgcHJvamVjdGVkQ29udGVudFwiPlxuICAgICAgPGEgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiXG4gICAgICAgICBbcm91dGVyTGlua109XCJsaW5rXCJcbiAgICAgICAgIFt0aXRsZV09XCJ0aXRsZVwiXG4gICAgICAgICAqbmdJZj1cImxpbmtcIj5cbiAgICAgICAgPG5iLWljb24gW2NvbmZpZ109XCJpY29uXCI+PC9uYi1pY29uPlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJhZGdlVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvYT5cbiAgICAgIDxhIGNsYXNzPVwiaWNvbi1jb250YWluZXJcIlxuICAgICAgICAgW2hyZWZdPVwiaHJlZlwiXG4gICAgICAgICBbdGl0bGVdPVwidGl0bGVcIlxuICAgICAgICAgKm5nSWY9XCJocmVmICYmICFsaW5rXCI+XG4gICAgICAgIDxuYi1pY29uIFtjb25maWddPVwiaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJiYWRnZVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2E+XG4gICAgICA8YSBjbGFzcz1cImljb24tY29udGFpbmVyXCJcbiAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgIFt0aXRsZV09XCJ0aXRsZVwiXG4gICAgICAgICAqbmdJZj1cIiFocmVmICYmICFsaW5rXCJcbiAgICAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxuICAgICAgICA8bmItaWNvbiBbY29uZmlnXT1cImljb25cIj48L25iLWljb24+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYmFkZ2VUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9hPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLXRlbXBsYXRlICNwcm9qZWN0ZWRDb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJiYWRnZVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2JhZGdlVGVtcGxhdGU+XG4gICAgICA8bmItYmFkZ2UgKm5nSWY9XCJiYWRnZVRleHQgfHwgYmFkZ2VEb3RcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XT1cImJhZGdlVGV4dFwiXG4gICAgICAgICAgICAgICAgW2RvdE1vZGVdPVwiYmFkZ2VEb3RcIlxuICAgICAgICAgICAgICAgIFtzdGF0dXNdPVwiYmFkZ2VTdGF0dXNcIlxuICAgICAgICAgICAgICAgIFtwb3NpdGlvbl09XCJiYWRnZVBvc2l0aW9uXCI+XG4gICAgICA8L25iLWJhZGdlPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5iQWN0aW9uQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogUm91dGVyIGxpbmsgdG8gdXNlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCkgbGluazogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZWd1bGFyIEhSRUYgbGlua1xuICAgKiBAdHlwZTogc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSBocmVmOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHRpdGxlIGZvciBtb3VzZW92ZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIEljb24gbmFtZSBvciBjb25maWcgb2JqZWN0XG4gICAqIEB0eXBlIHtzdHJpbmcgfCBOYkljb25Db25maWd9XG4gICAqL1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgfCBOYkljb25Db25maWc7XG5cbiAgLyoqXG4gICAqIFZpc3VhbGx5IGRpc2FibGVzIHRoZSBpdGVtXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFVzZSBiYWRnZSBkb3QgbW9kZVxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgYmFkZ2VEb3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2JhZGdlRG90O1xuICB9XG4gIHNldCBiYWRnZURvdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2JhZGdlRG90ID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX2JhZGdlRG90OiBib29sZWFuO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYmFkZ2VEb3Q6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBCYWRnZSB0ZXh0IHRvIGRpc3BsYXlcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSBiYWRnZVRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogQmFkZ2Ugc3RhdHVzIChhZGRzIHNwZWNpZmljIHN0eWxlcyk6XG4gICAqICdiYXNpYycsICdwcmltYXJ5JywgJ2luZm8nLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlcicsICdjb250cm9sJ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsXG4gICAqL1xuICBASW5wdXQoKSBiYWRnZVN0YXR1czogTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyA9ICdiYXNpYyc7XG5cbiAgLyoqXG4gICAqIEJhZGdlIHBvc2l0aW9uLlxuICAgKiBDYW4gYmUgc2V0IHRvIGFueSBjbGFzcyBvciB0byBvbmUgb2YgcHJlZGVmaW5lZCBwb3NpdGlvbnM6XG4gICAqICd0b3AgbGVmdCcsICd0b3AgcmlnaHQnLCAnYm90dG9tIGxlZnQnLCAnYm90dG9tIHJpZ2h0JyxcbiAgICogJ3RvcCBzdGFydCcsICd0b3AgZW5kJywgJ2JvdHRvbSBzdGFydCcsICdib3R0b20gZW5kJ1xuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgpIGJhZGdlUG9zaXRpb246IE5iQmFkZ2VQb3NpdGlvbjtcbn1cblxuLyoqXG4gKiBTaG93cyBhIGhvcml6b250YWwgbGlzdCBvZiBhY3Rpb25zLCBhdmFpbGFibGUgaW4gbXVsdGlwbGUgc2l6ZXMuXG4gKiBBbGlnbnMgaXRlbXMgdmVydGljYWxseS5cbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKFNob3djYXNlLCBhY3Rpb24vYWN0aW9uLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBCYXNpYyBhY3Rpb25zIHNldHVwOlxuICogYGBgaHRtbFxuICogPG5iLWFjdGlvbnMgc2l6ZT1cInNtYWxsXCI+XG4gKiAgIDxuYi1hY3Rpb24gaWNvbj1cIm5iLXNlYXJjaFwiPjwvbmItYWN0aW9uPlxuICogICA8bmItYWN0aW9uIGljb249XCJuYi1wb3dlci1jaXJjbGVkXCI+PC9uYi1hY3Rpb24+XG4gKiAgIDxuYi1hY3Rpb24gaWNvbj1cIm5iLXBlcnNvblwiPjwvbmItYWN0aW9uPlxuICogPC9uYi1hY3Rpb25zPlxuICogYGBgXG4gKiAjIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogSW1wb3J0IGBOYkFjdGlvbnNNb2R1bGVgIHRvIHlvdXIgZmVhdHVyZSBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iQWN0aW9uc01vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKlxuICogTXVsdGlwbGUgc2l6ZXMgZXhhbXBsZTpcbiAqIEBzdGFja2VkLWV4YW1wbGUoTXVsdGlwbGUgU2l6ZXMsIGFjdGlvbi9hY3Rpb24tc2l6ZXMuY29tcG9uZW50KVxuICpcbiAqIEl0IGlzIGFsc28gcG9zc2libGUgdG8gc3BlY2lmeSBhIGBiYWRnZWAgdmFsdWU6XG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShBY3Rpb24gQmFkZ2UsIGFjdGlvbi9hY3Rpb24tYmFkZ2UuY29tcG9uZW50KVxuICpcbiAqIGFuZCB3ZSBjYW4gc2V0IGl0IHRvIGZ1bGwgYSB3aWR0aCBvZiBhIHBhcmVudCBjb21wb25lbnRcbiAqIEBzdGFja2VkLWV4YW1wbGUoRnVsbCBXaWR0aCwgYWN0aW9uL2FjdGlvbi13aWR0aC5jb21wb25lbnQpXG4gKlxuICogQWN0aW9uIGRvdCBtb2RlXG4gKiBAc3RhY2tlZC1leGFtcGxlKEFjdGlvbiBiYWRnZSBpbiBkb3QgbW9kZSwgYWN0aW9uL2FjdGlvbi1kb3QtbW9kZS5jb21wb25lbnQpXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIGFjdGlvbnMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGFjdGlvbnMtZGl2aWRlci1jb2xvcjpcbiAqIGFjdGlvbnMtZGl2aWRlci1zdHlsZTpcbiAqIGFjdGlvbnMtZGl2aWRlci13aWR0aDpcbiAqIGFjdGlvbnMtaWNvbi1jb2xvcjpcbiAqIGFjdGlvbnMtdGV4dC1jb2xvcjpcbiAqIGFjdGlvbnMtdGV4dC1mb250LWZhbWlseTpcbiAqIGFjdGlvbnMtdGV4dC1mb250LXdlaWdodDpcbiAqIGFjdGlvbnMtdGV4dC1saW5lLWhlaWdodDpcbiAqIGFjdGlvbnMtZGlzYWJsZWQtaWNvbi1jb2xvcjpcbiAqIGFjdGlvbnMtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGFjdGlvbnMtdGlueS1oZWlnaHQ6XG4gKiBhY3Rpb25zLXRpbnktaWNvbi1oZWlnaHQ6XG4gKiBhY3Rpb25zLXRpbnktcGFkZGluZzpcbiAqIGFjdGlvbnMtdGlueS10ZXh0LWZvbnQtc2l6ZTpcbiAqIGFjdGlvbnMtc21hbGwtaGVpZ2h0OlxuICogYWN0aW9ucy1zbWFsbC1pY29uLWhlaWdodDpcbiAqIGFjdGlvbnMtc21hbGwtcGFkZGluZzpcbiAqIGFjdGlvbnMtc21hbGwtdGV4dC1mb250LXNpemU6XG4gKiBhY3Rpb25zLW1lZGl1bS1oZWlnaHQ6XG4gKiBhY3Rpb25zLW1lZGl1bS1pY29uLWhlaWdodDpcbiAqIGFjdGlvbnMtbWVkaXVtLXBhZGRpbmc6XG4gKiBhY3Rpb25zLW1lZGl1bS10ZXh0LWZvbnQtc2l6ZTpcbiAqIGFjdGlvbnMtbGFyZ2UtaGVpZ2h0OlxuICogYWN0aW9ucy1sYXJnZS1pY29uLWhlaWdodDpcbiAqIGFjdGlvbnMtbGFyZ2UtcGFkZGluZzpcbiAqIGFjdGlvbnMtbGFyZ2UtdGV4dC1mb250LXNpemU6XG4gKiBhY3Rpb25zLWdpYW50LWhlaWdodDpcbiAqIGFjdGlvbnMtZ2lhbnQtaWNvbi1oZWlnaHQ6XG4gKiBhY3Rpb25zLWdpYW50LXBhZGRpbmc6XG4gKiBhY3Rpb25zLWdpYW50LXRleHQtZm9udC1zaXplOlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1hY3Rpb25zJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9ucy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5iLWFjdGlvblwiPjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmJBY3Rpb25zQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGUgY29tcG9uZW50OiAndGlueScsICdzbWFsbCcgKGRlZmF1bHQpLCAnbWVkaXVtJywgJ2xhcmdlJywgJ2dpYW50J1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNpemUoKTogTmJDb21wb25lbnRTaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuICBzZXQgc2l6ZSh2YWx1ZTogTmJDb21wb25lbnRTaXplKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICB9XG4gIHByb3RlY3RlZCBfc2l6ZTogTmJDb21wb25lbnRTaXplID0gJ3NtYWxsJztcblxuICAvKipcbiAgICogQ29tcG9uZW50IHdpbGwgZmlsbCBmdWxsIHdpZHRoIG9mIHRoZSBjb250YWluZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZnVsbC13aWR0aCcpXG4gIGdldCBmdWxsV2lkdGgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bGxXaWR0aDtcbiAgfVxuICBzZXQgZnVsbFdpZHRoKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZnVsbFdpZHRoID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX2Z1bGxXaWR0aDogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZnVsbFdpZHRoOiBOYkJvb2xlYW5JbnB1dDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtdGlueScpXG4gIGdldCB0aW55KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICd0aW55JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1zbWFsbCcpXG4gIGdldCBzbWFsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnc21hbGwnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLW1lZGl1bScpXG4gIGdldCBtZWRpdW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ21lZGl1bSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtbGFyZ2UnKVxuICBnZXQgbGFyZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2xhcmdlJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1naWFudCcpXG4gIGdldCBnaWFudCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnZ2lhbnQnO1xuICB9XG59XG4iXX0=