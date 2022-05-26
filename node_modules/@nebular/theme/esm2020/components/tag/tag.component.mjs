/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { Subject } from 'rxjs';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
import * as i2 from "../icon/icon.component";
import * as i3 from "@angular/common";
let tagUniqueId = 0;
/**
 *
 * To show a cross on a tag and enable `remove` event add the `removable` attribute.
 * @stacked-example(Removable tags, tag/tag-removable.component)
 *
 * You can change appearance via `appearance` input:
 * @stacked-example(Tag Appearance, tag/tag-appearance.component)
 *
 * You can change status via `status` input:
 * @stacked-example(Tag Status, tag/tag-status.component)
 *
 * @styles
 *
 * tag-text-font-family:
 * tag-text-transform:
 * tag-border-width:
 * tag-border-style:
 * tag-border-radius:
 * tag-tiny-text-font-size:
 * tag-tiny-text-font-weight:
 * tag-tiny-text-line-height:
 * tag-tiny-padding:
 * tag-tiny-close-offset:
 * tag-small-text-font-size:
 * tag-small-text-font-weight:
 * tag-small-text-line-height:
 * tag-small-padding:
 * tag-small-close-offset:
 * tag-medium-text-font-size:
 * tag-medium-text-font-weight:
 * tag-medium-text-line-height:
 * tag-medium-padding:
 * tag-medium-close-offset:
 * tag-large-text-font-size:
 * tag-large-text-font-weight:
 * tag-large-text-line-height:
 * tag-large-padding:
 * tag-large-close-offset:
 * tag-giant-text-font-size:
 * tag-giant-text-font-weight:
 * tag-giant-text-line-height:
 * tag-giant-padding:
 * tag-giant-close-offset:
 * tag-filled-basic-background-color:
 * tag-filled-basic-border-color:
 * tag-filled-basic-text-color:
 * tag-filled-basic-active-background-color:
 * tag-filled-basic-active-border-color:
 * tag-filled-basic-hover-background-color:
 * tag-filled-basic-hover-border-color:
 * tag-filled-basic-selected-background-color:
 * tag-filled-basic-selected-border-color:
 * tag-filled-primary-background-color:
 * tag-filled-primary-border-color:
 * tag-filled-primary-text-color:
 * tag-filled-primary-active-background-color:
 * tag-filled-primary-active-border-color:
 * tag-filled-primary-hover-background-color:
 * tag-filled-primary-hover-border-color:
 * tag-filled-primary-selected-background-color:
 * tag-filled-primary-selected-border-color:
 * tag-filled-success-background-color:
 * tag-filled-success-border-color:
 * tag-filled-success-text-color:
 * tag-filled-success-active-background-color:
 * tag-filled-success-active-border-color:
 * tag-filled-success-hover-background-color:
 * tag-filled-success-hover-border-color:
 * tag-filled-success-selected-background-color:
 * tag-filled-success-selected-border-color:
 * tag-filled-info-background-color:
 * tag-filled-info-border-color:
 * tag-filled-info-text-color:
 * tag-filled-info-active-background-color:
 * tag-filled-info-active-border-color:
 * tag-filled-info-hover-background-color:
 * tag-filled-info-hover-border-color:
 * tag-filled-info-selected-background-color:
 * tag-filled-info-selected-border-color:
 * tag-filled-warning-background-color:
 * tag-filled-warning-border-color:
 * tag-filled-warning-text-color:
 * tag-filled-warning-active-background-color:
 * tag-filled-warning-active-border-color:
 * tag-filled-warning-hover-background-color:
 * tag-filled-warning-hover-border-color:
 * tag-filled-warning-selected-background-color:
 * tag-filled-warning-selected-border-color:
 * tag-filled-danger-background-color:
 * tag-filled-danger-border-color:
 * tag-filled-danger-text-color:
 * tag-filled-danger-active-background-color:
 * tag-filled-danger-active-border-color:
 * tag-filled-danger-hover-background-color:
 * tag-filled-danger-hover-border-color:
 * tag-filled-danger-selected-background-color:
 * tag-filled-danger-selected-border-color:
 * tag-filled-control-background-color:
 * tag-filled-control-border-color:
 * tag-filled-control-text-color:
 * tag-filled-control-active-background-color:
 * tag-filled-control-active-border-color:
 * tag-filled-control-hover-background-color:
 * tag-filled-control-hover-border-color:
 * tag-filled-control-selected-background-color:
 * tag-filled-control-selected-border-color:
 * tag-outline-basic-background-color:
 * tag-outline-basic-border-color:
 * tag-outline-basic-text-color:
 * tag-outline-basic-active-background-color:
 * tag-outline-basic-active-border-color:
 * tag-outline-basic-active-text-color:
 * tag-outline-basic-hover-background-color:
 * tag-outline-basic-hover-border-color:
 * tag-outline-basic-hover-text-color:
 * tag-outline-basic-selected-background-color:
 * tag-outline-basic-selected-border-color:
 * tag-outline-basic-selected-text-color:
 * tag-outline-primary-background-color:
 * tag-outline-primary-border-color:
 * tag-outline-primary-text-color:
 * tag-outline-primary-active-background-color:
 * tag-outline-primary-active-border-color:
 * tag-outline-primary-active-text-color:
 * tag-outline-primary-hover-background-color:
 * tag-outline-primary-hover-border-color:
 * tag-outline-primary-hover-text-color:
 * tag-outline-primary-selected-background-color:
 * tag-outline-primary-selected-border-color:
 * tag-outline-primary-selected-text-color:
 * tag-outline-success-background-color:
 * tag-outline-success-border-color:
 * tag-outline-success-text-color:
 * tag-outline-success-active-background-color:
 * tag-outline-success-active-border-color:
 * tag-outline-success-active-text-color:
 * tag-outline-success-hover-background-color:
 * tag-outline-success-hover-border-color:
 * tag-outline-success-hover-text-color:
 * tag-outline-success-selected-background-color:
 * tag-outline-success-selected-border-color:
 * tag-outline-success-selected-text-color:
 * tag-outline-info-background-color:
 * tag-outline-info-border-color:
 * tag-outline-info-text-color:
 * tag-outline-info-active-background-color:
 * tag-outline-info-active-border-color:
 * tag-outline-info-active-text-color:
 * tag-outline-info-hover-background-color:
 * tag-outline-info-hover-border-color:
 * tag-outline-info-hover-text-color:
 * tag-outline-info-selected-background-color:
 * tag-outline-info-selected-border-color:
 * tag-outline-info-selected-text-color:
 * tag-outline-warning-background-color:
 * tag-outline-warning-border-color:
 * tag-outline-warning-text-color:
 * tag-outline-warning-active-background-color:
 * tag-outline-warning-active-border-color:
 * tag-outline-warning-active-text-color:
 * tag-outline-warning-hover-background-color:
 * tag-outline-warning-hover-border-color:
 * tag-outline-warning-hover-text-color:
 * tag-outline-warning-selected-background-color:
 * tag-outline-warning-selected-border-color:
 * tag-outline-warning-selected-text-color:
 * tag-outline-danger-background-color:
 * tag-outline-danger-border-color:
 * tag-outline-danger-text-color:
 * tag-outline-danger-active-background-color:
 * tag-outline-danger-active-border-color:
 * tag-outline-danger-active-text-color:
 * tag-outline-danger-hover-background-color:
 * tag-outline-danger-hover-border-color:
 * tag-outline-danger-hover-text-color:
 * tag-outline-danger-selected-background-color:
 * tag-outline-danger-selected-border-color:
 * tag-outline-danger-selected-text-color:
 * tag-outline-control-background-color:
 * tag-outline-control-border-color:
 * tag-outline-control-text-color:
 * tag-outline-control-active-background-color:
 * tag-outline-control-active-border-color:
 * tag-outline-control-active-text-color:
 * tag-outline-control-hover-background-color:
 * tag-outline-control-hover-border-color:
 * tag-outline-control-hover-text-color:
 * tag-outline-control-selected-background-color:
 * tag-outline-control-selected-border-color:
 * tag-outline-control-selected-text-color:
 */
export class NbTagComponent {
    constructor(_hostElement, cd, renderer, zone, statusService) {
        this._hostElement = _hostElement;
        this.cd = cd;
        this.renderer = renderer;
        this.zone = zone;
        this.statusService = statusService;
        this._destroy$ = new Subject();
        this._selected = false;
        this._removable = false;
        /**
         * Tag appearance: `filled`, `outline`.
         */
        this.appearance = 'filled';
        /**
         * Tag status: `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`.
         */
        this.status = 'basic';
        /**
         * Tag size: `tiny`, `small`, `medium`, `large`, `giant`.
         */
        this.size = 'medium';
        this.role = 'option';
        /**
         * Emits when the user removes the tag
         * (whether by clicking on the remove button or by pressing `delete` or `backspace` key).
         */
        this.remove = new EventEmitter();
        this.selectedChange = new EventEmitter();
        this._isActive = false;
        this._id = `nb-tag-${tagUniqueId++}`;
    }
    get destroy$() {
        return this._destroy$.asObservable();
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        if (this.selected !== convertToBoolProperty(value)) {
            this._selected = !this.selected;
            this.selectedChange.emit({ tag: this, selected: this.selected });
        }
    }
    /**
     * Controls whether the user can remove a tag or not.
     */
    get removable() {
        return this._removable;
    }
    set removable(value) {
        this._removable = convertToBoolProperty(value);
    }
    get filled() {
        return this.appearance === 'filled';
    }
    set filled(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'filled';
        }
    }
    get outline() {
        return this.appearance === 'outline';
    }
    set outline(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'outline';
        }
    }
    get basic() {
        return this.status === 'basic';
    }
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get info() {
        return this.status === 'info';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get control() {
        return this.status === 'control';
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    _remove() {
        if (this.removable) {
            this.remove.emit(this);
        }
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this._hostElement.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this._destroy$.next(this);
    }
    _toggleSelection() {
        this.selected = !this.selected;
        this.cd.markForCheck();
    }
    setActiveStyles() {
        if (!this._isActive) {
            this._isActive = true;
            this.cd.markForCheck();
        }
    }
    setInactiveStyles() {
        if (this._isActive) {
            this._isActive = false;
            this.cd.markForCheck();
        }
    }
}
NbTagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTagComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbTagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbTagComponent, selector: "nb-tag", inputs: { text: "text", selected: "selected", removable: "removable", appearance: "appearance", status: "status", size: "size", role: "role" }, outputs: { remove: "remove", selectedChange: "selectedChange" }, host: { listeners: { "keydown.delete": "_remove()", "keydown.backspace": "_remove()" }, properties: { "class.selected": "this.selected", "attr.aria-selected": "this.selected", "attr.role": "this.role", "class.active": "this._isActive", "attr.id": "this._id", "class.appearance-filled": "this.filled", "class.appearance-outline": "this.outline", "class.status-basic": "this.basic", "class.status-primary": "this.primary", "class.status-success": "this.success", "class.status-info": "this.info", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-control": "this.control", "class.size-tiny": "this.tiny", "class.size-small": "this.small", "class.size-medium": "this.medium", "class.size-large": "this.large", "class.size-giant": "this.giant", "class": "this.additionalClasses" } }, exportAs: ["nbTag"], ngImport: i0, template: "{{ text }}\n<nb-icon *ngIf=\"removable\"\n         (click)=\"_remove()\"\n         class=\"nb-tag-remove size-{{size}}\"\n         icon=\"close-outline\"\n         pack=\"nebular-essentials\"\n         aria-hidden=\"true\">\n</nb-icon>\n", components: [{ type: i2.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-tag', exportAs: 'nbTag', changeDetection: ChangeDetectionStrategy.OnPush, template: "{{ text }}\n<nb-icon *ngIf=\"removable\"\n         (click)=\"_remove()\"\n         class=\"nb-tag-remove size-{{size}}\"\n         icon=\"close-outline\"\n         pack=\"nebular-essentials\"\n         aria-hidden=\"true\">\n</nb-icon>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i1.NbStatusService }]; }, propDecorators: { text: [{
                type: Input
            }], selected: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.selected']
            }, {
                type: HostBinding,
                args: ['attr.aria-selected']
            }], removable: [{
                type: Input
            }], appearance: [{
                type: Input
            }], status: [{
                type: Input
            }], size: [{
                type: Input
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], remove: [{
                type: Output
            }], selectedChange: [{
                type: Output
            }], _isActive: [{
                type: HostBinding,
                args: ['class.active']
            }], _id: [{
                type: HostBinding,
                args: ['attr.id']
            }], filled: [{
                type: HostBinding,
                args: ['class.appearance-filled']
            }], outline: [{
                type: HostBinding,
                args: ['class.appearance-outline']
            }], basic: [{
                type: HostBinding,
                args: ['class.status-basic']
            }], primary: [{
                type: HostBinding,
                args: ['class.status-primary']
            }], success: [{
                type: HostBinding,
                args: ['class.status-success']
            }], info: [{
                type: HostBinding,
                args: ['class.status-info']
            }], warning: [{
                type: HostBinding,
                args: ['class.status-warning']
            }], danger: [{
                type: HostBinding,
                args: ['class.status-danger']
            }], control: [{
                type: HostBinding,
                args: ['class.status-control']
            }], tiny: [{
                type: HostBinding,
                args: ['class.size-tiny']
            }], small: [{
                type: HostBinding,
                args: ['class.size-small']
            }], medium: [{
                type: HostBinding,
                args: ['class.size-medium']
            }], large: [{
                type: HostBinding,
                args: ['class.size-large']
            }], giant: [{
                type: HostBinding,
                args: ['class.size-giant']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }], _remove: [{
                type: HostListener,
                args: ['keydown.delete']
            }, {
                type: HostListener,
                args: ['keydown.backspace']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFrQixNQUFNLFlBQVksQ0FBQzs7Ozs7QUFXbkUsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBRXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOExHO0FBT0gsTUFBTSxPQUFPLGNBQWM7SUEwS3pCLFlBQ1MsWUFBd0IsRUFDckIsRUFBcUIsRUFDckIsUUFBbUIsRUFDbkIsSUFBWSxFQUNaLGFBQThCO1FBSmpDLGlCQUFZLEdBQVosWUFBWSxDQUFZO1FBQ3JCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQTdLbEMsY0FBUyxHQUE0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QW9CO2dCQU03QixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixJQUFJO3NCQURQLFdBQVc7dUJBQUMsbUJBQW1CO2dCQU01QixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixNQUFNO3NCQURULFdBQVc7dUJBQUMscUJBQXFCO2dCQU05QixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixJQUFJO3NCQURQLFdBQVc7dUJBQUMsaUJBQWlCO2dCQU0xQixLQUFLO3NCQURSLFdBQVc7dUJBQUMsa0JBQWtCO2dCQU0zQixNQUFNO3NCQURULFdBQVc7dUJBQUMsbUJBQW1CO2dCQU01QixLQUFLO3NCQURSLFdBQVc7dUJBQUMsa0JBQWtCO2dCQU0zQixLQUFLO3NCQURSLFdBQVc7dUJBQUMsa0JBQWtCO2dCQU0zQixpQkFBaUI7c0JBRHBCLFdBQVc7dUJBQUMsT0FBTztnQkFVcEIsT0FBTztzQkFGTixZQUFZO3VCQUFDLGdCQUFnQjs7c0JBQzdCLFlBQVk7dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RhdHVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJIaWdobGlnaHRhYmxlT3B0aW9uIH0gZnJvbSAnLi4vY2RrL2ExMXkvZGVzY2VuZGFudC1rZXktbWFuYWdlcic7XG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sUHJvcGVydHksIE5iQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzIH0gZnJvbSAnLi4vY29tcG9uZW50LXN0YXR1cyc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudFNpemUgfSBmcm9tICcuLi9jb21wb25lbnQtc2l6ZSc7XG5cbmV4cG9ydCB0eXBlIE5iVGFnQXBwZWFyYW5jZSA9ICdmaWxsZWQnIHwgJ291dGxpbmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5iVGFnU2VsZWN0aW9uQ2hhbmdlIHtcbiAgdGFnOiBOYlRhZ0NvbXBvbmVudDtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmxldCB0YWdVbmlxdWVJZCA9IDA7XG5cbi8qKlxuICpcbiAqIFRvIHNob3cgYSBjcm9zcyBvbiBhIHRhZyBhbmQgZW5hYmxlIGByZW1vdmVgIGV2ZW50IGFkZCB0aGUgYHJlbW92YWJsZWAgYXR0cmlidXRlLlxuICogQHN0YWNrZWQtZXhhbXBsZShSZW1vdmFibGUgdGFncywgdGFnL3RhZy1yZW1vdmFibGUuY29tcG9uZW50KVxuICpcbiAqIFlvdSBjYW4gY2hhbmdlIGFwcGVhcmFuY2UgdmlhIGBhcHBlYXJhbmNlYCBpbnB1dDpcbiAqIEBzdGFja2VkLWV4YW1wbGUoVGFnIEFwcGVhcmFuY2UsIHRhZy90YWctYXBwZWFyYW5jZS5jb21wb25lbnQpXG4gKlxuICogWW91IGNhbiBjaGFuZ2Ugc3RhdHVzIHZpYSBgc3RhdHVzYCBpbnB1dDpcbiAqIEBzdGFja2VkLWV4YW1wbGUoVGFnIFN0YXR1cywgdGFnL3RhZy1zdGF0dXMuY29tcG9uZW50KVxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiB0YWctdGV4dC1mb250LWZhbWlseTpcbiAqIHRhZy10ZXh0LXRyYW5zZm9ybTpcbiAqIHRhZy1ib3JkZXItd2lkdGg6XG4gKiB0YWctYm9yZGVyLXN0eWxlOlxuICogdGFnLWJvcmRlci1yYWRpdXM6XG4gKiB0YWctdGlueS10ZXh0LWZvbnQtc2l6ZTpcbiAqIHRhZy10aW55LXRleHQtZm9udC13ZWlnaHQ6XG4gKiB0YWctdGlueS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogdGFnLXRpbnktcGFkZGluZzpcbiAqIHRhZy10aW55LWNsb3NlLW9mZnNldDpcbiAqIHRhZy1zbWFsbC10ZXh0LWZvbnQtc2l6ZTpcbiAqIHRhZy1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OlxuICogdGFnLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6XG4gKiB0YWctc21hbGwtcGFkZGluZzpcbiAqIHRhZy1zbWFsbC1jbG9zZS1vZmZzZXQ6XG4gKiB0YWctbWVkaXVtLXRleHQtZm9udC1zaXplOlxuICogdGFnLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OlxuICogdGFnLW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogdGFnLW1lZGl1bS1wYWRkaW5nOlxuICogdGFnLW1lZGl1bS1jbG9zZS1vZmZzZXQ6XG4gKiB0YWctbGFyZ2UtdGV4dC1mb250LXNpemU6XG4gKiB0YWctbGFyZ2UtdGV4dC1mb250LXdlaWdodDpcbiAqIHRhZy1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogdGFnLWxhcmdlLXBhZGRpbmc6XG4gKiB0YWctbGFyZ2UtY2xvc2Utb2Zmc2V0OlxuICogdGFnLWdpYW50LXRleHQtZm9udC1zaXplOlxuICogdGFnLWdpYW50LXRleHQtZm9udC13ZWlnaHQ6XG4gKiB0YWctZ2lhbnQtdGV4dC1saW5lLWhlaWdodDpcbiAqIHRhZy1naWFudC1wYWRkaW5nOlxuICogdGFnLWdpYW50LWNsb3NlLW9mZnNldDpcbiAqIHRhZy1maWxsZWQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtYmFzaWMtYm9yZGVyLWNvbG9yOlxuICogdGFnLWZpbGxlZC1iYXNpYy10ZXh0LWNvbG9yOlxuICogdGFnLWZpbGxlZC1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1maWxsZWQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogdGFnLWZpbGxlZC1iYXNpYy1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLWZpbGxlZC1iYXNpYy1zZWxlY3RlZC1ib3JkZXItY29sb3I6XG4gKiB0YWctZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtcHJpbWFyeS1ib3JkZXItY29sb3I6XG4gKiB0YWctZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogdGFnLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOlxuICogdGFnLWZpbGxlZC1wcmltYXJ5LXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctZmlsbGVkLXByaW1hcnktc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOlxuICogdGFnLWZpbGxlZC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctZmlsbGVkLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOlxuICogdGFnLWZpbGxlZC1zdWNjZXNzLXRleHQtY29sb3I6XG4gKiB0YWctZmlsbGVkLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctZmlsbGVkLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1maWxsZWQtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1maWxsZWQtc3VjY2Vzcy1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLWZpbGxlZC1zdWNjZXNzLXNlbGVjdGVkLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1maWxsZWQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLWZpbGxlZC1pbmZvLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1maWxsZWQtaW5mby10ZXh0LWNvbG9yOlxuICogdGFnLWZpbGxlZC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLWZpbGxlZC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiB0YWctZmlsbGVkLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0YWctZmlsbGVkLWluZm8tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtaW5mby1zZWxlY3RlZC1ib3JkZXItY29sb3I6XG4gKiB0YWctZmlsbGVkLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtd2FybmluZy1ib3JkZXItY29sb3I6XG4gKiB0YWctZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogdGFnLWZpbGxlZC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctZmlsbGVkLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOlxuICogdGFnLWZpbGxlZC13YXJuaW5nLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctZmlsbGVkLXdhcm5pbmctc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOlxuICogdGFnLWZpbGxlZC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtZGFuZ2VyLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3I6XG4gKiB0YWctZmlsbGVkLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiB0YWctZmlsbGVkLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLWZpbGxlZC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOlxuICogdGFnLWZpbGxlZC1kYW5nZXItc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtZGFuZ2VyLXNlbGVjdGVkLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1maWxsZWQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLWZpbGxlZC1jb250cm9sLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1maWxsZWQtY29udHJvbC10ZXh0LWNvbG9yOlxuICogdGFnLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiB0YWctZmlsbGVkLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0YWctZmlsbGVkLWNvbnRyb2wtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1maWxsZWQtY29udHJvbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6XG4gKiB0YWctb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yOlxuICogdGFnLW91dGxpbmUtYmFzaWMtdGV4dC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLW91dGxpbmUtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLWJhc2ljLWFjdGl2ZS10ZXh0LWNvbG9yOlxuICogdGFnLW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLWJhc2ljLWhvdmVyLXRleHQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1iYXNpYy1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLW91dGxpbmUtYmFzaWMtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOlxuICogdGFnLW91dGxpbmUtYmFzaWMtc2VsZWN0ZWQtdGV4dC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOlxuICogdGFnLW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yOlxuICogdGFnLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXByaW1hcnktYWN0aXZlLXRleHQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXByaW1hcnktc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXByaW1hcnktc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOlxuICogdGFnLW91dGxpbmUtcHJpbWFyeS1zZWxlY3RlZC10ZXh0LWNvbG9yOlxuICogdGFnLW91dGxpbmUtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3I6XG4gKiB0YWctb3V0bGluZS1zdWNjZXNzLXRleHQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOlxuICogdGFnLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtdGV4dC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogdGFnLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci10ZXh0LWNvbG9yOlxuICogdGFnLW91dGxpbmUtc3VjY2Vzcy1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLW91dGxpbmUtc3VjY2Vzcy1zZWxlY3RlZC1ib3JkZXItY29sb3I6XG4gKiB0YWctb3V0bGluZS1zdWNjZXNzLXNlbGVjdGVkLXRleHQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLWluZm8tdGV4dC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiB0YWctb3V0bGluZS1pbmZvLWFjdGl2ZS10ZXh0LWNvbG9yOlxuICogdGFnLW91dGxpbmUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLW91dGxpbmUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0YWctb3V0bGluZS1pbmZvLWhvdmVyLXRleHQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1pbmZvLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1pbmZvLXNlbGVjdGVkLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLWluZm8tc2VsZWN0ZWQtdGV4dC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOlxuICogdGFnLW91dGxpbmUtd2FybmluZy10ZXh0LWNvbG9yOlxuICogdGFnLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLXRleHQtY29sb3I6XG4gKiB0YWctb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctb3V0bGluZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXdhcm5pbmctaG92ZXItdGV4dC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXdhcm5pbmctc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLXdhcm5pbmctc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOlxuICogdGFnLW91dGxpbmUtd2FybmluZy1zZWxlY3RlZC10ZXh0LWNvbG9yOlxuICogdGFnLW91dGxpbmUtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1kYW5nZXItYm9yZGVyLWNvbG9yOlxuICogdGFnLW91dGxpbmUtZGFuZ2VyLXRleHQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLWRhbmdlci1hY3RpdmUtdGV4dC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLWRhbmdlci1ob3Zlci10ZXh0LWNvbG9yOlxuICogdGFnLW91dGxpbmUtZGFuZ2VyLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1kYW5nZXItc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOlxuICogdGFnLW91dGxpbmUtZGFuZ2VyLXNlbGVjdGVkLXRleHQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLWNvbnRyb2wtdGV4dC1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiB0YWctb3V0bGluZS1jb250cm9sLWFjdGl2ZS10ZXh0LWNvbG9yOlxuICogdGFnLW91dGxpbmUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdGFnLW91dGxpbmUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiB0YWctb3V0bGluZS1jb250cm9sLWhvdmVyLXRleHQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1jb250cm9sLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiB0YWctb3V0bGluZS1jb250cm9sLXNlbGVjdGVkLWJvcmRlci1jb2xvcjpcbiAqIHRhZy1vdXRsaW5lLWNvbnRyb2wtc2VsZWN0ZWQtdGV4dC1jb2xvcjpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItdGFnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy5jb21wb25lbnQuaHRtbCcsXG4gIGV4cG9ydEFzOiAnbmJUYWcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJUYWdDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE5iSGlnaGxpZ2h0YWJsZU9wdGlvbiB7XG5cbiAgcHJpdmF0ZSBfZGVzdHJveSQ6IFN1YmplY3Q8TmJUYWdDb21wb25lbnQ+ID0gbmV3IFN1YmplY3Q8TmJUYWdDb21wb25lbnQ+KCk7XG5cbiAgZ2V0IGRlc3Ryb3kkKCk6IE9ic2VydmFibGU8TmJUYWdDb21wb25lbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdHJveSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogVGFnIHRleHQuXG4gICAqL1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZWxlY3RlZCcpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXNlbGVjdGVkJylcbiAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCAhPT0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKSkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh7IHRhZzogdGhpcywgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQgfSk7XG4gICAgfVxuICB9XG4gIHByb3RlY3RlZCBfc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NlbGVjdGVkOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogQ29udHJvbHMgd2hldGhlciB0aGUgdXNlciBjYW4gcmVtb3ZlIGEgdGFnIG9yIG5vdC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCByZW1vdmFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92YWJsZTtcbiAgfVxuICBzZXQgcmVtb3ZhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVtb3ZhYmxlID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX3JlbW92YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVtb3ZhYmxlOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogVGFnIGFwcGVhcmFuY2U6IGBmaWxsZWRgLCBgb3V0bGluZWAuXG4gICAqL1xuICBASW5wdXQoKSBhcHBlYXJhbmNlOiBOYlRhZ0FwcGVhcmFuY2UgPSAnZmlsbGVkJztcblxuICAvKipcbiAgICogVGFnIHN0YXR1czogYGJhc2ljYCwgYHByaW1hcnlgLCBgaW5mb2AsIGBzdWNjZXNzYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCwgYGNvbnRyb2xgLlxuICAgKi9cbiAgQElucHV0KCkgc3RhdHVzOiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzID0gJ2Jhc2ljJztcblxuICAvKipcbiAgICogVGFnIHNpemU6IGB0aW55YCwgYHNtYWxsYCwgYG1lZGl1bWAsIGBsYXJnZWAsIGBnaWFudGAuXG4gICAqL1xuICBASW5wdXQoKSBzaXplOiBOYkNvbXBvbmVudFNpemUgPSAnbWVkaXVtJztcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHJvbGU6IHN0cmluZyA9ICdvcHRpb24nO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHRoZSB1c2VyIHJlbW92ZXMgdGhlIHRhZ1xuICAgKiAod2hldGhlciBieSBjbGlja2luZyBvbiB0aGUgcmVtb3ZlIGJ1dHRvbiBvciBieSBwcmVzc2luZyBgZGVsZXRlYCBvciBgYmFja3NwYWNlYCBrZXkpLlxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlbW92ZTogRXZlbnRFbWl0dGVyPE5iVGFnQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmJUYWdDb21wb25lbnQ+KCk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TmJUYWdTZWxlY3Rpb25DaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxOYlRhZ1NlbGVjdGlvbkNoYW5nZT4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIF9pc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gIF9pZDogc3RyaW5nID0gYG5iLXRhZy0ke3RhZ1VuaXF1ZUlkKyt9YDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFwcGVhcmFuY2UtZmlsbGVkJylcbiAgZ2V0IGZpbGxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlYXJhbmNlID09PSAnZmlsbGVkJztcbiAgfVxuICBzZXQgZmlsbGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9ICdmaWxsZWQnO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYXBwZWFyYW5jZS1vdXRsaW5lJylcbiAgZ2V0IG91dGxpbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZWFyYW5jZSA9PT0gJ291dGxpbmUnO1xuICB9XG4gIHNldCBvdXRsaW5lKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9ICdvdXRsaW5lJztcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1iYXNpYycpXG4gIGdldCBiYXNpYygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdiYXNpYyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1wcmltYXJ5JylcbiAgZ2V0IHByaW1hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAncHJpbWFyeSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1zdWNjZXNzJylcbiAgZ2V0IHN1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnc3VjY2Vzcyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1pbmZvJylcbiAgZ2V0IGluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnaW5mbyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy13YXJuaW5nJylcbiAgZ2V0IHdhcm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnd2FybmluZyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1kYW5nZXInKVxuICBnZXQgZGFuZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Rhbmdlcic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1jb250cm9sJylcbiAgZ2V0IGNvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnY29udHJvbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtdGlueScpXG4gIGdldCB0aW55KCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICd0aW55JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1zbWFsbCcpXG4gIGdldCBzbWFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnc21hbGwnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLW1lZGl1bScpXG4gIGdldCBtZWRpdW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ21lZGl1bSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtbGFyZ2UnKVxuICBnZXQgbGFyZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2xhcmdlJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1naWFudCcpXG4gIGdldCBnaWFudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnZ2lhbnQnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBhZGRpdGlvbmFsQ2xhc3NlcygpOiBzdHJpbmdbXSB7XG4gICAgaWYgKHRoaXMuc3RhdHVzU2VydmljZS5pc0N1c3RvbVN0YXR1cyh0aGlzLnN0YXR1cykpIHtcbiAgICAgIHJldHVybiBbdGhpcy5zdGF0dXNTZXJ2aWNlLmdldFN0YXR1c0NsYXNzKHRoaXMuc3RhdHVzKV07XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZGVsZXRlJylcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5iYWNrc3BhY2UnKVxuICBfcmVtb3ZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlbW92YWJsZSkge1xuICAgICAgdGhpcy5yZW1vdmUuZW1pdCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2hvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgc3RhdHVzU2VydmljZTogTmJTdGF0dXNTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIFRPRE86ICMyMjU0XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbmItdHJhbnNpdGlvbicpO1xuICAgIH0pKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQodGhpcyk7XG4gIH1cblxuICBfdG9nZ2xlU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgc2V0QWN0aXZlU3R5bGVzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5hY3RpdmVTdHlsZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbn1cbiIsInt7IHRleHQgfX1cbjxuYi1pY29uICpuZ0lmPVwicmVtb3ZhYmxlXCJcbiAgICAgICAgIChjbGljayk9XCJfcmVtb3ZlKClcIlxuICAgICAgICAgY2xhc3M9XCJuYi10YWctcmVtb3ZlIHNpemUte3tzaXplfX1cIlxuICAgICAgICAgaWNvbj1cImNsb3NlLW91dGxpbmVcIlxuICAgICAgICAgcGFjaz1cIm5lYnVsYXItZXNzZW50aWFsc1wiXG4gICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cbjwvbmItaWNvbj5cbiJdfQ==