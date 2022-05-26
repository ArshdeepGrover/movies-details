/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, EventEmitter, SimpleChanges, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { NbAccordionComponent } from './accordion.component';
import { NbBooleanInput } from '../helpers';
import * as i0 from "@angular/core";
/**
 * Component intended to be used within `<nb-accordion>` component
 */
export declare class NbAccordionItemComponent implements OnInit, OnChanges, OnDestroy {
    private accordion;
    private cd;
    /**
     * Item is collapse (`true` by default)
     * @type {boolean}
     */
    get collapsed(): boolean;
    set collapsed(val: boolean);
    static ngAcceptInputType_collapsed: NbBooleanInput;
    /**
     * Item is expanded (`false` by default)
     * @type {boolean}
     */
    get expanded(): boolean;
    set expanded(val: boolean);
    static ngAcceptInputType_expanded: NbBooleanInput;
    /**
     * Item is disabled and cannot be opened.
     * @type {boolean}
     */
    get disabled(): boolean;
    set disabled(val: boolean);
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Emits whenever the expanded state of the accordion changes.
     * Primarily used to facilitate two-way binding.
     */
    collapsedChange: EventEmitter<boolean>;
    accordionItemInvalidate: Subject<boolean>;
    private collapsedValue;
    private disabledValue;
    private destroy$;
    constructor(accordion: NbAccordionComponent, cd: ChangeDetectorRef);
    /**
     * Open/close the item
     */
    toggle(): void;
    /**
     * Open the item.
     */
    open(): void;
    /**
     * Collapse the item.
     */
    close(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private invalidate;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAccordionItemComponent, [{ host: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbAccordionItemComponent, "nb-accordion-item", never, { "collapsed": "collapsed"; "expanded": "expanded"; "disabled": "disabled"; }, { "collapsedChange": "collapsedChange"; }, never, ["nb-accordion-item-header", "nb-accordion-item-body"]>;
}
