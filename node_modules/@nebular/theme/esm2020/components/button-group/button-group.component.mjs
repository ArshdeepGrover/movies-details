/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { from, merge, Subject } from 'rxjs';
import { debounceTime, filter, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { NbButton } from '../button/base-button';
import { NbButtonToggleDirective } from './button-toggle.directive';
import { NB_BUTTON_GROUP } from './button-group-injection-tokens';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
/**
 * `<nb-button-group>` visually groups buttons together and allow to control buttons properties and the state as a
 * group.
 * @stacked-example(Button Group Showcase, button-group/button-group-showcase.component)
 *
 * ### Installation
 *
 * Import `NbButtonGroupModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbButtonGroupModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * You can use `<nb-button-group>` to group a series of `[nbButton]` or `[nbButtonToggle]` components.
 * @stacked-example(Button and Button Toggle Groups, button-group/button-and-button-toggle-groups.component)
 *
 * For a group of multiple `[nbButtonToggle]` you also can control multi-selection behavior. By default, the group
 * component allows only one pressed button toggle at a time (similar to the radio group). To be able to keep multiple
 * toggles pressed, you need to add `multiple` attributes to the `<nb-button-toggle>`.
 * @stacked-example(Button Group Multiple, button-group/button-group-multiple.component)
 *
 * To know which buttons are currently pressed listen to `(valueChange)` on the `nb-button-group`. Event
 * contains an array of values of currently pressed button toggles. You can assign a value to the
 * `[nbButtonToggle]` via the `value` input.
 * @stacked-example(Button Group Value Change, button-group/button-group-value-change.component)
 *
 * To disable a group of buttons, add a `disabled` attribute to the `<nb-button-group>`.
 * @stacked-example(Button Group Disabled, button-group/button-group-disabled.component)
 *
 * The group component controls all visual attributes of buttons such as `appearance`, `status`, `size`, `shape`.
 * You can change it via the appropriate attributes.
 *
 * Button group appearances:
 * @stacked-example(Button Group Appearances, button-group/button-group-appearances.component)
 *
 * Button group statuses:
 * @stacked-example(Button Group Statuses, button-group/button-group-statuses.component)
 *
 * Button group sizes:
 * @stacked-example(Button Group Sizes, button-group/button-group-sizes.component)
 *
 * Buttons group shapes:
 * @additional-example(Button Group Shapes, button-group/button-group-shapes.component)
 *
 * @styles
 *
 * button-group-filled-button-basic-text-color:
 * button-group-filled-button-primary-text-color:
 * button-group-filled-button-success-text-color:
 * button-group-filled-button-info-text-color:
 * button-group-filled-button-warning-text-color:
 * button-group-filled-button-danger-text-color:
 * button-group-filled-button-control-text-color:
 * button-group-filled-basic-divider-color:
 * button-group-filled-primary-divider-color:
 * button-group-filled-success-divider-color:
 * button-group-filled-info-divider-color:
 * button-group-filled-warning-divider-color:
 * button-group-filled-danger-divider-color:
 * button-group-filled-control-divider-color:
 * button-group-ghost-divider-color:
 **/
export class NbButtonGroupComponent {
    constructor(cd, statusService) {
        this.cd = cd;
        this.statusService = statusService;
        this.lastEmittedValue = [];
        this.destroy$ = new Subject();
        this.buttonsChange$ = new Subject();
        /**
         * Button group size, available sizes:
         * `tiny`, `small`, `medium`, `large`, `giant`
         */
        this.size = 'medium';
        /**
         * Button group status (adds specific styles):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.status = 'basic';
        /**
         * Button group shapes: `rectangle`, `round`, `semi-round`
         */
        this.shape = 'rectangle';
        /**
         * Button group appearance: `filled`, `outline`, `ghost`
         */
        this.appearance = 'filled';
        this._disabled = false;
        this._multiple = false;
        /**
         * Emits when `nbButtonToggle` pressed state change. `$event` contains an array of the currently pressed button
         * toggles.
         */
        this.valueChange = new EventEmitter();
        this.role = 'group';
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (this.disabled !== convertToBoolProperty(value)) {
            this._disabled = !this.disabled;
        }
    }
    /**
     * Allows to keep multiple button toggles pressed. Off by default.
     */
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = convertToBoolProperty(value);
    }
    /**
     * Sets `filled` appearance
     */
    get filled() {
        return this.appearance === 'filled';
    }
    set filled(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'filled';
        }
    }
    /**
     * Sets `outline` appearance
     */
    get outline() {
        return this.appearance === 'outline';
    }
    set outline(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'outline';
        }
    }
    /**
     * Sets `ghost` appearance
     */
    get ghost() {
        return this.appearance === 'ghost';
    }
    set ghost(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'ghost';
        }
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    ngOnChanges({ size, status, shape, multiple, filled, outline, ghost, disabled }) {
        if (size || status || shape || multiple || filled || outline || ghost || disabled) {
            this.syncButtonsProperties(this.buttons?.toArray() || []);
        }
    }
    ngAfterContentInit() {
        this.buttonsChange$.pipe(takeUntil(this.destroy$)).subscribe((buttons) => {
            this.listenButtonPressedState(buttons);
            this.syncButtonsProperties(buttons);
        });
        this.buttons.changes
            .pipe(
        // `buttons.changes` emit during change detection run after projected content already was initialized.
        // So at this time, it's too late to update projected buttons properties as updating bindings after
        // initialization doesn't make sense. Changes won't be picked up and should cause an "expression changed" error.
        // Instead, we wrap the new buttons list into a promise to defer update to the following microtask and also to
        // trigger change detection one more time.
        switchMap((buttons) => from(Promise.resolve(buttons.toArray()))), takeUntil(this.destroy$))
            .subscribe(this.buttonsChange$);
        this.buttonsChange$.next(this.buttons.toArray());
    }
    listenButtonPressedState(buttons) {
        const toggleButtons = buttons.filter((button) => {
            return button instanceof NbButtonToggleDirective;
        });
        if (!toggleButtons.length) {
            return;
        }
        const buttonsPressedChange$ = toggleButtons.map((button) => button.pressedChange$);
        merge(...buttonsPressedChange$)
            .pipe(filter(({ pressed }) => !this.multiple && pressed), takeUntil(merge(this.buttonsChange$, this.destroy$)))
            .subscribe(({ source }) => {
            toggleButtons
                .filter((button) => button !== source)
                .forEach((button) => button._updatePressed(false));
        });
        merge(...buttonsPressedChange$)
            .pipe(
        // Use startWith to emit if some buttons are initially pressed.
        startWith(''), 
        // Use debounce to emit change once when pressed state change in multiple button toggles.
        debounceTime(0), takeUntil(merge(this.buttonsChange$, this.destroy$)))
            .subscribe(() => this.emitCurrentValue(toggleButtons));
    }
    syncButtonsProperties(buttons) {
        buttons.forEach((button) => {
            button.updateProperties({
                appearance: this.appearance,
                size: this.size,
                status: this.status,
                shape: this.shape,
                disabled: this.disabled,
            });
        });
    }
    emitCurrentValue(toggleButtons) {
        const pressedToggleValues = toggleButtons
            .filter((b) => b.pressed && typeof b.value !== 'undefined')
            .map((b) => b.value);
        // Prevent multiple emissions of empty value.
        if (pressedToggleValues.length === 0 && this.lastEmittedValue.length === 0) {
            return;
        }
        this.valueChange.emit(pressedToggleValues);
        this.lastEmittedValue = pressedToggleValues;
    }
}
NbButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbButtonGroupComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbButtonGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbButtonGroupComponent, selector: "nb-button-group", inputs: { size: "size", status: "status", shape: "shape", appearance: "appearance", disabled: "disabled", multiple: "multiple", filled: "filled", outline: "outline", ghost: "ghost" }, outputs: { valueChange: "valueChange" }, host: { properties: { "attr.role": "this.role", "class": "this.additionalClasses" } }, providers: [{ provide: NB_BUTTON_GROUP, useExisting: NbButtonGroupComponent }], queries: [{ propertyName: "buttons", predicate: NbButton }], usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbButtonGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-button-group',
                    template: ` <ng-content></ng-content> `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: NB_BUTTON_GROUP, useExisting: NbButtonGroupComponent }],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NbStatusService }]; }, propDecorators: { buttons: [{
                type: ContentChildren,
                args: [NbButton]
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], shape: [{
                type: Input
            }], appearance: [{
                type: Input
            }], disabled: [{
                type: Input
            }], multiple: [{
                type: Input
            }], filled: [{
                type: Input
            }], outline: [{
                type: Input
            }], ghost: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUVMLE1BQU0sR0FHUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd2RixPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDO0FBSW5FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQWtELHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFFbEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0VJO0FBT0osTUFBTSxPQUFPLHNCQUFzQjtJQWlIakMsWUFBc0IsRUFBcUIsRUFBWSxhQUE4QjtRQUEvRCxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFZLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQWhIM0UscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBRXBCLGFBQVEsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLElBQUksT0FB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RixRQUFRO3NCQURYLEtBQUs7Z0JBZ0JGLFFBQVE7c0JBRFgsS0FBSztnQkFjRixNQUFNO3NCQURULEtBQUs7Z0JBZUYsT0FBTztzQkFEVixLQUFLO2dCQWVGLEtBQUs7c0JBRFIsS0FBSztnQkFlSSxXQUFXO3NCQUFwQixNQUFNO2dCQUVtQixJQUFJO3NCQUE3QixXQUFXO3VCQUFDLFdBQVc7Z0JBR3BCLGlCQUFpQjtzQkFEcEIsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tLCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5iU3RhdHVzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0YXR1cy5zZXJ2aWNlJztcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IE5iQ29tcG9uZW50U2l6ZSB9IGZyb20gJy4uL2NvbXBvbmVudC1zaXplJztcbmltcG9ydCB7IE5iQ29tcG9uZW50U2hhcGUgfSBmcm9tICcuLi9jb21wb25lbnQtc2hhcGUnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyB9IGZyb20gJy4uL2NvbXBvbmVudC1zdGF0dXMnO1xuaW1wb3J0IHsgTmJCdXR0b24gfSBmcm9tICcuLi9idXR0b24vYmFzZS1idXR0b24nO1xuaW1wb3J0IHsgTmJCdXR0b25Ub2dnbGVBcHBlYXJhbmNlLCBOYkJ1dHRvblRvZ2dsZUNoYW5nZSwgTmJCdXR0b25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi10b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5CX0JVVFRPTl9HUk9VUCB9IGZyb20gJy4vYnV0dG9uLWdyb3VwLWluamVjdGlvbi10b2tlbnMnO1xuXG4vKipcbiAqIGA8bmItYnV0dG9uLWdyb3VwPmAgdmlzdWFsbHkgZ3JvdXBzIGJ1dHRvbnMgdG9nZXRoZXIgYW5kIGFsbG93IHRvIGNvbnRyb2wgYnV0dG9ucyBwcm9wZXJ0aWVzIGFuZCB0aGUgc3RhdGUgYXMgYVxuICogZ3JvdXAuXG4gKiBAc3RhY2tlZC1leGFtcGxlKEJ1dHRvbiBHcm91cCBTaG93Y2FzZSwgYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJCdXR0b25Hcm91cE1vZHVsZWAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJCdXR0b25Hcm91cE1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICpcbiAqICMjIyBVc2FnZVxuICpcbiAqIFlvdSBjYW4gdXNlIGA8bmItYnV0dG9uLWdyb3VwPmAgdG8gZ3JvdXAgYSBzZXJpZXMgb2YgYFtuYkJ1dHRvbl1gIG9yIGBbbmJCdXR0b25Ub2dnbGVdYCBjb21wb25lbnRzLlxuICogQHN0YWNrZWQtZXhhbXBsZShCdXR0b24gYW5kIEJ1dHRvbiBUb2dnbGUgR3JvdXBzLCBidXR0b24tZ3JvdXAvYnV0dG9uLWFuZC1idXR0b24tdG9nZ2xlLWdyb3Vwcy5jb21wb25lbnQpXG4gKlxuICogRm9yIGEgZ3JvdXAgb2YgbXVsdGlwbGUgYFtuYkJ1dHRvblRvZ2dsZV1gIHlvdSBhbHNvIGNhbiBjb250cm9sIG11bHRpLXNlbGVjdGlvbiBiZWhhdmlvci4gQnkgZGVmYXVsdCwgdGhlIGdyb3VwXG4gKiBjb21wb25lbnQgYWxsb3dzIG9ubHkgb25lIHByZXNzZWQgYnV0dG9uIHRvZ2dsZSBhdCBhIHRpbWUgKHNpbWlsYXIgdG8gdGhlIHJhZGlvIGdyb3VwKS4gVG8gYmUgYWJsZSB0byBrZWVwIG11bHRpcGxlXG4gKiB0b2dnbGVzIHByZXNzZWQsIHlvdSBuZWVkIHRvIGFkZCBgbXVsdGlwbGVgIGF0dHJpYnV0ZXMgdG8gdGhlIGA8bmItYnV0dG9uLXRvZ2dsZT5gLlxuICogQHN0YWNrZWQtZXhhbXBsZShCdXR0b24gR3JvdXAgTXVsdGlwbGUsIGJ1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAtbXVsdGlwbGUuY29tcG9uZW50KVxuICpcbiAqIFRvIGtub3cgd2hpY2ggYnV0dG9ucyBhcmUgY3VycmVudGx5IHByZXNzZWQgbGlzdGVuIHRvIGAodmFsdWVDaGFuZ2UpYCBvbiB0aGUgYG5iLWJ1dHRvbi1ncm91cGAuIEV2ZW50XG4gKiBjb250YWlucyBhbiBhcnJheSBvZiB2YWx1ZXMgb2YgY3VycmVudGx5IHByZXNzZWQgYnV0dG9uIHRvZ2dsZXMuIFlvdSBjYW4gYXNzaWduIGEgdmFsdWUgdG8gdGhlXG4gKiBgW25iQnV0dG9uVG9nZ2xlXWAgdmlhIHRoZSBgdmFsdWVgIGlucHV0LlxuICogQHN0YWNrZWQtZXhhbXBsZShCdXR0b24gR3JvdXAgVmFsdWUgQ2hhbmdlLCBidXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLXZhbHVlLWNoYW5nZS5jb21wb25lbnQpXG4gKlxuICogVG8gZGlzYWJsZSBhIGdyb3VwIG9mIGJ1dHRvbnMsIGFkZCBhIGBkaXNhYmxlZGAgYXR0cmlidXRlIHRvIHRoZSBgPG5iLWJ1dHRvbi1ncm91cD5gLlxuICogQHN0YWNrZWQtZXhhbXBsZShCdXR0b24gR3JvdXAgRGlzYWJsZWQsIGJ1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAtZGlzYWJsZWQuY29tcG9uZW50KVxuICpcbiAqIFRoZSBncm91cCBjb21wb25lbnQgY29udHJvbHMgYWxsIHZpc3VhbCBhdHRyaWJ1dGVzIG9mIGJ1dHRvbnMgc3VjaCBhcyBgYXBwZWFyYW5jZWAsIGBzdGF0dXNgLCBgc2l6ZWAsIGBzaGFwZWAuXG4gKiBZb3UgY2FuIGNoYW5nZSBpdCB2aWEgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZXMuXG4gKlxuICogQnV0dG9uIGdyb3VwIGFwcGVhcmFuY2VzOlxuICogQHN0YWNrZWQtZXhhbXBsZShCdXR0b24gR3JvdXAgQXBwZWFyYW5jZXMsIGJ1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAtYXBwZWFyYW5jZXMuY29tcG9uZW50KVxuICpcbiAqIEJ1dHRvbiBncm91cCBzdGF0dXNlczpcbiAqIEBzdGFja2VkLWV4YW1wbGUoQnV0dG9uIEdyb3VwIFN0YXR1c2VzLCBidXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLXN0YXR1c2VzLmNvbXBvbmVudClcbiAqXG4gKiBCdXR0b24gZ3JvdXAgc2l6ZXM6XG4gKiBAc3RhY2tlZC1leGFtcGxlKEJ1dHRvbiBHcm91cCBTaXplcywgYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC1zaXplcy5jb21wb25lbnQpXG4gKlxuICogQnV0dG9ucyBncm91cCBzaGFwZXM6XG4gKiBAYWRkaXRpb25hbC1leGFtcGxlKEJ1dHRvbiBHcm91cCBTaGFwZXMsIGJ1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAtc2hhcGVzLmNvbXBvbmVudClcbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24tYmFzaWMtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1ncm91cC1maWxsZWQtYnV0dG9uLXByaW1hcnktdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1ncm91cC1maWxsZWQtYnV0dG9uLXN1Y2Nlc3MtdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1ncm91cC1maWxsZWQtYnV0dG9uLWluZm8tdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1ncm91cC1maWxsZWQtYnV0dG9uLXdhcm5pbmctdGV4dC1jb2xvcjpcbiAqIGJ1dHRvbi1ncm91cC1maWxsZWQtYnV0dG9uLWRhbmdlci10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24tY29udHJvbC10ZXh0LWNvbG9yOlxuICogYnV0dG9uLWdyb3VwLWZpbGxlZC1iYXNpYy1kaXZpZGVyLWNvbG9yOlxuICogYnV0dG9uLWdyb3VwLWZpbGxlZC1wcmltYXJ5LWRpdmlkZXItY29sb3I6XG4gKiBidXR0b24tZ3JvdXAtZmlsbGVkLXN1Y2Nlc3MtZGl2aWRlci1jb2xvcjpcbiAqIGJ1dHRvbi1ncm91cC1maWxsZWQtaW5mby1kaXZpZGVyLWNvbG9yOlxuICogYnV0dG9uLWdyb3VwLWZpbGxlZC13YXJuaW5nLWRpdmlkZXItY29sb3I6XG4gKiBidXR0b24tZ3JvdXAtZmlsbGVkLWRhbmdlci1kaXZpZGVyLWNvbG9yOlxuICogYnV0dG9uLWdyb3VwLWZpbGxlZC1jb250cm9sLWRpdmlkZXItY29sb3I6XG4gKiBidXR0b24tZ3JvdXAtZ2hvc3QtZGl2aWRlci1jb2xvcjpcbiAqKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWJ1dHRvbi1ncm91cCcsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkJfQlVUVE9OX0dST1VQLCB1c2VFeGlzdGluZzogTmJCdXR0b25Hcm91cENvbXBvbmVudCB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTmJCdXR0b25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByb3RlY3RlZCBsYXN0RW1pdHRlZFZhbHVlOiBhbnlbXSA9IFtdO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBkZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByb3RlY3RlZCByZWFkb25seSBidXR0b25zQ2hhbmdlJCA9IG5ldyBTdWJqZWN0PE5iQnV0dG9uW10+KCk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOYkJ1dHRvbikgcmVhZG9ubHkgYnV0dG9uczogUXVlcnlMaXN0PE5iQnV0dG9uPjtcblxuICAvKipcbiAgICogQnV0dG9uIGdyb3VwIHNpemUsIGF2YWlsYWJsZSBzaXplczpcbiAgICogYHRpbnlgLCBgc21hbGxgLCBgbWVkaXVtYCwgYGxhcmdlYCwgYGdpYW50YFxuICAgKi9cbiAgQElucHV0KCkgc2l6ZTogTmJDb21wb25lbnRTaXplID0gJ21lZGl1bSc7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBncm91cCBzdGF0dXMgKGFkZHMgc3BlY2lmaWMgc3R5bGVzKTpcbiAgICogYGJhc2ljYCwgYHByaW1hcnlgLCBgaW5mb2AsIGBzdWNjZXNzYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCwgYGNvbnRyb2xgXG4gICAqL1xuICBASW5wdXQoKSBzdGF0dXM6IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgPSAnYmFzaWMnO1xuXG4gIC8qKlxuICAgKiBCdXR0b24gZ3JvdXAgc2hhcGVzOiBgcmVjdGFuZ2xlYCwgYHJvdW5kYCwgYHNlbWktcm91bmRgXG4gICAqL1xuICBASW5wdXQoKSBzaGFwZTogTmJDb21wb25lbnRTaGFwZSA9ICdyZWN0YW5nbGUnO1xuXG4gIC8qKlxuICAgKiBCdXR0b24gZ3JvdXAgYXBwZWFyYW5jZTogYGZpbGxlZGAsIGBvdXRsaW5lYCwgYGdob3N0YFxuICAgKi9cbiAgQElucHV0KCkgYXBwZWFyYW5jZTogTmJCdXR0b25Ub2dnbGVBcHBlYXJhbmNlID0gJ2ZpbGxlZCc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZDtcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgdG8ga2VlcCBtdWx0aXBsZSBidXR0b24gdG9nZ2xlcyBwcmVzc2VkLiBPZmYgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cbiAgc2V0IG11bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByb3RlY3RlZCBfbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX211bHRpcGxlOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogU2V0cyBgZmlsbGVkYCBhcHBlYXJhbmNlXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZmlsbGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFwcGVhcmFuY2UgPT09ICdmaWxsZWQnO1xuICB9XG4gIHNldCBmaWxsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAoY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKSkge1xuICAgICAgdGhpcy5hcHBlYXJhbmNlID0gJ2ZpbGxlZCc7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9maWxsZWQ6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBTZXRzIGBvdXRsaW5lYCBhcHBlYXJhbmNlXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgb3V0bGluZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlYXJhbmNlID09PSAnb3V0bGluZSc7XG4gIH1cbiAgc2V0IG91dGxpbmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAoY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKSkge1xuICAgICAgdGhpcy5hcHBlYXJhbmNlID0gJ291dGxpbmUnO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb3V0bGluZTogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFNldHMgYGdob3N0YCBhcHBlYXJhbmNlXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZ2hvc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZWFyYW5jZSA9PT0gJ2dob3N0JztcbiAgfVxuICBzZXQgZ2hvc3QodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAoY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKSkge1xuICAgICAgdGhpcy5hcHBlYXJhbmNlID0gJ2dob3N0JztcbiAgICB9XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2dob3N0OiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiBgbmJCdXR0b25Ub2dnbGVgIHByZXNzZWQgc3RhdGUgY2hhbmdlLiBgJGV2ZW50YCBjb250YWlucyBhbiBhcnJheSBvZiB0aGUgY3VycmVudGx5IHByZXNzZWQgYnV0dG9uXG4gICAqIHRvZ2dsZXMuXG4gICAqL1xuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICdncm91cCc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBhZGRpdGlvbmFsQ2xhc3NlcygpOiBzdHJpbmdbXSB7XG4gICAgaWYgKHRoaXMuc3RhdHVzU2VydmljZS5pc0N1c3RvbVN0YXR1cyh0aGlzLnN0YXR1cykpIHtcbiAgICAgIHJldHVybiBbdGhpcy5zdGF0dXNTZXJ2aWNlLmdldFN0YXR1c0NsYXNzKHRoaXMuc3RhdHVzKV07XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByb3RlY3RlZCBzdGF0dXNTZXJ2aWNlOiBOYlN0YXR1c1NlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoeyBzaXplLCBzdGF0dXMsIHNoYXBlLCBtdWx0aXBsZSwgZmlsbGVkLCBvdXRsaW5lLCBnaG9zdCwgZGlzYWJsZWQgfTogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChzaXplIHx8IHN0YXR1cyB8fCBzaGFwZSB8fCBtdWx0aXBsZSB8fCBmaWxsZWQgfHwgb3V0bGluZSB8fCBnaG9zdCB8fCBkaXNhYmxlZCkge1xuICAgICAgdGhpcy5zeW5jQnV0dG9uc1Byb3BlcnRpZXModGhpcy5idXR0b25zPy50b0FycmF5KCkgfHwgW10pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJ1dHRvbnNDaGFuZ2UkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGJ1dHRvbnM6IE5iQnV0dG9uW10pID0+IHtcbiAgICAgIHRoaXMubGlzdGVuQnV0dG9uUHJlc3NlZFN0YXRlKGJ1dHRvbnMpO1xuICAgICAgdGhpcy5zeW5jQnV0dG9uc1Byb3BlcnRpZXMoYnV0dG9ucyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmJ1dHRvbnMuY2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIC8vIGBidXR0b25zLmNoYW5nZXNgIGVtaXQgZHVyaW5nIGNoYW5nZSBkZXRlY3Rpb24gcnVuIGFmdGVyIHByb2plY3RlZCBjb250ZW50IGFscmVhZHkgd2FzIGluaXRpYWxpemVkLlxuICAgICAgICAvLyBTbyBhdCB0aGlzIHRpbWUsIGl0J3MgdG9vIGxhdGUgdG8gdXBkYXRlIHByb2plY3RlZCBidXR0b25zIHByb3BlcnRpZXMgYXMgdXBkYXRpbmcgYmluZGluZ3MgYWZ0ZXJcbiAgICAgICAgLy8gaW5pdGlhbGl6YXRpb24gZG9lc24ndCBtYWtlIHNlbnNlLiBDaGFuZ2VzIHdvbid0IGJlIHBpY2tlZCB1cCBhbmQgc2hvdWxkIGNhdXNlIGFuIFwiZXhwcmVzc2lvbiBjaGFuZ2VkXCIgZXJyb3IuXG4gICAgICAgIC8vIEluc3RlYWQsIHdlIHdyYXAgdGhlIG5ldyBidXR0b25zIGxpc3QgaW50byBhIHByb21pc2UgdG8gZGVmZXIgdXBkYXRlIHRvIHRoZSBmb2xsb3dpbmcgbWljcm90YXNrIGFuZCBhbHNvIHRvXG4gICAgICAgIC8vIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiBvbmUgbW9yZSB0aW1lLlxuICAgICAgICBzd2l0Y2hNYXAoKGJ1dHRvbnM6IFF1ZXJ5TGlzdDxOYkJ1dHRvbj4pID0+IGZyb20oUHJvbWlzZS5yZXNvbHZlKGJ1dHRvbnMudG9BcnJheSgpKSkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHRoaXMuYnV0dG9uc0NoYW5nZSQpO1xuXG4gICAgdGhpcy5idXR0b25zQ2hhbmdlJC5uZXh0KHRoaXMuYnV0dG9ucy50b0FycmF5KCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxpc3RlbkJ1dHRvblByZXNzZWRTdGF0ZShidXR0b25zOiBOYkJ1dHRvbltdKTogdm9pZCB7XG4gICAgY29uc3QgdG9nZ2xlQnV0dG9uczogTmJCdXR0b25Ub2dnbGVEaXJlY3RpdmVbXSA9IGJ1dHRvbnMuZmlsdGVyKChidXR0b246IE5iQnV0dG9uKSA9PiB7XG4gICAgICByZXR1cm4gYnV0dG9uIGluc3RhbmNlb2YgTmJCdXR0b25Ub2dnbGVEaXJlY3RpdmU7XG4gICAgfSkgYXMgTmJCdXR0b25Ub2dnbGVEaXJlY3RpdmVbXTtcblxuICAgIGlmICghdG9nZ2xlQnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25zUHJlc3NlZENoYW5nZSQ6IE9ic2VydmFibGU8TmJCdXR0b25Ub2dnbGVDaGFuZ2U+W10gPSB0b2dnbGVCdXR0b25zLm1hcChcbiAgICAgIChidXR0b246IE5iQnV0dG9uVG9nZ2xlRGlyZWN0aXZlKSA9PiBidXR0b24ucHJlc3NlZENoYW5nZSQsXG4gICAgKTtcblxuICAgIG1lcmdlKC4uLmJ1dHRvbnNQcmVzc2VkQ2hhbmdlJClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgcHJlc3NlZCB9OiBOYkJ1dHRvblRvZ2dsZUNoYW5nZSkgPT4gIXRoaXMubXVsdGlwbGUgJiYgcHJlc3NlZCksXG4gICAgICAgIHRha2VVbnRpbChtZXJnZSh0aGlzLmJ1dHRvbnNDaGFuZ2UkLCB0aGlzLmRlc3Ryb3kkKSksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh7IHNvdXJjZSB9OiBOYkJ1dHRvblRvZ2dsZUNoYW5nZSkgPT4ge1xuICAgICAgICB0b2dnbGVCdXR0b25zXG4gICAgICAgICAgLmZpbHRlcigoYnV0dG9uOiBOYkJ1dHRvblRvZ2dsZURpcmVjdGl2ZSkgPT4gYnV0dG9uICE9PSBzb3VyY2UpXG4gICAgICAgICAgLmZvckVhY2goKGJ1dHRvbjogTmJCdXR0b25Ub2dnbGVEaXJlY3RpdmUpID0+IGJ1dHRvbi5fdXBkYXRlUHJlc3NlZChmYWxzZSkpO1xuICAgICAgfSk7XG5cbiAgICBtZXJnZSguLi5idXR0b25zUHJlc3NlZENoYW5nZSQpXG4gICAgICAucGlwZShcbiAgICAgICAgLy8gVXNlIHN0YXJ0V2l0aCB0byBlbWl0IGlmIHNvbWUgYnV0dG9ucyBhcmUgaW5pdGlhbGx5IHByZXNzZWQuXG4gICAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICAgIC8vIFVzZSBkZWJvdW5jZSB0byBlbWl0IGNoYW5nZSBvbmNlIHdoZW4gcHJlc3NlZCBzdGF0ZSBjaGFuZ2UgaW4gbXVsdGlwbGUgYnV0dG9uIHRvZ2dsZXMuXG4gICAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgICAgdGFrZVVudGlsKG1lcmdlKHRoaXMuYnV0dG9uc0NoYW5nZSQsIHRoaXMuZGVzdHJveSQpKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5lbWl0Q3VycmVudFZhbHVlKHRvZ2dsZUJ1dHRvbnMpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW5jQnV0dG9uc1Byb3BlcnRpZXMoYnV0dG9uczogTmJCdXR0b25bXSk6IHZvaWQge1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uOiBOYkJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLnVwZGF0ZVByb3BlcnRpZXMoe1xuICAgICAgICBhcHBlYXJhbmNlOiB0aGlzLmFwcGVhcmFuY2UsXG4gICAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgc2hhcGU6IHRoaXMuc2hhcGUsXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW1pdEN1cnJlbnRWYWx1ZSh0b2dnbGVCdXR0b25zOiBOYkJ1dHRvblRvZ2dsZURpcmVjdGl2ZVtdKTogdm9pZCB7XG4gICAgY29uc3QgcHJlc3NlZFRvZ2dsZVZhbHVlcyA9IHRvZ2dsZUJ1dHRvbnNcbiAgICAgIC5maWx0ZXIoKGI6IE5iQnV0dG9uVG9nZ2xlRGlyZWN0aXZlKSA9PiBiLnByZXNzZWQgJiYgdHlwZW9mIGIudmFsdWUgIT09ICd1bmRlZmluZWQnKVxuICAgICAgLm1hcCgoYjogTmJCdXR0b25Ub2dnbGVEaXJlY3RpdmUpID0+IGIudmFsdWUpO1xuXG4gICAgLy8gUHJldmVudCBtdWx0aXBsZSBlbWlzc2lvbnMgb2YgZW1wdHkgdmFsdWUuXG4gICAgaWYgKHByZXNzZWRUb2dnbGVWYWx1ZXMubGVuZ3RoID09PSAwICYmIHRoaXMubGFzdEVtaXR0ZWRWYWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQocHJlc3NlZFRvZ2dsZVZhbHVlcyk7XG4gICAgdGhpcy5sYXN0RW1pdHRlZFZhbHVlID0gcHJlc3NlZFRvZ2dsZVZhbHVlcztcbiAgfVxufVxuIl19