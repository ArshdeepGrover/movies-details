/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NbStatusService } from '../../services/status.service';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbIconLibraries } from './icon-libraries';
import * as i0 from "@angular/core";
export interface NbIconConfig {
    icon: string;
    pack?: string;
    status?: NbComponentOrCustomStatus;
    options?: {
        [name: string]: any;
    };
}
/**
 * Icon component. Allows to render both `svg` and `font` icons.
 * Starting from Nebular 4.0 uses [Eva Icons](https://akveo.github.io/eva-icons/) pack by default.
 *
 * Basic icon example:
 * @stacked-example(Showcase, icon/icon-showcase.component)
 *
 * Icon configuration:
 *
 * ```html
 * <nb-icon icon="star"></nb-icon>
 * ```
 * ### Installation
 *
 * By default Nebular comes without any pre-installed icon pack.
 * Starting with Nebular 4.0.0 we ship separate package called `@nebular/eva-icons`
 * which integrates SVG [Eva Icons](https://akveo.github.io/eva-icons/) pack to Nebular. To add it to your
 * project run:
 * ```sh
 * npm i eva-icons @nebular/eva-icons
 * ```
 * This command will install Eva Icons pack. Then register `NbEvaIconsModule` into your app module:
 * ```ts
 * import { NbEvaIconsModule } from '@nebular/eva-icons';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbEvaIconsModule,
 *   ],
 * })
 * export class AppModule { }
 * ```
 * Last thing, import `NbIconModule` to your feature module where you need to show an icon:
 * ```ts
 * import { NbIconModule } from '@nebular/theme';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbIconModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Icon can be colored using `status` input:
 * ```html
 * <nb-icon icon="star" status="warning"></nb-icon>
 * ```
 *
 * Colored icons:
 * @stacked-example(Colored Icons, icon/icon-colors.component)
 *
 * In case you need to specify an icon from a specific icon pack, this could be done using `pack` input property:
 * ```html
 * <nb-icon icon="star" pack="font-awesome"></nb-icon>
 * ```
 * Additional icon settings (if available by the icon pack) could be passed using `options` input:
 *
 * ```html
 * <nb-icon icon="star" [options]="{ animation: { type: 'zoom' } }"></nb-icon>
 * ```
 *
 * @styles
 *
 * icon-font-size:
 * icon-line-height:
 * icon-width:
 * icon-height:
 * icon-svg-vertical-align:
 * icon-basic-color:
 * icon-primary-color:
 * icon-info-color:
 * icon-success-color:
 * icon-warning-color:
 * icon-danger-color:
 * icon-control-color:
 */
export declare class NbIconComponent implements NbIconConfig, OnChanges, OnInit {
    protected sanitizer: DomSanitizer;
    protected iconLibrary: NbIconLibraries;
    protected el: ElementRef;
    protected renderer: Renderer2;
    protected statusService: NbStatusService;
    protected iconDef: any;
    protected prevClasses: any[];
    html: SafeHtml;
    get primary(): boolean;
    get info(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get additionalClasses(): string[];
    /**
     * Icon name
     * @param {string} status
     */
    icon: string;
    /**
     * Icon pack name
     * @param {string} status
     */
    pack: string;
    /**
     * Additional icon settings
     * @param {[name: string]: any}
     */
    options: {
        [name: string]: any;
    };
    /**
     * Icon status (adds specific styles):
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
     */
    status?: NbComponentOrCustomStatus;
    /**
     * Sets all icon configurable properties via config object.
     * If passed value is a string set icon name.
     * @docs-private
     */
    get config(): string | NbIconConfig;
    set config(value: string | NbIconConfig);
    protected _config: string | NbIconConfig;
    constructor(sanitizer: DomSanitizer, iconLibrary: NbIconLibraries, el: ElementRef, renderer: Renderer2, statusService: NbStatusService);
    ngOnInit(): void;
    ngOnChanges(): void;
    renderIcon(name: string, pack?: string, options?: {
        [name: string]: any;
    }): import("./icon-libraries").NbIconDefinition;
    protected clearIcon(): void;
    protected assignClasses(classes: string[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbIconComponent, "nb-icon", never, { "icon": "icon"; "pack": "pack"; "options": "options"; "status": "status"; "config": "config"; }, {}, never, never>;
}
