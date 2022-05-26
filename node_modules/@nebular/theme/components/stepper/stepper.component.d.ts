/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { NbBooleanInput } from '../helpers';
import { NbStepComponent } from './step.component';
import * as i0 from "@angular/core";
export declare type NbStepperOrientation = 'vertical' | 'horizontal';
export interface NbStepChangeEvent {
    index: number;
    step: NbStepComponent;
    previouslySelectedIndex: number;
    previouslySelectedStep: NbStepComponent;
}
/**
 * Stepper component
 *
 * @stacked-example(Showcase, stepper/stepper-showcase.component)
 *
 * ### Installation
 *
 * Import `NbStepperModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbStepperModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If step label is string you can pass it as `label` attribute. Otherwise ng-template should be used:
 * ```html
 * // ...
 * <nb-stepper orientation="horizontal">
 *   <nb-step label="step number one">
 *       // ... step content here
 *   </nb-step>
 *   <nb-step label="stepLabel">
 *       <ng-template #stepLabel>
 *           <div>
 *               step number two
 *           </div>
 *       </ng-template>
 *       // ... step content here
 *   </nb-step>
 * </nb-stepper>
 * ```
 *
 * When linear mode enabled user can't move forward unless current step is complete.
 * @stacked-example(Linear, stepper/stepper-linear.component)
 *
 * Specify `[stepControl]="form"` and stepper allow go to the next step only if form is valid.
 * You can disable it via `linear` mode setting.
 * ```html
 * // ...
 * <nb-stepper  orientation="horizontal">
 *   <nb-step label="step number one" [stepControl]="form">
 *     <form [formGroup]="form">
 *       // ...
 *     </form>
 *   </nb-step>
 *    // ...
 * </nb-stepper>
 * ```
 *
 * @stacked-example(Validation, stepper/stepper-validation.component)
 *
 * Stepper component has two layout options - `vertical` & `horizontal`
 * @stacked-example(Vertical, stepper/stepper-vertical.component)
 *
 * `disableStepNavigation` disables navigation by clicking on steps, so user can navigate only using
 * 'nbStepperPrevious' and 'nbStepperNext' buttons.
 * @stacked-example(Disabled steps navigation, stepper/stepper-disabled-step-nav.component)
 *
 * Use `stepChange` output to listening to step change event. This event emits `NbStepChangeEvent` object.
 * @stacked-example(Step change event, stepper/stepper-step-change-event.component)
 *
 * @styles
 *
 * stepper-step-text-color:
 * stepper-step-text-font-family:
 * stepper-step-text-font-size:
 * stepper-step-text-font-weight:
 * stepper-step-text-line-height:
 * stepper-step-active-text-color:
 * stepper-step-completed-text-color:
 * stepper-step-index-border-color:
 * stepper-step-index-border-style:
 * stepper-step-index-border-width:
 * stepper-step-index-border-radius:
 * stepper-step-index-width:
 * stepper-step-index-active-border-color:
 * stepper-step-index-completed-background-color:
 * stepper-step-index-completed-border-color:
 * stepper-step-index-completed-text-color:
 * stepper-connector-background-color:
 * stepper-connector-completed-background-color:
 * stepper-horizontal-connector-margin:
 * stepper-vertical-connector-margin:
 * stepper-step-content-padding:
 */
export declare class NbStepperComponent {
    /**
     * Selected step index
     */
    get selectedIndex(): number;
    set selectedIndex(index: number);
    protected _selectedIndex: number;
    /**
     * Disables navigation by clicking on steps. False by default
     * @param {boolean} value
     */
    set disableStepNavigation(value: boolean);
    get disableStepNavigation(): boolean;
    protected _disableStepNavigation: boolean;
    static ngAcceptInputType_disableStepNavigation: NbBooleanInput;
    /**
     * Selected step component
     */
    get selected(): NbStepComponent;
    set selected(step: NbStepComponent);
    /**
     * Stepper orientation - `horizontal`|`vertical`
     */
    orientation: NbStepperOrientation;
    /**
     * Allow moving forward only if the current step is complete
     * @default true
     */
    set linear(value: boolean);
    get linear(): boolean;
    protected _linear: boolean;
    static ngAcceptInputType_linear: NbBooleanInput;
    /**
     * Emits when step changed
     * @type {EventEmitter<NbStepChangeEvent>}
     */
    stepChange: EventEmitter<NbStepChangeEvent>;
    get vertical(): boolean;
    get horizontal(): boolean;
    steps: QueryList<NbStepComponent>;
    /**
     * Navigate to next step
     * */
    next(): void;
    /**
     * Navigate to previous step
     * */
    previous(): void;
    /**
     * Select step if navigation is not disabled
     * @param { NbStepComponent } step
     */
    changeStep(step: NbStepComponent): void;
    /**
     * Reset stepper and stepControls to initial state
     * */
    reset(): void;
    isStepSelected(step: NbStepComponent): boolean;
    getStepTemplate(step: NbStepComponent): TemplateRef<any> | null;
    protected isStepValid(index: number): boolean;
    protected canBeSelected(indexToCheck: number): boolean;
    protected markCurrentStepInteracted(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbStepperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbStepperComponent, "nb-stepper", never, { "selectedIndex": "selectedIndex"; "disableStepNavigation": "disableStepNavigation"; "selected": "selected"; "orientation": "orientation"; "linear": "linear"; }, { "stepChange": "stepChange"; }, ["steps"], ["nb-step"]>;
}
