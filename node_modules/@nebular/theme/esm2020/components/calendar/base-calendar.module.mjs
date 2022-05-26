/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbCalendarKitModule } from '../calendar-kit/calendar-kit.module';
import { NbCardModule } from '../card/card.module';
import { NbBaseCalendarComponent } from './base-calendar.component';
import * as i0 from "@angular/core";
export class NbBaseCalendarModule {
}
NbBaseCalendarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBaseCalendarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbBaseCalendarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBaseCalendarModule, declarations: [NbBaseCalendarComponent], imports: [NbCalendarKitModule, NbSharedModule, NbCardModule], exports: [NbBaseCalendarComponent] });
NbBaseCalendarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBaseCalendarModule, imports: [[NbCalendarKitModule, NbSharedModule, NbCardModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBaseCalendarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbCalendarKitModule, NbSharedModule, NbCardModule],
                    exports: [NbBaseCalendarComponent],
                    declarations: [NbBaseCalendarComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jYWxlbmRhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FsZW5kYXIvYmFzZS1jYWxlbmRhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFRcEUsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLGlCQUZoQix1QkFBdUIsYUFGNUIsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLFlBQVksYUFDakQsdUJBQXVCO2tIQUd0QixvQkFBb0IsWUFKdEIsQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDOzJGQUlqRCxvQkFBb0I7a0JBTGhDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQztvQkFDNUQsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ2xDLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUN4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyS2l0TW9kdWxlIH0gZnJvbSAnLi4vY2FsZW5kYXIta2l0L2NhbGVuZGFyLWtpdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJDYXJkTW9kdWxlIH0gZnJvbSAnLi4vY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBOYkJhc2VDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1jYWxlbmRhci5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYkNhbGVuZGFyS2l0TW9kdWxlLCBOYlNoYXJlZE1vZHVsZSwgTmJDYXJkTW9kdWxlXSxcbiAgZXhwb3J0czogW05iQmFzZUNhbGVuZGFyQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTmJCYXNlQ2FsZW5kYXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOYkJhc2VDYWxlbmRhck1vZHVsZSB7XG59XG4iXX0=