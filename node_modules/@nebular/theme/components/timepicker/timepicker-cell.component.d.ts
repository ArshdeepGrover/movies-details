import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { NbSelectedTimeModel } from './model';
import { NbPlatform } from '../cdk/platform/platform-service';
import * as i0 from "@angular/core";
export declare class NbTimePickerCellComponent implements AfterViewInit, OnDestroy {
    protected ngZone: NgZone;
    protected platformService: NbPlatform;
    protected selectedChange$: Subject<boolean>;
    protected unselected$: import("rxjs").Observable<boolean>;
    protected destroy$: Subject<void>;
    _selected: boolean;
    set selected(selected: boolean);
    get selected(): boolean;
    value: string;
    select: EventEmitter<NbSelectedTimeModel>;
    valueContainerElement: ElementRef;
    constructor(ngZone: NgZone, platformService: NbPlatform);
    onClick(): void;
    ngAfterViewInit(): void;
    protected scrollToElement(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTimePickerCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTimePickerCellComponent, "nb-timepicker-cell", never, { "selected": "selected"; "value": "value"; }, { "select": "select"; }, never, never>;
}
