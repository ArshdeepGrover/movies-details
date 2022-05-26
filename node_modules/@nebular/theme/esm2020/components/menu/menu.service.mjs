/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import { isFragmentContain, isFragmentEqual, isUrlPathContain, isUrlPathEqual } from './url-matching-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const itemClick$ = new Subject();
const addItems$ = new ReplaySubject(1);
const navigateHome$ = new ReplaySubject(1);
const getSelectedItem$ = new ReplaySubject(1);
const itemSelect$ = new ReplaySubject(1);
const itemHover$ = new ReplaySubject(1);
const submenuToggle$ = new ReplaySubject(1);
const collapseAll$ = new ReplaySubject(1);
// TODO: check if we need both URL and LINK
/**
 *
 *
 * Menu Item options example
 * @stacked-example(Menu Link Parameters, menu/menu-link-params.component)
 *
 *
 */
export class NbMenuItem {
    constructor() {
        /**
         * Item is selected when partly or fully equal to the current url
         * @type {string}
         */
        this.pathMatch = 'full';
    }
    /**
     * @returns item parents in top-down order
     */
    static getParents(item) {
        const parents = [];
        let parent = item.parent;
        while (parent) {
            parents.unshift(parent);
            parent = parent.parent;
        }
        return parents;
    }
    static isParent(item, possibleChild) {
        return possibleChild.parent
            ? possibleChild.parent === item || this.isParent(item, possibleChild.parent)
            : false;
    }
}
// TODO: map select events to router change events
// TODO: review the interface
/**
 *
 *
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 * @stacked-example(Menu Service, menu/menu-service.component)
 *
 *
 */
export class NbMenuService {
    /**
     * Add items to the end of the menu items list
     * @param {List<NbMenuItem>} items
     * @param {string} tag
     */
    addItems(items, tag) {
        addItems$.next({ tag, items });
    }
    /**
     * Collapses all menu items
     * @param {string} tag
     */
    collapseAll(tag) {
        collapseAll$.next({ tag });
    }
    /**
     * Navigate to the home menu item
     * @param {string} tag
     */
    navigateHome(tag) {
        navigateHome$.next({ tag });
    }
    /**
     * Returns currently selected item. Won't subscribe to the future events.
     * @param {string} tag
     * @returns {Observable<{tag: string; item: NbMenuItem}>}
     */
    getSelectedItem(tag) {
        const listener = new BehaviorSubject(null);
        getSelectedItem$.next({ tag, listener });
        return listener.asObservable();
    }
    onItemClick() {
        return itemClick$.pipe(share());
    }
    onItemSelect() {
        return itemSelect$.pipe(share());
    }
    onItemHover() {
        return itemHover$.pipe(share());
    }
    onSubmenuToggle() {
        return submenuToggle$.pipe(share());
    }
}
NbMenuService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbMenuService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuService, decorators: [{
            type: Injectable
        }] });
export class NbMenuInternalService {
    constructor(location) {
        this.location = location;
    }
    prepareItems(items) {
        const defaultItem = new NbMenuItem();
        items.forEach(i => {
            this.applyDefaults(i, defaultItem);
            this.setParent(i);
        });
    }
    selectFromUrl(items, tag, collapseOther = false) {
        const selectedItem = this.findItemByUrl(items);
        if (selectedItem) {
            this.selectItem(selectedItem, items, collapseOther, tag);
        }
    }
    selectItem(item, items, collapseOther = false, tag) {
        const unselectedItems = this.resetSelection(items);
        const collapsedItems = collapseOther ? this.collapseItems(items) : [];
        for (const parent of NbMenuItem.getParents(item)) {
            parent.selected = true;
            // emit event only for items that weren't selected before ('unselectedItems' contains items that were selected)
            if (!unselectedItems.includes(parent)) {
                this.itemSelect(parent, tag);
            }
            const wasNotExpanded = !parent.expanded;
            parent.expanded = true;
            const i = collapsedItems.indexOf(parent);
            // emit event only for items that weren't expanded before.
            // 'collapsedItems' contains items that were expanded, so no need to emit event.
            // in case 'collapseOther' is false, 'collapsedItems' will be empty,
            // so also check if item isn't expanded already ('wasNotExpanded').
            if (i === -1 && wasNotExpanded) {
                this.submenuToggle(parent, tag);
            }
            else {
                collapsedItems.splice(i, 1);
            }
        }
        item.selected = true;
        // emit event only for items that weren't selected before ('unselectedItems' contains items that were selected)
        if (!unselectedItems.includes(item)) {
            this.itemSelect(item, tag);
        }
        // remaining items which wasn't expanded back after expanding all currently selected items
        for (const collapsedItem of collapsedItems) {
            this.submenuToggle(collapsedItem, tag);
        }
    }
    collapseAll(items, tag, except) {
        const collapsedItems = this.collapseItems(items, except);
        for (const item of collapsedItems) {
            this.submenuToggle(item, tag);
        }
    }
    onAddItem() {
        return addItems$.pipe(share());
    }
    onNavigateHome() {
        return navigateHome$.pipe(share());
    }
    onCollapseAll() {
        return collapseAll$.pipe(share());
    }
    onGetSelectedItem() {
        return getSelectedItem$.pipe(share());
    }
    itemHover(item, tag) {
        itemHover$.next({ tag, item });
    }
    submenuToggle(item, tag) {
        submenuToggle$.next({ tag, item });
    }
    itemSelect(item, tag) {
        itemSelect$.next({ tag, item });
    }
    itemClick(item, tag) {
        itemClick$.next({ tag, item });
    }
    /**
     * Unselect all given items deeply.
     * @param items array of items to unselect.
     * @returns items which selected value was changed.
     */
    resetSelection(items) {
        const unselectedItems = [];
        for (const item of items) {
            if (item.selected) {
                unselectedItems.push(item);
            }
            item.selected = false;
            if (item.children) {
                unselectedItems.push(...this.resetSelection(item.children));
            }
        }
        return unselectedItems;
    }
    /**
     * Collapse all given items deeply.
     * @param items array of items to collapse.
     * @param except menu item which shouldn't be collapsed, also disables collapsing for parents of this item.
     * @returns items which expanded value was changed.
     */
    collapseItems(items, except) {
        const collapsedItems = [];
        for (const item of items) {
            if (except && (item === except || NbMenuItem.isParent(item, except))) {
                continue;
            }
            if (item.expanded) {
                collapsedItems.push(item);
            }
            item.expanded = false;
            if (item.children) {
                collapsedItems.push(...this.collapseItems(item.children));
            }
        }
        return collapsedItems;
    }
    applyDefaults(item, defaultItem) {
        const menuItem = { ...item };
        Object.assign(item, defaultItem, menuItem);
        item.children && item.children.forEach(child => {
            this.applyDefaults(child, defaultItem);
        });
    }
    setParent(item) {
        item.children && item.children.forEach(child => {
            child.parent = item;
            this.setParent(child);
        });
    }
    /**
     * Find deepest item which link matches current URL path.
     * @param items array of items to search in.
     * @returns found item of undefined.
     */
    findItemByUrl(items) {
        let selectedItem;
        items.some(item => {
            if (item.children) {
                selectedItem = this.findItemByUrl(item.children);
            }
            if (!selectedItem && this.isSelectedInUrl(item)) {
                selectedItem = item;
            }
            return selectedItem;
        });
        return selectedItem;
    }
    isSelectedInUrl(item) {
        const exact = item.pathMatch === 'full';
        const link = item.link;
        const isSelectedInPath = exact
            ? isUrlPathEqual(this.location.path(), link)
            : isUrlPathContain(this.location.path(), link);
        if (isSelectedInPath && item.fragment != null) {
            return exact
                ? isFragmentEqual(this.location.path(true), item.fragment)
                : isFragmentContain(this.location.path(true), item.fragment);
        }
        return isSelectedInPath;
    }
}
NbMenuInternalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuInternalService, deps: [{ token: i1.Location }], target: i0.ɵɵFactoryTarget.Injectable });
NbMenuInternalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuInternalService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuInternalService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Location }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBYyxlQUFlLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBTTlHLE1BQU0sVUFBVSxHQUFHLElBQUksT0FBTyxFQUFhLENBQUM7QUFDNUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxhQUFhLENBQXVDLENBQUMsQ0FBQyxDQUFDO0FBQzdFLE1BQU0sYUFBYSxHQUFHLElBQUksYUFBYSxDQUFrQixDQUFDLENBQUMsQ0FBQztBQUM1RCxNQUFNLGdCQUFnQixHQUNsQixJQUFJLGFBQWEsQ0FBd0QsQ0FBQyxDQUFDLENBQUM7QUFDaEYsTUFBTSxXQUFXLEdBQUcsSUFBSSxhQUFhLENBQVksQ0FBQyxDQUFDLENBQUM7QUFDcEQsTUFBTSxVQUFVLEdBQUcsSUFBSSxhQUFhLENBQVksQ0FBQyxDQUFDLENBQUM7QUFDbkQsTUFBTSxjQUFjLEdBQUcsSUFBSSxhQUFhLENBQVksQ0FBQyxDQUFDLENBQUM7QUFDdkQsTUFBTSxZQUFZLEdBQUcsSUFBSSxhQUFhLENBQWtCLENBQUMsQ0FBQyxDQUFDO0FBSTNELDJDQUEyQztBQUMzQzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxPQUFPLFVBQVU7SUFBdkI7UUE4Q0U7OztXQUdHO1FBQ0gsY0FBUyxHQUF1QixNQUFNLENBQUM7SUE4Q3pD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LENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQy9DLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDckI7WUFFRCxPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxlQUFlLENBQUMsSUFBZ0I7UUFDdEMsTUFBTSxLQUFLLEdBQVksSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUM7UUFDakQsTUFBTSxJQUFJLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUvQixNQUFNLGdCQUFnQixHQUFHLEtBQUs7WUFDNUIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQztZQUM1QyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVqRCxJQUFJLGdCQUFnQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzdDLE9BQU8sS0FBSztnQkFDVixDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzFELENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEU7UUFFRCxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7O2tIQXJNVSxxQkFBcUI7c0hBQXJCLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQURqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQYXJhbXMsIFF1ZXJ5UGFyYW1zSGFuZGxpbmcgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGlzRnJhZ21lbnRDb250YWluLCBpc0ZyYWdtZW50RXF1YWwsIGlzVXJsUGF0aENvbnRhaW4sIGlzVXJsUGF0aEVxdWFsIH0gZnJvbSAnLi91cmwtbWF0Y2hpbmctaGVscGVycyc7XG5pbXBvcnQgeyBOYkljb25Db25maWcgfSBmcm9tICcuLi9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5iQmFkZ2UgfSBmcm9tICcuLi9iYWRnZS9iYWRnZS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5iTWVudUJhZyB7IHRhZzogc3RyaW5nOyBpdGVtOiBOYk1lbnVJdGVtIH1cblxuY29uc3QgaXRlbUNsaWNrJCA9IG5ldyBTdWJqZWN0PE5iTWVudUJhZz4oKTtcbmNvbnN0IGFkZEl0ZW1zJCA9IG5ldyBSZXBsYXlTdWJqZWN0PHsgdGFnOiBzdHJpbmc7IGl0ZW1zOiBOYk1lbnVJdGVtW10gfT4oMSk7XG5jb25zdCBuYXZpZ2F0ZUhvbWUkID0gbmV3IFJlcGxheVN1YmplY3Q8eyB0YWc6IHN0cmluZyB9PigxKTtcbmNvbnN0IGdldFNlbGVjdGVkSXRlbSRcbiAgPSBuZXcgUmVwbGF5U3ViamVjdDx7IHRhZzogc3RyaW5nOyBsaXN0ZW5lcjogQmVoYXZpb3JTdWJqZWN0PE5iTWVudUJhZz4gfT4oMSk7XG5jb25zdCBpdGVtU2VsZWN0JCA9IG5ldyBSZXBsYXlTdWJqZWN0PE5iTWVudUJhZz4oMSk7XG5jb25zdCBpdGVtSG92ZXIkID0gbmV3IFJlcGxheVN1YmplY3Q8TmJNZW51QmFnPigxKTtcbmNvbnN0IHN1Ym1lbnVUb2dnbGUkID0gbmV3IFJlcGxheVN1YmplY3Q8TmJNZW51QmFnPigxKTtcbmNvbnN0IGNvbGxhcHNlQWxsJCA9IG5ldyBSZXBsYXlTdWJqZWN0PHsgdGFnOiBzdHJpbmcgfT4oMSk7XG5cbmV4cG9ydCB0eXBlIE5iTWVudUJhZGdlQ29uZmlnID0gT21pdDxOYkJhZGdlLCAncG9zaXRpb24nPjtcblxuLy8gVE9ETzogY2hlY2sgaWYgd2UgbmVlZCBib3RoIFVSTCBhbmQgTElOS1xuLyoqXG4gKlxuICpcbiAqIE1lbnUgSXRlbSBvcHRpb25zIGV4YW1wbGVcbiAqIEBzdGFja2VkLWV4YW1wbGUoTWVudSBMaW5rIFBhcmFtZXRlcnMsIG1lbnUvbWVudS1saW5rLXBhcmFtcy5jb21wb25lbnQpXG4gKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE5iTWVudUl0ZW0ge1xuICAvKipcbiAgICogSXRlbSBUaXRsZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICAqIEl0ZW0gcmVsYXRpdmUgbGluayAoZm9yIHJvdXRlckxpbmspXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBsaW5rPzogc3RyaW5nO1xuICAvKipcbiAgICogSXRlbSBVUkwgKGFic29sdXRlKVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogSWNvbiBjbGFzcyBuYW1lIG9yIGljb24gY29uZmlnIG9iamVjdFxuICAgKiBAdHlwZSB7c3RyaW5nIHwgTmJJY29uQ29uZmlnfVxuICAgKi9cbiAgaWNvbj86IHN0cmluZyB8IE5iSWNvbkNvbmZpZztcbiAgLyoqXG4gICAqIEV4cGFuZGVkIGJ5IGRlZmF1bHRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBleHBhbmRlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBCYWRnZSBjb21wb25lbnRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBiYWRnZT86IE5iTWVudUJhZGdlQ29uZmlnO1xuICAvKipcbiAgICogQ2hpbGRyZW4gaXRlbXNcbiAgICogQHR5cGUge0xpc3Q8TmJNZW51SXRlbT59XG4gICAqL1xuICBjaGlsZHJlbj86IE5iTWVudUl0ZW1bXTtcbiAgLyoqXG4gICAqIEhUTUwgTGluayB0YXJnZXRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHRhcmdldD86IHN0cmluZztcbiAgLyoqXG4gICAqIEhpZGRlbiBJdGVtXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEl0ZW0gaXMgc2VsZWN0ZWQgd2hlbiBwYXJ0bHkgb3IgZnVsbHkgZXF1YWwgdG8gdGhlIGN1cnJlbnQgdXJsXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBwYXRoTWF0Y2g/OiAnZnVsbCcgfCAncHJlZml4JyA9ICdmdWxsJztcbiAgLyoqXG4gICAqIFdoZXJlIHRoaXMgaXMgYSBob21lIGl0ZW1cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBob21lPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGl0ZW0gaXMganVzdCBhIGdyb3VwIChub24tY2xpY2thYmxlKVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdyb3VwPzogYm9vbGVhbjtcbiAgLyoqIFdoZXRoZXIgdGhlIGl0ZW0gc2tpcExvY2F0aW9uQ2hhbmdlIGlzIHRydWUgb3IgZmFsc2VcbiAgICpAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHNraXBMb2NhdGlvbkNoYW5nZT86IGJvb2xlYW47XG4gIC8qKiBNYXAgb2YgcXVlcnkgcGFyYW1ldGVyc1xuICAgKkB0eXBlIHtQYXJhbXN9XG4gICAqL1xuICBxdWVyeVBhcmFtcz86IFBhcmFtcztcbiAgcXVlcnlQYXJhbXNIYW5kbGluZz86IFF1ZXJ5UGFyYW1zSGFuZGxpbmc7XG4gIHBhcmVudD86IE5iTWVudUl0ZW07XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgZGF0YT86IGFueTtcbiAgZnJhZ21lbnQ/OiBzdHJpbmc7XG4gIHByZXNlcnZlRnJhZ21lbnQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBpdGVtIHBhcmVudHMgaW4gdG9wLWRvd24gb3JkZXJcbiAgICovXG4gIHN0YXRpYyBnZXRQYXJlbnRzKGl0ZW06IE5iTWVudUl0ZW0pOiBOYk1lbnVJdGVtW10ge1xuICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcblxuICAgIGxldCBwYXJlbnQgPSBpdGVtLnBhcmVudDtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBwYXJlbnRzLnVuc2hpZnQocGFyZW50KTtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHM7XG4gIH1cblxuICBzdGF0aWMgaXNQYXJlbnQoaXRlbTogTmJNZW51SXRlbSwgcG9zc2libGVDaGlsZDogTmJNZW51SXRlbSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwb3NzaWJsZUNoaWxkLnBhcmVudFxuICAgICAgPyBwb3NzaWJsZUNoaWxkLnBhcmVudCA9PT0gaXRlbSB8fCB0aGlzLmlzUGFyZW50KGl0ZW0sIHBvc3NpYmxlQ2hpbGQucGFyZW50KVxuICAgICAgOiBmYWxzZTtcbiAgfVxufVxuXG4vLyBUT0RPOiBtYXAgc2VsZWN0IGV2ZW50cyB0byByb3V0ZXIgY2hhbmdlIGV2ZW50c1xuLy8gVE9ETzogcmV2aWV3IHRoZSBpbnRlcmZhY2Vcbi8qKlxuICpcbiAqXG4gKiBNZW51IFNlcnZpY2UuIEFsbG93cyB5b3UgdG8gbGlzdGVuIHRvIG1lbnUgZXZlbnRzLCBvciB0byBpbnRlcmFjdCB3aXRoIGEgbWVudS5cbiAqIEBzdGFja2VkLWV4YW1wbGUoTWVudSBTZXJ2aWNlLCBtZW51L21lbnUtc2VydmljZS5jb21wb25lbnQpXG4gKlxuICpcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5iTWVudVNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBBZGQgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgbWVudSBpdGVtcyBsaXN0XG4gICAqIEBwYXJhbSB7TGlzdDxOYk1lbnVJdGVtPn0gaXRlbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgKi9cbiAgYWRkSXRlbXMoaXRlbXM6IE5iTWVudUl0ZW1bXSwgdGFnPzogc3RyaW5nKSB7XG4gICAgYWRkSXRlbXMkLm5leHQoeyB0YWcsIGl0ZW1zIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbGxhcHNlcyBhbGwgbWVudSBpdGVtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gICAqL1xuICBjb2xsYXBzZUFsbCh0YWc/OiBzdHJpbmcpIHtcbiAgICBjb2xsYXBzZUFsbCQubmV4dCh7IHRhZyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZSB0byB0aGUgaG9tZSBtZW51IGl0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgKi9cbiAgbmF2aWdhdGVIb21lKHRhZz86IHN0cmluZykge1xuICAgIG5hdmlnYXRlSG9tZSQubmV4dCh7IHRhZyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLiBXb24ndCBzdWJzY3JpYmUgdG8gdGhlIGZ1dHVyZSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICogQHJldHVybnMge09ic2VydmFibGU8e3RhZzogc3RyaW5nOyBpdGVtOiBOYk1lbnVJdGVtfT59XG4gICAqL1xuICBnZXRTZWxlY3RlZEl0ZW0odGFnPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxOYk1lbnVCYWc+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TmJNZW51QmFnPihudWxsKTtcblxuICAgIGdldFNlbGVjdGVkSXRlbSQubmV4dCh7IHRhZywgbGlzdGVuZXIgfSk7XG5cbiAgICByZXR1cm4gbGlzdGVuZXIuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBvbkl0ZW1DbGljaygpOiBPYnNlcnZhYmxlPE5iTWVudUJhZz4ge1xuICAgIHJldHVybiBpdGVtQ2xpY2skLnBpcGUoc2hhcmUoKSk7XG4gIH1cblxuICBvbkl0ZW1TZWxlY3QoKTogT2JzZXJ2YWJsZTxOYk1lbnVCYWc+IHtcbiAgICByZXR1cm4gaXRlbVNlbGVjdCQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIG9uSXRlbUhvdmVyKCk6IE9ic2VydmFibGU8TmJNZW51QmFnPiB7XG4gICAgcmV0dXJuIGl0ZW1Ib3ZlciQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIG9uU3VibWVudVRvZ2dsZSgpOiBPYnNlcnZhYmxlPE5iTWVudUJhZz4ge1xuICAgIHJldHVybiBzdWJtZW51VG9nZ2xlJC5waXBlKHNoYXJlKCkpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYk1lbnVJbnRlcm5hbFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKSB7fVxuXG4gIHByZXBhcmVJdGVtcyhpdGVtczogTmJNZW51SXRlbVtdKSB7XG4gICAgY29uc3QgZGVmYXVsdEl0ZW0gPSBuZXcgTmJNZW51SXRlbSgpO1xuICAgIGl0ZW1zLmZvckVhY2goaSA9PiB7XG4gICAgICB0aGlzLmFwcGx5RGVmYXVsdHMoaSwgZGVmYXVsdEl0ZW0pO1xuICAgICAgdGhpcy5zZXRQYXJlbnQoaSk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RGcm9tVXJsKGl0ZW1zOiBOYk1lbnVJdGVtW10sIHRhZzogc3RyaW5nLCBjb2xsYXBzZU90aGVyOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLmZpbmRJdGVtQnlVcmwoaXRlbXMpO1xuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0SXRlbShzZWxlY3RlZEl0ZW0sIGl0ZW1zLCBjb2xsYXBzZU90aGVyLCB0YWcpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEl0ZW0oaXRlbTogTmJNZW51SXRlbSwgaXRlbXM6IE5iTWVudUl0ZW1bXSwgY29sbGFwc2VPdGhlcjogYm9vbGVhbiA9IGZhbHNlLCB0YWc6IHN0cmluZykge1xuICAgIGNvbnN0IHVuc2VsZWN0ZWRJdGVtcyA9IHRoaXMucmVzZXRTZWxlY3Rpb24oaXRlbXMpO1xuICAgIGNvbnN0IGNvbGxhcHNlZEl0ZW1zID0gY29sbGFwc2VPdGhlciA/IHRoaXMuY29sbGFwc2VJdGVtcyhpdGVtcykgOiBbXTtcblxuICAgIGZvciAoY29uc3QgcGFyZW50IG9mIE5iTWVudUl0ZW0uZ2V0UGFyZW50cyhpdGVtKSkge1xuICAgICAgcGFyZW50LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIC8vIGVtaXQgZXZlbnQgb25seSBmb3IgaXRlbXMgdGhhdCB3ZXJlbid0IHNlbGVjdGVkIGJlZm9yZSAoJ3Vuc2VsZWN0ZWRJdGVtcycgY29udGFpbnMgaXRlbXMgdGhhdCB3ZXJlIHNlbGVjdGVkKVxuICAgICAgaWYgKCF1bnNlbGVjdGVkSXRlbXMuaW5jbHVkZXMocGFyZW50KSkge1xuICAgICAgICB0aGlzLml0ZW1TZWxlY3QocGFyZW50LCB0YWcpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3YXNOb3RFeHBhbmRlZCA9ICFwYXJlbnQuZXhwYW5kZWQ7XG4gICAgICBwYXJlbnQuZXhwYW5kZWQgPSB0cnVlO1xuICAgICAgY29uc3QgaSA9IGNvbGxhcHNlZEl0ZW1zLmluZGV4T2YocGFyZW50KTtcbiAgICAgIC8vIGVtaXQgZXZlbnQgb25seSBmb3IgaXRlbXMgdGhhdCB3ZXJlbid0IGV4cGFuZGVkIGJlZm9yZS5cbiAgICAgIC8vICdjb2xsYXBzZWRJdGVtcycgY29udGFpbnMgaXRlbXMgdGhhdCB3ZXJlIGV4cGFuZGVkLCBzbyBubyBuZWVkIHRvIGVtaXQgZXZlbnQuXG4gICAgICAvLyBpbiBjYXNlICdjb2xsYXBzZU90aGVyJyBpcyBmYWxzZSwgJ2NvbGxhcHNlZEl0ZW1zJyB3aWxsIGJlIGVtcHR5LFxuICAgICAgLy8gc28gYWxzbyBjaGVjayBpZiBpdGVtIGlzbid0IGV4cGFuZGVkIGFscmVhZHkgKCd3YXNOb3RFeHBhbmRlZCcpLlxuICAgICAgaWYgKGkgPT09IC0xICYmIHdhc05vdEV4cGFuZGVkKSB7XG4gICAgICAgIHRoaXMuc3VibWVudVRvZ2dsZShwYXJlbnQsIHRhZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZWRJdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaXRlbS5zZWxlY3RlZCA9IHRydWU7XG4gICAgLy8gZW1pdCBldmVudCBvbmx5IGZvciBpdGVtcyB0aGF0IHdlcmVuJ3Qgc2VsZWN0ZWQgYmVmb3JlICgndW5zZWxlY3RlZEl0ZW1zJyBjb250YWlucyBpdGVtcyB0aGF0IHdlcmUgc2VsZWN0ZWQpXG4gICAgaWYgKCF1bnNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgIHRoaXMuaXRlbVNlbGVjdChpdGVtLCB0YWcpO1xuICAgIH1cblxuICAgIC8vIHJlbWFpbmluZyBpdGVtcyB3aGljaCB3YXNuJ3QgZXhwYW5kZWQgYmFjayBhZnRlciBleHBhbmRpbmcgYWxsIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtc1xuICAgIGZvciAoY29uc3QgY29sbGFwc2VkSXRlbSBvZiBjb2xsYXBzZWRJdGVtcykge1xuICAgICAgdGhpcy5zdWJtZW51VG9nZ2xlKGNvbGxhcHNlZEl0ZW0sIHRhZyk7XG4gICAgfVxuICB9XG5cbiAgY29sbGFwc2VBbGwoaXRlbXM6IE5iTWVudUl0ZW1bXSwgdGFnOiBzdHJpbmcsIGV4Y2VwdD86IE5iTWVudUl0ZW0pIHtcbiAgICBjb25zdCBjb2xsYXBzZWRJdGVtcyA9IHRoaXMuY29sbGFwc2VJdGVtcyhpdGVtcywgZXhjZXB0KTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb2xsYXBzZWRJdGVtcykge1xuICAgICAgdGhpcy5zdWJtZW51VG9nZ2xlKGl0ZW0sIHRhZyk7XG4gICAgfVxuICB9XG5cbiAgb25BZGRJdGVtKCk6IE9ic2VydmFibGU8eyB0YWc6IHN0cmluZzsgaXRlbXM6IE5iTWVudUl0ZW1bXSB9PiB7XG4gICAgcmV0dXJuIGFkZEl0ZW1zJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgb25OYXZpZ2F0ZUhvbWUoKTogT2JzZXJ2YWJsZTx7IHRhZzogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4gbmF2aWdhdGVIb21lJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgb25Db2xsYXBzZUFsbCgpOiBPYnNlcnZhYmxlPHsgdGFnOiBzdHJpbmcgfT4ge1xuICAgIHJldHVybiBjb2xsYXBzZUFsbCQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIG9uR2V0U2VsZWN0ZWRJdGVtKCk6IE9ic2VydmFibGU8eyB0YWc6IHN0cmluZzsgbGlzdGVuZXI6IEJlaGF2aW9yU3ViamVjdDxOYk1lbnVCYWc+IH0+IHtcbiAgICByZXR1cm4gZ2V0U2VsZWN0ZWRJdGVtJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgaXRlbUhvdmVyKGl0ZW06IE5iTWVudUl0ZW0sIHRhZz86IHN0cmluZykge1xuICAgIGl0ZW1Ib3ZlciQubmV4dCh7dGFnLCBpdGVtfSk7XG4gIH1cblxuICBzdWJtZW51VG9nZ2xlKGl0ZW06IE5iTWVudUl0ZW0sIHRhZz86IHN0cmluZykge1xuICAgIHN1Ym1lbnVUb2dnbGUkLm5leHQoe3RhZywgaXRlbX0pO1xuICB9XG5cbiAgaXRlbVNlbGVjdChpdGVtOiBOYk1lbnVJdGVtLCB0YWc/OiBzdHJpbmcpIHtcbiAgICBpdGVtU2VsZWN0JC5uZXh0KHt0YWcsIGl0ZW19KTtcbiAgfVxuXG4gIGl0ZW1DbGljayhpdGVtOiBOYk1lbnVJdGVtLCB0YWc/OiBzdHJpbmcpIHtcbiAgICBpdGVtQ2xpY2skLm5leHQoe3RhZywgaXRlbX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc2VsZWN0IGFsbCBnaXZlbiBpdGVtcyBkZWVwbHkuXG4gICAqIEBwYXJhbSBpdGVtcyBhcnJheSBvZiBpdGVtcyB0byB1bnNlbGVjdC5cbiAgICogQHJldHVybnMgaXRlbXMgd2hpY2ggc2VsZWN0ZWQgdmFsdWUgd2FzIGNoYW5nZWQuXG4gICAqL1xuICBwcml2YXRlIHJlc2V0U2VsZWN0aW9uKGl0ZW1zOiBOYk1lbnVJdGVtW10pOiBOYk1lbnVJdGVtW10ge1xuICAgIGNvbnN0IHVuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICB1bnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgdW5zZWxlY3RlZEl0ZW1zLnB1c2goLi4udGhpcy5yZXNldFNlbGVjdGlvbihpdGVtLmNoaWxkcmVuKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc2VsZWN0ZWRJdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsYXBzZSBhbGwgZ2l2ZW4gaXRlbXMgZGVlcGx5LlxuICAgKiBAcGFyYW0gaXRlbXMgYXJyYXkgb2YgaXRlbXMgdG8gY29sbGFwc2UuXG4gICAqIEBwYXJhbSBleGNlcHQgbWVudSBpdGVtIHdoaWNoIHNob3VsZG4ndCBiZSBjb2xsYXBzZWQsIGFsc28gZGlzYWJsZXMgY29sbGFwc2luZyBmb3IgcGFyZW50cyBvZiB0aGlzIGl0ZW0uXG4gICAqIEByZXR1cm5zIGl0ZW1zIHdoaWNoIGV4cGFuZGVkIHZhbHVlIHdhcyBjaGFuZ2VkLlxuICAgKi9cbiAgcHJpdmF0ZSBjb2xsYXBzZUl0ZW1zKGl0ZW1zOiBOYk1lbnVJdGVtW10sIGV4Y2VwdD86IE5iTWVudUl0ZW0pOiBOYk1lbnVJdGVtW10ge1xuICAgIGNvbnN0IGNvbGxhcHNlZEl0ZW1zID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgIGlmIChleGNlcHQgJiYgKGl0ZW0gPT09IGV4Y2VwdCB8fCBOYk1lbnVJdGVtLmlzUGFyZW50KGl0ZW0sIGV4Y2VwdCkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5leHBhbmRlZCkge1xuICAgICAgICBjb2xsYXBzZWRJdGVtcy5wdXNoKGl0ZW0pXG4gICAgICB9XG4gICAgICBpdGVtLmV4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbGxhcHNlZEl0ZW1zLnB1c2goLi4udGhpcy5jb2xsYXBzZUl0ZW1zKGl0ZW0uY2hpbGRyZW4pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGFwc2VkSXRlbXM7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5RGVmYXVsdHMoaXRlbSwgZGVmYXVsdEl0ZW0pIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IHsuLi5pdGVtfTtcbiAgICBPYmplY3QuYXNzaWduKGl0ZW0sIGRlZmF1bHRJdGVtLCBtZW51SXRlbSk7XG4gICAgaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgdGhpcy5hcHBseURlZmF1bHRzKGNoaWxkLCBkZWZhdWx0SXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFBhcmVudChpdGVtOiBOYk1lbnVJdGVtKSB7XG4gICAgaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQucGFyZW50ID0gaXRlbTtcbiAgICAgIHRoaXMuc2V0UGFyZW50KGNoaWxkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGRlZXBlc3QgaXRlbSB3aGljaCBsaW5rIG1hdGNoZXMgY3VycmVudCBVUkwgcGF0aC5cbiAgICogQHBhcmFtIGl0ZW1zIGFycmF5IG9mIGl0ZW1zIHRvIHNlYXJjaCBpbi5cbiAgICogQHJldHVybnMgZm91bmQgaXRlbSBvZiB1bmRlZmluZWQuXG4gICAqL1xuICBwcml2YXRlIGZpbmRJdGVtQnlVcmwoaXRlbXM6IE5iTWVudUl0ZW1bXSk6IE5iTWVudUl0ZW0gfCB1bmRlZmluZWQge1xuICAgIGxldCBzZWxlY3RlZEl0ZW07XG5cbiAgICBpdGVtcy5zb21lKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtID0gdGhpcy5maW5kSXRlbUJ5VXJsKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgICAgaWYgKCFzZWxlY3RlZEl0ZW0gJiYgdGhpcy5pc1NlbGVjdGVkSW5VcmwoaXRlbSkpIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzZWxlY3RlZEl0ZW07XG4gIH1cblxuICBwcml2YXRlIGlzU2VsZWN0ZWRJblVybChpdGVtOiBOYk1lbnVJdGVtKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZXhhY3Q6IGJvb2xlYW4gPSBpdGVtLnBhdGhNYXRjaCA9PT0gJ2Z1bGwnO1xuICAgIGNvbnN0IGxpbms6IHN0cmluZyA9IGl0ZW0ubGluaztcblxuICAgIGNvbnN0IGlzU2VsZWN0ZWRJblBhdGggPSBleGFjdFxuICAgICAgPyBpc1VybFBhdGhFcXVhbCh0aGlzLmxvY2F0aW9uLnBhdGgoKSwgbGluaylcbiAgICAgIDogaXNVcmxQYXRoQ29udGFpbih0aGlzLmxvY2F0aW9uLnBhdGgoKSwgbGluayk7XG5cbiAgICBpZiAoaXNTZWxlY3RlZEluUGF0aCAmJiBpdGVtLmZyYWdtZW50ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBleGFjdFxuICAgICAgICA/IGlzRnJhZ21lbnRFcXVhbCh0aGlzLmxvY2F0aW9uLnBhdGgodHJ1ZSksIGl0ZW0uZnJhZ21lbnQpXG4gICAgICAgIDogaXNGcmFnbWVudENvbnRhaW4odGhpcy5sb2NhdGlvbi5wYXRoKHRydWUpLCBpdGVtLmZyYWdtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNTZWxlY3RlZEluUGF0aDtcbiAgfVxufVxuIl19