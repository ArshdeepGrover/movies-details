import { NbStatusService } from '../../services/status.service';
import { NbComponentSize } from '../component-size';
import { NbComponentOrCustomStatus } from '../component-status';
import * as i0 from "@angular/core";
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
export declare class NbSpinnerComponent {
    protected statusService: NbStatusService;
    /**
     * Loading text that is shown near the icon
     * @type string
     */
    message: string;
    /**
     * Spinner size, available sizes:
     * tiny, small, medium, large, giant
     * @param {string} value
     */
    size: NbComponentSize;
    /**
     * Spinner status (adds specific styles):
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`.
     */
    status: NbComponentOrCustomStatus;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get info(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get additionalClasses(): string[];
    constructor(statusService: NbStatusService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSpinnerComponent, "nb-spinner", never, { "message": "message"; "size": "size"; "status": "status"; }, {}, never, never>;
}
