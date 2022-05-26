/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./tree-grid-cell.component";
/**
 * When using custom row toggle, apply this directive on your toggle to toggle row on element click.
 */
export class NbTreeGridRowToggleDirective {
    constructor(cell) {
        this.cell = cell;
    }
    toggleRow($event) {
        this.cell.toggleRow();
        $event.stopPropagation();
    }
}
NbTreeGridRowToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridRowToggleDirective, deps: [{ token: i1.NbTreeGridCellDirective }], target: i0.ɵɵFactoryTarget.Directive });
NbTreeGridRowToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridRowToggleDirective, selector: "[nbTreeGridRowToggle]", host: { listeners: { "click": "toggleRow($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridRowToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbTreeGridRowToggle]',
                }]
        }], ctorParameters: function () { return [{ type: i1.NbTreeGridCellDirective }]; }, propDecorators: { toggleRow: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLXJvdy10b2dnbGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3RyZWUtZ3JpZC90cmVlLWdyaWQtcm93LXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFHeEQ7O0dBRUc7QUFJSCxNQUFNLE9BQU8sNEJBQTRCO0lBT3ZDLFlBQW9CLElBQTZCO1FBQTdCLFNBQUksR0FBSixJQUFJLENBQXlCO0lBQUcsQ0FBQztJQUxyRCxTQUFTLENBQUMsTUFBTTtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7O3lIQUxVLDRCQUE0Qjs2R0FBNUIsNEJBQTRCOzJGQUE1Qiw0QkFBNEI7a0JBSHhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtpQkFDbEM7OEdBR0MsU0FBUztzQkFEUixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJUcmVlR3JpZENlbGxEaXJlY3RpdmUgfSBmcm9tICcuL3RyZWUtZ3JpZC1jZWxsLmNvbXBvbmVudCc7XG5cbi8qKlxuICogV2hlbiB1c2luZyBjdXN0b20gcm93IHRvZ2dsZSwgYXBwbHkgdGhpcyBkaXJlY3RpdmUgb24geW91ciB0b2dnbGUgdG8gdG9nZ2xlIHJvdyBvbiBlbGVtZW50IGNsaWNrLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmJUcmVlR3JpZFJvd1RvZ2dsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBOYlRyZWVHcmlkUm93VG9nZ2xlRGlyZWN0aXZlIHtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVSb3coJGV2ZW50KSB7XG4gICAgdGhpcy5jZWxsLnRvZ2dsZVJvdygpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2VsbDogTmJUcmVlR3JpZENlbGxEaXJlY3RpdmUpIHt9XG59XG4iXX0=