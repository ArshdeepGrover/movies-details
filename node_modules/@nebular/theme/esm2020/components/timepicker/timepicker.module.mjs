/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbListModule } from '../list/list.module';
import { NbCardModule } from '../card/card.module';
import { NbCalendarKitModule } from '../calendar-kit/calendar-kit.module';
import { NbTimePickerDirective } from './timepicker.directive';
import { NbTimePickerComponent } from './timepicker.component';
import { NbTimePickerCellComponent } from './timepicker-cell.component';
import { NbCalendarTimeModelService } from '../calendar-kit/services/calendar-time-model.service';
import { NB_TIME_PICKER_CONFIG } from './model';
import * as i0 from "@angular/core";
export class NbTimepickerModule {
    static forRoot(config = {}) {
        return {
            ngModule: NbTimepickerModule,
            providers: [{ provide: NB_TIME_PICKER_CONFIG, useValue: config }],
        };
    }
    static forChild(config = {}) {
        return {
            ngModule: NbTimepickerModule,
            providers: [{ provide: NB_TIME_PICKER_CONFIG, useValue: config }],
        };
    }
}
NbTimepickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTimepickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbTimepickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTimepickerModule, declarations: [NbTimePickerComponent, NbTimePickerCellComponent, NbTimePickerDirective], imports: [CommonModule,
        NbOverlayModule,
        NbListModule,
        NbCardModule,
        NbCalendarKitModule], exports: [NbTimePickerComponent, NbTimePickerCellComponent, NbTimePickerDirective] });
NbTimepickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTimepickerModule, providers: [NbCalendarTimeModelService], imports: [[
            CommonModule,
            NbOverlayModule,
            NbListModule,
            NbCardModule,
            NbCalendarKitModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTimepickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        NbOverlayModule,
                        NbListModule,
                        NbCardModule,
                        NbCalendarKitModule,
                    ],
                    providers: [NbCalendarTimeModelService],
                    exports: [NbTimePickerComponent, NbTimePickerCellComponent, NbTimePickerDirective],
                    declarations: [NbTimePickerComponent, NbTimePickerCellComponent, NbTimePickerDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdGltZXBpY2tlci90aW1lcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxxQkFBcUIsRUFBc0IsTUFBTSxTQUFTLENBQUM7O0FBY3BFLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUE2QixFQUFFO1FBQzVDLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQztTQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBNkIsRUFBRTtRQUM3QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7U0FDaEUsQ0FBQztJQUNKLENBQUM7OytHQWJVLGtCQUFrQjtnSEFBbEIsa0JBQWtCLGlCQUZkLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixhQVJwRixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO1FBQ1osbUJBQW1CLGFBR1gscUJBQXFCLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCO2dIQUd0RSxrQkFBa0IsYUFKbEIsQ0FBQywwQkFBMEIsQ0FBQyxZQVA5QjtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2YsWUFBWTtZQUNaLFlBQVk7WUFDWixtQkFBbUI7U0FDcEI7MkZBS1Usa0JBQWtCO2tCQVo5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixZQUFZO3dCQUNaLG1CQUFtQjtxQkFDcEI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixDQUFDO29CQUNsRixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxxQkFBcUIsQ0FBQztpQkFDeEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5iT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL2Nkay9vdmVybGF5L292ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IE5iTGlzdE1vZHVsZSB9IGZyb20gJy4uL2xpc3QvbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJDYXJkTW9kdWxlIH0gZnJvbSAnLi4vY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyS2l0TW9kdWxlIH0gZnJvbSAnLi4vY2FsZW5kYXIta2l0L2NhbGVuZGFyLWtpdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJUaW1lUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi90aW1lcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOYlRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3RpbWVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5iVGltZVBpY2tlckNlbGxDb21wb25lbnQgfSBmcm9tICcuL3RpbWVwaWNrZXItY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDYWxlbmRhclRpbWVNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi9jYWxlbmRhci1raXQvc2VydmljZXMvY2FsZW5kYXItdGltZS1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IE5CX1RJTUVfUElDS0VSX0NPTkZJRywgTmJUaW1lUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9tb2RlbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTmJPdmVybGF5TW9kdWxlLFxuICAgIE5iTGlzdE1vZHVsZSxcbiAgICBOYkNhcmRNb2R1bGUsXG4gICAgTmJDYWxlbmRhcktpdE1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTmJDYWxlbmRhclRpbWVNb2RlbFNlcnZpY2VdLFxuICBleHBvcnRzOiBbTmJUaW1lUGlja2VyQ29tcG9uZW50LCBOYlRpbWVQaWNrZXJDZWxsQ29tcG9uZW50LCBOYlRpbWVQaWNrZXJEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtOYlRpbWVQaWNrZXJDb21wb25lbnQsIE5iVGltZVBpY2tlckNlbGxDb21wb25lbnQsIE5iVGltZVBpY2tlckRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5iVGltZXBpY2tlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogTmJUaW1lUGlja2VyQ29uZmlnID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5iVGltZXBpY2tlck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmJUaW1lcGlja2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5CX1RJTUVfUElDS0VSX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ31dLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yQ2hpbGQoY29uZmlnOiBOYlRpbWVQaWNrZXJDb25maWcgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmJUaW1lcGlja2VyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOYlRpbWVwaWNrZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTkJfVElNRV9QSUNLRVJfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnfV0sXG4gICAgfTtcbiAgfVxufVxuIl19