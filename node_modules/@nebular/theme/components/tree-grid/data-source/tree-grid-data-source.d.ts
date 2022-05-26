import { Observable } from 'rxjs';
import { NbCollectionViewer } from '../../cdk/collections/collection-viewer';
import { NbDataSource } from '../../cdk/table/data-source';
import { NbSortable, NbSortRequest } from '../tree-grid-sort.component';
import { NbTreeGridDataService } from './tree-grid-data.service';
import { NbTreeGridFilterService } from './tree-grid-filter.service';
import { NbTreeGridSortService } from './tree-grid-sort.service';
import { NbGetters, NbTreeGridPresentationNode } from './tree-grid.model';
import { NbToggleOptions, NbTreeGridService } from './tree-grid.service';
import * as i0 from "@angular/core";
export interface NbFilterable {
    filter(filterRequest: string): any;
}
export declare class NbTreeGridDataSource<T> extends NbDataSource<NbTreeGridPresentationNode<T>> implements NbSortable, NbFilterable {
    private sortService;
    private filterService;
    private treeGridService;
    private treeGridDataService;
    /** Stream that emits when a new data array is set on the data source. */
    private data;
    /** Stream emitting render data to the table (depends on ordered data changes). */
    private readonly renderData;
    private readonly filterRequest;
    private readonly sortRequest;
    constructor(sortService: NbTreeGridSortService<T>, filterService: NbTreeGridFilterService<T>, treeGridService: NbTreeGridService<T>, treeGridDataService: NbTreeGridDataService<T>);
    setData<N>(data: N[], customGetters?: NbGetters<N, T>): void;
    connect(collectionViewer: NbCollectionViewer): Observable<NbTreeGridPresentationNode<T>[] | ReadonlyArray<NbTreeGridPresentationNode<T>>>;
    disconnect(collectionViewer: NbCollectionViewer): void;
    expand(row: T): void;
    collapse(row: T): void;
    toggle(row: T, options?: NbToggleOptions): void;
    toggleByIndex(dataIndex: number, options?: NbToggleOptions): void;
    getLevel(rowIndex: number): number;
    sort(sortRequest: NbSortRequest): void;
    filter(searchQuery: string): void;
    protected updateChangeSubscription(): void;
    private filterData;
    private sortData;
}
export declare class NbTreeGridDataSourceBuilder<T> {
    private filterService;
    private sortService;
    private treeGridService;
    private treeGridDataService;
    constructor(filterService: NbTreeGridFilterService<T>, sortService: NbTreeGridSortService<T>, treeGridService: NbTreeGridService<T>, treeGridDataService: NbTreeGridDataService<T>);
    create<N>(data: N[], customGetters?: NbGetters<N, T>): NbTreeGridDataSource<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridDataSourceBuilder<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbTreeGridDataSourceBuilder<any>>;
}
