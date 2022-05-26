/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Attribute, Component, HostBinding, Inject, Input, Optional, SkipSelf, } from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { NB_DOCUMENT, NB_WINDOW } from '../../theme.options';
import { NB_TABLE_TEMPLATE, NbTable, NB_TABLE_PROVIDERS, NB_COALESCED_STYLE_SCHEDULER, NB_VIEW_REPEATER_STRATEGY, } from '../cdk/table/table.module';
import { NB_STICKY_POSITIONING_LISTENER } from '../cdk/table/type-mappings';
import { NbTreeGridDataSource } from './data-source/tree-grid-data-source';
import { NB_DEFAULT_ROW_LEVEL } from './data-source/tree-grid.model';
import { NB_TREE_GRID } from './tree-grid-injection-tokens';
import { convertToBoolProperty } from '../helpers';
import { NbColumnsService } from './tree-grid-columns.service';
import * as i0 from "@angular/core";
import * as i1 from "./data-source/tree-grid-data-source";
import * as i2 from "../cdk/bidi/bidi-service";
import * as i3 from "../cdk/platform/platform-service";
import * as i4 from "../cdk/adapter/viewport-ruler-adapter";
import * as i5 from "../cdk/table/row";
/**
 * Tree grid component that can be used to display nested rows of data.
 * Supports filtering and sorting.
 * @stacked-example(Showcase, tree-grid/tree-grid-showcase.component)
 *
 * ### Installation
 *
 * Import `NbTreeGridModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTreeGridModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * As the most basic usage you need to define [nbTreeGridRowDef](docs/components/treegrid/api#nbtreegridrowdefdirective)
 * where you should pass columns to display in rows and
 * [nbTreeGridColumnDef](docs/components/treegrid/api#nbtreegridcolumndefdirective) - component containing cell
 * definitions for each column passed to row definition.
 * @stacked-example(Basic, tree-grid/tree-grid-basic.component)
 *
 * `NbTreeGridComponent`'s source input and `NbTreeGridDataSourceBuilder.create` expecting data to be an array of
 * objects with `data`, `children` and `expanded` properties. If your data doesn't match this interface, you can pass
 * getter functions for each property as arguments to `NbTreeGridDataSourceBuilder.create` method.
 * @stacked-example(Custom node structure, tree-grid/tree-grid-custom-node-structure.component)
 *
 * To use sorting you can add `nbSort` directive to table and subscribe to `sort` method. When user click on header,
 * sort event will be emitted. Event object contain clicked column name and desired sort direction.
 * @stacked-example(Sortable, tree-grid/tree-grid-sortable.component)
 *
 * You can use `Data Source Builder` to create `NbTreeGridDataSource` which would have toggle, sort and
 * filter methods. Then you can call this methods to change sort or toggle rows programmatically. Also `nbSort` and
 * `nbFilterInput` directives both support `NbTreeGridDataSource`, so you can pass it directly as an input and
 * directives will trigger sort, toggle themselves.
 * @stacked-example(Data Source Builder, tree-grid/tree-grid-showcase.component)
 *
 * You can create responsive grid by setting `hideOn` and `showOn` inputs of
 * [nbTreeGridColumnDef](docs/components/tree-grid/api#nbtreegridcolumndefdirective) directive.
 * When viewport reaches specified width grid hides or shows columns.
 * @stacked-example(Responsive columns, tree-grid/tree-grid-responsive.component)
 *
 * To customize sort or row toggle icons you can use `nbSortHeaderIcon` and `nbTreeGridRowToggle` directives
 * respectively. `nbSortHeaderIcon` is a structural directive and it's implicit context set to current direction.
 * Also context has three properties: `isAscending`, `isDescending` and `isNone`.
 * @stacked-example(Custom icons, tree-grid/tree-grid-custom-icons.component)
 *
 * By default, row to toggle happens when user clicks anywhere in the row. Also double click expands row deeply.
 * To disable this you can set `[clickToToggle]="false"` input of `nbTreeGridRow`.
 * @stacked-example(Disable click toggle, tree-grid/tree-grid-disable-click-toggle.component)
 *
 * @styles
 *
 * tree-grid-cell-border-width:
 * tree-grid-cell-border-style:
 * tree-grid-cell-border-color:
 * tree-grid-row-min-height:
 * tree-grid-cell-padding:
 * tree-grid-header-background-color:
 * tree-grid-header-text-color:
 * tree-grid-header-text-font-family:
 * tree-grid-header-text-font-size:
 * tree-grid-header-text-font-weight:
 * tree-grid-header-text-line-height:
 * tree-grid-footer-background-color:
 * tree-grid-footer-text-color:
 * tree-grid-footer-text-font-family:
 * tree-grid-footer-text-font-size:
 * tree-grid-footer-text-font-weight:
 * tree-grid-footer-text-line-height:
 * tree-grid-row-background-color:
 * tree-grid-row-even-background-color:
 * tree-grid-row-hover-background-color:
 * tree-grid-row-text-color:
 * tree-grid-row-text-font-family:
 * tree-grid-row-text-font-size:
 * tree-grid-row-text-font-weight:
 * tree-grid-row-text-line-height:
 * tree-grid-sort-header-button-background-color:
 * tree-grid-sort-header-button-border:
 * tree-grid-sort-header-button-padding:
 */
export class NbTreeGridComponent extends NbTable {
    constructor(dataSourceBuilder, differs, changeDetectorRef, elementRef, role, dir, document, platform, window, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener) {
        super(differs, changeDetectorRef, elementRef, role, dir, document, platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener);
        this.dataSourceBuilder = dataSourceBuilder;
        this.window = window;
        this._viewRepeater = _viewRepeater;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._stickyPositioningListener = _stickyPositioningListener;
        this.destroy$ = new Subject();
        this.levelPadding = '';
        this.equalColumnsWidthValue = false;
        this.treeClass = true;
        this.platform = platform;
    }
    /**
     * The table's data
     * @param data
     * @type {<T>[] | NbTreeGridDataSource}
     */
    set source(data) {
        if (!data) {
            return;
        }
        if (data instanceof NbTreeGridDataSource) {
            this._source = data;
        }
        else {
            this._source = this.dataSourceBuilder.create(data);
        }
        this.dataSource = this._source;
    }
    /**
     * Make all columns equal width. False by default.
     */
    set equalColumnsWidth(value) {
        this.equalColumnsWidthValue = convertToBoolProperty(value);
    }
    get equalColumnsWidth() {
        return this.equalColumnsWidthValue;
    }
    ngAfterViewInit() {
        this.checkDefsCount();
        const rowsChange$ = merge(this._contentRowDefs.changes, this._contentHeaderRowDefs.changes, this._contentFooterRowDefs.changes);
        rowsChange$.pipe(takeUntil(this.destroy$))
            .subscribe(() => this.checkDefsCount());
        if (this.platform.isBrowser) {
            this.updateVisibleColumns();
            const windowResize$ = fromEvent(this.window, 'resize').pipe(debounceTime(50));
            merge(rowsChange$, this._contentColumnDefs.changes, windowResize$)
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => this.updateVisibleColumns());
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleRow(row, options) {
        const context = this.getRowContext(row);
        this._source.toggle(context.$implicit.data, options);
    }
    toggleCellRow(cell) {
        const context = this.getCellContext(cell);
        this._source.toggle(context.$implicit.data);
    }
    getColumnWidth() {
        if (this.equalColumnsWidth) {
            return `${100 / this.getColumnsCount()}%`;
        }
        return '';
    }
    getCellLevel(cell, columnName) {
        if (this.isFirstColumn(columnName)) {
            return this.getCellContext(cell).$implicit.level;
        }
        return NB_DEFAULT_ROW_LEVEL;
    }
    getRowContext(row) {
        return this.getContextByRowEl(row.elementRef.nativeElement);
    }
    getCellContext(cell) {
        return this.getContextByCellEl(cell.elementRef.nativeElement);
    }
    getContextByCellEl(cellEl) {
        return this.getContextByRowEl(cellEl.parentElement);
    }
    getContextByRowEl(rowEl) {
        const rowsContainer = this._rowOutlet.viewContainer;
        for (let i = 0; i < rowsContainer.length; i++) {
            const rowViewRef = rowsContainer.get(i);
            if (rowViewRef.rootNodes.includes(rowEl)) {
                return rowViewRef.context;
            }
        }
        return undefined;
    }
    getColumns() {
        let rowDef;
        if (this._contentHeaderRowDefs.length) {
            rowDef = this._contentHeaderRowDefs.first;
        }
        else {
            rowDef = this._contentRowDefs.first;
        }
        return Array.from(rowDef.getVisibleColumns() || []);
    }
    getColumnsCount() {
        return this.getColumns().length;
    }
    isFirstColumn(columnName) {
        return this.getColumns()[0] === columnName;
    }
    checkDefsCount() {
        if (this._contentRowDefs.length > 1) {
            throw new Error(`Found multiple row definitions`);
        }
        if (this._contentHeaderRowDefs.length > 1) {
            throw new Error(`Found multiple header row definitions`);
        }
        if (this._contentFooterRowDefs.length > 1) {
            throw new Error(`Found multiple footer row definitions`);
        }
    }
    updateVisibleColumns() {
        const width = this.window.innerWidth;
        const columnDefs = this._contentColumnDefs;
        const columnsToHide = columnDefs
            .filter((col) => col.shouldHide(width))
            .map(col => col.name);
        const columnsToShow = columnDefs
            .filter((col) => col.shouldShow(width))
            .map(col => col.name);
        if (!columnsToHide.length && !columnsToShow.length) {
            return;
        }
        const rowDefs = [
            this._contentHeaderRowDefs.first,
            this._contentRowDefs.first,
            this._contentFooterRowDefs.first,
        ].filter(d => !!d);
        for (const rowDef of rowDefs) {
            for (const column of columnsToHide) {
                rowDef.hideColumn(column);
            }
            for (const column of columnsToShow) {
                rowDef.showColumn(column);
            }
        }
    }
}
NbTreeGridComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridComponent, deps: [{ token: i1.NbTreeGridDataSourceBuilder }, { token: i0.IterableDiffers }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: 'role', attribute: true }, { token: i2.NbDirectionality }, { token: NB_DOCUMENT }, { token: i3.NbPlatform }, { token: NB_WINDOW }, { token: NB_VIEW_REPEATER_STRATEGY }, { token: NB_COALESCED_STYLE_SCHEDULER }, { token: i4.NbViewportRulerAdapter }, { token: NB_STICKY_POSITIONING_LISTENER, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.Component });
NbTreeGridComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridComponent, selector: "table[nbTreeGrid]", inputs: { source: ["nbTreeGrid", "source"], levelPadding: "levelPadding", equalColumnsWidth: "equalColumnsWidth" }, host: { properties: { "class.nb-tree-grid": "this.treeClass" } }, providers: [
        { provide: NB_TREE_GRID, useExisting: NbTreeGridComponent },
        NbColumnsService,
        ...NB_TABLE_PROVIDERS,
    ], usesInheritance: true, ngImport: i0, template: "\n  <ng-container nbHeaderRowOutlet></ng-container>\n  <ng-container nbRowOutlet></ng-container>\n  <ng-container nbNoDataRowOutlet></ng-container>\n  <ng-container nbFooterRowOutlet></ng-container>\n", isInline: true, styles: ["/*\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{table-layout:fixed;border-spacing:0;border-collapse:collapse;width:100%;max-width:100%;overflow:auto}::ng-deep .nb-tree-grid-cell,::ng-deep .nb-tree-grid-header-cell,::ng-deep .nb-tree-grid-footer-cell{overflow:hidden}\n"], directives: [{ type: i5.NbHeaderRowOutletDirective, selector: "[nbHeaderRowOutlet]" }, { type: i5.NbDataRowOutletDirective, selector: "[nbRowOutlet]" }, { type: i5.NbNoDataRowOutletDirective, selector: "[nbNoDataRowOutlet]" }, { type: i5.NbFooterRowOutletDirective, selector: "[nbFooterRowOutlet]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'table[nbTreeGrid]', template: NB_TABLE_TEMPLATE, providers: [
                        { provide: NB_TREE_GRID, useExisting: NbTreeGridComponent },
                        NbColumnsService,
                        ...NB_TABLE_PROVIDERS,
                    ], styles: ["/*\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{table-layout:fixed;border-spacing:0;border-collapse:collapse;width:100%;max-width:100%;overflow:auto}::ng-deep .nb-tree-grid-cell,::ng-deep .nb-tree-grid-header-cell,::ng-deep .nb-tree-grid-footer-cell{overflow:hidden}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbTreeGridDataSourceBuilder }, { type: i0.IterableDiffers }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: ['role']
                }] }, { type: i2.NbDirectionality }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }, { type: i3.NbPlatform }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_WINDOW]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_VIEW_REPEATER_STRATEGY]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_COALESCED_STYLE_SCHEDULER]
                }] }, { type: i4.NbViewportRulerAdapter }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }, {
                    type: Inject,
                    args: [NB_STICKY_POSITIONING_LISTENER]
                }] }]; }, propDecorators: { source: [{
                type: Input,
                args: ['nbTreeGrid']
            }], levelPadding: [{
                type: Input
            }], equalColumnsWidth: [{
                type: Input
            }], treeClass: [{
                type: HostBinding,
                args: ['class.nb-tree-grid']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90cmVlLWdyaWQvdHJlZS1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLFNBQVMsRUFFVCxTQUFTLEVBRVQsV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBTUwsUUFBUSxFQUNSLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRzdELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsT0FBTyxFQUNQLGtCQUFrQixFQUNsQiw0QkFBNEIsRUFDNUIseUJBQXlCLEdBQzFCLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLDhCQUE4QixFQUFnQixNQUFNLDRCQUE0QixDQUFDO0FBRTFGLE9BQU8sRUFBRSxvQkFBb0IsRUFBK0IsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RyxPQUFPLEVBQUUsb0JBQW9CLEVBQThCLE1BQU0sK0JBQStCLENBQUM7QUFFakcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBa0IsTUFBTSxZQUFZLENBQUM7QUFPbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7QUFFL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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OEI7NENBaUJqRCxNQUFNO3NCQUE5QixLQUFLO3VCQUFDLFlBQVk7Z0JBYVYsWUFBWTtzQkFBcEIsS0FBSztnQkFNRixpQkFBaUI7c0JBRHBCLEtBQUs7Z0JBVXNDLFNBQVM7c0JBQXBELFdBQVc7dUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIEF0dHJpYnV0ZSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIEl0ZXJhYmxlRGlmZmVycyxcbiAgT25EZXN0cm95LFxuICBRdWVyeUxpc3QsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOQl9ET0NVTUVOVCwgTkJfV0lORE9XIH0gZnJvbSAnLi4vLi4vdGhlbWUub3B0aW9ucyc7XG5pbXBvcnQgeyBOYlBsYXRmb3JtIH0gZnJvbSAnLi4vY2RrL3BsYXRmb3JtL3BsYXRmb3JtLXNlcnZpY2UnO1xuaW1wb3J0IHsgTmJEaXJlY3Rpb25hbGl0eSB9IGZyb20gJy4uL2Nkay9iaWRpL2JpZGktc2VydmljZSc7XG5pbXBvcnQge1xuICBOQl9UQUJMRV9URU1QTEFURSxcbiAgTmJUYWJsZSxcbiAgTkJfVEFCTEVfUFJPVklERVJTLFxuICBOQl9DT0FMRVNDRURfU1RZTEVfU0NIRURVTEVSLFxuICBOQl9WSUVXX1JFUEVBVEVSX1NUUkFURUdZLFxufSBmcm9tICcuLi9jZGsvdGFibGUvdGFibGUubW9kdWxlJztcbmltcG9ydCB7IE5CX1NUSUNLWV9QT1NJVElPTklOR19MSVNURU5FUiwgTmJSb3dDb250ZXh0IH0gZnJvbSAnLi4vY2RrL3RhYmxlL3R5cGUtbWFwcGluZ3MnO1xuaW1wb3J0IHsgTmJWaWV3cG9ydFJ1bGVyQWRhcHRlciB9IGZyb20gJy4uL2Nkay9hZGFwdGVyL3ZpZXdwb3J0LXJ1bGVyLWFkYXB0ZXInO1xuaW1wb3J0IHsgTmJUcmVlR3JpZERhdGFTb3VyY2UsIE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlciB9IGZyb20gJy4vZGF0YS1zb3VyY2UvdHJlZS1ncmlkLWRhdGEtc291cmNlJztcbmltcG9ydCB7IE5CX0RFRkFVTFRfUk9XX0xFVkVMLCBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZSB9IGZyb20gJy4vZGF0YS1zb3VyY2UvdHJlZS1ncmlkLm1vZGVsJztcbmltcG9ydCB7IE5iVG9nZ2xlT3B0aW9ucyB9IGZyb20gJy4vZGF0YS1zb3VyY2UvdHJlZS1ncmlkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTkJfVFJFRV9HUklEIH0gZnJvbSAnLi90cmVlLWdyaWQtaW5qZWN0aW9uLXRva2Vucyc7XG5pbXBvcnQgeyBOYlRyZWVHcmlkUm93Q29tcG9uZW50IH0gZnJvbSAnLi90cmVlLWdyaWQtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYlRyZWVHcmlkQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4vdHJlZS1ncmlkLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IE5iVHJlZUdyaWRDb2x1bW5EZWZEaXJlY3RpdmUgfSBmcm9tICcuL3RyZWUtZ3JpZC1jb2x1bW4tZGVmLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBOYlRyZWVHcmlkRm9vdGVyUm93RGVmRGlyZWN0aXZlLFxuICBOYlRyZWVHcmlkSGVhZGVyUm93RGVmRGlyZWN0aXZlLFxuICBOYlRyZWVHcmlkUm93RGVmRGlyZWN0aXZlLFxufSBmcm9tICcuL3RyZWUtZ3JpZC1kZWYuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ29sdW1uc1NlcnZpY2UgfSBmcm9tICcuL3RyZWUtZ3JpZC1jb2x1bW5zLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRyZWUgZ3JpZCBjb21wb25lbnQgdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwbGF5IG5lc3RlZCByb3dzIG9mIGRhdGEuXG4gKiBTdXBwb3J0cyBmaWx0ZXJpbmcgYW5kIHNvcnRpbmcuXG4gKiBAc3RhY2tlZC1leGFtcGxlKFNob3djYXNlLCB0cmVlLWdyaWQvdHJlZS1ncmlkLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiAjIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogSW1wb3J0IGBOYlRyZWVHcmlkTW9kdWxlYCB0byB5b3VyIGZlYXR1cmUgbW9kdWxlLlxuICogYGBgdHNcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgICBOYlRyZWVHcmlkTW9kdWxlLFxuICogICBdLFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBQYWdlTW9kdWxlIHsgfVxuICogYGBgXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogQXMgdGhlIG1vc3QgYmFzaWMgdXNhZ2UgeW91IG5lZWQgdG8gZGVmaW5lIFtuYlRyZWVHcmlkUm93RGVmXShkb2NzL2NvbXBvbmVudHMvdHJlZWdyaWQvYXBpI25idHJlZWdyaWRyb3dkZWZkaXJlY3RpdmUpXG4gKiB3aGVyZSB5b3Ugc2hvdWxkIHBhc3MgY29sdW1ucyB0byBkaXNwbGF5IGluIHJvd3MgYW5kXG4gKiBbbmJUcmVlR3JpZENvbHVtbkRlZl0oZG9jcy9jb21wb25lbnRzL3RyZWVncmlkL2FwaSNuYnRyZWVncmlkY29sdW1uZGVmZGlyZWN0aXZlKSAtIGNvbXBvbmVudCBjb250YWluaW5nIGNlbGxcbiAqIGRlZmluaXRpb25zIGZvciBlYWNoIGNvbHVtbiBwYXNzZWQgdG8gcm93IGRlZmluaXRpb24uXG4gKiBAc3RhY2tlZC1leGFtcGxlKEJhc2ljLCB0cmVlLWdyaWQvdHJlZS1ncmlkLWJhc2ljLmNvbXBvbmVudClcbiAqXG4gKiBgTmJUcmVlR3JpZENvbXBvbmVudGAncyBzb3VyY2UgaW5wdXQgYW5kIGBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlYCBleHBlY3RpbmcgZGF0YSB0byBiZSBhbiBhcnJheSBvZlxuICogb2JqZWN0cyB3aXRoIGBkYXRhYCwgYGNoaWxkcmVuYCBhbmQgYGV4cGFuZGVkYCBwcm9wZXJ0aWVzLiBJZiB5b3VyIGRhdGEgZG9lc24ndCBtYXRjaCB0aGlzIGludGVyZmFjZSwgeW91IGNhbiBwYXNzXG4gKiBnZXR0ZXIgZnVuY3Rpb25zIGZvciBlYWNoIHByb3BlcnR5IGFzIGFyZ3VtZW50cyB0byBgTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZWAgbWV0aG9kLlxuICogQHN0YWNrZWQtZXhhbXBsZShDdXN0b20gbm9kZSBzdHJ1Y3R1cmUsIHRyZWUtZ3JpZC90cmVlLWdyaWQtY3VzdG9tLW5vZGUtc3RydWN0dXJlLmNvbXBvbmVudClcbiAqXG4gKiBUbyB1c2Ugc29ydGluZyB5b3UgY2FuIGFkZCBgbmJTb3J0YCBkaXJlY3RpdmUgdG8gdGFibGUgYW5kIHN1YnNjcmliZSB0byBgc29ydGAgbWV0aG9kLiBXaGVuIHVzZXIgY2xpY2sgb24gaGVhZGVyLFxuICogc29ydCBldmVudCB3aWxsIGJlIGVtaXR0ZWQuIEV2ZW50IG9iamVjdCBjb250YWluIGNsaWNrZWQgY29sdW1uIG5hbWUgYW5kIGRlc2lyZWQgc29ydCBkaXJlY3Rpb24uXG4gKiBAc3RhY2tlZC1leGFtcGxlKFNvcnRhYmxlLCB0cmVlLWdyaWQvdHJlZS1ncmlkLXNvcnRhYmxlLmNvbXBvbmVudClcbiAqXG4gKiBZb3UgY2FuIHVzZSBgRGF0YSBTb3VyY2UgQnVpbGRlcmAgdG8gY3JlYXRlIGBOYlRyZWVHcmlkRGF0YVNvdXJjZWAgd2hpY2ggd291bGQgaGF2ZSB0b2dnbGUsIHNvcnQgYW5kXG4gKiBmaWx0ZXIgbWV0aG9kcy4gVGhlbiB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2RzIHRvIGNoYW5nZSBzb3J0IG9yIHRvZ2dsZSByb3dzIHByb2dyYW1tYXRpY2FsbHkuIEFsc28gYG5iU29ydGAgYW5kXG4gKiBgbmJGaWx0ZXJJbnB1dGAgZGlyZWN0aXZlcyBib3RoIHN1cHBvcnQgYE5iVHJlZUdyaWREYXRhU291cmNlYCwgc28geW91IGNhbiBwYXNzIGl0IGRpcmVjdGx5IGFzIGFuIGlucHV0IGFuZFxuICogZGlyZWN0aXZlcyB3aWxsIHRyaWdnZXIgc29ydCwgdG9nZ2xlIHRoZW1zZWx2ZXMuXG4gKiBAc3RhY2tlZC1leGFtcGxlKERhdGEgU291cmNlIEJ1aWxkZXIsIHRyZWUtZ3JpZC90cmVlLWdyaWQtc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqIFlvdSBjYW4gY3JlYXRlIHJlc3BvbnNpdmUgZ3JpZCBieSBzZXR0aW5nIGBoaWRlT25gIGFuZCBgc2hvd09uYCBpbnB1dHMgb2ZcbiAqIFtuYlRyZWVHcmlkQ29sdW1uRGVmXShkb2NzL2NvbXBvbmVudHMvdHJlZS1ncmlkL2FwaSNuYnRyZWVncmlkY29sdW1uZGVmZGlyZWN0aXZlKSBkaXJlY3RpdmUuXG4gKiBXaGVuIHZpZXdwb3J0IHJlYWNoZXMgc3BlY2lmaWVkIHdpZHRoIGdyaWQgaGlkZXMgb3Igc2hvd3MgY29sdW1ucy5cbiAqIEBzdGFja2VkLWV4YW1wbGUoUmVzcG9uc2l2ZSBjb2x1bW5zLCB0cmVlLWdyaWQvdHJlZS1ncmlkLXJlc3BvbnNpdmUuY29tcG9uZW50KVxuICpcbiAqIFRvIGN1c3RvbWl6ZSBzb3J0IG9yIHJvdyB0b2dnbGUgaWNvbnMgeW91IGNhbiB1c2UgYG5iU29ydEhlYWRlckljb25gIGFuZCBgbmJUcmVlR3JpZFJvd1RvZ2dsZWAgZGlyZWN0aXZlc1xuICogcmVzcGVjdGl2ZWx5LiBgbmJTb3J0SGVhZGVySWNvbmAgaXMgYSBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSBhbmQgaXQncyBpbXBsaWNpdCBjb250ZXh0IHNldCB0byBjdXJyZW50IGRpcmVjdGlvbi5cbiAqIEFsc28gY29udGV4dCBoYXMgdGhyZWUgcHJvcGVydGllczogYGlzQXNjZW5kaW5nYCwgYGlzRGVzY2VuZGluZ2AgYW5kIGBpc05vbmVgLlxuICogQHN0YWNrZWQtZXhhbXBsZShDdXN0b20gaWNvbnMsIHRyZWUtZ3JpZC90cmVlLWdyaWQtY3VzdG9tLWljb25zLmNvbXBvbmVudClcbiAqXG4gKiBCeSBkZWZhdWx0LCByb3cgdG8gdG9nZ2xlIGhhcHBlbnMgd2hlbiB1c2VyIGNsaWNrcyBhbnl3aGVyZSBpbiB0aGUgcm93LiBBbHNvIGRvdWJsZSBjbGljayBleHBhbmRzIHJvdyBkZWVwbHkuXG4gKiBUbyBkaXNhYmxlIHRoaXMgeW91IGNhbiBzZXQgYFtjbGlja1RvVG9nZ2xlXT1cImZhbHNlXCJgIGlucHV0IG9mIGBuYlRyZWVHcmlkUm93YC5cbiAqIEBzdGFja2VkLWV4YW1wbGUoRGlzYWJsZSBjbGljayB0b2dnbGUsIHRyZWUtZ3JpZC90cmVlLWdyaWQtZGlzYWJsZS1jbGljay10b2dnbGUuY29tcG9uZW50KVxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiB0cmVlLWdyaWQtY2VsbC1ib3JkZXItd2lkdGg6XG4gKiB0cmVlLWdyaWQtY2VsbC1ib3JkZXItc3R5bGU6XG4gKiB0cmVlLWdyaWQtY2VsbC1ib3JkZXItY29sb3I6XG4gKiB0cmVlLWdyaWQtcm93LW1pbi1oZWlnaHQ6XG4gKiB0cmVlLWdyaWQtY2VsbC1wYWRkaW5nOlxuICogdHJlZS1ncmlkLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWNvbG9yOlxuICogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OlxuICogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtc2l6ZTpcbiAqIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXdlaWdodDpcbiAqIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDpcbiAqIHRyZWUtZ3JpZC1mb290ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1jb2xvcjpcbiAqIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1mb250LWZhbWlseTpcbiAqIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1mb250LXNpemU6XG4gKiB0cmVlLWdyaWQtZm9vdGVyLXRleHQtZm9udC13ZWlnaHQ6XG4gKiB0cmVlLWdyaWQtZm9vdGVyLXRleHQtbGluZS1oZWlnaHQ6XG4gKiB0cmVlLWdyaWQtcm93LWJhY2tncm91bmQtY29sb3I6XG4gKiB0cmVlLWdyaWQtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRyZWUtZ3JpZC1yb3ctaG92ZXItYmFja2dyb3VuZC1jb2xvcjpcbiAqIHRyZWUtZ3JpZC1yb3ctdGV4dC1jb2xvcjpcbiAqIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LWZhbWlseTpcbiAqIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LXNpemU6XG4gKiB0cmVlLWdyaWQtcm93LXRleHQtZm9udC13ZWlnaHQ6XG4gKiB0cmVlLWdyaWQtcm93LXRleHQtbGluZS1oZWlnaHQ6XG4gKiB0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLWJhY2tncm91bmQtY29sb3I6XG4gKiB0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLWJvcmRlcjpcbiAqIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tcGFkZGluZzpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGVbbmJUcmVlR3JpZF0nLFxuICB0ZW1wbGF0ZTogTkJfVEFCTEVfVEVNUExBVEUsXG4gIHN0eWxlVXJsczogWycuL3RyZWUtZ3JpZC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IE5CX1RSRUVfR1JJRCwgdXNlRXhpc3Rpbmc6IE5iVHJlZUdyaWRDb21wb25lbnQgfSxcbiAgICBOYkNvbHVtbnNTZXJ2aWNlLFxuICAgIC4uLk5CX1RBQkxFX1BST1ZJREVSUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJUcmVlR3JpZENvbXBvbmVudDxUPiBleHRlbmRzIE5iVGFibGU8TmJUcmVlR3JpZFByZXNlbnRhdGlvbk5vZGU8VD4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU291cmNlQnVpbGRlcjogTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyPFQ+LFxuICAgICAgICAgICAgICBkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXG4gICAgICAgICAgICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgQEF0dHJpYnV0ZSgncm9sZScpIHJvbGU6IHN0cmluZyxcbiAgICAgICAgICAgICAgZGlyOiBOYkRpcmVjdGlvbmFsaXR5LFxuICAgICAgICAgICAgICBASW5qZWN0KE5CX0RPQ1VNRU5UKSBkb2N1bWVudCxcbiAgICAgICAgICAgICAgcGxhdGZvcm06IE5iUGxhdGZvcm0sXG4gICAgICAgICAgICAgIEBJbmplY3QoTkJfV0lORE9XKSBwcml2YXRlIHdpbmRvdyxcbiAgICAgICAgICAgICAgQEluamVjdChOQl9WSUVXX1JFUEVBVEVSX1NUUkFURUdZKSBwcm90ZWN0ZWQgcmVhZG9ubHkgX3ZpZXdSZXBlYXRlcixcbiAgICAgICAgICAgICAgQEluamVjdChOQl9DT0FMRVNDRURfU1RZTEVfU0NIRURVTEVSKSBwcm90ZWN0ZWQgcmVhZG9ubHkgX2NvYWxlc2NlZFN0eWxlU2NoZWR1bGVyLFxuICAgICAgICAgICAgICBfdmlld3BvcnRSdWxlcjogTmJWaWV3cG9ydFJ1bGVyQWRhcHRlcixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgQEluamVjdChOQl9TVElDS1lfUE9TSVRJT05JTkdfTElTVEVORVIpXG4gICAgICAgICAgICAgIHByb3RlY3RlZCByZWFkb25seSBfc3RpY2t5UG9zaXRpb25pbmdMaXN0ZW5lcixcbiAgKSB7XG4gICAgc3VwZXIoZGlmZmVycywgY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYsIHJvbGUsIGRpciwgZG9jdW1lbnQsIHBsYXRmb3JtLCBfdmlld1JlcGVhdGVyLFxuICAgICAgICAgIF9jb2FsZXNjZWRTdHlsZVNjaGVkdWxlciwgX3ZpZXdwb3J0UnVsZXIsIF9zdGlja3lQb3NpdGlvbmluZ0xpc3RlbmVyKTtcbiAgICB0aGlzLnBsYXRmb3JtID0gcGxhdGZvcm07XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfc291cmNlOiBOYlRyZWVHcmlkRGF0YVNvdXJjZTxUPjtcbiAgcHJpdmF0ZSBwbGF0Zm9ybTogTmJQbGF0Zm9ybTtcblxuICAvKipcbiAgICogVGhlIHRhYmxlJ3MgZGF0YVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAdHlwZSB7PFQ+W10gfCBOYlRyZWVHcmlkRGF0YVNvdXJjZX1cbiAgICovXG4gIEBJbnB1dCgnbmJUcmVlR3JpZCcpIHNldCBzb3VyY2UoZGF0YTogVFtdIHwgTmJUcmVlR3JpZERhdGFTb3VyY2U8VD4pIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIE5iVHJlZUdyaWREYXRhU291cmNlKSB7XG4gICAgICB0aGlzLl9zb3VyY2UgPSBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShkYXRhKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5fc291cmNlO1xuICB9XG5cbiAgQElucHV0KCkgbGV2ZWxQYWRkaW5nOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogTWFrZSBhbGwgY29sdW1ucyBlcXVhbCB3aWR0aC4gRmFsc2UgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBlcXVhbENvbHVtbnNXaWR0aCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZXF1YWxDb2x1bW5zV2lkdGhWYWx1ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgZ2V0IGVxdWFsQ29sdW1uc1dpZHRoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVxdWFsQ29sdW1uc1dpZHRoVmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBlcXVhbENvbHVtbnNXaWR0aFZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lcXVhbENvbHVtbnNXaWR0aDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uYi10cmVlLWdyaWQnKSByZWFkb25seSB0cmVlQ2xhc3MgPSB0cnVlO1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNoZWNrRGVmc0NvdW50KCk7XG4gICAgY29uc3Qgcm93c0NoYW5nZSQgPSBtZXJnZShcbiAgICAgIHRoaXMuX2NvbnRlbnRSb3dEZWZzLmNoYW5nZXMsXG4gICAgICB0aGlzLl9jb250ZW50SGVhZGVyUm93RGVmcy5jaGFuZ2VzLFxuICAgICAgdGhpcy5fY29udGVudEZvb3RlclJvd0RlZnMuY2hhbmdlcyxcbiAgICApO1xuICAgIHJvd3NDaGFuZ2UkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNoZWNrRGVmc0NvdW50KCkpO1xuXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZpc2libGVDb2x1bW5zKCk7XG5cbiAgICAgIGNvbnN0IHdpbmRvd1Jlc2l6ZSQgPSBmcm9tRXZlbnQodGhpcy53aW5kb3csICdyZXNpemUnKS5waXBlKGRlYm91bmNlVGltZSg1MCkpO1xuICAgICAgbWVyZ2Uocm93c0NoYW5nZSQsIHRoaXMuX2NvbnRlbnRDb2x1bW5EZWZzLmNoYW5nZXMsIHdpbmRvd1Jlc2l6ZSQpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVZpc2libGVDb2x1bW5zKCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgdG9nZ2xlUm93KHJvdzogTmJUcmVlR3JpZFJvd0NvbXBvbmVudCwgb3B0aW9ucz86IE5iVG9nZ2xlT3B0aW9ucyk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldFJvd0NvbnRleHQocm93KTtcbiAgICB0aGlzLl9zb3VyY2UudG9nZ2xlKGNvbnRleHQuJGltcGxpY2l0LmRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgdG9nZ2xlQ2VsbFJvdyhjZWxsOiBOYlRyZWVHcmlkQ2VsbERpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENlbGxDb250ZXh0KGNlbGwpO1xuICAgIHRoaXMuX3NvdXJjZS50b2dnbGUoY29udGV4dC4kaW1wbGljaXQuZGF0YSk7XG4gIH1cblxuICBnZXRDb2x1bW5XaWR0aCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmVxdWFsQ29sdW1uc1dpZHRoKSB7XG4gICAgICByZXR1cm4gYCR7MTAwIC8gdGhpcy5nZXRDb2x1bW5zQ291bnQoKX0lYDtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZ2V0Q2VsbExldmVsKGNlbGw6IE5iVHJlZUdyaWRDZWxsRGlyZWN0aXZlLCBjb2x1bW5OYW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmlzRmlyc3RDb2x1bW4oY29sdW1uTmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENlbGxDb250ZXh0KGNlbGwpLiRpbXBsaWNpdC5sZXZlbDtcbiAgICB9XG4gICAgcmV0dXJuIE5CX0RFRkFVTFRfUk9XX0xFVkVMO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3dDb250ZXh0KHJvdzogTmJUcmVlR3JpZFJvd0NvbXBvbmVudCk6IE5iUm93Q29udGV4dDxOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPj4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRleHRCeVJvd0VsKHJvdy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDZWxsQ29udGV4dChjZWxsOiBOYlRyZWVHcmlkQ2VsbERpcmVjdGl2ZSk6IE5iUm93Q29udGV4dDxOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPj4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRleHRCeUNlbGxFbChjZWxsLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbnRleHRCeUNlbGxFbChjZWxsRWw6IEhUTUxFbGVtZW50KTogTmJSb3dDb250ZXh0PE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGV4dEJ5Um93RWwoY2VsbEVsLnBhcmVudEVsZW1lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb250ZXh0QnlSb3dFbChyb3dFbDogSFRNTEVsZW1lbnQpOiBOYlJvd0NvbnRleHQ8TmJUcmVlR3JpZFByZXNlbnRhdGlvbk5vZGU8VD4+IHtcbiAgICBjb25zdCByb3dzQ29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmID0gdGhpcy5fcm93T3V0bGV0LnZpZXdDb250YWluZXI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3NDb250YWluZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvd1ZpZXdSZWYgPSByb3dzQ29udGFpbmVyLmdldChpKSBhcyBFbWJlZGRlZFZpZXdSZWY8TmJSb3dDb250ZXh0PE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+Pj47XG5cbiAgICAgIGlmIChyb3dWaWV3UmVmLnJvb3ROb2Rlcy5pbmNsdWRlcyhyb3dFbCkpIHtcbiAgICAgICAgcmV0dXJuIHJvd1ZpZXdSZWYuY29udGV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb2x1bW5zKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgcm93RGVmOiBOYlRyZWVHcmlkSGVhZGVyUm93RGVmRGlyZWN0aXZlIHwgTmJUcmVlR3JpZFJvd0RlZkRpcmVjdGl2ZTxhbnk+O1xuXG4gICAgaWYgKHRoaXMuX2NvbnRlbnRIZWFkZXJSb3dEZWZzLmxlbmd0aCkge1xuICAgICAgcm93RGVmID0gdGhpcy5fY29udGVudEhlYWRlclJvd0RlZnMuZmlyc3QgYXMgTmJUcmVlR3JpZEhlYWRlclJvd0RlZkRpcmVjdGl2ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm93RGVmID0gdGhpcy5fY29udGVudFJvd0RlZnMuZmlyc3QgYXMgTmJUcmVlR3JpZFJvd0RlZkRpcmVjdGl2ZTxhbnk+O1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKHJvd0RlZi5nZXRWaXNpYmxlQ29sdW1ucygpIHx8IFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29sdW1uc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1ucygpLmxlbmd0aDtcbiAgfVxuXG4gIHByaXZhdGUgaXNGaXJzdENvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW5zKClbMF0gPT09IGNvbHVtbk5hbWU7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRGVmc0NvdW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb250ZW50Um93RGVmcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZvdW5kIG11bHRpcGxlIHJvdyBkZWZpbml0aW9uc2ApO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGVudEhlYWRlclJvd0RlZnMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGb3VuZCBtdWx0aXBsZSBoZWFkZXIgcm93IGRlZmluaXRpb25zYCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250ZW50Rm9vdGVyUm93RGVmcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZvdW5kIG11bHRpcGxlIGZvb3RlciByb3cgZGVmaW5pdGlvbnNgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZpc2libGVDb2x1bW5zKCk6IHZvaWQge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBjb2x1bW5EZWZzID0gKHRoaXMuX2NvbnRlbnRDb2x1bW5EZWZzIGFzIFF1ZXJ5TGlzdDxOYlRyZWVHcmlkQ29sdW1uRGVmRGlyZWN0aXZlPik7XG5cbiAgICBjb25zdCBjb2x1bW5zVG9IaWRlOiBzdHJpbmdbXSA9IGNvbHVtbkRlZnNcbiAgICAgIC5maWx0ZXIoKGNvbDogTmJUcmVlR3JpZENvbHVtbkRlZkRpcmVjdGl2ZSkgPT4gY29sLnNob3VsZEhpZGUod2lkdGgpKVxuICAgICAgLm1hcChjb2wgPT4gY29sLm5hbWUpO1xuXG4gICAgY29uc3QgY29sdW1uc1RvU2hvdzogc3RyaW5nW10gPSBjb2x1bW5EZWZzXG4gICAgICAuZmlsdGVyKChjb2w6IE5iVHJlZUdyaWRDb2x1bW5EZWZEaXJlY3RpdmUpID0+IGNvbC5zaG91bGRTaG93KHdpZHRoKSlcbiAgICAgIC5tYXAoY29sID0+IGNvbC5uYW1lKTtcblxuICAgIGlmICghY29sdW1uc1RvSGlkZS5sZW5ndGggJiYgIWNvbHVtbnNUb1Nob3cubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgcm93RGVmcyA9IFtcbiAgICAgIHRoaXMuX2NvbnRlbnRIZWFkZXJSb3dEZWZzLmZpcnN0IGFzIE5iVHJlZUdyaWRIZWFkZXJSb3dEZWZEaXJlY3RpdmUsXG4gICAgICB0aGlzLl9jb250ZW50Um93RGVmcy5maXJzdCBhcyBOYlRyZWVHcmlkUm93RGVmRGlyZWN0aXZlPGFueT4sXG4gICAgICB0aGlzLl9jb250ZW50Rm9vdGVyUm93RGVmcy5maXJzdCBhcyBOYlRyZWVHcmlkRm9vdGVyUm93RGVmRGlyZWN0aXZlLFxuICAgIF0uZmlsdGVyKGQgPT4gISFkKTtcblxuICAgIGZvciAoY29uc3Qgcm93RGVmIG9mIHJvd0RlZnMpIHtcbiAgICAgIGZvciAoY29uc3QgY29sdW1uIG9mIGNvbHVtbnNUb0hpZGUpIHtcbiAgICAgICAgcm93RGVmLmhpZGVDb2x1bW4oY29sdW1uKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBjb2x1bW4gb2YgY29sdW1uc1RvU2hvdykge1xuICAgICAgICByb3dEZWYuc2hvd0NvbHVtbihjb2x1bW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19