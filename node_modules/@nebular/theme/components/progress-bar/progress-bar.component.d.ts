import { NbStatusService } from '../../services/status.service';
import { NbComponentSize } from '../component-size';
import { NbComponentOrCustomStatus } from '../component-status';
import * as i0 from "@angular/core";
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
export declare class NbProgressBarComponent {
    protected statusService: NbStatusService;
    /**
     * Progress bar value in percent (0 - 100)
     */
    value: number;
    /**
     * Progress bar background (`basic` (default), `primary`, `info`, `success`, `warning`, `danger`, `control`)
     */
    status: NbComponentOrCustomStatus;
    /**
     * Progress bar size (`tiny`, `small`, `medium` (default), `large`, `giant`)
     */
    size: NbComponentSize;
    /**
     * Displays value inside progress bar
     */
    displayValue: boolean;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get success(): boolean;
    get info(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get additionalClasses(): string[];
    constructor(statusService: NbStatusService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbProgressBarComponent, "nb-progress-bar", never, { "value": "value"; "status": "status"; "size": "size"; "displayValue": "displayValue"; }, {}, never, ["*"]>;
}
