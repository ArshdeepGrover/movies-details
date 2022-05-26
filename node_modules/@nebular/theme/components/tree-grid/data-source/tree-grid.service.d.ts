import { NbTreeGridPresentationNode } from './tree-grid.model';
import * as i0 from "@angular/core";
export interface NbToggleOptions {
    deep?: boolean;
}
export declare class NbTreeGridService<T> {
    expand(data: NbTreeGridPresentationNode<T>[], row: T, options?: NbToggleOptions): void;
    collapse(data: NbTreeGridPresentationNode<T>[], row: T, options?: NbToggleOptions): void;
    toggle(data: NbTreeGridPresentationNode<T>[], row: T, options?: NbToggleOptions): void;
    private find;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTreeGridService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbTreeGridService<any>>;
}
