/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, HostBinding, Inject, PLATFORM_ID, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NB_WINDOW } from '../../theme.options';
import { NbCellDirective, NbFooterCellDirective, NbHeaderCellDirective } from '../cdk/table/cell';
import { NbCdkCell, NbCdkFooterCell, NbCdkHeaderCell } from '../cdk/table/type-mappings';
import { NB_TREE_GRID } from './tree-grid-injection-tokens';
import { NB_DEFAULT_ROW_LEVEL } from './data-source/tree-grid.model';
import * as i0 from "@angular/core";
import * as i1 from "./tree-grid-column-def.directive";
import * as i2 from "@angular/platform-browser";
import * as i3 from "../../services/direction.service";
import * as i4 from "./tree-grid-columns.service";
export class NbTreeGridCellDirective extends NbCellDirective {
    constructor(columnDef, elementRef, tree, platformId, window, sanitizer, directionService, columnService, cd) {
        super(columnDef, elementRef);
        this.platformId = platformId;
        this.window = window;
        this.sanitizer = sanitizer;
        this.directionService = directionService;
        this.columnService = columnService;
        this.cd = cd;
        this.destroy$ = new Subject();
        this.initialLeftPadding = '';
        this.initialRightPadding = '';
        this.tree = tree;
        this.columnDef = columnDef;
        this.elementRef = elementRef;
    }
    get columnWidth() {
        this.latestWidth = this.tree.getColumnWidth();
        if (this.latestWidth) {
            return this.latestWidth;
        }
        return null;
    }
    get leftPadding() {
        if (this.directionService.isLtr()) {
            return this.getStartPadding();
        }
        return null;
    }
    get rightPadding() {
        if (this.directionService.isRtl()) {
            return this.getStartPadding();
        }
        return null;
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            const style = this.window.getComputedStyle(this.elementRef.nativeElement);
            this.initialLeftPadding = style.paddingLeft;
            this.initialRightPadding = style.paddingRight;
        }
        this.columnService.onColumnsChange()
            .pipe(filter(() => this.latestWidth !== this.tree.getColumnWidth()), takeUntil(this.destroy$))
            .subscribe(() => this.cd.detectChanges());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleRow() {
        this.tree.toggleCellRow(this);
    }
    get initialStartPadding() {
        return this.directionService.isLtr()
            ? this.initialLeftPadding
            : this.initialRightPadding;
    }
    getStartPadding() {
        const rowLevel = this.tree.getCellLevel(this, this.columnDef.name);
        if (rowLevel === NB_DEFAULT_ROW_LEVEL) {
            return null;
        }
        const nestingLevel = rowLevel + 1;
        let padding = '';
        if (this.tree.levelPadding) {
            padding = `calc(${this.tree.levelPadding} * ${nestingLevel})`;
        }
        else if (this.initialStartPadding) {
            padding = `calc(${this.initialStartPadding} * ${nestingLevel})`;
        }
        if (!padding) {
            return null;
        }
        return this.sanitizer.bypassSecurityTrustStyle(padding);
    }
}
NbTreeGridCellDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridCellDirective, deps: [{ token: i1.NbTreeGridColumnDefDirective }, { token: i0.ElementRef }, { token: NB_TREE_GRID }, { token: PLATFORM_ID }, { token: NB_WINDOW }, { token: i2.DomSanitizer }, { token: i3.NbLayoutDirectionService }, { token: i4.NbColumnsService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
NbTreeGridCellDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridCellDirective, selector: "td[nbTreeGridCell]", host: { attributes: { "role": "gridcell" }, properties: { "style.width": "this.columnWidth", "style.padding-left": "this.leftPadding", "style.padding-right": "this.rightPadding" }, classAttribute: "nb-tree-grid-cell" }, providers: [{ provide: NbCdkCell, useExisting: NbTreeGridCellDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'td[nbTreeGridCell]',
                    host: {
                        'class': 'nb-tree-grid-cell',
                        'role': 'gridcell',
                    },
                    providers: [{ provide: NbCdkCell, useExisting: NbTreeGridCellDirective }],
                }]
        }], ctorParameters: function () { return [{ type: i1.NbTreeGridColumnDefDirective }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_TREE_GRID]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_WINDOW]
                }] }, { type: i2.DomSanitizer }, { type: i3.NbLayoutDirectionService }, { type: i4.NbColumnsService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { columnWidth: [{
                type: HostBinding,
                args: ['style.width']
            }], leftPadding: [{
                type: HostBinding,
                args: ['style.padding-left']
            }], rightPadding: [{
                type: HostBinding,
                args: ['style.padding-right']
            }] } });
export class NbTreeGridHeaderCellDirective extends NbHeaderCellDirective {
    constructor(columnDef, elementRef, tree, columnService, cd) {
        super(columnDef, elementRef);
        this.columnService = columnService;
        this.cd = cd;
        this.destroy$ = new Subject();
        this.tree = tree;
    }
    get columnWidth() {
        this.latestWidth = this.tree.getColumnWidth();
        return this.latestWidth || null;
    }
    ngOnInit() {
        this.columnService.onColumnsChange()
            .pipe(filter(() => this.latestWidth !== this.tree.getColumnWidth()), takeUntil(this.destroy$))
            .subscribe(() => this.cd.detectChanges());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbTreeGridHeaderCellDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridHeaderCellDirective, deps: [{ token: i1.NbTreeGridColumnDefDirective }, { token: i0.ElementRef }, { token: NB_TREE_GRID }, { token: i4.NbColumnsService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
NbTreeGridHeaderCellDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridHeaderCellDirective, selector: "th[nbTreeGridHeaderCell]", host: { attributes: { "role": "columnheader" }, properties: { "style.width": "this.columnWidth" }, classAttribute: "nb-tree-grid-header-cell" }, providers: [{ provide: NbCdkHeaderCell, useExisting: NbTreeGridHeaderCellDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridHeaderCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'th[nbTreeGridHeaderCell]',
                    host: {
                        'class': 'nb-tree-grid-header-cell',
                        'role': 'columnheader',
                    },
                    providers: [{ provide: NbCdkHeaderCell, useExisting: NbTreeGridHeaderCellDirective }],
                }]
        }], ctorParameters: function () { return [{ type: i1.NbTreeGridColumnDefDirective }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_TREE_GRID]
                }] }, { type: i4.NbColumnsService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { columnWidth: [{
                type: HostBinding,
                args: ['style.width']
            }] } });
export class NbTreeGridFooterCellDirective extends NbFooterCellDirective {
    constructor(columnDef, elementRef, tree, columnService, cd) {
        super(columnDef, elementRef);
        this.columnService = columnService;
        this.cd = cd;
        this.destroy$ = new Subject();
        this.tree = tree;
    }
    get columnWidth() {
        this.latestWidth = this.tree.getColumnWidth();
        return this.latestWidth || null;
    }
    ngOnInit() {
        this.columnService.onColumnsChange()
            .pipe(filter(() => this.latestWidth !== this.tree.getColumnWidth()), takeUntil(this.destroy$))
            .subscribe(() => this.cd.detectChanges());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbTreeGridFooterCellDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridFooterCellDirective, deps: [{ token: i1.NbTreeGridColumnDefDirective }, { token: i0.ElementRef }, { token: NB_TREE_GRID }, { token: i4.NbColumnsService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
NbTreeGridFooterCellDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridFooterCellDirective, selector: "td[nbTreeGridFooterCell]", host: { attributes: { "role": "gridcell" }, properties: { "style.width": "this.columnWidth" }, classAttribute: "nb-tree-grid-footer-cell" }, providers: [{ provide: NbCdkFooterCell, useExisting: NbTreeGridFooterCellDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridFooterCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'td[nbTreeGridFooterCell]',
                    host: {
                        'class': 'nb-tree-grid-footer-cell',
                        'role': 'gridcell',
                    },
                    providers: [{ provide: NbCdkFooterCell, useExisting: NbTreeGridFooterCellDirective }],
                }]
        }], ctorParameters: function () { return [{ type: i1.NbTreeGridColumnDefDirective }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_TREE_GRID]
                }] }, { type: i4.NbColumnsService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { columnWidth: [{
                type: HostBinding,
                args: ['style.width']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3RyZWUtZ3JpZC90cmVlLWdyaWQtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFFTCxTQUFTLEVBRVQsV0FBVyxFQUNYLE1BQU0sRUFHTixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7QUFXckUsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGVBQWU7SUFtQzFELFlBQ0UsU0FBdUMsRUFDdkMsVUFBbUMsRUFDYixJQUFJLEVBQ0csVUFBVSxFQUNaLE1BQU0sRUFDekIsU0FBdUIsRUFDdkIsZ0JBQTBDLEVBQzFDLGFBQStCLEVBQy9CLEVBQXFCO1FBRTdCLEtBQUssQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFQQSxlQUFVLEdBQVYsVUFBVSxDQUFBO1FBQ1osV0FBTSxHQUFOLE1B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LElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7MEhBbENVLDZCQUE2Qix3RkFjOUIsWUFBWTs4R0FkWCw2QkFBNkIsZ01BRjdCLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSw2QkFBNkIsRUFBRSxDQUFDOzJGQUUxRSw2QkFBNkI7a0JBUnpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsSUFBSSxFQUFFO3dCQUNKLE9BQU8sRUFBRSwwQkFBMEI7d0JBQ25DLE1BQU0sRUFBRSxVQUFVO3FCQUNuQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVywrQkFBK0IsRUFBRSxDQUFDO2lCQUN0Rjs7MEJBZUksTUFBTTsyQkFBQyxZQUFZOzJHQVJsQixXQUFXO3NCQURkLFdBQVc7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgUExBVEZPUk1fSUQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOYkxheW91dERpcmVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kaXJlY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBOQl9XSU5ET1cgfSBmcm9tICcuLi8uLi90aGVtZS5vcHRpb25zJztcbmltcG9ydCB7IE5iQ2VsbERpcmVjdGl2ZSwgTmJGb290ZXJDZWxsRGlyZWN0aXZlLCBOYkhlYWRlckNlbGxEaXJlY3RpdmUgfSBmcm9tICcuLi9jZGsvdGFibGUvY2VsbCc7XG5pbXBvcnQgeyBOYkNka0NlbGwsIE5iQ2RrRm9vdGVyQ2VsbCwgTmJDZGtIZWFkZXJDZWxsIH0gZnJvbSAnLi4vY2RrL3RhYmxlL3R5cGUtbWFwcGluZ3MnO1xuaW1wb3J0IHsgTkJfVFJFRV9HUklEIH0gZnJvbSAnLi90cmVlLWdyaWQtaW5qZWN0aW9uLXRva2Vucyc7XG5pbXBvcnQgeyBOYlRyZWVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi90cmVlLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IE5iVHJlZUdyaWRDb2x1bW5EZWZEaXJlY3RpdmUgfSBmcm9tICcuL3RyZWUtZ3JpZC1jb2x1bW4tZGVmLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOQl9ERUZBVUxUX1JPV19MRVZFTCB9IGZyb20gJy4vZGF0YS1zb3VyY2UvdHJlZS1ncmlkLm1vZGVsJztcbmltcG9ydCB7IE5iQ29sdW1uc1NlcnZpY2UgfSBmcm9tICcuL3RyZWUtZ3JpZC1jb2x1bW5zLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZFtuYlRyZWVHcmlkQ2VsbF0nLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ25iLXRyZWUtZ3JpZC1jZWxsJyxcbiAgICAncm9sZSc6ICdncmlkY2VsbCcsXG4gIH0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTmJDZGtDZWxsLCB1c2VFeGlzdGluZzogTmJUcmVlR3JpZENlbGxEaXJlY3RpdmUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5iVHJlZUdyaWRDZWxsRGlyZWN0aXZlIGV4dGVuZHMgTmJDZWxsRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSB0cmVlOiBOYlRyZWVHcmlkQ29tcG9uZW50PGFueT47XG4gIHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRGVmOiBOYlRyZWVHcmlkQ29sdW1uRGVmRGlyZWN0aXZlO1xuICBwcml2YXRlIGluaXRpYWxMZWZ0UGFkZGluZzogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgaW5pdGlhbFJpZ2h0UGFkZGluZzogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgbGF0ZXN0V2lkdGg6IHN0cmluZztcbiAgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXG4gIGdldCBjb2x1bW5XaWR0aCgpOiBzdHJpbmcge1xuICAgIHRoaXMubGF0ZXN0V2lkdGggPSB0aGlzLnRyZWUuZ2V0Q29sdW1uV2lkdGgoKTtcbiAgICBpZiAodGhpcy5sYXRlc3RXaWR0aCkge1xuICAgICAgcmV0dXJuIHRoaXMubGF0ZXN0V2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdCcpXG4gIGdldCBsZWZ0UGFkZGluZygpOiBzdHJpbmcgfCBTYWZlU3R5bGUgfCBudWxsIHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb25TZXJ2aWNlLmlzTHRyKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0UGFkZGluZygpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1yaWdodCcpXG4gIGdldCByaWdodFBhZGRpbmcoKTogc3RyaW5nIHwgU2FmZVN0eWxlIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uU2VydmljZS5pc1J0bCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFBhZGRpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2x1bW5EZWY6IE5iVHJlZUdyaWRDb2x1bW5EZWZEaXJlY3RpdmUsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChOQl9UUkVFX0dSSUQpIHRyZWUsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkLFxuICAgIEBJbmplY3QoTkJfV0lORE9XKSBwcml2YXRlIHdpbmRvdyxcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgZGlyZWN0aW9uU2VydmljZTogTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29sdW1uU2VydmljZTogTmJDb2x1bW5zU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICB0aGlzLnRyZWUgPSB0cmVlIGFzIE5iVHJlZUdyaWRDb21wb25lbnQ8YW55PjtcbiAgICB0aGlzLmNvbHVtbkRlZiA9IGNvbHVtbkRlZjtcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy53aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLmluaXRpYWxMZWZ0UGFkZGluZyA9IHN0eWxlLnBhZGRpbmdMZWZ0O1xuICAgICAgdGhpcy5pbml0aWFsUmlnaHRQYWRkaW5nID0gc3R5bGUucGFkZGluZ1JpZ2h0O1xuICAgIH1cblxuICAgIHRoaXMuY29sdW1uU2VydmljZS5vbkNvbHVtbnNDaGFuZ2UoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmxhdGVzdFdpZHRoICE9PSB0aGlzLnRyZWUuZ2V0Q29sdW1uV2lkdGgoKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgdG9nZ2xlUm93KCk6IHZvaWQge1xuICAgIHRoaXMudHJlZS50b2dnbGVDZWxsUm93KHRoaXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgaW5pdGlhbFN0YXJ0UGFkZGluZygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uU2VydmljZS5pc0x0cigpXG4gICAgICA/IHRoaXMuaW5pdGlhbExlZnRQYWRkaW5nXG4gICAgICA6IHRoaXMuaW5pdGlhbFJpZ2h0UGFkZGluZztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhcnRQYWRkaW5nKCk6IHN0cmluZyB8IFNhZmVTdHlsZSB8IG51bGwge1xuICAgIGNvbnN0IHJvd0xldmVsID0gdGhpcy50cmVlLmdldENlbGxMZXZlbCh0aGlzLCB0aGlzLmNvbHVtbkRlZi5uYW1lKTtcbiAgICBpZiAocm93TGV2ZWwgPT09IE5CX0RFRkFVTFRfUk9XX0xFVkVMKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBuZXN0aW5nTGV2ZWwgPSByb3dMZXZlbCArIDE7XG4gICAgbGV0IHBhZGRpbmc6IHN0cmluZyA9ICcnO1xuICAgIGlmICh0aGlzLnRyZWUubGV2ZWxQYWRkaW5nKSB7XG4gICAgICBwYWRkaW5nID0gYGNhbGMoJHt0aGlzLnRyZWUubGV2ZWxQYWRkaW5nfSAqICR7bmVzdGluZ0xldmVsfSlgO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pbml0aWFsU3RhcnRQYWRkaW5nKSB7XG4gICAgICBwYWRkaW5nID0gYGNhbGMoJHt0aGlzLmluaXRpYWxTdGFydFBhZGRpbmd9ICogJHtuZXN0aW5nTGV2ZWx9KWA7XG4gICAgfVxuXG4gICAgaWYgKCFwYWRkaW5nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHBhZGRpbmcpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RoW25iVHJlZUdyaWRIZWFkZXJDZWxsXScsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbmItdHJlZS1ncmlkLWhlYWRlci1jZWxsJyxcbiAgICAncm9sZSc6ICdjb2x1bW5oZWFkZXInLFxuICB9LFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5iQ2RrSGVhZGVyQ2VsbCwgdXNlRXhpc3Rpbmc6IE5iVHJlZUdyaWRIZWFkZXJDZWxsRGlyZWN0aXZlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOYlRyZWVHcmlkSGVhZGVyQ2VsbERpcmVjdGl2ZSBleHRlbmRzIE5iSGVhZGVyQ2VsbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgbGF0ZXN0V2lkdGg6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSB0cmVlOiBOYlRyZWVHcmlkQ29tcG9uZW50PGFueT47XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXG4gIGdldCBjb2x1bW5XaWR0aCgpOiBzdHJpbmcge1xuICAgIHRoaXMubGF0ZXN0V2lkdGggPSB0aGlzLnRyZWUuZ2V0Q29sdW1uV2lkdGgoKTtcbiAgICByZXR1cm4gdGhpcy5sYXRlc3RXaWR0aCB8fCBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29sdW1uRGVmOiBOYlRyZWVHcmlkQ29sdW1uRGVmRGlyZWN0aXZlLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoTkJfVFJFRV9HUklEKSB0cmVlLFxuICAgIHByaXZhdGUgY29sdW1uU2VydmljZTogTmJDb2x1bW5zU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICB0aGlzLnRyZWUgPSB0cmVlIGFzIE5iVHJlZUdyaWRDb21wb25lbnQ8YW55PjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29sdW1uU2VydmljZS5vbkNvbHVtbnNDaGFuZ2UoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmxhdGVzdFdpZHRoICE9PSB0aGlzLnRyZWUuZ2V0Q29sdW1uV2lkdGgoKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RkW25iVHJlZUdyaWRGb290ZXJDZWxsXScsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbmItdHJlZS1ncmlkLWZvb3Rlci1jZWxsJyxcbiAgICAncm9sZSc6ICdncmlkY2VsbCcsXG4gIH0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTmJDZGtGb290ZXJDZWxsLCB1c2VFeGlzdGluZzogTmJUcmVlR3JpZEZvb3RlckNlbGxEaXJlY3RpdmUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5iVHJlZUdyaWRGb290ZXJDZWxsRGlyZWN0aXZlIGV4dGVuZHMgTmJGb290ZXJDZWxsRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBsYXRlc3RXaWR0aDogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IHRyZWU6IE5iVHJlZUdyaWRDb21wb25lbnQ8YW55PjtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcbiAgZ2V0IGNvbHVtbldpZHRoKCk6IHN0cmluZyB7XG4gICAgdGhpcy5sYXRlc3RXaWR0aCA9IHRoaXMudHJlZS5nZXRDb2x1bW5XaWR0aCgpO1xuICAgIHJldHVybiB0aGlzLmxhdGVzdFdpZHRoIHx8IG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2x1bW5EZWY6IE5iVHJlZUdyaWRDb2x1bW5EZWZEaXJlY3RpdmUsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KE5CX1RSRUVfR1JJRCkgdHJlZSxcbiAgICBwcml2YXRlIGNvbHVtblNlcnZpY2U6IE5iQ29sdW1uc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgdGhpcy50cmVlID0gdHJlZSBhcyBOYlRyZWVHcmlkQ29tcG9uZW50PGFueT47XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbHVtblNlcnZpY2Uub25Db2x1bW5zQ2hhbmdlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5sYXRlc3RXaWR0aCAhPT0gdGhpcy50cmVlLmdldENvbHVtbldpZHRoKCkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19