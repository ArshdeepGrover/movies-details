import { ModuleWithProviders } from '@angular/core';
import { NbTimePickerConfig } from './model';
import * as i0 from "@angular/core";
import * as i1 from "./timepicker.component";
import * as i2 from "./timepicker-cell.component";
import * as i3 from "./timepicker.directive";
import * as i4 from "@angular/common";
import * as i5 from "../cdk/overlay/overlay.module";
import * as i6 from "../list/list.module";
import * as i7 from "../card/card.module";
import * as i8 from "../calendar-kit/calendar-kit.module";
export declare class NbTimepickerModule {
    static forRoot(config?: NbTimePickerConfig): ModuleWithProviders<NbTimepickerModule>;
    static forChild(config?: NbTimePickerConfig): ModuleWithProviders<NbTimepickerModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTimepickerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbTimepickerModule, [typeof i1.NbTimePickerComponent, typeof i2.NbTimePickerCellComponent, typeof i3.NbTimePickerDirective], [typeof i4.CommonModule, typeof i5.NbOverlayModule, typeof i6.NbListModule, typeof i7.NbCardModule, typeof i8.NbCalendarKitModule], [typeof i1.NbTimePickerComponent, typeof i2.NbTimePickerCellComponent, typeof i3.NbTimePickerDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbTimepickerModule>;
}
