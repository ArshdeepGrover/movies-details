import { NbSortRequest } from '../tree-grid-sort.component';
import { NbTreeGridPresentationNode } from './tree-grid.model';
import * as i0 from "@angular/core";
/**
 * Service used to sort tree grid data. Uses Array.prototype.sort method.
 * If you need custom sorting, you can extend this service and override comparator or whole sort method.
 */
export declare class NbTreeGridSortService<T> {
    sort(request: NbSortRequest, data: NbTreeGridPresentationNode<T>[]): NbTreeGridPresentationNode<T>[];
    protected comparator(request: NbSortRequest, na: NbTreeGridPresentationNode<T>, nb: NbTreeGridPresentationNode<T>): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridSortService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbTreeGridSortService<any>>;
}
