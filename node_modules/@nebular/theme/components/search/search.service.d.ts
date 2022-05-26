import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Search component service, connects your code to a page-level search component.
 */
export declare class NbSearchService {
    private searchSubmittings$;
    private searchActivations$;
    private searchDeactivations$;
    private searchInput$;
    /***
     * Activate (open) search component
     * @param {string} searchType
     * @param {string} tag
     */
    activateSearch(searchType: string, tag?: string): void;
    /**
     * Deactibate (close) search component
     * @param {string} searchType
     * @param {string} tag
     */
    deactivateSearch(searchType: string, tag?: string): void;
    /**
     * Trigger search submit
     * @param {string} term
     * @param {string} tag
     */
    submitSearch(term: string, tag?: string): void;
    /**
     * Trigger search submit by input event
     * @param {string} term
     * @param {string} tag
     */
    searchInput(term: string, tag?: string): void;
    /**
     * Subscribe to 'activate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    onSearchActivate(): Observable<{
        searchType: string;
        tag?: string;
    }>;
    /**
     * Subscribe to 'deactivate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    onSearchDeactivate(): Observable<{
        searchType: string;
        tag?: string;
    }>;
    /**
     * Subscribe to 'submit' event (when submit button clicked)
     * @returns Observable<{term: string; tag?: string}>
     */
    onSearchSubmit(): Observable<{
        term: string;
        tag?: string;
    }>;
    /**
     * Subscribe to input event
     * @returns Observable<{term: string; tag?: string}>
     */
    onSearchInput(): Observable<{
        term: string;
        tag?: string;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSearchService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbSearchService>;
}
