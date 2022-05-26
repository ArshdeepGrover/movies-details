/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license infornbion.
 */
import { Directive, InjectionToken, Input } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkHeaderCell, CdkHeaderCellDef, } from '@angular/cdk/table';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
/**
 * Cell definition for the nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export class NbCellDefDirective extends CdkCellDef {
}
NbCellDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCellDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbCellDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbCellDefDirective, selector: "[nbCellDef]", providers: [{ provide: CdkCellDef, useExisting: NbCellDefDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCellDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbCellDef]',
                    providers: [{ provide: CdkCellDef, useExisting: NbCellDefDirective }],
                }]
        }] });
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export class NbHeaderCellDefDirective extends CdkHeaderCellDef {
}
NbHeaderCellDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbHeaderCellDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbHeaderCellDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbHeaderCellDefDirective, selector: "[nbHeaderCellDef]", providers: [{ provide: CdkHeaderCellDef, useExisting: NbHeaderCellDefDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbHeaderCellDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbHeaderCellDef]',
                    providers: [{ provide: CdkHeaderCellDef, useExisting: NbHeaderCellDefDirective }],
                }]
        }] });
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export class NbFooterCellDefDirective extends CdkFooterCellDef {
}
NbFooterCellDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFooterCellDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbFooterCellDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbFooterCellDefDirective, selector: "[nbFooterCellDef]", providers: [{ provide: CdkFooterCellDef, useExisting: NbFooterCellDefDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFooterCellDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbFooterCellDef]',
                    providers: [{ provide: CdkFooterCellDef, useExisting: NbFooterCellDefDirective }],
                }]
        }] });
export const NB_SORT_HEADER_COLUMN_DEF = new InjectionToken('NB_SORT_HEADER_COLUMN_DEF');
/**
 * Column definition for the nb-table.
 * Defines a set of cells available for a table column.
 */
export class NbColumnDefDirective extends CdkColumnDef {
    /** Unique name for this column. */
    get name() {
        return this._name;
    }
    set name(value) {
        this._setNameInput(value);
    }
    /** Whether this column should be sticky positioned on the end of the row */
    get stickyEnd() {
        return this._stickyEnd;
    }
    set stickyEnd(value) {
        const prevValue = this._stickyEnd;
        this._stickyEnd = coerceBooleanProperty(value);
        this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
}
NbColumnDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbColumnDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbColumnDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbColumnDefDirective, selector: "[nbColumnDef]", inputs: { name: ["nbColumnDef", "name"], sticky: "sticky", stickyEnd: "stickyEnd" }, providers: [
        { provide: CdkColumnDef, useExisting: NbColumnDefDirective },
        { provide: NB_SORT_HEADER_COLUMN_DEF, useExisting: NbColumnDefDirective },
    ], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbColumnDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbColumnDef]',
                    providers: [
                        { provide: CdkColumnDef, useExisting: NbColumnDefDirective },
                        { provide: NB_SORT_HEADER_COLUMN_DEF, useExisting: NbColumnDefDirective },
                    ],
                }]
        }], propDecorators: { name: [{
                type: Input,
                args: ['nbColumnDef']
            }], sticky: [{
                type: Input
            }], stickyEnd: [{
                type: Input
            }] } });
/** Header cell template container that adds the right classes and role. */
export class NbHeaderCellDirective extends CdkHeaderCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
    }
}
NbHeaderCellDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbHeaderCellDirective, deps: [{ token: NbColumnDefDirective }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NbHeaderCellDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbHeaderCellDirective, selector: "nb-header-cell, th[nbHeaderCell]", host: { attributes: { "role": "columnheader" }, classAttribute: "nb-header-cell" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbHeaderCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'nb-header-cell, th[nbHeaderCell]',
                    host: {
                        'class': 'nb-header-cell',
                        'role': 'columnheader',
                    },
                }]
        }], ctorParameters: function () { return [{ type: NbColumnDefDirective }, { type: i0.ElementRef }]; } });
/** Footer cell template container that adds the right classes and role. */
export class NbFooterCellDirective extends CdkFooterCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
    }
}
NbFooterCellDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFooterCellDirective, deps: [{ token: NbColumnDefDirective }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NbFooterCellDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbFooterCellDirective, selector: "nb-footer-cell, td[nbFooterCell]", host: { attributes: { "role": "gridcell" }, classAttribute: "nb-footer-cell" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFooterCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'nb-footer-cell, td[nbFooterCell]',
                    host: {
                        'class': 'nb-footer-cell',
                        'role': 'gridcell',
                    },
                }]
        }], ctorParameters: function () { return [{ type: NbColumnDefDirective }, { type: i0.ElementRef }]; } });
/** Cell template container that adds the right classes and role. */
export class NbCellDirective extends CdkCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
    }
}
NbCellDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCellDirective, deps: [{ token: NbColumnDefDirective }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NbCellDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbCellDirective, selector: "nb-cell, td[nbCell]", host: { attributes: { "role": "gridcell" }, classAttribute: "nb-cell" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'nb-cell, td[nbCell]',
                    host: {
                        'class': 'nb-cell',
                        'role': 'gridcell',
                    },
                }]
        }], ctorParameters: function () { return [{ type: NbColumnDefDirective }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jZGsvdGFibGUvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBYyxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFDTCxPQUFPLEVBQ1AsVUFBVSxFQUNWLFlBQVksRUFDWixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixnQkFBZ0IsR0FDakIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFOUQ7OztHQUdHO0FBS0gsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7OytHQUFyQyxrQkFBa0I7bUdBQWxCLGtCQUFrQixzQ0FGbEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLENBQUM7MkZBRTFELGtCQUFrQjtrQkFKOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsb0JBQW9CLEVBQUUsQ0FBQztpQkFDdEU7O0FBSUQ7OztHQUdHO0FBS0gsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGdCQUFnQjs7cUhBQWpELHdCQUF3Qjt5R0FBeEIsd0JBQXdCLDRDQUZ4QixDQUFDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBRSxDQUFDOzJGQUV0RSx3QkFBd0I7a0JBSnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVywwQkFB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Q0FBQyxDQUFDO0lBQ3hGLENBQUM7O2tIQUxVLHFCQUFxQixrQkFDVCxvQkFBb0I7c0dBRGhDLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQVBqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixNQUFNLEVBQUUsVUFBVTtxQkFDbkI7aUJBQ0Y7MERBRXdCLG9CQUFvQjtBQU83QyxvRUFBb0U7QUFRcEUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsT0FBTztJQUMxQyxZQUFZLFNBQStCLEVBQy9CLFVBQW1DO1FBQzdDLEtBQUssQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDN0IsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUN4RixDQUFDOzs0R0FMVSxlQUFlLGtCQUNILG9CQUFvQjtnR0FEaEMsZUFBZTsyRkFBZixlQUFlO2tCQVAzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsU0FBUzt3QkFDbEIsTUFBTSxFQUFFLFVBQVU7cUJBQ25CO2lCQUNGOzBEQUV3QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JuYmlvbi5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdGlvblRva2VuLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2RrQ2VsbCxcbiAgQ2RrQ2VsbERlZixcbiAgQ2RrQ29sdW1uRGVmLFxuICBDZGtGb290ZXJDZWxsLFxuICBDZGtGb290ZXJDZWxsRGVmLFxuICBDZGtIZWFkZXJDZWxsLFxuICBDZGtIZWFkZXJDZWxsRGVmLFxufSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuLyoqXG4gKiBDZWxsIGRlZmluaXRpb24gZm9yIHRoZSBuYi10YWJsZS5cbiAqIENhcHR1cmVzIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtbidzIGRhdGEgcm93IGNlbGwgYXMgd2VsbCBhcyBjZWxsLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuYkNlbGxEZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtDZWxsRGVmLCB1c2VFeGlzdGluZzogTmJDZWxsRGVmRGlyZWN0aXZlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNlbGxEZWZEaXJlY3RpdmUgZXh0ZW5kcyBDZGtDZWxsRGVmIHtcbn1cblxuLyoqXG4gKiBIZWFkZXIgY2VsbCBkZWZpbml0aW9uIGZvciB0aGUgbmItdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW4ncyBoZWFkZXIgY2VsbCBhbmQgYXMgd2VsbCBhcyBjZWxsLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuYkhlYWRlckNlbGxEZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtIZWFkZXJDZWxsRGVmLCB1c2VFeGlzdGluZzogTmJIZWFkZXJDZWxsRGVmRGlyZWN0aXZlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOYkhlYWRlckNlbGxEZWZEaXJlY3RpdmUgZXh0ZW5kcyBDZGtIZWFkZXJDZWxsRGVmIHtcbn1cblxuLyoqXG4gKiBGb290ZXIgY2VsbCBkZWZpbml0aW9uIGZvciB0aGUgbmItdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW4ncyBmb290ZXIgY2VsbCBhbmQgYXMgd2VsbCBhcyBjZWxsLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuYkZvb3RlckNlbGxEZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtGb290ZXJDZWxsRGVmLCB1c2VFeGlzdGluZzogTmJGb290ZXJDZWxsRGVmRGlyZWN0aXZlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOYkZvb3RlckNlbGxEZWZEaXJlY3RpdmUgZXh0ZW5kcyBDZGtGb290ZXJDZWxsRGVmIHtcbn1cblxuZXhwb3J0IGNvbnN0IE5CX1NPUlRfSEVBREVSX0NPTFVNTl9ERUYgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ05CX1NPUlRfSEVBREVSX0NPTFVNTl9ERUYnKTtcblxuLyoqXG4gKiBDb2x1bW4gZGVmaW5pdGlvbiBmb3IgdGhlIG5iLXRhYmxlLlxuICogRGVmaW5lcyBhIHNldCBvZiBjZWxscyBhdmFpbGFibGUgZm9yIGEgdGFibGUgY29sdW1uLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmJDb2x1bW5EZWZdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtDb2x1bW5EZWYsIHVzZUV4aXN0aW5nOiBOYkNvbHVtbkRlZkRpcmVjdGl2ZSB9LFxuICAgIHsgcHJvdmlkZTogTkJfU09SVF9IRUFERVJfQ09MVU1OX0RFRiwgdXNlRXhpc3Rpbmc6IE5iQ29sdW1uRGVmRGlyZWN0aXZlIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iQ29sdW1uRGVmRGlyZWN0aXZlIGV4dGVuZHMgQ2RrQ29sdW1uRGVmIHtcbiAgLyoqIFVuaXF1ZSBuYW1lIGZvciB0aGlzIGNvbHVtbi4gKi9cbiAgQElucHV0KCduYkNvbHVtbkRlZicpXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NldE5hbWVJbnB1dCh2YWx1ZSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIGNvbHVtbiBzaG91bGQgYmUgc3RpY2t5IHBvc2l0aW9uZWQgYXQgdGhlIHN0YXJ0IG9mIHRoZSByb3cgKi9cbiAgQElucHV0KCkgc3RpY2t5OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoaXMgY29sdW1uIHNob3VsZCBiZSBzdGlja3kgcG9zaXRpb25lZCBvbiB0aGUgZW5kIG9mIHRoZSByb3cgKi9cbiAgQElucHV0KClcbiAgZ2V0IHN0aWNreUVuZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RpY2t5RW5kO1xuICB9XG4gIHNldCBzdGlja3lFbmQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLl9zdGlja3lFbmQ7XG4gICAgdGhpcy5fc3RpY2t5RW5kID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLl9oYXNTdGlja3lDaGFuZ2VkID0gcHJldlZhbHVlICE9PSB0aGlzLl9zdGlja3lFbmQ7XG4gIH1cbn1cblxuLyoqIEhlYWRlciBjZWxsIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMgYW5kIHJvbGUuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduYi1oZWFkZXItY2VsbCwgdGhbbmJIZWFkZXJDZWxsXScsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbmItaGVhZGVyLWNlbGwnLFxuICAgICdyb2xlJzogJ2NvbHVtbmhlYWRlcicsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5iSGVhZGVyQ2VsbERpcmVjdGl2ZSBleHRlbmRzIENka0hlYWRlckNlbGwge1xuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IE5iQ29sdW1uRGVmRGlyZWN0aXZlLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5iLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgfVxufVxuXG4vKiogRm9vdGVyIGNlbGwgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgYWRkcyB0aGUgcmlnaHQgY2xhc3NlcyBhbmQgcm9sZS4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25iLWZvb3Rlci1jZWxsLCB0ZFtuYkZvb3RlckNlbGxdJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICduYi1mb290ZXItY2VsbCcsXG4gICAgJ3JvbGUnOiAnZ3JpZGNlbGwnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOYkZvb3RlckNlbGxEaXJlY3RpdmUgZXh0ZW5kcyBDZGtGb290ZXJDZWxsIHtcbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBOYkNvbHVtbkRlZkRpcmVjdGl2ZSxcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5iLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgfVxufVxuXG4vKiogQ2VsbCB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBhZGRzIHRoZSByaWdodCBjbGFzc2VzIGFuZCByb2xlLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmItY2VsbCwgdGRbbmJDZWxsXScsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbmItY2VsbCcsXG4gICAgJ3JvbGUnOiAnZ3JpZGNlbGwnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOYkNlbGxEaXJlY3RpdmUgZXh0ZW5kcyBDZGtDZWxsIHtcbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBOYkNvbHVtbkRlZkRpcmVjdGl2ZSxcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBuYi1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gIH1cbn1cbiJdfQ==