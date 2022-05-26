/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { NbIconPackType } from './icon-pack';
import { NbFontIcon, NbSvgIcon } from './icon';
import * as i0 from "@angular/core";
export class NbIconDefinition {
}
function throwPackNotFoundError(name) {
    throw Error(`Icon Pack '${name}' is not registered`);
}
function throwNoDefaultPackError() {
    throw Error('Default pack is not registered.');
}
function throwWrongPackTypeError(name, type, desiredType) {
    throw Error(`Pack '${name}' is not an '${desiredType}' Pack and its type is '${type}'`);
}
/**
 * This service allows to register multiple icon packs to use them later within `<nb-icon></nb-icon>` component.
 */
export class NbIconLibraries {
    constructor() {
        this.packs = new Map();
    }
    /**
     * Registers new Svg icon pack
     * @param {string} name
     * @param {NbIcon} icons
     * @param {NbIconPackParams} params
     */
    registerSvgPack(name, icons, params = {}) {
        this.packs.set(name, {
            name,
            icons: new Map(Object.entries(icons)),
            params,
            type: NbIconPackType.SVG,
        });
    }
    /**
     * Registers new font pack
     * @param {string} name
     * @param {NbIconPackParams} params
     */
    registerFontPack(name, params = {}) {
        this.packs.set(name, {
            name,
            params,
            icons: new Map(),
            type: NbIconPackType.FONT,
        });
    }
    /**
     * Returns pack by name
     * @param {string} name
     */
    getPack(name) {
        return this.packs.get(name);
    }
    /**
     * Sets pack as a default
     * @param {string} name
     */
    setDefaultPack(name) {
        if (!this.packs.has(name)) {
            throwPackNotFoundError(name);
        }
        this.defaultPack = this.packs.get(name);
    }
    /**
     * Returns Svg icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    getSvgIcon(name, pack) {
        const iconsPack = pack ? this.getPackOrThrow(pack) : this.getDefaultPackOrThrow();
        if (iconsPack.type !== NbIconPackType.SVG) {
            throwWrongPackTypeError(iconsPack.name, iconsPack.type, 'SVG');
        }
        const icon = this.getIconFromPack(name, iconsPack);
        if (!icon) {
            return null;
        }
        return {
            name,
            pack: iconsPack.name,
            type: NbIconPackType.SVG,
            icon: this.createSvgIcon(name, icon, iconsPack.params),
        };
    }
    /**
     * Returns Font icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    getFontIcon(name, pack) {
        const iconsPack = pack ? this.getPackOrThrow(pack) : this.getDefaultPackOrThrow();
        if (iconsPack.type !== NbIconPackType.FONT) {
            throwWrongPackTypeError(iconsPack.name, iconsPack.type, 'Font');
        }
        const icon = this.getIconFromPack(name, iconsPack) ?? '';
        const iconContent = iconsPack.params.ligature ? name : icon;
        return {
            name,
            pack: iconsPack.name,
            type: NbIconPackType.FONT,
            icon: this.createFontIcon(name, iconContent, iconsPack.params),
        };
    }
    /**
     * Returns an icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    getIcon(name, pack) {
        const iconsPack = pack ? this.getPackOrThrow(pack) : this.getDefaultPackOrThrow();
        if (iconsPack.type === NbIconPackType.SVG) {
            return this.getSvgIcon(name, pack);
        }
        return this.getFontIcon(name, pack);
    }
    createSvgIcon(name, content, params) {
        return content instanceof NbSvgIcon ? content : new NbSvgIcon(name, content, params);
    }
    createFontIcon(name, content, params) {
        return content instanceof NbFontIcon ? content : new NbFontIcon(name, content, params);
    }
    getPackOrThrow(name) {
        const pack = this.packs.get(name);
        if (!pack) {
            throwPackNotFoundError(name);
        }
        return pack;
    }
    getDefaultPackOrThrow() {
        if (!this.defaultPack) {
            throwNoDefaultPackError();
        }
        return this.defaultPack;
    }
    getIconFromPack(name, pack) {
        if (pack.icons.has(name)) {
            return pack.icons.get(name);
        }
        return null;
    }
}
NbIconLibraries.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbIconLibraries, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbIconLibraries.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbIconLibraries, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbIconLibraries, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1saWJyYXJpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvaWNvbi9pY29uLWxpYnJhcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXNELGNBQWMsRUFBVyxNQUFNLGFBQWEsQ0FBQztBQUMxRyxPQUFPLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7QUFFdkQsTUFBTSxPQUFPLGdCQUFnQjtDQUs1QjtBQUVELFNBQVMsc0JBQXNCLENBQUMsSUFBWTtJQUMxQyxNQUFNLEtBQUssQ0FBQyxjQUFjLElBQUkscUJBQXFCLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRUQsU0FBUyx1QkFBdUI7SUFDOUIsTUFBTSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQsU0FBUyx1QkFBdUIsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLFdBQW1CO0lBQzlFLE1BQU0sS0FBSyxDQUFDLFNBQVMsSUFBSSxnQkFBZ0IsV0FBVywyQkFBMkIsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUMxRixDQUFDO0FBRUQ7O0dBRUc7QUFFSCxNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUVZLFVBQUssR0FBNEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztLQXdKdEQ7SUFySkM7Ozs7O09BS0c7SUFDSCxlQUFlLENBQUMsSUFBWSxFQUFFLEtBQWMsRUFBRSxTQUEyQixFQUFFO1FBQ3pFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtZQUNuQixJQUFJO1lBQ0osS0FBSyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsTUFBTTtZQUNOLElBQUksRUFBRSxjQUFjLENBQUMsR0FBRztTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGdCQUFnQixDQUFDLElBQVksRUFBRSxTQUErQixFQUFFO1FBQzlELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtZQUNuQixJQUFJO1lBQ0osTUFBTTtZQUNOLEtBQUssRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUNoQixJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUk7U0FDMUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGNBQWMsQ0FBQyxJQUFZO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6QixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFVBQVUsQ0FBQyxJQUFZLEVBQUUsSUFBYTtRQUNwQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRWxGLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsR0FBRyxFQUFFO1lBQ3pDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoRTtRQUVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTztZQUNMLElBQUk7WUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsSUFBSSxFQUFFLGNBQWMsQ0FBQyxHQUFHO1lBQ3hCLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUN2RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFdBQVcsQ0FBQyxJQUFZLEVBQUUsSUFBYTtRQUNyQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRWxGLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsSUFBSSxFQUFFO1lBQzFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqRTtRQUVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6RCxNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFNUQsT0FBTztZQUNMLElBQUk7WUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUMvRCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILE9BQU8sQ0FBQyxJQUFZLEVBQUUsSUFBYTtRQUNqQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRWxGLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsR0FBRyxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDcEM7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFUyxhQUFhLENBQUMsSUFBWSxFQUFFLE9BQXdCLEVBQUUsTUFBd0I7UUFDdEYsT0FBTyxPQUFPLFlBQVksU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVTLGNBQWMsQ0FBQyxJQUFZLEVBQUUsT0FBd0IsRUFBRSxNQUE0QjtRQUMzRixPQUFPLE9BQU8sWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRVMsY0FBYyxDQUFDLElBQVk7UUFDbkMsTUFBTSxJQUFJLEdBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRVMscUJBQXFCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLHVCQUF1QixFQUFFLENBQUM7U0FDM0I7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVTLGVBQWUsQ0FBQyxJQUFZLEVBQUUsSUFBZ0I7UUFDdEQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs0R0F4SlUsZUFBZTtnSEFBZixlQUFlLGNBREYsTUFBTTsyRkFDbkIsZUFBZTtrQkFEM0IsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iRm9udEljb25QYWNrUGFyYW1zLCBOYkljb25QYWNrLCBOYkljb25QYWNrUGFyYW1zLCBOYkljb25QYWNrVHlwZSwgTmJJY29ucyB9IGZyb20gJy4vaWNvbi1wYWNrJztcbmltcG9ydCB7IE5iRm9udEljb24sIE5iSWNvbiwgTmJTdmdJY29uIH0gZnJvbSAnLi9pY29uJztcblxuZXhwb3J0IGNsYXNzIE5iSWNvbkRlZmluaXRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgcGFjazogc3RyaW5nO1xuICBpY29uOiBOYkljb247XG59XG5cbmZ1bmN0aW9uIHRocm93UGFja05vdEZvdW5kRXJyb3IobmFtZTogc3RyaW5nKSB7XG4gIHRocm93IEVycm9yKGBJY29uIFBhY2sgJyR7bmFtZX0nIGlzIG5vdCByZWdpc3RlcmVkYCk7XG59XG5cbmZ1bmN0aW9uIHRocm93Tm9EZWZhdWx0UGFja0Vycm9yKCkge1xuICB0aHJvdyBFcnJvcignRGVmYXVsdCBwYWNrIGlzIG5vdCByZWdpc3RlcmVkLicpO1xufVxuXG5mdW5jdGlvbiB0aHJvd1dyb25nUGFja1R5cGVFcnJvcihuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgZGVzaXJlZFR5cGU6IHN0cmluZykge1xuICB0aHJvdyBFcnJvcihgUGFjayAnJHtuYW1lfScgaXMgbm90IGFuICcke2Rlc2lyZWRUeXBlfScgUGFjayBhbmQgaXRzIHR5cGUgaXMgJyR7dHlwZX0nYCk7XG59XG5cbi8qKlxuICogVGhpcyBzZXJ2aWNlIGFsbG93cyB0byByZWdpc3RlciBtdWx0aXBsZSBpY29uIHBhY2tzIHRvIHVzZSB0aGVtIGxhdGVyIHdpdGhpbiBgPG5iLWljb24+PC9uYi1pY29uPmAgY29tcG9uZW50LlxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE5iSWNvbkxpYnJhcmllcyB7XG4gIHByb3RlY3RlZCBwYWNrczogTWFwPHN0cmluZywgTmJJY29uUGFjaz4gPSBuZXcgTWFwKCk7XG4gIHByb3RlY3RlZCBkZWZhdWx0UGFjazogTmJJY29uUGFjaztcblxuICAvKipcbiAgICogUmVnaXN0ZXJzIG5ldyBTdmcgaWNvbiBwYWNrXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7TmJJY29ufSBpY29uc1xuICAgKiBAcGFyYW0ge05iSWNvblBhY2tQYXJhbXN9IHBhcmFtc1xuICAgKi9cbiAgcmVnaXN0ZXJTdmdQYWNrKG5hbWU6IHN0cmluZywgaWNvbnM6IE5iSWNvbnMsIHBhcmFtczogTmJJY29uUGFja1BhcmFtcyA9IHt9KSB7XG4gICAgdGhpcy5wYWNrcy5zZXQobmFtZSwge1xuICAgICAgbmFtZSxcbiAgICAgIGljb25zOiBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKGljb25zKSksXG4gICAgICBwYXJhbXMsXG4gICAgICB0eXBlOiBOYkljb25QYWNrVHlwZS5TVkcsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIG5ldyBmb250IHBhY2tcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtOYkljb25QYWNrUGFyYW1zfSBwYXJhbXNcbiAgICovXG4gIHJlZ2lzdGVyRm9udFBhY2sobmFtZTogc3RyaW5nLCBwYXJhbXM6IE5iRm9udEljb25QYWNrUGFyYW1zID0ge30pIHtcbiAgICB0aGlzLnBhY2tzLnNldChuYW1lLCB7XG4gICAgICBuYW1lLFxuICAgICAgcGFyYW1zLFxuICAgICAgaWNvbnM6IG5ldyBNYXAoKSxcbiAgICAgIHR5cGU6IE5iSWNvblBhY2tUeXBlLkZPTlQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBwYWNrIGJ5IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICovXG4gIGdldFBhY2sobmFtZTogc3RyaW5nKTogTmJJY29uUGFjayB7XG4gICAgcmV0dXJuIHRoaXMucGFja3MuZ2V0KG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgcGFjayBhcyBhIGRlZmF1bHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICovXG4gIHNldERlZmF1bHRQYWNrKG5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5wYWNrcy5oYXMobmFtZSkpIHtcbiAgICAgIHRocm93UGFja05vdEZvdW5kRXJyb3IobmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZWZhdWx0UGFjayA9IHRoaXMucGFja3MuZ2V0KG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgU3ZnIGljb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhY2tcbiAgICpcbiAgICogQHJldHVybnMgTmJJY29uRGVmaW5pdGlvblxuICAgKi9cbiAgZ2V0U3ZnSWNvbihuYW1lOiBzdHJpbmcsIHBhY2s/OiBzdHJpbmcpOiBOYkljb25EZWZpbml0aW9uIHwgbnVsbCB7XG4gICAgY29uc3QgaWNvbnNQYWNrID0gcGFjayA/IHRoaXMuZ2V0UGFja09yVGhyb3cocGFjaykgOiB0aGlzLmdldERlZmF1bHRQYWNrT3JUaHJvdygpO1xuXG4gICAgaWYgKGljb25zUGFjay50eXBlICE9PSBOYkljb25QYWNrVHlwZS5TVkcpIHtcbiAgICAgIHRocm93V3JvbmdQYWNrVHlwZUVycm9yKGljb25zUGFjay5uYW1lLCBpY29uc1BhY2sudHlwZSwgJ1NWRycpO1xuICAgIH1cblxuICAgIGNvbnN0IGljb24gPSB0aGlzLmdldEljb25Gcm9tUGFjayhuYW1lLCBpY29uc1BhY2spO1xuXG4gICAgaWYgKCFpY29uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIHBhY2s6IGljb25zUGFjay5uYW1lLFxuICAgICAgdHlwZTogTmJJY29uUGFja1R5cGUuU1ZHLFxuICAgICAgaWNvbjogdGhpcy5jcmVhdGVTdmdJY29uKG5hbWUsIGljb24sIGljb25zUGFjay5wYXJhbXMpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBGb250IGljb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhY2tcbiAgICpcbiAgICogQHJldHVybnMgTmJJY29uRGVmaW5pdGlvblxuICAgKi9cbiAgZ2V0Rm9udEljb24obmFtZTogc3RyaW5nLCBwYWNrPzogc3RyaW5nKTogTmJJY29uRGVmaW5pdGlvbiB7XG4gICAgY29uc3QgaWNvbnNQYWNrID0gcGFjayA/IHRoaXMuZ2V0UGFja09yVGhyb3cocGFjaykgOiB0aGlzLmdldERlZmF1bHRQYWNrT3JUaHJvdygpO1xuXG4gICAgaWYgKGljb25zUGFjay50eXBlICE9PSBOYkljb25QYWNrVHlwZS5GT05UKSB7XG4gICAgICB0aHJvd1dyb25nUGFja1R5cGVFcnJvcihpY29uc1BhY2submFtZSwgaWNvbnNQYWNrLnR5cGUsICdGb250Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgaWNvbiA9IHRoaXMuZ2V0SWNvbkZyb21QYWNrKG5hbWUsIGljb25zUGFjaykgPz8gJyc7XG4gICAgY29uc3QgaWNvbkNvbnRlbnQgPSBpY29uc1BhY2sucGFyYW1zLmxpZ2F0dXJlID8gbmFtZSA6IGljb247XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIHBhY2s6IGljb25zUGFjay5uYW1lLFxuICAgICAgdHlwZTogTmJJY29uUGFja1R5cGUuRk9OVCxcbiAgICAgIGljb246IHRoaXMuY3JlYXRlRm9udEljb24obmFtZSwgaWNvbkNvbnRlbnQsIGljb25zUGFjay5wYXJhbXMpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpY29uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYWNrXG4gICAqXG4gICAqIEByZXR1cm5zIE5iSWNvbkRlZmluaXRpb25cbiAgICovXG4gIGdldEljb24obmFtZTogc3RyaW5nLCBwYWNrPzogc3RyaW5nKTogTmJJY29uRGVmaW5pdGlvbiB8IG51bGwge1xuICAgIGNvbnN0IGljb25zUGFjayA9IHBhY2sgPyB0aGlzLmdldFBhY2tPclRocm93KHBhY2spIDogdGhpcy5nZXREZWZhdWx0UGFja09yVGhyb3coKTtcblxuICAgIGlmIChpY29uc1BhY2sudHlwZSA9PT0gTmJJY29uUGFja1R5cGUuU1ZHKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdmdJY29uKG5hbWUsIHBhY2spO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldEZvbnRJY29uKG5hbWUsIHBhY2spO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVN2Z0ljb24obmFtZTogc3RyaW5nLCBjb250ZW50OiBOYkljb24gfCBzdHJpbmcsIHBhcmFtczogTmJJY29uUGFja1BhcmFtcyk6IE5iU3ZnSWNvbiB7XG4gICAgcmV0dXJuIGNvbnRlbnQgaW5zdGFuY2VvZiBOYlN2Z0ljb24gPyBjb250ZW50IDogbmV3IE5iU3ZnSWNvbihuYW1lLCBjb250ZW50LCBwYXJhbXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUZvbnRJY29uKG5hbWU6IHN0cmluZywgY29udGVudDogTmJJY29uIHwgc3RyaW5nLCBwYXJhbXM6IE5iRm9udEljb25QYWNrUGFyYW1zKTogTmJGb250SWNvbiB7XG4gICAgcmV0dXJuIGNvbnRlbnQgaW5zdGFuY2VvZiBOYkZvbnRJY29uID8gY29udGVudCA6IG5ldyBOYkZvbnRJY29uKG5hbWUsIGNvbnRlbnQsIHBhcmFtcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UGFja09yVGhyb3cobmFtZTogc3RyaW5nKTogTmJJY29uUGFjayB7XG4gICAgY29uc3QgcGFjazogTmJJY29uUGFjayA9IHRoaXMucGFja3MuZ2V0KG5hbWUpO1xuICAgIGlmICghcGFjaykge1xuICAgICAgdGhyb3dQYWNrTm90Rm91bmRFcnJvcihuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhY2s7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFBhY2tPclRocm93KCk6IE5iSWNvblBhY2sge1xuICAgIGlmICghdGhpcy5kZWZhdWx0UGFjaykge1xuICAgICAgdGhyb3dOb0RlZmF1bHRQYWNrRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFBhY2s7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0SWNvbkZyb21QYWNrKG5hbWU6IHN0cmluZywgcGFjazogTmJJY29uUGFjayk6IE5iSWNvbiB8IHN0cmluZyB8IG51bGwge1xuICAgIGlmIChwYWNrLmljb25zLmhhcyhuYW1lKSkge1xuICAgICAgcmV0dXJuIHBhY2suaWNvbnMuZ2V0KG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=