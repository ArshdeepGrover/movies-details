import { TemplateRef } from '@angular/core';
import { NbStepperComponent } from './stepper.component';
import { NbBooleanInput } from '../helpers';
import * as i0 from "@angular/core";
/**
 * Component intended to be used within  the `<nb-stepper>` component.
 * Container for a step
 */
export declare class NbStepComponent {
    protected stepper: NbStepperComponent;
    /**
     * Step content
     *
     * @type {TemplateRef}
     */
    content: TemplateRef<any>;
    /**
     * Top level abstract control of the step
     */
    stepControl?: {
        valid: boolean | null;
        reset: () => void;
    };
    /**
     * Step label
     *
     * @type {string|TemplateRef<any>}
     */
    label: string | TemplateRef<any>;
    /**
     * Whether step will be displayed in wizard
     *
     * @type {boolean}
     */
    get hidden(): boolean;
    set hidden(value: boolean);
    protected _hidden: boolean;
    static ngAcceptInputType_hidden: NbBooleanInput;
    /**
     * Check that label is a TemplateRef.
     *
     * @return boolean
     * */
    get isLabelTemplate(): boolean;
    /**
     * Whether step is marked as completed.
     *
     * @type {boolean}
     */
    get completed(): boolean;
    set completed(value: boolean);
    protected _completed: boolean;
    static ngAcceptInputType_completed: NbBooleanInput;
    protected get isCompleted(): boolean;
    interacted: boolean;
    constructor(stepper: any);
    /**
     * Mark step as selected
     * */
    select(): void;
    /**
     * Reset step and stepControl state
     * */
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbStepComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbStepComponent, "nb-step", never, { "stepControl": "stepControl"; "label": "label"; "hidden": "hidden"; "completed": "completed"; }, {}, never, ["*"]>;
}
