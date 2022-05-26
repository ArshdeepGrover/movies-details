/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ChangeDetectionStrategy, ContentChild, ContentChildren, HostBinding, } from '@angular/core';
import { merge, Subject, combineLatest, ReplaySubject } from 'rxjs';
import { takeUntil, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { NbPrefixDirective } from './prefix.directive';
import { NbSuffixDirective } from './suffix.directive';
import { NbFormFieldControl, NbFormFieldControlConfig } from './form-field-control';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function throwFormControlElementNotFound() {
    throw new Error(`NbFormFieldComponent must contain [nbInput]`);
}
/*
 * NbFormFieldComponent
 *
 * @styles
 *
 * form-field-addon-basic-text-color:
 * form-field-addon-basic-highlight-text-color:
 * form-field-addon-primary-text-color:
 * form-field-addon-primary-highlight-text-color:
 * form-field-addon-success-text-color:
 * form-field-addon-success-highlight-text-color:
 * form-field-addon-info-text-color:
 * form-field-addon-info-highlight-text-color:
 * form-field-addon-warning-text-color:
 * form-field-addon-warning-highlight-text-color:
 * form-field-addon-danger-text-color:
 * form-field-addon-danger-highlight-text-color:
 * form-field-addon-control-text-color:
 * form-field-addon-control-highlight-text-color:
 * form-field-addon-disabled-text-color:
 * form-field-addon-tiny-height:
 * form-field-addon-tiny-width:
 * form-field-addon-tiny-icon-size:
 * form-field-addon-tiny-font-size:
 * form-field-addon-tiny-line-height:
 * form-field-addon-tiny-font-weight:
 * form-field-addon-small-height:
 * form-field-addon-small-width:
 * form-field-addon-small-icon-size:
 * form-field-addon-small-font-size:
 * form-field-addon-small-line-height:
 * form-field-addon-small-font-weight:
 * form-field-addon-medium-height:
 * form-field-addon-medium-width:
 * form-field-addon-medium-icon-size:
 * form-field-addon-medium-font-size:
 * form-field-addon-medium-line-height:
 * form-field-addon-medium-font-weight:
 * form-field-addon-large-height:
 * form-field-addon-large-width:
 * form-field-addon-large-icon-size:
 * form-field-addon-large-font-size:
 * form-field-addon-large-line-height:
 * form-field-addon-large-font-weight:
 * form-field-addon-giant-height:
 * form-field-addon-giant-width:
 * form-field-addon-giant-icon-size:
 * form-field-addon-giant-font-size:
 * form-field-addon-giant-line-height:
 * form-field-addon-giant-font-weight:
 **/
export class NbFormFieldComponent {
    constructor(cd, zone, elementRef, renderer) {
        this.cd = cd;
        this.zone = zone;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.destroy$ = new Subject();
        this.formControlState$ = new ReplaySubject(1);
        this.prefixClasses$ = this.formControlState$.pipe(map(s => this.getAddonClasses('prefix', s)));
        this.suffixClasses$ = this.formControlState$.pipe(map(s => this.getAddonClasses('suffix', s)));
    }
    ngAfterContentChecked() {
        if (!this.formControl) {
            throwFormControlElementNotFound();
        }
    }
    ngAfterContentInit() {
        this.subscribeToFormControlStateChange();
        this.subscribeToAddonChange();
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
    shouldShowPrefix() {
        return this.getFormControlConfig().supportsPrefix && !!this.prefix.length;
    }
    shouldShowSuffix() {
        return this.getFormControlConfig().supportsSuffix && !!this.suffix.length;
    }
    subscribeToFormControlStateChange() {
        const { disabled$, focused$, size$, status$, fullWidth$ } = this.formControl;
        combineLatest([disabled$, focused$, size$, status$, fullWidth$])
            .pipe(map(([disabled, focused, size, status, fullWidth]) => ({ disabled, focused, size, status, fullWidth })), distinctUntilChanged((oldState, state) => this.isStatesEqual(oldState, state)), tap(({ size, fullWidth }) => {
            const formFieldClasses = [`nb-form-field-size-${size}`];
            if (!fullWidth) {
                formFieldClasses.push('nb-form-field-limited-width');
            }
            this.formFieldClasses = formFieldClasses.join(' ');
        }), takeUntil(this.destroy$))
            .subscribe(this.formControlState$);
    }
    subscribeToAddonChange() {
        merge(this.prefix.changes, this.suffix.changes)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.cd.markForCheck());
    }
    getAddonClasses(addon, state) {
        const classes = [
            'nb-form-field-addon',
            `nb-form-field-${addon}-${state.size}`,
        ];
        if (state.disabled) {
            classes.push(`nb-form-field-addon-disabled`);
        }
        else if (state.focused) {
            classes.push(`nb-form-field-addon-${state.status}-highlight`);
        }
        else {
            classes.push(`nb-form-field-addon-${state.status}`);
        }
        return classes;
    }
    getFormControlConfig() {
        return this.formControlConfig || new NbFormFieldControlConfig();
    }
    isStatesEqual(oldState, state) {
        return oldState.status === state.status &&
            oldState.disabled === state.disabled &&
            oldState.focused === state.focused &&
            oldState.fullWidth === state.fullWidth &&
            oldState.size === state.size;
    }
}
NbFormFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFormFieldComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NbFormFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbFormFieldComponent, selector: "nb-form-field", host: { properties: { "class": "this.formFieldClasses" } }, queries: [{ propertyName: "formControl", first: true, predicate: NbFormFieldControl, descendants: true }, { propertyName: "formControlConfig", first: true, predicate: NbFormFieldControlConfig, descendants: true }, { propertyName: "prefix", predicate: NbPrefixDirective, descendants: true }, { propertyName: "suffix", predicate: NbSuffixDirective, descendants: true }], ngImport: i0, template: "<div *ngIf=\"shouldShowPrefix()\" [ngClass]=\"prefixClasses$ | async\">\n  <ng-content select=\"[nbPrefix]\"></ng-content>\n</div>\n\n<div class=\"nb-form-control-container\"\n     [class.nb-form-field-control-with-prefix]=\"shouldShowPrefix()\"\n     [class.nb-form-field-control-with-suffix]=\"shouldShowSuffix()\">\n  <ng-content></ng-content>\n</div>\n\n<div *ngIf=\"shouldShowSuffix()\" [ngClass]=\"suffixClasses$ | async\">\n  <ng-content select=\"[nbSuffix]\"></ng-content>\n</div>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;align-items:center}.nb-form-control-container{width:100%}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "async": i1.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFormFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-form-field', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div *ngIf=\"shouldShowPrefix()\" [ngClass]=\"prefixClasses$ | async\">\n  <ng-content select=\"[nbPrefix]\"></ng-content>\n</div>\n\n<div class=\"nb-form-control-container\"\n     [class.nb-form-field-control-with-prefix]=\"shouldShowPrefix()\"\n     [class.nb-form-field-control-with-suffix]=\"shouldShowSuffix()\">\n  <ng-content></ng-content>\n</div>\n\n<div *ngIf=\"shouldShowSuffix()\" [ngClass]=\"suffixClasses$ | async\">\n  <ng-content select=\"[nbSuffix]\"></ng-content>\n</div>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;align-items:center}.nb-form-control-container{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { prefix: [{
                type: ContentChildren,
                args: [NbPrefixDirective, { descendants: true }]
            }], suffix: [{
                type: ContentChildren,
                args: [NbSuffixDirective, { descendants: true }]
            }], formControl: [{
                type: ContentChild,
                args: [NbFormFieldControl, { static: false }]
            }], formControlConfig: [{
                type: ContentChild,
                args: [NbFormFieldControlConfig, { static: false }]
            }], formFieldClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLFlBQVksRUFHWixlQUFlLEVBUWYsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFjLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFzQix3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFJeEcsU0FBUywrQkFBK0I7SUFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ2hFLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrREk7QUFPSixNQUFNLE9BQU8sb0JBQW9CO0lBZ0IvQixZQUNZLEVBQXFCLEVBQ3JCLElBQVksRUFDWixVQUFzQixFQUN0QixRQUFtQjtRQUhuQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixTQUFJ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QUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsUUFBUTtZQUNwQyxRQUFRLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxPQUFPO1lBQ2xDLFFBQVEsQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLFNBQVM7WUFDdEMsUUFBUSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3RDLENBQUM7O2lIQTFHVSxvQkFBb0I7cUdBQXBCLG9CQUFvQiwwSkFXakIsa0JBQWtCLG9GQUNsQix3QkFBd0IsNERBSnJCLGlCQUFpQiw0REFDakIsaUJBQWlCLGdEQ3JHcEMsNGVBYUE7MkZEK0VhLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDRSxlQUFlLG1CQUdSLHVCQUF1QixDQUFDLE1BQU07OEtBVVksTUFBTTtzQkFBaEUsZUFBZTt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7Z0JBQ0UsTUFBTTtzQkFBaEUsZUFBZTt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7Z0JBRUosV0FBVztzQkFBL0QsWUFBWTt1QkFBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBQ1EsaUJBQWlCO3NCQUEzRSxZQUFZO3VCQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFFbkMsZ0JBQWdCO3NCQUFyQyxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbnRlbnRDaGlsZCxcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkRlc3Ryb3ksXG4gIE5nWm9uZSxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBBZnRlclZpZXdJbml0LFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCwgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5iUHJlZml4RGlyZWN0aXZlIH0gZnJvbSAnLi9wcmVmaXguZGlyZWN0aXZlJztcbmltcG9ydCB7IE5iU3VmZml4RGlyZWN0aXZlIH0gZnJvbSAnLi9zdWZmaXguZGlyZWN0aXZlJztcbmltcG9ydCB7IE5iRm9ybUZpZWxkQ29udHJvbCwgTmJGb3JtQ29udHJvbFN0YXRlLCBOYkZvcm1GaWVsZENvbnRyb2xDb25maWcgfSBmcm9tICcuL2Zvcm0tZmllbGQtY29udHJvbCc7XG5cbmV4cG9ydCB0eXBlIE5iRm9ybUNvbnRyb2xBZGRvbiA9ICdwcmVmaXgnIHwgJ3N1ZmZpeCc7XG5cbmZ1bmN0aW9uIHRocm93Rm9ybUNvbnRyb2xFbGVtZW50Tm90Rm91bmQoKSB7XG4gIHRocm93IG5ldyBFcnJvcihgTmJGb3JtRmllbGRDb21wb25lbnQgbXVzdCBjb250YWluIFtuYklucHV0XWApXG59XG5cbi8qXG4gKiBOYkZvcm1GaWVsZENvbXBvbmVudFxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiBmb3JtLWZpZWxkLWFkZG9uLWJhc2ljLXRleHQtY29sb3I6XG4gKiBmb3JtLWZpZWxkLWFkZG9uLWJhc2ljLWhpZ2hsaWdodC10ZXh0LWNvbG9yOlxuICogZm9ybS1maWVsZC1hZGRvbi1wcmltYXJ5LXRleHQtY29sb3I6XG4gKiBmb3JtLWZpZWxkLWFkZG9uLXByaW1hcnktaGlnaGxpZ2h0LXRleHQtY29sb3I6XG4gKiBmb3JtLWZpZWxkLWFkZG9uLXN1Y2Nlc3MtdGV4dC1jb2xvcjpcbiAqIGZvcm0tZmllbGQtYWRkb24tc3VjY2Vzcy1oaWdobGlnaHQtdGV4dC1jb2xvcjpcbiAqIGZvcm0tZmllbGQtYWRkb24taW5mby10ZXh0LWNvbG9yOlxuICogZm9ybS1maWVsZC1hZGRvbi1pbmZvLWhpZ2hsaWdodC10ZXh0LWNvbG9yOlxuICogZm9ybS1maWVsZC1hZGRvbi13YXJuaW5nLXRleHQtY29sb3I6XG4gKiBmb3JtLWZpZWxkLWFkZG9uLXdhcm5pbmctaGlnaGxpZ2h0LXRleHQtY29sb3I6XG4gKiBmb3JtLWZpZWxkLWFkZG9uLWRhbmdlci10ZXh0LWNvbG9yOlxuICogZm9ybS1maWVsZC1hZGRvbi1kYW5nZXItaGlnaGxpZ2h0LXRleHQtY29sb3I6XG4gKiBmb3JtLWZpZWxkLWFkZG9uLWNvbnRyb2wtdGV4dC1jb2xvcjpcbiAqIGZvcm0tZmllbGQtYWRkb24tY29udHJvbC1oaWdobGlnaHQtdGV4dC1jb2xvcjpcbiAqIGZvcm0tZmllbGQtYWRkb24tZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGZvcm0tZmllbGQtYWRkb24tdGlueS1oZWlnaHQ6XG4gKiBmb3JtLWZpZWxkLWFkZG9uLXRpbnktd2lkdGg6XG4gKiBmb3JtLWZpZWxkLWFkZG9uLXRpbnktaWNvbi1zaXplOlxuICogZm9ybS1maWVsZC1hZGRvbi10aW55LWZvbnQtc2l6ZTpcbiAqIGZvcm0tZmllbGQtYWRkb24tdGlueS1saW5lLWhlaWdodDpcbiAqIGZvcm0tZmllbGQtYWRkb24tdGlueS1mb250LXdlaWdodDpcbiAqIGZvcm0tZmllbGQtYWRkb24tc21hbGwtaGVpZ2h0OlxuICogZm9ybS1maWVsZC1hZGRvbi1zbWFsbC13aWR0aDpcbiAqIGZvcm0tZmllbGQtYWRkb24tc21hbGwtaWNvbi1zaXplOlxuICogZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1mb250LXNpemU6XG4gKiBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWxpbmUtaGVpZ2h0OlxuICogZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1mb250LXdlaWdodDpcbiAqIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWhlaWdodDpcbiAqIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLXdpZHRoOlxuICogZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0taWNvbi1zaXplOlxuICogZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0tZm9udC1zaXplOlxuICogZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0tbGluZS1oZWlnaHQ6XG4gKiBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1mb250LXdlaWdodDpcbiAqIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtaGVpZ2h0OlxuICogZm9ybS1maWVsZC1hZGRvbi1sYXJnZS13aWR0aDpcbiAqIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtaWNvbi1zaXplOlxuICogZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1mb250LXNpemU6XG4gKiBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWxpbmUtaGVpZ2h0OlxuICogZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1mb250LXdlaWdodDpcbiAqIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtaGVpZ2h0OlxuICogZm9ybS1maWVsZC1hZGRvbi1naWFudC13aWR0aDpcbiAqIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtaWNvbi1zaXplOlxuICogZm9ybS1maWVsZC1hZGRvbi1naWFudC1mb250LXNpemU6XG4gKiBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWxpbmUtaGVpZ2h0OlxuICogZm9ybS1maWVsZC1hZGRvbi1naWFudC1mb250LXdlaWdodDpcbiAqKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWZvcm0tZmllbGQnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLWZpZWxkLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iRm9ybUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByb3RlY3RlZCBmb3JtQ29udHJvbFN0YXRlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE5iRm9ybUNvbnRyb2xTdGF0ZT4oMSk7XG4gIHByZWZpeENsYXNzZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiA9IHRoaXMuZm9ybUNvbnRyb2xTdGF0ZSQucGlwZShtYXAocyA9PiB0aGlzLmdldEFkZG9uQ2xhc3NlcygncHJlZml4JywgcykpKTtcbiAgc3VmZml4Q2xhc3NlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+ID0gdGhpcy5mb3JtQ29udHJvbFN0YXRlJC5waXBlKG1hcChzID0+IHRoaXMuZ2V0QWRkb25DbGFzc2VzKCdzdWZmaXgnLCBzKSkpO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmJQcmVmaXhEaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgcHJlZml4OiBRdWVyeUxpc3Q8TmJQcmVmaXhEaXJlY3RpdmU+O1xuICBAQ29udGVudENoaWxkcmVuKE5iU3VmZml4RGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIHN1ZmZpeDogUXVlcnlMaXN0PE5iU3VmZml4RGlyZWN0aXZlPjtcblxuICBAQ29udGVudENoaWxkKE5iRm9ybUZpZWxkQ29udHJvbCwgeyBzdGF0aWM6IGZhbHNlIH0pIGZvcm1Db250cm9sOiBOYkZvcm1GaWVsZENvbnRyb2w7XG4gIEBDb250ZW50Q2hpbGQoTmJGb3JtRmllbGRDb250cm9sQ29uZmlnLCB7IHN0YXRpYzogZmFsc2UgfSkgZm9ybUNvbnRyb2xDb25maWc6IE5iRm9ybUZpZWxkQ29udHJvbENvbmZpZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgZm9ybUZpZWxkQ2xhc3NlcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGlmICghdGhpcy5mb3JtQ29udHJvbCkge1xuICAgICAgdGhyb3dGb3JtQ29udHJvbEVsZW1lbnROb3RGb3VuZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmliZVRvRm9ybUNvbnRyb2xTdGF0ZUNoYW5nZSgpO1xuICAgIHRoaXMuc3Vic2NyaWJlVG9BZGRvbkNoYW5nZSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIFRPRE86ICMyMjU0XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25iLXRyYW5zaXRpb24nKTtcbiAgICB9KSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgfVxuXG4gIHNob3VsZFNob3dQcmVmaXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybUNvbnRyb2xDb25maWcoKS5zdXBwb3J0c1ByZWZpeCAmJiAhIXRoaXMucHJlZml4Lmxlbmd0aDtcbiAgfVxuXG4gIHNob3VsZFNob3dTdWZmaXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybUNvbnRyb2xDb25maWcoKS5zdXBwb3J0c1N1ZmZpeCAmJiAhIXRoaXMuc3VmZml4Lmxlbmd0aDtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVUb0Zvcm1Db250cm9sU3RhdGVDaGFuZ2UoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCQsIGZvY3VzZWQkLCBzaXplJCwgc3RhdHVzJCwgZnVsbFdpZHRoJCB9ID0gdGhpcy5mb3JtQ29udHJvbDtcblxuICAgIGNvbWJpbmVMYXRlc3QoW2Rpc2FibGVkJCwgZm9jdXNlZCQsIHNpemUkLCBzdGF0dXMkLCBmdWxsV2lkdGgkXSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKFtkaXNhYmxlZCwgZm9jdXNlZCwgc2l6ZSwgc3RhdHVzLCBmdWxsV2lkdGhdKSA9PiAoeyBkaXNhYmxlZCwgZm9jdXNlZCwgc2l6ZSwgc3RhdHVzLCBmdWxsV2lkdGggfSkpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgob2xkU3RhdGUsIHN0YXRlKSA9PiB0aGlzLmlzU3RhdGVzRXF1YWwob2xkU3RhdGUsIHN0YXRlKSksXG4gICAgICAgIHRhcCgoeyBzaXplLCBmdWxsV2lkdGggfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvcm1GaWVsZENsYXNzZXMgPSBbYG5iLWZvcm0tZmllbGQtc2l6ZS0ke3NpemV9YF07XG4gICAgICAgICAgaWYgKCFmdWxsV2lkdGgpIHtcbiAgICAgICAgICAgIGZvcm1GaWVsZENsYXNzZXMucHVzaCgnbmItZm9ybS1maWVsZC1saW1pdGVkLXdpZHRoJylcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5mb3JtRmllbGRDbGFzc2VzID0gZm9ybUZpZWxkQ2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHRoaXMuZm9ybUNvbnRyb2xTdGF0ZSQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZVRvQWRkb25DaGFuZ2UoKSB7XG4gICAgbWVyZ2UodGhpcy5wcmVmaXguY2hhbmdlcywgdGhpcy5zdWZmaXguY2hhbmdlcylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QWRkb25DbGFzc2VzKGFkZG9uOiBOYkZvcm1Db250cm9sQWRkb24sIHN0YXRlOiBOYkZvcm1Db250cm9sU3RhdGUpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICduYi1mb3JtLWZpZWxkLWFkZG9uJyxcbiAgICAgIGBuYi1mb3JtLWZpZWxkLSR7YWRkb259LSR7c3RhdGUuc2l6ZX1gLFxuICAgIF07XG5cbiAgICBpZiAoc3RhdGUuZGlzYWJsZWQpIHtcbiAgICAgIGNsYXNzZXMucHVzaChgbmItZm9ybS1maWVsZC1hZGRvbi1kaXNhYmxlZGApO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUuZm9jdXNlZCkge1xuICAgICAgY2xhc3Nlcy5wdXNoKGBuYi1mb3JtLWZpZWxkLWFkZG9uLSR7c3RhdGUuc3RhdHVzfS1oaWdobGlnaHRgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3Nlcy5wdXNoKGBuYi1mb3JtLWZpZWxkLWFkZG9uLSR7c3RhdGUuc3RhdHVzfWApO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEZvcm1Db250cm9sQ29uZmlnKCk6IE5iRm9ybUZpZWxkQ29udHJvbENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2xDb25maWcgfHwgbmV3IE5iRm9ybUZpZWxkQ29udHJvbENvbmZpZygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzU3RhdGVzRXF1YWwob2xkU3RhdGU6IE5iRm9ybUNvbnRyb2xTdGF0ZSwgc3RhdGU6IE5iRm9ybUNvbnRyb2xTdGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBvbGRTdGF0ZS5zdGF0dXMgPT09IHN0YXRlLnN0YXR1cyAmJlxuICAgICAgICAgICBvbGRTdGF0ZS5kaXNhYmxlZCA9PT0gc3RhdGUuZGlzYWJsZWQgJiZcbiAgICAgICAgICAgb2xkU3RhdGUuZm9jdXNlZCA9PT0gc3RhdGUuZm9jdXNlZCAmJlxuICAgICAgICAgICBvbGRTdGF0ZS5mdWxsV2lkdGggPT09IHN0YXRlLmZ1bGxXaWR0aCAmJlxuICAgICAgICAgICBvbGRTdGF0ZS5zaXplID09PSBzdGF0ZS5zaXplO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwic2hvdWxkU2hvd1ByZWZpeCgpXCIgW25nQ2xhc3NdPVwicHJlZml4Q2xhc3NlcyQgfCBhc3luY1wiPlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbbmJQcmVmaXhdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJuYi1mb3JtLWNvbnRyb2wtY29udGFpbmVyXCJcbiAgICAgW2NsYXNzLm5iLWZvcm0tZmllbGQtY29udHJvbC13aXRoLXByZWZpeF09XCJzaG91bGRTaG93UHJlZml4KClcIlxuICAgICBbY2xhc3MubmItZm9ybS1maWVsZC1jb250cm9sLXdpdGgtc3VmZml4XT1cInNob3VsZFNob3dTdWZmaXgoKVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInNob3VsZFNob3dTdWZmaXgoKVwiIFtuZ0NsYXNzXT1cInN1ZmZpeENsYXNzZXMkIHwgYXN5bmNcIj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW25iU3VmZml4XVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19