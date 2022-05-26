import { Subject, Observable, Observer } from 'rxjs';
import { NbSidebarResponsiveState, NbSidebarState } from './sidebar.component';
import * as i0 from "@angular/core";
export declare const getSidebarState$: Subject<{
    tag: string;
    observer: Observer<NbSidebarState>;
}>;
export declare const getSidebarResponsiveState$: Subject<{
    tag: string;
    observer: Observer<NbSidebarResponsiveState>;
}>;
/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 *
 * Allows you to change sidebar state dynamically from any part of the app:
 * @stacked-example(Sidebar State, sidebar/sidebar-toggle.component)
 */
export declare class NbSidebarService {
    private toggle$;
    private expand$;
    private collapse$;
    private compact$;
    /**
     * Subscribe to toggle events
     *
     * @returns Observable<{ compact: boolean, tag: string }>
     */
    onToggle(): Observable<{
        compact: boolean;
        tag: string;
    }>;
    /**
     * Subscribe to expand events
     * @returns Observable<{ tag: string }>
     */
    onExpand(): Observable<{
        tag: string;
    }>;
    /**
     * Subscribe to collapse evens
     * @returns Observable<{ tag: string }>
     */
    onCollapse(): Observable<{
        tag: string;
    }>;
    /**
     * Subscribe to compact evens
     * @returns Observable<{ tag: string }>
     */
    onCompact(): Observable<{
        tag: string;
    }>;
    /**
     * Toggle a sidebar
     * @param {boolean} compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    toggle(compact?: boolean, tag?: string): void;
    /**
     * Expands a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    expand(tag?: string): void;
    /**
     * Collapses a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    collapse(tag?: string): void;
    /**
     * Makes sidebar compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    compact(tag?: string): void;
    /**
     * Returns sidebar state observable which emits once
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar state you need
     */
    getSidebarState(tag?: string): Observable<NbSidebarState>;
    /**
     * Returns sidebar state observable which emits once
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar responsive state you need
     */
    getSidebarResponsiveState(tag?: string): Observable<NbSidebarResponsiveState>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbSidebarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbSidebarService>;
}
