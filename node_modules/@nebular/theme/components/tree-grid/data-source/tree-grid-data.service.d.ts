import { NbGetters, NbTreeGridPresentationNode } from './tree-grid.model';
import * as i0 from "@angular/core";
export declare class NbTreeGridDataService<T> {
    private defaultGetters;
    toPresentationNodes<N>(nodes: N[], customGetters?: NbGetters<N, T>, level?: number): NbTreeGridPresentationNode<T>[];
    private mapNodes;
    flattenExpanded(nodes: NbTreeGridPresentationNode<T>[]): NbTreeGridPresentationNode<T>[];
    copy(nodes: NbTreeGridPresentationNode<T>[]): NbTreeGridPresentationNode<T>[];
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridDataService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbTreeGridDataService<any>>;
}
