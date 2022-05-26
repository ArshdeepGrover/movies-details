import { Component } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the front card.
 */
export class NbCardFrontComponent {
}
NbCardFrontComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardFrontComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbCardFrontComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCardFrontComponent, selector: "nb-card-front", ngImport: i0, template: '<ng-content select="nb-card"></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardFrontComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-card-front',
                    template: '<ng-content select="nb-card"></ng-content>',
                }]
        }] });
/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the back card.
 */
export class NbCardBackComponent {
}
NbCardBackComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardBackComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbCardBackComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCardBackComponent, selector: "nb-card-back", ngImport: i0, template: '<ng-content select="nb-card"></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardBackComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-card-back',
                    template: '<ng-content select="nb-card"></ng-content>',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jYXJkL3NoYXJlZC9zaGFyZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDOzs7O0dBSUc7QUFLSCxNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO3FHQUFwQixvQkFBb0IscURBRnJCLDRDQUE0QzsyRkFFM0Msb0JBQW9CO2tCQUpoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsNENBQTRDO2lCQUN2RDs7QUFHRDs7OztHQUlHO0FBS0gsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtvR0FBbkIsbUJBQW1CLG9EQUZwQiw0Q0FBNEM7MkZBRTNDLG1CQUFtQjtrQkFKL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLDRDQUE0QztpQkFDdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBDb21wb25lbnQgaW50ZW5kZWQgdG8gYmUgdXNlZCB3aXRoaW4gdGhlIGA8bmItZmxpcC1jYXJkPmAgYW5kIGA8bmItcmV2ZWFsLWNhcmQ+YCBjb21wb25lbnRzLlxuICpcbiAqIFVzZSBpdCBhcyBhIGNvbnRhaW5lciBmb3IgdGhlIGZyb250IGNhcmQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNhcmQtZnJvbnQnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50IHNlbGVjdD1cIm5iLWNhcmRcIj48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYXJkRnJvbnRDb21wb25lbnQgeyB9XG5cbi8qKlxuICogQ29tcG9uZW50IGludGVuZGVkIHRvIGJlIHVzZWQgd2l0aGluIHRoZSBgPG5iLWZsaXAtY2FyZD5gIGFuZCBgPG5iLXJldmVhbC1jYXJkPmAgY29tcG9uZW50cy5cbiAqXG4gKiBVc2UgaXQgYXMgYSBjb250YWluZXIgZm9yIHRoZSBiYWNrIGNhcmQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNhcmQtYmFjaycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItY2FyZFwiPjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNhcmRCYWNrQ29tcG9uZW50IHsgfVxuIl19