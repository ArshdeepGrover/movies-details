import { ElementRef, OnDestroy } from '@angular/core';
import { NbFooterRowComponent, NbHeaderRowComponent, NbRowComponent } from '../cdk/table/row';
import * as i0 from "@angular/core";
export declare const NB_ROW_DOUBLE_CLICK_DELAY: number;
/**
 * Cells container. Adds the right class and role.
 */
export declare class NbTreeGridRowComponent extends NbRowComponent implements OnDestroy {
    elementRef: ElementRef<HTMLElement>;
    private readonly doubleClick$;
    private readonly tree;
    /**
     * Time to wait for second click to expand row deeply.
     * 200ms by default.
     */
    doubleClickDelay: number;
    /**
     * Toggle row on click. Enabled by default.
     */
    clickToToggle: boolean;
    toggleIfEnabledNode(): void;
    toggleIfEnabledNodeDeep(): void;
    constructor(tree: any, elementRef: ElementRef<HTMLElement>);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTreeGridRowComponent, "tr[nbTreeGridRow]", never, { "doubleClickDelay": "doubleClickDelay"; "clickToToggle": "clickToToggle"; }, {}, never, never>;
}
export declare class NbTreeGridHeaderRowComponent extends NbHeaderRowComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridHeaderRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTreeGridHeaderRowComponent, "tr[nbTreeGridHeaderRow]", never, {}, {}, never, never>;
}
export declare class NbTreeGridFooterRowComponent extends NbFooterRowComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridFooterRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTreeGridFooterRowComponent, "tr[nbTreeGridFooterRow]", never, {}, {}, never, never>;
}
