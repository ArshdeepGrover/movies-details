/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, HostBinding, Input, Output, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbOptionComponent } from '../option/option.component';
import { NbPortalDirective } from '../cdk/overlay/mapping';
import * as i0 from "@angular/core";
import * as i1 from "../option/option-list.component";
import * as i2 from "../cdk/overlay/mapping";
import * as i3 from "@angular/common";
// Component class scoped counter for aria attributes.
let lastAutocompleteId = 0;
/**
 * The `NbAutocompleteComponent` overlay component.
 * Provides an `NbOptionList` overlay component.
 * */
export class NbAutocompleteComponent {
    constructor(cd) {
        this.cd = cd;
        this.destroy$ = new Subject();
        /**
         * Component scoped id for aria attributes.
         * */
        this.id = `nb-autocomplete-${lastAutocompleteId++}`;
        /**
         * @docs-private
         * Current overlay position because of we have to toggle overlayPosition
         * in [ngClass] direction.
         */
        this._overlayPosition = '';
        /**
         * Autocomplete size, available sizes:
         * `tiny`, `small`, `medium` (default), `large`, `giant`
         */
        this.size = 'medium';
        /**
         * Flag passed as input to always make first option active.
         * */
        this.activeFirst = false;
        /**
         * Will be emitted when selected value changes.
         * */
        this.selectedChange = new EventEmitter();
    }
    get overlayPosition() {
        return this._overlayPosition;
    }
    set overlayPosition(value) {
        this._overlayPosition = value;
        // Need run change detection after first set from NbAutocompleteDirective
        this.cd.detectChanges();
    }
    /**
     * Returns width of the input.
     * */
    get hostWidth() {
        return this.hostRef.nativeElement.getBoundingClientRect().width;
    }
    /**
     * Specifies width (in pixels) to be set on `nb-option`s container (`nb-option-list`)
     * */
    get optionsWidth() {
        return this._optionsWidth ?? this.hostWidth;
    }
    set optionsWidth(value) {
        this._optionsWidth = value;
    }
    ngAfterContentInit() {
        this.options.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.cd.detectChanges());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Autocomplete knows nothing about host html input element.
     * So, attach method set input hostRef for styling.
     * */
    setHost(hostRef) {
        this.hostRef = hostRef;
    }
    /**
     * Propagate selected value.
     * */
    emitSelected(selected) {
        this.selectedChange.emit(selected);
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
}
NbAutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAutocompleteComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NbAutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbAutocompleteComponent, selector: "nb-autocomplete", inputs: { handleDisplayFn: "handleDisplayFn", size: "size", activeFirst: "activeFirst", optionsListClass: "optionsListClass", optionsPanelClass: "optionsPanelClass", optionsWidth: "optionsWidth" }, outputs: { selectedChange: "selectedChange" }, host: { properties: { "class.size-tiny": "this.tiny", "class.size-small": "this.small", "class.size-medium": "this.medium", "class.size-large": "this.large", "class.size-giant": "this.giant" } }, queries: [{ propertyName: "options", predicate: NbOptionComponent, descendants: true }], viewQueries: [{ propertyName: "portal", first: true, predicate: NbPortalDirective, descendants: true }], ngImport: i0, template: "<nb-option-list *nbPortal\n                [size]=\"size\"\n                [position]=\"overlayPosition\"\n                [style.width.px]=\"optionsWidth\"\n                role=\"listbox\"\n                [id]=\"id\"\n                [class.empty]=\"!options?.length\"\n                [ngClass]=\"optionsListClass\">\n  <ng-content select=\"nb-option, nb-option-group\"></ng-content>\n</nb-option-list>\n", styles: ["/*\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host(:hover){cursor:pointer}nb-option-list.empty{border:none}\n"], components: [{ type: i1.NbOptionListComponent, selector: "nb-option-list", inputs: ["size", "position"] }], directives: [{ type: i2.NbPortalDirective, selector: "[nbPortal]" }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-autocomplete', changeDetection: ChangeDetectionStrategy.OnPush, template: "<nb-option-list *nbPortal\n                [size]=\"size\"\n                [position]=\"overlayPosition\"\n                [style.width.px]=\"optionsWidth\"\n                role=\"listbox\"\n                [id]=\"id\"\n                [class.empty]=\"!options?.length\"\n                [ngClass]=\"optionsListClass\">\n  <ng-content select=\"nb-option, nb-option-group\"></ng-content>\n</nb-option-list>\n", styles: ["/*\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host(:hover){cursor:pointer}nb-option-list.empty{border:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { handleDisplayFn: [{
                type: Input
            }], size: [{
                type: Input
            }], activeFirst: [{
                type: Input
            }], optionsListClass: [{
                type: Input
            }], optionsPanelClass: [{
                type: Input
            }], optionsWidth: [{
                type: Input
            }], selectedChange: [{
                type: Output
            }], options: [{
                type: ContentChildren,
                args: [NbOptionComponent, { descendants: true }]
            }], portal: [{
                type: ViewChild,
                args: [NbPortalDirective]
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFFM0Qsc0RBQXNEO0FBQ3RELElBQUksa0JBQWtCLEdBQVcsQ0FBQyxDQUFDO0FBRW5DOzs7S0FHSztBQU9MLE1BQU0sT0FBTyx1QkFBdUI7SUEwRmxDLFlBQXNCLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBekZqQyxhQUFRLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFPeEQ7O2FBRUs7UUFDTCxPQUFFLEdBQVcsbUJBQW1CLGtCQUFrQixFQUFFLEVBQUUsQ0FBQztRQUV2RDs7OztXQUlHO1FBQ0gscUJBQWdCLEdBQWUsRUFBZ0IsQ0FBQztRQXdCaEQ7OztXQUdHO1FBQ00sU0FBSSxHQUFvQixRQUFRLENBQUM7UUFFMUM7O2FBRUs7UUFDSSxn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QUFNO3NCQURULFdBQVc7dUJBQUMsbUJBQW1CO2dCQUs1QixLQUFLO3NCQURSLFdBQVc7dUJBQUMsa0JBQWtCO2dCQUszQixLQUFLO3NCQURSLFdBQVc7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOYkNvbXBvbmVudFNpemUgfSBmcm9tICcuLi9jb21wb25lbnQtc2l6ZSc7XG5pbXBvcnQgeyBOYlBvc2l0aW9uIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbic7XG5pbXBvcnQgeyBOYk9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL29wdGlvbi9vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5iUG9ydGFsRGlyZWN0aXZlIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvbWFwcGluZyc7XG5cbi8vIENvbXBvbmVudCBjbGFzcyBzY29wZWQgY291bnRlciBmb3IgYXJpYSBhdHRyaWJ1dGVzLlxubGV0IGxhc3RBdXRvY29tcGxldGVJZDogbnVtYmVyID0gMDtcblxuLyoqXG4gKiBUaGUgYE5iQXV0b2NvbXBsZXRlQ29tcG9uZW50YCBvdmVybGF5IGNvbXBvbmVudC5cbiAqIFByb3ZpZGVzIGFuIGBOYk9wdGlvbkxpc3RgIG92ZXJsYXkgY29tcG9uZW50LlxuICogKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iQXV0b2NvbXBsZXRlQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKipcbiAgICogSFRNTCBpbnB1dCByZWZlcmVuY2UgdG8gd2hpY2ggYXV0b2NvbXBsZXRlIGNvbm5lY3RlZC5cbiAgICogKi9cbiAgaG9zdFJlZjogRWxlbWVudFJlZjtcblxuICAvKipcbiAgICogQ29tcG9uZW50IHNjb3BlZCBpZCBmb3IgYXJpYSBhdHRyaWJ1dGVzLlxuICAgKiAqL1xuICBpZDogc3RyaW5nID0gYG5iLWF1dG9jb21wbGV0ZS0ke2xhc3RBdXRvY29tcGxldGVJZCsrfWA7XG5cbiAgLyoqXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICogQ3VycmVudCBvdmVybGF5IHBvc2l0aW9uIGJlY2F1c2Ugb2Ygd2UgaGF2ZSB0byB0b2dnbGUgb3ZlcmxheVBvc2l0aW9uXG4gICAqIGluIFtuZ0NsYXNzXSBkaXJlY3Rpb24uXG4gICAqL1xuICBfb3ZlcmxheVBvc2l0aW9uOiBOYlBvc2l0aW9uID0gJycgYXMgTmJQb3NpdGlvbjtcblxuICBnZXQgb3ZlcmxheVBvc2l0aW9uKCk6IE5iUG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLl9vdmVybGF5UG9zaXRpb247XG4gIH1cblxuICBzZXQgb3ZlcmxheVBvc2l0aW9uKHZhbHVlOiBOYlBvc2l0aW9uKSB7XG4gICAgdGhpcy5fb3ZlcmxheVBvc2l0aW9uID0gdmFsdWU7XG4gICAgLy8gTmVlZCBydW4gY2hhbmdlIGRldGVjdGlvbiBhZnRlciBmaXJzdCBzZXQgZnJvbSBOYkF1dG9jb21wbGV0ZURpcmVjdGl2ZVxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2lkdGggb2YgdGhlIGlucHV0LlxuICAgKiAqL1xuICBnZXQgaG9zdFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaG9zdFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHBhc3NlZCBhcyBpbnB1dCB0byBwcm9jZXNzIGVhY2ggc3RyaW5nIG9wdGlvbiB2YWx1ZSBiZWZvcmUgcmVuZGVyLlxuICAgKiAqL1xuICBASW5wdXQoKSBoYW5kbGVEaXNwbGF5Rm46ICh2YWx1ZTogYW55KSA9PiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEF1dG9jb21wbGV0ZSBzaXplLCBhdmFpbGFibGUgc2l6ZXM6XG4gICAqIGB0aW55YCwgYHNtYWxsYCwgYG1lZGl1bWAgKGRlZmF1bHQpLCBgbGFyZ2VgLCBgZ2lhbnRgXG4gICAqL1xuICBASW5wdXQoKSBzaXplOiBOYkNvbXBvbmVudFNpemUgPSAnbWVkaXVtJztcblxuICAvKipcbiAgICogRmxhZyBwYXNzZWQgYXMgaW5wdXQgdG8gYWx3YXlzIG1ha2UgZmlyc3Qgb3B0aW9uIGFjdGl2ZS5cbiAgICogKi9cbiAgQElucHV0KCkgYWN0aXZlRmlyc3Q6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIGNsYXNzIHRvIGJlIHNldCBvbiBgbmItb3B0aW9uYHMgY29udGFpbmVyIChgbmItb3B0aW9uLWxpc3RgKVxuICAgKiAqL1xuICBASW5wdXQoKSBvcHRpb25zTGlzdENsYXNzOiBOZ0NsYXNzWyduZ0NsYXNzJ107XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyBjbGFzcyBmb3IgdGhlIG92ZXJsYXkgcGFuZWwgd2l0aCBvcHRpb25zXG4gICAqICovXG4gIEBJbnB1dCgpIG9wdGlvbnNQYW5lbENsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHdpZHRoIChpbiBwaXhlbHMpIHRvIGJlIHNldCBvbiBgbmItb3B0aW9uYHMgY29udGFpbmVyIChgbmItb3B0aW9uLWxpc3RgKVxuICAgKiAqL1xuICBASW5wdXQoKVxuICBnZXQgb3B0aW9uc1dpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnNXaWR0aCA/PyB0aGlzLmhvc3RXaWR0aDtcbiAgfVxuICBzZXQgb3B0aW9uc1dpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vcHRpb25zV2lkdGggPSB2YWx1ZTtcbiAgfVxuICBwcm90ZWN0ZWQgX29wdGlvbnNXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBXaWxsIGJlIGVtaXR0ZWQgd2hlbiBzZWxlY3RlZCB2YWx1ZSBjaGFuZ2VzLlxuICAgKiAqL1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogTGlzdCBvZiBgTmJPcHRpb25Db21wb25lbnRgJ3MgY29tcG9uZW50cyBwYXNzZWQgYXMgY29udGVudC5cbiAgICogKi9cbiAgQENvbnRlbnRDaGlsZHJlbihOYk9wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBvcHRpb25zOiBRdWVyeUxpc3Q8TmJPcHRpb25Db21wb25lbnQ8VD4+O1xuXG4gIC8qKlxuICAgKiBOYk9wdGlvbkxpc3Qgd2l0aCBvcHRpb25zIGNvbnRlbnQuXG4gICAqICovXG4gIEBWaWV3Q2hpbGQoTmJQb3J0YWxEaXJlY3RpdmUpIHBvcnRhbDogTmJQb3J0YWxEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5vcHRpb25zLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQXV0b2NvbXBsZXRlIGtub3dzIG5vdGhpbmcgYWJvdXQgaG9zdCBodG1sIGlucHV0IGVsZW1lbnQuXG4gICAqIFNvLCBhdHRhY2ggbWV0aG9kIHNldCBpbnB1dCBob3N0UmVmIGZvciBzdHlsaW5nLlxuICAgKiAqL1xuICBzZXRIb3N0KGhvc3RSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmhvc3RSZWYgPSBob3N0UmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3BhZ2F0ZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICogKi9cbiAgZW1pdFNlbGVjdGVkKHNlbGVjdGVkOiBUKSB7XG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHNlbGVjdGVkKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS10aW55JylcbiAgZ2V0IHRpbnkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3RpbnknO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1zbWFsbCcpXG4gIGdldCBzbWFsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnc21hbGwnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1tZWRpdW0nKVxuICBnZXQgbWVkaXVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdtZWRpdW0nO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1sYXJnZScpXG4gIGdldCBsYXJnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnbGFyZ2UnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1naWFudCcpXG4gIGdldCBnaWFudCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnZ2lhbnQnO1xuICB9XG59XG4iLCI8bmItb3B0aW9uLWxpc3QgKm5iUG9ydGFsXG4gICAgICAgICAgICAgICAgW3NpemVdPVwic2l6ZVwiXG4gICAgICAgICAgICAgICAgW3Bvc2l0aW9uXT1cIm92ZXJsYXlQb3NpdGlvblwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cIm9wdGlvbnNXaWR0aFwiXG4gICAgICAgICAgICAgICAgcm9sZT1cImxpc3Rib3hcIlxuICAgICAgICAgICAgICAgIFtpZF09XCJpZFwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmVtcHR5XT1cIiFvcHRpb25zPy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIm9wdGlvbnNMaXN0Q2xhc3NcIj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItb3B0aW9uLCBuYi1vcHRpb24tZ3JvdXBcIj48L25nLWNvbnRlbnQ+XG48L25iLW9wdGlvbi1saXN0PlxuIl19