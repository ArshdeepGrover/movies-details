/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { convertToBoolProperty } from '../helpers';
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
export class NbAccordionComponent {
    constructor() {
        this.openCloseItems = new Subject();
        this.multiValue = false;
    }
    /**
     *  Allow multiple items to be expanded at the same time.
     * @type {boolean}
     */
    get multi() {
        return this.multiValue;
    }
    set multi(val) {
        this.multiValue = convertToBoolProperty(val);
    }
    /**
     * Opens all enabled accordion items.
     */
    openAll() {
        if (this.multi) {
            this.openCloseItems.next(false);
        }
    }
    /**
     * Closes all enabled accordion items.
     */
    closeAll() {
        this.openCloseItems.next(true);
    }
}
NbAccordionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbAccordionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbAccordionComponent, selector: "nb-accordion", inputs: { multi: "multi" }, ngImport: i0, template: `
    <ng-content select="nb-accordion-item"></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAccordionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-accordion',
                    template: `
    <ng-content select="nb-accordion-item"></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { multi: [{
                type: Input,
                args: ['multi']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDOztBQUVuRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3REc7QUFRSCxNQUFNLE9BQU8sb0JBQW9CO0lBUGpDO1FBU0UsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBZWhDLGVBQVUsR0FBRyxLQUFLLENBQUM7S0FpQjVCO0lBOUJDOzs7T0FHRztJQUNILElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsR0FBWTtRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFLRDs7T0FFRztJQUNILE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOztpSEFqQ1Usb0JBQW9CO3FHQUFwQixvQkFBb0IsZ0ZBTHJCOztHQUVUOzJGQUdVLG9CQUFvQjtrQkFQaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFOztHQUVUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs4QkFVSyxLQUFLO3NCQURSLEtBQUs7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLyoqXG4gKiBBbiBhY2NvcmRpb24gYWxsb3dzIHRvIHRvZ2dsZSB0aGUgZGlzcGxheSBvZiBzZWN0aW9ucyBvZiBjb250ZW50XG4gKlxuICogQmFzaWMgZXhhbXBsZVxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgYWNjb3JkaW9uL2FjY29yZGlvbi1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogYGBgdHNcbiAqIDxuYi1hY2NvcmRpb24+XG4gKiAgPG5iLWFjY29yZGlvbi1pdGVtPlxuICogICA8bmItYWNjb3JkaW9uLWl0ZW0taGVhZGVyPlByb2R1Y3QgRGV0YWlsczwvbmItYWNjb3JkaW9uLWl0ZW0taGVhZGVyPlxuICogICA8bmItYWNjb3JkaW9uLWl0ZW0tYm9keT5cbiAqICAgICBJdGVtIENvbnRlbnRcbiAqICAgPC9uYi1hY2NvcmRpb24taXRlbS1ib2R5PlxuICogIDwvbmItYWNjb3JkaW9uLWl0ZW0+XG4gKiA8L25iLWFjY29yZGlvbj5cbiAqIGBgYFxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJBY2NvcmRpb25Nb2R1bGVgIHRvIHlvdXIgZmVhdHVyZSBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iQWNjb3JkaW9uTW9kdWxlLFxuICogICBdLFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBQYWdlTW9kdWxlIHsgfVxuICogYGBgXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBXaXRoIGBtdWx0aWAgbW9kZSBhY2NvcmRpb24gY2FuIGhhdmUgbXVsdGlwbGUgaXRlbXMgZXhwYW5kZWQ6XG4gKiBAc3RhY2tlZC1leGFtcGxlKE11bHRpcGxlIGV4cGFuZGVkIGl0ZW1zLCBhY2NvcmRpb24vYWNjb3JkaW9uLW11bHRpLmNvbXBvbmVudClcbiAqXG4gKiBgTmJBY2NvcmRpb25JdGVtQ29tcG9uZW50YCBoYXMgc2V2ZXJhbCBtZXRob2RzLCBmb3IgZXhhbXBsZSBpdCBpcyBwb3NzaWJsZSB0byB0cmlnZ2VyIGl0ZW0gY2xpY2svdG9nZ2xlOlxuICogQHN0YWNrZWQtZXhhbXBsZShFeHBhbmQgQVBJLCBhY2NvcmRpb24vYWNjb3JkaW9uLXRvZ2dsZS5jb21wb25lbnQpXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIGFjY29yZGlvbi1ib3JkZXItcmFkaXVzOlxuICogYWNjb3JkaW9uLXBhZGRpbmc6XG4gKiBhY2NvcmRpb24tc2hhZG93OlxuICogYWNjb3JkaW9uLWhlYWRlci10ZXh0LWNvbG9yOlxuICogYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OlxuICogYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtc2l6ZTpcbiAqIGFjY29yZGlvbi1oZWFkZXItdGV4dC1mb250LXdlaWdodDpcbiAqIGFjY29yZGlvbi1oZWFkZXItdGV4dC1saW5lLWhlaWdodDpcbiAqIGFjY29yZGlvbi1oZWFkZXItZGlzYWJsZWQtdGV4dC1jb2xvcjpcbiAqIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLWNvbG9yOlxuICogYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItc3R5bGU6XG4gKiBhY2NvcmRpb24taGVhZGVyLWJvcmRlci13aWR0aDpcbiAqIGFjY29yZGlvbi1pdGVtLWJhY2tncm91bmQtY29sb3I6XG4gKiBhY2NvcmRpb24taXRlbS10ZXh0LWNvbG9yOlxuICogYWNjb3JkaW9uLWl0ZW0tdGV4dC1mb250LWZhbWlseTpcbiAqIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC1zaXplOlxuICogYWNjb3JkaW9uLWl0ZW0tdGV4dC1mb250LXdlaWdodDpcbiAqIGFjY29yZGlvbi1pdGVtLXRleHQtbGluZS1oZWlnaHQ6XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItYWNjb3JkaW9uLWl0ZW1cIj48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYkFjY29yZGlvbkNvbXBvbmVudCB7XG5cbiAgb3BlbkNsb3NlSXRlbXMgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiAgQWxsb3cgbXVsdGlwbGUgaXRlbXMgdG8gYmUgZXhwYW5kZWQgYXQgdGhlIHNhbWUgdGltZS5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBASW5wdXQoJ211bHRpJylcbiAgZ2V0IG11bHRpKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm11bHRpVmFsdWU7XG4gIH1cbiAgc2V0IG11bHRpKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMubXVsdGlWYWx1ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWwpO1xuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tdWx0aTogTmJCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBtdWx0aVZhbHVlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFsbCBlbmFibGVkIGFjY29yZGlvbiBpdGVtcy5cbiAgICovXG4gIG9wZW5BbGwoKSB7XG4gICAgaWYgKHRoaXMubXVsdGkpIHtcbiAgICAgIHRoaXMub3BlbkNsb3NlSXRlbXMubmV4dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbGwgZW5hYmxlZCBhY2NvcmRpb24gaXRlbXMuXG4gICAqL1xuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLm9wZW5DbG9zZUl0ZW1zLm5leHQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==