/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbLayoutComponent, NbLayoutColumnComponent, NbLayoutFooterComponent, NbLayoutHeaderComponent, } from './layout.component';
import { NbRestoreScrollTopHelper } from './restore-scroll-top.service';
import { NbLtrDirective, NbRtlDirective } from './layout-direction.directive';
import * as i0 from "@angular/core";
const NB_LAYOUT_COMPONENTS = [
    NbLayoutComponent,
    NbLayoutColumnComponent,
    NbLayoutFooterComponent,
    NbLayoutHeaderComponent,
];
const NB_LAYOUT_DIRECTIVES = [NbLtrDirective, NbRtlDirective];
export class NbLayoutModule {
}
NbLayoutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbLayoutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutModule, declarations: [NbLayoutComponent,
        NbLayoutColumnComponent,
        NbLayoutFooterComponent,
        NbLayoutHeaderComponent, NbLtrDirective, NbRtlDirective], imports: [NbSharedModule], exports: [NbLayoutComponent,
        NbLayoutColumnComponent,
        NbLayoutFooterComponent,
        NbLayoutHeaderComponent, NbLtrDirective, NbRtlDirective] });
NbLayoutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutModule, providers: [NbRestoreScrollTopHelper], imports: [[NbSharedModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbSharedModule],
                    declarations: [...NB_LAYOUT_COMPONENTS, ...NB_LAYOUT_DIRECTIVES],
                    providers: [NbRestoreScrollTopHelper],
                    exports: [...NB_LAYOUT_COMPONENTS, ...NB_LAYOUT_DIRECTIVES],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0gsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLHVCQUF1QixHQUN4QixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXhFLE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRTlFLE1BQU0sb0JBQW9CLEdBQUc7SUFDM0IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0NBQ3hCLENBQUM7QUFFRixNQUFNLG9CQUFvQixHQUFHLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBUTlELE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBZHpCLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHVCQUF1QixFQUdLLGNBQWMsRUFBRSxjQUFjLGFBR2hELGNBQWMsYUFUeEIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsdUJBQXVCLEVBR0ssY0FBYyxFQUFFLGNBQWM7NEdBUS9DLGNBQWMsYUFIZCxDQUFDLHdCQUF3QixDQUFDLFlBRjVCLENBQUMsY0FBYyxDQUFDOzJGQUtkLGNBQWM7a0JBTjFCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUN6QixZQUFZLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixFQUFFLEdBQUcsb0JBQW9CLENBQUM7b0JBQ2hFLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUNyQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixFQUFFLEdBQUcsb0JBQW9CLENBQUM7aUJBQzVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7XG4gIE5iTGF5b3V0Q29tcG9uZW50LFxuICBOYkxheW91dENvbHVtbkNvbXBvbmVudCxcbiAgTmJMYXlvdXRGb290ZXJDb21wb25lbnQsXG4gIE5iTGF5b3V0SGVhZGVyQ29tcG9uZW50LFxufSBmcm9tICcuL2xheW91dC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOYlJlc3RvcmVTY3JvbGxUb3BIZWxwZXIgfSBmcm9tICcuL3Jlc3RvcmUtc2Nyb2xsLXRvcC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTmJMdHJEaXJlY3RpdmUsIE5iUnRsRGlyZWN0aXZlIH0gZnJvbSAnLi9sYXlvdXQtZGlyZWN0aW9uLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IE5CX0xBWU9VVF9DT01QT05FTlRTID0gW1xuICBOYkxheW91dENvbXBvbmVudCxcbiAgTmJMYXlvdXRDb2x1bW5Db21wb25lbnQsXG4gIE5iTGF5b3V0Rm9vdGVyQ29tcG9uZW50LFxuICBOYkxheW91dEhlYWRlckNvbXBvbmVudCxcbl07XG5cbmNvbnN0IE5CX0xBWU9VVF9ESVJFQ1RJVkVTID0gW05iTHRyRGlyZWN0aXZlLCBOYlJ0bERpcmVjdGl2ZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYlNoYXJlZE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLk5CX0xBWU9VVF9DT01QT05FTlRTLCAuLi5OQl9MQVlPVVRfRElSRUNUSVZFU10sXG4gIHByb3ZpZGVyczogW05iUmVzdG9yZVNjcm9sbFRvcEhlbHBlcl0sXG4gIGV4cG9ydHM6IFsuLi5OQl9MQVlPVVRfQ09NUE9ORU5UUywgLi4uTkJfTEFZT1VUX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBOYkxheW91dE1vZHVsZSB7fVxuIl19