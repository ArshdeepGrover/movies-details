import { ChangeDetectorRef, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { NbLayoutDirectionService } from '../../services/direction.service';
import { NbCellDirective, NbFooterCellDirective, NbHeaderCellDirective } from '../cdk/table/cell';
import { NbTreeGridColumnDefDirective } from './tree-grid-column-def.directive';
import { NbColumnsService } from './tree-grid-columns.service';
import * as i0 from "@angular/core";
export declare class NbTreeGridCellDirective extends NbCellDirective implements OnInit, OnDestroy {
    private platformId;
    private window;
    private sanitizer;
    private directionService;
    private columnService;
    private cd;
    private destroy$;
    private readonly tree;
    private readonly columnDef;
    private initialLeftPadding;
    private initialRightPadding;
    private latestWidth;
    elementRef: ElementRef<HTMLElement>;
    get columnWidth(): string;
    get leftPadding(): string | SafeStyle | null;
    get rightPadding(): string | SafeStyle | null;
    constructor(columnDef: NbTreeGridColumnDefDirective, elementRef: ElementRef<HTMLElement>, tree: any, platformId: any, window: any, sanitizer: DomSanitizer, directionService: NbLayoutDirectionService, columnService: NbColumnsService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleRow(): void;
    private get initialStartPadding();
    private getStartPadding;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridCellDirective, "td[nbTreeGridCell]", never, {}, {}, never>;
}
export declare class NbTreeGridHeaderCellDirective extends NbHeaderCellDirective implements OnInit, OnDestroy {
    private columnService;
    private cd;
    private destroy$;
    private latestWidth;
    private readonly tree;
    get columnWidth(): string;
    constructor(columnDef: NbTreeGridColumnDefDirective, elementRef: ElementRef<HTMLElement>, tree: any, columnService: NbColumnsService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridHeaderCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridHeaderCellDirective, "th[nbTreeGridHeaderCell]", never, {}, {}, never>;
}
export declare class NbTreeGridFooterCellDirective extends NbFooterCellDirective implements OnInit, OnDestroy {
    private columnService;
    private cd;
    private destroy$;
    private latestWidth;
    private readonly tree;
    get columnWidth(): string;
    constructor(columnDef: NbTreeGridColumnDefDirective, elementRef: ElementRef, tree: any, columnService: NbColumnsService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridFooterCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTreeGridFooterCellDirective, "td[nbTreeGridFooterCell]", never, {}, {}, never>;
}
