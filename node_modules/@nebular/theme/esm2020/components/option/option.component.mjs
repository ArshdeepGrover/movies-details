/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Inject, Input, Optional, Output, } from '@angular/core';
import { Subject } from 'rxjs';
import { convertToBoolProperty } from '../helpers';
import { NB_SELECT_INJECTION_TOKEN } from '../select/select-injection-tokens';
import * as i0 from "@angular/core";
import * as i1 from "../checkbox/checkbox.component";
import * as i2 from "@angular/common";
// Component class scoped counter for aria attributes.
let lastOptionId = 0;
/**
 * NbOptionComponent
 *
 * @styles
 *
 * option-background-color:
 * option-text-color:
 * option-text-font-family:
 * option-hover-background-color:
 * option-hover-text-color:
 * option-active-background-color:
 * option-active-text-color:
 * option-focus-background-color:
 * option-focus-text-color:
 * option-selected-background-color:
 * option-selected-text-color:
 * option-selected-hover-background-color:
 * option-selected-hover-text-color:
 * option-selected-active-background-color:
 * option-selected-active-text-color:
 * option-selected-focus-background-color:
 * option-selected-focus-text-color:
 * option-disabled-background-color:
 * option-disabled-text-color:
 * option-tiny-text-font-size:
 * option-tiny-text-font-weight:
 * option-tiny-text-line-height:
 * option-tiny-padding:
 * option-small-text-font-size:
 * option-small-text-font-weight:
 * option-small-text-line-height:
 * option-small-padding:
 * option-medium-text-font-size:
 * option-medium-text-font-weight:
 * option-medium-text-line-height:
 * option-medium-padding:
 * option-large-text-font-size:
 * option-large-text-font-weight:
 * option-large-text-line-height:
 * option-large-padding:
 * option-giant-text-font-size:
 * option-giant-text-font-weight:
 * option-giant-text-line-height:
 * option-giant-padding:
 **/
export class NbOptionComponent {
    constructor(parent, elementRef, cd, zone, renderer) {
        this.elementRef = elementRef;
        this.cd = cd;
        this.zone = zone;
        this.renderer = renderer;
        this.disabledByGroup = false;
        this._disabled = false;
        /**
         * Fires value when option selection change.
         * */
        this.selectionChange = new EventEmitter();
        /**
         * Fires when option clicked
         */
        this.click$ = new Subject();
        this.selected = false;
        this.alive = true;
        /**
         * Component scoped id for aria attributes.
         * */
        this.id = `nb-option-${lastOptionId++}`;
        this._active = false;
        this.parent = parent;
    }
    get disabled() {
        return this._disabled || this.disabledByGroup;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
    }
    get click() {
        return this.click$.asObservable();
    }
    ngOnDestroy() {
        this.alive = false;
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.elementRef.nativeElement, 'nb-transition');
        }));
    }
    /**
     * Determines should we render checkbox.
     * */
    get withCheckbox() {
        return this.multiple && this.value != null;
    }
    get content() {
        return this.elementRef.nativeElement.textContent;
    }
    // TODO: replace with isShowCheckbox property to control this behaviour outside, issues/1965
    get multiple() {
        // We check parent existing because parent can be NbSelectComponent or
        // NbAutocomplete and `miltiple` property exists only in NbSelectComponent
        return this.parent ? this.parent.multiple : false;
    }
    get selectedClass() {
        return this.selected;
    }
    get disabledAttribute() {
        return this.disabled ? '' : null;
    }
    get tabindex() {
        return '-1';
    }
    get activeClass() {
        return this._active;
    }
    ;
    onClick(event) {
        this.click$.next(this);
        // Prevent scroll on space click, etc.
        event.preventDefault();
    }
    select() {
        this.setSelection(true);
    }
    deselect() {
        this.setSelection(false);
    }
    /**
     * Sets disabled by group state and marks component for check.
     */
    setDisabledByGroupState(disabled) {
        // Check if the component still alive as the option group defer method call so the component may become destroyed.
        if (this.disabledByGroup !== disabled && this.alive) {
            this.disabledByGroup = disabled;
            this.cd.markForCheck();
        }
    }
    setSelection(selected) {
        /**
         * In case of changing options in runtime the reference to the selected option will be kept in select component.
         * This may lead to exceptions with detecting changes in destroyed component.
         *
         * Also Angular can call writeValue on destroyed view (select implements ControlValueAccessor).
         * angular/angular#27803
         * */
        if (this.alive && this.selected !== selected) {
            this.selected = selected;
            this.selectionChange.emit(this);
            this.cd.markForCheck();
        }
    }
    focus() {
        this.elementRef.nativeElement.focus();
    }
    getLabel() {
        return this.content;
    }
    setActiveStyles() {
        this._active = true;
        this.cd.markForCheck();
    }
    setInactiveStyles() {
        this._active = false;
        this.cd.markForCheck();
    }
}
NbOptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOptionComponent, deps: [{ token: NB_SELECT_INJECTION_TOKEN, optional: true }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NbOptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbOptionComponent, selector: "nb-option", inputs: { value: "value", disabled: "disabled" }, outputs: { selectionChange: "selectionChange" }, host: { listeners: { "click": "onClick($event)", "keydown.space": "onClick($event)", "keydown.enter": "onClick($event)" }, properties: { "attr.id": "this.id", "class.multiple": "this.multiple", "class.selected": "this.selectedClass", "attr.disabled": "this.disabledAttribute", "tabIndex": "this.tabindex", "class.active": "this.activeClass" } }, ngImport: i0, template: `
    <nb-checkbox *ngIf="withCheckbox"
                 [checked]="selected"
                 [disabled]="disabled"
                 aria-hidden="true">
    </nb-checkbox>
    <ng-content></ng-content>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex}:host:hover{cursor:pointer}:host nb-checkbox{display:flex;pointer-events:none}[dir=ltr] :host nb-checkbox{margin-right:.5rem}[dir=rtl] :host nb-checkbox{margin-left:.5rem}:host nb-checkbox ::ng-deep .label{padding:0}:host([disabled]){pointer-events:none}:host(.nb-transition){transition-duration:.15s;transition-property:background-color,color;transition-timing-function:ease-in}\n"], components: [{ type: i1.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["checked", "disabled", "status", "indeterminate"], outputs: ["checkedChange"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-option', changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <nb-checkbox *ngIf="withCheckbox"
                 [checked]="selected"
                 [disabled]="disabled"
                 aria-hidden="true">
    </nb-checkbox>
    <ng-content></ng-content>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex}:host:hover{cursor:pointer}:host nb-checkbox{display:flex;pointer-events:none}[dir=ltr] :host nb-checkbox{margin-right:.5rem}[dir=rtl] :host nb-checkbox{margin-left:.5rem}:host nb-checkbox ::ng-deep .label{padding:0}:host([disabled]){pointer-events:none}:host(.nb-transition){transition-duration:.15s;transition-property:background-color,color;transition-timing-function:ease-in}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NB_SELECT_INJECTION_TOKEN]
                }] }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i0.Renderer2 }]; }, propDecorators: { value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }], id: [{
                type: HostBinding,
                args: ['attr.id']
            }], multiple: [{
                type: HostBinding,
                args: ['class.multiple']
            }], selectedClass: [{
                type: HostBinding,
                args: ['class.selected']
            }], disabledAttribute: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], tabindex: [{
                type: HostBinding,
                args: ['tabIndex']
            }], activeClass: [{
                type: HostBinding,
                args: ['class.active']
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }, {
                type: HostListener,
                args: ['keydown.space', ['$event']]
            }, {
                type: HostListener,
                args: ['keydown.enter', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9vcHRpb24vb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxHQUlQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFrQixNQUFNLFlBQVksQ0FBQztBQUduRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQU45RSxzREFBc0Q7QUFDdEQsSUFBSSxZQUFZLEdBQVcsQ0FBQyxDQUFDO0FBUTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRDSTtBQWNKLE1BQU0sT0FBTyxpQkFBaUI7SUEwQzVCLFlBQTJELE1BQU0sRUFDM0MsVUFBc0IsRUFDdEIsRUFBcUIsRUFDckIsSUFBWSxFQUNaLFFBQW1CO1FBSG5CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVc7UUE1Qy9CLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBY3hCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHckM7O2FBRUs7UUFDSyxvQkFBZSxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5GOztXQUVHO1FBQ08sV0FBTSxHQUFrQyxJQUFJLE9BQU8sRUFBd0IsQ0FBQztRQUt0RixhQUFRLEdBQVksS0FBSyxD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QURkLFdBQVc7dUJBQUMsY0FBYztnQkFTM0IsT0FBTztzQkFITixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7c0JBQ2hDLFlBQVk7dUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOztzQkFDeEMsWUFBWTt1QkFBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBOZ1pvbmUsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8vIENvbXBvbmVudCBjbGFzcyBzY29wZWQgY291bnRlciBmb3IgYXJpYSBhdHRyaWJ1dGVzLlxubGV0IGxhc3RPcHRpb25JZDogbnVtYmVyID0gMDtcblxuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5LCBOYkJvb2xlYW5JbnB1dCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTmJGb2N1c2FibGVPcHRpb24gfSBmcm9tICcuLi9jZGsvYTExeS9mb2N1cy1rZXktbWFuYWdlcic7XG5pbXBvcnQgeyBOYkhpZ2hsaWdodGFibGVPcHRpb24gfSBmcm9tICcuLi9jZGsvYTExeS9kZXNjZW5kYW50LWtleS1tYW5hZ2VyJztcbmltcG9ydCB7IE5CX1NFTEVDVF9JTkpFQ1RJT05fVE9LRU4gfSBmcm9tICcuLi9zZWxlY3Qvc2VsZWN0LWluamVjdGlvbi10b2tlbnMnO1xuaW1wb3J0IHsgTmJTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5cbi8qKlxuICogTmJPcHRpb25Db21wb25lbnRcbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogb3B0aW9uLWJhY2tncm91bmQtY29sb3I6XG4gKiBvcHRpb24tdGV4dC1jb2xvcjpcbiAqIG9wdGlvbi10ZXh0LWZvbnQtZmFtaWx5OlxuICogb3B0aW9uLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBvcHRpb24taG92ZXItdGV4dC1jb2xvcjpcbiAqIG9wdGlvbi1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIG9wdGlvbi1hY3RpdmUtdGV4dC1jb2xvcjpcbiAqIG9wdGlvbi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogb3B0aW9uLWZvY3VzLXRleHQtY29sb3I6XG4gKiBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIG9wdGlvbi1zZWxlY3RlZC10ZXh0LWNvbG9yOlxuICogb3B0aW9uLXNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBvcHRpb24tc2VsZWN0ZWQtaG92ZXItdGV4dC1jb2xvcjpcbiAqIG9wdGlvbi1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIG9wdGlvbi1zZWxlY3RlZC1hY3RpdmUtdGV4dC1jb2xvcjpcbiAqIG9wdGlvbi1zZWxlY3RlZC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogb3B0aW9uLXNlbGVjdGVkLWZvY3VzLXRleHQtY29sb3I6XG4gKiBvcHRpb24tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIG9wdGlvbi1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogb3B0aW9uLXRpbnktdGV4dC1mb250LXNpemU6XG4gKiBvcHRpb24tdGlueS10ZXh0LWZvbnQtd2VpZ2h0OlxuICogb3B0aW9uLXRpbnktdGV4dC1saW5lLWhlaWdodDpcbiAqIG9wdGlvbi10aW55LXBhZGRpbmc6XG4gKiBvcHRpb24tc21hbGwtdGV4dC1mb250LXNpemU6XG4gKiBvcHRpb24tc21hbGwtdGV4dC1mb250LXdlaWdodDpcbiAqIG9wdGlvbi1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OlxuICogb3B0aW9uLXNtYWxsLXBhZGRpbmc6XG4gKiBvcHRpb24tbWVkaXVtLXRleHQtZm9udC1zaXplOlxuICogb3B0aW9uLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OlxuICogb3B0aW9uLW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogb3B0aW9uLW1lZGl1bS1wYWRkaW5nOlxuICogb3B0aW9uLWxhcmdlLXRleHQtZm9udC1zaXplOlxuICogb3B0aW9uLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6XG4gKiBvcHRpb24tbGFyZ2UtdGV4dC1saW5lLWhlaWdodDpcbiAqIG9wdGlvbi1sYXJnZS1wYWRkaW5nOlxuICogb3B0aW9uLWdpYW50LXRleHQtZm9udC1zaXplOlxuICogb3B0aW9uLWdpYW50LXRleHQtZm9udC13ZWlnaHQ6XG4gKiBvcHRpb24tZ2lhbnQtdGV4dC1saW5lLWhlaWdodDpcbiAqIG9wdGlvbi1naWFudC1wYWRkaW5nOlxuICoqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItb3B0aW9uJyxcbiAgc3R5bGVVcmxzOiBbJy4vb3B0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYi1jaGVja2JveCAqbmdJZj1cIndpdGhDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgPC9uYi1jaGVja2JveD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5iT3B0aW9uQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBOYkZvY3VzYWJsZU9wdGlvbiwgTmJIaWdobGlnaHRhYmxlT3B0aW9uIHtcblxuICBwcm90ZWN0ZWQgZGlzYWJsZWRCeUdyb3VwID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIE9wdGlvbiB2YWx1ZSB0aGF0IHdpbGwgYmUgZmlyZWQgb24gc2VsZWN0aW9uLlxuICAgKiAqL1xuICBASW5wdXQoKSB2YWx1ZTogVDtcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkIHx8IHRoaXMuZGlzYWJsZWRCeUdyb3VwO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHZhbHVlIHdoZW4gb3B0aW9uIHNlbGVjdGlvbiBjaGFuZ2UuXG4gICAqICovXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxOYk9wdGlvbkNvbXBvbmVudDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gb3B0aW9uIGNsaWNrZWRcbiAgICovXG4gIHByb3RlY3RlZCBjbGljayQ6IFN1YmplY3Q8TmJPcHRpb25Db21wb25lbnQ8VD4+ID0gbmV3IFN1YmplY3Q8TmJPcHRpb25Db21wb25lbnQ8VD4+KCk7XG4gIGdldCBjbGljaygpOiBPYnNlcnZhYmxlPE5iT3B0aW9uQ29tcG9uZW50PFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpY2skLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIHBhcmVudDogTmJTZWxlY3RDb21wb25lbnQ7XG4gIHByb3RlY3RlZCBhbGl2ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBzY29wZWQgaWQgZm9yIGFyaWEgYXR0cmlidXRlcy5cbiAgICogKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgaWQ6IHN0cmluZyA9IGBuYi1vcHRpb24tJHtsYXN0T3B0aW9uSWQrK31gO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTkJfU0VMRUNUX0lOSkVDVElPTl9UT0tFTikgcGFyZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBUT0RPOiAjMjI1NFxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICduYi10cmFuc2l0aW9uJyk7XG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgc2hvdWxkIHdlIHJlbmRlciBjaGVja2JveC5cbiAgICogKi9cbiAgZ2V0IHdpdGhDaGVja2JveCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSAmJiB0aGlzLnZhbHVlICE9IG51bGw7XG4gIH1cblxuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIH1cblxuICAvLyBUT0RPOiByZXBsYWNlIHdpdGggaXNTaG93Q2hlY2tib3ggcHJvcGVydHkgdG8gY29udHJvbCB0aGlzIGJlaGF2aW91ciBvdXRzaWRlLCBpc3N1ZXMvMTk2NVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm11bHRpcGxlJylcbiAgZ2V0IG11bHRpcGxlKCkge1xuICAgIC8vIFdlIGNoZWNrIHBhcmVudCBleGlzdGluZyBiZWNhdXNlIHBhcmVudCBjYW4gYmUgTmJTZWxlY3RDb21wb25lbnQgb3JcbiAgICAvLyBOYkF1dG9jb21wbGV0ZSBhbmQgYG1pbHRpcGxlYCBwcm9wZXJ0eSBleGlzdHMgb25seSBpbiBOYlNlbGVjdENvbXBvbmVudFxuICAgIHJldHVybiB0aGlzLnBhcmVudCA/ICh0aGlzLnBhcmVudCBhcyBOYlNlbGVjdENvbXBvbmVudCkubXVsdGlwbGUgOiBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VsZWN0ZWQnKVxuICBnZXQgc2VsZWN0ZWRDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpXG4gIGdldCBkaXNhYmxlZEF0dHJpYnV0ZSgpOiAnJyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJycgOiBudWxsO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCd0YWJJbmRleCcpXG4gIGdldCB0YWJpbmRleCgpIHtcbiAgICByZXR1cm4gJy0xJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgZ2V0IGFjdGl2ZUNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH07XG4gIHByb3RlY3RlZCBfYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNwYWNlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lbnRlcicsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsaWNrJC5uZXh0KHRoaXMpO1xuXG4gICAgLy8gUHJldmVudCBzY3JvbGwgb24gc3BhY2UgY2xpY2ssIGV0Yy5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuc2V0U2VsZWN0aW9uKHRydWUpO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5zZXRTZWxlY3Rpb24oZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZGlzYWJsZWQgYnkgZ3JvdXAgc3RhdGUgYW5kIG1hcmtzIGNvbXBvbmVudCBmb3IgY2hlY2suXG4gICAqL1xuICBzZXREaXNhYmxlZEJ5R3JvdXBTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vIENoZWNrIGlmIHRoZSBjb21wb25lbnQgc3RpbGwgYWxpdmUgYXMgdGhlIG9wdGlvbiBncm91cCBkZWZlciBtZXRob2QgY2FsbCBzbyB0aGUgY29tcG9uZW50IG1heSBiZWNvbWUgZGVzdHJveWVkLlxuICAgIGlmICh0aGlzLmRpc2FibGVkQnlHcm91cCAhPT0gZGlzYWJsZWQgJiYgdGhpcy5hbGl2ZSkge1xuICAgICAgdGhpcy5kaXNhYmxlZEJ5R3JvdXAgPSBkaXNhYmxlZDtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHNldFNlbGVjdGlvbihzZWxlY3RlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIC8qKlxuICAgICAqIEluIGNhc2Ugb2YgY2hhbmdpbmcgb3B0aW9ucyBpbiBydW50aW1lIHRoZSByZWZlcmVuY2UgdG8gdGhlIHNlbGVjdGVkIG9wdGlvbiB3aWxsIGJlIGtlcHQgaW4gc2VsZWN0IGNvbXBvbmVudC5cbiAgICAgKiBUaGlzIG1heSBsZWFkIHRvIGV4Y2VwdGlvbnMgd2l0aCBkZXRlY3RpbmcgY2hhbmdlcyBpbiBkZXN0cm95ZWQgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQWxzbyBBbmd1bGFyIGNhbiBjYWxsIHdyaXRlVmFsdWUgb24gZGVzdHJveWVkIHZpZXcgKHNlbGVjdCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yKS5cbiAgICAgKiBhbmd1bGFyL2FuZ3VsYXIjMjc4MDNcbiAgICAgKiAqL1xuICAgIGlmICh0aGlzLmFsaXZlICYmIHRoaXMuc2VsZWN0ZWQgIT09IHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgZ2V0TGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgc2V0QWN0aXZlU3R5bGVzKCk6IHZvaWQge1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNldEluYWN0aXZlU3R5bGVzKCk6IHZvaWQge1xuICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuIl19