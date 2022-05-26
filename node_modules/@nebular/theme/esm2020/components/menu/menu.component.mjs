/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, Output, EventEmitter, Inject, PLATFORM_ID, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter, map } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { NB_WINDOW } from '../../theme.options';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "./menu.service";
import * as i2 from "../../services/direction.service";
import * as i3 from "../icon/icon.component";
import * as i4 from "../badge/badge.component";
import * as i5 from "@angular/common";
import * as i6 from "@angular/router";
export var NbToggleStates;
(function (NbToggleStates) {
    NbToggleStates["Expanded"] = "expanded";
    NbToggleStates["Collapsed"] = "collapsed";
})(NbToggleStates || (NbToggleStates = {}));
export class NbMenuItemComponent {
    constructor(menuService, directionService) {
        this.menuService = menuService;
        this.directionService = directionService;
        this.menuItem = null;
        this.hoverItem = new EventEmitter();
        this.toggleSubMenu = new EventEmitter();
        this.selectItem = new EventEmitter();
        this.itemClick = new EventEmitter();
        this.destroy$ = new Subject();
    }
    ngDoCheck() {
        this.toggleState = this.menuItem.expanded ? NbToggleStates.Expanded : NbToggleStates.Collapsed;
    }
    ngAfterViewInit() {
        this.menuService.onSubmenuToggle()
            .pipe(filter(({ item }) => item === this.menuItem), map(({ item }) => item.expanded), takeUntil(this.destroy$))
            .subscribe(isExpanded => this.toggleState = isExpanded ? NbToggleStates.Expanded : NbToggleStates.Collapsed);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onToggleSubMenu(item) {
        this.toggleSubMenu.emit(item);
    }
    onHoverItem(item) {
        this.hoverItem.emit(item);
    }
    onSelectItem(item) {
        this.selectItem.emit(item);
    }
    onItemClick(item) {
        this.itemClick.emit(item);
    }
    getExpandStateIcon() {
        if (this.menuItem.expanded) {
            return 'chevron-down-outline';
        }
        return this.directionService.isLtr()
            ? 'chevron-left-outline'
            : 'chevron-right-outline';
    }
}
NbMenuItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuItemComponent, deps: [{ token: i1.NbMenuService }, { token: i2.NbLayoutDirectionService }], target: i0.ɵɵFactoryTarget.Component });
NbMenuItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbMenuItemComponent, selector: "[nbMenuItem]", inputs: { menuItem: "menuItem", badge: "badge" }, outputs: { hoverItem: "hoverItem", toggleSubMenu: "toggleSubMenu", selectItem: "selectItem", itemClick: "itemClick" }, ngImport: i0, template: "<span *ngIf=\"menuItem.group\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  {{ menuItem.title }}\n</span>\n<a *ngIf=\"menuItem.link && !menuItem.url && !menuItem.children && !menuItem.group\"\n   [routerLink]=\"menuItem.link\"\n   [queryParams]=\"menuItem.queryParams\"\n   [fragment]=\"menuItem.fragment\"\n   [queryParamsHandling]=\"menuItem.queryParamsHandling\"\n   [preserveFragment]=\"menuItem.preserveFragment\"\n   [skipLocationChange]=\"menuItem.skipLocationChange\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   (click)=\"onItemClick(menuItem);\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n</a>\n<a *ngIf=\"menuItem.url && !menuItem.children && !menuItem.link && !menuItem.group\"\n   [attr.href]=\"menuItem.url\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   (click)=\"onSelectItem(menuItem)\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n</a>\n<a *ngIf=\"!menuItem.children && !menuItem.link && !menuItem.url && !menuItem.group\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   (click)=\"$event.preventDefault(); onItemClick(menuItem);\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n</a>\n<a *ngIf=\"menuItem.children\"\n   (click)=\"$event.preventDefault(); onToggleSubMenu(menuItem);\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   href=\"#\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n  <nb-icon class=\"expand-state\" [icon]=\"getExpandStateIcon()\" pack=\"nebular-essentials\"></nb-icon>\n</a>\n<ul *ngIf=\"menuItem.children\"\n    [class.collapsed]=\"!(menuItem.children && menuItem.expanded)\"\n    [class.expanded]=\"menuItem.expanded\"\n    [@toggle]=\"toggleState\"\n    class=\"menu-items\">\n  <ng-container *ngFor=\"let item of menuItem.children\">\n    <li nbMenuItem *ngIf=\"!item.hidden\"\n        [menuItem]=\"item\"\n        [badge]=\"item.badge\"\n        [class.menu-group]=\"item.group\"\n        (hoverItem)=\"onHoverItem($event)\"\n        (toggleSubMenu)=\"onToggleSubMenu($event)\"\n        (selectItem)=\"onSelectItem($event)\"\n        (itemClick)=\"onItemClick($event)\"\n        class=\"menu-item\">\n    </li>\n  </ng-container>\n</ul>\n\n<ng-template #badgeTemplate>\n  <nb-badge [text]=\"badge.text\" [dotMode]=\"badge.dotMode\" [status]=\"badge.status\">\n  </nb-badge>\n</ng-template>\n", components: [{ type: i3.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }, { type: NbMenuItemComponent, selector: "[nbMenuItem]", inputs: ["menuItem", "badge"], outputs: ["hoverItem", "toggleSubMenu", "selectItem", "itemClick"] }, { type: i4.NbBadgeComponent, selector: "nb-badge", inputs: ["text", "position", "dotMode", "status"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i5.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], animations: [
        trigger('toggle', [
            state(NbToggleStates.Collapsed, style({ height: '0', margin: '0' })),
            state(NbToggleStates.Expanded, style({ height: '*' })),
            transition(`${NbToggleStates.Collapsed} <=> ${NbToggleStates.Expanded}`, animate(300)),
        ]),
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuItemComponent, decorators: [{
            type: Component,
            args: [{ selector: '[nbMenuItem]', animations: [
                        trigger('toggle', [
                            state(NbToggleStates.Collapsed, style({ height: '0', margin: '0' })),
                            state(NbToggleStates.Expanded, style({ height: '*' })),
                            transition(`${NbToggleStates.Collapsed} <=> ${NbToggleStates.Expanded}`, animate(300)),
                        ]),
                    ], template: "<span *ngIf=\"menuItem.group\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  {{ menuItem.title }}\n</span>\n<a *ngIf=\"menuItem.link && !menuItem.url && !menuItem.children && !menuItem.group\"\n   [routerLink]=\"menuItem.link\"\n   [queryParams]=\"menuItem.queryParams\"\n   [fragment]=\"menuItem.fragment\"\n   [queryParamsHandling]=\"menuItem.queryParamsHandling\"\n   [preserveFragment]=\"menuItem.preserveFragment\"\n   [skipLocationChange]=\"menuItem.skipLocationChange\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   (click)=\"onItemClick(menuItem);\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n</a>\n<a *ngIf=\"menuItem.url && !menuItem.children && !menuItem.link && !menuItem.group\"\n   [attr.href]=\"menuItem.url\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   (click)=\"onSelectItem(menuItem)\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n</a>\n<a *ngIf=\"!menuItem.children && !menuItem.link && !menuItem.url && !menuItem.group\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   (click)=\"$event.preventDefault(); onItemClick(menuItem);\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n</a>\n<a *ngIf=\"menuItem.children\"\n   (click)=\"$event.preventDefault(); onToggleSubMenu(menuItem);\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   href=\"#\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n  <nb-icon class=\"expand-state\" [icon]=\"getExpandStateIcon()\" pack=\"nebular-essentials\"></nb-icon>\n</a>\n<ul *ngIf=\"menuItem.children\"\n    [class.collapsed]=\"!(menuItem.children && menuItem.expanded)\"\n    [class.expanded]=\"menuItem.expanded\"\n    [@toggle]=\"toggleState\"\n    class=\"menu-items\">\n  <ng-container *ngFor=\"let item of menuItem.children\">\n    <li nbMenuItem *ngIf=\"!item.hidden\"\n        [menuItem]=\"item\"\n        [badge]=\"item.badge\"\n        [class.menu-group]=\"item.group\"\n        (hoverItem)=\"onHoverItem($event)\"\n        (toggleSubMenu)=\"onToggleSubMenu($event)\"\n        (selectItem)=\"onSelectItem($event)\"\n        (itemClick)=\"onItemClick($event)\"\n        class=\"menu-item\">\n    </li>\n  </ng-container>\n</ul>\n\n<ng-template #badgeTemplate>\n  <nb-badge [text]=\"badge.text\" [dotMode]=\"badge.dotMode\" [status]=\"badge.status\">\n  </nb-badge>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NbMenuService }, { type: i2.NbLayoutDirectionService }]; }, propDecorators: { menuItem: [{
                type: Input
            }], badge: [{
                type: Input
            }], hoverItem: [{
                type: Output
            }], toggleSubMenu: [{
                type: Output
            }], selectItem: [{
                type: Output
            }], itemClick: [{
                type: Output
            }] } });
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
export class NbMenuComponent {
    constructor(window, platformId, menuInternalService, router) {
        this.window = window;
        this.platformId = platformId;
        this.menuInternalService = menuInternalService;
        this.router = router;
        this._autoCollapse = false;
        this.destroy$ = new Subject();
    }
    /**
     * Collapse all opened submenus on the toggle event
     * Default value is "false"
     * @type boolean
     */
    get autoCollapse() {
        return this._autoCollapse;
    }
    set autoCollapse(value) {
        this._autoCollapse = convertToBoolProperty(value);
    }
    ngOnInit() {
        this.menuInternalService.prepareItems(this.items);
        this.menuInternalService
            .onAddItem()
            .pipe(filter((data) => this.compareTag(data.tag)), takeUntil(this.destroy$))
            .subscribe(data => this.onAddItem(data));
        this.menuInternalService
            .onNavigateHome()
            .pipe(filter((data) => this.compareTag(data.tag)), takeUntil(this.destroy$))
            .subscribe(() => this.navigateHome());
        this.menuInternalService
            .onGetSelectedItem()
            .pipe(filter((data) => this.compareTag(data.tag)), takeUntil(this.destroy$))
            .subscribe((data) => {
            data.listener.next({ tag: this.tag, item: this.getSelectedItem(this.items) });
        });
        this.menuInternalService
            .onCollapseAll()
            .pipe(filter((data) => this.compareTag(data.tag)), takeUntil(this.destroy$))
            .subscribe(() => this.collapseAll());
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => {
            this.menuInternalService.selectFromUrl(this.items, this.tag, this.autoCollapse);
        });
    }
    ngAfterViewInit() {
        setTimeout(() => this.menuInternalService.selectFromUrl(this.items, this.tag, this.autoCollapse));
    }
    onAddItem(data) {
        this.items.push(...data.items);
        this.menuInternalService.prepareItems(this.items);
        this.menuInternalService.selectFromUrl(this.items, this.tag, this.autoCollapse);
    }
    onHoverItem(item) {
        this.menuInternalService.itemHover(item, this.tag);
    }
    onToggleSubMenu(item) {
        if (this.autoCollapse) {
            this.menuInternalService.collapseAll(this.items, this.tag, item);
        }
        item.expanded = !item.expanded;
        this.menuInternalService.submenuToggle(item, this.tag);
    }
    // TODO: is not fired on page reload
    onSelectItem(item) {
        this.menuInternalService.selectItem(item, this.items, this.autoCollapse, this.tag);
    }
    onItemClick(item) {
        this.menuInternalService.itemClick(item, this.tag);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    navigateHome() {
        const homeItem = this.getHomeItem(this.items);
        if (homeItem) {
            if (homeItem.link) {
                const extras = {
                    queryParams: homeItem.queryParams,
                    queryParamsHandling: homeItem.queryParamsHandling,
                    fragment: homeItem.fragment,
                    preserveFragment: homeItem.preserveFragment,
                };
                this.router.navigate([homeItem.link], extras);
            }
            if (homeItem.url && isPlatformBrowser(this.platformId)) {
                this.window.location.href = homeItem.url;
            }
        }
    }
    collapseAll() {
        this.menuInternalService.collapseAll(this.items, this.tag);
    }
    getHomeItem(items) {
        for (const item of items) {
            if (item.home) {
                return item;
            }
            const homeItem = item.children && this.getHomeItem(item.children);
            if (homeItem) {
                return homeItem;
            }
        }
        return undefined;
    }
    compareTag(tag) {
        return !tag || tag === this.tag;
    }
    getSelectedItem(items) {
        let selected = null;
        items.forEach((item) => {
            if (item.selected) {
                selected = item;
            }
            if (item.selected && item.children && item.children.length > 0) {
                selected = this.getSelectedItem(item.children);
            }
        });
        return selected;
    }
}
NbMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuComponent, deps: [{ token: NB_WINDOW }, { token: PLATFORM_ID }, { token: i1.NbMenuInternalService }, { token: i6.Router }], target: i0.ɵɵFactoryTarget.Component });
NbMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbMenuComponent, selector: "nb-menu", inputs: { tag: "tag", items: "items", autoCollapse: "autoCollapse" }, ngImport: i0, template: `
    <ul class="menu-items">
      <ng-container *ngFor="let item of items">
        <li nbMenuItem *ngIf="!item.hidden"
            [menuItem]="item"
            [badge]="item.badge"
            [class.menu-group]="item.group"
            (hoverItem)="onHoverItem($event)"
            (toggleSubMenu)="onToggleSubMenu($event)"
            (selectItem)="onSelectItem($event)"
            (itemClick)="onItemClick($event)"
            class="menu-item">
        </li>
      </ng-container>
    </ul>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host ::ng-deep{display:block}:host ::ng-deep .menu-items,:host ::ng-deep .menu-item>.menu-items{list-style-type:none;overflow:hidden}:host ::ng-deep .menu-item a{display:flex;text-decoration:none;align-items:center}:host ::ng-deep .menu-item a .menu-title{flex:1 0 auto}[dir=rtl] :host ::ng-deep .menu-item a .menu-title{text-align:right}:host ::ng-deep .menu-item nb-badge{position:static}:host ::ng-deep .menu-group span{display:flex}\n"], components: [{ type: NbMenuItemComponent, selector: "[nbMenuItem]", inputs: ["menuItem", "badge"], outputs: ["hoverItem", "toggleSubMenu", "selectItem", "itemClick"] }], directives: [{ type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-menu', template: `
    <ul class="menu-items">
      <ng-container *ngFor="let item of items">
        <li nbMenuItem *ngIf="!item.hidden"
            [menuItem]="item"
            [badge]="item.badge"
            [class.menu-group]="item.group"
            (hoverItem)="onHoverItem($event)"
            (toggleSubMenu)="onToggleSubMenu($event)"
            (selectItem)="onSelectItem($event)"
            (itemClick)="onItemClick($event)"
            class="menu-item">
        </li>
      </ng-container>
    </ul>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host ::ng-deep{display:block}:host ::ng-deep .menu-items,:host ::ng-deep .menu-item>.menu-items{list-style-type:none;overflow:hidden}:host ::ng-deep .menu-item a{display:flex;text-decoration:none;align-items:center}:host ::ng-deep .menu-item a .menu-title{flex:1 0 auto}[dir=rtl] :host ::ng-deep .menu-item a .menu-title{text-align:right}:host ::ng-deep .menu-item nb-badge{position:static}:host ::ng-deep .menu-group span{display:flex}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_WINDOW]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i1.NbMenuInternalService }, { type: i6.Router }]; }, propDecorators: { tag: [{
                type: Input
            }], items: [{
                type: Input
            }], autoCollapse: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9tZW51L21lbnUtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFJWixNQUFNLEVBRU4sV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBVSxhQUFhLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFDMUUsT0FBTyxFQUFtQixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFrQixNQUFNLFlBQVksQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7QUFHakYsTUFBTSxDQUFOLElBQVksY0FHWDtBQUhELFdBQVksY0FBYztJQUN4Qix1Q0FBcUIsQ0FBQTtJQUNyQix5Q0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBSFcsY0FBYyxLQUFkLGNBQWMsUUFHekI7QUFhRCxNQUFNLE9BQU8sbUJBQW1CO0lBWTlCLFlBQXNCLFdBQTBCLEVBQzFCLGdCQUEwQztRQUQxQyxnQkFBVyxHQUFYLFdB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SUFBSSxRQUFRLEVBQUU7Z0JBQ1osT0FBTyxRQUFRLENBQUM7YUFDakI7U0FDRjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFUyxVQUFVLENBQUMsR0FBVztRQUM5QixPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xDLENBQUM7SUFFUyxlQUFlLENBQUMsS0FBbUI7UUFDM0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ2pCO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUM5RCxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OzRHQWpMVSxlQUFlLGtCQWlDTixTQUFTLGFBQ1QsV0FBVztnR0FsQ3BCLGVBQWUscUhBakJoQjs7Ozs7Ozs7Ozs7Ozs7O0dBZVQsNG9CQXRMVSxtQkFBbUI7MkZBd0xuQixlQUFlO2tCQXBCM0IsU0FBUzsrQkFDRSxTQUFTLFlBRVQ7Ozs7Ozs7Ozs7Ozs7OztHQWVUOzswQkFtQ1ksTUFBTTsyQkFBQyxTQUFTOzswQkFDaEIsTUFBTTsyQkFBQyxXQUFXO3FHQTFCdEIsR0FBRztzQkFBWCxLQUFLO2dCQU1HLEtBQUs7c0JBQWIsS0FBSztnQkFRRixZQUFZO3NCQURmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSW5qZWN0LFxuICBEb0NoZWNrLFxuICBQTEFURk9STV9JRCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmJNZW51SW50ZXJuYWxTZXJ2aWNlLCBOYk1lbnVJdGVtLCBOYk1lbnVCYWcsIE5iTWVudVNlcnZpY2UsIE5iTWVudUJhZGdlQ29uZmlnIH0gZnJvbSAnLi9tZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5LCBOYkJvb2xlYW5JbnB1dCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTkJfV0lORE9XIH0gZnJvbSAnLi4vLi4vdGhlbWUub3B0aW9ucyc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RpcmVjdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGVudW0gTmJUb2dnbGVTdGF0ZXMge1xuICBFeHBhbmRlZCA9ICdleHBhbmRlZCcsXG4gIENvbGxhcHNlZCA9ICdjb2xsYXBzZWQnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmJNZW51SXRlbV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3RvZ2dsZScsIFtcbiAgICAgIHN0YXRlKE5iVG9nZ2xlU3RhdGVzLkNvbGxhcHNlZCwgc3R5bGUoeyBoZWlnaHQ6ICcwJywgbWFyZ2luOiAnMCcgfSkpLFxuICAgICAgc3RhdGUoTmJUb2dnbGVTdGF0ZXMuRXhwYW5kZWQsIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSkpLFxuICAgICAgdHJhbnNpdGlvbihgJHtOYlRvZ2dsZVN0YXRlcy5Db2xsYXBzZWR9IDw9PiAke05iVG9nZ2xlU3RhdGVzLkV4cGFuZGVkfWAsIGFuaW1hdGUoMzAwKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iTWVudUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBtZW51SXRlbSA9IDxOYk1lbnVJdGVtPm51bGw7XG4gIEBJbnB1dCgpIGJhZGdlOiBOYk1lbnVCYWRnZUNvbmZpZztcblxuICBAT3V0cHV0KCkgaG92ZXJJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB0b2dnbGVTdWJNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBpdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICB0b2dnbGVTdGF0ZTogTmJUb2dnbGVTdGF0ZXM7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1lbnVTZXJ2aWNlOiBOYk1lbnVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgZGlyZWN0aW9uU2VydmljZTogTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlKSB7fVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICB0aGlzLnRvZ2dsZVN0YXRlID0gdGhpcy5tZW51SXRlbS5leHBhbmRlZCA/IE5iVG9nZ2xlU3RhdGVzLkV4cGFuZGVkIDogTmJUb2dnbGVTdGF0ZXMuQ29sbGFwc2VkO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMubWVudVNlcnZpY2Uub25TdWJtZW51VG9nZ2xlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgaXRlbSB9KSA9PiBpdGVtID09PSB0aGlzLm1lbnVJdGVtKSxcbiAgICAgICAgbWFwKCh7IGl0ZW0gfTogTmJNZW51QmFnKSA9PiBpdGVtLmV4cGFuZGVkKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShpc0V4cGFuZGVkID0+IHRoaXMudG9nZ2xlU3RhdGUgPSBpc0V4cGFuZGVkID8gTmJUb2dnbGVTdGF0ZXMuRXhwYW5kZWQgOiBOYlRvZ2dsZVN0YXRlcy5Db2xsYXBzZWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25Ub2dnbGVTdWJNZW51KGl0ZW06IE5iTWVudUl0ZW0pIHtcbiAgICB0aGlzLnRvZ2dsZVN1Yk1lbnUuZW1pdChpdGVtKTtcbiAgfVxuXG4gIG9uSG92ZXJJdGVtKGl0ZW06IE5iTWVudUl0ZW0pIHtcbiAgICB0aGlzLmhvdmVySXRlbS5lbWl0KGl0ZW0pO1xuICB9XG5cbiAgb25TZWxlY3RJdGVtKGl0ZW06IE5iTWVudUl0ZW0pIHtcbiAgICB0aGlzLnNlbGVjdEl0ZW0uZW1pdChpdGVtKTtcbiAgfVxuXG4gIG9uSXRlbUNsaWNrKGl0ZW06IE5iTWVudUl0ZW0pIHtcbiAgICB0aGlzLml0ZW1DbGljay5lbWl0KGl0ZW0pO1xuICB9XG5cbiAgZ2V0RXhwYW5kU3RhdGVJY29uKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMubWVudUl0ZW0uZXhwYW5kZWQpIHtcbiAgICAgIHJldHVybiAnY2hldnJvbi1kb3duLW91dGxpbmUnO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvblNlcnZpY2UuaXNMdHIoKVxuICAgICAgPyAnY2hldnJvbi1sZWZ0LW91dGxpbmUnXG4gICAgICA6ICdjaGV2cm9uLXJpZ2h0LW91dGxpbmUnO1xuICB9XG59XG5cbi8qKlxuICogVmVydGljYWwgbWVudSBjb21wb25lbnQuXG4gKlxuICogQWNjZXB0cyBhIGxpc3Qgb2YgbWVudSBpdGVtcyBhbmQgcmVuZGVycyB0aGVtIGFjY29yZGluZ2x5LiBTdXBwb3J0cyBtdWx0aS1sZXZlbCBtZW51cy5cbiAqXG4gKiBCYXNpYyBleGFtcGxlXG4gKiBAc3RhY2tlZC1leGFtcGxlKFNob3djYXNlLCBtZW51L21lbnUtc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqIGBgYHRzXG4gKiAvLyAuLi5cbiAqIGl0ZW1zOiBOYk1lbnVJdGVtW10gPSBbXG4gKiAge1xuICogICAgdGl0bGU6IGhvbWUsXG4gKiAgICBsaW5rOiAnLydcbiAqICB9LFxuICogIHtcbiAqICAgIHRpdGxlOiBkYXNoYm9hcmQsXG4gKiAgICBsaW5rOiAnZGFzaGJvYXJkJ1xuICogIH1cbiAqIF07XG4gKiAvLyAuLi5cbiAqIDxuYi1tZW51IFtpdGVtc109XCJpdGVtc1wiPjwvbmItbWVudT5cbiAqIGBgYFxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJNZW51TW9kdWxlLmZvclJvb3QoKWAgdG8geW91ciBhcHAgbW9kdWxlLlxuICogYGBgdHNcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgICBOYk1lbnVNb2R1bGUuZm9yUm9vdCgpLFxuICogICBdLFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4gKiBgYGBcbiAqIGFuZCBgTmJNZW51TW9kdWxlYCB0byB5b3VyIGZlYXR1cmUgbW9kdWxlIHdoZXJlIHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIHNob3duOlxuICogYGBgdHNcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgICBOYk1lbnVNb2R1bGUsXG4gKiAgIF0sXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUgeyB9XG4gKiBgYGBcbiAqICMjIyBVc2FnZVxuICpcbiAqIFR3by1sZXZlbCBtZW51IGV4YW1wbGVcbiAqIEBzdGFja2VkLWV4YW1wbGUoVHdvIExldmVscywgbWVudS9tZW51LWNoaWxkcmVuLmNvbXBvbmVudClcbiAqXG4gKlxuICogQXV0b2NvbGxhcHNlIG1lbnUgZXhhbXBsZVxuICogQHN0YWNrZWQtZXhhbXBsZShBdXRvY29sbGFwc2UgTWVudSwgbWVudS9tZW51LWF1dG9jb2xsYXBzZS5jb21wb25lbnQpXG4gKlxuICogTWVudSBiYWRnZVxuICogQHN0YWNrZWQtZXhhbXBsZShNZW51IGl0ZW0gYmFkZ2UsIG1lbnUvbWVudS1iYWRnZS5jb21wb25lbnQpXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIG1lbnUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIG1lbnUtdGV4dC1jb2xvcjpcbiAqIG1lbnUtdGV4dC1mb250LWZhbWlseTpcbiAqIG1lbnUtdGV4dC1mb250LXNpemU6XG4gKiBtZW51LXRleHQtZm9udC13ZWlnaHQ6XG4gKiBtZW51LXRleHQtbGluZS1oZWlnaHQ6XG4gKiBtZW51LWdyb3VwLXRleHQtY29sb3I6XG4gKiBtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czpcbiAqIG1lbnUtaXRlbS1wYWRkaW5nOlxuICogbWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBtZW51LWl0ZW0taG92ZXItY3Vyc29yOlxuICogbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6XG4gKiBtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcjpcbiAqIG1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIG1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcjpcbiAqIG1lbnUtaXRlbS1pY29uLWFjdGl2ZS1jb2xvcjpcbiAqIG1lbnUtaXRlbS1pY29uLWNvbG9yOlxuICogbWVudS1pdGVtLWljb24tbWFyZ2luOlxuICogbWVudS1pdGVtLWljb24td2lkdGg6XG4gKiBtZW51LWl0ZW0tZGl2aWRlci1jb2xvcjpcbiAqIG1lbnUtaXRlbS1kaXZpZGVyLXN0eWxlOlxuICogbWVudS1pdGVtLWRpdmlkZXItd2lkdGg6XG4gKiBtZW51LXN1Ym1lbnUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIG1lbnUtc3VibWVudS10ZXh0LWNvbG9yOlxuICogbWVudS1zdWJtZW51LW1hcmdpbjpcbiAqIG1lbnUtc3VibWVudS1wYWRkaW5nOlxuICogbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLWNvbG9yOlxuICogbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXN0eWxlOlxuICogbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXdpZHRoOlxuICogbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czpcbiAqIG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmc6XG4gKiBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogbWVudS1zdWJtZW51LWl0ZW0taG92ZXItYm9yZGVyLWNvbG9yOlxuICogbWVudS1zdWJtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcjpcbiAqIG1lbnUtc3VibWVudS1pdGVtLWljb24taG92ZXItY29sb3I6XG4gKiBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ib3JkZXItY29sb3I6XG4gKiBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcjpcbiAqIG1lbnUtc3VibWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yOlxuICogbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLWJhY2tncm91bmQtY29sb3I6XG4gKiBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtaG92ZXItYm9yZGVyLWNvbG9yOlxuICogbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLXRleHQtY29sb3I6XG4gKiBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWFjdGl2ZS1ob3Zlci1jb2xvcjpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItbWVudScsXG4gIHN0eWxlVXJsczogWycuL21lbnUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dWwgY2xhc3M9XCJtZW51LWl0ZW1zXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG4gICAgICAgIDxsaSBuYk1lbnVJdGVtICpuZ0lmPVwiIWl0ZW0uaGlkZGVuXCJcbiAgICAgICAgICAgIFttZW51SXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIFtiYWRnZV09XCJpdGVtLmJhZGdlXCJcbiAgICAgICAgICAgIFtjbGFzcy5tZW51LWdyb3VwXT1cIml0ZW0uZ3JvdXBcIlxuICAgICAgICAgICAgKGhvdmVySXRlbSk9XCJvbkhvdmVySXRlbSgkZXZlbnQpXCJcbiAgICAgICAgICAgICh0b2dnbGVTdWJNZW51KT1cIm9uVG9nZ2xlU3ViTWVudSgkZXZlbnQpXCJcbiAgICAgICAgICAgIChzZWxlY3RJdGVtKT1cIm9uU2VsZWN0SXRlbSgkZXZlbnQpXCJcbiAgICAgICAgICAgIChpdGVtQ2xpY2spPVwib25JdGVtQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgICA8L2xpPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC91bD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBUYWdzIGEgbWVudSB3aXRoIHNvbWUgSUQsIGNhbiBiZSBsYXRlciB1c2VkIGluIHRoZSBtZW51IHNlcnZpY2VcbiAgICogdG8gZGV0ZXJtaW5lIHdoaWNoIG1lbnUgdHJpZ2dlcmVkIHRoZSBhY3Rpb24sIGlmIG11bHRpcGxlIG1lbnVzIGV4aXN0IG9uIHRoZSBwYWdlLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgdGFnOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbWVudSBpdGVtcy5cbiAgICogQHR5cGUgTGlzdDxOYk1lbnVJdGVtPiB8IExpc3Q8YW55PiB8IGFueVxuICAgKi9cbiAgQElucHV0KCkgaXRlbXM6IE5iTWVudUl0ZW1bXTtcblxuICAvKipcbiAgICogQ29sbGFwc2UgYWxsIG9wZW5lZCBzdWJtZW51cyBvbiB0aGUgdG9nZ2xlIGV2ZW50XG4gICAqIERlZmF1bHQgdmFsdWUgaXMgXCJmYWxzZVwiXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBhdXRvQ29sbGFwc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db2xsYXBzZTtcbiAgfVxuICBzZXQgYXV0b0NvbGxhcHNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYXV0b0NvbGxhcHNlID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX2F1dG9Db2xsYXBzZTogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b0NvbGxhcHNlOiBOYkJvb2xlYW5JbnB1dDtcblxuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTkJfV0lORE9XKSBwcm90ZWN0ZWQgd2luZG93LFxuICAgICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIG1lbnVJbnRlcm5hbFNlcnZpY2U6IE5iTWVudUludGVybmFsU2VydmljZSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lbnVJbnRlcm5hbFNlcnZpY2UucHJlcGFyZUl0ZW1zKHRoaXMuaXRlbXMpO1xuXG4gICAgdGhpcy5tZW51SW50ZXJuYWxTZXJ2aWNlXG4gICAgICAub25BZGRJdGVtKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGRhdGE6IHsgdGFnOiBzdHJpbmc7IGl0ZW1zOiBOYk1lbnVJdGVtW10gfSkgPT4gdGhpcy5jb21wYXJlVGFnKGRhdGEudGFnKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLm9uQWRkSXRlbShkYXRhKSk7XG5cbiAgICB0aGlzLm1lbnVJbnRlcm5hbFNlcnZpY2VcbiAgICAgIC5vbk5hdmlnYXRlSG9tZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChkYXRhOiB7IHRhZzogc3RyaW5nIH0pID0+IHRoaXMuY29tcGFyZVRhZyhkYXRhLnRhZykpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMubmF2aWdhdGVIb21lKCkpO1xuXG4gICAgdGhpcy5tZW51SW50ZXJuYWxTZXJ2aWNlXG4gICAgICAub25HZXRTZWxlY3RlZEl0ZW0oKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZGF0YTogeyB0YWc6IHN0cmluZzsgbGlzdGVuZXI6IEJlaGF2aW9yU3ViamVjdDxOYk1lbnVCYWc+IH0pID0+IHRoaXMuY29tcGFyZVRhZyhkYXRhLnRhZykpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChkYXRhOiB7IHRhZzogc3RyaW5nOyBsaXN0ZW5lcjogQmVoYXZpb3JTdWJqZWN0PE5iTWVudUJhZz4gfSkgPT4ge1xuICAgICAgICBkYXRhLmxpc3RlbmVyLm5leHQoeyB0YWc6IHRoaXMudGFnLCBpdGVtOiB0aGlzLmdldFNlbGVjdGVkSXRlbSh0aGlzLml0ZW1zKSB9KTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5tZW51SW50ZXJuYWxTZXJ2aWNlXG4gICAgICAub25Db2xsYXBzZUFsbCgpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChkYXRhOiB7IHRhZzogc3RyaW5nIH0pID0+IHRoaXMuY29tcGFyZVRhZyhkYXRhLnRhZykpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY29sbGFwc2VBbGwoKSk7XG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubWVudUludGVybmFsU2VydmljZS5zZWxlY3RGcm9tVXJsKHRoaXMuaXRlbXMsIHRoaXMudGFnLCB0aGlzLmF1dG9Db2xsYXBzZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubWVudUludGVybmFsU2VydmljZS5zZWxlY3RGcm9tVXJsKHRoaXMuaXRlbXMsIHRoaXMudGFnLCB0aGlzLmF1dG9Db2xsYXBzZSkpO1xuICB9XG5cbiAgb25BZGRJdGVtKGRhdGE6IHsgdGFnOiBzdHJpbmc7IGl0ZW1zOiBOYk1lbnVJdGVtW10gfSkge1xuICAgIHRoaXMuaXRlbXMucHVzaCguLi5kYXRhLml0ZW1zKTtcblxuICAgIHRoaXMubWVudUludGVybmFsU2VydmljZS5wcmVwYXJlSXRlbXModGhpcy5pdGVtcyk7XG4gICAgdGhpcy5tZW51SW50ZXJuYWxTZXJ2aWNlLnNlbGVjdEZyb21VcmwodGhpcy5pdGVtcywgdGhpcy50YWcsIHRoaXMuYXV0b0NvbGxhcHNlKTtcbiAgfVxuXG4gIG9uSG92ZXJJdGVtKGl0ZW06IE5iTWVudUl0ZW0pIHtcbiAgICB0aGlzLm1lbnVJbnRlcm5hbFNlcnZpY2UuaXRlbUhvdmVyKGl0ZW0sIHRoaXMudGFnKTtcbiAgfVxuXG4gIG9uVG9nZ2xlU3ViTWVudShpdGVtOiBOYk1lbnVJdGVtKSB7XG4gICAgaWYgKHRoaXMuYXV0b0NvbGxhcHNlKSB7XG4gICAgICB0aGlzLm1lbnVJbnRlcm5hbFNlcnZpY2UuY29sbGFwc2VBbGwodGhpcy5pdGVtcywgdGhpcy50YWcsIGl0ZW0pO1xuICAgIH1cbiAgICBpdGVtLmV4cGFuZGVkID0gIWl0ZW0uZXhwYW5kZWQ7XG4gICAgdGhpcy5tZW51SW50ZXJuYWxTZXJ2aWNlLnN1Ym1lbnVUb2dnbGUoaXRlbSwgdGhpcy50YWcpO1xuICB9XG5cbiAgLy8gVE9ETzogaXMgbm90IGZpcmVkIG9uIHBhZ2UgcmVsb2FkXG4gIG9uU2VsZWN0SXRlbShpdGVtOiBOYk1lbnVJdGVtKSB7XG4gICAgdGhpcy5tZW51SW50ZXJuYWxTZXJ2aWNlLnNlbGVjdEl0ZW0oaXRlbSwgdGhpcy5pdGVtcywgdGhpcy5hdXRvQ29sbGFwc2UsIHRoaXMudGFnKTtcbiAgfVxuXG4gIG9uSXRlbUNsaWNrKGl0ZW06IE5iTWVudUl0ZW0pIHtcbiAgICB0aGlzLm1lbnVJbnRlcm5hbFNlcnZpY2UuaXRlbUNsaWNrKGl0ZW0sIHRoaXMudGFnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBuYXZpZ2F0ZUhvbWUoKSB7XG4gICAgY29uc3QgaG9tZUl0ZW0gPSB0aGlzLmdldEhvbWVJdGVtKHRoaXMuaXRlbXMpO1xuXG4gICAgaWYgKGhvbWVJdGVtKSB7XG4gICAgICBpZiAoaG9tZUl0ZW0ubGluaykge1xuICAgICAgICBjb25zdCBleHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICAgICAgcXVlcnlQYXJhbXM6IGhvbWVJdGVtLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6IGhvbWVJdGVtLnF1ZXJ5UGFyYW1zSGFuZGxpbmcsXG4gICAgICAgICAgZnJhZ21lbnQ6IGhvbWVJdGVtLmZyYWdtZW50LFxuICAgICAgICAgIHByZXNlcnZlRnJhZ21lbnQ6IGhvbWVJdGVtLnByZXNlcnZlRnJhZ21lbnQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtob21lSXRlbS5saW5rXSwgZXh0cmFzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhvbWVJdGVtLnVybCAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgIHRoaXMud2luZG93LmxvY2F0aW9uLmhyZWYgPSBob21lSXRlbS51cmw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGNvbGxhcHNlQWxsKCkge1xuICAgIHRoaXMubWVudUludGVybmFsU2VydmljZS5jb2xsYXBzZUFsbCh0aGlzLml0ZW1zLCB0aGlzLnRhZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0SG9tZUl0ZW0oaXRlbXM6IE5iTWVudUl0ZW1bXSk6IE5iTWVudUl0ZW0ge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgaWYgKGl0ZW0uaG9tZSkge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaG9tZUl0ZW0gPSBpdGVtLmNoaWxkcmVuICYmIHRoaXMuZ2V0SG9tZUl0ZW0oaXRlbS5jaGlsZHJlbik7XG4gICAgICBpZiAoaG9tZUl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGhvbWVJdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29tcGFyZVRhZyh0YWc6IHN0cmluZykge1xuICAgIHJldHVybiAhdGFnIHx8IHRhZyA9PT0gdGhpcy50YWc7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2VsZWN0ZWRJdGVtKGl0ZW1zOiBOYk1lbnVJdGVtW10pOiBOYk1lbnVJdGVtIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBudWxsO1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW06IE5iTWVudUl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgIHNlbGVjdGVkID0gaXRlbTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLnNlbGVjdGVkICYmIGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNlbGVjdGVkID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW0oaXRlbS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG59XG4iLCI8c3BhbiAqbmdJZj1cIm1lbnVJdGVtLmdyb3VwXCI+XG4gIDxuYi1pY29uIGNsYXNzPVwibWVudS1pY29uXCIgW2NvbmZpZ109XCJtZW51SXRlbS5pY29uXCIgKm5nSWY9XCJtZW51SXRlbS5pY29uXCI+PC9uYi1pY29uPlxuICB7eyBtZW51SXRlbS50aXRsZSB9fVxuPC9zcGFuPlxuPGEgKm5nSWY9XCJtZW51SXRlbS5saW5rICYmICFtZW51SXRlbS51cmwgJiYgIW1lbnVJdGVtLmNoaWxkcmVuICYmICFtZW51SXRlbS5ncm91cFwiXG4gICBbcm91dGVyTGlua109XCJtZW51SXRlbS5saW5rXCJcbiAgIFtxdWVyeVBhcmFtc109XCJtZW51SXRlbS5xdWVyeVBhcmFtc1wiXG4gICBbZnJhZ21lbnRdPVwibWVudUl0ZW0uZnJhZ21lbnRcIlxuICAgW3F1ZXJ5UGFyYW1zSGFuZGxpbmddPVwibWVudUl0ZW0ucXVlcnlQYXJhbXNIYW5kbGluZ1wiXG4gICBbcHJlc2VydmVGcmFnbWVudF09XCJtZW51SXRlbS5wcmVzZXJ2ZUZyYWdtZW50XCJcbiAgIFtza2lwTG9jYXRpb25DaGFuZ2VdPVwibWVudUl0ZW0uc2tpcExvY2F0aW9uQ2hhbmdlXCJcbiAgIFthdHRyLnRhcmdldF09XCJtZW51SXRlbS50YXJnZXRcIlxuICAgW2F0dHIudGl0bGVdPVwibWVudUl0ZW0udGl0bGVcIlxuICAgW2NsYXNzLmFjdGl2ZV09XCJtZW51SXRlbS5zZWxlY3RlZFwiXG4gICAobW91c2VlbnRlcik9XCJvbkhvdmVySXRlbShtZW51SXRlbSlcIlxuICAgKGNsaWNrKT1cIm9uSXRlbUNsaWNrKG1lbnVJdGVtKTtcIj5cbiAgPG5iLWljb24gY2xhc3M9XCJtZW51LWljb25cIiBbY29uZmlnXT1cIm1lbnVJdGVtLmljb25cIiAqbmdJZj1cIm1lbnVJdGVtLmljb25cIj48L25iLWljb24+XG4gIDxzcGFuIGNsYXNzPVwibWVudS10aXRsZVwiPnt7IG1lbnVJdGVtLnRpdGxlIH19PC9zcGFuPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiYmFkZ2VcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJiYWRnZVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG48L2E+XG48YSAqbmdJZj1cIm1lbnVJdGVtLnVybCAmJiAhbWVudUl0ZW0uY2hpbGRyZW4gJiYgIW1lbnVJdGVtLmxpbmsgJiYgIW1lbnVJdGVtLmdyb3VwXCJcbiAgIFthdHRyLmhyZWZdPVwibWVudUl0ZW0udXJsXCJcbiAgIFthdHRyLnRhcmdldF09XCJtZW51SXRlbS50YXJnZXRcIlxuICAgW2F0dHIudGl0bGVdPVwibWVudUl0ZW0udGl0bGVcIlxuICAgW2NsYXNzLmFjdGl2ZV09XCJtZW51SXRlbS5zZWxlY3RlZFwiXG4gICAobW91c2VlbnRlcik9XCJvbkhvdmVySXRlbShtZW51SXRlbSlcIlxuICAgKGNsaWNrKT1cIm9uU2VsZWN0SXRlbShtZW51SXRlbSlcIj5cbiAgPG5iLWljb24gY2xhc3M9XCJtZW51LWljb25cIiBbY29uZmlnXT1cIm1lbnVJdGVtLmljb25cIiAqbmdJZj1cIm1lbnVJdGVtLmljb25cIj48L25iLWljb24+XG4gIDxzcGFuIGNsYXNzPVwibWVudS10aXRsZVwiPnt7IG1lbnVJdGVtLnRpdGxlIH19PC9zcGFuPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiYmFkZ2VcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJiYWRnZVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG48L2E+XG48YSAqbmdJZj1cIiFtZW51SXRlbS5jaGlsZHJlbiAmJiAhbWVudUl0ZW0ubGluayAmJiAhbWVudUl0ZW0udXJsICYmICFtZW51SXRlbS5ncm91cFwiXG4gICBbYXR0ci50YXJnZXRdPVwibWVudUl0ZW0udGFyZ2V0XCJcbiAgIFthdHRyLnRpdGxlXT1cIm1lbnVJdGVtLnRpdGxlXCJcbiAgIFtjbGFzcy5hY3RpdmVdPVwibWVudUl0ZW0uc2VsZWN0ZWRcIlxuICAgKG1vdXNlZW50ZXIpPVwib25Ib3Zlckl0ZW0obWVudUl0ZW0pXCJcbiAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTsgb25JdGVtQ2xpY2sobWVudUl0ZW0pO1wiPlxuICA8bmItaWNvbiBjbGFzcz1cIm1lbnUtaWNvblwiIFtjb25maWddPVwibWVudUl0ZW0uaWNvblwiICpuZ0lmPVwibWVudUl0ZW0uaWNvblwiPjwvbmItaWNvbj5cbiAgPHNwYW4gY2xhc3M9XCJtZW51LXRpdGxlXCI+e3sgbWVudUl0ZW0udGl0bGUgfX08L3NwYW4+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJiYWRnZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJhZGdlVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbjwvYT5cbjxhICpuZ0lmPVwibWVudUl0ZW0uY2hpbGRyZW5cIlxuICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBvblRvZ2dsZVN1Yk1lbnUobWVudUl0ZW0pO1wiXG4gICBbYXR0ci50YXJnZXRdPVwibWVudUl0ZW0udGFyZ2V0XCJcbiAgIFthdHRyLnRpdGxlXT1cIm1lbnVJdGVtLnRpdGxlXCJcbiAgIFtjbGFzcy5hY3RpdmVdPVwibWVudUl0ZW0uc2VsZWN0ZWRcIlxuICAgKG1vdXNlZW50ZXIpPVwib25Ib3Zlckl0ZW0obWVudUl0ZW0pXCJcbiAgIGhyZWY9XCIjXCI+XG4gIDxuYi1pY29uIGNsYXNzPVwibWVudS1pY29uXCIgW2NvbmZpZ109XCJtZW51SXRlbS5pY29uXCIgKm5nSWY9XCJtZW51SXRlbS5pY29uXCI+PC9uYi1pY29uPlxuICA8c3BhbiBjbGFzcz1cIm1lbnUtdGl0bGVcIj57eyBtZW51SXRlbS50aXRsZSB9fTwvc3Bhbj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJhZGdlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYmFkZ2VUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICA8bmItaWNvbiBjbGFzcz1cImV4cGFuZC1zdGF0ZVwiIFtpY29uXT1cImdldEV4cGFuZFN0YXRlSWNvbigpXCIgcGFjaz1cIm5lYnVsYXItZXNzZW50aWFsc1wiPjwvbmItaWNvbj5cbjwvYT5cbjx1bCAqbmdJZj1cIm1lbnVJdGVtLmNoaWxkcmVuXCJcbiAgICBbY2xhc3MuY29sbGFwc2VkXT1cIiEobWVudUl0ZW0uY2hpbGRyZW4gJiYgbWVudUl0ZW0uZXhwYW5kZWQpXCJcbiAgICBbY2xhc3MuZXhwYW5kZWRdPVwibWVudUl0ZW0uZXhwYW5kZWRcIlxuICAgIFtAdG9nZ2xlXT1cInRvZ2dsZVN0YXRlXCJcbiAgICBjbGFzcz1cIm1lbnUtaXRlbXNcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBtZW51SXRlbS5jaGlsZHJlblwiPlxuICAgIDxsaSBuYk1lbnVJdGVtICpuZ0lmPVwiIWl0ZW0uaGlkZGVuXCJcbiAgICAgICAgW21lbnVJdGVtXT1cIml0ZW1cIlxuICAgICAgICBbYmFkZ2VdPVwiaXRlbS5iYWRnZVwiXG4gICAgICAgIFtjbGFzcy5tZW51LWdyb3VwXT1cIml0ZW0uZ3JvdXBcIlxuICAgICAgICAoaG92ZXJJdGVtKT1cIm9uSG92ZXJJdGVtKCRldmVudClcIlxuICAgICAgICAodG9nZ2xlU3ViTWVudSk9XCJvblRvZ2dsZVN1Yk1lbnUoJGV2ZW50KVwiXG4gICAgICAgIChzZWxlY3RJdGVtKT1cIm9uU2VsZWN0SXRlbSgkZXZlbnQpXCJcbiAgICAgICAgKGl0ZW1DbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQpXCJcbiAgICAgICAgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICA8L2xpPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvdWw+XG5cbjxuZy10ZW1wbGF0ZSAjYmFkZ2VUZW1wbGF0ZT5cbiAgPG5iLWJhZGdlIFt0ZXh0XT1cImJhZGdlLnRleHRcIiBbZG90TW9kZV09XCJiYWRnZS5kb3RNb2RlXCIgW3N0YXR1c109XCJiYWRnZS5zdGF0dXNcIj5cbiAgPC9uYi1iYWRnZT5cbjwvbmctdGVtcGxhdGU+XG4iXX0=