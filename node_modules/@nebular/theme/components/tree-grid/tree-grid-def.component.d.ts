import { IterableDiffers, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NbCellDefDirective, NbFooterCellDefDirective, NbHeaderCellDefDirective } from '../cdk/table/cell';
import { NbFooterRowDefDirective, NbHeaderRowDefDirective, NbRowDefDirective } from '../cdk/table/row';
import { NbColumnsService } from './tree-grid-columns.service';
import * as i0 from "@angular/core";
export interface NbTreeGridResponsiveRowDef {
    hideColumn(column: string): any;
    showColumn(column: string): any;
}
/**
 * Data row definition for the tree-grid.
 * Captures the header row's template and columns to display.
 */
export declare class NbTreeGridRowDefDirective<T> extends NbRowDefDirective<T> implements OnChanges, NbTreeGridResponsiveRowDef {
    private columnsService;
    /**
     * Columns to be displayed on this row
     */
    columns: Iterable<string>;
    constructor(template: TemplateRef<any>, differs: IterableDiffers, columnsService: NbColumnsService);
    ngOnChanges(changes: SimpleChanges): void;
    updateColumns(columns: Iterable<string>): void;
    getVisibleColumns(): Iterable<string>;
    /** @docs-private */
    hideColumn(column: string): void;
    /** @docs-private */
    showColumn(column: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridRowDefDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridRowDefDirective<any>, "[nbTreeGridRowDef]", never, { "columns": "nbTreeGridRowDefColumns"; }, {}, never>;
}
export declare class NbTreeGridHeaderRowDefDirective extends NbHeaderRowDefDirective implements OnChanges, NbTreeGridResponsiveRowDef {
    private columnsService;
    /**
     * Columns to be displayed on this row
     */
    columns: Iterable<string>;
    constructor(template: TemplateRef<any>, differs: IterableDiffers, columnsService: NbColumnsService);
    ngOnChanges(changes: SimpleChanges): void;
    updateColumns(columns: Iterable<string>): void;
    getVisibleColumns(): Iterable<string>;
    /** @docs-private */
    hideColumn(column: string): void;
    /** @docs-private */
    showColumn(column: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridHeaderRowDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridHeaderRowDefDirective, "[nbTreeGridHeaderRowDef]", never, { "columns": "nbTreeGridHeaderRowDef"; }, {}, never>;
}
export declare class NbTreeGridFooterRowDefDirective extends NbFooterRowDefDirective implements OnChanges, NbTreeGridResponsiveRowDef {
    private columnsService;
    /**
     * Columns to be displayed on this row
     */
    columns: Iterable<string>;
    constructor(template: TemplateRef<any>, differs: IterableDiffers, columnsService: NbColumnsService);
    ngOnChanges(changes: SimpleChanges): void;
    updateColumns(columns: Iterable<string>): void;
    getVisibleColumns(): Iterable<string>;
    /** @docs-private */
    hideColumn(column: string): void;
    /** @docs-private */
    showColumn(column: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridFooterRowDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridFooterRowDefDirective, "[nbTreeGridFooterRowDef]", never, { "columns": "nbTreeGridFooterRowDef"; }, {}, never>;
}
/**
 * Cell definition for a nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export declare class NbTreeGridCellDefDirective extends NbCellDefDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridCellDefDirective, "[nbTreeGridCellDef]", never, {}, {}, never>;
}
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export declare class NbTreeGridHeaderCellDefDirective extends NbHeaderCellDefDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridHeaderCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridHeaderCellDefDirective, "[nbTreeGridHeaderCellDef]", never, {}, {}, never>;
}
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export declare class NbTreeGridFooterCellDefDirective extends NbFooterCellDefDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridFooterCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridFooterCellDefDirective, "[nbTreeGridFooterCellDef]", never, {}, {}, never>;
}
