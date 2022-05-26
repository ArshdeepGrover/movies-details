import { OnDestroy, OnInit } from '@angular/core';
import { NbFilterable } from './data-source/tree-grid-data-source';
import * as i0 from "@angular/core";
export declare class NbFilterDirective {
    filterable: NbFilterable;
    filter(filterRequest: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFilterDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbFilterDirective, "[nbFilter]", never, { "filterable": "nbFilter"; }, {}, never>;
}
/**
 * Helper directive to trigger data source's filter method when user types in input
 */
export declare class NbFilterInputDirective extends NbFilterDirective implements OnInit, OnDestroy {
    private search$;
    private destroy$;
    filterable: NbFilterable;
    /**
     * Debounce time before triggering filter method. Set in milliseconds.
     * Default 200.
     */
    debounceTime: number;
    ngOnInit(): void;
    ngOnDestroy(): void;
    filter(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFilterInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbFilterInputDirective, "[nbFilterInput]", never, { "filterable": "nbFilterInput"; "debounceTime": "debounceTime"; }, {}, never>;
}
