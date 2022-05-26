import * as i0 from "@angular/core";
import * as i1 from "./components/calendar-navigation/calendar-view-mode.component";
import * as i2 from "./components/calendar-navigation/calendar-pageable-navigation.component";
import * as i3 from "./components/calendar-days-names/calendar-days-names.component";
import * as i4 from "./components/calendar-year-picker/calendar-year-picker.component";
import * as i5 from "./components/calendar-month-picker/calendar-month-picker.component";
import * as i6 from "./components/calendar-day-picker/calendar-day-picker.component";
import * as i7 from "./components/calendar-day-picker/calendar-day-cell.component";
import * as i8 from "./components/calendar-actions/calendar-actions.component";
import * as i9 from "./components/calendar-month-picker/calendar-month-cell.component";
import * as i10 from "./components/calendar-year-picker/calendar-year-cell.component";
import * as i11 from "./components/calendar-picker/calendar-picker-row.component";
import * as i12 from "./components/calendar-picker/calendar-picker.component";
import * as i13 from "./components/calendar-week-number/calendar-week-number.component";
import * as i14 from "../shared/shared.module";
import * as i15 from "../button/button.module";
import * as i16 from "../icon/icon.module";
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
export declare class NbCalendarKitModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarKitModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbCalendarKitModule, [typeof i1.NbCalendarViewModeComponent, typeof i2.NbCalendarPageableNavigationComponent, typeof i3.NbCalendarDaysNamesComponent, typeof i4.NbCalendarYearPickerComponent, typeof i5.NbCalendarMonthPickerComponent, typeof i6.NbCalendarDayPickerComponent, typeof i7.NbCalendarDayCellComponent, typeof i8.NbCalendarActionsComponent, typeof i9.NbCalendarMonthCellComponent, typeof i10.NbCalendarYearCellComponent, typeof i11.NbCalendarPickerRowComponent, typeof i12.NbCalendarPickerComponent, typeof i13.NbCalendarWeekNumberComponent], [typeof i14.NbSharedModule, typeof i15.NbButtonModule, typeof i16.NbIconModule], [typeof i1.NbCalendarViewModeComponent, typeof i2.NbCalendarPageableNavigationComponent, typeof i3.NbCalendarDaysNamesComponent, typeof i4.NbCalendarYearPickerComponent, typeof i5.NbCalendarMonthPickerComponent, typeof i6.NbCalendarDayPickerComponent, typeof i7.NbCalendarDayCellComponent, typeof i8.NbCalendarActionsComponent, typeof i9.NbCalendarMonthCellComponent, typeof i10.NbCalendarYearCellComponent, typeof i11.NbCalendarPickerRowComponent, typeof i12.NbCalendarPickerComponent, typeof i13.NbCalendarWeekNumberComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbCalendarKitModule>;
}
