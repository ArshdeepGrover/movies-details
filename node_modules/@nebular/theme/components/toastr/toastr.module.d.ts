/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ModuleWithProviders } from '@angular/core';
import { NbToastrConfig } from './toastr-config';
import * as i0 from "@angular/core";
import * as i1 from "./toastr-container.component";
import * as i2 from "./toast.component";
import * as i3 from "../shared/shared.module";
import * as i4 from "../cdk/overlay/overlay.module";
import * as i5 from "../icon/icon.module";
export declare class NbToastrModule {
    static forRoot(toastrConfig?: Partial<NbToastrConfig>): ModuleWithProviders<NbToastrModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbToastrModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbToastrModule, [typeof i1.NbToastrContainerComponent, typeof i2.NbToastComponent], [typeof i3.NbSharedModule, typeof i4.NbOverlayModule, typeof i5.NbIconModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbToastrModule>;
}
