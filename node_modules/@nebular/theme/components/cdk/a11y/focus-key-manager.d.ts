import { QueryList } from '@angular/core';
import { FocusableOption, FocusKeyManager } from '@angular/cdk/a11y';
export declare type NbFocusableOption = FocusableOption;
export declare class NbFocusKeyManager<T> extends FocusKeyManager<T> {
}
export declare class NbFocusKeyManagerFactoryService<T extends NbFocusableOption> {
    create(items: QueryList<T> | T[]): NbFocusKeyManager<T>;
}
