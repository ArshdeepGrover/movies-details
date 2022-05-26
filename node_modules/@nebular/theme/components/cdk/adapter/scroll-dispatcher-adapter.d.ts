import { NgZone } from '@angular/core';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { NbPlatform } from '../platform/platform-service';
import { NbLayoutScrollService } from '../../../services/scroll.service';
import * as i0 from "@angular/core";
export declare class NbScrollDispatcherAdapter extends ScrollDispatcher {
    protected scrollService: NbLayoutScrollService;
    constructor(ngZone: NgZone, platform: NbPlatform, scrollService: NbLayoutScrollService, document: any);
    scrolled(auditTimeInMs?: number): Observable<CdkScrollable | void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbScrollDispatcherAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbScrollDispatcherAdapter>;
}
