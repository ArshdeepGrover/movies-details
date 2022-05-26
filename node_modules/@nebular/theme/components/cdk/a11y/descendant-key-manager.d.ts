import { ActiveDescendantKeyManager, Highlightable } from '@angular/cdk/a11y';
import { QueryList } from '@angular/core';
export declare type NbHighlightableOption = Highlightable;
export declare class NbActiveDescendantKeyManager<T> extends ActiveDescendantKeyManager<T> {
}
export declare class NbActiveDescendantKeyManagerFactoryService<T extends NbHighlightableOption> {
    create(items: QueryList<T> | T[]): NbActiveDescendantKeyManager<T>;
}
export declare enum NbKeyManagerActiveItemMode {
    RESET_ACTIVE = -1,
    FIRST_ACTIVE = 0
}
