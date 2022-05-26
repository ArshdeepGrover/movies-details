/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NbSearchService } from './search.service';
import { NbThemeService } from '../../services/theme.service';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { NbPortalDirective } from '../cdk/overlay/mapping';
import * as i0 from "@angular/core";
/**
 * search-field-component is used under the hood by nb-search component
 * can't be used itself
 */
export declare class NbSearchFieldComponent implements OnChanges, AfterViewInit {
    static readonly TYPE_MODAL_ZOOMIN = "modal-zoomin";
    static readonly TYPE_ROTATE_LAYOUT = "rotate-layout";
    static readonly TYPE_MODAL_MOVE = "modal-move";
    static readonly TYPE_CURTAIN = "curtain";
    static readonly TYPE_COLUMN_CURTAIN = "column-curtain";
    static readonly TYPE_MODAL_DROP = "modal-drop";
    static readonly TYPE_MODAL_HALF = "modal-half";
    type: string;
    placeholder: string;
    hint: string;
    show: boolean;
    close: EventEmitter<any>;
    search: EventEmitter<any>;
    searchInput: EventEmitter<any>;
    inputElement: ElementRef<HTMLInputElement>;
    get showClass(): boolean;
    get modalZoomin(): boolean;
    get rotateLayout(): boolean;
    get modalMove(): boolean;
    get curtain(): boolean;
    get columnCurtain(): boolean;
    get modalDrop(): boolean;
    get modalHalf(): boolean;
    ngOnChanges({ show }: SimpleChanges): void;
    ngAfterViewInit(): void;
    emitClose(): void;
    submitSearch(term: any): void;
    emitSearchInput(term: string): void;
    focusInput(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSearchFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSearchFieldComponent, "nb-search-field", never, { "type": "type"; "placeholder": "placeholder"; "hint": "hint"; "show": "show"; }, { "close": "close"; "search": "search"; "searchInput": "searchInput"; }, never, never>;
}
export declare type NbSearchType = 'modal-zoomin' | 'rotate-layout' | 'modal-move' | 'curtain' | 'column-curtain' | 'modal-drop' | 'modal-half';
/**
 * Beautiful full-page search control.
 *
 * @stacked-example(Showcase, search/search-showcase.component)
 *
 * Basic setup:
 *
 * ```ts
 *  <nb-search type="rotate-layout"></nb-search>
 * ```
 * ### Installation
 *
 * Import `NbSearchModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSearchModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Several animation types are available:
 * modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half
 *
 * It is also possible to handle search event using `NbSearchService`:
 *
 * @stacked-example(Search Event, search/search-event.component)
 *
 * @styles
 *
 * search-background-color:
 * search-divider-color:
 * search-divider-style:
 * search-divider-width:
 * search-extra-background-color:
 * search-text-color:
 * search-text-font-family:
 * search-text-font-size:
 * search-text-font-weight:
 * search-text-line-height:
 * search-placeholder-text-color:
 * search-info-text-color:
 * search-info-text-font-family:
 * search-info-text-font-size:
 * search-info-text-font-weight:
 * search-info-text-line-height:
 */
export declare class NbSearchComponent implements OnInit, OnDestroy {
    private searchService;
    private themeService;
    private router;
    private overlayService;
    private changeDetector;
    private destroy$;
    private overlayRef;
    showSearchField: boolean;
    /**
     * Tags a search with some ID, can be later used in the search service
     * to determine which search component triggered the action, if multiple searches exist on the page.
     *
     * @type {string}
     */
    tag: string;
    /**
     * Search input placeholder
     * @type {string}
     */
    placeholder: string;
    /**
     * Hint showing under the input field to improve user experience
     *
     * @type {string}
     */
    hint: string;
    /**
     * Search design type, available types are
     * modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half
     * @type {string}
     */
    type: NbSearchType;
    searchFieldPortal: NbPortalDirective;
    searchButton: ElementRef<HTMLElement>;
    constructor(searchService: NbSearchService, themeService: NbThemeService, router: Router, overlayService: NbOverlayService, changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    openSearch(): void;
    hideSearch(): void;
    search(term: any): void;
    emitInput(term: string): void;
    emitActivate(): void;
    emitDeactivate(): void;
    private removeLayoutClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbSearchComponent, "nb-search", never, { "tag": "tag"; "placeholder": "placeholder"; "hint": "hint"; "type": "type"; }, {}, never, never>;
}
