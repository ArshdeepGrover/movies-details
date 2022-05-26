/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input } from '@angular/core';
import { NbPositionedContainerComponent } from '../cdk/overlay/overlay-container';
import * as i0 from "@angular/core";
import * as i1 from "../menu/menu.component";
/**
 * Context menu component used as content within NbContextMenuDirective.
 *
 * @styles
 *
 * context-menu-background-color:
 * context-menu-border-color:
 * context-menu-border-style:
 * context-menu-border-width:
 * context-menu-border-radius:
 * context-menu-text-align:
 * context-menu-min-width:
 * context-menu-max-width:
 * context-menu-shadow:
 * */
export class NbContextMenuComponent extends NbPositionedContainerComponent {
    constructor() {
        super(...arguments);
        this.items = [];
        this.context = { items: [] };
    }
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent() { }
}
NbContextMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbContextMenuComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NbContextMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbContextMenuComponent, selector: "nb-context-menu", inputs: { items: "items", tag: "tag", context: "context" }, usesInheritance: true, ngImport: i0, template: `
    <nb-menu class="context-menu" [items]="context.items" [tag]="context.tag"></nb-menu>
  `, isInline: true, components: [{ type: i1.NbMenuComponent, selector: "nb-menu", inputs: ["tag", "items", "autoCollapse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbContextMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-context-menu',
                    template: `
    <nb-menu class="context-menu" [items]="context.items" [tag]="context.tag"></nb-menu>
  `,
                }]
        }], propDecorators: { items: [{
                type: Input
            }], tag: [{
                type: Input
            }], context: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakQsT0FBTyxFQUFFLDhCQUE4QixFQUF5QixNQUFNLGtDQUFrQyxDQUFDOzs7QUFFekc7Ozs7Ozs7Ozs7Ozs7O0tBY0s7QUFPTCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsOEJBQThCO0lBTjFFOztRQVFXLFVBQUssR0FBaUIsRUFBRSxDQUFDO1FBSWxDLFlBQU8sR0FBMEMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FRaEU7SUFMQzs7O09BR0c7SUFDSCxhQUFhLEtBQUksQ0FBQzs7bUhBYlAsc0JBQXNCO3VHQUF0QixzQkFBc0IsMElBSnZCOztHQUVUOzJGQUVVLHNCQUFzQjtrQkFObEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUU7O0dBRVQ7aUJBQ0Y7OEJBR1UsS0FBSztzQkFBYixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFHTixPQUFPO3NCQUROLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJNZW51SXRlbSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJQb3NpdGlvbmVkQ29udGFpbmVyQ29tcG9uZW50LCBOYlJlbmRlcmFibGVDb250YWluZXIgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5LWNvbnRhaW5lcic7XG5cbi8qKlxuICogQ29udGV4dCBtZW51IGNvbXBvbmVudCB1c2VkIGFzIGNvbnRlbnQgd2l0aGluIE5iQ29udGV4dE1lbnVEaXJlY3RpdmUuXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIGNvbnRleHQtbWVudS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY29udGV4dC1tZW51LWJvcmRlci1jb2xvcjpcbiAqIGNvbnRleHQtbWVudS1ib3JkZXItc3R5bGU6XG4gKiBjb250ZXh0LW1lbnUtYm9yZGVyLXdpZHRoOlxuICogY29udGV4dC1tZW51LWJvcmRlci1yYWRpdXM6XG4gKiBjb250ZXh0LW1lbnUtdGV4dC1hbGlnbjpcbiAqIGNvbnRleHQtbWVudS1taW4td2lkdGg6XG4gKiBjb250ZXh0LW1lbnUtbWF4LXdpZHRoOlxuICogY29udGV4dC1tZW51LXNoYWRvdzpcbiAqICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1jb250ZXh0LW1lbnUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYi1tZW51IGNsYXNzPVwiY29udGV4dC1tZW51XCIgW2l0ZW1zXT1cImNvbnRleHQuaXRlbXNcIiBbdGFnXT1cImNvbnRleHQudGFnXCI+PC9uYi1tZW51PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNvbnRleHRNZW51Q29tcG9uZW50IGV4dGVuZHMgTmJQb3NpdGlvbmVkQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgTmJSZW5kZXJhYmxlQ29udGFpbmVyIHtcblxuICBASW5wdXQoKSBpdGVtczogTmJNZW51SXRlbVtdID0gW107XG4gIEBJbnB1dCgpIHRhZzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRleHQ6IHsgaXRlbXM6IE5iTWVudUl0ZW1bXSwgdGFnPzogc3RyaW5nIH0gPSB7IGl0ZW1zOiBbXSB9O1xuXG5cbiAgLyoqXG4gICAqIFRoZSBtZXRob2QgaXMgZW1wdHkgc2luY2Ugd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZyBhZGRpdGlvbmFsbHlcbiAgICogcmVuZGVyIGlzIGhhbmRsZWQgYnkgY2hhbmdlIGRldGVjdGlvblxuICAgKi9cbiAgcmVuZGVyQ29udGVudCgpIHt9XG59XG4iXX0=