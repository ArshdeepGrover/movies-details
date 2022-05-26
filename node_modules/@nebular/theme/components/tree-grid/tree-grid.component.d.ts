import { AfterViewInit, ChangeDetectorRef, ElementRef, IterableDiffers, OnDestroy } from '@angular/core';
import { NbPlatform } from '../cdk/platform/platform-service';
import { NbDirectionality } from '../cdk/bidi/bidi-service';
import { NbTable } from '../cdk/table/table.module';
import { NbViewportRulerAdapter } from '../cdk/adapter/viewport-ruler-adapter';
import { NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from './data-source/tree-grid-data-source';
import { NbTreeGridPresentationNode } from './data-source/tree-grid.model';
import { NbToggleOptions } from './data-source/tree-grid.service';
import { NbTreeGridRowComponent } from './tree-grid-row.component';
import { NbTreeGridCellDirective } from './tree-grid-cell.component';
import { NbBooleanInput } from '../helpers';
import * as i0 from "@angular/core";
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
export declare class NbTreeGridComponent<T> extends NbTable<NbTreeGridPresentationNode<T>> implements AfterViewInit, OnDestroy {
    private dataSourceBuilder;
    private window;
    protected readonly _viewRepeater: any;
    protected readonly _coalescedStyleScheduler: any;
    protected readonly _stickyPositioningListener: any;
    constructor(dataSourceBuilder: NbTreeGridDataSourceBuilder<T>, differs: IterableDiffers, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, role: string, dir: NbDirectionality, document: any, platform: NbPlatform, window: any, _viewRepeater: any, _coalescedStyleScheduler: any, _viewportRuler: NbViewportRulerAdapter, _stickyPositioningListener: any);
    private destroy$;
    private _source;
    private platform;
    /**
     * The table's data
     * @param data
     * @type {<T>[] | NbTreeGridDataSource}
     */
    set source(data: T[] | NbTreeGridDataSource<T>);
    levelPadding: string;
    /**
     * Make all columns equal width. False by default.
     */
    set equalColumnsWidth(value: boolean);
    get equalColumnsWidth(): boolean;
    private equalColumnsWidthValue;
    static ngAcceptInputType_equalColumnsWidth: NbBooleanInput;
    readonly treeClass = true;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    toggleRow(row: NbTreeGridRowComponent, options?: NbToggleOptions): void;
    toggleCellRow(cell: NbTreeGridCellDirective): void;
    getColumnWidth(): string;
    getCellLevel(cell: NbTreeGridCellDirective, columnName: string): number;
    private getRowContext;
    private getCellContext;
    private getContextByCellEl;
    private getContextByRowEl;
    private getColumns;
    private getColumnsCount;
    private isFirstColumn;
    private checkDefsCount;
    private updateVisibleColumns;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridComponent<any>, [null, null, null, null, { attribute: "role"; }, null, null, null, null, null, null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTreeGridComponent<any>, "table[nbTreeGrid]", never, { "source": "nbTreeGrid"; "levelPadding": "levelPadding"; "equalColumnsWidth": "equalColumnsWidth"; }, {}, never, never>;
}
