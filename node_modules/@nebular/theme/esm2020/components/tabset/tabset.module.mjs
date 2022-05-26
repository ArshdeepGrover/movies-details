/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbTabsetComponent, NbTabComponent } from './tabset.component';
import { NbBadgeModule } from '../badge/badge.module';
import { NbIconModule } from '../icon/icon.module';
import { NbTabContentDirective } from './tab-content.directive';
import { NbTabTitleDirective } from './tab-title.directive';
import * as i0 from "@angular/core";
const NB_TABSET_COMPONENTS = [NbTabsetComponent, NbTabComponent];
const NB_TABSET_DIRECTIVES = [NbTabContentDirective, NbTabTitleDirective];
export class NbTabsetModule {
}
NbTabsetModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTabsetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbTabsetModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTabsetModule, declarations: [NbTabsetComponent, NbTabComponent, NbTabContentDirective, NbTabTitleDirective], imports: [NbSharedModule, NbBadgeModule, NbIconModule], exports: [NbTabsetComponent, NbTabComponent, NbTabContentDirective, NbTabTitleDirective] });
NbTabsetModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTabsetModule, imports: [[NbSharedModule, NbBadgeModule, NbIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTabsetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbSharedModule, NbBadgeModule, NbIconModule],
                    declarations: [...NB_TABSET_COMPONENTS, ...NB_TABSET_DIRECTIVES],
                    exports: [...NB_TABSET_COMPONENTS, ...NB_TABSET_DIRECTIVES],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90YWJzZXQvdGFic2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTVELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUVqRSxNQUFNLG9CQUFvQixHQUFHLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQU8xRSxNQUFNLE9BQU8sY0FBYzs7MkdBQWQsY0FBYzs0R0FBZCxjQUFjLGlCQVRHLGlCQUFpQixFQUFFLGNBQWMsRUFFakMscUJBQXFCLEVBQUUsbUJBQW1CLGFBRzVELGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxhQUx6QixpQkFBaUIsRUFBRSxjQUFjLEVBRWpDLHFCQUFxQixFQUFFLG1CQUFtQjs0R0FPM0QsY0FBYyxZQUpoQixDQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDOzJGQUkzQyxjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO29CQUN0RCxZQUFZLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixFQUFFLEdBQUcsb0JBQW9CLENBQUM7b0JBQ2hFLE9BQU8sRUFBRSxDQUFDLEdBQUcsb0JBQW9CLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQztpQkFDNUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOYlRhYnNldENvbXBvbmVudCwgTmJUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYnNldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJCYWRnZU1vZHVsZSB9IGZyb20gJy4uL2JhZGdlL2JhZGdlLm1vZHVsZSc7XG5pbXBvcnQgeyBOYkljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IE5iVGFiQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5iVGFiVGl0bGVEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi10aXRsZS5kaXJlY3RpdmUnO1xuXG5jb25zdCBOQl9UQUJTRVRfQ09NUE9ORU5UUyA9IFtOYlRhYnNldENvbXBvbmVudCwgTmJUYWJDb21wb25lbnRdO1xuXG5jb25zdCBOQl9UQUJTRVRfRElSRUNUSVZFUyA9IFtOYlRhYkNvbnRlbnREaXJlY3RpdmUsIE5iVGFiVGl0bGVEaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmJTaGFyZWRNb2R1bGUsIE5iQmFkZ2VNb2R1bGUsIE5iSWNvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLk5CX1RBQlNFVF9DT01QT05FTlRTLCAuLi5OQl9UQUJTRVRfRElSRUNUSVZFU10sXG4gIGV4cG9ydHM6IFsuLi5OQl9UQUJTRVRfQ09NUE9ORU5UUywgLi4uTkJfVEFCU0VUX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBOYlRhYnNldE1vZHVsZSB7fVxuIl19