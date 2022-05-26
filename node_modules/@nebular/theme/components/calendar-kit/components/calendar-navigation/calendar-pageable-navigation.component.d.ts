/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbLayoutDirectionService } from '../../../../services/direction.service';
import * as i0 from "@angular/core";
export declare class NbCalendarPageableNavigationComponent<D> {
    private directionService;
    next: EventEmitter<void>;
    prev: EventEmitter<void>;
    constructor(directionService: NbLayoutDirectionService);
    get isLtr(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarPageableNavigationComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCalendarPageableNavigationComponent<any>, "nb-calendar-pageable-navigation", never, {}, { "next": "next"; "prev": "prev"; }, never, never>;
}
