/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NB_DATE_ADAPTER, NbDatepickerDirective } from './datepicker.directive';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbCalendarModule } from '../calendar/calendar.module';
import { NbCalendarComponent } from '../calendar/calendar.component';
import { NbDatepickerContainerComponent } from './datepicker-container.component';
import { NbDatepickerComponent, NbRangepickerComponent, NbBasePickerComponent, } from './datepicker.component';
import { NbCalendarRangeComponent } from '../calendar/calendar-range.component';
import { NbCalendarRangeModule } from '../calendar/calendar-range.module';
import { NbDateAdapterService, NbDateTimeAdapterService, NbRangeAdapterService } from './datepicker-adapter';
import { NbCalendarWithTimeComponent } from './calendar-with-time.component';
import { NbCardModule } from '../card/card.module';
import { NbBaseCalendarModule } from '../calendar/base-calendar.module';
import { NbTimepickerModule } from '../timepicker/timepicker.module';
import { NbCalendarKitModule } from '../calendar-kit/calendar-kit.module';
import { NbDateTimePickerComponent } from './date-timepicker.component';
import * as i0 from "@angular/core";
export class NbDatepickerModule {
    static forRoot() {
        return {
            ngModule: NbDatepickerModule,
            providers: [
                DatePipe,
                {
                    provide: NB_DATE_ADAPTER,
                    multi: true,
                    useClass: NbDateAdapterService,
                },
                {
                    provide: NB_DATE_ADAPTER,
                    multi: true,
                    useClass: NbRangeAdapterService,
                },
                {
                    provide: NB_DATE_ADAPTER,
                    multi: true,
                    useClass: NbDateTimeAdapterService,
                },
            ],
        };
    }
}
NbDatepickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDatepickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbDatepickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDatepickerModule, declarations: [NbDatepickerDirective,
        NbDatepickerContainerComponent,
        NbCalendarWithTimeComponent,
        NbDateTimePickerComponent,
        NbDatepickerComponent,
        NbRangepickerComponent,
        NbBasePickerComponent], imports: [NbOverlayModule,
        NbCalendarModule,
        NbCalendarRangeModule,
        NbCardModule,
        NbBaseCalendarModule,
        NbTimepickerModule,
        NbCalendarKitModule], exports: [NbDatepickerDirective,
        NbDatepickerComponent,
        NbRangepickerComponent,
        NbDateTimePickerComponent,
        NbCalendarWithTimeComponent] });
NbDatepickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDatepickerModule, imports: [[
            NbOverlayModule,
            NbCalendarModule,
            NbCalendarRangeModule,
            NbCardModule,
            NbBaseCalendarModule,
            NbTimepickerModule,
            NbCalendarKitModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDatepickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbOverlayModule,
                        NbCalendarModule,
                        NbCalendarRangeModule,
                        NbCardModule,
                        NbBaseCalendarModule,
                        NbTimepickerModule,
                        NbCalendarKitModule,
                    ],
                    exports: [
                        NbDatepickerDirective,
                        NbDatepickerComponent,
                        NbRangepickerComponent,
                        NbDateTimePickerComponent,
                        NbCalendarWithTimeComponent,
                    ],
                    declarations: [
                        NbDatepickerDirective,
                        NbDatepickerContainerComponent,
                        NbCalendarWithTimeComponent,
                        NbDateTimePickerComponent,
                        NbDatepickerComponent,
                        NbRangepickerComponent,
                        NbBasePickerComponent,
                    ],
                    entryComponents: [
                        NbCalendarComponent,
                        NbCalendarRangeComponent,
                        NbDatepickerContainerComponent,
                        NbCalendarWithTimeComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFnQixRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsc0JBQXNCLEVBQ3RCLHFCQUFxQixHQUN0QixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFtQ3hFLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsUUFBUTtnQkFDUjtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFLG9CQUFvQjtpQkFDL0I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxRQUFRLEVBQUUsd0JBQXdCO2lCQUNuQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OytHQXZCVSxrQkFBa0I7Z0hBQWxCLGtCQUFrQixpQkFmM0IscUJBQXFCO1FBQ3JCLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIscUJBQXFCLGFBdEJyQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixtQkFBbUIsYUFHbkIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLDJCQUEyQjtnSEFrQmxCLGtCQUFrQixZQWhDcEI7WUFDUCxlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLHFCQUFxQjtZQUNyQixZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLGtCQUFrQjtZQUNsQixtQkFBbUI7U0FDcEI7MkZBd0JVLGtCQUFrQjtrQkFqQzlCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixxQkFBcUI7d0JBQ3JCLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHFCQUFxQjt3QkFDckIscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIsMkJBQTJCO3FCQUM1QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3dCQUNyQiw4QkFBOEI7d0JBQzlCLDJCQUEyQjt3QkFDM0IseUJBQXlCO3dCQUN6QixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3FCQUN0QjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2YsbUJBQW1CO3dCQUNuQix3QkFBd0I7d0JBQ3hCLDhCQUE4Qjt3QkFDOUIsMkJBQTJCO3FCQUM1QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5CX0RBVEVfQURBUFRFUiwgTmJEYXRlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9kYXRlcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOYk92ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyTW9kdWxlIH0gZnJvbSAnLi4vY2FsZW5kYXIvY2FsZW5kYXIubW9kdWxlJztcbmltcG9ydCB7IE5iQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuLi9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgTmJEYXRlcGlja2VyQ29tcG9uZW50LFxuICBOYlJhbmdlcGlja2VyQ29tcG9uZW50LFxuICBOYkJhc2VQaWNrZXJDb21wb25lbnQsXG59IGZyb20gJy4vZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDYWxlbmRhclJhbmdlQ29tcG9uZW50IH0gZnJvbSAnLi4vY2FsZW5kYXIvY2FsZW5kYXItcmFuZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2FsZW5kYXJSYW5nZU1vZHVsZSB9IGZyb20gJy4uL2NhbGVuZGFyL2NhbGVuZGFyLXJhbmdlLm1vZHVsZSc7XG5pbXBvcnQgeyBOYkRhdGVBZGFwdGVyU2VydmljZSwgTmJEYXRlVGltZUFkYXB0ZXJTZXJ2aWNlLCBOYlJhbmdlQWRhcHRlclNlcnZpY2UgfSBmcm9tICcuL2RhdGVwaWNrZXItYWRhcHRlcic7XG5pbXBvcnQgeyBOYkNhbGVuZGFyV2l0aFRpbWVDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXdpdGgtdGltZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDYXJkTW9kdWxlIH0gZnJvbSAnLi4vY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBOYkJhc2VDYWxlbmRhck1vZHVsZSB9IGZyb20gJy4uL2NhbGVuZGFyL2Jhc2UtY2FsZW5kYXIubW9kdWxlJztcbmltcG9ydCB7IE5iVGltZXBpY2tlck1vZHVsZSB9IGZyb20gJy4uL3RpbWVwaWNrZXIvdGltZXBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTmJDYWxlbmRhcktpdE1vZHVsZSB9IGZyb20gJy4uL2NhbGVuZGFyLWtpdC9jYWxlbmRhci1raXQubW9kdWxlJztcbmltcG9ydCB7IE5iRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtdGltZXBpY2tlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmJPdmVybGF5TW9kdWxlLFxuICAgIE5iQ2FsZW5kYXJNb2R1bGUsXG4gICAgTmJDYWxlbmRhclJhbmdlTW9kdWxlLFxuICAgIE5iQ2FyZE1vZHVsZSxcbiAgICBOYkJhc2VDYWxlbmRhck1vZHVsZSxcbiAgICBOYlRpbWVwaWNrZXJNb2R1bGUsXG4gICAgTmJDYWxlbmRhcktpdE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5iRGF0ZXBpY2tlckRpcmVjdGl2ZSxcbiAgICBOYkRhdGVwaWNrZXJDb21wb25lbnQsXG4gICAgTmJSYW5nZXBpY2tlckNvbXBvbmVudCxcbiAgICBOYkRhdGVUaW1lUGlja2VyQ29tcG9uZW50LFxuICAgIE5iQ2FsZW5kYXJXaXRoVGltZUNvbXBvbmVudCxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmJEYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgIE5iRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBOYkNhbGVuZGFyV2l0aFRpbWVDb21wb25lbnQsXG4gICAgTmJEYXRlVGltZVBpY2tlckNvbXBvbmVudCxcbiAgICBOYkRhdGVwaWNrZXJDb21wb25lbnQsXG4gICAgTmJSYW5nZXBpY2tlckNvbXBvbmVudCxcbiAgICBOYkJhc2VQaWNrZXJDb21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIE5iQ2FsZW5kYXJDb21wb25lbnQsXG4gICAgTmJDYWxlbmRhclJhbmdlQ29tcG9uZW50LFxuICAgIE5iRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBOYkNhbGVuZGFyV2l0aFRpbWVDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iRGF0ZXBpY2tlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmJEYXRlcGlja2VyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOYkRhdGVwaWNrZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGF0ZVBpcGUsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBOQl9EQVRFX0FEQVBURVIsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgdXNlQ2xhc3M6IE5iRGF0ZUFkYXB0ZXJTZXJ2aWNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTkJfREFURV9BREFQVEVSLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHVzZUNsYXNzOiBOYlJhbmdlQWRhcHRlclNlcnZpY2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBOQl9EQVRFX0FEQVBURVIsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgdXNlQ2xhc3M6IE5iRGF0ZVRpbWVBZGFwdGVyU2VydmljZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19