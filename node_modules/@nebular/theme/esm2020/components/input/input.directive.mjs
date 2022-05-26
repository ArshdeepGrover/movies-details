/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, Input, HostBinding, } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { map, finalize, takeUntil } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { NbFormFieldControl } from '../form-field/form-field-control';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/a11y/a11y.module";
import * as i2 from "../../services/status.service";
/**
 * Basic input directive.
 *
 * ```html
 * <input nbInput></input>
 * ```
 *
 * ### Installation
 *
 * Import `NbInputModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbInputModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Default input size is `medium`:
 * @stacked-example(Showcase, input/input-showcase.component)
 *
 * Inputs are available in multiple colors using `status` property:
 * @stacked-example(Input Colors, input/input-colors.component)
 *
 * There are three input sizes:
 *
 * @stacked-example(Input Sizes, input/input-sizes.component)
 *
 * Inputs available in different shapes, which could be combined with the other properties:
 * @stacked-example(Input Shapes, input/input-shapes.component)
 *
 * `nbInput` could be applied to the following selectors - `input`, `textarea`:
 * @stacked-example(Input Elements, input/input-types.component)
 *
 * You can add `fullWidth` attribute to make element fill container:
 * @stacked-example(Full width inputs, input/input-full-width.component)
 *
 * Or you can bind control with form controls or ngModel:
 * @stacked-example(Input form binding, input/input-form.component)
 *
 * Use `<nb-form-field>` to add custom content to the input field.
 * First import `NbFormFieldModule`. Then put the input field and custom content into
 * `<nb-form-field>` and add `nbPrefix` or `nbSuffix` directive to the custom content.
 * `nbPrefix` puts content before input and `nbSuffix` after.
 *
 * @stacked-example(Input with icon, form-field/form-field-input.component)
 * @stacked-example(Input with button, form-field/form-field-password.component)
 *
 * @styles
 *
 * input-border-style:
 * input-border-width:
 * input-outline-color:
 * input-outline-width:
 * input-placeholder-text-font-family:
 * input-text-font-family:
 * input-basic-text-color:
 * input-basic-placeholder-text-color:
 * input-basic-background-color:
 * input-basic-border-color:
 * input-basic-focus-background-color:
 * input-basic-focus-border-color:
 * input-basic-hover-background-color:
 * input-basic-hover-border-color:
 * input-basic-disabled-background-color:
 * input-basic-disabled-border-color:
 * input-basic-disabled-text-color:
 * input-basic-disabled-placeholder-text-color:
 * input-primary-text-color:
 * input-primary-placeholder-text-color:
 * input-primary-background-color:
 * input-primary-border-color:
 * input-primary-focus-background-color:
 * input-primary-focus-border-color:
 * input-primary-hover-background-color:
 * input-primary-hover-border-color:
 * input-primary-disabled-background-color:
 * input-primary-disabled-border-color:
 * input-primary-disabled-text-color:
 * input-primary-disabled-placeholder-text-color:
 * input-success-text-color:
 * input-success-placeholder-text-color:
 * input-success-background-color:
 * input-success-border-color:
 * input-success-focus-background-color:
 * input-success-focus-border-color:
 * input-success-hover-background-color:
 * input-success-hover-border-color:
 * input-success-disabled-background-color:
 * input-success-disabled-border-color:
 * input-success-disabled-text-color:
 * input-success-disabled-placeholder-text-color:
 * input-info-text-color:
 * input-info-placeholder-text-color:
 * input-info-background-color:
 * input-info-border-color:
 * input-info-focus-background-color:
 * input-info-focus-border-color:
 * input-info-hover-background-color:
 * input-info-hover-border-color:
 * input-info-disabled-background-color:
 * input-info-disabled-border-color:
 * input-info-disabled-text-color:
 * input-info-disabled-placeholder-text-color:
 * input-warning-text-color:
 * input-warning-placeholder-text-color:
 * input-warning-background-color:
 * input-warning-border-color:
 * input-warning-focus-background-color:
 * input-warning-focus-border-color:
 * input-warning-hover-background-color:
 * input-warning-hover-border-color:
 * input-warning-disabled-background-color:
 * input-warning-disabled-border-color:
 * input-warning-disabled-text-color:
 * input-warning-disabled-placeholder-text-color:
 * input-danger-text-color:
 * input-danger-placeholder-text-color:
 * input-danger-background-color:
 * input-danger-border-color:
 * input-danger-focus-background-color:
 * input-danger-focus-border-color:
 * input-danger-hover-background-color:
 * input-danger-hover-border-color:
 * input-danger-disabled-background-color:
 * input-danger-disabled-border-color:
 * input-danger-disabled-text-color:
 * input-danger-disabled-placeholder-text-color:
 * input-control-text-color:
 * input-control-placeholder-text-color:
 * input-control-background-color:
 * input-control-border-color:
 * input-control-focus-background-color:
 * input-control-focus-border-color:
 * input-control-hover-background-color:
 * input-control-hover-border-color:
 * input-control-disabled-background-color:
 * input-control-disabled-border-color:
 * input-control-disabled-text-color:
 * input-control-disabled-placeholder-text-color:
 * input-rectangle-border-radius:
 * input-semi-round-border-radius:
 * input-round-border-radius:
 * input-tiny-text-font-size:
 * input-tiny-text-font-weight:
 * input-tiny-text-line-height:
 * input-tiny-placeholder-text-font-size:
 * input-tiny-placeholder-text-font-weight:
 * input-tiny-placeholder-text-line-height:
 * input-tiny-padding:
 * input-tiny-max-width:
 * input-small-text-font-size:
 * input-small-text-font-weight:
 * input-small-text-line-height:
 * input-small-placeholder-text-font-size:
 * input-small-placeholder-text-font-weight:
 * input-small-placeholder-text-line-height:
 * input-small-padding:
 * input-small-max-width:
 * input-medium-text-font-size:
 * input-medium-text-font-weight:
 * input-medium-text-line-height:
 * input-medium-placeholder-text-font-size:
 * input-medium-placeholder-text-font-weight:
 * input-medium-placeholder-text-line-height:
 * input-medium-padding:
 * input-medium-max-width:
 * input-large-text-font-size:
 * input-large-text-font-weight:
 * input-large-text-line-height:
 * input-large-placeholder-text-font-size:
 * input-large-placeholder-text-font-weight:
 * input-large-placeholder-text-line-height:
 * input-large-padding:
 * input-large-max-width:
 * input-giant-text-font-size:
 * input-giant-text-font-weight:
 * input-giant-text-line-height:
 * input-giant-placeholder-text-font-size:
 * input-giant-placeholder-text-font-weight:
 * input-giant-placeholder-text-line-height:
 * input-giant-padding:
 * input-giant-max-width:
 */
export class NbInputDirective {
    constructor(elementRef, focusMonitor, renderer, zone, statusService) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.renderer = renderer;
        this.zone = zone;
        this.statusService = statusService;
        this.destroy$ = new Subject();
        /**
         * Field size modifications. Possible values: `small`, `medium` (default), `large`.
         */
        this.fieldSize = 'medium';
        /**
         * Field status (adds specific styles):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.status = 'basic';
        /**
         * Field shapes modifications. Possible values: `rectangle` (default), `round`, `semi-round`.
         */
        this.shape = 'rectangle';
        this._fullWidth = false;
        /*
         * @docs-private
         **/
        this.status$ = new BehaviorSubject(this.status);
        /*
         * @docs-private
         **/
        this.size$ = new BehaviorSubject(this.fieldSize);
        /*
         * @docs-private
         **/
        this.focused$ = new BehaviorSubject(false);
        /*
         * @docs-private
         **/
        this.disabled$ = new BehaviorSubject(false);
        /*
         * @docs-private
         **/
        this.fullWidth$ = new BehaviorSubject(this.fullWidth);
    }
    /**
     * If set element will fill container. `false` by default.
     */
    get fullWidth() {
        return this._fullWidth;
    }
    set fullWidth(value) {
        this._fullWidth = convertToBoolProperty(value);
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    ngDoCheck() {
        const isDisabled = this.elementRef.nativeElement.disabled;
        if (isDisabled !== this.disabled$.value) {
            this.disabled$.next(isDisabled);
        }
    }
    ngOnChanges({ status, fieldSize, fullWidth }) {
        if (status) {
            this.status$.next(this.status);
        }
        if (fieldSize) {
            this.size$.next(this.fieldSize);
        }
        if (fullWidth) {
            this.fullWidth$.next(this.fullWidth);
        }
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef)
            .pipe(map(origin => !!origin), finalize(() => this.focusMonitor.stopMonitoring(this.elementRef)), takeUntil(this.destroy$))
            .subscribe(this.focused$);
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.elementRef.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    get tiny() {
        return this.fieldSize === 'tiny';
    }
    get small() {
        return this.fieldSize === 'small';
    }
    get medium() {
        return this.fieldSize === 'medium';
    }
    get large() {
        return this.fieldSize === 'large';
    }
    get giant() {
        return this.fieldSize === 'giant';
    }
    get primary() {
        return this.status === 'primary';
    }
    get info() {
        return this.status === 'info';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get rectangle() {
        return this.shape === 'rectangle';
    }
    get semiRound() {
        return this.shape === 'semi-round';
    }
    get round() {
        return this.shape === 'round';
    }
}
NbInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbInputDirective, deps: [{ token: i0.ElementRef }, { token: i1.NbFocusMonitor }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i2.NbStatusService }], target: i0.ɵɵFactoryTarget.Directive });
NbInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: { fieldSize: "fieldSize", status: "status", shape: "shape", fullWidth: "fullWidth" }, host: { properties: { "class.input-full-width": "this.fullWidth", "class": "this.additionalClasses", "class.size-tiny": "this.tiny", "class.size-small": "this.small", "class.size-medium": "this.medium", "class.size-large": "this.large", "class.size-giant": "this.giant", "class.status-primary": "this.primary", "class.status-info": "this.info", "class.status-success": "this.success", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-basic": "this.basic", "class.status-control": "this.control", "class.shape-rectangle": "this.rectangle", "class.shape-semi-round": "this.semiRound", "class.shape-round": "this.round" } }, providers: [
        { provide: NbFormFieldControl, useExisting: NbInputDirective },
    ], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[nbInput],textarea[nbInput]',
                    providers: [
                        { provide: NbFormFieldControl, useExisting: NbInputDirective },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NbFocusMonitor }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i2.NbStatusService }]; }, propDecorators: { fieldSize: [{
                type: Input
            }], status: [{
                type: Input
            }], shape: [{
                type: Input
            }], fullWidth: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.input-full-width']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
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
            }], primary: [{
                type: HostBinding,
                args: ['class.status-primary']
            }], info: [{
                type: HostBinding,
                args: ['class.status-info']
            }], success: [{
                type: HostBinding,
                args: ['class.status-success']
            }], warning: [{
                type: HostBinding,
                args: ['class.status-warning']
            }], danger: [{
                type: HostBinding,
                args: ['class.status-danger']
            }], basic: [{
                type: HostBinding,
                args: ['class.status-basic']
            }], control: [{
                type: HostBinding,
                args: ['class.status-control']
            }], rectangle: [{
                type: HostBinding,
                args: ['class.shape-rectangle']
            }], semiRound: [{
                type: HostBinding,
                args: ['class.shape-semi-round']
            }], round: [{
                type: HostBinding,
                args: ['class.shape-round']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2lucHV0L2lucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxHQVVaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBa0IsTUFBTSxZQUFZLENBQUM7QUFJbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7QUFHdEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBMRztBQU9ILE1BQU0sT0FBTyxnQkFBZ0I7SUE0QzNCLFlBQ1ksVUFBOEQsRUFDOUQsWUFBNEIsRUFDNUIsUUFBbUIsRUFDbkIsSUFBWSxFQUNaLGFBQThCO1FBSjlCLGVBQVUsR0FBVixVQUFVLENBQW9EO1FBQzlELGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUEvQ2hDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FB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QUFzQjtnQkFNL0IsTUFBTTtzQkFEVCxXQUFXO3VCQUFDLHFCQUFxQjtnQkFNOUIsS0FBSztzQkFEUixXQUFXO3VCQUFDLG9CQUFvQjtnQkFNN0IsT0FBTztzQkFEVixXQUFXO3VCQUFDLHNCQUFzQjtnQkFNL0IsU0FBUztzQkFEWixXQUFXO3VCQUFDLHVCQUF1QjtnQkFNaEMsU0FBUztzQkFEWixXQUFXO3VCQUFDLHdCQUF3QjtnQkFNakMsS0FBSztzQkFEUixXQUFXO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkNoYW5nZXMsXG4gIERvQ2hlY2ssXG4gIEFmdGVyVmlld0luaXQsXG4gIFJlbmRlcmVyMixcbiAgTmdab25lLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBmaW5hbGl6ZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOYlN0YXR1c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdGF0dXMuc2VydmljZSc7XG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sUHJvcGVydHksIE5iQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudFNpemUgfSBmcm9tICcuLi9jb21wb25lbnQtc2l6ZSc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudFNoYXBlIH0gZnJvbSAnLi4vY29tcG9uZW50LXNoYXBlJztcbmltcG9ydCB7IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgfSBmcm9tICcuLi9jb21wb25lbnQtc3RhdHVzJztcbmltcG9ydCB7IE5iRm9ybUZpZWxkQ29udHJvbCB9IGZyb20gJy4uL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jb250cm9sJztcbmltcG9ydCB7IE5iRm9jdXNNb25pdG9yIH0gZnJvbSAnLi4vY2RrL2ExMXkvYTExeS5tb2R1bGUnO1xuXG4vKipcbiAqIEJhc2ljIGlucHV0IGRpcmVjdGl2ZS5cbiAqXG4gKiBgYGBodG1sXG4gKiA8aW5wdXQgbmJJbnB1dD48L2lucHV0PlxuICogYGBgXG4gKlxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJJbnB1dE1vZHVsZWAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJJbnB1dE1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKlxuICogRGVmYXVsdCBpbnB1dCBzaXplIGlzIGBtZWRpdW1gOlxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgaW5wdXQvaW5wdXQtc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqIElucHV0cyBhcmUgYXZhaWxhYmxlIGluIG11bHRpcGxlIGNvbG9ycyB1c2luZyBgc3RhdHVzYCBwcm9wZXJ0eTpcbiAqIEBzdGFja2VkLWV4YW1wbGUoSW5wdXQgQ29sb3JzLCBpbnB1dC9pbnB1dC1jb2xvcnMuY29tcG9uZW50KVxuICpcbiAqIFRoZXJlIGFyZSB0aHJlZSBpbnB1dCBzaXplczpcbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKElucHV0IFNpemVzLCBpbnB1dC9pbnB1dC1zaXplcy5jb21wb25lbnQpXG4gKlxuICogSW5wdXRzIGF2YWlsYWJsZSBpbiBkaWZmZXJlbnQgc2hhcGVzLCB3aGljaCBjb3VsZCBiZSBjb21iaW5lZCB3aXRoIHRoZSBvdGhlciBwcm9wZXJ0aWVzOlxuICogQHN0YWNrZWQtZXhhbXBsZShJbnB1dCBTaGFwZXMsIGlucHV0L2lucHV0LXNoYXBlcy5jb21wb25lbnQpXG4gKlxuICogYG5iSW5wdXRgIGNvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIGZvbGxvd2luZyBzZWxlY3RvcnMgLSBgaW5wdXRgLCBgdGV4dGFyZWFgOlxuICogQHN0YWNrZWQtZXhhbXBsZShJbnB1dCBFbGVtZW50cywgaW5wdXQvaW5wdXQtdHlwZXMuY29tcG9uZW50KVxuICpcbiAqIFlvdSBjYW4gYWRkIGBmdWxsV2lkdGhgIGF0dHJpYnV0ZSB0byBtYWtlIGVsZW1lbnQgZmlsbCBjb250YWluZXI6XG4gKiBAc3RhY2tlZC1leGFtcGxlKEZ1bGwgd2lkdGggaW5wdXRzLCBpbnB1dC9pbnB1dC1mdWxsLXdpZHRoLmNvbXBvbmVudClcbiAqXG4gKiBPciB5b3UgY2FuIGJpbmQgY29udHJvbCB3aXRoIGZvcm0gY29udHJvbHMgb3IgbmdNb2RlbDpcbiAqIEBzdGFja2VkLWV4YW1wbGUoSW5wdXQgZm9ybSBiaW5kaW5nLCBpbnB1dC9pbnB1dC1mb3JtLmNvbXBvbmVudClcbiAqXG4gKiBVc2UgYDxuYi1mb3JtLWZpZWxkPmAgdG8gYWRkIGN1c3RvbSBjb250ZW50IHRvIHRoZSBpbnB1dCBmaWVsZC5cbiAqIEZpcnN0IGltcG9ydCBgTmJGb3JtRmllbGRNb2R1bGVgLiBUaGVuIHB1dCB0aGUgaW5wdXQgZmllbGQgYW5kIGN1c3RvbSBjb250ZW50IGludG9cbiAqIGA8bmItZm9ybS1maWVsZD5gIGFuZCBhZGQgYG5iUHJlZml4YCBvciBgbmJTdWZmaXhgIGRpcmVjdGl2ZSB0byB0aGUgY3VzdG9tIGNvbnRlbnQuXG4gKiBgbmJQcmVmaXhgIHB1dHMgY29udGVudCBiZWZvcmUgaW5wdXQgYW5kIGBuYlN1ZmZpeGAgYWZ0ZXIuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShJbnB1dCB3aXRoIGljb24sIGZvcm0tZmllbGQvZm9ybS1maWVsZC1pbnB1dC5jb21wb25lbnQpXG4gKiBAc3RhY2tlZC1leGFtcGxlKElucHV0IHdpdGggYnV0dG9uLCBmb3JtLWZpZWxkL2Zvcm0tZmllbGQtcGFzc3dvcmQuY29tcG9uZW50KVxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiBpbnB1dC1ib3JkZXItc3R5bGU6XG4gKiBpbnB1dC1ib3JkZXItd2lkdGg6XG4gKiBpbnB1dC1vdXRsaW5lLWNvbG9yOlxuICogaW5wdXQtb3V0bGluZS13aWR0aDpcbiAqIGlucHV0LXBsYWNlaG9sZGVyLXRleHQtZm9udC1mYW1pbHk6XG4gKiBpbnB1dC10ZXh0LWZvbnQtZmFtaWx5OlxuICogaW5wdXQtYmFzaWMtdGV4dC1jb2xvcjpcbiAqIGlucHV0LWJhc2ljLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6XG4gKiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogaW5wdXQtYmFzaWMtYm9yZGVyLWNvbG9yOlxuICogaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGlucHV0LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIGlucHV0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBpbnB1dC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogaW5wdXQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogaW5wdXQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGlucHV0LWJhc2ljLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6XG4gKiBpbnB1dC1wcmltYXJ5LXRleHQtY29sb3I6XG4gKiBpbnB1dC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6XG4gKiBpbnB1dC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6XG4gKiBpbnB1dC1wcmltYXJ5LWJvcmRlci1jb2xvcjpcbiAqIGlucHV0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGlucHV0LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogaW5wdXQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogaW5wdXQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjpcbiAqIGlucHV0LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGlucHV0LXByaW1hcnktZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjpcbiAqIGlucHV0LXN1Y2Nlc3MtdGV4dC1jb2xvcjpcbiAqIGlucHV0LXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjpcbiAqIGlucHV0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGlucHV0LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOlxuICogaW5wdXQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogaW5wdXQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiBpbnB1dC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBpbnB1dC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjpcbiAqIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOlxuICogaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOlxuICogaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOlxuICogaW5wdXQtaW5mby10ZXh0LWNvbG9yOlxuICogaW5wdXQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOlxuICogaW5wdXQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOlxuICogaW5wdXQtaW5mby1ib3JkZXItY29sb3I6XG4gKiBpbnB1dC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiBpbnB1dC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIGlucHV0LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGlucHV0LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOlxuICogaW5wdXQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogaW5wdXQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBpbnB1dC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6XG4gKiBpbnB1dC1pbmZvLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6XG4gKiBpbnB1dC13YXJuaW5nLXRleHQtY29sb3I6XG4gKiBpbnB1dC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6XG4gKiBpbnB1dC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6XG4gKiBpbnB1dC13YXJuaW5nLWJvcmRlci1jb2xvcjpcbiAqIGlucHV0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGlucHV0LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOlxuICogaW5wdXQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogaW5wdXQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBpbnB1dC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6XG4gKiBpbnB1dC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjpcbiAqIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjpcbiAqIGlucHV0LWRhbmdlci10ZXh0LWNvbG9yOlxuICogaW5wdXQtZGFuZ2VyLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6XG4gKiBpbnB1dC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGlucHV0LWRhbmdlci1ib3JkZXItY29sb3I6XG4gKiBpbnB1dC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGlucHV0LWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6XG4gKiBpbnB1dC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGlucHV0LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6XG4gKiBpbnB1dC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGlucHV0LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBpbnB1dC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGlucHV0LWRhbmdlci1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOlxuICogaW5wdXQtY29udHJvbC10ZXh0LWNvbG9yOlxuICogaW5wdXQtY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOlxuICogaW5wdXQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogaW5wdXQtY29udHJvbC1ib3JkZXItY29sb3I6XG4gKiBpbnB1dC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6XG4gKiBpbnB1dC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjpcbiAqIGlucHV0LWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIGlucHV0LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogaW5wdXQtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOlxuICogaW5wdXQtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6XG4gKiBpbnB1dC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6XG4gKiBpbnB1dC1jb250cm9sLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6XG4gKiBpbnB1dC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czpcbiAqIGlucHV0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czpcbiAqIGlucHV0LXJvdW5kLWJvcmRlci1yYWRpdXM6XG4gKiBpbnB1dC10aW55LXRleHQtZm9udC1zaXplOlxuICogaW5wdXQtdGlueS10ZXh0LWZvbnQtd2VpZ2h0OlxuICogaW5wdXQtdGlueS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTpcbiAqIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDpcbiAqIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDpcbiAqIGlucHV0LXRpbnktcGFkZGluZzpcbiAqIGlucHV0LXRpbnktbWF4LXdpZHRoOlxuICogaW5wdXQtc21hbGwtdGV4dC1mb250LXNpemU6XG4gKiBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OlxuICogaW5wdXQtc21hbGwtdGV4dC1saW5lLWhlaWdodDpcbiAqIGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOlxuICogaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDpcbiAqIGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6XG4gKiBpbnB1dC1zbWFsbC1wYWRkaW5nOlxuICogaW5wdXQtc21hbGwtbWF4LXdpZHRoOlxuICogaW5wdXQtbWVkaXVtLXRleHQtZm9udC1zaXplOlxuICogaW5wdXQtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6XG4gKiBpbnB1dC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDpcbiAqIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTpcbiAqIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OlxuICogaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6XG4gKiBpbnB1dC1tZWRpdW0tcGFkZGluZzpcbiAqIGlucHV0LW1lZGl1bS1tYXgtd2lkdGg6XG4gKiBpbnB1dC1sYXJnZS10ZXh0LWZvbnQtc2l6ZTpcbiAqIGlucHV0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6XG4gKiBpbnB1dC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6XG4gKiBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OlxuICogaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDpcbiAqIGlucHV0LWxhcmdlLXBhZGRpbmc6XG4gKiBpbnB1dC1sYXJnZS1tYXgtd2lkdGg6XG4gKiBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZTpcbiAqIGlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6XG4gKiBpbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OlxuICogaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6XG4gKiBpbnB1dC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OlxuICogaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDpcbiAqIGlucHV0LWdpYW50LXBhZGRpbmc6XG4gKiBpbnB1dC1naWFudC1tYXgtd2lkdGg6XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lucHV0W25iSW5wdXRdLHRleHRhcmVhW25iSW5wdXRdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBOYkZvcm1GaWVsZENvbnRyb2wsIHVzZUV4aXN0aW5nOiBOYklucHV0RGlyZWN0aXZlIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iSW5wdXREaXJlY3RpdmUgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBOYkZvcm1GaWVsZENvbnRyb2wge1xuXG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEZpZWxkIHNpemUgbW9kaWZpY2F0aW9ucy4gUG9zc2libGUgdmFsdWVzOiBgc21hbGxgLCBgbWVkaXVtYCAoZGVmYXVsdCksIGBsYXJnZWAuXG4gICAqL1xuICBASW5wdXQoKVxuICBmaWVsZFNpemU6IE5iQ29tcG9uZW50U2l6ZSA9ICdtZWRpdW0nO1xuXG4gIC8qKlxuICAgKiBGaWVsZCBzdGF0dXMgKGFkZHMgc3BlY2lmaWMgc3R5bGVzKTpcbiAgICogYGJhc2ljYCwgYHByaW1hcnlgLCBgaW5mb2AsIGBzdWNjZXNzYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCwgYGNvbnRyb2xgXG4gICAqL1xuICBASW5wdXQoKSBzdGF0dXM6IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgPSAnYmFzaWMnO1xuXG4gIC8qKlxuICAgKiBGaWVsZCBzaGFwZXMgbW9kaWZpY2F0aW9ucy4gUG9zc2libGUgdmFsdWVzOiBgcmVjdGFuZ2xlYCAoZGVmYXVsdCksIGByb3VuZGAsIGBzZW1pLXJvdW5kYC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNoYXBlOiBOYkNvbXBvbmVudFNoYXBlID0gJ3JlY3RhbmdsZSc7XG5cbiAgLyoqXG4gICAqIElmIHNldCBlbGVtZW50IHdpbGwgZmlsbCBjb250YWluZXIuIGBmYWxzZWAgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW5wdXQtZnVsbC13aWR0aCcpXG4gIGdldCBmdWxsV2lkdGgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bGxXaWR0aDtcbiAgfVxuICBzZXQgZnVsbFdpZHRoKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZnVsbFdpZHRoID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9mdWxsV2lkdGggPSBmYWxzZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Z1bGxXaWR0aDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBhZGRpdGlvbmFsQ2xhc3NlcygpOiBzdHJpbmdbXSB7XG4gICAgaWYgKHRoaXMuc3RhdHVzU2VydmljZS5pc0N1c3RvbVN0YXR1cyh0aGlzLnN0YXR1cykpIHtcbiAgICAgIHJldHVybiBbdGhpcy5zdGF0dXNTZXJ2aWNlLmdldFN0YXR1c0NsYXNzKHRoaXMuc3RhdHVzKV07XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgZm9jdXNNb25pdG9yOiBOYkZvY3VzTW9uaXRvcixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBzdGF0dXNTZXJ2aWNlOiBOYlN0YXR1c1NlcnZpY2UsXG4gICkge1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5kaXNhYmxlZDtcbiAgICBpZiAoaXNEaXNhYmxlZCAhPT0gdGhpcy5kaXNhYmxlZCQudmFsdWUpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQkLm5leHQoaXNEaXNhYmxlZCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoeyBzdGF0dXMsIGZpZWxkU2l6ZSwgZnVsbFdpZHRoIH06IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICB0aGlzLnN0YXR1cyQubmV4dCh0aGlzLnN0YXR1cyk7XG4gICAgfVxuICAgIGlmIChmaWVsZFNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSQubmV4dCh0aGlzLmZpZWxkU2l6ZSk7XG4gICAgfVxuICAgIGlmIChmdWxsV2lkdGgpIHtcbiAgICAgIHRoaXMuZnVsbFdpZHRoJC5uZXh0KHRoaXMuZnVsbFdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZilcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAob3JpZ2luID0+ICEhb3JpZ2luKSxcbiAgICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50UmVmKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodGhpcy5mb2N1c2VkJCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gVE9ETzogIzIyNTRcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbmItdHJhbnNpdGlvbicpO1xuICAgIH0pKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLXRpbnknKVxuICBnZXQgdGlueSgpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZFNpemUgPT09ICd0aW55JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1zbWFsbCcpXG4gIGdldCBzbWFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZFNpemUgPT09ICdzbWFsbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtbWVkaXVtJylcbiAgZ2V0IG1lZGl1bSgpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZFNpemUgPT09ICdtZWRpdW0nO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWxhcmdlJylcbiAgZ2V0IGxhcmdlKCkge1xuICAgIHJldHVybiB0aGlzLmZpZWxkU2l6ZSA9PT0gJ2xhcmdlJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1naWFudCcpXG4gIGdldCBnaWFudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZFNpemUgPT09ICdnaWFudCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1wcmltYXJ5JylcbiAgZ2V0IHByaW1hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAncHJpbWFyeSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1pbmZvJylcbiAgZ2V0IGluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnaW5mbyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1zdWNjZXNzJylcbiAgZ2V0IHN1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnc3VjY2Vzcyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy13YXJuaW5nJylcbiAgZ2V0IHdhcm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnd2FybmluZyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1kYW5nZXInKVxuICBnZXQgZGFuZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Rhbmdlcic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1iYXNpYycpXG4gIGdldCBiYXNpYygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdiYXNpYyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1jb250cm9sJylcbiAgZ2V0IGNvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnY29udHJvbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNoYXBlLXJlY3RhbmdsZScpXG4gIGdldCByZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcGUgPT09ICdyZWN0YW5nbGUnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaGFwZS1zZW1pLXJvdW5kJylcbiAgZ2V0IHNlbWlSb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZSA9PT0gJ3NlbWktcm91bmQnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaGFwZS1yb3VuZCcpXG4gIGdldCByb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZSA9PT0gJ3JvdW5kJztcbiAgfVxuXG4gIC8qXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICoqL1xuICBzdGF0dXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzPih0aGlzLnN0YXR1cyk7XG5cbiAgLypcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKiovXG4gIHNpemUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOYkNvbXBvbmVudFNpemU+KHRoaXMuZmllbGRTaXplKTtcblxuICAvKlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqKi9cbiAgZm9jdXNlZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICAvKlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqKi9cbiAgZGlzYWJsZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgLypcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKiovXG4gIGZ1bGxXaWR0aCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMuZnVsbFdpZHRoKTtcbn1cbiJdfQ==