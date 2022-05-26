import { NbStatusService } from '../../services/status.service';
import { NbComponentOrCustomStatus } from '../component-status';
import * as i0 from "@angular/core";
export declare type NbBadgePhysicalPosition = 'top left' | 'top right' | 'bottom left' | 'bottom right' | 'center right' | 'center left';
export declare type NbBadgeLogicalPosition = 'top start' | 'top end' | 'bottom start' | 'bottom end' | 'center start' | 'center end';
export declare type NbBadgePosition = NbBadgePhysicalPosition | NbBadgeLogicalPosition;
export interface NbBadge {
    text?: string;
    position?: NbBadgePosition;
    status?: NbComponentOrCustomStatus;
    dotMode?: boolean;
}
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
export declare class NbBadgeComponent implements NbBadge {
    protected statusService: NbStatusService;
    /**
     * Text to display
     * @type string
     */
    text: string;
    /**
     * Badge position
     *
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    get position(): NbBadgePosition;
    set position(value: NbBadgePosition);
    protected _defaultPosition: NbBadgePosition;
    protected _position: NbBadgePosition;
    /**
     * Shows badge as a dot. No text is shown.
     * @type boolean
     */
    get dotMode(): boolean;
    set dotMode(value: boolean);
    protected _dotMode: boolean;
    /**
     * Badge status (adds specific styles):
     * 'basic', 'primary', 'info', 'success', 'warning', 'danger', 'control'
     */
    status: NbComponentOrCustomStatus;
    get additionalClasses(): string[];
    get primary(): boolean;
    get success(): boolean;
    get info(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get top(): boolean;
    get right(): boolean;
    get bottom(): boolean;
    get left(): boolean;
    get start(): boolean;
    get end(): boolean;
    get center(): boolean;
    constructor(statusService: NbStatusService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbBadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbBadgeComponent, "nb-badge", never, { "text": "text"; "position": "position"; "dotMode": "dotMode"; "status": "status"; }, {}, never, never>;
}
