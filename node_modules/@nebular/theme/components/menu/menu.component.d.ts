/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, OnInit, OnDestroy, AfterViewInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NbMenuInternalService, NbMenuItem, NbMenuService, NbMenuBadgeConfig } from './menu.service';
import { NbBooleanInput } from '../helpers';
import { NbLayoutDirectionService } from '../../services/direction.service';
import * as i0 from "@angular/core";
export declare enum NbToggleStates {
    Expanded = "expanded",
    Collapsed = "collapsed"
}
export declare class NbMenuItemComponent implements DoCheck, AfterViewInit, OnDestroy {
    protected menuService: NbMenuService;
    protected directionService: NbLayoutDirectionService;
    menuItem: NbMenuItem;
    badge: NbMenuBadgeConfig;
    hoverItem: EventEmitter<any>;
    toggleSubMenu: EventEmitter<any>;
    selectItem: EventEmitter<any>;
    itemClick: EventEmitter<any>;
    protected destroy$: Subject<void>;
    toggleState: NbToggleStates;
    constructor(menuService: NbMenuService, directionService: NbLayoutDirectionService);
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onToggleSubMenu(item: NbMenuItem): void;
    onHoverItem(item: NbMenuItem): void;
    onSelectItem(item: NbMenuItem): void;
    onItemClick(item: NbMenuItem): void;
    getExpandStateIcon(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbMenuItemComponent, "[nbMenuItem]", never, { "menuItem": "menuItem"; "badge": "badge"; }, { "hoverItem": "hoverItem"; "toggleSubMenu": "toggleSubMenu"; "selectItem": "selectItem"; "itemClick": "itemClick"; }, never, never>;
}
/**
 * Vertical menu component.
 *
 * Accepts a list of menu items and renders them accordingly. Supports multi-level menus.
 *
 * Basic example
 * @stacked-example(Showcase, menu/menu-showcase.component)
 *
 * ```ts
 * // ...
 * items: NbMenuItem[] = [
 *  {
 *    title: home,
 *    link: '/'
 *  },
 *  {
 *    title: dashboard,
 *    link: 'dashboard'
 *  }
 * ];
 * // ...
 * <nb-menu [items]="items"></nb-menu>
 * ```
 * ### Installation
 *
 * Import `NbMenuModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * and `NbMenuModule` to your feature module where the component should be shown:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Two-level menu example
 * @stacked-example(Two Levels, menu/menu-children.component)
 *
 *
 * Autocollapse menu example
 * @stacked-example(Autocollapse Menu, menu/menu-autocollapse.component)
 *
 * Menu badge
 * @stacked-example(Menu item badge, menu/menu-badge.component)
 *
 * @styles
 *
 * menu-background-color:
 * menu-text-color:
 * menu-text-font-family:
 * menu-text-font-size:
 * menu-text-font-weight:
 * menu-text-line-height:
 * menu-group-text-color:
 * menu-item-border-radius:
 * menu-item-padding:
 * menu-item-hover-background-color:
 * menu-item-hover-cursor:
 * menu-item-hover-text-color:
 * menu-item-icon-hover-color:
 * menu-item-active-background-color:
 * menu-item-active-text-color:
 * menu-item-icon-active-color:
 * menu-item-icon-color:
 * menu-item-icon-margin:
 * menu-item-icon-width:
 * menu-item-divider-color:
 * menu-item-divider-style:
 * menu-item-divider-width:
 * menu-submenu-background-color:
 * menu-submenu-text-color:
 * menu-submenu-margin:
 * menu-submenu-padding:
 * menu-submenu-item-border-color:
 * menu-submenu-item-border-style:
 * menu-submenu-item-border-width:
 * menu-submenu-item-border-radius:
 * menu-submenu-item-padding:
 * menu-submenu-item-hover-background-color:
 * menu-submenu-item-hover-border-color:
 * menu-submenu-item-hover-text-color:
 * menu-submenu-item-icon-hover-color:
 * menu-submenu-item-active-background-color:
 * menu-submenu-item-active-border-color:
 * menu-submenu-item-active-text-color:
 * menu-submenu-item-icon-active-color:
 * menu-submenu-item-active-hover-background-color:
 * menu-submenu-item-active-hover-border-color:
 * menu-submenu-item-active-hover-text-color:
 * menu-submenu-item-icon-active-hover-color:
 */
export declare class NbMenuComponent implements OnInit, AfterViewInit, OnDestroy {
    protected window: any;
    protected platformId: any;
    protected menuInternalService: NbMenuInternalService;
    protected router: Router;
    /**
     * Tags a menu with some ID, can be later used in the menu service
     * to determine which menu triggered the action, if multiple menus exist on the page.
     *
     * @type {string}
     */
    tag: string;
    /**
     * List of menu items.
     * @type List<NbMenuItem> | List<any> | any
     */
    items: NbMenuItem[];
    /**
     * Collapse all opened submenus on the toggle event
     * Default value is "false"
     * @type boolean
     */
    get autoCollapse(): boolean;
    set autoCollapse(value: boolean);
    protected _autoCollapse: boolean;
    static ngAcceptInputType_autoCollapse: NbBooleanInput;
    protected destroy$: Subject<void>;
    constructor(window: any, platformId: any, menuInternalService: NbMenuInternalService, router: Router);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onAddItem(data: {
        tag: string;
        items: NbMenuItem[];
    }): void;
    onHoverItem(item: NbMenuItem): void;
    onToggleSubMenu(item: NbMenuItem): void;
    onSelectItem(item: NbMenuItem): void;
    onItemClick(item: NbMenuItem): void;
    ngOnDestroy(): void;
    protected navigateHome(): void;
    protected collapseAll(): void;
    protected getHomeItem(items: NbMenuItem[]): NbMenuItem;
    protected compareTag(tag: string): boolean;
    protected getSelectedItem(items: NbMenuItem[]): NbMenuItem;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbMenuComponent, "nb-menu", never, { "tag": "tag"; "items": "items"; "autoCollapse": "autoCollapse"; }, {}, never, never>;
}
