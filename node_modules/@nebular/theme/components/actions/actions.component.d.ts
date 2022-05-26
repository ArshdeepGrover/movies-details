import { NbBooleanInput } from '../helpers';
import { NbComponentSize } from '../component-size';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbBadgePosition } from '../badge/badge.component';
import { NbIconConfig } from '../icon/icon.component';
import * as i0 from "@angular/core";
/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
export declare class NbActionComponent {
    /**
     * Router link to use
     * @type string
     */
    link: string;
    /**
     * Regular HREF link
     * @type: string
     */
    href: string;
    /**
     * Optional title for mouseover
     * @type string
     */
    title: string;
    /**
     * Icon name or config object
     * @type {string | NbIconConfig}
     */
    icon: string | NbIconConfig;
    /**
     * Visually disables the item
     * @type boolean
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    protected _disabled: boolean;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Use badge dot mode
     * @type boolean
     */
    get badgeDot(): boolean;
    set badgeDot(value: boolean);
    protected _badgeDot: boolean;
    static ngAcceptInputType_badgeDot: NbBooleanInput;
    /**
     * Badge text to display
     * @type string
     */
    badgeText: string;
    /**
     * Badge status (adds specific styles):
     * 'basic', 'primary', 'info', 'success', 'warning', 'danger', 'control'
     * @param {string} val
     */
    badgeStatus: NbComponentOrCustomStatus;
    /**
     * Badge position.
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    badgePosition: NbBadgePosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbActionComponent, "nb-action", never, { "link": "link"; "href": "href"; "title": "title"; "icon": "icon"; "disabled": "disabled"; "badgeDot": "badgeDot"; "badgeText": "badgeText"; "badgeStatus": "badgeStatus"; "badgePosition": "badgePosition"; }, {}, never, ["*"]>;
}
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
export declare class NbActionsComponent {
    /**
     * Size of the component: 'tiny', 'small' (default), 'medium', 'large', 'giant'
     */
    get size(): NbComponentSize;
    set size(value: NbComponentSize);
    protected _size: NbComponentSize;
    /**
     * Component will fill full width of the container
     */
    get fullWidth(): boolean;
    set fullWidth(value: boolean);
    protected _fullWidth: boolean;
    static ngAcceptInputType_fullWidth: NbBooleanInput;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbActionsComponent, "nb-actions", never, { "size": "size"; "fullWidth": "fullWidth"; }, {}, never, ["nb-action"]>;
}
