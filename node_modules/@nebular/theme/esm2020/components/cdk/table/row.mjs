import { Component, Directive, Input } from '@angular/core';
import { CdkFooterRow, CdkFooterRowDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkCellOutlet, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, NoDataRowOutlet, } from '@angular/cdk/table';
import * as i0 from "@angular/core";
export class NbDataRowOutletDirective extends DataRowOutlet {
}
NbDataRowOutletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDataRowOutletDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbDataRowOutletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbDataRowOutletDirective, selector: "[nbRowOutlet]", providers: [{ provide: DataRowOutlet, useExisting: NbDataRowOutletDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDataRowOutletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbRowOutlet]',
                    providers: [{ provide: DataRowOutlet, useExisting: NbDataRowOutletDirective }],
                }]
        }] });
export class NbHeaderRowOutletDirective extends HeaderRowOutlet {
}
NbHeaderRowOutletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbHeaderRowOutletDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbHeaderRowOutletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbHeaderRowOutletDirective, selector: "[nbHeaderRowOutlet]", providers: [{ provide: HeaderRowOutlet, useExisting: NbHeaderRowOutletDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbHeaderRowOutletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbHeaderRowOutlet]',
                    providers: [{ provide: HeaderRowOutlet, useExisting: NbHeaderRowOutletDirective }],
                }]
        }] });
export class NbFooterRowOutletDirective extends FooterRowOutlet {
}
NbFooterRowOutletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFooterRowOutletDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbFooterRowOutletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbFooterRowOutletDirective, selector: "[nbFooterRowOutlet]", providers: [{ provide: FooterRowOutlet, useExisting: NbFooterRowOutletDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFooterRowOutletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbFooterRowOutlet]',
                    providers: [{ provide: FooterRowOutlet, useExisting: NbFooterRowOutletDirective }],
                }]
        }] });
export class NbNoDataRowOutletDirective extends NoDataRowOutlet {
}
NbNoDataRowOutletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbNoDataRowOutletDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbNoDataRowOutletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbNoDataRowOutletDirective, selector: "[nbNoDataRowOutlet]", providers: [{ provide: NoDataRowOutlet, useExisting: NbNoDataRowOutletDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbNoDataRowOutletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbNoDataRowOutlet]',
                    providers: [{ provide: NoDataRowOutlet, useExisting: NbNoDataRowOutletDirective }],
                }]
        }] });
export class NbCellOutletDirective extends CdkCellOutlet {
}
NbCellOutletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCellOutletDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbCellOutletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbCellOutletDirective, selector: "[nbCellOutlet]", providers: [{ provide: CdkCellOutlet, useExisting: NbCellOutletDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCellOutletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbCellOutlet]',
                    providers: [{ provide: CdkCellOutlet, useExisting: NbCellOutletDirective }],
                }]
        }] });
/**
 * Header row definition for the nb-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
export class NbHeaderRowDefDirective extends CdkHeaderRowDef {
}
NbHeaderRowDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbHeaderRowDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbHeaderRowDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbHeaderRowDefDirective, selector: "[nbHeaderRowDef]", inputs: { columns: ["nbHeaderRowDef", "columns"], sticky: ["nbHeaderRowDefSticky", "sticky"] }, providers: [{ provide: CdkHeaderRowDef, useExisting: NbHeaderRowDefDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbHeaderRowDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbHeaderRowDef]',
                    providers: [{ provide: CdkHeaderRowDef, useExisting: NbHeaderRowDefDirective }],
                }]
        }], propDecorators: { columns: [{
                type: Input,
                args: ['nbHeaderRowDef']
            }], sticky: [{
                type: Input,
                args: ['nbHeaderRowDefSticky']
            }] } });
/**
 * Footer row definition for the nb-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
export class NbFooterRowDefDirective extends CdkFooterRowDef {
}
NbFooterRowDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFooterRowDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbFooterRowDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbFooterRowDefDirective, selector: "[nbFooterRowDef]", inputs: { columns: ["nbFooterRowDef", "columns"], sticky: ["nbFooterRowDefSticky", "sticky"] }, providers: [{ provide: CdkFooterRowDef, useExisting: NbFooterRowDefDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFooterRowDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbFooterRowDef]',
                    providers: [{ provide: CdkFooterRowDef, useExisting: NbFooterRowDefDirective }],
                }]
        }], propDecorators: { columns: [{
                type: Input,
                args: ['nbFooterRowDef']
            }], sticky: [{
                type: Input,
                args: ['nbFooterRowDefSticky']
            }] } });
/**
 * Data row definition for the nb-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
export class NbRowDefDirective extends CdkRowDef {
}
NbRowDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRowDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbRowDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbRowDefDirective, selector: "[nbRowDef]", inputs: { columns: ["nbRowDefColumns", "columns"], when: ["nbRowDefWhen", "when"] }, providers: [{ provide: CdkRowDef, useExisting: NbRowDefDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRowDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbRowDef]',
                    providers: [{ provide: CdkRowDef, useExisting: NbRowDefDirective }],
                }]
        }], propDecorators: { columns: [{
                type: Input,
                args: ['nbRowDefColumns']
            }], when: [{
                type: Input,
                args: ['nbRowDefWhen']
            }] } });
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export class NbHeaderRowComponent extends CdkHeaderRow {
}
NbHeaderRowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbHeaderRowComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NbHeaderRowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbHeaderRowComponent, selector: "nb-header-row, tr[nbHeaderRow]", host: { attributes: { "role": "row" }, classAttribute: "nb-header-row" }, providers: [{ provide: CdkHeaderRow, useExisting: NbHeaderRowComponent }], usesInheritance: true, ngImport: i0, template: `
    <ng-container nbCellOutlet></ng-container>`, isInline: true, directives: [{ type: NbCellOutletDirective, selector: "[nbCellOutlet]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbHeaderRowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-header-row, tr[nbHeaderRow]',
                    template: `
    <ng-container nbCellOutlet></ng-container>`,
                    host: {
                        'class': 'nb-header-row',
                        'role': 'row',
                    },
                    providers: [{ provide: CdkHeaderRow, useExisting: NbHeaderRowComponent }],
                }]
        }] });
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export class NbFooterRowComponent extends CdkFooterRow {
}
NbFooterRowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFooterRowComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NbFooterRowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbFooterRowComponent, selector: "nb-footer-row, tr[nbFooterRow]", host: { attributes: { "role": "row" }, classAttribute: "nb-footer-row" }, providers: [{ provide: CdkFooterRow, useExisting: NbFooterRowComponent }], usesInheritance: true, ngImport: i0, template: `
    <ng-container nbCellOutlet></ng-container>`, isInline: true, directives: [{ type: NbCellOutletDirective, selector: "[nbCellOutlet]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFooterRowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-footer-row, tr[nbFooterRow]',
                    template: `
    <ng-container nbCellOutlet></ng-container>`,
                    host: {
                        'class': 'nb-footer-row',
                        'role': 'row',
                    },
                    providers: [{ provide: CdkFooterRow, useExisting: NbFooterRowComponent }],
                }]
        }] });
/** Data row template container that contains the cell outlet. Adds the right class and role. */
export class NbRowComponent extends CdkRow {
}
NbRowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRowComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NbRowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbRowComponent, selector: "nb-row, tr[nbRow]", host: { attributes: { "role": "row" }, classAttribute: "nb-row" }, providers: [{ provide: CdkRow, useExisting: NbRowComponent }], usesInheritance: true, ngImport: i0, template: `
    <ng-container nbCellOutlet></ng-container>`, isInline: true, directives: [{ type: NbCellOutletDirective, selector: "[nbCellOutlet]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-row, tr[nbRow]',
                    template: `
    <ng-container nbCellOutlet></ng-container>`,
                    host: {
                        'class': 'nb-row',
                        'role': 'row',
                    },
                    providers: [{ provide: CdkRow, useExisting: NbRowComponent }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2Nkay90YWJsZS9yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFDTCxZQUFZLEVBQ1osZUFBZSxFQUNmLFlBQVksRUFDWixlQUFlLEVBQ2YsTUFBTSxFQUNOLFNBQVMsRUFDVCxhQUFhLEVBQ2IsYUFBYSxFQUNiLGVBQWUsRUFDZixlQUFlLEVBQ2YsZUFBZSxHQUNoQixNQUFNLG9CQUFvQixDQUFDOztBQU01QixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsYUFBYTs7cUhBQTlDLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLHdDQUZ4QixDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQzsyRkFFbkUsd0JBQXdCO2tCQUpwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVywwQkFBMEIsRUFBRSxDQUFDO2lCQUMvRTs7QUFPRCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsZUFBZTs7dUhBQWxELDBCQUEwQjsyR0FBMUIsMEJBQTBCLDhDQUYxQixDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQzsyRkFFdkUsMEJBQTBCO2tCQUp0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLDRCQUE0QixFQUFFLENBQUM7aUJBQ25GOztBQU9ELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxlQUFlOzt1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QWlGckIsY0FBYztrQkFWMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUU7K0NBQ21DO29CQUM3QyxJQUFJLEVBQUU7d0JBQ0osT0FBTyxFQUFFLFFBQVE7d0JBQ2pCLE1BQU0sRUFBRSxLQUFLO3FCQUNkO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLGdCQUFnQixFQUFFLENBQUM7aUJBQzlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtGb290ZXJSb3csXG4gIENka0Zvb3RlclJvd0RlZixcbiAgQ2RrSGVhZGVyUm93LFxuICBDZGtIZWFkZXJSb3dEZWYsXG4gIENka1JvdyxcbiAgQ2RrUm93RGVmLFxuICBDZGtDZWxsT3V0bGV0LFxuICBEYXRhUm93T3V0bGV0LFxuICBIZWFkZXJSb3dPdXRsZXQsXG4gIEZvb3RlclJvd091dGxldCxcbiAgTm9EYXRhUm93T3V0bGV0LFxufSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmJSb3dPdXRsZXRdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBEYXRhUm93T3V0bGV0LCB1c2VFeGlzdGluZzogTmJEYXRhUm93T3V0bGV0RGlyZWN0aXZlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOYkRhdGFSb3dPdXRsZXREaXJlY3RpdmUgZXh0ZW5kcyBEYXRhUm93T3V0bGV0IHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuYkhlYWRlclJvd091dGxldF0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEhlYWRlclJvd091dGxldCwgdXNlRXhpc3Rpbmc6IE5iSGVhZGVyUm93T3V0bGV0RGlyZWN0aXZlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOYkhlYWRlclJvd091dGxldERpcmVjdGl2ZSBleHRlbmRzIEhlYWRlclJvd091dGxldCB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmJGb290ZXJSb3dPdXRsZXRdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBGb290ZXJSb3dPdXRsZXQsIHVzZUV4aXN0aW5nOiBOYkZvb3RlclJvd091dGxldERpcmVjdGl2ZSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTmJGb290ZXJSb3dPdXRsZXREaXJlY3RpdmUgZXh0ZW5kcyBGb290ZXJSb3dPdXRsZXQge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25iTm9EYXRhUm93T3V0bGV0XScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTm9EYXRhUm93T3V0bGV0LCB1c2VFeGlzdGluZzogTmJOb0RhdGFSb3dPdXRsZXREaXJlY3RpdmUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5iTm9EYXRhUm93T3V0bGV0RGlyZWN0aXZlIGV4dGVuZHMgTm9EYXRhUm93T3V0bGV0IHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuYkNlbGxPdXRsZXRdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtDZWxsT3V0bGV0LCB1c2VFeGlzdGluZzogTmJDZWxsT3V0bGV0RGlyZWN0aXZlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNlbGxPdXRsZXREaXJlY3RpdmUgZXh0ZW5kcyBDZGtDZWxsT3V0bGV0IHt9XG5cbi8qKlxuICogSGVhZGVyIHJvdyBkZWZpbml0aW9uIGZvciB0aGUgbmItdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgaGVhZGVyIHJvdydzIHRlbXBsYXRlIGFuZCBvdGhlciBoZWFkZXIgcHJvcGVydGllcyBzdWNoIGFzIHRoZSBjb2x1bW5zIHRvIGRpc3BsYXkuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuYkhlYWRlclJvd0RlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka0hlYWRlclJvd0RlZiwgdXNlRXhpc3Rpbmc6IE5iSGVhZGVyUm93RGVmRGlyZWN0aXZlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOYkhlYWRlclJvd0RlZkRpcmVjdGl2ZSBleHRlbmRzIENka0hlYWRlclJvd0RlZiB7XG4gIEBJbnB1dCgnbmJIZWFkZXJSb3dEZWYnKSBjb2x1bW5zOiBJdGVyYWJsZTxzdHJpbmc+O1xuICBASW5wdXQoJ25iSGVhZGVyUm93RGVmU3RpY2t5Jykgc3RpY2t5OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEZvb3RlciByb3cgZGVmaW5pdGlvbiBmb3IgdGhlIG5iLXRhYmxlLlxuICogQ2FwdHVyZXMgdGhlIGZvb3RlciByb3cncyB0ZW1wbGF0ZSBhbmQgb3RoZXIgZm9vdGVyIHByb3BlcnRpZXMgc3VjaCBhcyB0aGUgY29sdW1ucyB0byBkaXNwbGF5LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmJGb290ZXJSb3dEZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtGb290ZXJSb3dEZWYsIHVzZUV4aXN0aW5nOiBOYkZvb3RlclJvd0RlZkRpcmVjdGl2ZSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTmJGb290ZXJSb3dEZWZEaXJlY3RpdmUgZXh0ZW5kcyBDZGtGb290ZXJSb3dEZWYge1xuICBASW5wdXQoJ25iRm9vdGVyUm93RGVmJykgY29sdW1uczogSXRlcmFibGU8c3RyaW5nPjtcbiAgQElucHV0KCduYkZvb3RlclJvd0RlZlN0aWNreScpIHN0aWNreTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBEYXRhIHJvdyBkZWZpbml0aW9uIGZvciB0aGUgbmItdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgZGF0YSByb3cncyB0ZW1wbGF0ZSBhbmQgb3RoZXIgcHJvcGVydGllcyBzdWNoIGFzIHRoZSBjb2x1bW5zIHRvIGRpc3BsYXkgYW5kXG4gKiBhIHdoZW4gcHJlZGljYXRlIHRoYXQgZGVzY3JpYmVzIHdoZW4gdGhpcyByb3cgc2hvdWxkIGJlIHVzZWQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuYlJvd0RlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka1Jvd0RlZiwgdXNlRXhpc3Rpbmc6IE5iUm93RGVmRGlyZWN0aXZlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOYlJvd0RlZkRpcmVjdGl2ZTxUPiBleHRlbmRzIENka1Jvd0RlZjxUPiB7XG4gIEBJbnB1dCgnbmJSb3dEZWZDb2x1bW5zJykgY29sdW1uczogSXRlcmFibGU8c3RyaW5nPjtcbiAgQElucHV0KCduYlJvd0RlZldoZW4nKSB3aGVuOiAoaW5kZXg6IG51bWJlciwgcm93RGF0YTogVCkgPT4gYm9vbGVhbjtcbn1cblxuLyoqIEZvb3RlciB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgY2VsbCBvdXRsZXQuIEFkZHMgdGhlIHJpZ2h0IGNsYXNzIGFuZCByb2xlLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItaGVhZGVyLXJvdywgdHJbbmJIZWFkZXJSb3ddJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyIG5iQ2VsbE91dGxldD48L25nLWNvbnRhaW5lcj5gLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ25iLWhlYWRlci1yb3cnLFxuICAgICdyb2xlJzogJ3JvdycsXG4gIH0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrSGVhZGVyUm93LCB1c2VFeGlzdGluZzogTmJIZWFkZXJSb3dDb21wb25lbnQgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5iSGVhZGVyUm93Q29tcG9uZW50IGV4dGVuZHMgQ2RrSGVhZGVyUm93IHtcbn1cblxuLyoqIEZvb3RlciB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgY2VsbCBvdXRsZXQuIEFkZHMgdGhlIHJpZ2h0IGNsYXNzIGFuZCByb2xlLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItZm9vdGVyLXJvdywgdHJbbmJGb290ZXJSb3ddJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyIG5iQ2VsbE91dGxldD48L25nLWNvbnRhaW5lcj5gLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ25iLWZvb3Rlci1yb3cnLFxuICAgICdyb2xlJzogJ3JvdycsXG4gIH0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrRm9vdGVyUm93LCB1c2VFeGlzdGluZzogTmJGb290ZXJSb3dDb21wb25lbnQgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5iRm9vdGVyUm93Q29tcG9uZW50IGV4dGVuZHMgQ2RrRm9vdGVyUm93IHtcbn1cblxuLyoqIERhdGEgcm93IHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoZSBjZWxsIG91dGxldC4gQWRkcyB0aGUgcmlnaHQgY2xhc3MgYW5kIHJvbGUuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1yb3csIHRyW25iUm93XScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciBuYkNlbGxPdXRsZXQ+PC9uZy1jb250YWluZXI+YCxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICduYi1yb3cnLFxuICAgICdyb2xlJzogJ3JvdycsXG4gIH0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrUm93LCB1c2VFeGlzdGluZzogTmJSb3dDb21wb25lbnQgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5iUm93Q29tcG9uZW50IGV4dGVuZHMgQ2RrUm93IHtcbn1cbiJdfQ==