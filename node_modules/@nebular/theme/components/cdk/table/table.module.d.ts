import { ChangeDetectorRef, ElementRef, IterableDiffers, Provider } from '@angular/core';
import { _CoalescedStyleScheduler, CdkTable, CdkTableModule, RenderRow, RowContext, StickyPositioningListener } from '@angular/cdk/table';
import { _ViewRepeater } from '@angular/cdk/collections';
import { NbDirectionality } from '../bidi/bidi-service';
import { NbPlatform } from '../platform/platform-service';
import { NbViewportRulerAdapter } from '../adapter/viewport-ruler-adapter';
import * as i0 from "@angular/core";
import * as i1 from "./cell";
import * as i2 from "./row";
import * as i3 from "../bidi/bidi.module";
export declare const NB_TABLE_TEMPLATE = "\n  <ng-container nbHeaderRowOutlet></ng-container>\n  <ng-container nbRowOutlet></ng-container>\n  <ng-container nbNoDataRowOutlet></ng-container>\n  <ng-container nbFooterRowOutlet></ng-container>\n";
export declare const NB_VIEW_REPEATER_STRATEGY: import("@angular/core").InjectionToken<_ViewRepeater<unknown, unknown, import("@angular/cdk/collections")._ViewRepeaterItemContext<unknown>>>;
export declare const NB_COALESCED_STYLE_SCHEDULER: import("@angular/core").InjectionToken<_CoalescedStyleScheduler>;
export declare const NB_TABLE_PROVIDERS: Provider[];
export declare class NbTable<T> extends CdkTable<T> {
    protected readonly _viewRepeater: _ViewRepeater<T, RenderRow<T>, RowContext<T>>;
    protected readonly _coalescedStyleScheduler: _CoalescedStyleScheduler;
    protected readonly _stickyPositioningListener: StickyPositioningListener;
    constructor(differs: IterableDiffers, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, role: string, dir: NbDirectionality, document: any, platform: NbPlatform, _viewRepeater: _ViewRepeater<T, RenderRow<T>, RowContext<T>>, _coalescedStyleScheduler: _CoalescedStyleScheduler, _viewportRuler: NbViewportRulerAdapter, _stickyPositioningListener: StickyPositioningListener);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTable<any>, [null, null, null, { attribute: "role"; }, null, null, null, null, null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTable<any>, "nb-table-not-implemented", never, {}, {}, never, never>;
}
export declare class NbTableModule extends CdkTableModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTableModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbTableModule, [typeof NbTable, typeof i1.NbHeaderCellDefDirective, typeof i2.NbHeaderRowDefDirective, typeof i1.NbColumnDefDirective, typeof i1.NbCellDefDirective, typeof i2.NbRowDefDirective, typeof i1.NbFooterCellDefDirective, typeof i2.NbFooterRowDefDirective, typeof i2.NbDataRowOutletDirective, typeof i2.NbHeaderRowOutletDirective, typeof i2.NbFooterRowOutletDirective, typeof i2.NbNoDataRowOutletDirective, typeof i2.NbCellOutletDirective, typeof i1.NbHeaderCellDirective, typeof i1.NbCellDirective, typeof i1.NbFooterCellDirective, typeof i2.NbHeaderRowComponent, typeof i2.NbRowComponent, typeof i2.NbFooterRowComponent], [typeof i3.NbBidiModule], [typeof NbTable, typeof i1.NbHeaderCellDefDirective, typeof i2.NbHeaderRowDefDirective, typeof i1.NbColumnDefDirective, typeof i1.NbCellDefDirective, typeof i2.NbRowDefDirective, typeof i1.NbFooterCellDefDirective, typeof i2.NbFooterRowDefDirective, typeof i2.NbDataRowOutletDirective, typeof i2.NbHeaderRowOutletDirective, typeof i2.NbFooterRowOutletDirective, typeof i2.NbNoDataRowOutletDirective, typeof i2.NbCellOutletDirective, typeof i1.NbHeaderCellDirective, typeof i1.NbCellDirective, typeof i1.NbFooterCellDirective, typeof i2.NbHeaderRowComponent, typeof i2.NbRowComponent, typeof i2.NbFooterRowComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbTableModule>;
}
