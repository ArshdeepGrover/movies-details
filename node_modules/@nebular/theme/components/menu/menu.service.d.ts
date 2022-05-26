import { Location } from '@angular/common';
import { Params, QueryParamsHandling } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { NbIconConfig } from '../icon/icon.component';
import { NbBadge } from '../badge/badge.component';
import * as i0 from "@angular/core";
export interface NbMenuBag {
    tag: string;
    item: NbMenuItem;
}
export declare type NbMenuBadgeConfig = Omit<NbBadge, 'position'>;
/**
 *
 *
 * Menu Item options example
 * @stacked-example(Menu Link Parameters, menu/menu-link-params.component)
 *
 *
 */
export declare class NbMenuItem {
    /**
     * Item Title
     * @type {string}
     */
    title: string;
    /**
     * Item relative link (for routerLink)
     * @type {string}
     */
    link?: string;
    /**
     * Item URL (absolute)
     * @type {string}
     */
    url?: string;
    /**
     * Icon class name or icon config object
     * @type {string | NbIconConfig}
     */
    icon?: string | NbIconConfig;
    /**
     * Expanded by default
     * @type {boolean}
     */
    expanded?: boolean;
    /**
     * Badge component
     * @type {boolean}
     */
    badge?: NbMenuBadgeConfig;
    /**
     * Children items
     * @type {List<NbMenuItem>}
     */
    children?: NbMenuItem[];
    /**
     * HTML Link target
     * @type {string}
     */
    target?: string;
    /**
     * Hidden Item
     * @type {boolean}
     */
    hidden?: boolean;
    /**
     * Item is selected when partly or fully equal to the current url
     * @type {string}
     */
    pathMatch?: 'full' | 'prefix';
    /**
     * Where this is a home item
     * @type {boolean}
     */
    home?: boolean;
    /**
     * Whether the item is just a group (non-clickable)
     * @type {boolean}
     */
    group?: boolean;
    /** Whether the item skipLocationChange is true or false
     *@type {boolean}
     */
    skipLocationChange?: boolean;
    /** Map of query parameters
     *@type {Params}
     */
    queryParams?: Params;
    queryParamsHandling?: QueryParamsHandling;
    parent?: NbMenuItem;
    selected?: boolean;
    data?: any;
    fragment?: string;
    preserveFragment?: boolean;
    /**
     * @returns item parents in top-down order
     */
    static getParents(item: NbMenuItem): NbMenuItem[];
    static isParent(item: NbMenuItem, possibleChild: NbMenuItem): boolean;
}
/**
 *
 *
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 * @stacked-example(Menu Service, menu/menu-service.component)
 *
 *
 */
export declare class NbMenuService {
    /**
     * Add items to the end of the menu items list
     * @param {List<NbMenuItem>} items
     * @param {string} tag
     */
    addItems(items: NbMenuItem[], tag?: string): void;
    /**
     * Collapses all menu items
     * @param {string} tag
     */
    collapseAll(tag?: string): void;
    /**
     * Navigate to the home menu item
     * @param {string} tag
     */
    navigateHome(tag?: string): void;
    /**
     * Returns currently selected item. Won't subscribe to the future events.
     * @param {string} tag
     * @returns {Observable<{tag: string; item: NbMenuItem}>}
     */
    getSelectedItem(tag?: string): Observable<NbMenuBag>;
    onItemClick(): Observable<NbMenuBag>;
    onItemSelect(): Observable<NbMenuBag>;
    onItemHover(): Observable<NbMenuBag>;
    onSubmenuToggle(): Observable<NbMenuBag>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbMenuService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbMenuService>;
}
export declare class NbMenuInternalService {
    private location;
    constructor(location: Location);
    prepareItems(items: NbMenuItem[]): void;
    selectFromUrl(items: NbMenuItem[], tag: string, collapseOther?: boolean): void;
    selectItem(item: NbMenuItem, items: NbMenuItem[], collapseOther: boolean, tag: string): void;
    collapseAll(items: NbMenuItem[], tag: string, except?: NbMenuItem): void;
    onAddItem(): Observable<{
        tag: string;
        items: NbMenuItem[];
    }>;
    onNavigateHome(): Observable<{
        tag: string;
    }>;
    onCollapseAll(): Observable<{
        tag: string;
    }>;
    onGetSelectedItem(): Observable<{
        tag: string;
        listener: BehaviorSubject<NbMenuBag>;
    }>;
    itemHover(item: NbMenuItem, tag?: string): void;
    submenuToggle(item: NbMenuItem, tag?: string): void;
    itemSelect(item: NbMenuItem, tag?: string): void;
    itemClick(item: NbMenuItem, tag?: string): void;
    /**
     * Unselect all given items deeply.
     * @param items array of items to unselect.
     * @returns items which selected value was changed.
     */
    private resetSelection;
    /**
     * Collapse all given items deeply.
     * @param items array of items to collapse.
     * @param except menu item which shouldn't be collapsed, also disables collapsing for parents of this item.
     * @returns items which expanded value was changed.
     */
    private collapseItems;
    private applyDefaults;
    private setParent;
    /**
     * Find deepest item which link matches current URL path.
     * @param items array of items to search in.
     * @returns found item of undefined.
     */
    private findItemByUrl;
    private isSelectedInUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbMenuInternalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbMenuInternalService>;
}
