import { ModuleWithProviders } from '@angular/core';
import { NbWindowConfig } from './window.options';
import * as i0 from "@angular/core";
import * as i1 from "./windows-container.component";
import * as i2 from "./window.component";
import * as i3 from "@angular/common";
import * as i4 from "../cdk/overlay/overlay.module";
import * as i5 from "../card/card.module";
import * as i6 from "../icon/icon.module";
import * as i7 from "../button/button.module";
export declare class NbWindowModule {
    static forRoot(defaultConfig?: Partial<NbWindowConfig>): ModuleWithProviders<NbWindowModule>;
    static forChild(defaultConfig?: Partial<NbWindowConfig>): ModuleWithProviders<NbWindowModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbWindowModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbWindowModule, [typeof i1.NbWindowsContainerComponent, typeof i2.NbWindowComponent], [typeof i3.CommonModule, typeof i4.NbOverlayModule, typeof i5.NbCardModule, typeof i6.NbIconModule, typeof i7.NbButtonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbWindowModule>;
}
