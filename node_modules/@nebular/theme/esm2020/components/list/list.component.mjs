import { Component, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * List is a container component that wraps `nb-list-item` component.
 *
 * Basic example:
 * @stacked-example(Simple list, list/simple-list-showcase.component)
 *
 * `nb-list-item` accepts arbitrary content, so you can create a list of any components.
 *
 * ### Installation
 *
 * Import `NbListModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbListModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * List of users:
 * @stacked-example(Users list, list/users-list-showcase.component)
 *
 * @styles
 *
 * list-item-divider-color:
 * list-item-divider-style:
 * list-item-divider-width:
 * list-item-padding:
 * list-item-text-color:
 * list-item-font-family:
 * list-item-font-size:
 * list-item-font-weight:
 * list-item-line-height:
 */
export class NbListComponent {
    constructor() {
        /**
         * Role attribute value
         *
         * @type {string}
         */
        this.role = 'list';
    }
}
NbListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbListComponent, selector: "nb-list", inputs: { role: "role" }, host: { properties: { "attr.role": "this.role" } }, ngImport: i0, template: `<ng-content select="nb-list-item"></ng-content>`, isInline: true, styles: [":host{display:flex;flex-direction:column;flex:1 1 auto;overflow:auto}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-list', template: `<ng-content select="nb-list-item"></ng-content>`, styles: [":host{display:flex;flex-direction:column;flex:1 1 auto;overflow:auto}\n"] }]
        }], propDecorators: { role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }] } });
/**
 * List item component is a grouping component that accepts arbitrary content.
 * It should be direct child of `nb-list` componet.
 */
export class NbListItemComponent {
    constructor() {
        /**
         * Role attribute value
         *
         * @type {string}
         */
        this.role = 'listitem';
    }
}
NbListItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbListItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbListItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbListItemComponent, selector: "nb-list-item", inputs: { role: "role" }, host: { properties: { "attr.role": "this.role" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:flex;align-items:center;flex-shrink:0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbListItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-list-item', template: `<ng-content></ng-content>`, styles: [":host{display:flex;align-items:center;flex-shrink:0}\n"] }]
        }], propDecorators: { role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQ0c7QUFNSCxNQUFNLE9BQU8sZUFBZTtJQUw1QjtRQU1FOzs7O1dBSUc7UUFHSCxTQUFJLEdBQUcsTUFBTSxDQUFDO0tBQ2Y7OzRHQVRZLGVBQWU7Z0dBQWYsZUFBZSw2SEFIaEIsaURBQWlEOzJGQUdoRCxlQUFlO2tCQUwzQixTQUFTOytCQUNFLFNBQVMsWUFDVCxpREFBaUQ7OEJBVzNELElBQUk7c0JBRkgsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyxXQUFXOztBQUkxQjs7O0dBR0c7QUFNSCxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBTUU7Ozs7V0FJRztRQUdILFNBQUksR0FBRyxVQUFVLENBQUM7S0FDbkI7O2dIQVRZLG1CQUFtQjtvR0FBbkIsbUJBQW1CLGtJQUhwQiwyQkFBMkI7MkZBRzFCLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxjQUFjLFlBQ2QsMkJBQTJCOzhCQVdyQyxJQUFJO3NCQUZILEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogTGlzdCBpcyBhIGNvbnRhaW5lciBjb21wb25lbnQgdGhhdCB3cmFwcyBgbmItbGlzdC1pdGVtYCBjb21wb25lbnQuXG4gKlxuICogQmFzaWMgZXhhbXBsZTpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU2ltcGxlIGxpc3QsIGxpc3Qvc2ltcGxlLWxpc3Qtc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqIGBuYi1saXN0LWl0ZW1gIGFjY2VwdHMgYXJiaXRyYXJ5IGNvbnRlbnQsIHNvIHlvdSBjYW4gY3JlYXRlIGEgbGlzdCBvZiBhbnkgY29tcG9uZW50cy5cbiAqXG4gKiAjIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogSW1wb3J0IGBOYkxpc3RNb2R1bGVgIHRvIHlvdXIgZmVhdHVyZSBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iTGlzdE1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKlxuICogTGlzdCBvZiB1c2VyczpcbiAqIEBzdGFja2VkLWV4YW1wbGUoVXNlcnMgbGlzdCwgbGlzdC91c2Vycy1saXN0LXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogbGlzdC1pdGVtLWRpdmlkZXItY29sb3I6XG4gKiBsaXN0LWl0ZW0tZGl2aWRlci1zdHlsZTpcbiAqIGxpc3QtaXRlbS1kaXZpZGVyLXdpZHRoOlxuICogbGlzdC1pdGVtLXBhZGRpbmc6XG4gKiBsaXN0LWl0ZW0tdGV4dC1jb2xvcjpcbiAqIGxpc3QtaXRlbS1mb250LWZhbWlseTpcbiAqIGxpc3QtaXRlbS1mb250LXNpemU6XG4gKiBsaXN0LWl0ZW0tZm9udC13ZWlnaHQ6XG4gKiBsaXN0LWl0ZW0tbGluZS1oZWlnaHQ6XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWxpc3QnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cIm5iLWxpc3QtaXRlbVwiPjwvbmctY29udGVudD5gLFxuICBzdHlsZVVybHM6IFsgJy4vbGlzdC5jb21wb25lbnQuc2NzcycgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJMaXN0Q29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFJvbGUgYXR0cmlidXRlIHZhbHVlXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHJvbGUgPSAnbGlzdCc7XG59XG5cbi8qKlxuICogTGlzdCBpdGVtIGNvbXBvbmVudCBpcyBhIGdyb3VwaW5nIGNvbXBvbmVudCB0aGF0IGFjY2VwdHMgYXJiaXRyYXJ5IGNvbnRlbnQuXG4gKiBJdCBzaG91bGQgYmUgZGlyZWN0IGNoaWxkIG9mIGBuYi1saXN0YCBjb21wb25ldC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVVcmxzOiBbICdsaXN0LWl0ZW0uY29tcG9uZW50LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iTGlzdEl0ZW1Db21wb25lbnQge1xuICAvKipcbiAgICogUm9sZSBhdHRyaWJ1dGUgdmFsdWVcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcm9sZSA9ICdsaXN0aXRlbSc7XG59XG4iXX0=