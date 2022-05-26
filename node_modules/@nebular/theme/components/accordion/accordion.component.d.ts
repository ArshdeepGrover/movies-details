import { Subject } from 'rxjs';
import { NbBooleanInput } from '../helpers';
import * as i0 from "@angular/core";
/**
 * An accordion allows to toggle the display of sections of content
 *
 * Basic example
 * @stacked-example(Showcase, accordion/accordion-showcase.component)
 *
 * ```ts
 * <nb-accordion>
 *  <nb-accordion-item>
 *   <nb-accordion-item-header>Product Details</nb-accordion-item-header>
 *   <nb-accordion-item-body>
 *     Item Content
 *   </nb-accordion-item-body>
 *  </nb-accordion-item>
 * </nb-accordion>
 * ```
 * ### Installation
 *
 * Import `NbAccordionModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbAccordionModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * With `multi` mode accordion can have multiple items expanded:
 * @stacked-example(Multiple expanded items, accordion/accordion-multi.component)
 *
 * `NbAccordionItemComponent` has several methods, for example it is possible to trigger item click/toggle:
 * @stacked-example(Expand API, accordion/accordion-toggle.component)
 *
 * @styles
 *
 * accordion-border-radius:
 * accordion-padding:
 * accordion-shadow:
 * accordion-header-text-color:
 * accordion-header-text-font-family:
 * accordion-header-text-font-size:
 * accordion-header-text-font-weight:
 * accordion-header-text-line-height:
 * accordion-header-disabled-text-color:
 * accordion-header-border-color:
 * accordion-header-border-style:
 * accordion-header-border-width:
 * accordion-item-background-color:
 * accordion-item-text-color:
 * accordion-item-text-font-family:
 * accordion-item-text-font-size:
 * accordion-item-text-font-weight:
 * accordion-item-text-line-height:
 */
export declare class NbAccordionComponent {
    openCloseItems: Subject<boolean>;
    /**
     *  Allow multiple items to be expanded at the same time.
     * @type {boolean}
     */
    get multi(): boolean;
    set multi(val: boolean);
    static ngAcceptInputType_multi: NbBooleanInput;
    private multiValue;
    /**
     * Opens all enabled accordion items.
     */
    openAll(): void;
    /**
     * Closes all enabled accordion items.
     */
    closeAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbAccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbAccordionComponent, "nb-accordion", never, { "multi": "multi"; }, {}, never, ["nb-accordion-item"]>;
}
