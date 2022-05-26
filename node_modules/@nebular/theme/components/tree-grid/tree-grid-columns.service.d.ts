import { IterableDiffers } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NbColumnsService {
    private differs;
    private allColumns;
    private visibleColumns;
    private changesDiffer;
    private columnHide$;
    private columnShow$;
    constructor(differs: IterableDiffers);
    setColumns(columns: Iterable<string>): void;
    getVisibleColumns(): string[];
    hideColumn(column: string): void;
    showColumn(column: string): void;
    onColumnsChange(): Observable<void>;
    private findInsertIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbColumnsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbColumnsService>;
}
