/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { NbAccordionItemComponent } from './accordion-item.component';
import * as i0 from "@angular/core";
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
export declare class NbAccordionItemBodyComponent implements OnInit, OnDestroy {
    private accordionItem;
    private cd;
    private destroy$;
    constructor(accordionItem: NbAccordionItemComponent, cd: ChangeDetectorRef);
    get state(): string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAccordionItemBodyComponent, [{ host: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbAccordionItemBodyComponent, "nb-accordion-item-body", never, {}, {}, never, ["*"]>;
}
