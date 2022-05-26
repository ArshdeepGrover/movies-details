import { NbStatusService } from '../../services/status.service';
import { NbComponentSize } from '../component-size';
import { NbComponentOrCustomStatus, NbComponentStatus } from '../component-status';
import * as i0 from "@angular/core";
/**
 * Component intended to be used within the `<nb-card>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * card-header-text-color:
 * card-header-text-font-family:
 * card-header-text-font-size:
 * card-header-text-font-weight:
 * card-header-text-line-height:
 * card-header-basic-background-color:
 * card-header-basic-text-color:
 * card-header-primary-background-color:
 * card-header-primary-text-color:
 * card-header-info-background-color:
 * card-header-info-text-color:
 * card-header-success-background-color:
 * card-header-success-text-color:
 * card-header-warning-background-color:
 * card-header-warning-text-color:
 * card-header-danger-background-color:
 * card-header-danger-text-color:
 * card-header-control-background-color:
 * card-header-control-text-color:
 */
export declare class NbCardHeaderComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCardHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCardHeaderComponent, "nb-card-header", never, {}, {}, never, ["*"]>;
}
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */
export declare class NbCardBodyComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCardBodyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCardBodyComponent, "nb-card-body", never, {}, {}, never, ["*"]>;
}
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */
export declare class NbCardFooterComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCardFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCardFooterComponent, "nb-card-footer", never, {}, {}, never, ["*"]>;
}
/**
 * Basic content container component.
 *
 * Basic card example:
 * @stacked-example(Showcase, card/card-showcase.component)
 *
 * Basic card configuration:
 *
 * ```html
 * <nb-card>
 *   <nb-card-body>
 *     Card
 *   </nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Card with header and footer:
 * @stacked-example(With Header & Footer, card/card-full.component)
 *
 * Most of the time main card content goes to `nb-card-body`,
 * so it is styled and aligned in accordance with the header and footer.
 * In case you need a higher level of control, you can pass contend directly to `nb-card`,
 * so `nb-card-body` styling will not be applied.
 *
 * Consider an example with `nb-list` component:
 * @stacked-example(Card with list, card/card-without-body.component)
 *
 * Colored cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, card/card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, card/card-accents.component)
 *
 * Cards of smaller sizes could be combined and put on the same row with a bigger card so they have the same heights.
 * @stacked-example(Card sizes combinations, card/card-sizes-combinations.component)
 *
 * @additional-example(Multiple Sizes, card/card-sizes.component)
 *
 * @styles
 *
 * card-background-color:
 * card-text-color:
 * card-text-font-family:
 * card-text-font-size:
 * card-text-font-weight:
 * card-text-line-height:
 * card-border-width:
 * card-border-style:
 * card-border-color:
 * card-border-radius:
 * card-padding:
 * card-shadow:
 * card-divider-color:
 * card-divider-style:
 * card-divider-width:
 * card-height-tiny:
 * card-height-small:
 * card-height-medium:
 * card-height-large:
 * card-height-giant:
 * card-margin-bottom:
 * card-scrollbar-color:
 * card-scrollbar-background-color:
 * card-scrollbar-width:
 */
export declare class NbCardComponent {
    protected statusService: NbStatusService;
    /**
     * Card size, available sizes:
     * tiny, small, medium, large, giant
     */
    get size(): '' | NbComponentSize;
    set size(value: '' | NbComponentSize);
    _size: '' | NbComponentSize;
    /**
     * Card status:
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
     */
    status: '' | NbComponentOrCustomStatus;
    /**
     * Card accent (color of the top border):
     * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
     */
    accent: '' | NbComponentStatus;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get primary(): boolean;
    get info(): boolean;
    get success(): boolean;
    get warning(): boolean;
    get danger(): boolean;
    get basic(): boolean;
    get control(): boolean;
    get hasAccent(): "" | NbComponentStatus;
    get primaryAccent(): boolean;
    get infoAccent(): boolean;
    get successAccent(): boolean;
    get warningAccent(): boolean;
    get dangerAccent(): boolean;
    get basicAccent(): boolean;
    get controlAccent(): boolean;
    get additionalClasses(): string[];
    constructor(statusService: NbStatusService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbCardComponent, "nb-card", never, { "size": "size"; "status": "status"; "accent": "accent"; }, {}, never, ["nb-card-header", "nb-card-body", "*", "nb-card-footer"]>;
}
