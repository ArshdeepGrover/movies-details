export declare const NB_DEFAULT_ROW_LEVEL: number;
export declare type NbDataGetter<N, T> = (N: any) => T;
export declare type NbChildrenGetter<N, T> = (N: any) => (T[] | undefined);
export declare type NbExpandedGetter<N> = (N: any) => boolean;
export interface NbGetters<N, T> {
    dataGetter?: NbDataGetter<N, T>;
    childrenGetter?: NbChildrenGetter<N, T>;
    expandedGetter?: NbExpandedGetter<N>;
}
/**
 * Implicit context of cells and rows
 */
export declare class NbTreeGridPresentationNode<T> {
    /**
     * Data object associated with row
     */
    readonly data: T;
    children: NbTreeGridPresentationNode<T>[] | undefined;
    /**
     * Row expand state
     */
    expanded: boolean;
    readonly level: number;
    constructor(
    /**
     * Data object associated with row
     */
    data: T, children: NbTreeGridPresentationNode<T>[] | undefined, 
    /**
     * Row expand state
     */
    expanded: boolean, level: number);
    /**
     * True if row has child rows
     */
    hasChildren(): boolean;
}
