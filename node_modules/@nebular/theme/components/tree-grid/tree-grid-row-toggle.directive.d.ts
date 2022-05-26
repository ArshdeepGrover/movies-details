import { NbTreeGridCellDirective } from './tree-grid-cell.component';
import * as i0 from "@angular/core";
/**
 * When using custom row toggle, apply this directive on your toggle to toggle row on element click.
 */
export declare class NbTreeGridRowToggleDirective {
    private cell;
    toggleRow($event: any): void;
    constructor(cell: NbTreeGridCellDirective);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridRowToggleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridRowToggleDirective, "[nbTreeGridRowToggle]", never, {}, {}, never>;
}
