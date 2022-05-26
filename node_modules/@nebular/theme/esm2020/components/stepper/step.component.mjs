import { Component, Inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { NB_STEPPER } from './stepper-tokens';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
/**
 * Component intended to be used within  the `<nb-stepper>` component.
 * Container for a step
 */
export class NbStepComponent {
    constructor(stepper) {
        this._hidden = false;
        this._completed = false;
        this.interacted = false;
        this.stepper = stepper;
    }
    /**
     * Whether step will be displayed in wizard
     *
     * @type {boolean}
     */
    get hidden() {
        return this._hidden;
    }
    set hidden(value) {
        this._hidden = convertToBoolProperty(value);
    }
    /**
     * Check that label is a TemplateRef.
     *
     * @return boolean
     * */
    get isLabelTemplate() {
        return this.label instanceof TemplateRef;
    }
    /**
     * Whether step is marked as completed.
     *
     * @type {boolean}
     */
    get completed() {
        return this._completed || this.isCompleted;
    }
    set completed(value) {
        this._completed = convertToBoolProperty(value);
    }
    get isCompleted() {
        return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
    }
    /**
     * Mark step as selected
     * */
    select() {
        this.stepper.selected = this;
    }
    /**
     * Reset step and stepControl state
     * */
    reset() {
        this.interacted = false;
        if (this.stepControl) {
            this.stepControl.reset();
        }
    }
}
NbStepComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStepComponent, deps: [{ token: NB_STEPPER }], target: i0.ɵɵFactoryTarget.Component });
NbStepComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbStepComponent, selector: "nb-step", inputs: { stepControl: "stepControl", label: "label", hidden: "hidden", completed: "completed" }, viewQueries: [{ propertyName: "content", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStepComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-step',
                    template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_STEPPER]
                }] }]; }, propDecorators: { content: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], stepControl: [{
                type: Input
            }], label: [{
                type: Input
            }], hidden: [{
                type: Input
            }], completed: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFrQixNQUFNLFlBQVksQ0FBQzs7QUFFbkU7OztHQUdHO0FBU0gsTUFBTSxPQUFPLGVBQWU7SUFxRTFCLFlBQWdDLE9BQU87UUFqQzdCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUF3QmhCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFPdEMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUdqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBL0NEOzs7O09BSUc7SUFDSCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBSUQ7Ozs7U0FJSztJQUNMLElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFDSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDN0MsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBSUQsSUFBYyxXQUFXO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4RixDQUFDO0lBUUQ7O1NBRUs7SUFDTCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7U0FFSztJQUNMLEtBQUs7UUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7OzRHQXhGVSxlQUFlLGtCQXFFTixVQUFVO2dHQXJFbkIsZUFBZSwwTEFVZixXQUFXLDhEQWhCWjs7OztHQUlUOzJGQUVVLGVBQWU7a0JBUjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRTs7OztHQUlUO2lCQUNGOzswQkFzRWMsTUFBTTsyQkFBQyxVQUFVOzRDQTNEWSxPQUFPO3NCQUFoRCxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBSy9CLFdBQVc7c0JBQW5CLEtBQUs7Z0JBT0csS0FBSztzQkFBYixLQUFLO2dCQVFGLE1BQU07c0JBRFQsS0FBSztnQkF5QkYsU0FBUztzQkFEWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYlN0ZXBwZXJDb21wb25lbnQgfSBmcm9tICcuL3N0ZXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5CX1NURVBQRVIgfSBmcm9tICcuL3N0ZXBwZXItdG9rZW5zJztcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLyoqXG4gKiBDb21wb25lbnQgaW50ZW5kZWQgdG8gYmUgdXNlZCB3aXRoaW4gIHRoZSBgPG5iLXN0ZXBwZXI+YCBjb21wb25lbnQuXG4gKiBDb250YWluZXIgZm9yIGEgc3RlcFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1zdGVwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGU+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmJTdGVwQ29tcG9uZW50IHtcblxuICBwcm90ZWN0ZWQgc3RlcHBlcjogTmJTdGVwcGVyQ29tcG9uZW50O1xuXG4gIC8vIFRPRE8gc3RhdGljIG11c3QgYmUgZmFsc2UgYXMgb2YgQW5ndWxhciA5LjAuMCwgaXNzdWVzLzE1MTRcbiAgLyoqXG4gICAqIFN0ZXAgY29udGVudFxuICAgKlxuICAgKiBAdHlwZSB7VGVtcGxhdGVSZWZ9XG4gICAqL1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBUb3AgbGV2ZWwgYWJzdHJhY3QgY29udHJvbCBvZiB0aGUgc3RlcFxuICAgKi9cbiAgQElucHV0KCkgc3RlcENvbnRyb2w/OiB7IHZhbGlkOiBib29sZWFuIHwgbnVsbCwgcmVzZXQ6ICgpID0+IHZvaWQgfTtcblxuICAvKipcbiAgICogU3RlcCBsYWJlbFxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfFRlbXBsYXRlUmVmPGFueT59XG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nfFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgc3RlcCB3aWxsIGJlIGRpc3BsYXllZCBpbiB3aXphcmRcbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oaWRkZW47XG4gIH1cbiAgc2V0IGhpZGRlbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGRlbiA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJvdGVjdGVkIF9oaWRkZW4gPSBmYWxzZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hpZGRlbjogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoYXQgbGFiZWwgaXMgYSBUZW1wbGF0ZVJlZi5cbiAgICpcbiAgICogQHJldHVybiBib29sZWFuXG4gICAqICovXG4gIGdldCBpc0xhYmVsVGVtcGxhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWwgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHN0ZXAgaXMgbWFya2VkIGFzIGNvbXBsZXRlZC5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgY29tcGxldGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWQgfHwgdGhpcy5pc0NvbXBsZXRlZDtcbiAgfVxuICBzZXQgY29tcGxldGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY29tcGxldGVkID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29tcGxldGVkOiBOYkJvb2xlYW5JbnB1dDtcblxuICBwcm90ZWN0ZWQgZ2V0IGlzQ29tcGxldGVkKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBDb250cm9sID8gdGhpcy5zdGVwQ29udHJvbC52YWxpZCAmJiB0aGlzLmludGVyYWN0ZWQgOiB0aGlzLmludGVyYWN0ZWQ7XG4gIH1cblxuICBpbnRlcmFjdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChOQl9TVEVQUEVSKSBzdGVwcGVyKSB7XG4gICAgdGhpcy5zdGVwcGVyID0gc3RlcHBlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrIHN0ZXAgYXMgc2VsZWN0ZWRcbiAgICogKi9cbiAgc2VsZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RlcHBlci5zZWxlY3RlZCA9IHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgc3RlcCBhbmQgc3RlcENvbnRyb2wgc3RhdGVcbiAgICogKi9cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcmFjdGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuc3RlcENvbnRyb2wpIHtcbiAgICAgIHRoaXMuc3RlcENvbnRyb2wucmVzZXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==