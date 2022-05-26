import { NbTreeGridCellDirective } from './tree-grid-cell.component';
import * as i0 from "@angular/core";
/**
 * NbTreeGridRowToggleComponent
 */
export declare class NbTreeGridRowToggleComponent {
    private cell;
    private expandedValue;
    set expanded(value: boolean);
    get expanded(): boolean;
    toggleRow($event: any): void;
    constructor(cell: NbTreeGridCellDirective);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridRowToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTreeGridRowToggleComponent, "nb-tree-grid-row-toggle", never, { "expanded": "expanded"; }, {}, never, never>;
}
