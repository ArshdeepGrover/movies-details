import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./overlay-container";
import * as i2 from "./mapping";
import * as i3 from "../../shared/shared.module";
import * as i4 from "../adapter/adapter.module";
export declare class NbOverlayModule {
    static forRoot(): ModuleWithProviders<NbOverlayModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOverlayModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbOverlayModule, [typeof i1.NbPositionedContainerComponent, typeof i1.NbOverlayContainerComponent], [typeof i2.NbCdkMappingModule, typeof i3.NbSharedModule], [typeof i2.NbCdkMappingModule, typeof i4.NbCdkAdapterModule, typeof i1.NbOverlayContainerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbOverlayModule>;
}
