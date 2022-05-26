import { ElementRef, InjectionToken } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkHeaderCell, CdkHeaderCellDef } from '@angular/cdk/table';
import * as i0 from "@angular/core";
/**
 * Cell definition for the nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export declare class NbCellDefDirective extends CdkCellDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbCellDefDirective, "[nbCellDef]", never, {}, {}, never>;
}
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export declare class NbHeaderCellDefDirective extends CdkHeaderCellDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbHeaderCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbHeaderCellDefDirective, "[nbHeaderCellDef]", never, {}, {}, never>;
}
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export declare class NbFooterCellDefDirective extends CdkFooterCellDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFooterCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbFooterCellDefDirective, "[nbFooterCellDef]", never, {}, {}, never>;
}
export declare const NB_SORT_HEADER_COLUMN_DEF: InjectionToken<unknown>;
/**
 * Column definition for the nb-table.
 * Defines a set of cells available for a table column.
 */
export declare class NbColumnDefDirective extends CdkColumnDef {
    /** Unique name for this column. */
    get name(): string;
    set name(value: string);
    /** Whether this column should be sticky positioned at the start of the row */
    sticky: boolean;
    /** Whether this column should be sticky positioned on the end of the row */
    get stickyEnd(): boolean;
    set stickyEnd(value: boolean);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbColumnDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbColumnDefDirective, "[nbColumnDef]", never, { "name": "nbColumnDef"; "sticky": "sticky"; "stickyEnd": "stickyEnd"; }, {}, never>;
}
/** Header cell template container that adds the right classes and role. */
export declare class NbHeaderCellDirective extends CdkHeaderCell {
    constructor(columnDef: NbColumnDefDirective, elementRef: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbHeaderCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbHeaderCellDirective, "nb-header-cell, th[nbHeaderCell]", never, {}, {}, never>;
}
/** Footer cell template container that adds the right classes and role. */
export declare class NbFooterCellDirective extends CdkFooterCell {
    constructor(columnDef: NbColumnDefDirective, elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFooterCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbFooterCellDirective, "nb-footer-cell, td[nbFooterCell]", never, {}, {}, never>;
}
/** Cell template container that adds the right classes and role. */
export declare class NbCellDirective extends CdkCell {
    constructor(columnDef: NbColumnDefDirective, elementRef: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbCellDirective, "nb-cell, td[nbCell]", never, {}, {}, never>;
}
