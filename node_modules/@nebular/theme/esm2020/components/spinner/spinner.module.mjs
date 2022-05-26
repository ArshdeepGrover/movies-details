/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbSpinnerComponent } from './spinner.component';
import { NbSpinnerDirective } from './spinner.directive';
import * as i0 from "@angular/core";
export class NbSpinnerModule {
}
NbSpinnerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSpinnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbSpinnerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSpinnerModule, declarations: [NbSpinnerComponent, NbSpinnerDirective], imports: [NbSharedModule], exports: [NbSpinnerComponent, NbSpinnerDirective] });
NbSpinnerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSpinnerModule, imports: [[
            NbSharedModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSpinnerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    exports: [NbSpinnerComponent, NbSpinnerDirective],
                    declarations: [NbSpinnerComponent, NbSpinnerDirective],
                    entryComponents: [NbSpinnerComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBV3pELE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBSFgsa0JBQWtCLEVBQUUsa0JBQWtCLGFBSG5ELGNBQWMsYUFFTixrQkFBa0IsRUFBRSxrQkFBa0I7NkdBSXJDLGVBQWUsWUFQakI7WUFDUCxjQUFjO1NBQ2Y7MkZBS1UsZUFBZTtrQkFSM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQztvQkFDakQsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7b0JBQ3RELGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zcGlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYlNwaW5uZXJEaXJlY3RpdmUgfSBmcm9tICcuL3NwaW5uZXIuZGlyZWN0aXZlJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmJTaGFyZWRNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtOYlNwaW5uZXJDb21wb25lbnQsIE5iU3Bpbm5lckRpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW05iU3Bpbm5lckNvbXBvbmVudCwgTmJTcGlubmVyRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTmJTcGlubmVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTmJTcGlubmVyTW9kdWxlIHt9XG4iXX0=