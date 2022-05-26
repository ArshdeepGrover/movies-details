import { NbFontIconPackParams, NbIconPack, NbIconPackParams, NbIcons } from './icon-pack';
import { NbFontIcon, NbIcon, NbSvgIcon } from './icon';
import * as i0 from "@angular/core";
export declare class NbIconDefinition {
    name: string;
    type: string;
    pack: string;
    icon: NbIcon;
}
/**
 * This service allows to register multiple icon packs to use them later within `<nb-icon></nb-icon>` component.
 */
export declare class NbIconLibraries {
    protected packs: Map<string, NbIconPack>;
    protected defaultPack: NbIconPack;
    /**
     * Registers new Svg icon pack
     * @param {string} name
     * @param {NbIcon} icons
     * @param {NbIconPackParams} params
     */
    registerSvgPack(name: string, icons: NbIcons, params?: NbIconPackParams): void;
    /**
     * Registers new font pack
     * @param {string} name
     * @param {NbIconPackParams} params
     */
    registerFontPack(name: string, params?: NbFontIconPackParams): void;
    /**
     * Returns pack by name
     * @param {string} name
     */
    getPack(name: string): NbIconPack;
    /**
     * Sets pack as a default
     * @param {string} name
     */
    setDefaultPack(name: string): void;
    /**
     * Returns Svg icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    getSvgIcon(name: string, pack?: string): NbIconDefinition | null;
    /**
     * Returns Font icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    getFontIcon(name: string, pack?: string): NbIconDefinition;
    /**
     * Returns an icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    getIcon(name: string, pack?: string): NbIconDefinition | null;
    protected createSvgIcon(name: string, content: NbIcon | string, params: NbIconPackParams): NbSvgIcon;
    protected createFontIcon(name: string, content: NbIcon | string, params: NbFontIconPackParams): NbFontIcon;
    protected getPackOrThrow(name: string): NbIconPack;
    protected getDefaultPackOrThrow(): NbIconPack;
    protected getIconFromPack(name: string, pack: NbIconPack): NbIcon | string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbIconLibraries, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbIconLibraries>;
}
