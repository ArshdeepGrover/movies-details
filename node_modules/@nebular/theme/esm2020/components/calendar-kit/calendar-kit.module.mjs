/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NbSharedModule } from '../shared/shared.module';
import { NbButtonModule } from '../button/button.module';
import { NbIconModule } from '../icon/icon.module';
import { NbCalendarMonthModelService } from './services/calendar-month-model.service';
import { NbDateService } from './services/date.service';
import { NbCalendarDayCellComponent } from './components/calendar-day-picker/calendar-day-cell.component';
import { NbCalendarDayPickerComponent } from './components/calendar-day-picker/calendar-day-picker.component';
import { NbCalendarDaysNamesComponent } from './components/calendar-days-names/calendar-days-names.component';
import { NbCalendarMonthCellComponent } from './components/calendar-month-picker/calendar-month-cell.component';
import { NbCalendarMonthPickerComponent } from './components/calendar-month-picker/calendar-month-picker.component';
import { NbCalendarViewModeComponent } from './components/calendar-navigation/calendar-view-mode.component';
import { NbCalendarPageableNavigationComponent, } from './components/calendar-navigation/calendar-pageable-navigation.component';
import { NbCalendarPickerComponent } from './components/calendar-picker/calendar-picker.component';
import { NbCalendarPickerRowComponent } from './components/calendar-picker/calendar-picker-row.component';
import { NbCalendarYearCellComponent } from './components/calendar-year-picker/calendar-year-cell.component';
import { NbCalendarYearPickerComponent } from './components/calendar-year-picker/calendar-year-picker.component';
import { NbCalendarWeekNumberComponent } from './components/calendar-week-number/calendar-week-number.component';
import { NbNativeDateService } from './services/native-date.service';
import { NbCalendarYearModelService } from './services/calendar-year-model.service';
import { NbCalendarTimeModelService } from './services/calendar-time-model.service';
import { NbCalendarActionsComponent } from './components/calendar-actions/calendar-actions.component';
import * as i0 from "@angular/core";
const SERVICES = [
    { provide: NbDateService, useClass: NbNativeDateService },
    DatePipe,
    NbCalendarMonthModelService,
    NbCalendarYearModelService,
    NbCalendarTimeModelService,
];
const COMPONENTS = [
    NbCalendarViewModeComponent,
    NbCalendarPageableNavigationComponent,
    NbCalendarDaysNamesComponent,
    NbCalendarYearPickerComponent,
    NbCalendarMonthPickerComponent,
    NbCalendarDayPickerComponent,
    NbCalendarDayCellComponent,
    NbCalendarActionsComponent,
    NbCalendarMonthCellComponent,
    NbCalendarYearCellComponent,
    NbCalendarPickerRowComponent,
    NbCalendarPickerComponent,
    NbCalendarWeekNumberComponent,
];
/**
 * `NbCalendarKitModule` is a module that contains multiple useful components for building custom calendars.
 * So if you think our calendars is not enough powerful for you just use calendar-kit and build your own calendar!
 *
 * Available components:
 * - `NbCalendarDayPicker`
 * - `NbCalendarDayCell`
 * - `NbCalendarMonthPicker`
 * - `NbCalendarMonthCell`
 * - `NbCalendarYearPicker`
 * - `NbCalendarYearCell`
 * - `NbCalendarViewModeComponent`
 * - `NbCalendarPageableNavigation`
 *
 * For example you can easily build full calendar:
 * @stacked-example(Full calendar, calendar-kit/calendar-kit-full-calendar.component)
 * */
export class NbCalendarKitModule {
}
NbCalendarKitModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarKitModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbCalendarKitModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarKitModule, declarations: [NbCalendarViewModeComponent,
        NbCalendarPageableNavigationComponent,
        NbCalendarDaysNamesComponent,
        NbCalendarYearPickerComponent,
        NbCalendarMonthPickerComponent,
        NbCalendarDayPickerComponent,
        NbCalendarDayCellComponent,
        NbCalendarActionsComponent,
        NbCalendarMonthCellComponent,
        NbCalendarYearCellComponent,
        NbCalendarPickerRowComponent,
        NbCalendarPickerComponent,
        NbCalendarWeekNumberComponent], imports: [NbSharedModule, NbButtonModule, NbIconModule], exports: [NbCalendarViewModeComponent,
        NbCalendarPageableNavigationComponent,
        NbCalendarDaysNamesComponent,
        NbCalendarYearPickerComponent,
        NbCalendarMonthPickerComponent,
        NbCalendarDayPickerComponent,
        NbCalendarDayCellComponent,
        NbCalendarActionsComponent,
        NbCalendarMonthCellComponent,
        NbCalendarYearCellComponent,
        NbCalendarPickerRowComponent,
        NbCalendarPickerComponent,
        NbCalendarWeekNumberComponent] });
NbCalendarKitModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarKitModule, providers: [...SERVICES], imports: [[NbSharedModule, NbButtonModule, NbIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarKitModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbSharedModule, NbButtonModule, NbIconModule],
                    exports: [...COMPONENTS],
                    declarations: [...COMPONENTS],
                    providers: [...SERVICES],
                    entryComponents: [
                        NbCalendarDayCellComponent,
                        NbCalendarMonthCellComponent,
                        NbCalendarYearCellComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIta2l0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jYWxlbmRhci1raXQvY2FsZW5kYXIta2l0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzVHLE9BQU8sRUFDTCxxQ0FBcUMsR0FDdEMsTUFBTSx5RUFBeUUsQ0FBQztBQUNqRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUVqSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7QUFHdEcsTUFBTSxRQUFRLEdBQUc7SUFDZixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO0lBQ3pELFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDBCQUEwQjtDQUMzQixDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUc7SUFDakIsMkJBQTJCO0lBQzNCLHFDQUFxQztJQUNyQyw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsNkJBQTZCO0NBQzlCLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7Ozs7OztLQWdCSztBQVlMLE1BQU0sT0FBTyxtQkFBbUI7O2dIQUFuQixtQkFBbUI7aUhBQW5CLG1CQUFtQixpQkEzQzlCLDJCQUEyQjtRQUMzQixxQ0FBcUM7UUFDckMsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3Qiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLDZCQUE2QixhQXFCbEIsY0FBYyxFQUFFLGNBQWMsRUFBRSxZQUFZLGFBakN2RCwyQkFBMkI7UUFDM0IscUNBQXFDO1FBQ3JDLDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDN0IsOEJBQThCO1FBQzlCLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1QiwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLHlCQUF5QjtRQUN6Qiw2QkFBNkI7aUhBK0JsQixtQkFBbUIsYUFQbkIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxZQUhmLENBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUU7MkZBVTlDLG1CQUFtQjtrQkFYL0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBRTtvQkFDekQsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7b0JBQ3hCLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO29CQUM3QixTQUFTLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDeEIsZUFBZSxFQUFFO3dCQUNmLDBCQUEwQjt3QkFDMUIsNEJBQTRCO3dCQUM1QiwyQkFBMkI7cUJBQzVCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOYlNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE5iQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTmJJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5cbmltcG9ydCB7IE5iQ2FsZW5kYXJNb250aE1vZGVsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2FsZW5kYXItbW9udGgtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBOYkRhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRlLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBOYkNhbGVuZGFyRGF5Q2VsbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxlbmRhci1kYXktcGlja2VyL2NhbGVuZGFyLWRheS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyRGF5UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGFyLWRheS1waWNrZXIvY2FsZW5kYXItZGF5LXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDYWxlbmRhckRheXNOYW1lc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxlbmRhci1kYXlzLW5hbWVzL2NhbGVuZGFyLWRheXMtbmFtZXMuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2FsZW5kYXJNb250aENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXItbW9udGgtcGlja2VyL2NhbGVuZGFyLW1vbnRoLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2FsZW5kYXJNb250aFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxlbmRhci1tb250aC1waWNrZXIvY2FsZW5kYXItbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyVmlld01vZGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXItbmF2aWdhdGlvbi9jYWxlbmRhci12aWV3LW1vZGUuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIE5iQ2FsZW5kYXJQYWdlYWJsZU5hdmlnYXRpb25Db21wb25lbnQsXG59IGZyb20gJy4vY29tcG9uZW50cy9jYWxlbmRhci1uYXZpZ2F0aW9uL2NhbGVuZGFyLXBhZ2VhYmxlLW5hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2FsZW5kYXJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXItcGlja2VyL2NhbGVuZGFyLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDYWxlbmRhclBpY2tlclJvd0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxlbmRhci1waWNrZXIvY2FsZW5kYXItcGlja2VyLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDYWxlbmRhclllYXJDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGFyLXllYXItcGlja2VyL2NhbGVuZGFyLXllYXItY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDYWxlbmRhclllYXJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXIteWVhci1waWNrZXIvY2FsZW5kYXIteWVhci1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2FsZW5kYXJXZWVrTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGFyLXdlZWstbnVtYmVyL2NhbGVuZGFyLXdlZWstbnVtYmVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE5iTmF0aXZlRGF0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL25hdGl2ZS1kYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJDYWxlbmRhclllYXJNb2RlbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NhbGVuZGFyLXllYXItbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyVGltZU1vZGVsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2FsZW5kYXItdGltZS1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IE5iQ2FsZW5kYXJBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGFyLWFjdGlvbnMvY2FsZW5kYXItYWN0aW9ucy5jb21wb25lbnQnO1xuXG5cbmNvbnN0IFNFUlZJQ0VTID0gW1xuICB7IHByb3ZpZGU6IE5iRGF0ZVNlcnZpY2UsIHVzZUNsYXNzOiBOYk5hdGl2ZURhdGVTZXJ2aWNlIH0sXG4gIERhdGVQaXBlLFxuICBOYkNhbGVuZGFyTW9udGhNb2RlbFNlcnZpY2UsXG4gIE5iQ2FsZW5kYXJZZWFyTW9kZWxTZXJ2aWNlLFxuICBOYkNhbGVuZGFyVGltZU1vZGVsU2VydmljZSxcbl07XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIE5iQ2FsZW5kYXJWaWV3TW9kZUNvbXBvbmVudCxcbiAgTmJDYWxlbmRhclBhZ2VhYmxlTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgTmJDYWxlbmRhckRheXNOYW1lc0NvbXBvbmVudCxcbiAgTmJDYWxlbmRhclllYXJQaWNrZXJDb21wb25lbnQsXG4gIE5iQ2FsZW5kYXJNb250aFBpY2tlckNvbXBvbmVudCxcbiAgTmJDYWxlbmRhckRheVBpY2tlckNvbXBvbmVudCxcbiAgTmJDYWxlbmRhckRheUNlbGxDb21wb25lbnQsXG4gIE5iQ2FsZW5kYXJBY3Rpb25zQ29tcG9uZW50LFxuICBOYkNhbGVuZGFyTW9udGhDZWxsQ29tcG9uZW50LFxuICBOYkNhbGVuZGFyWWVhckNlbGxDb21wb25lbnQsXG4gIE5iQ2FsZW5kYXJQaWNrZXJSb3dDb21wb25lbnQsXG4gIE5iQ2FsZW5kYXJQaWNrZXJDb21wb25lbnQsXG4gIE5iQ2FsZW5kYXJXZWVrTnVtYmVyQ29tcG9uZW50LFxuXTtcblxuLyoqXG4gKiBgTmJDYWxlbmRhcktpdE1vZHVsZWAgaXMgYSBtb2R1bGUgdGhhdCBjb250YWlucyBtdWx0aXBsZSB1c2VmdWwgY29tcG9uZW50cyBmb3IgYnVpbGRpbmcgY3VzdG9tIGNhbGVuZGFycy5cbiAqIFNvIGlmIHlvdSB0aGluayBvdXIgY2FsZW5kYXJzIGlzIG5vdCBlbm91Z2ggcG93ZXJmdWwgZm9yIHlvdSBqdXN0IHVzZSBjYWxlbmRhci1raXQgYW5kIGJ1aWxkIHlvdXIgb3duIGNhbGVuZGFyIVxuICpcbiAqIEF2YWlsYWJsZSBjb21wb25lbnRzOlxuICogLSBgTmJDYWxlbmRhckRheVBpY2tlcmBcbiAqIC0gYE5iQ2FsZW5kYXJEYXlDZWxsYFxuICogLSBgTmJDYWxlbmRhck1vbnRoUGlja2VyYFxuICogLSBgTmJDYWxlbmRhck1vbnRoQ2VsbGBcbiAqIC0gYE5iQ2FsZW5kYXJZZWFyUGlja2VyYFxuICogLSBgTmJDYWxlbmRhclllYXJDZWxsYFxuICogLSBgTmJDYWxlbmRhclZpZXdNb2RlQ29tcG9uZW50YFxuICogLSBgTmJDYWxlbmRhclBhZ2VhYmxlTmF2aWdhdGlvbmBcbiAqXG4gKiBGb3IgZXhhbXBsZSB5b3UgY2FuIGVhc2lseSBidWlsZCBmdWxsIGNhbGVuZGFyOlxuICogQHN0YWNrZWQtZXhhbXBsZShGdWxsIGNhbGVuZGFyLCBjYWxlbmRhci1raXQvY2FsZW5kYXIta2l0LWZ1bGwtY2FsZW5kYXIuY29tcG9uZW50KVxuICogKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgTmJTaGFyZWRNb2R1bGUsIE5iQnV0dG9uTW9kdWxlLCBOYkljb25Nb2R1bGUgXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgcHJvdmlkZXJzOiBbLi4uU0VSVklDRVNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBOYkNhbGVuZGFyRGF5Q2VsbENvbXBvbmVudCxcbiAgICBOYkNhbGVuZGFyTW9udGhDZWxsQ29tcG9uZW50LFxuICAgIE5iQ2FsZW5kYXJZZWFyQ2VsbENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhcktpdE1vZHVsZSB7XG59XG4iXX0=