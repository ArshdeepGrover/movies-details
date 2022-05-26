/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ContentChildren, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NB_STEPPER } from './stepper-tokens';
import { NbStepComponent } from './step.component';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icon.component";
import * as i2 from "@angular/common";
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
export class NbStepperComponent {
    constructor() {
        this._selectedIndex = 0;
        this._disableStepNavigation = false;
        /**
         * Stepper orientation - `horizontal`|`vertical`
         */
        this.orientation = 'horizontal';
        this._linear = true;
        /**
         * Emits when step changed
         * @type {EventEmitter<NbStepChangeEvent>}
         */
        this.stepChange = new EventEmitter();
    }
    /**
     * Selected step index
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(index) {
        if (!this.steps) {
            this._selectedIndex = index;
            return;
        }
        this.markCurrentStepInteracted();
        if (this.canBeSelected(index)) {
            const previouslySelectedIndex = this._selectedIndex;
            const previouslySelectedStep = this.selected;
            this._selectedIndex = index;
            this.stepChange.emit({
                index: this.selectedIndex,
                step: this.selected,
                previouslySelectedIndex,
                previouslySelectedStep,
            });
        }
    }
    /**
     * Disables navigation by clicking on steps. False by default
     * @param {boolean} value
     */
    set disableStepNavigation(value) {
        this._disableStepNavigation = convertToBoolProperty(value);
    }
    get disableStepNavigation() {
        return this._disableStepNavigation;
    }
    /**
     * Selected step component
     */
    get selected() {
        return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
    }
    set selected(step) {
        if (!this.steps) {
            return;
        }
        this.selectedIndex = this.steps.toArray().indexOf(step);
    }
    /**
     * Allow moving forward only if the current step is complete
     * @default true
     */
    set linear(value) {
        this._linear = convertToBoolProperty(value);
    }
    get linear() {
        return this._linear;
    }
    get vertical() {
        return this.orientation === 'vertical';
    }
    get horizontal() {
        return this.orientation === 'horizontal';
    }
    /**
     * Navigate to next step
     * */
    next() {
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.steps.length - 1);
    }
    /**
     * Navigate to previous step
     * */
    previous() {
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
    }
    /**
     * Select step if navigation is not disabled
     * @param { NbStepComponent } step
     */
    changeStep(step) {
        if (!this.disableStepNavigation) {
            step.select();
        }
    }
    /**
     * Reset stepper and stepControls to initial state
     * */
    reset() {
        const previouslySelectedIndex = this.selectedIndex;
        const previouslySelectedStep = this.selected;
        this._selectedIndex = 0;
        this.steps.forEach((step) => step.reset());
        this.stepChange.emit({
            index: this.selectedIndex,
            step: this.selected,
            previouslySelectedIndex,
            previouslySelectedStep,
        });
    }
    isStepSelected(step) {
        return this.selected === step;
    }
    /*
     * @docs-private
     **/
    getStepTemplate(step) {
        if (step.isLabelTemplate) {
            return step.label;
        }
        return null;
    }
    isStepValid(index) {
        return this.steps.toArray()[index].completed;
    }
    canBeSelected(indexToCheck) {
        const noSteps = !this.steps || this.steps.length === 0;
        if (noSteps || indexToCheck < 0 || indexToCheck >= this.steps.length || indexToCheck === this.selectedIndex) {
            return false;
        }
        if (indexToCheck <= this.selectedIndex || !this.linear) {
            return true;
        }
        let isAllStepsValid = true;
        for (let i = this.selectedIndex; i < indexToCheck; i++) {
            if (!this.isStepValid(i)) {
                isAllStepsValid = false;
                break;
            }
        }
        return isAllStepsValid;
    }
    markCurrentStepInteracted() {
        if (this.selected) {
            this.selected.interacted = true;
        }
    }
}
NbStepperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStepperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbStepperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbStepperComponent, selector: "nb-stepper", inputs: { selectedIndex: "selectedIndex", disableStepNavigation: "disableStepNavigation", selected: "selected", orientation: "orientation", linear: "linear" }, outputs: { stepChange: "stepChange" }, host: { properties: { "class.vertical": "this.vertical", "class.horizontal": "this.horizontal" } }, providers: [{ provide: NB_STEPPER, useExisting: NbStepperComponent }], queries: [{ propertyName: "steps", predicate: NbStepComponent }], ngImport: i0, template: "<ng-template><ng-content select=\"nb-step\"></ng-content></ng-template>\n<div class=\"header\">\n  <ng-container *ngFor=\"let step of steps; let index = index; let first = first\">\n\n    <div *ngIf=\"!first && !step.hidden\"\n         [class.connector-past]=\"index <= selectedIndex\"\n         class=\"connector\"></div>\n\n    <div *ngIf=\"!step.hidden\" class=\"step\"\n         [class.selected]=\"isStepSelected(step)\"\n         [class.completed]=\"!isStepSelected(step) && step.completed\"\n         [class.noninteractive]=\"disableStepNavigation\"\n         (click)=\"changeStep(step)\">\n      <div class=\"label-index\">\n        <span *ngIf=\"!step.completed || isStepSelected(step)\">{{ index + 1 }}</span>\n        <nb-icon *ngIf=\"!isStepSelected(step) && step.completed\" icon=\"checkmark-outline\" pack=\"nebular-essentials\">\n        </nb-icon>\n      </div>\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.isLabelTemplate\">\n          <ng-container *ngTemplateOutlet=\"getStepTemplate(step)\"></ng-container>\n        </ng-container>\n        <span *ngIf=\"!step.isLabelTemplate\">{{ step.label }}</span>\n      </div>\n    </div>\n  </ng-container>\n</div>\n<div class=\"step-content\">\n  <ng-container [ngTemplateOutlet]=\"selected?.content\"></ng-container>\n</div>\n", styles: [":host(.horizontal) .header .step{flex-direction:column}:host(.horizontal) .header .connector{height:2px}:host(.horizontal) .label-index{margin-bottom:10px}:host(.vertical){display:flex;height:100%}:host(.vertical) .header{flex-direction:column}:host(.vertical) .header .label{margin:0 10px}:host(.vertical) .header .connector{width:2px}.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px}.header .connector{flex:auto}.header .step{display:flex;align-items:center;cursor:pointer}.header .step.noninteractive{cursor:default}.header .label-index{display:flex;justify-content:center;align-items:center}.header .label{width:-webkit-max-content;width:max-content}\n"], components: [{ type: i1.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStepperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-stepper', providers: [{ provide: NB_STEPPER, useExisting: NbStepperComponent }], template: "<ng-template><ng-content select=\"nb-step\"></ng-content></ng-template>\n<div class=\"header\">\n  <ng-container *ngFor=\"let step of steps; let index = index; let first = first\">\n\n    <div *ngIf=\"!first && !step.hidden\"\n         [class.connector-past]=\"index <= selectedIndex\"\n         class=\"connector\"></div>\n\n    <div *ngIf=\"!step.hidden\" class=\"step\"\n         [class.selected]=\"isStepSelected(step)\"\n         [class.completed]=\"!isStepSelected(step) && step.completed\"\n         [class.noninteractive]=\"disableStepNavigation\"\n         (click)=\"changeStep(step)\">\n      <div class=\"label-index\">\n        <span *ngIf=\"!step.completed || isStepSelected(step)\">{{ index + 1 }}</span>\n        <nb-icon *ngIf=\"!isStepSelected(step) && step.completed\" icon=\"checkmark-outline\" pack=\"nebular-essentials\">\n        </nb-icon>\n      </div>\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.isLabelTemplate\">\n          <ng-container *ngTemplateOutlet=\"getStepTemplate(step)\"></ng-container>\n        </ng-container>\n        <span *ngIf=\"!step.isLabelTemplate\">{{ step.label }}</span>\n      </div>\n    </div>\n  </ng-container>\n</div>\n<div class=\"step-content\">\n  <ng-container [ngTemplateOutlet]=\"selected?.content\"></ng-container>\n</div>\n", styles: [":host(.horizontal) .header .step{flex-direction:column}:host(.horizontal) .header .connector{height:2px}:host(.horizontal) .label-index{margin-bottom:10px}:host(.vertical){display:flex;height:100%}:host(.vertical) .header{flex-direction:column}:host(.vertical) .header .label{margin:0 10px}:host(.vertical) .header .connector{width:2px}.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px}.header .connector{flex:auto}.header .step{display:flex;align-items:center;cursor:pointer}.header .step.noninteractive{cursor:default}.header .label-index{display:flex;justify-content:center;align-items:center}.header .label{width:-webkit-max-content;width:max-content}\n"] }]
        }], propDecorators: { selectedIndex: [{
                type: Input
            }], disableStepNavigation: [{
                type: Input
            }], selected: [{
                type: Input
            }], orientation: [{
                type: Input
            }], linear: [{
                type: Input
            }], stepChange: [{
                type: Output
            }], vertical: [{
                type: HostBinding,
                args: ['class.vertical']
            }], horizontal: [{
                type: HostBinding,
                args: ['class.horizontal']
            }], steps: [{
                type: ContentChildren,
                args: [NbStepComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sR0FHUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFXbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUZHO0FBT0gsTUFBTSxPQUFPLGtCQUFrQjtJQU4vQjtRQW1DWSxtQkFBYyxHQUFXLENBQUMsQ0FBQztRQWEzQiwyQkFBc0IsR0FBWSxLQUFLLENBQUM7UUFpQmxEOztXQUVHO1FBQ00sZ0JBQVcsR0FBeUIsWUFBWSxDQUFDO1FBYWhELFlBQU8sR0FBRyxJQUFJLENBQUM7UUFHekI7OztXQUdHO1FBQ08sZUFBVSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO0tBa0c5RDtJQW5MQzs7T0FFRztJQUNILElBQ0ksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMs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LEVBQUUsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDeEIsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsTUFBTTthQUNQO1NBQ0Y7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRVMseUJBQXlCO1FBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDakM7SUFDSCxDQUFDOzsrR0FuTFUsa0JBQWtCO21HQUFsQixrQkFBa0IsZ1ZBRmxCLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLGdEQStGcEQsZUFBZSw2QkMxTmxDLDh4Q0E4QkE7MkZEK0ZhLGtCQUFrQjtrQkFOOUIsU0FBUzsrQkFDRSxZQUFZLGFBR1gsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxvQkFBb0IsRUFBRSxDQUFDOzhCQU9qRSxhQUFhO3NCQURoQixLQUFLO2dCQWdDRixxQkFBcUI7c0JBRHhCLEtBQUs7Z0JBY0YsUUFBUTtzQkFEWCxLQUFLO2dCQWNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBT0YsTUFBTTtzQkFEVCxLQUFLO2dCQWNJLFVBQVU7c0JBQW5CLE1BQU07Z0JBR0gsUUFBUTtzQkFEWCxXQUFXO3VCQUFDLGdCQUFnQjtnQkFLekIsVUFBVTtzQkFEYixXQUFXO3VCQUFDLGtCQUFrQjtnQkFLRyxLQUFLO3NCQUF0QyxlQUFlO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IE5CX1NURVBQRVIgfSBmcm9tICcuL3N0ZXBwZXItdG9rZW5zJztcbmltcG9ydCB7IE5iU3RlcENvbXBvbmVudCB9IGZyb20gJy4vc3RlcC5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBOYlN0ZXBwZXJPcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmJTdGVwQ2hhbmdlRXZlbnQge1xuICBpbmRleDogbnVtYmVyO1xuICBzdGVwOiBOYlN0ZXBDb21wb25lbnQ7XG4gIHByZXZpb3VzbHlTZWxlY3RlZEluZGV4OiBudW1iZXI7XG4gIHByZXZpb3VzbHlTZWxlY3RlZFN0ZXA6IE5iU3RlcENvbXBvbmVudDtcbn1cblxuLyoqXG4gKiBTdGVwcGVyIGNvbXBvbmVudFxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU2hvd2Nhc2UsIHN0ZXBwZXIvc3RlcHBlci1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJTdGVwcGVyTW9kdWxlYCB0byB5b3VyIGZlYXR1cmUgbW9kdWxlLlxuICogYGBgdHNcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgICBOYlN0ZXBwZXJNb2R1bGUsXG4gKiAgIF0sXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUgeyB9XG4gKiBgYGBcbiAqICMjIyBVc2FnZVxuICpcbiAqIElmIHN0ZXAgbGFiZWwgaXMgc3RyaW5nIHlvdSBjYW4gcGFzcyBpdCBhcyBgbGFiZWxgIGF0dHJpYnV0ZS4gT3RoZXJ3aXNlIG5nLXRlbXBsYXRlIHNob3VsZCBiZSB1c2VkOlxuICogYGBgaHRtbFxuICogLy8gLi4uXG4gKiA8bmItc3RlcHBlciBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAqICAgPG5iLXN0ZXAgbGFiZWw9XCJzdGVwIG51bWJlciBvbmVcIj5cbiAqICAgICAgIC8vIC4uLiBzdGVwIGNvbnRlbnQgaGVyZVxuICogICA8L25iLXN0ZXA+XG4gKiAgIDxuYi1zdGVwIGxhYmVsPVwic3RlcExhYmVsXCI+XG4gKiAgICAgICA8bmctdGVtcGxhdGUgI3N0ZXBMYWJlbD5cbiAqICAgICAgICAgICA8ZGl2PlxuICogICAgICAgICAgICAgICBzdGVwIG51bWJlciB0d29cbiAqICAgICAgICAgICA8L2Rpdj5cbiAqICAgICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICAgICAvLyAuLi4gc3RlcCBjb250ZW50IGhlcmVcbiAqICAgPC9uYi1zdGVwPlxuICogPC9uYi1zdGVwcGVyPlxuICogYGBgXG4gKlxuICogV2hlbiBsaW5lYXIgbW9kZSBlbmFibGVkIHVzZXIgY2FuJ3QgbW92ZSBmb3J3YXJkIHVubGVzcyBjdXJyZW50IHN0ZXAgaXMgY29tcGxldGUuXG4gKiBAc3RhY2tlZC1leGFtcGxlKExpbmVhciwgc3RlcHBlci9zdGVwcGVyLWxpbmVhci5jb21wb25lbnQpXG4gKlxuICogU3BlY2lmeSBgW3N0ZXBDb250cm9sXT1cImZvcm1cImAgYW5kIHN0ZXBwZXIgYWxsb3cgZ28gdG8gdGhlIG5leHQgc3RlcCBvbmx5IGlmIGZvcm0gaXMgdmFsaWQuXG4gKiBZb3UgY2FuIGRpc2FibGUgaXQgdmlhIGBsaW5lYXJgIG1vZGUgc2V0dGluZy5cbiAqIGBgYGh0bWxcbiAqIC8vIC4uLlxuICogPG5iLXN0ZXBwZXIgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICogICA8bmItc3RlcCBsYWJlbD1cInN0ZXAgbnVtYmVyIG9uZVwiIFtzdGVwQ29udHJvbF09XCJmb3JtXCI+XG4gKiAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gKiAgICAgICAvLyAuLi5cbiAqICAgICA8L2Zvcm0+XG4gKiAgIDwvbmItc3RlcD5cbiAqICAgIC8vIC4uLlxuICogPC9uYi1zdGVwcGVyPlxuICogYGBgXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShWYWxpZGF0aW9uLCBzdGVwcGVyL3N0ZXBwZXItdmFsaWRhdGlvbi5jb21wb25lbnQpXG4gKlxuICogU3RlcHBlciBjb21wb25lbnQgaGFzIHR3byBsYXlvdXQgb3B0aW9ucyAtIGB2ZXJ0aWNhbGAgJiBgaG9yaXpvbnRhbGBcbiAqIEBzdGFja2VkLWV4YW1wbGUoVmVydGljYWwsIHN0ZXBwZXIvc3RlcHBlci12ZXJ0aWNhbC5jb21wb25lbnQpXG4gKlxuICogYGRpc2FibGVTdGVwTmF2aWdhdGlvbmAgZGlzYWJsZXMgbmF2aWdhdGlvbiBieSBjbGlja2luZyBvbiBzdGVwcywgc28gdXNlciBjYW4gbmF2aWdhdGUgb25seSB1c2luZ1xuICogJ25iU3RlcHBlclByZXZpb3VzJyBhbmQgJ25iU3RlcHBlck5leHQnIGJ1dHRvbnMuXG4gKiBAc3RhY2tlZC1leGFtcGxlKERpc2FibGVkIHN0ZXBzIG5hdmlnYXRpb24sIHN0ZXBwZXIvc3RlcHBlci1kaXNhYmxlZC1zdGVwLW5hdi5jb21wb25lbnQpXG4gKlxuICogVXNlIGBzdGVwQ2hhbmdlYCBvdXRwdXQgdG8gbGlzdGVuaW5nIHRvIHN0ZXAgY2hhbmdlIGV2ZW50LiBUaGlzIGV2ZW50IGVtaXRzIGBOYlN0ZXBDaGFuZ2VFdmVudGAgb2JqZWN0LlxuICogQHN0YWNrZWQtZXhhbXBsZShTdGVwIGNoYW5nZSBldmVudCwgc3RlcHBlci9zdGVwcGVyLXN0ZXAtY2hhbmdlLWV2ZW50LmNvbXBvbmVudClcbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogc3RlcHBlci1zdGVwLXRleHQtY29sb3I6XG4gKiBzdGVwcGVyLXN0ZXAtdGV4dC1mb250LWZhbWlseTpcbiAqIHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtc2l6ZTpcbiAqIHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtd2VpZ2h0OlxuICogc3RlcHBlci1zdGVwLXRleHQtbGluZS1oZWlnaHQ6XG4gKiBzdGVwcGVyLXN0ZXAtYWN0aXZlLXRleHQtY29sb3I6XG4gKiBzdGVwcGVyLXN0ZXAtY29tcGxldGVkLXRleHQtY29sb3I6XG4gKiBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLWNvbG9yOlxuICogc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1zdHlsZTpcbiAqIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItd2lkdGg6XG4gKiBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXJhZGl1czpcbiAqIHN0ZXBwZXItc3RlcC1pbmRleC13aWR0aDpcbiAqIHN0ZXBwZXItc3RlcC1pbmRleC1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1ib3JkZXItY29sb3I6XG4gKiBzdGVwcGVyLXN0ZXAtaW5kZXgtY29tcGxldGVkLXRleHQtY29sb3I6XG4gKiBzdGVwcGVyLWNvbm5lY3Rvci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogc3RlcHBlci1jb25uZWN0b3ItY29tcGxldGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBzdGVwcGVyLWhvcml6b250YWwtY29ubmVjdG9yLW1hcmdpbjpcbiAqIHN0ZXBwZXItdmVydGljYWwtY29ubmVjdG9yLW1hcmdpbjpcbiAqIHN0ZXBwZXItc3RlcC1jb250ZW50LXBhZGRpbmc6XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLXN0ZXBwZXInLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwcGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOQl9TVEVQUEVSLCB1c2VFeGlzdGluZzogTmJTdGVwcGVyQ29tcG9uZW50IH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOYlN0ZXBwZXJDb21wb25lbnQge1xuICAvKipcbiAgICogU2VsZWN0ZWQgc3RlcCBpbmRleFxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gIH1cbiAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5zdGVwcykge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubWFya0N1cnJlbnRTdGVwSW50ZXJhY3RlZCgpO1xuICAgIGlmICh0aGlzLmNhbkJlU2VsZWN0ZWQoaW5kZXgpKSB7XG4gICAgICBjb25zdCBwcmV2aW91c2x5U2VsZWN0ZWRJbmRleCA9IHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gICAgICBjb25zdCBwcmV2aW91c2x5U2VsZWN0ZWRTdGVwID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleDtcblxuICAgICAgdGhpcy5zdGVwQ2hhbmdlLmVtaXQoe1xuICAgICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxuICAgICAgICBzdGVwOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICBwcmV2aW91c2x5U2VsZWN0ZWRJbmRleCxcbiAgICAgICAgcHJldmlvdXNseVNlbGVjdGVkU3RlcCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogRGlzYWJsZXMgbmF2aWdhdGlvbiBieSBjbGlja2luZyBvbiBzdGVwcy4gRmFsc2UgYnkgZGVmYXVsdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVN0ZXBOYXZpZ2F0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZVN0ZXBOYXZpZ2F0aW9uID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBnZXQgZGlzYWJsZVN0ZXBOYXZpZ2F0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlU3RlcE5hdmlnYXRpb247XG4gIH1cbiAgcHJvdGVjdGVkIF9kaXNhYmxlU3RlcE5hdmlnYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVTdGVwTmF2aWdhdGlvbjogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFNlbGVjdGVkIHN0ZXAgY29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc2VsZWN0ZWQoKTogTmJTdGVwQ29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcyA/IHRoaXMuc3RlcHMudG9BcnJheSgpW3RoaXMuc2VsZWN0ZWRJbmRleF0gOiB1bmRlZmluZWQ7XG4gIH1cbiAgc2V0IHNlbGVjdGVkKHN0ZXA6IE5iU3RlcENvbXBvbmVudCkge1xuICAgIGlmICghdGhpcy5zdGVwcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLnN0ZXBzLnRvQXJyYXkoKS5pbmRleE9mKHN0ZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0ZXBwZXIgb3JpZW50YXRpb24gLSBgaG9yaXpvbnRhbGB8YHZlcnRpY2FsYFxuICAgKi9cbiAgQElucHV0KCkgb3JpZW50YXRpb246IE5iU3RlcHBlck9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBtb3ZpbmcgZm9yd2FyZCBvbmx5IGlmIHRoZSBjdXJyZW50IHN0ZXAgaXMgY29tcGxldGVcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGxpbmVhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2xpbmVhciA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgZ2V0IGxpbmVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbGluZWFyO1xuICB9XG4gIHByb3RlY3RlZCBfbGluZWFyID0gdHJ1ZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xpbmVhcjogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gc3RlcCBjaGFuZ2VkXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8TmJTdGVwQ2hhbmdlRXZlbnQ+fVxuICAgKi9cbiAgQE91dHB1dCgpIHN0ZXBDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE5iU3RlcENoYW5nZUV2ZW50PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudmVydGljYWwnKVxuICBnZXQgdmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ob3Jpem9udGFsJylcbiAgZ2V0IGhvcml6b250YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJztcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmJTdGVwQ29tcG9uZW50KSBzdGVwczogUXVlcnlMaXN0PE5iU3RlcENvbXBvbmVudD47XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlIHRvIG5leHQgc3RlcFxuICAgKiAqL1xuICBuZXh0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IE1hdGgubWluKHRoaXMuc2VsZWN0ZWRJbmRleCArIDEsIHRoaXMuc3RlcHMubGVuZ3RoIC0gMSk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGUgdG8gcHJldmlvdXMgc3RlcFxuICAgKiAqL1xuICBwcmV2aW91cygpIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBNYXRoLm1heCh0aGlzLnNlbGVjdGVkSW5kZXggLSAxLCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3Qgc3RlcCBpZiBuYXZpZ2F0aW9uIGlzIG5vdCBkaXNhYmxlZFxuICAgKiBAcGFyYW0geyBOYlN0ZXBDb21wb25lbnQgfSBzdGVwXG4gICAqL1xuICBjaGFuZ2VTdGVwKHN0ZXA6IE5iU3RlcENvbXBvbmVudCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlU3RlcE5hdmlnYXRpb24pIHtcbiAgICAgIHN0ZXAuc2VsZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHN0ZXBwZXIgYW5kIHN0ZXBDb250cm9scyB0byBpbml0aWFsIHN0YXRlXG4gICAqICovXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IHByZXZpb3VzbHlTZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IHByZXZpb3VzbHlTZWxlY3RlZFN0ZXAgPSB0aGlzLnNlbGVjdGVkO1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwKSA9PiBzdGVwLnJlc2V0KCkpO1xuXG4gICAgdGhpcy5zdGVwQ2hhbmdlLmVtaXQoe1xuICAgICAgaW5kZXg6IHRoaXMuc2VsZWN0ZWRJbmRleCxcbiAgICAgIHN0ZXA6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICBwcmV2aW91c2x5U2VsZWN0ZWRJbmRleCxcbiAgICAgIHByZXZpb3VzbHlTZWxlY3RlZFN0ZXAsXG4gICAgfSk7XG4gIH1cblxuICBpc1N0ZXBTZWxlY3RlZChzdGVwOiBOYlN0ZXBDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCA9PT0gc3RlcDtcbiAgfVxuXG4gIC8qXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICoqL1xuICBnZXRTdGVwVGVtcGxhdGUoc3RlcDogTmJTdGVwQ29tcG9uZW50KTogVGVtcGxhdGVSZWY8YW55PiB8IG51bGwge1xuICAgIGlmIChzdGVwLmlzTGFiZWxUZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIHN0ZXAubGFiZWwgYXMgVGVtcGxhdGVSZWY8YW55PjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNTdGVwVmFsaWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF0uY29tcGxldGVkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNhbkJlU2VsZWN0ZWQoaW5kZXhUb0NoZWNrOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBub1N0ZXBzID0gIXRoaXMuc3RlcHMgfHwgdGhpcy5zdGVwcy5sZW5ndGggPT09IDA7XG4gICAgaWYgKG5vU3RlcHMgfHwgaW5kZXhUb0NoZWNrIDwgMCB8fCBpbmRleFRvQ2hlY2sgPj0gdGhpcy5zdGVwcy5sZW5ndGggfHwgaW5kZXhUb0NoZWNrID09PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXhUb0NoZWNrIDw9IHRoaXMuc2VsZWN0ZWRJbmRleCB8fCAhdGhpcy5saW5lYXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGxldCBpc0FsbFN0ZXBzVmFsaWQgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLnNlbGVjdGVkSW5kZXg7IGkgPCBpbmRleFRvQ2hlY2s7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmlzU3RlcFZhbGlkKGkpKSB7XG4gICAgICAgIGlzQWxsU3RlcHNWYWxpZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzQWxsU3RlcHNWYWxpZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBtYXJrQ3VycmVudFN0ZXBJbnRlcmFjdGVkKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLmludGVyYWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlPjxuZy1jb250ZW50IHNlbGVjdD1cIm5iLXN0ZXBcIj48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwczsgbGV0IGluZGV4ID0gaW5kZXg7IGxldCBmaXJzdCA9IGZpcnN0XCI+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiIWZpcnN0ICYmICFzdGVwLmhpZGRlblwiXG4gICAgICAgICBbY2xhc3MuY29ubmVjdG9yLXBhc3RdPVwiaW5kZXggPD0gc2VsZWN0ZWRJbmRleFwiXG4gICAgICAgICBjbGFzcz1cImNvbm5lY3RvclwiPjwvZGl2PlxuXG4gICAgPGRpdiAqbmdJZj1cIiFzdGVwLmhpZGRlblwiIGNsYXNzPVwic3RlcFwiXG4gICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXNTdGVwU2VsZWN0ZWQoc3RlcClcIlxuICAgICAgICAgW2NsYXNzLmNvbXBsZXRlZF09XCIhaXNTdGVwU2VsZWN0ZWQoc3RlcCkgJiYgc3RlcC5jb21wbGV0ZWRcIlxuICAgICAgICAgW2NsYXNzLm5vbmludGVyYWN0aXZlXT1cImRpc2FibGVTdGVwTmF2aWdhdGlvblwiXG4gICAgICAgICAoY2xpY2spPVwiY2hhbmdlU3RlcChzdGVwKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLWluZGV4XCI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIXN0ZXAuY29tcGxldGVkIHx8IGlzU3RlcFNlbGVjdGVkKHN0ZXApXCI+e3sgaW5kZXggKyAxIH19PC9zcGFuPlxuICAgICAgICA8bmItaWNvbiAqbmdJZj1cIiFpc1N0ZXBTZWxlY3RlZChzdGVwKSAmJiBzdGVwLmNvbXBsZXRlZFwiIGljb249XCJjaGVja21hcmstb3V0bGluZVwiIHBhY2s9XCJuZWJ1bGFyLWVzc2VudGlhbHNcIj5cbiAgICAgICAgPC9uYi1pY29uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN0ZXAuaXNMYWJlbFRlbXBsYXRlXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImdldFN0ZXBUZW1wbGF0ZShzdGVwKVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhc3RlcC5pc0xhYmVsVGVtcGxhdGVcIj57eyBzdGVwLmxhYmVsIH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwic3RlcC1jb250ZW50XCI+XG4gIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwic2VsZWN0ZWQ/LmNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19