/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Inject, Injectable } from '@angular/core';
import { DEFAULT_THEME } from './js-themes/default.theme';
import { COSMIC_THEME } from './js-themes/cosmic.theme';
import { CORPORATE_THEME } from './js-themes/corporate.theme';
import { DARK_THEME } from './js-themes/dark.theme';
import { NB_BUILT_IN_JS_THEMES, NB_JS_THEMES } from '../theme.options';
import * as i0 from "@angular/core";
export const BUILT_IN_THEMES = [
    DEFAULT_THEME,
    COSMIC_THEME,
    CORPORATE_THEME,
    DARK_THEME,
];
/**
 * Js Themes registry - provides access to the JS themes' variables.
 * Usually shouldn't be used directly, but through the NbThemeService class methods (getJsTheme).
 */
export class NbJSThemesRegistry {
    constructor(builtInThemes, newThemes = []) {
        this.themes = {};
        const themes = this.combineByNames(newThemes, builtInThemes);
        themes.forEach((theme) => {
            this.register(theme, theme.name, theme.base);
        });
    }
    /**
     * Registers a new JS theme
     * @param config any
     * @param themeName string
     * @param baseTheme string
     */
    register(config, themeName, baseTheme) {
        const base = this.has(baseTheme) ? this.get(baseTheme) : {};
        this.themes[themeName] = this.mergeDeep({}, base, config);
    }
    /**
     * Checks whether the theme is registered
     * @param themeName
     * @returns boolean
     */
    has(themeName) {
        return !!this.themes[themeName];
    }
    /**
     * Return a theme
     * @param themeName
     * @returns NbJSThemeOptions
     */
    get(themeName) {
        if (!this.themes[themeName]) {
            throw Error(`NbThemeConfig: no theme '${themeName}' found registered.`);
        }
        return JSON.parse(JSON.stringify(this.themes[themeName]));
    }
    combineByNames(newThemes, oldThemes) {
        if (newThemes) {
            const mergedThemes = [];
            newThemes.forEach((theme) => {
                const sameOld = oldThemes.find((tm) => tm.name === theme.name)
                    || {};
                const mergedTheme = this.mergeDeep({}, sameOld, theme);
                mergedThemes.push(mergedTheme);
            });
            oldThemes.forEach((theme) => {
                if (!mergedThemes.find((tm) => tm.name === theme.name)) {
                    mergedThemes.push(theme);
                }
            });
            return mergedThemes;
        }
        return oldThemes;
    }
    isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    }
    // TODO: move to helpers
    mergeDeep(target, ...sources) {
        if (!sources.length) {
            return target;
        }
        const source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
            for (const key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, { [key]: {} });
                    }
                    this.mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
        return this.mergeDeep(target, ...sources);
    }
}
NbJSThemesRegistry.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbJSThemesRegistry, deps: [{ token: NB_BUILT_IN_JS_THEMES }, { token: NB_JS_THEMES }], target: i0.ɵɵFactoryTarget.Injectable });
NbJSThemesRegistry.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbJSThemesRegistry });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbJSThemesRegistry, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_BUILT_IN_JS_THEMES]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_JS_THEMES]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMtdGhlbWVzLXJlZ2lzdHJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL3NlcnZpY2VzL2pzLXRoZW1lcy1yZWdpc3RyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUluRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUV2RSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQXVCO0lBQ2pELGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7Q0FDWCxDQUFDO0FBRUY7OztHQUdHO0FBRUgsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QixZQUEyQyxhQUFpQyxFQUMxQyxZQUFnQyxFQUFFO1FBSDVELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFLdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFN0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsUUFBUSxDQUFDLE1B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QU0sRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztxQkFDdEM7b0JBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzFDO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUMvQzthQUNGO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7K0dBNUZVLGtCQUFrQixrQkFJVCxxQkFBcUIsYUFDckIsWUFBWTttSEFMckIsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBRDlCLFVBQVU7OzBCQUtJLE1BQU07MkJBQUMscUJBQXFCOzswQkFDNUIsTUFBTTsyQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5pbXBvcnQgeyBOYkpTVGhlbWVPcHRpb25zIH0gZnJvbSAnLi9qcy10aGVtZXMvdGhlbWUub3B0aW9ucyc7XG5pbXBvcnQgeyBERUZBVUxUX1RIRU1FIH0gZnJvbSAnLi9qcy10aGVtZXMvZGVmYXVsdC50aGVtZSc7XG5pbXBvcnQgeyBDT1NNSUNfVEhFTUUgfSBmcm9tICcuL2pzLXRoZW1lcy9jb3NtaWMudGhlbWUnO1xuaW1wb3J0IHsgQ09SUE9SQVRFX1RIRU1FIH0gZnJvbSAnLi9qcy10aGVtZXMvY29ycG9yYXRlLnRoZW1lJztcbmltcG9ydCB7IERBUktfVEhFTUUgfSBmcm9tICcuL2pzLXRoZW1lcy9kYXJrLnRoZW1lJztcbmltcG9ydCB7IE5CX0JVSUxUX0lOX0pTX1RIRU1FUywgTkJfSlNfVEhFTUVTIH0gZnJvbSAnLi4vdGhlbWUub3B0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBCVUlMVF9JTl9USEVNRVM6IE5iSlNUaGVtZU9wdGlvbnNbXSA9IFtcbiAgREVGQVVMVF9USEVNRSxcbiAgQ09TTUlDX1RIRU1FLFxuICBDT1JQT1JBVEVfVEhFTUUsXG4gIERBUktfVEhFTUUsXG5dO1xuXG4vKipcbiAqIEpzIFRoZW1lcyByZWdpc3RyeSAtIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgSlMgdGhlbWVzJyB2YXJpYWJsZXMuXG4gKiBVc3VhbGx5IHNob3VsZG4ndCBiZSB1c2VkIGRpcmVjdGx5LCBidXQgdGhyb3VnaCB0aGUgTmJUaGVtZVNlcnZpY2UgY2xhc3MgbWV0aG9kcyAoZ2V0SnNUaGVtZSkuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYkpTVGhlbWVzUmVnaXN0cnkge1xuXG4gIHByaXZhdGUgdGhlbWVzOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5CX0JVSUxUX0lOX0pTX1RIRU1FUykgYnVpbHRJblRoZW1lczogTmJKU1RoZW1lT3B0aW9uc1tdLFxuICAgICAgICAgICAgICBASW5qZWN0KE5CX0pTX1RIRU1FUykgbmV3VGhlbWVzOiBOYkpTVGhlbWVPcHRpb25zW10gPSBbXSkge1xuXG4gICAgY29uc3QgdGhlbWVzID0gdGhpcy5jb21iaW5lQnlOYW1lcyhuZXdUaGVtZXMsIGJ1aWx0SW5UaGVtZXMpO1xuXG4gICAgdGhlbWVzLmZvckVhY2goKHRoZW1lOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVnaXN0ZXIodGhlbWUsIHRoZW1lLm5hbWUsIHRoZW1lLmJhc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIG5ldyBKUyB0aGVtZVxuICAgKiBAcGFyYW0gY29uZmlnIGFueVxuICAgKiBAcGFyYW0gdGhlbWVOYW1lIHN0cmluZ1xuICAgKiBAcGFyYW0gYmFzZVRoZW1lIHN0cmluZ1xuICAgKi9cbiAgcmVnaXN0ZXIoY29uZmlnOiBhbnksIHRoZW1lTmFtZTogc3RyaW5nLCBiYXNlVGhlbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGJhc2UgPSB0aGlzLmhhcyhiYXNlVGhlbWUpID8gdGhpcy5nZXQoYmFzZVRoZW1lKSA6IHt9O1xuICAgIHRoaXMudGhlbWVzW3RoZW1lTmFtZV0gPSB0aGlzLm1lcmdlRGVlcCh7fSwgYmFzZSwgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgdGhlbWUgaXMgcmVnaXN0ZXJlZFxuICAgKiBAcGFyYW0gdGhlbWVOYW1lXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGhhcyh0aGVtZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMudGhlbWVzW3RoZW1lTmFtZV07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgdGhlbWVcbiAgICogQHBhcmFtIHRoZW1lTmFtZVxuICAgKiBAcmV0dXJucyBOYkpTVGhlbWVPcHRpb25zXG4gICAqL1xuICBnZXQodGhlbWVOYW1lOiBzdHJpbmcpOiBOYkpTVGhlbWVPcHRpb25zIHtcbiAgICBpZiAoIXRoaXMudGhlbWVzW3RoZW1lTmFtZV0pIHtcbiAgICAgIHRocm93IEVycm9yKGBOYlRoZW1lQ29uZmlnOiBubyB0aGVtZSAnJHt0aGVtZU5hbWV9JyBmb3VuZCByZWdpc3RlcmVkLmApO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnRoZW1lc1t0aGVtZU5hbWVdKSk7XG4gIH1cblxuICBwcml2YXRlIGNvbWJpbmVCeU5hbWVzKG5ld1RoZW1lczogTmJKU1RoZW1lT3B0aW9uc1tdLCBvbGRUaGVtZXM6IE5iSlNUaGVtZU9wdGlvbnNbXSk6IE5iSlNUaGVtZU9wdGlvbnNbXSB7XG4gICAgaWYgKG5ld1RoZW1lcykge1xuICAgICAgY29uc3QgbWVyZ2VkVGhlbWVzOiBOYkpTVGhlbWVPcHRpb25zW10gPSBbXTtcbiAgICAgIG5ld1RoZW1lcy5mb3JFYWNoKCh0aGVtZTogTmJKU1RoZW1lT3B0aW9ucykgPT4ge1xuICAgICAgICBjb25zdCBzYW1lT2xkOiBOYkpTVGhlbWVPcHRpb25zID0gb2xkVGhlbWVzLmZpbmQoKHRtOiBOYkpTVGhlbWVPcHRpb25zKSA9PiB0bS5uYW1lID09PSB0aGVtZS5uYW1lKVxuICAgICAgICAgIHx8IDxOYkpTVGhlbWVPcHRpb25zPnt9O1xuXG4gICAgICAgIGNvbnN0IG1lcmdlZFRoZW1lID0gdGhpcy5tZXJnZURlZXAoe30sIHNhbWVPbGQsIHRoZW1lKTtcbiAgICAgICAgbWVyZ2VkVGhlbWVzLnB1c2gobWVyZ2VkVGhlbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIG9sZFRoZW1lcy5mb3JFYWNoKCh0aGVtZTogTmJKU1RoZW1lT3B0aW9ucykgPT4ge1xuICAgICAgICBpZiAoIW1lcmdlZFRoZW1lcy5maW5kKCh0bTogTmJKU1RoZW1lT3B0aW9ucykgPT4gdG0ubmFtZSA9PT0gdGhlbWUubmFtZSkpIHtcbiAgICAgICAgICBtZXJnZWRUaGVtZXMucHVzaCh0aGVtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1lcmdlZFRoZW1lcztcbiAgICB9XG4gICAgcmV0dXJuIG9sZFRoZW1lcztcbiAgfVxuXG5cbiAgcHJpdmF0ZSBpc09iamVjdChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pO1xuICB9XG5cbiAgLy8gVE9ETzogbW92ZSB0byBoZWxwZXJzXG4gIHByaXZhdGUgbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcykge1xuICAgIGlmICghc291cmNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcblxuICAgIGlmICh0aGlzLmlzT2JqZWN0KHRhcmdldCkgJiYgdGhpcy5pc09iamVjdChzb3VyY2UpKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHt9IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxufVxuIl19