import { NbTreeGridPresentationNode } from './tree-grid.model';
import * as i0 from "@angular/core";
/**
 * Service used to filter tree grid data. Searched searchString in all object values.
 * If you need custom filter, you can extend this service and override filterPredicate or whole filter method.
 */
export declare class NbTreeGridFilterService<T> {
    filter(query: string, data: NbTreeGridPresentationNode<T>[]): NbTreeGridPresentationNode<T>[];
    protected filterPredicate(data: T, searchQuery: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridFilterService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbTreeGridFilterService<any>>;
}
