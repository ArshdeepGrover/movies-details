import { CdkFooterRow, CdkFooterRowDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkCellOutlet, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, NoDataRowOutlet } from '@angular/cdk/table';
import * as i0 from "@angular/core";
export declare class NbDataRowOutletDirective extends DataRowOutlet {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDataRowOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbDataRowOutletDirective, "[nbRowOutlet]", never, {}, {}, never>;
}
export declare class NbHeaderRowOutletDirective extends HeaderRowOutlet {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbHeaderRowOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbHeaderRowOutletDirective, "[nbHeaderRowOutlet]", never, {}, {}, never>;
}
export declare class NbFooterRowOutletDirective extends FooterRowOutlet {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFooterRowOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbFooterRowOutletDirective, "[nbFooterRowOutlet]", never, {}, {}, never>;
}
export declare class NbNoDataRowOutletDirective extends NoDataRowOutlet {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbNoDataRowOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbNoDataRowOutletDirective, "[nbNoDataRowOutlet]", never, {}, {}, never>;
}
export declare class NbCellOutletDirective extends CdkCellOutlet {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCellOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbCellOutletDirective, "[nbCellOutlet]", never, {}, {}, never>;
}
/**
 * Header row definition for the nb-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
export declare class NbHeaderRowDefDirective extends CdkHeaderRowDef {
    columns: Iterable<string>;
    sticky: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbHeaderRowDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbHeaderRowDefDirective, "[nbHeaderRowDef]", never, { "columns": "nbHeaderRowDef"; "sticky": "nbHeaderRowDefSticky"; }, {}, never>;
}
/**
 * Footer row definition for the nb-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
export declare class NbFooterRowDefDirective extends CdkFooterRowDef {
    columns: Iterable<string>;
    sticky: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFooterRowDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbFooterRowDefDirective, "[nbFooterRowDef]", never, { "columns": "nbFooterRowDef"; "sticky": "nbFooterRowDefSticky"; }, {}, never>;
}
/**
 * Data row definition for the nb-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
export declare class NbRowDefDirective<T> extends CdkRowDef<T> {
    columns: Iterable<string>;
    when: (index: number, rowData: T) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRowDefDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbRowDefDirective<any>, "[nbRowDef]", never, { "columns": "nbRowDefColumns"; "when": "nbRowDefWhen"; }, {}, never>;
}
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export declare class NbHeaderRowComponent extends CdkHeaderRow {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbHeaderRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbHeaderRowComponent, "nb-header-row, tr[nbHeaderRow]", never, {}, {}, never, never>;
}
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export declare class NbFooterRowComponent extends CdkFooterRow {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFooterRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbFooterRowComponent, "nb-footer-row, tr[nbFooterRow]", never, {}, {}, never, never>;
}
/** Data row template container that contains the cell outlet. Adds the right class and role. */
export declare class NbRowComponent extends CdkRow {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbRowComponent, "nb-row, tr[nbRow]", never, {}, {}, never, never>;
}
