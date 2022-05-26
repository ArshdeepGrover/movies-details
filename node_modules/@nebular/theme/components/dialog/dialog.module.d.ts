/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ModuleWithProviders } from '@angular/core';
import { NbDialogConfig } from './dialog-config';
import * as i0 from "@angular/core";
import * as i1 from "./dialog-container";
import * as i2 from "../shared/shared.module";
import * as i3 from "../cdk/overlay/overlay.module";
export declare class NbDialogModule {
    static forRoot(dialogConfig?: Partial<NbDialogConfig>): ModuleWithProviders<NbDialogModule>;
    static forChild(dialogConfig?: Partial<NbDialogConfig>): ModuleWithProviders<NbDialogModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDialogModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbDialogModule, [typeof i1.NbDialogContainerComponent], [typeof i2.NbSharedModule, typeof i3.NbOverlayModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbDialogModule>;
}
