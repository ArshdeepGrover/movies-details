/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbCalendarRangeComponent } from './calendar-range.component';
import { NbCalendarRangeDayCellComponent } from './calendar-range-day-cell.component';
import { NbCalendarRangeYearCellComponent } from './calendar-range-year-cell.component';
import { NbCalendarRangeMonthCellComponent } from './calendar-range-month-cell.component';
import { NbBaseCalendarModule } from './base-calendar.module';
import * as i0 from "@angular/core";
export class NbCalendarRangeModule {
}
NbCalendarRangeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarRangeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbCalendarRangeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarRangeModule, declarations: [NbCalendarRangeComponent,
        NbCalendarRangeDayCellComponent,
        NbCalendarRangeYearCellComponent,
        NbCalendarRangeMonthCellComponent], imports: [NbBaseCalendarModule], exports: [NbCalendarRangeComponent] });
NbCalendarRangeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarRangeModule, imports: [[NbBaseCalendarModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarRangeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbBaseCalendarModule],
                    exports: [NbCalendarRangeComponent],
                    declarations: [
                        NbCalendarRangeComponent,
                        NbCalendarRangeDayCellComponent,
                        NbCalendarRangeYearCellComponent,
                        NbCalendarRangeMonthCellComponent,
                    ],
                    entryComponents: [
                        NbCalendarRangeDayCellComponent,
                        NbCalendarRangeMonthCellComponent,
                        NbCalendarRangeYearCellComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcmFuZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLXJhbmdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFrQjlELE1BQU0sT0FBTyxxQkFBcUI7O2tIQUFyQixxQkFBcUI7bUhBQXJCLHFCQUFxQixpQkFYOUIsd0JBQXdCO1FBQ3hCLCtCQUErQjtRQUMvQixnQ0FBZ0M7UUFDaEMsaUNBQWlDLGFBTnpCLG9CQUFvQixhQUNwQix3QkFBd0I7bUhBYXZCLHFCQUFxQixZQWR2QixDQUFDLG9CQUFvQixDQUFDOzJGQWNwQixxQkFBcUI7a0JBZmpDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUNuQyxZQUFZLEVBQUU7d0JBQ1osd0JBQXdCO3dCQUN4QiwrQkFBK0I7d0JBQy9CLGdDQUFnQzt3QkFDaEMsaUNBQWlDO3FCQUNsQztvQkFDRCxlQUFlLEVBQUU7d0JBQ2YsK0JBQStCO3dCQUMvQixpQ0FBaUM7d0JBQ2pDLGdDQUFnQztxQkFDakM7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iQ2FsZW5kYXJSYW5nZUNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItcmFuZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2FsZW5kYXJSYW5nZURheUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXJhbmdlLWRheS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyUmFuZ2VZZWFyQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItcmFuZ2UteWVhci1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyUmFuZ2VNb250aENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXJhbmdlLW1vbnRoLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQmFzZUNhbGVuZGFyTW9kdWxlIH0gZnJvbSAnLi9iYXNlLWNhbGVuZGFyLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05iQmFzZUNhbGVuZGFyTW9kdWxlXSxcbiAgZXhwb3J0czogW05iQ2FsZW5kYXJSYW5nZUNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5iQ2FsZW5kYXJSYW5nZUNvbXBvbmVudCxcbiAgICBOYkNhbGVuZGFyUmFuZ2VEYXlDZWxsQ29tcG9uZW50LFxuICAgIE5iQ2FsZW5kYXJSYW5nZVllYXJDZWxsQ29tcG9uZW50LFxuICAgIE5iQ2FsZW5kYXJSYW5nZU1vbnRoQ2VsbENvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTmJDYWxlbmRhclJhbmdlRGF5Q2VsbENvbXBvbmVudCxcbiAgICBOYkNhbGVuZGFyUmFuZ2VNb250aENlbGxDb21wb25lbnQsXG4gICAgTmJDYWxlbmRhclJhbmdlWWVhckNlbGxDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iQ2FsZW5kYXJSYW5nZU1vZHVsZSB7XG59XG4iXX0=